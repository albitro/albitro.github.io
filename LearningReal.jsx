// LearningReal — Learning 섹션의 실제 데이터 버전.
// 더미 NOTES를 albitro/study 레포의 실제 하위 폴더로 교체한다.
// 기존 Learning.jsx는 건드리지 않고 새 전역(window.LearningReal)으로 노출한다.
// (google_study_jam은 내용이 거의 없어 제외 — 사용자 결정 2026-07-16)
(function () {
const { RepoCard, Tag } = window.PortfolioGitHubNativeDesignSystem_34cd29;

// study 하위 폴더 링크 헬퍼
const tree = (folder) => `https://github.com/albitro/study/tree/main/${folder}`;

// 실제로 공부 중인 영역 — 아래 카드들의 도메인과 일치.
const TOPICS = [
  "Data structures", "Algorithms", "NLP / text mining",
  "LLM / RAG", "Computer vision", "Signal processing / PHM",
];

// albitro/study 하위 폴더. 단일 repo라 stars/forks는 의미 없어 생략(footer는 언어만 표시).
// name은 "study/<folder>"로 두어 폴더임을 정직하게 드러냄.
const NOTES = [
  {
    name: "study/data_structure", href: tree("data_structure"),
    description: "자료구조와 알고리즘을 밑바닥부터 직접 구현하며 정리. 리스트, 스택, 큐, 힙, 트리, 그래프, 재귀까지.",
    language: "Python", languageColor: "var(--lang-py)",
    topics: ["data-structures", "algorithms"], badge: "Notes",
  },
  {
    name: "study/text_mining", href: tree("text_mining"),
    description: "NLP 기초 노트. n-gram 언어모델과 텍스트 분류를 직접 구현하며 정리했다.",
    language: "Python", languageColor: "var(--lang-py)",
    topics: ["nlp", "text-classification"], badge: "Notes",
  },
  {
    name: "study/llm_phm", href: tree("llm_phm"),
    description: "로컬 LLM(Qwen2.5-3B, RTX 4060 8GB) 고장진단 스터디. KAIST 베어링 데이터를 FFT에서 RAG를 거쳐 진단보고서까지 잇는 1턴 파이프라인. (Projects의 phm-agent 에이전트로 확장)",
    language: "Python", languageColor: "var(--lang-py)",
    topics: ["llm", "rag", "phm"], badge: "Study",
  },
  {
    name: "study/drone_segmentation", href: tree("drone_segmentation"),
    description: "드론 항공영상 시맨틱 세그멘테이션 모델 비교(SegFormer-B0/B2 vs UPerNet). 같은 데이터와 설정에서 구조 차이가 클래스별 IoU와 추론 속도에 어떻게 드러나는지 확인했다.",
    language: "Python", languageColor: "var(--lang-py)",
    topics: ["segmentation", "transformers"], badge: "Study",
  },
  {
    name: "study/cwru_phm", href: tree("cwru_phm"),
    description: "CWRU 베어링 진동 신호처리 학습. 결함주파수 공식을 공식 스펙과 교차검증하고 10개 .mat 파일에 적용했다. (API 서빙편은 Projects의 cwru-phm-api로 분리)",
    language: "Python", languageColor: "var(--lang-py)",
    topics: ["phm", "signal-processing"], badge: "Study",
  },
];

function LearningReal() {
  return (
    <section id="learning" style={{ padding: "72px var(--gutter)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
        <div>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent-text)", margin: "0 0 10px" }}>// Learning</p>
          <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-heading)" }}>Studying in the open</h2>
        </div>
      </div>

      <p style={{ margin: "0 0 22px", maxWidth: "60ch", fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)" }}>
        Filling in CS fundamentals while I build. Notes and implementations live in the open, not just in my head.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
        {TOPICS.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: 16 }}>
        {NOTES.map((r) => <RepoCard key={r.name} owner="albitro" badge={r.badge || "Notes"} {...r} />)}
      </div>
    </section>
  );
}
window.LearningReal = LearningReal;
})();
