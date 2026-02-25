import { ref as y, inject as j, computed as O, openBlock as p, createBlock as g, unref as f, mergeProps as u, withCtx as m, renderSlot as d, defineComponent as k, createVNode as S, createTextVNode as P, resolveComponent as I, createElementBlock as w, createElementVNode as x, toDisplayString as $, useAttrs as A, onMounted as L } from "vue";
import { ElTooltip as M, ElButton as T } from "element-plus";
function fe(e = 0) {
  const t = y(e);
  function n() {
    t.value++;
  }
  function o() {
    t.value--;
  }
  return {
    count: t,
    increment: n,
    decrement: o
  };
}
const E = {
  name: "zh-cn",
  comein: {
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    }
  }
}, D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E
}, Symbol.toStringTag, { value: "Module" })), N = {
  "zh-cn": () => Promise.resolve().then(() => D),
  "zh-hk": () => import("./zh-hk-CotzQno2.js"),
  en: () => import("./en-yFYu_lp1.js")
}, z = Symbol("comein-plus-locale"), v = "comein-plus-locale", K = "comein", i = y(E), r = y("zh-cn");
function V(e) {
  return e ? r.value === e ? { locale: i, lang: r } : (N[e]().then(({ default: t }) => {
    i.value = t, r.value = e, localStorage.setItem(v, e);
  }), { locale: i, lang: r }) : { locale: i, lang: r };
}
function F() {
  return r.value;
}
function U(e) {
  return new Promise((t) => {
    if (r.value === e) {
      t();
      return;
    }
    N[e]().then(({ default: n }) => {
      i.value = n, r.value = e, localStorage.setItem(v, e), t();
    });
  });
}
function R(e, t) {
  const n = localStorage.getItem(v), o = (t == null ? void 0 : t.lang) || n || "zh-cn";
  V(o), e.provide(z, i), e.config.globalProperties.$comeinLocale = i, e.config.globalProperties.$getLocale = F, e.config.globalProperties.$setLocale = U;
}
function W(e) {
  const t = j(z);
  return t ? (console.log("locale", t), { t: O(() => (o) => {
    var c;
    return ((c = t.value[K][e]) == null ? void 0 : c[o]) || o;
  }) }) : (console.warn("[Comein UI] useI18n 必须在组件内使用，或全局注册 installLocale"), { t: (o) => o });
}
const q = "0.0.11";
function b(e, t) {
  return e.install = (n) => {
    for (const o of [e, ...Object.values({})])
      n.component(o.name, o);
  }, e;
}
const G = /* @__PURE__ */ Object.assign({
  name: "CmTooltip",
  inheritAttrs: !1
}, {
  __name: "index",
  props: {
    content: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "top"
    },
    showAfter: {
      type: Number,
      default: 400
    },
    hideAfter: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    return console.log("==tooltip", e), (n, o) => e.content ? (p(), g(f(M), u({
      key: 0,
      "show-after": e.showAfter,
      "hide-after": e.hideAfter,
      content: e.content,
      placement: e.placement
    }, n.$attrs), {
      default: m(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["show-after", "hide-after", "content", "placement"])) : d(n.$slots, "default", { key: 1 });
  }
}), _ = b(G), H = {
  /**
   * @description 防止重复点击的时间间隔，单位毫秒
   */
  time: {
    type: Number,
    default: 0
  },
  /**
   * @description 按钮的 ToolTip 提示内容
   */
  tip: {
    type: String,
    default: ""
  },
  /**
   * @description el-tooltip提示框位置
   */
  placement: {
    type: String,
    default: "top"
  },
  /**
   * @description el-tooltip提示框属性
   */
  tipProps: {
    type: Object,
    default: () => ({})
  }
}, J = {
  click: (e) => e instanceof MouseEvent
}, Q = /* @__PURE__ */ k({
  name: "CmButton",
  __name: "index",
  props: H,
  emits: J,
  setup(e, { emit: t }) {
    const n = e, o = t;
    console.log("==", n);
    const c = y(0);
    function a(l) {
      (/* @__PURE__ */ new Date()).getTime() - c.value > n.time && o("click", l), c.value = (/* @__PURE__ */ new Date()).getTime();
    }
    return (l, s) => l.tip ? (p(), g(f(_), u({
      key: 0,
      content: l.tip,
      placement: l.placement
    }, l.tipProps), {
      default: m(() => [
        S(f(T), u(l.$attrs, {
          class: "cm-button-tip",
          onClick: a
        }), {
          default: m(() => [
            d(l.$slots, "default", {}, () => [
              s[0] || (s[0] = P("按钮", -1))
            ])
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 16, ["content", "placement"])) : (p(), g(f(T), u({
      key: 1,
      class: "cm-button-tip"
    }, l.$attrs, { onClick: a }), {
      default: m(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X = b(Q), Y = {
  click: (e) => e instanceof MouseEvent
}, Z = /* @__PURE__ */ k({
  name: "CmDialog",
  __name: "index",
  props: {
    title: { default: "" },
    center: { type: Boolean, default: !1 }
  },
  emits: Y,
  setup(e, { emit: t }) {
    const n = e, o = t, { t: c } = W("popconfirm");
    return (a, l) => {
      const s = I("el-button");
      return p(), w("div", null, [
        x("span", null, $(e.title), 1),
        S(s, u(n, {
          onClick: l[0] || (l[0] = (B) => o("click", B))
        }), {
          default: m(() => [
            P($(f(c)("confirmButtonText")), 1)
          ]),
          _: 1
        }, 16)
      ]);
    };
  }
}), ee = b(Z), te = /* @__PURE__ */ k({
  name: "CmNormalbtn",
  __name: "index",
  props: {
    title: { default: "" },
    center: { type: Boolean, default: !1 },
    size: {},
    disabled: { type: Boolean },
    type: {},
    icon: {},
    nativeType: {},
    loading: { type: Boolean },
    loadingIcon: {},
    plain: { type: Boolean },
    text: { type: Boolean },
    link: { type: Boolean },
    bg: { type: Boolean },
    autofocus: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    color: {},
    dark: { type: Boolean },
    autoInsertSpace: { type: Boolean },
    tag: {}
  },
  setup(e) {
    const t = e, n = A();
    return L(() => {
      console.log(t, "propsmounted", n);
    }), console.log(t, "props", n), (o, c) => {
      const a = I("el-button");
      return p(), g(a, u({ ...o.$attrs, ...t }, { title: e.title }), {
        default: m(() => [
          d(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["title"]);
    };
  }
}), ne = b(te), oe = {
  CmButton: X,
  CmDialog: ee,
  CmNormalBtn: ne,
  CmTooltip: _
}, le = {
  prefix: "Cm",
  importStyle: "css",
  packageName: "@comein/comein-ui-plus"
};
function pe(e = {}) {
  const { prefix: t, importStyle: n, packageName: o } = { ...le, ...e };
  return (c) => {
    if (!c.startsWith(t))
      return;
    const a = c.slice(t.length), l = `${a.slice(0, 1).toLowerCase()}${a.slice(1)}`;
    let s;
    return n && (s = `${o}/es/${l}/style/${n === "scss" ? "index" : "css"}`), {
      from: o,
      name: c,
      // 组件导出名
      sideEffects: s
    };
  };
}
let C = "light";
function ce() {
  return C;
}
function h(e) {
  const t = document.documentElement;
  t.classList.remove("light", "dark"), e === "dark" && t.classList.add("dark"), C = e, localStorage.setItem("cm-theme", e);
}
function ae() {
  const e = localStorage.getItem("cm-theme");
  h(e && (e === "light" || e === "dark") ? e : "light");
}
function se() {
  const e = C === "light" ? "dark" : "light";
  return h(e), e;
}
const de = {
  getCurrentTheme: ce,
  setTheme: h,
  initTheme: ae,
  toggleTheme: se
}, re = (e) => {
  Object.values(oe).forEach((t) => {
    e.use(t);
  });
}, ie = (e, t) => {
  t != null && t.elementPlus && e.use(t.elementPlus, t.elementPlusOptions || {}), R(e, t), re(e);
}, ge = {
  install: ie,
  version: q
};
export {
  X as CmButton,
  ee as CmDialog,
  ne as CmNormalBtn,
  _ as CmTooltip,
  pe as ComeinUIPlusResolver,
  ge as default,
  ce as getCurrentTheme,
  F as getLocale,
  ae as initTheme,
  R as installLocale,
  U as setLocale,
  h as setTheme,
  de as themeManager,
  se as toggleTheme,
  fe as useCount,
  W as useI18n,
  V as useLocale
};
