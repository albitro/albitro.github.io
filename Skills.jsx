// Skills — most-used languages bar + grouped tech-stack chips.
(function () {
const { LanguageBar, Card, Tag } = window.PortfolioGitHubNativeDesignSystem_34cd29;

const GROUPS = [
  { title: "Languages", items: ["Python", "SQL"] },
  { title: "ML & data", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "CatBoost", "LightGBM"] },
  { title: "Methods", items: ["Time-series", "Anomaly detection", "Signal processing", "DTW", "FFT / envelope"] },
  { title: "Infra & serving", items: ["FastAPI", "Docker", "ClickHouse", "PostgreSQL", "OPC UA", "Ubuntu"] },
];

function Skills() {
  return (
    <section id="skills" style={{ padding: "72px var(--gutter)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent-text)", margin: "0 0 10px" }}>// Stack</p>
      <h2 style={{ margin: "0 0 32px", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-heading)" }}>What I work with</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.4fr", gap: 24, alignItems: "stretch" }}>
        <Card padding={24}>
          <h3 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 600, color: "var(--text-heading)" }}>Most-used languages</h3>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--text-muted)" }}>Across all public repositories</p>
          <LanguageBar
            height={10}
            showLegend
            segments={[
              { label: "Python", value: 90, color: "var(--lang-py)" },
              { label: "Shell", value: 10, color: "var(--lang-shell)" },
            ]}
          />
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
    </section>
  );
}
window.Skills = Skills;
})();
