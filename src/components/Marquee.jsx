import { memo } from 'react'
import { motion } from 'framer-motion'

const Marquee = memo(({ direction = 'left', speed = 30 }) => {
  const text = 'YJSP // SMKT // 114514 // 810 // SENPAI //'
  const repeatedText = Array(10).fill(text).join(' ')

  return (
    <div className="relative py-6 bg-gradient-to-r from-purple-950/50 via-slate-900 to-purple-950/50 border-y border-purple-500/20 overflow-hidden">
      {/* Gradient Overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Scrolling Content */}
      <div className="flex">
        <motion.div
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%']
          }}
          transition={{
            x: {
              duration: speed,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          className="flex shrink-0 gap-8"
        >
          {/* First copy */}
          <span className="shrink-0 font-[Orbitron] text-lg md:text-xl font-bold tracking-wider text-purple-400/60 whitespace-nowrap">
            {repeatedText}
          </span>
          {/* Second copy for seamless loop */}
          <span className="shrink-0 font-[Orbitron] text-lg md:text-xl font-bold tracking-wider text-purple-400/60 whitespace-nowrap">
            {repeatedText}
          </span>
        </motion.div>
      </div>

      {/* Subtle glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </div>
  )
})

export default Marquee
