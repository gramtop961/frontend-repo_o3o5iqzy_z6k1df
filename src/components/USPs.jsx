import { motion } from 'framer-motion'
import { Sparkles, Target, MonitorSmartphone, Gauge } from 'lucide-react'

const usps = [
  { icon: Sparkles, title: 'Complete digitale oplossingen', desc: 'Van strategie tot uitvoering: één partner voor web, apps en automatisering.' },
  { icon: Target, title: 'Focus op kleine bedrijven', desc: 'We begrijpen de uitdagingen van MKB en bouwen wat echt impact maakt.' },
  { icon: MonitorSmartphone, title: 'Modern & responsive', desc: 'Snel, veilig en pixel-perfect op elk scherm.' },
  { icon: Gauge, title: 'Automatisering voor groei', desc: 'Slimme koppelingen en workflows die tijd besparen en schaal mogelijk maken.' },
]

export default function USPs() {
  return (
    <section id="usps" className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,201,177,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(29,43,58,0.06),transparent_40%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2B3A]">Waarom kiezen voor ons</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, idx) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-md bg-[#1D2B3A] text-white grid place-items-center mb-3">
                <u.icon size={18} />
              </div>
              <h3 className="font-semibold text-[#1D2B3A]">{u.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
