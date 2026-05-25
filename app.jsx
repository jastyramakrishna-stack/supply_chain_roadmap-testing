const { useState, useEffect, useRef } = React;

// ── Markdown renderer ─────────────────────────────────────────
function renderMarkdown(text) {
  if (!text) return "";
  return text
    .replace(/^## (.+)$/gm, '<h2 class="drawer-h2">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="drawer-h3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[-•\*] (.+)$/gm, '<li class="drawer-li">$1</li>')
    .replace(/(<li[\s\S]+?<\/li>)/g, '<ul class="drawer-ul">$1</ul>')
    .replace(/<\/ul>\s*<ul class="drawer-ul">/g, '')
    .replace(/\n{2,}/g, '</p><p class="drawer-p">')
    .replace(/^(?!<[hul])(.+)$/gm, '<p class="drawer-p">$1</p>')
    .replace(/<p class="drawer-p"><\/p>/g, '');
}

// ── Theme config per badge ────────────────────────────────────
const THEMES = {
  start:      { badgeClass: "section-badge section-badge--start",      cardTheme: "card-theme-start",      accent: "#10b981" },
  core:       { badgeClass: "section-badge section-badge--core",        cardTheme: "card-theme-core",        accent: "#3b82f6" },
  analytical: { badgeClass: "section-badge section-badge--analytical",  cardTheme: "card-theme-analytical",  accent: "#8b5cf6" },
  operations: { badgeClass: "section-badge section-badge--operations",  cardTheme: "card-theme-operations",  accent: "#22c55e" },
  digital:    { badgeClass: "section-badge section-badge--digital",     cardTheme: "card-theme-digital",     accent: "#06b6d4" },
  advanced:   { badgeClass: "section-badge section-badge--advanced",    cardTheme: "card-theme-advanced",    accent: "#f43f5e" },
  data:       { badgeClass: "section-badge section-badge--data",        cardTheme: "card-theme-data",        accent: "#eab308" },
};

const DEFAULT_THEME = {
  badgeClass: "section-badge section-badge--default",
  cardTheme:  "card-theme-start",
  accent:     "#d97706",
};

// ── Section banner images (one per section) ───────────────────
const SECTION_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=200&fit=crop&q=70&auto=format",
];

// ── Icon SVGs per section (inline, no external deps) ──────────
const SECTION_ICONS = [
  // 0 Supply Chain Foundations — network/hub
  <svg viewBox="0 0 32 32" fill="none" stroke="#10b981" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <circle cx="16" cy="16" r="4"/>
    <circle cx="5"  cy="7"  r="2.5"/>
    <circle cx="27" cy="7"  r="2.5"/>
    <circle cx="5"  cy="25" r="2.5"/>
    <circle cx="27" cy="25" r="2.5"/>
    <line x1="12.3" y1="13.3" x2="7.2"  y2="8.8"/>
    <line x1="19.7" y1="13.3" x2="24.8" y2="8.8"/>
    <line x1="12.3" y1="18.7" x2="7.2"  y2="23.2"/>
    <line x1="19.7" y1="18.7" x2="24.8" y2="23.2"/>
  </svg>,

  // 1 Core Planning — clipboard/plan
  <svg viewBox="0 0 32 32" fill="none" stroke="#3b82f6" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <rect x="7" y="5" width="18" height="22" rx="2"/>
    <path d="M12 5v2h8V5" strokeLinecap="round"/>
    <line x1="11" y1="13" x2="21" y2="13" strokeLinecap="round"/>
    <line x1="11" y1="17" x2="21" y2="17" strokeLinecap="round"/>
    <line x1="11" y1="21" x2="17" y2="21" strokeLinecap="round"/>
  </svg>,

  // 2 Forecasting Fundamentals — chart bars
  <svg viewBox="0 0 32 32" fill="none" stroke="#a78bfa" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <line x1="4" y1="28" x2="28" y2="28" strokeLinecap="round"/>
    <rect x="7"  y="18" width="4" height="10" rx="1" fill="rgba(139,92,246,0.3)"/>
    <rect x="14" y="12" width="4" height="16" rx="1" fill="rgba(139,92,246,0.3)"/>
    <rect x="21" y="7"  width="4" height="21" rx="1" fill="rgba(139,92,246,0.3)"/>
    <polyline points="9,14 16,9 23,4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // 3 Forecasting Models — wave/ML
  <svg viewBox="0 0 32 32" fill="none" stroke="#a78bfa" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <path d="M4 16 Q7 10 10 16 Q13 22 16 16 Q19 10 22 16 Q25 22 28 16" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="16" r="2" fill="#a78bfa" stroke="none"/>
    <circle cx="16" cy="16" r="2" fill="#a78bfa" stroke="none"/>
    <circle cx="22" cy="16" r="2" fill="#a78bfa" stroke="none"/>
  </svg>,

  // 4 Forecasting Parameters — sliders
  <svg viewBox="0 0 32 32" fill="none" stroke="#a78bfa" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <line x1="4" y1="10" x2="28" y2="10" strokeLinecap="round"/>
    <line x1="4" y1="16" x2="28" y2="16" strokeLinecap="round"/>
    <line x1="4" y1="22" x2="28" y2="22" strokeLinecap="round"/>
    <circle cx="10" cy="10" r="3" fill="#a78bfa" stroke="none"/>
    <circle cx="20" cy="16" r="3" fill="#a78bfa" stroke="none"/>
    <circle cx="14" cy="22" r="3" fill="#a78bfa" stroke="none"/>
  </svg>,

  // 5 Replenishment Planning — cycle arrows
  <svg viewBox="0 0 32 32" fill="none" stroke="#22c55e" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <path d="M24 8A10 10 0 0 1 8 24" strokeLinecap="round"/>
    <path d="M8 24A10 10 0 0 1 24 8"  strokeLinecap="round"/>
    <polyline points="24,4 24,8 20,8" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="8,28 8,24 12,24" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // 6 Tools & Systems — gear/cog
  <svg viewBox="0 0 32 32" fill="none" stroke="#06b6d4" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <circle cx="16" cy="16" r="4"/>
    <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.1 2.1M22.4 22.4l2.1 2.1M7.5 24.5l2.1-2.1M22.4 9.6l2.1-2.1" strokeLinecap="round"/>
  </svg>,

  // 7 Analytics & Optimization — target
  <svg viewBox="0 0 32 32" fill="none" stroke="#f43f5e" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <circle cx="16" cy="16" r="12"/>
    <circle cx="16" cy="16" r="7"/>
    <circle cx="16" cy="16" r="2.5" fill="#f43f5e" stroke="none"/>
    <line x1="16" y1="4"  x2="16" y2="7"  strokeLinecap="round"/>
    <line x1="16" y1="25" x2="16" y2="28" strokeLinecap="round"/>
    <line x1="4"  y1="16" x2="7"  y2="16" strokeLinecap="round"/>
    <line x1="25" y1="16" x2="28" y2="16" strokeLinecap="round"/>
  </svg>,

  // 8 Modern Supply Chain — lightning/AI
  <svg viewBox="0 0 32 32" fill="none" stroke="#06b6d4" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <polygon points="18,4 10,18 16,18 14,28 22,14 16,14" fill="rgba(6,182,212,0.25)" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>,

  // 9 Industry Knowledge — building/factory
  <svg viewBox="0 0 32 32" fill="none" stroke="#eab308" strokeWidth="1.8" className="banner-icon-svg" aria-hidden="true">
    <rect x="4" y="16" width="24" height="12" rx="1"/>
    <path d="M8 16V10l6 4V10l6 4V10l6 4" strokeLinejoin="round" strokeLinecap="round"/>
    <line x1="4"  y1="28" x2="28" y2="28" strokeLinecap="round"/>
    <rect x="13" y="22" width="6" height="6"/>
  </svg>,
];

function getTheme(badge) {
  if (!badge) return DEFAULT_THEME;
  const b = badge.toLowerCase();
  if (b.includes("start"))    return THEMES.start;
  if (b.includes("core"))     return THEMES.core;
  if (b.includes("analyt"))   return THEMES.analytical;
  if (b.includes("operat"))   return THEMES.operations;
  if (b.includes("digital"))  return THEMES.digital;
  if (b.includes("advanced")) return THEMES.advanced;
  if (b.includes("data"))     return THEMES.data;
  return DEFAULT_THEME;
}

function badgeClass(badge) { return getTheme(badge).badgeClass; }

// ── Topic Drawer ──────────────────────────────────────────────
function TopicDrawer({ topic, sectionTitle, sectionBadge, topicContent, onClose }) {
  const text = topicContent ||
    `## ${topic}\nDetailed content for this topic is coming soon.\n\n## How it relates to ${sectionTitle}\nThis topic is a key component of ${sectionTitle} in modern supply chain management.`;

  const topicTheme = getTheme(sectionBadge);
  return (
    <aside
      className="topic-drawer-panel drawer-light"
      style={{ "--card-accent": topicTheme.accent }}
      role="dialog" aria-modal="true" aria-label={`${topic} detail`}
    >
      <div className="drawer-header">
        <div className="drawer-header-inner">
          <span className="drawer-eyebrow">Topic Detail</span>
          <h2 className="drawer-title">{topic}</h2>
          <span className="drawer-parent-label">in {sectionTitle}</span>
        </div>
        <button className="drawer-close" onClick={onClose} aria-label="Close topic panel">✕</button>
      </div>

      <div className="drawer-content">
        <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(text) }} />
      </div>

      <div className="drawer-footer">
        <span className="drawer-ai-label">✦ Supply Chain Roadmap</span>
        <button className="drawer-close-btn" onClick={onClose}>← Section</button>
      </div>
    </aside>
  );
}

// ── Section Drawer ────────────────────────────────────────────
function SectionDrawer({ section, onClose }) {
  const [activeTopic, setActiveTopic] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") activeTopic ? setActiveTopic(null) : onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeTopic]);

  const overviewText = section.content?.overview ||
    `## ${section.title}\nThis section covers key supply chain concepts and best practices.\n\n## Topics covered\n${section.items.map(i => `- ${i}`).join('\n')}`;

  const topicContent = activeTopic ? (section.content?.topics?.[activeTopic] || null) : null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label={`${section.title} detail`}>
        <div className="drawer-header">
          <div className="drawer-header-inner">
            <span className="drawer-eyebrow">Deep Dive</span>
            <h2 className="drawer-title">{section.title}</h2>
            {section.badge && (
              <span className={`drawer-badge ${badgeClass(section.badge)}`}>{section.badge}</span>
            )}
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">✕</button>
        </div>

        <div className="drawer-topics">
          <p className="drawer-topics-label">Explore a topic →</p>
          {section.items.map((item, i) => (
            <span
              key={i}
              className={`drawer-topic-pill ${activeTopic === item ? "drawer-topic-pill--active" : ""}`}
              onClick={() => setActiveTopic(activeTopic === item ? null : item)}
              role="button" tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setActiveTopic(activeTopic === item ? null : item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="drawer-content">
          {activeTopic && topicContent ? (
            <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(topicContent) }} />
          ) : activeTopic && !topicContent ? (
            <div className="drawer-body">
              <p className="drawer-p" style={{ color: "var(--text-mid)", fontStyle: "italic" }}>
                Content for "{activeTopic}" coming soon.
              </p>
            </div>
          ) : (
            <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(overviewText) }} />
          )}
        </div>

        {activeTopic && topicContent && (
          <TopicDrawer
            topic={activeTopic}
            sectionTitle={section.title}
            sectionBadge={section.badge}
            topicContent={topicContent}
            onClose={() => setActiveTopic(null)}
          />
        )}

        <div className="drawer-footer">
          <span className="drawer-ai-label">✦ Supply Chain Roadmap</span>
          {activeTopic ? (
            <button className="drawer-close-btn" onClick={() => setActiveTopic(null)}>← Back</button>
          ) : (
            <button className="drawer-close-btn" onClick={onClose}>← Roadmap</button>
          )}
        </div>
      </aside>
    </>
  );
}

// ── Section Card ──────────────────────────────────────────────
function RoadmapSection({ section, index, onOpen }) {
  const theme = getTheme(section.badge);
  const bannerSrc = SECTION_IMAGES[index] || SECTION_IMAGES[0];
  const icon = SECTION_ICONS[index] || SECTION_ICONS[0];

  return (
    <div
      className={`section-card ${theme.cardTheme}`}
      style={{ "--card-accent": theme.accent }}
      onClick={() => onOpen(section)}
      role="button" tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onOpen(section)}
      aria-label={`${section.title} — click to explore`}
    >
      {/* Banner: photo + icon overlay */}
      <div className="section-card-banner">
        <img src={bannerSrc} alt="" loading="lazy" />
        <div className="section-card-banner-icon">
          {icon}
          <span className="banner-step-label">Step {index + 1}</span>
        </div>
      </div>

      {/* Header: badge + title */}
      <div className="section-header">
        {section.badge && (
          <div className="section-badge-wrap">
            <span className={badgeClass(section.badge)}>{section.badge}</span>
          </div>
        )}
        <h2 className="section-title">{index + 1}. {section.title}</h2>
      </div>

      {/* Subtle separator */}
      <div className="section-divider" />

      {/* Topic list */}
      <ul className="section-items">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <div className="section-cta">Explore topic →</div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
function App() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const filtered = roadmapData.map(section => {
    if (!query.trim()) return section;
    const q = query.toLowerCase();
    const matchedItems = section.items.filter(item => item.toLowerCase().includes(q));
    if (section.title.toLowerCase().includes(q) || (section.badge && section.badge.toLowerCase().includes(q))) return section;
    if (matchedItems.length === 0) return null;
    return { ...section, items: matchedItems };
  }).filter(Boolean);

  return (
    <>
      <div className="meta">
        <p>
          Covers foundations → planning → forecasting → replenishment → systems → analytics → modern SC → industry.
          <br />
          <span className="meta-hint">Click any section to explore. Click a topic pill for a deep-dive.</span>
        </p>
      </div>

      <div style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search topics — ARIMA, S&OP, EOQ, safety stock…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Search topics"
        />
      </div>

      <div className="roadmap">
        {filtered.length > 0 ? (
          filtered.map((section, index) => (
            <RoadmapSection
              key={section.title}
              section={section}
              index={roadmapData.indexOf(section)}
              onOpen={setActiveSection}
            />
          ))
        ) : (
          <div style={{ padding: "2rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
            No results for "{query}"
          </div>
        )}
      </div>

      {activeSection && (
        <SectionDrawer
          section={activeSection}
          onClose={() => setActiveSection(null)}
        />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
