const { useState, useEffect, useRef } = React;

// ── Shared markdown renderer ──────────────────────────────────
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
  start: {
    badgeClass: "section-badge section-badge--start",
    cardTheme:  "card-theme-start",
    accent:     "#b45309",
    gradient:   "linear-gradient(135deg, #78350f 0%, #b45309 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(120,53,15,0.85) 0%, rgba(180,83,9,0.6) 100%)",
  },
  core: {
    badgeClass: "section-badge section-badge--core",
    cardTheme:  "card-theme-core",
    accent:     "#1d4ed8",
    gradient:   "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(30,58,138,0.85) 0%, rgba(29,78,216,0.6) 100%)",
  },
  analytical: {
    badgeClass: "section-badge section-badge--analytical",
    cardTheme:  "card-theme-analytical",
    accent:     "#6d28d9",
    gradient:   "linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(76,29,149,0.85) 0%, rgba(109,40,217,0.6) 100%)",
  },
  operations: {
    badgeClass: "section-badge section-badge--operations",
    cardTheme:  "card-theme-operations",
    accent:     "#15803d",
    gradient:   "linear-gradient(135deg, #14532d 0%, #15803d 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(20,83,45,0.85) 0%, rgba(21,128,61,0.6) 100%)",
  },
  digital: {
    badgeClass: "section-badge section-badge--digital",
    cardTheme:  "card-theme-digital",
    accent:     "#0e7490",
    gradient:   "linear-gradient(135deg, #164e63 0%, #0e7490 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(22,78,99,0.85) 0%, rgba(14,116,144,0.6) 100%)",
  },
  advanced: {
    badgeClass: "section-badge section-badge--advanced",
    cardTheme:  "card-theme-advanced",
    accent:     "#b91c1c",
    gradient:   "linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(127,29,29,0.85) 0%, rgba(185,28,28,0.6) 100%)",
  },
  data: {
    badgeClass: "section-badge section-badge--data",
    cardTheme:  "card-theme-data",
    accent:     "#0369a1",
    gradient:   "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)",
    heroOverlay:"linear-gradient(160deg, rgba(12,74,110,0.85) 0%, rgba(3,105,161,0.6) 100%)",
  },
};

const DEFAULT_THEME = {
  badgeClass: "section-badge section-badge--default",
  cardTheme:  "card-theme-start",
  accent:     "#d97706",
  gradient:   "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
  heroOverlay:"linear-gradient(160deg, rgba(146,64,14,0.85) 0%, rgba(217,119,6,0.6) 100%)",
};

// ── SVG Icons per topic keyword ───────────────────────────────
const TOPIC_ICONS = {
  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  planning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  inventory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 9h4M14 9h4M6 13h2M14 13h2"/></svg>`,
  forecast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  transport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  warehouse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  analytics: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 010 2h-1v1a2 2 0 01-2 2v1a1 1 0 01-2 0v-1H7v1a1 1 0 01-2 0v-1a2 2 0 01-2-2v-1H2a1 1 0 010-2h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z"/></svg>`,
  procurement: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
  network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M12 8v3M9.3 17.3L7 16M14.7 17.3L17 16"/></svg>`,
  sustainability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 22c0-6 4-10 10-10s10 4 10 10"/><path d="M6 10c1-4 4-7 6-8 2 1 5 4 6 8"/><path d="M12 12V2"/></svg>`,
  digital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  kpi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  supplier: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  robot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V5M8 5h8M6 15h.01M18 15h.01M9 19h6"/><circle cx="12" cy="3" r="1"/></svg>`,
  blockchain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="6" height="6" rx="1"/><rect x="9" y="7" width="6" height="6" rx="1"/><rect x="16" y="7" width="6" height="6" rx="1"/><path d="M8 10h1M15 10h1M5 13v3M12 13v3M19 13v3"/></svg>`,
};

function getTopicIcon(topicName) {
  const n = topicName.toLowerCase();
  if (n.includes('ai') || n.includes('machine') || n.includes('autonomous')) return TOPIC_ICONS.ai;
  if (n.includes('forecast') || n.includes('arima') || n.includes('model')) return TOPIC_ICONS.forecast;
  if (n.includes('inventory') || n.includes('stock') || n.includes('replenish')) return TOPIC_ICONS.inventory;
  if (n.includes('transport') || n.includes('logistics') || n.includes('ship')) return TOPIC_ICONS.transport;
  if (n.includes('warehouse') || n.includes('wms')) return TOPIC_ICONS.warehouse;
  if (n.includes('analytic') || n.includes('optimiz') || n.includes('kpi') || n.includes('metric')) return TOPIC_ICONS.analytics;
  if (n.includes('procure') || n.includes('sourc') || n.includes('purchas')) return TOPIC_ICONS.procurement;
  if (n.includes('network') || n.includes('distribut') || n.includes('s&op') || n.includes('sop') || n.includes('planning')) return TOPIC_ICONS.planning;
  if (n.includes('sustainab') || n.includes('green') || n.includes('carbon')) return TOPIC_ICONS.sustainability;
  if (n.includes('digital') || n.includes('control tower') || n.includes('iot')) return TOPIC_ICONS.digital;
  if (n.includes('supplier') || n.includes('relationship') || n.includes('vendor')) return TOPIC_ICONS.supplier;
  if (n.includes('robot') || n.includes('automat')) return TOPIC_ICONS.robot;
  if (n.includes('blockchain') || n.includes('trace')) return TOPIC_ICONS.blockchain;
  if (n.includes('kpi') || n.includes('otif') || n.includes('fill rate')) return TOPIC_ICONS.kpi;
  return TOPIC_ICONS.default;
}

// ── Per-section hero images (Unsplash free) ──────────────────
const SECTION_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop&q=70&auto=format",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=200&fit=crop&q=70&auto=format",
];

// Large drawer hero images per section
const SECTION_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=400&fit=crop&q=80&auto=format",
];

// Topic-specific illustration images (Unsplash free)
const TOPIC_IMAGES = {
  "What is Supply Chain Management": "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&h=240&fit=crop&q=75&auto=format",
  "Logistics & Distribution Basics": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=240&fit=crop&q=75&auto=format",
  "Procurement & Sourcing Fundamentals": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=240&fit=crop&q=75&auto=format",
  "Inventory Management Essentials": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=240&fit=crop&q=75&auto=format",
  "Demand Planning Basics": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=240&fit=crop&q=75&auto=format",
  "Replenishment Planning Basics": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=240&fit=crop&q=75&auto=format",
  "Warehouse Operations Overview": "https://images.unsplash.com/photo-1586528116493-3db78f8db5e0?w=600&h=240&fit=crop&q=75&auto=format",
  "Transportation Modes & Networks": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=240&fit=crop&q=75&auto=format",
  "Supply Chain KPIs (OTIF, Fill Rate, Inventory Turns)": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=240&fit=crop&q=75&auto=format",
  "Sales & Operations Planning (S&OP)": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=240&fit=crop&q=75&auto=format",
  "Integrated Business Planning (IBP)": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=240&fit=crop&q=75&auto=format",
  "Material Requirements Planning (MRP)": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=240&fit=crop&q=75&auto=format",
  "AI & Machine Learning in Supply Chain": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=240&fit=crop&q=75&auto=format",
  "Digital Twins": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=240&fit=crop&q=75&auto=format",
  "Robotics & Automation in Warehousing": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=240&fit=crop&q=75&auto=format",
  "Sustainability & Green Supply Chain": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=240&fit=crop&q=75&auto=format",
  "Blockchain for Traceability": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=240&fit=crop&q=75&auto=format",
  "Pharma & Cold Chain Logistics": "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&h=240&fit=crop&q=75&auto=format",
  "Automotive Supply Chain": "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=240&fit=crop&q=75&auto=format",
  "Retail Supply Chain": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=240&fit=crop&q=75&auto=format",
  "E-commerce Fulfillment": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=240&fit=crop&q=75&auto=format",
};

const DEFAULT_TOPIC_IMAGE = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=240&fit=crop&q=75&auto=format";

function getTopicImage(topicName) {
  return TOPIC_IMAGES[topicName] || DEFAULT_TOPIC_IMAGE;
}

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

function badgeClass(badge) {
  return getTheme(badge).badgeClass;
}

// ── Topic Pill Grid in drawer ────────────────────────────────
function TopicPillGrid({ items, activeTopic, onSelect, badge }) {
  const theme = getTheme(badge);
  return (
    <div className="topic-grid">
      {items.map((item, i) => (
        <button
          key={i}
          className={`topic-grid-card ${activeTopic === item ? "topic-grid-card--active" : ""}`}
          style={{ "--tgc-accent": theme.accent }}
          onClick={() => onSelect(activeTopic === item ? null : item)}
        >
          <span
            className="topic-grid-icon"
            dangerouslySetInnerHTML={{ __html: getTopicIcon(item) }}
          />
          <span className="topic-grid-label">{item}</span>
        </button>
      ))}
    </div>
  );
}

// ── Topic Detail View ─────────────────────────────────────────
function TopicDetailView({ topic, sectionBadge, topicContent, onBack }) {
  const text = topicContent ||
    `## ${topic}\nDetailed content for this topic is coming soon.\n\n## Coming soon\nThis topic is being written.`;

  const topicTheme = getTheme(sectionBadge);
  const imgSrc = getTopicImage(topic);

  return (
    <div className="topic-detail-view">
      {/* Topic hero image */}
      <div
        className="topic-detail-hero"
        style={{ "--td-overlay": topicTheme.heroOverlay }}
      >
        <img src={imgSrc} alt="" loading="lazy" className="topic-detail-hero-img" />
        <div className="topic-detail-hero-overlay">
          <div
            className="topic-detail-icon-large"
            dangerouslySetInnerHTML={{ __html: getTopicIcon(topic) }}
          />
          <h3 className="topic-detail-title">{topic}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(text) }} />

      <button className="topic-detail-back" onClick={onBack} style={{ color: topicTheme.accent }}>
        ← Back to all topics
      </button>
    </div>
  );
}

// ── Section Drawer ────────────────────────────────────────────
function SectionDrawer({ section, sectionIndex, onClose }) {
  const [activeTopic, setActiveTopic] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") activeTopic ? setActiveTopic(null) : onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeTopic]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeTopic]);

  const theme = getTheme(section.badge);
  const heroSrc = SECTION_HERO_IMAGES[sectionIndex] || SECTION_HERO_IMAGES[0];

  const overviewText = section.content?.overview ||
    `## ${section.title}\nThis section covers key supply chain concepts and best practices.`;

  const topicContent = activeTopic ? (section.content?.topics?.[activeTopic] || null) : null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${section.title} detail`}
        style={{ "--card-accent": theme.accent }}
      >
        {/* ── Drawer Hero ── */}
        <div className="drawer-hero" style={{ "--dh-overlay": theme.heroOverlay }}>
          <img src={heroSrc} alt="" className="drawer-hero-img" loading="lazy" />
          <div className="drawer-hero-overlay">
            <div className="drawer-hero-inner">
              {section.badge && (
                <span className={`drawer-badge ${badgeClass(section.badge)}`}>
                  {section.badge}
                </span>
              )}
              <h2 className="drawer-title">{section.title}</h2>
              <p className="drawer-hero-count">{section.items.length} topics</p>
            </div>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close drawer">✕</button>
        </div>

        {/* ── Section stats bar ── */}
        <div className="drawer-stats-bar" style={{ "--dsb-accent": theme.accent }}>
          <div className="drawer-stat">
            <span className="drawer-stat-num">{section.items.length}</span>
            <span className="drawer-stat-label">Topics</span>
          </div>
          <div className="drawer-stat-divider" />
          <div className="drawer-stat">
            <span className="drawer-stat-num" style={{ color: theme.accent }}>●</span>
            <span className="drawer-stat-label">{section.badge || "Section"}</span>
          </div>
          <div className="drawer-stat-divider" />
          <div className="drawer-stat">
            <span className="drawer-stat-num">↓</span>
            <span className="drawer-stat-label">Deep Dive</span>
          </div>
        </div>

        {/* ── Scrollable content ── */}
        <div className="drawer-content" ref={scrollRef}>
          {activeTopic ? (
            <TopicDetailView
              topic={activeTopic}
              sectionBadge={section.badge}
              topicContent={topicContent}
              onBack={() => setActiveTopic(null)}
            />
          ) : (
            <>
              {/* Overview */}
              <div className="drawer-overview">
                <div className="drawer-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(overviewText) }} />
              </div>

              {/* Visual separator */}
              <div className="drawer-section-divider">
                <span style={{ background: theme.gradient }} className="drawer-divider-pill">
                  Explore Topics
                </span>
              </div>

              {/* Topic grid */}
              <TopicPillGrid
                items={section.items}
                activeTopic={activeTopic}
                onSelect={setActiveTopic}
                badge={section.badge}
              />
            </>
          )}
        </div>

        <div className="drawer-footer">
          <span className="drawer-ai-label">✦ Supply Chain Roadmap</span>
          <button className="drawer-close-btn" onClick={activeTopic ? () => setActiveTopic(null) : onClose}>
            {activeTopic ? "← All Topics" : "← Roadmap"}
          </button>
        </div>
      </aside>
    </>
  );
}

// ── Section Card ──────────────────────────────────────────────
function RoadmapSection({ section, index, onOpen }) {
  const theme = getTheme(section.badge);
  const bannerSrc = SECTION_IMAGES[index] || SECTION_IMAGES[0];

  return (
    <div
      className={`section-card ${theme.cardTheme}`}
      style={{ "--card-accent": theme.accent }}
      onClick={() => onOpen(section, index)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onOpen(section, index)}
    >
      {/* Banner */}
      <div className="section-card-banner">
        <img src={bannerSrc} alt="" loading="lazy" />
        <div className="section-card-banner-overlay" style={{ background: theme.heroOverlay }} />
        <div className="section-card-banner-num">{String(index + 1).padStart(2, '0')}</div>
      </div>

      <div className="section-header">
        {section.badge && (
          <div className="section-badge-wrap">
            <span className={badgeClass(section.badge)}>{section.badge}</span>
          </div>
        )}
        <h2 className="section-title">{section.title}</h2>
      </div>

      {/* Topic preview pills */}
      <div className="section-topics-preview">
        {section.items.slice(0, 4).map((item, i) => (
          <span key={i} className="section-topic-chip">
            <span className="section-topic-chip-icon" dangerouslySetInnerHTML={{ __html: getTopicIcon(item) }} />
            {item.length > 28 ? item.slice(0, 28) + '…' : item}
          </span>
        ))}
        {section.items.length > 4 && (
          <span className="section-topic-chip section-topic-chip--more">
            +{section.items.length - 4} more
          </span>
        )}
      </div>

      <div className="section-cta" style={{ color: theme.accent }}>
        Explore {section.items.length} topics →
      </div>
    </div>
  );
}

// ── Progress indicator ────────────────────────────────────────
function RoadmapProgress({ total }) {
  const stages = [
    { label: "Foundations", color: "#b45309" },
    { label: "Planning", color: "#1d4ed8" },
    { label: "Forecasting", color: "#6d28d9" },
    { label: "Systems", color: "#15803d" },
    { label: "Modern SC", color: "#0e7490" },
  ];
  return (
    <div className="roadmap-progress-bar">
      {stages.map((s, i) => (
        <React.Fragment key={i}>
          <div className="rp-step">
            <div className="rp-dot" style={{ background: s.color }} />
            <span className="rp-label">{s.label}</span>
          </div>
          {i < stages.length - 1 && <div className="rp-line" />}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
function App() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const filtered = roadmapData.map(section => {
    if (!query.trim()) return section;
    const q = query.toLowerCase();
    const matchedItems = section.items.filter(item => item.toLowerCase().includes(q));
    if (
      section.title.toLowerCase().includes(q) ||
      (section.badge && section.badge.toLowerCase().includes(q))
    ) return section;
    if (matchedItems.length === 0) return null;
    return { ...section, items: matchedItems };
  }).filter(Boolean);

  function handleOpen(section, index) {
    setActiveSection(section);
    setActiveSectionIndex(index);
  }

  return (
    <>
      <div className="meta">
        <p>
          Covers foundations → planning → forecasting → replenishment → systems → analytics → modern SC → industry.
          <br />
          <span className="meta-hint">Click any section to explore. Click a topic card for a visual deep-dive.</span>
        </p>
      </div>

      {/* Progress tracker */}
      <RoadmapProgress total={roadmapData.length} />

      {/* Search */}
      <div className="search-wrap">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search topics — e.g. ARIMA, S&OP, EOQ, safety stock, digital twin…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery("")}>✕</button>
        )}
      </div>

      {/* Grid */}
      <div className="roadmap">
        {filtered.length > 0 ? (
          filtered.map((section, index) => (
            <RoadmapSection
              key={section.title}
              section={section}
              index={roadmapData.indexOf(section)}
              onOpen={handleOpen}
            />
          ))
        ) : (
          <div className="no-results">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <p>No results for <strong>"{query}"</strong></p>
            <button onClick={() => setQuery("")}>Clear search</button>
          </div>
        )}
      </div>

      {activeSection && (
        <SectionDrawer
          section={activeSection}
          sectionIndex={activeSectionIndex}
          onClose={() => setActiveSection(null)}
        />
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
