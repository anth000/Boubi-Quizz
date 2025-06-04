import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { syntheses } from '../synthesisData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks'; // Permet de transformer chaque saut de ligne simple en <br/>

const SynthesisPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  if (!type || !syntheses[type]) {
    navigate('/synthesis');
    return null;
  }

  const synthesis = syntheses[type];

  return (
    <div className="space-y-6">
      <div className="bg-rose-100 rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="text-4xl">{synthesis.icon}</span>
          <h1 className="text-3xl font-bold text-theme-primary">
            {synthesis.title}
          </h1>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-inner">
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {synthesis.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/synthesis">
          <Button variant="primary">Retour aux synthèses</Button>
        </Link>
      </div>
    </div>
  );
};

export default SynthesisPage;
