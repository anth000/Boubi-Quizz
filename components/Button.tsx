
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-150 ease-in-out";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-theme-primary text-white hover:bg-theme-primary-hover focus:ring-theme-primary";
      break;
    case 'secondary':
      variantStyles = "bg-theme-secondary text-theme-primary hover:bg-rose-300 focus:ring-theme-primary";
      break;
    case 'ghost':
      variantStyles = "bg-transparent text-theme-primary hover:bg-rose-100 focus:ring-theme-primary";
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
