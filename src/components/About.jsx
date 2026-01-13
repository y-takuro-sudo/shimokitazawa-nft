import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const About = () => {
  const nfts = [
    {
      id: 1,
      name: 'SHIMOKITAMEDAL',
      status: 'available',
      image: null, // プレースホルダー
      rarity: 'Legendary',
      description: '下北沢の伝説を刻んだジェネシスメダル',
      gradient: 'from-purple-500 via-pink-500 to-indigo-500'
    },
    {
      id: 2,
      name: 'Coming Soon',
      status: 'coming-soon',
      image: null,
      rarity: '???',
      description: '次なる覚醒を待て',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      id: 3,
      name: 'Coming Soon',
      status: 'coming-soon',
      image: null,
      rarity: '???',
      description: '次なる覚醒を待て',
      gradient: 'from-gray-600 to-gray-700'
    }
  ]

  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-purple-400 font-[Space_Grotesk] text-sm tracking-widest uppercase mb-4"
          >
            The Collection
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-[Orbitron] font-black text-white mb-6"
          >
            SHIMOKITA{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              NFTs
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 font-[Space_Grotesk] text-lg max-w-2xl mx-auto"
          >
            ブロックチェーンに刻まれた、永遠の証明。
          </motion.p>
        </motion.div>

        {/* NFT Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${nft.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full rounded-2xl bg-slate-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                {/* NFT Image Area */}
                <div className={`relative aspect-square bg-gradient-to-br ${nft.gradient} p-0.5`}>
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
                    {nft.status === 'available' ? (
                      <div className="relative w-full h-full">
                        <img
                          src="/shimokita_coin_NFT.png"
                          alt="SHIMOKITAMEDAL NFT"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="relative w-full h-full flex items-center justify-center bg-slate-900/80">
                        <Lock className="w-16 h-16 text-gray-600" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Rarity Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-[Space_Grotesk] font-medium ${
                      nft.status === 'available'
                        ? 'bg-purple-500/20 border border-purple-500/50 text-purple-400'
                        : 'bg-gray-500/20 border border-gray-500/50 text-gray-500'
                    }`}>
                      {nft.rarity}
                    </span>
                    {nft.status === 'available' && (
                      <span className="text-xs text-emerald-400 font-[Space_Grotesk]">
                        Mintable
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-[Orbitron] font-bold mb-2 ${
                    nft.status === 'available' ? 'text-white' : 'text-gray-500'
                  }`}>
                    {nft.name}
                  </h3>

                  {/* Description */}
                  <p className={`font-[Space_Grotesk] text-sm ${
                    nft.status === 'available' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {nft.description}
                  </p>

                  {/* Action Button */}
                  {nft.status === 'available' && (
                    <motion.a
                      href="https://launchmynft.io/sol/21930"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 font-[Orbitron] font-bold text-sm text-white hover:opacity-90 transition-opacity block text-center"
                    >
                      MINT NOW
                    </motion.a>
                  )}
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${nft.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
