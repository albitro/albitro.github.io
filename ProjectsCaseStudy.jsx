// ProjectsCaseStudy — Projects 섹션의 "케이스 스터디" 버전.
// 각 프로젝트를 문제(PROBLEM) → 데이터·방법(DATA·METHOD) → 결과·인사이트(RESULT) 3단으로 보여준다.
// 기존 Projects.jsx는 건드리지 않고 새 전역(window.ProjectsCaseStudy)으로 노출한다.
(function () {
const { Card, Octicon, Badge, Tag, StatItem } = window.PortfolioGitHubNativeDesignSystem_34cd29;

// 🟡 = 아직 push 안 된 repo(초안). repo가 라이브되면 badge를 "Pinned"로, href를 실제 링크로 교체.
// ⚠️ result의 정량 수치 중 [TODO]는 사용자가 실제 값으로 채워야 함(허구 수치 금지).
const PROJECTS = [
  {
    name: "sensor-stream-pipeline",
    href: "https://github.com/albitro/sensor-stream-pipeline",
    domain: "Data pipeline",
    language: "Python", languageColor: "var(--lang-py)",
    stars: 0, forks: 0, badge: "Pinned",
    topics: ["kafka", "clickhouse", "anomaly-detection"],
    problem: "설비 이상은 보통 누군가 지표를 뒤늦게 열어봤을 때 드러난다. 값이 들어오는 순간에 잡으려면, 수집에서 탐지까지 끊기지 않고 흐르는 경로가 먼저 있어야 했다.",
    method: "Kafka로 받은 센서 스트림을 ClickHouse에 쌓고 Grafana로 본다. 탐지기는 규칙, Z-score, Isolation Forest, Autoencoder 네 가지를 같은 인터페이스 뒤에 두고 환경변수 하나로 갈아끼우게 했고, 스키마는 Avro와 Schema Registry로 고정했다.",
    result: "docker-compose 한 번이면 11개 서비스가 그대로 뜨고, 테스트 39개가 이 경로를 지켜준다. 만들면서 분명해진 건 이상탐지의 출발점이 모델이 아니라 '정상이 뭔지' 정하는 일이라는 것이었다. 그래서 정상 데이터만 학습시키는 쪽으로 오탐을 다뤘다.",
  },
  {
    name: "cwru-phm-api",
    href: "https://github.com/albitro/cwru-phm-api",
    domain: "PHM / 진단",
    language: "Python", languageColor: "var(--lang-py)",
    stars: 0, forks: 0, badge: "Pinned",
    topics: ["fastapi", "phm", "signal-processing"],
    problem: "베어링 진동만 보고 결함 종류를 가려내는 건 어렵지 않다. 정작 현장이 요구하는 건 '왜 그렇게 판단했는지'까지 함께 돌려주는 일이었다.",
    method: "CWRU 진동 신호에서 FFT와 포락선 기반 특징 14개를 뽑아 RandomForest로 분류하고 FastAPI로 서빙한다. 응답에는 결함 종류뿐 아니라 근거가 된 주파수(BPFO, SNR)를 같이 실었고, 모델과 예제를 함께 커밋해 데이터나 학습 없이 바로 띄울 수 있게 했다.",
    result: "정상, 내륜, 외륜, 볼 4클래스에서 5-fold 교차검증 평균 95.7%(표준편차 2.7%p), hold-out 95.2%. 숫자보다, 결과에 '왜'가 붙어야 비로소 현장에서 신뢰가 생긴다는 걸 확인한 프로젝트였다.",
  },
  {
    name: "ai4i_pdm",
    href: "https://github.com/albitro/ai4i_pdm",
    domain: "PHM / 진단",
    language: "Python", languageColor: "var(--lang-py)",
    stars: 0, forks: 0, badge: "In progress",
    topics: ["predictive-maintenance", "physics-features", "eda"],
    problem: "예지보전 예제는 대개 센서값을 그대로 모델에 넣고 '정확도 99%'로 끝난다. 정작 현장이 궁금한 건 점수가 아니라 '이 설비가 왜 고장 나는가'였다.",
    method: "EDA에서 데이터 누수를 걸러내고, 통계적 이상치와 물리적으로 정상인 값을 구분했다. 그다음 센서값을 해석 가능한 물리량(동력, 온도차, 누적응력)으로 바꾸고, 그 피처를 데이터가 아니라 부호 불변식과 손계산 단위 테스트로 검증했다(데이터로 기준을 세우면 순환이라 피함).",
    result: "파생 물리 피처가 원래 센서보다 정상과 고장을 훨씬 뚜렷하게 갈랐다. 지금은 각 고장유형이 어떤 물리 조건에서 생기는지 가설검정으로 규명하는 중이고(Phase 3), 예측 모델은 그다음 단계다. 점수보다 '왜'를 설명하는 데 초점을 둔 프로젝트.",
  },
  {
    name: "phm-agent",
    href: "https://github.com/albitro/phm-agent",
    domain: "LLM agent",
    language: "Python", languageColor: "var(--lang-py)",
    stars: 0, forks: 0, badge: "Pinned",
    topics: ["langgraph", "qwen", "llm-agent"],
    problem: "이상 신호를 던지면 스스로 진단하고 그 근거를 문장으로 설명하는 에이전트다. 사람이 하던 1차 판독을 LLM에 맡길 수 있을지 시험했다.",
    method: "Qwen2.5-7B(INT4)를 LangGraph 멀티스텝으로 라우팅하고, FastAPI, Streamlit, Docker Compose(GPU)로 묶어 배포했다. 테스트는 LLM 호출 없이 fake fixture로 로직만 검증한다.",
    result: "정작 승부는 이상탐지 쪽이었다. 운전 조건이 바뀌며 PR-AUC가 0.07까지 주저앉았는데, 윈도우마다 자체 통계로 정규화하자 0.91로 올라왔다. 모델 구조보다 데이터를 어떻게 보여주느냐가 결정적이었고, LLM 라우팅도 그것만으론 흔들려 결정론 정책으로 재현성을 잡았다.",
  },
];

const FILTERS = ["All", "Data pipeline", "PHM / 진단", "LLM agent"];

// 3단 서사 한 블록 (label + 본문). RESULT는 emphasize로 살짝 강조.
function Beat({ label, children, emphasize }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)",
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: emphasize ? "var(--accent-text)" : "var(--text-subtle)", marginBottom: 4,
      }}>{label}</div>
      <p style={{
        margin: 0, fontSize: "var(--text-xs)", lineHeight: "var(--lh-normal)",
        color: emphasize ? "var(--text-body)" : "var(--text-muted)",
        fontWeight: emphasize ? "var(--fw-medium)" : "var(--fw-regular)",
      }}>{children}</p>
    </div>
  );
}

function ProjectCard({ name, owner = "albitro", href = "#", badge = "Public", language, languageColor, stars, forks, topics = [], problem, method, result }) {
  return (
    <Card interactive padding={18} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* 헤더: repo 아이콘 + owner/name + badge (기존 RepoCard와 동일한 GitHub-native chrome) */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <Octicon name="repo" size={16} style={{ color: "var(--text-subtle)" }} />
        <a href={href} style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-link)", textDecoration: "none" }}>
          <span style={{ fontWeight: "var(--fw-regular)" }}>{owner}/</span>{name}
        </a>
        {badge && <Badge tone={(badge === "Soon" || badge === "In progress") ? "attention" : "neutral"} style={{ marginLeft: "auto" }}>{badge}</Badge>}
      </div>

      {/* 3단 서사 */}
      <Beat label="Problem">{problem}</Beat>
      <Beat label="Data / Method">{method}</Beat>
      <Beat label="Result" emphasize>{result}</Beat>

      {/* 토픽 태그 */}
      {topics.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "4px 0 14px" }}>
          {topics.map((t) => <Tag key={t} interactive>{t}</Tag>)}
        </div>
      )}

      {/* 푸터: 언어 · stars · forks */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border-muted)" }}>
        {language && <StatItem dot={languageColor} label={language} />}
        {stars != null && <StatItem icon="star" label={stars} href={href} />}
        {forks != null && <StatItem icon="repo-forked" label={forks} href={href} />}
      </div>
    </Card>
  );
}

function ProjectsCaseStudy() {
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.domain === filter);
  return (
    <section id="projects" style={{ padding: "72px var(--gutter)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent-text)", margin: "0 0 10px" }}>// Pinned</p>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-heading)" }}>Selected projects</h2>
        </div>
      </div>

      {/* 도메인 필터 */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 14px", borderRadius: "var(--radius-pill)", cursor: "pointer",
            fontFamily: "var(--font-mono)", fontSize: 13,
            border: "1px solid", borderColor: filter === f ? "transparent" : "var(--border-default)",
            background: filter === f ? "var(--surface-emphasis)" : "var(--surface-card)",
            color: filter === f ? "var(--text-on-emphasis)" : "var(--text-muted)",
            transition: "all var(--dur-fast)",
          }}>{f}</button>
        ))}
      </div>

      {/* 2열 그리드 (서사가 길어 카드 폭을 넓힘) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 16 }}>
        {shown.map((p) => <ProjectCard key={p.name} {...p} />)}
      </div>
    </section>
  );
}

window.ProjectsCaseStudy = ProjectsCaseStudy;
})();
