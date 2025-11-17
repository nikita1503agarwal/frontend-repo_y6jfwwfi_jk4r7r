import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,120,255,0.15),transparent_60%)]" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-cyan-300/90 bg-white/5 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Automatización impulsada por IA
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Automatización Inteligente sin Código
          </h1>
          <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-xl">
            Diseñamos y ejecutamos flujos n8n con precisión de grado empresarial. Conecta sistemas, incorpora IA y automatiza tus procesos en días, no meses.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#plantillas" className="px-5 py-3 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold shadow-[0_0_80px_-20px_rgba(34,211,238,0.9)]">Explorar Plantillas</a>
            <a href="#contacto" className="px-5 py-3 rounded-md bg-white/5 text-white border border-white/10 hover:bg-white/10 transition">Hablar con un experto</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> SLA empresarial
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Integraciones + IA
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Nodos n8n a medida
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden border border-white/10 bg-black/40">
          <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
