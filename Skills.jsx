// Skills — most-used languages bar (live from GitHub API) + grouped tech-stack chips.
(function () {
const { LanguageBar, Card, Tag, Octicon } = window.PortfolioGitHubNativeDesignSystem_34cd29;

const GROUPS = [
  { title: "Languages", items: ["Python", "SQL"] },
  { title: "ML & data", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "CatBoost", "LightGBM"] },
  { title: "Methods", items: ["Time-series", "Anomaly detection", "Signal processing", "DTW", "FFT / envelope"] },
  { title: "Infra & serving", items: ["FastAPI", "Docker", "ClickHouse", "PostgreSQL", "OPC UA", "Ubuntu"] },
];

// 자격증 — 역할 관련도순(데이터/ML 우선). 자격번호는 개인 식별자라 노출 안 함.
const CERTS = [
  { name: "빅데이터분석기사", issuer: "한국데이터산업진흥원", date: "2024.12" },
  { name: "SQLD", issuer: "한국데이터베이스진흥센터", date: "2026.03" },
  { name: "일반기계기사", issuer: "한국산업인력공단", date: "2018.08" },
  { name: "컴퓨터활용능력 1급", issuer: "대한상공회의소", date: "2021.07" },
];

function CertRow({ name, issuer, date }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid var(--border-muted)" }}>
      <span style={{ flex: "0 0 auto", width: 26, height: 26, borderRadius: "var(--radius-full)", display: "grid", placeItems: "center", marginTop: 1, background: "var(--accent-soft)", color: "var(--accent-text)" }}>
        <Octicon name="check" size={15} />
      </span>
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)", letterSpacing: "-0.01em" }}>{name}</span>
          <span style={{ marginLeft: "auto", flex: "0 0 auto", fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums" }}>{date}</span>
        </div>
        <p style={{ margin: "3px 0 0", fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--text-subtle)", lineHeight: 1.45, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{issuer}</p>
      </div>
    </div>
  );
}

const GH_USER = "albitro";

// The portfolio site itself is excluded — its JS/CSS/HTML is the design-system
// bundle, not language work that represents the projects.
const EXCLUDE_REPOS = new Set(["introduce", "albitro.github.io"]);

// Shown until the live fetch resolves; also the fallback if the API is
// unavailable (unauthenticated GitHub allows 60 req/h per IP, or offline).
// Values mirror the real aggregate so a rate-limited visitor sees honest data.
const FALLBACK_SEGMENTS = [
  { label: "Python", value: 99, color: "var(--lang-py)" },
  { label: "Makefile", value: 1, color: "#427819" },
];

// GitHub-linguist-style colors; reuse design tokens where they exist.
const LANG_COLORS = {
  Python: "var(--lang-py)",
  Shell: "var(--lang-shell)",
  JavaScript: "var(--lang-js)",
  TypeScript: "var(--lang-ts)",
  Go: "var(--lang-go)",
  Rust: "var(--lang-rust)",
  CSS: "var(--lang-css)",
  HTML: "var(--lang-html)",
  Swift: "var(--lang-swift)",
  SQL: "#e38c00",
  C: "#555555",
  "C++": "#f34b7d",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  Java: "#b07219",
};
const OTHER_COLOR = "var(--text-subtle)";
const MAX_SEGMENTS = 5; // top-N languages; the rest collapse into "Other"

// Notebooks are Python work here — fold Jupyter bytes into Python so the bar
// isn't dominated by .ipynb-heavy repos (ai4i_pdm, phm-agent).
function normalizeLang(name) {
  return name === "Jupyter Notebook" ? "Python" : name;
}

async function fetchLanguageSegments() {
  const res = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&type=owner`);
  if (!res.ok) throw new Error(`repos ${res.status}`);
  const repos = (await res.json()).filter((r) => !r.fork && !EXCLUDE_REPOS.has(r.name));

  const byLang = {};
  const results = await Promise.all(
    repos.map((r) => fetch(r.languages_url).then((x) => (x.ok ? x.json() : {})).catch(() => ({})))
  );
  results.forEach((langs) => {
    Object.entries(langs).forEach(([name, bytes]) => {
      const key = normalizeLang(name);
      byLang[key] = (byLang[key] || 0) + bytes;
    });
  });

  const sorted = Object.entries(byLang).sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) throw new Error("no language data");

  const top = sorted.slice(0, MAX_SEGMENTS);
  const rest = sorted.slice(MAX_SEGMENTS).reduce((s, [, v]) => s + v, 0);
  const segments = top.map(([label, value]) => ({
    label, value, color: LANG_COLORS[label] || OTHER_COLOR,
  }));
  if (rest > 0) segments.push({ label: "Other", value: rest, color: OTHER_COLOR });
  return segments;
}

function Skills() {
  const [segments, setSegments] = React.useState(FALLBACK_SEGMENTS);

  React.useEffect(() => {
    let alive = true;
    fetchLanguageSegments()
      .then((segs) => { if (alive) setSegments(segs); })
      .catch(() => {}); // keep the fallback on rate-limit / offline
    return () => { alive = false; };
  }, []);

  return (
    <section id="skills" style={{ padding: "72px var(--gutter)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent-text)", margin: "0 0 10px" }}>// Stack</p>
      <h2 style={{ margin: "0 0 32px", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-heading)" }}>What I work with</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.4fr", gap: 24, alignItems: "stretch" }}>
        <Card padding={24}>
          <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 600, color: "var(--text-heading)" }}>Most-used languages</h3>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--text-muted)" }}>Across my public project repositories</p>
          <LanguageBar height={10} showLegend segments={segments} />
        </Card>

        <Card padding={24}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h3 style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-subtle)" }}>{g.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((i) => <Tag key={i} interactive>{i}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card padding="22px 24px 8px" style={{ marginTop: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-subtle)" }}>Certifications</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-subtle)", background: "var(--surface-subtle)", border: "1px solid var(--border-muted)", borderRadius: "var(--radius-pill)", padding: "1px 8px" }}>{CERTS.length}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}>
          {CERTS.map((c) => <CertRow key={c.name} {...c} />)}
        </div>
      </Card>
    </section>
  );
}
window.Skills = Skills;
})();
