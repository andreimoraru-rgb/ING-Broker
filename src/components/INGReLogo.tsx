import React from 'react';

interface INGReLogoProps {
  className?: string;
  isDark?: boolean;
}

export const INGReLogo: React.FC<INGReLogoProps> = ({ className = "h-8 md:h-10 lg:h-16", isDark = false }) => {
  const logoSrc = isDark ? "/logo ing alb 4.png" : "/ing re-3.png";
  
  return (
    <img 
      src={logoSrc} 
      alt="ING Re Logo" 
      className={`${className} object-contain transition-all scale-[2.4] origin-left`}
      referrerPolicy="no-referrer"
    />
  );
};
