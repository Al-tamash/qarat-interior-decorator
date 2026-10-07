import React from 'react';
import './QaratLogo.css';

/**
 * Qarat Emblem (Concept 3C - Precision Carat Diamond & Drafting Frame)
 * - Circular architectural vault frame (inherits currentColor)
 * - Sharp diamond kite contour in signature gold
 * - Precision drafting compass cross-axes
 * - Facet surface shading
 * - 45-degree architectural mitered Q-tail in signature gold
 */
export const QaratEmblem = ({ className = '', size = 36 }) => (
  <svg
    className={`qarat-emblem-svg ${className}`}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Circular Drafting Vault Frame */}
    <circle
      cx="47"
      cy="47"
      r="36"
      stroke="currentColor"
      strokeWidth="4.5"
    />
    
    {/* Diamond Facet Shading */}
    <polygon
      points="47,24 47,47 64,47"
      fill="rgba(183, 154, 107, 0.22)"
    />
    <polygon
      points="47,70 47,47 30,47"
      fill="rgba(183, 154, 107, 0.22)"
    />

    {/* Sleek Sharp Diamond Kite Contour */}
    <polygon
      points="47,24 64,47 47,70 30,47"
      stroke="var(--accent-primary, #B79A6B)"
      strokeWidth="2.8"
      strokeLinejoin="round"
      fill="rgba(183, 154, 107, 0.08)"
    />

    {/* Precision Drafting Compass Axis Lines */}
    <line
      x1="47"
      y1="24"
      x2="47"
      y2="70"
      stroke="var(--accent-primary, #B79A6B)"
      strokeWidth="2"
    />
    <line
      x1="30"
      y1="47"
      x2="64"
      y2="47"
      stroke="var(--accent-primary, #B79A6B)"
      strokeWidth="2"
    />

    {/* Architectural 45-degree Gold Q-Tail */}
    <path
      d="M57 57 L83 83"
      stroke="var(--accent-primary, #B79A6B)"
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

const QaratLogo = ({
  size = 'default', // 'sm' | 'default' | 'lg'
  showSubtitle = true,
  className = '',
  layout = 'horizontal', // 'horizontal' | 'vertical'
}) => {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 44 : 36;

  return (
    <div className={`qarat-logo-brand ${layout} size-${size} ${className}`}>
      <QaratEmblem size={iconSize} />
      <div className="qarat-logo-text">
        <span className="qarat-brand-name">QARAT</span>
        {showSubtitle && (
          <span className="qarat-brand-sub">INTERIOR DECORATOR</span>
        )}
      </div>
    </div>
  );
};

export default QaratLogo;
