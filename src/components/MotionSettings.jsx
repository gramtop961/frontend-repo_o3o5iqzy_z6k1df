import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

export default function MotionSettings({ children }) {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <MotionConfig reducedMotion={reduced ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  )
}
