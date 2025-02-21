import { j as te } from "../../.chunks/CYK1ROHF.js";
import * as u from "react";
import we, { createContext as Fe, useContext as Ve } from "react";
var W = { exports: {} }, G = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function We() {
  if (de) return G;
  de = 1;
  var e = we;
  function t(l, i) {
    return l === i && (l !== 0 || 1 / l === 1 / i) || l !== l && i !== i;
  }
  var r = typeof Object.is == "function" ? Object.is : t, a = e.useSyncExternalStore, n = e.useRef, o = e.useEffect, c = e.useMemo, s = e.useDebugValue;
  return G.useSyncExternalStoreWithSelector = function(l, i, m, p, d) {
    var h = n(null);
    if (h.current === null) {
      var f = { hasValue: !1, value: null };
      h.current = f;
    } else f = h.current;
    h = c(
      function() {
        function g(E) {
          if (!v) {
            if (v = !0, y = E, E = p(E), d !== void 0 && f.hasValue) {
              var R = f.value;
              if (d(R, E))
                return x = R;
            }
            return x = E;
          }
          if (R = x, r(y, E)) return R;
          var b = p(E);
          return d !== void 0 && d(R, b) ? (y = E, R) : (y = E, x = b);
        }
        var v = !1, y, x, C = m === void 0 ? null : m;
        return [
          function() {
            return g(i());
          },
          C === null ? void 0 : function() {
            return g(C());
          }
        ];
      },
      [i, m, p, d]
    );
    var w = a(l, h[0], h[1]);
    return o(
      function() {
        f.hasValue = !0, f.value = w;
      },
      [w]
    ), s(w), w;
  }, G;
}
var J = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Be() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, i) {
      return l === i && (l !== 0 || 1 / l === 1 / i) || l !== l && i !== i;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = we, r = typeof Object.is == "function" ? Object.is : e, a = t.useSyncExternalStore, n = t.useRef, o = t.useEffect, c = t.useMemo, s = t.useDebugValue;
    J.useSyncExternalStoreWithSelector = function(l, i, m, p, d) {
      var h = n(null);
      if (h.current === null) {
        var f = { hasValue: !1, value: null };
        h.current = f;
      } else f = h.current;
      h = c(
        function() {
          function g(E) {
            if (!v) {
              if (v = !0, y = E, E = p(E), d !== void 0 && f.hasValue) {
                var R = f.value;
                if (d(R, E))
                  return x = R;
              }
              return x = E;
            }
            if (R = x, r(y, E))
              return R;
            var b = p(E);
            return d !== void 0 && d(R, b) ? (y = E, R) : (y = E, x = b);
          }
          var v = !1, y, x, C = m === void 0 ? null : m;
          return [
            function() {
              return g(i());
            },
            C === null ? void 0 : function() {
              return g(C());
            }
          ];
        },
        [i, m, p, d]
      );
      var w = a(l, h[0], h[1]);
      return o(
        function() {
          f.hasValue = !0, f.value = w;
        },
        [w]
      ), s(w), w;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), J;
}
var me;
function He() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? W.exports = We() : W.exports = Be()), W.exports;
}
var Ue = He(), Y = /* @__PURE__ */ Symbol.for("react-redux-context"), q = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ze() {
  if (!u.createContext) return {};
  const e = q[Y] ?? (q[Y] = /* @__PURE__ */ new Map());
  let t = e.get(u.createContext);
  return t || (t = u.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(u.createContext, t)), t;
}
var Z = /* @__PURE__ */ ze();
function xe(e = Z) {
  return function() {
    const r = u.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var je = /* @__PURE__ */ xe(), Ke = (e, t) => e === t;
function Ge(e = Z) {
  const t = e === Z ? je : xe(e), r = (a, n = {}) => {
    const { equalityFn: o = Ke } = typeof n == "function" ? { equalityFn: n } : n;
    if (process.env.NODE_ENV !== "production") {
      if (!a)
        throw new Error("You must pass a selector to useSelector");
      if (typeof a != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof o != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const c = t(), { store: s, subscription: l, getServerState: i } = c, m = u.useRef(!0), p = u.useCallback(
      {
        [a.name](h) {
          const f = a(h);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: w = {} } = typeof n == "function" ? {} : n, { identityFunctionCheck: g, stabilityCheck: v } = c, {
              identityFunctionCheck: y,
              stabilityCheck: x
            } = {
              stabilityCheck: v,
              identityFunctionCheck: g,
              ...w
            };
            if (x === "always" || x === "once" && m.current) {
              const C = a(h);
              if (!o(f, C)) {
                let E;
                try {
                  throw new Error();
                } catch (R) {
                  ({ stack: E } = R);
                }
                console.warn(
                  "Selector " + (a.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: h,
                    selected: f,
                    selected2: C,
                    stack: E
                  }
                );
              }
            }
            if ((y === "always" || y === "once" && m.current) && f === h) {
              let C;
              try {
                throw new Error();
              } catch (E) {
                ({ stack: C } = E);
              }
              console.warn(
                "Selector " + (a.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: C }
              );
            }
            m.current && (m.current = !1);
          }
          return f;
        }
      }[a.name],
      [a]
    ), d = Ue.useSyncExternalStoreWithSelector(
      l.addNestedSub,
      s.getState,
      i || s.getState,
      p,
      o
    );
    return u.useDebugValue(d), d;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Je = /* @__PURE__ */ Ge();
const Ee = Fe(void 0), mr = ({ children: e }) => /* @__PURE__ */ te.jsx(
  Ee.Provider,
  {
    value: {
      accessToken: Je((t) => t.authSlice.accessToken)
    },
    children: e
  }
);
var A = {}, pe;
function Ye() {
  if (pe) return A;
  pe = 1, Object.defineProperty(A, "__esModule", { value: !0 }), A.parse = c, A.serialize = i;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, n = Object.prototype.toString, o = /* @__PURE__ */ (() => {
    const d = function() {
    };
    return d.prototype = /* @__PURE__ */ Object.create(null), d;
  })();
  function c(d, h) {
    const f = new o(), w = d.length;
    if (w < 2)
      return f;
    const g = (h == null ? void 0 : h.decode) || m;
    let v = 0;
    do {
      const y = d.indexOf("=", v);
      if (y === -1)
        break;
      const x = d.indexOf(";", v), C = x === -1 ? w : x;
      if (y > C) {
        v = d.lastIndexOf(";", y - 1) + 1;
        continue;
      }
      const E = s(d, v, y), R = l(d, y, E), b = d.slice(E, R);
      if (f[b] === void 0) {
        let N = s(d, y + 1, C), k = l(d, C, N);
        const T = g(d.slice(N, k));
        f[b] = T;
      }
      v = C + 1;
    } while (v < w);
    return f;
  }
  function s(d, h, f) {
    do {
      const w = d.charCodeAt(h);
      if (w !== 32 && w !== 9)
        return h;
    } while (++h < f);
    return f;
  }
  function l(d, h, f) {
    for (; h > f; ) {
      const w = d.charCodeAt(--h);
      if (w !== 32 && w !== 9)
        return h + 1;
    }
    return f;
  }
  function i(d, h, f) {
    const w = (f == null ? void 0 : f.encode) || encodeURIComponent;
    if (!e.test(d))
      throw new TypeError(`argument name is invalid: ${d}`);
    const g = w(h);
    if (!t.test(g))
      throw new TypeError(`argument val is invalid: ${h}`);
    let v = d + "=" + g;
    if (!f)
      return v;
    if (f.maxAge !== void 0) {
      if (!Number.isInteger(f.maxAge))
        throw new TypeError(`option maxAge is invalid: ${f.maxAge}`);
      v += "; Max-Age=" + f.maxAge;
    }
    if (f.domain) {
      if (!r.test(f.domain))
        throw new TypeError(`option domain is invalid: ${f.domain}`);
      v += "; Domain=" + f.domain;
    }
    if (f.path) {
      if (!a.test(f.path))
        throw new TypeError(`option path is invalid: ${f.path}`);
      v += "; Path=" + f.path;
    }
    if (f.expires) {
      if (!p(f.expires) || !Number.isFinite(f.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${f.expires}`);
      v += "; Expires=" + f.expires.toUTCString();
    }
    if (f.httpOnly && (v += "; HttpOnly"), f.secure && (v += "; Secure"), f.partitioned && (v += "; Partitioned"), f.priority)
      switch (typeof f.priority == "string" ? f.priority.toLowerCase() : void 0) {
        case "low":
          v += "; Priority=Low";
          break;
        case "medium":
          v += "; Priority=Medium";
          break;
        case "high":
          v += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${f.priority}`);
      }
    if (f.sameSite)
      switch (typeof f.sameSite == "string" ? f.sameSite.toLowerCase() : f.sameSite) {
        case !0:
        case "strict":
          v += "; SameSite=Strict";
          break;
        case "lax":
          v += "; SameSite=Lax";
          break;
        case "none":
          v += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${f.sameSite}`);
      }
    return v;
  }
  function m(d) {
    if (d.indexOf("%") === -1)
      return d;
    try {
      return decodeURIComponent(d);
    } catch {
      return d;
    }
  }
  function p(d) {
    return n.call(d) === "[object Date]";
  }
  return A;
}
Ye();
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function S(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function P(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ee({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function re(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substring(a), e = e.substring(0, a)), e && (t.pathname = e);
  }
  return t;
}
function Ce(e, t, r = "/") {
  return qe(e, t, r, !1);
}
function qe(e, t, r, a) {
  let n = typeof t == "string" ? re(t) : t, o = D(n.pathname || "/", r);
  if (o == null)
    return null;
  let c = Re(e);
  Xe(c);
  let s = null;
  for (let l = 0; s == null && l < c.length; ++l) {
    let i = ut(o);
    s = it(
      c[l],
      i,
      a
    );
  }
  return s;
}
function Re(e, t = [], r = [], a = "") {
  let n = (o, c, s) => {
    let l = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: c,
      route: o
    };
    l.relativePath.startsWith("/") && (S(
      l.relativePath.startsWith(a),
      `Absolute route path "${l.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(a.length));
    let i = O([a, l.relativePath]), m = r.concat(l);
    o.children && o.children.length > 0 && (S(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${i}".`
    ), Re(o.children, t, m, i)), !(o.path == null && !o.index) && t.push({
      path: i,
      score: at(i, o.index),
      routesMeta: m
    });
  };
  return e.forEach((o, c) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      n(o, c);
    else
      for (let l of Se(o.path))
        n(o, c, l);
  }), t;
}
function Se(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...a] = t, n = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (a.length === 0)
    return n ? [o, ""] : [o];
  let c = Se(a.join("/")), s = [];
  return s.push(
    ...c.map(
      (l) => l === "" ? o : [o, l].join("/")
    )
  ), n && s.push(...c), s.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function Xe(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : ot(
      t.routesMeta.map((a) => a.childrenIndex),
      r.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var Qe = /^:[\w-]+$/, Ze = 3, et = 2, tt = 1, rt = 10, nt = -2, ve = (e) => e === "*";
function at(e, t) {
  let r = e.split("/"), a = r.length;
  return r.some(ve) && (a += nt), t && (a += et), r.filter((n) => !ve(n)).reduce(
    (n, o) => n + (Qe.test(o) ? Ze : o === "" ? tt : rt),
    a
  );
}
function ot(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, n) => a === t[n]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function it(e, t, r = !1) {
  let { routesMeta: a } = e, n = {}, o = "/", c = [];
  for (let s = 0; s < a.length; ++s) {
    let l = a[s], i = s === a.length - 1, m = o === "/" ? t : t.slice(o.length) || "/", p = z(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: i },
      m
    ), d = l.route;
    if (!p && i && r && !a[a.length - 1].route.index && (p = z(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      m
    )), !p)
      return null;
    Object.assign(n, p.params), c.push({
      // TODO: Can this as be avoided?
      params: n,
      pathname: O([o, p.pathname]),
      pathnameBase: dt(
        O([o, p.pathnameBase])
      ),
      route: d
    }), p.pathnameBase !== "/" && (o = O([o, p.pathnameBase]));
  }
  return c;
}
function z(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, a] = lt(
    e.path,
    e.caseSensitive,
    e.end
  ), n = t.match(r);
  if (!n) return null;
  let o = n[0], c = o.replace(/(.)\/+$/, "$1"), s = n.slice(1);
  return {
    params: a.reduce(
      (i, { paramName: m, isOptional: p }, d) => {
        if (m === "*") {
          let f = s[d] || "";
          c = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
        }
        const h = s[d];
        return p && !h ? i[m] = void 0 : i[m] = (h || "").replace(/%2F/g, "/"), i;
      },
      {}
    ),
    pathname: o,
    pathnameBase: c,
    pattern: e
  };
}
function lt(e, t = !1, r = !0) {
  P(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let a = [], n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (c, s, l) => (a.push({ paramName: s, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (a.push({ paramName: "*" }), n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a];
}
function ut(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return P(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function D(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function st(e, t = "/") {
  let {
    pathname: r,
    search: a = "",
    hash: n = ""
  } = typeof e == "string" ? re(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : ct(r, t) : t,
    search: ht(a),
    hash: mt(n)
  };
}
function ct(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n) => {
    n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
  }), r.length > 1 ? r.join("/") : "/";
}
function X(e, t, r, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ft(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function ne(e) {
  let t = ft(e);
  return t.map(
    (r, a) => a === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function ae(e, t, r, a = !1) {
  let n;
  typeof e == "string" ? n = re(e) : (n = { ...e }, S(
    !n.pathname || !n.pathname.includes("?"),
    X("?", "pathname", "search", n)
  ), S(
    !n.pathname || !n.pathname.includes("#"),
    X("#", "pathname", "hash", n)
  ), S(
    !n.search || !n.search.includes("#"),
    X("#", "search", "hash", n)
  ));
  let o = e === "" || n.pathname === "", c = o ? "/" : n.pathname, s;
  if (c == null)
    s = r;
  else {
    let p = t.length - 1;
    if (!a && c.startsWith("..")) {
      let d = c.split("/");
      for (; d[0] === ".."; )
        d.shift(), p -= 1;
      n.pathname = d.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let l = st(n, s), i = c && c !== "/" && c.endsWith("/"), m = (o || c === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (i || m) && (l.pathname += "/"), l;
}
var O = (e) => e.join("/").replace(/\/\/+/g, "/"), dt = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ht = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, mt = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function pt(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var be = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  be
);
var vt = [
  "GET",
  ...be
];
new Set(vt);
var I = u.createContext(null);
I.displayName = "DataRouter";
var j = u.createContext(null);
j.displayName = "DataRouterState";
var ke = u.createContext({
  isTransitioning: !1
});
ke.displayName = "ViewTransition";
var yt = u.createContext(
  /* @__PURE__ */ new Map()
);
yt.displayName = "Fetchers";
var gt = u.createContext(null);
gt.displayName = "Await";
var L = u.createContext(
  null
);
L.displayName = "Navigation";
var oe = u.createContext(
  null
);
oe.displayName = "Location";
var _ = u.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_.displayName = "Route";
var ie = u.createContext(null);
ie.displayName = "RouteError";
function wt(e, { relative: t } = {}) {
  S(
    F(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: a } = u.useContext(L), { hash: n, pathname: o, search: c } = V(e, { relative: t }), s = o;
  return r !== "/" && (s = o === "/" ? r : O([r, o])), a.createHref({ pathname: s, search: c, hash: n });
}
function F() {
  return u.useContext(oe) != null;
}
function $() {
  return S(
    F(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), u.useContext(oe).location;
}
var Pe = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Le(e) {
  u.useContext(L).static || u.useLayoutEffect(e);
}
function _e() {
  let { isDataRoute: e } = u.useContext(_);
  return e ? $t() : xt();
}
function xt() {
  S(
    F(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = u.useContext(I), { basename: t, navigator: r } = u.useContext(L), { matches: a } = u.useContext(_), { pathname: n } = $(), o = JSON.stringify(ne(a)), c = u.useRef(!1);
  return Le(() => {
    c.current = !0;
  }), u.useCallback(
    (l, i = {}) => {
      if (P(c.current, Pe), !c.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let m = ae(
        l,
        JSON.parse(o),
        n,
        i.relative === "path"
      );
      e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : O([t, m.pathname])), (i.replace ? r.replace : r.push)(
        m,
        i.state,
        i
      );
    },
    [
      t,
      r,
      o,
      n,
      e
    ]
  );
}
u.createContext(null);
function V(e, { relative: t } = {}) {
  let { matches: r } = u.useContext(_), { pathname: a } = $(), n = JSON.stringify(ne(r));
  return u.useMemo(
    () => ae(
      e,
      JSON.parse(n),
      a,
      t === "path"
    ),
    [e, n, a, t]
  );
}
function Et(e, t, r, a) {
  S(
    F(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: n, static: o } = u.useContext(L), { matches: c } = u.useContext(_), s = c[c.length - 1], l = s ? s.params : {}, i = s ? s.pathname : "/", m = s ? s.pathnameBase : "/", p = s && s.route;
  {
    let y = p && p.path || "";
    Oe(
      i,
      !p || y.endsWith("*") || y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${i}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y === "/" ? "*" : `${y}/*`}">.`
    );
  }
  let d = $(), h;
  h = d;
  let f = h.pathname || "/", w = f;
  if (m !== "/") {
    let y = m.replace(/^\//, "").split("/");
    w = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let g = !o && r && r.matches && r.matches.length > 0 ? r.matches : Ce(e, { pathname: w });
  return P(
    p || g != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), P(
    g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0 || g[g.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), kt(
    g && g.map(
      (y) => Object.assign({}, y, {
        params: Object.assign({}, l, y.params),
        pathname: O([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          n.encodeLocation ? n.encodeLocation(y.pathname).pathname : y.pathname
        ]),
        pathnameBase: y.pathnameBase === "/" ? m : O([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          n.encodeLocation ? n.encodeLocation(y.pathnameBase).pathname : y.pathnameBase
        ])
      })
    ),
    c,
    r,
    a
  );
}
function Ct() {
  let e = Tt(), t = pt(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)", n = { padding: "0.5rem", backgroundColor: a }, o = { padding: "2px 4px", backgroundColor: a }, c = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), c = /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ u.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ u.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ u.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ u.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ u.createElement("pre", { style: n }, r) : null, c);
}
var Rt = /* @__PURE__ */ u.createElement(Ct, null), St = class extends u.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ u.createElement(_.Provider, { value: this.props.routeContext }, /* @__PURE__ */ u.createElement(
      ie.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function bt({ routeContext: e, match: t, children: r }) {
  let a = u.useContext(I);
  return a && a.static && a.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ u.createElement(_.Provider, { value: e }, r);
}
function kt(e, t = [], r = null, a = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let n = e, o = r == null ? void 0 : r.errors;
  if (o != null) {
    let l = n.findIndex(
      (i) => i.route.id && (o == null ? void 0 : o[i.route.id]) !== void 0
    );
    S(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ), n = n.slice(
      0,
      Math.min(n.length, l + 1)
    );
  }
  let c = !1, s = -1;
  if (r)
    for (let l = 0; l < n.length; l++) {
      let i = n[l];
      if ((i.route.HydrateFallback || i.route.hydrateFallbackElement) && (s = l), i.route.id) {
        let { loaderData: m, errors: p } = r, d = i.route.loader && !m.hasOwnProperty(i.route.id) && (!p || p[i.route.id] === void 0);
        if (i.route.lazy || d) {
          c = !0, s >= 0 ? n = n.slice(0, s + 1) : n = [n[0]];
          break;
        }
      }
    }
  return n.reduceRight((l, i, m) => {
    let p, d = !1, h = null, f = null;
    r && (p = o && i.route.id ? o[i.route.id] : void 0, h = i.route.errorElement || Rt, c && (s < 0 && m === 0 ? (Oe(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), d = !0, f = null) : s === m && (d = !0, f = i.route.hydrateFallbackElement || null)));
    let w = t.concat(n.slice(0, m + 1)), g = () => {
      let v;
      return p ? v = h : d ? v = f : i.route.Component ? v = /* @__PURE__ */ u.createElement(i.route.Component, null) : i.route.element ? v = i.route.element : v = l, /* @__PURE__ */ u.createElement(
        bt,
        {
          match: i,
          routeContext: {
            outlet: l,
            matches: w,
            isDataRoute: r != null
          },
          children: v
        }
      );
    };
    return r && (i.route.ErrorBoundary || i.route.errorElement || m === 0) ? /* @__PURE__ */ u.createElement(
      St,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: h,
        error: p,
        children: g(),
        routeContext: { outlet: null, matches: w, isDataRoute: !0 }
      }
    ) : g();
  }, null);
}
function le(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pt(e) {
  let t = u.useContext(I);
  return S(t, le(e)), t;
}
function Lt(e) {
  let t = u.useContext(j);
  return S(t, le(e)), t;
}
function _t(e) {
  let t = u.useContext(_);
  return S(t, le(e)), t;
}
function ue(e) {
  let t = _t(e), r = t.matches[t.matches.length - 1];
  return S(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Ot() {
  return ue(
    "useRouteId"
    /* UseRouteId */
  );
}
function Tt() {
  var a;
  let e = u.useContext(ie), t = Lt(
    "useRouteError"
    /* UseRouteError */
  ), r = ue(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[r];
}
function $t() {
  let { router: e } = Pt(
    "useNavigate"
    /* UseNavigateStable */
  ), t = ue(
    "useNavigate"
    /* UseNavigateStable */
  ), r = u.useRef(!1);
  return Le(() => {
    r.current = !0;
  }), u.useCallback(
    async (n, o = {}) => {
      P(r.current, Pe), r.current && (typeof n == "number" ? e.navigate(n) : await e.navigate(n, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var ye = {};
function Oe(e, t, r) {
  !t && !ye[e] && (ye[e] = !0, P(!1, r));
}
u.memo(Nt);
function Nt({
  routes: e,
  future: t,
  state: r
}) {
  return Et(e, void 0, r, t);
}
function Te({
  to: e,
  replace: t,
  state: r,
  relative: a
}) {
  S(
    F(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: n } = u.useContext(L);
  P(
    !n,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: o } = u.useContext(_), { pathname: c } = $(), s = _e(), l = ae(
    e,
    ne(o),
    c,
    a === "path"
  ), i = JSON.stringify(l);
  return u.useEffect(() => {
    s(JSON.parse(i), { replace: t, state: r, relative: a });
  }, [s, i, a, t, r]), null;
}
var H = "get", U = "application/x-www-form-urlencoded";
function K(e) {
  return e != null && typeof e.tagName == "string";
}
function Dt(e) {
  return K(e) && e.tagName.toLowerCase() === "button";
}
function It(e) {
  return K(e) && e.tagName.toLowerCase() === "form";
}
function At(e) {
  return K(e) && e.tagName.toLowerCase() === "input";
}
function Mt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ft(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Mt(e);
}
var B = null;
function Vt() {
  if (B === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), B = !1;
    } catch {
      B = !0;
    }
  return B;
}
var Wt = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Q(e) {
  return e != null && !Wt.has(e) ? (P(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${U}"`
  ), null) : e;
}
function Bt(e, t) {
  let r, a, n, o, c;
  if (It(e)) {
    let s = e.getAttribute("action");
    a = s ? D(s, t) : null, r = e.getAttribute("method") || H, n = Q(e.getAttribute("enctype")) || U, o = new FormData(e);
  } else if (Dt(e) || At(e) && (e.type === "submit" || e.type === "image")) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (a = l ? D(l, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || H, n = Q(e.getAttribute("formenctype")) || Q(s.getAttribute("enctype")) || U, o = new FormData(s, e), !Vt()) {
      let { name: i, type: m, value: p } = e;
      if (m === "image") {
        let d = i ? `${i}.` : "";
        o.append(`${d}x`, "0"), o.append(`${d}y`, "0");
      } else i && o.append(i, p);
    }
  } else {
    if (K(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = H, a = null, n = U, c = e;
  }
  return o && n === "text/plain" && (c = o, o = void 0), { action: a, method: r.toLowerCase(), encType: n, formData: o, body: c };
}
function se(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function Ht(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Ut(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function zt(e, t, r) {
  let a = await Promise.all(
    e.map(async (n) => {
      let o = t.routes[n.route.id];
      if (o) {
        let c = await Ht(o, r);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Jt(
    a.flat(1).filter(Ut).filter((n) => n.rel === "stylesheet" || n.rel === "preload").map(
      (n) => n.rel === "stylesheet" ? { ...n, rel: "prefetch", as: "style" } : { ...n, rel: "prefetch" }
    )
  );
}
function ge(e, t, r, a, n, o) {
  let c = (l, i) => r[i] ? l.route.id !== r[i].route.id : !0, s = (l, i) => {
    var m;
    return (
      // param change, /users/123 -> /users/456
      r[i].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((m = r[i].route.path) == null ? void 0 : m.endsWith("*")) && r[i].params["*"] !== l.params["*"]
    );
  };
  return o === "assets" ? t.filter(
    (l, i) => c(l, i) || s(l, i)
  ) : o === "data" ? t.filter((l, i) => {
    var p;
    let m = a.routes[l.route.id];
    if (!m || !m.hasLoader)
      return !1;
    if (c(l, i) || s(l, i))
      return !0;
    if (l.route.shouldRevalidate) {
      let d = l.route.shouldRevalidate({
        currentUrl: new URL(
          n.pathname + n.search + n.hash,
          window.origin
        ),
        currentParams: ((p = r[0]) == null ? void 0 : p.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof d == "boolean")
        return d;
    }
    return !0;
  }) : [];
}
function jt(e, t) {
  return Kt(
    e.map((r) => {
      let a = t.routes[r.route.id];
      if (!a) return [];
      let n = [a.module];
      return a.imports && (n = n.concat(a.imports)), n;
    }).flat(1)
  );
}
function Kt(e) {
  return [...new Set(e)];
}
function Gt(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let a of r)
    t[a] = e[a];
  return t;
}
function Jt(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((a, n) => {
    let o = JSON.stringify(Gt(n));
    return r.has(o) || (r.add(o), a.push({ key: o, link: n })), a;
  }, []);
}
function Yt(e) {
  let t = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return t.pathname === "/" ? t.pathname = "_root.data" : t.pathname = `${t.pathname.replace(/\/$/, "")}.data`, t;
}
function qt() {
  let e = u.useContext(I);
  return se(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Xt() {
  let e = u.useContext(j);
  return se(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var ce = u.createContext(void 0);
ce.displayName = "FrameworkContext";
function $e() {
  let e = u.useContext(ce);
  return se(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Qt(e, t) {
  let r = u.useContext(ce), [a, n] = u.useState(!1), [o, c] = u.useState(!1), { onFocus: s, onBlur: l, onMouseEnter: i, onMouseLeave: m, onTouchStart: p } = t, d = u.useRef(null);
  u.useEffect(() => {
    if (e === "render" && c(!0), e === "viewport") {
      let w = (v) => {
        v.forEach((y) => {
          c(y.isIntersecting);
        });
      }, g = new IntersectionObserver(w, { threshold: 0.5 });
      return d.current && g.observe(d.current), () => {
        g.disconnect();
      };
    }
  }, [e]), u.useEffect(() => {
    if (a) {
      let w = setTimeout(() => {
        c(!0);
      }, 100);
      return () => {
        clearTimeout(w);
      };
    }
  }, [a]);
  let h = () => {
    n(!0);
  }, f = () => {
    n(!1), c(!1);
  };
  return r ? e !== "intent" ? [o, d, {}] : [
    o,
    d,
    {
      onFocus: M(s, h),
      onBlur: M(l, f),
      onMouseEnter: M(i, h),
      onMouseLeave: M(m, f),
      onTouchStart: M(p, h)
    }
  ] : [!1, d, {}];
}
function M(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function Zt({
  page: e,
  ...t
}) {
  let { router: r } = qt(), a = u.useMemo(
    () => Ce(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return a ? /* @__PURE__ */ u.createElement(tr, { page: e, matches: a, ...t }) : null;
}
function er(e) {
  let { manifest: t, routeModules: r } = $e(), [a, n] = u.useState([]);
  return u.useEffect(() => {
    let o = !1;
    return zt(e, t, r).then(
      (c) => {
        o || n(c);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, r]), a;
}
function tr({
  page: e,
  matches: t,
  ...r
}) {
  let a = $(), { manifest: n, routeModules: o } = $e(), { loaderData: c, matches: s } = Xt(), l = u.useMemo(
    () => ge(
      e,
      t,
      s,
      n,
      a,
      "data"
    ),
    [e, t, s, n, a]
  ), i = u.useMemo(
    () => ge(
      e,
      t,
      s,
      n,
      a,
      "assets"
    ),
    [e, t, s, n, a]
  ), m = u.useMemo(() => {
    if (e === a.pathname + a.search + a.hash)
      return [];
    let h = /* @__PURE__ */ new Set(), f = !1;
    if (t.forEach((g) => {
      var y;
      let v = n.routes[g.route.id];
      !v || !v.hasLoader || (!l.some((x) => x.route.id === g.route.id) && g.route.id in c && ((y = o[g.route.id]) != null && y.shouldRevalidate) || v.hasClientLoader ? f = !0 : h.add(g.route.id));
    }), h.size === 0)
      return [];
    let w = Yt(e);
    return f && h.size > 0 && w.searchParams.set(
      "_routes",
      t.filter((g) => h.has(g.route.id)).map((g) => g.route.id).join(",")
    ), [w.pathname + w.search];
  }, [
    c,
    a,
    n,
    l,
    t,
    e,
    o
  ]), p = u.useMemo(
    () => jt(i, n),
    [i, n]
  ), d = er(i);
  return /* @__PURE__ */ u.createElement(u.Fragment, null, m.map((h) => /* @__PURE__ */ u.createElement("link", { key: h, rel: "prefetch", as: "fetch", href: h, ...r })), p.map((h) => /* @__PURE__ */ u.createElement("link", { key: h, rel: "modulepreload", href: h, ...r })), d.map(({ key: h, link: f }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ u.createElement("link", { key: h, ...f })
  )));
}
function rr(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Ne = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Ne && (window.__reactRouterVersion = "7.1.5");
} catch {
}
var De = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ie = u.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: a = "none",
    relative: n,
    reloadDocument: o,
    replace: c,
    state: s,
    target: l,
    to: i,
    preventScrollReset: m,
    viewTransition: p,
    ...d
  }, h) {
    let { basename: f } = u.useContext(L), w = typeof i == "string" && De.test(i), g, v = !1;
    if (typeof i == "string" && w && (g = i, Ne))
      try {
        let k = new URL(window.location.href), T = i.startsWith("//") ? new URL(k.protocol + i) : new URL(i), fe = D(T.pathname, f);
        T.origin === k.origin && fe != null ? i = fe + T.search + T.hash : v = !0;
      } catch {
        P(
          !1,
          `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let y = wt(i, { relative: n }), [x, C, E] = Qt(
      a,
      d
    ), R = ir(i, {
      replace: c,
      state: s,
      target: l,
      preventScrollReset: m,
      relative: n,
      viewTransition: p
    });
    function b(k) {
      t && t(k), k.defaultPrevented || R(k);
    }
    let N = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ u.createElement(
        "a",
        {
          ...d,
          ...E,
          href: g || y,
          onClick: v || o ? t : b,
          ref: rr(h, C),
          target: l,
          "data-discover": !w && r === "render" ? "true" : void 0
        }
      )
    );
    return x && !w ? /* @__PURE__ */ u.createElement(u.Fragment, null, N, /* @__PURE__ */ u.createElement(Zt, { page: y })) : N;
  }
);
Ie.displayName = "Link";
var nr = u.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: a = "",
    end: n = !1,
    style: o,
    to: c,
    viewTransition: s,
    children: l,
    ...i
  }, m) {
    let p = V(c, { relative: i.relative }), d = $(), h = u.useContext(j), { navigator: f, basename: w } = u.useContext(L), g = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fr(p) && s === !0, v = f.encodeLocation ? f.encodeLocation(p).pathname : p.pathname, y = d.pathname, x = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    r || (y = y.toLowerCase(), x = x ? x.toLowerCase() : null, v = v.toLowerCase()), x && w && (x = D(x, w) || x);
    const C = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let E = y === v || !n && y.startsWith(v) && y.charAt(C) === "/", R = x != null && (x === v || !n && x.startsWith(v) && x.charAt(v.length) === "/"), b = {
      isActive: E,
      isPending: R,
      isTransitioning: g
    }, N = E ? t : void 0, k;
    typeof a == "function" ? k = a(b) : k = [
      a,
      E ? "active" : null,
      R ? "pending" : null,
      g ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let T = typeof o == "function" ? o(b) : o;
    return /* @__PURE__ */ u.createElement(
      Ie,
      {
        ...i,
        "aria-current": N,
        className: k,
        ref: m,
        style: T,
        to: c,
        viewTransition: s
      },
      typeof l == "function" ? l(b) : l
    );
  }
);
nr.displayName = "NavLink";
var ar = u.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: a,
    replace: n,
    state: o,
    method: c = H,
    action: s,
    onSubmit: l,
    relative: i,
    preventScrollReset: m,
    viewTransition: p,
    ...d
  }, h) => {
    let f = sr(), w = cr(s, { relative: i }), g = c.toLowerCase() === "get" ? "get" : "post", v = typeof s == "string" && De.test(s), y = (x) => {
      if (l && l(x), x.defaultPrevented) return;
      x.preventDefault();
      let C = x.nativeEvent.submitter, E = (C == null ? void 0 : C.getAttribute("formmethod")) || c;
      f(C || x.currentTarget, {
        fetcherKey: t,
        method: E,
        navigate: r,
        replace: n,
        state: o,
        relative: i,
        preventScrollReset: m,
        viewTransition: p
      });
    };
    return /* @__PURE__ */ u.createElement(
      "form",
      {
        ref: h,
        method: g,
        action: w,
        onSubmit: a ? l : y,
        ...d,
        "data-discover": !v && e === "render" ? "true" : void 0
      }
    );
  }
);
ar.displayName = "Form";
function or(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ae(e) {
  let t = u.useContext(I);
  return S(t, or(e)), t;
}
function ir(e, {
  target: t,
  replace: r,
  state: a,
  preventScrollReset: n,
  relative: o,
  viewTransition: c
} = {}) {
  let s = _e(), l = $(), i = V(e, { relative: o });
  return u.useCallback(
    (m) => {
      if (Ft(m, t)) {
        m.preventDefault();
        let p = r !== void 0 ? r : ee(l) === ee(i);
        s(e, {
          replace: p,
          state: a,
          preventScrollReset: n,
          relative: o,
          viewTransition: c
        });
      }
    },
    [
      l,
      s,
      i,
      r,
      a,
      t,
      e,
      n,
      o,
      c
    ]
  );
}
var lr = 0, ur = () => `__${String(++lr)}__`;
function sr() {
  let { router: e } = Ae(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = u.useContext(L), r = Ot();
  return u.useCallback(
    async (a, n = {}) => {
      let { action: o, method: c, encType: s, formData: l, body: i } = Bt(
        a,
        t
      );
      if (n.navigate === !1) {
        let m = n.fetcherKey || ur();
        await e.fetch(m, r, n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: l,
          body: i,
          formMethod: n.method || c,
          formEncType: n.encType || s,
          flushSync: n.flushSync
        });
      } else
        await e.navigate(n.action || o, {
          preventScrollReset: n.preventScrollReset,
          formData: l,
          body: i,
          formMethod: n.method || c,
          formEncType: n.encType || s,
          replace: n.replace,
          state: n.state,
          fromRouteId: r,
          flushSync: n.flushSync,
          viewTransition: n.viewTransition
        });
    },
    [e, t, r]
  );
}
function cr(e, { relative: t } = {}) {
  let { basename: r } = u.useContext(L), a = u.useContext(_);
  S(a, "useFormAction must be used inside a RouteContext");
  let [n] = a.matches.slice(-1), o = { ...V(e || ".", { relative: t }) }, c = $();
  if (e == null) {
    o.search = c.search;
    let s = new URLSearchParams(o.search), l = s.getAll("index");
    if (l.some((m) => m === "")) {
      s.delete("index"), l.filter((p) => p).forEach((p) => s.append("index", p));
      let m = s.toString();
      o.search = m ? `?${m}` : "";
    }
  }
  return (!e || e === ".") && n.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : O([r, o.pathname])), ee(o);
}
function fr(e, t = {}) {
  let r = u.useContext(ke);
  S(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = Ae(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), n = V(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let o = D(r.currentLocation.pathname, a) || r.currentLocation.pathname, c = D(r.nextLocation.pathname, a) || r.nextLocation.pathname;
  return z(n.pathname, c) != null || z(n.pathname, o) != null;
}
new TextEncoder();
const Me = () => {
  const e = Ve(Ee);
  if (!e)
    throw new Error("useAuth must be used within an AuthProvider");
  return e;
}, pr = ({ render: e }) => {
  const { accessToken: t } = Me();
  return t ? e : /* @__PURE__ */ te.jsx(Te, { to: "/auth/login" });
}, vr = ({ render: e }) => {
  const { accessToken: t } = Me();
  return t ? /* @__PURE__ */ te.jsx(Te, { to: "/dashboard/profile/overview" }) : e;
};
export {
  pr as PrivateRoute,
  vr as RedirectPublicRoute,
  mr as default
};
//# sourceMappingURL=index.mjs.map
