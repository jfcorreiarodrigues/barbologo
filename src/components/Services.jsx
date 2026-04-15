/* ────────────────────────────────────────────────────────────────────────────
 *  Services — receipt / terminal aesthetic, 100% monospace typography
 * ──────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: '01',
    name: 'Corte de cabelo sem lavagem',
    duration: '25 min',
    price: '€ 18,00',
  },
  {
    id: '02',
    name: 'Corte de cabelo com lavagem',
    duration: '40 min',
    price: '€ 22,00',
  },
  {
    id: '03',
    name: 'Corte de barba sem toalha quente',
    duration: '20 min',
    price: '€ 12,00',
  },
  {
    id: '04',
    name: 'Corte de barba com toalha quente',
    duration: '40 min',
    price: '€ 16,00',
  },
  {
    id: '05',
    name: 'Cabelo c/ lavagem + barba s/ toalha',
    duration: '01h 00',
    price: '€ 34,00',
  },
  {
    id: '06',
    name: 'Cabelo c/ lavagem + barba c/ toalha',
    duration: '01h 20',
    price: '€ 40,00',
  },
]

function ServiceRow({ id, name, duration, price }) {
  return (
    <div className="flex items-end py-4 border-b border-barbo-text/[0.07]
                    last:border-b-0">
      {/* Row index */}
      <span className="font-mono text-[10px] text-barbo-text/20
                       w-8 flex-shrink-0 pb-0.5">
        {id}
      </span>

      {/* Service name */}
      <span className="font-mono text-sm text-barbo-text/80 flex-shrink-0">
        {name}
      </span>

      {/* Leader dots — elastic spacer */}
      <span className="leader-dots" />

      {/* Duration */}
      <span className="font-mono text-xs text-barbo-text/40
                       flex-shrink-0 pb-0.5 px-1 whitespace-nowrap">
        {duration}
      </span>

      {/* Short leader */}
      <span className="leader-dots-short" />

      {/* Price */}
      <span className="font-mono text-sm text-barbo-copper
                       flex-shrink-0 font-medium pb-0.5 whitespace-nowrap">
        {price}
      </span>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 px-6 border-t border-barbo-text/[0.08]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section stamp */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/25">03</span>
          <div className="w-10 h-px bg-barbo-text/15" />
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/25">
            Tabela de Serviços
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* ── TERMINAL TABLE — left 8/12 ─────────────────────────── */}
          <div className="md:col-span-8">

            <h2 className="font-serif text-4xl md:text-5xl font-bold
                           leading-tight text-barbo-text mb-12">
              O ritual tem o seu tempo.<br />
              <em className="font-normal italic">E o seu preço justo.</em>
            </h2>

            {/* Terminal container */}
            <div className="border border-barbo-text/15 overflow-hidden">

              {/* Terminal title bar */}
              <div className="bg-barbo-surface px-5 py-3 border-b border-barbo-text/10
                              flex items-center justify-between">
                <span className="font-mono text-[10px] text-barbo-text/25 tracking-wider">
                  OBARBOLOGO://TABELA-DE-SERVICOS.TXT
                </span>
                <span className="font-mono text-[10px] text-barbo-text/15">
                  REV.&nbsp;2025
                </span>
              </div>

              {/* Column headers */}
              <div className="flex items-center px-5 py-3 border-b border-barbo-text/[0.07]">
                <span className="font-mono text-[10px] text-barbo-text/25 w-8 flex-shrink-0">#</span>
                <span className="font-mono text-[10px] text-barbo-text/25 flex-1">SERVIÇO</span>
                <span className="font-mono text-[10px] text-barbo-text/25 pr-6 whitespace-nowrap">DURAÇÃO</span>
                <span className="font-mono text-[10px] text-barbo-text/25 whitespace-nowrap">VALOR</span>
              </div>

              {/* Service rows — horizontal scroll on narrow viewports */}
              <div className="px-5 overflow-x-auto">
                {SERVICES.map((s) => (
                  <ServiceRow key={s.id} {...s} />
                ))}
              </div>

              {/* Footer note — analogue receipt disclaimer */}
              <div className="px-5 py-5 border-t border-barbo-text/[0.07]
                              bg-barbo-text/[0.015]">
                <div className="flex gap-3 items-start">
                  <span className="font-mono text-xs text-barbo-copper flex-shrink-0 mt-0.5">
                    ※
                  </span>
                  <p className="font-mono text-[11px] text-barbo-text/35 leading-relaxed">
                    Os rituais d'O Barbólogo não estão vinculados a lógicas de tempo apressado.<br />
                    Cada serviço decorre no tempo que necessita — nem mais, nem menos.<br />
                    As durações apresentadas são estimativas orientativas, não limites impostos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT INFO COLUMN — 4/12 ───────────────────────────── */}
          <div className="md:col-span-4 flex flex-col gap-5">

            {/* Phone */}
            <div className="border border-barbo-text/[0.12] p-6">
              <div className="font-sans text-[10px] tracking-widest uppercase
                              text-barbo-text/25 mb-3">
                Reservas Prioritárias
              </div>
              <a
                href="tel:+351211355750"
                className="font-mono text-xl text-barbo-text
                           hover:text-barbo-copper transition-colors duration-200 block mb-2"
              >
                +351 21 135 5750
              </a>
              <p className="font-sans text-xs text-barbo-text/35 leading-relaxed">
                Chamada directa. Sem formulários, sem intermediários.
              </p>
            </div>

            {/* CTA button */}
            <a
              href="#agendamento"
              className="block text-center font-sans text-[11px] tracking-widest
                         uppercase px-6 py-4 bg-barbo-green text-barbo-text
                         border border-barbo-green
                         hover:opacity-75 transition-opacity duration-200"
            >
              Agendar Online
            </a>

            {/* Hours */}
            <div className="border border-barbo-text/[0.12] p-6">
              <div className="font-sans text-[10px] tracking-widest uppercase
                              text-barbo-text/25 mb-4">
                Horário de Funcionamento
              </div>
              <div className="space-y-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-xs text-barbo-text/55">Terça – Sábado</span>
                  <span className="font-mono text-sm text-barbo-text">10:00 – 19:00</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-xs text-barbo-text/25">Dom. &amp; Segunda</span>
                  <span className="font-mono text-xs text-barbo-text/25">Encerrado</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
