export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-barbo-text/[0.08] py-8 px-6 mt-8">
      <div className="max-w-7xl mx-auto
                      flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Copyright */}
        <div className="font-mono text-[10px] text-barbo-text/20 tracking-wider">
          &copy; {year} O Barbólogo. Todos os direitos reservados.
        </div>

        {/* Centre brand stamp */}
        <div className="text-center">
          <div className="font-sans text-[9px] tracking-widest uppercase
                          text-barbo-text/25">
            O Barbólogo &middot; BarberShop &amp; Co.
          </div>
          <div className="font-mono text-[9px] text-barbo-text/12 mt-0.5">
            Rua Cervantes, 2B &middot; 1000-094 Lisboa
          </div>
        </div>

        {/* Instagram link */}
        <a
          href="https://www.instagram.com/obarbologo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2
                     font-sans text-[10px] tracking-widest uppercase
                     text-barbo-text/25 hover:text-barbo-text/55
                     transition-colors duration-200"
        >
          <span className="text-barbo-copper text-[8px]">&#9670;</span>
          @obarbologo
        </a>

      </div>
    </footer>
  )
}
