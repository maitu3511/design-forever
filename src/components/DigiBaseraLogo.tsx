import React from 'react';
import fullLogoImg from '../assets/digibasera-logo-full.png';

interface DigiBaseraLogoProps {
  variant?: 'light' | 'dark' | 'full-gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  layout?: 'horizontal' | 'vertical' | 'mark-only';
}

export const DigiBaseraLogo: React.FC<DigiBaseraLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  // Height profiles for the official full logo mark (monogram + wordmark + tagline
  // are all part of the single approved logo image, so we render it as one unit).
  const sizeMap = {
    sm: 44,
    md: 56,
    lg: 76,
    xl: 96,
  };

  const logoHeight = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      id="digibasera-official-logo"
    >
      <img
        src={fullLogoImg}
        alt="Digi Basera Marketing Agency"
        height={logoHeight}
        loading="eager"
        decoding="async"
        style={{ height: logoHeight, width: 'auto' }}
        className="object-contain max-w-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};
