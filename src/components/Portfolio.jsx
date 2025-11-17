import { motion } from 'framer-motion'
import ParallaxCard from './ParallaxCard'

const projects = [
  {
    title: 'Bakkerij De Broodkorf',
    img: 'https://images.unsplash.com/photo-1541592553160-82008b127ccb?w=1200&auto=format&fit=crop&q=60',
  },
  {
    title: 'Studio Nova',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=60',
  },
  {
    title: 'Fit & Vitaal',
    img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1200&auto=format&fit=crop&q=60',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#F7F9FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2B3A]">Cases</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Een greep uit recente projecten. Volledige cases op aanvraag.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative"
            >
              <ParallaxCard className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <img src={p.img} alt={p.title} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform" />
                <div className="absolute inset-0 bg-[#1D2B3A]/0 group-hover:bg-[#1D2B3A]/50 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform">
                  <div className="inline-block rounded bg-white/90 backdrop-blur px-3 py-1 text-sm font-medium text-[#1D2B3A]">{p.title}</div>
                  <div className="mt-2 inline-block rounded bg-[#00C9B1] text-[#1D2B3A] px-3 py-1 text-xs font-semibold">Bekijk case</div>
                </div>
              </ParallaxCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
