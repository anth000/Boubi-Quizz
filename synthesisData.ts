export interface Synthesis {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
}

export const syntheses: Record<string, Synthesis> = {
  general: {
    id: 'general',
    title: "Synthèse Générale",
    description: "Vue d'ensemble des concepts clés et points importants",
    icon: "📚",
    content: `
1. Engagement professionnel  
Le technologue :
- Connaît les lois et règlements encadrant sa profession (Loi T-5, Code de déontologie, etc.).  
- Adopte une attitude professionnelle : respect, empathie, communication.  
- S'assure de la qualité des soins et de la sécurité des patients.  
- Est responsable de ses actes et de ses décisions cliniques.  
- Se présente toujours avec son titre professionnel.  
- Adapte sa pratique à l'état du patient.  

📌 À retenir pour l'examen :  
• Le technologue est imputable de ses actes, doit connaître ses limites, et ne peut jamais tolérer l'exercice illégal.  
• Obligation de formation continue : 30 h tous les 3 ans, dont minimum 5 h/an.  

2. Ordonnance (individuelle, collective, verbale)  
a. Individuelle (📄 ou 🗣️) :  
   - Nom complet, date de naissance, type d'examen, date, contre-indications, etc.  
   - Émise par un professionnel habilité.  

b. Collective :  
   - Émise par un ou plusieurs médecins pour des groupes ou situations précises.  
   - L'utilisation d'une ordonnance collective engage la responsabilité du technologue.  

c. Transmission :  
   - Peut se faire par télécopie, messagerie sécurisée, voie électronique (signature numérique obligatoire).  

📌 À retenir :  
• Le technologue doit vérifier la validité, la signature et la clarté de l'ordonnance avant de procéder.  
• Une signature numérique est différente d'une signature électronique simple (copiée/collée).  

3. Radioprotection (ALARA)  
Le technologue :  
- Applique les principes : Justification, Optimisation, Limitation des doses.  
- Utilise les protections (tablier, gants, distances, dosimètres).  
- Est formé à reconnaître les risques et adapter les paramètres techniques.  

📌 À retenir :  
• Le technologue porte le dosimètre sous le tablier plombé, pose la question de grossesse (femmes 11-55 ans).  
• Le Code de sécurité 35 régit l'utilisation sécuritaire des rayons X au Canada.  

4. Communication  
- Vérification de deux identifiants (nom + DOB) à chaque examen.  
- Crée un climat de confiance, explique l'examen, évite les conversations inappropriées.  
- Transmet clairement les consignes avant, pendant et après l'examen.  

📌 À retenir :  
• Adapter l'approche selon la clientèle : enfants, personnes âgées, déficience.  
• Toujours se nommer et indiquer son rôle.  

5. Planification & Réalisation de l'examen  
- Préparation de la salle, du matériel et du patient.  
- Questionnaire préalable : vérification des contre-indications, état de santé.  
- Respect des étapes de sécurité, contrôle du matériel, application des protocoles.  

📌 À retenir :  
• L'intimité du patient doit être respectée.  
• Les protocoles sont déterminés par le médecin et appliqués par le technologue.  

6. Médicaments et substances  
- Le technologue peut administrer des médicaments avec ordonnance seulement.  
- Il doit connaître les effets, les interactions, les doses, et avoir une formation appropriée.  
- Surveillance post-administration obligatoire, surtout pour sédatifs et agents de contraste.  

📌 À retenir :  
• Une trousse d'urgence doit toujours être accessible.  
• L'administration de sédatifs nécessite un protocole validé par le CMDP.  

7. Systèmes et dossiers  
- Le dossier patient doit inclure : ordonnance, paramètres, images conservées/rejetées, doses, médicaments, consentement, etc.  
- Le technologue doit consigner toutes les informations liées à l'examen.  

📌 À retenir :  
• Confidentialité et sécurité des données.  
• Respect du calendrier de conservation.  

8. Collaboration interprofessionnelle  
- Communication efficace avec les autres professionnels.  
- Respect du rôle de chacun dans l'équipe interdisciplinaire.  
- Activités partagées possibles (injections, cathétérisme, etc.).  

📌 À retenir :  
• Connaître son champ d'exercice et ne pas outrepasser ses compétences.  

🔍 CONSEILS POUR L'EXAMEN  
- Connaître par cœur les types d'ordonnances, leurs critères et responsabilités associées.  
- Être capable de reconnaître une situation à risque pour le patient (radioprotection, ordonnance inadéquate, etc.).  
- Bien comprendre les obligations légales, déontologiques et les principes d'ALARA.  
- Réviser la documentation à inscrire dans le dossier et les éléments techniques à maîtriser selon les modalités.`
  },
  essential: {
    id: 'essential',
    title: "Points Essentiels",
    description: "Résumé des éléments cruciaux à retenir",
    icon: "⭐",
    content: `
# Points Essentiels pour l'Examen

## 1. Sécurité du Patient
- Vérification systématique de l'identité (2 identifiants)
- Questions sur les contre-indications
- Protection contre les radiations
- Surveillance post-examen si nécessaire

## 2. Aspects Légaux
- Respect du code de déontologie
- Confidentialité des informations
- Documentation précise des actes
- Consentement éclairé du patient

## 3. Technique
- Paramètres optimaux selon le patient
- Positionnement correct
- Qualité d'image
- Doses minimales efficaces

## 4. Communication
- Claire et professionnelle
- Adaptée au patient
- Instructions précises
- Collaboration efficace

## 5. Urgences
- Reconnaissance des signes
- Protocoles d'intervention
- Équipement d'urgence
- Chaîne de communication`
  },
  formulas: {
    id: 'formulas',
    title: "Formules et Définitions",
    description: "Compilation des formules et définitions importantes",
    icon: "📝",
    content: `
# Formules et Définitions Essentielles

## Radioprotection
- **ALARA**: As Low As Reasonably Achievable
- **DFP**: Distance Foyer-Peau
- **kV**: Kilovoltage (pénétration)
- **mAs**: Milliampérage-seconde (quantité)

## Doses
- Dose efficace (E) = ∑ wT × HT
- Dose équivalente (H) = wR × D
- Facteur de rétrodiffusion = 1.35

## Qualité Image
- Résolution spatiale = paires de lignes/mm
- Contraste = différence de densité optique
- Bruit = écart-type/valeur moyenne

## Positionnement
- Incidence: direction du rayon central
- Décubitus: position du patient
- Obliquité: angle de rotation

## Termes Techniques
- **ROI**: Region Of Interest
- **FOV**: Field Of View
- **SNR**: Signal to Noise Ratio
- **MTF**: Modulation Transfer Function`
  },
  practical: {
    id: 'practical',
    title: "Cas Pratiques",
    description: "Exemples concrets et applications pratiques",
    icon: "💡",
    content: `
# Cas Pratiques et Situations Réelles

## Cas 1: Urgence Respiratoire
**Situation**: Patient développe une détresse respiratoire pendant l'examen
- Actions immédiates:
  1. Arrêt de l'examen
  2. Position semi-assise
  3. Appel à l'aide
  4. Oxygénation si prescrite
- Documentation:
  - Heure de l'incident
  - Signes observés
  - Actions prises
  - Suivi effectué

## Cas 2: Erreur d'Identité
**Situation**: Doute sur l'identité du patient
- Procédure:
  1. Arrêt immédiat
  2. Double vérification
  3. Contact service concerné
  4. Documentation
- Prévention:
  - Vérification systématique
  - Questions ouvertes
  - Bracelet d'identification

## Cas 3: Optimisation Technique
**Situation**: Patient corpulent
- Adaptations:
  1. Paramètres techniques
  2. Positionnement
  3. Protection
  4. Communication
- Résultats:
  - Qualité diagnostique
  - Dose optimisée
  - Confort patient

## Cas 4: Communication Difficile
**Situation**: Patient malentendant
- Stratégies:
  1. Support visuel
  2. Gestes clairs
  3. Famille/interprète
  4. Patience
- Résultat:
  - Compréhension mutuelle
  - Examen réussi
  - Patient satisfait`
  }
};