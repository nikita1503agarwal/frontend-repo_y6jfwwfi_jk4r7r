import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20 grid place-items-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">Velion</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#plantillas" className="text-zinc-300 hover:text-white transition-colors">Plantillas</a>
            <a href="#valor" className="text-zinc-300 hover:text-white transition-colors">Beneficios</a>
            <a href="#clientes" className="text-zinc-300 hover:text-white transition-colors">Clientes</a>
          </nav>

          <div className="hidden md:block">
            <a href="#plantillas" className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium shadow-[0_0_60px_-15px_rgba(34,211,238,0.7)] hover:shadow-[0_0_80px_-10px_rgba(34,211,238,0.9)] transition-shadow">Explorar Plantillas</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-200">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2 text-sm">
              <a href="#plantillas" className="text-zinc-300 hover:text-white">Plantillas</a>
              <a href="#valor" className="text-zinc-300 hover:text-white">Beneficios</a>
              <a href="#clientes" className="text-zinc-300 hover:text-white">Clientes</a>
              <a href="#plantillas" className="mt-2 inline-flex justify-center px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-medium">Explorar</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
