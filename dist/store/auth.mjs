var Te = Object.defineProperty;
var Pe = (e, r, t) => r in e ? Te(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var X = (e, r, t) => Pe(e, typeof r != "symbol" ? r + "" : r, t);
import { register as ke, login as Re, refresh as Ae } from "../services/auth.mjs";
import { STATUS as b } from "./shared.mjs";
function je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let r = e;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r || Object.getPrototypeOf(e) === null;
}
function Ie(e) {
  return je(e) && "type" in e && typeof e.type == "string";
}
var me = Symbol.for("immer-nothing"), ue = Symbol.for("immer-draftable"), w = Symbol.for("immer-state"), ze = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function E(e, ...r) {
  if (process.env.NODE_ENV !== "production") {
    const t = ze[e], n = typeof t == "function" ? t.apply(null, r) : t;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var j = Object.getPrototypeOf;
function k(e) {
  return !!e && !!e[w];
}
function v(e) {
  var r;
  return e ? ge(e) || Array.isArray(e) || !!e[ue] || !!((r = e.constructor) != null && r[ue]) || K(e) || H(e) : !1;
}
var Me = Object.prototype.constructor.toString();
function ge(e) {
  if (!e || typeof e != "object")
    return !1;
  const r = j(e);
  if (r === null)
    return !0;
  const t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === Me;
}
function B(e, r) {
  q(e) === 0 ? Reflect.ownKeys(e).forEach((t) => {
    r(t, e[t], e);
  }) : e.forEach((t, n) => r(n, t, e));
}
function q(e) {
  const r = e[w];
  return r ? r.type_ : Array.isArray(e) ? 1 : K(e) ? 2 : H(e) ? 3 : 0;
}
function ee(e, r) {
  return q(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function Ee(e, r, t) {
  const n = q(e);
  n === 2 ? e.set(r, t) : n === 3 ? e.add(t) : e[r] = t;
}
function Fe(e, r) {
  return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function K(e) {
  return e instanceof Map;
}
function H(e) {
  return e instanceof Set;
}
function P(e) {
  return e.copy_ || e.base_;
}
function re(e, r) {
  if (K(e))
    return new Map(e);
  if (H(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const t = ge(e);
  if (r === !0 || r === "class_only" && !t) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[w];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const c = o[i], s = n[c];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[c] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[c]
      });
    }
    return Object.create(j(e), n);
  } else {
    const n = j(e);
    if (n !== null && t)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function ce(e, r = !1) {
  return Y(e) || k(e) || !v(e) || (q(e) > 1 && (e.set = e.add = e.clear = e.delete = Ve), Object.freeze(e), r && Object.entries(e).forEach(([t, n]) => ce(n, !0))), e;
}
function Ve() {
  E(2);
}
function Y(e) {
  return Object.isFrozen(e);
}
var xe = {};
function R(e) {
  const r = xe[e];
  return r || E(0, e), r;
}
var F;
function be() {
  return F;
}
function Le(e, r) {
  return {
    drafts_: [],
    parent_: e,
    immer_: r,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function fe(e, r) {
  r && (R("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = r);
}
function te(e) {
  ne(e), e.drafts_.forEach($e), e.drafts_ = null;
}
function ne(e) {
  e === F && (F = e.parent_);
}
function de(e) {
  return F = Le(F, e);
}
function $e(e) {
  const r = e[w];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : r.revoked_ = !0;
}
function le(e, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const t = r.drafts_[0];
  return e !== void 0 && e !== t ? (t[w].modified_ && (te(r), E(4)), v(e) && (e = U(r, e), r.parent_ || G(r, e)), r.patches_ && R("Patches").generateReplacementPatches_(
    t[w].base_,
    e,
    r.patches_,
    r.inversePatches_
  )) : e = U(r, t, []), te(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), e !== me ? e : void 0;
}
function U(e, r, t) {
  if (Y(r))
    return r;
  const n = r[w];
  if (!n)
    return B(
      r,
      (o, i) => he(e, n, r, o, i, t)
    ), r;
  if (n.scope_ !== e)
    return r;
  if (!n.modified_)
    return G(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, c = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), c = !0), B(
      i,
      (s, a) => he(e, n, o, s, a, t, c)
    ), G(e, o, !1), t && e.patches_ && R("Patches").generatePatches_(
      n,
      t,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function he(e, r, t, n, o, i, c) {
  if (process.env.NODE_ENV !== "production" && o === t && E(5), k(o)) {
    const s = i && r && r.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ee(r.assigned_, n) ? i.concat(n) : void 0, a = U(e, o, s);
    if (Ee(t, n, a), k(a))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else c && t.add(o);
  if (v(o) && !Y(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    U(e, o), (!r || !r.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(t, n) && G(e, o);
  }
}
function G(e, r, t = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ce(r, t);
}
function We(e, r) {
  const t = Array.isArray(e), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: r ? r.scope_ : be(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: r,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, i = se;
  t && (o = [n], i = V);
  const { revoke: c, proxy: s } = Proxy.revocable(o, i);
  return n.draft_ = s, n.revoke_ = c, s;
}
var se = {
  get(e, r) {
    if (r === w)
      return e;
    const t = P(e);
    if (!ee(t, r))
      return Be(e, t, r);
    const n = t[r];
    return e.finalized_ || !v(n) ? n : n === J(e.base_, r) ? (Q(e), e.copy_[r] = ie(n, e)) : n;
  },
  has(e, r) {
    return r in P(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(P(e));
  },
  set(e, r, t) {
    const n = we(P(e), r);
    if (n != null && n.set)
      return n.set.call(e.draft_, t), !0;
    if (!e.modified_) {
      const o = J(P(e), r), i = o == null ? void 0 : o[w];
      if (i && i.base_ === t)
        return e.copy_[r] = t, e.assigned_[r] = !1, !0;
      if (Fe(t, o) && (t !== void 0 || ee(e.base_, r)))
        return !0;
      Q(e), oe(e);
    }
    return e.copy_[r] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || r in e.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(e.copy_[r]) || (e.copy_[r] = t, e.assigned_[r] = !0), !0;
  },
  deleteProperty(e, r) {
    return J(e.base_, r) !== void 0 || r in e.base_ ? (e.assigned_[r] = !1, Q(e), oe(e)) : delete e.assigned_[r], e.copy_ && delete e.copy_[r], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, r) {
    const t = P(e), n = Reflect.getOwnPropertyDescriptor(t, r);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || r !== "length",
      enumerable: n.enumerable,
      value: t[r]
    };
  },
  defineProperty() {
    E(11);
  },
  getPrototypeOf(e) {
    return j(e.base_);
  },
  setPrototypeOf() {
    E(12);
  }
}, V = {};
B(se, (e, r) => {
  V[e] = function() {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
});
V.deleteProperty = function(e, r) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r)) && E(13), V.set.call(this, e, r, void 0);
};
V.set = function(e, r, t) {
  return process.env.NODE_ENV !== "production" && r !== "length" && isNaN(parseInt(r)) && E(14), se.set.call(this, e[0], r, t, e[0]);
};
function J(e, r) {
  const t = e[w];
  return (t ? P(t) : e)[r];
}
function Be(e, r, t) {
  var o;
  const n = we(r, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function we(e, r) {
  if (!(r in e))
    return;
  let t = j(e);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, r);
    if (n)
      return n;
    t = j(t);
  }
}
function oe(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && oe(e.parent_));
}
function Q(e) {
  e.copy_ || (e.copy_ = re(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ue = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (r, t, n) => {
      if (typeof r == "function" && typeof t != "function") {
        const i = t;
        t = r;
        const c = this;
        return function(a = i, ...f) {
          return c.produce(a, (u) => t.call(this, u, ...f));
        };
      }
      typeof t != "function" && E(6), n !== void 0 && typeof n != "function" && E(7);
      let o;
      if (v(r)) {
        const i = de(this), c = ie(r, void 0);
        let s = !0;
        try {
          o = t(c), s = !1;
        } finally {
          s ? te(i) : ne(i);
        }
        return fe(i, n), le(o, i);
      } else if (!r || typeof r != "object") {
        if (o = t(r), o === void 0 && (o = r), o === me && (o = void 0), this.autoFreeze_ && ce(o, !0), n) {
          const i = [], c = [];
          R("Patches").generateReplacementPatches_(r, o, i, c), n(i, c);
        }
        return o;
      } else
        E(1, r);
    }, this.produceWithPatches = (r, t) => {
      if (typeof r == "function")
        return (c, ...s) => this.produceWithPatches(c, (a) => r(a, ...s));
      let n, o;
      return [this.produce(r, t, (c, s) => {
        n = c, o = s;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    v(e) || E(8), k(e) && (e = Ge(e));
    const r = de(this), t = ie(e, void 0);
    return t[w].isManual_ = !0, ne(r), t;
  }
  finishDraft(e, r) {
    const t = e && e[w];
    (!t || !t.isManual_) && E(9);
    const { scope_: n } = t;
    return fe(n, r), le(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, r) {
    let t;
    for (t = r.length - 1; t >= 0; t--) {
      const o = r[t];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    t > -1 && (r = r.slice(t + 1));
    const n = R("Patches").applyPatches_;
    return k(e) ? n(e, r) : this.produce(
      e,
      (o) => n(o, r)
    );
  }
};
function ie(e, r) {
  const t = K(e) ? R("MapSet").proxyMap_(e, r) : H(e) ? R("MapSet").proxySet_(e, r) : We(e, r);
  return (r ? r.scope_ : be()).drafts_.push(t), t;
}
function Ge(e) {
  return k(e) || E(10, e), Ce(e);
}
function Ce(e) {
  if (!v(e) || Y(e))
    return e;
  const r = e[w];
  let t;
  if (r) {
    if (!r.modified_)
      return r.base_;
    r.finalized_ = !0, t = re(e, r.scope_.immer_.useStrictShallowCopy_);
  } else
    t = re(e, !0);
  return B(t, (n, o) => {
    Ee(t, n, Ce(o));
  }), r && (r.finalized_ = !1), t;
}
var C = new Ue(), De = C.produce;
C.produceWithPatches.bind(
  C
);
C.setAutoFreeze.bind(C);
C.setUseStrictShallowCopy.bind(C);
C.applyPatches.bind(C);
C.createDraft.bind(C);
C.finishDraft.bind(C);
var qe = (e) => e && typeof e.match == "function";
function M(e, r) {
  function t(...n) {
    if (r) {
      let o = r(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? g(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return t.toString = () => `${e}`, t.type = e, t.match = (n) => Ie(n) && n.type === e, t;
}
function pe(e) {
  return v(e) ? De(e, () => {
  }) : e;
}
function ye(e, r, t) {
  return e.has(r) ? e.get(r) : e.set(r, t(r)).get(r);
}
function Ne(e) {
  const r = {}, t = [];
  let n;
  const o = {
    addCase(i, c) {
      if (process.env.NODE_ENV !== "production") {
        if (t.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? g(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? g(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? g(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in r)
        throw new Error(process.env.NODE_ENV === "production" ? g(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return r[s] = c, o;
    },
    addMatcher(i, c) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? g(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return t.push({
        matcher: i,
        reducer: c
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? g(31) : "`builder.addDefaultCase` can only be called once");
      return n = i, o;
    }
  };
  return e(o), [r, t, n];
}
function Ke(e) {
  return typeof e == "function";
}
function He(e, r) {
  if (process.env.NODE_ENV !== "production" && typeof r == "object")
    throw new Error(process.env.NODE_ENV === "production" ? g(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [t, n, o] = Ne(r), i;
  if (Ke(e))
    i = () => pe(e());
  else {
    const s = pe(e);
    i = () => s;
  }
  function c(s = i(), a) {
    let f = [t[a.type], ...n.filter(({
      matcher: u
    }) => u(a)).map(({
      reducer: u
    }) => u)];
    return f.filter((u) => !!u).length === 0 && (f = [o]), f.reduce((u, p) => {
      if (p)
        if (k(u)) {
          const O = p(u, a);
          return O === void 0 ? u : O;
        } else {
          if (v(u))
            return De(u, (y) => p(y, a));
          {
            const y = p(u, a);
            if (y === void 0) {
              if (u === null)
                return u;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return y;
          }
        }
      return u;
    }, s);
  }
  return c.getInitialState = i, c;
}
var Ye = (e, r) => qe(e) ? e.match(r) : e(r);
function Xe(...e) {
  return (r) => e.some((t) => Ye(t, r));
}
var Je = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Qe = (e = 21) => {
  let r = "", t = e;
  for (; t--; )
    r += Je[Math.random() * 64 | 0];
  return r;
}, Ze = ["name", "message", "stack", "code"], Z = class {
  constructor(e, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    X(this, "_type");
    this.payload = e, this.meta = r;
  }
}, _e = class {
  constructor(e, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    X(this, "_type");
    this.payload = e, this.meta = r;
  }
}, er = (e) => {
  if (typeof e == "object" && e !== null) {
    const r = {};
    for (const t of Ze)
      typeof e[t] == "string" && (r[t] = e[t]);
    return r;
  }
  return {
    message: String(e)
  };
}, ae = /* @__PURE__ */ (() => {
  function e(r, t, n) {
    const o = M(r + "/fulfilled", (a, f, u, p) => ({
      payload: a,
      meta: {
        ...p || {},
        arg: u,
        requestId: f,
        requestStatus: "fulfilled"
      }
    })), i = M(r + "/pending", (a, f, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: f,
        requestId: a,
        requestStatus: "pending"
      }
    })), c = M(r + "/rejected", (a, f, u, p, y) => ({
      payload: p,
      error: (n && n.serializeError || er)(a || "Rejected"),
      meta: {
        ...y || {},
        arg: u,
        requestId: f,
        rejectedWithValue: !!p,
        requestStatus: "rejected",
        aborted: (a == null ? void 0 : a.name) === "AbortError",
        condition: (a == null ? void 0 : a.name) === "ConditionError"
      }
    }));
    function s(a) {
      return (f, u, p) => {
        const y = n != null && n.idGenerator ? n.idGenerator(a) : Qe(), O = new AbortController();
        let D, I;
        function A(N) {
          I = N, O.abort();
        }
        const z = async function() {
          var h, _;
          let N;
          try {
            let m = (h = n == null ? void 0 : n.condition) == null ? void 0 : h.call(n, a, {
              getState: u,
              extra: p
            });
            if (tr(m) && (m = await m), m === !1 || O.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const S = new Promise((d, T) => {
              D = () => {
                T({
                  name: "AbortError",
                  message: I || "Aborted"
                });
              }, O.signal.addEventListener("abort", D);
            });
            f(i(y, a, (_ = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : _.call(n, {
              requestId: y,
              arg: a
            }, {
              getState: u,
              extra: p
            }))), N = await Promise.race([S, Promise.resolve(t(a, {
              dispatch: f,
              getState: u,
              extra: p,
              requestId: y,
              signal: O.signal,
              abort: A,
              rejectWithValue: (d, T) => new Z(d, T),
              fulfillWithValue: (d, T) => new _e(d, T)
            })).then((d) => {
              if (d instanceof Z)
                throw d;
              return d instanceof _e ? o(d.payload, y, a, d.meta) : o(d, y, a);
            })]);
          } catch (m) {
            N = m instanceof Z ? c(null, y, a, m.payload, m.meta) : c(m, y, a);
          } finally {
            D && O.signal.removeEventListener("abort", D);
          }
          return n && !n.dispatchConditionRejection && c.match(N) && N.meta.condition || f(N), N;
        }();
        return Object.assign(z, {
          abort: A,
          requestId: y,
          arg: a,
          unwrap() {
            return z.then(rr);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: c,
      fulfilled: o,
      settled: Xe(c, o),
      typePrefix: r
    });
  }
  return e.withTypes = () => e, e;
})();
function rr(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function tr(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var nr = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function or(e, r) {
  return `${e}/${r}`;
}
function ir({
  creators: e
} = {}) {
  var t;
  const r = (t = e == null ? void 0 : e.asyncThunk) == null ? void 0 : t[nr];
  return function(o) {
    const {
      name: i,
      reducerPath: c = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? g(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof o.reducers == "function" ? o.reducers(ar()) : o.reducers) || {}, a = Object.keys(s), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(l, h) {
        const _ = typeof l == "string" ? l : l.type;
        if (!_)
          throw new Error(process.env.NODE_ENV === "production" ? g(12) : "`context.addCase` cannot be called with an empty action type");
        if (_ in f.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? g(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + _);
        return f.sliceCaseReducersByType[_] = h, u;
      },
      addMatcher(l, h) {
        return f.sliceMatchers.push({
          matcher: l,
          reducer: h
        }), u;
      },
      exposeAction(l, h) {
        return f.actionCreators[l] = h, u;
      },
      exposeCaseReducer(l, h) {
        return f.sliceCaseReducersByName[l] = h, u;
      }
    };
    a.forEach((l) => {
      const h = s[l], _ = {
        reducerName: l,
        type: or(i, l),
        createNotation: typeof o.reducers == "function"
      };
      fr(h) ? lr(_, h, u, r) : ur(_, h, u);
    });
    function p() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? g(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [l = {}, h = [], _ = void 0] = typeof o.extraReducers == "function" ? Ne(o.extraReducers) : [o.extraReducers], m = {
        ...l,
        ...f.sliceCaseReducersByType
      };
      return He(o.initialState, (S) => {
        for (let d in m)
          S.addCase(d, m[d]);
        for (let d of f.sliceMatchers)
          S.addMatcher(d.matcher, d.reducer);
        for (let d of h)
          S.addMatcher(d.matcher, d.reducer);
        _ && S.addDefaultCase(_);
      });
    }
    const y = (l) => l, O = /* @__PURE__ */ new Map();
    let D;
    function I(l, h) {
      return D || (D = p()), D(l, h);
    }
    function A() {
      return D || (D = p()), D.getInitialState();
    }
    function z(l, h = !1) {
      function _(S) {
        let d = S[l];
        if (typeof d > "u") {
          if (h)
            d = A();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? g(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return d;
      }
      function m(S = y) {
        const d = ye(O, h, () => /* @__PURE__ */ new WeakMap());
        return ye(d, S, () => {
          const T = {};
          for (const [Oe, ve] of Object.entries(o.selectors ?? {}))
            T[Oe] = cr(ve, S, A, h);
          return T;
        });
      }
      return {
        reducerPath: l,
        getSelectors: m,
        get selectors() {
          return m(_);
        },
        selectSlice: _
      };
    }
    const N = {
      name: i,
      reducer: I,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: A,
      ...z(c),
      injectInto(l, {
        reducerPath: h,
        ..._
      } = {}) {
        const m = h ?? c;
        return l.inject({
          reducerPath: m,
          reducer: I
        }, _), {
          ...N,
          ...z(m, !0)
        };
      }
    };
    return N;
  };
}
function cr(e, r, t, n) {
  function o(i, ...c) {
    let s = r(i);
    if (typeof s > "u") {
      if (n)
        s = t();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? g(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...c);
  }
  return o.unwrapped = e, o;
}
var sr = /* @__PURE__ */ ir();
function ar() {
  function e(r, t) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: r,
      ...t
    };
  }
  return e.withTypes = () => e, {
    reducer(r) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [r.name](...t) {
          return r(...t);
        }
      }[r.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(r, t) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: r,
        reducer: t
      };
    },
    asyncThunk: e
  };
}
function ur({
  type: e,
  reducerName: r,
  createNotation: t
}, n, o) {
  let i, c;
  if ("reducer" in n) {
    if (t && !dr(n))
      throw new Error(process.env.NODE_ENV === "production" ? g(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = n.reducer, c = n.prepare;
  } else
    i = n;
  o.addCase(e, i).exposeCaseReducer(r, i).exposeAction(r, c ? M(e, c) : M(e));
}
function fr(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function dr(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function lr({
  type: e,
  reducerName: r
}, t, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? g(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: c,
    pending: s,
    rejected: a,
    settled: f,
    options: u
  } = t, p = o(e, i, u);
  n.exposeAction(r, p), c && n.addCase(p.fulfilled, c), s && n.addCase(p.pending, s), a && n.addCase(p.rejected, a), f && n.addMatcher(p.settled, f), n.exposeCaseReducer(r, {
    fulfilled: c || x,
    pending: s || x,
    rejected: a || x,
    settled: f || x
  });
}
function x() {
}
function g(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const L = ae(
  "slice/auth/doRegister",
  async (e, { rejectWithValue: r }) => ke(e).then((t) => t).catch((t) => r(t))
), $ = ae(
  "slice/auth/doLogin",
  async (e, { rejectWithValue: r }) => Re(e).then((t) => t).catch((t) => r(t))
), W = ae(
  "slice/auth/doRefresh",
  async (e, { rejectWithValue: r }) => Ae(e).then((t) => t).catch((t) => r(t))
), hr = {
  accessToken: localStorage.getItem("accessToken") || void 0,
  refreshToken: localStorage.getItem("refreshToken") || void 0,
  login: {
    status: b.IDLE,
    error: void 0
  },
  register: {
    status: b.IDLE,
    error: void 0
  }
}, pr = {
  clearErrorsRegister: (e) => {
    e.register.status = b.IDLE, e.register.error = void 0;
  },
  clearErrorsLogin: (e) => {
    e.login.status = b.IDLE, e.login.error = void 0;
  }
}, yr = (e) => e.addCase($.pending, (r) => {
  r.login.status = b.LOADING;
}).addCase($.fulfilled, (r, t) => {
  r.login.status = b.SUCCESS;
  const { accessToken: n, refreshToken: o } = t.payload;
  r.accessToken = n, r.refreshToken = o, localStorage.setItem("accessToken", n), localStorage.setItem("refreshToken", o);
}).addCase($.rejected, (r, t) => {
  r.login.status = b.FAILED, r.login.error = t.payload;
}).addCase(L.pending, (r) => {
  r.register.status = b.LOADING;
}).addCase(L.fulfilled, (r, t) => {
  r.register.status = b.SUCCESS;
  const { accessToken: n, refreshToken: o } = t.payload;
  r.accessToken = n, r.refreshToken = o, localStorage.setItem("accessToken", n), localStorage.setItem("refreshToken", o);
}).addCase(L.rejected, (r, t) => {
  r.register.status = b.FAILED, r.register.error = t.payload;
}).addCase(W.pending, (r) => {
  r.register.status = b.LOADING;
}).addCase(W.fulfilled, (r, t) => {
  r.register.status = b.SUCCESS;
  const { accessToken: n, refreshToken: o } = t.payload;
  r.accessToken = n, r.refreshToken = o, localStorage.setItem("accessToken", n), localStorage.setItem("refreshToken", o);
}).addCase(W.rejected, (r, t) => {
  r.register.status = b.FAILED, r.register.error = t.payload;
}), Se = sr({
  name: "slice/auth",
  initialState: hr,
  reducers: pr,
  extraReducers: yr
}), Er = Se.actions, br = {
  doRegister: L,
  doLogin: $,
  doRefresh: W
}, wr = Se.reducer;
export {
  Er as authActions,
  br as authAsyncActions,
  wr as authSlice
};
//# sourceMappingURL=auth.mjs.map
