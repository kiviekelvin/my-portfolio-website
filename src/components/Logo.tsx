import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', onClick }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const strokeWidth = {
    sm: '2',
    md: '2.5',
    lg: '3'
  };

  const dimensions = {
    sm: { width: 24, height: 24 },
    md: { width: 36, height: 36 },
    lg: { width: 48, height: 48 }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${sizeClasses[size]} ${className} cursor-pointer relative flex items-center justify-center group`}
    >
      {/* Outer container with subtle background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
        {/* Inner glow effect */}
        <div className="absolute inset-0.5 rounded-xl bg-gradient-to-br from-dark-200/60 to-dark-100/60" />
      </div>
      
      {/* Custom K-inspired geometric logo */}
      <svg
        width={dimensions[size].width}
        height={dimensions[size].height}
        viewBox="0 0 24 24"
        fill="none"
        className="relative z-10"
      >
        {/* Main vertical line (left side of K) */}
        <motion.line
          x1="4"
          y1="3"
          x2="4"
          y2="21"
          stroke="url(#gradient1)"
          strokeWidth={strokeWidth[size]}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        
        {/* Upper diagonal line */}
        <motion.line
          x1="4"
          y1="12"
          x2="18"
          y2="3"
          stroke="url(#gradient2)"
          strokeWidth={strokeWidth[size]}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Lower diagonal line */}
        <motion.line
          x1="4"
          y1="12"
          x2="18"
          y2="21"
          stroke="url(#gradient3)"
          strokeWidth={strokeWidth[size]}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        
        {/* Accent dot at intersection */}
        <motion.circle
          cx="4"
          cy="12"
          r="2"
          fill="url(#gradientDot)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <radialGradient id="gradientDot">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Subtle outer glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default Logo;