
import { QuizData, OptionKeyEnum } from './types';

// Helper function to get today's date in YYYY-MM-DD format
// For the sake of stable demo data, we'll use fixed dates.
// To use actual today: const today = new Date().toISOString().split('T')[0];

const fixedTodayDate = new Date().toISOString().split('T')[0]; //"2024-07-28";
const fixedYesterdayDate = "2024-07-27";

export const tousLesQuestionnaires: QuizData = {
  [fixedTodayDate]: [
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
      justification: "Le combo 1 mm Al + 0,1-0,2 mm Cu élimine les photons < 50 keV responsables de dose inutile ; études pédiatriques montrent > 60 % de réduction de dose avec contraste diagnostique préservé. Les choix B, C, D contredisent ces résultats."
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
      justification: "L’édition antérieure du manuel ACR sur l’extravasation recommandait la consultation chirurgicale automatique pour un volume estimé > 100 mL ; seuils 50/75/150 mL ne figurent pas dans ces directives."
    },
    {
      id: 3,
      question: "Passer d’une profondeur de bits de 12 bits à 16 bits permet surtout …",
      options: {
        A: "De quadrupler la résolution spatiale",
        B: "D’élargir la dynamique de contraste (plus de niveaux de gris)",
        C: "De réduire la taille du fichier",
        D: "D’éliminer le bruit électronique"
      },
      reponseCorrecte: OptionKeyEnum.B,
      justification: "Une profondeur de 12 bits offre 4 096 niveaux ; 16 bits en offre 65 536, élargissant la dynamique de contraste. Elle n’augmente pas la résolution spatiale (liée à la matrice), n’allège pas le fichier, ni ne réduit le bruit par elle-même."
    }
  ],
  [fixedYesterdayDate]: [
    {
      id: 101,
      question: "Quelle est la capitale de la France ?",
      options: {
        A: "Berlin",
        B: "Madrid",
        C: "Paris",
        D: "Rome"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Paris est la capitale de la France, connue pour sa culture, son histoire et ses monuments emblématiques."
    },
    {
      id: 102,
      question: "Combien de jours y a-t-il dans une semaine ?",
      options: {
        A: "5 jours",
        B: "6 jours",
        C: "7 jours",
        D: "8 jours"
      },
      reponseCorrecte: OptionKeyEnum.C,
      justification: "Une semaine standard compte 7 jours : lundi, mardi, mercredi, jeudi, vendredi, samedi et dimanche."
    }
  ],
  "2024-07-26": [
    {
      id: 201,
      question: "Quel est le plus grand océan du monde ?",
      options: {
          A: "Océan Atlantique",
          B: "Océan Indien",
          C: "Océan Arctique",
          D: "Océan Pacifique"
      },
      reponseCorrecte: OptionKeyEnum.D,
      justification: "L'Océan Pacifique est le plus grand et le plus profond des océans du monde."
    }
  ]
};
