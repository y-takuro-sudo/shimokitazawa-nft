import { motion } from 'framer-motion'
import { Twitter, Github, MessageCircle, Hexagon } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Discord', icon: MessageCircle, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ]

  return (
    <footer className="relative bg-slate-950 border-t border-purple-500/20">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Hexagon className="w-6 h-6 text-purple-500" />
              <span className="font-[Orbitron] font-bold text-lg bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                SHIMOKITA NFT
              </span>
            </div>
            <p className="text-gray-400 text-sm font-[Space_Grotesk] max-w-xs">
              厳格なアイスティー技術で構築された分散型レガシープロトコル。
              野獣が目覚める。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-[Orbitron] font-semibold text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { en: 'About', ja: 'About' },
                { en: 'Collection', ja: 'コレクション' },
                { en: 'Roadmap', ja: 'ロードマップ' },
                { en: 'Team', ja: 'チーム' },
                { en: 'FAQ', ja: 'FAQ' }
              ].map((link) => (
                <li key={link.en}>
                  <a
                    href={`#${link.en.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-[Space_Grotesk]"
                  >
                    {link.ja}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-[Orbitron] font-semibold text-purple-400">
              Community
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-xs font-[Space_Grotesk]">
              114,514人以上のコミュニティに参加しよう
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-[Space_Grotesk]">
            &copy; 2024 Shimokitazawa NFT. All rights reserved. 厳格なアイスティーで構築。
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-400 text-xs font-[Space_Grotesk] transition-colors"
            >
              利用規約
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-400 text-xs font-[Space_Grotesk] transition-colors"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
