import React from 'react';
import shaveImg from '../assets/shave.jpg';

/* ────────────────────────────────────────────────────────────────────────────
 *  Services — Elegant Classic Menu
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
    <div className="flex flex-col sm:flex-row sm:items-end py-4 group">
      {/* Service name & ID */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <span className="font-sans text-[10px] uppercase font-bold text-barbo-copper/50">
          {id}
        </span>
        <span className="font-serif text-lg md:text-xl text-barbo-text group-hover:text-barbo-copper transition-colors">
          {name}
        </span>
      </div>

      {/* Leader dots — elastic spacer (hidden on mobile) */}
      <div className="hidden sm:block leader-dots mx-4 mb-2 border-b border-dashed border-barbo-text/20 flex-1"></div>

      {/* Price & Duration */}
      <div className="flex items-baseline gap-4 mt-2 sm:mt-0 flex-shrink-0 pl-7 sm:pl-0">
        <span className="font-sans text-xs text-barbo-text/40 lowercase italic">
          aprox. {duration}
        </span>
        <span className="font-sans text-xl text-barbo-copper font-medium">
          {price}
        </span>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 px-6 border-t border-barbo-text/5 bg-barbo-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section stamp */}
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-16 opacity-0 animate-fade-in animate-slide-up">
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-copper">03</span>
          <div className="w-10 h-px bg-barbo-copper/50" />
          <span className="font-sans text-[10px] tracking-widest uppercase text-barbo-text/50">
            Tabela de Serviços
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── MENU TABLE — left 8/12 ─────────────────────────── */}
          <div className="lg:col-span-8">

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold
                           leading-tight text-barbo-text mb-12 opacity-0 animate-fade-in animate-slide-up" style={{ animationDelay: '0.1s' }}>
              O ritual tem o seu tempo.<br />
              <em className="font-normal italic text-barbo-copper">E o seu preço justo.</em>
            </h2>

            {/* Menu container */}
            <div className="bg-barbo-surface/40 rounded-3xl border border-barbo-text/[0.03] p-6 md:p-12 shadow-2xl backdrop-blur-sm opacity-0 animate-fade-in animate-slide-up" style={{ animationDelay: '0.3s' }}>
              
              {/* Menu Title */}
              <div className="text-center mb-12">
                <h3 className="font-serif text-2xl md:text-3xl text-barbo-text mb-3">Carta de Serviços</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-barbo-copper/30" />
                  <span className="font-sans text-[9px] uppercase tracking-widest text-barbo-copper/80">O Barbólogo</span>
                  <div className="w-12 h-px bg-barbo-copper/30" />
                </div>
              </div>

              {/* Service rows */}
              <div className="flex flex-col space-y-2">
                {SERVICES.map((s) => (
                  <ServiceRow key={s.id} {...s} />
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-12 pt-8 border-t border-barbo-text/[0.05]">
                <div className="flex gap-4 items-start justify-center text-center">
                  <p className="font-sans text-xs text-barbo-muted leading-relaxed max-w-xl">
                    Os rituais d'O Barbólogo não estão vinculados a lógicas de tempo apressado. Cada serviço decorre no tempo que necessita. As durações apresentadas são estimativas orientativas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT INFO COLUMN — 4/12 ───────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col gap-6 opacity-0 animate-fade-in animate-slide-up" style={{ animationDelay: '0.5s' }}>

            {/* Elegant Image Integration */}
            <div className="hidden lg:block w-full h-64 rounded-2xl overflow-hidden shadow-xl mb-4 relative group">
              <img src={shaveImg} alt="Barbear clássico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Phone */}
            <div className="bg-barbo-surface/30 rounded-2xl border border-barbo-text/[0.05] p-8 text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="font-sans text-[10px] tracking-widest uppercase
                              text-barbo-copper mb-4">
                Reservas Prioritárias
              </div>
              <a
                href="tel:+351211355750"
                className="font-serif text-3xl text-barbo-text
                           hover:text-barbo-copper transition-colors duration-200 block mb-3"
              >
                +351 21 135 5750
              </a>
              <p className="font-sans text-xs text-barbo-muted leading-relaxed">
                Chamada directa. Sem formulários, sem intermediários.
              </p>
            </div>

            {/* CTA button */}
            <a
              href="#agendamento"
              className="block text-center font-sans text-xs font-semibold tracking-widest
                         uppercase px-6 py-5 bg-barbo-copper text-barbo-bg rounded-full shadow-lg
                         hover:bg-barbo-copper-light hover:scale-105 transition-all duration-300"
            >
              Agendar Online
            </a>

            {/* Hours */}
            <div className="bg-barbo-surface/30 rounded-2xl border border-barbo-text/[0.05] p-8">
              <div className="font-sans text-[10px] tracking-widest uppercase text-center
                              text-barbo-copper mb-6">
                Horário de Funcionamento
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-barbo-text/5 pb-2">
                  <span className="font-sans text-sm text-barbo-text/80">Terça – Sábado</span>
                  <span className="font-serif text-lg text-barbo-text">10:00 – 19:00</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-sans text-sm text-barbo-muted">Dom. &amp; Segunda</span>
                  <span className="font-serif text-lg text-barbo-muted italic">Encerrado</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
