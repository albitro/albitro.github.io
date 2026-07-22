// Bookshelf (Reading) — 읽은 논문 리뷰를 책등 선반 + 논문 카드로 보여준다.
// 데이터는 reviews/ 폴더의 실제 리뷰와 1:1. 새 리뷰를 쓰면 REVIEWS 배열에 한 줄 추가.
// 카드/책등 색 = 분야(field). 노트 링크는 GitHub의 해당 리뷰 폴더(README 렌더).
// bookshelf-preview.html 프로토타입을 실사이트 토큰으로 옮긴 것. (window.Bookshelf)
(function () {

// 분야 → 색 토큰. 새 분야가 생기면 여기에 추가.
const FIELD_COLOR = {
  "XAI · PdM":          "var(--purple)",
  "Anomaly detection":  "var(--accent)",
  "Time-series":        "var(--blue)",
  "PHM / signal":       "var(--purple)",
  "Vision":             "var(--green)",
  "LLM agent":          "var(--yellow)",
  "RAG":                "var(--cyan)",
};

const GH = "https://github.com/albitro/albitro.github.io/tree/main/reviews";

// 실제 리뷰만. 지금은 Matzka 1편. (reviews/xai-predictive-maintenance)
const REVIEWS = [
  {
    slug: "xai-predictive-maintenance",
    field: "XAI · PdM",
    venue: "IEEE AI4I · 2020",
    year: "'20",
    spine: "XAI for PdM",
    title: "Explainable AI for Predictive Maintenance Applications",
    authors: "S. Matzka",
    takeaway: (
      <>정답 원인을 규칙으로 심은 <b>합성 데이터셋을 만들면 설명의 품질을 사람이 채점할 수 있다</b>는
        발상. 작은 결정트리 vs 정규화 편차 두 설명 방식을 정면 비교한, ai4i_pdm의 XAI 평가 설계 출발점.</>
    ),
    tags: ["xai", "predictive-maintenance", "dataset"],
    paper: "https://doi.org/10.1109/AI4I49448.2020.00023",
    paperLabel: "IEEE",
    read: "읽음 2026-07",
    height: 184, width: 52,
  },
];

const CSS = `
.bs-shelfwrap{margin:30px 0 48px;}
.bs-shelf{display:flex;align-items:flex-end;gap:12px;padding:0 8px;min-height:196px;
  overflow-x:auto;scrollbar-width:thin;}
.bs-shelf::-webkit-scrollbar{height:6px;}
.bs-shelf::-webkit-scrollbar-thumb{background:var(--border-strong);border-radius:9999px;}
.bs-spine{position:relative;flex:0 0 auto;border-radius:var(--radius-sm) var(--radius-sm) 2px 2px;
  color:#fff;cursor:pointer;box-shadow:var(--shadow-spine);text-decoration:none;
  padding:14px 0 12px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;
  background:linear-gradient(180deg,color-mix(in srgb,var(--c) 88%,#fff 12%),var(--c));
  transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base);}
.bs-spine::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;
  border-radius:var(--radius-sm) 0 0 2px;background:color-mix(in srgb,var(--c) 55%,#000 22%);}
.bs-spine:hover{transform:translateY(-10px);box-shadow:var(--shadow-md);}
.bs-spine .bs-stitle{writing-mode:vertical-rl;text-orientation:mixed;font-weight:700;font-size:13px;
  letter-spacing:.01em;text-shadow:0 1px 2px rgba(0,0,0,.28);max-height:120px;overflow:hidden;}
.bs-spine .bs-syear{font-family:var(--font-mono);font-size:10px;font-weight:600;opacity:.9;letter-spacing:.02em;}
.bs-board{height:8px;border-radius:2px;background:var(--shelf-board);
  border:1px solid var(--shelf-edge);box-shadow:var(--shadow-sm);margin-top:-1px;}
.bs-shelfnote{font-family:var(--font-mono);font-size:11px;color:var(--text-subtle);margin:12px 2px 0;}

.bs-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:4px;}
.bs-chip{font-size:12px;color:var(--text-muted);background:var(--surface-subtle);
  border:1px solid var(--border-muted);border-radius:var(--radius-pill);padding:4px 11px;
  display:inline-flex;align-items:center;gap:6px;}
.bs-chip .bs-dot{width:8px;height:8px;border-radius:50%;flex:0 0 auto;}

.bs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(342px,1fr));gap:16px;}
.bs-paper{position:relative;display:flex;flex-direction:column;height:100%;
  background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-md);
  box-shadow:var(--shadow-sm);padding:16px 16px 14px 19px;overflow:hidden;
  transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base),border-color var(--dur-base);}
.bs-paper::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--c);}
.bs-paper:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--border-strong);}
.bs-row1{display:flex;align-items:center;gap:8px;margin-bottom:9px;}
.bs-field{font-family:var(--font-mono);font-size:10.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;
  color:var(--c);background:color-mix(in srgb,var(--c) 12%,transparent);
  border:1px solid color-mix(in srgb,var(--c) 32%,transparent);border-radius:var(--radius-pill);padding:2px 9px;}
.bs-venue{margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--text-subtle);
  font-variant-numeric:tabular-nums;}
.bs-paper h3{margin:0 0 5px;font-size:15px;font-weight:600;line-height:1.35;letter-spacing:-.01em;}
.bs-paper h3 a{color:var(--text-link);text-decoration:none;}
.bs-paper h3 a:hover{text-decoration:underline;}
.bs-authors{margin:0 0 11px;font-family:var(--font-mono);font-size:11.5px;color:var(--text-subtle);line-height:1.4;}
.bs-takeaway{margin:0 0 13px;font-size:13px;line-height:1.6;color:var(--text-muted);}
.bs-takeaway b{color:var(--text-body);font-weight:600;}
.bs-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;}
.bs-t{font-size:11px;color:var(--text-link);background:var(--surface-subtle);border:1px solid var(--border-muted);
  border-radius:var(--radius-pill);padding:2px 9px;}
.bs-foot{display:flex;align-items:center;gap:14px;margin-top:auto;padding-top:11px;
  border-top:1px solid var(--border-muted);}
.bs-foot a,.bs-foot span{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--text-muted);
  text-decoration:none;font-variant-numeric:tabular-nums;transition:color var(--dur-base);}
.bs-foot a:hover{color:var(--text-link);}
.bs-foot .bs-note{margin-left:auto;color:var(--text-link);font-weight:500;}
.bs-foot svg{width:14px;height:14px;fill:currentColor;}
@media (prefers-reduced-motion:reduce){.bs-spine,.bs-paper{transition:none!important;}}
@media (max-width:520px){#reading{padding-left:16px;padding-right:16px;}}
`;

const LinkIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0Z"/></svg>
);

function Bookshelf() {
  const eyebrow = { fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent-text)", margin: "0 0 10px" };
  // 실제로 존재하는 분야만 범례로 (책이 없는 분야는 표시 안 함 — 정직)
  const fields = REVIEWS.reduce((acc, r) => (acc.includes(r.field) ? acc : acc.concat(r.field)), []);

  return (
    <section id="reading" style={{ padding: "72px var(--gutter)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
      <style>{CSS}</style>

      <p style={eyebrow}>// Reading</p>
      <h2 style={{ margin: 0, fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-heading)" }}>On the shelf</h2>
      <p style={{ margin: "14px 0 22px", maxWidth: "62ch", fontSize: 16, lineHeight: 1.6, color: "var(--text-muted)" }}>
        읽고 끝내지 않고, 왜 읽었고 무엇이 남았는지 정리해 둔다. 대부분 지금 짓고 있는 프로젝트에서
        막혔던 지점과 맞닿아 있다. 상세 노트는 각 카드의 <b style={{ color: "var(--text-body)", fontWeight: 600 }}>노트 →</b> 로.
      </p>

      <div className="bs-chips">
        {fields.map((f) => (
          <span key={f} className="bs-chip"><span className="bs-dot" style={{ background: FIELD_COLOR[f] || "var(--accent)" }} />{f}</span>
        ))}
      </div>

      <div className="bs-shelfwrap">
        <div className="bs-shelf" role="list" aria-label="읽은 논문 책등">
          {REVIEWS.map((r) => (
            <a key={r.slug} className="bs-spine" role="listitem" href={`${GH}/${r.slug}`}
               target="_blank" rel="noopener noreferrer"
               style={{ "--c": FIELD_COLOR[r.field] || "var(--accent)", height: r.height, width: r.width }}>
              <span className="bs-stitle">{r.spine}</span>
              <span className="bs-syear">{r.year}</span>
            </a>
          ))}
        </div>
        <div className="bs-board" />
        <p className="bs-shelfnote">책등에 커서를 올리면 한 권씩 빠져나옵니다 · 색 = 분야</p>
      </div>

      <div className="bs-grid">
        {REVIEWS.map((r) => (
          <article key={r.slug} className="bs-paper" style={{ "--c": FIELD_COLOR[r.field] || "var(--accent)" }}>
            <div className="bs-row1">
              <span className="bs-field">{r.field}</span>
              <span className="bs-venue">{r.venue}</span>
            </div>
            <h3><a href={`${GH}/${r.slug}`} target="_blank" rel="noopener noreferrer">{r.title}</a></h3>
            <p className="bs-authors">{r.authors}</p>
            <p className="bs-takeaway">{r.takeaway}</p>
            <div className="bs-tags">{r.tags.map((t) => <span key={t} className="bs-t">{t}</span>)}</div>
            <div className="bs-foot">
              <a href={r.paper} target="_blank" rel="noopener noreferrer"><LinkIcon />{r.paperLabel}</a>
              <span className="bs-read">{r.read}</span>
              <a className="bs-note" href={`${GH}/${r.slug}`} target="_blank" rel="noopener noreferrer">노트 →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.Bookshelf = Bookshelf;
})();
