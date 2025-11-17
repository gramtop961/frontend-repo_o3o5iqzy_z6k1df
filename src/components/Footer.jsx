import { Facebook, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#0F1924] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-teal-400/20 grid place-items-center">
                <span className="text-teal-400 font-bold">WK</span>
              </div>
              <span className="font-semibold text-white">WebsiteKompas</span>
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">Professionele websites en digitale oplossingen voor groeiende bedrijven.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Snel naar</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Diensten</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} /> +31 6 1234 5678</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@websitekompas.nl</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Volg ons</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" className="p-2 rounded bg-white/5 hover:bg-white/10"><Facebook size={18} /></a>
              <a href="#" className="p-2 rounded bg-white/5 hover:bg-white/10"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} WebsiteKompas. Alle rechten voorbehouden.</p>
          <p>Gemaakt met liefde voor design en technologie.</p>
        </div>
      </div>
    </footer>
  )
}
