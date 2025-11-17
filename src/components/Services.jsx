import { motion } from 'framer-motion'
import { Code2, Smartphone, Workflow, LifeBuoy } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Webdesign & ontwikkeling',
    desc: 'Moderne, snelle websites en webshops met focus op resultaat en conversie.',
  },
  {
    icon: Smartphone,
    title: 'Mobiele apps',
    desc: 'Cross-platform apps die uw diensten dichter bij uw klanten brengen.',
  },
  {
    icon: Workflow,
    title: 'Automatisering & tools',
    desc: 'Koppel systemen en bespaar tijd met slimme automatiseringen en maatwerk tools.',
  },
  {
    icon: LifeBuoy,
    title: 'Onderhoud & support',
    desc: 'Updates, beveiliging en snelle hulp wanneer u het nodig heeft.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#F7F9FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2B3A]">Wat we doen</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Complete digitale oplossingen voor kleine en middelgrote bedrijven.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow will-change-transform"
            >
              <div className="h-12 w-12 rounded-lg bg-[#00C9B1]/10 text-[#00C9B1] grid place-items-center mb-4 group-hover:scale-105 transition-transform">
                <s.icon className="" />
              </div>
              <h3 className="font-semibold text-[#1D2B3A]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-[#1D2B3A] group-hover:text-teal-600 transition-colors">Meer lezen →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
