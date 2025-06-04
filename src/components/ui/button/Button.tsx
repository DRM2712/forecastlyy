import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  onClick?: () => void;
  animated?: boolean;
}

const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'md', 
  href, 
  target,
  onClick,
  animated = false
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300";
  
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const animationStyles = animated ? "transform hover:-translate-y-1 hover:shadow-md" : "";
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${animationStyles} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        target={target}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
