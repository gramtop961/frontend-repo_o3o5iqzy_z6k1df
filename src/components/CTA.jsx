export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-[#1D2B3A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Klaar om te groeien?</h2>
          <p className="mt-3 text-slate-200 max-w-xl">Plan een gratis kennismaking of vraag direct een offerte aan. We reageren binnen één werkdag.</p>
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" placeholder="Naam" className="rounded-md px-4 py-3 bg-white/10 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C9B1]" />
          <input type="email" placeholder="E-mail" className="rounded-md px-4 py-3 bg-white/10 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C9B1]" />
          <textarea placeholder="Bericht" rows="3" className="sm:col-span-2 rounded-md px-4 py-3 bg-white/10 placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C9B1]"></textarea>
          <button type="button" className="sm:col-span-2 inline-flex justify-center items-center rounded-md bg-[#00C9B1] text-[#1D2B3A] px-6 py-3 font-semibold shadow-sm hover:brightness-110 active:scale-[0.98] transition">
            Verstuur bericht
          </button>
        </form>
      </div>
    </section>
  )
}
