// Footer — quiet, mono: copyright + contact links on the left, built-with note on the right.
function Footer() {
  const linkStyle = { color: "var(--text-muted)", textDecoration: "none" };
  return (
    <footer style={{ borderTop: "1px solid var(--border-default)", background: "var(--surface-subtle)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "28px var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>
          <span>© 2026 Jihyeok Ryu</span>
          <span style={{ color: "var(--text-subtle)" }}>·</span>
          <a href="https://github.com/albitro" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a>
          <span style={{ color: "var(--text-subtle)" }}>·</span>
          <a href="mailto:rjh2280@gmail.com" style={linkStyle}>Email</a>
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-subtle)" }}>
          Built with <span style={{ color: "var(--text-link)" }}>Claude Design</span>
        </span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
