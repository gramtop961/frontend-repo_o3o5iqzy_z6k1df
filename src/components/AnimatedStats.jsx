import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [values, setValues] = useState({ clients: 0, projects: 0, rating: 0 })

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const duration = 1400
    const targets = { clients: 120, projects: 340, rating: 9.6 }

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setValues({
        clients: Math.round(targets.clients * p),
        projects: Math.round(targets.projects * p),
        rating: Math.round(targets.rating * 10 * p) / 10,
      })
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView])

  return (
    <section ref={ref} className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-4xl font-extrabold text-[#1D2B3A]">{values.clients}+</div>
            <div className="mt-1 text-slate-600">Tevreden klanten</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-4xl font-extrabold text-[#1D2B3A]">{values.projects}+</div>
            <div className="mt-1 text-slate-600">Projecten afgerond</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-4xl font-extrabold text-[#1D2B3A]">{values.rating}</div>
            <div className="mt-1 text-slate-600">Gemiddelde beoordeling</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
