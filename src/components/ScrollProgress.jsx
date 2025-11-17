import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, { stiffness: 140, damping: 20, mass: 0.2 })

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent"
    >
      <motion.div
        className="h-full bg-[#00C9B1]"
        style={{ scaleX: width, transformOrigin: '0% 50%' }}
      />
    </motion.div>
  )
}
