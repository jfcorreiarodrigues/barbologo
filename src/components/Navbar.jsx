import { useState } from 'react'

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="font-sans text-[11px] tracking-widest uppercase text-barbo-text/60 hover:text-barbo-text transition-colors duration-200"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-barbo-bg border-b border-barbo-text/[0.18]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center">

          {/* Left — hamburger on mobile, invisible spacer on desktop */}
          <div className="flex-1 flex items-center justify-start">
            <button
              className="md:hidden text-barbo-text/50 hover:text-barbo-text transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className="font-mono text-sm">{open ? '✕' : '☰'}</span>
            </button>
          </div>

          {/* Centre — typographic logotype */}
          <div className="flex-1 flex flex-col items-center">
            <a href="#" className="group">
              <div className="font-serif text-xl md:text-2xl font-bold tracking-tight text-barbo-text text-center leading-none">
                O BARBÓLOGO
              </div>
              <div className="font-sans text-[9px] tracking-widest uppercase text-barbo-copper text-center mt-0.5">
                BarberShop &amp; Co.
              </div>
            </a>
          </div>

          {/* Right — nav links on desktop, spacer on mobile */}
          <div className="flex-1 hidden md:flex items-center justify-end gap-8">
            <NavLink href="#narrativa">O Espaço</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#agendamento">Agendamento</NavLink>
          </div>

          {/* Right spacer on mobile to balance hamburger */}
          <div className="flex-1 md:hidden" />
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden pt-4 pb-2 border-t border-barbo-text/10 mt-4 flex flex-col gap-5">
            <NavLink href="#narrativa">O Espaço</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#agendamento">Agendamento</NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}
