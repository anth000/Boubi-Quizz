import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface SynthesisButtonProps {
  title: string;
  description: string;
  path: string;
  icon?: string;
}

const SynthesisButton: React.FC<SynthesisButtonProps> = ({ title, description, path, icon }) => {
  return (
    <Link to={path} className="block">
      <div className="group hover:transform hover:scale-102 transition-all duration-200">
        <div className="bg-white p-6 rounded-xl shadow-md border border-rose-100 hover:border-theme-primary hover:shadow-lg transition-all duration-200">
          <div className="flex items-center space-x-4">
            {icon && <span className="text-2xl">{icon}</span>}
            <div>
              <h3 className="text-xl font-semibold text-theme-primary group-hover:text-theme-primary-hover transition-colors duration-200">
                {title}
              </h3>
              <p className="text-theme-text-light mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SynthesisButton;