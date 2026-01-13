import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GlitchText = ({ children, className = '', intensity = 'medium' }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random glitch intervals
    const triggerGlitch = () => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        triggerGlitch()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const intensitySettings = {
    low: { offset: 2, blur: 1 },
    medium: { offset: 4, blur: 2 },
    high: { offset: 8, blur: 3 }
  }
  const glitchIntensity = intensitySettings[intensity] || intensitySettings.medium

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      {/* Main text */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          {/* Red/Cyan chromatic aberration */}
          <motion.span
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [-glitchIntensity.offset, glitchIntensity.offset, -glitchIntensity.offset / 2, 0],
              opacity: [0.8, 0.6, 0.8, 0]
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute inset-0 text-cyan-400 z-0"
            style={{
              clipPath: 'inset(10% 0 60% 0)',
              filter: `blur(${glitchIntensity.blur}px)`
            }}
            aria-hidden="true"
          >
            {children}
          </motion.span>

          <motion.span
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: [glitchIntensity.offset, -glitchIntensity.offset, glitchIntensity.offset / 2, 0],
              opacity: [0.8, 0.6, 0.8, 0]
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute inset-0 text-red-400 z-0"
            style={{
              clipPath: 'inset(50% 0 20% 0)',
              filter: `blur(${glitchIntensity.blur}px)`
            }}
            aria-hidden="true"
          >
            {children}
          </motion.span>

          {/* Noise slice effect */}
          <motion.span
            initial={{ scaleX: 1, opacity: 0 }}
            animate={{
              scaleX: [1, 1.02, 0.98, 1],
              opacity: [0, 0.5, 0.3, 0]
            }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 text-purple-300 z-0"
            style={{
              clipPath: 'inset(30% 0 40% 0)',
              transform: 'translateX(2px)'
            }}
            aria-hidden="true"
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}

export default GlitchText
