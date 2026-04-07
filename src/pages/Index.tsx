import { useState } from "react";
import Icon from "@/components/ui/icon";

const SIDEBAR_ITEMS = [
  "КРС", "МРС", "Свиноводство", "Птицеводство",
  "Коневодство", "Кролиководство", "Рыбоводство",
  "Пчеловодство", "Заготовка кормов", "О биометодах в с.х.",
];

const PRODUCTS_ANIMALS = [
  { name: "Бацелл-МТ", desc: "кормовая добавка", isNew: true },
  { name: "Бацелл-М", desc: "добавка кормовая пробиотическая", isNew: false },
  { name: "Моноспорин КД", desc: "кормовая добавка (жидкая форма)", isNew: false },
  { name: "Моноспорин КДС", desc: "кормовая добавка (сухая форма)", isNew: false },
  { name: "Пролам КД", desc: "кормовая добавка (жидкая форма)", isNew: false },
  { name: "Гипролам", desc: "препарат для профилактики эндометрита у коров", isNew: false },
  { name: "Битасил", desc: "биоконсервант для силосования и сенажирования растительного сырья", isNew: false },
  { name: "Симбент", desc: "биосредство для сквашивания молока для сельскохозяйственных животных молочного периода", isNew: false },
  { name: "Биомастим", desc: "микробиологическое средство для обработки сосков вымени коров после доения", isNew: false },
];

const PRODUCTS_PLANTS = [
  { name: "Споробактерин", desc: "биологический фунгицид и стимулятор роста растений", isNew: false },
  { name: "Бактоген", desc: "биологическое удобрение для повышения урожайности", isNew: false },
  { name: "Ризоагрин", desc: "биоудобрение на основе ризосферных бактерий", isNew: false },
  { name: "Экстрасол", desc: "биопрепарат комплексного действия для растений", isNew: false },
];

const PRODUCTS_WATER = [
  { name: "Биодеструктор", desc: "микробиологическое средство для очистки сточных вод", isNew: false },
  { name: "АктиБак", desc: "биопрепарат для очистки локальных очистных сооружений", isNew: false },
];

const TABLE_ANIMALS = [
  {
    name: "Кормовая добавка «Бацелл-МТ»",
    desc: "Основу действующего вещества составляют живые бактерии Bacillus subtilis, Bacillus amyloliquefaciens и их метаболиты, образовавшиеся в процессе культивирования этих штаммов. Применяется в животноводстве.",
    norm: "0,1–0,3 кг/т",
    form: "порошок",
    pack: "мешки от 15 кг",
    img: "https://cdn.poehali.dev/projects/37d70944-f34d-4af4-b695-693bdae58491/bucket/9378059f-a182-4a02-aa6e-b5846a4e6f39.jpg",
  },
  {
    name: "Кормовая добавка «Бацелл-М»",
    desc: "Пробиотическая кормовая добавка. Нормализует микрофлору кишечника, повышает усвояемость кормов, улучшает продуктивность животных.",
    norm: "0,2–0,5 кг/т",
    form: "порошок",
    pack: "мешки от 15 кг",
    img: "",
  },
  {
    name: "Кормовая добавка «Моноспорин КД»",
    desc: "Жидкая форма кормовой добавки на основе Bacillus subtilis. Подавляет патогенную микрофлору, стимулирует иммунную систему животных.",
    norm: "1–2 л/т",
    form: "жидкость",
    pack: "канистры 10 л",
    img: "",
  },
];

type TabKey = "animals" | "plants" | "water";

export default function Index() {
  const [activeTab, setActiveTab] = useState<TabKey>("animals");
  const [activeSidebar, setActiveSidebar] = useState("КРС");
  const [activeNav, setActiveNav] = useState("продукция");
  const [searchVal, setSearchVal] = useState("");

  const tabProducts: Record<TabKey, typeof PRODUCTS_ANIMALS> = {
    animals: PRODUCTS_ANIMALS,
    plants: PRODUCTS_PLANTS,
    water: PRODUCTS_WATER,
  };

  const tabHeading: Record<TabKey, string> = {
    animals: "Перечень продукции для животноводства",
    plants: "Перечень продукции для растениеводства",
    water: "Перечень продукции для очистки сточных вод",
  };

  return (
    <div className="min-h-screen" style={{ background: "#f0f0f0", fontFamily: "'Open Sans', Arial, sans-serif", fontSize: 13 }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #d0d0d0" }}>
        <div className="max-w-[1100px] mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 gap-2 sm:gap-0">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/projects/37d70944-f34d-4af4-b695-693bdae58491/bucket/6218960d-d66d-43fe-b3fd-b4018f64f10f.png"
              alt="БиоТехАгро"
              style={{ height: 64, width: "auto" }}
            />
            <div style={{ borderLeft: "1px solid #c8dada", paddingLeft: 10, lineHeight: 1.35 }}>
              <div style={{ fontSize: 8.5, color: "#7aabab", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Первая
              </div>
              <div style={{ fontSize: 8.5, color: "#7aabab", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                биотехнологическая
              </div>
              <div style={{ fontSize: 8.5, color: "#7aabab", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                компания
              </div>
            </div>
          </a>

          {/* Right: icons + search + phone */}
          <div className="flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Icon name="Home" size={18} />
              </button>
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <Icon name="Printer" size={18} />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                style={{ border: "1px solid #b0b0b0", padding: "3px 28px 3px 6px", fontSize: 12, width: 180, outline: "none" }}
                placeholder=""
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <Icon name="Search" size={13} />
              </button>
            </div>
            <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5 }}>
              <span style={{ fontWeight: 600 }}>тел.: 8 (800) 550-25-44</span><br />
              <span style={{ color: "#666" }}>звонок по России бесплатный</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER ── */}
      <div style={{ background: "#3d8080", padding: "10px 0" }}>
        <div className="max-w-[1100px] mx-auto px-3 sm:px-6">
          <h1 style={{ color: "#fff", fontSize: "clamp(13px, 2vw, 19px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, margin: 0, lineHeight: 1.3 }}>
            Разработка и производство микробиологических препаратов для животных и растений
          </h1>
        </div>
      </div>

      {/* ── TOP NAVIGATION ── */}
      <div style={{ background: "#f0f0f0", borderBottom: "1px solid #ccc" }}>
        <div className="max-w-[1100px] mx-auto px-3 sm:px-6">
          <div className="flex flex-wrap gap-0">
            {["идеология компании", "продукция", "производство", "консультанты", "контакты"].map(item => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                style={{
                  padding: "8px 16px",
                  fontSize: 13,
                  border: "1px solid #ccc",
                  borderBottom: activeNav === item ? "1px solid #fff" : "1px solid #ccc",
                  background: activeNav === item ? "#fff" : "#e8e8e8",
                  color: activeNav === item ? "#3d8080" : "#444",
                  cursor: "pointer",
                  marginRight: 2,
                  marginBottom: activeNav === item ? -1 : 0,
                  fontWeight: activeNav === item ? 600 : 400,
                  transition: "all 0.15s",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1100px] mx-auto px-3 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* ── SIDEBAR ── */}
          <div className="lg:w-[200px] flex-shrink-0">
            {/* ПРИМЕНЕНИЕ header */}
            <div style={{ background: "#3d8080", padding: "7px 12px", marginBottom: 2 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontStyle: "italic", fontSize: 14, textTransform: "uppercase" }}>
                Применение
              </span>
            </div>
            {/* Sidebar items */}
            <div style={{ border: "1px solid #ccc", background: "#fff" }}>
              {SIDEBAR_ITEMS.map(item => (
                <button
                  key={item}
                  onClick={() => setActiveSidebar(item)}
                  className="w-full text-left transition-colors duration-150"
                  style={{
                    display: "block",
                    padding: "7px 12px",
                    fontSize: 13,
                    borderBottom: "1px solid #e0e0e0",
                    background: activeSidebar === item ? "#4a9090" : "#fff",
                    color: activeSidebar === item ? "#fff" : "#333",
                    cursor: "pointer",
                    fontWeight: activeSidebar === item ? 600 : 400,
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Extra sidebar links */}
            <div className="mt-3 flex flex-col gap-2">
              {[
                { icon: "Film", label: "Фильмы о биометоде" },
                { icon: "Newspaper", label: "Наша газета БиоМир" },
              ].map(item => (
                <a key={item.label} href="#"
                  className="flex items-center gap-2 hover:text-[#3d8080] transition-colors"
                  style={{ fontSize: 12, color: "#555", background: "#e8e8e8", padding: "6px 10px", border: "1px solid #ccc" }}>
                  <Icon name={item.icon} size={28} className="text-gray-300 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── CONTENT AREA ── */}
          <div className="flex-1 min-w-0" style={{ background: "#fff", border: "1px solid #ccc", padding: "0 0 16px 0" }}>

            {/* Tabs: Животноводство / Растениеводство / Очистка */}
            <div style={{ borderBottom: "1px solid #ccc", display: "flex", flexWrap: "wrap", background: "#f5f5f5" }}>
              {([
                { key: "animals" as TabKey, label: "Животноводство" },
                { key: "plants" as TabKey, label: "Растениеводство" },
                { key: "water" as TabKey, label: "Очистка сточных вод" },
              ]).map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: "8px 16px",
                    fontSize: 13,
                    border: "1px solid #ccc",
                    borderBottom: activeTab === tab.key ? "1px solid #fff" : "1px solid #ccc",
                    background: activeTab === tab.key ? "#fff" : "#e8e8e8",
                    color: activeTab === tab.key ? "#3d8080" : "#555",
                    cursor: "pointer",
                    marginRight: 3,
                    marginBottom: activeTab === tab.key ? -1 : 0,
                    fontWeight: activeTab === tab.key ? 600 : 400,
                    transition: "all 0.15s",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ padding: "16px 20px" }}>
              {/* Section heading */}
              <h2 style={{ color: "#5a8a2a", fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 400, marginBottom: 14, marginTop: 4 }}>
                {tabHeading[activeTab]}
              </h2>

              {/* Product list */}
              <div style={{ marginBottom: 16 }}>
                {tabProducts[activeTab].map((p, i) => (
                  <div key={i} style={{ marginBottom: 4, lineHeight: 1.6 }}>
                    <span style={{ fontStyle: "italic" }}>«</span>
                    <a href="#" className="product-link">{p.name}</a>
                    <span style={{ fontStyle: "italic" }}>»</span>
                    {" "}<span style={{ fontStyle: "italic", color: "#555" }}>- {p.desc}</span>
                    {p.isNew && (
                      <span style={{ color: "#cc0000", fontWeight: 700, marginLeft: 6, fontStyle: "italic" }}>
                        Новый препарат!
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Films link */}
              {activeTab === "animals" && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: "#5a8a2a", fontStyle: "italic", marginBottom: 4, fontSize: 12 }}>Фильмы</div>
                  <a href="#" className="product-link" style={{ fontSize: 12 }}>
                    «Презентационный фильм о компании ООО Биотехагро - продолжительность 3 минуты»
                  </a>
                </div>
              )}

              {/* Short description link */}
              <div style={{ marginBottom: 16 }}>
                <a href="#table-section" className="product-link" style={{ color: "#5a8a2a" }}>
                  Краткое описание продукции {activeTab === "animals" ? "для животноводства" : activeTab === "plants" ? "для растениеводства" : "для очистки сточных вод"}
                </a>
              </div>

              {/* Product table */}
              <div id="table-section" style={{ overflowX: "auto" }}>
                <table className="product-table w-full" style={{ borderCollapse: "collapse", minWidth: 500 }}>
                  <thead>
                    <tr>
                      <th style={{ width: 120 }}>изображение</th>
                      <th>наименование</th>
                      <th style={{ width: 100 }}>нормы ввода</th>
                      <th style={{ width: 90 }}>форма</th>
                      <th style={{ width: 110 }}>упаковка</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ANIMALS.map((row, i) => (
                      <tr key={i}>
                        <td style={{ textAlign: "center", padding: 8 }}>
                          {row.img ? (
                            <img
                              src={row.img}
                              alt={row.name}
                              style={{ width: 80, height: 60, objectFit: "cover", border: "1px solid #ddd" }}
                            />
                          ) : (
                            <div style={{ width: 80, height: 60, background: "#eee", border: "1px solid #ddd", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Icon name="Package" size={24} className="text-gray-300" />
                            </div>
                          )}
                        </td>
                        <td>
                          <a href="#" className="product-link" style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>
                            {row.name}
                          </a>
                          <span style={{ color: "#333", fontSize: 12 }}>{row.desc}</span>
                        </td>
                        <td style={{ textAlign: "center", fontSize: 12 }}>{row.norm}</td>
                        <td style={{ textAlign: "center", fontSize: 12 }}>{row.form}</td>
                        <td style={{ textAlign: "center", fontSize: 12 }}>{row.pack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: "#3d8080", marginTop: 16 }}>
        <div className="max-w-[1100px] mx-auto px-3 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div style={{ color: "#fff", fontSize: 12 }}>
            © 2008–2026 ООО «Биотехагро». Все права защищены.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6" style={{ fontSize: 12 }}>
            {["Идеология компании", "Продукция", "Производство", "Консультанты", "Контакты"].map(l => (
              <a key={l} href="#" style={{ color: "#c8e8e8" }} className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <div style={{ color: "#c8e8e8", fontSize: 12, textAlign: "right" }}>
            тел.: 8 (800) 550-25-44<br />
            <span style={{ color: "#a0d0d0" }}>звонок бесплатный</span>
          </div>
        </div>
      </div>

    </div>
  );
}