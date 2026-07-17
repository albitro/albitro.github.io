/* @ds-bundle: {"format":3,"namespace":"PortfolioGitHubNativeDesignSystem_34cd29","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Octicon","sourcePath":"components/core/Octicon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"LanguageBar","sourcePath":"components/repo/LanguageBar.jsx"},{"name":"RepoCard","sourcePath":"components/repo/RepoCard.jsx"},{"name":"StatItem","sourcePath":"components/repo/StatItem.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"94d23534c598","components/core/Badge.jsx":"8e5b6077ec03","components/core/Button.jsx":"745546f92802","components/core/Card.jsx":"fa7ac39f9fc7","components/core/IconButton.jsx":"161a8459cdd8","components/core/Input.jsx":"d67ba08085da","components/core/Octicon.jsx":"6331d9535644","components/core/Tag.jsx":"d520a74168e3","components/repo/LanguageBar.jsx":"32959640bfe1","components/repo/RepoCard.jsx":"870db175e43d","components/repo/StatItem.jsx":"002ca6bc1771","ui_kits/portfolio/About.jsx":"cd3177ac068e","ui_kits/portfolio/Contact.jsx":"78431ffca676","ui_kits/portfolio/Footer.jsx":"4fc6dba35b33","ui_kits/portfolio/Header.jsx":"36c3cc69f4f3","ui_kits/portfolio/Hero.jsx":"5aa0df1ffd11","ui_kits/portfolio/Projects.jsx":"b9cc46354bc6","ui_kits/portfolio/Skills.jsx":"de7f7b3f8977"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PortfolioGitHubNativeDesignSystem_34cd29 = window.PortfolioGitHubNativeDesignSystem_34cd29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Round avatar (GitHub uses a subtle 1px inset border on all avatars). */
function Avatar({
  src,
  alt = "",
  size = 40,
  initials,
  style,
  ...rest
}) {
  const ring = {
    width: size,
    height: size,
    borderRadius: "var(--radius-full)",
    boxShadow: "inset 0 0 0 1px rgba(31,35,40,0.12)",
    flexShrink: 0,
    objectFit: "cover",
    display: "block",
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt,
      width: size,
      height: size,
      style: ring
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": alt || undefined,
    style: {
      ...ring,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--accent)",
      color: "var(--on-accent)",
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: size * 0.4,
      letterSpacing: "-0.02em"
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GitHub "Label" — the small rounded counter/status pill. `tone` maps to a
 * functional hue; `variant="solid"` fills, default is a tinted outline.
 */
const tones = {
  neutral: {
    fg: "var(--text-muted)",
    hue: "var(--gray-400)"
  },
  accent: {
    fg: "var(--accent-text)",
    hue: "var(--accent)"
  },
  success: {
    fg: "var(--success)",
    hue: "var(--success)"
  },
  attention: {
    fg: "var(--attention)",
    hue: "var(--attention)"
  },
  danger: {
    fg: "var(--danger)",
    hue: "var(--danger)"
  },
  done: {
    fg: "var(--done)",
    hue: "var(--done)"
  }
};
function Badge({
  children,
  tone = "neutral",
  variant = "outline",
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  const solid = variant === "solid";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1,
      padding: "3px 8px",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      color: solid ? "#fff" : t.fg,
      background: solid ? t.hue : `color-mix(in srgb, ${t.hue} 12%, transparent)`,
      border: solid ? "1px solid transparent" : `1px solid color-mix(in srgb, ${t.hue} 32%, transparent)`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. GitHub "box": 1px border, 6px radius, subtle shadow.
 * `interactive` lifts + accents the border on hover (for clickable cards).
 */
function Card({
  children,
  interactive = false,
  padding = 20,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid",
      borderColor: hover ? "var(--border-strong)" : "var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Octicon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Curated subset of GitHub Octicons (MIT). 16px grid, currentColor fill.
 * Pass `name` for a built-in glyph, or pass raw <path> children for any other.
 */
const PATHS = {
  star: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z",
  "repo-forked": "M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z",
  repo: "M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z",
  "git-branch": "M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z",
  code: "m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z",
  link: "M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25Zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0Z",
  location: "M11.536 3.464a5 5 0 0 1 0 7.072L8 14.07l-3.536-3.535a5 5 0 1 1 7.072-7.072v.001Zm1.06 8.132a6.5 6.5 0 1 0-9.192 0l3.535 3.536a1.5 1.5 0 0 0 2.122 0l3.535-3.536ZM8 9a2 2 0 1 0-.001-4.001A2 2 0 0 0 8 9Z",
  mail: "M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88l6.5-3.81Z",
  organization: "M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75Zm0-3A.75.75 0 0 1 7.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 3.75Zm-4 6A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z",
  moon: "M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z",
  sun: "M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm-4.546-1.464a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0Zm9.192 0 1.06 1.06a.75.75 0 1 1-1.06 1.061l-1.06-1.06a.75.75 0 0 1 1.06-1.061Z",
  download: "M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Zm5.78-4.97L11.53 6.03a.75.75 0 0 0-1.06-1.06L8.75 6.69V1.75a.75.75 0 0 0-1.5 0v4.94L5.53 4.97a.75.75 0 0 0-1.06 1.06l2.999 3a.75.75 0 0 0 1.061 0Z",
  "arrow-right": "M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z",
  check: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L1.72 8.78a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
};
function Octicon({
  name,
  size = 16,
  label,
  style,
  className,
  children,
  ...rest
}) {
  const a11y = label ? {
    role: "img",
    "aria-label": label
  } : {
    "aria-hidden": true
  };
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: "currentColor",
    className: className,
    style: {
      display: "inline-block",
      verticalAlign: "text-bottom",
      flexShrink: 0,
      ...style
    }
  }, a11y, rest), children || (PATHS[name] ? /*#__PURE__*/React.createElement("path", {
    d: PATHS[name]
  }) : null));
}
Octicon.names = Object.keys(PATHS);
Object.assign(__ds_scope, { Octicon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Octicon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  small: {
    fontSize: 12,
    padding: "3px 12px",
    height: 28,
    gap: 6
  },
  medium: {
    fontSize: 14,
    padding: "5px 16px",
    height: 32,
    gap: 8
  },
  large: {
    fontSize: 16,
    padding: "9px 20px",
    height: 44,
    gap: 8
  }
};
const variants = {
  primary: {
    color: "var(--on-accent)",
    background: "var(--accent)",
    border: "1px solid color-mix(in srgb, var(--accent) 80%, #000 8%)",
    boxShadow: "var(--shadow-xs)",
    "--hover-bg": "var(--accent-hover)"
  },
  default: {
    color: "var(--text-body)",
    background: "var(--surface-subtle)",
    border: "1px solid var(--border-default)",
    boxShadow: "var(--shadow-xs)",
    "--hover-bg": "var(--surface-inset)"
  },
  outline: {
    color: "var(--accent-text)",
    background: "transparent",
    border: "1px solid var(--border-default)",
    boxShadow: "none",
    "--hover-bg": "var(--accent-soft)"
  },
  invisible: {
    color: "var(--text-link)",
    background: "transparent",
    border: "1px solid transparent",
    boxShadow: "none",
    "--hover-bg": "var(--surface-subtle)"
  },
  danger: {
    color: "#fff",
    background: "var(--danger)",
    border: "1px solid color-mix(in srgb, var(--danger) 80%, #000 8%)",
    boxShadow: "var(--shadow-xs)",
    "--hover-bg": "color-mix(in srgb, var(--danger) 88%, #000 12%)"
  }
};
function Button({
  children,
  variant = "default",
  size = "medium",
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  disabled = false,
  as,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = sizes[size] || sizes.medium;
  const v = variants[variant] || variants.default;
  const Tag = as || "button";
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontSize: s.fontSize,
    fontWeight: "var(--fw-semibold)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    textDecoration: "none",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.55 : 1,
    transition: "background var(--dur-fast) var(--ease-in-out), border-color var(--dur-fast)",
    color: v.color,
    background: hover && !disabled ? v["--hover-bg"] : v.background,
    border: v.border,
    boxShadow: v.boxShadow,
    ...style
  };
  const iconSize = size === "small" ? 14 : 16;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === "button" ? "button" : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }, rest), leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Octicon, {
    name: leadingIcon,
    size: iconSize
  }), children, trailingIcon && /*#__PURE__*/React.createElement(__ds_scope.Octicon, {
    name: trailingIcon,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  small: 28,
  medium: 32,
  large: 40
};
function IconButton({
  icon,
  label,
  variant = "default",
  size = "medium",
  disabled = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = sizes[size] || sizes.medium;
  const isInvisible = variant === "invisible";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      color: "var(--text-muted)",
      background: hover && !disabled ? "var(--surface-inset)" : isInvisible ? "transparent" : "var(--surface-subtle)",
      border: isInvisible ? "1px solid transparent" : "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-in-out), color var(--dur-fast)",
      ...style
    }
  }, rest), children || /*#__PURE__*/React.createElement(__ds_scope.Octicon, {
    name: icon,
    size: size === "large" ? 18 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with GitHub's inset look + coral focus ring. */
function Input({
  leadingIcon,
  size = "medium",
  invalid = false,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === "small" ? "5px 10px" : "8px 12px";
  const fs = size === "small" ? 13 : 14;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: `0 12px`,
      background: "var(--surface-card)",
      border: "1px solid",
      borderColor: invalid ? "var(--danger)" : focus ? "var(--accent)" : "var(--border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--focus-ring)" : "inset 0 1px 0 rgba(31,35,40,0.04)",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      ...wrapStyle
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Octicon, {
    name: leadingIcon,
    size: 16,
    style: {
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      padding: pad,
      paddingLeft: leadingIcon ? 0 : undefined,
      border: "none",
      outline: "none",
      background: "transparent",
      color: "var(--text-body)",
      fontFamily: "var(--font-sans)",
      fontSize: fs,
      lineHeight: 1.4,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Repository "topic" tag — the blue-tinted rounded chip under a repo. */
function Tag({
  children,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-medium)",
      lineHeight: "18px",
      padding: "0 10px",
      height: 22,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      cursor: interactive ? "pointer" : "default",
      color: hover ? "#fff" : "var(--text-link)",
      background: hover ? "var(--text-link)" : "color-mix(in srgb, var(--text-link) 10%, transparent)",
      transition: "background var(--dur-fast), color var(--dur-fast)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/repo/LanguageBar.jsx
try { (() => {
/**
 * Stacked language proportion bar (the thin multi-color rule on GitHub repos).
 * `segments`: [{ label, value, color }]. Values need not sum to 100.
 */
function LanguageBar({
  segments = [],
  height = 8,
  showLegend = false,
  style
}) {
  const total = segments.reduce((s, x) => s + (x.value || 0), 0) || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: "var(--surface-inset)",
      gap: 2
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    title: `${s.label} ${(s.value / total * 100).toFixed(1)}%`,
    style: {
      width: `${s.value / total * 100}%`,
      background: s.color
    }
  }))), showLegend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px 16px",
      marginTop: 12
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-medium)",
      color: "var(--text-body)"
    }
  }, s.label), /*#__PURE__*/React.createElement("span", null, (s.value / total * 100).toFixed(1), "%")))));
}
Object.assign(__ds_scope, { LanguageBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/repo/LanguageBar.jsx", error: String((e && e.message) || e) }); }

// components/repo/StatItem.jsx
try { (() => {
/**
 * Repo metadata item — a language dot OR an Octicon, then a value.
 * Used in the repo card footer row (stars, forks, language).
 */
function StatItem({
  icon,
  dot,
  label,
  href,
  style
}) {
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "var(--radius-full)",
      background: dot,
      flexShrink: 0
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Octicon, {
    name: icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, label));
  const common = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: "var(--text-xs)",
    color: "var(--text-muted)",
    textDecoration: "none",
    ...style
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        ...common,
        transition: "color var(--dur-fast)"
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--text-link)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--text-muted)"
    }, inner);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: common
  }, inner);
}
Object.assign(__ds_scope, { StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/repo/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/repo/RepoCard.jsx
try { (() => {
/**
 * The pinned-repository card from a GitHub profile: repo name link, optional
 * Public/Pinned badge, description, topic tags, and a footer of
 * language + stars + forks.
 */
function RepoCard({
  name,
  owner,
  href = "#",
  description,
  badge = "Public",
  language,
  languageColor = "var(--lang-ts)",
  stars,
  forks,
  topics = [],
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: 16,
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Octicon, {
    name: "repo",
    size: 16,
    style: {
      color: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-link)",
      textDecoration: "none"
    }
  }, owner && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-regular)"
    }
  }, owner, "/"), name), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "neutral",
    style: {
      marginLeft: "auto"
    }
  }, badge)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--lh-normal)",
      color: "var(--text-muted)"
    }
  }, description), topics.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 14
    }
  }, topics.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    interactive: true
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: "auto"
    }
  }, language && /*#__PURE__*/React.createElement(__ds_scope.StatItem, {
    dot: languageColor,
    label: language
  }), stars != null && /*#__PURE__*/React.createElement(__ds_scope.StatItem, {
    icon: "star",
    label: stars,
    href: href
  }), forks != null && /*#__PURE__*/React.createElement(__ds_scope.StatItem, {
    icon: "repo-forked",
    label: forks,
    href: href
  })));
}
Object.assign(__ds_scope, { RepoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/repo/RepoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About — bio column + a GitHub-style contribution heatmap built from tokens.
(function () {
  const {
    Card,
    Octicon,
    Avatar,
    Badge
  } = window.PortfolioGitHubNativeDesignSystem_34cd29;
  function ContributionGraph() {
    // Deterministic pseudo-random levels (0–4) over ~26 weeks.
    const weeks = 26,
      days = 7;
    const cells = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let w = 0; w < weeks; w++) {
      const col = [];
      for (let d = 0; d < days; d++) {
        const r = rnd();
        col.push(r > 0.78 ? 4 : r > 0.62 ? 3 : r > 0.42 ? 2 : r > 0.2 ? 1 : 0);
      }
      cells.push(col);
    }
    const levels = ["var(--surface-inset)", "color-mix(in srgb, var(--accent) 28%, var(--surface-inset))", "color-mix(in srgb, var(--accent) 52%, transparent)", "color-mix(in srgb, var(--accent) 78%, transparent)", "var(--accent)"];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 3,
        overflow: "hidden"
      }
    }, cells.map((col, w) => /*#__PURE__*/React.createElement("div", {
      key: w,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, col.map((lvl, d) => /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        width: 12,
        height: 12,
        borderRadius: 3,
        background: levels[lvl]
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 6,
        marginTop: 10,
        fontSize: 11,
        color: "var(--text-subtle)",
        fontFamily: "var(--font-mono)"
      }
    }, "Less", levels.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 11,
        height: 11,
        borderRadius: 3,
        background: c
      }
    })), "More"));
  }
  function About() {
    return /*#__PURE__*/React.createElement("section", {
      id: "about",
      style: {
        background: "var(--surface-subtle)",
        borderTop: "1px solid var(--border-default)",
        borderBottom: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "72px var(--gutter)",
        display: "grid",
        gridTemplateColumns: "1fr 1.1fr",
        gap: 56,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        margin: "0 0 10px"
      }
    }, "// About"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 22px",
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--text-heading)"
      }
    }, "Hi, I'm Jiwoo."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 16px",
        fontSize: 17,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, "I'm a full-stack engineer based in Seoul. For the last six years I've worked on developer tooling \u2014 CLIs, build pipelines, and the small libraries that sit underneath them."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 26px",
        fontSize: 17,
        lineHeight: 1.65,
        color: "var(--text-muted)"
      }
    }, "I care about fast feedback loops, honest documentation, and shipping in the open. When I'm not writing code I'm usually reviewing it."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 22,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Octicon, {
      name: "location",
      style: {
        color: "var(--text-subtle)"
      }
    }), "Seoul, KR"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Octicon, {
      name: "organization",
      style: {
        color: "var(--text-subtle)"
      }
    }), "@vercel \xB7 @denoland"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Octicon, {
      name: "link",
      style: {
        color: "var(--text-subtle)"
      }
    }), "jiwoo.dev"))), /*#__PURE__*/React.createElement(Card, {
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: "JH",
      size: 44
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--text-heading)"
      }
    }, "jiwoohan"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "1,284 contributions this year"))), /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "12-day streak")), /*#__PURE__*/React.createElement(ContributionGraph, null))));
  }
  window.About = About;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact — CTA card with a working-looking email form + social icon buttons.
(function () {
  const {
    Card,
    Input,
    Button,
    IconButton,
    Octicon
  } = window.PortfolioGitHubNativeDesignSystem_34cd29;
  function Contact() {
    const [email, setEmail] = React.useState("");
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      id: "contact",
      style: {
        padding: "72px var(--gutter) 88px",
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "44px 44px 48px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        margin: "0 0 10px"
      }
    }, "// Contact"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 14px",
        fontSize: 30,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--text-heading)"
      }
    }, "Let's build something."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 26px",
        fontSize: 16,
        lineHeight: 1.6,
        color: "var(--text-muted)",
        maxWidth: "42ch"
      }
    }, "Open to interesting freelance work and collaborations. Drop your email and I'll get back within a day."), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--success)",
        fontWeight: 500,
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(Octicon, {
      name: "check"
    }), "Thanks \u2014 I'll be in touch.") : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        if (email) setSent(true);
      },
      style: {
        display: "flex",
        gap: 10,
        maxWidth: 420
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      leadingIcon: "mail",
      type: "email",
      placeholder: "you@company.com",
      value: email,
      onChange: e => setEmail(e.target.value)
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      type: "submit",
      trailingIcon: "arrow-right"
    }, "Send")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "GitHub"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/github-mark.svg",
      width: "16",
      height: "16",
      alt: "",
      style: {
        display: "block"
      }
    })), /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      label: "Email"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "link",
      label: "Website"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-emphasis)",
        color: "var(--text-on-emphasis)",
        padding: "44px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        lineHeight: 1.8,
        color: "var(--text-on-emphasis)",
        opacity: 0.92,
        whiteSpace: "pre-wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.55
      }
    }, "$"), " git clone\n", "   jiwoohan/", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand-300)"
      }
    }, "portfolio"), "\n", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.55
      }
    }, "$"), " cd portfolio && npm i\n", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.55
      }
    }, "$"), " npm run deploy\n", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#3fb950"
      }
    }, "\u2713"), " live at jiwoo.dev")))));
  }
  window.Contact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer — quiet, mono, with the GitHub mark and a built-with line.
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-default)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "28px var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/github-mark.svg",
    width: "16",
    height: "16",
    alt: "",
    style: {
      opacity: 0.7
    }
  }), "\xA9 2026 Jiwoo Han"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-subtle)"
    }
  }, "Built with GitHub Pages \xB7 Deployed from ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-link)"
    }
  }, "main"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
// Sticky top bar — monogram lockup, section nav, theme toggle, GitHub button.
(function () {
  const {
    Button,
    IconButton
  } = window.PortfolioGitHubNativeDesignSystem_34cd29;
  function Header({
    theme,
    onToggleTheme,
    active,
    onNav
  }) {
    const links = [{
      id: "projects",
      label: "Projects"
    }, {
      id: "about",
      label: "About"
    }, {
      id: "skills",
      label: "Skills"
    }, {
      id: "contact",
      label: "Contact"
    }];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "0 var(--gutter)",
        height: 64,
        background: "color-mix(in srgb, var(--surface-page) 86%, transparent)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      onClick: e => {
        e.preventDefault();
        onNav("top");
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/monogram.svg",
      width: "30",
      height: "30",
      alt: "",
      style: {
        borderRadius: 8
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: "var(--text-heading)",
        letterSpacing: "-0.01em"
      }
    }, "Jiwoo Han")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 2,
        marginLeft: 8
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: "#" + l.id,
      onClick: e => {
        e.preventDefault();
        onNav(l.id);
      },
      style: {
        padding: "6px 12px",
        borderRadius: "var(--radius-md)",
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none",
        color: active === l.id ? "var(--text-heading)" : "var(--text-muted)",
        background: active === l.id ? "var(--surface-subtle)" : "transparent",
        transition: "color var(--dur-fast), background var(--dur-fast)"
      }
    }, l.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: theme === "dark" ? "sun" : "moon",
      label: "Toggle theme",
      variant: "invisible",
      onClick: onToggleTheme
    }), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "#",
      variant: "default",
      size: "small",
      leadingIcon: "repo"
    }, "Follow")));
  }
  window.Header = Header;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — name, role, intro, CTAs, plus a faux terminal "git" card.
(function () {
  const {
    Button,
    Badge,
    Octicon,
    Avatar
  } = window.PortfolioGitHubNativeDesignSystem_34cd29;
  function Hero({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      style: {
        display: "grid",
        gridTemplateColumns: "1.25fr 1fr",
        gap: 48,
        alignItems: "center",
        padding: "clamp(48px, 9vw, 104px) var(--gutter) clamp(40px, 6vw, 72px)",
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 99,
        background: "var(--success)"
      }
    }), "Available for new projects"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "0 0 18px",
        fontSize: "var(--text-display)",
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: "-0.025em",
        color: "var(--text-heading)"
      }
    }, "I build developer", /*#__PURE__*/React.createElement("br", null), "tools in the open."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 30px",
        maxWidth: "52ch",
        fontSize: 18,
        lineHeight: 1.6,
        color: "var(--text-muted)"
      }
    }, "Full-stack engineer working on CLIs, the web platform, and tiny sharp libraries. Everything I make ships to GitHub \u2014 pull it, fork it, break it."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "large",
      leadingIcon: "repo",
      onClick: () => onNav("projects")
    }, "View projects"), /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      size: "large",
      leadingIcon: "download"
    }, "Download CV")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        flexWrap: "wrap"
      }
    }, [["star", "2.4k stars"], ["repo-forked", "180 forks"], ["organization", "6 orgs"]].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Octicon, {
      name: ic,
      size: 15,
      style: {
        color: "var(--text-subtle)"
      }
    }), t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        background: "var(--surface-subtle)",
        borderBottom: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6
      }
    }, ["#ff5f57", "#febc2e", "#28c840"].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 11,
        height: 11,
        borderRadius: 99,
        background: c
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--text-muted)",
        marginLeft: 6
      }
    }, "~/jiwoohan")), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: "18px 18px 22px",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        lineHeight: 1.7,
        color: "var(--text-body)",
        overflow: "auto",
        whiteSpace: "pre-wrap"
      }
    }, "$ ", "whoami", "\n", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-text)"
      }
    }, "jiwoo"), " — full-stack engineer\n", "$ ", "cat stack.txt", "\n", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--lang-ts)"
      }
    }, "typescript"), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--lang-rust)"
      }
    }, "rust"), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--lang-go)"
      }
    }, "go"), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--lang-py)"
      }
    }, "python"), "\n", "$ ", "git log --oneline -1", "\n", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--success)"
      }
    }, "a1b9f02"), " feat: ship portfolio v3 ✨")));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Projects — section header + interactive topic filter + pinned repo grid.
(function () {
  const {
    RepoCard,
    Button,
    Octicon
  } = window.PortfolioGitHubNativeDesignSystem_34cd29;
  const REPOS = [{
    name: "orbit-cli",
    description: "Zero-config deploy tool for static portfolios on GitHub Pages. One command, gh-pages branch, done.",
    language: "TypeScript",
    languageColor: "var(--lang-ts)",
    stars: 1284,
    forks: 92,
    topics: ["cli", "github-pages", "deploy"]
  }, {
    name: "threadlight",
    description: "A tiny reactive state store with built-in time-travel devtools. 1.4kb gzipped.",
    language: "Rust",
    languageColor: "var(--lang-rust)",
    stars: 642,
    forks: 38,
    topics: ["state", "wasm"]
  }, {
    name: "mdx-press",
    description: "Markdown → static site with zero build step. Renders in the browser, deploys anywhere.",
    language: "JavaScript",
    languageColor: "var(--lang-js)",
    stars: 418,
    forks: 27,
    topics: ["markdown", "static-site"],
    badge: "Pinned"
  }, {
    name: "pulse-graph",
    description: "Drop-in contribution-graph React component that reads any GitHub username.",
    language: "TypeScript",
    languageColor: "var(--lang-ts)",
    stars: 905,
    forks: 64,
    topics: ["react", "github", "dataviz"]
  }, {
    name: "leafhttp",
    description: "An ergonomic, dependency-free HTTP client for Go services. Context-first.",
    language: "Go",
    languageColor: "var(--lang-go)",
    stars: 311,
    forks: 19,
    topics: ["http", "go"]
  }, {
    name: "dotfiles",
    description: "My terminal, editor and shell config. zsh + neovim + ghostty.",
    language: "Shell",
    languageColor: "var(--lang-shell)",
    stars: 156,
    forks: 21,
    topics: ["dotfiles", "neovim"]
  }];
  const FILTERS = ["All", "TypeScript", "Rust", "Go", "JavaScript"];
  function Projects() {
    const [filter, setFilter] = React.useState("All");
    const shown = filter === "All" ? REPOS : REPOS.filter(r => r.language === filter);
    return /*#__PURE__*/React.createElement("section", {
      id: "projects",
      style: {
        padding: "72px var(--gutter)",
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        margin: "0 0 10px"
      }
    }, "// Pinned"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--text-heading)"
      }
    }, "Selected projects")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      trailingIcon: "arrow-right",
      as: "a",
      href: "#"
    }, "All repositories")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 24
      }
    }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 14px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        border: "1px solid",
        borderColor: filter === f ? "transparent" : "var(--border-default)",
        background: filter === f ? "var(--surface-emphasis)" : "var(--surface-card)",
        color: filter === f ? "var(--text-on-emphasis)" : "var(--text-muted)",
        transition: "all var(--dur-fast)"
      }
    }, f !== "All" && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 99,
        background: `var(--lang-${f.toLowerCase().replace("javascript", "js").replace("typescript", "ts")})`
      }
    }), f))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
        gap: 16
      }
    }, shown.map(r => /*#__PURE__*/React.createElement(RepoCard, _extends({
      key: r.name,
      owner: "jiwoohan",
      badge: r.badge || "Public"
    }, r)))));
  }
  window.Projects = Projects;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Skills.jsx
try { (() => {
// Skills — most-used languages bar + grouped tech-stack chips.
(function () {
  const {
    LanguageBar,
    Card,
    Tag
  } = window.PortfolioGitHubNativeDesignSystem_34cd29;
  const GROUPS = [{
    title: "Languages",
    items: ["TypeScript", "Rust", "Go", "Python", "SQL"]
  }, {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Axum", "Tauri"]
  }, {
    title: "Infra & tooling",
    items: ["GitHub Actions", "Docker", "Vite", "Turborepo", "Cloudflare"]
  }];
  function Skills() {
    return /*#__PURE__*/React.createElement("section", {
      id: "skills",
      style: {
        padding: "72px var(--gutter)",
        maxWidth: "var(--container-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-text)",
        margin: "0 0 10px"
      }
    }, "// Stack"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "0 0 32px",
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--text-heading)"
      }
    }, "What I work with"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.1fr 1.4fr",
        gap: 24,
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 24
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 6px",
        fontSize: 16,
        fontWeight: 600,
        color: "var(--text-heading)"
      }
    }, "Most-used languages"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 20px",
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Across all public repositories"), /*#__PURE__*/React.createElement(LanguageBar, {
      height: 10,
      showLegend: true,
      segments: [{
        label: "TypeScript",
        value: 52,
        color: "var(--lang-ts)"
      }, {
        label: "Rust",
        value: 21,
        color: "var(--lang-rust)"
      }, {
        label: "Go",
        value: 14,
        color: "var(--lang-go)"
      }, {
        label: "Python",
        value: 8,
        color: "var(--lang-py)"
      }, {
        label: "Shell",
        value: 5,
        color: "var(--lang-shell)"
      }]
    })), /*#__PURE__*/React.createElement(Card, {
      padding: 24
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.title
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 12px",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--text-subtle)"
      }
    }, g.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, g.items.map(i => /*#__PURE__*/React.createElement(Tag, {
      key: i,
      interactive: true
    }, i)))))))));
  }
  window.Skills = Skills;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Skills.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Octicon = __ds_scope.Octicon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.LanguageBar = __ds_scope.LanguageBar;

__ds_ns.RepoCard = __ds_scope.RepoCard;

__ds_ns.StatItem = __ds_scope.StatItem;

})();
