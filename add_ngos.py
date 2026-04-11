#!/usr/bin/env python3
"""
add_ngos.py — Safe NGO insertion utility for data.js

Usage:
  from add_ngos import append_ngos
  content = append_ngos(content, 'kherson', [ngo_card_string, ...])

The function works by:
1. Finding the exact byte range of the target oblast section
   (from its opening key to the start of the NEXT oblast key)
2. Only searching for the ngos array closing bracket WITHIN that range
   — eliminating cross-oblast regex bleed entirely
"""

import re

# Ordered list of all oblast keys — used to find section boundaries
OBLAST_ORDER = [
    'kherson', 'zaporizhzhia', 'donetsk', 'mykolaiv', 'odesa',
    'kyiv-city', 'kyiv-obl', 'kharkiv', 'lviv', 'dnipro',
    'sumy', 'poltava', 'cherkasy', 'vinnytsia', 'zhytomyr',
    'chernihiv', 'luhansk', 'kirovograd', 'rivne', 'ternopil',
    'khmelnytskyi', 'chernivtsi', 'ivano-frankivsk', 'zakarpattia', 'crimea'
]

def get_section_bounds(content, oblast_id):
    """Return (start, end) byte positions of the given oblast's section."""
    idx = OBLAST_ORDER.index(oblast_id)
    
    # Start: position of this oblast's key
    start = content.find(f'"{oblast_id}":')
    if start == -1:
        raise ValueError(f"Oblast '{oblast_id}' not found in content")
    
    # End: position of next oblast's key, or end of NGO_DATA object
    if idx + 1 < len(OBLAST_ORDER):
        next_key = OBLAST_ORDER[idx + 1]
        end = content.find(f'"{next_key}":', start)
    else:
        # Last oblast — find the closing of NGO_DATA
        end = content.find('\n};\n', start)
    
    if end == -1:
        raise ValueError(f"Could not find end boundary for '{oblast_id}'")
    
    return start, end


def append_ngos(content, oblast_id, ngos):
    """
    Append one or more NGO card strings to the given oblast's ngos array.
    Safe — only searches within the exact section boundary.
    """
    try:
        start, end = get_section_bounds(content, oblast_id)
    except ValueError as e:
        print(f"✗ {e}")
        return content
    
    section = content[start:end]
    
    # Find the LAST closing bracket of the ngos array within this section
    # Handles both expanded `    ]\n  },` and compact `}]\n  },` formats
    
    # Try expanded format: `    ]\n  }`
    matches = list(re.finditer(r'    \]\n  \}', section))
    if matches:
        m = matches[-1]  # Use LAST match within section
        insert_pos = start + m.start() + len('    ]') - 1
        addition = ',\n' + ',\n'.join(ngos)
        content = content[:insert_pos] + addition + content[insert_pos:]
        print(f"✓ {oblast_id} updated ({len(ngos)} NGO(s) added)")
        return content
    
    # Try compact format: `}]\n  }`
    matches = list(re.finditer(r'      \}]\n  \}', section))
    if matches:
        m = matches[-1]
        insert_pos = start + m.start() + len('      }]') - 1
        addition = ',\n' + ',\n'.join(ngos)
        content = content[:insert_pos] + addition + content[insert_pos:]
        print(f"✓ {oblast_id} updated ({len(ngos)} NGO(s) added, compact format)")
        return content
    
    print(f"✗ Could not find ngos array closing bracket in '{oblast_id}'")
    return content


def verify_counts(content):
    """Print NGO count per oblast for verification."""
    sections = re.split(r'\n  "([a-z\-]+)":', content)
    i = 1
    while i < len(sections) - 1:
        key = sections[i]
        body = sections[i+1]
        count = body.count('name:') - 1  # subtract the oblast name field
        if count > 0:
            print(f"  {key}: {count} NGOs")
        i += 2


if __name__ == '__main__':
    print("add_ngos.py loaded — import append_ngos to use")
