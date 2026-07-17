// Sticky top bar — monogram lockup, section nav, theme toggle, GitHub button.
(function () {
const { Button, IconButton } = window.PortfolioGitHubNativeDesignSystem_34cd29;

function Header({ theme, onToggleTheme, active, onNav }) {
  const links = [
    { id: "projects", label: "Projects" },
    { id: "learning", label: "Learning" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      display: "flex", alignItems: "center", gap: 20,
      padding: "0 var(--gutter)", height: 64,
      background: "color-mix(in srgb, var(--surface-page) 86%, transparent)",
      backdropFilter: "saturate(180%) blur(12px)",
      WebkitBackdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--border-default)",
    }}>
      <a href="#top" onClick={(e) => { e.preventDefault(); onNav("top"); }}
         style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <img src="./assets/monogram.svg" width="30" height="30" alt="" style={{ borderRadius: 8 }} />
        <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text-heading)", letterSpacing: "-0.01em" }}>Jihyeok Ryu</span>
      </a>

      <nav style={{ display: "flex", gap: 2, marginLeft: 8 }}>
        {links.map((l) => (
          <a key={l.id} href={"#" + l.id}
             onClick={(e) => { e.preventDefault(); onNav(l.id); }}
             style={{
               padding: "6px 12px", borderRadius: "var(--radius-md)",
               fontSize: 14, fontWeight: 500, textDecoration: "none",
               color: active === l.id ? "var(--text-heading)" : "var(--text-muted)",
               background: active === l.id ? "var(--surface-subtle)" : "transparent",
               transition: "color var(--dur-fast), background var(--dur-fast)",
             }}>
            {l.label}
          </a>
        ))}
      </nav>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
        <IconButton icon={theme === "dark" ? "sun" : "moon"}
          label="Toggle theme" variant="invisible" onClick={onToggleTheme} />
        <Button as="a" href="https://github.com/albitro" target="_blank" rel="noopener noreferrer" variant="default" size="small" leadingIcon="repo">Follow</Button>
      </div>
    </header>
  );
}
window.Header = Header;
})();
