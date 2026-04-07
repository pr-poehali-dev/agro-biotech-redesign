import Icon from "@/components/ui/icon";
import { HERO_IMAGE, STATS, SERVICES, Section } from "@/components/site-data";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

      <div className="relative container mx-auto px-6 pt-20">
        <div className="max-w-2xl">
          <p className="animate-reveal-up font-body text-accent text-xs tracking-[0.35em] uppercase mb-6">
            Группа Компаний · С 2008 года
          </p>
          <h1 className="animate-reveal-up delay-100 font-display text-white text-5xl md:text-7xl font-light leading-[1.05] mb-6">
            Стратегии,<br />
            <em className="not-italic text-accent">которые</em><br />
            работают
          </h1>
          <p className="animate-reveal-up delay-200 font-body text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-10">
            Консалтинг, финансовый анализ и правовое сопровождение для компаний, ориентированных на результат.
          </p>
          <div className="animate-reveal-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 font-body bg-accent text-white px-8 py-3 text-sm tracking-wide hover:bg-amber-600 transition-colors duration-200"
            >
              Наши услуги
              <Icon name="ArrowRight" size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 font-body border border-white/40 text-white px-8 py-3 text-sm tracking-wide hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              Портфолио
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-white/30 mx-auto mb-2" />
        <Icon name="ChevronDown" size={16} className="text-white/40 mx-auto" />
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
        {STATS.map((s, i) => (
          <div key={i} className="bg-primary px-8 py-8 text-center">
            <div className="font-display text-accent text-3xl md:text-4xl font-semibold mb-1">{s.value}</div>
            <div className="font-body text-white/50 text-xs tracking-widest uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">О компании</p>
            <h2 className="deco-line font-display text-4xl md:text-5xl font-light text-primary leading-tight mb-8">
              Экспертиза,<br />проверенная временем
            </h2>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
              С 2008 года Группа Компаний «Вертикаль» сопровождает крупный и средний бизнес на всех ключевых этапах развития — от стратегического планирования до международной экспансии.
            </p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
              Наша команда — более 120 специалистов с глубокой отраслевой экспертизой и практическим опытом работы в ведущих компаниях России и зарубежья.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "Award", text: "Лицензированные специалисты" },
                { icon: "Shield", text: "Соглашение о конфиденциальности" },
                { icon: "TrendingUp", text: "Измеримые результаты" },
                { icon: "Handshake", text: "Долгосрочное партнёрство" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-accent/40 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={14} className="text-accent" />
                  </div>
                  <span className="font-body text-xs text-foreground/70 leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary overflow-hidden">
              <img src={HERO_IMAGE} alt="Офис компании" className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-xl">
              <div className="font-display text-accent text-2xl font-semibold">120+</div>
              <div className="font-body text-white/60 text-xs tracking-wide mt-1">экспертов в команде</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Что мы делаем</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary">Наши услуги</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-background p-8 group hover:bg-primary transition-colors duration-300 cursor-pointer">
              <div className="w-10 h-10 border border-accent/30 group-hover:border-accent/60 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon name={s.icon} size={18} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-medium text-primary group-hover:text-white mb-3 transition-colors duration-300">{s.title}</h3>
              <p className="font-body text-muted-foreground group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-accent">
                <span className="font-body text-xs tracking-wide">Подробнее</span>
                <Icon name="ArrowRight" size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function HeroSections() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Services />
    </>
  );
}
