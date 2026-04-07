import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "@/components/site-data";

function Contacts() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  return (
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
  );
}

function Footer() {
  return (
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
  );
}

export default function ContactsFooter() {
  return (
    <>
      <Contacts />
      <Footer />
    </>
  );
}
