import React from 'react';
import SynthesisButton from './SynthesisButton';

const SynthesisListPage: React.FC = () => {
  const syntheses = [
    {
      title: "Synthèse Générale",
      description: "Vue d'ensemble des concepts clés et points importants",
      path: "/synthesis/general",
      icon: "📚"
    },
    {
      title: "Points Essentiels",
      description: "Résumé des éléments cruciaux à retenir",
      path: "/synthesis/essential",
      icon: "⭐"
    },
    {
      title: "Formules et Définitions",
      description: "Compilation des formules et définitions importantes",
      path: "/synthesis/formulas",
      icon: "📝"
    },
    {
      title: "Cas Pratiques",
      description: "Exemples concrets et applications pratiques",
      path: "/synthesis/practical",
      icon: "💡"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center p-6 bg-rose-100 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-theme-primary mb-3">Synthèses</h2>
        <p className="text-theme-text-light text-lg">
          Retrouve ici toutes les synthèses pour consolider tes connaissances !
        </p>
      </section>

      <div className="grid gap-6 mt-8">
        {syntheses.map((synthesis, index) => (
          <SynthesisButton
            key={index}
            title={synthesis.title}
            description={synthesis.description}
            path={synthesis.path}
            icon={synthesis.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SynthesisListPage;