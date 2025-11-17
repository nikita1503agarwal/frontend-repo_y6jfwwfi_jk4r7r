import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const items = [
  {
    quote:
      "La ejecución de Velion superó expectativas. Pasamos de procesos manuales a flujos robustos y medibles.",
    author: "CTO, Fintech",
  },
  {
    quote:
      "Integraron IA y orquestación en nuestros sistemas legacy sin fricción. KPI de soporte mejoró 40%.",
    author: "Head of CX, SaaS",
  },
  {
    quote:
      "Documentación impecable y observabilidad desde el día uno. Escalamos sin apagar incendios.",
    author: "Ops Lead, Marketplace",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((p) => (p - 1 + items.length) % items.length);
  const next = () => setIndex((p) => (p + 1) % items.length);

  const current = items[index];

  return (
    <section id="clientes" className="relative py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-8">
          Prueba Social
        </h2>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl" />
          <blockquote className="text-xl md:text-2xl text-zinc-200 leading-relaxed">
            “{current.quote}”
          </blockquote>
          <p className="mt-4 text-sm text-zinc-400">{current.author}</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={prev} className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 opacity-70">
            <div className="h-6 w-20 bg-white/10 rounded" />
            <div className="h-6 w-20 bg-white/10 rounded" />
            <div className="h-6 w-20 bg-white/10 rounded" />
            <div className="h-6 w-20 bg-white/10 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
