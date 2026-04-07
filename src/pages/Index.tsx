import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/37d70944-f34d-4af4-b695-693bdae58491/files/45acfaf5-e58c-43c1-9e07-376ec3bf0e13.jpg";

const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Новости", href: "#news" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Building2", title: "Стратегический консалтинг", desc: "Разработка долгосрочных стратегий развития бизнеса, оценка рисков и оптимизация процессов." },
  { icon: "BarChart3", title: "Финансовый анализ", desc: "Комплексный аудит, финансовое моделирование и инвестиционное планирование." },
  { icon: "Scale", title: "Правовое сопровождение", desc: "Юридическая поддержка сделок, корпоративное право и защита интересов бизнеса." },
  { icon: "Globe", title: "Международные рынки", desc: "Выход на зарубежные рынки, ВЭД-сопровождение и поиск иностранных партнёров." },
  { icon: "Users", title: "Управление персоналом", desc: "HR-стратегии, оценка компетенций, формирование эффективных команд." },
  { icon: "Cpu", title: "Цифровая трансформация", desc: "Автоматизация процессов, внедрение ERP-систем и цифровизация бизнеса." },
];

const PORTFOLIO = [
  { title: "Реструктуризация холдинга «Арктика»", category: "Консалтинг", year: "2024", result: "+38% EBITDA" },
  { title: "Выход ГК «Премьер» на рынки СНГ", category: "Международные рынки", year: "2024", result: "12 стран" },
  { title: "Цифровая трансформация ОАО «Метрон»", category: "Цифровизация", year: "2023", result: "−42% издержки" },
  { title: "M&A сопровождение в фармсекторе", category: "Правовое сопровождение", year: "2023", result: "₽4,2 млрд" },
  { title: "Оптимизация логистики «ТрансЛогик»", category: "Консалтинг", year: "2022", result: "−28% затраты" },
  { title: "IPO подготовка технологического стартапа", category: "Финансы", year: "2022", result: "₽1,8 млрд" },
];

const NEWS = [
  { date: "28 марта 2026", tag: "Новости компании", title: "Группа Компаний «Вертикаль» вошла в рейтинг Forbes «100 лучших консалтинговых компаний России»", excerpt: "По итогам независимой экспертизы наша компания заняла 14-е место среди ведущих консалтинговых структур страны." },
  { date: "15 марта 2026", tag: "Рынок", title: "Объём рынка стратегического консалтинга вырос на 23% в первом квартале 2026 года", excerpt: "Эксперты связывают рост с увеличением спроса на трансформационные проекты со стороны крупного бизнеса." },
  { date: "02 марта 2026", tag: "Сделки", title: "Успешно закрыта крупнейшая M&A сделка в агросекторе при нашем сопровождении", excerpt: "Сумма сделки составила более 6 миллиардов рублей, сроки закрытия — рекордные 47 дней." },
];

const BLOG = [
  { date: "01 апреля 2026", readTime: "8 мин", title: "Пять признаков того, что ваш бизнес готов к масштабированию", excerpt: "Разбираем ключевые индикаторы операционной зрелости компании перед выходом на новые рынки." },
  { date: "22 марта 2026", readTime: "12 мин", title: "ESG-трансформация: от декларации к измеримым результатам", excerpt: "Как выстроить устойчивую повестку, которая работает на репутацию и финансовые показатели." },
  { date: "10 марта 2026", readTime: "6 мин", title: "Ошибки в M&A: что чаще всего упускают покупатели активов", excerpt: "Анализируем 12 типичных ошибок due diligence по материалам реальных сделок." },
];

const STATS = [
  { value: "18+", label: "лет на рынке" },
  { value: "340+", label: "завершённых проектов" },
  { value: "₽82 млрд", label: "под управлением" },
  { value: "97%", label: "клиентов рекомендуют" },
];

function useInView(ref: React.RefObject<Element>, threshold = 0.12) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700`}
    >
      {children}
    </section>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [activeFilter, setActiveFilter] = useState("Все");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filters = ["Все", "Консалтинг", "Финансы", "Правовое сопровождение", "Цифровизация"];
  const filteredPortfolio = activeFilter === "Все"
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-primary shadow-xl" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-accent flex items-center justify-center">
              <span className="font-display text-accent text-sm font-bold">В</span>
            </div>
            <div>
              <span className="font-display text-white text-lg font-semibold tracking-wide leading-none block">Вертикаль</span>
              <span className="font-body text-white/50 text-[10px] tracking-[0.2em] uppercase leading-none">Группа Компаний</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link font-body text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            className="hidden lg:inline-flex items-center font-body text-sm bg-accent text-white px-5 py-2 tracking-wide hover:bg-amber-600 transition-colors duration-200"
          >
            Связаться
          </a>

          <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-primary border-t border-white/10">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block font-body text-white/80 hover:text-white px-6 py-3 text-sm border-b border-white/5 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
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

      {/* STATS */}
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

      {/* ABOUT */}
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

      {/* SERVICES */}
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

      {/* PORTFOLIO */}
      <Section id="portfolio" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Наши работы</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary">Портфолио</h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mt-5" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-body text-xs px-5 py-2 tracking-wide border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-primary text-white border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((p, i) => (
              <div key={i} className="portfolio-card relative bg-secondary/30 border border-border overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-xs text-accent tracking-wide border border-accent/30 px-3 py-1">{p.category}</span>
                    <span className="font-body text-xs text-muted-foreground">{p.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-primary mb-4 leading-snug">{p.title}</h3>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">Результат:</span>
                    <span className="font-display text-lg text-accent font-semibold">{p.result}</span>
                  </div>
                </div>
                <div className="overlay absolute inset-0 bg-primary/92 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="Eye" size={24} className="text-accent mx-auto mb-3" />
                    <p className="font-body text-white text-sm">Открыть кейс</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* NEWS */}
      <Section id="news" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Актуально</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-primary">Новости</h2>
              <div className="w-12 h-0.5 bg-accent mt-5" />
            </div>
            <a href="#" className="font-body text-sm text-primary hover:text-accent transition-colors flex items-center gap-2">
              Все новости <Icon name="ArrowRight" size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <article key={i} className="bg-background border border-border p-7 hover:shadow-md transition-shadow duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-xs text-accent tracking-wide">{n.tag}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span className="font-body text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-primary group-hover:text-accent transition-colors duration-200 mb-3 leading-snug">{n.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
                <div className="mt-5 flex items-center gap-2 text-accent">
                  <span className="font-body text-xs">Читать далее</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* BLOG */}
      <Section id="blog" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Экспертиза</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-primary">Блог</h2>
              <div className="w-12 h-0.5 bg-accent mt-5" />
            </div>
            <a href="#" className="font-body text-sm text-primary hover:text-accent transition-colors flex items-center gap-2">
              Все статьи <Icon name="ArrowRight" size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG.map((b, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="bg-primary/90 aspect-[16/7] mb-5 overflow-hidden relative flex items-center justify-center">
                  <Icon name="FileText" size={36} className="text-white/15 group-hover:text-accent/40 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-4">
                    <span className="font-body text-white/50 text-xs">{b.readTime} чтения</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs text-muted-foreground">{b.date}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-primary group-hover:text-accent transition-colors duration-200 mb-2 leading-snug">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-4">
            Готовы обсудить ваш проект?
          </h2>
          <p className="font-body text-white/60 text-sm max-w-md mx-auto mb-8">
            Получите бесплатную консультацию эксперта в течение 24 часов
          </p>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 font-body bg-accent text-white px-10 py-3.5 text-sm tracking-wide hover:bg-amber-600 transition-colors duration-200"
          >
            Оставить заявку
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>

      {/* CONTACTS */}
      <Section id="contacts" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Свяжитесь с нами</p>
              <h2 className="deco-line font-display text-4xl md:text-5xl font-light text-primary mb-10">Контакты</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: "MapPin", label: "Адрес", value: "г. Москва, Пресненская набережная, 12, Москва-Сити" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "E-mail", value: "info@vertical-group.ru" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00 – 19:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={c.icon} size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-1">{c.label}</div>
                      <div className="font-body text-sm text-foreground">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {[
                  { icon: "MessageCircle", label: "Telegram" },
                  { icon: "Linkedin", label: "LinkedIn" },
                  { icon: "Youtube", label: "YouTube" },
                ].map((s, i) => (
                  <button key={i} className="w-10 h-10 border border-border hover:border-primary hover:bg-primary group flex items-center justify-center transition-all duration-200">
                    <Icon name={s.icon} size={16} className="text-muted-foreground group-hover:text-white transition-colors duration-200" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-light text-primary mb-6">Форма обратной связи</h3>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Имя *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Петров"
                      className="w-full border border-border bg-background font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-border bg-background font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">E-mail *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="ivan@company.ru"
                    className="w-full border border-border bg-background font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground tracking-wide uppercase block mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Опишите вашу задачу..."
                    rows={4}
                    className="w-full border border-border bg-background font-body text-sm px-4 py-3 outline-none focus:border-primary transition-colors duration-200 resize-none placeholder:text-muted-foreground/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-body text-sm py-3.5 tracking-wide hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Отправить заявку
                  <Icon name="Send" size={15} />
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 border-2 border-accent flex items-center justify-center">
                  <span className="font-display text-accent text-sm font-bold">В</span>
                </div>
                <span className="font-display text-white text-base font-semibold">Вертикаль</span>
              </div>
              <p className="font-body text-white/40 text-xs leading-relaxed">
                Консалтинговая группа с 18-летним опытом на российском и международном рынке.
              </p>
            </div>
            <div>
              <h4 className="font-body text-white/70 text-xs tracking-[0.2em] uppercase mb-4">Компания</h4>
              <ul className="space-y-2">
                {["О компании", "Команда", "Карьера", "Контакты"].map(l => (
                  <li key={l}><a href="#" className="font-body text-white/40 hover:text-white text-xs transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-white/70 text-xs tracking-[0.2em] uppercase mb-4">Услуги</h4>
              <ul className="space-y-2">
                {["Стратегия", "Финансы", "Право", "Цифровизация"].map(l => (
                  <li key={l}><a href="#" className="font-body text-white/40 hover:text-white text-xs transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-white/70 text-xs tracking-[0.2em] uppercase mb-4">Контакты</h4>
              <p className="font-body text-white/40 text-xs mb-1">+7 (495) 123-45-67</p>
              <p className="font-body text-white/40 text-xs mb-1">info@vertical-group.ru</p>
              <p className="font-body text-white/40 text-xs">Москва-Сити, башня «Федерация»</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/30 text-xs">© 2026 Группа Компаний «Вертикаль». Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-white/30 hover:text-white/60 text-xs transition-colors">Политика конфиденциальности</a>
              <a href="#" className="font-body text-white/30 hover:text-white/60 text-xs transition-colors">Правовая информация</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
