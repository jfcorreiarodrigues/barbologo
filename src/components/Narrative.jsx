export default function Narrative() {
  return (
    <section
      id="narrativa"
      className="py-24 px-6 border-t border-barbo-text/[0.08]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section stamp */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/25">02</span>
          <div className="w-10 h-px bg-barbo-text/15" />
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/25">
            O Espaço &amp; A Herança
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* ── MAIN TEXT COLUMN — newspaper format ──────────────────── */}
          <div className="md:col-span-7">

            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight
                           text-barbo-text mb-10">
              O filho que aprendeu<br />
              <em className="font-normal italic"> a arte do pai.</em>
            </h2>

            {/* DROP CAP paragraph — "J" of "João" becomes the drop cap */}
            <p className="drop-cap font-serif text-base text-barbo-text/72
                          leading-[1.75] mb-6 overflow-hidden">
              João Garrido cresceu entre os aromas do creme de barbear e o
              som inconfundível da navalha afiada sobre o couro. O seu pai,
              barbeiro de vocação e de mãos sábias, transmitiu-lhe mais do
              que um ofício — transmitiu-lhe uma visão do tempo, da precisão
              e do respeito pelo outro. Hoje, à frente d'O Barbólogo, João
              perpetua esse legado com uma consciência clara do que significa
              dominar verdadeiramente uma arte.
            </p>

            <p className="font-serif text-base text-barbo-text/72 leading-[1.75] mb-6">
              No número 2B da Rua Cervantes, no Areeiro, Lisboa, o espaço
              foi concebido como extensão dessa memória. As cadeiras de pele
              foram desenhadas à medida; os lavatórios de lavagem frontal —
              ininterruptos na sua linha horizontal — evocam as barbearias
              de outras eras. As paredes recebem exposições rotativas de
              artistas emergentes e consagrados, criando um diálogo vivo
              entre a tradição e o contemporâneo.
            </p>

            <p className="font-serif text-base text-barbo-text/72 leading-[1.75] mb-6">
              O café de especialidade serve como ponto de partida de muitas
              conversas. A literatura disposta criteriosamente ao longo do
              espaço convida à reflexão. Aqui, o tempo não é apenas o
              intervalo entre a chegada e a saída — é o ingrediente
              principal de cada ritual.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-barbo-copper pl-6 my-10">
              <p className="font-serif text-xl italic text-barbo-text/80 leading-relaxed">
                "Aqui não cortamos apenas cabelo. Preservamos um ritual que
                o meu pai me ensinou a respeitar."
              </p>
              <cite className="font-sans text-[10px] tracking-widest uppercase
                               text-barbo-copper mt-3 block not-italic">
                — João Garrido, O Barbólogo
              </cite>
            </blockquote>

            <p className="font-serif text-base text-barbo-text/72 leading-[1.75]">
              A barbearia funciona de terça-feira a sábado, entre as dez da
              manhã e as sete da tarde. Um horário que respeita tanto o
              artesão como o cliente — tempo suficiente para que cada visita
              seja, de facto, um ritual completo e não uma transação apressada.
            </p>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────────────────── */}
          <div className="md:col-span-5 flex flex-col gap-8">

            {/* ── TIME OUT AWARD BANNER ────────────────────────────── */}
            <div className="border border-barbo-text/20 p-8 bg-barbo-text/[0.025]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-px h-14 bg-barbo-copper flex-shrink-0 mt-1" />
                <div>
                  <div className="font-sans text-[10px] tracking-widest uppercase
                                  text-barbo-copper mb-2">
                    Prova de Excelência
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-barbo-text leading-tight">
                    Três Anos de<br />Reconhecimento.
                  </h3>
                </div>
              </div>

              <p className="font-sans text-sm text-barbo-text/55 leading-relaxed mb-6">
                Durante três anos consecutivos, O Barbólogo foi nomeado pela
                Time Out Lisboa como parte do panteão das melhores barbearias
                da cidade. Uma distinção conquistada não por marketing, mas
                pelo rigor silencioso de cada serviço prestado.
              </p>

              {/* Badge inner frame */}
              <div className="border border-barbo-text/25 p-5 text-center">
                <div className="font-mono text-[9px] tracking-widest uppercase
                                text-barbo-text/35 mb-1">
                  Time Out Lisboa
                </div>
                <div className="font-serif text-lg font-bold text-barbo-text">
                  Melhores Barbearias
                </div>
                <div className="font-mono text-[11px] text-barbo-copper
                                tracking-wider mt-1.5">
                  2022 &middot; 2023 &middot; 2024
                </div>
              </div>
            </div>

            {/* ── SPACE IN NUMBERS ─────────────────────────────────── */}
            <div className="border border-barbo-text/[0.12] p-6">
              <div className="font-sans text-[10px] tracking-widest uppercase
                              text-barbo-text/25 mb-6">
                O Espaço em Números
              </div>
              <div className="space-y-5">
                {[
                  { num: '04', label: 'Cadeiras de pele desenhadas à medida' },
                  { num: '01', label: 'Lavatório frontal contínuo' },
                  { num: '∞',  label: 'Exposições de arte rotativas' },
                  { num: '02', label: 'Gerações de saber-fazer' },
                ].map(({ num, label }) => (
                  <div key={label} className="flex items-baseline gap-5">
                    <span className="font-mono text-2xl text-barbo-copper
                                     font-medium w-10 flex-shrink-0">
                      {num}
                    </span>
                    <span className="font-sans text-sm text-barbo-text/45
                                     leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
