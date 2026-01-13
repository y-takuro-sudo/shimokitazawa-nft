import { useEffect, useRef, memo } from 'react'

const ParticleBackground = memo(() => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const isVisibleRef = useRef(true)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // モバイル判定（Safari対策）
    const isMobile = window.innerWidth <= 768
    // モバイルではパーティクル数を大幅削減
    const particleDensity = isMobile ? 80000 : 20000
    // モバイルでは接続線を無効化
    const enableConnections = !isMobile

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particlesRef.current = []
      // モバイルではパーティクル数を1/4に削減
      const particleCount = Math.floor((canvas.width * canvas.height) / particleDensity)

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          color: Math.random() > 0.5 ? '#a855f7' : '#22d3ee',
          pulse: Math.random() * Math.PI * 2
        })
      }
    }

    const drawParticles = () => {
      // 画面外ではアニメーション停止（DOMは維持）
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(drawParticles)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.pulse += 0.02

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        const pulseOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(particle.pulse))

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = pulseOpacity
        ctx.fill()

        // 接続線（PCのみ、モバイルでは無効）
        if (enableConnections && index < 30) {
          particles.slice(index + 1, index + 10).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = (1 - distance / 80) * 0.08
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })
        }
      })

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(drawParticles)
    }

    // IntersectionObserver: 画面外判定（コンポーネントは維持、アニメのみ停止）
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    drawParticles()

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.6,
        /* GPU強制: Safari対策 */
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform'
      }}
    />
  )
})

export default ParticleBackground
