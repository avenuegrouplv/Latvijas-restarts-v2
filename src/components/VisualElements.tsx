import React from 'react';
import { motion } from 'motion/react';

export const Daisy = ({ className = "" }: { className?: string }) => (
  <motion.div 
    initial={{ rotate: 0 }}
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className={`relative w-16 h-16 ${className}`}
  >
    {/* Center - Disk florets */}
    <div className="absolute inset-0 m-auto w-5 h-5 bg-[#FFD400] rounded-full z-10 shadow-inner border border-yellow-600/10" />
    
    {/* Petals - Ray florets */}
    {[...Array(16)].map((_, i) => (
      <div
        key={i}
        className="absolute inset-0 m-auto w-3 h-8 bg-white rounded-[40%] origin-center shadow-sm border border-zinc-100/50"
        style={{ 
          transform: `rotate(${i * 22.5}deg) translateY(-14px)`,
          clipPath: 'ellipse(45% 50% at 50% 50%)'
        }}
      />
    ))}
  </motion.div>
);

export const LatvianPattern = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`} style={{ 
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%239E1B32' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    backgroundSize: '40px 40px' 
  }}>
    {/* A subtle geometric pattern referencing traditional Latvian weaving ornaments */}
  </div>
);
