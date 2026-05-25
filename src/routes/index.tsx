import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  MessageCircle,
  Shield,
  Zap,
  Target,
  GraduationCap,
  Handshake,
  Smartphone,
  PenLine,
  Frown,
  TrendingDown,
  Wallet,
  Clock,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/5585999169777?text=Olá%20Israel!%20Tenho%20interesse%20na%20landing%20page%20de%20R$%20150.";

function Landing() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Solution />
      <Process />
      <WhyMe />
      <Offer />
      
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}

/* ------------------------------- NAV ------------------------------- */
function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl bg-background/70 border-b border-border">
      <a href="#top" className="font-display font-extrabold text-lg tracking-tight">
        Israel<span className="text-primary">.</span>dev
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#como-funciona" className="hover:text-foreground transition-colors">Processo</a>
        <a href="#oferta" className="hover:text-foreground transition-colors">Investimento</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:brightness-110 transition-all hover:scale-[1.03]"
      >
        Começar agora <ArrowRight className="w-4 h-4" />
      </a>
    </nav>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-dot" />
          Vagas abertas · Maio/2026
        </div>

        <h1 className="font-display font-bold leading-[1.05] text-[2.5rem] md:text-5xl lg:text-6xl mb-7 animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
          Sua empresa precisa de uma página que{" "}
          <span className="relative inline-block text-primary">
            realmente vende
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary rounded-full animate-line-in" />
          </span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Sou <span className="text-foreground font-medium">Israel Freitas</span>, formado em Redes de Computadores pela{" "}
          <span className="text-foreground font-medium">UFC Quixadá</span>. Crio landing pages
          de alta conversão para pequenas empresas que querem parar de perder clientes para a concorrência.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-display font-bold text-sm tracking-wide shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            Quero minha landing por R$ 150
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 text-muted-foreground border border-border px-7 py-3.5 rounded-md text-sm hover:text-foreground hover:border-border-strong transition-colors"
          >
            Como funciona <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "0.55s" }}>
          <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Garantia de satisfação</div>
          <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Entrega em 7 dias</div>
        </div>
      </div>

      <aside className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
        {[
          { num: "3×", label: "Mais contatos" },
          { num: "7d", label: "Prazo de entrega" },
          { num: "R$ 150", label: "Valor único" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-surface/80 backdrop-blur border border-border rounded-2xl px-6 py-5 text-center min-w-[170px] hover:border-primary hover:-translate-x-1 transition-all"
          >
            <div className="font-display font-extrabold text-2xl text-primary leading-none">{s.num}</div>
            <div className="text-xs text-muted-foreground mt-1.5">{s.label}</div>
          </div>
        ))}
      </aside>
    </section>
  );
}

/* ------------------------------- TICKER ------------------------------- */
function Ticker() {
  const items = ["Landing Pages", "Alta Conversão", "Copy Persuasiva", "Design Profissional", "SEO Otimizado", "Mobile First", "Entrega Rápida", "Suporte Direto"];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex gap-12 whitespace-nowrap animate-ticker">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display font-bold text-sm uppercase tracking-widest text-muted-foreground">{item}</span>
            <Sparkles className="w-3 h-3 text-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- SECTION HEAD ----------------------------- */
function SectionHead({ tag, title, sub }: { tag: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">{tag}</div>
      <h2 className="font-display font-bold text-2xl md:text-4xl leading-[1.15] mb-5 text-balance">{title}</h2>
      {sub && <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}

/* ------------------------------- PROBLEM ------------------------------- */
function Problem() {
  const items = [
    { Icon: Frown, title: "Site genérico que não convence", text: "Um site bonito não basta. Se ele não guia o visitante até o contato, é apenas decoração cara." },
    { Icon: TrendingDown, title: "Perdendo para o concorrente", text: "O cliente pesquisou você e o concorrente. Escolheu o outro — não por ser melhor, mas por passar mais confiança." },
    { Icon: Wallet, title: "Anúncios sem retorno", text: "Você investe em tráfego, mas as visitas somem sem virar conversa. O problema não é a mídia — é o destino." },
    { Icon: Clock, title: "Sem tempo pra fazer do zero", text: "Você tem uma empresa pra tocar. Aprender a fazer páginas profissionais levaria meses." },
  ];
  return (
    <section id="problema" className="reveal px-6 md:px-12 py-28">
      <SectionHead
        tag="O Problema"
        title={<>Por que sua empresa ainda<br />não vende pelo digital?</>}
        sub="Não é falta de produto bom. É falta de presença certa. Veja o que está custando vendas todo dia."
      />
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {items.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="group relative bg-surface border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 transition-all overflow-hidden"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- SOLUTION ------------------------------- */
function Solution() {
  const bullets = [
    "Copy que fala direto com a dor do seu cliente",
    "Design profissional que passa credibilidade imediata",
    "Botões e formulários estrategicamente posicionados",
    "100% responsiva — perfeita no celular",
    "Integração WhatsApp para receber leads em tempo real",
    "Entregue em até 7 dias úteis",
  ];
  return (
    <section id="solucao" className="reveal px-6 md:px-12 py-28 bg-surface border-y border-border">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">A Solução</div>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-[1.15] mb-5 text-balance">
            Uma landing page que transforma visitante em cliente
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Não é só uma página. É uma máquina de captura construída com copy estratégica,
            design que inspira confiança e estrutura pensada para converter desde o primeiro segundo.
          </p>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/15 text-primary shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span><span className="text-foreground">{b}</span></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Browser mockup */}
        <div className="relative h-[440px] hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background border border-border-strong rounded-2xl overflow-hidden shadow-card w-[340px] rotate-[-2deg] z-10">
              <div className="bg-surface-2 px-3 py-2.5 flex items-center gap-1.5 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="ml-3 text-[10px] text-muted-foreground font-mono">sua-empresa.com.br</div>
              </div>
              <div className="p-5 space-y-2">
                <div className="h-24 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="font-display font-bold text-[10px] uppercase tracking-widest text-primary">sua marca aqui</span>
                </div>
                <div className="h-2 rounded bg-primary/40 w-3/4" />
                <div className="h-2 rounded bg-surface-2 w-full" />
                <div className="h-2 rounded bg-surface-2 w-2/3" />
                <div className="h-8 rounded-md bg-primary mt-3" />
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="h-12 rounded-md bg-surface-2" />
                  <div className="h-12 rounded-md bg-surface-2" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-background border border-border rounded-2xl overflow-hidden shadow-card w-[210px] rotate-[4deg] opacity-80">
              <div className="bg-surface-2 px-2.5 py-2 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <div className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="p-4 space-y-2">
                <div className="h-2 rounded bg-surface-2 w-4/5" />
                <div className="h-2 rounded bg-primary/40 w-1/2" />
                <div className="h-2 rounded bg-surface-2 w-3/4" />
                <div className="h-6 rounded bg-primary mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- PROCESS ------------------------------- */
function Process() {
  const steps = [
    { n: "01", title: "Briefing", text: "Conversa de 30 minutos pra entender seu negócio, público e objetivos." },
    { n: "02", title: "Copy + Estratégia", text: "Crio o texto persuasivo focado na dor real do seu cliente." },
    { n: "03", title: "Design & Dev", text: "Construo a página: responsiva, rápida e otimizada para conversão." },
    { n: "04", title: "Entrega & Ajustes", text: "Você revisa, ajustamos se preciso, e a página vai ao ar." },
  ];
  return (
    <section id="como-funciona" className="reveal px-6 md:px-12 py-28">
      <SectionHead
        tag="Como Funciona"
        title="Do briefing à página no ar em 4 etapas"
        sub="Processo claro, comunicação direta e entrega no prazo combinado."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {steps.map((s) => (
          <div
            key={s.n}
            className="bg-surface border border-border rounded-2xl p-7 text-center hover:border-primary hover:-translate-y-1.5 transition-all"
          >
            <div className="font-display font-extrabold text-5xl text-primary/15 leading-none mb-3">{s.n}</div>
            <h3 className="font-display font-bold text-base mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- WHY ME ------------------------------- */
function WhyMe() {
  const items = [
    { Icon: GraduationCap, title: "Formação técnica sólida", text: "Graduado em Redes de Computadores pela UFC Quixadá. Entendo a web do código à experiência." },
    { Icon: Target, title: "Foco em conversão", text: "Cada elemento tem função estratégica. Páginas que vendem, não só páginas bonitas." },
    { Icon: Handshake, title: "Atendimento direto", text: "Você fala comigo do início ao fim. Sem intermediários, sem sumiço, sem ruído." },
    { Icon: Zap, title: "Entrega rápida", text: "Agências grandes demoram meses. Aqui sua landing fica pronta em até 7 dias úteis." },
    { Icon: Smartphone, title: "100% responsiva", text: "Mais de 70% dos acessos vêm do celular. Sua página funciona perfeitamente em qualquer tela." },
    { Icon: PenLine, title: "Copy estratégica inclusa", text: "Não precisa escrever nada. Cuido do texto baseado no seu negócio e no seu cliente." },
  ];
  return (
    <section className="reveal px-6 md:px-12 py-28 bg-surface border-y border-border">
      <SectionHead
        tag="Por que eu?"
        title={<>Tecnologia + estratégia<br />a favor do seu negócio</>}
        sub="Mais do que uma página bonita: uma ferramenta de venda construída com método."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {items.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="bg-background border border-border rounded-2xl p-7 hover:border-accent/40 hover:-translate-y-1 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="font-display font-bold text-base mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- OFFER (SINGLE) ------------------------------- */
function Offer() {
  const features = [
    "Landing page completa de 1 página",
    "Copy estratégica inclusa (eu escrevo)",
    "Design profissional customizado",
    "100% responsiva (mobile e desktop)",
    "Integração com WhatsApp",
    "Otimização básica para Google (SEO on-page)",
    "Formulário de contato funcional",
    "2 rodadas de revisão",
    "Entrega em até 7 dias úteis",
    "Suporte por 15 dias após a entrega",
  ];
  return (
    <section id="oferta" className="reveal relative px-6 md:px-12 py-28 bg-background overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <SectionHead
        tag="Investimento"
        title="Um valor. Tudo incluso."
        sub="Sem mensalidade, sem taxa escondida, sem upsell. Você paga uma única vez e leva a página pronta para vender."
      />

      <div className="relative max-w-xl mx-auto">
        {/* glow border */}
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary via-accent to-primary/30 opacity-70 blur-sm" />
        <div className="relative bg-surface border border-primary/40 rounded-3xl p-10 md:p-12 shadow-card">
          <div className="flex items-center justify-between mb-2">
            <div className="font-display font-bold text-xl">Landing Page Profissional</div>
            <span className="inline-flex items-center gap-1 bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              <Sparkles className="w-3 h-3" /> Oferta
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-7">
            Tudo o que sua pequena empresa precisa para começar a vender pelo digital.
          </p>

          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-sm text-muted-foreground line-through">R$ 497</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-accent">-70%</span>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-display font-bold text-5xl md:text-6xl text-primary leading-none">R$ 150</span>
          </div>
          <div className="text-sm text-muted-foreground mb-8">pagamento único · sem mensalidade</div>

          <ul className="space-y-3 mb-9 pb-9 border-b border-border">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 rounded-xl font-display font-bold text-base shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            Garantir minha landing por R$ 150
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            Garantia de 7 dias: não gostou, devolvo 100% do valor.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TESTIMONIALS ------------------------------- */
function Testimonials() {
  const items = [
    {
      text: "Antes do site eu dependia só do boca a boca. Depois da landing, comecei a receber mensagens todo dia pelo WhatsApp. Valeu cada centavo.",
      initials: "MR", name: "Marcos Rodrigues", biz: "Eletricista Autônomo · Fortaleza/CE",
    },
    {
      text: "Profissional incrível. Entendeu meu negócio de verdade e criou uma página que parece de grande empresa. Meus clientes sempre comentam.",
      initials: "CF", name: "Carla Fonseca", biz: "Nutricionista · Quixadá/CE",
    },
    {
      text: "Investimos em anúncios mas não tinha resultado. Com a landing nova, as conversões triplicaram. Atendimento rápido e entrega no prazo.",
      initials: "JS", name: "João Silva", biz: "Oficina Mecânica · Sobral/CE",
    },
  ];
  return (
    <section id="depoimentos" className="reveal px-6 md:px-12 py-28">
      <SectionHead
        tag="Quem já confiou"
        title={<>Empresas que transformaram<br />sua presença digital</>}
      />
      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {items.map((t) => (
          <div key={t.name} className="bg-surface border border-border rounded-2xl p-7 hover:border-primary/30 transition-colors flex flex-col">
            <p className="text-sm text-muted-foreground leading-relaxed italic mb-6 flex-1">
              <span className="text-primary text-xl leading-none mr-0.5">"</span>
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-extrabold text-sm text-primary-foreground">
                {t.initials}
              </div>
              <div>
                <div className="font-display font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.biz}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- FAQ ------------------------------- */
function Faq() {
  const items = [
    { q: "Por que R$ 150? Não é barato demais?", a: "É um valor de entrada pra construir portfólio com pequenas empresas. A entrega é a mesma de uma landing de R$ 1.000+: copy, design e estrutura profissional. Aproveite enquanto está nesse valor." },
    { q: "O que eu preciso enviar?", a: "Apenas informações básicas sobre seu negócio (público, serviços, diferencial) e, se tiver, logo e fotos. Caso não tenha, te ajudo a resolver isso." },
    { q: "E se eu não gostar do resultado?", a: "Você tem 2 rodadas de revisão inclusas. Se mesmo assim não ficar satisfeito em até 7 dias após a entrega, devolvo 100% do valor." },
    { q: "A hospedagem está inclusa?", a: "A página é entregue pronta para subir. Recomendo serviços gratuitos (Vercel, Netlify) ou te oriento na hospedagem que preferir." },
    { q: "Posso pedir mais páginas depois?", a: "Sim. Páginas adicionais e funcionalidades extras (blog, área de cliente, e-commerce) são orçadas separadamente." },
  ];
  return (
    <section id="faq" className="reveal px-6 md:px-12 py-28 bg-surface border-y border-border">
      <SectionHead tag="FAQ" title="Perguntas frequentes" sub="Tudo que costumam me perguntar antes de fechar." />
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((it, i) => (
          <details
            key={i}
            className="group bg-background border border-border rounded-xl px-6 py-5 open:border-primary/40 transition-colors"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
              <span className="font-display font-bold text-base">{it.q}</span>
              <ChevronDown className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- CTA FINAL ------------------------------- */
function CtaFinal() {
  return (
    <section id="contato" className="reveal relative px-6 md:px-12 py-32 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-2xl mx-auto">
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.15] mb-5 text-balance">
          Pronto pra parar de perder<br />clientes todo dia?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Resposta em até 24h úteis. Sem compromisso, sem enrolação.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-display font-bold shadow-glow hover:-translate-y-0.5 transition-transform"
          >
            <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
          </a>
        </div>
        <p className="mt-10 text-xs text-muted-foreground flex items-center gap-2 justify-center">
          <Shield className="w-4 h-4 text-primary" /> Seus dados estão seguros. Respondo em até 24h úteis.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------- FOOTER ------------------------------- */
function Footer() {
  return (
    <footer className="bg-surface border-t border-border px-6 md:px-12 py-10 flex flex-wrap items-center justify-between gap-6">
      <div className="font-display font-extrabold text-lg">Israel<span className="text-primary">.</span>dev</div>
      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <a href="#problema" className="hover:text-foreground transition-colors">Problema</a>
        <a href="#como-funciona" className="hover:text-foreground transition-colors">Processo</a>
        <a href="#oferta" className="hover:text-foreground transition-colors">Investimento</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
      </div>
      <div className="text-xs text-muted-foreground">© 2026 Israel Freitas · Todos os direitos reservados</div>
    </footer>
  );
}
