import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from './Button';

const SynthesisPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const getSynthesisContent = () => {
    switch (type) {
      case 'general':
        return {
          title: "Synthèse Générale",
          content: "Contenu de la synthèse générale...",
          icon: "📚"
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