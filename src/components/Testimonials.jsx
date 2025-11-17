import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2B3A] mb-8">Wat klanten zeggen</h2>
        <div className="relative">
          {quotes.map((q, i) => (
            <blockquote
              key={q.author}
              className={`transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            >
              <p className="text-xl text-slate-700">“{q.quote}”</p>
              <footer className="mt-4 text-slate-500">{q.author}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              aria-label={`Ga naar quote ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-[#00C9B1]' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
