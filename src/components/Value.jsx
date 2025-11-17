import { Cpu, Rocket, Workflow } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "Velocidad con Precisión",
    desc: "Implementamos automatizaciones en días con pruebas exhaustivas y estándares enterprise.",
  },
  {
    icon: Workflow,
    title: "Escala y Gobernanza",
    desc: "Arquitecturas modulares, logging, alertas y control de versiones para crecer sin fricción.",
  },
  {
    icon: Rocket,
    title: "IA Integrada",
    desc: "LLMs y modelos especializados conectados a tus flujos para decisiones y contenido inteligente.",
  },
];

export default function Value() {
  return (
    <section id="valor" className="relative py-20 border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-10">
          Precisión y eficiencia que se siente
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20" />
              <it.icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
