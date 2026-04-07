import { useState, useEffect, useRef } from "react";

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/37d70944-f34d-4af4-b695-693bdae58491/files/45acfaf5-e58c-43c1-9e07-376ec3bf0e13.jpg";

export const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Новости", href: "#news" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

export const SERVICES = [
  { icon: "Building2", title: "Стратегический консалтинг", desc: "Разработка долгосрочных стратегий развития бизнеса, оценка рисков и оптимизация процессов." },
  { icon: "BarChart3", title: "Финансовый анализ", desc: "Комплексный аудит, финансовое моделирование и инвестиционное планирование." },
  { icon: "Scale", title: "Правовое сопровождение", desc: "Юридическая поддержка сделок, корпоративное право и защита интересов бизнеса." },
  { icon: "Globe", title: "Международные рынки", desc: "Выход на зарубежные рынки, ВЭД-сопровождение и поиск иностранных партнёров." },
  { icon: "Users", title: "Управление персоналом", desc: "HR-стратегии, оценка компетенций, формирование эффективных команд." },
  { icon: "Cpu", title: "Цифровая трансформация", desc: "Автоматизация процессов, внедрение ERP-систем и цифровизация бизнеса." },
];

export const PORTFOLIO = [
  { title: "Реструктуризация холдинга «Арктика»", category: "Консалтинг", year: "2024", result: "+38% EBITDA" },
  { title: "Выход ГК «Премьер» на рынки СНГ", category: "Международные рынки", year: "2024", result: "12 стран" },
  { title: "Цифровая трансформация ОАО «Метрон»", category: "Цифровизация", year: "2023", result: "−42% издержки" },
  { title: "M&A сопровождение в фармсекторе", category: "Правовое сопровождение", year: "2023", result: "₽4,2 млрд" },
  { title: "Оптимизация логистики «ТрансЛогик»", category: "Консалтинг", year: "2022", result: "−28% затраты" },
  { title: "IPO подготовка технологического стартапа", category: "Финансы", year: "2022", result: "₽1,8 млрд" },
];

export const NEWS = [
  { date: "28 марта 2026", tag: "Новости компании", title: "Группа Компаний «Вертикаль» вошла в рейтинг Forbes «100 лучших консалтинговых компаний России»", excerpt: "По итогам независимой экспертизы наша компания заняла 14-е место среди ведущих консалтинговых структур страны." },
  { date: "15 марта 2026", tag: "Рынок", title: "Объём рынка стратегического консалтинга вырос на 23% в первом квартале 2026 года", excerpt: "Эксперты связывают рост с увеличением спроса на трансформационные проекты со стороны крупного бизнеса." },
  { date: "02 марта 2026", tag: "Сделки", title: "Успешно закрыта крупнейшая M&A сделка в агросекторе при нашем сопровождении", excerpt: "Сумма сделки составила более 6 миллиардов рублей, сроки закрытия — рекордные 47 дней." },
];

export const BLOG = [
  { date: "01 апреля 2026", readTime: "8 мин", title: "Пять признаков того, что ваш бизнес готов к масштабированию", excerpt: "Разбираем ключевые индикаторы операционной зрелости компании перед выходом на новые рынки." },
  { date: "22 марта 2026", readTime: "12 мин", title: "ESG-трансформация: от декларации к измеримым результатам", excerpt: "Как выстроить устойчивую повестку, которая работает на репутацию и финансовые показатели." },
  { date: "10 марта 2026", readTime: "6 мин", title: "Ошибки в M&A: что чаще всего упускают покупатели активов", excerpt: "Анализируем 12 типичных ошибок due diligence по материалам реальных сделок." },
];

export const STATS = [
  { value: "18+", label: "лет на рынке" },
  { value: "340+", label: "завершённых проектов" },
  { value: "₽82 млрд", label: "под управлением" },
  { value: "97%", label: "клиентов рекомендуют" },
];

export const PORTFOLIO_FILTERS = ["Все", "Консалтинг", "Финансы", "Правовое сопровождение", "Цифровизация"];

export function useInView(ref: React.RefObject<Element>, threshold = 0.12) {
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

export function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
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
