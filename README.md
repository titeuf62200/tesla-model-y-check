# Model Y Check

PWA indépendante en français pour la réception d’une Tesla Model Y Propulsion.
48 contrôles, 8 étapes de 6 points, 4 états (OK, à signaler, à vérifier, non applicable), notes par point, notes générales, bilan complet copiable, partageable et téléchargeable.

## Utilisation

Ouvrir le site une première fois avec Internet et attendre « Prêt hors ligne ».
Sur iPhone : Safari → Partager → Sur l’écran d’accueil → Ajouter.
Sur Android : Chrome → menu ⋮ → Installer l’application / Ajouter à l’écran d’accueil.
Le bouton ↓ explique également l’installation.

Les données sont enregistrées immédiatement dans le stockage local du navigateur. Elles ne sont ni envoyées au dépôt ni synchronisées entre appareils. L’effacement des données du navigateur les supprime. Exporter le bilan avant changement de navigateur ou nouvelle réception. Les équipements variables peuvent être marqués non applicables.

## Développement et vérification

Aucune dépendance de production et aucun service tiers.

```sh
python3 -m http.server 8000
node check.mjs
```

Ouvrir http://localhost:8000. Les service workers nécessitent HTTPS ou localhost.
Le test vérifie les 48 identifiants uniques, les 8 étapes, les compteurs, le bilan et les notes, la récupération du stockage invalide, les erreurs de sauvegarde, les fichiers du manifeste et le service worker hors ligne.

## GitHub Pages

Le workflow `.github/workflows/pages.yml` teste les fichiers puis publie seulement les fichiers publics. Dans Settings → Pages → Build and deployment, sélectionner **GitHub Actions** une fois. Ensuite chaque commit sur `main` déploie automatiquement. Si le premier workflow a échoué avant l’activation, relancer depuis Actions → Deploy Model Y Check → Run workflow.

Le site est conçu pour le sous-chemin `/tesla-model-y-check/` : tous les chemins sont relatifs. Le service worker ne supprime que les anciens caches `model-y-check-*`, pour préserver les autres applications de la même origine. Incrémenter sa version à chaque mise à jour des fichiers publics.

Application non affiliée à Tesla. Les contrôles servent d’aide-mémoire ; les équipements réels et les documents remis avec le véhicule font référence.
