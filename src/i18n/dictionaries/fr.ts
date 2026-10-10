import type { Dictionary } from "./en";

export const fr: Dictionary = {
  meta: {
    siteName: "Aeroost",
    tagline: "Une technique utile, conçue avec soin.",
    locale: "fr",
    titleSuffix: "Aeroost",
    ogImageAlt: "Aeroost — une technique utile, conçue avec soin.",
    titles: {
      home: "Aeroost — Une technique utile, conçue avec soin.",
      projects: "Projets — Aeroost",
      technology: "Technologie — Aeroost",
      about: "À propos — Aeroost",
      faq: "Questions fréquentes — Aeroost",
      contact: "Contact — Aeroost",
      notFound: "Page introuvable — Aeroost",
    },
    descriptions: {
      home: "Aeroost est une initiative technologique indépendante qui travaille en ingénierie logicielle, intelligence artificielle, développement de jeux et outils numériques.",
      projects: "Le répertoire de projets Aeroost : ce qui est public aujourd’hui, ce qui est en cours, et ce qui n’est qu’un champ d’intérêt.",
      technology: "Comment Aeroost aborde l’ingénierie logicielle, l’intelligence artificielle, le développement de jeux et les outils numériques.",
      about: "Ce qu’est Aeroost, les principes du travail, et un état des lieux public factuel.",
      faq: "Réponses directes sur Aeroost, ses domaines, l’état des projets, le contact, la confidentialité et la sécurité.",
      contact: "Contacter Aeroost via le formulaire, avec des attentes de réponse claires et des consignes de sécurité.",
    },
  },

  a11y: {
    skipToContent: "Aller au contenu principal",
    mainNavigation: "Navigation principale",
    languageNavigation: "Langue",
    themeNavigation: "Thème de couleurs",
    switchToLight: "Passer au thème clair",
    switchToDark: "Passer au thème sombre",
    breadcrumbs: "Fil d’Ariane",
    currentLanguage: "Langue actuelle",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    logoHome: "Aeroost — retour à l’accueil",
    clearSearch: "Effacer la recherche",
    statusFilter: "Filtrer par statut",
    filtersGroup: "Filtres de projets",
    copyLink: "Copier le lien",
    copied: "Copié",
    externalLink: "S’ouvre dans une nouvelle fenêtre",
    siteFooter: "Pied de page",
    expandHint: "Sélectionnez la question pour lire la réponse",
  },

  nav: {
    home: "Accueil",
    projects: "Projets",
    technology: "Technologie",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
  },

  common: {
    current: "Actuel",
    viewDirectory: "Voir l’état des projets",
    contactCta: "Contacter Aeroost",
    focusAreas: "Domaines d’attention",
    notReleased: "Non publié",
    newWindow: "S’ouvre dans une nouvelle fenêtre",
    github: "GitHub",
    backToTop: "Haut de page",
    languagesAvailable: "Anglais · Persan · Arabe · Français · Espagnol · Russe · Chinois",
  },

  status: {
    active: "En cours",
    exploring: "Exploration",
    planned: "Planifié",
    released: "Publié",
  },

  statusDescriptions: {
    active: "Travail en cours, partiellement inspectable aujourd’hui.",
    exploring: "Études de concept et notes. Rien à utiliser pour l’instant.",
    planned: "Cadrage et priorités posés, mais pas commencé.",
    released: "Utilisable ou lisible sans demander.",
  },

  theme: {
    light: "Clair",
    dark: "Sombre",
  },

  home: {
    hero: {
      eyebrow: "Initiative technologique indépendante",
      headlineStart: "Une technique utile.",
      headlineAccent: "Conçue avec soin.",
      intro:
        "Aeroost explore des solutions concrètes en ingénierie logicielle, intelligence artificielle, développement de jeux et outils numériques.",
      supporting:
        "Des décisions de conception lisibles, une ingénierie maintenable et une information de projet transparente guidant la démarche.",
      ctaProjects: "Explorer les projets",
      ctaFocus: "Explorer les domaines",
      ctaContact: "Contacter Aeroost",
      glanceTitle: "Ce qui est vérifiable ici",
      glanceCaption: "Les statuts décrivent ce qui existe aujourd’hui, pas ce qui est prévu.",
      glanceItems: [
        { label: "Dépôt public", value: "Aeroost sur GitHub", kind: "link" },
        { label: "Produits publiés", value: "Aucun pour l’instant", kind: "text" },
        { label: "Langues de l’interface", value: "EN, FA, AR, FR, ES, RU, ZH", kind: "text" },
        { label: "Thèmes", value: "Clair et sombre, mémorisés", kind: "text" },
        { label: "Canal suivi", value: "Formulaire de contact", kind: "text" },
      ],
    },
    focus: {
      eyebrow: "Domaines d’attention",
      title: "Quatre domaines, une exigence d’ingénierie.",
      intro:
        "Chaque domaine décrit la manière de travailler d’Aeroost — les décisions prises au sérieux. Ce sont des champs de pratique, pas un catalogue de produits.",
      cta: "Lire les notes techniques",
    },
    focusItems: {
      software: {
        title: "Ingénierie logicielle",
        summary: "Des systèmes qui restent lisibles : architecture explicite, comportement testé, interfaces qu’on n’a pas à décoder.",
      },
      ai: {
        title: "Intelligence artificielle",
        summary: "Une assistance là où elle aide vraiment, avec évaluation, limites et traitement des données énoncés clairement.",
      },
      games: {
        title: "Développement de jeux",
        summary: "Des boucles jouables bâties sur quelques systèmes simples, puis testées pour le ressenti, le rythme et la stabilité.",
      },
      tools: {
        title: "Outils numériques",
        summary: "Des utilitaires ciblés qui retirent des étapes du travail réel et restent assez fiables pour qu’on s’y fie.",
      },
    },
    philosophy: {
      eyebrow: "Approche",
      title: "Des décisions de conception que l’on peut suivre.",
      lead:
        "Aeroost traite le raisonnement derrière une construction comme partie du livrable. Les contraintes sont nommées tôt, les compromis sont écrits, rien ne part en boîte noire.",
      aside: "Rédigé comme des notes d’ingénierie, pas comme un texte marketing.",
      items: [
        {
          title: "Partir de la contrainte",
          body: "Chaque travail commence par ce qui ne peut pas changer — public, plateforme, données, budget d’attention. Le reste en découle.",
        },
        {
          title: "Préférer la solution lisible",
          body: "Un design simple qu’un autre peut maintenir vaut mieux qu’une ruse que seul son auteur comprend.",
        },
        {
          title: "Vérifier avant d’affirmer",
          body: "Le comportement est testé, les mesures se font avec de vrais outils, et les phrases non vérifiées restent hors de la documentation.",
        },
        {
          title: "Garder la surface calme",
          body: "Les interfaces portent une idée à la fois. Le décor n’a sa place que s’il améliore la compréhension.",
        },
      ],
    },
    projectsBand: {
      eyebrow: "Registre public",
      title: "Rien à publier encore, dit clairement.",
      body:
        "La page Projets indique exactement ce qui est public, ce qui est en cours et ce qui n’est qu’un champ d’intérêt — sans disponibilité implicite ni annonces de remplissage.",
      cta: "Ouvrir le répertoire de projets",
    },
    contactBand: {
      eyebrow: "Écrire",
      title: "Une question sur un travail précis ?",
      body: "Décrivez le problème, les contraintes, et à quoi ressemble un résultat fini.",
      cta: "Contacter Aeroost",
      note: "Le formulaire est le seul canal suivi.",
    },
  },

  projects: {
    eyebrow: "Projets",
    title: "Le travail public, avec son vrai statut.",
    intro:
      "Ce répertoire liste ce que l’on peut inspecter maintenant et dit clairement ce que l’on ne peut pas. Le travail est groupé par domaine, et chaque statut décrit la disponibilité, pas l’ambition.",
    release: {
      label: "Publié pour usage",
      emptyTitle: "Aucun projet public pour l’instant.",
      emptyBody:
        "Le répertoire public d’Aeroost présentera les projets lorsqu’ils seront prêts à être partagés. Revenez pour les publications futures.",
      alreadyPublic: "Ce qui est déjà public :",
      repoTitle: "Dépôt de l’écosystème Aeroost",
      repoBody: "Présentation du projet et documentation en sept langues.",
      repoLink: "Ouvrir le dépôt sur GitHub",
    },
    directory: {
      title: "Où en est le travail",
      intro: "Quatre chantiers d’ingénierie, chacun à un stade différent. Aucun n’est un produit à utiliser.",
      searchLabel: "Rechercher les chantiers",
      searchPlaceholder: "Rechercher par nom, domaine ou pratique",
      filterLabel: "Statut",
      filterAll: "Tous",
      resultsLabel: "chantiers affichés",
      noMatchesTitle: "Rien ne correspond à ce filtre.",
      noMatchesBody: "Essayez un autre statut, ou videz le champ de recherche pour voir les quatre chantiers.",
      clearFilters: "Effacer les filtres",
      fields: {
        status: "Statut",
        area: "Domaine",
        step: "Étape actuelle",
        availability: "Disponibilité",
      },
    },
    records: {
      website: {
        name: "Site Aeroost",
        area: "Ingénierie logicielle",
        summary:
          "Le site multilingue que vous lisez : jetons de design partagés, mise en page de droite à gauche, rendu statique dans une application Next.js.",
        step: "Étendu page par page selon le besoin, avec vérifications de types, de build et de lint à chaque changement.",
        availability: "En ligne sur ce domaine",
      },
      foundations: {
        name: "Fondations de mise en page et de composants",
        area: "Ingénierie logicielle",
        summary:
          "Espacements, échelle typographique, jetons de couleur et motifs accessibles identiques en LTR et en RTL.",
        step: "Éprouvés d’abord dans le site ; seuls les motifs qui tiennent sur de vraies pages sont extraits.",
        availability: "Interne à ce projet",
      },
      evaluation: {
        name: "Évaluation des flux assistés",
        area: "Intelligence artificielle",
        summary:
          "Analyses et petites expériences sur les cas où l’assistance d’un modèle gagne du temps, ceux où elle n’ajoute que des étapes, et comment les distinguer.",
        step: "Les critères d’évaluation et les jeux d’exemples s’écrivent avant qu’un outil ne soit hébergé.",
        availability: "Non publié",
      },
      prototypes: {
        name: "Études de prototypes de jeu",
        area: "Développement de jeux",
        summary:
          "Builds courts et jetables, un mécanisme chacun — ressenti du mouvement, rythme des tours, budget de rendu — puis compte rendu des mesures.",
        step: "Études de concept et notes de mesure. Aucun jeu n’est annoncé, aucun build n’est publié comme jouable.",
        availability: "Non publié",
      },
      utilities: {
        name: "File d’utilitaires",
        area: "Outils numériques",
        summary:
          "Petits utilitaires côté navigateur : comparaison de texte, inspection de formats, conversion d’unités, sans compte ni envoi de fichiers.",
        step: "Cadrage et priorités posés. Le premier outil commence une fois les cas d’entrée et d’échec écrits.",
        availability: "Pas commencé",
      },
    },
    principlesNote: {
      title: "Comment ce répertoire est tenu",
      body:
        "Une entrée ne passe à Publié que lorsqu’on peut l’utiliser ou la lire sans demander. Les changements de statut s’écrivent ici d’abord, pour que cette page reste la référence.",
    },
  },

  technology: {
    eyebrow: "Technologie",
    title: "Quatre champs de pratique.",
    intro: "Ce à quoi Aeroost prête attention dans chaque domaine — et où elle s’arrête volontairement.",
    indexLabel: "Sur cette page",
    considerationsLabel: "Ce qui compte",
    boundaryLabel: "Où cela s’arrête",
    note: {
      title: "Les domaines ne sont pas des produits.",
      body: "Tout ici décrit une méthode de travail. Pour ce qui est utilisable ou lisible aujourd’hui, voir le répertoire de projets.",
      cta: "Ouvrir les projets",
    },
    areas: {
      software: {
        name: "Ingénierie logicielle",
        tagline: "Un logiciel n’est utile que tant qu’on peut le changer.",
        definition: "L’effort va donc à la structure et au retour, pas seulement aux fonctions. L’objectif est un design qui survit à son deuxième mainteneur.",
      },
      ai: {
        name: "Intelligence artificielle",
        tagline: "Les modèles aident au flou et sont peu fiables pour une réponse garantie.",
        definition: "La discipline consiste surtout à reconnaître dans quel cas on est avant que le modèle touche la sortie, et à le dire dans l’interface.",
      },
      games: {
        name: "Développement de jeux",
        tagline: "Les règles deviennent une expérience par la manette.",
        definition: "La crédibilité vient du rythme, de la réponse aux commandes et d’un temps de frame stable. L’image ne rattrape pas une boucle qui se sent mal.",
      },
      tools: {
        name: "Outils numériques",
        tagline: "Un outil gagne sa place en retirant des étapes.",
        definition: "S’il ajoute une installation, un compte ou un coût d’apprentissage, il a déplacé le frottement au lieu de le retirer. L’utilité se mesure en actions économisées.",
      },
    },
    considerations: {
      software: [
        { title: "Une architecture qui s’explique", body: "Chaque module a une responsabilité, les frontières sont explicites, un nouveau lecteur peut suivre une requête de l’interface aux données et retour." },
        { title: "Tester là où le comportement compte", body: "Les tests unitaires couvrent les règles, les tests d’intégration le câblage, quelques parcours de bout en bout les chemins qui ne doivent pas casser. Le taux de couverture n’est pas l’objectif." },
        { title: "La performance comme budget", body: "Taille de charge, coût de rendu et temps de requête se mesurent contre un budget écrit, pas au feeling." },
        { title: "L’usage comme partie de la justesse", body: "Si l’action voulue est difficile à trouver, la fonction est incomplète — on ne blâme pas la personne qui l’utilise." },
      ],
      ai: [
        { title: "Commencer par la solution plus simple", body: "Une règle, un index de recherche ou un champ auto-validé résout souvent le problème avec moins de pièces mobiles : on l’évalue d’abord." },
        { title: "Évaluer avant d’affirmer", body: "Les prompts et pipelines sont vérifiés sur un jeu fixe d’exemples aux réponses connues, et le taux de réussite est enregistré, pas décrit." },
        { title: "Les limites, dites à découvert", body: "L’incertitude, le refus et le savoir périmé sont montrés à la personne, pas cachés derrière un ton sûr." },
        { title: "Confidentialité par le périmètre", body: "Les données envoyées à un modèle sont minimisées, gardées seulement où c’est nécessaire, jamais utilisées pour un entraînement sans consentement explicite." },
      ],
      games: [
        { title: "Un mécanisme par prototype", body: "Chaque build teste un verbe — sauter, viser, échanger — et se garde ou se jette selon sa tenue, pas selon son aspect." },
        { title: "Itérer sur le ressenti", body: "Accélération, tampon d’entrée et réponse caméra se règlent en boucles courtes avec le build lancé, car un graphe ne juge pas la réactivité à lui seul." },
        { title: "Performance mesurée", body: "Distribution du temps de frame, taille de chargement et croissance mémoire se profilent sur l’appareil cible le plus faible, pas sur la machine de développement." },
        { title: "Expérience joueur documentée", body: "Commandes, courbe de difficulté et états d’échec sont écrits pour comparer l’intention de design à la boucle finale." },
      ],
      tools: [
        { title: "Utile dès le premier contact", body: "L’action principale est disponible tout de suite, avec des défauts raisonnables et sans barrière avant que la valeur soit visible." },
        { title: "Fiable sur les saisies maladroites", body: "Champs vides, fichiers collés, caractères inhabituels et texte de droite à gauche sont un usage normal, pas un abus." },
        { title: "Local dès que le local suffit", body: "Ce qui peut se faire dans le navigateur y reste : cela retire la latence et la plupart des questions de données d’un coup." },
        { title: "Clavier et presse-papiers d’abord", body: "Raccourcis, ordre de focus et collage font partie du design, car un outil se répète plus qu’il ne s’admire." },
      ],
    },
    boundaries: {
      software: "Aucun plaidoyer de framework. Le bon outil est celui qui reste maintenable après l’élan du début.",
      ai: "Aucun assistant n’est présenté comme un jugement autonome. Ce qui touche l’argent, la santé ou le droit reste à une personne.",
      games: "Aucune date de sortie, accès anticipé ou page boutique n’est annoncé avant qu’un build jouable existe pour être testé.",
      tools: "Les outils se publient quand ils sont fiables, pas quand ils sont démontrables.",
    },
  },

  about: {
    eyebrow: "À propos",
    title: "Une initiative indépendante, décrite sans remplissage.",
    intro:
      "Aeroost est une initiative technologique indépendante. Elle construit des logiciels utiles et garde visible le raisonnement de chaque décision, pour que le travail s’inspecte plutôt que de seulement s’admirer.",
    mission: {
      title: "Mission",
      body: "Faire une technique petite et bien conçue, que l’on peut utiliser et comprendre — et écrire pourquoi elle a été construite ainsi.",
    },
    vision: {
      title: "Vision",
      body: "La direction a été posée dans la documentation du projet et n’a pas changé depuis.",
      quote: "Construire une technique puissante, utile, et faite pour durer.",
      attribution: "Documentation du projet Aeroost",
    },
    principles: {
      title: "Principes",
      intro: "Cinq engagements décident de ce qui se construit, de la façon de le décrire, et de ce qui reste non dit.",
      items: [
        { title: "Dire ce qui est vrai", body: "Les statuts décrivent ce qui existe aujourd’hui. Le travail planifié est étiqueté comme tel, et rien n’emprunte le vocabulaire des notes de version." },
        { title: "Concevoir avant de coder", body: "Mise en page, formulation et flux se règlent sur le papier d’abord, pour que l’implémentation n’ait pas à les inventer sous pression." },
        { title: "Rester maintenable", body: "L’indépendance, c’est des noms clairs, peu de dépendances, et une documentation encore lisible après l’humeur dans laquelle elle a été écrite." },
        { title: "Respecter l’attention", body: "Une idée par écran, une performance mesurable, et des défauts accessibles traités comme des exigences, pas comme un vernis." },
        { title: "Laisser la porte ouverte", body: "HTML sémantique, formats portables et outils standards, pour qu’un autre puisse reprendre le travail sans permission." },
      ],
    },
    approach: {
      title: "Comment le travail avance",
      intro: "Les étapes se suivent, et chacune laisse quelque chose de lisible.",
      steps: [
        { title: "Cadre", body: "Écrire le problème, les contraintes, et l’allure d’un résultat fini." },
        { title: "Esquisse", body: "Fixer la structure et le texte ; écarter les idées qui ont déjà besoin d’une explication." },
        { title: "Construction", body: "Implémenter par petits morceaux testables, sur les jetons et motifs déjà en place." },
        { title: "Vérification", body: "Mesurer avec de vrais outils : types, build de production, parcours clavier, largeurs cibles." },
        { title: "Publication", body: "Enregistrer l’état honnêtement, puis le lier depuis le répertoire de projets." },
      ],
    },
    status: {
      title: "État public actuel",
      intro: "Ce que l’on peut vérifier hors de ce site, tel quel.",
      items: [
        "Un dépôt public contient la présentation du projet et sa documentation en sept langues.",
        "Aucun produit, application ou service n’est annoncé comme publié.",
        "Aucun client, partenariat, financement ou prix n’est revendiqué, car rien de tel n’est publié.",
        "Ce site est le lieu où l’état du projet est décrit ; le répertoire reste la référence.",
      ],
    },
  },

  faq: {
    eyebrow: "FAQ",
    title: "Des questions qui méritent une réponse directe.",
    intro: "Réponses courtes sur ce qu’est Aeroost, comment son travail est décrit, et comment la joindre. Le reste se pose via le formulaire.",
    groupsLabel: "Sections",
    groups: {
      initiative: "Aeroost",
      work: "Domaines et projets",
      contact: "Contact, confidentialité et sécurité",
    },
    items: {
      what: { q: "Qu’est-ce qu’Aeroost ?", a: "Une initiative technologique indépendante dans quatre domaines : ingénierie logicielle, intelligence artificielle, développement de jeux et outils numériques. Elle construit des logiciels et documente le raisonnement de chaque décision." },
      who: { q: "Qui est derrière ?", a: "Aeroost est indépendante et tenue sans liste de personnel. Elle ne nomme ni employés, ni agences, ni partenaires, car rien de tel n’est publié." },
      company: { q: "Aeroost est-elle une entreprise ?", a: "C’est une initiative plus qu’une agence. La technique et sa documentation se publient ouvertement ; les arrangements commerciaux se discutent au cas par cas, ils ne s’annoncent pas ici." },
      difference: { q: "Quelle est la différence entre un domaine et un projet ?", a: "Un domaine décrit un champ de pratique et la façon d’y décider. Un projet est quelque chose que l’on peut inspecter aujourd’hui : du code, un outil, un document. La page Technologie couvre le premier, la page Projets le second." },
      empty: { q: "Pourquoi le répertoire de projets paraît-il vide ?", a: "Parce qu’il n’y a encore rien à publier. Le travail public s’y inscrit dès qu’il existe ; d’ici là, un état vide remplace des cartes décoratives." },
      statuses: { q: "Que signifient les statuts ?", a: "En cours : travail continu, en partie inspectable. Exploration : études et notes, rien à utiliser. Planifié : cadré mais pas commencé. Publié : disponible sans demander." },
      when: { q: "Quand quelque chose sera-t-il publié ?", a: "Quand ce sera assez fiable pour être utilisé et documenté. Il n’y a pas de feuille de route datée : une date sans build derrière elle n’est qu’une conjecture." },
      contact: { q: "Comment contacter Aeroost ?", a: "Via le formulaire de la page Contact. C’est le seul canal suivi : aucune adresse e-mail n’est publiée, aucun compte social n’attend de message." },
      privacy: { q: "Que devient ce que j’envoie ?", a: "Votre nom, e-mail, sujet et message sont stockés dans la base du projet pour permettre une réponse. Le site n’charge aucun script publicitaire ou analytique et ne pose aucun cookie de suivi." },
      security: { q: "Comment signaler un problème de sécurité ?", a: "Envoyez une courte description de l’effet et de la reproduction via le formulaire, et gardez les détails hors des tickets publics. N’incluez ni identifiants, ni jetons, ni données d’autrui." },
      languages: { q: "Quelles langues et quels thèmes sont pris en charge ?", a: "Anglais, persan, arabe, français, espagnol, russe et chinois, avec une mise en page de droite à gauche pour le persan et l’arabe, plus des thèmes clair et sombre mémorisés d’une visite à l’autre. Le changement de langue se fait sans recharger la page." },
      aiUsage: { q: "Aeroost utilise-t-elle l’IA pour construire ses logiciels ?", a: "Parfois, pour rédiger et relire le travail de routine. Les décisions, la vérification et chaque affirmation publiée restent à une personne, et un texte généré est relu avant d’apparaître ici." },
    },
    expandHint: "Sélectionnez la question pour lire la réponse.",
    still: {
      title: "Quelque chose n’est pas couvert ?",
      body: "Le formulaire accepte les questions précises sur un travail, sa réutilisation, ou un problème qui mérite d’être résolu.",
      cta: "Poser une question",
    },
  },

  contact: {
    eyebrow: "Contact",
    title: "Posez une question claire ; recevez une réponse simple.",
    intro: "Les messages se lisent un par un. Plus le propos est concret, plus la réponse est utile.",
    channels: {
      title: "Canaux vérifiés",
      body: "Ce sont les seuls canaux qu’Aeroost publie.",
      githubLabel: "GitHub",
      githubValue: "github.com/Aeroost",
      githubNote: "Dépôt public et documentation du projet.",
      githubCta: "Ouvrir GitHub",
      formLabel: "Formulaire",
      formValue: "Sur cette page",
      formNote: "Enregistré dans la base du projet et répondu par e-mail.",
      noEmail: "Aucune adresse e-mail n’est publiée. Tenez pour non vérifiée toute adresse se présentant comme Aeroost, et utilisez le formulaire ci-dessous.",
    },
    expectations: {
      title: "Attentes de réponse",
      body: "Les messages se lisent périodiquement, pas instantanément. Il n’y a pas de délai fixe ni de file selon la taille du projet : une question claire obtient une réponse plus claire.",
    },
    before: {
      title: "Avant d’écrire",
      items: [
        "N’envoyez ni mots de passe, ni jetons, ni clés d’API.",
        "Pour un problème de sécurité, décrivez l’effet et la reproduction ; omettez ce qui expose d’autres personnes.",
        "N’attachez rien. Un lien vers un dépôt ou un extrait se lit plus facilement qu’un fichier.",
        "Les questions à conséquences juridiques ou financières reçoivent une réponse factuelle, pas un conseil.",
      ],
    },
    form: {
      title: "Formulaire de contact",
      intro: "Quatre champs. Le message n’est conservé que pour pouvoir y répondre.",
      name: "Nom",
      namePlaceholder: "Comment vous adresser",
      email: "E-mail",
      emailPlaceholder: "name@example.com",
      topic: "Sujet",
      topics: {
        project: "Un travail précis",
        reuse: "Réutilisation ou licence",
        feedback: "Retour sur ce site",
        security: "Signalement de sécurité",
        other: "Autre chose",
      },
      message: "Message",
      messagePlaceholder: "Le problème, les contraintes, et l’allure d’un résultat fini.",
      submit: "Envoyer le message",
      submitting: "Envoi…",
      optional: "facultatif",
      success: {
        title: "Message reçu.",
        body: "Votre message est enregistré avec les informations fournies. Indiquez une adresse de réponse si vous en attendez une.",
        another: "Envoyer un autre message",
      },
      errors: {
        name: "Ajoutez un nom pour que la réponse puisse s’adresser.",
        email: "Saisissez une adresse e-mail capable de recevoir une réponse.",
        message: "Décrivez un peu plus la question — 20 caractères au minimum.",
        form: "Certains champs demandent une correction. Ils sont marqués ci-dessous.",
        generic: "Le message n’a pas pu partir pour l’instant. Réessayez dans un moment.",
        rate: "Trop de messages depuis cette connexion. Réessayez dans quelques minutes.",
      },
      privacy: "Nom, e-mail et message sont stockés dans la base de ce projet uniquement pour répondre, et ne sont pas partagés avec des tiers.",
      counter: "{count} sur {min} caractères minimum",
    },
  },

  footer: {
    blurb: "Initiative technologique indépendante en ingénierie logicielle, intelligence artificielle, développement de jeux et outils numériques.",
    exploreTitle: "Explorer",
    capabilitiesTitle: "Domaines",
    contactTitle: "Contact",
    statusTitle: "État",
    statusLines: ["Aucun produit publié", "Dépôt et documentation publics", "Répertoire mis à jour quand le statut change"],
    languagesTitle: "Langues",
    themeTitle: "Apparence",
    copyright: "© {year} Aeroost.",
    legalNote: "Tout ici décrit ce qui est disponible aujourd’hui.",
    builtWith: "Construit avec Next.js, TypeScript et Tailwind CSS.",
  },

  notFound: {
    code: "404",
    title: "Page introuvable",
    body: "L’adresse est peut-être périmée, ou cette page n’a pas d’équivalent dans la langue actuelle.",
    home: "Retour à l’accueil",
    projects: "Voir le répertoire de projets",
  },
};
