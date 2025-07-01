# video-chat-ap

Cette application fournit un exemple minimal de chat vidéo construit avec Node.js, Express et Socket.IO.

## Installation

Assurez-vous d'avoir Node.js ≥ 18 installé. Installez ensuite les dépendances du projet :

```bash
npm install
```

## Lancement

Pour démarrer le serveur :

```bash
npm start
```

Le serveur écoute par défaut sur le port `3000`. Rendez-vous sur `http://localhost:3000` pour accéder à l'interface.

## Optimisations

Le serveur est configuré avec plusieurs optimisations :

- **compression** : compresse les réponses HTTP pour réduire la bande passante.
- **helmet** : ajoute des en-têtes de sécurité pour protéger l'application.
- **Cache statique** : le contenu du dossier `public/` est servi avec un cache d'une journée.

Ces optimisations visent à accélérer le chargement du site et à améliorer sa sécurité.
