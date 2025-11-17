import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Magnetic wrapper for buttons/links
// Adds a subtle magnetic pull and a soft cursor-follow highlight
export default function Magnetic({ children, className = '', strength = 20, radius = 120 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / rect.width
    const dy = (e.clientY - cy) / rect.height
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative inline-block ${className}`}
      style={{ x: sx, y: sy }}
    >
      {/* Highlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100"
        style={{
          background:
            `radial-gradient(${radius}px ${radius}px at calc(50% + ${sx.get()}px) calc(50% + ${sy.get()}px), rgba(0,201,177,0.15), transparent 70%)`,
          transition: 'opacity 200ms',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
