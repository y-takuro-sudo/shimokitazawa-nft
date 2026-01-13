import { motion } from 'framer-motion'
import { Sunrise, MapPin, PartyPopper, Circle, Lock } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Genesis',
      subtitle: '始動',
      icon: Sunrise,
      status: 'upcoming',
      progress: 0,
      items: [
        { text: 'NFT第一弾のローンチ', done: false },
        { text: 'コミュニティDiscordの設立', done: false },
        { text: '114ホルダーの達成', done: false }
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      phase: 'Phase 2',
      title: 'Coming Soon',
      subtitle: '準備中',
      icon: MapPin,
      status: 'upcoming',
      progress: 0,
      items: [
        { text: 'Coming Soon', done: false }
      ],
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      phase: 'Phase 3',
      title: 'Coming Soon',
      subtitle: '準備中',
      icon: PartyPopper,
      status: 'upcoming',
      progress: 0,
      items: [
        { text: 'Coming Soon', done: false }
      ],
      gradient: 'from-gray-600 to-gray-700'
    }
  ]

  const getStatusBadge = () => {
    return (
      <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400 text-xs font-[Space_Grotesk] font-medium">
        目標
      </span>
    )
  }

  // Calculate overall progress
  const overallProgress = Math.round(
    phases.reduce((acc, phase) => acc + phase.progress, 0) / phases.length
  )

  return (
    <section id="roadmap" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-purple-400 font-[Space_Grotesk] text-sm tracking-widest uppercase mb-4"
          >
            The Journey
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-[Orbitron] font-black text-white mb-6"
          >
            ROAD
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              MAP
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 font-[Space_Grotesk] text-lg max-w-2xl mx-auto"
          >
            下北沢NFTプロジェクトの目標。共に歩む未来への道筋。
          </motion.p>
        </motion.div>

        {/* Overall Progress Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 max-w-2xl mx-auto"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 font-[Space_Grotesk] text-sm">目標達成度</span>
            <span className="text-purple-400 font-[Orbitron] font-bold">{overallProgress}%</span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-purple-500/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${overallProgress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-indigo-500/50 md:-translate-x-0.5" />

          {/* Phase Cards */}
          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${phase.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                      <phase.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
                  >
                    {/* Phase Badge & Status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-[Orbitron] text-sm font-bold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
                        {phase.phase}
                      </span>
                      {getStatusBadge()}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-[Orbitron] font-bold text-white mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-purple-400/80 font-[Space_Grotesk] text-sm mb-6">
                      {phase.subtitle}
                    </p>

                    {/* Goal Items */}
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Circle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                          <span className="font-[Space_Grotesk] text-sm text-gray-400">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${phase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
