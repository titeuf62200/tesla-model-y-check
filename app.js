const CATEGORIES = [
  {
    id: 'documents', icon: '▣', title: 'Documents & configuration', subtitle: 'VIN, application, clés et réglages',
    items: [
      ['vin', 'VIN et immatriculation', 'Vérifier la concordance du VIN avec les documents et la plaque.'],
      ['app', 'Application Tesla associée', 'Le véhicule apparaît bien dans le compte et les commandes à distance fonctionnent.'],
      ['keys', 'Clés / cartes remises', 'Présence des cartes-clés prévues et test de déverrouillage.'],
      ['config', 'Configuration commandée', 'Comparer couleur, intérieur, roues et options avec le bon de commande.'],
      ['profile', 'Profil conducteur', 'Régler le siège, les rétroviseurs et les préférences à l’arrêt.'],
      ['docs', 'Documents de livraison', 'Facture, certificat provisoire / carte grise selon le dossier, documents utiles.']
    ]
  },
  {
    id: 'body', icon: '◇', title: 'Carrosserie & vitrages', subtitle: 'Peinture, alignements et impacts',
    items: [
      ['paint', 'Peinture sur tout le véhicule', 'Inspecter à la lumière : rayures, éclats, traces, différences de teinte.'],
      ['panels', 'Alignement des panneaux', 'Portes, capot, hayon, ailes : jeux réguliers et absence de frottement.'],
      ['glass', 'Pare-brise, toit et vitrages', 'Pas d’impact, fissure, rayure profonde ou défaut visible.'],
      ['lights', 'Phares, feux et bandeaux', 'Optiques intactes, sans condensation anormale ni rayure.'],
      ['seals', 'Joints et garnitures extérieures', 'Joints bien plaqués, baguettes et plastiques correctement clipsés.'],
      ['doors', 'Ouverture des portes, capot et hayon', 'Ouverture/fermeture fluide, sans bruit ou effort anormal.']
    ]
  },
  {
    id: 'wheels', icon: '◉', title: 'Roues & pneumatiques', subtitle: 'Jantes, pneus et pression',
    items: [
      ['rims', 'État des 4 jantes', 'Aucune marque, rayure ou choc lié au transport.'],
      ['tires', 'Pneus et flancs', 'Pas de coupure, hernie ou anomalie visible ; même monte par essieu.'],
      ['pressure', 'Pression des pneus', 'Contrôler l’affichage TPMS après quelques mètres si nécessaire.'],
      ['tread', 'Bande de roulement', 'Vérifier visuellement les quatre pneus : pas de corps étranger ni usure anormale.'],
      ['valves', 'Valves et bouchons', 'Vérifier leur présence et leur état sans démonter les roues.'],
      ['wheelcovers', 'Enjoliveurs / caches', 'Tous présents, bien clipsés et non marqués.']
    ]
  },
  {
    id: 'interior', icon: '▤', title: 'Habitacle & finitions', subtitle: 'Sellerie, mobilier et ajustements',
    items: [
      ['seats', 'Sièges et sellerie', 'Pas de tache, coupure, pli anormal ; réglages électriques fonctionnels.'],
      ['dash', 'Planche de bord et garnitures', 'Pas de rayure, grincement évident, pièce décollée ou mal ajustée.'],
      ['belts', 'Ceintures et boucles', 'Enroulement fluide et verrouillage correct à chaque place.'],
      ['rear', 'Banquette arrière', 'Rabattement et verrouillage corrects.'],
      ['storage', 'Rangements, coffre et sous-coffre', 'Propreté, absence d’eau, moquette et éléments bien en place.'],
      ['frunk', 'Coffre avant', 'Ouverture, fermeture et finition correctes.']
    ]
  },
  {
    id: 'electronics', icon: '⌁', title: 'Écran, éclairage & électronique', subtitle: 'Fonctions essentielles et commandes',
    items: [
      ['screen', 'Écran central', 'Aucun pixel anormal, tactile fluide, luminosité et affichage corrects.'],
      ['cameras', 'Caméras et visualisation', 'Aucune image noire ou message d’erreur persistant.'],
      ['signals', 'Clignotants, feux et warnings', 'Tester toutes les commandes disponibles.'],
      ['wipers', 'Essuie-glaces et lave-glace', 'Fonctionnement correct et projection suffisante.'],
      ['windows', 'Vitres et rétroviseurs', 'Montée/descente, réglage et rabattement selon équipement.'],
      ['usb', 'USB et recharge téléphone', 'Tester les ports accessibles et la recharge sans fil si présente.']
    ]
  },
  {
    id: 'comfort', icon: '☀', title: 'Confort & connectivité', subtitle: 'Ventilation, son et commandes',
    items: [
      ['climate', 'Climatisation / chauffage', 'Tester air chaud, air froid et désembuage.'],
      ['audio', 'Audio et microphones', 'Écouter les haut-parleurs et tester un appel Bluetooth à l’arrêt.'],
      ['bluetooth', 'Téléphone et Bluetooth', 'Associer le téléphone et vérifier la connexion.'],
      ['seatcomfort', 'Confort des sièges', 'Tester chauffage ou ventilation uniquement si ces fonctions équipent le véhicule.'],
      ['steercontrols', 'Commandes du volant', 'Tester les molettes et commandes disponibles à l’arrêt.'],
      ['rearfeatures', 'Équipements arrière', 'Vérifier aérateurs, éclairage et écran arrière uniquement si présent.']
    ]
  },
  {
    id: 'charging', icon: '⚡', title: 'Recharge & accessoires', subtitle: 'Port de charge et éléments livrés',
    items: [
      ['chargeport', 'Trappe et port de charge', 'Ouverture correcte, connecteur propre, aucun dommage visible.'],
      ['charge', 'Test de démarrage de charge', 'Si possible, vérifier qu’une session de charge démarre normalement.'],
      ['cables', 'Câbles / accessoires prévus', 'Vérifier uniquement les accessoires inclus dans votre commande.'],
      ['chargelock', 'Verrouillage du câble', 'Lors du test de charge, vérifier le verrouillage puis l’arrêt et le déverrouillage par les commandes normales.'],
      ['charginginfo', 'Informations de recharge', 'Vérifier que le véhicule affiche le niveau de batterie et les réglages de charge.'],
      ['toweye', 'Anneau de remorquage / kit', 'Contrôler les éléments réellement prévus pour le véhicule.']
    ]
  },
  {
    id: 'drive', icon: '→', title: 'Avant de repartir', subtitle: 'Derniers tests et signalement',
    items: [
      ['warnings', 'Aucun voyant ou message d’erreur', 'L’écran ne doit pas afficher d’alerte inexpliquée.'],
      ['steering', 'Direction et freinage', 'Lors d’un déplacement autorisé : comportement normal, pas de vibration évidente.'],
      ['noise', 'Bruits anormaux', 'Écouter grincements, claquements ou sifflements manifestes.'],
      ['issueproof', 'Anomalies documentées', 'Photographier les défauts et obtenir une trace écrite / signalement dans l’app.'],
      ['handover', 'Réserves et prise en main', 'Faire préciser la prise en charge des réserves et poser les dernières questions au conseiller.'],
      ['chargelevel', 'Niveau de batterie suffisant', 'Vérifier l’autonomie disponible pour le trajet prévu.']
    ]
  }
];

const STORAGE_KEY = 'check-y-delivery-v1';
const checklistEl = document.getElementById('checklist');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalEyebrow = document.getElementById('modalEyebrow');
const generalNotes = document.getElementById('generalNotes');
const saveStateEl = document.getElementById('saveState');
let deferredInstallPrompt = null;
let state = loadState();

function loadState() {
  const clean = { items: {}, notes: '', vehicle: '' };
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!raw || typeof raw !== 'object') return clean;
    for (const { id } of allItems()) {
      const item = raw.items?.[id];
      if (item && ['pending', 'ok', 'issue', 'na'].includes(item.status)) {
        clean.items[id] = { status: item.status, note: typeof item.note === 'string' ? item.note : '' };
      }
    }
    clean.notes = typeof raw.notes === 'string' ? raw.notes : '';
    clean.vehicle = typeof raw.vehicle === 'string' ? raw.vehicle : '';
  } catch { /* Invalid or unavailable storage: start with a usable checklist. */ }
  return clean;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    saveStateIndicator();
  } catch {
    saveStateEl.textContent = 'Sauvegarde indisponible : exportez le bilan';
    saveStateEl.style.color = '#a32020';
  }
  updateProgress();
}

let saveTimer;
function saveStateIndicator() {
  saveStateEl.textContent = 'Sauvegardé';
  saveStateEl.style.color = '#1f9d62';
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { saveStateEl.style.opacity = '.75'; }, 900);
  saveStateEl.style.opacity = '1';
}

function allItems() {
  return CATEGORIES.flatMap(cat => cat.items.map(item => ({ cat, id: item[0], title: item[1], hint: item[2] })));
}

function render() {
  checklistEl.innerHTML = '';
  CATEGORIES.forEach((cat, index) => {
    const details = document.createElement('details');
    details.className = 'category';
    details.dataset.category = cat.id;
    if (index === 0) details.open = true;

    const summary = document.createElement('summary');
    summary.innerHTML = `
      <span class="category-icon" aria-hidden="true">${cat.icon}</span>
      <span class="category-copy"><strong>${index + 1}. ${cat.title}</strong><small>${cat.subtitle}</small></span>
      <span class="category-progress" id="cat-${cat.id}">0/${cat.items.length}</span>
      <span class="chevron" aria-hidden="true">›</span>
    `;
    details.appendChild(summary);

    const items = document.createElement('div');
    items.className = 'items';
    cat.items.forEach(([id, title, hint]) => {
      const entry = state.items[id] || { status: 'pending', note: '' };
      const row = document.createElement('div');
      row.className = 'check-item';
      row.dataset.item = id;
      row.innerHTML = `
        <div class="item-line">
          <div class="item-copy"><strong>${title}</strong><small>${hint}</small></div>
        </div>
        <div class="status-buttons" role="group" aria-label="État de ${title}">
          <button type="button" class="status-btn ${entry.status === 'ok' ? 'active' : ''}" data-status="ok">✓ OK</button>
          <button type="button" class="status-btn ${entry.status === 'issue' ? 'active' : ''}" data-status="issue">! À signaler</button>
          <button type="button" class="status-btn ${entry.status === 'pending' ? 'active' : ''}" data-status="pending">… À vérifier</button>
          <button type="button" class="status-btn ${entry.status === 'na' ? 'active' : ''}" data-status="na">Non équipé / N.A.</button>
        </div>
        <button type="button" class="text-button note-toggle" aria-expanded="${Boolean(entry.note) || entry.status === 'issue'}" aria-controls="note-${id}">✎ Note</button>
        <textarea id="note-${id}" aria-label="Note : ${title}" class="item-note ${entry.status === 'issue' || entry.note ? 'visible' : ''}" rows="2" placeholder="Ajouter une note sur ce point…">${escapeHtml(entry.note || '')}</textarea>
      `;

      const toggle = row.querySelector('.note-toggle');
      toggle.addEventListener('click', () => {
        const note = row.querySelector('.item-note');
        const visible = note.classList.toggle('visible');
        toggle.setAttribute('aria-expanded', String(visible));
        if (visible) note.focus();
      });
      row.querySelectorAll('.status-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', String(entry.status === btn.dataset.status));
        btn.addEventListener('click', () => {
          const current = state.items[id] || { note: '' };
          state.items[id] = { ...current, status: btn.dataset.status };
          row.querySelectorAll('.status-btn').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
          const note = row.querySelector('.item-note');
          note.classList.toggle('visible', btn.dataset.status === 'issue' || Boolean(note.value.trim()));
          toggle.setAttribute('aria-expanded', String(note.classList.contains('visible')));
          saveState();
        });
      });

      const note = row.querySelector('.item-note');
      note.addEventListener('input', () => {
        const current = state.items[id] || { status: 'pending' };
        state.items[id] = { ...current, note: note.value };
        saveStateEl.textContent = 'Enregistrement…';
        saveStateEl.style.color = '#8a929c';
        saveState();
      });

      items.appendChild(row);
    });
    details.appendChild(items);
    checklistEl.appendChild(details);
  });
  generalNotes.value = state.notes || '';
  document.getElementById('vehicle').value = state.vehicle || '';
  updateProgress();
}

function updateProgress() {
  const items = allItems();
  const total = items.length;
  let ok = 0, issue = 0, pending = 0, na = 0;
  items.forEach(item => {
    const status = state.items[item.id]?.status || 'pending';
    if (status === 'ok') ok++;
    else if (status === 'issue') issue++;
    else if (status === 'na') na++;
    else pending++;
  });
  const reviewed = ok + issue + na;
  const percent = Math.round((reviewed / total) * 100);
  document.getElementById('doneCount').textContent = reviewed;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('okCount').textContent = ok;
  document.getElementById('naCount').textContent = na;
  document.getElementById('issueCount').textContent = issue;
  document.getElementById('pendingCount').textContent = pending;
  document.getElementById('progressPercent').textContent = `${percent}%`;
  document.getElementById('progressBar').style.width = `${percent}%`;
  const ring = document.getElementById('progressRing');
  ring.style.background = `conic-gradient(#d71920 ${percent * 3.6}deg, #eceff2 0deg)`;
  ring.setAttribute('aria-label', `${percent} pour cent terminé`);

  CATEGORIES.forEach(cat => {
    const done = cat.items.filter(([id]) => (state.items[id]?.status || 'pending') !== 'pending').length;
    const el = document.getElementById(`cat-${cat.id}`);
    if (el) el.textContent = `${done}/${cat.items.length}`;
  });
}

function buildReport() {
  const items = allItems();
  const issues = items.filter(item => state.items[item.id]?.status === 'issue');
  const pending = items.filter(item => (state.items[item.id]?.status || 'pending') === 'pending');
  const na = items.filter(item => state.items[item.id]?.status === 'na').length;
  const ok = items.length - issues.length - pending.length - na;
  const date = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(new Date());
  const lines = [
    'MODEL Y CHECK — RAPPORT DE RÉCEPTION',
    `Date : ${date}`,
    `Véhicule / livraison : ${state.vehicle || 'Non renseigné'}`,
    `Contrôles : ${items.length} · OK : ${ok} · À signaler : ${issues.length} · À vérifier : ${pending.length} · Non applicable : ${na}`,
    ''
  ];
  if (issues.length) {
    lines.push('POINTS À SIGNALER');
    issues.forEach((item, i) => lines.push(`${i + 1}. ${item.title}${state.items[item.id]?.note ? ` — ${state.items[item.id].note.trim()}` : ''}`));
    lines.push('');
  }
  if (pending.length) {
    lines.push('ENCORE À VÉRIFIER');
    pending.forEach((item, i) => lines.push(`${i + 1}. ${item.title}`));
    lines.push('');
  }
  if (state.notes?.trim()) {
    lines.push('NOTES GÉNÉRALES');
    lines.push(state.notes.trim());
    lines.push('');
  }
  lines.push('DÉTAIL DES 48 CONTRÔLES');
  const labels = { ok: 'OK', issue: 'À SIGNALER', pending: 'À VÉRIFIER', na: 'NON APPLICABLE' };
  CATEGORIES.forEach(cat => {
    lines.push('', cat.title);
    cat.items.forEach(([id, title]) => {
      const entry = state.items[id] || { status: 'pending' };
      lines.push(`[${labels[entry.status]}] ${title}${entry.note ? ' — ' + entry.note : ''}`);
    });
  });
  lines.push('', 'Application indépendante — aide-mémoire de réception.');
  return { text: lines.join('\n'), issues, pending, ok, na, total: items.length, date };
}

function showReport({ issuesOnly = false } = {}) {
  const report = buildReport();
  modalEyebrow.textContent = issuesOnly ? 'Anomalies' : 'Bilan';
  modalTitle.textContent = issuesOnly ? 'Points à signaler' : 'Rapport de réception';
  const source = issuesOnly ? report.issues : null;
  if (issuesOnly) {
    modalContent.innerHTML = source.length ? `<div class="issue-list">${source.map(item => `<div class="issue-row"><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(state.items[item.id]?.note || 'Aucune note ajoutée.')}</small></div>`).join('')}</div>` : '<div class="empty-state">Aucun point n’est marqué « à signaler ».</div>';
  } else {
    modalContent.innerHTML = `
      <div class="report-block"><strong>${report.ok} OK · ${report.issues.length} à signaler · ${report.pending.length} à vérifier · ${report.na} N.A.</strong><p>${escapeHtml(report.date)}</p></div>
      ${report.issues.length ? `<div class="report-block"><strong>Points à signaler</strong><p>${report.issues.map(i => `• ${escapeHtml(i.title)}${state.items[i.id]?.note ? ` — ${escapeHtml(state.items[i.id].note)}` : ''}`).join('<br>')}</p></div>` : '<div class="report-block"><strong>Aucune anomalie signalée</strong><p>Les éléments contrôlés sont marqués OK ou restent à vérifier.</p></div>'}
      ${report.pending.length ? `<div class="report-block"><strong>Encore à vérifier</strong><p>${report.pending.map(i => `• ${escapeHtml(i.title)}`).join('<br>')}</p></div>` : ''}
      <div class="report-block"><strong>Bilan complet</strong><pre class="report-text">${escapeHtml(report.text)}</pre></div>
      ${state.notes?.trim() ? `<div class="report-block"><strong>Notes générales</strong><p>${escapeHtml(state.notes).replace(/\n/g,'<br>')}</p></div>` : ''}
    `;
  }
  modal.showModal();
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
}

generalNotes.addEventListener('input', () => {
  state.notes = generalNotes.value;
  saveStateEl.textContent = 'Enregistrement…';
  saveStateEl.style.color = '#8a929c';
  saveState();
});

document.getElementById('expandAllButton').addEventListener('click', event => {
  const details = [...document.querySelectorAll('.category')];
  const shouldOpen = details.some(d => !d.open);
  details.forEach(d => d.open = shouldOpen);
  event.currentTarget.textContent = shouldOpen ? 'Tout fermer' : 'Tout ouvrir';
});

document.getElementById('issuesButton').addEventListener('click', () => showReport({ issuesOnly: true }));
document.getElementById('reportButton').addEventListener('click', () => showReport());
document.getElementById('finalizeButton').addEventListener('click', () => showReport());

document.getElementById('copyReportButton').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(buildReport().text);
    document.getElementById('copyReportButton').textContent = 'Copié ✓';
    setTimeout(() => document.getElementById('copyReportButton').textContent = 'Copier', 1200);
  } catch {
    alert('Copie automatique impossible sur ce navigateur. Utilise le bouton Partager.');
  }
});

document.getElementById('shareReportButton').addEventListener('click', async () => {
  const text = buildReport().text;
  if (navigator.share) {
    try { await navigator.share({ title: 'Rapport de réception — Model Y Check', text }); } catch (error) { if (error.name !== 'AbortError') alert('Partage indisponible. Utilisez Télécharger.'); }
  } else {
    try { await navigator.clipboard.writeText(text); alert('Rapport copié dans le presse-papiers.'); } catch (_) { alert('Copie indisponible. Utilisez Télécharger.'); }
  }
});

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  document.getElementById('installButton').hidden = false;
});

document.getElementById('installButton').addEventListener('click', async () => {
  if (deferredInstallPrompt) {
    await deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  } else document.getElementById('installDialog').showModal();
});

function downloadReport() {
  const url = URL.createObjectURL(new Blob([buildReport().text], { type: 'text/plain;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = `Model-Y-Check-${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
document.getElementById('downloadReportButton').addEventListener('click', downloadReport);
document.getElementById('vehicle').addEventListener('input', event => { state.vehicle = event.target.value; saveState(); });
document.getElementById('resetButton').addEventListener('click', () => {
  if (confirm('Effacer les 48 contrôles et toutes les notes sur cet appareil ? Téléchargez d’abord le bilan si vous souhaitez le conserver.')) {
    state = { items: {}, notes: '', vehicle: '' };
    saveState();
    render();
  }
});
let offlineReady = false;
function connectionStatus() {
  document.getElementById('offlineStatus').textContent = offlineReady
    ? (navigator.onLine ? 'Prêt hors ligne · Données sur cet appareil' : 'Mode hors ligne · Données sur cet appareil')
    : 'Première ouverture : connexion nécessaire pour préparer le mode hors ligne';
}
window.addEventListener('online', connectionStatus);
window.addEventListener('offline', connectionStatus);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./sw.js');
      await navigator.serviceWorker.ready;
      offlineReady = true;
      connectionStatus();
    } catch {
      document.getElementById('offlineStatus').textContent = 'Mode hors ligne indisponible : ouvrez l’application en HTTPS et réessayez.';
    }
  });
}
render();
connectionStatus();
