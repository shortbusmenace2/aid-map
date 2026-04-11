// ---- SIDEBAR TOGGLE ----

function toggleSidebar() {
  const sidebar = document.getElementById('newsSidebar');
  const toggle = document.getElementById('sidebarToggle');
  const isOpen = sidebar.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.querySelector('.toggle-arrow').textContent = isOpen ? '▶' : '◀';
  // Invalidate map size so Leaflet redraws correctly
  setTimeout(() => map.invalidateSize(), 310);
}

// ============================================
// UKRAINE AID MAP — app.js (Leaflet edition)
// ============================================

const map = L.map('leaflet-map', {
  zoomControl: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  dragging: true,
  attributionControl: false,
  minZoom: 5,
  maxZoom: 9
});

map.setView([49.0, 31.5], 5);

const STYLES = {
  default:        { fillColor: '#222226', fillOpacity: 0.95, color: '#3a3a40', weight: 1.2, opacity: 1 },
  conflict:       { fillColor: '#2d1010', fillOpacity: 0.90, color: '#e05a2b', weight: 1.5, opacity: 1 },
  occupied:       { fillColor: '#1a1a1a', fillOpacity: 0.80, color: '#444',    weight: 1,   opacity: 0.8, dashArray: '5 4' },
  hover:          { fillColor: '#2e2e35', fillOpacity: 0.98, color: '#e8edf2', weight: 1.8, opacity: 1 },
  conflictHover:  { fillColor: '#3d1515', fillOpacity: 0.98, color: '#ff6b3d', weight: 2,   opacity: 1 },
  active:         { fillColor: '#333340', fillOpacity: 1,    color: '#ffffff', weight: 2,   opacity: 1 },
  conflictActive: { fillColor: '#4a1a1a', fillOpacity: 1,    color: '#ff6b3d', weight: 2,   opacity: 1 },
  cityDefault:    { fillColor: '#a8c4d8', fillOpacity: 0.25, color: '#a8c4d8', weight: 1.8, opacity: 1 },
  cityHover:      { fillColor: '#a8c4d8', fillOpacity: 0.5,  color: '#ffffff', weight: 2.2, opacity: 1 }
};

function getStyle(feature) {
  const p = feature.properties;
  if (p.occupied) return STYLES.occupied;
  if (p.isCity)   return STYLES.cityDefault;
  if (p.conflict) return STYLES.conflict;
  return STYLES.default;
}

let activeLayer = null;
let geoJsonLayer = null;

function onEachFeature(feature, layer) {
  const p = feature.properties;

  layer.bindTooltip(p.name, { sticky: true, direction: 'top', offset: [0, -6] });

  if (p.occupied) return;

  layer.on({
    mouseover() {
      if (activeLayer === layer) return;
      layer.setStyle(p.isCity ? STYLES.cityHover : p.conflict ? STYLES.conflictHover : STYLES.hover);
      layer.bringToFront();
    },
    mouseout() {
      if (activeLayer === layer) return;
      geoJsonLayer.resetStyle(layer);
    },
    click() {
      if (activeLayer && activeLayer !== layer) geoJsonLayer.resetStyle(activeLayer);
      if (activeLayer === layer) {
        geoJsonLayer.resetStyle(layer);
        activeLayer = null;
        showPlaceholder();
        return;
      }
      activeLayer = layer;
      layer.setStyle(p.conflict ? STYLES.conflictActive : p.isCity ? STYLES.cityHover : STYLES.active);
      layer.bringToFront();
      renderOblastPanel(p.id);
      if (window.innerWidth < 900) {
        document.getElementById('oblastPanel').scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

fetch('oblasts.geojson')
  .then(r => r.json())
  .then(data => {
    geoJsonLayer = L.geoJSON(data, { style: getStyle, onEachFeature }).addTo(map);
    map.setView([49.0, 32.0], 6);
  })
  .catch(err => {
    console.error('Failed to load GeoJSON:', err);
    document.getElementById('leaflet-map').innerHTML =
      '<div style="color:#c8a84b;padding:20px;font-family:IBM Plex Mono,monospace;font-size:0.75rem;">Map failed to load. Ensure oblasts.geojson is in the same directory and you\'re running a local server.</div>';
  });

// ---- OBLAST PANEL ----

function showPlaceholder() {
  document.getElementById('oblastPanel').innerHTML = `
    <div class="panel-placeholder">
      <div class="placeholder-icon">↑</div>
      <p>Select an oblast on the map to view NGOs operating in that region.</p>
      <p class="placeholder-sub">Conflict-affected oblasts are highlighted in amber.</p>
    </div>`;
}

function renderOblastPanel(id) {
  const data = NGO_DATA[id];
  const panel = document.getElementById('oblastPanel');

  if (!data) {
    panel.innerHTML = `<div class="panel-header"><div class="panel-title">${id}</div></div><div class="no-ngos">No NGO data available yet.</div>`;
    return;
  }

  const conflictBadge = data.conflict
    ? `<div class="conflict-badge">⚠ ACTIVE CONFLICT ZONE</div>`
    : data.occupied
    ? `<div class="conflict-badge" style="color:#888;border-color:rgba(128,128,128,0.4);background:rgba(80,80,80,0.15);">⚠ OCCUPIED TERRITORY</div>`
    : '';

  let ngoHTML = (!data.ngos || data.ngos.length === 0)
    ? `<div class="no-ngos">NGO listings for this oblast are being compiled. Check back soon.</div>`
    : `<div class="ngo-list">` + data.ngos.map(ngo => {
        let actions = '';
        if (ngo.donate)    actions += `<a href="${ngo.donate}" target="_blank" rel="noopener" class="ngo-action-btn btn-donate">💛 Donate</a>`;
        if (ngo.volunteer) actions += `<a href="${ngo.volunteer}" target="_blank" rel="noopener" class="ngo-action-btn btn-volunteer">🤝 Volunteer</a>`;
        if (ngo.learn)     actions += `<a href="${ngo.learn}" target="_blank" rel="noopener" class="ngo-action-btn btn-learn">→ Learn More</a>`;
        return `<div class="ngo-card">
          <div class="ngo-name">${ngo.name}</div>
          <div class="ngo-focus">${ngo.focus}</div>
          <div class="ngo-desc">${ngo.description}</div>
          <div class="ngo-actions">${actions}</div>
        </div>`;
      }).join('') + `</div>`;

  panel.innerHTML = `
    <div class="panel-header">
      <div><div class="panel-title">${data.name}</div>${conflictBadge}</div>
    </div>${ngoHTML}`;
}

// ---- NEWS FEED ----

let newsTimer = null;

async function fetchNews() {
  const feed = document.getElementById('newsFeed');
  const btn  = document.getElementById('refreshBtn');
  btn.classList.add('spinning');
  btn.textContent = '↻ Loading…';

  feed.innerHTML = `<div class="news-loading">
    <div class="loading-bar"></div><div class="loading-bar"></div>
    <div class="loading-bar"></div><div class="loading-bar"></div>
    <div class="loading-bar"></div></div>`;

  try {
    const allItems = [];
    const results = await Promise.allSettled(
      RSS_SOURCES.map(src =>
        fetch(src.url + `&count=8&t=${Date.now()}`).then(r => r.json()).then(data => ({ src, data }))
      )
    );
    for (const r of results) {
      if (r.status !== 'fulfilled') continue;
      const { src, data } = r.value;
      if (data.status !== 'ok' || !data.items) continue;
      const items = src.name === 'Reuters Ukraine'
        ? data.items.filter(i => /ukraine|kyiv|zelens|russia|donetsk|kharkiv|crimea|nato/i.test(i.title + ' ' + (i.description || '')))
        : data.items;
      items.slice(0, 5).forEach(i => allItems.push({ source: src.name, sourceColor: src.color, title: i.title, link: i.link, pubDate: i.pubDate }));
    }
    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    if (!allItems.length) throw new Error('No items');
    renderNews(allItems);
    updateTicker(allItems);
  } catch {
    feed.innerHTML = `<div class="news-error">
      <p>Live news feed unavailable.</p><br>
      <p>• <a href="https://kyivindependent.com" target="_blank">Kyiv Independent</a></p>
      <p>• <a href="https://www.pravda.com.ua/eng/" target="_blank">Ukrainska Pravda</a></p>
      <p>• <a href="https://www.reuters.com/world/europe/ukraine/" target="_blank">Reuters Ukraine</a></p>
      <p>• <a href="https://www.bbc.com/news/topics/c302m85q5ljt" target="_blank">BBC Ukraine</a></p>
    </div>`;
  }

  btn.classList.remove('spinning');
  btn.textContent = '↻ Refresh';
  clearTimeout(newsTimer);
  newsTimer = setTimeout(fetchNews, 30 * 60 * 1000);
}

function renderNews(items) {
  document.getElementById('newsFeed').innerHTML = items.map((item, i) => `
    <div class="news-item" style="animation-delay:${i * 0.04}s">
      <div class="news-source-tag" style="color:${item.sourceColor}">${item.source}</div>
      <div class="news-title"><a href="${item.link}" target="_blank" rel="noopener">${stripHTML(item.title)}</a></div>
      <div class="news-meta">${formatDate(item.pubDate)}</div>
    </div>`).join('');
}

function updateTicker(items) {
  document.getElementById('tickerTrack').textContent =
    items.slice(0, 8).map(i => stripHTML(i.title)).join('   ·   ');
  const now = new Date();
  document.getElementById('lastUpdated').textContent =
    `Updated ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

function formatDate(s) {
  if (!s) return '';
  try {
    const diff = Math.floor((new Date() - new Date(s)) / 60000);
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return new Date(s).toLocaleDateString([], { month: 'short', day: 'numeric' });
  } catch { return ''; }
}

function stripHTML(s) {
  return (s || '').replace(/<[^>]*>/g, '')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    .replace(/&#39;/g,"'").replace(/&quot;/g,'"').trim();
}

document.addEventListener('DOMContentLoaded', fetchNews);
