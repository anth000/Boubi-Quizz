
import { QuizData, OptionKeyEnum } from './types';

// Helper function to get today's date in YYYY-MM-DD format
// For the sake of stable demo data, we'll use fixed dates.
// To use actual today: const today = new Date().toISOString().split('T')[0];

const fixedTodayDate = new Date().toISOString().split('T')[0]; //"2024-07-28";
//const fixedYesterdayDate = "2024-07-27";

export const tousLesQuestionnaires: QuizData = {
  [fixedTodayDate]: [
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

  ],
  "2025-05-26": [
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
  ]
};
