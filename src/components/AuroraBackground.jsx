import { memo } from 'react'
import { motion } from 'framer-motion'

const AuroraBackground = memo(() => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large rotating gradient orb 1 */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full"
      >
        <div
          className="w-full h-full blur-[100px]"
          style={{
            background: 'conic-gradient(from 0deg, rgba(147, 51, 234, 0.2), transparent 30%, rgba(147, 51, 234, 0.2))'
          }}
        />
      </motion.div>

      {/* Large rotating gradient orb 2 */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
      >
        <div
          className="w-full h-full blur-[120px]"
          style={{
            background: 'conic-gradient(from 0deg, rgba(79, 70, 229, 0.15), transparent 40%, rgba(34, 211, 238, 0.15))'
          }}
        />
      </motion.div>

      {/* Floating aurora strips */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-0 right-0 h-64 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute top-2/3 left-0 right-0 h-64 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent blur-3xl"
      />

      {/* Pulsing center glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)'
        }}
      />
    </div>
  )
})

export default AuroraBackground
