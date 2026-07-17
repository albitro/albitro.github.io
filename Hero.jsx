// Hero — name, role, intro, CTAs, plus a faux terminal "git" card.
(function () {
const { Button, Badge, Octicon, Avatar } = window.PortfolioGitHubNativeDesignSystem_34cd29;

function Hero({ onNav }) {
  return (
    <section id="top" style={{
      display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 48, alignItems: "center",
      padding: "clamp(48px, 9vw, 104px) var(--gutter) clamp(40px, 6vw, 72px)",
      maxWidth: "var(--container-max)", margin: "0 auto",
    }}>
      <div>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em",
          textTransform: "uppercase", color: "var(--accent-text)", marginBottom: 22,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--success)" }} />
          Open to ML / data engineering roles
        </span>

        <h1 style={{
          margin: "0 0 18px", fontSize: "var(--text-display)", fontWeight: 800,
          lineHeight: 1.05, letterSpacing: "-0.025em", color: "var(--text-heading)",
        }}>
          I find the signal<br />before the failure.
        </h1>

        <p style={{
          margin: "0 0 30px", maxWidth: "52ch", fontSize: 18, lineHeight: 1.6,
          color: "var(--text-muted)",
        }}>
          산업 현장의 시계열 센서 데이터를 다루는 ML 엔지니어입니다. 지난 5년간
          전기로 조업부터 항공 비행 기록까지 흩어진 신호를, 현장에서 실제로 돌아가는
          이상탐지와 예측으로 바꿔왔습니다. 수집, 저장, 피처, 서빙까지 한 묶음으로.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
          <Button variant="primary" size="large" leadingIcon="repo"
            onClick={() => onNav("projects")}>View projects</Button>
          {/* Download CV 버튼 임시 숨김 — 어떤 문서(이력서/경력기술서)를 걸지 결정 후 복원.
          <Button variant="default" size="large" leadingIcon="download">Download CV</Button> */}
        </div>

        <a href="mailto:rjh2280@gmail.com" style={{
          display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 28,
          fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", textDecoration: "none",
        }}>
          <Octicon name="mail" size={15} style={{ color: "var(--text-subtle)" }} />rjh2280@gmail.com
        </a>
      </div>

      <div style={{
        background: "var(--surface-card)", border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
          background: "var(--surface-subtle)", borderBottom: "1px solid var(--border-default)",
        }}>
          <span style={{ display: "flex", gap: 6 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} style={{ width: 11, height: 11, borderRadius: 99, background: c }} />
            ))}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginLeft: 6 }}>~/jihyeok</span>
        </div>
        <pre style={{
          margin: 0, padding: "18px 18px 22px", fontFamily: "var(--font-mono)",
          fontSize: 13, lineHeight: 1.7, color: "var(--text-body)", overflow: "auto",
          whiteSpace: "pre-wrap",
        }}>
{"$ "}whoami{"\n"}
<span style={{ color: "var(--accent-text)" }}>jihyeok</span>{" : ML engineer, industrial time-series\n"}
{"$ "}cat stack.txt{"\n"}
<span style={{ color: "var(--lang-py)" }}>python</span>{" pytorch fastapi clickhouse docker\n"}
{"$ "}git log --oneline -1{"\n"}
<span style={{ color: "var(--success)" }}>a1b9f02</span>{" feat: ship anomaly detection to the floor"}</pre>
      </div>
    </section>
  );
}
window.Hero = Hero;
})();
