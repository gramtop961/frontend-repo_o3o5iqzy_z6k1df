import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function BackgroundFX() {
  // Parallax mouse reactive spotlight
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 100, damping: 20, mass: 0.3 })
  const sy = useSpring(my, { stiffness: 100, damping: 20, mass: 0.3 })

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [mx, my])

  const spotlight = useTransform([sx, sy], ([x, y]) => `radial-gradient(600px 600px at ${x}px ${y}px, rgba(0,201,177,0.10), transparent 60%)`)

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'linear-gradient(to right, #1D2B3A 1px, transparent 1px), linear-gradient(to bottom, #1D2B3A 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
      }} />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-[#00C9B1] blur-[100px] opacity-30"
        animate={{ x: [0, 60, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[55rem] h-[55rem] rounded-full bg-[#1D2B3A] blur-[120px] opacity-20"
        animate={{ x: [0, -50, 30, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Reactive spotlight that follows the cursor */}
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
    </div>
  )
}
