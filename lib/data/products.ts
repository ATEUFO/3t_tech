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
  valuePropositions: string[];
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
  partnerLogos?: {
    name: string;
    logo: string;
    role: string;
  }[];
}

export const products: Product[] = [
  {
    id: "jobbersfind",
    slug: "jobbersfind",
    name: "JobbersFind",
    category: "Services & Emploi de Proximité",
    badge: "Plateforme de Mise en Relation",
    tagline: "Connecter les talents locaux, transformer des vies, bâtir la confiance.",
    logo: "/assets/jobbersfind_logo_form.png",
    heroImage: "/assets/images_jobbeersfind/image_accueil.jpg",
    description: "Une plateforme intelligente qui connecte instantanément et en toute sécurité toute personne ayant un besoin de service avec l'artisan ou le technicien certifié le plus proche et le plus qualifié.",
    gallery: [
      "/assets/images_jobbeersfind/page profile verifier artisan.jpg",
      "/assets/images_jobbeersfind/setting_de recherchejpg.jpg",
      "/assets/images_jobbeersfind/photo_2026-07-24_11-05-30.jpg",
      "/assets/images_jobbeersfind/photo_2026-07-24_11-05-26.jpg",
    ],
    valuePropositions: [
      "Intervention rapide à proximité (1 à 3 km)",
      "Artisans vérifiés avec portfolios certifiés",
      "Tarifs transparents sans intermédiaire opaque",
      "Évaluation réciproque et confiance garantie",
      "Valorisation du savoir-faire et de l'emploi local"
    ],
    vision: {
      problem: "Dans chaque métropole, il existe une armée silencieuse de héros du quotidien (mécaniciens, électriciens, plombiers, artisans) dont le talent exceptionnel reste invisible. La population fait face au chômage et au sous-emploi, tandis que les clients subissent une crise de confiance aiguë, craignant arnaques, surfacturations et absence de qualification vérifiée.",
      solution: "JobbersFind est la réponse sociétale et économique de 3T Global Tech. Une recherche intelligente couplée à la localisation de proximité permet de trouver l'artisan idéal en quelques secondes dans un rayon de 1 à 3 km. Les portfolios vérifiés, avec photos et vidéos de réalisations, ainsi qu'un système d'évaluation réciproque, réintroduisent la confiance au cœur des échanges.",
      impact: "L'impact est double. Humainement, nous redonnons dignité et revenus réguliers aux artisans, les transformant en entrepreneurs accomplis. Écologiquement, en facilitant la réparation plutôt que le remplacement, et en favorisant des déplacements courts, JobbersFind participe activement à l'économie circulaire."
    },
    metrics: [
      { label: "Secteur informel valorisé", value: "90%" },
      { label: "Hausse moyenne des revenus", value: "+50%" },
      { label: "Objectif Artisans autonomisés", value: "50 000" }
    ],
    apkUrl: "https://mega.nz/file/vQRSCQRL#s674pSXkUVKoqDfHmXx64z458I2wxnrR1OKa2QLDEPY",
    webUrl: "https://jobberfind-web.vercel.app/",
    keyHighlights: [
      {
        title: "Proximité Immédiate (1 à 3 km)",
        description: "Identification instantanée des meilleurs spécialistes disponibles autour de vous pour réduire les délais et coûts de déplacement."
      },
      {
        title: "Profils Certifiés & Portfolios Réels",
        description: "Vérification des identités, des compétences et consultation des réalisations passées avec avis clients authentifiés."
      },
      {
        title: "Relation Directe & Équitable",
        description: "Prise de contact directe et suivi clair des prestations pour protéger autant le client que le prestataire."
      }
    ]
  },
  {
    id: "mboacash",
    slug: "mboacash",
    name: "MboaCash",
    category: "Commerce & Confiance Numérique",
    badge: "Tiers de Confiance E-commerce",
    tagline: "Le tiers de confiance qui sécurise chaque achat et vente en ligne.",
    logo: "/assets/mboacash_logo.png",
    heroImage: "/assets/mboacash_image.jpeg",
    description: "La solution de paiement sous séquestre et d'épargne-achat conçue pour éliminer les arnaques en ligne, protéger les acheteurs et garantir les revenus des commerçants.",
    gallery: [
      "/assets/images_mboacash/page-2.png",
      "/assets/images_mboacash/page-3.png",
      "/assets/images_mboacash/page-4.png",
      "/assets/images_mboacash/page-5.png"
    ],
    valuePropositions: [
      "100% des fonds protégés jusqu'à la livraison",
      "Zéro risque d'impayé pour le vendeur",
      "Achat à Long Terme sans crédit ni endettement",
      "Compatible Orange Money & MTN Mobile Money",
      "Service d'arbitrage impartial en cas de litige"
    ],
    vision: {
      problem: "Les réseaux sociaux (WhatsApp, Facebook, Instagram) sont devenus de gigantesques marchés ouverts, mais le commerce en ligne reste freiné par un déficit total de confiance. L'acheteur redoute de payer d'avance face aux vendeurs fantômes ou aux produits non conformes ; le vendeur craint la livraison contre remboursement qui lui fait avancer des frais logistiques pour des commandes annulées à l'arrivée.",
      solution: "MboaCash agit comme un arbitre neutre et incorruptible garantissant l'équité totale de l'échange. Les fonds de l'acheteur sont mis à l'abri le temps de la livraison. Le vendeur a la certitude d'être payé et expédie sereinement. L'argent n'est libéré qu'après vérification du colis par l'acheteur, avec une procédure d'arbitrage rapide en cas de désaccord.",
      impact: "MboaCash lève le principal frein psychologique et financier du commerce en ligne. En instaurant la confiance et en proposant l'Achat à Long Terme (la digitalisation de la tontine d'achat sans crédit bancaire), la solution stimule le chiffre d'affaires des commerçants tout en protégeant le pouvoir d'achat des ménages."
    },
    metrics: [
      { label: "Fonds protégés sous séquestre", value: "100%" },
      { label: "Risque d'impayé commerçant", value: "0%" },
      { label: "Protection Acheteur & Vendeur", value: "Totale" },
      { label: "Compatibilité Mobile Money", value: "Orange & MTN" }
    ],
    escrowPhases: [
      {
        step: "01",
        title: "Initialisation",
        description: "L'acheteur crée la transaction en quelques secondes en indiquant le montant convenu et le numéro du vendeur."
      },
      {
        step: "02",
        title: "Mise sous Séquestre",
        description: "Les fonds sont isolés dans un espace sécurisé MboaCash. Le vendeur reçoit immédiatement la confirmation que l'argent est disponible et garanti."
      },
      {
        step: "03",
        title: "Expédition Sereine",
        description: "Le vendeur expédie le colis sans crainte : il a la certitude absolue de recevoir son paiement dès que la livraison est honorée."
      },
      {
        step: "04",
        title: "Libération des Fonds",
        description: "À la réception et après vérification du colis, l'acheteur valide l'opération. MboaCash verse instantanément les fonds au vendeur."
      }
    ],
    keyHighlights: [
      {
        title: "L'Achat à Long Terme (Épargne-Achat)",
        description: "Alternative éthique au crédit : l'acheteur bloque le prix du produit et verse des acomptes à son rythme jusqu'à 100% sans risque de surendettement, pendant que le vendeur sécurise ses ventes futures."
      },
      {
        title: "Dépôts & Retraits Multi-Opérateurs",
        description: "Recharge et retrait simples et rapides via Orange Money, MTN Mobile Money et comptes bancaires avec suivi clair de chaque transaction."
      },
      {
        title: "Arbitrage Rapide & Équitable",
        description: "En cas de produit non conforme ou de retard anormal, le client bloque le paiement et notre service d'arbitrage tranche sur preuves pour rembourser la partie lésée."
      },
      {
        title: "Confidentialité & Respect des Données",
        description: "Aucune donnée personnelle n'est monétisée : les informations servent uniquement à vérifier l'identité des participants et à prévenir la fraude."
      }
    ],
    partnerLogos: [
      { name: "Orange Money", logo: "/assets/brands/orange-money.svg", role: "Paiement & Retrait" },
      { name: "MTN Mobile Money", logo: "/assets/brands/mtn.svg", role: "Paiement & Retrait" },
      { name: "Google Play", logo: "/assets/brands/google-play.svg", role: "Application Mobile" }
    ]
  },
  {
    id: "somnialert",
    slug: "somnialert",
    name: "SomniAlert",
    category: "Sécurité Routière & Prévention Active",
    badge: "Innovation Sécurité Routière",
    tagline: "La prévention intelligente au service de la vie sur nos routes.",
    logo: "/assets/somnialert_logo.png",
    heroImage: "/assets/images_somnialert/somnialert_presentation.png",
    description: "Le premier kit embarqué adaptable à tout véhicule capable de détecter la somnolence ou un malaise du conducteur, d'alerter immédiatement et de ralentir automatiquement le véhicule pour éviter l'accident.",
    gallery: [
      "/assets/images_somnialert/somnialert_vigilant.png",
      "/assets/images_somnialert/somnialert_alerte.png",
      "/assets/images_somnialert/somnialert_action.png",
      "/assets/images_somnialert/somnialert_gnss.png",
      "/assets/images_somnialert/somnialert_architecture.png"
    ],
    valuePropositions: [
      "Détection de la somnolence et des malaises en moins de 2s",
      "Intervention automatique pour ralentir le véhicule en douceur",
      "Fonctionne de jour comme de nuit sans connexion Internet",
      "Alerte automatique des secours et proches avec position GPS",
      "Adaptable sur tout véhicule existant sans modification lourde"
    ],
    vision: {
      problem: "Chaque année, les routes africaines causent entre 260 000 et 300 000 décès, soit 24% de la mortalité routière mondiale pour seulement 4% du parc automobile. Au Cameroun, 678 personnes ont perdu la vie en 2024 dans 1 781 accidents, dont 70% liés au facteur humain, pour un coût annuel estimé à 800 milliards FCFA. La somnolence, les malaises et les pertes de connaissance frappent en quelques secondes et laissent le véhicule sans contrôle.",
      solution: "SomniAlert transforme n'importe quel véhicule classique en bouclier actif contre les accidents. Le dispositif observe le visage du conducteur de jour comme de nuit et repère les signes de micro-sommeil ou d'incapacité en moins de 2 secondes. Si le conducteur ne réagit pas à l'alerte sonore et lumineuse, SomniAlert active les feux de détresse, ralentit progressivement le véhicule en sécurité et envoie la position exacte aux secours et gestionnaires de flotte.",
      impact: "Premier dispositif du genre conçu pour les réalités de transport en Afrique, SomniAlert protège les passagers des bus interurbains, les chauffeurs routiers et les flottes d'entreprises. Il sauve des vies humaines, réduit les drames familiaux et évite des pertes matérielles colossales sur les axes routiers."
    },
    metrics: [
      { label: "Temps de réaction", value: "< 2s" },
      { label: "Points du visage suivis", value: "68 pts" },
      { label: "Autonomie sans réseau", value: "100%" },
      { label: "Compatibilité véhicules", value: "Universelle" }
    ],
    detectionStates: [
      {
        number: "01",
        title: "Conducteur Vigilant",
        status: "Surveillance Active",
        description: "Le dispositif veille en continu, de jour comme de nuit. Les signes d'attention du conducteur sont normaux : le trajet se poursuit sereinement sans aucune gêne.",
        image: "/assets/images_somnialert/somnialert_vigilant.png",
        color: "green"
      },
      {
        number: "02",
        title: "Alerte Somnolence",
        status: "Alerte Sonore & Visuelle",
        description: "Dès que les yeux restent fermés plus de 2 secondes ou que des signes de fatigue critique apparaissent, SomniAlert déclenche une alarme sonore et des voyants lumineux pour réveiller immédiatement le conducteur.",
        image: "/assets/images_somnialert/somnialert_alerte.png",
        color: "amber"
      },
      {
        number: "03",
        title: "Incapacité Confirmée",
        status: "Mise en Sécurité Automatique",
        description: "Si le conducteur ne réagit pas (malaise, perte de connaissance), SomniAlert allume les feux de détresse, ralentit le véhicule en douceur jusqu'à l'arrêt et envoie un SMS d'urgence avec sa localisation exacte.",
        image: "/assets/images_somnialert/somnialert_action.png",
        color: "red"
      }
    ],
    hardwareSpecs: [
      {
        title: "Surveillance Jour & Nuit",
        description: "Vision claire de l'état de vigilance du conducteur en pleine journée comme dans l'obscurité totale de la nuit."
      },
      {
        title: "100% Autonome Hors-Ligne",
        description: "Fonctionne intégralement à bord du véhicule sans dépendre d'une connexion Internet, même dans les zones rurales les plus isolées."
      },
      {
        title: "Localisation Satellitaire de Précision",
        description: "Suivi en temps réel et transmission automatique des coordonnées exactes aux secours ou au gestionnaire de flotte en cas d'incident."
      },
      {
        title: "Ralentissement Assisté en Douceur",
        description: "Prise de relais progressive sur le freinage pour stopper le véhicule en sécurité sans à-coup brutal."
      },
      {
        title: "Indicateur Clair au Tableau de Bord",
        description: "Affichage immédiat du niveau de vigilance (Vigilant, Alerte ou Action) avec alarme sonore efficace."
      },
      {
        title: "Alerte Instantanée des Proches & Flottes",
        description: "Envoi automatique de message d'urgence et visibilité centralisée pour les compagnies de transport."
      }
    ],
    keyHighlights: [
      {
        title: "Zéro Modification Lourde du Véhicule",
        description: "Installation rapide en kit adaptable sur tout modèle de voiture, car de transport ou camion déjà en circulation."
      },
      {
        title: "Fiabilité sur Axes Isolés",
        description: "Conçu pour rester pleinement actif là où la couverture téléphonique est faible et où les secours mettent le plus de temps à arriver."
      },
      {
        title: "Prévention Proactive des Drames",
        description: "Ne se contente pas d'avertir : le système intervient physiquement lorsque le conducteur n'est plus en état de réagir."
      }
    ],
    partnerLogos: [
      { name: "OMS / WHO", logo: "/assets/brands/who.svg", role: "Référentiel Sécurité Routière" },
      { name: "Banque Mondiale", logo: "/assets/brands/world-bank.svg", role: "Études Facteur Humain" }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
