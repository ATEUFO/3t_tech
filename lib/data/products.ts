export interface Product {
  id: string;
  slug: string;
  name: string;
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
}

export const products: Product[] = [
  {
    id: "jobbersfind",
    slug: "jobbersfind",
    name: "JobbersFind",
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
      "Flutter (Mobile)",
      "NestJS (Backend)",
      "PostGIS (Géolocalisation Spatiale)",
      "Socket.io (WebSockets Temps Réel)",
      "NLP (Recherche Sémantique)"
    ],
    vision: {
      problem: "Dans chaque métropole d'Afrique subsaharienne, il existe une armée silencieuse de héros du quotidien (mécaniciens, électriciens, plombiers) dont le talent exceptionnel reste invisible. La population fait face au chômage et au sous-emploi, tandis que les utilisateurs subissent une crise de confiance, craignant arnaques et manque de qualification.",
      solution: "JobbersFind est la réponse technologique et sociétale de 3T Global Tech. Un moteur de recherche sémantique couplé à une géolocalisation de pointe permet de trouver l'artisan idéal en quelques secondes. Les portfolios vérifiés, avec photos et vidéos, ainsi qu'un système d'évaluation réciproque, réintroduisent la confiance au cœur des transactions humaines.",
      impact: "L'impact est double. Humainement, nous redonnons dignité et revenus aux artisans, les transformant en entrepreneurs accomplis. Écologiquement, en facilitant la réparation plutôt que le remplacement, et en favorisant des interventions de proximité (1 à 3 km), JobbersFind participe activement à l'économie circulaire et à la réduction des émissions de CO2."
    },
    metrics: [
      { label: "Secteur informel digitalisé", value: "90%" },
      { label: "Hausse moyenne des revenus", value: "+50%" },
      { label: "Objectif Artisans autonomisés", value: "50 000" }
    ],
    apkUrl: "/assets/apk/jobbersfind.apk"
  },
  {
    id: "mboacash",
    slug: "mboacash",
    name: "MboaCash",
    tagline: "La finance simplifiée, accessible à tous, partout.",
    logo: "/assets/mboacash_logo.png",
    heroImage: "/assets/mboacash_image.jpeg",
    description: "Une solution financière innovante conçue pour faciliter les transactions quotidiennes, sécuriser les paiements et promouvoir l'inclusion financière.",
    gallery: [],
    techStack: [
      "Flutter (Mobile)",
      "Node.js (Backend)",
      "Sécurité & Cryptographie"
    ],
    vision: {
      problem: "L'accès aux services financiers traditionnels reste limité pour une grande partie de la population, freinant le développement économique et compliquant les transactions du quotidien.",
      solution: "MboaCash offre un portefeuille numérique intuitif, sécurisé et rapide, permettant d'envoyer de l'argent, de payer des factures et de gérer ses finances directement depuis son smartphone, avec une interface pensée pour l'utilisateur local.",
      impact: "En démocratisant l'accès aux paiements numériques, MboaCash stimule l'économie locale, sécurise les échanges commerciaux et permet à chacun de participer activement à l'économie numérique émergente."
    },
    metrics: [
      { label: "Transactions sécurisées", value: "100%" },
      { label: "Simplicité d'utilisation", value: "UI intuitive" }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
