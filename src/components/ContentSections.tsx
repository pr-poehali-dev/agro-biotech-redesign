import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PORTFOLIO, NEWS, BLOG, PORTFOLIO_FILTERS, Section } from "@/components/site-data";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Все");

  const filteredPortfolio = activeFilter === "Все"
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === activeFilter);

  return (
    <Section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Наши работы</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary">Портфолио</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-5" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_FILTERS.map(f => (
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
  );
}

function NewsSection() {
  return (
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
  );
}

function BlogSection() {
  return (
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
  );
}

function CtaBanner() {
  return (
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
  );
}

export default function ContentSections() {
  return (
    <>
      <Portfolio />
      <NewsSection />
      <BlogSection />
      <CtaBanner />
    </>
  );
}
