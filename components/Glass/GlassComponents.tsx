import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = `
    backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5
    border border-white/20 rounded-2xl shadow-xl
    ${hover ? 'hover:shadow-2xl hover:border-white/30 transition-all duration-300' : ''}
    ${className}
  `;

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

interface GlassSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const GlassSection: React.FC<GlassSectionProps> = ({ 
  children, 
  className = '',
  id
}) => {
  return (
    <div 
      id={id}
      className={`
        backdrop-blur-sm bg-gradient-to-br from-black/20 to-black/10
        border-t border-white/10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default { GlassCard, GlassSection };