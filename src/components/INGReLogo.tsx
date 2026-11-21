import React from 'react';

interface INGReLogoProps {
  className?: string;
  isDark?: boolean;
}

export const INGReLogo: React.FC<INGReLogoProps> = ({ className = "h-8 md:h-10 lg:h-16", isDark = false }) => {
  const logoSrc = isDark ? "/images/optimized-20261121-v1/logo-ing-alb-4.webp" : "/images/optimized-20261121-v1/ing-re-3.webp";
  
  return (
    <img 
      src={logoSrc} 
      alt="ING Re Logo"
      data-ing-re-logo="original"
      data-logo-color={isDark ? "white" : "black"}
      className={`${className} object-contain transition-all scale-[2.4] origin-left`}
      referrerPolicy="no-referrer"
    />
  );
};
