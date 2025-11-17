import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const quotes = [
  {
    quote:
      'WebsiteKompas leverde binnen enkele weken een snelle, moderne site die direct meer aanvragen opleverde.',
    author: 'Marieke — Studio Nova',
  },
  {
    quote:
      'Dankzij de automatiseringen besparen we elke week uren. Ze denken mee en leveren kwaliteit.',
    author: 'Jeroen — LogiTrans',
  },
  {
    quote: 'Heldere communicatie, strak design en top support. Aanrader!',
    author: 'Ahmed — Fit & Vitaal',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4500)
    return () => clearInterval(id)
  }, [])

  const positions = useMemo(() => {
    // compute positions for 3D coverflow style
    const arr = []
    for (let i = 0; i < quotes.length; i++) {
      const offset = ((i - index + quotes.length) % quotes.length)
      // map to -1, 0, 1 positions relative to active
      let pos = offset
      if (offset === quotes.length - 1) pos = -1
      // properties
      const isActive = pos === 0
      const x = pos * 220 // px
      const z = isActive ? 60 : pos === 0 ? 60 : -40
      const rY = pos * -22
      const o = isActive ? 1 : 0.7
      const scale = isActive ? 1 : 0.92
      arr.push({ x, z, rY, o, scale, isActive })
    }
    return arr
  }, [index])

  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2B3A] mb-10">Wat klanten zeggen</h2>

        <div className="relative mx-auto" style={{ perspective: 1000 }}>
          <div className="relative h-56 sm:h-60 [transform-style:preserve-3d] flex items-center justify-center">
            {quotes.map((q, i) => {
              const p = positions[i]
              return (
                <motion.blockquote
                  key={q.author}
                  className={`absolute inset-0 mx-auto w-full sm:w-[36rem] rounded-xl border border-slate-200 bg-white/90 backdrop-blur p-6 shadow-md`}
                  initial={false}
                  animate={{
                    x: p.x,
                    z: p.z,
                    rotateY: p.rY,
                    opacity: p.o,
                    scale: p.scale,
                  }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  aria-hidden={!p.isActive}
                >
                  <p className="text-lg sm:text-xl text-slate-700">“{q.quote}”</p>
                  <footer className="mt-4 text-slate-500">{q.author}</footer>
                </motion.blockquote>
              )
            })}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ga naar quote ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-[#00C9B1]' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
