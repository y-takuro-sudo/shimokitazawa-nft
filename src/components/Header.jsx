import { useState, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Hexagon } from 'lucide-react'

const Header = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)

    checkMobile()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // メニュー開閉時にbodyスクロールを制御
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'JOIN US', href: '#join' },
  ]

  const handleMenuClick = (href) => {
    setIsMobileMenuOpen(false)
    // スムーズスクロール
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <>
      {/* ヘッダーバー */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? isMobile
              ? 'bg-slate-950 border-b border-purple-500/20'
              : 'bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
            : 'bg-slate-950'
        }`}
        style={{
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Hexagon className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors" />
              <span className="font-[Orbitron] font-bold text-lg md:text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                SHIMOKITA
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="font-[Space_Grotesk] text-sm text-gray-300 hover:text-purple-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button - z-index最大 */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors relative z-[1001]"
              aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/*
        ============================================
        モバイルメニュー - 全画面オーバーレイ
        ============================================
        なぜこの実装で「被り」が防げるか:
        1. fixed inset-0: viewport全体を覆う（スクロール位置に関係なく）
        2. z-[999]: ParticleBackground(z-0)やHero(z-10)より圧倒的に上
        3. bg-black: 完全不透明で下のコンテンツが透けない
        4. body overflow:hidden: メニュー展開中はスクロール不可
      */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[999] bg-black"
            style={{
              transform: 'translate3d(0, 0, 0)',
              willChange: 'opacity'
            }}
          >
            {/* メニューコンテンツ - 画面中央配置 */}
            <nav className="flex flex-col items-center justify-center h-full w-full gap-10 px-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.href)
                  }}
                  className="font-[Orbitron] text-3xl font-bold text-white hover:text-purple-400 transition-colors py-4"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

export default Header
