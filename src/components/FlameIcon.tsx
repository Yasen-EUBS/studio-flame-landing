import { FC } from 'react';

interface FlameIconProps {
  className?: string;
  inverted?: boolean;
}

// The flame icon from the logo, can be rotated 180° for beard
export const FlameIcon: FC<FlameIconProps> = ({ className = "w-8 h-8", inverted = false }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="currentColor"
      style={{ transform: inverted ? 'rotate(180deg)' : 'none' }}
    >
      {/* Flame shape matching the Studio Flame logo */}
      <path d="M50 5 L30 35 L15 55 L30 45 L25 75 L50 55 L75 75 L70 45 L85 55 L70 35 L50 5Z" />
    </svg>
  );
};

// Combo icon: Scissors + Inverted Flame side by side
export const ComboIcon: FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
      <svg 
        className="w-4 h-4" 
        viewBox="0 0 100 100" 
        fill="currentColor"
        style={{ transform: 'rotate(180deg)' }}
      >
        <path d="M50 5 L30 35 L15 55 L30 45 L25 75 L50 55 L75 75 L70 45 L85 55 L70 35 L50 5Z" />
      </svg>
    </div>
  );
};

export default FlameIcon;
