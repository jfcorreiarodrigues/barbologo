/* ────────────────────────────────────────────────────────────────────────────
 *  Contact & Booking — 2-column layout
 *  Left:  cold data in monospace (address, hours, phone)
 *  Right: Setmore iframe embedded inside a minimal container
 * ──────────────────────────────────────────────────────────────────────────── */

export default function Contact() {
  return (
    <section
      id="agendamento"
      className="py-24 px-6 border-t border-barbo-text/[0.08]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section stamp */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/25">04</span>
          <div className="w-10 h-px bg-barbo-text/15" />
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/25">
            Contacto &amp; Agendamento
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* ── LEFT — cold coordinates ──────────────────────────────── */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold
                           leading-tight text-barbo-text mb-12">
              Encontra-nos.<br />
              <em className="font-normal italic">Estamos perto de ti.</em>
            </h2>

            <div className="space-y-10">

              {/* Address */}
              <div>
                <div className="font-sans text-[10px] tracking-widest uppercase
                                text-barbo-text/25 mb-3">
                  Localização
                </div>
                <address className="not-italic space-y-0.5">
                  <p className="font-mono text-base text-barbo-text leading-snug">
                    Rua Cervantes, 2B
                  </p>
                  <p className="font-mono text-base text-barbo-text leading-snug">
                    1000-094 Lisboa
                  </p>
                  <p className="font-mono text-sm text-barbo-text/35 mt-1">
                    Areeiro / Alameda
                  </p>
                </address>
              </div>

              {/* Operating window */}
              <div>
                <div className="font-sans text-[10px] tracking-widest uppercase
                                text-barbo-text/25 mb-3">
                  Janela Operacional
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-barbo-text/45 w-36 flex-shrink-0">
                      Terça a Sábado
                    </span>
                    <span className="font-mono text-[10px] text-barbo-text/15">···</span>
                    <span className="font-mono text-sm text-barbo-text">
                      10:00 — 19:00
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-barbo-text/20 w-36 flex-shrink-0">
                      Dom. &amp; Segunda
                    </span>
                    <span className="font-mono text-[10px] text-barbo-text/10">···</span>
                    <span className="font-mono text-xs text-barbo-text/20">
                      Encerrado
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="font-sans text-[10px] tracking-widest uppercase
                                text-barbo-text/25 mb-3">
                  Terminal Central
                </div>
                <a
                  href="tel:+351211355750"
                  className="font-mono text-2xl md:text-3xl text-barbo-text
                             hover:text-barbo-copper transition-colors duration-200 block"
                >
                  +351 21 135 5750
                </a>
                <p className="font-sans text-[10px] tracking-wider uppercase
                               text-barbo-text/25 mt-1.5">
                  Canal prioritário para reservas
                </p>
              </div>

              {/* Instagram */}
              <div>
                <div className="font-sans text-[10px] tracking-widest uppercase
                                text-barbo-text/25 mb-3">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/obarbologo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-base text-barbo-text
                             hover:text-barbo-copper transition-colors duration-200"
                >
                  @obarbologo
                </a>
              </div>

            </div>
          </div>

          {/* ── RIGHT — Setmore iframe ────────────────────────────────── */}
          <div>
            <div className="font-sans text-[10px] tracking-widest uppercase
                            text-barbo-text/25 mb-4">
              Agendamento Online
            </div>

            {/* Minimal container: 1px border, 0 radius */}
            <div className="border border-barbo-text/20 overflow-hidden">

              {/* Fake terminal chrome bar */}
              <div className="bg-barbo-surface px-4 py-3 border-b border-barbo-text/10
                              flex items-center justify-between">
                <span className="font-mono text-[10px] text-barbo-text/25 tracking-wider">
                  RESERVAS / SETMORE
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="block w-2 h-2 bg-barbo-text/10" />
                  <span className="block w-2 h-2 bg-barbo-text/10" />
                  <span className="block w-2 h-2 bg-barbo-green/50" />
                </div>
              </div>

              {/* Setmore booking iframe — fully embedded */}
              <iframe
                src="https://obarbologo.setmore.com/"
                title="Agendamento O Barbólogo — Setmore"
                width="100%"
                style={{ minHeight: '620px', border: 'none', display: 'block' }}
                loading="lazy"
                allow="payment"
              />
            </div>

            <p className="font-mono text-[9px] tracking-widest uppercase
                          text-barbo-text/15 mt-2.5 text-right">
              Powered by Setmore
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
