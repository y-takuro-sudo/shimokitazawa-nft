import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16 md:pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-600/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 md:w-96 md:h-96 bg-emerald-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-indigo-600/25 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Scanlines Effect */}
      <div className="absolute inset-0 scanlines opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with Zen Old Mincho */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-['Zen_Old_Mincho'] font-black mb-8 leading-tight tracking-tight"
        >
          <span className="block text-white neon-text">
            The Beast Sleeps
          </span>
          <span className="block mt-2 md:mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            in Shimokita.
          </span>
        </motion.h1>

        {/* Sub Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-300 font-[Space_Grotesk] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          <span className="text-purple-400">一瞬の咆哮、永遠の刻印。</span>
          <br className="hidden sm:block" />
          不可逆なブロックチェーン上で、あの夏は終わらない。
        </motion.p>

        {/* CTA Button with Glitch Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://launchmynft.io/sol/21930"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-xl font-[Orbitron] font-bold text-lg md:text-xl text-white btn-glow overflow-hidden"
          >
            {/* Glitch Noise Overlay on Hover */}
            {isHovering && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-transparent to-pink-500/30 animate-glitch-1" />
                <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 via-transparent to-emerald-500/20 animate-glitch-2" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    animation: 'glitch-noise 0.1s steps(2) infinite'
                  }}
                />
              </>
            )}
            <span className={`relative z-10 flex items-center gap-3 ${isHovering ? 'animate-glitch-text' : ''}`}>
              MINT SHIMOKITA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { label: 'MAX SUPPLY', value: '114' },
            { label: 'MINT PRICE', value: '0.5 SOL' },
            { label: 'Unique Beasts', value: 'Coming Soon' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="p-5 rounded-xl bg-slate-900/30 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <p className="text-2xl md:text-3xl font-[Orbitron] font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-500 font-[Space_Grotesk] mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-purple-400"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
