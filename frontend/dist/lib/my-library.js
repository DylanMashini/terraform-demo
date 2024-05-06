var yt = Object.defineProperty;
var wt = (e, t, n) => t in e ? yt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var w = (e, t, n) => (wt(e, typeof t != "symbol" ? t + "" : t, n), n);
function v() {
}
function pt(e) {
  return e();
}
function it() {
  return /* @__PURE__ */ Object.create(null);
}
function P(e) {
  e.forEach(pt);
}
function ht(e) {
  return typeof e == "function";
}
function q(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function vt(e) {
  return Object.keys(e).length === 0;
}
function xt(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return v;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function kt(e, t, n) {
  e.$$.on_destroy.push(xt(t, n));
}
function d(e, t) {
  e.appendChild(t);
}
function Et(e, t, n) {
  const s = jt(e);
  if (!s.getElementById(t)) {
    const o = $("style");
    o.id = t, o.textContent = n, Ot(s, o);
  }
}
function jt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Ot(e, t) {
  return d(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function j(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Nt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function $(e) {
  return document.createElement(e);
}
function F(e) {
  return document.createTextNode(e);
}
function O() {
  return F(" ");
}
function et() {
  return F("");
}
function T(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ct(e) {
  return Array.from(e.childNodes);
}
function $t(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ut(e, t) {
  e.value = t ?? "";
}
function Lt(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let I;
function B(e) {
  I = e;
}
function Mt() {
  if (!I)
    throw new Error("Function called outside component initialization");
  return I;
}
function St(e) {
  Mt().$$.on_mount.push(e);
}
function At(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((s) => s.call(this, t));
}
const A = [], X = [];
let H = [];
const Y = [], Ht = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function Pt() {
  Z || (Z = !0, Ht.then(gt));
}
function tt(e) {
  H.push(e);
}
function Tt(e) {
  Y.push(e);
}
const W = /* @__PURE__ */ new Set();
let M = 0;
function gt() {
  if (M !== 0)
    return;
  const e = I;
  do {
    try {
      for (; M < A.length; ) {
        const t = A[M];
        M++, B(t), Bt(t.$$);
      }
    } catch (t) {
      throw A.length = 0, M = 0, t;
    }
    for (B(null), A.length = 0, M = 0; X.length; )
      X.pop()();
    for (let t = 0; t < H.length; t += 1) {
      const n = H[t];
      W.has(n) || (W.add(n), n());
    }
    H.length = 0;
  } while (A.length);
  for (; Y.length; )
    Y.pop()();
  Z = !1, W.clear(), B(e);
}
function Bt(e) {
  if (e.fragment !== null) {
    e.update(), P(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(tt);
  }
}
function zt(e) {
  const t = [], n = [];
  H.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), H = t;
}
const D = /* @__PURE__ */ new Set();
let L;
function nt() {
  L = {
    r: 0,
    c: [],
    p: L
    // parent group
  };
}
function st() {
  L.r || P(L.c), L = L.p;
}
function y(e, t) {
  e && e.i && (D.delete(e), e.i(t));
}
function E(e, t, n, s) {
  if (e && e.o) {
    if (D.has(e))
      return;
    D.add(e), L.c.push(() => {
      D.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else
    s && s();
}
function ct(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function It(e, t, n) {
  const s = e.$$.props[t];
  s !== void 0 && (e.$$.bound[s] = n, n(e.$$.ctx[s]));
}
function V(e) {
  e && e.c();
}
function R(e, t, n) {
  const { fragment: s, after_update: o } = e.$$;
  s && s.m(t, n), tt(() => {
    const r = e.$$.on_mount.map(pt).filter(ht);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : P(r), e.$$.on_mount = [];
  }), o.forEach(tt);
}
function J(e, t) {
  const n = e.$$;
  n.fragment !== null && (zt(n.after_update), P(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Rt(e, t) {
  e.$$.dirty[0] === -1 && (A.push(e), Pt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function G(e, t, n, s, o, r, i = null, f = [-1]) {
  const u = I;
  B(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: v,
    not_equal: o,
    bound: it(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: it(),
    dirty: f,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  i && i(c.root);
  let l = !1;
  if (c.ctx = n ? n(e, t.props || {}, (a, _, ...x) => {
    const N = x.length ? x[0] : _;
    return c.ctx && o(c.ctx[a], c.ctx[a] = N) && (!c.skip_bound && c.bound[a] && c.bound[a](N), l && Rt(e, a)), _;
  }) : [], c.update(), l = !0, P(c.before_update), c.fragment = s ? s(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = Ct(t.target);
      c.fragment && c.fragment.l(a), a.forEach(k);
    } else
      c.fragment && c.fragment.c();
    t.intro && y(e.$$.fragment), R(e, t.target, t.anchor), gt();
  }
  B(u);
}
let bt;
typeof HTMLElement == "function" && (bt = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    w(this, "$$ctor");
    /** Slots */
    w(this, "$$s");
    /** The Svelte component instance */
    w(this, "$$c");
    /** Whether or not the custom element is connected */
    w(this, "$$cn", !1);
    /** Component props data */
    w(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    w(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    w(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    w(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    w(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let i;
          return {
            c: function() {
              i = $("slot"), r !== "default" && p(i, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, l) {
              j(c, i, l);
            },
            d: function(c) {
              c && k(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, s = Lt(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = U(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const o = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const i = U(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const f = this.$$c.$on(r, i);
          this.$$l_u.set(i, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = U(t, s, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function U(e, t, n, s) {
  var r;
  const o = (r = n[e]) == null ? void 0 : r.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Jt(e, t, n, s, o, r) {
  let i = class extends bt {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((f) => {
    Object.defineProperty(i.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(u) {
        var c;
        u = U(f, u, t), this.$$d[f] = u, (c = this.$$c) == null || c.$set({ [f]: u });
      }
    });
  }), s.forEach((f) => {
    Object.defineProperty(i.prototype, f, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[f];
      }
    });
  }), r && (i = r(i)), e.element = /** @type {any} */
  i, i;
}
class K {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    w(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    w(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    J(this, 1), this.$destroy = v;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!ht(n))
      return v;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const o = s.indexOf(n);
      o !== -1 && s.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !vt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const qt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(qt);
function lt(e) {
  let t, n, s;
  return {
    c() {
      t = $("button"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg> <span class="sr-only">Open chat</span>', p(t, "class", "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 rounded-full bg-gray-900 text-gray-50 shadow-lg hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"), p(t, "type", "button"), p(t, "aria-haspopup", "dialog"), p(t, "aria-expanded", "false"), p(t, "aria-controls", "radix-:r1h:"), p(t, "data-state", "closed");
    },
    m(o, r) {
      j(o, t, r), n || (s = T(
        t,
        "click",
        /*click_handler*/
        e[1]
      ), n = !0);
    },
    d(o) {
      o && k(t), n = !1, s();
    }
  };
}
function Dt(e) {
  let t, n = !/*open*/
  e[0] && lt(e);
  return {
    c() {
      n && n.c(), t = et();
    },
    m(s, o) {
      n && n.m(s, o), j(s, t, o);
    },
    p(s, [o]) {
      /*open*/
      s[0] ? n && (n.d(1), n = null) : n || (n = lt(s), n.c(), n.m(t.parentNode, t));
    },
    i: v,
    o: v,
    d(s) {
      s && k(t), n && n.d(s);
    }
  };
}
function Ut(e, t, n) {
  let { open: s } = t;
  function o(r) {
    At.call(this, e, r);
  }
  return e.$$set = (r) => {
    "open" in r && n(0, s = r.open);
  }, [s, o];
}
class Vt extends K {
  constructor(t) {
    super(), G(this, t, Ut, Dt, q, { open: 0 });
  }
}
function Ft(e) {
  let t;
  return {
    c() {
      t = $("span"), t.innerHTML = '<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">TT</span>', p(t, "class", "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full");
    },
    m(n, s) {
      j(n, t, s);
    },
    p: v,
    i: v,
    o: v,
    d(n) {
      n && k(t);
    }
  };
}
class _t extends K {
  constructor(t) {
    super(), G(this, t, null, Ft, q, {});
  }
}
const S = [];
function Gt(e, t = v) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function o(f) {
    if (q(e, f) && (e = f, n)) {
      const u = !S.length;
      for (const c of s)
        c[1](), S.push(c, e);
      if (u) {
        for (let c = 0; c < S.length; c += 2)
          S[c][0](S[c + 1]);
        S.length = 0;
      }
    }
  }
  function r(f) {
    o(f(e));
  }
  function i(f, u = v) {
    const c = [f, u];
    return s.add(c), s.size === 1 && (n = t(o, r) || v), f(e), () => {
      s.delete(c), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: r, subscribe: i };
}
let z = Gt([{
  contents: "Hello, how can I assist you today?",
  author: "agent",
  updating: !1
}]);
function ft(e, t, n) {
  const s = e.slice();
  return s[2] = t[n], s;
}
function at(e) {
  let t, n, s, o, r, i, f, u, c, l, a, _, x, N, Q, rt, C = ct(
    /*$chatHistory*/
    e[1]
  ), g = [];
  for (let h = 0; h < C.length; h += 1)
    g[h] = dt(ft(e, C, h));
  const mt = (h) => E(g[h], 1, 1, () => {
    g[h] = null;
  });
  return {
    c() {
      t = $("div"), n = $("div"), s = $("div"), o = $("div"), o.innerHTML = '<div class="text-sm font-medium">Support Agent</div>', r = O(), i = $("button"), i.innerHTML = '<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> <span class="sr-only">Close chat</span>', f = O(), u = $("div");
      for (let h = 0; h < g.length; h += 1)
        g[h].c();
      c = O(), l = $("div"), a = $("input"), _ = O(), x = $("button"), x.textContent = "Send", p(o, "class", "flex items-center gap-3"), p(s, "class", "bg-gray-900 text-gray-50 px-4 py-3 rounded-t-lg flex items-center justify-between"), p(u, "class", "flex-1 overflow-y-auto p-4 space-y-4"), p(a, "class", "flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"), p(a, "placeholder", "Type your message..."), p(x, "class", "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"), p(l, "class", "bg-gray-100 px-4 py-3 rounded-b-lg flex items-center gap-2"), p(n, "class", "flex flex-col h-[500px]"), p(t, "class", "w-full max-w-md rounded-lg shadow-l");
    },
    m(h, m) {
      j(h, t, m), d(t, n), d(n, s), d(s, o), d(s, r), d(s, i), d(n, f), d(n, u);
      for (let b = 0; b < g.length; b += 1)
        g[b] && g[b].m(u, null);
      d(n, c), d(n, l), d(l, a), ut(
        a,
        /*message*/
        e[2]
      ), d(l, _), d(l, x), N = !0, Q || (rt = [
        T(
          i,
          "click",
          /*click_handler*/
          e[4]
        ),
        T(
          a,
          "input",
          /*input_input_handler*/
          e[5]
        ),
        T(
          a,
          "keydown",
          /*keydown_handler*/
          e[6]
        ),
        T(
          x,
          "click",
          /*sendMessage*/
          e[3]
        )
      ], Q = !0);
    },
    p(h, m) {
      if (m & /*$chatHistory*/
      2) {
        C = ct(
          /*$chatHistory*/
          h[1]
        );
        let b;
        for (b = 0; b < C.length; b += 1) {
          const ot = ft(h, C, b);
          g[b] ? (g[b].p(ot, m), y(g[b], 1)) : (g[b] = dt(ot), g[b].c(), y(g[b], 1), g[b].m(u, null));
        }
        for (nt(), b = C.length; b < g.length; b += 1)
          mt(b);
        st();
      }
      m & /*message*/
      4 && a.value !== /*message*/
      h[2] && ut(
        a,
        /*message*/
        h[2]
      );
    },
    i(h) {
      if (!N) {
        for (let m = 0; m < C.length; m += 1)
          y(g[m]);
        N = !0;
      }
    },
    o(h) {
      g = g.filter(Boolean);
      for (let m = 0; m < g.length; m += 1)
        E(g[m]);
      N = !1;
    },
    d(h) {
      h && k(t), Nt(g, h), Q = !1, P(rt);
    }
  };
}
function Kt(e) {
  let t, n, s, o, r = (
    /*message*/
    e[2].contents + ""
  ), i, f, u, c, l;
  return u = new _t({}), {
    c() {
      t = $("div"), n = $("div"), s = $("div"), o = $("p"), i = F(r), f = O(), V(u.$$.fragment), c = O(), p(s, "class", "bg-gray-900 text-gray-50 p-3 rounded-lg max-w-[75%] text-sm"), p(n, "class", "flex items-start gap-3 justify-end"), p(t, "class", "flex items-start justify-end gap-3");
    },
    m(a, _) {
      j(a, t, _), d(t, n), d(n, s), d(s, o), d(o, i), d(n, f), R(u, n, null), d(t, c), l = !0;
    },
    p(a, _) {
      (!l || _ & /*$chatHistory*/
      2) && r !== (r = /*message*/
      a[2].contents + "") && $t(i, r);
    },
    i(a) {
      l || (y(u.$$.fragment, a), l = !0);
    },
    o(a) {
      E(u.$$.fragment, a), l = !1;
    },
    d(a) {
      a && k(t), J(u);
    }
  };
}
function Qt(e) {
  let t, n, s, o, r, i, f = (
    /*message*/
    e[2].contents + ""
  ), u, c, l;
  return s = new _t({}), {
    c() {
      t = $("div"), n = $("div"), V(s.$$.fragment), o = O(), r = $("div"), i = $("p"), u = F(f), c = O(), p(r, "class", "bg-gray-100 p-3 rounded-lg max-w-[75%] text-sm"), p(n, "class", "flex items-start gap-3"), p(t, "class", "flex items-start gap-3");
    },
    m(a, _) {
      j(a, t, _), d(t, n), R(s, n, null), d(n, o), d(n, r), d(r, i), d(i, u), d(t, c), l = !0;
    },
    p(a, _) {
      (!l || _ & /*$chatHistory*/
      2) && f !== (f = /*message*/
      a[2].contents + "") && $t(u, f);
    },
    i(a) {
      l || (y(s.$$.fragment, a), l = !0);
    },
    o(a) {
      E(s.$$.fragment, a), l = !1;
    },
    d(a) {
      a && k(t), J(s);
    }
  };
}
function dt(e) {
  let t, n, s, o;
  const r = [Qt, Kt], i = [];
  function f(u, c) {
    return (
      /*message*/
      u[2].author == "agent" ? 0 : 1
    );
  }
  return t = f(e), n = i[t] = r[t](e), {
    c() {
      n.c(), s = et();
    },
    m(u, c) {
      i[t].m(u, c), j(u, s, c), o = !0;
    },
    p(u, c) {
      let l = t;
      t = f(u), t === l ? i[t].p(u, c) : (nt(), E(i[l], 1, 1, () => {
        i[l] = null;
      }), st(), n = i[t], n ? n.p(u, c) : (n = i[t] = r[t](u), n.c()), y(n, 1), n.m(s.parentNode, s));
    },
    i(u) {
      o || (y(n), o = !0);
    },
    o(u) {
      E(n), o = !1;
    },
    d(u) {
      u && k(s), i[t].d(u);
    }
  };
}
function Wt(e) {
  let t, n, s = (
    /*open*/
    e[0] && at(e)
  );
  return {
    c() {
      s && s.c(), t = et();
    },
    m(o, r) {
      s && s.m(o, r), j(o, t, r), n = !0;
    },
    p(o, [r]) {
      /*open*/
      o[0] ? s ? (s.p(o, r), r & /*open*/
      1 && y(s, 1)) : (s = at(o), s.c(), y(s, 1), s.m(t.parentNode, t)) : s && (nt(), E(s, 1, 1, () => {
        s = null;
      }), st());
    },
    i(o) {
      n || (y(s), n = !0);
    },
    o(o) {
      E(s), n = !1;
    },
    d(o) {
      o && k(t), s && s.d(o);
    }
  };
}
function Xt(e, t, n) {
  let s;
  kt(e, z, (l) => n(1, s = l));
  let { open: o } = t, r = "";
  const i = () => {
    r && !s[s.length - 1].updating && (s.push({
      author: "user",
      contents: r,
      updating: !1
    }), z.set(s), n(2, r = ""));
  }, f = () => n(0, o = !o);
  function u() {
    r = this.value, n(2, r);
  }
  const c = (l) => l.key == "Enter" && i();
  return e.$$set = (l) => {
    "open" in l && n(0, o = l.open);
  }, [
    o,
    s,
    r,
    i,
    f,
    u,
    c
  ];
}
class Yt extends K {
  constructor(t) {
    super(), G(this, t, Xt, Wt, q, { open: 0 });
  }
}
async function Zt() {
  let e = "https://m7ebkwpaad.execute-api.us-east-1.amazonaws.com/prod";
  z.subscribe(async (t) => {
    if (t[t.length - 1].author == "user") {
      z.update((s) => (s.push({
        author: "agent",
        contents: "",
        updating: !0
      }), s));
      let n = await (await fetch(`${e}/create-chat`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          messages: t.map((s) => ({
            message: s.contents,
            author: s.author
          }))
        })
      })).json();
      z.update((s) => (s[s.length - 1].updating = !1, s[s.length - 1].contents = n.response, s));
    }
  });
}
function te(e) {
  Et(e, "svelte-va4hx6", ".root.svelte-va4hx6{display:none}");
}
function ee(e) {
  let t, n, s, o, r, i, f;
  s = new Vt({ props: { open: (
    /*open*/
    e[0]
  ) } }), s.$on(
    "click",
    /*click_handler*/
    e[1]
  );
  function u(l) {
    e[2](l);
  }
  let c = {};
  return (
    /*open*/
    e[0] !== void 0 && (c.open = /*open*/
    e[0]), r = new Yt({ props: c }), X.push(() => It(r, "open", u)), {
      c() {
        t = $("div"), n = $("div"), V(s.$$.fragment), o = O(), V(r.$$.fragment), p(n, "class", "fixed bottom-4 right-4 z-50"), p(t, "class", "root svelte-va4hx6");
      },
      m(l, a) {
        j(l, t, a), d(t, n), R(s, n, null), d(n, o), R(r, n, null), f = !0;
      },
      p(l, [a]) {
        const _ = {};
        a & /*open*/
        1 && (_.open = /*open*/
        l[0]), s.$set(_);
        const x = {};
        !i && a & /*open*/
        1 && (i = !0, x.open = /*open*/
        l[0], Tt(() => i = !1)), r.$set(x);
      },
      i(l) {
        f || (y(s.$$.fragment, l), y(r.$$.fragment, l), f = !0);
      },
      o(l) {
        E(s.$$.fragment, l), E(r.$$.fragment, l), f = !1;
      },
      d(l) {
        l && k(t), J(s), J(r);
      }
    }
  );
}
function ne(e, t, n) {
  St(() => {
    Zt();
  });
  let s = !1;
  const o = () => n(0, s = !s);
  function r(i) {
    s = i, n(0, s);
  }
  return [s, o, r];
}
class se extends K {
  constructor(t) {
    super(), G(this, t, ne, ee, q, {}, te);
  }
}
customElements.define("my-component", Jt(se, {}, [], [], !0));
export {
  se as default
};
(function(){"use strict";(function(e,i){const o=document.getElementsByTagName("my-component")[0],t=document.createElement("style");t.innerHTML=e,o.shadowRoot.appendChild(t)})('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fixed{position:fixed}.relative{position:relative}.bottom-4{bottom:1rem}.bottom-6{bottom:1.5rem}.right-4{right:1rem}.right-6{right:1.5rem}.z-50{z-index:50}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.h-10{height:2.5rem}.h-12{height:3rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-96{height:24rem}.h-\\[500px\\]{height:500px}.h-full{height:100%}.min-h-20{min-height:5rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-5{width:1.25rem}.w-56{width:14rem}.w-6{width:1.5rem}.w-full{width:100%}.max-w-\\[75\\%\\]{max-width:75%}.max-w-md{max-width:28rem}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.whitespace-nowrap{white-space:nowrap}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-b-lg{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.border{border-width:1px}.bg-blue-200{--tw-bg-opacity: 1;background-color:rgb(191 219 254 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.bg-slate-800{--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.p-3{padding:.75rem}.p-4{padding:1rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-gray-50{--tw-text-opacity: 1;color:rgb(249 250 251 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.root{display:block!important}.bg-muted{background-color:#f4f4f5}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.hover\\:bg-gray-900\\/90:hover{background-color:#111827e6}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-gray-950:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(3 7 18 / var(--tw-ring-opacity))}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (prefers-color-scheme: dark){.dark\\:bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.dark\\:text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.dark\\:hover\\:bg-gray-50\\/90:hover{background-color:#f9fafbe6}.dark\\:focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}}')})();
