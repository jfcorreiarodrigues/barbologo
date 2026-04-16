import heroImg from '../assets/barber1.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 flex items-center bg-barbo-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        {/* ─── LEFT 66% ────────────────────────────────────────────────── */}
        <div className="md:col-span-2 flex flex-col justify-center opacity-0 animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>

          {/* Eyebrow rule */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-barbo-copper" />
            <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-copper">
              Lisboa, Areeiro · Fundado por João Garrido
            </span>
          </div>

          {/* H1 — Serif, massive, multi-line */}
          <h1 className="font-serif font-bold leading-[1.04] text-barbo-text mb-8
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            A Precisão<br />
            <em className="font-normal italic">Intemporal.</em><br />
            O Legado de<br />
            Duas Gerações.
          </h1>

          {/* Body copy */}
          <p className="font-sans font-light text-base md:text-lg text-barbo-muted
                        max-w-prose leading-relaxed mb-10">
            Herança familiar, o tempo como aliado e o ritual da toalha quente.
            No Areeiro, Lisboa — quatro cadeiras de pele desenhadas à medida,
            lavatórios de lavagem frontal contínuos e paredes onde a arte
            dialoga com café de especialidade. Um espaço onde o conhecimento
            se transmite de pai para filho, numa sucessão de precisão e cuidado.
          </p>

          {/* Call-to-action row */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#agendamento"
              className="font-sans text-[11px] tracking-widest uppercase
                         px-8 py-4 bg-barbo-copper text-barbo-bg font-semibold rounded-full
                         border border-barbo-copper shadow-lg
                         hover:bg-barbo-copper-light hover:scale-105 transition-all duration-300"
            >
              Marcar Agendamento
            </a>
            <a
              href="#servicos"
              className="font-sans text-[11px] tracking-widest uppercase
                         text-barbo-text/60 hover:text-barbo-copper
                         transition-colors duration-200"
            >
              Ver Serviços &rarr;
            </a>
          </div>

          {/* Mini Time Out badge */}
          <div className="mt-12 flex items-center gap-5">
            <div className="w-px h-10 bg-barbo-text/15" />
            <div>
              <div className="font-sans text-[10px] text-barbo-text/50 tracking-wider uppercase mb-0.5">
                Time Out Lisboa · Prova de Excelência
              </div>
              <div className="font-sans text-[11px] text-barbo-copper tracking-wider">
                Melhores Barbearias de Lisboa · 3 Anos Consecutivos
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT 33% — Editorial image ─────────────────── */}
        <div className="md:col-span-1 flex items-center justify-center md:justify-end opacity-0 animate-fade-in animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-full max-w-xs md:max-w-full aspect-[3/4]
                          rounded-xl shadow-2xl border border-barbo-text/10
                          relative overflow-hidden group">

            {/* Actual image */}
            <img src={heroImg} alt="O Barbólogo Barber Chair" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />

            {/* Corner fiducials — copper */}
            <span className="absolute top-4 left-4  w-5 h-5 border-t border-l border-barbo-copper/80 pointer-events-none rounded-tl-lg" />
            <span className="absolute top-4 right-4 w-5 h-5 border-t border-r border-barbo-copper/80 pointer-events-none rounded-tr-lg" />
            <span className="absolute bottom-4 left-4  w-5 h-5 border-b border-l border-barbo-copper/80 pointer-events-none rounded-bl-lg" />
            <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-barbo-copper/80 pointer-events-none rounded-br-lg" />

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-6 flex flex-col items-center gap-2">
              <div className="w-full h-px bg-barbo-text/30" />
              <span className="font-sans text-[10px] tracking-widest uppercase
                               text-white text-center leading-relaxed font-medium">
                O lavatório frontal<br />d'O Barbólogo
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
