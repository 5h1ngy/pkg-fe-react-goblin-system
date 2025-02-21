import * as React from "react";
var L = (e, r, s, u, d, m, l, h) => {
  let c = document.documentElement, v = ["light", "dark"];
  function p(i) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && m ? d.map((f) => m[f] || f) : d;
      k ? (c.classList.remove(...S), c.classList.add(i)) : c.setAttribute(y, i);
    }), R(i);
  }
  function R(i) {
    h && v.includes(i) && (c.style.colorScheme = i);
  }
  function a() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let i = localStorage.getItem(r) || s, y = l && i === "system" ? a() : i;
    p(y);
  } catch (i) {
  }
};
var M = ["light", "dark"], Q = "(prefers-color-scheme: dark)", U = typeof window == "undefined", E = React.createContext(void 0), N = { setTheme: (e) => {
}, themes: [] }, z = () => {
  var e;
  return (e = React.useContext(E)) != null ? e : N;
}, J = (e) => React.useContext(E) ? React.createElement(React.Fragment, null, e.children) : React.createElement(_, { ...e }), V = ["light", "dark"], _ = ({ forcedTheme: e, disableTransitionOnChange: r = false, enableSystem: s = true, enableColorScheme: u = true, storageKey: d = "theme", themes: m = V, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: c, children: v, nonce: p, scriptProps: R }) => {
  let [a, i] = React.useState(() => b(d, l)), [w, y] = React.useState(() => b(d)), k = c ? Object.values(c) : m, S = React.useCallback((n) => {
    let o = n;
    if (!o) return;
    n === "system" && s && (o = I());
    let T = c ? c[o] : o, C = r ? W(p) : null, P = document.documentElement, x = (g) => {
      g === "class" ? (P.classList.remove(...k), T && P.classList.add(T)) : g.startsWith("data-") && (T ? P.setAttribute(g, T) : P.removeAttribute(g));
    };
    if (Array.isArray(h) ? h.forEach(x) : x(h), u) {
      let g = M.includes(l) ? l : null, O = M.includes(o) ? o : g;
      P.style.colorScheme = O;
    }
    C == null || C();
  }, [p]), f = React.useCallback((n) => {
    let o = typeof n == "function" ? n(a) : n;
    i(o);
    try {
      localStorage.setItem(d, o);
    } catch (T) {
    }
  }, [a]), A = React.useCallback((n) => {
    let o = I(n);
    y(o), a === "system" && s && !e && S("system");
  }, [a, e]);
  React.useEffect(() => {
    let n = window.matchMedia(Q);
    return n.addListener(A), A(n), () => n.removeListener(A);
  }, [A]), React.useEffect(() => {
    let n = (o) => {
      o.key === d && (o.newValue ? i(o.newValue) : f(l));
    };
    return window.addEventListener("storage", n), () => window.removeEventListener("storage", n);
  }, [f]), React.useEffect(() => {
    S(e != null ? e : a);
  }, [e, a]);
  let D = React.useMemo(() => ({ theme: a, setTheme: f, forcedTheme: e, resolvedTheme: a === "system" ? w : a, themes: s ? [...m, "system"] : m, systemTheme: s ? w : void 0 }), [a, f, e, w, s, m]);
  return React.createElement(E.Provider, { value: D }, React.createElement(H, { forcedTheme: e, storageKey: d, attribute: h, enableSystem: s, enableColorScheme: u, defaultTheme: l, value: c, themes: m, nonce: p, scriptProps: R }), v);
}, H = React.memo(({ forcedTheme: e, storageKey: r, attribute: s, enableSystem: u, enableColorScheme: d, defaultTheme: m, value: l, themes: h, nonce: c, scriptProps: v }) => {
  let p = JSON.stringify([s, r, m, e, h, l, u, d]).slice(1, -1);
  return React.createElement("script", { ...v, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? c : "", dangerouslySetInnerHTML: { __html: `(${L.toString()})(${p})` } });
}), b = (e, r) => {
  if (U) return;
  let s;
  try {
    s = localStorage.getItem(e) || void 0;
  } catch (u) {
  }
  return s || r;
}, W = (e) => {
  let r = document.createElement("style");
  return e && r.setAttribute("nonce", e), r.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(r), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(r);
    }, 1);
  };
}, I = (e) => (e || (e = window.matchMedia(Q)), e.matches ? "dark" : "light");
export {
  J,
  z
};
//# sourceMappingURL=CHz_-0gi.js.map
