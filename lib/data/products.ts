export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  badge: string;
  tagline: string;
  logo: string;
  heroImage: string;
  description: string;
  gallery: string[];
  techStack: string[];
  vision: {
    problem: string;
    solution: string;
    impact: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  apkUrl?: string;
  webUrl?: string;
  escrowPhases?: {
    step: string;
    title: string;
    description: string;
    highlight?: string;
  }[];
  detectionStates?: {
    number: string;
    title: string;
    status: string;
    description: string;
    image: string;
    color: "green" | "amber" | "red";
  }[];
  hardwareSpecs?: {
    title: string;
    description: string;
  }[];
  keyHighlights?: {
    title: string;
    description: string;
  }[];
}

export const products: Product[] = [
  {
    id: "jobbersfind",
    slug: "jobbersfind",
    name: "JobbersFind",
    category: "Services & Emploi de Proximité",
    badge: "Plateforme Numérique",
    tagline: "Connecter les talents locaux, transformer des vies, bâtir la confiance.",
    logo: "/assets/jobbersfind_logo_form.png",
    heroImage: "/assets/images_jobbeersfind/image_accueil.jpg",
    description: "Une plateforme digitale intelligente qui connecte instantanément et en toute sécurité toute personne ayant un besoin de service avec l'artisan ou le technicien certifié le plus proche et le plus qualifié.",
    gallery: [
      "/assets/images_jobbeersfind/page profile verifier artisan.jpg",
      "/assets/images_jobbeersfind/setting_de recherchejpg.jpg",
      "/assets/images_jobbeersfind/photo_2026-07-24_11-05-30.jpg",
      "/assets/images_jobbeersfind/photo_2026-07-24_11-05-26.jpg",
    ],
    techStack: [
      "Flutter (Mobile iOS & Android)",
      "NestJS (Backend Architecture)",
      "PostGIS (Géolocalisation Spatiale)",
      "Socket.io (WebSockets Temps Réel)",
      "NLP (Recherche Sémantique Multilingue)"
    ],
    vision: {
      problem: "Dans chaque métropole d'Afrique subsaharienne, il existe une armée silencieuse de héros du quotidien (mécaniciens, électriciens, plombiers, artisans) dont le talent exceptionnel reste invisible. La population fait face au chômage et au sous-emploi, tandis que les utilisateurs subissent une crise de confiance aiguë, craignant arnaques, surfacturations et absence de qualification vérifiée.",
      solution: "JobbersFind est la réponse technologique et sociétale de 3T Global Tech. Un moteur de recherche sémantique couplé à une géolocalisation spatiale de haute précision permet de trouver l'artisan idéal en quelques secondes dans un rayon de 1 à 3 km. Les portfolios vérifiés, avec photos et vidéos de réalisations, ainsi qu'un système d'évaluation réciproque, réintroduisent la confiance au cœur des transactions humaines.",
      impact: "L'impact est double. Humainement, nous redonnons dignité et revenus réguliers aux artisans, les transformant en entrepreneurs accomplis. Écologiquement, en facilitant la réparation plutôt que le remplacement, et en favorisant des interventions de proximité immédiate, JobbersFind participe activement à l'économie circulaire et à la réduction des émissions de CO2."
    },
    metrics: [
      { label: "Secteur informel digitalisé", value: "90%" },
      { label: "Hausse moyenne des revenus", value: "+50%" },
      { label: "Objectif Artisans autonomisés", value: "50 000" }
    ],
    apkUrl: "https://mega.nz/file/vQRSCQRL#s674pSXkUVKoqDfHmXx64z458I2wxnrR1OKa2QLDEPY",
    webUrl: "https://jobberfind-web.vercel.app/",
    keyHighlights: [
      {
        title: "Recherche Géolocalisée en Temps Réel",
        description: "Détection automatique des meilleurs spécialistes à proximité immédiate (1 à 3 km) via PostGIS pour des interventions ultra-rapides."
      },
      {
        title: "Profils d'Artisans Certifiés & Portfolios",
        description: "Vérification rigoureuse des pièces d'identité, certifications professionnelles et historique transparent des avis clients."
      },
      {
        title: "Mise en Relation Directe & Chat Sécurisé",
        description: "Messagerie instantanée et suivi des demandes de dépannage sans intermédiaire opaque."
      }
    ]
  },
  {
    id: "mboacash",
    slug: "mboacash",
    name: "MboaCash",
    category: "Fintech & Séquestre Numérique",
    badge: "Tiers de Confiance E-commerce",
    tagline: "L'institution de régulation et le tiers de confiance du e-commerce au Cameroun et en zone CEMAC.",
    logo: "/assets/mboacash_logo.png",
    heroImage: "/assets/mboacash_image.jpeg",
    description: "La première solution de paiement sous séquestre numérique (Escrow) et d'épargne-achat (Layaway) conçue pour éliminer les arnaques en ligne, protéger les acheteurs et sécuriser les revenus des commerçants.",
    gallery: [
      "/assets/images_mboacash/page-2.png",
      "/assets/images_mboacash/page-3.png",
      "/assets/images_mboacash/page-4.png",
      "/assets/images_mboacash/page-5.png"
    ],
    techStack: [
      "Système de Séquestre Numérique (Escrow)",
      "Intégration Mobile Money (Orange Money & MTN MoMo)",
      "Chiffrement Bancaire SSL/TLS & Auth PIN / OTP",
      "Firebase Cloud Messaging (Push & SMS temps réel)",
      "Traçabilité Unifiée & Historique Infalsifiable",
      "Module d'Arbitrage Équitable & Pré-analyse IA"
    ],
    vision: {
      problem: "Le Cameroun connaît une digitalisation fulgurante : WhatsApp, Facebook et Instagram sont devenus de gigantesques marchés ouverts. Pourtant, le e-commerce reste paralysé par un déficit total de confiance. L'acheteur redoute d'envoyer l'argent d'avance face aux vendeurs fantômes ou aux produits non conformes sans aucun recours ; le vendeur craint le paiement à la livraison (Cash on Delivery) qui le contraint à avancer des frais logistiques pour des commandes annulées ou refusées à l'arrivée.",
      solution: "MboaCash se positionne comme l'arbitre neutre et incorruptible garantissant l'équité totale de l'échange. Grâce à notre technologie de séquestre numérique (Escrow), les fonds de l'acheteur sont sécurisés dans un portefeuille de transit inviolable. Le vendeur est notifié de la solvabilité garantie et peut expédier en toute sérénité. Les fonds ne sont libérés qu'après inspection physique et validation du produit par l'acheteur, avec un protocole d'arbitrage immédiat en cas de litige.",
      impact: "MboaCash lève le principal verrou psychologique et financier du commerce électronique en Afrique centrale. En instaurant une confiance institutionnelle et en proposant le paiement fractionné sécurisé (Achat à Long Terme), MboaCash multiplie le volume d'affaires des commerçants, protège le pouvoir d'achat des consommateurs contre les arnaques et propulse l'économie numérique locale vers de nouveaux sommets."
    },
    metrics: [
      { label: "Fonds protégés sous séquestre", value: "100%" },
      { label: "Risque d'impayé commerçant", value: "0%" },
      { label: "Sécurité & Authentification", value: "PIN & OTP" },
      { label: "Compatibilité Mobile Money", value: "Orange & MTN" }
    ],
    escrowPhases: [
      {
        step: "01",
        title: "Initialisation",
        description: "L'acheteur crée la transaction sur l'application en indiquant le montant convenu et le numéro de téléphone du vendeur."
      },
      {
        step: "02",
        title: "Mise sous Séquestre",
        description: "Le compte de l'acheteur est débité. Les fonds sont isolés dans le portefeuille de transit sécurisé MboaCash. Le vendeur reçoit une notification certifiant que l'argent est disponible et garanti."
      },
      {
        step: "03",
        title: "Expédition Sécurisée",
        description: "Le vendeur expédie le produit sans risque : il a la certitude absolue que la solvabilité de l'acheteur est garantie par la plateforme."
      },
      {
        step: "04",
        title: "Libération des Fonds (Release)",
        description: "À la réception et après vérification du colis, l'acheteur valide la transaction sur son smartphone. MboaCash transfère immédiatement les fonds dans le portefeuille du vendeur."
      }
    ],
    keyHighlights: [
      {
        title: "L'Achat à Long Terme (Épargne-Achat / Layaway)",
        description: "Alternative éthique au crédit : l'acheteur épargne à son rythme en versant des acomptes sécurisés jusqu'à 100% pour bloquer un produit de valeur sans risque de surendettement, pendant que le vendeur sécurise son futur chiffre d'affaires."
      },
      {
        title: "Portefeuille Électronique Multi-Opérateurs",
        description: "Recharge et retrait ultra-rapides vers Orange Money, MTN Mobile Money et comptes bancaires avec génération d'identifiant unique par action."
      },
      {
        title: "Sécurité de Niveau Bancaire",
        description: "Communications chiffrées de bout en bout (SSL/TLS), code PIN secret pour chaque validation et codes OTP pour les montants élevés."
      },
      {
        title: "Module d'Arbitrage Impartial",
        description: "En cas de litige ou de marchandise non conforme, l'acheteur suspend la libération et MboaCash arbitre sur pièces pour rembourser la partie lésée."
      }
    ]
  },
  {
    id: "somnialert",
    slug: "somnialert",
    name: "SomniAlert",
    category: "IoT Embarqué & IA Sécurité Routière",
    badge: "Innovation DeepTech Africaine",
    tagline: "L'intelligence artificielle embarquée au service de la sécurité routière africaine.",
    logo: "/assets/somnialert_logo.png",
    heroImage: "/assets/images_somnialert/somnialert_presentation.png",
    description: "Le premier kit IoT aftermarket africain combinant vision par ordinateur infrarouge, analyse IA en temps réel, assistance mécanique au freinage hydraulique et géolocalisation spatiale GNSS pour prévenir la somnolence et les malaises au volant.",
    gallery: [
      "/assets/images_somnialert/somnialert_vigilant.png",
      "/assets/images_somnialert/somnialert_alerte.png",
      "/assets/images_somnialert/somnialert_action.png",
      "/assets/images_somnialert/somnialert_gnss.png",
      "/assets/images_somnialert/somnialert_architecture.png"
    ],
    techStack: [
      "Vision Infrarouge Jour/Nuit (68 points faciaux)",
      "IA Embarquée Edge Computing (< 2s de détection)",
      "Positionnement Satellitaire GNSS / Constellations GPS",
      "Actionneur Linéaire & Solénoïde de Freinage Hydraulique",
      "Télémétrie SMS Automatique & Alerte Gestionnaire de Flotte",
      "Architecture 100% Autonome Hors-Ligne (No-Cloud Dependency)"
    ],
    vision: {
      problem: "Chaque année, les routes africaines causent entre 260 000 et 300 000 décès, soit 24% des décès routiers mondiaux pour seulement 4% du parc automobile mondial (taux record de 19,6 décès pour 100 000 habitants). Au Cameroun, 678 personnes ont perdu la vie dans 1 781 accidents en 2024, avec un coût annuel colossal estimé à 800 milliards FCFA. Parmi les causes les plus critiques figurent la somnolence, les malaises cardiaques et les pertes de connaissance soudaines, qui laissent le véhicule sans contrôle en quelques secondes.",
      solution: "SomniAlert transforme n'importe quel véhicule conventionnel en système intelligent de prévention active. Une caméra infrarouge surveille en permanence le visage de jour comme de nuit en suivant 68 points biométriques. Une IA locale (Edge Computing) analyse l'ouverture des yeux et les bâillements en moins de 2 secondes. Si un micro-sommeil survient, SomniAlert déclenche une alerte sonore et lumineuse progressive. En l'absence de réaction, le système active automatiquement les feux de détresse, ralentit le véhicule en douceur via un actionneur de freinage hydraulique et transmet la position GPS par satellite.",
      impact: "Premier kit aftermarket d'Afrique subsaharienne capable d'intervenir mécaniquement sur le véhicule avant le drame, SomniAlert protège les passagers des transports interurbains, les chauffeurs de poids lourds et les flottes logistiques. Il préserve des milliers de vies humaines et réduit drastiquement les pertes économiques matérielles sur les corridors de transport africains."
    },
    metrics: [
      { label: "Temps de détection IA", value: "< 2s" },
      { label: "Points faciaux analysés", value: "68 pts" },
      { label: "Autonomie sans connexion", value: "100%" },
      { label: "Adaptabilité tous véhicules", value: "Kit Aftermarket" }
    ],
    detectionStates: [
      {
        number: "01",
        title: "Conducteur Vigilant",
        status: "Surveillance Active",
        description: "Le système est en mode surveillance active en continu. La caméra infrarouge valide que les indices faciaux et le clignement oculaire sont dans les seuils normaux. Aucune alerte n'est requise.",
        image: "/assets/images_somnialert/somnialert_vigilant.png",
        color: "green"
      },
      {
        number: "02",
        title: "Alerte Somnolence",
        status: "Alerte Sonore & Visuelle",
        description: "Le ratio d'ouverture des yeux descend sous le seuil critique (yeux fermés > 2 secondes ou bâillements répétés). SomniAlert déclenche immédiatement une alarme sonore stridente et des LED d'avertissement pour réveiller le conducteur.",
        image: "/assets/images_somnialert/somnialert_alerte.png",
        color: "amber"
      },
      {
        number: "03",
        title: "Incapacité Confirmée",
        status: "Action Physique Immédiate",
        description: "Aucune réaction du conducteur n'est enregistrée. SomniAlert active automatiquement les feux de détresse, enclenche le freinage hydraulique progressif via actionneur linéaire pour arrêter le véhicule en douceur, et émet un SMS de détresse avec position GPS satellitaire.",
        image: "/assets/images_somnialert/somnialert_action.png",
        color: "red"
      }
    ],
    hardwareSpecs: [
      {
        title: "Caméra Infrarouge Haute Définition",
        description: "Surveillance continue du visage opérationnelle de jour comme de nuit, insensible aux reflets ou à l'obscurité totale."
      },
      {
        title: "IA Embarquée (Edge Computing)",
        description: "Traitement des algorithmes de vision par ordinateur directement à bord du boîtier, sans nécessiter de connexion internet ou de serveur distant."
      },
      {
        title: "Module Satellitaire GNSS",
        description: "Connexion aux constellations de satellites GPS pour une géolocalisation spatiale précise en temps réel, même sur les axes ruraux non couverts par la 4G."
      },
      {
        title: "Actionneur Linéaire & Solénoïde de Freinage",
        description: "Dispositif électromécanique de sécurité qui applique une assistance progressive au circuit de freinage hydraulique pour ralentir le véhicule sans à-coups."
      },
      {
        title: "Console Cockpit & Alertes Sonores",
        description: "Écran d'affichage de statut (Vigilant, Alerte, Action) couplé à un avertisseur sonore puissant et à des voyants LED haute visibilité."
      },
      {
        title: "Modem SMS d'Urgence & Plateforme de Flotte",
        description: "Transmission automatique des coordonnées d'incident aux secours et aux gestionnaires de flottes sur une plateforme centralisée."
      }
    ],
    keyHighlights: [
      {
        title: "Zéro Dépendance au Réseau Cloud",
        description: "100% opérationnel en zones blanches ou reculées grâce au traitement neuronal local sur puce embarquée."
      },
      {
        title: "Installation Aftermarket Universelle",
        description: "S'adapte sur tout modèle de voiture, car de transport ou camion existant sans modification structurelle lourde."
      },
      {
        title: "Lien avec les Technologies Spatiales",
        description: "Suivi satellitaire en direct et préfiguration d'une connectivité satellite basse orbite (Low-Orbit) pour une couverture totale du continent africain."
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
