var nt = Object.defineProperty;
var ot = (t, e, n) => e in t ? nt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var O = (t, e, n) => (ot(t, typeof e != "symbol" ? e + "" : e, n), n);
function C() {
}
function j(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Ke(t) {
  return t();
}
function Te() {
  return /* @__PURE__ */ Object.create(null);
}
function R(t) {
  t.forEach(Ke);
}
function qe(t) {
  return typeof t == "function";
}
function A(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function st(t) {
  return Object.keys(t).length === 0;
}
function De(t, ...e) {
  if (t == null) {
    for (const o of e)
      o(void 0);
    return C;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function rt(t) {
  let e;
  return De(t, (n) => e = n)(), e;
}
function oe(t, e, n) {
  t.$$.on_destroy.push(De(e, n));
}
function ae(t, e, n, o) {
  if (t) {
    const s = Re(t, e, n, o);
    return t[0](s);
  }
}
function Re(t, e, n, o) {
  return t[1] && o ? j(n.ctx.slice(), t[1](o(e))) : n.ctx;
}
function de(t, e, n, o) {
  if (t[2] && o) {
    const s = t[2](o(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const r = [], i = Math.max(e.dirty.length, s.length);
      for (let l = 0; l < i; l += 1)
        r[l] = e.dirty[l] | s[l];
      return r;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function he(t, e, n, o, s, r) {
  if (s) {
    const i = Re(e, n, o, r);
    t.p(i, s);
  }
}
function pe(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let o = 0; o < n; o++)
      e[o] = -1;
    return e;
  }
  return -1;
}
function D(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Oe(t, e) {
  const n = {};
  e = new Set(e);
  for (const o in t)
    !e.has(o) && o[0] !== "$" && (n[o] = t[o]);
  return n;
}
function me(t, e, n) {
  return t.set(n), e;
}
function v(t, e) {
  t.appendChild(e);
}
function it(t, e, n) {
  const o = lt(t);
  if (!o.getElementById(e)) {
    const s = $("style");
    s.id = e, s.textContent = n, ut(o, s);
  }
}
function lt(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function ut(t, e) {
  return v(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function k(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Je(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function $(t) {
  return document.createElement(t);
}
function Ue(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ge(t) {
  return document.createTextNode(t);
}
function x() {
  return ge(" ");
}
function re() {
  return ge("");
}
function W(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function g(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ce(t, e) {
  for (const n in e)
    g(t, n, e[n]);
}
function ct(t) {
  return Array.from(t.childNodes);
}
function Ve(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function xe(t, e) {
  t.value = e ?? "";
}
function ft(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let se;
function ne(t) {
  se = t;
}
function at() {
  if (!se)
    throw new Error("Function called outside component initialization");
  return se;
}
function dt(t) {
  at().$$.on_mount.push(t);
}
function ht(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((o) => o.call(this, e));
}
const Z = [], X = [];
let G = [];
const $e = [], Ye = /* @__PURE__ */ Promise.resolve();
let ve = !1;
function Fe() {
  ve || (ve = !0, Ye.then(we));
}
function Ze() {
  return Fe(), Ye;
}
function ye(t) {
  G.push(t);
}
function ke(t) {
  $e.push(t);
}
const _e = /* @__PURE__ */ new Set();
let Y = 0;
function we() {
  if (Y !== 0)
    return;
  const t = se;
  do {
    try {
      for (; Y < Z.length; ) {
        const e = Z[Y];
        Y++, ne(e), pt(e.$$);
      }
    } catch (e) {
      throw Z.length = 0, Y = 0, e;
    }
    for (ne(null), Z.length = 0, Y = 0; X.length; )
      X.pop()();
    for (let e = 0; e < G.length; e += 1) {
      const n = G[e];
      _e.has(n) || (_e.add(n), n());
    }
    G.length = 0;
  } while (Z.length);
  for (; $e.length; )
    $e.pop()();
  ve = !1, _e.clear(), ne(t);
}
function pt(t) {
  if (t.fragment !== null) {
    t.update(), R(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ye);
  }
}
function gt(t) {
  const e = [], n = [];
  G.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), G = e;
}
const le = /* @__PURE__ */ new Set();
let U;
function ee() {
  U = {
    r: 0,
    c: [],
    p: U
    // parent group
  };
}
function te() {
  U.r || R(U.c), U = U.p;
}
function m(t, e) {
  t && t.i && (le.delete(t), t.i(e));
}
function y(t, e, n, o) {
  if (t && t.o) {
    if (le.has(t))
      return;
    le.add(t), U.c.push(() => {
      le.delete(t), o && (n && t.d(1), o());
    }), t.o(e);
  } else
    o && o();
}
function fe(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ie(t, e) {
  const n = {}, o = {}, s = { $$scope: 1 };
  let r = t.length;
  for (; r--; ) {
    const i = t[r], l = e[r];
    if (l) {
      for (const u in i)
        u in l || (o[u] = 1);
      for (const u in l)
        s[u] || (n[u] = l[u], s[u] = 1);
      t[r] = l;
    } else
      for (const u in i)
        s[u] = 1;
  }
  for (const i in o)
    i in n || (n[i] = void 0);
  return n;
}
function Ne(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ce(t, e, n) {
  const o = t.$$.props[e];
  o !== void 0 && (t.$$.bound[o] = n, n(t.$$.ctx[o]));
}
function H(t) {
  t && t.c();
}
function M(t, e, n) {
  const { fragment: o, after_update: s } = t.$$;
  o && o.m(e, n), ye(() => {
    const r = t.$$.on_mount.map(Ke).filter(qe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : R(r), t.$$.on_mount = [];
  }), s.forEach(ye);
}
function T(t, e) {
  const n = t.$$;
  n.fragment !== null && (gt(n.after_update), R(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function mt(t, e) {
  t.$$.dirty[0] === -1 && (Z.push(t), Fe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function L(t, e, n, o, s, r, i = null, l = [-1]) {
  const u = se;
  ne(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: C,
    not_equal: s,
    bound: Te(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Te(),
    dirty: l,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(c.root);
  let d = !1;
  if (c.ctx = n ? n(t, e.props || {}, (a, f, ...p) => {
    const h = p.length ? p[0] : f;
    return c.ctx && s(c.ctx[a], c.ctx[a] = h) && (!c.skip_bound && c.bound[a] && c.bound[a](h), d && mt(t, a)), f;
  }) : [], c.update(), d = !0, R(c.before_update), c.fragment = o ? o(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = ct(e.target);
      c.fragment && c.fragment.l(a), a.forEach(k);
    } else
      c.fragment && c.fragment.c();
    e.intro && m(t.$$.fragment), M(t, e.target, e.anchor), we();
  }
  ne(u);
}
let Ge;
typeof HTMLElement == "function" && (Ge = class extends HTMLElement {
  constructor(e, n, o) {
    super();
    /** The Svelte component constructor */
    O(this, "$$ctor");
    /** Slots */
    O(this, "$$s");
    /** The Svelte component instance */
    O(this, "$$c");
    /** Whether or not the custom element is connected */
    O(this, "$$cn", !1);
    /** Component props data */
    O(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    O(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    O(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    O(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    O(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, o && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, o) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const s = this.$$c.$on(e, n);
      this.$$l_u.set(n, s);
    }
    super.addEventListener(e, n, o);
  }
  removeEventListener(e, n, o) {
    if (super.removeEventListener(e, n, o), this.$$c) {
      const s = this.$$l_u.get(n);
      s && (s(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return () => {
          let i;
          return {
            c: function() {
              i = $("slot"), r !== "default" && g(i, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, d) {
              N(c, i, d);
            },
            d: function(c) {
              c && k(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = ft(this);
      for (const r of this.$$s)
        r in o && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = ue(i, r.value, this.$$p_d, "toProp"));
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
      const s = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const i = ue(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(s), s();
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const l = this.$$c.$on(r, i);
          this.$$l_u.set(i, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, o) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ue(e, o, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ue(t, e, n, o) {
  var r;
  const s = (r = n[t]) == null ? void 0 : r.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !o || !n[t])
    return e;
  if (o === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function _t(t, e, n, o, s, r) {
  let i = class extends Ge {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((l) => {
    Object.defineProperty(i.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var c;
        u = ue(l, u, e), this.$$d[l] = u, (c = this.$$c) == null || c.$set({ [l]: u });
      }
    });
  }), o.forEach((l) => {
    Object.defineProperty(i.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), r && (i = r(i)), t.element = /** @type {any} */
  i, i;
}
class I {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    T(this, 1), this.$destroy = C;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!qe(n))
      return C;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const s = o.indexOf(n);
      s !== -1 && o.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !st(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const bt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(bt);
/**
 * @license lucide-svelte v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, He = $t;
function Ae(t, e, n) {
  const o = t.slice();
  return o[11] = e[n][0], o[12] = e[n][1], o;
}
function be(t) {
  let e, n = [
    /*attrs*/
    t[12]
  ], o = {};
  for (let s = 0; s < n.length; s += 1)
    o = j(o, n[s]);
  return {
    c() {
      e = Ue(
        /*tag*/
        t[11]
      ), ce(e, o);
    },
    m(s, r) {
      N(s, e, r);
    },
    p(s, r) {
      ce(e, o = ie(n, [r & /*iconNode*/
      32 && /*attrs*/
      s[12]]));
    },
    d(s) {
      s && k(e);
    }
  };
}
function Pe(t) {
  let e = (
    /*tag*/
    t[11]
  ), n, o = (
    /*tag*/
    t[11] && be(t)
  );
  return {
    c() {
      o && o.c(), n = re();
    },
    m(s, r) {
      o && o.m(s, r), N(s, n, r);
    },
    p(s, r) {
      /*tag*/
      s[11] ? e ? A(
        e,
        /*tag*/
        s[11]
      ) ? (o.d(1), o = be(s), e = /*tag*/
      s[11], o.c(), o.m(n.parentNode, n)) : o.p(s, r) : (o = be(s), e = /*tag*/
      s[11], o.c(), o.m(n.parentNode, n)) : e && (o.d(1), o = null, e = /*tag*/
      s[11]);
    },
    d(s) {
      s && k(n), o && o.d(s);
    }
  };
}
function vt(t) {
  let e, n, o, s, r, i = fe(
    /*iconNode*/
    t[5]
  ), l = [];
  for (let f = 0; f < i.length; f += 1)
    l[f] = Pe(Ae(t, i, f));
  const u = (
    /*#slots*/
    t[10].default
  ), c = ae(
    u,
    t,
    /*$$scope*/
    t[9],
    null
  );
  let d = [
    He,
    /*$$restProps*/
    t[7],
    { width: (
      /*size*/
      t[2]
    ) },
    { height: (
      /*size*/
      t[2]
    ) },
    { stroke: (
      /*color*/
      t[1]
    ) },
    {
      "stroke-width": o = /*absoluteStrokeWidth*/
      t[4] ? Number(
        /*strokeWidth*/
        t[3]
      ) * 24 / Number(
        /*size*/
        t[2]
      ) : (
        /*strokeWidth*/
        t[3]
      )
    },
    {
      class: s = /*mergeClasses*/
      t[6](
        "lucide-icon",
        "lucide",
        /*name*/
        t[0] ? `lucide-${/*name*/
        t[0]}` : "",
        /*$$props*/
        t[8].class
      )
    }
  ], a = {};
  for (let f = 0; f < d.length; f += 1)
    a = j(a, d[f]);
  return {
    c() {
      e = Ue("svg");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      n = re(), c && c.c(), ce(e, a);
    },
    m(f, p) {
      N(f, e, p);
      for (let h = 0; h < l.length; h += 1)
        l[h] && l[h].m(e, null);
      v(e, n), c && c.m(e, null), r = !0;
    },
    p(f, [p]) {
      if (p & /*iconNode*/
      32) {
        i = fe(
          /*iconNode*/
          f[5]
        );
        let h;
        for (h = 0; h < i.length; h += 1) {
          const P = Ae(f, i, h);
          l[h] ? l[h].p(P, p) : (l[h] = Pe(P), l[h].c(), l[h].m(e, n));
        }
        for (; h < l.length; h += 1)
          l[h].d(1);
        l.length = i.length;
      }
      c && c.p && (!r || p & /*$$scope*/
      512) && he(
        c,
        u,
        f,
        /*$$scope*/
        f[9],
        r ? de(
          u,
          /*$$scope*/
          f[9],
          p,
          null
        ) : pe(
          /*$$scope*/
          f[9]
        ),
        null
      ), ce(e, a = ie(d, [
        He,
        p & /*$$restProps*/
        128 && /*$$restProps*/
        f[7],
        (!r || p & /*size*/
        4) && { width: (
          /*size*/
          f[2]
        ) },
        (!r || p & /*size*/
        4) && { height: (
          /*size*/
          f[2]
        ) },
        (!r || p & /*color*/
        2) && { stroke: (
          /*color*/
          f[1]
        ) },
        (!r || p & /*absoluteStrokeWidth, strokeWidth, size*/
        28 && o !== (o = /*absoluteStrokeWidth*/
        f[4] ? Number(
          /*strokeWidth*/
          f[3]
        ) * 24 / Number(
          /*size*/
          f[2]
        ) : (
          /*strokeWidth*/
          f[3]
        ))) && { "stroke-width": o },
        (!r || p & /*name, $$props*/
        257 && s !== (s = /*mergeClasses*/
        f[6](
          "lucide-icon",
          "lucide",
          /*name*/
          f[0] ? `lucide-${/*name*/
          f[0]}` : "",
          /*$$props*/
          f[8].class
        ))) && { class: s }
      ]));
    },
    i(f) {
      r || (m(c, f), r = !0);
    },
    o(f) {
      y(c, f), r = !1;
    },
    d(f) {
      f && k(e), Je(l, f), c && c.d(f);
    }
  };
}
function yt(t, e, n) {
  const o = [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "mergeClasses"
  ];
  let s = Oe(e, o), { $$slots: r = {}, $$scope: i } = e, { name: l = void 0 } = e, { color: u = "currentColor" } = e, { size: c = 24 } = e, { strokeWidth: d = 2 } = e, { absoluteStrokeWidth: a = !1 } = e, { iconNode: f } = e;
  const p = (...h) => h.filter((P, V, _) => !!P && _.indexOf(P) === V).join(" ");
  return t.$$set = (h) => {
    n(8, e = j(j({}, e), D(h))), n(7, s = Oe(e, o)), "name" in h && n(0, l = h.name), "color" in h && n(1, u = h.color), "size" in h && n(2, c = h.size), "strokeWidth" in h && n(3, d = h.strokeWidth), "absoluteStrokeWidth" in h && n(4, a = h.absoluteStrokeWidth), "iconNode" in h && n(5, f = h.iconNode), "$$scope" in h && n(9, i = h.$$scope);
  }, e = D(e), [
    l,
    u,
    c,
    d,
    a,
    f,
    p,
    s,
    e,
    i,
    r
  ];
}
class kt extends I {
  constructor(e) {
    super(), L(this, e, yt, vt, A, {
      name: 0,
      color: 1,
      size: 2,
      strokeWidth: 3,
      absoluteStrokeWidth: 4,
      iconNode: 5,
      mergeClasses: 6
    });
  }
  get mergeClasses() {
    return this.$$.ctx[6];
  }
}
const Ee = kt;
function wt(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), o = ae(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      o && o.c();
    },
    m(s, r) {
      o && o.m(s, r), e = !0;
    },
    p(s, r) {
      o && o.p && (!e || r & /*$$scope*/
      8) && he(
        o,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          r,
          null
        ) : pe(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (m(o, s), e = !0);
    },
    o(s) {
      y(o, s), e = !1;
    },
    d(s) {
      o && o.d(s);
    }
  };
}
function Nt(t) {
  let e, n;
  const o = [
    { name: "bot-message-square" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let s = {
    $$slots: { default: [wt] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < o.length; r += 1)
    s = j(s, o[r]);
  return e = new Ee({ props: s }), {
    c() {
      H(e.$$.fragment);
    },
    m(r, i) {
      M(e, r, i), n = !0;
    },
    p(r, [i]) {
      const l = i & /*$$props, iconNode*/
      3 ? ie(o, [
        o[0],
        i & /*$$props*/
        2 && Ne(
          /*$$props*/
          r[1]
        ),
        i & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          r[0]
        ) }
      ]) : {};
      i & /*$$scope*/
      8 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (m(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      T(e, r);
    }
  };
}
function Ct(t, e, n) {
  let { $$slots: o = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "M12 6V2H8" }],
    [
      "path",
      {
        d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
      }
    ],
    ["path", { d: "M2 12h2" }],
    ["path", { d: "M9 11v2" }],
    ["path", { d: "M15 11v2" }],
    ["path", { d: "M20 12h2" }]
  ];
  return t.$$set = (i) => {
    n(1, e = j(j({}, e), D(i))), "$$scope" in i && n(3, s = i.$$scope);
  }, e = D(e), [r, e, o, s];
}
class Et extends I {
  constructor(e) {
    super(), L(this, e, Ct, Nt, A, {});
  }
}
const St = Et;
function jt(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), o = ae(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      o && o.c();
    },
    m(s, r) {
      o && o.m(s, r), e = !0;
    },
    p(s, r) {
      o && o.p && (!e || r & /*$$scope*/
      8) && he(
        o,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          r,
          null
        ) : pe(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (m(o, s), e = !0);
    },
    o(s) {
      y(o, s), e = !1;
    },
    d(s) {
      o && o.d(s);
    }
  };
}
function Mt(t) {
  let e, n;
  const o = [
    { name: "bot" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let s = {
    $$slots: { default: [jt] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < o.length; r += 1)
    s = j(s, o[r]);
  return e = new Ee({ props: s }), {
    c() {
      H(e.$$.fragment);
    },
    m(r, i) {
      M(e, r, i), n = !0;
    },
    p(r, [i]) {
      const l = i & /*$$props, iconNode*/
      3 ? ie(o, [
        o[0],
        i & /*$$props*/
        2 && Ne(
          /*$$props*/
          r[1]
        ),
        i & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          r[0]
        ) }
      ]) : {};
      i & /*$$scope*/
      8 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (m(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      T(e, r);
    }
  };
}
function Tt(t, e, n) {
  let { $$slots: o = {}, $$scope: s } = e;
  const r = [
    ["path", { d: "M12 8V4H8" }],
    [
      "rect",
      {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }
    ],
    ["path", { d: "M2 14h2" }],
    ["path", { d: "M20 14h2" }],
    ["path", { d: "M15 13v2" }],
    ["path", { d: "M9 13v2" }]
  ];
  return t.$$set = (i) => {
    n(1, e = j(j({}, e), D(i))), "$$scope" in i && n(3, s = i.$$scope);
  }, e = D(e), [r, e, o, s];
}
class Ot extends I {
  constructor(e) {
    super(), L(this, e, Tt, Mt, A, {});
  }
}
const xt = Ot;
function Ht(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), o = ae(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      o && o.c();
    },
    m(s, r) {
      o && o.m(s, r), e = !0;
    },
    p(s, r) {
      o && o.p && (!e || r & /*$$scope*/
      8) && he(
        o,
        n,
        s,
        /*$$scope*/
        s[3],
        e ? de(
          n,
          /*$$scope*/
          s[3],
          r,
          null
        ) : pe(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      e || (m(o, s), e = !0);
    },
    o(s) {
      y(o, s), e = !1;
    },
    d(s) {
      o && o.d(s);
    }
  };
}
function At(t) {
  let e, n;
  const o = [
    { name: "user" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let s = {
    $$slots: { default: [Ht] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < o.length; r += 1)
    s = j(s, o[r]);
  return e = new Ee({ props: s }), {
    c() {
      H(e.$$.fragment);
    },
    m(r, i) {
      M(e, r, i), n = !0;
    },
    p(r, [i]) {
      const l = i & /*$$props, iconNode*/
      3 ? ie(o, [
        o[0],
        i & /*$$props*/
        2 && Ne(
          /*$$props*/
          r[1]
        ),
        i & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          r[0]
        ) }
      ]) : {};
      i & /*$$scope*/
      8 && (l.$$scope = { dirty: i, ctx: r }), e.$set(l);
    },
    i(r) {
      n || (m(e.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), n = !1;
    },
    d(r) {
      T(e, r);
    }
  };
}
function Pt(t, e, n) {
  let { $$slots: o = {}, $$scope: s } = e;
  const r = [
    [
      "path",
      {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
      }
    ],
    ["circle", { cx: "12", cy: "7", r: "4" }]
  ];
  return t.$$set = (i) => {
    n(1, e = j(j({}, e), D(i))), "$$scope" in i && n(3, s = i.$$scope);
  }, e = D(e), [r, e, o, s];
}
class Bt extends I {
  constructor(e) {
    super(), L(this, e, Pt, At, A, {});
  }
}
const Lt = Bt;
function Be(t) {
  let e, n, o, s, r, i, l;
  return n = new St({}), {
    c() {
      e = $("button"), H(n.$$.fragment), o = x(), s = $("span"), s.textContent = "Open chat", g(s, "class", "sr-only"), g(e, "class", "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 rounded-full bg-gray-900 text-gray-50 shadow-lg hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"), g(e, "type", "button"), g(e, "aria-haspopup", "dialog"), g(e, "aria-expanded", "false"), g(e, "aria-controls", "radix-:r1h:"), g(e, "data-state", "closed");
    },
    m(u, c) {
      N(u, e, c), M(n, e, null), v(e, o), v(e, s), r = !0, i || (l = W(
        e,
        "click",
        /*click_handler*/
        t[1]
      ), i = !0);
    },
    i(u) {
      r || (m(n.$$.fragment, u), r = !0);
    },
    o(u) {
      y(n.$$.fragment, u), r = !1;
    },
    d(u) {
      u && k(e), T(n), i = !1, l();
    }
  };
}
function It(t) {
  let e, n, o = !/*open*/
  t[0] && Be(t);
  return {
    c() {
      o && o.c(), e = re();
    },
    m(s, r) {
      o && o.m(s, r), N(s, e, r), n = !0;
    },
    p(s, [r]) {
      /*open*/
      s[0] ? o && (ee(), y(o, 1, 1, () => {
        o = null;
      }), te()) : o ? r & /*open*/
      1 && m(o, 1) : (o = Be(s), o.c(), m(o, 1), o.m(e.parentNode, e));
    },
    i(s) {
      n || (m(o), n = !0);
    },
    o(s) {
      y(o), n = !1;
    },
    d(s) {
      s && k(e), o && o.d(s);
    }
  };
}
function Wt(t, e, n) {
  let { open: o } = e;
  function s(r) {
    ht.call(this, t, r);
  }
  return t.$$set = (r) => {
    "open" in r && n(0, o = r.open);
  }, [o, s];
}
class zt extends I {
  constructor(e) {
    super(), L(this, e, Wt, It, A, { open: 0 });
  }
}
function Kt(t) {
  let e, n;
  return e = new Lt({}), {
    c() {
      H(e.$$.fragment);
    },
    m(o, s) {
      M(e, o, s), n = !0;
    },
    i(o) {
      n || (m(e.$$.fragment, o), n = !0);
    },
    o(o) {
      y(e.$$.fragment, o), n = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function qt(t) {
  let e, n;
  return e = new xt({}), {
    c() {
      H(e.$$.fragment);
    },
    m(o, s) {
      M(e, o, s), n = !0;
    },
    i(o) {
      n || (m(e.$$.fragment, o), n = !0);
    },
    o(o) {
      y(e.$$.fragment, o), n = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function Dt(t) {
  let e, n, o, s, r;
  const i = [qt, Kt], l = [];
  function u(c, d) {
    return (
      /*author*/
      c[0] == "agent" ? 0 : 1
    );
  }
  return o = u(t), s = l[o] = i[o](t), {
    c() {
      e = $("span"), n = $("span"), s.c(), g(n, "class", "flex h-full w-full items-center justify-center rounded-full bg-muted"), g(e, "class", "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full");
    },
    m(c, d) {
      N(c, e, d), v(e, n), l[o].m(n, null), r = !0;
    },
    p(c, [d]) {
      let a = o;
      o = u(c), o !== a && (ee(), y(l[a], 1, 1, () => {
        l[a] = null;
      }), te(), s = l[o], s || (s = l[o] = i[o](c), s.c()), m(s, 1), s.m(n, null));
    },
    i(c) {
      r || (m(s), r = !0);
    },
    o(c) {
      y(s), r = !1;
    },
    d(c) {
      c && k(e), l[o].d();
    }
  };
}
function Rt(t, e, n) {
  let { author: o } = e;
  return t.$$set = (s) => {
    "author" in s && n(0, o = s.author);
  }, [o];
}
class Qe extends I {
  constructor(e) {
    super(), L(this, e, Rt, Dt, A, { author: 0 });
  }
}
const F = [];
function Xe(t, e = C) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function s(l) {
    if (A(t, l) && (t = l, n)) {
      const u = !F.length;
      for (const c of o)
        c[1](), F.push(c, t);
      if (u) {
        for (let c = 0; c < F.length; c += 2)
          F[c][0](F[c + 1]);
        F.length = 0;
      }
    }
  }
  function r(l) {
    s(l(t));
  }
  function i(l, u = C) {
    const c = [l, u];
    return o.add(c), o.size === 1 && (n = e(s, r) || C), l(t), () => {
      o.delete(c), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: r, subscribe: i };
}
const et = {
  contents: "Hello, how can I assist you today?",
  author: "agent",
  updating: !1
};
let q = JSON.parse(window.localStorage.getItem("ChatPluginMessageHistory") || "null");
(q === null || q.length === 0) && (q = [et]);
q[q.length - 1].updating && (q.pop(), q.pop());
let B = Xe(q);
B.subscribe((t) => {
  localStorage.setItem("ChatPluginMessageHistory", JSON.stringify(t));
});
let Q = Xe("TextInput");
function Jt(t) {
  let e, n, o, s, r;
  return {
    c() {
      e = $("button"), e.textContent = "End", n = x(), o = $("button"), o.textContent = "Continue", g(e, "class", "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-50 w-1/2"), g(o, "class", "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 w-1/2");
    },
    m(i, l) {
      N(i, e, l), N(i, n, l), N(i, o, l), s || (r = [
        W(
          e,
          "click",
          /*end*/
          t[0]
        ),
        W(
          o,
          "click",
          /*continueChat*/
          t[1]
        )
      ], s = !0);
    },
    p: C,
    i: C,
    o: C,
    d(i) {
      i && (k(e), k(n), k(o)), s = !1, R(r);
    }
  };
}
function Ut(t, e, n) {
  let o, s;
  oe(t, B, (u) => n(3, o = u)), oe(t, Q, (u) => n(4, s = u));
  let { open: r } = e;
  const i = () => {
    me(B, o = [et], o), me(Q, s = "TextInput", s), n(2, r = !1);
  }, l = () => {
    o.push({
      contents: "<END>",
      author: "agent",
      updating: !1,
      hidden: !0
    }), o.push({
      contents: "SYSTEM: The user indicated they wanted to continue the conversation. Await their next message.",
      author: "user",
      updating: !1,
      hidden: !0
    }), me(Q, s = "TextInput", s), B.set(o);
  };
  return t.$$set = (u) => {
    "open" in u && n(2, r = u.open);
  }, [i, l, r];
}
class Vt extends I {
  constructor(e) {
    super(), L(this, e, Ut, Jt, A, { open: 2 });
  }
}
function Yt(t) {
  let e, n, o, s, r;
  return {
    c() {
      e = $("input"), n = x(), o = $("button"), o.textContent = "Send", g(e, "class", "flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"), g(e, "placeholder", "Type your message..."), g(o, "class", "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2");
    },
    m(i, l) {
      N(i, e, l), xe(
        e,
        /*message*/
        t[0]
      ), N(i, n, l), N(i, o, l), s || (r = [
        W(
          e,
          "input",
          /*input_input_handler*/
          t[2]
        ),
        W(
          e,
          "keydown",
          /*keydown_handler*/
          t[3]
        ),
        W(
          o,
          "click",
          /*sendMessage*/
          t[1]
        )
      ], s = !0);
    },
    p(i, [l]) {
      l & /*message*/
      1 && e.value !== /*message*/
      i[0] && xe(
        e,
        /*message*/
        i[0]
      );
    },
    i: C,
    o: C,
    d(i) {
      i && (k(e), k(n), k(o)), s = !1, R(r);
    }
  };
}
function Ft(t, e, n) {
  let o;
  oe(t, B, (u) => n(4, o = u));
  let { message: s } = e;
  const r = () => {
    s && !o[o.length - 1].updating && (o.push({
      author: "user",
      contents: s,
      updating: !1
    }), B.set(o), n(0, s = ""));
  };
  function i() {
    s = this.value, n(0, s);
  }
  const l = (u) => u.key == "Enter" && r();
  return t.$$set = (u) => {
    "message" in u && n(0, s = u.message);
  }, [s, r, i, l];
}
class Zt extends I {
  constructor(e) {
    super(), L(this, e, Ft, Yt, A, { message: 0 });
  }
}
function Le(t, e, n) {
  const o = t.slice();
  return o[5] = e[n], o;
}
function Ie(t) {
  let e, n, o, s, r, i, l, u, c, d, a, f, p, h, P, V, _ = (
    /*userScrolledUp*/
    t[2] && We(t)
  ), J = fe(
    /*$chatHistory*/
    t[3]
  ), w = [];
  for (let b = 0; b < J.length; b += 1)
    w[b] = ze(Le(t, J, b));
  const tt = (b) => y(w[b], 1, 1, () => {
    w[b] = null;
  }), Se = [on, nn], z = [];
  function je(b, E) {
    return (
      /*$inputType*/
      b[4] == "TextInput" ? 0 : (
        /*$inputType*/
        b[4] == "EndConversationPrompt" ? 1 : -1
      )
    );
  }
  return ~(f = je(t)) && (p = z[f] = Se[f](t)), {
    c() {
      e = $("div"), n = $("div"), _ && _.c(), o = x(), s = $("div"), r = $("div"), r.innerHTML = '<div class="text-sm font-medium">Support Agent</div>', i = x(), l = $("button"), l.innerHTML = '<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> <span class="sr-only">Close chat</span>', u = x(), c = $("div");
      for (let b = 0; b < w.length; b += 1)
        w[b].c();
      d = x(), a = $("div"), p && p.c(), g(r, "class", "flex items-center gap-3"), g(s, "class", "bg-gray-900 text-gray-50 px-4 py-3 rounded-t-lg flex items-center justify-between"), g(c, "class", "flex-1 overflow-y-auto p-4 space-y-4 relative"), g(a, "class", "bg-gray-100 px-4 py-3 rounded-b-lg flex items-center gap-2"), g(n, "class", "flex flex-col h-[500px]"), g(e, "class", "w-full max-w-md rounded-lg shadow-l bg-white");
    },
    m(b, E) {
      N(b, e, E), v(e, n), _ && _.m(n, null), v(n, o), v(n, s), v(s, r), v(s, i), v(s, l), v(n, u), v(n, c);
      for (let K = 0; K < w.length; K += 1)
        w[K] && w[K].m(c, null);
      t[10](c), v(n, d), v(n, a), ~f && z[f].m(a, null), h = !0, P || (V = [
        W(
          l,
          "click",
          /*click_handler*/
          t[9]
        ),
        W(
          c,
          "scroll",
          /*onScroll*/
          t[6]
        )
      ], P = !0);
    },
    p(b, E) {
      if (/*userScrolledUp*/
      b[2] ? _ ? _.p(b, E) : (_ = We(b), _.c(), _.m(n, o)) : _ && (_.d(1), _ = null), E & /*$chatHistory*/
      8) {
        J = fe(
          /*$chatHistory*/
          b[3]
        );
        let S;
        for (S = 0; S < J.length; S += 1) {
          const Me = Le(b, J, S);
          w[S] ? (w[S].p(Me, E), m(w[S], 1)) : (w[S] = ze(Me), w[S].c(), m(w[S], 1), w[S].m(c, null));
        }
        for (ee(), S = J.length; S < w.length; S += 1)
          tt(S);
        te();
      }
      let K = f;
      f = je(b), f === K ? ~f && z[f].p(b, E) : (p && (ee(), y(z[K], 1, 1, () => {
        z[K] = null;
      }), te()), ~f ? (p = z[f], p ? p.p(b, E) : (p = z[f] = Se[f](b), p.c()), m(p, 1), p.m(a, null)) : p = null);
    },
    i(b) {
      if (!h) {
        for (let E = 0; E < J.length; E += 1)
          m(w[E]);
        m(p), h = !0;
      }
    },
    o(b) {
      w = w.filter(Boolean);
      for (let E = 0; E < w.length; E += 1)
        y(w[E]);
      y(p), h = !1;
    },
    d(b) {
      b && k(e), _ && _.d(), Je(w, b), t[10](null), ~f && z[f].d(), P = !1, R(V);
    }
  };
}
function We(t) {
  let e, n, o;
  return {
    c() {
      e = $("button"), e.textContent = "Down", g(e, "class", "bg-opacity-25 bg-black w-4 h-4 rounded-full absolute right-1/2 bottom-14");
    },
    m(s, r) {
      N(s, e, r), n || (o = W(
        e,
        "click",
        /*scrollDown*/
        t[7]
      ), n = !0);
    },
    p: C,
    d(s) {
      s && k(e), n = !1, o();
    }
  };
}
function Gt(t) {
  let e, n, o, s, r = (
    /*message*/
    t[5].contents + ""
  ), i, l, u, c, d;
  return u = new Qe({
    props: { author: (
      /*message*/
      t[5].author
    ) }
  }), {
    c() {
      e = $("div"), n = $("div"), o = $("div"), s = $("p"), i = ge(r), l = x(), H(u.$$.fragment), c = x(), g(o, "class", "bg-gray-900 text-gray-50 p-3 rounded-lg max-w-[75%] text-sm"), g(n, "class", "flex items-start gap-3 justify-end"), g(e, "class", "flex items-start justify-end gap-3");
    },
    m(a, f) {
      N(a, e, f), v(e, n), v(n, o), v(o, s), v(s, i), v(n, l), M(u, n, null), v(e, c), d = !0;
    },
    p(a, f) {
      (!d || f & /*$chatHistory*/
      8) && r !== (r = /*message*/
      a[5].contents + "") && Ve(i, r);
      const p = {};
      f & /*$chatHistory*/
      8 && (p.author = /*message*/
      a[5].author), u.$set(p);
    },
    i(a) {
      d || (m(u.$$.fragment, a), d = !0);
    },
    o(a) {
      y(u.$$.fragment, a), d = !1;
    },
    d(a) {
      a && k(e), T(u);
    }
  };
}
function Qt(t) {
  let e, n, o, s, r, i, l;
  o = new Qe({
    props: { author: (
      /*message*/
      t[5].author
    ) }
  });
  function u(a, f) {
    return (
      /*message*/
      a[5].updating ? tn : en
    );
  }
  let c = u(t), d = c(t);
  return {
    c() {
      e = $("div"), n = $("div"), H(o.$$.fragment), s = x(), r = $("div"), d.c(), i = x(), g(r, "class", "bg-gray-100 p-3 rounded-lg max-w-[75%] text-sm"), g(n, "class", "flex items-start gap-3"), g(e, "class", "flex items-start gap-3");
    },
    m(a, f) {
      N(a, e, f), v(e, n), M(o, n, null), v(n, s), v(n, r), d.m(r, null), v(e, i), l = !0;
    },
    p(a, f) {
      const p = {};
      f & /*$chatHistory*/
      8 && (p.author = /*message*/
      a[5].author), o.$set(p), c === (c = u(a)) && d ? d.p(a, f) : (d.d(1), d = c(a), d && (d.c(), d.m(r, null)));
    },
    i(a) {
      l || (m(o.$$.fragment, a), l = !0);
    },
    o(a) {
      y(o.$$.fragment, a), l = !1;
    },
    d(a) {
      a && k(e), T(o), d.d();
    }
  };
}
function Xt(t) {
  return {
    c: C,
    m: C,
    p: C,
    i: C,
    o: C,
    d: C
  };
}
function en(t) {
  let e, n = (
    /*message*/
    t[5].contents + ""
  ), o;
  return {
    c() {
      e = $("p"), o = ge(n);
    },
    m(s, r) {
      N(s, e, r), v(e, o);
    },
    p(s, r) {
      r & /*$chatHistory*/
      8 && n !== (n = /*message*/
      s[5].contents + "") && Ve(o, n);
    },
    d(s) {
      s && k(e);
    }
  };
}
function tn(t) {
  let e;
  return {
    c() {
      e = $("div"), e.innerHTML = '<div class="typing-dot svelte-1vr6k1j"></div> <div class="typing-dot svelte-1vr6k1j"></div> <div class="typing-dot svelte-1vr6k1j"></div>', g(e, "class", "flex items-center justify-center gap-1");
    },
    m(n, o) {
      N(n, e, o);
    },
    p: C,
    d(n) {
      n && k(e);
    }
  };
}
function ze(t) {
  let e, n, o, s;
  const r = [Xt, Qt, Gt], i = [];
  function l(u, c) {
    return (
      /*message*/
      u[5].hidden ? 0 : (
        /*message*/
        u[5].author == "agent" ? 1 : 2
      )
    );
  }
  return e = l(t), n = i[e] = r[e](t), {
    c() {
      n.c(), o = re();
    },
    m(u, c) {
      i[e].m(u, c), N(u, o, c), s = !0;
    },
    p(u, c) {
      let d = e;
      e = l(u), e === d ? i[e].p(u, c) : (ee(), y(i[d], 1, 1, () => {
        i[d] = null;
      }), te(), n = i[e], n ? n.p(u, c) : (n = i[e] = r[e](u), n.c()), m(n, 1), n.m(o.parentNode, o));
    },
    i(u) {
      s || (m(n), s = !0);
    },
    o(u) {
      y(n), s = !1;
    },
    d(u) {
      u && k(o), i[e].d(u);
    }
  };
}
function nn(t) {
  let e, n, o;
  function s(i) {
    t[12](i);
  }
  let r = {};
  return (
    /*open*/
    t[0] !== void 0 && (r.open = /*open*/
    t[0]), e = new Vt({ props: r }), X.push(() => Ce(e, "open", s)), {
      c() {
        H(e.$$.fragment);
      },
      m(i, l) {
        M(e, i, l), o = !0;
      },
      p(i, l) {
        const u = {};
        !n && l & /*open*/
        1 && (n = !0, u.open = /*open*/
        i[0], ke(() => n = !1)), e.$set(u);
      },
      i(i) {
        o || (m(e.$$.fragment, i), o = !0);
      },
      o(i) {
        y(e.$$.fragment, i), o = !1;
      },
      d(i) {
        T(e, i);
      }
    }
  );
}
function on(t) {
  let e, n, o;
  function s(i) {
    t[11](i);
  }
  let r = {};
  return (
    /*message*/
    t[5] !== void 0 && (r.message = /*message*/
    t[5]), e = new Zt({ props: r }), X.push(() => Ce(e, "message", s)), {
      c() {
        H(e.$$.fragment);
      },
      m(i, l) {
        M(e, i, l), o = !0;
      },
      p(i, l) {
        const u = {};
        !n && l & /*message*/
        32 && (n = !0, u.message = /*message*/
        i[5], ke(() => n = !1)), e.$set(u);
      },
      i(i) {
        o || (m(e.$$.fragment, i), o = !0);
      },
      o(i) {
        y(e.$$.fragment, i), o = !1;
      },
      d(i) {
        T(e, i);
      }
    }
  );
}
function sn(t) {
  let e, n, o = (
    /*open*/
    t[0] && Ie(t)
  );
  return {
    c() {
      o && o.c(), e = re();
    },
    m(s, r) {
      o && o.m(s, r), N(s, e, r), n = !0;
    },
    p(s, [r]) {
      /*open*/
      s[0] ? o ? (o.p(s, r), r & /*open*/
      1 && m(o, 1)) : (o = Ie(s), o.c(), m(o, 1), o.m(e.parentNode, e)) : o && (ee(), y(o, 1, 1, () => {
        o = null;
      }), te());
    },
    i(s) {
      n || (m(o), n = !0);
    },
    o(s) {
      y(o), n = !1;
    },
    d(s) {
      s && k(e), o && o.d(s);
    }
  };
}
function rn(t, e, n) {
  let o, s;
  oe(t, B, (_) => n(3, o = _)), oe(t, Q, (_) => n(4, s = _));
  let { open: r } = e, i = "", l, u, c = !1, d = 0;
  const a = () => {
    if (l.scrollTop === l.scrollHeight - l.offsetHeight) {
      n(2, c = !1);
      return;
    }
    c || d > l.scrollTop && n(2, c = !0), d = l.scrollTop;
  }, f = () => {
    r && l.scroll({
      top: l.scrollHeight,
      behavior: "smooth"
    });
  }, p = () => n(0, r = !r);
  function h(_) {
    X[_ ? "unshift" : "push"](() => {
      l = _, n(1, l);
    });
  }
  function P(_) {
    i = _, n(5, i);
  }
  function V(_) {
    r = _, n(0, r);
  }
  return t.$$set = (_) => {
    "open" in _ && n(0, r = _.open);
  }, t.$$.update = () => {
    t.$$.dirty & /*open, observer, userScrolledUp, chatElement*/
    263 && (r && !u ? (n(8, u = new MutationObserver((_) => {
      c || f();
    })), Ze().then(() => {
      f(), u.observe(l, {
        childList: !0,
        subtree: !0,
        attributes: !1
      });
    })) : r || n(8, u = void 0));
  }, [
    r,
    l,
    c,
    o,
    s,
    i,
    a,
    f,
    u,
    p,
    h,
    P,
    V
  ];
}
class ln extends I {
  constructor(e) {
    super(), L(this, e, rn, sn, A, { open: 0 });
  }
}
async function un(t) {
  let e = "https://api.demo.dylanmashini.com";
  B.subscribe(async (n) => {
    if (n[n.length - 1].author === "user" && rt(Q) === "TextInput") {
      let o = fetch(`${e}/create-chat`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          api_key: t,
          messages: n.map((r) => ({
            message: r.contents,
            author: r.author
          }))
        })
      });
      B.update((r) => (r.push({
        author: "agent",
        contents: "",
        updating: !0
      }), r));
      let s = await (await o).json();
      if (s.response.includes("<END>")) {
        Q.set("EndConversationPrompt"), B.update((r) => (r.pop(), r = r, console.log(r), r));
        return;
      }
      B.update((r) => (r[r.length - 1].updating = !1, r[r.length - 1].contents = s.response, r));
    }
  });
}
function cn() {
  let t = document.body.getElementsByTagName("my-component")[0].shadowRoot, e = document.createElement("link");
  e.rel = "stylesheet", e.href = "https://demo.dylanmashini.com/style.css", t.appendChild(e);
}
function fn(t) {
  it(t, "svelte-va4hx6", ".root.svelte-va4hx6{display:none}");
}
function an(t) {
  let e, n, o, s, r, i, l;
  o = new zt({ props: { open: (
    /*open*/
    t[0]
  ) } }), o.$on(
    "click",
    /*click_handler*/
    t[2]
  );
  function u(d) {
    t[3](d);
  }
  let c = {};
  return (
    /*open*/
    t[0] !== void 0 && (c.open = /*open*/
    t[0]), r = new ln({ props: c }), X.push(() => Ce(r, "open", u)), {
      c() {
        e = $("div"), n = $("div"), H(o.$$.fragment), s = x(), H(r.$$.fragment), g(n, "class", "fixed bottom-4 right-4 z-50"), g(e, "class", "root svelte-va4hx6");
      },
      m(d, a) {
        N(d, e, a), v(e, n), M(o, n, null), v(n, s), M(r, n, null), l = !0;
      },
      p(d, [a]) {
        const f = {};
        a & /*open*/
        1 && (f.open = /*open*/
        d[0]), o.$set(f);
        const p = {};
        !i && a & /*open*/
        1 && (i = !0, p.open = /*open*/
        d[0], ke(() => i = !1)), r.$set(p);
      },
      i(d) {
        l || (m(o.$$.fragment, d), m(r.$$.fragment, d), l = !0);
      },
      o(d) {
        y(o.$$.fragment, d), y(r.$$.fragment, d), l = !1;
      },
      d(d) {
        d && k(e), T(o), T(r);
      }
    }
  );
}
function dn(t, e, n) {
  let { publicKey: o } = e;
  dt(async () => {
    cn(), await Ze(), un(o);
  });
  let s = !1;
  const r = () => n(0, s = !s);
  function i(l) {
    s = l, n(0, s);
  }
  return t.$$set = (l) => {
    "publicKey" in l && n(1, o = l.publicKey);
  }, [s, o, r, i];
}
class hn extends I {
  constructor(e) {
    super(), L(this, e, dn, an, A, { publicKey: 1 }, fn);
  }
  get publicKey() {
    return this.$$.ctx[1];
  }
  set publicKey(e) {
    this.$$set({ publicKey: e }), we();
  }
}
customElements.define("my-component", _t(hn, { publicKey: {} }, [], [], !0));
function gn(t) {
  let e = document.createElement("my-component");
  e.publicKey = t.publicKey, window.onload = function() {
    document.body.appendChild(e);
  };
}
export {
  gn as default
};
