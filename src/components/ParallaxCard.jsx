import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// ParallaxCard: subtle 3D tilt on hover + smooth spring back
// Optionally pass className and children. Keep GPU-friendly: only transforms.
export default function ParallaxCard({ children, className = '', maxTilt = 8, hoverLift = 6 }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const tz = useMotionValue(0)

  const srx = useSpring(rx, { stiffness: 140, damping: 12, mass: 0.2 })
  const sry = useSpring(ry, { stiffness: 140, damping: 12, mass: 0.2 })
  const stz = useSpring(tz, { stiffness: 140, damping: 12, mass: 0.2 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const tiltX = (py - 0.5) * -2 * maxTilt // invert so top tilts back
    const tiltY = (px - 0.5) * 2 * maxTilt
    rx.set(tiltX)
    ry.set(tiltY)
    tz.set(hoverLift)
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
    tz.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`[transform-style:preserve-3d] will-change-transform ${className}`}
      style={{
        rotateX: srx,
        rotateY: sry,
        translateZ: stz,
      }}
    >
      {children}
    </motion.div>
  )
}
