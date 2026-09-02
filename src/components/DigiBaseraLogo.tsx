import React from 'react';
import monogramImg from '../assets/digibasera-monogram.png';

interface DigiBaseraLogoProps {
  variant?: 'light' | 'dark' | 'full-gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  layout?: 'horizontal' | 'vertical' | 'mark-only';
}

export const DigiBaseraLogo: React.FC<DigiBaseraLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
  layout = 'horizontal',
}) => {
  // Height and scale profiles
  const sizeMap = {
    sm: { markSize: 34, titleSize: 'text-base', subSize: 'text-[8px]', gap: 'gap-2.5' },
    md: { markSize: 42, titleSize: 'text-xl', subSize: 'text-[9px]', gap: 'gap-3' },
    lg: { markSize: 56, titleSize: 'text-2xl', subSize: 'text-[10px]', gap: 'gap-3.5' },
    xl: { markSize: 72, titleSize: 'text-3xl', subSize: 'text-xs', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];

  // Colors & styling based on background variant
  const isDark = variant === 'dark'; // on dark footer
  const isLight = variant === 'light'; // on light header

  return (
    <div
      className={`inline-flex ${
        layout === 'vertical'
          ? 'flex-col items-center text-center'
          : 'items-center'
      } ${currentSize.gap} select-none ${className}`}
      id="digibasera-official-logo"
    >
      {/* 3D Interlocking "DB" Luxury Monogram */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.markSize}
          height={currentSize.markSize}
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm filter transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Gold Gradients */}
            <linearGradient id="goldLinearLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="30%" stopColor="#E2BD50" />
              <stop offset="70%" stopColor="#B68A22" />
              <stop offset="100%" stopColor="#7E580A" />
            </linearGradient>

            <linearGradient id="goldBevel" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#966E12" />
              <stop offset="50%" stopColor="#E5C768" />
              <stop offset="100%" stopColor="#FFF5C8" />
            </linearGradient>

            <linearGradient id="darkFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C1A17" />
              <stop offset="50%" stopColor="#111111" />
              <stop offset="100%" stopColor="#080808" />
            </linearGradient>

            {/* Drop shadow filter for 3D depth */}
            <filter id="monogramShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="1.5" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background subtle luxury coin seal (optional container accent) */}
          <circle
            cx="70"
            cy="70"
            r="66"
            fill={isDark ? '#181714' : '#FAFAF8'}
            stroke="url(#goldLinearLight)"
            strokeWidth="2.5"
            strokeOpacity={isDark ? '0.85' : '0.75'}
          />

          {/* Inner Accent Ring */}
          <circle
            cx="70"
            cy="70"
            r="60"
            fill="none"
            stroke="url(#goldLinearLight)"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            strokeDasharray="2 3"
          />

          {/* Intertwined 'D' Letterform */}
          <g filter="url(#monogramShadow)">
            {/* D stem and curve */}
            <path
              d="M36 26 H56 C74 26 86 36 86 52 C86 68 74 78 56 78 H36 V26 Z"
              fill="url(#darkFill)"
              stroke="url(#goldBevel)"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />
            {/* D inner counter */}
            <path
              d="M47 37 H55 C66 37 73 43 73 52 C73 61 66 67 55 67 H47 V37 Z"
              fill={isDark ? '#181714' : '#FAFAF8'}
              stroke="url(#goldLinearLight)"
              strokeWidth="2"
            />

            {/* Intertwined 'B' Letterform with ribbon crossover */}
            {/* Upper & Lower B loops */}
            <path
              d="M58 40 H84 C95 40 103 47 103 57 C103 65 96 71 86 73 C98 75 107 82 107 94 C107 106 97 114 82 114 H52 C45 114 40 109 42 102 C44 94 53 84 62 76 L74 65 L60 40 Z"
              fill="url(#darkFill)"
              stroke="url(#goldLinearLight)"
              strokeWidth="3.2"
              strokeLinejoin="round"
            />

            {/* B Upper Counter */}
            <path
              d="M68 49 H81 C88 49 92 52 92 57 C92 62 88 65 81 65 H68 V49 Z"
              fill={isDark ? '#181714' : '#FAFAF8'}
              stroke="url(#goldBevel)"
              strokeWidth="1.8"
            />

            {/* B Lower Counter */}
            <path
              d="M66 79 H81 C89 79 95 83 95 90 C95 97 89 101 81 101 H66 V79 Z"
              fill={isDark ? '#181714' : '#FAFAF8'}
              stroke="url(#goldBevel)"
              strokeWidth="1.8"
            />

            {/* Swash ribbon crossing through the D and B */}
            <path
              d="M38 104 C46 95 62 78 72 66 C80 56 86 46 90 35"
              fill="none"
              stroke="url(#goldBevel)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* Trademark (TM) Badge */}
          <circle cx="112" cy="30" r="10" fill="url(#darkFill)" stroke="url(#goldLinearLight)" strokeWidth="1.2" />
          <text
            x="112"
            y="33.5"
            fontSize="8"
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
            fill="url(#goldBevel)"
            textAnchor="middle"
          >
            TM
          </text>
        </svg>
      </div>

      {/* Typography: "Digi Basera" & "— MARKETING AGENCY —" */}
      {layout !== 'mark-only' && (
        <div className={`flex flex-col ${layout === 'vertical' ? 'items-center' : 'items-start'}`}>
          {/* Main Title: Digi Basera */}
          <div className="flex items-baseline tracking-tight font-serif leading-none">
            <span
              className={`${currentSize.titleSize} font-extrabold tracking-normal font-['Playfair_Display',serif] ${
                isDark
                  ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                  : 'text-[#111111]'
              }`}
            >
              Digi{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E096] to-[#AA821C] bg-clip-text text-transparent drop-shadow-xs font-black">
                Basera
              </span>
            </span>
          </div>

          {/* Subtitle: — MARKETING AGENCY — */}
          {showTagline && (
            <div
              className={`flex items-center gap-1.5 ${currentSize.subSize} font-bold uppercase tracking-[0.22em] mt-1 font-['Plus_Jakarta_Sans',sans-serif] ${
                isDark ? 'text-[#D4AF37]' : 'text-[#8C6B16]'
              }`}
            >
              <span className="w-3.5 h-[1.2px] bg-gradient-to-r from-transparent to-[#D4AF37] opacity-80" />
              <span>Marketing Agency</span>
              <span className="w-3.5 h-[1.2px] bg-gradient-to-l from-transparent to-[#D4AF37] opacity-80" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
