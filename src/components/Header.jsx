import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Diensten', href: '#services' },
  { label: 'Waarom wij', href: '#usps' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-teal-400/20 grid place-items-center">
            <span className="text-teal-400 font-bold">WK</span>
          </div>
          <span className="font-semibold text-slate-800">WebsiteKompas</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-teal-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-md bg-teal-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-teal-600 active:scale-[0.98] transition-all"
          >
            Vraag een offerte aan
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded hover:bg-slate-100 text-slate-700"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-4 pb-4 space-y-1 bg-white/90">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded px-3 py-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded px-3 py-2 bg-teal-500 text-white text-center font-medium hover:bg-teal-600"
            onClick={() => setOpen(false)}
          >
            Vraag een offerte aan
          </a>
        </nav>
      </div>
    </header>
  )
}
