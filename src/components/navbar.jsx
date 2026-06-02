import { useState } from "react"

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false)

  const handleClick = (page) => {
    setPage(page)
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">

        {/* LOGO */}
        <h1
          className="text-lg font-semibold tracking-wide cursor-pointer"
          onClick={() => handleClick('home')}
        >
          RONY
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <button onClick={() => handleClick('home')}>Home</button>
          <button onClick={() => handleClick('about')}>About</button>
          <button onClick={() => handleClick('resume')}>Resume</button>
          <button onClick={() => handleClick('portfolio')}>Portfolio</button>
        </nav>

        {/* BOTÃO 3 PONTINHOS (MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ⋮
        </button>

      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MENU MOBILE */}
      <div className={`
        fixed top-16 right-6 w-52 bg-white rounded-lg shadow-lg z-50
        flex flex-col p-4 gap-3 text-gray-800
        transition-all duration-300
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        md:hidden
      `}>

        <button onClick={() => handleClick('home')}>Home</button>
        <button onClick={() => handleClick('about')}>About</button>
        <button onClick={() => handleClick('resume')}>Resume</button>
        <button onClick={() => handleClick('portfolio')}>Portfolio</button>

      </div>

    </header>
  )
}