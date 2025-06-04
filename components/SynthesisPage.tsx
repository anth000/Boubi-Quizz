import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from './Button';

const SynthesisPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const getSynthesisContent = (type: string) => {
  switch (type) {
    case 'general':
      return {
        title: "🧾 SYNTHÈSE DES NORMES GÉNÉRALES – OTIMROEPMQ (Examen Québec)",
        icon: "🧾",
        content: `
1. Engagement professionnel  
Le technologue :
- Connaît les lois et règlements encadrant sa profession (Loi T-5, Code de déontologie, etc.).  
- Adopte une attitude professionnelle : respect, empathie, communication.  
- S’assure de la qualité des soins et de la sécurité des patients.  
- Est responsable de ses actes et de ses décisions cliniques.  
- Se présente toujours avec son titre professionnel.  
- Adapte sa pratique à l’état du patient.  

📌 À retenir pour l’examen :  
• Le technologue est imputable de ses actes, doit connaître ses limites, et ne peut jamais tolérer l’exercice illégal.  
• Obligation de formation continue : 30 h tous les 3 ans, dont minimum 5 h/an.  

2. Ordonnance (individuelle, collective, verbale)  
a. Individuelle (📄 ou 🗣️) :  
   - Nom complet, date de naissance, type d’examen, date, contre-indications, etc.  
   - Émise par un professionnel habilité.  

b. Collective :  
   - Émise par un ou plusieurs médecins pour des groupes ou situations précises.  
   - L’utilisation d’une ordonnance collective engage la responsabilité du technologue.  

c. Transmission :  
   - Peut se faire par télécopie, messagerie sécurisée, voie électronique (signature numérique obligatoire).  

📌 À retenir :  
• Le technologue doit vérifier la validité, la signature et la clarté de l’ordonnance avant de procéder.  
• Une signature numérique est différente d’une signature électronique simple (copiée/collée).  

3. Radioprotection (ALARA)  
Le technologue :  
- Applique les principes : Justification, Optimisation, Limitation des doses.  
- Utilise les protections (tablier, gants, distances, dosimètres).  
- Est formé à reconnaître les risques et adapter les paramètres techniques.  

📌 À retenir :  
• Le technologue porte le dosimètre sous le tablier plombé, pose la question de grossesse (femmes 11-55 ans).  
• Le Code de sécurité 35 régit l’utilisation sécuritaire des rayons X au Canada.  

4. Communication  
- Vérification de deux identifiants (nom + DOB) à chaque examen.  
- Crée un climat de confiance, explique l’examen, évite les conversations inappropriées.  
- Transmet clairement les consignes avant, pendant et après l’examen.  

📌 À retenir :  
• Adapter l'approche selon la clientèle : enfants, personnes âgées, déficience.  
• Toujours se nommer et indiquer son rôle.  

5. Planification & Réalisation de l’examen  
- Préparation de la salle, du matériel et du patient.  
- Questionnaire préalable : vérification des contre-indications, état de santé.  
- Respect des étapes de sécurité, contrôle du matériel, application des protocoles.  

📌 À retenir :  
• L’intimité du patient doit être respectée.  
• Les protocoles sont déterminés par le médecin et appliqués par le technologue.  

6. Médicaments et substances  
- Le technologue peut administrer des médicaments avec ordonnance seulement.  
- Il doit connaître les effets, les interactions, les doses, et avoir une formation appropriée.  
- Surveillance post-administration obligatoire, surtout pour sédatifs et agents de contraste.  

📌 À retenir :  
• Une trousse d’urgence doit toujours être accessible.  
• L’administration de sédatifs nécessite un protocole validé par le CMDP.  

7. Systèmes et dossiers  
- Le dossier patient doit inclure : ordonnance, paramètres, images conservées/rejetées, doses, médicaments, consentement, etc.  
- Le technologue doit consigner toutes les informations liées à l’examen.  

📌 À retenir :  
• Confidentialité et sécurité des données.  
• Respect du calendrier de conservation.  

8. Collaboration interprofessionnelle  
- Communication efficace avec les autres professionnels.  
- Respect du rôle de chacun dans l’équipe interdisciplinaire.  
- Activités partagées possibles (injections, cathétérisme, etc.).  

📌 À retenir :  
• Connaître son champ d’exercice et ne pas outrepasser ses compétences.  

🔍 CONSEILS POUR L’EXAMEN  
- Connaître par cœur les types d’ordonnances, leurs critères et responsabilités associées.  
- Être capable de reconnaître une situation à risque pour le patient (radioprotection, ordonnance inadéquate, etc.).  
- Bien comprendre les obligations légales, déontologiques et les principes d’ALARA.  
- Réviser la documentation à inscrire dans le dossier et les éléments techniques à maîtriser selon les modalités (à voir dans les fascicules spécifiques).`
      };

    case 'essential':
      return {
        title: "Points Essentiels",
        content: "Contenu des points essentiels...",
        icon: "⭐"
      };

    case 'formulas':
      return {
        title: "Formules et Définitions",
        content: "Contenu des formules et définitions...",
        icon: "📝"
      };

    case 'practical':
      return {
        title: "Cas Pratiques",
        content: "Contenu des cas pratiques...",
        icon: "💡"
      };

    default:
      return {
        title: "Synthèse non trouvée",
        content: "Cette synthèse n'existe pas.",
        icon: "❓"
      };
  }
};


  const synthesis = getSynthesisContent();

  return (
    <div className="space-y-6">
      <div className="bg-rose-100 rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="text-4xl">{synthesis.icon}</span>
          <h1 className="text-3xl font-bold text-theme-primary">{synthesis.title}</h1>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-inner">
          <div className="prose max-w-none">
            {synthesis.content}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Link to="/synthesis">
          <Button variant="primary">
            Retour aux synthèses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SynthesisPage;