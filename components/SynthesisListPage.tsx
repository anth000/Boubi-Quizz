import React from 'react';
import { Link } from 'react-router-dom';
import SynthesisButton from './SynthesisButton';
import Button from './Button';
import { syntheses } from '../synthesisData';

const SynthesisListPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-start mb-6">
        <Link to="/">
          <Button variant="ghost">
            ← Retour à l'accueil
          </Button>
        </Link>
      </div>

      <section className="text-center p-6 bg-rose-100 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-theme-primary mb-3">Synthèses</h2>
        <p className="text-theme-text-light text-lg">
          Retrouve ici toutes les synthèses pour consolider tes connaissances !
        </p>
      </section>

      <div className="grid gap-6 mt-8">
        {Object.values(syntheses).map((synthesis) => (
          <SynthesisButton
            key={synthesis.id}
            title={synthesis.title}
            description={synthesis.description}
            path={`/synthesis/${synthesis.id}`}
            icon={synthesis.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SynthesisListPage;