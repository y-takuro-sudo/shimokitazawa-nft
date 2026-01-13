import { motion } from 'framer-motion'
import { MessageCircle, Twitter, FileText, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const CallToAction = () => {
  return (
    <section id="join" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/20 rounded-full blur-[180px]"
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Orbitron] font-black mb-12"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              JOIN US
            </span>
          </motion.h2>

          {/* SNS Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Note */}
            <motion.a
              href="https://note.com/oudo_810"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 rounded-xl font-[Orbitron] font-bold text-lg text-white border border-emerald-500/50 group-hover:border-transparent transition-colors">
                <FileText className="w-6 h-6" />
                Note
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
              href="https://x.com/oudo_810"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 rounded-xl font-[Orbitron] font-bold text-lg text-white border border-gray-500/50 group-hover:border-transparent transition-colors">
                <Twitter className="w-6 h-6" />
                X
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Discord */}
            <motion.a
              href="https://discord.gg/S9XCw23r"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-xl font-[Orbitron] font-bold text-lg text-white">
                <MessageCircle className="w-6 h-6" />
                Discord
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  )
}

export default CallToAction
