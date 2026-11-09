# 🚀 Guide de Déploiement Vercel — 3T.tech (Portfolio Next.js)

Ce guide explique en détail comment déployer le site vitrine/portfolio **3T.tech** (projet Next.js) sur la plateforme **Vercel**. Grâce à l'intégration native de Next.js avec Vercel (les créateurs de Next.js), le déploiement bénéficie d'une configuration automatique, de performances optimales (CDN mondial) et d'un renouvellement SSL automatique.

---

## ⚙️ 1. Préparation du Dossier (Déjà effectuée)

Pour garantir un déploiement fluide sur Vercel, nous avons configuré et vérifié les éléments clés dans le dossier du projet :

1. **Version de Node.js verrouillée** : Le fichier [package.json](file:///d:/jobbersfindProjet/3t_tech/package.json) a été mis à jour avec la propriété `engines` pour forcer Vercel à utiliser une version moderne et compatible de Node.js (>=20.0.0) :
   ```json
   "engines": {
     "node": ">=20.0.0"
   }
   ```
2. **Scripts de build standard** : Les scripts de commande dans `package.json` sont corrects :
   - `npm run build` exécutera `next build` pour compiler le site statique et dynamique.
   - `npm run lint` pour valider la conformité du code.
3. **Exclusion des fichiers locaux** : Le fichier `.gitignore` exclut correctement le dossier de build local `.next/` et le dossier `node_modules/` afin d'éviter les conflits lors de la compilation sur les serveurs de Vercel.
4. **Pas de variables d'environnement requises** : Le projet étant actuellement un site portfolio statique/interactif sans base de données directe ou clés API privées côté serveur, **aucune variable d'environnement (.env) n'est requise** sur Vercel à ce stade.

---

## 🛠️ 2. Déploiement Étape par Étape via Git (Recommandé)

La méthode la plus simple et efficace consiste à lier votre dépôt Git (GitHub, GitLab ou Bitbucket) à Vercel pour automatiser les déploiements à chaque commit (CI/CD).

### Étape 2.1 : Pousser le projet sur votre dépôt Git
Si ce n'est pas déjà fait, assurez-vous que votre projet est poussé sur votre plateforme Git (ex: GitHub) :
```bash
git add .
git commit -m "chore: preparer le projet pour le deploiement vercel"
git push origin main
```

### Étape 2.2 : Importer le projet sur Vercel
1. Connectez-vous ou créez un compte sur [Vercel](https://vercel.com).
2. Cliquez sur le bouton **"Add New..."** en haut à droite, puis sélectionnez **"Project"**.
3. Associez votre compte Git (GitHub/GitLab) si nécessaire, puis recherchez votre dépôt `3t_tech` (ou le nom attribué à votre dépôt pour le portfolio).
4. Cliquez sur **"Import"** en face du dépôt.

### Étape 2.3 : Configurer et Déployer
Dans l'écran de configuration qui apparaît :
- **Project Name** : Laissez `3t-tech` ou choisissez le nom de votre choix.
- **Framework Preset** : Sélectionnez **Next.js** (normalement détecté automatiquement).
- **Root Directory** : Laissez `./` (la racine).
- **Build and Output Settings** : Laissez les valeurs par défaut (Vercel exécutera automatiquement `npm run build` et servira le dossier `.next`).
- **Environment Variables** : Laissez vide (non requis pour ce projet).

Cliquez sur **"Deploy"**. Vercel va installer les dépendances, compiler le projet et générer une URL de production temporaire (ex: `3t-tech.vercel.app`).

---

## 🌐 3. Configuration du Domaine Personnalisé (ex: 3tglobaltech.com)

Pour lier le site à votre propre nom de domaine chez votre hébergeur (comme Hostinger), suivez ces étapes :

### Étape 3.1 : Ajouter le domaine dans Vercel
1. Sur le tableau de bord de votre projet Vercel, allez dans l'onglet **Settings** > **Domains**.
2. Saisissez votre domaine principal (ex: `3tglobaltech.com` ou un sous-domaine comme `portfolio.3tglobaltech.com`).
3. Vercel vous recommandera également d'ajouter la version `www.3tglobaltech.com`. Validez.

### Étape 3.2 : Configurer les DNS chez votre hébergeur (Hostinger)
Connectez-vous au panneau de contrôle de votre domaine chez votre hébergeur et configurez les enregistrements DNS suivants :

#### Option A : Pour le domaine racine (`3tglobaltech.com`)
Ajoutez ou modifiez l'enregistrement **A** suivant :
- **Type** : `A`
- **Nom / Hôte** : `@` (ou laissez vide selon l'hébergeur)
- **Valeur / Cible** : `76.76.21.21` (IP officielle de Vercel)
- **TTL** : Par défaut

#### Option B : Pour le sous-domaine `www` (`www.3tglobaltech.com`)
Ajoutez ou modifiez l'enregistrement **CNAME** suivant :
- **Type** : `CNAME`
- **Nom / Hôte** : `www`
- **Valeur / Cible** : `cname.vercel-dns.com`
- **TTL** : Par défaut

#### Option C : Pour un sous-domaine spécifique (ex: `portfolio.3tglobaltech.com`)
Ajoutez ou modifiez l'enregistrement **CNAME** suivant :
- **Type** : `CNAME`
- **Nom / Hôte** : `portfolio`
- **Valeur / Cible** : `cname.vercel-dns.com`
- **TTL** : Par défaut

> [!NOTE]
> La propagation des DNS peut prendre de quelques minutes à 24 heures. Une fois la propagation terminée, Vercel générera automatiquement un certificat SSL HTTPS Let's Encrypt gratuit et sécurisera votre site.

---

## 🚀 4. Fonctionnement du CI/CD (Déploiement Continu)

Une fois le projet lié à votre dépôt Git :
- **Branche principale (main/master)** : Chaque push sur cette branche déclenchera automatiquement une compilation et une mise à jour transparente du site de production (zéro temps d'arrêt).
- **Branches secondaires (feature/bugfix)** : Chaque push ou Pull Request sur une autre branche créera automatiquement un déploiement de **Preview** avec une URL unique. Cela vous permet de tester vos modifications dans un environnement identique à la production avant de fusionner vers la branche principale.

---

## 📦 5. Méthodes Alternatives de Déploiement (Sans GitHub)

Si vous ne souhaitez pas lier de dépôt GitHub, Vercel propose deux méthodes alternatives :

### Méthode A : Le Glisser-Déposer (Vercel Drop) — Export Statique
Vercel permet de glisser-déposer un dossier contenant un site web statique pré-compilé. Dans le cas de Next.js, cela nécessite de configurer le projet pour générer un dossier nommé `out` (au lieu de `dist`).

1. **Configuration nécessaire (Déjà appliquée dans [next.config.ts](file:///d:/jobbersfindProjet/3t_tech/next.config.ts))** : L'export statique a été activé (`output: 'export'`) et les images configurées en mode non-optimisé (requis pour le glisser-déposer sans serveur Node.js actif) :
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     devIndicators: false,
     output: "export",
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```
2. **Génération du dossier** : Exécutez dans le terminal :
   ```bash
   npm run build
   ```
   Cela va compiler le projet et créer un dossier appelé `out` à la racine.
3. **Déploiement** : Allez sur [Vercel Drop](https://vercel.com/import/project) et glissez-déposez le dossier `out` directement dans l'interface web de Vercel.

---

### Méthode B : Déploiement via le CLI Vercel (Recommandé si pas de Git/GitHub)
Cette méthode est la plus flexible car elle envoie le code source brut à Vercel qui compile le projet directement sur ses serveurs. Cela vous permet de conserver toutes les fonctionnalités dynamiques de Next.js (optimisation automatique des images, routes API, etc.) sans modifier [next.config.ts](file:///d:/jobbersfindProjet/3t_tech/next.config.ts).

1. **Installation du CLI** (globalement sur votre machine) :
   ```bash
   npm install -g vercel
   ```
2. **Connexion** :
   ```bash
   vercel login
   ```
   *(Sélectionnez votre méthode de connexion préférée).*
3. **Déploiement de Preview** : À la racine du projet `3t_tech`, exécutez la commande suivante :
   ```bash
   vercel
   ```
   *Répondez aux questions dans le terminal (acceptez de lier le projet, gardez les paramètres par défaut).*
4. **Mise en Production** : Une fois le premier déploiement validé, déployez définitivement en production avec :
   ```bash
   vercel --prod
   ```
