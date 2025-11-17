import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-24 sm:pt-32 sm:pb-28">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#00C9B1]/30 to-[#1D2B3A]/30 blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-[#1D2B3A]/20 to-[#00C9B1]/20 blur-3xl opacity-60 animate-pulse [animation-duration:5s]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-[#00C9B1]/10 text-[#1D2B3A] px-3 py-1 text-sm font-medium">
              Professional Websites & Digital Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1D2B3A]">
              Van concept tot live – wij bouwen uw digitale fundament
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              WebsiteKompas helpt kleinere bedrijven met moderne websites, apps en automatisering, zodat ze groeien zonder zorgen.
            </p>
            <div className="flex flex-wrap gap-3 group">
              <Magnetic>
                <a href="#services" className="inline-flex items-center rounded-md bg-[#00C9B1] text-[#1D2B3A] px-5 py-3 font-semibold shadow-sm hover:brightness-110 active:scale-[0.98] transition-transform">
                  Bekijk onze diensten
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="inline-flex items-center rounded-md border border-[#1D2B3A]/20 text-[#1D2B3A] px-5 py-3 font-semibold hover:bg-[#1D2B3A]/5 active:scale-[0.98] transition-transform">
                  Vraag een offerte aan
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            {/* Abstract card stack with parallax tilt */}
            <div className="relative mx-auto w-full max-w-md [perspective:1200px]">
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#1D2B3A]/10 to-[#00C9B1]/10 rounded-3xl blur-2xl"></div>
              <motion.div
                whileHover={{ rotateX: -2, rotateY: 3, translateZ: 12 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-xl [transform-style:preserve-3d]"
              >
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-slate-50 border border-slate-200 will-change-transform" />
                  ))}
                </div>
                <div className="mt-4 h-3 w-1/2 rounded bg-slate-100" />
                <div className="mt-2 h-3 w-2/3 rounded bg-slate-100" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
