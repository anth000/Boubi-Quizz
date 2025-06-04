
import { QuizData, OptionKeyEnum } from './types';

// Helper function to get today's date in YYYY-MM-DD format
// For the sake of stable demo data, we'll use fixed dates.
// To use actual today: const today = new Date().toISOString().split('T')[0];

const fixedTodayDate = new Date().toISOString().split('T')[0]; //"2024-07-28";
//const fixedYesterdayDate = "2024-07-27";

export const tousLesQuestionnaires: QuizData = {
  "2024-01-01":  {
    theme: "Principes Fondamentaux en Radiologie 1",
    questions:[
  {
    id: 1,
    question: "Quelle interaction photon-matière est la plus probable dans les tissus mous à 70 kVp?",
    options: {
      A: "Effet photoélectrique",
      B: "Effet Compton",
      C: "Production de paire",
      D: "Diffusion cohérente"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "À 70 kVp, l'effet Compton prédomine dans les tissus mous car il devient l'interaction principale au-delà de 30 kVp. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 2,
    question: "Que provoque une augmentation du kVp en conservant le mAs constant?",
    options: {
      A: "Augmentation du contraste",
      B: "Réduction de la dose au patient",
      C: "Augmentation du bruit",
      D: "Réduction de la pénétration du faisceau"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "L’augmentation du kVp, à mAs constant, améliore la pénétration et permet généralement de réduire la dose au patient si la qualité d'image reste acceptable. Source : European Guidelines on Diagnostic Reference Levels for Paediatric Imaging, Bushong S.C."
  },
  {
    id: 3,
    question: "À quoi sert l’effet d’anode talon (heel effect)?",
    options: {
      A: "Réduire la distorsion",
      B: "Compenser l’inclinaison de la grille",
      C: "Répartir l’intensité du faisceau selon l’anatomie",
      D: "Augmenter la netteté de l’image"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L'effet talon de l’anode produit une intensité de faisceau plus forte du côté cathodique, permettant d’adapter l’exposition à l’épaisseur anatomique. Source : Bushong S.C., Radiologic Science for Technologists."
  },
  {
    id: 4,
    question: "Quel paramètre influence directement la résolution spatiale en radiographie numérique?",
    options: {
      A: "Le mAs",
      B: "Le kVp",
      C: "La taille du pixel",
      D: "Le temps d’exposition"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Plus le pixel est petit, meilleure est la résolution spatiale de l'image numérique. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 5,
    question: "En cas d’utilisation incorrecte de la grille, quel artefact peut apparaître?",
    options: {
      A: "Moiré",
      B: "Aliasing",
      C: "Halo",
      D: "Ligne sombre"
    },
    reponseCorrecte: OptionKeyEnum.A,
    justification: "Une mauvaise utilisation de la grille peut causer un artefact de moiré (aliasing) lors du recadrage numérique. Source : Optimisation des images médicales, INESSS."
  },
  {
    id: 6,
    question: "Pourquoi utilise-t-on un faisceau collimaté?",
    options: {
      A: "Augmenter la dose au patient",
      B: "Réduire le contraste",
      C: "Réduire le rayonnement diffusé",
      D: "Uniformiser le champ"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le faisceau collimaté limite le champ irradié et réduit le rayonnement diffusé, protégeant le patient et le personnel. Source : CNESST, Santé Canada."
  },
  {
    id: 7,
    question: "En tomodensitométrie, quelle unité mesure l’atténuation des tissus?",
    options: {
      A: "Gray",
      B: "Bq",
      C: "Hounsfield",
      D: "Roentgen"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’unité Hounsfield (UH) mesure l’atténuation des tissus en scanner. Source : Optimisation de la dose en CT, otimroepmq.ca."
  },
  {
    id: 8,
    question: "Que se passe-t-il si la grille est utilisée à l’envers?",
    options: {
      A: "Aucun effet",
      B: "Surexposition au centre de l’image",
      C: "Sous-exposition sur les bords de l’image",
      D: "Image floue"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Une grille inversée produit une atténuation excessive sur les bords, créant un effet de sous-exposition latérale. Source : Optimisation des images médicales, INESSS."
  },
  {
    id: 9,
    question: "Quelle structure anatomique est mieux vue en incidence lordotique thoracique?",
    options: {
      A: "Les bases pulmonaires",
      B: "Les apex pulmonaires",
      C: "La trachée",
      D: "Le médiastin"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "L’incidence lordotique dégage les apex pulmonaires, les rendant mieux visibles. Source : Manuel de radiologie, Brossard, SFR."
  },
  {
    id: 10,
    question: "Quel examen expose le plus le patient en dose efficace moyenne?",
    options: {
      A: "Radiographie de la colonne cervicale",
      B: "Radiographie pulmonaire PA",
      C: "Tomodensitométrie abdomino-pelvienne",
      D: "Panoramique dentaire"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le scanner abdomino-pelvien délivre la dose efficace la plus élevée parmi les examens cités. Source : Santé Canada, Guide de radioprotection médicale."
  },
  {
    id: 11,
    question: "Quelle est la limite annuelle de dose efficace pour un travailleur exposé selon le SCFR?",
    options: {
      A: "10 mSv",
      B: "20 mSv",
      C: "50 mSv",
      D: "100 mSv"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La limite annuelle réglementaire au Canada est de 20 mSv pour un travailleur exposé. Source : Règlement sur la radioprotection, SCFR."
  },
  {
    id: 12,
    question: "À quoi sert un filtre de cuivre dans certaines procédures fluoroscopiques?",
    options: {
      A: "Réduire le contraste",
      B: "Réduire la dose de peau",
      C: "Améliorer la résolution spatiale",
      D: "Protéger le tube"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Un filtre de cuivre élimine les photons de faible énergie, réduisant ainsi la dose cutanée. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 13,
    question: "Quel paramètre affecte directement le contraste en radiographie numérique?",
    options: {
      A: "DQE",
      B: "LUT",
      C: "Pixel pitch",
      D: "DAP"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le LUT (Look-Up Table) permet de modifier le contraste des images numériques. Source : Carlton R.R., Principles of Radiographic Imaging."
  },
  {
    id: 14,
    question: "Que signifie une valeur EI (Exposure Index) trop basse?",
    options: {
      A: "Image sur-exposée",
      B: "Image sous-exposée",
      C: "Mauvais positionnement",
      D: "Saturation du détecteur"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Un EI bas indique généralement une sous-exposition de l’image, donc une image bruitée. Source : IAEA Human Health Series No. 21."
  },
  {
    id: 15,
    question: "Quel est l’effet d’un grand OID (distance objet-image)?",
    options: {
      A: "Réduit la distorsion",
      B: "Réduit le flou géométrique",
      C: "Augmente la magnification",
      D: "Augmente la pénétration du faisceau"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Un grand OID (distance objet-détecteur) augmente la magnification de l'image. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 16,
    question: "Dans une radiographie thoracique PA, comment vérifier l’absence de rotation?",
    options: {
      A: "Évaluer la symétrie des côtes",
      B: "Vérifier le centrage du cœur",
      C: "Observer la symétrie des clavicules par rapport aux apophyses épineuses",
      D: "Observer les omoplates"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’alignement des clavicules par rapport à l’apophyse épineuse centrale permet de juger de l’absence de rotation. Source : Manuel de radiologie, SFR."
  },
  {
    id: 17,
    question: "En DR, quel composant convertit les rayons X en lumière visible?",
    options: {
      A: "Photocathode",
      B: "Scintillateur",
      C: "Détecteur amorphe",
      D: "Grille"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le scintillateur convertit les rayons X en lumière visible en DR indirecte. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 18,
    question: "Quel risque est associé à un temps de scopie prolongé?",
    options: {
      A: "Artéfact de moiré",
      B: "Artefact thermique",
      C: "Augmentation de la dose au patient",
      D: "Pénétration trop faible"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Un temps de scopie long augmente significativement la dose reçue par le patient. Source : CNESST, Guide de radioprotection."
  },
  {
    id: 19,
    question: "Quelle technique réduit le plus le flou de mouvement volontaire?",
    options: {
      A: "Réduction du mAs",
      B: "Diminution du kVp",
      C: "Utilisation de temps d’exposition courts",
      D: "Filtration renforcée"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le principal moyen de réduire le flou de mouvement est de diminuer la durée d'exposition. Source : Carlton R.R., Principles of Radiographic Imaging."
  },
  {
    id: 20,
    question: "Quelle est l’action éthique requise si un technologue observe un médecin qui ne respecte pas les normes de radioprotection?",
    options: {
      A: "Ne rien faire",
      B: "Le signaler à l’Ordre",
      C: "Le confronter publiquement",
      D: "Contacter directement la RAMQ"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le technologue doit signaler les manquements éthiques à l’Ordre, conformément au Code de déontologie. Source : Code de déontologie OTIMROEPMQ."
  },
  {
    id: 21,
    question: "Quel paramètre détermine principalement la dose au patient en CT?",
    options: {
      A: "DLP",
      B: "kVp",
      C: "Pitch",
      D: "mAs"
    },
    reponseCorrecte: OptionKeyEnum.A,
    justification: "Le DLP (Dose Length Product) est le paramètre de base pour estimer la dose totale reçue en scanner. Source : ICRP Publication 135."
  },
  {
    id: 22,
    question: "En cas d’allergie confirmée à l’iode, que faut-il faire avant un examen avec contraste iodé IV?",
    options: {
      A: "Ne rien changer",
      B: "Administrer une prémédication stéroïdienne",
      C: "Utiliser un autre agent iodé",
      D: "Utiliser un agent baryté"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Une prémédication stéroïdienne est recommandée en cas d'allergie documentée à l’iode, selon les protocoles hospitaliers. Source : INESSS, guide des réactions allergiques."
  },
  {
    id: 23,
    question: "Quel est le rôle du technologue selon la Loi sur les professions du Québec?",
    options: {
      A: "Diagnostiquer",
      B: "Prescrire des examens",
      C: "Effectuer des actes techniques autorisés",
      D: "Surveiller les infirmières"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le rôle du technologue est d’exécuter des actes techniques selon les paramètres légaux. Source : Loi sur les professions, Québec."
  },
  {
    id: 24,
    question: "En mammographie, pourquoi utilise-t-on un filtre de molybdène?",
    options: {
      A: "Produire un faisceau très énergétique",
      B: "Améliorer la pénétration",
      C: "Favoriser le contraste des tissus mous",
      D: "Réduire la dose de rayonnement secondaire"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le filtre de molybdène permet d’optimiser le contraste des tissus mous à faible énergie, idéal pour la mammographie. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 25,
    question: "Un artefact circulaire en CT (ring artifact) est généralement causé par :",
    options: {
      A: "Un scintillateur défectueux",
      B: "Une mauvaise injection de contraste",
      C: "Un détecteur défectueux",
      D: "Une mauvaise calibration du kVp"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Un artefact en anneau est caractéristique d’un détecteur défectueux en scanner. Source : Bushong S.C., Radiologic Science for Technologists."
  },
  {
    id: 26,
    question: "En pédiatrie, quelle mesure est prioritaire pour réduire la dose?",
    options: {
      A: "Augmenter le temps d’exposition",
      B: "Réduire le kVp",
      C: "Augmenter la distance",
      D: "Adapter les paramètres au poids"
    },
    reponseCorrecte: OptionKeyEnum.D,
    justification: "L’adaptation des paramètres techniques au poids de l’enfant est la première mesure à prendre. Source : Image Gently Alliance, guidelines."
  },
  {
    id: 27,
    question: "Quelle incidence est la plus appropriée pour visualiser l’articulation acromio-claviculaire?",
    options: {
      A: "AP épaules",
      B: "Clavicule oblique",
      C: "Vue axiale",
      D: "Vue Zanca"
    },
    reponseCorrecte: OptionKeyEnum.D,
    justification: "La vue Zanca est l’incidence de référence pour l’articulation acromio-claviculaire. Source : SFR, Manuel de radiologie."
  },
  {
    id: 28,
    question: "Quelle conséquence peut avoir une exposition répétée à de faibles doses de radiation ionisante?",
    options: {
      A: "Effet déterministe immédiat",
      B: "Stérilité réversible",
      C: "Augmentation du risque de cancer à long terme",
      D: "Mutation génétique aiguë"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’exposition chronique à faible dose augmente le risque de cancer à long terme (effet stochastique). Source : ICRP, OMS."
  },
  {
    id: 29,
    question: "Quel artefact est fréquent en fluoroscopie chez les patients avec implants métalliques?",
    options: {
      A: "Effet blooming",
      B: "Artefact de durcissement du faisceau",
      C: "Artefact de moiré",
      D: "Ligne de trame"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Les implants métalliques causent un durcissement du faisceau, ce qui entraîne des artefacts. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 30,
    question: "Lors d’un examen abdominal d’urgence, que peut suggérer la présence d’air libre sous le diaphragme?",
    options: {
      A: "Infection urinaire",
      B: "Pneumonie",
      C: "Perforation d’un organe creux",
      D: "Hernie hiatale"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "La présence d'air sous le diaphragme est un signe classique de perforation digestive. Source : CNESST, SFR, Urgences radiologiques."
  }
]},

  "2024-01-02":  {
    theme: "Principes Fondamentaux en Radiologie 2",
    questions:[
  {
    id: 1,
    question: "Quelle est la principale méthode pour réduire l’exposition du patient aux rayonnements ionisants lors d’une radiographie ?",
    options: {
      A: "Augmenter la distance entre la source de rayonnement et le patient",
      B: "Utiliser une collimation appropriée",
      C: "Réduire le temps d’exposition",
      D: "Augmenter la dose de rayonnement"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La collimation réduit la surface exposée, limitant la dose au patient et le rayonnement diffusé. C'est la mesure la plus efficace selon les guides de radioprotection. Source : CNESST, Santé Canada, ICRP 105."
  },
  {
    id: 2,
    question: "Pour une radiographie de la cheville en incidence mortaise, quel est le bon positionnement ?",
    options: {
      A: "Rotation interne de 15-20°",
      B: "Rotation externe de 15-20°",
      C: "Rotation interne de 45°",
      D: "Rotation externe de 45°"
    },
    reponseCorrecte: OptionKeyEnum.A,
    justification: "La mortaise tibio-talaire est dégagée en rotation interne de 15 à 20°. Source : Manuel de radiologie, SFR ; optimroepmq.ca."
  },
  {
    id: 3,
    question: "Un technologue en radiodiagnostic reçoit une demande d’examen pour un patient sans ordonnance médicale. Quelle est la démarche appropriée ?",
    options: {
      A: "Procéder à l’examen sans délai",
      B: "Contacter le médecin prescripteur pour obtenir l’ordonnance",
      C: "Refuser de réaliser l’examen sans ordonnance",
      D: "Informer le patient qu’il doit obtenir une ordonnance avant l’examen"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Une ordonnance médicale valide est obligatoire. Le technologue doit contacter le prescripteur pour régulariser la situation avant d’agir. Source : Loi sur les professions, OTIMROEPMQ."
  },
  {
    id: 4,
    question: "Lors de l’utilisation d’un produit de contraste iodé, quel est le principal risque pour le patient ?",
    options: {
      A: "Réaction allergique",
      B: "Infection",
      C: "Douleur au site d’injection",
      D: "Nausées"
    },
    reponseCorrecte: OptionKeyEnum.A,
    justification: "La réaction allergique (immunologique ou idiosyncrasique) est le risque majeur et justifie la surveillance post-injection. Source : INESSS, guides hospitaliers, otimroepmq.ca."
  },
  {
    id: 5,
    question: "En tomodensitométrie (TDM), quel est l’objectif principal de l’utilisation de la fenêtre de reconstruction ?",
    options: {
      A: "Améliorer la résolution spatiale",
      B: "Optimiser le contraste des tissus d’intérêt",
      C: "Réduire le bruit de l’image",
      D: "Augmenter la dose de rayonnement"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La fenêtre de reconstruction permet de choisir l’échelle de gris la plus adaptée à l’organe ou la pathologie recherchée, optimisant le contraste. Source : Bushong, CT Handbook ; optimroepmq.ca."
  },
  {
    id: 6,
    question: "Un technologue en radiodiagnostic remarque une erreur dans le dossier médical d’un patient. Quelle est la démarche appropriée ?",
    options: {
      A: "Ignorer l’erreur si elle ne semble pas affecter le traitement",
      B: "Signaler l’erreur au supérieur hiérarchique et au médecin responsable",
      C: "Corriger l’erreur soi-même dans le dossier",
      D: "Informer le patient de l’erreur"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le technologue doit signaler toute erreur au supérieur hiérarchique et au médecin, sans modifier lui-même le dossier. Source : Code de déontologie OTIMROEPMQ, guides hospitaliers."
  },
  {
    id: 7,
    question: "Quel est le critère principal pour qu’un technologue en radiodiagnostic puisse effectuer des échographies en pratique autonome ?",
    options: {
      A: "Avoir suivi une formation en échographie",
      B: "Avoir une expérience de 5 ans en radiodiagnostic",
      C: "Détenir une attestation de formation spécifique en échographie délivrée par l’Ordre",
      D: "Avoir l’autorisation écrite d’un médecin"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’OTIMROEPMQ exige une attestation spécifique pour pratiquer l’échographie de façon autonome. Source : Règlements OTIMROEPMQ."
  },
  {
    id: 8,
    question: "Quel est le pourcentage de technologues en radiodiagnostic visés par l’inspection professionnelle chaque année ?",
    options: {
      A: "10%",
      B: "15%",
      C: "20%",
      D: "25%"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Environ 20% des membres sont visés annuellement selon le programme d’inspection professionnelle de l’Ordre. Source : OTIMROEPMQ, rapport annuel."
  },
  {
    id: 9,
    question: "Si un technologue en radiodiagnostic retourne au travail après une absence de moins de 5 ans, combien d’heures doivent être effectuées pour ne pas avoir besoin de stage ou de cours de perfectionnement ?",
    options: {
      A: "500 heures",
      B: "600 heures",
      C: "700 heures",
      D: "800 heures"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "700 heures en 5 ans sont exigées pour maintenir la compétence sans devoir reprendre un stage ou une formation. Source : OTIMROEPMQ, règlement sur la formation continue."
  },
  {
    id: 10,
    question: "Quelle est une pratique illégale pour un technologue en radiodiagnostic ?",
    options: {
      A: "Utiliser le titre réservé de technologue sans être membre de l’Ordre",
      B: "Effectuer une radiographie sans ordonnance médicale",
      C: "Utiliser des radiations ionisantes à des fins non diagnostiques",
      D: "Toutes les réponses ci-dessus"
    },
    reponseCorrecte: OptionKeyEnum.D,
    justification: "Chacune de ces pratiques constitue une infraction à la Loi sur les professions et au Code de déontologie. Source : OTIMROEPMQ, Code des professions, Règlement."
  }
]},
  "2024-01-03":  {
    theme: "Principes Fondamentaux en Radiologie 3",
    questions:[
  {
    id: 1,
    question: "Quelle est la dose efficace maximale annuelle recommandée pour un travailleur en radiologie, selon la CIPR (Commission Internationale de Protection Radiologique)?",
    options: {
      A: "10 mSv",
      B: "20 mSv",
      C: "50 mSv",
      D: "100 mSv"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La CIPR (ICRP) recommande une limite de 20 mSv par an pour les travailleurs exposés, en moyenne sur 5 ans, avec un maximum de 50 mSv pour une seule année. Source : ICRP Publication 103."
  },
  {
    id: 2,
    question: "Quelle est la principale raison pour laquelle un patient doit être en inspiration profonde pour une radiographie pulmonaire postéro-antérieure (PA)?",
    options: {
      A: "Réduire le flou de mouvement",
      B: "Diminuer la dose de radiation",
      C: "Permettre une meilleure visualisation des structures médiastinales",
      D: "Éviter la superposition de la clavicule sur l’apex pulmonaire"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L'inspiration profonde abaisse le diaphragme et dilate les poumons, permettant une visualisation optimale du médiastin et du parenchyme pulmonaire. Source : Manuel de radiologie thoracique, SFR, otimroepmq.ca."
  },
  {
    id: 3,
    question: "En TDM (CT), quelle est l’unité utilisée pour quantifier la densité des tissus?",
    options: {
      A: "Bq (becquerel)",
      B: "Hounsfield Unit (HU)",
      C: "Gray (Gy)",
      D: "Roentgen"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La densité en TDM est mesurée en unités Hounsfield (UH, HU en anglais), où l'eau est à 0 HU. Source : Bushong, The Essential Physics of Medical Imaging."
  },
  {
    id: 4,
    question: "Quel est l’effet biologique déterministe suivant le plus susceptible d’apparaître après une exposition à une forte dose localisée de radiation (> 2 Gy)?",
    options: {
      A: "Cancer",
      B: "Cataracte",
      C: "Syndrome gastro-intestinal",
      D: "Mutations génétiques"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La cataracte est un effet déterministe typique après irradiation localisée (>2 Gy), alors que cancer et mutations sont des effets stochastiques. Source : ICRP, OMS, otimroepmq.ca."
  },
  {
    id: 5,
    question: "Lors d’une radiographie de la main pour âge osseux chez un enfant, quelle main doit être systématiquement radiographiée?",
    options: {
      A: "La main dominante",
      B: "La main gauche",
      C: "La main droite",
      D: "Peu importe, selon la pathologie"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La main gauche est la référence pour l'évaluation de l'âge osseux, afin de comparer aux atlas standards. Source : Greulich & Pyle, SFR, otimroepmq.ca."
  },
  {
    id: 6,
    question: "Quel paramètre technique influence le plus le contraste radiographique en radiologie conventionnelle?",
    options: {
      A: "mAs",
      B: "Distance foyer-film",
      C: "kVp",
      D: "Temps d’exposition"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le kVp (kilovoltage crête) module la pénétration des rayons X et influence directement le contraste de l’image. Source : Bushong, Radiologic Science for Technologists."
  },
  {
    id: 7,
    question: "Quel est l’angle optimal pour projeter la colonne lombaire en oblique afin de mieux visualiser les articulations zygapophysaires?",
    options: {
      A: "25°",
      B: "30°",
      C: "45°",
      D: "60°"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’oblique à 45° est standard pour montrer les articulations zygapophysaires lombaires. Source : SFR, ARRT, optimroepmq.ca."
  },
  {
    id: 8,
    question: "Quelle est l’incidence radiographique la plus appropriée pour démontrer un pneumothorax minime?",
    options: {
      A: "PA debout",
      B: "Latérale debout",
      C: "Décubitus dorsal",
      D: "Décubitus latéral avec rayon horizontal"
    },
    reponseCorrecte: OptionKeyEnum.D,
    justification: "Le décubitus latéral avec rayon horizontal est le plus sensible pour détecter de petits volumes d'air libre, surtout si le patient ne peut se tenir debout. Source : SFR, optimisation radiologique pulmonaire."
  },
  {
    id: 9,
    question: "Quelle modalité est la plus sensible pour détecter une fracture occulte non visible à la radiographie standard?",
    options: {
      A: "Échographie",
      B: "TDM",
      C: "IRM",
      D: "Scintigraphie osseuse"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’IRM est la plus sensible pour visualiser un œdème osseux ou fracture occulte non visible sur une radiographie. Source : SFR, guidelines imagerie osseuse."
  },
  {
    id: 10,
    question: "Quelle séquence IRM est la plus sensible pour détecter un œdème osseux?",
    options: {
      A: "T1",
      B: "T2",
      C: "STIR",
      D: "FLAIR"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "La séquence STIR (ou T2 Fat Sat) est la plus sensible pour l’œdème osseux, grâce à la suppression du signal graisseux. Source : Bushberg, imagerie IRM, SFR."
  }
]},
  "2024-01-04":  {
    theme: "Principes Fondamentaux en Radiologie 4",
    questions:[
  {
    id: 1,
    question: "Quel est le rôle principal du filtre en aluminium dans un tube à rayons X?",
    options: {
      A: "Augmenter la production de rayons X",
      B: "Réduire le contraste de l’image",
      C: "Réduire le rayonnement de faible énergie",
      D: "Augmenter la dose au patient"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le filtre en aluminium élimine les photons de faible énergie qui n’apportent rien à l’image mais augmentent la dose reçue par le patient. Source : Bushong S.C., Radiologic Science for Technologists."
  },
  {
    id: 2,
    question: "Lorsqu’on augmente le kVp, quel est l’effet sur le contraste de l’image radiographique?",
    options: {
      A: "Le contraste augmente",
      B: "Le contraste diminue",
      C: "Aucun changement",
      D: "L’image devient plus sombre uniquement"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "En augmentant le kVp, la pénétration des rayons X est plus uniforme à travers les tissus, ce qui diminue le contraste. Source : Bushong, The Essential Physics of Medical Imaging."
  },
  {
    id: 3,
    question: "Quel type de rayonnement constitue la majorité du faisceau produit dans un tube à rayons X?",
    options: {
      A: "Rayonnement caractéristique",
      B: "Rayonnement de freinage (Bremsstrahlung)",
      C: "Rayonnement diffusé",
      D: "Rayonnement gamma"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le rayonnement de freinage (Bremsstrahlung) constitue la majorité du faisceau produit dans un tube à rayons X conventionnel. Source : Bushberg J., The Essential Physics of Medical Imaging."
  },
  {
    id: 4,
    question: "Pourquoi utilise-t-on un algorithme de convolution-rétroprojection en tomodensitométrie (CT)?",
    options: {
      A: "Pour augmenter la dose de rayonnement",
      B: "Pour ajuster le contraste de l’image",
      C: "Pour reconstruire une image à partir des données d’acquisition",
      D: "Pour réduire le bruit thermique du détecteur"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L'algorithme de convolution-rétroprojection permet de reconstruire les images CT à partir des données brutes acquises. Source : Bushong, Radiologic Science for Technologists."
  },
  {
    id: 5,
    question: "Quelle est la dose efficace approximative d’une radiographie pulmonaire PA standard chez un adulte?",
    options: {
      A: "0,002 mSv",
      B: "0,02 mSv",
      C: "0,2 mSv",
      D: "2,0 mSv"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La dose efficace typique pour une radiographie pulmonaire PA adulte est d’environ 0,02 mSv. Source : ICRP Publication 121, Santé Canada."
  },
  {
    id: 6,
    question: "Quel énoncé décrit correctement le flou géométrique?",
    options: {
      A: "Causé par les mouvements du patient",
      B: "Peut être réduit avec un temps d’exposition plus court",
      C: "Augmente avec une distance foyer-film réduite",
      D: "Est causé uniquement par une mauvaise mise au point du récepteur"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le flou géométrique augmente si la distance foyer-film diminue ou si la taille du foyer augmente. Source : Bushong, Radiologic Science for Technologists."
  },
  {
    id: 7,
    question: "Pourquoi utilise-t-on une grille antidiffusante?",
    options: {
      A: "Pour augmenter la taille de l’image",
      B: "Pour améliorer le contraste en absorbant les rayons diffusés",
      C: "Pour réduire la dose de rayonnement",
      D: "Pour corriger la distorsion géométrique"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La grille antidiffusante améliore le contraste en absorbant les rayonnements diffusés avant qu'ils n’atteignent le détecteur. Source : Carlton R.R., Principles of Radiographic Imaging."
  },
  {
    id: 8,
    question: "Quel effet peut avoir un mauvais positionnement du détecteur en radiographie numérique directe (DR)?",
    options: {
      A: "Aucune conséquence significative",
      B: "Peut provoquer un effet de moiré",
      C: "Peut entraîner une image floue ou mal centrée",
      D: "Peut causer une saturation de l’image"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Un détecteur mal positionné peut entraîner une image floue ou mal centrée, nuisant à la qualité diagnostique. Source : OTIMROEPMQ, Carlton R.R."
  },
  {
    id: 9,
    question: "Quel paramètre influence principalement la quantité de rayons X produits?",
    options: {
      A: "Le kVp",
      B: "Le temps d’exposition",
      C: "Le mAs",
      D: "La distance foyer-film"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le mAs (produit courant-intensité par temps) détermine directement la quantité de rayons X produits. Source : Bushong, The Essential Physics of Medical Imaging."
  },
  {
    id: 10,
    question: "Pourquoi utilise-t-on une anode en molybdène en mammographie?",
    options: {
      A: "Elle produit des rayons X de haute énergie",
      B: "Elle génère un faisceau plus pénétrant pour les tissus denses",
      C: "Elle produit un faisceau de faible énergie optimal pour les tissus mammaires",
      D: "Elle permet de réduire la durée de l’examen"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le molybdène produit un faisceau de faible énergie, optimal pour visualiser le contraste des tissus mammaires. Source : Bushberg, The Essential Physics of Medical Imaging."
  }
]},
  "2024-01-05":  {
    theme: "Principes Fondamentaux en Radiologie 5",
    questions: [
  {
    id: 1,
    question: "Quel est le principal effet biologique des rayons X sur les cellules humaines?",
    options: {
      A: "Ionisation de l’eau intracellulaire",
      B: "Échauffement des tissus",
      C: "Augmentation du métabolisme cellulaire",
      D: "Neutralisation de l’ADN"
    },
    reponseCorrecte: OptionKeyEnum.A,
    justification: "Le principal effet biologique est l’ionisation de l’eau intracellulaire, qui génère des radicaux libres endommageant l’ADN et les structures cellulaires. Source : OMS, Bushberg, The Essential Physics of Medical Imaging."
  },
  {
    id: 2,
    question: "Dans quel cas l’utilisation d’un angle de tube est-elle la plus courante?",
    options: {
      A: "Pour réduire la dose au patient",
      B: "Pour augmenter la résolution spatiale",
      C: "Pour désuperposer les structures anatomiques",
      D: "Pour accélérer le temps d’exposition"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’angle de tube permet de désuperposer ou de séparer certaines structures anatomiques (ex. clavicule, crâne, sacrum). Source : SFR, Carlton R.R."
  },
  {
    id: 3,
    question: "Quelle est la principale fonction du mAs dans une radiographie?",
    options: {
      A: "Contrôler le contraste",
      B: "Réduire le bruit de fond",
      C: "Ajuster la densité (noirceur) de l’image",
      D: "Modifier la résolution spatiale"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le mAs contrôle la quantité totale de rayons X produits et donc la densité (noirceur) de l’image. Source : Bushong, Radiologic Science for Technologists."
  },
  {
    id: 4,
    question: "Que signifie un artefact de mouvement sur une image radiologique?",
    options: {
      A: "Une distorsion due à un champ magnétique",
      B: "Une surexposition locale",
      C: "Une image floue due au déplacement du patient",
      D: "Une absence de contraste entre les structures"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le mouvement du patient ou de la structure anatomique pendant l’exposition provoque un flou de mouvement. Source : SFR, Carlton R.R."
  },
  {
    id: 5,
    question: "Quel est le rôle du détecteur à panneau plat dans les systèmes DR (radiographie numérique directe)?",
    options: {
      A: "Amplifier le faisceau incident",
      B: "Transformer les rayons X en signal électrique",
      C: "Filtrer le rayonnement secondaire",
      D: "Compresser les données de l’image"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le détecteur à panneau plat convertit les rayons X en signal électrique, base du fonctionnement des systèmes DR. Source : Bushberg, The Essential Physics of Medical Imaging."
  },
  {
    id: 6,
    question: "Quelle mesure réduit efficacement la dose au patient en radiologie conventionnelle?",
    options: {
      A: "Diminuer le kVp",
      B: "Utiliser un champ de rayonnement plus large",
      C: "Utiliser une grille avec un ratio élevé",
      D: "Utiliser un collimateur pour limiter le champ"
    },
    reponseCorrecte: OptionKeyEnum.D,
    justification: "Limiter le champ avec un collimateur réduit la dose reçue par le patient en limitant la zone irradiée. Source : CNESST, ICRP 105."
  },
  {
    id: 7,
    question: "Lors d’un examen fluoroscopique, quel paramètre influence le plus la dose absorbée par le patient?",
    options: {
      A: "Le contraste utilisé",
      B: "Le nombre d’images par seconde",
      C: "La durée de la fluoroscopie",
      D: "La température de l’anode"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "La dose est directement proportionnelle à la durée d’exposition en fluoroscopie. Source : CNESST, SFR."
  },
  {
    id: 8,
    question: "Quel indicateur est utilisé pour suivre la dose reçue par les technologues?",
    options: {
      A: "Le kVp moyen",
      B: "Le rapport signal-bruit",
      C: "Le dosimètre individuel",
      D: "Le détecteur DR"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le dosimètre individuel est l’outil réglementaire pour la surveillance de la dose reçue par chaque professionnel. Source : Santé Canada, OTIMROEPMQ."
  },
  {
    id: 9,
    question: "Quel facteur influence principalement la résolution spatiale d’une image radiographique?",
    options: {
      A: "Le temps d’exposition",
      B: "La taille focale",
      C: "Le filtre en aluminium",
      D: "Le contraste"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Une petite taille focale augmente la résolution spatiale en limitant le flou géométrique. Source : Bushong, Radiologic Science for Technologists."
  },
  {
    id: 10,
    question: "Quel examen expose généralement le patient à la plus grande dose de rayonnement?",
    options: {
      A: "Radiographie abdominale",
      B: "CT abdomino-pelvien",
      C: "Radiographie du thorax",
      D: "Radiographie des sinus"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "Le scanner (CT) abdomino-pelvien délivre une dose efficace bien supérieure à celle des examens radiographiques conventionnels. Source : Santé Canada, ICRP."
  }
]},  
"2024-01-06":  {
    theme: "Principes Fondamentaux en Radiologie 6",
    questions:[
  {
    id: 11,
    question: "Un patient entre à l’urgence avec une douleur aiguë à la cheville après une chute. Quelle incidence radiographique doit être faite en premier?",
    options: {
      A: "Cheville AP uniquement",
      B: "Cheville latérale uniquement",
      C: "Cheville AP et latérale",
      D: "Pied AP et oblique"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Les incidences standards pour un traumatisme de la cheville sont AP et latérale, permettant d’évaluer l’alignement et les fractures. Source : SFR, ARRT."
  },
  {
    id: 12,
    question: "Lors d’une fluoroscopie prolongée, quelle mesure devrait être prise pour protéger le technologue?",
    options: {
      A: "S’éloigner à plus de 2 mètres sans protection",
      B: "Porter un tablier plombé et utiliser un écran protecteur mobile",
      C: "Se placer entre le patient et la source de rayons X",
      D: "Réduire le champ de vision du moniteur"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La protection du personnel repose sur le port du tablier plombé et d’un écran mobile pour bloquer les rayons diffusés. Source : CNESST, OTIMROEPMQ."
  },
  {
    id: 13,
    question: "En tomodensitométrie, un artefact en anneau (ring artifact) est généralement causé par :",
    options: {
      A: "Une mauvaise calibration du kVp",
      B: "Une mauvaise préparation du patient",
      C: "Un détecteur défectueux",
      D: "Un mouvement respiratoire"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Un artefact circulaire ('ring artifact') est typiquement lié à un élément défectueux du détecteur. Source : Bushong, Carlton."
  },
  {
    id: 14,
    question: "Sur une radiographie de thorax PA normale, quelle structure ne doit pas être visible?",
    options: {
      A: "L’ombre cardiaque",
      B: "Les côtes postérieures",
      C: "Le bord inférieur des poumons",
      D: "Les vertèbres lombaires"
    },
    reponseCorrecte: OptionKeyEnum.D,
    justification: "Les vertèbres lombaires ne sont normalement pas visibles sur une radiographie de thorax PA, car le faisceau ne les traverse pas dans cette incidence. Source : SFR, manuel de radiologie."
  },
  {
    id: 15,
    question: "Quelle est la réglementation au Québec concernant le port du dosimètre personnel?",
    options: {
      A: "Facultatif si l’exposition est faible",
      B: "Obligatoire seulement en fluoroscopie",
      C: "Obligatoire pour tout technologue exposé aux rayonnements ionisants",
      D: "Requis uniquement si le technologue travaille dans une salle fermée"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Le port du dosimètre est obligatoire pour tout technologue exposé, quelle que soit la modalité. Source : OTIMROEPMQ, Santé Canada."
  },
  {
    id: 16,
    question: "Un patient obèse nécessite une image lombaire en AP. Quelle adaptation technique est la plus appropriée?",
    options: {
      A: "Diminuer le mAs",
      B: "Réduire la distance source-détecteur",
      C: "Augmenter le kVp",
      D: "Utiliser un filtre compensateur"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "Pour des patients obèses, on augmente le kVp afin d’obtenir une meilleure pénétration des tissus épais. Source : Bushong, Carlton."
  },
  {
    id: 17,
    question: "Lors d’un examen de genou en position “tunnel intercondylaire”, quel est l’objectif principal?",
    options: {
      A: "Évaluer la rotule",
      B: "Visualiser la cavité articulaire tibio-fémorale",
      C: "Voir les ménisques en détail",
      D: "Évaluer l’articulation fémoro-patellaire"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La position 'tunnel' sert à dégager la cavité intercondylaire et à évaluer le plan articulaire tibio-fémoral. Source : SFR, manuel de radiologie."
  },
  {
    id: 18,
    question: "Quelle est la limite annuelle de dose efficace pour un technologue au Québec (selon la réglementation canadienne)?",
    options: {
      A: "10 mSv",
      B: "20 mSv",
      C: "50 mSv",
      D: "100 mSv"
    },
    reponseCorrecte: OptionKeyEnum.B,
    justification: "La réglementation canadienne fixe la limite annuelle à 20 mSv pour les travailleurs exposés. Source : SCFR, OTIMROEPMQ, ICRP."
  },
  {
    id: 19,
    question: "Sur une image thoracique, si la trachée semble déplacée vers la droite, cela peut indiquer :",
    options: {
      A: "Un pneumothorax gauche",
      B: "Une fracture costale droite",
      C: "Une pneumonie bilatérale",
      D: "Une rotation vers la droite"
    },
    reponseCorrecte: OptionKeyEnum.A,
    justification: "Un pneumothorax à gauche peut provoquer un déplacement de la trachée vers le côté opposé par effet de masse. Source : SFR, manuel de radiologie."
  },
  {
    id: 20,
    question: "Pourquoi utilise-t-on une anode rotative dans les tubes à rayons X modernes?",
    options: {
      A: "Pour produire un faisceau plus large",
      B: "Pour diminuer la dose au patient",
      C: "Pour répartir la chaleur sur une plus grande surface",
      D: "Pour améliorer la transmission des rayons X"
    },
    reponseCorrecte: OptionKeyEnum.C,
    justification: "L’anode rotative permet de répartir la chaleur sur toute la surface, augmentant la capacité de charge du tube. Source : Bushong, Radiologic Science for Technologists."
  }
]},
  "2025-05-26":  {
    theme: "Principes Fondamentaux en Radiologie 7",
    questions:[
    {
      id: 1,
      question: "Un patient de 32 ans, polytraumatisé stable hémodynamiquement, arrive à l’urgence. Trois tomodensitométries sont demandées : cérébrale, thoracique et abdomino-pelvienne. Quelle séquence d’exécution maximise la prise en charge tout en limitant les risques liés au produit de contraste ?",
      options: {
        A: "Cérébrale → Thoracique avec contraste → Abdomino-pelvienne avec contraste",
        B: "Thoracique avec contraste → Abdomino-pelvienne avec contraste → Cérébrale sans contraste",
        C: "Cérébrale sans contraste → Thoracique avec contraste → Abdomino-pelvienne avec contraste",
        D: "Abdomino-pelvienne avec contraste → Thoracique sans contraste → Cérébrale sans contraste"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Le scanner cérébral sans contraste doit précéder toute injection de contraste pour éviter que le produit n'altère la lecture des hémorragies ou infarctus. Ensuite, l’examen injecté thoraco-abdomino-pelvien peut se faire en une seule acquisition, optimisant temps et dose. Source : recommandations de trauma avancé, otimroepmq.ca."
    },
    {
      id: 2,
      question: "Lors d’une radiographie de bassin AP chez un garçon de 6 ans, le faisceau primaire englobe les gonades. Quelle affirmation décrit le mieux la conduite conforme aux normes québécoises ?",
      options: {
        A: "Le cache gonadique est systématiquement contre-indiqué parce qu’il masque des repères osseux.",
        B: "Le cache doit être utilisé s’il protège sans nuire à la qualité diagnostique de l’image.",
        C: "Le cache est optionnel ; seul le collimateur suffit pour réduire la dose.",
        D: "Le cache n’est utile qu’en cas d’examens répétés (> 3 clichés)."
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les normes de radioprotection de l’OTIMROEPMQ et de Santé Canada stipulent que le cache gonadique est recommandé si la protection ne masque pas de structures essentielles au diagnostic. Source : otimroepmq.ca, Santé Canada."
    },
    {
      id: 3,
      question: "Une patiente de 28 ans subit un lavement baryté pour saignements digestifs. Pour visualiser l’angle hépatique du côlon, quelle incidence produit la superposition la moins importante des structures ?",
      options: {
        A: "OPAD (oblique postérieure axiale droite)",
        B: "OPA (oblique postérieure axiale gauche)",
        C: "Profil droit strict",
        D: "PA couché ventral 30° crânial"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "L’incidence OPAD (oblique postérieure axiale droite) est celle recommandée par l’OTIMROEPMQ pour dégager l’angle hépatique lors d’un lavement baryté. Source : otimroepmq.ca."
    },
    {
      id: 4,
      question: "En radiographie thoracique PA numérique adulte, quel paramètre modifié isolément réduit le flou de mouvement sans augmenter la dose patient ?",
      options: {
        A: "Doubler le kVp et diviser le mAs par 2",
        B: "Augmenter le SID (distance foyer-film) de 150 cm à 200 cm",
        C: "Passer le temps d’exposition de 100 ms à 20 ms en gardant le même mAs",
        D: "Ajouter une grille anti-diffusante 12:1"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Doubler le kVp et diviser le mAs par 2 maintient le produit d’exposition (EI) mais réduit le temps d’exposition, limitant le flou de mouvement, sans augmenter la dose. Source : otimroepmq.ca."
    },
    {
      id: 5,
      question: "Un patient présente de l’urticaire généralisée et un prurit intense après une injection de produit de contraste iodé. Quelle est la première action du technologue ?",
      options: {
        A: "Administrer immédiatement 0,3 mg d’adrénaline IM",
        B: "Arrêter l’injection, installer O₂, alerter le médecin radiologue et préparer l’antihistaminique",
        C: "Faire une injection IV de corticostéroïdes puis observer",
        D: "Documenter la réaction dans le dossier avant toute autre mesure"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "En cas de réaction modérée (urticaire généralisée), l’arrêt immédiat de l’injection, l’alerte du médecin, l’administration d’oxygène et la préparation de l’antihistaminique sont recommandés. Source : INESSS, protocoles hospitaliers québécois."
    },
    {
      id: 6,
      question: "Quel DLP de tête adulte (en mGy·cm) dépasse le niveau de référence diagnostique (NRD, 75ᵉ percentile) observé au Québec selon l’étude APIBQ ?",
      options: {
        A: "360 mGy·cm",
        B: "950 mGy·cm",
        C: "1 150 mGy·cm",
        D: "1 800 mGy·cm"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "L’étude APIBQ 2009 place le NRD (75ᵉ percentile) CT tête adulte à environ 1 100 mGy·cm ; 1 150 mGy·cm est donc le premier seuil qui le dépasse. Source : apibq.ca."
    },
    {
      id: 7,
      question: "Un journaliste appelle le service d’imagerie pour confirmer qu’une célébrité a passé une radiographie hier. Que doit répondre le technologue ?",
      options: {
        A: "Confirmer la visite sans donner de détails cliniques",
        B: "Refuser poliment de confirmer ou d’infirmer, en invoquant le secret professionnel",
        C: "Orienter le journaliste vers la direction de l’hôpital",
        D: "Mentionner que l’information est publique si le patient l’a annoncée sur les réseaux sociaux"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le Code de déontologie impose le secret professionnel absolu : aucune information ne peut être donnée à un tiers sans consentement explicite. Source : otimroepmq.ca."
    },
    {
      id: 8,
      question: "Une patiente allochtone ne parle ni français ni anglais. Un CT abdomino-pelvien avec contraste est requis en urgence. Quelle démarche garantit le meilleur consentement éclairé ?",
      options: {
        A: "Utiliser Google Translate sur le téléphone personnel du technologue",
        B: "Procéder au CT et expliquer ensuite, car l’urgence prime",
        C: "Faire appel au service d’interprète médical certifié avant l’examen",
        D: "Demander à un membre de la famille de traduire sommairement"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Le consentement éclairé ne peut être considéré valide que si l’information est communiquée dans une langue comprise par le patient, idéalement via un interprète médical certifié. Source : normes d’éthique médicale, otimroepmq.ca."
    },
    {
      id: 9,
      question: "À quelle fréquence minimale le test de constance (uniformité) doit-il être réalisé sur un moniteur de visualisation diagnostique ?",
      options: {
        A: "Quotidiennement",
        B: "Hebdomadairement",
        C: "Mensuellement",
        D: "Annuellement"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Les lignes directrices québécoises et canadiennes recommandent au minimum un test de constance (uniformité) mensuel sur les moniteurs de diagnostic. Source : otimroepmq.ca."
    },
    {
      id: 10,
      question: "Lequel des énoncés définit correctement le principe ALADA appliqué en radiographie numérique ?",
      options: {
        A: "As Low As Detector Accepts – adapter la dose à la sensibilité du détecteur.",
        B: "As Long As Dose Allows – tolérer des reprises si la dose reste sous 5 mSv.",
        C: "As Low As Diagnostically Acceptable – minimiser la dose tout en préservant la qualité nécessaire au diagnostic.",
        D: "As Low As Data Accumulates – diminuer la dose à mesure que les acquisitions augmentent."
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Le principe ALADA (As Low As Diagnostically Acceptable) signifie que la dose doit être la plus basse possible tant que la qualité de l’image demeure suffisante pour le diagnostic. Source : otimroepmq.ca."
    }
  ]},
    "2025-05-27":  {
    theme: "Principes Fondamentaux en Radiologie 8",
    questions:[
    {
      id: 1,
      question: "En tomodensitométrie polytrauma adulte, quel ordre de séquences maximise la valeur diagnostique tout en limitant la dose ?",
      options: {
        A: "1 : crâne S/S, 2 : cou injecté, 3 : CAP injecté",
        B: "1 : crâne injecté, 2 : cou S/S, 3 : CAP injecté",
        C: "1 : CAP injecté, 2 : crâne S/S, 3 : cou injecté",
        D: "1 : cou injecté, 2 : CAP injecté, 3 : crâne S/S"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Les polytraumas bénéficient d’un balayage crâne sans contraste suivi d’un cou et d’un CAP injectés : on obtient d’abord l’information vitale neuro-traumatique sans retarder l’injection corps entier, tout en évitant deux passages de contraste. Les autres séquences créent soit une double dose iodée inutile (B & D) soit retardent la tête (C). Source : otimroepmq.ca."
    },
    {
      id: 2,
      question: "Pour une radiographie AP du bassin d’un adolescent, l’emploi de la protection gonadique est …",
      options: {
        A: "Toujours obligatoire",
        B: "Recommandé uniquement si les gonades se trouvent dans le faisceau primaire et que l’image n’est pas compromise",
        C: "Inutile parce que la dose est faible",
        D: "Contre-indiqué sous peine d’artefacts sévères"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La ligne directrice de radioprotection précise que les écrans protecteurs ne sont utiles que si les gonades se trouvent dans le faisceau primaire et n’altèrent pas l’image ; sinon ils sont superflus. Les affirmations A et D généralisent abusivement, C ignore la condition du faisceau primaire. Source : otimroepmq.ca."
    },
    {
      id: 3,
      question: "Lors d’un cliché AP oblique pour visualiser l’angle hépatique (flexure hépatique) du côlon, la bonne rotation est …",
      options: {
        A: "RPO 35°",
        B: "RAO 45°",
        C: "LAO 35°",
        D: "LPO 45°"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La flexure hépatique est mieux dégagée en RAO ~45° ; les autres obliques projettent la flexure inverse ou superposent le foie. Référence positionnelle Merrill’s Atlas. Source : otimroepmq.ca."
    },
    {
      id: 4,
      question: "Le moyen le plus efficace pour réduire le flou de mouvement sur une radiographie pulmonaire sans augmenter la dose est …",
      options: {
        A: "Doubler le mAs",
        B: "Augmenter le kVp et réduire le mAs",
        C: "Passer de 180 cm à 100 cm SID",
        D: "Utiliser une grille 10:1"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Augmenter modérément le kVp tout en baissant proportionnellement le mAs raccourcit le temps d’exposition, réduisant le flou de mouvement sans accroître la dose totale. Doubler mAs (A) augmente la dose, changer SID (C) ou ajouter une grille (D) n’a pas d’effet sur le mouvement. Source : otimroepmq.ca."
    },
    {
      id: 5,
      question: "Un patient présente une urticaire généralisée après injection de produit de contraste iodé. Quelle prise en charge initiale est conforme aux recommandations INESSS ?",
      options: {
        A: "Adrénaline 0,3 mg IM",
        B: "Antihistaminique H1 IV + surveillance",
        C: "Corticostéroïdes IV en bolus",
        D: "Arrêt de l’examen sans traitement"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Pour une réaction cutanée isolée (urticaire) : antihistaminique H1 IV (souvent diphenhydramine) + surveillance. Adrénaline (A) est réservée à l’anaphylaxie, les corticoïdes (C) agissent tardivement, se limiter à l’arrêt (D) ne traite pas les symptômes. Source : INESSS."
    },
    {
      id: 6,
      question: "La valeur canadienne (niveau de référence diagnostique) DLP « whole-exam » pour un CT tête adulte (routine) est proche de …",
      options: {
        A: "650 mGy·cm",
        B: "1050 mGy·cm",
        C: "1500 mGy·cm",
        D: "2100 mGy·cm"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le tableau des DRL internationaux indique un DLP de ≈ 1050 mGy·cm (EC 1999, Allemagne 2003) pour un CT tête adulte « whole exam ». Les autres valeurs sont soit pédiatriques (650), soit dépassent le 75ᵉ percentile (1500, 2100). Source : imagewisely.org."
    },
    {
      id: 7,
      question: "Selon le Code de déontologie, un technologue peut-il confirmer au journaliste qu’un acteur connu vient d’être scanné ?",
      options: {
        A: "Oui, avec l’accord verbal du patient",
        B: "Oui, si l’examen n’a rien révélé",
        C: "Non, secret professionnel absolu",
        D: "Oui, si l’hôpital l’autorise"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "L’article 23 du Code impose le secret professionnel ; aucune information ne peut être divulguée, même l’identité du patient, sauf consentement explicite écrit. Les options A, B, D violent cette obligation. Source : legisquebec.gouv.qc.ca."
    },
    {
      id: 8,
      question: "Un patient allophone ne comprend pas vos explications avant une CT injectée. La bonne conduite est …",
      options: {
        A: "Poursuivre l’examen car il a signé",
        B: "Utiliser un proche comme traducteur médical",
        C: "Reporter l’examen et recourir à un interprète qualifié",
        D: "Faire signer une décharge"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "La norme « Communication » stipule qu’une information compréhensible doit être fournie ; en l’absence de compréhension linguistique, on reporte et recourt à un interprète qualifié. Utiliser un proche (B) est risqué, poursuivre (A) ou décharger (D) ne répond pas au devoir d’explication. Source : otimroepmq.ca."
    },
    {
      id: 9,
      question: "La fréquence minimale de vérification de la luminance des consoles de visualisation (PACS) est …",
      options: {
        A: "Quotidienne",
        B: "Hebdomadaire",
        C: "Mensuelle",
        D: "Annuelle seulement"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les consoles de visualisation doivent être vérifiées hebdomadairement pour la luminance, avec un contrôle exhaustif annuel ; les autres fréquences ne satisfont pas la norme. Source : otimroepmq.ca."
    },
    {
      id: 10,
      question: "Le principe ALADA signifie …",
      options: {
        A: "Réduire la dose tant que c’est techniquement possible",
        B: "Ajuster la dose à la plus basse valeur diagnostiquement acceptable",
        C: "N’utiliser que des protocoles pédiatriques",
        D: "Appliquer systématiquement un facteur de 50 % de la DRL"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "ALADA = As Low As Diagnostically Acceptable : on abaisse la dose tant que la qualité diagnostique reste suffisante. ALARA (A) n’inclut pas la contrainte diagnostique, C & D déforment le concept. Source : otimroepmq.ca."
    },
    {
      id: 11,
      question: "Avant une radio lombaire chez une femme en âge de procréer, le technologue doit …",
      options: {
        A: "Demander un test β-hCG systématique",
        B: "Questionner le risque de grossesse et documenter la réponse",
        C: "N’interroger que si la patiente le demande",
        D: "Refuser l’examen sans certificat médical"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La section « Patiente enceinte » impose de questionner toute femme en âge de procréer avant irradiation de l’abdomen ou pelvis et de documenter la réponse. Le test systématique (A) n’est pas requis, C est insuffisant, D est contraire à l’ordonnance médicale justifiée. Source : otimroepmq.ca."
    },
    {
      id: 12,
      question: "Pour une radiographie thoracique pédiatrique (< 5 ans), le paramètre primordial pour réduire la dose est …",
      options: {
        A: "Utiliser la même technique adulte",
        B: "Réduire le kVp mais maintenir le mAs",
        C: "Réduire le mAs et conserver un kVp « optimal haut »",
        D: "Augmenter la distance foyer-récepteur"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Pour les poumons pédiatriques, un kVp relativement élevé avec mAs réduit maintient la pénétration sans dose inutile ; diminuer kVp augmente la dose exploitable. Collimation ou SID ont peu d’impact dose/mouvement ici. Source : otimroepmq.ca."
    },
    {
      id: 13,
      question: "Augmenter la distance foyer-récepteur (SID) de 100 cm à 180 cm, toutes choses égales, entraîne …",
      options: {
        A: "Augmentation de la magnification",
        B: "Diminution de la magnification et du flou géométrique",
        C: "Augmentation de la dose patient",
        D: "Aucune différence visible"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Passer à 180 cm SID réduit le faisceau divergent, donc diminue la magnification et le flou. La dose reste quasi inchangée grâce au carré de la distance (compensée par mAs). Source : otimroepmq.ca."
    },
    {
      id: 14,
      question: "Quelle étape supplémentaire sécurise le bon patient avant un examen mobile en salle d’urgence ?",
      options: {
        A: "Se fier au nom sur le brancard",
        B: "Demander la date de naissance et comparer au bracelet",
        C: "Scanner simplement le code-barres de la cassette",
        D: "Vérifier la chambre assignée"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La norme mobile souligne la vigilance sur l’identité ; croiser nom + date de naissance/bracelet est la méthode fiable. Le nom de brancard (A) ou chambre (D) est insuffisant, le scan cassette (C) identifie l’image, pas la personne. Source : otimroepmq.ca."
    },
    {
      id: 15,
      question: "La première action en cas d’extravasation du contraste iodé au CT est …",
      options: {
        A: "Arrêter l’injection et laisser la canule en place",
        B: "Retirer la canule immédiatement",
        C: "Élever le membre puis appliquer chaleur sèche",
        D: "Aspirer le produit avec seringue"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Les normes CT exigent : stopper l’injection, laisser le cathéter, informer le radiologiste et documenter. Retirer la canule (B) empêche l’aspiration / lavage si nécessaire, chaleur immédiate (C) suit seulement après évaluation, aspiration (D) est rarement efficace. Source : otimroepmq.ca."
    },
    {
      id: 16,
      question: "Dans un double-contraste baryté du côlon, la préparation intestinale optimale inclut …",
      options: {
        A: "Régime sans résidu 24 h + laxatif la veille",
        B: "Jeûne strict 6 h, sans laxatif",
        C: "Lavement simple 1 h avant",
        D: "Aucune préparation n’est requise"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Le double-contraste nécessite un côlon propre : régime sans résidu + laxatif la veille. Les autres préparations sont incomplètes ou inadéquates. Source : otimroepmq.ca."
    },
    {
      id: 17,
      question: "L’apparition d’un motif de moiré sur image CR est le plus souvent liée à …",
      options: {
        A: "kVp trop élevé",
        B: "Mauvaise grille à faible nombre de lignes",
        C: "Sous-exposition",
        D: "Filtration additionnelle Cu 0,3 mm"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Un faible nombre de lignes (< 60 l/cm) ou ratio inadapté crée une fréquence spatiale trop basse, donnant un motif de moiré sur DR/CR. Le kVp (A), sous-exposition (C) ou cuivre (D) n’en sont pas la cause principale. Source : otimroepmq.ca."
    },
    {
      id: 18,
      question: "Selon les normes OTIMROEPMQ, on doit placer une grille antidiffusante lorsquʼune région mesurant …",
      options: {
        A: "> 8 cm",
        B: "> 10 cm",
        C: "> 12 cm",
        D: "Toujours, quelle que soit l’épaisseur"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La grille antidiffusante est recommandée lorsque l’épaisseur > 10 cm pour équilibrer diffusion/dose ; < 10 cm la grille ajoute de la dose sans bénéfice. Source : otimroepmq.ca."
    },
    {
      id: 19,
      question: "Avant injection iodée, un DFG ≤ 30 mL/min/1,73 m² implique …",
      options: {
        A: "Aucune précaution supplémentaire",
        B: "Hydratation pré- et post-examen et avis du radiologue",
        C: "Annulation systématique de l’examen",
        D: "Remplacement par produit à base de gadolinium"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La norme CT demande de consigner le DFG et d’ajuster la prise en charge lorsque ≤ 30 mL/min : hydratation, avis du radiologue, mais pas annulation systématique. Source : otimroepmq.ca."
    },
    {
      id: 20,
      question: "En fluoroscopie, le DAP (dose-area-product) est préféré au CTDIvol pour …",
      options: {
        A: "Évaluer la dose au patient en temps réel",
        B: "Comparer différents appareils CT",
        C: "Estimer l’indice de bruit d’image",
        D: "Déterminer la demi-épaisseur d’atténuation"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "En fluoroscopie, le DAP reflète en temps réel la dose totale délivrée (dose × surface) et est donc l’indicateur privilégié pour la gestion patient ; CTDIvol est propre au CT. Les autres propositions confondent les indices. Source : otimroepmq.ca."
    }

  ]},
    "2025-05-28":  {
    theme: "Principes Fondamentaux en Radiologie 9",
    questions:[
    {
      id: 1,
      question: "Lors d’une fluoroscopie digestive, quel réglage réduit le plus efficacement la dose au patient SANS dégrader significativement la qualité d’image ?",
      options: {
        A: "Passer de 30 ips (images par seconde) continu à 7,5 ips pulsé",
        B: "Réduire la tension tube de 110 kVp à 70 kVp",
        C: "Augmenter le courant tube (mA) pour compenser le bruit",
        D: "Intercaler un filtre cuivre de 0,1 mm uniquement durant l’acquisition spot"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Le passage à un mode pulsé faible cadence (≤ 7,5 ips) divise directement le débit de dose tout en conservant une qualité diagnostique acceptable grâce à la persistance rétinienne et aux traitements de bruit. La baisse brutale de kVp (B) augmente d’autant le mA ou le temps d’exposition ; l’augmentation du mA (C) accroît la dose ; le filtre Cu ponctuel (D) protège très peu sur l’examen en continu. Source : ACR–AAPM Fluoroscopy Dose Management Guidelines, OTIMROEPMQ normes de radioscopie."
    },
    {
      id: 2,
      question: "Selon le Règlement canadien sur les appareils émettant des rayonnements, la dose maximale admissible au niveau de la peau (table-top) en mode fluoroscopie NORMAL (sans HLC) est :",
      options: {
        A: "50 mGy/min",
        B: "100 mGy/min",
        C: "150 mGy/min",
        D: "200 mGy/min"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le plafond réglementaire en mode standard est de 100 mGy/min (10 R/min). Au-delà, l’appareil doit passer en mode contrôle de haut niveau (HLC) avec avertissement sonore et visuel. A, C et D sont en-deçà ou au-delà des limites officielles. Source : Règlement C-2001, Santé Canada, art. 20 — appareils radioscopiques."
    },
    {
      id: 3,
      question: "Dans un examen de reflux gastro-œsophagien pédiatrique, quelle stratégie est conforme aux lignes directrices québécoises pour minimiser l’irradiation ?",
      options: {
        A: "Utiliser la ciné en continu pendant toute la déglutition",
        B: "Employer la fonction « image témoin » (last-image-hold) et n’acquérir que des images spot au moment des reflux",
        C: "Passer systématiquement en HLCF pour améliorer la visualisation du cardia",
        D: "Éliminer le collimateur pour éviter de masquer le diaphragme"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le mode « last-image-hold » permet d’observer la séquence sans irradiation continue, n’imposant des spots qu’au moment critique. Les options A et C exposent inutilement, D augmente la surface irradiée. Source : Guide pédiatrique de radioscopie à faible dose, CHU Sainte-Justine / OTIMROEPMQ."
    },
    {
      id: 4,
      question: "Le passage d’un intensificateur d’image 9 pouces (23 cm) à un champ 6 pouces (15 cm) avec zoom électronique se traduit principalement par :",
      options: {
        A: "Une réduction du facteur de dose d’environ 50 %",
        B: "Une augmentation de la dose peau d’environ 2 à 3 fois",
        C: "Une résolution spatiale diminuée",
        D: "Aucun changement notable de dose"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le zoom réduit la surface détectrice, ce qui force l’appareil à accroître l’émission (automatique) pour maintenir le niveau de brillance, multipliant la dose de 2–3×. La résolution s’améliore, pas l’inverse. Source : Bushberg J., The Essential Physics of Medical Imaging, chap. 38."
    },
    {
      id: 5,
      question: "Quel énoncé décrit le MIEUX l’avantage d’un détecteur plan (FPD) sur un intensificateur d’image en radioscopie moderne ?",
      options: {
        A: "Réduction des distorsions en pincushion",
        B: "Capacité à fonctionner sans grille antidiffusante",
        C: "Augmentation systématique du champ de vision",
        D: "Suppression du besoin d’AERC (auto-exposure rate control)"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Les FPD présentent une géométrie plate éliminant les distorsions de type pincushion et S-distortion des intensificateurs. Le besoin de grille et d’AERC subsiste, C est variable (certains FPD sont plus petits). Source : ICRP 135, Digital Fluoroscopy Systems."
    },
    {
      id: 6,
      question: "En radioscopie vasculaire, le mode DSA (Digital Subtraction Angiography) exige typiquement :",
      options: {
        A: "Deux acquisitions : masque (sans contraste) puis série injectée",
        B: "Un seul run injecté, le logiciel créant le masque virtuel",
        C: "Trois séries (masque, pré-flush, post-flush)",
        D: "Une séquence continue de 15 ips sans arrêt"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "La DSA classique superpose un masque acquis avant contraste et une série après injection pour soustraire les tissus. Les options B et C ne reflètent pas la pratique standard ; D ignore le masque préalable. Source : AAPM TG-23 Report, Digital Subtraction Angiography."
    },
    {
      id: 7,
      question: "Lors d’une procédure de réduction de fracture sous radioscopie, quelle position du C-arm limite le PLUS l’exposition de l’équipe ?",
      options: {
        A: "Tube en haut, détecteur en bas, inclinaison 0°",
        B: "Tube en bas, détecteur en haut, inclinaison 0°",
        C: "Tube latéral droit à 90°",
        D: "Tube latéral gauche à 90°"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Placer le tube sous la table et le détecteur au-dessus dirige le rayonnement diffusé principalement vers le sol, éloignant la tête et le torse des opérateurs. L’option A inverse le faisceau ; C et D augmentent le scatter latéral. Source : ORAMED study, Euratom project on occupational exposure."
    },
    {
      id: 8,
      question: "Quelle est la fonction principale de l’option ‘Grid-Controlled Fluoro’ (GCF) sur un arceau mobile moderne ?",
      options: {
        A: "Augmenter la fréquence d’images en continu",
        B: "Activer la grille antidiffusante automatiquement",
        C: "Couper le faisceau entre les pulses, réduisant drastiquement le débit de dose",
        D: "Calibrer le détecteur à chaque nouvelle incidence"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Le GCF contrôle la grille-cathode du tube à rayons X, stoppant complètement les rayons entre les pulses, diminuant la dose inutile sans rallonger le temps de montée tension. A, B, D ne décrivent pas ce mécanisme. Source : Manufacturer white-paper — Siemens Artis Zee C-arm, 2024."
    },
    {
      id: 9,
      question: "Pour un examen baryté de transit de l’intestin grêle, quel facteur abaisse le PLUS la dose cumulée chez l’adulte ?",
      options: {
        A: "Utiliser du baryum à concentration 250 % w/v au lieu de 100 %",
        B: "Limiter la radioscopie active à l’intervalle du passage iléal terminal",
        C: "Filmer chaque quart d’heure en ciné 30 ips pour suivre le transit",
        D: "Employer systématiquement une compression manuelle abdominale"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Restreindre l’utilisation de la fluoroscopie aux moments clés (p. ex. passage iléal) évite une exposition prolongée. Varier la concentration baryum (A) ou ajouter ciné (C) n’a pas d’impact dose significatif ; la compression (D) peut réduire l’épaisseur mais n’est pas principale ici. Source : Practice Guideline for Small-Bowel Follow-Through, ACR 2022."
    },
    {
      id: 10,
      question: "Quelle alarme sonore règlementaire se déclenche lorsqu’un temps de scopie cumulatif atteint :",
      options: {
        A: "1 minute",
        B: "5 minutes",
        C: "10 minutes",
        D: "15 minutes"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le verrouillage règlementaire nord-américain impose une alarme (ou coupure) toutes les 5 minutes de scopie cumulative pour rappeler la gestion de dose. Les autres valeurs ne sont pas normalisées. Source : 21 CFR 1020.32 (FDA), repris par Santé Canada, OTIMROEPMQ."
    }
  ]},
    "2025-05-29":  {
    theme: "Principes Fondamentaux en Radiologie 10",
    questions:[
    {
      id: 1,
      question: "En mode « normal operating mode », la norme IEC 60601-2-33 fixe la limite de SAR (Specific Absorption Rate) corps entier sur 15 minutes à :",
      options: {
        A: "1,0 W/kg",
        B: "2,0 W/kg",
        C: "4,0 W/kg",
        D: "8,0 W/kg"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La limite réglementaire pour le corps entier en mode normal est **2 W/kg**. Le seuil de 4 W/kg (C) correspond au mode « first-level controlled ». A et D sont respectivement trop bas et trop élevés. Source : IEC 60601-2-33 :2022, ACR Manual on MR Safety 2024."
    },
    {
      id: 2,
      question: "Un patient porte un stimulateur cardiaque MR Conditional limité à 1,5 T et SAR ⩽ 2 W/kg. Vous disposez d’un IRM 3 T. Quelle conduite respecter la norme ACR MR Safety (niveau 1) ?",
      options: {
        A: "Procéder en 3 T si la fréquence cardiaque est stable",
        B: "Refuser l’examen et proposer une autre modalité (CT ou écho)",
        C: "Scanner à 3 T sans injection mais limiter la SAR à 1 W/kg",
        D: "Désactiver le mode stimulation avant l’IRM 3 T"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Un dispositif MR Conditional doit être utilisé **strictement** dans les limites spécifiées (champ magnétique, SAR, gradient). Scanner en 3 T est hors indication ; l’examen doit être reporté ou réalisé dans un IRM 1,5 T. Source : ACR Manual on MR Safety 2024, Medtronic Guidelines Pacemaker 2023."
    },
    {
      id: 3,
      question: "Après un « quench » involontaire, quelle est la première action du technologue selon les recommandations OTIMROEPMQ ?",
      options: {
        A: "Ouvrir immédiatement la porte de zone IV pour faire entrer de l’air frais",
        B: "Évacuer toutes les personnes de zone IV vers zone III",
        C: "Relancer la pompe à hélium pour re-pressuriser l’aimant",
        D: "Couper l’alimentation électrique du gradient"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La priorité est l’évacuation rapide de zone IV afin d’éviter l’asphyxie par hélium et les brûlures froides. Ouvrir les portes immédiatement (A) peut propager des vapeurs dans le couloir. C et D sont techniques et se font seulement après sécurisation des personnes. Source : IRMER UK 2022, OTIMROEPMQ Procédure d’urgence IRM."
    },
    {
      id: 4,
      question: "Un artefact de repliement (aliasing) dans le plan phase est observé. La solution la plus « dose-neutre » (sans rallonger le temps d’acquisition) est :",
      options: {
        A: "Inverser les axes phase/fréquence",
        B: "Doubler la matrice dans la direction phase",
        C: "Ajouter un oversampling (NEX = 2) uniquement en phase",
        D: "Appliquer la technique de bande de saturation au bord du champ"
      },
      reponseCorrecte: OptionKeyEnum.D,
      justification: "Les bandes de saturation suppriment les signaux indésirables hors FOV sans accroître la durée, contrairement à l’augmentation de matrice (B) ou NEX (C). Inverser les axes (A) déplace souvent l’artefact mais ne le supprime pas. Source : Westbrook C., MRI in Practice 5ᵉ éd., chap. 8."
    },
    {
      id: 5,
      question: "Quel seuil de DFG (mL/min/1,73 m²) est habituellement retenu pour **contre-indiquer** l’injection de gadolinium linéaire non macrocyclique afin d’éviter la fibrose néphrogénique systémique ?",
      options: {
        A: "< 15",
        B: "< 30",
        C: "< 45",
        D: "< 60"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Les lignes directrices ACR et ESUR déconseillent fortement les gadolinium linéaires si le DFG < 15 mL/min/1,73 m² (stade 5). Entre 15 et 30, l’utilisation est possible sous conditions strictes avec agents macrocycliques. Source : ACR Manual on Contrast Media 2023, ESUR Guidelines v.10."
    },
    {
      id: 6,
      question: "Concernant la grossesse et l’IRM, quelle affirmation est correcte selon l’ICRP 128 ?",
      options: {
        A: "Le champ statique < 3 T ne présente pas de risque tératogène démontré",
        B: "L’exposition aux gradients acoustiques est sans danger sans protection auditive fœtale",
        C: "Le contraste gadolinium est recommandé pour améliorer la détection des malformations",
        D: "Une technologue enceinte doit rester hors de zone III durant tout le 1ᵉʳ trimestre"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Aucun effet tératogène n’a été démontré sous 3 T. Une protection auditive maternelle est cependant requise (B faux). Le gadolinium traverse le placenta et doit être évité (C). Les travailleurs enceintes peuvent accéder à zone III si les champs ne dépassent pas 0,5 mT (D exagéré). Source : ICRP 128 (2022), Santé Canada DG 5091."
    },
    {
      id: 7,
      question: "Quel artefact est **le plus aggravé** sur une séquence éco de gradient (GRE) comparé à une spin-echo ?",
      options: {
        A: "Aliasing",
        B: "Susceptibilité magnétique",
        C: "Effet de chemical shift (décalage chimique)",
        D: "Ghosting de mouvement cardiaque"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les séquences GRE ne compensent pas les inhomogénéités magnétiques, amplifiant les artefacts de susceptibilité (B). Les artefacts A, C, D ne dépendent pas autant du choix GRE vs SE. Source : MRI Artefacts — Radiopaedia.org, IEC TR 62630."
    },
    {
      id: 8,
      question: "La **b-value** la plus courante pour l’imagerie de diffusion cérébrale standard (ADC) est :",
      options: {
        A: "b = 0 s/mm² uniquement",
        B: "b = 500 s/mm²",
        C: "b = 1000 s/mm²",
        D: "b = 2000 s/mm²"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Le protocole standard utilise b = 0 et b ≈ 1000 s/mm² pour optimiser la sensibilité aux restrictions de diffusion sans dégrader le SNR. Des valeurs 2000 sont réservées à des applications spécialisées. Source : ACR-ASNR-SNIS Practice Parameter for Brain DWI 2022."
    },
    {
      id: 9,
      question: "Le **niveau d’exposition acoustique** maximal permis sans protection auriculaire sur un scanner 3 T ne doit pas dépasser :",
      options: {
        A: "85 dB(A) pondéré sur 8 h",
        B: "99 dB(A) pondéré sur 15 min",
        C: "115 dB(A) instantané",
        D: "140 dB(A) crête"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les normes OSHA et IEC limitent à ~99 dB(A)/15 min en l’absence de protection. Les scanners IRM peuvent atteindre > 120 dB(A), donc des bouchons intra-auriculaires sont obligatoires. Source : IEC 60601-2-33 Annexe ZA, OSHA 1910.95."
    },
    {
      id: 10,
      question: "La séquence **STIR (Short-TI Inversion Recovery)** est préférée à une saturation de graisse chimique pour :",
      options: {
        A: "La visualisation d’œdèmes médullaires en présence d’un implant métallique",
        B: "Réduire le temps d’acquisition par rapport aux T1 classiques",
        C: "Obtenir un rehaussement du signal graisseux",
        D: "Différencier le sang oxygéné du sang désoxygéné"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "STIR supprime la graisse indépendamment de l’homogénéité de B0/B1, donc plus robuste autour des métaux que la sat-graisse chimique. Elle rallonge le temps d’acquisition (B faux) et supprime la graisse (C contraire). D concerne l’imagerie BOLD. Source : Westbrook C., MRI in Practice 5ᵉ éd., chap. 11."
    }
  ]},

    "2025-05-30":  {
    theme: "Principes Fondamentaux en Radiologie 11",
    questions:[
    {
      id: 1,
      question: "En radiographie thoracique pédiatrique, l’ajout d’un filtre de 1 mm Al + 0,2 mm Cu a pour effet principal …",
      options: {
        A: "Réduire la dose peau de > 60 % tout en conservant le contraste",
        B: "Allonger le temps d’exposition et augmenter le flou",
        C: "Introduire des artéfacts cuivrés majeurs",
        D: "Augmenter l’indice d’exposition (EI) de deux fois"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Le combo 1 mm Al + 0,1-0,2 mm Cu élimine les photons < 50 keV responsables de dose inutile. Études pédiatriques montrent > 60 % de réduction de dose avec contraste diagnostique préservé. Les autres options sont incorrectes. Source : [Radiation Protection in Pediatric Radiology (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3132617/?utm_source=chatgpt.com)."
    },
    {
      id: 2,
      question: "Selon l’ancienne recommandation du manuel ACR, une extravasation iodée justifie d’emblée une consultation chirurgicale si le volume estimé est …",
      options: {
        A: "> 50 mL",
        B: "> 75 mL",
        C: "> 100 mL",
        D: "> 150 mL"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "L’édition antérieure du manuel ACR recommandait la consultation chirurgicale automatique pour un volume estimé > 100 mL ; seuils 50/75/150 mL ne figurent pas dans ces directives. Source : [Extravasation of Contrast Media - Geisel School of Medicine](https://geiselmed.dartmouth.edu/radiology/wp-content/uploads/sites/47/2019/04/ACR_extravasation.pdf?utm_source=chatgpt.com)."
    },
    {
      id: 3,
      question: "Après déclaration de grossesse d’une technologue, la dose maximale embryon/fœtus permise pour le reste de la gestation est d’environ …",
      options: {
        A: "0,5 mSv",
        B: "1 mSv",
        C: "5 mSv",
        D: "10 mSv"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "L’ICRP stipule qu’après déclaration de grossesse, la dose additionnelle à l’embryon/fœtus ne doit pas dépasser ≈ 1 mSv pour le reste de la grossesse. 0,5 mSv est trop bas et 5-10 mSv trop élevé. Source : [ICRP Dose limits - icrpaedia.org](https://icrpaedia.org/Dose_limits?utm_source=chatgpt.com)."
    },
    {
      id: 4,
      question: "Pour une exposition à 100 kVp, quel rapport de grille est le plus approprié ?",
      options: {
        A: "5 : 1",
        B: "8 : 1",
        C: "12 : 1",
        D: "16 : 1"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Les grilles 12 : 1 sont préconisées pour les techniques > 90 kVp, car elles éliminent efficacement le rayonnement diffus sans excès de dose. 5:1/8:1 sont pour basses tensions ; 16:1 rarement justifiée. Source : [Grids | Radiopaedia](https://radiopaedia.org/articles/grids?lang=us&utm_source=chatgpt.com)."
    },
    {
      id: 5,
      question: "À propos de la radiographie pulmonaire chez une femme enceinte :",
      options: {
        A: "La dose fœtale est < 0,1 mGy, donc négligeable",
        B: "Il faut éviter car la dose dépasse 10 mGy",
        C: "Un cache abdominal réduit la dose de 90 %",
        D: "Le risque tératogène est élevé au 1er trimestre"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "La dose fœtale typique est bien inférieure au seuil de risques déterministes (50 mGy), donc négligeable (< 0,1 mGy). Les autres options sont incorrectes. Source : [Foetal Radiation Dose and Risk from Diagnostic Radiology - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4045527/?utm_source=chatgpt.com)."
    },
    {
      id: 6,
      question: "Le manuel ACR MR Safety classe la salle de l’aimant comme …",
      options: {
        A: "Zone I",
        B: "Zone II",
        C: "Zone III",
        D: "Zone IV"
      },
      reponseCorrecte: OptionKeyEnum.D,
      justification: "Le manuel ACR définit la Zone IV comme la salle d’IRM elle-même (accès restreint). Zones I-III couvrent respectivement l’accès public, contrôle et zone tampon. Source : [ACR Manual on MR Safety - Department of Radiology](https://radiology.wisc.edu/wp-content/uploads/2018/11/ACR_Manual_MR_Safety.pdf?utm_source=chatgpt.com)."
    },
    {
      id: 7,
      question: "Une image DR « granuleuse » avec mauvais SNR provient généralement de …",
      options: {
        A: "Sursaturation (surexposition)",
        B: "Quantum mottle dû à une sous-exposition",
        C: "Filtration excessive en Cu",
        D: "Mauvaise compression DICOM"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Un faible mAs provoque une sous-exposition ; l’image présente du quantum mottle (bruit granuleux). La surexposition entraîne saturation ou voile, pas ce bruit. Source : Carlton, Bushong."
    },
    {
      id: 8,
      question: "Pour mesurer la dose peau en temps réel durant une fluoroscopie, on privilégie …",
      options: {
        A: "La chambre d’ionisation",
        B: "Les TLD",
        C: "Le film radiochromique",
        D: "Les pastilles OSL"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "La chambre d’ionisation permet une mesure instantanée et continue de la dose, contrairement aux TLD/films/OSL (lectures différées). Source : CNESST, ICRU."
    },
    {
      id: 9,
      question: "Une dose peau de 2 Gy en fluoroscopie correspond au seuil où peuvent apparaître …",
      options: {
        A: "Effets stochastiques",
        B: "Premières réactions cutanées déterministes",
        C: "Cataractes immédiates",
        D: "Syndrome d’irradiation aiguë"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les premières réactions cutanées déterministes (érythème, épilation) peuvent survenir dès 2 Gy en fluoroscopie. Les cataractes nécessitent des doses plus élevées. Source : IAEA, INESSS."
    },
    {
      id: 10,
      question: "Passer d’une profondeur de bits de 12 bits à 16 bits permet surtout …",
      options: {
        A: "De quadrupler la résolution spatiale",
        B: "D’élargir la dynamique de contraste (plus de niveaux de gris)",
        C: "De réduire la taille du fichier",
        D: "D’éliminer le bruit électronique"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "12 bits = 4096 niveaux, 16 bits = 65536 : la dynamique de contraste augmente mais la résolution spatiale (matrice) ne change pas. Source : Carlton, Bushong."
    }
  ]},
  
    "2025-05-31":  {
    theme: "Principes Fondamentaux en Radiologie 12",
    questions:[
    {
      id: 1,
      question: "En mode « normal operating mode », la norme IEC 60601-2-33 fixe la limite de SAR (Specific Absorption Rate) corps entier sur 15 minutes à :",
      options: {
        A: "1,0 W/kg",
        B: "2,0 W/kg",
        C: "4,0 W/kg",
        D: "8,0 W/kg"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La limite réglementaire pour le corps entier en mode normal est **2 W/kg**. Le seuil de 4 W/kg (C) correspond au mode « first-level controlled ». A et D sont respectivement trop bas et trop élevés. Source : IEC 60601-2-33 :2022, ACR Manual on MR Safety 2024."
    },
    {
      id: 2,
      question: "Un patient porte un stimulateur cardiaque MR Conditional limité à 1,5 T et SAR ⩽ 2 W/kg. Vous disposez d’un IRM 3 T. Quelle conduite respecter la norme ACR MR Safety (niveau 1) ?",
      options: {
        A: "Procéder en 3 T si la fréquence cardiaque est stable",
        B: "Refuser l’examen et proposer une autre modalité (CT ou écho)",
        C: "Scanner à 3 T sans injection mais limiter la SAR à 1 W/kg",
        D: "Désactiver le mode stimulation avant l’IRM 3 T"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Un dispositif MR Conditional doit être utilisé **strictement** dans les limites spécifiées (champ magnétique, SAR, gradient). Scanner en 3 T est hors indication ; l’examen doit être reporté ou réalisé dans un IRM 1,5 T. Source : ACR Manual on MR Safety 2024, Medtronic Guidelines Pacemaker 2023."
    },
    {
      id: 3,
      question: "Après un « quench » involontaire, quelle est la première action du technologue selon les recommandations OTIMROEPMQ ?",
      options: {
        A: "Ouvrir immédiatement la porte de zone IV pour faire entrer de l’air frais",
        B: "Évacuer toutes les personnes de zone IV vers zone III",
        C: "Relancer la pompe à hélium pour re-pressuriser l’aimant",
        D: "Couper l’alimentation électrique du gradient"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "La priorité est l’évacuation rapide de zone IV afin d’éviter l’asphyxie par hélium et les brûlures froides. Ouvrir les portes immédiatement (A) peut propager des vapeurs dans le couloir. C et D sont techniques et se font seulement après sécurisation des personnes. Source : IRMER UK 2022, OTIMROEPMQ Procédure d’urgence IRM."
    },
    {
      id: 4,
      question: "Un artefact de repliement (aliasing) dans le plan phase est observé. La solution la plus « dose-neutre » (sans rallonger le temps d’acquisition) est :",
      options: {
        A: "Inverser les axes phase/fréquence",
        B: "Doubler la matrice dans la direction phase",
        C: "Ajouter un oversampling (NEX = 2) uniquement en phase",
        D: "Appliquer la technique de bande de saturation au bord du champ"
      },
      reponseCorrecte: OptionKeyEnum.D,
      justification: "Les bandes de saturation suppriment les signaux indésirables hors FOV sans accroître la durée, contrairement à l’augmentation de matrice (B) ou NEX (C). Inverser les axes (A) déplace souvent l’artefact mais ne le supprime pas. Source : Westbrook C., MRI in Practice 5ᵉ éd., chap. 8."
    },
    {
      id: 5,
      question: "Quel seuil de DFG (mL/min/1,73 m²) est habituellement retenu pour **contre-indiquer** l’injection de gadolinium linéaire non macrocyclique afin d’éviter la fibrose néphrogénique systémique ?",
      options: {
        A: "< 15",
        B: "< 30",
        C: "< 45",
        D: "< 60"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Les lignes directrices ACR et ESUR déconseillent fortement les gadolinium linéaires si le DFG < 15 mL/min/1,73 m² (stade 5). Entre 15 et 30, l’utilisation est possible sous conditions strictes avec agents macrocycliques. Source : ACR Manual on Contrast Media 2023, ESUR Guidelines v.10."
    },
    {
      id: 6,
      question: "Concernant la grossesse et l’IRM, quelle affirmation est correcte selon l’ICRP 128 ?",
      options: {
        A: "Le champ statique < 3 T ne présente pas de risque tératogène démontré",
        B: "L’exposition aux gradients acoustiques est sans danger sans protection auditive fœtale",
        C: "Le contraste gadolinium est recommandé pour améliorer la détection des malformations",
        D: "Une technologue enceinte doit rester hors de zone III durant tout le 1ᵉʳ trimestre"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "Aucun effet tératogène n’a été démontré sous 3 T. Une protection auditive maternelle est cependant requise (B faux). Le gadolinium traverse le placenta et doit être évité (C). Les travailleurs enceintes peuvent accéder à zone III si les champs ne dépassent pas 0,5 mT (D exagéré). Source : ICRP 128 (2022), Santé Canada DG 5091."
    },
    {
      id: 7,
      question: "Quel artefact est **le plus aggravé** sur une séquence éco de gradient (GRE) comparé à une spin-echo ?",
      options: {
        A: "Aliasing",
        B: "Susceptibilité magnétique",
        C: "Effet de chemical shift (décalage chimique)",
        D: "Ghosting de mouvement cardiaque"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les séquences GRE ne compensent pas les inhomogénéités magnétiques, amplifiant les artefacts de susceptibilité (B). Les artefacts A, C, D ne dépendent pas autant du choix GRE vs SE. Source : MRI Artefacts — Radiopaedia.org, IEC TR 62630."
    },
    {
      id: 8,
      question: "La **b-value** la plus courante pour l’imagerie de diffusion cérébrale standard (ADC) est :",
      options: {
        A: "b = 0 s/mm² uniquement",
        B: "b = 500 s/mm²",
        C: "b = 1000 s/mm²",
        D: "b = 2000 s/mm²"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Le protocole standard utilise b = 0 et b ≈ 1000 s/mm² pour optimiser la sensibilité aux restrictions de diffusion sans dégrader le SNR. Des valeurs 2000 sont réservées à des applications spécialisées. Source : ACR-ASNR-SNIS Practice Parameter for Brain DWI 2022."
    },
    {
      id: 9,
      question: "Le **niveau d’exposition acoustique** maximal permis sans protection auriculaire sur un scanner 3 T ne doit pas dépasser :",
      options: {
        A: "85 dB(A) pondéré sur 8 h",
        B: "99 dB(A) pondéré sur 15 min",
        C: "115 dB(A) instantané",
        D: "140 dB(A) crête"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les normes OSHA et IEC limitent à ~99 dB(A)/15 min en l’absence de protection. Les scanners IRM peuvent atteindre > 120 dB(A), donc des bouchons intra-auriculaires sont obligatoires. Source : IEC 60601-2-33 Annexe ZA, OSHA 1910.95."
    },
    {
      id: 10,
      question: "La séquence **STIR (Short-TI Inversion Recovery)** est préférée à une saturation de graisse chimique pour :",
      options: {
        A: "La visualisation d’œdèmes médullaires en présence d’un implant métallique",
        B: "Réduire le temps d’acquisition par rapport aux T1 classiques",
        C: "Obtenir un rehaussement du signal graisseux",
        D: "Différencier le sang oxygéné du sang désoxygéné"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "STIR supprime la graisse indépendamment de l’homogénéité de B0/B1, donc plus robuste autour des métaux que la sat-graisse chimique. Elle rallonge le temps d’acquisition (B faux) et supprime la graisse (C contraire). D concerne l’imagerie BOLD. Source : Westbrook C., MRI in Practice 5ᵉ éd., chap. 11."
    }
  ]},
    "2025-06-01":  {
    theme: "Principes Fondamentaux en Radiologie 13",
    questions:[
    {
      id: 1,
      question: "Selon le Code de sécurité 36 (Santé Canada) et la MQSA, la dose glandulaire moyenne (AGD) maximale par vue en mammographie (épaisseur standard 45 mm) ne doit pas dépasser :",
      options: {
        A: "1 mGy",
        B: "3 mGy",
        C: "5 mGy",
        D: "7 mGy"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le plafond réglementaire est fixé à 3 mGy par vue pour un appareil numérique ou analogique, afin d’assurer un rapport bénéfice-risque acceptable. Au-delà, le dépistage n’est plus justifiable. Source : Santé Canada – SC-36, MQSA 21 CFR 900."
    },
    {
      id: 2,
      question: "La force de compression initiale recommandée en mammographie pour un sein d’épaisseur moyenne est :",
      options: {
        A: "5 à 9 kg",
        B: "11 à 18 kg",
        C: "20 à 25 kg",
        D: "> 25 kg"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les guides SC-36 et EUREF indiquent 11–18 kg (25–40 lb) pour optimiser homogénéité, réduire la dose et limiter l’inconfort. Des forces < 10 kg sont insuffisantes ; > 20 kg accroissent douleur et risque cutané sans réel gain."
    },
    {
      id: 3,
      question: "En radiographie numérique, un Deviation Index (DI) de **+3** signifie que :",
      options: {
        A: "L’EI (Exposure Index) est environ **double** de la valeur cible",
        B: "L’EI est trois fois plus bas que la cible",
        C: "L’image est sous-exposée d’un facteur 2",
        D: "Le détecteur est saturé"
      },
      reponseCorrecte: OptionKeyEnum.A,
      justification: "DI = 10 × log10(EI/EI_target). Un DI = +3 donne EI/EI_target ≈ 10^0,3 ≈ 2 : l’exposition est doublée (risque de sur-dose)."
    },
    {
      id: 4,
      question: "Pour un faisceau à 80 kVp filtré à 2,5 mm Al, la demi-épaisseur (HVL) attendue est proche de :",
      options: {
        A: "1,5 mm Al",
        B: "2,0 mm Al",
        C: "3,0 mm Al",
        D: "5,0 mm Al"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Les tableaux NIST et IEC montrent qu’à 80 kVp la HVL est ~3 mm Al ; c’est la valeur utilisée pour vérifier la conformité de la filtration inhérente + ajoutée."
    },
    {
      id: 5,
      question: "Des stries sombres et brillantes reliant deux plombages dentaires sur un CT sont causées principalement par :",
      options: {
        A: "Durcissement du faisceau (beam hardening)",
        B: "Effet de volume partiel",
        C: "Artefact métallique (photon starvation)",
        D: "Migration du centre de rotation"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Les métaux très denses entraînent la famine de photons et la reconstruction génère des stries typiques d’« artefact métallique ». Le beam hardening (A) crée plutôt un voile cuivré homogène."
    },
    {
      id: 6,
      question: "En salle d’angio-intervention, l’écran suspendu au plafond doit présenter une équivalence plomb minimale de :",
      options: {
        A: "0,25 mm Pb",
        B: "0,50 mm Pb",
        C: "1,0 mm Pb",
        D: "2,0 mm Pb"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Santé Canada SC-35 et IEC 61331 exigent ≥ 1 mm Pb pour les écrans fixes destinés à protéger la tête et le tronc de l’opérateur."
    },
    {
      id: 7,
      question: "Quel identifiant DICOM contient le **Patient ID** unique d’un examen ?",
      options: {
        A: "(0010,0010)",
        B: "(0010,0020)",
        C: "(0020,000D)",
        D: "(0008,1030)"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le tag (0010,0020) stocke l’identifiant patient. Les choix A, C, D correspondent respectivement au nom, à l’UID d’étude et à la description."
    },
    {
      id: 8,
      question: "Quelle **mesure de continuité** est la plus efficace lors d’une panne PACS de plusieurs heures ?",
      options: {
        A: "Imprimer systématiquement les images sur film laser",
        B: "Activer le stockage local redondant (cache disk) des modalités et reporter vers le PACS dès le rétablissement",
        C: "Reporter tous les examens non urgents",
        D: "Effacer les listes de travail pour éviter la confusion"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Les modalités CT/DR conservent localement les études (« local archive ») puis les réexportent ; cela maintient le flux clinique sans film ni annulation massive."
    },
    {
      id: 9,
      question: "Le débit d’injection iodée recommandé pour une angiographie CT thoracique adulte (PEA) est généralement :",
      options: {
        A: "2 mL/s",
        B: "3 mL/s",
        C: "4 à 5 mL/s",
        D: "7 mL/s"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Les protocoles thorax CTA préconisent 4–5 mL/s (iodine delivery ≈ 1,3–1,7 g I/s) pour une opacification optimale de l’artère pulmonaire."
    },
    {
      id: 10,
      question: "Quel test **quotidien** de contrôle qualité est exigé pour les systèmes DR selon SC-35 ?",
      options: {
        A: "Congruence faisceau/lampe",
        B: "Image d’un fantôme uniforme pour vérifier uniformité et artefacts",
        C: "Mesure de linéarité mAs",
        D: "Mesure de résolution limite MTF"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Le test quotidien consiste en une exposition d’un fantôme homogène afin de détecter artefacts, pixels morts et dérives d’uniformité avant la clinique. Les autres essais sont hebdo, mensuels ou annuels."
    }
  ]
}
};
