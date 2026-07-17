// About — bio column + a real repo snapshot (replaces the old dummy contribution heatmap).
(function () {
const { Card, Octicon, Avatar, Badge, StatItem } = window.PortfolioGitHubNativeDesignSystem_34cd29;

// 실제 레포만 노출. live=true 는 공개된 것(클릭 가능), false 는 아직 push 전(링크 없음, Soon).
const REPOS = [
  { name: "sensor-stream-pipeline", href: "https://github.com/albitro/sensor-stream-pipeline", live: true,
    desc: "Kafka에서 ClickHouse까지 잇는 실시간 이상탐지 파이프라인", lang: "Python", langColor: "var(--lang-py)" },
  { name: "cwru-phm-api", href: "https://github.com/albitro/cwru-phm-api", live: true,
    desc: "베어링 진동을 받아 결함을 진단하는 FastAPI 서비스", lang: "Python", langColor: "var(--lang-py)" },
  { name: "ai4i_pdm", href: "https://github.com/albitro/ai4i_pdm", live: true,
    desc: "AI4I 2020 예지보전 데이터의 물리 기반 분석과 피처 엔지니어링", lang: "Python", langColor: "var(--lang-py)" },
  { name: "phm-agent", href: "https://github.com/albitro/phm-agent", live: true,
    desc: "설비 진단을 돕는 LLM 에이전트", lang: "Python", langColor: "var(--lang-py)" },
];

function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
      textTransform: "uppercase", color: "var(--text-subtle)", ...style,
    }}>{children}</div>
  );
}

function RepoRow({ name, href, desc, lang, langColor, live }) {
  const inner = (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Octicon name="repo" size={15} style={{ color: "var(--text-subtle)" }} />
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: live ? "var(--text-link)" : "var(--text-muted)" }}>
          <span style={{ fontWeight: "var(--fw-regular)", color: "var(--text-subtle)" }}>albitro/</span>{name}
        </span>
        {!live && <Badge tone="attention" style={{ marginLeft: "auto" }}>Soon</Badge>}
      </div>
      <p style={{ margin: "4px 0 0 23px", fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: "var(--lh-normal)" }}>{desc}</p>
      <div style={{ margin: "6px 0 0 23px" }}><StatItem dot={langColor} label={lang} /></div>
    </React.Fragment>
  );
  const box = { display: "block", padding: "11px 0", borderTop: "1px solid var(--border-muted)", textDecoration: "none" };
  return live
    ? <a href={href} target="_blank" rel="noreferrer" style={box}>{inner}</a>
    : <div style={{ ...box, cursor: "default" }}>{inner}</div>;
}

function About() {
  const live = REPOS.filter((r) => r.live);
  const soon = REPOS.filter((r) => !r.live);
  return (
    <section id="about" style={{ background: "var(--surface-subtle)", borderTop: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px var(--gutter)", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent-text)", margin: "0 0 10px" }}>// About</p>
          <h2 style={{ margin: "0 0 22px", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-heading)" }}>About me</h2>
          <p style={{ margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: "var(--text-body)" }}>
            전공은 기계공학인데, 일하다 보니 데이터랑 모델 쪽이 더 재밌어서 ML
            엔지니어가 됐습니다. 5년 동안 일한 산업 도메인은 계속 바뀌었지만 하는
            일은 비슷했어요. 시계열 데이터에서 정상과 비정상을 가르고, 그게 현장에서
            실제로 돌아가게 만드는 일이요.
          </p>
          <p style={{ margin: "0 0 26px", fontSize: 17, lineHeight: 1.65, color: "var(--text-muted)" }}>
            모르는 게 나오면 일단 직접 해봐야 직성이 풀리는 편입니다. 회사에서 쓴
            이상탐지 모델도 논문을 다시 읽어가며 코드를 뜯어고쳤고, 궁금한 모델은
            따로 공개 데이터로 처음부터 구현해 봤어요. 부족한 기초는 야간 대학원이랑
            PHM 강좌로 메우는 중이고, 새로 공부한 건 노트로 정리해서 깃허브에 올려둡니다.
          </p>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14, color: "var(--text-muted)" }}><Octicon name="location" style={{ color: "var(--text-subtle)" }} />Seoul, KR</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14, color: "var(--text-muted)" }}><Octicon name="organization" style={{ color: "var(--text-subtle)" }} />고려대 SW/AI 대학원 빅데이터융합학과(특수대학원 석사과정)</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 14, color: "var(--text-muted)" }}><Octicon name="link" style={{ color: "var(--text-subtle)" }} />github.com/albitro</span>
          </div>
        </div>

        <Card padding={22}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <Avatar initials="JH" size={44} />
            <div>
              <div style={{ fontWeight: 600, color: "var(--text-heading)" }}>albitro</div>
              <a href="https://github.com/albitro" target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "var(--text-link)", textDecoration: "none" }}>github.com/albitro</a>
            </div>
          </div>

          <SectionLabel>Pinned</SectionLabel>
          {live.map((r) => <RepoRow key={r.name} {...r} />)}

          {soon.length > 0 && (
            <React.Fragment>
              <SectionLabel style={{ marginTop: 16 }}>In progress</SectionLabel>
              {soon.map((r) => <RepoRow key={r.name} {...r} />)}
            </React.Fragment>
          )}
        </Card>
      </div>
    </section>
  );
}
window.About = About;
})();
