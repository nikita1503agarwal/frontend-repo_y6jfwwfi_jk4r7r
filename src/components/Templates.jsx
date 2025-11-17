import { BadgeCheck, Bot, Mail, MessageSquare } from "lucide-react";

const templates = [
  {
    title: "Onboarding con IA",
    tags: ["IA", "Ops"],
    icon: Bot,
    desc: "Recepción automática, clasificación y primer contacto inteligente.",
  },
  {
    title: "Marketing Autopilot",
    tags: ["Marketing", "CRM"],
    icon: Mail,
    desc: "Nutrición de leads con personalización por segmentos y canales.",
  },
  {
    title: "Soporte 24/7",
    tags: ["Soporte", "IA"],
    icon: MessageSquare,
    desc: "Tickets con priorización automática y respuestas generativas.",
  },
];

function Tag({ children }) {
  return (
    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-200">
      {children}
    </span>
  );
}

export default function Templates() {
  return (
    <section id="plantillas" className="relative py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            Catálogo de plantillas n8n
          </h2>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-cyan-300 hover:text-white text-sm">
            <BadgeCheck className="w-4 h-4" /> Ver todas
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {templates.map((t, idx) => (
            <article key={idx} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] hover:to-white/[0.06] transition p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 grid place-items-center">
                  <t.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-white font-semibold">{t.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed min-h-[56px]">{t.desc}</p>
              <div className="mt-4 flex gap-2">
                {t.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-6">
                <a href="#" className="text-sm text-cyan-300 hover:text-white">Ver detalles →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
