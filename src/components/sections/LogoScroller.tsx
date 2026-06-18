import React from 'react';
import { motion } from 'framer-motion';

interface LogoScrollerProps {
  className?: string;
}

const LogoScroller: React.FC<LogoScrollerProps> = ({ className }) => {
  const logos = [
    { name: 'PITB', icon: '/images/pitb (2).png', size: '140px' },
    { name: 'Regional Plane 9', icon: '/images/regional.png', size: '390px' },
    { name: 'NASTP', icon: '/images/nastp.png', size: '140px' },
    { name: 'Bank of Khyber', icon: '/images/bok (2).png', size: '140px' },
    { name: 'Ignite', icon: '/images/ignite.png', size: '140px' },
  ];

  return (
    <section className={`py-16 px-4 overflow-hidden ${className || ''}`}>
      <div className="max-w-full mx-auto">
        {/* Horizontal line with text */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="flex-grow h-px" style={{ 
            background: 'linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)'
          }} />
          <span className="px-6 text-sm font-medium tracking-wider uppercase" style={{ color: 'var(--neon-blue)' }}>
            Trusted By
          </span>
          <div className="flex-grow h-px" style={{ 
            background: 'linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)'
          }} />
        </div>

        {/* Single row - moves Left to Right */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center"
            style={{ gap: '60px' }}
            animate={{
              x: [0, -2800],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="inline-flex items-center flex-shrink-0"
              >
                <img 
                  src={logo.icon} 
                  alt={logo.name}
                  className="object-contain"
                  style={{ width: logo.size, height: logo.size }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroller;