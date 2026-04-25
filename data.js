// ============================================
// NGO DATA — Ukraine Aid Map
// Add/edit NGOs per oblast here
// ============================================

const NGO_DATA = {

  // ---- CONFLICT-PRIORITY OBLASTS ----

  "kherson": {
    name: "Kherson Oblast",
    conflict: true,
    ngos: [
      {
        name: "Médecins Sans Frontières (MSF)",
        focus: "Emergency Medical",
        description: "Provides emergency medical care and psychological support in Kherson and surrounding areas affected by active conflict and flooding.",
        donate: "https://www.msf.org/ukraine",
        volunteer: null,
        learn: "https://www.msf.org/ukraine"
      },
      {
        name: "ACTED Ukraine",
        focus: "Humanitarian Relief",
        description: "Delivers food, water, hygiene kits, and emergency shelter materials to displaced civilians in Kherson Oblast.",
        donate: "https://www.acted.org/en/donate/",
        volunteer: null,
        learn: "https://www.acted.org/en/ukraine/"
      },
      {
        name: "Danish Refugee Council",
        focus: "Displacement & Shelter",
        description: "Assists internally displaced persons with shelter repair, cash assistance, and legal support in Kherson.",
        donate: "https://drc.ngo/donate",
        volunteer: "https://drc.ngo/about-drc/work-with-us/",
        learn: "https://drc.ngo/where-we-work/europe/ukraine/"
      },
      {
        name: "World Central Kitchen",
        focus: "Food Relief",
        description: "Provides hot meals and food distribution in liberated and front-line communities throughout Kherson Oblast.",
        donate: "https://wck.org/relief/ukraine",
        volunteer: "https://wck.org/volunteer",
        learn: "https://wck.org/"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      }
    ,
      {
        name: "Oxfam Ukraine",
        focus: "Clean Water & Sanitation",
        description: "Works through local partner organizations to restore water and sanitation infrastructure, provide hygiene kits, and deliver emergency relief to conflict-affected communities.",
        donate: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis",
        volunteer: null,
        learn: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis"
      },
      {
        name: "International Medical Corps",
        focus: "Clean Water & Health",
        description: "Provides clean water access, sanitation infrastructure repair, and primary healthcare to conflict-affected communities. Active in frontline oblasts with WASH and medical teams.",
        donate: "https://internationalmedicalcorps.org/donate/",
        volunteer: null,
        learn: "https://internationalmedicalcorps.org/country/ukraine/"
      }]
  },

  "zaporizhzhia": {
    name: "Zaporizhzhia Oblast",
    conflict: true,
    ngos: [
      {
        name: "International Committee of the Red Cross (ICRC)",
        focus: "Humanitarian Law & Aid",
        description: "Monitors conditions near the Zaporizhzhia Nuclear Power Plant, delivers aid, and works on prisoner exchanges and family tracing.",
        donate: "https://www.icrc.org/en/donate/ukraine",
        volunteer: null,
        learn: "https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine"
      },
      {
        name: "UN World Food Programme",
        focus: "Food Security",
        description: "Distributes food rations and cash assistance to conflict-affected families in Zaporizhzhia Oblast.",
        donate: "https://www.wfp.org/emergencies/ukraine-emergency",
        volunteer: null,
        learn: "https://www.wfp.org/countries/ukraine"
      },
      {
        name: "People in Need (PIN)",
        focus: "Multi-Sector Relief",
        description: "Provides emergency humanitarian assistance including food, non-food items, and psychosocial support near the front lines.",
        donate: "https://www.peopleinneed.net/ukraine-46/",
        volunteer: "https://www.peopleinneed.net/work-with-us/",
        learn: "https://www.peopleinneed.net/ukraine/"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      },
      {
        name: "International Rescue Committee",
        focus: "Mental Health & Protection",
        description: "Provides psychosocial support, legal aid, and economic assistance to conflict-affected Ukrainians. Active MHPSS programming in eastern and southern oblasts.",
        donate: "https://www.rescue.org/donate",
        volunteer: null,
        learn: "https://www.rescue.org/country/ukraine"
      }
    ,
      {
        name: "Oxfam Ukraine",
        focus: "Clean Water & Sanitation",
        description: "Works through local partner organizations to restore water and sanitation infrastructure, provide hygiene kits, and deliver emergency relief to conflict-affected communities.",
        donate: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis",
        volunteer: null,
        learn: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis"
      },
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      }]
  },

  "donetsk": {
    name: "Donetsk Oblast",
    conflict: true,
    ngos: [
      {
        name: "Médecins du Monde",
        focus: "Medical Humanitarian",
        description: "Operates mobile medical units along the front line in Donetsk Oblast, providing emergency care and mental health support.",
        donate: "https://www.medecinsdumonde.org/en/donate",
        volunteer: null,
        learn: "https://www.medecinsdumonde.org/en/ukraine"
      },
      {
        name: "Norwegian Refugee Council",
        focus: "Protection & Legal Aid",
        description: "Provides legal assistance, information, and shelter support to civilians remaining in or fleeing Donetsk Oblast.",
        donate: "https://www.nrc.no/ukraine",
        volunteer: "https://www.nrc.no/careers/",
        learn: "https://www.nrc.no/countries/europe/ukraine/"
      },
      {
        name: "Save the Children Ukraine",
        focus: "Child Protection",
        description: "Delivers psychosocial support, education in emergencies, and child-focused humanitarian aid in Donetsk Oblast.",
        donate: "https://www.savethechildren.org/us/where-we-work/ukraine",
        volunteer: null,
        learn: "https://www.savethechildren.org/us/where-we-work/ukraine"
      },
      {
        name: "Proliska",
        focus: "Local Humanitarian",
        description: "Ukrainian NGO providing targeted assistance — food packages, medication, and evacuation support — to elderly and disabled civilians in Donetsk.",
        donate: "https://proliska.org/",
        volunteer: null,
        learn: "https://proliska.org/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      },
      {
        name: "International Rescue Committee",
        focus: "Mental Health & Protection",
        description: "Provides psychosocial support, legal aid, and economic assistance to conflict-affected Ukrainians. Active MHPSS programming in eastern and southern oblasts.",
        donate: "https://www.rescue.org/donate",
        volunteer: null,
        learn: "https://www.rescue.org/country/ukraine"
      }
    ,
      {
        name: "UNDP Ukraine",
        focus: "Recovery & Reconstruction",
        description: "Leads community recovery, energy resilience, infrastructure repair, and economic stabilization programs across conflict-affected oblasts. Coordinates with Ukrainian government on long-term rebuilding.",
        donate: "https://www.undp.org/ukraine",
        volunteer: null,
        learn: "https://www.undp.org/ukraine"
      },
      {
        name: "World Central Kitchen",
        focus: "Food Relief & Logistics",
        description: "Provides hot meals and food distribution in liberated and front-line communities. Operates mobile kitchens and food logistics networks close to active conflict zones.",
        donate: "https://wck.org/relief/ukraine",
        volunteer: "https://wck.org/volunteer",
        learn: "https://wck.org/"
      },
      {
        name: "Truth Hounds",
        focus: "War Crimes Documentation",
        description: "Ukrainian NGO documenting and investigating war crimes, torture, and civilian killings. Conducts field missions, submits cases to the ICC, and trains Ukrainian prosecutors in international humanitarian law.",
        donate: "https://truth-hounds.org/en/support/",
        volunteer: null,
        learn: "https://truth-hounds.org/en/"
      },
      {
        name: "Kharkiv Human Rights Protection Group",
        focus: "Human Rights & Documentation",
        description: "Documents war crimes and human rights violations across eastern Ukraine. Provides legal aid to survivors and submits evidence to international courts.",
        donate: "https://donate.khpg.org/en/",
        volunteer: null,
        learn: "https://khpg.org/en"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      }]
  },

  "mykolaiv": {
    name: "Mykolaiv Oblast",
    conflict: true,
    ngos: [
      {
        name: "UNICEF Ukraine",
        focus: "Child & Family Services",
        description: "Restores water systems, provides safe learning spaces, and supplies essential kits to families with children in Mykolaiv Oblast.",
        donate: "https://www.unicef.org/ukraine",
        volunteer: null,
        learn: "https://www.unicef.org/ukraine"
      },
      {
        name: "Caritas Ukraine",
        focus: "Social & Humanitarian Aid",
        description: "Runs local aid centers providing food, shelter, psychological support, and evacuation logistics in Mykolaiv.",
        donate: "https://caritas.ua/donate/",
        volunteer: "https://caritas.ua/volunteer/",
        learn: "https://caritas.ua/"
      },
      {
        name: "UNHCR Ukraine",
        focus: "Refugee & IDP Protection",
        description: "Supports displaced persons in Mykolaiv with emergency cash assistance, legal protection, and resettlement services.",
        donate: "https://donate.unhcr.org/int/ukraine",
        volunteer: null,
        learn: "https://www.unhcr.org/ua/en"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      },
      {
        name: "Save the Children Ukraine",
        focus: "Child Mental Health",
        description: "Delivers psychosocial support and mental health services to war-affected children across 20 oblasts, with particular focus on conflict-zone communities.",
        donate: "https://www.savethechildren.org/us/where-we-work/ukraine",
        volunteer: null,
        learn: "https://www.savethechildren.org/us/where-we-work/ukraine"
      }
    ,
      {
        name: "Oxfam Ukraine",
        focus: "Clean Water & Sanitation",
        description: "Works through local partner organizations to restore water and sanitation infrastructure, provide hygiene kits, and deliver emergency relief to conflict-affected communities.",
        donate: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis",
        volunteer: null,
        learn: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis"
      },
      {
        name: "International Medical Corps",
        focus: "Clean Water & Health",
        description: "Provides clean water access, sanitation infrastructure repair, and primary healthcare to conflict-affected communities. Active in frontline oblasts with WASH and medical teams.",
        donate: "https://internationalmedicalcorps.org/donate/",
        volunteer: null,
        learn: "https://internationalmedicalcorps.org/country/ukraine/"
      },
      {
        name: "Truth Hounds",
        focus: "War Crimes Documentation",
        description: "Ukrainian NGO documenting and investigating war crimes, torture, and civilian killings. Conducts field missions, submits cases to the ICC, and trains Ukrainian prosecutors in international humanitarian law.",
        donate: "https://truth-hounds.org/en/support/",
        volunteer: null,
        learn: "https://truth-hounds.org/en/"
      },
      {
        name: "CARE International Ukraine",
        focus: "Women & Girls Protection",
        description: "Delivers GBV prevention, psychosocial support, and emergency relief specifically targeting women and girls in conflict-affected communities. Works with four women's rights partner organizations in Ukraine.",
        donate: "https://www.care.org/our-work/where-we-work/ukraine/",
        volunteer: null,
        learn: "https://www.care.org/our-work/where-we-work/ukraine/"
      }]
  },

  "odesa": {
    name: "Odesa Oblast",
    conflict: true,
    ngos: [
      {
        name: "Razom for Ukraine",
        focus: "Tactical & Medical Aid",
        description: "Delivers medical supplies and tactical equipment to Ukrainian defenders and civilians across Odesa and front-line regions.",
        donate: "https://razomforukraine.org/donate/",
        volunteer: "https://razomforukraine.org/volunteer/",
        learn: "https://razomforukraine.org/"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      }
    ,
      {
        name: "Oxfam Ukraine",
        focus: "Clean Water & Sanitation",
        description: "Works through local partner organizations to restore water and sanitation infrastructure, provide hygiene kits, and deliver emergency relief to conflict-affected communities.",
        donate: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis",
        volunteer: null,
        learn: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis"
      },
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "Greater Good Charities",
        focus: "Animal Shelter Support",
        description: "Delivers pet food to shelters and coordinates animal evacuation teams. Partners with local organizations to support shelters overwhelmed by abandoned animals in conflict-affected regions.",
        donate: "https://greatergood.org/our-response-to-ukraine-crisis",
        volunteer: null,
        learn: "https://greatergood.org/our-response-to-ukraine-crisis"
      },
      {
        name: "UNESCO Ukraine",
        focus: "Cultural Heritage Protection",
        description: "Protects Ukrainian World Heritage sites through the Blue Shield program, satellite damage monitoring, and emergency safeguarding partnerships with local institutions and NGOs.",
        donate: "https://www.unesco.org/en/ukraine-war/actions-timeline",
        volunteer: null,
        learn: "https://www.unesco.org/en/ukraine-war/actions-timeline"
      },
      {
        name: "Museum for Change NGO",
        focus: "Cultural Heritage (Local)",
        description: "Odesa-based NGO and UNESCO partner working to safeguard the Historic Centre of Odesa — a UNESCO World Heritage site. Coordinates emergency protection of the city's 19th-century architectural heritage.",
        donate: null,
        volunteer: null,
        learn: "https://www.unesco.org/en/ukraine-war/actions-timeline"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      },
      {
        name: "CARE International Ukraine",
        focus: "Women & Girls Protection",
        description: "Delivers GBV prevention, psychosocial support, and emergency relief specifically targeting women and girls in conflict-affected communities. Works with four women's rights partner organizations in Ukraine.",
        donate: "https://www.care.org/our-work/where-we-work/ukraine/",
        volunteer: null,
        learn: "https://www.care.org/our-work/where-we-work/ukraine/"
      }]
  },

  // ---- OTHER OBLASTS ----

  "kyiv-city": {
    name: "Kyiv (City)",
    conflict: true,
    ngos: [
      {
        name: "United Help Ukraine",
        focus: "Defense & Humanitarian",
        description: "Procures and delivers tactical gear, medical supplies, and civilian aid throughout Ukraine, coordinated from Kyiv.",
        donate: "https://unitedhelpukraine.org/donate",
        volunteer: "https://unitedhelpukraine.org/volunteer",
        learn: "https://unitedhelpukraine.org/"
      },
      {
        name: "Come Back Alive Foundation",
        focus: "Defense Support",
        description: "Funds Ukrainian Armed Forces with equipment, training, and intelligence support, primarily coordinated through Kyiv.",
        donate: "https://savelife.in.ua/en/donate/",
        volunteer: null,
        learn: "https://savelife.in.ua/en/"
      },
      {
        name: "UA Volunteers",
        focus: "Volunteer Coordination",
        description: "Platform connecting international and local volunteers with humanitarian organizations across Ukraine. Site currently undergoing updates — search 'UA Volunteers Ukraine' to find their latest presence.",
        donate: null,
        volunteer: null,
        learn: null
      },
      {
        name: "Serhiy Prytula Charity Foundation",
        focus: "Defense & Relief",
        description: "Raises funds for military equipment (including satellite systems) and civilian humanitarian relief. High transparency, rapid deployment.",
        donate: "https://prytulafoundation.org/en",
        volunteer: null,
        learn: "https://prytulafoundation.org/en"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "International Rescue Committee",
        focus: "Mental Health & Protection",
        description: "Provides psychosocial support, legal aid, and economic assistance to conflict-affected Ukrainians. Active MHPSS programming in eastern and southern oblasts.",
        donate: "https://www.rescue.org/donate",
        volunteer: null,
        learn: "https://www.rescue.org/country/ukraine"
      }
    ,
      {
        name: "Mercy Corps",
        focus: "Water, Relief & Economic Recovery",
        description: "Provides humanitarian assistance including water and energy infrastructure support, cash aid, and small business grants to conflict-affected Ukrainians through 33 local partner organizations.",
        donate: "https://www.mercycorps.org/donate",
        volunteer: null,
        learn: "https://www.mercycorps.org/where-we-work/ukraine"
      },
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "IFAW Ukraine",
        focus: "Animal Rescue & Wildlife",
        description: "Distributes pet food to frontline shelters, funds emergency animal evacuations, and supports wildlife rescue centers. Partners with UAnimals on large-scale operations.",
        donate: "https://www.ifaw.org/donate",
        volunteer: null,
        learn: "https://www.ifaw.org/international/news/emergency-aid-ukraine"
      },
      {
        name: "Zmina Human Rights Centre",
        focus: "Legal Aid & IDP Rights",
        description: "Kyiv-based NGO protecting rights of IDPs and conflict-affected civilians. Monitors arbitrary detentions, documents violations in occupied territories, and advocates internationally for Ukrainian political prisoners.",
        donate: null,
        volunteer: null,
        learn: "https://zmina.ua/en/"
      },
      {
        name: "La Strada Ukraine",
        focus: "Anti-Trafficking & GBV Hotline",
        description: "Operates Ukraine's only national 24/7 toll-free hotline for GBV, human trafficking, and gender discrimination (116 123 or 0 800 500 335). Provides legal aid and psychological support to survivors nationwide.",
        donate: null,
        volunteer: null,
        learn: "https://la-strada.org.ua/en/"
      }]
  },

  "kyiv-obl": {
    name: "Kyiv Oblast",
    conflict: true,
    ngos: [
      {
        name: "Serhiy Prytula Charity Foundation",
        focus: "Defense & Relief",
        description: "Active in reconstruction and support of communities in Kyiv Oblast recovering from Russian occupation.",
        donate: "https://prytulafoundation.org/en",
        volunteer: null,
        learn: "https://prytulafoundation.org/en"
      },
      {
        name: "ACTED Ukraine",
        focus: "Reconstruction & Relief",
        description: "Supports recovery and reconstruction projects in Kyiv Oblast communities affected by early-war occupation.",
        donate: "https://www.acted.org/en/donate/",
        volunteer: null,
        learn: "https://www.acted.org/en/ukraine/"
      }
    ,
      {
        name: "MoveUkraine",
        focus: "Housing & Reconstruction",
        description: "Ukrainian NGO rebuilding shelter and social housing for internally displaced persons. Renovates apartment complexes, constructs modular homes, and supports IDP integration into new communities.",
        donate: "https://moveukraine.org/index.php/donation/",
        volunteer: null,
        learn: "https://moveukraine.org/"
      },
      {
        name: "UNDP Ukraine",
        focus: "Recovery & Reconstruction",
        description: "Leads community recovery, energy resilience, infrastructure repair, and economic stabilization programs across conflict-affected oblasts. Coordinates with Ukrainian government on long-term rebuilding.",
        donate: "https://www.undp.org/ukraine",
        volunteer: null,
        learn: "https://www.undp.org/ukraine"
      },
      {
        name: "Sirius Shelter",
        focus: "Animal Shelter",
        description: "Ukraine's largest animal shelter, housing 3,000+ animals near Kyiv. Has operated throughout the war, providing emergency medical care, food, and refuge for animals displaced by conflict.",
        donate: "https://dogcat.com.ua/en",
        volunteer: null,
        learn: "https://dogcat.com.ua/en"
      }]
  },

  "kharkiv": {
    name: "Kharkiv Oblast",
    conflict: true,
    ngos: [
      {
        name: "Kharkiv Human Rights Protection Group",
        focus: "Human Rights & Documentation",
        description: "Documents war crimes and human rights violations in Kharkiv Oblast, providing legal aid to survivors.",
        donate: "https://donate.khpg.org/en/",
        volunteer: null,
        learn: "https://khpg.org/en"
      },
      {
        name: "Norwegian Refugee Council",
        focus: "Shelter & Legal Aid",
        description: "Provides emergency shelter repair and legal assistance to displaced and conflict-affected people in Kharkiv Oblast.",
        donate: "https://www.nrc.no/ukraine",
        volunteer: null,
        learn: "https://www.nrc.no/countries/europe/ukraine/"
      },
      {
        name: "MSF Ukraine",
        focus: "Emergency Medical",
        description: "Runs mobile clinics and hospital support projects throughout Kharkiv Oblast near active conflict zones.",
        donate: "https://www.msf.org/ukraine",
        volunteer: null,
        learn: "https://www.msf.org/ukraine"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      },
      {
        name: "Save the Children Ukraine",
        focus: "Child Mental Health",
        description: "Delivers psychosocial support and mental health services to war-affected children across 20 oblasts, with particular focus on conflict-zone communities.",
        donate: "https://www.savethechildren.org/us/where-we-work/ukraine",
        volunteer: null,
        learn: "https://www.savethechildren.org/us/where-we-work/ukraine"
      },
      {
        name: "International Rescue Committee",
        focus: "Mental Health & Protection",
        description: "Provides psychosocial support, legal aid, and economic assistance to conflict-affected Ukrainians. Active MHPSS programming in eastern and southern oblasts.",
        donate: "https://www.rescue.org/donate",
        volunteer: null,
        learn: "https://www.rescue.org/country/ukraine"
      }
    ,
      {
        name: "Oxfam Ukraine",
        focus: "Clean Water & Sanitation",
        description: "Works through local partner organizations to restore water and sanitation infrastructure, provide hygiene kits, and deliver emergency relief to conflict-affected communities.",
        donate: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis",
        volunteer: null,
        learn: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis"
      },
      {
        name: "Truth Hounds",
        focus: "War Crimes Documentation",
        description: "Ukrainian NGO documenting and investigating war crimes, torture, and civilian killings. Conducts field missions, submits cases to the ICC, and trains Ukrainian prosecutors in international humanitarian law.",
        donate: "https://truth-hounds.org/en/support/",
        volunteer: null,
        learn: "https://truth-hounds.org/en/"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      },
      {
        name: "CARE International Ukraine",
        focus: "Women & Girls Protection",
        description: "Delivers GBV prevention, psychosocial support, and emergency relief specifically targeting women and girls in conflict-affected communities. Works with four women's rights partner organizations in Ukraine.",
        donate: "https://www.care.org/our-work/where-we-work/ukraine/",
        volunteer: null,
        learn: "https://www.care.org/our-work/where-we-work/ukraine/"
      }]
  },

  "lviv": {
    name: "Lviv Oblast",
    conflict: true,
    ngos: [
      {
        name: "Lviv Volunteer Center",
        focus: "IDP Support & Coordination",
        description: "Coordinates humanitarian aid distribution and IDP resettlement services throughout western Ukraine, based in Lviv.",
        donate: null,
        volunteer: "https://ivc-ua.org/",
        learn: "https://ivc-ua.org/"
      },
      {
        name: "Polish Humanitarian Action (PAH)",
        focus: "IDP & Refugee Aid",
        description: "Provides psychosocial support, material aid, and integration services to internally displaced persons arriving in Lviv.",
        donate: "https://pah.org.pl/en/",
        volunteer: null,
        learn: "https://pah.org.pl/en/"
      }
    ,
      {
        name: "MoveUkraine",
        focus: "Housing & Reconstruction",
        description: "Ukrainian NGO rebuilding shelter and social housing for internally displaced persons. Renovates apartment complexes, constructs modular homes, and supports IDP integration into new communities.",
        donate: "https://moveukraine.org/index.php/donation/",
        volunteer: null,
        learn: "https://moveukraine.org/"
      },
      {
        name: "UNDP Ukraine",
        focus: "Recovery & Reconstruction",
        description: "Leads community recovery, energy resilience, infrastructure repair, and economic stabilization programs across conflict-affected oblasts. Coordinates with Ukrainian government on long-term rebuilding.",
        donate: "https://www.undp.org/ukraine",
        volunteer: null,
        learn: "https://www.undp.org/ukraine"
      },
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "IFAW Ukraine",
        focus: "Animal Rescue & Wildlife",
        description: "Distributes pet food to frontline shelters, funds emergency animal evacuations, and supports wildlife rescue centers. Partners with UAnimals on large-scale operations.",
        donate: "https://www.ifaw.org/donate",
        volunteer: null,
        learn: "https://www.ifaw.org/international/news/emergency-aid-ukraine"
      },
      {
        name: "FOUR PAWS International",
        focus: "Animal Welfare & Rescue",
        description: "Provides pet food to shelters, runs mobile sterilization clinics, and operates Bear Sanctuary Domazhyr in Lviv Oblast for rescued wildlife. Active across multiple Ukrainian regions.",
        donate: "https://www.four-paws.org/donate",
        volunteer: null,
        learn: "https://www.four-paws.org/campaigns-topics/topics/support-ukraine"
      },
      {
        name: "UNESCO Ukraine",
        focus: "Cultural Heritage Protection",
        description: "Protects Ukrainian World Heritage sites through the Blue Shield program, satellite damage monitoring, and emergency safeguarding partnerships with local institutions and NGOs.",
        donate: "https://www.unesco.org/en/ukraine-war/actions-timeline",
        volunteer: null,
        learn: "https://www.unesco.org/en/ukraine-war/actions-timeline"
      },
      {
        name: "Women's Perspectives",
        focus: "Women's Rights & GBV",
        description: "Ukrainian NGO founded in 1998 providing legal aid, shelter, and psychosocial support to survivors of gender-based violence. Trains psychotherapists and social workers across multiple oblasts.",
        donate: null,
        volunteer: null,
        learn: "https://www.women.lviv.ua/en/"
      }]
  },

  "dnipro": {
    name: "Dnipropetrovsk Oblast",
    conflict: true,
    ngos: [
      {
        name: "East SOS",
        focus: "IDP Assistance",
        description: "Ukrainian NGO (formerly Vostok SOS) providing assistance to IDPs from Eastern Ukraine — housing, legal aid, and psychological support — in Dnipro.",
        donate: "https://east-sos.org/en/donate/",
        volunteer: "https://east-sos.org/en/volunteer/",
        learn: "https://east-sos.org/en/"
      },
      {
        name: "World Vision Ukraine",
        focus: "Children & Families",
        description: "Provides child protection, food assistance, and psychosocial support to vulnerable families in Dnipropetrovsk Oblast.",
        donate: "https://www.worldvision.org/disaster-relief-news-stories/ukraine-war-crisis",
        volunteer: null,
        learn: "https://www.worldvision.org/disaster-relief-news-stories/ukraine-war-crisis"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      },
      {
        name: "International Rescue Committee",
        focus: "Mental Health & Protection",
        description: "Provides psychosocial support, legal aid, and economic assistance to conflict-affected Ukrainians. Active MHPSS programming in eastern and southern oblasts.",
        donate: "https://www.rescue.org/donate",
        volunteer: null,
        learn: "https://www.rescue.org/country/ukraine"
      }
    ,
      {
        name: "Oxfam Ukraine",
        focus: "Clean Water & Sanitation",
        description: "Works through local partner organizations to restore water and sanitation infrastructure, provide hygiene kits, and deliver emergency relief to conflict-affected communities.",
        donate: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis",
        volunteer: null,
        learn: "https://www.oxfam.org/en/what-we-do/emergencies/oxfams-response-ukraine-crisis"
      },
      {
        name: "International Medical Corps",
        focus: "Clean Water & Health",
        description: "Provides clean water access, sanitation infrastructure repair, and primary healthcare to conflict-affected communities. Active in frontline oblasts with WASH and medical teams.",
        donate: "https://internationalmedicalcorps.org/donate/",
        volunteer: null,
        learn: "https://internationalmedicalcorps.org/country/ukraine/"
      },
      {
        name: "CARE International Ukraine",
        focus: "Women & Girls Protection",
        description: "Delivers GBV prevention, psychosocial support, and emergency relief specifically targeting women and girls in conflict-affected communities. Works with four women's rights partner organizations in Ukraine.",
        donate: "https://www.care.org/our-work/where-we-work/ukraine/",
        volunteer: null,
        learn: "https://www.care.org/our-work/where-we-work/ukraine/"
      }]
  },

  "sumy": {
    name: "Sumy Oblast",
    conflict: true,
    ngos: [
      {
        name: "UNICEF Ukraine",
        focus: "Child Services & WASH",
        description: "Delivers water, sanitation, and child protection services to communities in Sumy Oblast near the border.",
        donate: "https://www.unicef.org/ukraine",
        volunteer: null,
        learn: "https://www.unicef.org/ukraine"
      },
      {
        name: "Voices of Children",
        focus: "Child Mental Health",
        description: "Ukraine's largest child mental health foundation. Provides psychosocial support, art therapy, and counseling to war-affected children and families through centers across Ukraine.",
        donate: "https://voices.org.ua/en/donat/",
        volunteer: null,
        learn: "https://voices.org.ua/en/"
      },
      {
        name: "Project HOPE Ukraine",
        focus: "Mental Health & WASH",
        description: "Operates MHPSS centers, mobile medical units, and psychosocial support programs across conflict-affected oblasts. Also provides clean water and health system support.",
        donate: "https://www.projecthope.org/donate/",
        volunteer: null,
        learn: "https://www.projecthope.org/region/europe/ukraine/"
      },
      {
        name: "Save the Children Ukraine",
        focus: "Child Mental Health",
        description: "Delivers psychosocial support and mental health services to war-affected children across 20 oblasts, with particular focus on conflict-zone communities.",
        donate: "https://www.savethechildren.org/us/where-we-work/ukraine",
        volunteer: null,
        learn: "https://www.savethechildren.org/us/where-we-work/ukraine"
      }
    ,
      {
        name: "MoveUkraine",
        focus: "Housing & Reconstruction",
        description: "Ukrainian NGO rebuilding shelter and social housing for internally displaced persons. Renovates apartment complexes, constructs modular homes, and supports IDP integration into new communities.",
        donate: "https://moveukraine.org/index.php/donation/",
        volunteer: null,
        learn: "https://moveukraine.org/"
      },
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      }]
  },

  "poltava": {
    name: "Poltava Oblast",
    conflict: true,
    ngos: [
      {
        name: "Caritas Ukraine",
        focus: "Social & Humanitarian Aid",
        description: "Provides social services and emergency assistance to vulnerable populations in Poltava Oblast.",
        donate: "https://caritas.ua/donate/",
        volunteer: "https://caritas.ua/volunteer/",
        learn: "https://caritas.ua/"
      }
    ,
      {
        name: "MoveUkraine",
        focus: "Housing & Reconstruction",
        description: "Ukrainian NGO rebuilding shelter and social housing for internally displaced persons. Renovates apartment complexes, constructs modular homes, and supports IDP integration into new communities.",
        donate: "https://moveukraine.org/index.php/donation/",
        volunteer: null,
        learn: "https://moveukraine.org/"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      }]
  },

  "cherkasy": {
    name: "Cherkasy Oblast",
    conflict: true,
    ngos: [
      {
        name: "UN Development Programme Ukraine",
        focus: "Recovery & Resilience",
        description: "Supports community recovery, economic resilience programs, and IDP integration in Cherkasy Oblast.",
        donate: "https://www.undp.org/ukraine",
        volunteer: null,
        learn: "https://www.undp.org/ukraine"
      }
    ,
      {
        name: "UNDP Ukraine",
        focus: "Recovery & Reconstruction",
        description: "Leads community recovery, energy resilience, infrastructure repair, and economic stabilization programs across conflict-affected oblasts. Coordinates with Ukrainian government on long-term rebuilding.",
        donate: "https://www.undp.org/ukraine",
        volunteer: null,
        learn: "https://www.undp.org/ukraine"
      }]
  },

  "vinnytsia": {
    name: "Vinnytsia Oblast",
    conflict: true,
    ngos: [
      {
        name: "International Organization for Migration (IOM)",
        focus: "Migration & IDP Support",
        description: "Provides transitional shelter and reintegration support to IDPs in Vinnytsia Oblast.",
        donate: "https://www.iom.int/donate",
        volunteer: null,
        learn: "https://ukraine.iom.int/"
      }
    ,
      {
        name: "UNDP Ukraine",
        focus: "Recovery & Reconstruction",
        description: "Leads community recovery, energy resilience, infrastructure repair, and economic stabilization programs across conflict-affected oblasts. Coordinates with Ukrainian government on long-term rebuilding.",
        donate: "https://www.undp.org/ukraine",
        volunteer: null,
        learn: "https://www.undp.org/ukraine"
      },
      {
        name: "World Central Kitchen",
        focus: "Food Relief & Logistics",
        description: "Provides hot meals and food distribution in liberated and front-line communities. Operates mobile kitchens and food logistics networks close to active conflict zones.",
        donate: "https://wck.org/relief/ukraine",
        volunteer: "https://wck.org/volunteer",
        learn: "https://wck.org/"
      }]
  },

  "zhytomyr": {
    name: "Zhytomyr Oblast",
    conflict: true,
    ngos: [
      {
        name: "Danish Refugee Council",
        focus: "Shelter & Protection",
        description: "Supports IDPs with housing assistance and legal protection services in Zhytomyr Oblast.",
        donate: "https://drc.ngo/donate",
        volunteer: null,
        learn: "https://drc.ngo/where-we-work/europe/ukraine/"
      }
    ,
      {
        name: "World Central Kitchen",
        focus: "Food Relief & Logistics",
        description: "Provides hot meals and food distribution in liberated and front-line communities. Operates mobile kitchens and food logistics networks close to active conflict zones.",
        donate: "https://wck.org/relief/ukraine",
        volunteer: "https://wck.org/volunteer",
        learn: "https://wck.org/"
      },
      {
        name: "FOUR PAWS International",
        focus: "Animal Welfare & Rescue",
        description: "Provides pet food to shelters, runs mobile sterilization clinics, and operates Bear Sanctuary Domazhyr in Lviv Oblast for rescued wildlife. Active across multiple Ukrainian regions.",
        donate: "https://www.four-paws.org/donate",
        volunteer: null,
        learn: "https://www.four-paws.org/campaigns-topics/topics/support-ukraine"
      }]
  },

  "chernihiv": {
    name: "Chernihiv Oblast",
    conflict: true,
    ngos: [
      {
        name: "ACTED Ukraine",
        focus: "Post-Conflict Recovery",
        description: "Leads reconstruction and emergency aid programs in communities in Chernihiv Oblast affected by early-war Russian occupation.",
        donate: "https://www.acted.org/en/donate/",
        volunteer: null,
        learn: "https://www.acted.org/en/ukraine/"
      }
    ,
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "World Monuments Fund",
        focus: "Cultural Heritage Preservation",
        description: "Funds Ukrainian heritage professionals and supplies materials to protect damaged cultural sites. Active projects include restoration of the Teacher's House in Kyiv and the Chernihiv Regional Library.",
        donate: "https://www.wmf.org/ukraine-heritage-response-fund",
        volunteer: null,
        learn: "https://www.wmf.org/ukraine-heritage-response-fund"
      },
      {
        name: "Truth Hounds",
        focus: "War Crimes Documentation",
        description: "Ukrainian NGO documenting and investigating war crimes, torture, and civilian killings. Conducts field missions, submits cases to the ICC, and trains Ukrainian prosecutors in international humanitarian law.",
        donate: "https://truth-hounds.org/en/support/",
        volunteer: null,
        learn: "https://truth-hounds.org/en/"
      },
      {
        name: "UN Women Ukraine",
        focus: "Gender Equality & GBV",
        description: "Provides humanitarian assistance, psychosocial support, legal aid, and economic empowerment to women and girls affected by conflict. Supports women-led organizations across all conflict-affected oblasts.",
        donate: "https://www.unwomen.org/en/donate",
        volunteer: null,
        learn: "https://ukraine.unwomen.org/en"
      }]
  },

  "luhansk": {
    name: "Luhansk Oblast",
    conflict: true,
    ngos: [
      {
        name: "Proliska",
        focus: "Local Humanitarian",
        description: "One of few organizations maintaining a presence and supply lines into conflict-affected areas of Luhansk Oblast.",
        donate: "https://proliska.org/",
        volunteer: null,
        learn: "https://proliska.org/"
      },
      {
        name: "ICRC Ukraine",
        focus: "Humanitarian Law",
        description: "Works on prisoner exchange monitoring, civilian protection, and essential goods delivery in Luhansk Oblast.",
        donate: "https://www.icrc.org/en/donate/ukraine",
        volunteer: null,
        learn: "https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine"
      }
    ,
      {
        name: "UAnimals",
        focus: "Animal Rescue",
        description: "Ukraine's leading frontline animal rescue organization. Evacuates animals from conflict zones, supplies food and veterinary medications to shelters, and runs free sterilization programs. Note: main website currently offline — donate via GlobalGiving link.",
        donate: "https://www.globalgiving.org/donate/101954/uanimals-cf/",
        volunteer: null,
        learn: "https://www.globalgiving.org/donate/101954/uanimals-cf/"
      },
      {
        name: "Kharkiv Human Rights Protection Group",
        focus: "Human Rights & Documentation",
        description: "Documents war crimes and human rights violations across eastern Ukraine. Provides legal aid to survivors and submits evidence to international courts.",
        donate: "https://donate.khpg.org/en/",
        volunteer: null,
        learn: "https://khpg.org/en"
      }]
  },

  "kirovograd": {
    name: "Kirovohrad Oblast",
    conflict: true,
    ngos: [
      {
        name: "UNHCR Ukraine",
        focus: "IDP Protection",
        description: "Supports displaced populations in Kirovohrad Oblast with shelter and emergency cash assistance.",
        donate: "https://donate.unhcr.org/int/ukraine",
        volunteer: null,
        learn: "https://www.unhcr.org/ua/en"
      }
    ]
  },

  "rivne": { name: "Rivne Oblast", conflict: false, ngos: [] },
  "ternopil": {
    name: "Ternopil Oblast",
    conflict: true,
    ngos: [
      {
        name: "MoveUkraine",
        focus: "Housing & Reconstruction",
        description: "Ukrainian NGO rebuilding shelter and social housing for internally displaced persons. Renovates apartment complexes, constructs modular homes, and supports IDP integration into new communities.",
        donate: "https://moveukraine.org/index.php/donation/",
        volunteer: null,
        learn: "https://moveukraine.org/"
      }
    ]
  },
  "khmelnytskyi": { name: "Khmelnytskyi Oblast", conflict: false, ngos: [] },
  "chernivtsi": { name: "Chernivtsi Oblast", conflict: false, ngos: [] },
  "ivano-frankivsk": { name: "Ivano-Frankivsk Oblast", conflict: false, ngos: [] },
  "zakarpattia": { name: "Zakarpattia Oblast", conflict: false, ngos: [] },

  "crimea": {
    name: "Crimea (Occupied)",
    conflict: false,
    occupied: true,
    ngos: [
      {
        name: "Crimea Human Rights Group",
        focus: "Human Rights Documentation",
        description: "Documents rights violations against Ukrainian and Tatar populations in occupied Crimea. Remote-based operations.",
        donate: null,
        volunteer: null,
        learn: "https://crimeahrg.org/en/main-page-3/"
      }
    ]
  }
};

// RSS sources — using rss2json proxy for CORS
const RSS_SOURCES = [
  {
      name: "Kyiv Independent",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://kyivindependent.com/news-archive/rss/&api_key=pert0s3ltlagqzep7o2ra37g4wmecjpb7p6be4uh",
    color: "#c8a84b"
  },
  {
    name: "RFE/RL Ukraine",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.rferl.org/api/zbgvmtl-vomx-tpeq_kmr&api_key=pert0s3ltlagqzep7o2ra37g4wmecjpb7p6be4uh",
    color: "#a8c4d8"
  },
  {
    name: "Ukrainska Pravda",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.pravda.com.ua/eng/rss/view_news/&api_key=pert0s3ltlagqzep7o2ra37g4wmecjpb7p6be4uh",
    color: "#f2ead8"
  },
 {
    name: "Euromaidan Press",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://euromaidanpress.com/feed&api_key=pert0s3ltlagqzep7o2ra37g4wmecjpb7p6be4uh",
    color: "#a8c4d8"
  },
  {
    name: "Ukrinform",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.ukrinform.net/rss/block-lastnews&api_key=pert0s3ltlagqzep7o2ra37g4wmecjpb7p6be4uh",
    color: "#a8c4d8"
  },
  {
    name: "Kyiv Post",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.kyivpost.com/feed&api_key=pert0s3ltlagqzep7o2ra37g4wmecjpb7p6be4uh",
    color: "#e8edf2"
  },
];
