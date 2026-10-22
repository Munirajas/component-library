var pf = Object.defineProperty;
var mf = (e, n, t) => n in e ? pf(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var M = (e, n, t) => mf(e, typeof n != "symbol" ? n + "" : n, t);
import rr, { forwardRef as un, useState as ce, useRef as Kt, useCallback as He, useEffect as we, useLayoutEffect as xr, useMemo as ut, useId as xf, memo as ii, createContext as Cf, useContext as yf, Suspense as _f, Component as bf } from "react";
import { flushSync as vf, createPortal as wf } from "react-dom";
var Q1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zl = { exports: {} }, xs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ec;
function Sf() {
  if (ec) return xs;
  ec = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(r, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return xs.Fragment = n, xs.jsx = t, xs.jsxs = t, xs;
}
var Cs = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function kf() {
  return tc || (tc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(F) {
      if (F == null) return null;
      if (typeof F == "function")
        return F.$$typeof === A ? null : F.displayName || F.name || null;
      if (typeof F == "string") return F;
      switch (F) {
        case m:
          return "Fragment";
        case y:
          return "Profiler";
        case x:
          return "StrictMode";
        case E:
          return "Suspense";
        case N:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof F == "object")
        switch (typeof F.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), F.$$typeof) {
          case C:
            return "Portal";
          case v:
            return F.displayName || "Context";
          case _:
            return (F._context.displayName || "Context") + ".Consumer";
          case w:
            var U = F.render;
            return F = F.displayName, F || (F = U.displayName || U.name || "", F = F !== "" ? "ForwardRef(" + F + ")" : "ForwardRef"), F;
          case S:
            return U = F.displayName || null, U !== null ? U : e(F.type) || "Memo";
          case k:
            U = F._payload, F = F._init;
            try {
              return e(F(U));
            } catch {
            }
        }
      return null;
    }
    function n(F) {
      return "" + F;
    }
    function t(F) {
      try {
        n(F);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var ie = U.error, Z = typeof Symbol == "function" && Symbol.toStringTag && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return ie.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Z
        ), n(F);
      }
    }
    function r(F) {
      if (F === m) return "<>";
      if (typeof F == "object" && F !== null && F.$$typeof === k)
        return "<...>";
      try {
        var U = e(F);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var F = H.A;
      return F === null ? null : F.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(F) {
      if (G.call(F, "key")) {
        var U = Object.getOwnPropertyDescriptor(F, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return F.key !== void 0;
    }
    function l(F, U) {
      function ie() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      ie.isReactWarning = !0, Object.defineProperty(F, "key", {
        get: ie,
        configurable: !0
      });
    }
    function c() {
      var F = e(this.type);
      return se[F] || (se[F] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), F = this.props.ref, F !== void 0 ? F : null;
    }
    function u(F, U, ie, Z, fe, te) {
      var Q = ie.ref;
      return F = {
        $$typeof: p,
        type: F,
        key: U,
        props: ie,
        _owner: Z
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(F, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(F, "ref", { enumerable: !1, value: null }), F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(F, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(F, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.defineProperty(F, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    }
    function d(F, U, ie, Z, fe, te) {
      var Q = U.children;
      if (Q !== void 0)
        if (Z)
          if (O(Q)) {
            for (Z = 0; Z < Q.length; Z++)
              f(Q[Z]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Q);
      if (G.call(U, "key")) {
        Q = e(F);
        var ge = Object.keys(U).filter(function(Ge) {
          return Ge !== "key";
        });
        Z = 0 < ge.length ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}", V[Q + Z] || (ge = 0 < ge.length ? "{" + ge.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Z,
          Q,
          ge,
          Q
        ), V[Q + Z] = !0);
      }
      if (Q = null, ie !== void 0 && (t(ie), Q = "" + ie), o(U) && (t(U.key), Q = "" + U.key), "key" in U) {
        ie = {};
        for (var $e in U)
          $e !== "key" && (ie[$e] = U[$e]);
      } else ie = U;
      return Q && l(
        ie,
        typeof F == "function" ? F.displayName || F.name || "Unknown" : F
      ), u(
        F,
        Q,
        ie,
        s(),
        fe,
        te
      );
    }
    function f(F) {
      h(F) ? F._store && (F._store.validated = 1) : typeof F == "object" && F !== null && F.$$typeof === k && (F._payload.status === "fulfilled" ? h(F._payload.value) && F._payload.value._store && (F._payload.value._store.validated = 1) : F._store && (F._store.validated = 1));
    }
    function h(F) {
      return typeof F == "object" && F !== null && F.$$typeof === p;
    }
    var g = rr, p = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), v = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), H = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, O = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(F) {
        return F();
      }
    };
    var X, se = {}, ee = g.react_stack_bottom_frame.bind(
      g,
      i
    )(), R = K(r(i)), V = {};
    Cs.Fragment = m, Cs.jsx = function(F, U, ie) {
      var Z = 1e4 > H.recentlyCreatedOwnerStacks++;
      return d(
        F,
        U,
        ie,
        !1,
        Z ? Error("react-stack-top-frame") : ee,
        Z ? K(r(F)) : R
      );
    }, Cs.jsxs = function(F, U, ie) {
      var Z = 1e4 > H.recentlyCreatedOwnerStacks++;
      return d(
        F,
        U,
        ie,
        !0,
        Z ? Error("react-stack-top-frame") : ee,
        Z ? K(r(F)) : R
      );
    };
  }()), Cs;
}
process.env.NODE_ENV === "production" ? zl.exports = Sf() : zl.exports = kf();
var a = zl.exports;
function T0(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (n = 0; n < s; n++) e[n] && (t = T0(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function q() {
  for (var e, n, t = 0, r = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (n = T0(e)) && (r && (r += " "), r += n);
  return r;
}
const Ef = (e) => {
  switch (e) {
    case "ctaAccent":
      return "bg-cta-accent text-white hover:bg-cta-accent-hover active:bg-cta-accent-active disabled:bg-cta-accent-disabled";
    case "ctaHover":
      return "bg-cta-hover text-white hover:bg-cta-hover-hover active:bg-cta-hover-active disabled:bg-cta-hover-disabled";
    case "buttonGrey":
      return "bg-button-grey text-text-primary hover:bg-button-grey-hover active:bg-button-grey-active disabled:bg-button-grey-disabled";
    case "outlineAccent":
      return "bg-transparent text-text-primary border border-border-accent hover:bg-cta-accent/10 hover:border-border-accent-hover active:bg-cta-accent/20 disabled:bg-transparent disabled:border-border-accent-disabled";
    case "ghost":
      return "bg-transparent text-text-primary hover:bg-button-grey/10 active:bg-button-grey/20 disabled:bg-transparent";
    default:
      return "bg-cta-accent text-white hover:bg-cta-accent-hover active:bg-cta-accent-active disabled:bg-cta-accent-disabled";
  }
}, Nf = (e) => {
  switch (e) {
    case "xs":
      return "px-2 py-1 text-xs";
    case "sm":
      return "px-3 py-1.5 text-sm";
    case "md":
      return "px-4 py-2 text-base";
    case "lg":
      return "px-6 py-3 text-lg";
    default:
      return "px-4 py-2 text-base";
  }
}, Tf = un(
  ({
    size: e = "md",
    variant: n = "ctaAccent",
    fullWidth: t = !1,
    rounded: r = !1,
    loading: s = !1,
    leftIcon: i,
    rightIcon: o,
    children: l,
    className: c,
    disabled: u,
    ...d
  }, f) => {
    const h = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-accent disabled:opacity-50 disabled:cursor-not-allowed", g = Ef(n), p = Nf(e), C = q(
      h,
      g,
      p,
      {
        "w-full": t,
        "rounded-full": r,
        "rounded-lg": !r,
        "cursor-not-allowed": s || u
      },
      c
    );
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        ref: f,
        className: C,
        disabled: u || s,
        ...d,
        children: [
          s && /* @__PURE__ */ a.jsxs(
            "svg",
            {
              className: "animate-spin -ml-1 mr-2 h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ a.jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          !s && i && /* @__PURE__ */ a.jsx("span", { className: "mr-2", children: i }),
          l,
          !s && o && /* @__PURE__ */ a.jsx("span", { className: "ml-2", children: o })
        ]
      }
    );
  }
);
Tf.displayName = "Button";
const L0 = un(({
  children: e,
  label: n,
  required: t = !1,
  error: r,
  helpText: s,
  className: i = ""
}, o) => /* @__PURE__ */ a.jsxs("div", { ref: o, className: q("w-full space-y-2", i), children: [
  n && /* @__PURE__ */ a.jsxs("label", { className: "block text-sm font-medium text-gray-700", children: [
    n,
    t && /* @__PURE__ */ a.jsx("span", { className: "text-red-500 ml-1", children: "*" })
  ] }),
  e,
  (r || s) && /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: r ? /* @__PURE__ */ a.jsx("span", { className: "text-red-600", children: r }) : /* @__PURE__ */ a.jsx("span", { className: "text-gray-500", children: s }) })
] }));
L0.displayName = "FormControl";
const Lf = ({
  variant: e = "default",
  size: n = "md",
  error: t = !1,
  disabled: r = !1,
  className: s = ""
}) => {
  const i = "w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors", o = {
    default: "bg-surface-secondary text-text-secondary"
  }, l = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg"
  }, c = {
    default: "text-gray-900 placeholder-gray-500",
    error: "border-red-500 text-gray-900 placeholder-gray-500",
    disabled: "border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
  }, u = t ? "error" : r ? "disabled" : "default";
  return q(
    i,
    o[e],
    l[n],
    c[u],
    s
  );
}, X9 = ({
  variant: e = "primary",
  size: n = "md",
  disabled: t = !1,
  className: r = ""
}) => {
  const s = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2", i = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    accent: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500"
  }, o = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }, l = t ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  return q(
    s,
    i[e],
    o[n],
    l,
    r
  );
}, jf = ({
  type: e = "info",
  variant: n = "soft",
  className: t = ""
}) => q(
  "flex items-start gap-3 p-4 border rounded-lg",
  {
    info: {
      soft: "bg-blue-50 border-blue-200 text-blue-800",
      solid: "bg-blue-500 border-blue-600 text-white",
      outline: "border-2 border-blue-500 bg-transparent text-blue-700"
    },
    success: {
      soft: "bg-green-50 border-green-200 text-green-800",
      solid: "bg-green-500 border-green-600 text-white",
      outline: "border-2 border-green-500 bg-transparent text-green-700"
    },
    warning: {
      soft: "bg-yellow-50 border-yellow-200 text-yellow-800",
      solid: "bg-yellow-500 border-yellow-600 text-white",
      outline: "border-2 border-yellow-500 bg-transparent text-yellow-700"
    },
    error: {
      soft: "bg-red-50 border-red-200 text-red-800",
      solid: "bg-red-500 border-red-600 text-white",
      outline: "border-2 border-red-500 bg-transparent text-red-700"
    }
  }[e][n],
  t
), Af = (e = "md") => q(
  "bg-white rounded-lg shadow-xl",
  {
    sm: "w-11/12 max-w-md",
    md: "w-11/12 max-w-2xl",
    lg: "w-11/12 max-w-4xl",
    xl: "w-11/12 max-w-7xl"
  }[e]
), Q9 = (e = "info") => q(
  "fixed top-4 right-4 z-50 flex items-center gap-3 p-4 border rounded-lg shadow-lg max-w-sm",
  {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800"
  }[e],
  "animate-in slide-in-from-right-2 duration-300"
), mn = (e) => {
  const n = e.split("-");
  if (n.length === 2) {
    const t = n[0], r = n[1];
    if (t && r && ["default", "training", "ocean"].includes(t) && ["light", "dark"].includes(r))
      return { theme: t, mode: r };
  }
  return { theme: "default", mode: "light" };
}, $r = (e, n) => `${e}-${n}`, Cr = [
  {
    name: "cta-accent",
    themes: {
      default: {
        light: {
          default: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          disabled: "#93C5FD"
        },
        dark: {
          default: "#60A5FA",
          hover: "#3B82F6",
          active: "#2563EB",
          disabled: "#1E3A8A"
        }
      },
      training: {
        light: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#d328d9ff",
          disabled: "#C4B5FD"
        },
        dark: {
          default: "#A78BFA",
          hover: "#8B5CF6",
          active: "#7C3AED",
          disabled: "#6D28D9"
        }
      },
      ocean: {
        light: {
          default: "#06B6D4",
          hover: "#0891B2",
          active: "#0E7490",
          disabled: "#67E8F9"
        },
        dark: {
          default: "#22D3EE",
          hover: "#06B6D4",
          active: "#0891B2",
          disabled: "#0E7490"
        }
      }
    }
  },
  {
    name: "cta-hover",
    themes: {
      default: {
        light: {
          default: "#2563EB",
          hover: "#1D4ED8",
          active: "#1E40AF",
          disabled: "#93C5FD"
        },
        dark: {
          default: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          disabled: "#1E3A8A"
        }
      },
      training: {
        light: {
          default: "#7C3AED",
          hover: "#6D28D9",
          active: "#5B21B6",
          disabled: "#C4B5FD"
        },
        dark: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
          disabled: "#5B21B6"
        }
      },
      ocean: {
        light: {
          default: "#0891B2",
          hover: "#0E7490",
          active: "#155E75",
          disabled: "#67E8F9"
        },
        dark: {
          default: "#06B6D4",
          hover: "#0891B2",
          active: "#0E7490",
          disabled: "#155E75"
        }
      }
    }
  },
  {
    name: "button-grey",
    themes: {
      default: {
        light: {
          default: "#6B7280",
          hover: "#4B5563",
          active: "#374151",
          disabled: "#D1D5DB"
        },
        dark: {
          default: "#9CA3AF",
          hover: "#6B7280",
          active: "#4B5563",
          disabled: "#374151"
        }
      },
      training: {
        light: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
          disabled: "#C4B5FD"
        },
        dark: {
          default: "#A78BFA",
          hover: "#8B5CF6",
          active: "#7C3AED",
          disabled: "#6D28D9"
        }
      },
      ocean: {
        light: {
          default: "#155E75",
          hover: "#0E7490",
          active: "#164E63",
          disabled: "#67E8F9"
        },
        dark: {
          default: "#22D3EE",
          hover: "#06B6D4",
          active: "#0891B2",
          disabled: "#155E75"
        }
      }
    }
  },
  {
    name: "text-primary",
    themes: {
      default: {
        light: {
          default: "#111827",
          hover: "#1F2937",
          active: "#374151",
          disabled: "#9CA3AF"
        },
        dark: {
          default: "#F9FAFB",
          hover: "#F3F4F6",
          active: "#E5E7EB",
          disabled: "#6B7280"
        }
      },
      training: {
        light: {
          default: "#581C87",
          hover: "#6B21A8",
          active: "#7C2D12",
          disabled: "#A78BFA"
        },
        dark: {
          default: "#E9D5FF",
          hover: "#DDD6FE",
          active: "#C4B5FD",
          disabled: "#8B5CF6"
        }
      },
      ocean: {
        light: {
          default: "#164E63",
          hover: "#155E75",
          active: "#0E7490",
          disabled: "#22D3EE"
        },
        dark: {
          default: "#ECFEFF",
          hover: "#CFFAFE",
          active: "#A5F3FC",
          disabled: "#67E8F9"
        }
      }
    }
  },
  {
    name: "text-secondary",
    themes: {
      default: {
        light: {
          default: "#6B7280",
          hover: "#4B5563",
          active: "#374151",
          disabled: "#D1D5DB"
        },
        dark: {
          default: "#9CA3AF",
          hover: "#6B7280",
          active: "#4B5563",
          disabled: "#374151"
        }
      },
      training: {
        light: {
          default: "#7C3AED",
          hover: "#6D28D9",
          active: "#5B21B6",
          disabled: "#C4B5FD"
        },
        dark: {
          default: "#C4B5FD",
          hover: "#A78BFA",
          active: "#8B5CF6",
          disabled: "#7C3AED"
        }
      },
      ocean: {
        light: {
          default: "#155E75",
          hover: "#0E7490",
          active: "#0891B2",
          disabled: "#67E8F9"
        },
        dark: {
          default: "#A5F3FC",
          hover: "#67E8F9",
          active: "#22D3EE",
          disabled: "#06B6D4"
        }
      }
    }
  },
  {
    name: "surface-primary",
    themes: {
      default: {
        light: {
          default: "#FFFFFF",
          hover: "#F9FAFB",
          active: "#F3F4F6",
          disabled: "#F9FAFB"
        },
        dark: {
          default: "#1F2937",
          hover: "#374151",
          active: "#4B5563",
          disabled: "#374151"
        }
      },
      training: {
        light: {
          default: "#F3E8FF",
          hover: "#E9D5FF",
          active: "#00bac0ff",
          disabled: "#F3E8FF"
        },
        dark: {
          default: "#4C1D95",
          hover: "#5B21B6",
          active: "#6D28D9",
          disabled: "#4C1D95"
        }
      },
      ocean: {
        light: {
          default: "#ECFEFF",
          hover: "#CFFAFE",
          active: "#A5F3FC",
          disabled: "#ECFEFF"
        },
        dark: {
          default: "#164E63",
          hover: "#155E75",
          active: "#0E7490",
          disabled: "#164E63"
        }
      }
    }
  },
  {
    name: "surface-secondary",
    themes: {
      default: {
        light: {
          default: "#eff4fb",
          hover: "#F9FAFB",
          active: "#F3F4F6",
          disabled: "#F9FAFB"
        },
        dark: {
          default: "#1F2937",
          hover: "#374151",
          active: "#4B5563",
          disabled: "#374151"
        }
      },
      training: {
        light: {
          default: "#F3E8FF",
          hover: "#E9D5FF",
          active: "#DDD6FE",
          disabled: "#F3E8FF"
        },
        dark: {
          default: "#5B21B6",
          hover: "#6D28D9",
          active: "#7C3AED",
          disabled: "#5B21B6"
        }
      },
      ocean: {
        light: {
          default: "#CFFAFE",
          hover: "#A5F3FC",
          active: "#67E8F9",
          disabled: "#ECFEFF"
        },
        dark: {
          default: "#155E75",
          hover: "#0E7490",
          active: "#0891B2",
          disabled: "#155E75"
        }
      }
    }
  },
  {
    name: "border-accent",
    themes: {
      default: {
        light: {
          default: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          disabled: "#93C5FD"
        },
        dark: {
          default: "#60A5FA",
          hover: "#3B82F6",
          active: "#2563EB",
          disabled: "#1E3A8A"
        }
      },
      training: {
        light: {
          default: "#8B5CF6",
          hover: "#7C3AED",
          active: "#6D28D9",
          disabled: "#C4B5FD"
        },
        dark: {
          default: "#A78BFA",
          hover: "#8B5CF6",
          active: "#7C3AED",
          disabled: "#6D28D9"
        }
      },
      ocean: {
        light: {
          default: "#06B6D4",
          hover: "#0891B2",
          active: "#0E7490",
          disabled: "#67E8F9"
        },
        dark: {
          default: "#22D3EE",
          hover: "#06B6D4",
          active: "#0891B2",
          disabled: "#0E7490"
        }
      }
    }
  }
], Mf = (e, n = "default-light", t = "default") => {
  var o, l;
  const r = Cr.find((c) => c.name === e);
  if (!r) return null;
  const { theme: s, mode: i } = mn(n);
  return ((l = (o = r.themes[s]) == null ? void 0 : o[i]) == null ? void 0 : l[t]) || null;
}, $s = (e) => {
  const n = {}, { theme: t, mode: r } = mn(e);
  return Cr.forEach((s) => {
    var i;
    n[s.name] = ((i = s.themes[t]) == null ? void 0 : i[r]) || {};
  }), n;
}, Ff = (e) => {
  const n = $s(e), { theme: t, mode: r } = mn(e), s = e === "default-light" ? ":root" : `.${t}-${r}`, i = Object.entries(n).flatMap(
    ([o, l]) => Object.entries(l).map(
      ([c, u]) => `  --color-${o}-${c}: ${u};`
    )
  ).join(`
`);
  return `${s} {
${i}
}`;
}, ys = (e) => {
  if (typeof document > "u") return;
  const n = document.documentElement, t = $s(e), { theme: r, mode: s } = mn(e);
  Object.entries(t).forEach(([i, o]) => {
    Object.entries(o).forEach(([l, c]) => {
      n.style.setProperty(`--color-${i}-${l}`, c);
    });
  }), n.classList.remove("default-light", "default-dark", "training-light", "training-dark", "ocean-light", "ocean-dark", "light", "dark", "training", "ocean"), e !== "default-light" && n.classList.add(`${r}-${s}`), n.classList.add(s), r !== "default" && n.classList.add(r);
}, ep = () => Cr.map((e) => e.name), Zl = () => ["default", "training", "ocean"], Wl = () => ["light", "dark"], tp = () => {
  const e = Zl(), n = Wl();
  return e.flatMap((t) => n.map((r) => $r(t, r)));
}, np = (e) => Cr.some((n) => n.name === e), rp = (e, n) => ({ name: e, themes: n }), sp = () => JSON.stringify(Cr, null, 2), ip = (e) => {
  try {
    const n = JSON.parse(e);
    if (!Array.isArray(n))
      throw new Error("Color system must be an array");
    return n;
  } catch (n) {
    throw new Error(
      `Error importing: ${n instanceof Error ? n.message : "Invalid format"}`
    );
  }
}, j0 = (e = "default-light", n = "color-system-variant") => {
  const [t, r] = ce(e), s = Kt(!0), i = Kt(!1), o = Kt(!1), { theme: l, mode: c } = mn(t), u = He(
    (m) => {
      r(m), ys(m), typeof window < "u" && localStorage.setItem(n, m);
    },
    [n]
  ), d = He(
    (m) => {
      r((x) => {
        const { mode: y } = mn(x), _ = $r(m, y);
        return ys(_), typeof window < "u" && localStorage.setItem(n, _), _;
      });
    },
    [n]
  ), f = He(
    (m) => {
      r((x) => {
        const { theme: y } = mn(x), _ = $r(y, m);
        return ys(_), typeof window < "u" && localStorage.setItem(n, _), _;
      });
    },
    [n]
  ), h = He(
    (m, x) => {
      const y = $r(m, x);
      u(y);
    },
    [u]
  ), g = He(
    (m, x = "default") => Mf(m, t, x),
    [t]
  ), p = He(
    (m) => $s(m || t),
    [t]
  ), C = He(
    (m) => Ff(m || t),
    [t]
  );
  return we(() => {
    if (i.current = !0, !o.current && typeof window < "u") {
      o.current = !0;
      try {
        const m = localStorage.getItem(n);
        if (m) {
          const { theme: x, mode: y } = mn(m);
          if (x && y) {
            const _ = $r(x, y);
            r(_), ys(_);
          }
        }
      } catch {
      }
    }
  }, [n]), we(() => {
    if (!(!i.current || typeof window > "u") && s.current) {
      s.current = !1;
      const m = document.documentElement, x = $s(t);
      Object.entries(x).forEach(([y, _]) => {
        Object.entries(_).forEach(([v, w]) => {
          m.style.setProperty(`--color-${y}-${v}`, w);
        });
      });
    }
  }, [t]), we(() => {
    if (!i.current || typeof window > "u") return;
    const m = document.documentElement, x = Array.from(m.classList), { theme: y, mode: _ } = mn(t), v = t === "default-light" || x.includes(`${y}-${_}`), w = x.includes(_), E = y === "default" || x.includes(y);
    if (v && w && E) {
      const N = $s(t);
      Object.entries(N).forEach(([S, k]) => {
        Object.entries(k).forEach(([L, A]) => {
          m.style.setProperty(`--color-${S}-${L}`, A);
        });
      });
    } else
      ys(t);
  }, [t]), {
    currentVariant: t,
    currentTheme: l,
    currentMode: c,
    setVariant: u,
    setTheme: d,
    setMode: f,
    setThemeAndMode: h,
    getColorValue: g,
    getVariantColors: p,
    generateCSS: C,
    availableVariants: Zl().flatMap(
      (m) => Wl().map((x) => $r(m, x))
    ),
    availableThemes: Zl(),
    availableModes: Wl(),
    availableColorClasses: Cr.map((m) => m.name)
  };
}, Of = ({
  className: e = "",
  showLabel: n = !0
}) => {
  const { currentMode: t, setMode: r } = j0(), s = t === "dark", i = () => {
    r(s ? "light" : "dark");
  };
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      onClick: i,
      className: `
        inline-flex items-center gap-2 px-3 py-2 rounded-lg
        bg-surface-secondary
        text-text-primary
        hover:bg-surface-secondary-hover
        border border-button-grey
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-cta-accent focus:ring-offset-2
        ${e}
      `,
      "aria-label": s ? "Switch to light mode" : "Switch to dark mode",
      children: [
        s && /* @__PURE__ */ a.jsx(
          "svg",
          {
            className: `w-5 h-5 transition-opacity duration-200 ${s ? "opacity-50" : "opacity-100"}`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ a.jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              }
            )
          }
        ),
        !s && /* @__PURE__ */ a.jsx(
          "svg",
          {
            className: `w-5 h-5 transition-opacity duration-200 ${s ? "opacity-100" : "opacity-50"}`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ a.jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              }
            )
          }
        ),
        n && /* @__PURE__ */ a.jsx("span", { className: "text-sm font-medium", children: s ? "Light" : "Dark" })
      ]
    }
  );
}, Da = un(({
  id: e,
  autocomplete: n,
  autofocus: t = !1,
  label: r,
  placeholder: s,
  type: i = "text",
  name: o,
  value: l,
  defaultValue: c,
  disabled: u = !1,
  error: d,
  helpText: f,
  clearable: h = !1,
  required: g = !1,
  className: p,
  leftIcon: C,
  rightIcon: m,
  onChange: x,
  onClear: y,
  rows: _,
  cols: v,
  ...w
}, E) => {
  const N = l !== void 0, [S, k] = ce(c || ""), L = N ? l : S, A = (O) => {
    const K = O.target.value;
    N || k(K), x == null || x(O);
  }, H = () => {
    N || k(""), y == null || y(), x && x({
      target: { value: "" },
      currentTarget: { value: "" }
    });
  }, G = Lf({
    variant: "default",
    size: "md",
    error: !!d,
    disabled: u,
    className: p
  });
  return /* @__PURE__ */ a.jsx(
    L0,
    {
      label: r,
      required: g,
      error: d,
      helpText: f,
      children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        C && /* @__PURE__ */ a.jsx("div", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none", children: C }),
        i === "textarea" ? /* @__PURE__ */ a.jsx(
          "textarea",
          {
            id: e,
            ref: E,
            name: o,
            value: L || "",
            placeholder: s,
            rows: _ ?? 3,
            cols: v,
            disabled: u,
            required: g,
            className: `bg-white w-full *:${G} ${C ? "pl-10" : ""} ${m || h && L ? "pr-10" : ""}`,
            onChange: A,
            autoComplete: n,
            autoFocus: t,
            ...w
          }
        ) : /* @__PURE__ */ a.jsx(
          "input",
          {
            id: e,
            ref: E,
            type: i,
            name: o,
            value: L || "",
            placeholder: s,
            disabled: u,
            required: g,
            className: `bg-white w-full *:${G} ${C ? "pl-10" : ""} ${m || h && L ? "pr-10" : ""}`,
            onChange: A,
            autoComplete: n,
            autoFocus: t,
            ...w
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 transform -translate-y-1/2", children: h && L && !u ? /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: H,
            className: "text-gray-400 hover:text-gray-600 transition-colors",
            "aria-label": "Limpiar campo",
            children: /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ) : m ? /* @__PURE__ */ a.jsx("div", { className: "text-gray-400 pointer-events-none", children: m }) : null })
      ] })
    }
  );
});
Da.displayName = "Input";
const If = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "54", height: "37", viewBox: "0 0 54 37", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M53.3269 15.9085V37H0.673096V16.7295C0.673096 6.9792 6.19658 0.821081 15.0755 0.821081C20.8054 0.821081 24.8319 4.362 26.2773 7.90291C27.9292 3.84882 31.7492 0 38.46 0C48.2164 0 53.3269 6.61997 53.3269 15.9085ZM7.90009 17.3967V29.3024H22.8703V17.3967C22.8703 12.3162 20.2892 8.82663 15.3852 8.82663C10.4812 8.82663 7.90009 12.2649 7.90009 17.3967ZM30.0973 16.6269V29.3024H46.0999V16.6269C46.0999 11.0846 42.7445 8.00555 38.047 8.00555C33.3494 8.00555 30.0973 11.0846 30.0973 16.6269Z", fill: "currentColor" }) }), Df = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M19.8009 8.7014L17.7787 7.03856V3.72189C17.7787 3.64822 17.7495 3.57756 17.6974 3.52547C17.6453 3.47338 17.5746 3.44411 17.5009 3.44411H16.3898C16.3172 3.44456 16.2476 3.47345 16.196 3.5246C16.1444 3.57575 16.1149 3.64508 16.1138 3.71772V5.66981L11.2464 1.67328C10.8967 1.3821 10.456 1.22266 10.0009 1.22266C9.54588 1.22266 9.10519 1.3821 8.75546 1.67328L0.200951 8.7014C0.144999 8.74823 0.0988192 8.80562 0.065048 8.8703C0.0312769 8.93497 0.0105759 9.00566 0.00412734 9.07834C-0.00232127 9.15101 0.00560876 9.22425 0.0274646 9.29386C0.0493204 9.36347 0.084674 9.4281 0.131506 9.48404L0.487062 9.91113C0.581624 10.024 0.717143 10.0948 0.863833 10.1078C1.01052 10.1208 1.15638 10.075 1.26935 9.98057L2.22317 9.19724V15.6663C2.224 15.9608 2.34133 16.2429 2.54952 16.4511C2.75772 16.6593 3.03985 16.7766 3.33428 16.7774H7.77873C8.07316 16.7766 8.3553 16.6593 8.56349 16.4511C8.77169 16.2429 8.88901 15.9608 8.88984 15.6663V12.0552H11.1121V15.6663C11.1129 15.9608 11.2302 16.2429 11.4384 16.4511C11.6466 16.6593 11.9287 16.7766 12.2232 16.7774H16.6676C16.9607 16.7768 17.2417 16.6607 17.4497 16.4543C17.6577 16.2478 17.7759 15.9677 17.7787 15.6747V9.19654L18.7346 9.98196C18.8476 10.0764 18.9935 10.1222 19.1402 10.1092C19.2868 10.0961 19.4224 10.0254 19.5169 9.91251L19.8721 9.48578C19.9191 9.42968 19.9546 9.36484 19.9764 9.295C19.9983 9.22516 20.0062 9.15168 19.9996 9.0788C19.9929 9.00591 19.972 8.93505 19.9379 8.87029C19.9038 8.80552 19.8573 8.74813 19.8009 8.7014ZM16.1069 15.1108H12.7787V11.4997C12.7779 11.2052 12.6606 10.9231 12.4524 10.7149C12.2442 10.5067 11.962 10.3894 11.6676 10.3886H8.33428C8.03985 10.3894 7.75772 10.5067 7.54952 10.7149C7.34133 10.9231 7.224 11.2052 7.22317 11.4997V15.1108H3.88984V7.82849L10.0009 2.80696L16.1121 7.8264L16.1069 15.1108Z", fill: "currentColor" }) }), $f = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M5.82617 11.25H4.26367C4.00586 11.25 3.79492 11.0391 3.79492 10.7812V9.21875C3.79492 8.96094 4.00586 8.75 4.26367 8.75H5.82617C6.08398 8.75 6.29492 8.96094 6.29492 9.21875V10.7812C6.29492 11.0391 6.08398 11.25 5.82617 11.25ZM10.0449 10.7812V9.21875C10.0449 8.96094 9.83398 8.75 9.57617 8.75H8.01367C7.75586 8.75 7.54492 8.96094 7.54492 9.21875V10.7812C7.54492 11.0391 7.75586 11.25 8.01367 11.25H9.57617C9.83398 11.25 10.0449 11.0391 10.0449 10.7812ZM13.7949 10.7812V9.21875C13.7949 8.96094 13.584 8.75 13.3262 8.75H11.7637C11.5059 8.75 11.2949 8.96094 11.2949 9.21875V10.7812C11.2949 11.0391 11.5059 11.25 11.7637 11.25H13.3262C13.584 11.25 13.7949 11.0391 13.7949 10.7812ZM10.0449 14.5312V12.9688C10.0449 12.7109 9.83398 12.5 9.57617 12.5H8.01367C7.75586 12.5 7.54492 12.7109 7.54492 12.9688V14.5312C7.54492 14.7891 7.75586 15 8.01367 15H9.57617C9.83398 15 10.0449 14.7891 10.0449 14.5312ZM6.29492 14.5312V12.9688C6.29492 12.7109 6.08398 12.5 5.82617 12.5H4.26367C4.00586 12.5 3.79492 12.7109 3.79492 12.9688V14.5312C3.79492 14.7891 4.00586 15 4.26367 15H5.82617C6.08398 15 6.29492 14.7891 6.29492 14.5312ZM13.7949 14.5312V12.9688C13.7949 12.7109 13.584 12.5 13.3262 12.5H11.7637C11.5059 12.5 11.2949 12.7109 11.2949 12.9688V14.5312C11.2949 14.7891 11.5059 15 11.7637 15H13.3262C13.584 15 13.7949 14.7891 13.7949 14.5312ZM17.5449 4.375V18.125C17.5449 19.1602 16.7051 20 15.6699 20H1.91992C0.884766 20 0.0449219 19.1602 0.0449219 18.125V4.375C0.0449219 3.33984 0.884766 2.5 1.91992 2.5H3.79492V0.46875C3.79492 0.210938 4.00586 0 4.26367 0H5.82617C6.08398 0 6.29492 0.210938 6.29492 0.46875V2.5H11.2949V0.46875C11.2949 0.210938 11.5059 0 11.7637 0H13.3262C13.584 0 13.7949 0.210938 13.7949 0.46875V2.5H15.6699C16.7051 2.5 17.5449 3.33984 17.5449 4.375ZM15.6699 17.8906V6.25H1.91992V17.8906C1.91992 18.0195 2.02539 18.125 2.1543 18.125H15.4355C15.5645 18.125 15.6699 18.0195 15.6699 17.8906Z", fill: "currentColor" }) }), Rf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M13.8889 5.33398V8.66732H6.11111V5.33398H13.8889ZM14.7222 3.66732H5.27778C4.81736 3.66732 4.44444 4.04023 4.44444 4.50065V9.50065C4.44444 9.96107 4.81736 10.334 5.27778 10.334H14.7222C15.1826 10.334 15.5556 9.96107 15.5556 9.50065V4.50065C15.5556 4.04023 15.1826 3.66732 14.7222 3.66732ZM19.7222 5.61176H20V2.00065C20 1.08016 19.2538 0.333984 18.3333 0.333984H1.66667C0.746181 0.333984 0 1.08016 0 2.00065V5.61176H0.277778C1.04479 5.61176 1.66667 6.23364 1.66667 7.00065C1.66667 7.76766 1.04479 8.38954 0.277778 8.38954H0V12.0007C0 12.9211 0.746181 13.6673 1.66667 13.6673H18.3333C19.2538 13.6673 20 12.9211 20 12.0007V8.38954H19.7222C18.9552 8.38954 18.3333 7.76766 18.3333 7.00065C18.3333 6.23364 18.9552 5.61176 19.7222 5.61176ZM18.3333 4.27947C17.3448 4.78607 16.6667 5.81558 16.6667 7.00065C16.6667 8.18572 17.3448 9.21523 18.3333 9.72183V12.0007H1.66667V9.72183C2.65521 9.21523 3.33333 8.18572 3.33333 7.00065C3.33333 5.81558 2.65521 4.78607 1.66667 4.27947V2.00065H18.3333V4.27947Z", fill: "currentColor" }) }), Pf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M19.0027 11C20.3841 11 21.503 9.88125 21.503 8.5C21.503 7.11875 20.3841 6 19.0027 6C17.6212 6 16.5023 7.11875 16.5023 8.5C16.5023 9.88125 17.6212 11 19.0027 11ZM19.0027 7.5C19.5527 7.5 20.0028 7.95 20.0028 8.5C20.0028 9.05 19.5527 9.5 19.0027 9.5C18.4526 9.5 18.0025 9.05 18.0025 8.5C18.0025 7.95 18.4526 7.5 19.0027 7.5ZM5.00047 11C6.38193 11 7.50086 9.88125 7.50086 8.5C7.50086 7.11875 6.38193 6 5.00047 6C3.619 6 2.50008 7.11875 2.50008 8.5C2.50008 9.88125 3.619 11 5.00047 11ZM5.00047 7.5C5.55055 7.5 6.00062 7.95 6.00062 8.5C6.00062 9.05 5.55055 9.5 5.00047 9.5C4.45038 9.5 4.00031 9.05 4.00031 8.5C4.00031 7.95 4.45038 7.5 5.00047 7.5ZM17.3899 14.0906C16.5304 12.8156 14.8676 12.3406 13.3955 12.7875C12.9517 12.9219 12.486 12.9969 11.9984 12.9969C11.5109 12.9969 11.0452 12.9219 10.6013 12.7875C9.12924 12.3406 7.46648 12.8125 6.60697 14.0906C6.21941 14.6656 5.99437 15.3563 5.99437 16.1V17.5C5.99437 18.3281 6.66635 19 7.49461 19H16.496C17.3243 19 17.9962 18.3281 17.9962 17.5V16.1C18.0025 15.3563 17.7775 14.6656 17.3899 14.0906ZM16.5023 17.5H7.50086V16.1C7.50086 14.9625 8.4135 14.0312 9.54493 14C10.3419 14.3313 11.1671 14.5 12.0016 14.5C12.8361 14.5 13.6612 14.3313 14.4582 14C15.5896 14.0312 16.5023 14.9594 16.5023 16.1V17.5ZM19.3777 12H18.6276C18.0869 12 17.5837 12.1656 17.1649 12.4469C17.5837 12.7625 17.9525 13.1406 18.24 13.5781C18.3619 13.5344 18.4901 13.5 18.6245 13.5H19.3746C19.9934 13.5 20.4998 14.0063 20.4998 14.625C20.4998 15.0375 20.8373 15.375 21.2499 15.375C21.6624 15.375 22 15.0375 22 14.625C22.0031 13.1781 20.8248 12 19.3777 12ZM12.0016 12C13.9362 12 15.5021 10.4344 15.5021 8.5C15.5021 6.56562 13.9362 5 12.0016 5C10.0669 5 8.50101 6.56562 8.50101 8.5C8.50101 10.4344 10.0669 12 12.0016 12ZM12.0016 6.5C13.1049 6.5 14.0019 7.39688 14.0019 8.5C14.0019 9.60313 13.1049 10.5 12.0016 10.5C10.8983 10.5 10.0012 9.60313 10.0012 8.5C10.0012 7.39688 10.8983 6.5 12.0016 6.5ZM6.83825 12.4469C6.41944 12.1656 5.91624 12 5.37553 12H4.62541C3.17831 12 2 13.1781 2 14.625C2 15.0375 2.33755 15.375 2.75012 15.375C3.16268 15.375 3.50023 15.0375 3.50023 14.625C3.50023 14.0063 4.00656 13.5 4.62541 13.5H5.37553C5.51305 13.5 5.64119 13.5344 5.75996 13.5781C6.05063 13.1406 6.41944 12.7625 6.83825 12.4469Z", fill: "currentColor" }) }), Hf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M3.75 2.5H7.03125C7.28906 2.5 7.5 2.71094 7.5 2.96875V3.90625C7.5 4.16406 7.28906 4.375 7.03125 4.375H3.75C2.71484 4.375 1.875 5.21484 1.875 6.25V13.75C1.875 14.7852 2.71484 15.625 3.75 15.625H7.03125C7.28906 15.625 7.5 15.8359 7.5 16.0938V17.0312C7.5 17.2891 7.28906 17.5 7.03125 17.5H3.75C1.67969 17.5 0 15.8203 0 13.75V6.25C0 4.17969 1.67969 2.5 3.75 2.5ZM12.7773 3.26172L12.0117 4.02734C11.8242 4.21484 11.8281 4.51562 12.0195 4.69531L16.4375 8.98438H6.71875C6.46094 8.98438 6.25 9.19531 6.25 9.45312V10.5469C6.25 10.8047 6.46094 11.0156 6.71875 11.0156H16.4375L12.0195 15.3008C11.832 15.4844 11.8281 15.7852 12.0117 15.9688L12.7773 16.7344C12.9609 16.918 13.2578 16.918 13.4414 16.7344L19.8633 10.3281C20.0469 10.1445 20.0469 9.84766 19.8633 9.66406L13.4414 3.25781C13.2578 3.07813 12.9609 3.07812 12.7773 3.26172Z", fill: "currentColor" }) }), nc = ({ className: e }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    className: e,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      }
    )
  }
), Bf = ({ className: e }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    width: "24",
    height: "24",
    className: e,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 14l9-5-9-5-9 5 9 5z"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M12 14v7M5 12.55V17a2 2 0 002 2h10a2 2 0 002-2v-4.45"
        }
      )
    ]
  }
), Vf = ({ className: e }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    className: e,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      }
    )
  }
), rc = ({ className: e }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    className: e,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      }
    )
  }
), zf = ({ className: e }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    className: e,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      }
    )
  }
), A0 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 8 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M7.33594 10.333L1.60156 16.1143C1.41797 16.2979 1.12109 16.2979 0.9375 16.1143L0.164062 15.3408C-0.0195312 15.1572 -0.0195312 14.8604 0.164062 14.6768L4.79297 10.001L0.164062 5.3252C-0.0195312 5.1416 -0.0195312 4.84473 0.164062 4.66113L0.9375 3.8877C1.12109 3.7041 1.41797 3.7041 1.60156 3.8877L7.33594 9.66895C7.51953 9.85254 7.51953 10.1494 7.33594 10.333Z", fill: "currentColor" }) }), M0 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 8 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { clipPath: "url(#clip0_556_6579)", children: /* @__PURE__ */ a.jsx("path", { d: "M0.163086 9.66895L5.89746 3.8877C6.08105 3.7041 6.37793 3.7041 6.56152 3.8877L7.33496 4.66113C7.51855 4.84473 7.51855 5.1416 7.33496 5.3252L2.70605 10.001L7.33496 14.6768C7.51855 14.8604 7.51855 15.1572 7.33496 15.3408L6.56152 16.1143C6.37793 16.2979 6.08105 16.2979 5.89746 16.1143L0.163086 10.333C-0.0205078 10.1494 -0.0205078 9.85254 0.163086 9.66895Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_556_6579", children: /* @__PURE__ */ a.jsx("rect", { width: "7.5", height: "20", fill: "white" }) }) })
] }), Zf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 13 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M5.91797 13.5869L0.136719 7.85254C-0.046875 7.66895 -0.046875 7.37207 0.136719 7.18848L0.910156 6.41504C1.09375 6.23145 1.39062 6.23145 1.57422 6.41504L6.25 11.0439L10.9258 6.41504C11.1094 6.23145 11.4062 6.23145 11.5898 6.41504L12.3633 7.18848C12.5469 7.37207 12.5469 7.66895 12.3633 7.85254L6.58203 13.5869C6.39844 13.7705 6.10156 13.7705 5.91797 13.5869Z", fill: "currentColor" }) }), Wf = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("path", { d: "M12.7639 7.91406L18.5452 13.6484C18.7288 13.832 18.7288 14.1289 18.5452 14.3125L17.7717 15.0859C17.5881 15.2695 17.2913 15.2695 17.1077 15.0859L12.4319 10.457L7.7561 15.0859C7.57251 15.2695 7.27563 15.2695 7.09204 15.0859L6.3186 14.3125C6.13501 14.1289 6.13501 13.832 6.3186 13.6484L12.0999 7.91406C12.2834 7.73047 12.5803 7.73047 12.7639 7.91406Z", fill: "currentColor" }),
  /* @__PURE__ */ a.jsxs("defs", { children: [
    " ",
    /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_3_1709", children: /* @__PURE__ */ a.jsx("rect", { width: "24", height: "24", fill: "white" }) }),
    /* @__PURE__ */ a.jsx("clipPath", { id: "clip1_3_1709", children: /* @__PURE__ */ a.jsx("rect", { width: "12.5", height: "20", fill: "white", transform: "translate(6.18188 1.5)" }) })
  ] })
] }), Uf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M15.625 10.3125C15.1074 10.3125 14.6875 10.732 14.6875 11.25C14.6875 11.7676 15.1074 12.1875 15.625 12.1875C16.1426 12.1875 16.5625 11.7676 16.5625 11.25C16.5625 10.732 16.1426 10.3125 15.625 10.3125ZM16.875 6.875V3.90156C16.875 3.4043 16.6773 2.92734 16.3258 2.57578L14.2992 0.549219C13.9477 0.197656 13.4707 0 12.9734 0H4.31563C3.65781 0 3.125 0.559766 3.125 1.25V6.875C1.39922 6.875 0 8.27422 0 10V15C0 15.3453 0.279687 15.625 0.625 15.625H3.125V19.375C3.125 19.7203 3.40469 20 3.75 20H16.25C16.5953 20 16.875 19.7203 16.875 19.375V15.625H19.375C19.7203 15.625 20 15.3453 20 15V10C20 8.27422 18.6008 6.875 16.875 6.875ZM5 1.875H12.5V3.75C12.5 4.09531 12.7797 4.375 13.125 4.375H15V6.875H5V1.875ZM15 18.125H5V15.625H15V18.125ZM18.125 13.75H1.875V10C1.875 9.31094 2.43594 8.75 3.125 8.75H16.875C17.5641 8.75 18.125 9.31094 18.125 10V13.75Z", fill: "currentColor" }) }), Kf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M19.8633 18.3164L15.1211 13.5742C15.0312 13.4844 14.9141 13.4375 14.7891 13.4375H14.2734C15.5039 12.0117 16.25 10.1562 16.25 8.125C16.25 3.63672 12.6133 0 8.125 0C3.63672 0 0 3.63672 0 8.125C0 12.6133 3.63672 16.25 8.125 16.25C10.1562 16.25 12.0117 15.5039 13.4375 14.2734V14.7891C13.4375 14.9141 13.4883 15.0312 13.5742 15.1211L18.3164 19.8633C18.5 20.0469 18.7969 20.0469 18.9805 19.8633L19.8633 18.9805C20.0469 18.7969 20.0469 18.5 19.8633 18.3164ZM8.125 14.375C4.67188 14.375 1.875 11.5781 1.875 8.125C1.875 4.67188 4.67188 1.875 8.125 1.875C11.5781 1.875 14.375 4.67188 14.375 8.125C14.375 11.5781 11.5781 14.375 8.125 14.375Z", fill: "currentColor" }) }), Gf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M10.625 13.75H9.6875V0.625C9.6875 0.28125 9.40625 0 9.0625 0H8.4375C8.09375 0 7.8125 0.28125 7.8125 0.625V13.75H6.875C6.53125 13.75 6.25 14.0312 6.25 14.375V15.625C6.25 15.9688 6.53125 16.25 6.875 16.25H7.8125V19.375C7.8125 19.7188 8.09375 20 8.4375 20H9.0625C9.40625 20 9.6875 19.7188 9.6875 19.375V16.25H10.625C10.9688 16.25 11.25 15.9688 11.25 15.625V14.375C11.25 14.0312 10.9688 13.75 10.625 13.75ZM4.375 3.75H3.4375V0.625C3.4375 0.28125 3.15625 0 2.8125 0H2.1875C1.84375 0 1.5625 0.28125 1.5625 0.625V3.75H0.625C0.28125 3.75 0 4.03125 0 4.375V5.625C0 5.96875 0.28125 6.25 0.625 6.25H1.5625V19.375C1.5625 19.7188 1.84375 20 2.1875 20H2.8125C3.15625 20 3.4375 19.7188 3.4375 19.375V6.25H4.375C4.71875 6.25 5 5.96875 5 5.625V4.375C5 4.03125 4.71875 3.75 4.375 3.75ZM16.875 8.75H15.9375V0.625C15.9375 0.28125 15.6562 0 15.3125 0H14.6875C14.3438 0 14.0625 0.28125 14.0625 0.625V8.75H13.125C12.7812 8.75 12.5 9.03125 12.5 9.375V10.625C12.5 10.9688 12.7812 11.25 13.125 11.25H14.0625V19.375C14.0625 19.7188 14.3438 20 14.6875 20H15.3125C15.6562 20 15.9375 19.7188 15.9375 19.375V11.25H16.875C17.2188 11.25 17.5 10.9688 17.5 10.625V9.375C17.5 9.03125 17.2188 8.75 16.875 8.75Z", fill: "currentColor" }) }), Yf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12H2V2H12V0H2ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V16H6V6H16V4H6ZM18 10V18H10V10H18ZM18 8H10C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V18C8 18.5304 8.21071 19.0391 8.58579 19.4142C8.96086 19.7893 9.46957 20 10 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8ZM17 15H15V17H13V15H11V13H13V11H15V13H17V15Z", fill: "currentColor" }) }), F0 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125ZM13.9766 7.57031L11.5469 10L13.9766 12.4297C14.1602 12.6133 14.1602 12.9102 13.9766 13.0938L13.0938 13.9766C12.9102 14.1602 12.6133 14.1602 12.4297 13.9766L10 11.5469L7.57031 13.9766C7.38672 14.1602 7.08984 14.1602 6.90625 13.9766L6.02344 13.0938C5.83984 12.9102 5.83984 12.6133 6.02344 12.4297L8.45312 10L6.02344 7.57031C5.83984 7.38672 5.83984 7.08984 6.02344 6.90625L6.90625 6.02344C7.08984 5.83984 7.38672 5.83984 7.57031 6.02344L10 8.45312L12.4297 6.02344C12.6133 5.83984 12.9102 5.83984 13.0938 6.02344L13.9766 6.90625C14.1602 7.08984 14.1602 7.38672 13.9766 7.57031Z", fill: "currentColor" }) }), O0 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M23.625 12C23.625 18.4217 18.4199 23.625 12 23.625C5.58014 23.625 0.375 18.4217 0.375 12C0.375 5.58202 5.58014 0.375 12 0.375C18.4199 0.375 23.625 5.58202 23.625 12ZM12 14.3438C10.8091 14.3438 9.84375 15.3091 9.84375 16.5C9.84375 17.6909 10.8091 18.6562 12 18.6562C13.1909 18.6562 14.1562 17.6909 14.1562 16.5C14.1562 15.3091 13.1909 14.3438 12 14.3438ZM9.95283 6.59316L10.3005 12.9682C10.3168 13.2665 10.5635 13.5 10.8622 13.5H13.1378C13.4365 13.5 13.6832 13.2665 13.6995 12.9682L14.0472 6.59316C14.0648 6.27094 13.8082 6 13.4855 6H10.5144C10.1917 6 9.93525 6.27094 9.95283 6.59316Z", fill: "currentColor" }) }), qf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M15 9.375V10.625C15 10.8828 14.7891 11.0938 14.5312 11.0938H11.0938V14.5312C11.0938 14.7891 10.8828 15 10.625 15H9.375C9.11719 15 8.90625 14.7891 8.90625 14.5312V11.0938H5.46875C5.21094 11.0938 5 10.8828 5 10.625V9.375C5 9.11719 5.21094 8.90625 5.46875 8.90625H8.90625V5.46875C8.90625 5.21094 9.11719 5 9.375 5H10.625C10.8828 5 11.0938 5.21094 11.0938 5.46875V8.90625H14.5312C14.7891 8.90625 15 9.11719 15 9.375ZM19.6875 10C19.6875 15.3516 15.3516 19.6875 10 19.6875C4.64844 19.6875 0.3125 15.3516 0.3125 10C0.3125 4.64844 4.64844 0.3125 10 0.3125C15.3516 0.3125 19.6875 4.64844 19.6875 10ZM17.8125 10C17.8125 5.68359 14.3164 2.1875 10 2.1875C5.68359 2.1875 2.1875 5.68359 2.1875 10C2.1875 14.3164 5.68359 17.8125 10 17.8125C14.3164 17.8125 17.8125 14.3164 17.8125 10Z", fill: "currentColor" }) }), Jf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M13.4375 11.2497H4.0625C3.89062 11.2497 3.75 11.3903 3.75 11.5622V12.8122C3.75 12.9841 3.89062 13.1247 4.0625 13.1247H13.4375C13.6094 13.1247 13.75 12.9841 13.75 12.8122V11.5622C13.75 11.3903 13.6094 11.2497 13.4375 11.2497ZM15.6562 0.222348L13.957 1.445L12.4492 0.359067C11.793 -0.113589 10.918 -0.113589 10.2578 0.359067L8.75 1.445L7.24219 0.359067C6.92332 0.128622 6.53991 0.00457929 6.14648 0.00457929C5.75306 0.00457929 5.36965 0.128622 5.05078 0.359067L3.54297 1.445L1.84375 0.222348C1.07031 -0.332339 0 0.218442 0 1.16766V18.8356C0 19.7653 1.05859 20.3434 1.84375 19.7809L3.54297 18.5544L5.05078 19.6403C5.70703 20.113 6.58203 20.113 7.24219 19.6403L8.75 18.5544L10.2578 19.6403C10.9141 20.113 11.793 20.113 12.4492 19.6403L13.957 18.5544L15.6562 19.777C16.4297 20.3317 17.5 19.7809 17.5 18.8356V1.16766C17.5 0.234067 16.4414 -0.340152 15.6562 0.222348ZM15.625 17.4411L13.957 16.2419L11.3516 18.1169L8.74609 16.2419L6.14062 18.1169L3.53516 16.2419L1.875 17.4411V2.55829L3.54297 3.7575L6.14844 1.8825L8.75391 3.7575L11.3594 1.8825L13.9648 3.7575L15.625 2.55829V17.4411ZM13.4375 6.87469H4.0625C3.89062 6.87469 3.75 7.01532 3.75 7.18719V8.43719C3.75 8.60907 3.89062 8.74969 4.0625 8.74969H13.4375C13.6094 8.74969 13.75 8.60907 13.75 8.43719V7.18719C13.75 7.01532 13.6094 6.87469 13.4375 6.87469Z", fill: "currentColor" }) }), Xf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M15.3962 9.60393C17.8468 12.057 17.8131 15.99 15.411 18.4055C15.4065 18.4104 15.4011 18.4157 15.3962 18.4206L12.64 21.1769C10.209 23.6079 6.25388 23.6075 3.82325 21.1769C1.39225 18.7463 1.39225 14.7908 3.82325 12.3602L5.34517 10.8383C5.74877 10.4347 6.44382 10.7029 6.46465 11.2733C6.49123 12.0001 6.62158 12.7304 6.8621 13.4356C6.94355 13.6744 6.88535 13.9386 6.70693 14.117L6.17016 14.6538C5.02066 15.8033 4.98461 17.675 6.12279 18.8357C7.27221 20.0079 9.16147 20.0149 10.3197 18.8566L13.076 16.1008C14.2322 14.9445 14.2274 13.0756 13.076 11.9242C12.9242 11.7727 12.7713 11.655 12.6518 11.5727C12.5673 11.5147 12.4976 11.4377 12.4481 11.348C12.3986 11.2582 12.3708 11.1581 12.3669 11.0557C12.3506 10.6223 12.5042 10.1756 12.8467 9.83317L13.7102 8.96959C13.9367 8.74314 14.2919 8.71533 14.5545 8.89859C14.8552 9.10857 15.1369 9.34459 15.3962 9.60393ZM21.1768 3.82312C18.7461 1.39246 14.791 1.39213 12.36 3.82312L9.60379 6.57937C9.59886 6.58429 9.59353 6.58962 9.58902 6.59454C7.1869 9.01003 7.15322 12.943 9.60379 15.3961C9.86312 15.6554 10.1448 15.8914 10.4455 16.1014C10.7081 16.2846 11.0633 16.2568 11.2897 16.0304L12.1533 15.1668C12.4958 14.8243 12.6493 14.3777 12.6331 13.9443C12.6292 13.8419 12.6013 13.7418 12.5519 13.652C12.5024 13.5622 12.4326 13.4853 12.3481 13.4272C12.2287 13.345 12.0758 13.2273 11.924 13.0758C10.7726 11.9243 10.7677 10.0554 11.924 8.89916L14.6803 6.14333C15.8385 4.98509 17.7277 4.99206 18.8772 6.16425C20.0154 7.32499 19.9793 9.19669 18.8298 10.3462L18.293 10.883C18.1146 11.0614 18.0564 11.3255 18.1379 11.5643C18.3784 12.2695 18.5087 12.9998 18.5353 13.7267C18.5562 14.2971 19.2512 14.5653 19.6548 14.1617L21.1767 12.6398C23.6078 10.2092 23.6078 6.2537 21.1768 3.82312Z", fill: "currentColor" }) }), Qf = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M12 3.25C6.47344 3.25 2 7.7225 2 13.25V15.125C2 15.3571 2.06464 15.5847 2.18668 15.7822C2.30872 15.9796 2.48334 16.1392 2.69098 16.243L3.25281 16.5239C3.33137 18.8712 5.25863 20.75 7.625 20.75H8.5625C9.08027 20.75 9.5 20.3303 9.5 19.8125V12.9375C9.5 12.4197 9.08027 12 8.5625 12H7.625C6.4007 12 5.2941 12.5031 4.5 13.3136V13.25C4.5 9.11449 7.86449 5.75 12 5.75C16.1355 5.75 19.5 9.11449 19.5 13.25V13.3136C18.7059 12.5031 17.5993 12 16.375 12H15.4375C14.9197 12 14.5 12.4197 14.5 12.9375V19.8125C14.5 20.3303 14.9197 20.75 15.4375 20.75H16.375C18.7414 20.75 20.6686 18.8712 20.7472 16.5239L21.309 16.243C21.5166 16.1392 21.6913 15.9796 21.8133 15.7822C21.9354 15.5847 22 15.3571 22 15.125V13.25C22 7.72348 17.5275 3.25 12 3.25Z", fill: "currentColor" }) }), eh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M18.125 2.5H1.875C0.839453 2.5 0 3.33945 0 4.375V15.625C0 16.6605 0.839453 17.5 1.875 17.5H18.125C19.1605 17.5 20 16.6605 20 15.625V4.375C20 3.33945 19.1605 2.5 18.125 2.5ZM18.125 4.375V5.96895C17.2491 6.68219 15.8528 7.79125 12.8677 10.1287C12.2098 10.6462 10.9067 11.8893 10 11.8748C9.09344 11.8895 7.78988 10.646 7.13231 10.1287C4.14766 7.7916 2.75098 6.6823 1.875 5.96895V4.375H18.125ZM1.875 15.625V8.37492C2.77008 9.08785 4.03941 10.0883 5.97414 11.6033C6.82793 12.2754 8.32312 13.759 10 13.75C11.6686 13.759 13.1449 12.2969 14.0255 11.6036C15.9602 10.0886 17.2299 9.08793 18.125 8.37496V15.625H1.875Z", fill: "currentColor" }) }), th = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M18.1318 9.25784L19.3757 8.53979C19.7439 8.32725 19.9224 7.89362 19.8123 7.48299C19.3668 5.82163 18.4904 4.33663 17.31 3.15498C17.01 2.85467 16.5454 2.79381 16.1778 3.00612L14.9362 3.72323C14.5329 3.43459 14.1025 3.18577 13.6511 2.98026V1.54459C13.6511 1.33781 13.5827 1.13683 13.4567 0.972897C13.3307 0.808965 13.154 0.69127 12.9541 0.63811C11.3229 0.204243 9.5902 0.203696 7.95688 0.638071C7.54598 0.747368 7.25985 1.11936 7.25985 1.54456V2.98022C6.80845 3.18573 6.37806 3.43455 5.97473 3.72319L4.73313 3.00608C4.36555 2.79377 3.9009 2.85463 3.6009 3.15495C2.42059 4.33659 1.54411 5.82155 1.09864 7.48295C0.98852 7.89358 1.16704 8.32721 1.53524 8.53975L2.77911 9.25784C2.73145 9.75147 2.73145 10.2485 2.77911 10.7422L1.53524 11.4602C1.16704 11.6728 0.98852 12.1064 1.09864 12.517C1.54411 14.1784 2.42059 15.6634 3.6009 16.845C3.9009 17.1453 4.36555 17.2062 4.73313 16.9939L5.97473 16.2768C6.37806 16.5654 6.80845 16.8142 7.25985 17.0197V18.4554C7.25987 18.6622 7.32822 18.8631 7.45426 19.0271C7.5803 19.191 7.75697 19.3087 7.9568 19.3619C9.58809 19.7957 11.3207 19.7963 12.9541 19.3619C13.365 19.2526 13.6511 18.8806 13.6511 18.4554V17.0197C14.1025 16.8142 14.5329 16.5654 14.9362 16.2768L16.1778 16.9939C16.5454 17.2062 17.01 17.1454 17.31 16.8451C18.4904 15.6634 19.3668 14.1784 19.8123 12.5171C19.9224 12.1064 19.7439 11.6728 19.3757 11.4603L18.1318 10.7422C18.1795 10.2481 18.1795 9.75198 18.1318 9.25784ZM16.0741 11.7195L17.7857 12.7074C17.4778 13.5389 17.0307 14.312 16.4635 14.9936L14.7514 14.005C13.5021 15.0752 13.3195 15.1799 11.7761 15.7249V17.7014C10.902 17.8506 10.0089 17.8506 9.13481 17.7014V15.7249C7.59168 15.1799 7.4084 15.0748 6.1595 14.005L4.44743 14.9936C3.88023 14.312 3.4331 13.5389 3.1252 12.7074L4.83688 11.7195C4.53883 10.1063 4.53868 9.89456 4.83688 8.28053L3.1252 7.29268C3.43184 6.46342 3.8795 5.6892 4.44743 5.00639L6.1595 5.99502C7.40887 4.92483 7.59153 4.8201 9.13481 4.27514V2.29866C10.0089 2.14944 10.902 2.14944 11.7761 2.29866V4.27518C13.3193 4.8201 13.5025 4.92526 14.7514 5.99506L16.4635 5.00643C17.0307 5.68803 17.4778 6.46115 17.7857 7.29272L16.0741 8.28057C16.3722 9.89385 16.3723 10.1055 16.0741 11.7195ZM10.4555 6.25002C8.3877 6.25002 6.70547 7.93225 6.70547 10C6.70547 12.0678 8.3877 13.75 10.4555 13.75C12.5232 13.75 14.2055 12.0678 14.2055 10C14.2055 7.93225 12.5232 6.25002 10.4555 6.25002ZM10.4555 11.875C9.42157 11.875 8.58047 11.0339 8.58047 10C8.58047 8.96616 9.42157 8.12502 10.4555 8.12502C11.4894 8.12502 12.3305 8.96616 12.3305 10C12.3305 11.0339 11.4894 11.875 10.4555 11.875Z", fill: "currentColor" }) }), nh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M21.4508 10.7125L13.1742 2.4359C12.8226 2.08427 12.3456 1.88672 11.8484 1.88672H3.875C2.83945 1.88672 2 2.72617 2 3.76172V11.7351C2 11.9813 2.04849 12.2251 2.14272 12.4526C2.23695 12.6801 2.37507 12.8868 2.54918 13.0609L10.8258 21.3375C11.5581 22.0698 12.7452 22.0698 13.4775 21.3375L21.4508 13.3642C22.1831 12.632 22.1831 11.4448 21.4508 10.7125ZM12.1518 20.0116L3.875 11.7351V3.76172H11.8484L20.125 12.0384L12.1518 20.0116ZM9.5 7.51172C9.5 8.54726 8.66055 9.38672 7.625 9.38672C6.58946 9.38672 5.75 8.54726 5.75 7.51172C5.75 6.47617 6.58946 5.63672 7.625 5.63672C8.66055 5.63672 9.5 6.47617 9.5 7.51172Z", fill: "currentColor" }) }), rh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M20.125 2H3.875C2.83945 2 2 2.83945 2 3.875V20.125C2 21.1605 2.83945 22 3.875 22H20.125C21.1605 22 22 21.1605 22 20.125V3.875C22 2.83945 21.1605 2 20.125 2ZM20.125 20.125H3.875V12.9375H20.125V20.125ZM20.125 11.0625H3.875V3.875H20.125V11.0625ZM8.25 8.875H8.875C9.22031 8.875 9.5 8.59531 9.5 8.25V7.9375H14.5V8.25C14.5 8.59531 14.7797 8.875 15.125 8.875H15.75C16.0953 8.875 16.375 8.59531 16.375 8.25V7.3125C16.375 6.62227 15.8152 6.0625 15.125 6.0625H8.875C8.18477 6.0625 7.625 6.62227 7.625 7.3125V8.25C7.625 8.59531 7.90469 8.875 8.25 8.875ZM8.25 17.9375H8.875C9.22031 17.9375 9.5 17.6578 9.5 17.3125V17H14.5V17.3125C14.5 17.6578 14.7797 17.9375 15.125 17.9375H15.75C16.0953 17.9375 16.375 17.6578 16.375 17.3125V16.375C16.375 15.6848 15.8152 15.125 15.125 15.125H8.875C8.18477 15.125 7.625 15.6848 7.625 16.375V17.3125C7.625 17.6578 7.90469 17.9375 8.25 17.9375Z", fill: "currentColor" }) }), sh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 22 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M9.99994 14.5C9.99994 13.9944 10.0412 14.2272 7.34136 8.82781C7.06541 8.27625 6.53225 8 5.9991 8C5.46657 8 4.93404 8.27563 4.65778 8.82781C1.93513 14.2734 2.00014 14.0103 2.00014 14.5C2.00014 15.8806 3.79054 17 5.99973 17C8.20891 17 9.99994 15.8806 9.99994 14.5ZM4.6009 12.2853C4.95717 11.5775 5.41407 10.67 5.99035 9.50094C5.99129 9.50063 5.99441 9.5 5.99941 9.5L6.00004 9.49875C6.61945 10.7375 7.09478 11.6803 7.45949 12.4038C7.81201 13.1031 8.07515 13.6263 8.25797 14H3.74429C3.93805 13.6038 4.22057 13.0409 4.6009 12.2853ZM18.5004 18.5H12.7501V8.87281C13.607 8.60187 14.2686 7.89281 14.4499 7H18.5004C18.7767 7 19.0004 6.77625 19.0004 6.5V6C19.0004 5.72375 18.7767 5.5 18.5004 5.5H14.2892C13.903 4.61781 13.0248 4 12 4C10.9753 4 10.0971 4.61781 9.71086 5.5H5.4997C5.22343 5.5 4.99967 5.72375 4.99967 6V6.5C4.99967 6.77625 5.22343 7 5.4997 7H9.55023C9.73149 7.89281 10.3931 8.60187 11.25 8.87281V18.5H5.4997C5.22343 18.5 4.99967 18.7238 4.99967 19V19.5C4.99967 19.7762 5.22343 20 5.4997 20H18.5004C18.7767 20 19.0004 19.7762 19.0004 19.5V19C19.0004 18.7238 18.7767 18.5 18.5004 18.5ZM12 7.5C11.4488 7.5 11 7.05125 11 6.5C11 5.94875 11.4488 5.5 12 5.5C12.5513 5.5 13.0001 5.94875 13.0001 6.5C13.0001 7.05125 12.5513 7.5 12 7.5ZM22 14.5C22 13.9944 22.0418 14.2272 19.342 8.82781C19.0661 8.27625 18.5329 8 17.9997 8C17.4672 8 16.9347 8.27563 16.6584 8.82781C13.9358 14.2734 14.0008 14.0103 14.0008 14.5C14.0008 15.8806 15.7912 17 18.0004 17C20.2096 17 22 15.8806 22 14.5ZM15.7449 14C15.9384 13.6038 16.2209 13.0409 16.6012 12.2853C16.9575 11.5775 17.4144 10.67 17.9907 9.50094C17.9916 9.50063 17.9947 9.5 17.9997 9.5L18.0004 9.49875C18.6198 10.7375 19.0951 11.6803 19.4598 12.4038C19.8123 13.1031 20.0755 13.6263 20.2583 14H15.7449Z", fill: "currentColor" }) }), ih = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M11.3672 10.9136L8.55469 10.0513C8.20312 9.94103 7.96094 9.57484 7.96094 9.15747C7.96094 8.64953 8.32031 8.23609 8.76172 8.23609H10.5195C10.793 8.23609 11.0586 8.31091 11.2969 8.44872C11.5469 8.59441 11.8555 8.58259 12.0664 8.38572L12.5352 7.94078C12.832 7.65728 12.7812 7.17691 12.4453 6.94853C11.9062 6.58234 11.2773 6.37759 10.6328 6.35397V5.71609C10.6328 5.36959 10.3516 5.08609 10.0078 5.08609H9.38281C9.03906 5.08609 8.75781 5.36959 8.75781 5.71609V6.34609C7.28906 6.35003 6.09375 7.61003 6.09375 9.15747C6.09375 10.3978 6.88281 11.5082 8.01562 11.8586L10.8281 12.7209C11.1797 12.8312 11.4219 13.1973 11.4219 13.6147C11.4219 14.1227 11.0625 14.5361 10.6211 14.5361H8.86328C8.58984 14.5361 8.32422 14.4613 8.08594 14.3235C7.83594 14.1778 7.52734 14.1896 7.31641 14.3865L6.84766 14.8314C6.55078 15.1149 6.60156 15.5953 6.9375 15.8237C7.47656 16.1898 8.10547 16.3946 8.75 16.4182V17.0561C8.75 17.4026 9.03125 17.6861 9.375 17.6861H10C10.3438 17.6861 10.625 17.4026 10.625 17.0561V16.4261C12.0938 16.4222 13.2891 15.1622 13.2891 13.6147C13.2891 12.3744 12.5 11.264 11.3672 10.9136ZM9.6875 1.62109C4.33594 1.62109 0 5.99172 0 11.3861C0 16.7805 4.33594 21.1511 9.6875 21.1511C15.0391 21.1511 19.375 16.7805 19.375 11.3861C19.375 5.99172 15.0391 1.62109 9.6875 1.62109ZM9.6875 19.2611C5.37891 19.2611 1.875 15.7292 1.875 11.3861C1.875 7.04303 5.37891 3.51109 9.6875 3.51109C13.9961 3.51109 17.5 7.04303 17.5 11.3861C17.5 15.7292 13.9961 19.2611 9.6875 19.2611Z", fill: "currentColor" }) }), oh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M20.0005 9.50011V6.74386C20.0005 4.6144 18.6567 2.88672 17.0003 2.88672H6.99973C5.34338 2.88672 3.99954 4.6144 3.99954 6.74386V9.50011C2.91823 9.93002 2.0963 11.1193 2.0088 12.5698C1.93692 13.7349 2.30882 14.8398 2.99948 15.5671V19.2796C2.99948 20.1675 3.55889 20.8867 4.24956 20.8867H6.99973C7.12473 20.8867 7.94353 20.8506 7.99666 19.601H16.0034C16.0471 20.8385 16.8784 20.8867 17.0003 20.8867H19.7505C20.4412 20.8867 21.0006 20.1675 21.0006 19.2796V15.5671C21.6881 14.8398 22.0631 13.739 21.9913 12.5698C21.9038 11.1193 21.0818 9.93002 20.0005 9.50011ZM6.4997 18.9581H4.49957V14.5104L4.12768 14.2291C3.70578 13.9157 3.46826 13.3331 3.50576 12.7184C3.55264 11.9068 4.1683 11.2439 4.8746 11.2439H5.24962C5.94029 11.2439 6.4997 11.9631 6.4997 12.851V18.9581ZM16.0003 13.8153V17.6724H7.99979V13.8153H16.0003ZM16.1159 11.8867H7.88103C7.57476 10.5086 6.64033 9.48404 5.49964 9.34743V6.74386C5.49964 5.67913 6.17155 4.81529 6.99973 4.81529H17.0003C17.8285 4.81529 18.5004 5.67913 18.5004 6.74386V9.34743C17.3566 9.48404 16.4222 10.5086 16.1159 11.8867ZM19.8724 14.2331L19.5005 14.5144V18.9581H17.5004V12.851C17.5004 11.9631 18.0598 11.2439 18.7504 11.2439H19.1255C19.8318 11.2439 20.4474 11.9068 20.4974 12.7224C20.5318 13.3372 20.2943 13.9157 19.8724 14.2331Z", fill: "currentColor" }) }), lh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M12.6037 18.5H3.92515V17.7C3.92515 16.2125 5.07715 15 6.49042 15C6.9239 15 7.62757 15.5 9.1507 15.5C10.4155 15.5 11.229 15.1281 11.5289 15.05C11.526 14.8156 11.526 14.275 11.71 13.5125C10.8609 13.5562 10.4957 14 9.1507 14C7.75227 14 7.34551 13.5 6.49042 13.5C4.28738 13.5 2.5 15.3813 2.5 17.7V18.5C2.5 19.3281 3.13835 20 3.92515 20H14.0793C13.5033 19.5969 13.0045 19.0875 12.6037 18.5ZM9.1507 13C11.5111 13 13.4262 10.9844 13.4262 8.5C13.4262 6.01562 11.5111 4 9.1507 4C6.7903 4 4.87525 6.01562 4.87525 8.5C4.87525 10.9844 6.7903 13 9.1507 13ZM9.1507 5.5C10.7213 5.5 12.001 6.84687 12.001 8.5C12.001 10.1531 10.7213 11.5 9.1507 11.5C7.58007 11.5 6.3004 10.1531 6.3004 8.5C6.3004 6.84687 7.58007 5.5 9.1507 5.5ZM20.6261 15.6656C20.7033 15.225 20.7033 14.775 20.6261 14.3344L21.3921 13.8687C21.4812 13.8156 21.5198 13.7063 21.4901 13.6031C21.2912 12.9281 20.9498 12.3156 20.5044 11.8094C20.4361 11.7312 20.3263 11.7125 20.2372 11.7656L19.4712 12.2312C19.1475 11.9406 18.7764 11.7156 18.3756 11.5656V10.6344C18.3756 10.5281 18.3043 10.4344 18.2063 10.4125C17.5442 10.2562 16.8703 10.2625 16.2408 10.4125C16.1428 10.4344 16.0716 10.5281 16.0716 10.6344V11.5656C15.6708 11.7156 15.2996 11.9406 14.976 12.2312L14.21 11.7656C14.1239 11.7125 14.0111 11.7312 13.9428 11.8094C13.4974 12.3156 13.156 12.9281 12.957 13.6031C12.9274 13.7063 12.9689 13.8156 13.055 13.8687L13.821 14.3344C13.7438 14.775 13.7438 15.225 13.821 15.6656L13.055 16.1313C12.9659 16.1844 12.9274 16.2938 12.957 16.3969C13.156 17.0719 13.4974 17.6813 13.9428 18.1906C14.0111 18.2688 14.1209 18.2875 14.21 18.2344L14.976 17.7688C15.2996 18.0594 15.6708 18.2844 16.0716 18.4344V19.3656C16.0716 19.4719 16.1428 19.5656 16.2408 19.5875C16.9029 19.7437 17.5769 19.7375 18.2063 19.5875C18.3043 19.5656 18.3756 19.4719 18.3756 19.3656V18.4344C18.7764 18.2844 19.1475 18.0594 19.4712 17.7688L20.2372 18.2344C20.3233 18.2875 20.4361 18.2688 20.5044 18.1906C20.9498 17.6844 21.2912 17.0719 21.4901 16.3969C21.5198 16.2938 21.4783 16.1844 21.3921 16.1313L20.6261 15.6656ZM17.2266 16.5156C16.4308 16.5156 15.7866 15.8344 15.7866 15C15.7866 14.1656 16.4338 13.4844 17.2266 13.4844C18.0193 13.4844 18.6665 14.1656 18.6665 15C18.6665 15.8344 18.0223 16.5156 17.2266 16.5156Z", fill: "currentColor" }) }), ah = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { role: "img", "aria-label": "Donate icon", width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { clipPath: "url(#clip0_5151_4840)", children: /* @__PURE__ */ a.jsx(
    "path",
    {
      d: "M8.8125 9.07422L10.7695 9.63281C10.9102 9.67188 11.0078 9.80469 11.0078 9.94922C11.0078 10.1289 10.8594 10.2773 10.6797 10.2773H9.39844C9.25781 10.2773 9.12109 10.2461 8.99609 10.1914C8.80859 10.1055 8.58984 10.125 8.44531 10.2695L7.76172 10.9531C7.55469 11.1602 7.57812 11.5117 7.82031 11.6719C8.19141 11.918 8.61719 12.0664 9.0625 12.1211V12.8125C9.0625 13.1562 9.34375 13.4375 9.6875 13.4375H10.3125C10.6562 13.4375 10.9375 13.1562 10.9375 12.8125V12.125C12.1211 11.9844 13.0234 10.9141 12.8633 9.66406C12.75 8.76562 12.0547 8.05078 11.1875 7.80078L9.23047 7.24219C9.08984 7.20312 8.99219 7.07031 8.99219 6.92578C8.99219 6.74609 9.14062 6.59766 9.32031 6.59766H10.6016C10.7422 6.59766 10.8789 6.62891 11.0039 6.68359C11.1914 6.76953 11.4102 6.75 11.5547 6.60547L12.2383 5.92188C12.4453 5.71484 12.4219 5.36328 12.1797 5.20312C11.8086 4.95703 11.3828 4.80859 10.9375 4.75391V4.0625C10.9375 3.71875 10.6562 3.4375 10.3125 3.4375H9.6875C9.34375 3.4375 9.0625 3.71875 9.0625 4.0625V4.75C7.87891 4.89062 6.97656 5.96094 7.13672 7.21094C7.25 8.10938 7.94141 8.82422 8.8125 9.07422ZM18.75 12.5H17.3945C18.0586 11.293 18.4375 9.91016 18.4375 8.4375C18.4375 3.77734 14.6602 0 10 0C5.33984 0 1.5625 3.77734 1.5625 8.4375C1.5625 9.91016 1.94141 11.293 2.60547 12.5H1.25C0.558594 12.5 0 13.1719 0 14V18.5C0 19.3281 0.558594 20 1.25 20H18.75C19.4414 20 20 19.3281 20 18.5V14C20 13.1719 19.4414 12.5 18.75 12.5ZM10 1.875C13.6172 1.875 16.5625 4.82031 16.5625 8.4375C16.5625 12.0547 13.6172 15 10 15C6.38281 15 3.4375 12.0547 3.4375 8.4375C3.4375 4.82031 6.38281 1.875 10 1.875ZM18.125 18.125H1.875V14.375H4.00781C4.48438 14.8555 5.01953 15.2695 5.59766 15.625H4.0625C3.89062 15.625 3.75 15.7656 3.75 15.9375V16.5625C3.75 16.7344 3.89062 16.875 4.0625 16.875H15.9375C16.1094 16.875 16.25 16.7344 16.25 16.5625V15.9375C16.25 15.7656 16.1094 15.625 15.9375 15.625H14.4023C14.9805 15.2695 15.5156 14.8555 15.9922 14.375H18.125V18.125Z",
      fill: "currentColor"
    }
  ) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_5151_4840", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), ch = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", role: "img", "aria-label": "Clock icon", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { clipPath: "url(#clip0_5151_4833)", children: /* @__PURE__ */ a.jsx(
    "path",
    {
      d: "M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125ZM12.4141 13.7344L9.09766 11.3242C8.97656 11.2344 8.90625 11.0938 8.90625 10.9453V4.53125C8.90625 4.27344 9.11719 4.0625 9.375 4.0625H10.625C10.8828 4.0625 11.0938 4.27344 11.0938 4.53125V10.0664L13.7031 11.9648C13.9141 12.1172 13.957 12.4102 13.8047 12.6211L13.0703 13.6328C12.918 13.8398 12.625 13.8867 12.4141 13.7344Z",
      fill: "currentColor"
    }
  ) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_5151_4833", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), uh = ({ className: e }) => /* @__PURE__ */ a.jsxs(
  "svg",
  {
    role: "img",
    "aria-label": "cart-icon",
    width: "24",
    height: "24",
    viewBox: "0 0 20 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: [
      /* @__PURE__ */ a.jsx("g", { clipPath: "url(#clip0_5151_4943)", children: /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M19.1663 2.22222H5.00972L4.7066 0.673264C4.63021 0.282292 4.28715 0 3.88889 0H0.416667C0.186458 0 0 0.186458 0 0.416667V1.25C0 1.48021 0.186458 1.66667 0.416667 1.66667H3.20278L5.6191 14.0174C5.23576 14.4167 5 14.9583 5 15.5556C5 16.783 5.99479 17.7778 7.22222 17.7778C8.44965 17.7778 9.44444 16.783 9.44444 15.5556C9.44479 15.1653 9.34201 14.7819 9.14653 14.4444H14.1872C13.9917 14.7819 13.8885 15.1653 13.8892 15.5556C13.8892 16.783 14.884 17.7778 16.1115 17.7778C17.3389 17.7778 18.3337 16.783 18.3337 15.5556C18.3337 14.9257 18.0712 14.3576 17.6503 13.9535L17.6865 13.7882C17.7993 13.2687 17.4038 12.7778 16.8722 12.7778H7.075L6.74896 11.1111H17.5962C17.9882 11.1111 18.3271 10.8378 18.4104 10.4549L19.9806 3.23264C20.0934 2.71319 19.6979 2.22222 19.1663 2.22222ZM7.22222 16.3889C6.76285 16.3889 6.38889 16.0149 6.38889 15.5556C6.38889 15.0962 6.76285 14.7222 7.22222 14.7222C7.6816 14.7222 8.05556 15.0962 8.05556 15.5556C8.05556 16.0149 7.6816 16.3889 7.22222 16.3889ZM16.1111 16.3889C15.6517 16.3889 15.2778 16.0149 15.2778 15.5556C15.2778 15.0962 15.6517 14.7222 16.1111 14.7222C16.5705 14.7222 16.9444 15.0962 16.9444 15.5556C16.9444 16.0149 16.5705 16.3889 16.1111 16.3889ZM16.925 9.44444H6.42292L5.33576 3.88889H18.1326L16.925 9.44444Z",
          fill: "currentColor"
        }
      ) }),
      /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_5151_4943", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "17.7778", fill: "white" }) }) })
    ]
  }
), dh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { clipPath: "url(#clip0_5243_26543)", children: /* @__PURE__ */ a.jsx("path", { d: "M12 6.0625C9.92969 6.0625 8.25 7.74219 8.25 9.8125C8.25 11.8828 9.92969 13.5625 12 13.5625C14.0703 13.5625 15.75 11.8828 15.75 9.8125C15.75 7.74219 14.0703 6.0625 12 6.0625ZM12 11.6875C10.9648 11.6875 10.125 10.8477 10.125 9.8125C10.125 8.77734 10.9648 7.9375 12 7.9375C13.0352 7.9375 13.875 8.77734 13.875 9.8125C13.875 10.8477 13.0352 11.6875 12 11.6875ZM12 2.3125C6.64844 2.3125 2.3125 6.64844 2.3125 12C2.3125 17.3516 6.64844 21.6875 12 21.6875C17.3516 21.6875 21.6875 17.3516 21.6875 12C21.6875 6.64844 17.3516 2.3125 12 2.3125ZM12 19.8125C10.0586 19.8125 8.28516 19.0977 6.91797 17.9219C7.5 17.0234 8.49609 16.4141 9.63672 16.3789C10.4492 16.6289 11.2227 16.7539 12 16.7539C12.7773 16.7539 13.5508 16.6328 14.3633 16.3789C15.5039 16.418 16.5 17.0234 17.082 17.9219C15.7148 19.0977 13.9414 19.8125 12 19.8125ZM18.3555 16.5273C17.4023 15.3008 15.9297 14.5 14.25 14.5C13.8516 14.5 13.2344 14.875 12 14.875C10.7695 14.875 10.1484 14.5 9.75 14.5C8.07422 14.5 6.60156 15.3008 5.64453 16.5273C4.73047 15.25 4.1875 13.6875 4.1875 12C4.1875 7.69141 7.69141 4.1875 12 4.1875C16.3086 4.1875 19.8125 7.69141 19.8125 12C19.8125 13.6875 19.2695 15.25 18.3555 16.5273Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_5243_26543", children: /* @__PURE__ */ a.jsx("rect", { width: "19.375", height: "20", fill: "white", transform: "translate(2.3125 2)" }) }) })
] }), fh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_515_1820)", children: /* @__PURE__ */ a.jsx("path", { d: "M19.5352 15.6164L19.9512 16.456C20.0659 16.6876 19.9716 16.9684 19.7403 17.0836L17.2685 18.34C16.7945 18.575 16.2145 18.3713 15.9962 17.8821L13.4543 12.1875H7.18762C6.7177 12.1875 6.32031 11.8395 6.25824 11.3737C4.91172 1.27504 5.01027 2.04856 5 1.875C5 0.814377 5.88062 -0.040545 6.95059 0.0014862C7.91883 0.0395331 8.70758 0.825978 8.74828 1.79414C8.78969 2.77883 8.07113 3.60375 7.1309 3.73219L7.50828 6.5625H13.2812C13.5401 6.5625 13.75 6.77238 13.75 7.03125V7.96875C13.75 8.22762 13.5401 8.4375 13.2812 8.4375H7.75832L8.00832 10.3125H14.0625C14.2436 10.3125 14.4208 10.3649 14.5727 10.4635C14.7247 10.5621 14.8448 10.7025 14.9186 10.8679L17.3105 16.2267L18.9056 15.4052C19.1377 15.2892 19.42 15.3839 19.5352 15.6164ZM12.2379 14.0625H11.7864C11.3464 16.3729 9.3116 18.125 6.875 18.125C4.11801 18.125 1.875 15.882 1.875 13.125C1.875 11.4154 2.73762 9.90379 4.05023 9.00172L3.78133 6.9866C1.54016 8.1207 0 10.4462 0 13.125C0 16.9159 3.0841 20 6.875 20C9.63301 20 12.0164 18.3673 13.1108 16.0179L12.2379 14.0625Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_515_1820", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), hh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_3342)", children: /* @__PURE__ */ a.jsx("path", { d: "M8.98045 18.5112L9.75385 17.7378C9.93689 17.5548 9.93689 17.258 9.75385 17.0749L3.69408 11.0152H17.0312C17.2901 11.0152 17.5 10.8053 17.5 10.5464V9.45268C17.5 9.19381 17.2901 8.98393 17.0312 8.98393H3.69408L9.75385 2.92416C9.93689 2.74111 9.93689 2.44432 9.75385 2.26123L8.98045 1.48787C8.7974 1.30482 8.50061 1.30482 8.31752 1.48787L0.137285 9.66811C-0.0457617 9.85115 -0.0457617 10.1479 0.137285 10.331L8.31752 18.5113C8.50057 18.6943 8.79736 18.6943 8.98045 18.5112Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_3342", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), gh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_3667)", children: /* @__PURE__ */ a.jsx("path", { d: "M8.51957 1.4879L7.74617 2.2613C7.56313 2.44435 7.56313 2.74114 7.74617 2.92423L13.8059 8.98395H0.46875C0.209883 8.98395 0 9.19384 0 9.4527V10.5465C0 10.8053 0.209883 11.0152 0.46875 11.0152H13.8059L7.74617 17.075C7.56313 17.258 7.56313 17.5548 7.74617 17.7379L8.51957 18.5113C8.70262 18.6943 8.99941 18.6943 9.1825 18.5113L17.3627 10.3311C17.5458 10.148 17.5458 9.85122 17.3627 9.66813L9.18246 1.4879C8.99941 1.30481 8.70262 1.30481 8.51957 1.4879Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_3667", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), ph = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_3891)", children: /* @__PURE__ */ a.jsx("path", { d: "M0.238267 10.2304L1.01166 11.0038C1.19471 11.1869 1.49151 11.1869 1.67459 11.0038L7.73432 4.94404V18.2812C7.73432 18.5401 7.9442 18.75 8.20307 18.75H9.29682C9.55569 18.75 9.76557 18.5401 9.76557 18.2812V4.94404L15.8253 11.0038C16.0084 11.1869 16.3052 11.1869 16.4883 11.0038L17.2617 10.2304C17.4447 10.0474 17.4447 9.75057 17.2617 9.56748L9.08139 1.38729C8.89834 1.20424 8.60155 1.20424 8.41846 1.38729L0.238267 9.56752C0.0551807 9.75057 0.0551807 10.0474 0.238267 10.2304Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_3891", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), mh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_3893)", children: /* @__PURE__ */ a.jsx("path", { d: "M17.2617 9.76953L16.4883 8.99609C16.3047 8.8125 16.0078 8.8125 15.8242 8.99609L9.76562 15.0547V1.71875C9.76562 1.46094 9.55469 1.25 9.29688 1.25H8.20312C7.94531 1.25 7.73438 1.46094 7.73438 1.71875V15.0547L1.67578 8.99609C1.49219 8.8125 1.19531 8.8125 1.01172 8.99609L0.238281 9.76953C0.0546875 9.95312 0.0546875 10.25 0.238281 10.4336L8.41797 18.6133C8.60156 18.7969 8.89844 18.7969 9.08203 18.6133L17.2617 10.4336C17.4453 10.25 17.4453 9.95312 17.2617 9.76953Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_3893", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), xh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 15 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_4704)", children: /* @__PURE__ */ a.jsx("path", { d: "M14.375 8.75H8.75V3.125C8.75 2.77969 8.47031 2.5 8.125 2.5H6.875C6.52969 2.5 6.25 2.77969 6.25 3.125V8.75H0.625C0.279687 8.75 0 9.02969 0 9.375V10.625C0 10.9703 0.279687 11.25 0.625 11.25H6.25V16.875C6.25 17.2203 6.52969 17.5 6.875 17.5H8.125C8.47031 17.5 8.75 17.2203 8.75 16.875V11.25H14.375C14.7203 11.25 15 10.9703 15 10.625V9.375C15 9.02969 14.7203 8.75 14.375 8.75Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_4704", children: /* @__PURE__ */ a.jsx("rect", { width: "15", height: "20", fill: "white" }) }) })
] }), Ch = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 15 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_4874)", children: /* @__PURE__ */ a.jsx("path", { d: "M14.375 8.75H0.625C0.279687 8.75 0 9.02969 0 9.375V10.625C0 10.9703 0.279687 11.25 0.625 11.25H14.375C14.7203 11.25 15 10.9703 15 10.625V9.375C15 9.02969 14.7203 8.75 14.375 8.75Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_4874", children: /* @__PURE__ */ a.jsx("rect", { width: "15", height: "20", fill: "white" }) }) })
] }), yh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5002)", children: /* @__PURE__ */ a.jsx("path", { d: "M5.46875 11.0938C5.21094 11.0938 5 10.8828 5 10.625V9.375C5 9.11719 5.21094 8.90625 5.46875 8.90625H14.5312C14.7891 8.90625 15 9.11719 15 9.375V10.625C15 10.8828 14.7891 11.0938 14.5312 11.0938H5.46875ZM19.6875 10C19.6875 15.3516 15.3516 19.6875 10 19.6875C4.64844 19.6875 0.3125 15.3516 0.3125 10C0.3125 4.64844 4.64844 0.3125 10 0.3125C15.3516 0.3125 19.6875 4.64844 19.6875 10ZM17.8125 10C17.8125 5.68359 14.3164 2.1875 10 2.1875C5.68359 2.1875 2.1875 5.68359 2.1875 10C2.1875 14.3164 5.68359 17.8125 10 17.8125C14.3164 17.8125 17.8125 14.3164 17.8125 10Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5002", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), _h = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5006)", children: /* @__PURE__ */ a.jsx("path", { d: "M14.5195 9.29688L7.64453 5.11719C7.02734 4.77344 6.25 5.21484 6.25 5.9375V14.0625C6.25 14.7812 7.02344 15.2266 7.64453 14.8828L14.5195 10.9375C15.1602 10.582 15.1602 9.65625 14.5195 9.29688ZM19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10ZM2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5006", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), bh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5008)", children: /* @__PURE__ */ a.jsx("path", { d: "M17.9063 2.5116C15.6484 0.613161 12.1602 0.898317 10 3.09754C7.83985 0.898317 4.35157 0.609254 2.09375 2.5116C-0.843745 4.98425 -0.414058 9.0155 1.67969 11.1522L8.53125 18.1327C8.92188 18.5311 9.44532 18.7538 10 18.7538C10.5586 18.7538 11.0781 18.535 11.4688 18.1366L18.3203 11.1561C20.4102 9.01941 20.8477 4.98816 17.9063 2.5116ZM16.9844 9.83582L10.1328 16.8163C10.0391 16.91 9.96094 16.91 9.86719 16.8163L3.01563 9.83582C1.58985 8.38269 1.30079 5.63269 3.30079 3.9491C4.82032 2.67175 7.16407 2.86316 8.63282 4.35925L10 5.75379L11.3672 4.35925C12.8438 2.85535 15.1875 2.67175 16.6992 3.94519C18.6953 5.62879 18.3984 8.39441 16.9844 9.83582Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5008", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), vh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5012)", children: /* @__PURE__ */ a.jsx("path", { d: "M18.0586 2.44563C15.918 0.621414 12.7344 0.949539 10.7695 2.97688L9.99999 3.76985L9.23046 2.97688C7.26952 0.949539 4.08202 0.621414 1.9414 2.44563C-0.511728 4.53938 -0.640634 8.2972 1.55468 10.5667L9.11327 18.3714C9.60155 18.8753 10.3945 18.8753 10.8828 18.3714L18.4414 10.5667C20.6406 8.2972 20.5117 4.53938 18.0586 2.44563Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5012", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), wh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 15 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5016)", children: /* @__PURE__ */ a.jsx("path", { d: "M7.5 0C3.35559 0 0 3.35992 0 7.5C0 10.278 0.937148 11.1461 5.90902 19.1181C6.64281 20.2946 8.35801 20.2932 9.09094 19.1181C14.0654 11.142 15 10.2775 15 7.5C15 3.35559 11.6401 0 7.5 0ZM7.5 18.125C2.5225 10.144 1.875 9.64016 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5C13.125 9.63098 12.5326 10.0557 7.5 18.125ZM4.375 7.5C4.375 5.7741 5.7741 4.375 7.5 4.375C9.2259 4.375 10.625 5.7741 10.625 7.5C10.625 9.2259 9.2259 10.625 7.5 10.625C5.7741 10.625 4.375 9.2259 4.375 7.5Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5016", children: /* @__PURE__ */ a.jsx("rect", { width: "15", height: "20", fill: "white" }) }) })
] }), Sh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 23 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5018)", children: /* @__PURE__ */ a.jsx("path", { d: "M20.6289 6.69874L14.9219 5.86671L12.3711 0.694831C11.9141 -0.227044 10.5899 -0.238763 10.1289 0.694831L7.57814 5.86671L1.87111 6.69874C0.847675 6.84718 0.437519 8.10889 1.17971 8.83155L5.30861 12.855L4.33205 18.5386C4.15627 19.5659 5.2383 20.3355 6.14455 19.855L11.25 17.1714L16.3555 19.855C17.2617 20.3315 18.3438 19.5659 18.168 18.5386L17.1914 12.855L21.3203 8.83155C22.0625 8.10889 21.6524 6.84718 20.6289 6.69874ZM15.1797 12.1987L16.1055 17.605L11.25 15.0542L6.39455 17.605L7.32033 12.1987L3.39064 8.37061L8.82033 7.58155L11.25 2.65967L13.6797 7.58155L19.1094 8.37061L15.1797 12.1987Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5018", children: /* @__PURE__ */ a.jsx("rect", { width: "22.5", height: "20", fill: "white" }) }) })
] }), kh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 23 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5020)", children: /* @__PURE__ */ a.jsx("path", { d: "M10.1289 0.694831L7.57814 5.86671L1.87111 6.69874C0.847675 6.84718 0.437519 8.10889 1.17971 8.83155L5.30861 12.855L4.33205 18.5386C4.15627 19.5659 5.2383 20.3355 6.14455 19.855L11.25 17.1714L16.3555 19.855C17.2617 20.3315 18.3438 19.5659 18.168 18.5386L17.1914 12.855L21.3203 8.83155C22.0625 8.10889 21.6524 6.84718 20.6289 6.69874L14.9219 5.86671L12.3711 0.694831C11.9141 -0.227044 10.5899 -0.238763 10.1289 0.694831Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5020", children: /* @__PURE__ */ a.jsx("rect", { width: "22.5", height: "20", fill: "white" }) }) })
] }), Eh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5065)", children: /* @__PURE__ */ a.jsx("path", { d: "M9.99998 5.00043C9.63197 5.00619 9.26668 5.06465 8.91526 5.17405C9.07782 5.45992 9.16437 5.78269 9.16665 6.11155C9.16665 6.36689 9.11635 6.61974 9.01864 6.85565C8.92092 7.09156 8.77769 7.30592 8.59713 7.48647C8.41657 7.66703 8.20222 7.81026 7.96631 7.90798C7.7304 8.0057 7.47755 8.05599 7.2222 8.05599C6.89335 8.05371 6.57058 7.96716 6.2847 7.8046C6.05916 8.58682 6.08545 9.42018 6.35984 10.1866C6.63424 10.9531 7.14283 11.6138 7.81358 12.0751C8.48433 12.5364 9.28323 12.775 10.0971 12.7571C10.911 12.7392 11.6986 12.4656 12.3484 11.9752C12.9982 11.4848 13.4772 10.8023 13.7176 10.0245C13.9579 9.24673 13.9475 8.41303 13.6877 7.6415C13.4279 6.86997 12.932 6.19974 12.2701 5.72573C11.6083 5.25172 10.8141 4.99798 9.99998 5.00043ZM19.8791 8.38238C17.9962 4.70842 14.2684 2.22266 9.99998 2.22266C5.73158 2.22266 2.00276 4.71016 0.120814 8.38273C0.0413845 8.53985 0 8.71344 0 8.8895C0 9.06555 0.0413845 9.23915 0.120814 9.39627C2.0038 13.0702 5.73158 15.556 9.99998 15.556C14.2684 15.556 17.9972 13.0685 19.8791 9.39592C19.9586 9.2388 20 9.06521 20 8.88915C20 8.71309 19.9586 8.5395 19.8791 8.38238ZM9.99998 13.8893C6.57463 13.8893 3.43436 11.9796 1.73852 8.88932C3.43436 5.79905 6.57429 3.88932 9.99998 3.88932C13.4257 3.88932 16.5656 5.79905 18.2614 8.88932C16.566 11.9796 13.4257 13.8893 9.99998 13.8893Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5065", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "17.7778", fill: "white" }) }) })
] }), Nh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5073)", children: /* @__PURE__ */ a.jsx("path", { d: "M19.8124 14.7188L1.12494 0.109688C1.07368 0.0686496 1.01484 0.038109 0.951785 0.0198098C0.888726 0.00151062 0.82268 -0.00418892 0.757417 0.00303664C0.692155 0.0102622 0.628955 0.0302714 0.571426 0.0619217C0.513897 0.093572 0.463165 0.136244 0.422127 0.1875L0.109627 0.577813C0.0684923 0.629087 0.0378722 0.687969 0.0195185 0.75109C0.00116477 0.81421 -0.00456226 0.880331 0.00266509 0.945667C0.00989243 1.011 0.0299323 1.07427 0.061638 1.13186C0.0933436 1.18944 0.136093 1.24021 0.187439 1.28125L18.8749 15.8903C18.9262 15.9314 18.985 15.9619 19.0481 15.9802C19.1112 15.9985 19.1772 16.0042 19.2425 15.997C19.3077 15.9897 19.3709 15.9697 19.4285 15.9381C19.486 15.9064 19.5367 15.8638 19.5778 15.8125L19.8903 15.4222C19.9314 15.3709 19.962 15.312 19.9804 15.2489C19.9987 15.1858 20.0044 15.1197 19.9972 15.0543C19.99 14.989 19.9699 14.9257 19.9382 14.8681C19.9065 14.8106 19.8638 14.7598 19.8124 14.7188ZM9.27463 4.57719L13.4868 7.87031C13.4174 5.99719 11.8899 4.5 9.99994 4.5C9.75614 4.50046 9.51306 4.52633 9.27463 4.57719ZM10.7253 11.4231L6.51306 8.13C6.58275 10.0028 8.11025 11.5 9.99994 11.5C10.2437 11.4995 10.4868 11.4737 10.7253 11.4231ZM9.99994 3.5C13.0828 3.5 15.909 5.21875 17.4353 8C17.0611 8.68449 16.5988 9.31697 16.0603 9.88125L17.2396 10.8031C17.8962 10.1007 18.4526 9.31081 18.8928 8.45594C18.9642 8.31453 19.0015 8.1583 19.0015 7.99984C19.0015 7.84139 18.9642 7.68516 18.8928 7.54375C17.1965 4.23719 13.8415 2 9.99994 2C8.85306 2 7.759 2.21875 6.73025 2.58781L8.18056 3.72188C8.77244 3.5875 9.37869 3.5 9.99994 3.5ZM9.99994 12.5C6.91713 12.5 4.09119 10.7812 2.56463 8C2.93925 7.31552 3.40205 6.68314 3.94119 6.11906L2.76181 5.19719C2.1053 5.89952 1.54909 6.6893 1.109 7.54406C1.03751 7.68547 1.00027 7.8417 1.00027 8.00016C1.00027 8.15861 1.03751 8.31484 1.109 8.45625C2.80369 11.7628 6.15869 14 9.99994 14C11.1468 14 12.2409 13.7797 13.2696 13.4122L11.8193 12.2784C11.2274 12.4125 10.6215 12.5 9.99994 12.5Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5073", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "16", fill: "white" }) }) })
] }), Th = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5077)", children: /* @__PURE__ */ a.jsx("path", { d: "M17.5 0H2.5C1.12109 0 0 1.12109 0 2.5V13.75C0 15.1289 1.12109 16.25 2.5 16.25H6.25V19.5312C6.25 19.8086 6.47656 20 6.71875 20C6.8125 20 6.91016 19.9727 6.99609 19.9062L11.875 16.25H17.5C18.8789 16.25 20 15.1289 20 13.75V2.5C20 1.12109 18.8789 0 17.5 0ZM18.125 13.75C18.125 14.0938 17.8438 14.375 17.5 14.375H11.25L10.75 14.75L8.125 16.7188V14.375H2.5C2.15625 14.375 1.875 14.0938 1.875 13.75V2.5C1.875 2.15625 2.15625 1.875 2.5 1.875H17.5C17.8438 1.875 18.125 2.15625 18.125 2.5V13.75ZM5 6.875C4.30859 6.875 3.75 7.43359 3.75 8.125C3.75 8.81641 4.30859 9.375 5 9.375C5.69141 9.375 6.25 8.81641 6.25 8.125C6.25 7.43359 5.69141 6.875 5 6.875ZM10 6.875C9.30859 6.875 8.75 7.43359 8.75 8.125C8.75 8.81641 9.30859 9.375 10 9.375C10.6914 9.375 11.25 8.81641 11.25 8.125C11.25 7.43359 10.6914 6.875 10 6.875ZM15 6.875C14.3086 6.875 13.75 7.43359 13.75 8.125C13.75 8.81641 14.3086 9.375 15 9.375C15.6914 9.375 16.25 8.81641 16.25 8.125C16.25 7.43359 15.6914 6.875 15 6.875Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5077", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Lh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_891_5320)", children: /* @__PURE__ */ a.jsx("path", { d: "M17.5 0H2.5C1.12109 0 0 1.12109 0 2.5V13.75C0 15.1289 1.12109 16.25 2.5 16.25H6.25V19.5312C6.25 19.8086 6.47656 20 6.71875 20C6.8125 20 6.91016 19.9727 6.99609 19.9062L11.875 16.25H17.5C18.8789 16.25 20 15.1289 20 13.75V2.5C20 1.12109 18.8789 0 17.5 0ZM18.125 13.75C18.125 14.0938 17.8438 14.375 17.5 14.375H11.25L10.75 14.75L8.125 16.7188V14.375H2.5C2.15625 14.375 1.875 14.0938 1.875 13.75V2.5C1.875 2.15625 2.15625 1.875 2.5 1.875H17.5C17.8438 1.875 18.125 2.15625 18.125 2.5V13.75ZM14.375 5.3125H5.625C5.28125 5.3125 5 5.59375 5 5.9375V6.5625C5 6.90625 5.28125 7.1875 5.625 7.1875H14.375C14.7188 7.1875 15 6.90625 15 6.5625V5.9375C15 5.59375 14.7188 5.3125 14.375 5.3125ZM10.625 9.0625H5.625C5.28125 9.0625 5 9.34375 5 9.6875V10.3125C5 10.6562 5.28125 10.9375 5.625 10.9375H10.625C10.9688 10.9375 11.25 10.6562 11.25 10.3125V9.6875C11.25 9.34375 10.9688 9.0625 10.625 9.0625Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_891_5320", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), jh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5231)", children: /* @__PURE__ */ a.jsx("path", { d: "M19.0625 3.75H15.3125C14.7949 3.75 14.375 4.16953 14.375 4.6875V8.4375C14.375 8.95508 14.7949 9.375 15.3125 9.375H19.0625C19.5801 9.375 20 8.95508 20 8.4375V4.6875C20 4.16953 19.5801 3.75 19.0625 3.75ZM18.125 7.5H16.25V5.625H18.125V7.5ZM19.0625 10.625H15.3125C14.7949 10.625 14.375 11.0445 14.375 11.5625V15.3125C14.375 15.8301 14.7949 16.25 15.3125 16.25H19.0625C19.5801 16.25 20 15.8301 20 15.3125V11.5625C20 11.0445 19.5801 10.625 19.0625 10.625ZM18.125 14.375H16.25V12.5H18.125V14.375ZM4.6875 3.75H0.9375C0.419922 3.75 0 4.16953 0 4.6875V8.4375C0 8.95508 0.419922 9.375 0.9375 9.375H4.6875C5.20508 9.375 5.625 8.95508 5.625 8.4375V4.6875C5.625 4.16953 5.20508 3.75 4.6875 3.75ZM3.75 7.5H1.875V5.625H3.75V7.5ZM4.6875 10.625H0.9375C0.419922 10.625 0 11.0445 0 11.5625V15.3125C0 15.8301 0.419922 16.25 0.9375 16.25H4.6875C5.20508 16.25 5.625 15.8301 5.625 15.3125V11.5625C5.625 11.0445 5.20508 10.625 4.6875 10.625ZM3.75 14.375H1.875V12.5H3.75V14.375ZM11.875 3.75H8.125C7.60742 3.75 7.1875 4.16953 7.1875 4.6875V8.4375C7.1875 8.95508 7.60742 9.375 8.125 9.375H11.875C12.3926 9.375 12.8125 8.95508 12.8125 8.4375V4.6875C12.8125 4.16953 12.3926 3.75 11.875 3.75ZM10.9375 7.5H9.0625V5.625H10.9375V7.5ZM11.875 10.625H8.125C7.60742 10.625 7.1875 11.0445 7.1875 11.5625V15.3125C7.1875 15.8301 7.60742 16.25 8.125 16.25H11.875C12.3926 16.25 12.8125 15.8301 12.8125 15.3125V11.5625C12.8125 11.0445 12.3926 10.625 11.875 10.625ZM10.9375 14.375H9.0625V12.5H10.9375V14.375Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5231", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Ah = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M1.875 14.375C1.50416 14.375 1.14165 14.485 0.833307 14.691C0.524964 14.897 0.284641 15.1899 0.142727 15.5325C0.000812411 15.8751 -0.0363188 16.2521 0.0360284 16.6158C0.108376 16.9795 0.286952 17.3136 0.549176 17.5758C0.811399 17.838 1.14549 18.0166 1.50921 18.089C1.87292 18.1613 2.24992 18.1242 2.59253 17.9823C2.93514 17.8404 3.22798 17.6 3.43401 17.2917C3.64003 16.9834 3.75 16.6208 3.75 16.25C3.75 15.7527 3.55246 15.2758 3.20083 14.9242C2.8492 14.5725 2.37228 14.375 1.875 14.375ZM1.875 8.125C1.50416 8.125 1.14165 8.23497 0.833307 8.44099C0.524964 8.64702 0.284641 8.93986 0.142727 9.28247C0.000812411 9.62508 -0.0363188 10.0021 0.0360284 10.3658C0.108376 10.7295 0.286952 11.0636 0.549176 11.3258C0.811399 11.588 1.14549 11.7666 1.50921 11.839C1.87292 11.9113 2.24992 11.8742 2.59253 11.7323C2.93514 11.5904 3.22798 11.35 3.43401 11.0417C3.64003 10.7334 3.75 10.3708 3.75 10C3.75 9.50272 3.55246 9.02581 3.20083 8.67417C2.8492 8.32254 2.37228 8.125 1.875 8.125ZM1.875 1.875C1.50416 1.875 1.14165 1.98497 0.833307 2.19099C0.524964 2.39702 0.284641 2.68986 0.142727 3.03247C0.000812411 3.37508 -0.0363188 3.75208 0.0360284 4.11579C0.108376 4.47951 0.286952 4.8136 0.549176 5.07583C0.811399 5.33805 1.14549 5.51663 1.50921 5.58897C1.87292 5.66132 2.24992 5.62419 2.59253 5.48227C2.93514 5.34036 3.22798 5.10004 3.43401 4.79169C3.64003 4.48335 3.75 4.12084 3.75 3.75C3.75 3.25272 3.55246 2.77581 3.20083 2.42417C2.8492 2.07254 2.37228 1.875 1.875 1.875ZM19.375 2.8125H6.875C6.70924 2.8125 6.55027 2.87835 6.43306 2.99556C6.31585 3.11277 6.25 3.27174 6.25 3.4375V4.0625C6.25 4.22826 6.31585 4.38723 6.43306 4.50444C6.55027 4.62165 6.70924 4.6875 6.875 4.6875H19.375C19.5408 4.6875 19.6997 4.62165 19.8169 4.50444C19.9342 4.38723 20 4.22826 20 4.0625V3.4375C20 3.27174 19.9342 3.11277 19.8169 2.99556C19.6997 2.87835 19.5408 2.8125 19.375 2.8125ZM19.375 9.0625H6.875C6.70924 9.0625 6.55027 9.12835 6.43306 9.24556C6.31585 9.36277 6.25 9.52174 6.25 9.6875V10.3125C6.25 10.4783 6.31585 10.6372 6.43306 10.7544C6.55027 10.8717 6.70924 10.9375 6.875 10.9375H19.375C19.5408 10.9375 19.6997 10.8717 19.8169 10.7544C19.9342 10.6372 20 10.4783 20 10.3125V9.6875C20 9.52174 19.9342 9.36277 19.8169 9.24556C19.6997 9.12835 19.5408 9.0625 19.375 9.0625ZM19.375 15.3125H6.875C6.70924 15.3125 6.55027 15.3783 6.43306 15.4956C6.31585 15.6128 6.25 15.7717 6.25 15.9375V16.5625C6.25 16.7283 6.31585 16.8872 6.43306 17.0044C6.55027 17.1217 6.70924 17.1875 6.875 17.1875H19.375C19.5408 17.1875 19.6997 17.1217 19.8169 17.0044C19.9342 16.8872 20 16.7283 20 16.5625V15.9375C20 15.7717 19.9342 15.6128 19.8169 15.4956C19.6997 15.3783 19.5408 15.3125 19.375 15.3125Z", fill: "currentColor" }) }), Mh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5099)", children: /* @__PURE__ */ a.jsx("path", { d: "M17.0312 4.84375H0.46875C0.209883 4.84375 0 4.63387 0 4.375V3.125C0 2.86613 0.209883 2.65625 0.46875 2.65625H17.0312C17.2901 2.65625 17.5 2.86613 17.5 3.125V4.375C17.5 4.63387 17.2901 4.84375 17.0312 4.84375ZM17.0312 11.0938H0.46875C0.209883 11.0938 0 10.8839 0 10.625V9.375C0 9.11613 0.209883 8.90625 0.46875 8.90625H17.0312C17.2901 8.90625 17.5 9.11613 17.5 9.375V10.625C17.5 10.8839 17.2901 11.0938 17.0312 11.0938ZM17.0312 17.3438H0.46875C0.209883 17.3438 0 17.1339 0 16.875V15.625C0 15.3661 0.209883 15.1562 0.46875 15.1562H17.0312C17.2901 15.1562 17.5 15.3661 17.5 15.625V16.875C17.5 17.1339 17.2901 17.3438 17.0312 17.3438Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5099", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), Fh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 15 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M6.40625 15H4.6875V1.875C4.6875 1.70924 4.62166 1.55027 4.50445 1.43306C4.38723 1.31585 4.22826 1.25 4.0625 1.25H3.4375C3.27174 1.25 3.11277 1.31585 2.99556 1.43306C2.87835 1.55027 2.8125 1.70924 2.8125 1.875V15H1.09375C1.00216 15 0.912559 15.0267 0.836022 15.0771C0.759484 15.1274 0.699363 15.199 0.663087 15.2831C0.626811 15.3672 0.61597 15.4601 0.631902 15.5503C0.647835 15.6405 0.689844 15.724 0.752738 15.7906L3.40899 18.6031C3.4528 18.6495 3.5056 18.6864 3.56417 18.7116C3.62274 18.7368 3.68584 18.7498 3.74961 18.7498C3.81338 18.7498 3.87648 18.7368 3.93505 18.7116C3.99362 18.6864 4.04643 18.6495 4.09024 18.6031L6.74649 15.7906C6.80934 15.7241 6.85133 15.6406 6.86729 15.5505C6.88325 15.4604 6.87247 15.3675 6.83629 15.2835C6.80011 15.1994 6.74011 15.1277 6.66369 15.0774C6.58727 15.027 6.49778 15.0001 6.40625 15ZM14.2469 4.20938L11.5906 1.39687C11.5468 1.35053 11.494 1.31362 11.4354 1.28839C11.3769 1.26316 11.3138 1.25015 11.25 1.25015C11.1862 1.25015 11.1231 1.26316 11.0646 1.28839C11.006 1.31362 10.9532 1.35053 10.9094 1.39687L8.25313 4.20938C8.19026 4.27594 8.14826 4.35945 8.13231 4.44962C8.11636 4.53978 8.12717 4.63263 8.1634 4.71672C8.19963 4.80081 8.25969 4.87245 8.33617 4.92279C8.41265 4.97313 8.50219 4.99997 8.59375 5H10.3125V18.125C10.3125 18.2908 10.3784 18.4497 10.4956 18.5669C10.6128 18.6842 10.7717 18.75 10.9375 18.75H11.5625C11.7283 18.75 11.8872 18.6842 12.0044 18.5669C12.1217 18.4497 12.1875 18.2908 12.1875 18.125V5H13.9063C13.9978 4.99997 14.0874 4.97313 14.1638 4.92279C14.2403 4.87245 14.3004 4.80081 14.3366 4.71672C14.3728 4.63263 14.3836 4.53978 14.3677 4.44962C14.3518 4.35945 14.3098 4.27594 14.2469 4.20938Z", fill: "currentColor" }) }), Oh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5168)", children: /* @__PURE__ */ a.jsx("path", { d: "M10.4688 16.25H11.4062C11.5306 16.25 11.6498 16.2006 11.7377 16.1127C11.8256 16.0248 11.875 15.9056 11.875 15.7812V7.34375C11.875 7.21943 11.8256 7.1002 11.7377 7.01229C11.6498 6.92439 11.5306 6.875 11.4062 6.875H10.4688C10.3444 6.875 10.2252 6.92439 10.1373 7.01229C10.0494 7.1002 10 7.21943 10 7.34375V15.7812C10 15.9056 10.0494 16.0248 10.1373 16.1127C10.2252 16.2006 10.3444 16.25 10.4688 16.25ZM16.875 3.125H13.6559L12.3277 0.910156C12.1611 0.632428 11.9253 0.402614 11.6434 0.243108C11.3615 0.0836025 11.043 -0.000154039 10.7191 2.12674e-07H6.78086C6.45709 -1.90925e-05 6.13883 0.0838016 5.85707 0.243301C5.57531 0.4028 5.33965 0.632542 5.17305 0.910156L3.84414 3.125H0.625C0.45924 3.125 0.300269 3.19085 0.183058 3.30806C0.065848 3.42527 0 3.58424 0 3.75L0 4.375C0 4.54076 0.065848 4.69973 0.183058 4.81694C0.300269 4.93415 0.45924 5 0.625 5H1.25V18.125C1.25 18.6223 1.44754 19.0992 1.79917 19.4508C2.15081 19.8025 2.62772 20 3.125 20H14.375C14.8723 20 15.3492 19.8025 15.7008 19.4508C16.0525 19.0992 16.25 18.6223 16.25 18.125V5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375V3.75C17.5 3.58424 17.4342 3.42527 17.3169 3.30806C17.1997 3.19085 17.0408 3.125 16.875 3.125ZM6.7125 1.98867C6.73339 1.9539 6.76294 1.92515 6.79827 1.90523C6.8336 1.8853 6.8735 1.87489 6.91406 1.875H10.5859C10.6264 1.87495 10.6662 1.8854 10.7015 1.90532C10.7368 1.92524 10.7663 1.95396 10.7871 1.98867L11.4691 3.125H6.03086L6.7125 1.98867ZM14.375 18.125H3.125V5H14.375V18.125ZM6.09375 16.25H7.03125C7.15557 16.25 7.2748 16.2006 7.36271 16.1127C7.45061 16.0248 7.5 15.9056 7.5 15.7812V7.34375C7.5 7.21943 7.45061 7.1002 7.36271 7.01229C7.2748 6.92439 7.15557 6.875 7.03125 6.875H6.09375C5.96943 6.875 5.8502 6.92439 5.76229 7.01229C5.67439 7.1002 5.625 7.21943 5.625 7.34375V15.7812C5.625 15.9056 5.67439 16.0248 5.76229 16.1127C5.8502 16.2006 5.96943 16.25 6.09375 16.25Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5168", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), Ih = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5137)", children: /* @__PURE__ */ a.jsx("path", { d: "M18.125 5.625H17.1055C17.3477 5.15234 17.5 4.62891 17.5 4.0625C17.5 2.16797 15.957 0.625 14.0625 0.625C12.4375 0.625 11.3867 1.45703 10.0391 3.29297C8.69141 1.45703 7.64062 0.625 6.01562 0.625C4.12109 0.625 2.57812 2.16797 2.57812 4.0625C2.57812 4.62891 2.72656 5.15234 2.97266 5.625H1.875C0.839844 5.625 0 6.46484 0 7.5V12.5C0 12.8438 0.28125 13.125 0.625 13.125H1.25V17.3203C1.25 18.4531 2.17188 19.375 3.30469 19.375H16.6953C17.8281 19.375 18.75 18.4531 18.75 17.3203V13.125H19.375C19.7188 13.125 20 12.8438 20 12.5V7.5C20 6.46484 19.1602 5.625 18.125 5.625ZM9.0625 17.5H3.30469C3.20703 17.5 3.125 17.4219 3.125 17.3203V13.125H7.5V11.25H1.875V7.5H9.0625V17.5ZM6.01172 5.625C5.14844 5.625 4.44922 4.92578 4.44922 4.0625C4.44922 3.19922 5.14844 2.5 6.01172 2.5C6.87109 2.5 7.47656 2.79688 9.29688 5.50781L9.375 5.625H6.01172ZM10.7773 5.50781C12.5977 2.79688 13.2031 2.5 14.0625 2.5C14.9258 2.5 15.625 3.19922 15.625 4.0625C15.625 4.92578 14.9258 5.625 14.0625 5.625H10.6992L10.7773 5.50781ZM18.125 11.25H12.5V13.125H16.875V17.3203C16.875 17.418 16.7969 17.5 16.6953 17.5H10.9375V7.5H18.125V11.25Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5137", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Dh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 23 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5149)", children: /* @__PURE__ */ a.jsx("path", { d: "M20.625 5H18.3566C18.5996 4.52891 18.75 4.00313 18.75 3.4375C18.75 1.54219 17.2078 0 15.3125 0C13.6875 0 12.6363 0.833594 11.2875 2.66914C9.93906 0.833203 8.88789 0 7.26289 0C5.36758 0 3.82539 1.54219 3.82539 3.4375C3.82539 4.00313 3.97578 4.52891 4.21875 5H1.875C0.839453 5 0 5.83945 0 6.875V18.125C0 19.1605 0.839453 20 1.875 20H20.625C21.6605 20 22.5 19.1605 22.5 18.125V6.875C22.5 5.83945 21.6605 5 20.625 5ZM15.3125 1.875C16.1742 1.875 16.875 2.57578 16.875 3.4375C16.875 4.29883 16.1742 5 15.3125 5H11.9504C13.9566 2.01289 14.5176 1.875 15.3125 1.875ZM5.70039 3.4375C5.70039 2.57578 6.40117 1.875 7.26289 1.875C8.0418 1.875 8.61367 2.00273 10.625 5H7.26289C6.40117 5 5.70039 4.29883 5.70039 3.4375ZM8.67422 6.875L6.65391 8.89531C6.40977 9.13945 6.40977 9.53516 6.65391 9.7793L7.0957 10.2211C7.33984 10.4652 7.73555 10.4652 7.97969 10.2211L11.25 6.95078L14.5203 10.2211C14.7645 10.4652 15.1602 10.4652 15.4043 10.2211L15.8461 9.7793C16.0902 9.53516 16.0902 9.13945 15.8461 8.89531L13.8258 6.875H20.625V12.5H1.875V6.875H8.67422ZM1.875 18.125V15H20.625V18.125H1.875Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5149", children: /* @__PURE__ */ a.jsx("rect", { width: "22.5", height: "20", fill: "white" }) }) })
] }), $h = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5085)", children: /* @__PURE__ */ a.jsx("path", { d: "M19.4508 2.97969L17.0203 0.549219C16.6539 0.183203 16.1742 0 15.6945 0C15.2145 0 14.7348 0.183203 14.3688 0.549219L0.549225 14.3687C-0.183197 15.1012 -0.183197 16.2883 0.549225 17.0203L2.97969 19.4508C3.34571 19.8168 3.82579 20 4.30548 20C4.78516 20 5.26524 19.8168 5.63126 19.4508L19.4504 5.63125C20.1832 4.89922 20.1832 3.71211 19.4508 2.97969ZM4.30587 18.125L1.87501 15.6945L10.6211 6.94727L13.0524 9.37852L4.30587 18.125ZM14.3781 8.05234L11.9469 5.62109L15.6926 1.875H15.6945L18.125 4.30547L14.3781 8.05234ZM16.875 11.25L15.8336 13.3332L13.75 14.375L15.8336 15.4168L16.875 17.5L17.9164 15.4168L20 14.375L17.9164 13.3332L16.875 11.25ZM8.75001 3.75L9.37501 2.5L10.625 1.875L9.37501 1.25L8.75001 0L8.12501 1.25L6.87501 1.875L8.12501 2.5L8.75001 3.75ZM3.12501 6.25L4.16641 4.1668L6.25001 3.125L4.16641 2.0832L3.12501 0L2.0836 2.0832L6.08712e-06 3.125L2.0836 4.1668L3.12501 6.25Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5085", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Rh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5244)", children: /* @__PURE__ */ a.jsx("path", { d: "M19.2035 2.87597L17.0995 0.772886C16.0691 -0.257544 14.4012 -0.2577 13.3706 0.772847L0.973042 13.0894L0.0128468 18.9096C-0.0916454 19.543 0.456909 20.0916 1.09046 19.9872L6.91058 19.0269L19.228 6.62937C20.2565 5.60082 20.2663 3.93878 19.2035 2.87597ZM4.71265 11.7969L11.3634 5.18925L14.8107 8.63656L8.20312 15.2873V13.6719H6.32812V11.7969H4.71265ZM3.20828 17.8958L2.10425 16.7918L2.57847 13.9173L3.29722 13.2031H4.92187V15.0781H6.79687V16.7027L6.08273 17.4215L3.20828 17.8958ZM18.0124 5.41402L18.0104 5.41601L18.0084 5.418L16.1322 7.30644L12.6935 3.86777L14.582 1.9916L14.5839 1.98964L14.5859 1.98769C14.9432 1.63042 15.5225 1.62601 15.8842 1.98765L17.9878 4.09132C18.3737 4.47714 18.3761 5.05027 18.0124 5.41402Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5244", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Ph = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 23 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5252)", children: /* @__PURE__ */ a.jsx("path", { d: "M21.875 1.25H21.25C20.9047 1.25 20.625 1.52969 20.625 1.875V2.38047L1.84687 6.73477C1.78164 6.45937 1.54531 6.25 1.25 6.25H0.625C0.279687 6.25 0 6.52969 0 6.875V13.125C0 13.4703 0.279687 13.75 0.625 13.75H1.25C1.54531 13.75 1.78164 13.5406 1.84687 13.2652L6.33945 14.307C6.29375 14.5328 6.25039 14.7602 6.25039 15C6.25039 17.0711 7.9293 18.75 10.0004 18.75C11.7266 18.75 13.1641 17.5785 13.5973 15.9898L20.625 17.6195V18.125C20.625 18.4703 20.9047 18.75 21.25 18.75H21.875C22.2203 18.75 22.5 18.4703 22.5 18.125V1.875C22.5 1.52969 22.2203 1.25 21.875 1.25ZM10 16.875C8.96602 16.875 8.125 16.034 8.125 15C8.125 14.9055 8.16016 14.8227 8.17383 14.7324L11.7773 15.568C11.5352 16.323 10.8348 16.875 10 16.875ZM1.875 11.3477V8.65234L20.625 4.3043V15.6953L1.875 11.3477Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5252", children: /* @__PURE__ */ a.jsx("rect", { width: "22.5", height: "20", fill: "white" }) }) })
] }), Hh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_617_3609)", children: /* @__PURE__ */ a.jsx("path", { d: "M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_617_3609", children: /* @__PURE__ */ a.jsx("rect", { width: "24", height: "24", fill: "white" }) }) })
] }), Bh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_617_3917)", children: /* @__PURE__ */ a.jsx("path", { d: "M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_617_3917", children: /* @__PURE__ */ a.jsx("rect", { width: "24", height: "24", fill: "white" }) }) })
] }), Vh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 13 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5214)", children: /* @__PURE__ */ a.jsx("path", { d: "M8.10939 10.0001L12.3172 5.79229C12.5606 5.54893 12.5606 5.154 12.3172 4.91025L11.3395 3.93252C11.0961 3.68916 10.7012 3.68916 10.4574 3.93252L6.25001 8.14072L2.0422 3.93291C1.79884 3.68955 1.40392 3.68955 1.16017 3.93291L0.182825 4.91025C-0.0605347 5.15361 -0.0605347 5.54854 0.182825 5.79229L4.39064 10.0001L0.182825 14.2079C-0.0605347 14.4513 -0.0605347 14.8462 0.182825 15.0899L1.16056 16.0677C1.40392 16.311 1.79884 16.311 2.04259 16.0677L6.25001 11.8595L10.4578 16.0673C10.7012 16.3106 11.0961 16.3106 11.3399 16.0673L12.3176 15.0896C12.5609 14.8462 12.5609 14.4513 12.3176 14.2075L8.10939 10.0001Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5214", children: /* @__PURE__ */ a.jsx("rect", { width: "12.5", height: "20", fill: "white" }) }) })
] }), zh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5300)", children: /* @__PURE__ */ a.jsx("path", { d: "M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM14.75 12.543C14.9336 12.7266 14.9336 13.0234 14.75 13.207L13.2031 14.75C13.0195 14.9336 12.7227 14.9336 12.5391 14.75L10 12.1875L7.45703 14.75C7.27344 14.9336 6.97656 14.9336 6.79297 14.75L5.25 13.2031C5.06641 13.0195 5.06641 12.7227 5.25 12.5391L7.8125 10L5.25 7.45703C5.06641 7.27344 5.06641 6.97656 5.25 6.79297L6.79688 5.24609C6.98047 5.0625 7.27734 5.0625 7.46094 5.24609L10 7.8125L12.543 5.25C12.7266 5.06641 13.0234 5.06641 13.207 5.25L14.7539 6.79688C14.9375 6.98047 14.9375 7.27734 14.7539 7.46094L12.1875 10L14.75 12.543Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5300", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Zh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M17.0253 3.26033L6.75017 13.5355L2.9747 9.76002C2.79165 9.57697 2.49486 9.57697 2.31177 9.76002L1.20693 10.8649C1.02388 11.0479 1.02388 11.3447 1.20693 11.5278L6.41868 16.7396C6.60173 16.9226 6.89853 16.9226 7.08161 16.7396L18.7931 5.02811C18.9761 4.84506 18.9761 4.54826 18.7931 4.36518L17.6882 3.26033C17.5052 3.07729 17.2084 3.07729 17.0253 3.26033Z", fill: "currentColor" }) }), Wh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5260)", children: /* @__PURE__ */ a.jsx("path", { d: "M13.75 12.5C12.75 12.5 11.8398 12.8906 11.168 13.5312L7.32812 11.1289C7.55859 10.3945 7.55859 9.60156 7.32812 8.87109L11.168 6.46875C11.8398 7.10938 12.75 7.5 13.75 7.5C15.8203 7.5 17.5 5.82031 17.5 3.75C17.5 1.67969 15.8203 0 13.75 0C11.6797 0 10 1.67969 10 3.75C10 4.13281 10.0586 4.51562 10.1719 4.87891L6.33203 7.28125C5.66016 6.64062 4.75 6.25 3.75 6.25C1.67969 6.25 0 7.92969 0 10C0 12.0703 1.67969 13.75 3.75 13.75C4.75 13.75 5.66016 13.3594 6.33203 12.7188L10.1719 15.1211C10.0586 15.4883 10 15.8672 10 16.25C10 18.3203 11.6797 20 13.75 20C15.8203 20 17.5 18.3203 17.5 16.25C17.5 14.1797 15.8203 12.5 13.75 12.5ZM13.75 1.875C14.7852 1.875 15.625 2.71484 15.625 3.75C15.625 4.78516 14.7852 5.625 13.75 5.625C12.7148 5.625 11.875 4.78516 11.875 3.75C11.875 2.71484 12.7148 1.875 13.75 1.875ZM3.75 11.875C2.71484 11.875 1.875 11.0352 1.875 10C1.875 8.96484 2.71484 8.125 3.75 8.125C4.78516 8.125 5.625 8.96484 5.625 10C5.625 11.0352 4.78516 11.875 3.75 11.875ZM13.75 18.125C12.7148 18.125 11.875 17.2852 11.875 16.25C11.875 15.2148 12.7148 14.375 13.75 14.375C14.7852 14.375 15.625 15.2148 15.625 16.25C15.625 17.2852 14.7852 18.125 13.75 18.125Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5260", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), Uh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5286)", children: /* @__PURE__ */ a.jsx("path", { d: "M16.9508 2.57582L14.9242 0.54918C14.5726 0.197548 14.0956 2.6003e-06 13.5984 0L6.875 0C5.83945 0 5 0.839453 5 1.875V3.75H1.875C0.839453 3.75 0 4.58945 0 5.625V18.125C0 19.1605 0.839453 20 1.875 20H10.625C11.6605 20 12.5 19.1605 12.5 18.125V16.25H15.625C16.6605 16.25 17.5 15.4105 17.5 14.375V3.90164C17.5 3.40436 17.3025 2.92745 16.9508 2.57582ZM10.3906 18.125H2.10938C2.04721 18.125 1.9876 18.1003 1.94365 18.0564C1.89969 18.0124 1.875 17.9528 1.875 17.8906V5.85938C1.875 5.79721 1.89969 5.7376 1.94365 5.69365C1.9876 5.64969 2.04721 5.625 2.10938 5.625H5V14.375C5 15.4105 5.83945 16.25 6.875 16.25H10.625V17.8906C10.625 17.9528 10.6003 18.0124 10.5564 18.0564C10.5124 18.1003 10.4528 18.125 10.3906 18.125ZM15.3906 14.375H7.10938C7.04721 14.375 6.9876 14.3503 6.94365 14.3064C6.89969 14.2624 6.875 14.2028 6.875 14.1406V2.10938C6.875 2.04721 6.89969 1.9876 6.94365 1.94365C6.9876 1.89969 7.04721 1.875 7.10938 1.875H11.25V5.3125C11.25 5.83027 11.6697 6.25 12.1875 6.25H15.625V14.1406C15.625 14.2028 15.6003 14.2624 15.5564 14.3064C15.5124 14.3503 15.4528 14.375 15.3906 14.375ZM15.625 4.375H13.125V1.875H13.5012C13.5634 1.875 13.623 1.89969 13.667 1.94363L15.5564 3.83301C15.5781 3.85477 15.5954 3.88061 15.6072 3.90905C15.6189 3.93749 15.625 3.96797 15.625 3.99875V4.375Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5286", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), Kh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_888_5083)", children: /* @__PURE__ */ a.jsx("path", { d: "M16.875 11.25H16.25C16.0842 11.25 15.9253 11.3158 15.8081 11.4331C15.6908 11.5503 15.625 11.7092 15.625 11.875V17.8906C15.625 17.9528 15.6003 18.0124 15.5564 18.0564C15.5124 18.1003 15.4528 18.125 15.3906 18.125H2.10938C2.04721 18.125 1.9876 18.1003 1.94365 18.0564C1.89969 18.0124 1.875 17.9528 1.875 17.8906V4.60938C1.875 4.54721 1.89969 4.4876 1.94365 4.44365C1.9876 4.39969 2.04721 4.375 2.10938 4.375H8.125C8.29076 4.375 8.44973 4.30915 8.56694 4.19194C8.68415 4.07473 8.75 3.91576 8.75 3.75V3.125C8.75 2.95924 8.68415 2.80027 8.56694 2.68306C8.44973 2.56585 8.29076 2.5 8.125 2.5H1.875C1.37772 2.5 0.900805 2.69754 0.549175 3.04917C0.197544 3.40081 0 3.87772 0 4.375L0 18.125C0 18.6223 0.197544 19.0992 0.549175 19.4508C0.900805 19.8025 1.37772 20 1.875 20H15.625C16.1223 20 16.5992 19.8025 16.9508 19.4508C17.3025 19.0992 17.5 18.6223 17.5 18.125V11.875C17.5 11.7092 17.4342 11.5503 17.3169 11.4331C17.1997 11.3158 17.0408 11.25 16.875 11.25ZM19.5312 0H14.2188C14.1261 8.14921e-05 14.0356 0.0276174 13.9585 0.0791298C13.8815 0.130642 13.8215 0.203821 13.7861 0.289423C13.7506 0.375025 13.7413 0.469211 13.7594 0.560085C13.7774 0.650959 13.822 0.734446 13.8875 0.8L15.7699 2.6832L5.13711 13.316C5.09341 13.3596 5.05874 13.4113 5.03508 13.4683C5.01142 13.5253 4.99924 13.5864 4.99924 13.648C4.99924 13.7097 5.01142 13.7708 5.03508 13.8278C5.05874 13.8848 5.09341 13.9365 5.13711 13.9801L6.02109 14.8641C6.06464 14.9078 6.11639 14.9424 6.17337 14.9661C6.23034 14.9898 6.29143 15.0019 6.35313 15.0019C6.41482 15.0019 6.47591 14.9898 6.53288 14.9661C6.58986 14.9424 6.64161 14.9078 6.68516 14.8641L17.318 4.23086L19.2012 6.11367C19.2669 6.17881 19.3503 6.22306 19.4411 6.24085C19.5319 6.25863 19.6259 6.24916 19.7113 6.21362C19.7968 6.17807 19.8697 6.11805 19.9211 6.04112C19.9725 5.96418 19.9999 5.87376 20 5.78125V0.46875C20 0.34443 19.9506 0.225201 19.8627 0.137294C19.7748 0.049386 19.6556 0 19.5312 0Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_888_5083", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), Gh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 15 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M13.6133 9.06641L7.83203 14.8633C7.64844 15.0469 7.35156 15.0469 7.16797 14.8633L1.38672 9.06641C1.20312 8.88281 1.20312 8.58594 1.38672 8.40234L2.15234 7.63672C2.33984 7.44922 2.64062 7.45312 2.82031 7.64453L6.48047 11.4375V1.71875C6.48047 1.46094 6.69141 1.25 6.94922 1.25H8.04297C8.30078 1.25 8.51172 1.46094 8.51172 1.71875V11.4375L12.1719 7.64453C12.3555 7.45703 12.6563 7.45312 12.8398 7.63672L13.6055 8.40234C13.7969 8.58594 13.7969 8.88281 13.6133 9.06641ZM14.5312 16.7188H0.46875C0.210938 16.7188 0 16.9297 0 17.1875V18.2812C0 18.5391 0.210938 18.75 0.46875 18.75H14.5312C14.7891 18.75 15 18.5391 15 18.2812V17.1875C15 16.9297 14.7891 16.7188 14.5312 16.7188Z", fill: "currentColor" }) }), Yh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_515_1831)", children: /* @__PURE__ */ a.jsx("path", { d: "M12.25 11.875C11.1289 11.875 10.5898 12.5 8.75 12.5C6.91016 12.5 6.375 11.875 5.25 11.875C2.35156 11.875 0 14.2266 0 17.125V18.125C0 19.1602 0.839844 20 1.875 20H15.625C16.6602 20 17.5 19.1602 17.5 18.125V17.125C17.5 14.2266 15.1484 11.875 12.25 11.875ZM15.625 18.125H1.875V17.125C1.875 15.2656 3.39062 13.75 5.25 13.75C5.82031 13.75 6.74609 14.375 8.75 14.375C10.7695 14.375 11.6758 13.75 12.25 13.75C14.1094 13.75 15.625 15.2656 15.625 17.125V18.125ZM8.75 11.25C11.8555 11.25 14.375 8.73047 14.375 5.625C14.375 2.51953 11.8555 0 8.75 0C5.64453 0 3.125 2.51953 3.125 5.625C3.125 8.73047 5.64453 11.25 8.75 11.25ZM8.75 1.875C10.8164 1.875 12.5 3.55859 12.5 5.625C12.5 7.69141 10.8164 9.375 8.75 9.375C6.68359 9.375 5 7.69141 5 5.625C5 3.55859 6.68359 1.875 8.75 1.875Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_515_1831", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), qh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsxs("g", { "clip-path": "url(#clip0_936_3902)", children: [
    /* @__PURE__ */ a.jsx("path", { d: "M15.0698 9.86053C15.6747 9.86053 16.1654 9.3699 16.1654 8.76492C16.1654 8.15994 15.6747 7.66931 15.0698 7.66931C14.4648 7.66931 13.9742 8.15994 13.9742 8.76492C13.9742 9.3699 14.4648 9.86053 15.0698 9.86053ZM18.9044 4.93029H17.8088V3.28687C17.8088 1.77425 16.5824 0.547852 15.0698 0.547852C13.5571 0.547852 12.3307 1.77425 12.3307 3.28687V4.93029H11.2351C10.6302 4.93029 10.1395 5.42091 10.1395 6.0259V11.5039C10.1395 12.1089 10.6302 12.5996 11.2351 12.5996H18.9044C19.5094 12.5996 20 12.1089 20 11.5039V6.0259C20 5.42091 19.5094 4.93029 18.9044 4.93029ZM13.9742 3.28687C13.9742 2.68189 14.4648 2.19126 15.0698 2.19126C15.6747 2.19126 16.1654 2.68189 16.1654 3.28687V4.93029H13.9742V3.28687ZM18.3566 10.9561H11.7829V6.5737H18.3566V10.9561Z", fill: "currentColor" }),
    /* @__PURE__ */ a.jsx("path", { d: "M10.9561 3.83463V1.64341C10.9561 0.736112 10.22 0 9.31268 0H1.64341C0.736112 0 0 0.736112 0 1.64341V15.8863C0 16.7936 0.736112 17.5297 1.64341 17.5297H9.31268C10.22 17.5297 10.9561 16.7936 10.9561 15.8863V13.6951H9.31268V15.6809C9.31268 15.7939 9.22023 15.8863 9.10725 15.8863H1.84884C1.73586 15.8863 1.64341 15.7939 1.64341 15.6809V1.84884C1.64341 1.73586 1.73586 1.64341 1.84884 1.64341H9.10725C9.22023 1.64341 9.31268 1.73586 9.31268 1.84884V3.83463H10.9561ZM4.38244 14.2429C4.38244 14.8489 4.87204 15.3385 5.47804 15.3385C6.08405 15.3385 6.57365 14.8489 6.57365 14.2429C6.57365 13.6369 6.08405 13.1473 5.47804 13.1473C4.87204 13.1473 4.38244 13.6369 4.38244 14.2429Z", fill: "currentColor" })
  ] }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_936_3902", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "17.5297", fill: "white" }) }) })
] }), Jh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "currentColor" }),
  /* @__PURE__ */ a.jsx("path", { d: "M8.91351 14.0283L9.09125 13L8.26996 12.2002C8.1781 11.738 8.12392 11.2679 8.1098 10.7949C8.4063 10.4154 8.73346 10.063 9.08734 9.74121L10.2026 9.5791L10.6909 8.58691C11.11 8.35225 11.5477 8.15298 11.9985 7.99121C12.4506 8.15315 12.8892 8.35277 13.309 8.58789L13.7983 9.5791L14.7827 9.72168L14.9106 9.74121C15.2652 10.0639 15.5923 10.4175 15.8891 10.7979C15.875 11.2691 15.8212 11.7376 15.7299 12.1982L14.9086 12.999L15.102 14.1299C14.907 14.5523 14.6779 14.9593 14.4155 15.3457C13.9518 15.4855 13.4801 15.5842 13.0073 15.6426L11.9995 15.1133L11.0786 15.5967L10.9916 15.6426C10.5198 15.5843 10.0483 15.4856 9.58441 15.3457C9.32155 14.9587 9.09216 14.551 8.89691 14.1279L8.91351 14.0283ZM8.91351 14.0283L10.8032 13.7041L11.0786 15.5967M11.0786 15.5967L10.8032 13.7041M8.91351 14.0283L10.8032 13.7041M13.5082 11.5625L13.7407 11.7998L13.3715 12.501M13.7407 11.7998L13.3715 12.501L13.5082 11.5625M13.7407 11.7998L13.5082 11.5625L13.3715 12.501", fill: "currentColor", stroke: "currentColor", "stroke-width": "1" })
] }), Xh = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M16.25 17.5H12.9688C12.7109 17.5 12.5 17.2891 12.5 17.0312V16.0938C12.5 15.8359 12.7109 15.625 12.9688 15.625H16.25C17.2852 15.625 18.125 14.7852 18.125 13.75V6.25C18.125 5.21484 17.2852 4.375 16.25 4.375H12.9688C12.7109 4.375 12.5 4.16406 12.5 3.90625V2.96875C12.5 2.71094 12.7109 2.5 12.9688 2.5H16.25C18.3203 2.5 20 4.17969 20 6.25V13.75C20 15.8203 18.3203 17.5 16.25 17.5ZM6.52734 3.26172L5.76172 4.02734C5.57422 4.21484 5.57812 4.51562 5.76953 4.69531L10.1875 8.98438H0.46875C0.210938 8.98438 0 9.19531 0 9.45312V10.5469C0 10.8047 0.210938 11.0156 0.46875 11.0156H10.1875L5.76953 15.3008C5.58203 15.4844 5.57812 15.7852 5.76172 15.9688L6.52734 16.7344C6.71094 16.918 7.00781 16.918 7.19141 16.7344L13.6133 10.3281C13.7969 10.1445 13.7969 9.84766 13.6133 9.66406L7.19141 3.25781C7.00781 3.07813 6.71094 3.07812 6.52734 3.26172Z", fill: "currentColor" }) }), Qh = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1177_6110)", children: /* @__PURE__ */ a.jsx("path", { d: "M15.625 7.50002H14.375V5.67971C14.375 2.57033 11.875 0.00783056 8.76562 1.80638e-05C5.65625 -0.00779444 3.125 2.51955 3.125 5.62502V7.50002H1.875C0.839844 7.50002 0 8.33986 0 9.37502V18.125C0 19.1602 0.839844 20 1.875 20H15.625C16.6602 20 17.5 19.1602 17.5 18.125V9.37502C17.5 8.33986 16.6602 7.50002 15.625 7.50002ZM5 5.62502C5 3.55861 6.68359 1.87502 8.75 1.87502C10.8164 1.87502 12.5 3.55861 12.5 5.62502V7.50002H5V5.62502ZM15.625 18.125H1.875V9.37502H15.625V18.125Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1177_6110", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), e8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1177_6112)", children: /* @__PURE__ */ a.jsx("path", { d: "M15.625 9.37502H5V5.67189C5 3.60939 6.64453 1.89455 8.71094 1.87502C10.7969 1.85158 12.5 3.54299 12.5 5.62502V6.56252C12.5 7.08205 12.918 7.50002 13.4375 7.50002C13.957 7.50002 14.375 7.08205 14.375 6.56252V5.67971C14.375 2.57033 11.875 0.00783056 8.76172 1.80638e-05C5.65625 -0.00779444 3.125 2.51955 3.125 5.62502V9.37502H1.875C0.839844 9.37502 0 10.2149 0 11.25V18.125C0 19.1602 0.839844 20 1.875 20H15.625C16.6602 20 17.5 19.1602 17.5 18.125V11.25C17.5 10.2149 16.6602 9.37502 15.625 9.37502ZM15.625 18.125H1.875V11.25H15.625V18.125Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1177_6112", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), t8 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M18.3333 2.22266H1.66667C0.746181 2.22266 0 2.96884 0 3.88932V13.8893C0 14.8098 0.746181 15.556 1.66667 15.556H18.3333C19.2538 15.556 20 14.8098 20 13.8893V3.88932C20 2.96884 19.2538 2.22266 18.3333 2.22266ZM18.6111 13.8893C18.6111 14.0425 18.4865 14.1671 18.3333 14.1671H1.66667C1.51351 14.1671 1.38889 14.0425 1.38889 13.8893V3.88932C1.38889 3.73616 1.51351 3.61155 1.66667 3.61155H18.3333C18.4865 3.61155 18.6111 3.73616 18.6111 3.88932V13.8893ZM5.90278 9.37543V8.40321C5.90278 8.17311 5.71622 7.98655 5.48611 7.98655H4.51389C4.28378 7.98655 4.09722 8.17311 4.09722 8.40321V9.37543C4.09722 9.60554 4.28378 9.7921 4.51389 9.7921H5.48611C5.71622 9.7921 5.90278 9.60554 5.90278 9.37543ZM9.23611 9.37543V8.40321C9.23611 8.17311 9.04955 7.98655 8.81944 7.98655H7.84722C7.61712 7.98655 7.43056 8.17311 7.43056 8.40321V9.37543C7.43056 9.60554 7.61712 9.7921 7.84722 9.7921H8.81944C9.04955 9.7921 9.23611 9.60554 9.23611 9.37543ZM12.5694 9.37543V8.40321C12.5694 8.17311 12.3829 7.98655 12.1528 7.98655H11.1806C10.9505 7.98655 10.7639 8.17311 10.7639 8.40321V9.37543C10.7639 9.60554 10.9505 9.7921 11.1806 9.7921H12.1528C12.3829 9.7921 12.5694 9.60554 12.5694 9.37543ZM15.9028 9.37543V8.40321C15.9028 8.17311 15.7162 7.98655 15.4861 7.98655H14.5139C14.2838 7.98655 14.0972 8.17311 14.0972 8.40321V9.37543C14.0972 9.60554 14.2838 9.7921 14.5139 9.7921H15.4861C15.7162 9.7921 15.9028 9.60554 15.9028 9.37543ZM4.23611 12.2227V11.2504C4.23611 11.0203 4.04955 10.8338 3.81944 10.8338H2.84722C2.61712 10.8338 2.43056 11.0203 2.43056 11.2504V12.2227C2.43056 12.4528 2.61712 12.6393 2.84722 12.6393H3.81944C4.04955 12.6393 4.23611 12.4528 4.23611 12.2227ZM17.5694 12.2227V11.2504C17.5694 11.0203 17.3829 10.8338 17.1528 10.8338H16.1806C15.9505 10.8338 15.7639 11.0203 15.7639 11.2504V12.2227C15.7639 12.4528 15.9505 12.6393 16.1806 12.6393H17.1528C17.3829 12.6393 17.5694 12.4528 17.5694 12.2227ZM4.23611 6.52821V5.55599C4.23611 5.32589 4.04955 5.13932 3.81944 5.13932H2.84722C2.61712 5.13932 2.43056 5.32589 2.43056 5.55599V6.52821C2.43056 6.75832 2.61712 6.94488 2.84722 6.94488H3.81944C4.04955 6.94488 4.23611 6.75832 4.23611 6.52821ZM7.56944 6.52821V5.55599C7.56944 5.32589 7.38288 5.13932 7.15278 5.13932H6.18056C5.95045 5.13932 5.76389 5.32589 5.76389 5.55599V6.52821C5.76389 6.75832 5.95045 6.94488 6.18056 6.94488H7.15278C7.38288 6.94488 7.56944 6.75832 7.56944 6.52821ZM10.9028 6.52821V5.55599C10.9028 5.32589 10.7162 5.13932 10.4861 5.13932H9.51389C9.28378 5.13932 9.09722 5.32589 9.09722 5.55599V6.52821C9.09722 6.75832 9.28378 6.94488 9.51389 6.94488H10.4861C10.7162 6.94488 10.9028 6.75832 10.9028 6.52821ZM14.2361 6.52821V5.55599C14.2361 5.32589 14.0495 5.13932 13.8194 5.13932H12.8472C12.6171 5.13932 12.4306 5.32589 12.4306 5.55599V6.52821C12.4306 6.75832 12.6171 6.94488 12.8472 6.94488H13.8194C14.0495 6.94488 14.2361 6.75832 14.2361 6.52821ZM17.5694 6.52821V5.55599C17.5694 5.32589 17.3829 5.13932 17.1528 5.13932H16.1806C15.9505 5.13932 15.7639 5.32589 15.7639 5.55599V6.52821C15.7639 6.75832 15.9505 6.94488 16.1806 6.94488H17.1528C17.3829 6.94488 17.5694 6.75832 17.5694 6.52821ZM14.1667 12.0143V11.4588C14.1667 11.2287 13.9801 11.0421 13.75 11.0421H6.25C6.0199 11.0421 5.83333 11.2287 5.83333 11.4588V12.0143C5.83333 12.2444 6.0199 12.431 6.25 12.431H13.75C13.9801 12.431 14.1667 12.2444 14.1667 12.0143Z", fill: "currentColor" }) }), n8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 18 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1182_6042)", children: /* @__PURE__ */ a.jsx("path", { d: "M17.1637 14.152C16.409 13.341 14.9969 12.1211 14.9969 8.125C14.9969 5.08984 12.8688 2.66016 9.99925 2.06406V1.25C9.99925 0.559766 9.43987 0 8.75003 0C8.06018 0 7.50081 0.559766 7.50081 1.25V2.06406C4.63128 2.66016 2.50315 5.08984 2.50315 8.125C2.50315 12.1211 1.09104 13.341 0.336355 14.152C0.10198 14.4039 -0.00192612 14.7051 2.70074e-05 15C0.00432388 15.6406 0.507058 16.25 1.25393 16.25H16.2461C16.993 16.25 17.4961 15.6406 17.5 15C17.502 14.7051 17.3981 14.4035 17.1637 14.152ZM2.63792 14.375C3.46682 13.2824 4.37307 11.4715 4.37737 8.14766C4.37737 8.13984 4.37503 8.13281 4.37503 8.125C4.37503 5.70859 6.33362 3.75 8.75003 3.75C11.1664 3.75 13.125 5.70859 13.125 8.125C13.125 8.13281 13.1227 8.13984 13.1227 8.14766C13.127 11.4719 14.0332 13.2828 14.8621 14.375H2.63792ZM8.75003 20C10.1297 20 11.2489 18.8809 11.2489 17.5H6.2512C6.2512 18.8809 7.37034 20 8.75003 20Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1182_6042", children: /* @__PURE__ */ a.jsx("rect", { width: "17.5", height: "20", fill: "white" }) }) })
] }), r8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1211_6225)", children: /* @__PURE__ */ a.jsx("path", { d: "M9.03125 10.9376C9.375 10.9376 9.65625 10.6563 9.65625 10.3126V9.68757C9.65625 9.34382 9.375 9.06257 9.03125 9.06257H4.69531V6.24616C4.69531 5.82819 4.19141 5.61725 3.89844 5.91022L0.136719 9.66803C-0.046875 9.85163 -0.046875 10.1485 0.136719 10.3321L3.89453 14.0899C4.19141 14.3868 4.69141 14.1758 4.69141 13.754V10.9376H9.03125ZM15.3086 10.9376V13.754C15.3086 14.1719 15.8125 14.3829 16.1055 14.0899L19.8633 10.3321C20.0469 10.1485 20.0469 9.85163 19.8633 9.66803L16.1055 5.91022C15.8086 5.61335 15.3086 5.82428 15.3086 6.24616V9.06257H10.9687C10.625 9.06257 10.3437 9.34382 10.3437 9.68757V10.3126C10.3437 10.6563 10.625 10.9376 10.9687 10.9376H15.3086Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1211_6225", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), s8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1211_6227)", children: /* @__PURE__ */ a.jsx("path", { d: "M4.96484 10.9376V13.754C4.96484 14.1719 5.46875 14.3829 5.76172 14.0899L9.51953 10.3321C9.70312 10.1485 9.70312 9.85163 9.51953 9.66803L5.76172 5.91022C5.46484 5.61335 4.96484 5.82428 4.96484 6.24616V9.06257H0.625C0.28125 9.06257 0 9.34382 0 9.68757V10.3126C0 10.6563 0.28125 10.9376 0.625 10.9376H4.96484ZM19.375 10.9376C19.7188 10.9376 20 10.6563 20 10.3126V9.68757C20 9.34382 19.7188 9.06257 19.375 9.06257H15.0391V6.24616C15.0391 5.82819 14.5352 5.61725 14.2422 5.91022L10.4844 9.66803C10.3008 9.85163 10.3008 10.1485 10.4844 10.3321L14.2422 14.0899C14.5391 14.3868 15.0391 14.1758 15.0391 13.754V10.9376H19.3789H19.375Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1211_6227", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), i8 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M2 19.5V4.5H2.70312V19.5H2ZM3.0491 19.4893V4.5H3.40625V19.4893H3.0491ZM4.10938 19.4893V4.5H4.45535V19.4893H4.10938ZM5.8616 19.4893V4.5H6.20758V19.4893H5.8616ZM7.26785 19.4893V4.5H7.9598V19.4893H7.26785ZM9.02008 19.4893V4.5H9.36605V19.4893H9.02008ZM9.7232 19.4893V4.5H10.0692V19.4893H9.7232ZM10.4263 19.4893V4.5H10.7723V19.4893H10.4263ZM11.8214 19.4893V4.5H12.5246V19.4893H11.8214ZM13.5737 19.4893V4.5H14.2768V19.4893H13.5737ZM14.9799 19.4893V4.5H15.683V19.4893H14.9799ZM16.3862 19.4893V4.5H17.0893V19.4893H16.3862ZM17.4353 19.4893V4.5H18.1384V19.4893H17.4353ZM19.1987 19.4893V4.5H20.2478V19.4893H19.1987ZM20.5938 19.4893V4.5H20.9509V19.4893H20.5938ZM21.2969 19.5V4.5H22V19.5H21.2969Z", fill: "currentColor" }) }), o8 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M19.8627 6.58122L16.1064 10.3375C15.8104 10.6336 15.3062 10.4211 15.3062 10.006L15.306 7.18747H0.46875C0.209883 7.18747 0 6.97758 0 6.71872V5.78122C0 5.52235 0.209883 5.31247 0.46875 5.31247H15.306L15.3064 2.49364C15.3064 2.07633 15.8122 1.86778 16.1066 2.16219L19.8627 5.91829C20.0457 6.10133 20.0458 6.39817 19.8627 6.58122ZM0.137305 14.0816L3.8934 17.8377C4.18777 18.1321 4.69355 17.9236 4.69359 17.5063L4.69398 14.6875H19.5312C19.7901 14.6875 20 14.4776 20 14.2187V13.2812C20 13.0223 19.7901 12.8125 19.5312 12.8125H4.69402L4.69375 9.99395C4.69375 9.57891 4.18965 9.36637 3.89355 9.66251L0.137305 13.4188C-0.0457812 13.6018 -0.0457422 13.8986 0.137305 14.0816Z", fill: "currentColor" }) }), l8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1343_6086)", children: /* @__PURE__ */ a.jsx("path", { d: "M6.46439 7.63969C5.34314 7.96719 4.59095 8.93031 4.66658 9.96125C5.02283 9.5625 5.56689 9.21875 6.22595 8.9925L6.46439 7.63969ZM18.9625 3.74719C17.5722 2.97344 16.0766 2.44563 14.536 2.17406C12.9953 1.9025 11.4094 1.88688 9.83845 2.13844C8.98501 2.275 8.3047 2.96094 8.1497 3.84125L7.15814 9.465C6.6772 12.1922 10.1356 15.6138 12.1053 15.9613C14.075 16.3084 18.495 14.2759 18.976 11.5487L19.9675 5.925C20.1225 5.04469 19.7178 4.1675 18.9625 3.74719ZM17.4981 11.2884C17.1788 13.0994 13.6169 14.7047 12.3653 14.4841C11.1135 14.2634 8.31564 11.5366 8.6347 9.72563L9.62626 4.10187C9.67001 3.85312 9.8547 3.655 10.075 3.61969C11.4735 3.39594 12.8863 3.40656 14.275 3.65156C15.6638 3.89625 16.9953 4.36969 18.2325 5.05813C18.4275 5.16656 18.5331 5.41625 18.4894 5.665L17.4981 11.2884ZM2.50158 9.30188L1.51001 3.69438C1.46626 3.44656 1.57158 3.19781 1.76689 3.08938C3.64595 2.04656 5.77251 1.49563 7.91658 1.49563C8.18064 1.49563 8.44595 1.51063 8.71095 1.52719C9.00845 1.36281 9.33314 1.24344 9.68064 1.18781C10.271 1.09375 10.8694 1.04594 11.4675 1.02156C11.1553 0.585625 10.7028 0.264687 10.1622 0.178125C9.4147 0.0590625 8.66376 0 7.91626 0C5.52064 0 3.15689 0.606562 1.03751 1.7825C0.282201 2.20156 -0.122486 3.07625 0.0328264 3.95406L1.02439 9.56188C1.46939 12.0769 5.2847 14 7.41345 14C7.52876 14 7.63064 13.9856 7.73501 13.9744C7.35345 13.4881 7.01283 12.97 6.74751 12.4312C5.09501 12.1031 2.75189 10.7172 2.50158 9.30188ZM6.04251 4.89531C6.0197 4.76625 5.97283 4.64875 5.91533 4.53844C5.65751 4.81781 5.26939 5.03188 4.81158 5.1125C4.35376 5.19313 3.91564 5.125 3.57783 4.95062C3.56158 5.07406 3.55783 5.20062 3.58064 5.32969C3.70064 6.00969 4.34876 6.46344 5.02876 6.34375C5.70876 6.22406 6.16251 5.575 6.04251 4.89531ZM15.811 6.46063C15.1313 6.34063 14.4828 6.79469 14.3628 7.47469C14.34 7.60375 14.3438 7.73031 14.36 7.85375C14.6978 7.67938 15.136 7.61094 15.5938 7.69187C16.0516 7.7725 16.44 7.98656 16.6978 8.26594C16.7553 8.15563 16.8022 8.03813 16.825 7.90875C16.9447 7.22875 16.491 6.58031 15.811 6.46063ZM11.6547 6.99687C12.1125 7.0775 12.501 7.29156 12.7585 7.57094C12.816 7.46063 12.8628 7.34312 12.8856 7.21375C13.0056 6.53375 12.5516 5.88562 11.8716 5.76562C11.1919 5.64563 10.5435 6.09969 10.4235 6.77969C10.4006 6.90875 10.4044 7.03531 10.4206 7.15875C10.7588 6.98469 11.1969 6.91625 11.6547 6.99687ZM13.0394 10.6625C11.6869 10.4241 10.5741 9.7775 9.93033 8.9775C9.79033 10.6578 10.9731 12.2075 12.7128 12.5144C14.4528 12.8212 16.0944 11.7694 16.5372 10.1425C15.6588 10.6741 14.3919 10.9009 13.0394 10.6625Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1343_6086", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "16", fill: "white" }) }) })
] }), a8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1343_6098)", children: /* @__PURE__ */ a.jsx("path", { d: "M18.6082 1.39177C17.7168 0.500621 16.5079 0 15.2474 0C13.987 0 12.7781 0.500621 11.8867 1.39177L10.7668 2.51208C9.88402 3.39362 9.38496 4.588 9.3781 5.83552L0.468728 15.8926C0.152726 16.25 -0.0151114 16.7145 -0.00059611 17.1914C0.0139192 17.6683 0.209696 18.1218 0.546853 18.4594L1.53787 19.4508C1.87548 19.788 2.32899 19.9839 2.80599 19.9984C3.28298 20.0129 3.74756 19.845 4.10506 19.5289L9.06248 15.1254V19.375C9.06248 19.5407 9.12833 19.6997 9.24554 19.8169C9.36275 19.9341 9.52172 20 9.68748 20H10.3125C10.4782 20 10.6372 19.9341 10.7544 19.8169C10.8716 19.6997 10.9375 19.5407 10.9375 19.375V13.4699L14.164 10.6215C15.4116 10.6146 16.6061 10.1157 17.4879 9.23318L18.6082 8.11287C19.4994 7.22157 20.0001 6.01275 20.0001 4.75232C20.0001 3.49189 19.4994 2.28307 18.6082 1.39177ZM2.86638 18.125L1.87498 17.1336L10.2012 7.73669L12.2633 9.79841L2.86638 18.125ZM14.1273 8.74998C14.0304 8.74554 13.9338 8.73615 13.8379 8.72185L11.2789 6.16287C11.2374 5.76426 11.2801 5.36138 11.4043 4.98036C11.5286 4.59934 11.7315 4.24869 12 3.95115L16.0492 7.99998C15.5246 8.48107 14.8391 8.7486 14.1273 8.74998ZM17.3746 6.6738L13.3258 2.62497C13.8697 2.12692 14.5852 1.85845 15.3225 1.8757C16.0598 1.89295 16.7619 2.1946 17.282 2.71755C18.3691 3.80427 18.3929 5.54685 17.3746 6.6738Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1343_6098", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), c8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1176_6054)", children: /* @__PURE__ */ a.jsx("path", { d: "M19.8234 4.57702C19.7063 4.10163 19.3387 3.72585 18.8664 3.5946C18.3938 3.46413 17.8836 3.5989 17.5395 3.94499L15.248 6.23523L13.9809 6.02429L13.7707 4.75827L16.0625 2.46765C16.4078 2.12038 16.5422 1.6114 16.4105 1.13991C16.2785 0.666868 15.9004 0.300071 15.4227 0.181712C13.3488 -0.333522 11.2074 0.262571 9.69844 1.77116C8.22852 3.2407 7.64375 5.3403 8.10781 7.36765L0.939063 14.5333C0.333203 15.1376 0 15.9419 0 16.7973C0 17.6528 0.333203 18.4571 0.939063 19.0618C1.54336 19.6665 2.34766 19.9997 3.20352 19.9997C4.0582 19.9997 4.8625 19.6665 5.46836 19.0618L12.6301 11.9032C14.6531 12.3669 16.7566 11.7805 18.2352 10.3044C19.723 8.81609 20.3324 6.62195 19.8234 4.57702ZM16.909 8.97898C15.7969 10.0907 14.1668 10.4673 12.6508 9.96374L12.1016 9.78054L4.14258 17.7364C3.64062 18.238 2.76406 18.2368 2.26484 17.7364C2.01328 17.4856 1.87539 17.152 1.87539 16.7973C1.87539 16.4426 2.01328 16.1094 2.26484 15.8587L10.2273 7.89851L10.0465 7.35046C9.54609 5.83093 9.9207 4.20124 11.0246 3.09656C11.8195 2.30281 12.868 1.87624 13.9559 1.87624H13.9996L11.7605 4.11452L12.3516 7.65319L15.8895 8.24265L18.1297 6.00476C18.1422 7.10866 17.7148 8.17351 16.909 8.97898ZM3.43789 15.938C3.09258 15.938 2.81289 16.2176 2.81289 16.563C2.81289 16.9083 3.09258 17.188 3.43789 17.188C3.7832 17.188 4.06289 16.9083 4.06289 16.563C4.06289 16.2176 3.7832 15.938 3.43789 15.938Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1176_6054", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
] }), u8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1438_8006)", children: /* @__PURE__ */ a.jsx("path", { d: "M16.1111 0H3.88891C3.75002 0 3.61808 0.0694444 3.54169 0.1875L0.0694672 5.29861C-0.0312273 5.45139 -0.0208106 5.65278 0.0937727 5.79167L9.67711 17.625C9.84377 17.8299 10.1563 17.8299 10.3229 17.625L19.9063 5.79167C20.0209 5.64931 20.0313 5.45139 19.9306 5.29861L16.4618 0.1875C16.382 0.0694444 16.2535 0 16.1111 0ZM15.441 1.66667L17.6389 5H15.2639L13.4688 1.66667H15.441ZM8.42363 1.66667H11.5729L13.3681 5H6.63197L8.42363 1.66667ZM4.55905 1.66667H6.53127L4.73613 5H2.36113L4.55905 1.66667ZM3.066 6.66667H4.85072L7.22225 12.2222L3.066 6.66667ZM6.63891 6.66667H13.3611L10 15.1146L6.63891 6.66667ZM12.7778 12.2222L15.1459 6.66667H16.9306L12.7778 12.2222Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1438_8006", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "17.7778", fill: "white" }) }) })
] }), d8 = ({ className: e }) => /* @__PURE__ */ a.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 12 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: [
  /* @__PURE__ */ a.jsx("g", { "clip-path": "url(#clip0_1836_6710)", children: /* @__PURE__ */ a.jsx("path", { d: "M8.27735 9.45703L3.73439 8.16016C3.1172 7.98438 2.6172 7.48828 2.51954 6.85156C2.3672 5.85938 3.13673 5 4.10157 5H6.98439C7.60548 5 8.21485 5.19531 8.71876 5.55078C8.96876 5.72656 9.3047 5.69922 9.51954 5.48438L10.4141 4.58984C10.6797 4.32422 10.6524 3.87891 10.3555 3.64844C9.39063 2.90234 8.21876 2.5 6.98439 2.5H6.87501V0.625C6.87501 0.28125 6.59376 0 6.25001 0H5.00001C4.65626 0 4.37501 0.28125 4.37501 0.625V2.5H4.27735C2.35548 2.5 0.582041 3.74219 0.121104 5.60938C-0.421865 7.80469 0.910166 9.95312 2.97267 10.543L7.51564 11.8398C8.13282 12.0156 8.63282 12.5117 8.73048 13.1484C8.88282 14.1406 8.11329 15 7.14845 15H4.26564C3.64454 15 3.03517 14.8047 2.53126 14.4492C2.28126 14.2734 1.94532 14.3008 1.73048 14.5156L0.835948 15.4102C0.570323 15.6758 0.597666 16.1211 0.894541 16.3516C1.85548 17.0977 3.02735 17.5 4.26564 17.5H4.37501V19.375C4.37501 19.7188 4.65626 20 5.00001 20H6.25001C6.59376 20 6.87501 19.7188 6.87501 19.375V17.5H6.97267C8.89454 17.5 10.668 16.2578 11.1289 14.3906C11.6719 12.1953 10.3399 10.0469 8.27735 9.45703Z", fill: "currentColor" }) }),
  /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1836_6710", children: /* @__PURE__ */ a.jsx("rect", { width: "11.25", height: "20", fill: "white" }) }) })
] }), f8 = ({ className: e }) => /* @__PURE__ */ a.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: e, children: /* @__PURE__ */ a.jsx("path", { d: "M21.17 2.06012C20.4532 1.93665 19.7273 1.8731 19 1.87012C16.5184 1.86809 14.0885 2.57969 12 3.92012C9.90614 2.59729 7.47664 1.90315 4.99999 1.92012C4.27264 1.9231 3.5468 1.98665 2.82999 2.11012C2.5952 2.1506 2.38257 2.27358 2.23041 2.45691C2.07824 2.64025 1.99653 2.87189 1.99999 3.11012V15.1101C1.99785 15.2571 2.02812 15.4027 2.08864 15.5366C2.14917 15.6705 2.23846 15.7894 2.35017 15.8849C2.46187 15.9803 2.59325 16.05 2.73495 16.089C2.87665 16.1279 3.02519 16.1351 3.16999 16.1101C4.60301 15.862 6.07119 15.9032 7.48806 16.2312C8.90492 16.5592 10.2418 17.1675 11.42 18.0201L11.54 18.0901H11.65C11.7609 18.1363 11.8798 18.1601 12 18.1601C12.1201 18.1601 12.2391 18.1363 12.35 18.0901H12.46L12.58 18.0201C13.75 17.1484 15.083 16.5205 16.5001 16.1735C17.9173 15.8265 19.3897 15.7675 20.83 16.0001C20.9748 16.0251 21.1233 16.0179 21.265 15.979C21.4067 15.94 21.5381 15.8703 21.6498 15.7749C21.7615 15.6794 21.8508 15.5605 21.9113 15.4266C21.9719 15.2927 22.0021 15.1471 22 15.0001V3.00012C21.9896 2.77228 21.9016 2.55483 21.7506 2.38386C21.5997 2.21289 21.3948 2.09866 21.17 2.06012ZM11 15.3501C9.14988 14.3768 7.09051 13.8688 4.99999 13.8701C4.66999 13.8701 4.33999 13.8701 3.99999 13.8701V3.87012C4.33305 3.85093 4.66694 3.85093 4.99999 3.87012C7.13338 3.86776 9.22021 4.49381 11 5.67012V15.3501ZM20 13.9101C19.66 13.9101 19.33 13.9101 19 13.9101C16.9095 13.9088 14.8501 14.4168 13 15.3901V5.67012C14.7798 4.49381 16.8666 3.86776 19 3.87012C19.333 3.85093 19.6669 3.85093 20 3.87012V13.9101ZM21.17 18.0601C20.4532 17.9367 19.7273 17.8731 19 17.8701C16.5184 17.8681 14.0885 18.5797 12 19.9201C9.91151 18.5797 7.48163 17.8681 4.99999 17.8701C4.27264 17.8731 3.5468 17.9367 2.82999 18.0601C2.69982 18.0808 2.57502 18.127 2.46276 18.196C2.3505 18.2651 2.25299 18.3557 2.17586 18.4625C2.09873 18.5694 2.04348 18.6905 2.0133 18.8188C1.98312 18.9471 1.97859 19.0801 1.99999 19.2101C2.05081 19.4698 2.20248 19.6988 2.42178 19.8468C2.64108 19.9949 2.91013 20.05 3.16999 20.0001C4.60301 19.752 6.07119 19.7932 7.48806 20.1212C8.90492 20.4492 10.2418 21.0575 11.42 21.9101C11.5894 22.0307 11.7921 22.0955 12 22.0955C12.2079 22.0955 12.4106 22.0307 12.58 21.9101C13.7582 21.0575 15.0951 20.4492 16.5119 20.1212C17.9288 19.7932 19.397 19.752 20.83 20.0001C21.0899 20.05 21.3589 19.9949 21.5782 19.8468C21.7975 19.6988 21.9492 19.4698 22 19.2101C22.0214 19.0801 22.0169 18.9471 21.9867 18.8188C21.9565 18.6905 21.9013 18.5694 21.8241 18.4625C21.747 18.3557 21.6495 18.2651 21.5372 18.196C21.425 18.127 21.3002 18.0808 21.17 18.0601Z", fill: "currentColor" }) }), I0 = {
  accessible: fh,
  address: f8,
  "arrow-down": mh,
  "arrow-left": hh,
  "arrow-right": gh,
  "arrow-up": ph,
  "balance-scale": sh,
  "cabinet-filing": rh,
  Calendar: $f,
  Cart: uh,
  chat: Th,
  check: Zh,
  "checkbox-empty": Hh,
  "checkbox-filled": Bh,
  ChevronLeft: M0,
  ChevronRight: A0,
  ChevronDown: Zf,
  ChevronTop: Wf,
  Clock: ch,
  close: Vh,
  "Close Circle": F0,
  "close-filled": zh,
  comment: Lh,
  compress: s8,
  copy: Uh,
  couch: oh,
  dollar: d8,
  donate: ah,
  diamond: u8,
  edit: Rh,
  Email: eh,
  exchange: o8,
  "Exclamation circle": O0,
  expand: r8,
  "Expand all": Yf,
  "external-link": Kh,
  "eye-on": Eh,
  "eye-off": Nh,
  "file-download": Gh,
  Filters: Gf,
  gift: Ih,
  "gift-card": Dh,
  grid: jh,
  headphones: Qf,
  heart: bh,
  "heart-filled": vh,
  Home: Df,
  keyboard: t8,
  link: Xf,
  list: Ah,
  location: wh,
  lock: Qh,
  menu: Mh,
  membership: Jh,
  minus: Ch,
  "minus-circle": yh,
  news: Ph,
  personalize: $h,
  Print: Uf,
  play: _h,
  plus: xh,
  "Plus Circle": qf,
  Receipt: Jf,
  ring: n8,
  scan: i8,
  Search: Kf,
  Settings: th,
  share: Wh,
  "sign-in": Xh,
  "Sign out": Hf,
  speaker: a8,
  star: Sh,
  "star-filled": kh,
  swap: Fh,
  tag: nh,
  trash: Oh,
  theatre: l8,
  Ticket: Rf,
  tools: c8,
  "2FA": qh,
  "usd-circle": ih,
  user: Yh,
  "user-cog": lh,
  users: Pf,
  "user-alt": dh,
  unlock: e8
}, op = ({
  showLabels: e = !0,
  size: n = "md",
  className: t = ""
}) => {
  const {
    currentTheme: r,
    currentMode: s,
    setTheme: i,
    setMode: o,
    getColorValue: l,
    availableThemes: c,
    availableModes: u
  } = j0(), d = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4"
  }, f = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }, h = {
    default: nc,
    training: Bf,
    ocean: Vf
  }, g = {
    light: rc,
    dark: zf
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `space-y-6 ${t}`, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      e && /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-medium text-text-primary mb-3", children: "Select Theme" }),
      /* @__PURE__ */ a.jsx("div", { className: "flex gap-2", children: c.map((p) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => i(p),
          className: `
                ${d[n]}
                rounded-lg border-2 transition-all duration-200
                ${r === p ? "border-cta-accent bg-cta-accent/10 text-cta-accent" : "border-button-grey hover:border-cta-accent/50 text-text-secondary"}
              `,
          children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            rr.createElement(h[p] || nc, {
              className: "w-4 h-4"
            }),
            e && /* @__PURE__ */ a.jsx("span", { className: "text-xs font-medium capitalize", children: p })
          ] })
        },
        p
      )) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { children: [
      e && /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-medium text-text-primary mb-3", children: "Select Mode" }),
      /* @__PURE__ */ a.jsx("div", { className: "flex gap-2", children: u.map((p) => /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => o(p),
          className: `
                ${d[n]}
                rounded-lg border-2 transition-all duration-200
                ${s === p ? "border-cta-accent bg-cta-accent/10 text-cta-accent" : "border-button-grey hover:border-cta-accent/50 text-text-secondary"}
              `,
          children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            rr.createElement(g[p] || rc, {
              className: "w-4 h-4"
            }),
            e && /* @__PURE__ */ a.jsx("span", { className: "text-xs font-medium capitalize", children: p })
          ] })
        },
        p
      )) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { children: [
      e && /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-medium text-text-primary mb-3", children: "Color Preview" }),
      /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Cr.slice(0, 4).map((p) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "bg-surface-primary border border-button-grey rounded-lg p-4",
          children: [
            /* @__PURE__ */ a.jsx("h4", { className: "text-sm font-medium text-text-primary mb-3 capitalize", children: p.name.replace("-", " ") }),
            /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-4 gap-2", children: ["default", "hover", "active", "disabled"].map(
              (C) => {
                const m = l(p.name, C);
                return /* @__PURE__ */ a.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      className: `${f[n]} rounded mx-auto mb-1`,
                      style: { backgroundColor: m || "#ccc" }
                    }
                  ),
                  /* @__PURE__ */ a.jsx("p", { className: "text-xs text-text-secondary capitalize", children: C })
                ] }, C);
              }
            ) })
          ]
        },
        p.name
      )) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { children: [
      e && /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-medium text-text-primary mb-3", children: "Use demonstration" }),
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
          /* @__PURE__ */ a.jsx("button", { className: "bg-cta-accent text-white px-4 py-2 rounded-lg hover:bg-cta-accent-hover active:bg-cta-accent-active transition-colors", children: "CTA Accent" }),
          /* @__PURE__ */ a.jsx("button", { className: "bg-cta-hover text-white px-4 py-2 rounded-lg hover:bg-cta-hover-hover active:bg-cta-hover-active transition-colors", children: "CTA Hover" }),
          /* @__PURE__ */ a.jsx("button", { className: "bg-button-grey text-text-primary px-4 py-2 rounded-lg hover:bg-button-grey-hover transition-colors", children: "Button Grey" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ a.jsx(Da, { className: "bg-cta-primary", value: "This is the input" }) }),
        /* @__PURE__ */ a.jsxs("div", { className: "bg-surface-primary border border-button-grey rounded-lg p-4", children: [
          /* @__PURE__ */ a.jsx("h4", { className: "text-text-primary font-medium mb-2", children: "Card" }),
          /* @__PURE__ */ a.jsx("p", { className: "text-text-secondary text-sm", children: "This is an example of a card to see the color changes." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "bg-cta-accent/10 border border-cta-accent/20 rounded-lg p-4", children: [
      /* @__PURE__ */ a.jsx("h4", { className: "text-sm font-medium text-cta-accent mb-2", children: "Technical Information" }),
      /* @__PURE__ */ a.jsxs("div", { className: "text-xs text-text-secondary space-y-1", children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Current Theme:" }),
          " ",
          r
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Current Mode:" }),
          " ",
          s
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Current Variant:" }),
          " ",
          r,
          "-",
          s
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Available themes:" }),
          " ",
          c.join(", ")
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Available modes:" }),
          " ",
          u.join(", ")
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "States:" }),
          " default, hover, active, disabled"
        ] }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          /* @__PURE__ */ a.jsx("strong", { children: "Tailwind use:" }),
          " ",
          /* @__PURE__ */ a.jsx("code", { className: "bg-surface-primary px-1 rounded", children: "bg-cta-accent" }),
          ",",
          " ",
          /* @__PURE__ */ a.jsx("code", { className: "bg-surface-primary px-1 rounded", children: "bg-cta-accent-hover" }),
          ", etc."
        ] })
      ] })
    ] })
  ] });
}, h8 = {
  success: "bg-emerald-200 text-emerald-900 border-emerald-300",
  warning: "bg-amber-200 text-amber-900 border-amber-300",
  danger: "bg-rose-200 text-rose-900 border-rose-300",
  info: "bg-sky-200 text-sky-900 border-sky-300",
  neutral: "bg-slate-200 text-slate-800 border-slate-300",
  accent: "bg-blue-200 text-blue-900 border-blue-300"
}, g8 = {
  success: "bg-emerald-500 text-white border-transparent",
  warning: "bg-amber-500 text-slate-900 border-transparent",
  danger: "bg-rose-500 text-white border-transparent",
  info: "bg-sky-500 text-white border-transparent",
  neutral: "bg-slate-500 text-white border-transparent",
  accent: "bg-blue-600 text-white border-transparent"
}, p8 = {
  sm: "px-2 py-1 text-xs gap-1",
  md: "px-3 py-1.5 text-sm gap-2"
}, D0 = ({
  label: e,
  variant: n = "neutral",
  size: t = "sm",
  icon: r,
  uppercase: s = !0,
  soft: i = !0,
  className: o,
  ...l
}) => {
  const c = "inline-flex items-center rounded-full font-semibold tracking-wide border transition-colors duration-150", u = i ? h8[n] : g8[n], d = p8[t];
  return /* @__PURE__ */ a.jsxs(
    "span",
    {
      className: q(
        c,
        u,
        d,
        s && "uppercase",
        s && "tracking-[0.18em]",
        o
      ),
      ...l,
      children: [
        r && /* @__PURE__ */ a.jsx("span", { className: "flex items-center justify-center", children: r }),
        /* @__PURE__ */ a.jsx("span", { className: "flex items-center justify-center", children: e })
      ]
    }
  );
};
D0.displayName = "StatusPill";
const Ul = un(
  ({
    variant: e = "primary",
    size: n = "md",
    loading: t = !1,
    disabled: r = !1,
    leftIcon: s = null,
    rightIcon: i = null,
    children: o,
    className: l,
    onClick: c,
    type: u = "button",
    ...d
  }, f) => {
    const h = "inline-flex justify-center items-center gap-2 rounded-lg font-bold font-['Muli'] uppercase tracking-widest course ", g = {
      primary: "bg-cta-accent hover:bg-cta-accent-hover active:bg-cta-accent-active disabled:bg-cta-accent-disabled text-base text-white px-4 py-2 rounded-lg",
      secondary: "outline outline-2 outline-offset-[-2px] outline-sky-500 text-text-secondary",
      tertiary: "bg-gray-300 text-text-primary text-base"
    }, p = {
      xs: "h-10 px-2 text-sm",
      sm: "h-12 px-2 text-base",
      md: "h-14 px-4 text-base",
      lg: "h-16 px-6 text-base",
      wide: "h-16 px-8 text-base"
    }, C = {
      loading: t ? "opacity-75 cursor-not-allowed" : "",
      disabled: r ? "opacity-50 cursor-not-allowed" : ""
    }, m = q(
      h,
      g[e],
      p[n],
      C.loading,
      C.disabled,
      l
    );
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        ref: f,
        className: m,
        disabled: r || t,
        onClick: c,
        type: u,
        ...d,
        children: [
          s && s,
          t && /* @__PURE__ */ a.jsx("span", { className: "animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" }),
          /* @__PURE__ */ a.jsx("div", { className: "p-2.5 flex justify-center items-center gap-2.5 focus:outline focus:outline-1 focus:outline-offset-[-1px] focus:outline-violet-500", children: /* @__PURE__ */ a.jsx("div", { className: "justify-center", children: o }) }),
          i && i
        ]
      }
    );
  }
);
Ul.displayName = "CTA";
function lp({
  checked: e,
  defaultChecked: n = !1,
  onChange: t,
  disabled: r = !1,
  size: s = "md",
  label: i,
  className: o = ""
}) {
  const l = e !== void 0, [c, u] = ce(n), d = l ? e : c, f = () => {
    if (r) return;
    const C = !d;
    l || u(C), t == null || t(C);
  }, h = {
    sm: "w-12 h-6",
    md: "w-16 h-8",
    lg: "w-20 h-10"
  }, g = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }, p = {
    sm: d ? "translate-x-6" : "translate-x-1",
    md: d ? "translate-x-8" : "translate-x-1",
    lg: d ? "translate-x-10" : "translate-x-1"
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `flex items-center gap-3 ${o}`, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: f,
        disabled: r,
        className: `
          relative inline-flex items-center
          ${h[s]}
          rounded-full transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${r ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          ${d ? "bg-cta-accent hover:bg-cta-hover" : "bg-gray-200 hover:bg-gray-300"}
        `,
        role: "switch",
        "aria-checked": d,
        "aria-label": i || "Toggle",
        children: /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `
            ${g[s]}
            bg-white rounded-full shadow-md
            transform transition-transform duration-200 ease-in-out
            ${p[s]}
          `
          }
        )
      }
    ),
    i && /* @__PURE__ */ a.jsx("span", { className: `text-sm dark:text-gray-200 font-medium ${r ? "text-gray-400" : "text-gray-700"}`, children: i })
  ] });
}
const $a = un(({
  children: e,
  className: n,
  variant: t = "default",
  padding: r = "md",
  shadow: s = "md",
  hover: i = !1,
  interactive: o = !1,
  onClick: l,
  fullWidth: c = !1,
  size: u = "auto",
  showOutline: d = !1,
  outlineColor: f = "cta-accent",
  rounded: h = "lg",
  bgVariant: g = "primary",
  layout: p = "vertical",
  alignContent: C = "center",
  ...m
}, x) => {
  const y = {
    auto: c ? "w-full" : "w-auto",
    "fixed-56": "size-56",
    "fixed-32": "h-32"
  }, _ = {
    primary: "bg-surface-primary",
    secondary: "bg-surface-secondary",
    "cards-01": "bg-[#EBEFF6]",
    // surface-cards-01 color
    white: "bg-white"
  }, v = {
    lg: "rounded-lg",
    "10px": "rounded-[10px]"
  }, w = d ? q(
    "outline outline-[3px] outline-offset-[-3px]",
    f === "accent" && "outline-border-accent",
    f === "stroke-accent" && "outline-[#0273CF]",
    // stroke-accent color #0273CF
    f === "cta-accent" && "outline-cta-accent"
  ) : "", E = q(
    p === "vertical" ? "flex-col" : "flex-row",
    C === "center" && "justify-center items-center",
    C === "start" && "justify-start items-start",
    C === "end" && "justify-start items-end"
  ), N = q(
    "transition-all duration-200 inline-flex",
    y[u],
    _[g],
    v[h],
    E,
    w,
    l || o ? "cursor-pointer" : ""
  ), S = {
    default: "",
    bordered: "border border-border-accent",
    outlined: "bg-transparent border-2 border-border-accent",
    elevated: "",
    flat: "bg-surface-secondary"
  }, k = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
  }, L = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
    xl: "p-10"
  }, A = i ? q(
    "hover:shadow-lg",
    "hover:-translate-y-1",
    !d && "hover:outline",
    !d && "hover:outline-[3px]",
    !d && "hover:outline-offset-[-3px]",
    !d && "hover:outline-cta-accent"
  ) : "", H = o ? q(
    "hover:bg-surface-secondary",
    "active:bg-surface-secondary"
  ) : "", G = q(
    N,
    S[t],
    k[s],
    L[r],
    A,
    H,
    n
  );
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: x,
      className: G,
      onClick: l,
      role: l ? "button" : void 0,
      tabIndex: l ? 0 : void 0,
      onKeyDown: l ? (O) => {
        (O.key === "Enter" || O.key === " ") && (O.preventDefault(), l());
      } : void 0,
      ...m,
      children: e
    }
  );
});
$a.displayName = "Card";
const m8 = un(({
  icon: e,
  title: n,
  showOutline: t = !1,
  onClick: r,
  className: s
}, i) => /* @__PURE__ */ a.jsxs(
  $a,
  {
    ref: i,
    variant: "default",
    size: "fixed-56",
    bgVariant: "secondary",
    layout: "vertical",
    alignContent: "center",
    showOutline: t,
    outlineColor: "stroke-accent",
    padding: "none",
    shadow: "none",
    onClick: r,
    className: q("flex-col justify-center items-center", s),
    children: [
      e && /* @__PURE__ */ a.jsx("div", { className: "size-16 relative overflow-hidden flex items-center justify-center", children: e }),
      /* @__PURE__ */ a.jsx("div", { className: "w-44 h-16 text-center justify-center text-text-primary text-2xl font-semibold font-['Mulish']", children: n })
    ]
  }
));
m8.displayName = "GiftCertificateCard";
const x8 = un(({
  children: e,
  bgVariant: n = "white",
  showOutline: t = !0,
  onClick: r,
  className: s
}, i) => /* @__PURE__ */ a.jsx(
  $a,
  {
    ref: i,
    variant: "default",
    size: "fixed-32",
    bgVariant: n,
    rounded: "10px",
    showOutline: t,
    outlineColor: "cta-accent",
    padding: "md",
    shadow: "none",
    layout: "vertical",
    alignContent: "center",
    onClick: r,
    className: q("flex justify-center items-center gap-2.5 overflow-hidden", s),
    children: e
  }
));
x8.displayName = "SchoolChurchCard";
const _s = 4, sc = 8;
function C8({
  data: e,
  columns: n,
  selectable: t = !0,
  selectedRows: r,
  sortColumn: s,
  sortDirection: i,
  onSort: o,
  onRowSelect: l,
  onSelectAll: c,
  expandableRow: u,
  expandedRows: d = /* @__PURE__ */ new Set(),
  onToggleExpand: f,
  rowActions: h,
  stickyHeader: g = !1
}) {
  const [p, C] = ce(null), m = Kt(null), x = e.length > 0 && r.length === e.length, y = r.length > 0 && r.length < e.length, _ = h && h.length > 0;
  we(() => {
    if (!p) return;
    function O(X) {
      m.current && !m.current.contains(X.target) && C(null);
    }
    function K(X) {
      X.key === "Escape" && C(null);
    }
    return document.addEventListener("pointerdown", O), document.addEventListener("keydown", K), () => {
      document.removeEventListener("pointerdown", O), document.removeEventListener("keydown", K);
    };
  }, [p]), xr(() => {
    if (!p || !m.current) return;
    const O = m.current.offsetHeight, K = window.innerHeight - p.triggerBottom - _s, X = p.triggerTop - _s;
    let se = p.triggerBottom + _s;
    O > K && X > K && (se = p.triggerTop - O - _s), se = Math.min(
      se,
      window.innerHeight - O - sc
    ), se = Math.max(sc, se), se !== p.top && C((ee) => ee ? { ...ee, top: se } : null);
  }, [p == null ? void 0 : p.rowId, p == null ? void 0 : p.triggerBottom]);
  function v(O, K) {
    if ((p == null ? void 0 : p.rowId) === K) {
      C(null);
      return;
    }
    const X = O.currentTarget.getBoundingClientRect();
    C({
      rowId: K,
      top: X.bottom + _s,
      right: window.innerWidth - X.right,
      triggerTop: X.top,
      triggerBottom: X.bottom
    });
  }
  function w(O, K) {
    C(null), O.onClick(K);
  }
  const E = (O) => s !== O ? /* @__PURE__ */ a.jsx(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a.jsx("path", { d: "M8 4L12 8H4L8 4Z", fill: "currentColor", opacity: "0.3" })
    }
  ) : i === "asc" ? /* @__PURE__ */ a.jsx(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a.jsx("path", { d: "M8 4L4 8H12L8 4Z", fill: "currentColor" })
    }
  ) : /* @__PURE__ */ a.jsx(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a.jsx("path", { d: "M8 12L12 8H4L8 12Z", fill: "currentColor" })
    }
  ), N = (O, K) => {
    if (O.render)
      return O.render(K[O.key], K);
    const X = K[O.key];
    if (O.key === "status") {
      const se = {
        Pending: "bg-amber-300",
        Confirmed: "bg-green-300",
        Cancelled: "bg-red-300",
        Completed: "bg-blue-300"
      };
      return /* @__PURE__ */ a.jsx(
        "div",
        {
          className: `px-2 py-1 ${se[X] || "bg-gray-300"} rounded-full text-xs font-medium`,
          children: X
        }
      );
    }
    return /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-800 font-normal line-clamp-2", children: X });
  };
  if (e.length === 0)
    return /* @__PURE__ */ a.jsx("div", { className: "w-full h-40 flex items-center justify-center bg-white rounded-lg border", children: /* @__PURE__ */ a.jsx("div", { className: "text-gray-500 text-sm", children: "No data to show." }) });
  const S = (h == null ? void 0 : h.filter((O) => O.variant !== "danger")) ?? [], k = (h == null ? void 0 : h.filter((O) => O.variant === "danger")) ?? [], L = p ? e.find((O, K) => (O.id ?? K.toString()) === p.rowId) : null, A = g === !0 ? {} : g || null, H = (A == null ? void 0 : A.maxHeight) !== void 0, G = A ? H ? "overflow-auto" : "overflow-x-scroll md:overflow-clip" : "overflow-x-scroll md:overflow-hidden";
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `w-full bg-white rounded-b-lg border border-gray-200 ${G}`,
        style: H ? { maxHeight: A == null ? void 0 : A.maxHeight } : void 0,
        children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: `bg-gray-50 border-b border-gray-200 ${A ? "sticky z-10" : ""}`,
              style: A ? { top: A.offset ?? 0 } : void 0,
              children: /* @__PURE__ */ a.jsxs("div", { className: "flex", children: [
                t && /* @__PURE__ */ a.jsx("div", { className: "w-16 p-4 flex items-center justify-center", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: x,
                    ref: (O) => {
                      O && (O.indeterminate = y);
                    },
                    onChange: c,
                    className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  }
                ) }),
                n.map((O) => /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `flex-1 p-4 ${O.width ? O.width : ""}`,
                    children: /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        onClick: () => O.sortable && o(O.key),
                        className: `w-full flex items-center justify-between text-sm font-semibold text-gray-800 uppercase tracking-wider ${O.sortable ? "cursor-pointer hover:text-blue-600" : "cursor-default"}`,
                        disabled: !O.sortable,
                        children: [
                          O.label,
                          O.sortable && /* @__PURE__ */ a.jsx("span", { className: "ml-2 text-gray-400", children: E(O.key) })
                        ]
                      }
                    )
                  },
                  O.key
                )),
                _ && /* @__PURE__ */ a.jsx("div", { className: "w-16 p-4" })
              ] })
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "divide-y divide-gray-200", children: e.map((O, K) => {
            const X = O.id ?? K.toString(), se = (u == null ? void 0 : u.enabled) && d.has(X), ee = (u == null ? void 0 : u.enabled) && (u.expandableField ? O[u.expandableField] : u.renderExpandedContent), R = (p == null ? void 0 : p.rowId) === X;
            return /* @__PURE__ */ a.jsxs(rr.Fragment, { children: [
              /* @__PURE__ */ a.jsxs("div", { className: "flex hover:bg-gray-50", children: [
                t && /* @__PURE__ */ a.jsx("div", { className: "w-16 p-4 flex items-center justify-center", children: /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.includes(X),
                    onChange: () => l(X),
                    className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  }
                ) }),
                n.map((V) => /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    className: `flex-1 p-4 ${V.width ? V.width : ""} ${V.maxWidth ? V.maxWidth : ""}`,
                    children: N(V, O)
                  },
                  V.key
                )),
                _ && /* @__PURE__ */ a.jsxs("div", { className: "w-16 p-4 flex items-center justify-center", children: [
                  /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      onClick: (V) => v(V, X),
                      "aria-label": "Row actions",
                      "aria-expanded": R,
                      className: `rounded-md p-1 transition-colors ${R ? "bg-gray-100 text-gray-700" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"}`,
                      children: /* @__PURE__ */ a.jsx(
                        "svg",
                        {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          children: /* @__PURE__ */ a.jsx("path", { d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" })
                        }
                      )
                    }
                  ),
                  ee && /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      onClick: () => f == null ? void 0 : f(X),
                      className: "text-gray-400 hover:text-gray-600",
                      "aria-label": se ? "Collapse row" : "Expand row",
                      children: /* @__PURE__ */ a.jsx(
                        "svg",
                        {
                          width: "12",
                          height: "8",
                          viewBox: "0 0 12 8",
                          fill: "none",
                          className: `transition-transform ${se ? "rotate-180" : ""}`,
                          children: /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M1 1L6 6L11 1",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      )
                    }
                  )
                ] })
              ] }),
              se && ee && /* @__PURE__ */ a.jsx("div", { className: "bg-gray-50 border-t border-gray-200", children: u.renderExpandedContent ? u.renderExpandedContent(O) : u.expandableField && O[u.expandableField] ? /* @__PURE__ */ a.jsx("div", { className: "p-4", children: Array.isArray(O[u.expandableField]) && O[u.expandableField].length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: O[u.expandableField].map(
                (V, F) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    className: "p-4 border-b border-slate-100 last:border-b-0 flex justify-between items-center bg-white rounded",
                    children: [
                      /* @__PURE__ */ a.jsx("div", { className: "w-48 text-sm font-semibold text-neutral-900", children: V.name }),
                      /* @__PURE__ */ a.jsxs("div", { className: "w-14 text-right text-sm font-normal text-neutral-900", children: [
                        "Qty: ",
                        V.qty ?? "n/a"
                      ] }),
                      /* @__PURE__ */ a.jsx("div", { className: "w-14 text-right text-sm font-semibold text-neutral-900", children: V.price ?? "$0.00" })
                    ]
                  },
                  F
                )
              ) }) : /* @__PURE__ */ a.jsx("div", { className: "text-sm text-gray-500", children: "No items available" }) }) : null })
            ] }, X);
          }) })
        ]
      }
    ),
    p && L && _ && /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: m,
        role: "menu",
        "aria-label": "Row actions",
        style: {
          position: "fixed",
          top: p.top,
          right: p.right,
          zIndex: 50
        },
        className: "w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
        children: [
          S.map((O) => /* @__PURE__ */ a.jsxs(
            "button",
            {
              role: "menuitem",
              disabled: O.disabled,
              onClick: () => w(O, L),
              className: [
                "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                O.disabled ? "cursor-not-allowed text-gray-300" : "cursor-pointer text-gray-700 hover:bg-gray-50"
              ].join(" "),
              children: [
                O.icon && /* @__PURE__ */ a.jsx("span", { className: "flex h-4 w-4 shrink-0 items-center justify-center text-gray-400", children: O.icon }),
                O.label
              ]
            },
            O.label
          )),
          S.length > 0 && k.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "my-1 border-t border-gray-100" }),
          k.map((O) => /* @__PURE__ */ a.jsxs(
            "button",
            {
              role: "menuitem",
              disabled: O.disabled,
              onClick: () => w(O, L),
              className: [
                "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors",
                O.disabled ? "cursor-not-allowed text-red-200" : "cursor-pointer text-red-600 hover:bg-red-50"
              ].join(" "),
              children: [
                O.icon && /* @__PURE__ */ a.jsx("span", { className: "flex h-4 w-4 shrink-0 items-center justify-center text-red-400", children: O.icon }),
                O.label
              ]
            },
            O.label
          ))
        ]
      }
    )
  ] });
}
function y8({
  isOpen: e,
  onClose: n,
  anchorRect: t,
  children: r,
  className: s,
  align: i = "right"
}) {
  const o = Kt(null);
  if (we(() => {
    if (!e) return;
    function c(d) {
      o.current && !o.current.contains(d.target) && n();
    }
    function u(d) {
      d.key === "Escape" && n();
    }
    return document.addEventListener("pointerdown", c), document.addEventListener("keydown", u), () => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    };
  }, [e, n]), !e || !t) return null;
  const l = i === "right" ? { top: t.bottom + 4, right: window.innerWidth - t.right } : { top: t.bottom + 4, left: t.left };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: o,
      style: { position: "fixed", zIndex: 50, ...l },
      className: `rounded-lg border border-gray-200 bg-white shadow-lg ${s ?? ""}`,
      children: r
    }
  );
}
function _8({ filter: e, value: n, onChange: t }) {
  var r, s;
  switch (e.type) {
    case "boolean": {
      const i = [
        { label: "All", val: void 0 },
        { label: "Yes", val: !0 },
        { label: "No", val: !1 }
      ];
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e.label }),
        /* @__PURE__ */ a.jsx("div", { className: "flex gap-1.5", children: i.map((o) => /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: () => t(o.val),
            className: `px-3 py-1 rounded-full text-xs font-medium transition-colors ${n === o.val ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
            children: o.label
          },
          String(o.val)
        )) })
      ] });
    }
    case "select":
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e.label }),
        /* @__PURE__ */ a.jsx("div", { className: "space-y-1", children: (r = e.options) == null ? void 0 : r.map((i) => {
          const o = n === i.value;
          return /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => t(o ? void 0 : i.value),
              className: `w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${o ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"}`,
              children: i.label
            },
            i.value
          );
        }) })
      ] });
    case "multiselect": {
      const i = Array.isArray(n) ? n : [];
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e.label }),
        /* @__PURE__ */ a.jsx("div", { className: "space-y-1", children: (s = e.options) == null ? void 0 : s.map((o) => {
          const l = i.includes(o.value);
          return /* @__PURE__ */ a.jsxs(
            "label",
            {
              className: "flex items-center gap-2.5 cursor-pointer px-1 py-1 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: l,
                    onChange: () => {
                      const c = l ? i.filter((u) => u !== o.value) : [...i, o.value];
                      t(c.length > 0 ? c : void 0);
                    },
                    className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  }
                ),
                /* @__PURE__ */ a.jsx("span", { className: "text-sm text-gray-700", children: o.label })
              ]
            },
            o.value
          );
        }) })
      ] });
    }
    case "text":
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e.label }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "text",
            value: n ?? "",
            onChange: (i) => t(i.target.value || void 0),
            placeholder: `Filtrar por ${e.label.toLowerCase()}…`,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] });
    case "number":
      return /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("div", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e.label }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "number",
            value: n ?? "",
            onChange: (i) => t(i.target.value !== "" ? Number(i.target.value) : void 0),
            placeholder: `Filtrar por ${e.label.toLowerCase()}…`,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] });
    default:
      return null;
  }
}
function b8({
  isOpen: e,
  onClose: n,
  anchorRect: t,
  filters: r,
  activeFilters: s,
  onChange: i,
  onClearAll: o,
  className: l
}) {
  const c = Object.keys(s).length > 0;
  return /* @__PURE__ */ a.jsxs(
    y8,
    {
      isOpen: e,
      onClose: n,
      anchorRect: t,
      className: `w-72 ${l ?? ""}`,
      align: "left",
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-gray-100", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-sm font-semibold text-gray-800", children: "Filters" }),
          c && /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: o,
              className: "text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors",
              children: "Clear all"
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "px-4 py-3 space-y-5 max-h-96 overflow-y-auto", children: r.length === 0 ? /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-400 text-center py-2", children: "No filters available" }) : r.map((u) => /* @__PURE__ */ a.jsx(
          _8,
          {
            filter: u,
            value: s[u.key],
            onChange: (d) => i(u.key, d)
          },
          u.key
        )) })
      ]
    }
  );
}
function v8(e, n) {
  var r, s, i, o;
  const t = [];
  for (const [l, c] of Object.entries(n)) {
    if (c == null || c === "") continue;
    const u = e.find((d) => d.key === l);
    if (u)
      if (u.type === "multiselect" && Array.isArray(c))
        for (const d of c) {
          const f = ((s = (r = u.options) == null ? void 0 : r.find((h) => h.value === d)) == null ? void 0 : s.label) ?? d;
          t.push({ filterKey: l, label: `${u.label}: ${f}`, value: d });
        }
      else if (u.type === "boolean")
        t.push({
          filterKey: l,
          label: `${u.label}: ${c === !0 ? "Yes" : "No"}`
        });
      else if (u.type === "select") {
        const d = ((o = (i = u.options) == null ? void 0 : i.find((f) => f.value === String(c))) == null ? void 0 : o.label) ?? String(c);
        t.push({ filterKey: l, label: `${u.label}: ${d}` });
      } else
        t.push({ filterKey: l, label: `${u.label}: ${c}` });
  }
  return t;
}
function w8({
  searchable: e = !0,
  filterable: n = !0,
  searchTerm: t,
  onSearchChange: r,
  bulkActions: s,
  onBulkAction: i,
  selectedCount: o,
  totalCount: l,
  filterDefinitions: c,
  activeFilters: u,
  onFilterChange: d,
  onClearAllFilters: f
}) {
  const [h, g] = ce(!1), [p, C] = ce(null), m = Kt(null), x = Object.keys(u).length, y = v8(c, u), _ = () => {
    var E;
    if (h) {
      g(!1);
      return;
    }
    const w = ((E = m.current) == null ? void 0 : E.getBoundingClientRect()) ?? null;
    C(w), g(!0);
  }, v = (w) => {
    if (w.value !== void 0) {
      const E = u[w.filterKey], S = (Array.isArray(E) ? E : []).filter((k) => k !== w.value);
      d(w.filterKey, S.length > 0 ? S : void 0);
    } else
      d(w.filterKey, void 0);
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "w-full rounded-t-lg p-4 bg-white border-b border border-gray-200", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
        s.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ a.jsx("div", { className: "text-sm font-semibold text-gray-600", children: "Bulk actions" }),
          o > 0 && /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-blue-600 font-medium", children: [
            o,
            " of ",
            l,
            " selected"
          ] }),
          /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-2", children: s.map((w) => /* @__PURE__ */ a.jsxs(
            "button",
            {
              disabled: o === 0,
              className: "h-10 px-4 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-md flex items-center gap-2 transition-colors",
              onClick: () => i(w.action, []),
              children: [
                w.icon,
                /* @__PURE__ */ a.jsx("span", { className: "text-sm font-semibold text-gray-600 md:block hidden", children: w.label })
              ]
            },
            w.action
          )) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
          e && /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ a.jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ a.jsx(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "text-gray-400",
                children: /* @__PURE__ */ a.jsx("path", { d: "M20.3457 18.3164L15.6035 13.5742C15.5137 13.4844 15.3965 13.4375 15.2715 13.4375H14.7559C15.9863 12.0117 16.7324 10.1562 16.7324 8.125C16.7324 3.63672 13.0957 0 8.60742 0C4.11914 0 0.482422 3.63672 0.482422 8.125C0.482422 12.6133 4.11914 16.25 8.60742 16.25C10.6387 16.25 12.4941 15.5039 13.9199 14.2734V14.7891C13.9199 14.9141 13.9707 15.0312 14.0566 15.1211L18.7988 19.8633C18.9824 20.0469 19.2793 20.0469 19.4629 19.8633L20.3457 18.9805C20.5293 18.7969 20.5293 18.5 20.3457 18.3164ZM8.60742 14.375C5.1543 14.375 2.35742 11.5781 2.35742 8.125C2.35742 4.67188 5.1543 1.875 8.60742 1.875C12.0605 1.875 14.8574 4.67188 14.8574 8.125C14.8574 11.5781 12.0605 14.375 8.60742 14.375Z" })
              }
            ) }),
            /* @__PURE__ */ a.jsx(
              Da,
              {
                type: "text",
                placeholder: "Search...",
                value: t,
                onChange: (w) => r(w.target.value)
              }
            )
          ] }),
          n && c.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "relative", children: /* @__PURE__ */ a.jsxs(
            "button",
            {
              ref: m,
              type: "button",
              onClick: _,
              "aria-label": "Open filters",
              "aria-expanded": h,
              className: `relative p-2 rounded-md transition-colors ${h || x > 0 ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}`,
              children: [
                /* @__PURE__ */ a.jsx(
                  "svg",
                  {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ a.jsx("path", { d: "M10.8799 13.75H9.94238V0.625C9.94238 0.28125 9.66113 0 9.31738 0H8.69238C8.34863 0 8.06738 0.28125 8.06738 0.625V13.75H7.12988C6.78613 13.75 6.50488 14.0312 6.50488 14.375V15.625C6.50488 15.9688 6.78613 16.25 7.12988 16.25H8.06738V19.375C8.06738 19.7188 8.34863 20 8.69238 20H9.31738C9.66113 20 9.94238 19.7188 9.94238 19.375V16.25H10.8799C11.2236 16.25 11.5049 15.9688 11.5049 15.625V14.375C11.5049 14.0312 11.2236 13.75 10.8799 13.75ZM4.62988 3.75H3.69238V0.625C3.69238 0.28125 3.41113 0 3.06738 0H2.44238C2.09863 0 1.81738 0.28125 1.81738 0.625V3.75H0.879883C0.536133 3.75 0.254883 4.03125 0.254883 4.375V5.625C0.254883 5.96875 0.536133 6.25 0.879883 6.25H1.81738V19.375C1.81738 19.7188 2.09863 20 2.44238 20H3.06738C3.41113 20 3.69238 19.7188 3.69238 19.375V6.25H4.62988C4.97363 6.25 5.25488 5.96875 5.25488 5.625V4.375C5.25488 4.03125 4.97363 3.75 4.62988 3.75ZM17.1299 8.75H16.1924V0.625C16.1924 0.28125 15.9111 0 15.5674 0H14.9424C14.5986 0 14.3174 0.28125 14.3174 0.625V8.75H13.3799C13.0361 8.75 12.7549 9.03125 12.7549 9.375V10.625C12.7549 10.9688 13.0361 11.25 13.3799 11.25H14.3174V19.375C14.3174 19.7188 14.5986 20 14.9424 20H15.5674C15.9111 20 16.1924 19.7188 16.1924 19.375V11.25H17.1299C17.4736 11.25 17.7549 10.9688 17.7549 10.625V9.375C17.7549 9.03125 17.4736 8.75 17.1299 8.75Z" })
                  }
                ),
                x > 0 && /* @__PURE__ */ a.jsx("span", { className: "absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-bold leading-none", children: x })
              ]
            }
          ) })
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100", children: [
        y.map((w, E) => /* @__PURE__ */ a.jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium",
            children: [
              w.label,
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => v(w),
                  "aria-label": `Remove filter ${w.label}`,
                  className: "flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 transition-colors text-blue-500",
                  children: /* @__PURE__ */ a.jsx("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "currentColor", children: /* @__PURE__ */ a.jsx("path", { d: "M7.5 1.5L4 5 0.5 1.5M0.5 6.5L4 3l3.5 3.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", fill: "none" }) })
                }
              )
            ]
          },
          E
        )),
        y.length > 1 && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: f,
            className: "text-xs text-gray-500 hover:text-gray-700 font-medium self-center ml-1 transition-colors",
            children: "Clear all"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(
      b8,
      {
        isOpen: h,
        onClose: () => g(!1),
        anchorRect: p,
        filters: c,
        activeFilters: u,
        onChange: d,
        onClearAll: () => {
          f(), g(!1);
        }
      }
    )
  ] });
}
function S8({
  totalItems: e,
  pageSize: n = 10,
  currentPage: t,
  onPageChange: r,
  showPageSizeSelector: s = !1,
  pageSizeOptions: i = [10, 20, 50, 100],
  onPageSizeChange: o,
  showTotal: l = !0,
  className: c = ""
}) {
  const [u, d] = ce(1), [f, h] = ce(n), g = t !== void 0, p = g ? t : u, C = g ? n : f, m = Math.max(1, Math.ceil(e / C)), { startPage: x, endPage: y } = ut(() => {
    let k = Math.max(1, p - Math.floor(3.5)), L = Math.min(m, k + 7 - 1);
    return L - k < 6 && (k = Math.max(1, L - 7 + 1)), { startPage: k, endPage: L };
  }, [p, m]), _ = e === 0 ? 0 : (p - 1) * C + 1, v = Math.min(p * C, e), w = (S) => {
    S < 1 || S > m || (g || d(S), r == null || r(S));
  }, E = (S) => {
    const k = Number(S.target.value), L = Math.ceil(e / k), A = Math.min(p, L);
    g ? (o == null || o(k), r && r(1)) : (h(k), d(A), o == null || o(k), r == null || r(A));
  }, N = ut(() => {
    const S = [];
    if (m <= 7)
      for (let k = 1; k <= m; k++)
        S.push(k);
    else {
      S.push(1), x > 2 && S.push("ellipsis");
      for (let k = x; k <= y; k++)
        k !== 1 && k !== m && S.push(k);
      y < m - 1 && S.push("ellipsis"), m > 1 && S.push(m);
    }
    return S;
  }, [x, y, m]);
  return e === 0 ? /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `flex items-center justify-between px-4 py-3 border-t border-slate-200 ${c}`,
      children: /* @__PURE__ */ a.jsx("div", { className: "text-sm text-slate-600", children: "No items to display" })
    }
  ) : /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-slate-200 ${c}`,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
          l && /* @__PURE__ */ a.jsxs("div", { className: "text-sm text-slate-600", children: [
            "Showing ",
            /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: _ }),
            " to",
            " ",
            /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: v }),
            " of",
            " ",
            /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: e }),
            " results"
          ] }),
          s && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx(
              "label",
              {
                htmlFor: "page-size-select",
                className: "text-sm text-slate-600",
                children: "Show:"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "select",
              {
                id: "page-size-select",
                value: C,
                onChange: E,
                className: "px-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-900",
                children: i.map((S) => /* @__PURE__ */ a.jsx("option", { value: S, children: S }, S))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => w(p - 1),
              disabled: p === 1,
              className: "flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
              "aria-label": "Previous page",
              children: /* @__PURE__ */ a.jsx(M0, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-1", children: N.map((S, k) => {
            if (S === "ellipsis")
              return /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: "px-2 text-slate-500",
                  children: "..."
                },
                `ellipsis-${k}`
              );
            const L = S === p;
            return /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => w(S),
                className: `flex items-center justify-center min-w-[36px] h-9 px-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${L ? "bg-sky-500 text-white border-sky-500 font-medium" : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"}`,
                "aria-label": `Go to page ${S}`,
                "aria-current": L ? "page" : void 0,
                children: S
              },
              S
            );
          }) }),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              type: "button",
              onClick: () => w(p + 1),
              disabled: p === m,
              className: "flex items-center justify-center w-9 h-9 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
              "aria-label": "Next page",
              children: /* @__PURE__ */ a.jsx(A0, { className: "w-4 h-4" })
            }
          )
        ] })
      ]
    }
  );
}
function k8(e, n) {
  return e === n ? 0 : e == null || e === "" ? 1 : n == null || n === "" ? -1 : e instanceof Date && n instanceof Date ? e.getTime() - n.getTime() : typeof e == "number" && typeof n == "number" ? e - n : typeof e == "boolean" && typeof n == "boolean" ? e === n ? 0 : e ? 1 : -1 : String(e).localeCompare(String(n), void 0, {
    numeric: !0,
    sensitivity: "base"
  });
}
function E8(e, n) {
  return e.map((t) => {
    const r = n.map((i) => i[t.key]).filter((i) => i != null && i !== "");
    if (r.length === 0) return null;
    if (r.every((i) => typeof i == "boolean"))
      return { key: t.key, label: t.label, type: "boolean" };
    const s = Array.from(new Set(r.map((i) => String(i))));
    return s.length <= 8 ? {
      key: t.key,
      label: t.label,
      type: "select",
      options: s.map((i) => ({ value: i, label: i }))
    } : { key: t.key, label: t.label, type: "text" };
  }).filter(Boolean);
}
function ap({
  data: e,
  columns: n,
  onSort: t,
  onRowSelect: r,
  bulkActions: s = [],
  onBulkAction: i,
  searchable: o = !0,
  filterable: l = !0,
  filters: c,
  expandableRow: u,
  rowActions: d,
  pagination: f,
  stickyHeader: h = !1,
  className: g = ""
}) {
  const [p, C] = ce([]), [m, x] = ce(""), [y, _] = ce("asc"), [v, w] = ce(""), [E, N] = ce(/* @__PURE__ */ new Set()), [S, k] = ce(
    (c == null ? void 0 : c.defaultValues) ?? {}
  ), L = ut(() => {
    if (!c) return [];
    const J = c.definitions ?? [];
    if (!c.infer) return J;
    const he = E8(n, e), Oe = new Set(J.map((Ze) => Ze.key));
    return [...J, ...he.filter((Ze) => !Oe.has(Ze.key))];
  }, [c, n, e]), A = (J) => {
    var Oe;
    if (!((Oe = n.find((Ze) => Ze.key === J)) != null && Oe.sortable)) return;
    const he = m === J && y === "asc" ? "desc" : "asc";
    x(J), _(he), t == null || t(J, he);
  }, H = (J) => {
    const he = p.includes(J) ? p.filter((Oe) => Oe !== J) : [...p, J];
    C(he), r == null || r(he);
  }, G = () => {
    const J = p.length === e.length ? [] : e.map((he) => he.id || he.key);
    C(J), r == null || r(J);
  }, O = (J) => {
    i == null || i(J, p);
  }, K = (J) => {
    const he = new Set(E);
    he.has(J) ? he.delete(J) : he.add(J), N(he);
  }, X = (J, he) => {
    k((Oe) => {
      var Lt, zt;
      if (he == null || he === "" || Array.isArray(he) && he.length === 0) {
        const Xt = { ...Oe };
        return delete Xt[J], (Lt = c == null ? void 0 : c.onChange) == null || Lt.call(c, Xt), Xt;
      }
      const ot = { ...Oe, [J]: he };
      return (zt = c == null ? void 0 : c.onChange) == null || zt.call(c, ot), ot;
    });
  }, se = () => {
    var J;
    k({}), (J = c == null ? void 0 : c.onChange) == null || J.call(c, {});
  }, ee = e.filter((J) => {
    const he = !v || Object.values(J).some(
      (Ze) => String(Ze).toLowerCase().includes(v.toLowerCase())
    ), Oe = Object.entries(S).every(
      ([Ze, ot]) => {
        if (ot == null || ot === "" || Array.isArray(ot) && ot.length === 0) return !0;
        const zt = J[Ze], Xt = L.find((mi) => mi.key === Ze);
        if (!Xt) return !0;
        switch (Xt.type) {
          case "boolean":
            return zt === ot;
          case "select":
            return String(zt) === String(ot);
          case "multiselect":
            return ot.includes(String(zt));
          case "text":
            return String(zt).toLowerCase().includes(String(ot).toLowerCase());
          case "number":
            return Number(zt) === Number(ot);
          default:
            return !0;
        }
      }
    );
    return he && Oe;
  }), R = ut(() => {
    const J = n.find((he) => he.key === m);
    return !m || !(J != null && J.sortable) ? ee : [...ee].sort((he, Oe) => {
      const Ze = k8(he[m], Oe[m]);
      return y === "asc" ? Ze : -Ze;
    });
  }, [ee, m, y, n]), V = (f == null ? void 0 : f.currentPage) !== void 0, F = (f == null ? void 0 : f.pageSize) !== void 0, [U, ie] = ce((f == null ? void 0 : f.currentPage) ?? 1), [Z, fe] = ce(
    (f == null ? void 0 : f.pageSize) ?? 10
  ), te = V ? f.currentPage : U, Q = F ? f.pageSize : Z, ge = R.length, $e = Math.max(1, Math.ceil(ge / Q)), Ge = Math.min(te, $e), dt = (Ge - 1) * Q, hs = dt + Q, jn = f != null && f.enabled ? R.slice(dt, hs) : R;
  we(() => {
    !V && U > $e && ie($e);
  }, [U, $e, V]), we(() => {
    V || ie(1);
  }, [v, S, V]);
  const Ae = (J) => {
    var he;
    V || ie(J), (he = f == null ? void 0 : f.onPageChange) == null || he.call(f, J);
  }, gs = (J) => {
    var he;
    F || fe(J), V || ie(1), (he = f == null ? void 0 : f.onPageSizeChange) == null || he.call(f, J);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: `w-full ${g}`, children: [
    /* @__PURE__ */ a.jsx(
      w8,
      {
        searchable: o,
        filterable: l,
        searchTerm: v,
        onSearchChange: w,
        bulkActions: s,
        onBulkAction: O,
        selectedCount: p.length,
        totalCount: e.length,
        filterDefinitions: L,
        activeFilters: S,
        onFilterChange: X,
        onClearAllFilters: se
      }
    ),
    /* @__PURE__ */ a.jsx(
      C8,
      {
        data: jn,
        columns: n,
        selectable: s.length > 0,
        selectedRows: p,
        sortColumn: m,
        sortDirection: y,
        onSort: A,
        onRowSelect: H,
        onSelectAll: G,
        expandableRow: u,
        expandedRows: E,
        onToggleExpand: K,
        rowActions: d,
        stickyHeader: h
      }
    ),
    (f == null ? void 0 : f.enabled) && /* @__PURE__ */ a.jsx(
      S8,
      {
        totalItems: ge,
        pageSize: Q,
        currentPage: Ge,
        onPageChange: Ae,
        showPageSizeSelector: f.showPageSizeSelector,
        pageSizeOptions: f.pageSizeOptions,
        onPageSizeChange: gs,
        showTotal: f.showTotal
      }
    )
  ] });
}
const ic = (e) => e != null && e.length ? /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap items-start gap-2 text-sm text-slate-600", children: e.map(({ label: n, value: t }, r) => /* @__PURE__ */ a.jsxs("div", { className: "inline-flex items-start gap-1", children: [
  n && /* @__PURE__ */ a.jsx("span", { className: "font-semibold text-slate-700", children: n }),
  t && /* @__PURE__ */ a.jsx("span", { children: t })
] }, r)) }) : null, N8 = (e) => {
  if (!e) return null;
  if (rr.isValidElement(e))
    return e;
  if (typeof e == "object" && e !== null && "label" in e) {
    const { label: n, ...t } = e;
    return /* @__PURE__ */ a.jsx(D0, { label: n, ...t });
  }
  return null;
}, T8 = ({
  title: e,
  subtitle: n,
  action: t,
  meta: r,
  status: s,
  rows: i,
  footer: o,
  leading: l,
  description: c,
  className: u,
  highlight: d = !1,
  compact: f = !1
}) => {
  const h = Array.isArray(i) && i.length > 0, g = f ? "p-4" : "p-6";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: q(
        "w-full rounded-2xl border border-slate-200 bg-white shadow-[0px_4px_19.9px_rgba(6,_6,_7,_0.15)] transition-shadow",
        g,
        d && "border-sky-200 shadow-blue-200/40 ring-1 ring-sky-200",
        u
      ),
      children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-4", children: [
        l && /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center", children: l }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex-1 space-y-2", children: [
              /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ a.jsx("div", { className: "text-lg font-bold text-slate-900 md:text-xl", children: e }),
                t && /* @__PURE__ */ a.jsx("div", { className: "text-sm font-semibold text-sky-600 underline decoration-sky-600/60 decoration-1 underline-offset-2", children: t })
              ] }),
              n && /* @__PURE__ */ a.jsx("div", { className: "text-sm font-semibold uppercase tracking-[0.18em] text-slate-500", children: n }),
              c && /* @__PURE__ */ a.jsx("div", { className: "text-sm text-slate-600", children: c }),
              ic(r)
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "flex flex-col items-end gap-2", children: N8(s) })
          ] }),
          h && /* @__PURE__ */ a.jsx("div", { className: q("divide-y divide-slate-100 rounded-xl border border-slate-100", f ? "overflow-hidden" : ""), children: i == null ? void 0 : i.map(({ id: p, label: C, meta: m, value: x, description: y, trailing: _ }) => /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: q(
                "flex flex-col gap-3 bg-white px-4 py-3 md:flex-row md:items-center md:justify-between",
                f && "px-3 py-2.5"
              ),
              children: [
                /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 flex-col gap-2", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "text-sm font-semibold text-slate-900 md:text-base", children: C }),
                  m && ic(m),
                  y && /* @__PURE__ */ a.jsx("div", { className: "text-sm text-slate-500", children: y })
                ] }),
                (x || _) && /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col items-end gap-1 text-right text-sm text-slate-700 md:min-w-[120px]", children: [
                  x && /* @__PURE__ */ a.jsx("span", { className: "font-semibold text-slate-900", children: x }),
                  _
                ] })
              ]
            },
            p
          )) }),
          o && /* @__PURE__ */ a.jsx("div", { className: "mt-2 border-t border-slate-100 pt-3 text-sm text-slate-600", children: o })
        ] })
      ] })
    }
  );
};
T8.displayName = "EntitySummaryCard";
const L8 = {
  up: {
    icon: /* @__PURE__ */ a.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M4 15.9995L10.5858 9.4137C11.3668 8.63266 12.6332 8.63266 13.4142 9.4137L16.5858 12.5853C17.3668 13.3663 18.6332 13.3663 19.4142 12.5853L20 11.9995",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M15 7H21",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M21 7V13",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    labelClassName: "text-emerald-600"
  },
  down: {
    icon: /* @__PURE__ */ a.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M4 8.00049L10.5858 14.5863C11.3668 15.3673 12.6332 15.3673 13.4142 14.5863L16.5858 11.4147C17.3668 10.6337 18.6332 10.6337 19.4142 11.4147L20 12.0005",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M15 17H21",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M21 11V17",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    labelClassName: "text-rose-500"
  },
  flat: {
    icon: /* @__PURE__ */ a.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M4 12H20",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ a.jsx(
        "path",
        {
          d: "M16 8L20 12L16 16",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    labelClassName: "text-slate-500"
  }
}, j8 = ({
  title: e,
  subtitle: n,
  value: t,
  trend: r,
  trendLabel: s,
  trendValue: i,
  icon: o,
  badge: l,
  footer: c,
  variant: u = "default",
  className: d,
  accentColorClassName: f = "bg-sky-500/10 text-sky-600"
}) => {
  const h = r ? L8[r] : void 0;
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      className: q(
        "flex w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_16px_rgba(15,_23,_42,_0.08)] transition-shadow hover:shadow-[0px_12px_24px_rgba(15,_23,_42,_0.12)]",
        u === "compact" ? "p-4" : "p-6",
        u === "outlined" && "border-dashed",
        d
      ),
      children: [
        /* @__PURE__ */ a.jsxs("header", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
            o && /* @__PURE__ */ a.jsx(
              "div",
              {
                className: q(
                  "flex h-12 w-12 items-center justify-center rounded-xl text-lg",
                  f
                ),
                children: o
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ a.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.18em] text-slate-500", children: e }),
              n && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-slate-500", children: n })
            ] })
          ] }),
          l
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ a.jsx("span", { className: "text-3xl font-bold text-slate-900 md:text-4xl", children: t }) }),
          (r || s || i) && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold", children: [
            (h == null ? void 0 : h.icon) && /* @__PURE__ */ a.jsx(
              "span",
              {
                className: q(
                  "flex items-center justify-center",
                  h.labelClassName
                ),
                children: h.icon
              }
            ),
            i && /* @__PURE__ */ a.jsx("span", { className: h == null ? void 0 : h.labelClassName, children: i }),
            s && /* @__PURE__ */ a.jsx("span", { className: "text-slate-500", children: s })
          ] })
        ] }),
        c && /* @__PURE__ */ a.jsx("footer", { className: "flex flex-wrap items-center gap-3 border-t border-slate-100 pt-3 text-sm text-slate-500", children: c })
      ]
    }
  );
};
j8.displayName = "MetricCard";
function cp({
  type: e = "info",
  title: n,
  children: t,
  dismissible: r = !1,
  onDismiss: s,
  icon: i,
  className: o = "",
  variant: l = "soft"
}) {
  const c = jf({ type: e, variant: l, className: o }), u = {
    info: "text-blue-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500"
  }, d = {
    info: /* @__PURE__ */ a.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ a.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
        clipRule: "evenodd"
      }
    ) }),
    success: /* @__PURE__ */ a.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ a.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
        clipRule: "evenodd"
      }
    ) }),
    warning: /* @__PURE__ */ a.jsx(O0, { className: "w-5 h-5" }),
    error: /* @__PURE__ */ a.jsx(F0, { className: "w-5 h-5" })
  };
  return /* @__PURE__ */ a.jsx("div", { className: `w-full ${c}`, children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ a.jsx("div", { className: `flex-shrink-0 ${u[e]}`, children: i || d[e] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex-1 min-w-0", children: [
      n && /* @__PURE__ */ a.jsx("h3", { className: "font-semibold mb-1 text-sm", children: n }),
      /* @__PURE__ */ a.jsx("div", { className: "text-sm", children: t })
    ] }),
    r && s && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors",
        onClick: s,
        "aria-label": "Close alert",
        children: /* @__PURE__ */ a.jsx(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ a.jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
              }
            )
          }
        )
      }
    ) })
  ] }) });
}
function A8({
  children: e,
  title: n,
  description: t,
  isOpen: r = !1,
  onClose: s,
  className: i,
  size: o = "md",
  showCloseButton: l = !0,
  closeOnBackdropClick: c = !0,
  primaryAction: u,
  secondaryAction: d
}) {
  we(() => {
    const p = (C) => {
      C.key === "Escape" && r && s && s();
    };
    return r && (document.addEventListener("keydown", p), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "unset";
    };
  }, [r, s]);
  const f = He((p) => {
    c && p.target === p.currentTarget && s && s();
  }, [c, s]), h = He((p) => {
    p.stopPropagation();
  }, []);
  if (!r) return null;
  const g = Af(o);
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "modalBackground z-50",
      onClick: f,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? "modal-title" : void 0,
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: q(
            g,
            "p-10 bg-white rounded-2xl shadow-[0px_0px_40px_0px_rgba(0,0,0,0.15)] flex flex-col gap-6 relative max-h-[90vh] overflow-y-auto",
            i
          ),
          onClick: h,
          children: [
            l && s && /* @__PURE__ */ a.jsx(
              "button",
              {
                onClick: s,
                className: "absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500",
                "aria-label": "Cerrar modal",
                children: /* @__PURE__ */ a.jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6 text-gray-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ a.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  }
                )
              }
            ),
            (n || t) && /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col justify-start items-center gap-4", children: [
              n && /* @__PURE__ */ a.jsx(
                "h2",
                {
                  id: "modal-title",
                  className: "text-center text-gray-900 text-3xl font-semibold font-['Mulish']",
                  children: n
                }
              ),
              t && /* @__PURE__ */ a.jsx("p", { className: "self-stretch text-center text-black text-xl font-normal font-['Mulish']", children: t })
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "self-stretch flex flex-col justify-start items-center gap-4", children: e }),
            (u || d) && /* @__PURE__ */ a.jsxs("div", { className: "self-stretch inline-flex justify-center items-start gap-4 pt-4 border-t border-gray-200", children: [
              d && /* @__PURE__ */ a.jsx(
                Ul,
                {
                  variant: d.variant || "secondary",
                  size: "lg",
                  onClick: d.onClick,
                  disabled: d.disabled,
                  className: "flex-1",
                  children: d.label
                }
              ),
              u && /* @__PURE__ */ a.jsx(
                Ul,
                {
                  variant: u.variant || "primary",
                  size: "lg",
                  onClick: u.onClick,
                  disabled: u.disabled,
                  className: "flex-1",
                  children: u.label
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const M8 = (e, n) => e === "two-columns" ? `grid grid-cols-1 ${n === 2 ? "md:grid-cols-2" : "md:grid-cols-1"}` : "flex flex-col", F8 = ({
  children: e,
  description: n,
  layout: t = "vertical",
  columns: r = 2,
  gapClassName: s,
  contentClassName: i,
  footerContent: o,
  submitLabel: l = "Guardar",
  cancelLabel: c = "Cancelar",
  submitVariant: u = "primary",
  cancelVariant: d = "secondary",
  submitDisabled: f = !1,
  isSubmitting: h = !1,
  onSubmit: g,
  onCancel: p,
  ...C
}) => {
  const m = xf(), x = C.id ? `${C.id}-form` : `form-modal-${m}`, y = ut(() => s || (t === "two-columns" ? "gap-6" : "gap-5"), [s, t]), _ = (w) => {
    w.preventDefault(), g == null || g(w);
  }, v = () => {
    var w;
    p == null || p(), (w = C.onClose) == null || w.call(C);
  };
  return /* @__PURE__ */ a.jsx(
    A8,
    {
      ...C,
      description: typeof n == "string" ? n : void 0,
      primaryAction: {
        label: l,
        onClick: () => {
          const w = document.getElementById(x);
          w == null || w.requestSubmit();
        },
        disabled: f || h,
        variant: u
      },
      secondaryAction: c ? {
        label: c,
        onClick: v,
        variant: d
      } : void 0,
      children: /* @__PURE__ */ a.jsxs(
        "form",
        {
          id: x,
          onSubmit: _,
          className: "flex w-full flex-col gap-6",
          children: [
            n && typeof n != "string" && /* @__PURE__ */ a.jsx("div", { className: "text-center text-base text-slate-600", children: n }),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: [
                  M8(t, r),
                  y,
                  i
                ].filter(Boolean).join(" "),
                children: e
              }
            ),
            o && /* @__PURE__ */ a.jsx("div", { className: "border-t border-slate-100 pt-4 text-sm text-slate-500", children: o })
          ]
        }
      )
    }
  );
};
F8.displayName = "FormModal";
const Kl = un(
  ({
    variant: e = "primary",
    id: n,
    size: t = "md",
    state: r = "default",
    outlineStyle: s = "normal",
    loading: i = !1,
    disabled: o = !1,
    rounded: l = !1,
    fullWidth: c = !1,
    children: u,
    className: d,
    onClick: f,
    type: h = "button",
    ...g
  }, p) => {
    const C = "btn inline-flex justify-center items-center gap-2 rounded-lg font-bold font-['Muli'] uppercase tracking-widest", m = {
      primary: "bg-cta-accent hover:bg-cta-hover",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      accent: "bg-CTA-and-buttons-Colors-cta-accent text-Text-Txt-Colors-Text-reverse",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
      ghost: "bg-transparent text-Text-Txt-Colors-Text-primary",
      link: "bg-transparent text-CTA-and-buttons-Colors-cta-accent underline",
      info: "bg-blue-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-white",
      error: "bg-red-500 text-white"
    }, x = {
      hover: {
        primary: "bg-CTA-and-buttons-Colors-cta-hover",
        secondary: "bg-CTA-and-buttons-Colors-button-grey-hover",
        accent: "bg-CTA-and-buttons-Colors-cta-hover",
        outline: "bg-transparent",
        ghost: "bg-transparent",
        link: "bg-transparent",
        info: "bg-blue-600",
        success: "bg-green-600",
        warning: "bg-yellow-600",
        error: "bg-red-600"
      },
      outline: {
        primary: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        secondary: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-button-grey-default",
        accent: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        outline: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        ghost: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        link: "outline outline-2 outline-offset-[-2px] outline-CTA-and-buttons-Colors-cta-accent",
        info: "outline outline-2 outline-offset-[-2px] outline-blue-500",
        success: "outline outline-2 outline-offset-[-2px] outline-green-500",
        warning: "outline outline-2 outline-offset-[-2px] outline-yellow-500",
        error: "outline outline-2 outline-offset-[-2px] outline-red-500"
      }
    }, y = {
      thin: "outline-1 outline-offset-[-1px]",
      normal: "outline-2 outline-offset-[-2px]",
      thick: "outline-4 outline-offset-[-4px]"
    }, _ = {
      xs: "h-10 px-2 text-sm",
      sm: "h-12 px-2 text-base",
      md: "h-14 px-4 text-base",
      lg: "h-16 px-6 text-base",
      wide: "h-16 px-8 text-base"
    }, v = {
      loading: i ? "opacity-75 cursor-not-allowed" : "",
      disabled: o ? "opacity-50 cursor-not-allowed" : "",
      rounded: l ? "rounded-full" : "",
      fullWidth: c ? "w-full" : ""
    }, w = () => {
      if (r === "outline") {
        const N = x.outline[e] || x.outline.primary, S = y[s];
        return `${N} ${S}`;
      }
      return r === "hover" ? x.hover[e] || x.hover.primary : "";
    }, E = q(
      C,
      m[e],
      w(),
      _[t],
      v.loading,
      v.disabled,
      v.rounded,
      v.fullWidth,
      d
    );
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        ref: p,
        className: E,
        disabled: o || i,
        onClick: f,
        type: h,
        id: n,
        ...g,
        children: [
          i && /* @__PURE__ */ a.jsx("span", { className: "animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" }),
          /* @__PURE__ */ a.jsx("div", { className: "p-2.5 flex justify-center items-center gap-2.5", children: /* @__PURE__ */ a.jsx("div", { className: "justify-center", children: u }) })
        ]
      }
    );
  }
);
Kl.displayName = "Button";
const O8 = (e, n) => {
  switch (e) {
    case "dashboard":
      return q(
        "uppercase tracking-[0.18em] text-sm font-bold px-4 py-3 rounded-lg transition",
        n ? "bg-white text-slate-900 shadow-[0px_4px_8px_rgba(6,_6,_7,_0.08)] border border-slate-200" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
      );
    case "pill":
      return q(
        "px-4 py-2 rounded-full text-sm font-semibold transition",
        n ? "bg-sky-600 text-white shadow-sm" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
      );
    case "drawer":
      return q(
        "flex-1 p-4 text-base font-bold uppercase tracking-widest transition-colors",
        n ? "bg-gray-light text-text-primary border-l border-b-4 border-b-cta-accent" : "bg-gray-light text-text-secondary border-l border-b-4 border-b-transparent border-stroke-grey-01 hover:bg-gray-100"
      );
    case "underline":
    default:
      return q(
        "px-3 py-2 text-sm font-semibold border-b-2 transition",
        n ? "border-sky-600 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-200"
      );
  }
}, I8 = ({ tab: e, isActive: n, onClick: t, variant: r, className: s, fullWidth: i }) => /* @__PURE__ */ a.jsxs(
  "button",
  {
    type: "button",
    role: "tab",
    "aria-selected": n,
    "aria-controls": `tab-panel-${e.id}`,
    id: `tab-${e.id}`,
    disabled: e.disabled,
    onClick: t,
    className: q(
      "flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-gray-200",
      i ? "justify-center w-full" : "justify-start",
      O8(r, n),
      s
    ),
    children: [
      e.icon && /* @__PURE__ */ a.jsx("span", { className: "text-lg", children: e.icon }),
      /* @__PURE__ */ a.jsxs("span", { className: "flex flex-col items-start gap-1", children: [
        /* @__PURE__ */ a.jsx("span", { children: e.label }),
        e.description && /* @__PURE__ */ a.jsx("span", { className: "text-xs font-medium normal-case tracking-normal text-slate-400", children: e.description })
      ] }),
      e.badge && /* @__PURE__ */ a.jsx("span", { className: "ml-auto", children: e.badge })
    ]
  }
), $0 = ({
  tabs: e,
  activeTabId: n,
  defaultActiveTabId: t,
  onTabChange: r,
  variant: s = "dashboard",
  fullWidth: i = !1,
  className: o,
  tabListClassName: l,
  tabClassName: c,
  contentClassName: u,
  renderContent: d
}) => {
  var m;
  const [f, h] = ce(
    n ?? t ?? ((m = e[0]) == null ? void 0 : m.id)
  ), g = n !== void 0;
  we(() => {
    g && h(n);
  }, [n, g]);
  const p = ut(
    () => e.find((x) => x.id === f),
    [e, f]
  ), C = (x) => {
    x.disabled || (g || h(x.id), r == null || r(x.id, x));
  };
  return /* @__PURE__ */ a.jsxs("div", { className: q(
    "w-full",
    s !== "drawer" && "space-y-6",
    o
  ), children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "tablist",
        className: q(
          "flex flex-wrap items-center  rounded-2xl bg-slate-100",
          s === "underline" && "bg-transparent p-0 gap-6 border-b border-slate-200",
          s === "pill" && "bg-transparent p-0",
          s === "drawer" && "shrink-0 flex border border-gray-100 rounded-none bg-transparent gap-0",
          l
        ),
        children: e.map((x) => /* @__PURE__ */ a.jsx(
          I8,
          {
            tab: x,
            isActive: x.id === f,
            onClick: () => C(x),
            variant: s,
            className: q(c, "first:border-l-0", "last:border-r-0"),
            fullWidth: i
          },
          x.id
        ))
      }
    ),
    /* @__PURE__ */ a.jsx(
      "div",
      {
        role: "tabpanel",
        id: p ? `tab-panel-${p.id}` : void 0,
        "aria-labelledby": p ? `tab-${p.id}` : void 0,
        className: q(
          s !== "drawer" && "rounded-2xl",
          u
        ),
        children: d ? d(p) : p == null ? void 0 : p.content
      }
    )
  ] });
};
$0.displayName = "Tabs";
const D8 = {
  sm: "w-full max-w-md",
  md: "w-full max-w-2xl",
  lg: "w-full max-w-4xl",
  xl: "w-full max-w-6xl",
  "2xl": "w-full max-w-7xl",
  full: "w-full"
};
function up({
  title: e,
  isOpen: n = !1,
  onClose: t,
  children: r,
  className: s,
  position: i = "right",
  width: o = "lg",
  headerActions: l,
  footerActions: c,
  tabs: u,
  activeTabId: d,
  defaultActiveTab: f,
  onTabChange: h,
  showCloseButton: g = !0,
  closeOnBackdropClick: p = !0
}) {
  var _;
  we(() => {
    const v = (w) => {
      w.key === "Escape" && n && t && t();
    };
    return n && (document.addEventListener("keydown", v), document.body.style.overflow = "hidden"), () => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "unset";
    };
  }, [n, t]);
  const C = He(
    (v) => {
      p && v.target === v.currentTarget && t && t();
    },
    [p, t]
  ), m = He((v) => {
    v.stopPropagation();
  }, []), x = (v) => {
    h == null || h(v);
  };
  if (!n) return null;
  const y = i === "left" ? "left-0 translate-x-0" : "right-0 translate-x-0";
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-end modal transition-opacity",
      onClick: C,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "drawer-title",
      children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: q(
            "h-full bg-white shadow-[0px_4px_19.9px_0px_rgba(0,0,0,0.25)] flex flex-col transition-transform duration-300 ease-in-out",
            y,
            D8[o],
            s
          ),
          onClick: m,
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex-shrink-0 px-8 py-4 bg-white rounded-tl-2xl rounded-tr-2xl border-b-2 border-gray-100 inline-flex justify-between items-center", children: [
              /* @__PURE__ */ a.jsx("div", { className: "justify-center text-black text-3xl font-semibold font-['Muli']", children: e }),
              /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
                l && l.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: l.map((v, w) => /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: v.onClick,
                    disabled: v.disabled,
                    className: q(
                      "h-10 px-4 bg-surface-primary rounded-[3px] flex justify-center items-center gap-2 transition-colors",
                      "hover:bg-surface-secondary",
                      v.disabled && "opacity-50 cursor-not-allowed"
                    ),
                    children: [
                      v.icon && /* @__PURE__ */ a.jsx("div", { className: "w-6 h-6 flex items-center justify-center", children: v.icon }),
                      /* @__PURE__ */ a.jsx("span", { className: "text-text-secondary text-sm font-semibold font-['Muli']", children: v.label })
                    ]
                  },
                  w
                )) }),
                g && t && /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: t,
                    className: "size- flex justify-start items-center gap-2 hover:opacity-70 transition-opacity",
                    "aria-label": "Close drawer",
                    children: [
                      /* @__PURE__ */ a.jsx("div", { className: "justify-center text-black text-sm font-semibold uppercase tracking-widest", children: "close" }),
                      /* @__PURE__ */ a.jsxs("div", { className: "size-6 relative overflow-hidden", children: [
                        /* @__PURE__ */ a.jsx("div", { className: "size-6 left-0 top-0 absolute" }),
                        /* @__PURE__ */ a.jsx("div", { className: "left-[2.27px] top-[2px] absolute", children: /* @__PURE__ */ a.jsxs(
                          "svg",
                          {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              /* @__PURE__ */ a.jsx("g", { clipPath: "url(#clip0_1182_9444)", children: /* @__PURE__ */ a.jsx(
                                "path",
                                {
                                  d: "M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM10 17.8125C5.68359 17.8125 2.1875 14.3164 2.1875 10C2.1875 5.68359 5.68359 2.1875 10 2.1875C14.3164 2.1875 17.8125 5.68359 17.8125 10C17.8125 14.3164 14.3164 17.8125 10 17.8125ZM13.9766 7.57031L11.5469 10L13.9766 12.4297C14.1602 12.6133 14.1602 12.9102 13.9766 13.0938L13.0938 13.9766C12.9102 14.1602 12.6133 14.1602 12.4297 13.9766L10 11.5469L7.57031 13.9766C7.38672 14.1602 7.08984 14.1602 6.90625 13.9766L6.02344 13.0938C5.83984 12.9102 5.83984 12.6133 6.02344 12.4297L8.45312 10L6.02344 7.57031C5.83984 7.38672 5.83984 7.08984 6.02344 6.90625L6.90625 6.02344C7.08984 5.83984 7.38672 5.83984 7.57031 6.02344L10 8.45312L12.4297 6.02344C12.6133 5.83984 12.9102 5.83984 13.0938 6.02344L13.9766 6.90625C14.1602 7.08984 14.1602 7.38672 13.9766 7.57031Z",
                                  fill: "black"
                                }
                              ) }),
                              /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("clipPath", { id: "clip0_1182_9444", children: /* @__PURE__ */ a.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
                            ]
                          }
                        ) })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            u && u.length > 0 ? /* @__PURE__ */ a.jsx(
              $0,
              {
                tabs: u,
                activeTabId: d,
                defaultActiveTabId: f || ((_ = u[0]) == null ? void 0 : _.id),
                onTabChange: x,
                variant: "drawer",
                className: "flex-1 flex flex-col overflow-hidden",
                tabListClassName: "flex-shrink-0",
                contentClassName: "flex-1 overflow-y-auto p-6 bg-surface-secondary"
              }
            ) : /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto p-6 bg-surface-secondary", children: r }),
            c && (c.primary || c.secondary) && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0 h-px bg-stroke-grey-01" }),
              /* @__PURE__ */ a.jsxs("div", { className: "flex-shrink-0 flex justify-end items-center gap-4 p-6", children: [
                c.secondary && /* @__PURE__ */ a.jsx(
                  Kl,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: c.secondary.onClick,
                    disabled: c.secondary.disabled,
                    className: "w-64",
                    children: c.secondary.label
                  }
                ),
                c.primary && /* @__PURE__ */ a.jsx(
                  Kl,
                  {
                    variant: "accent",
                    size: "sm",
                    onClick: c.primary.onClick,
                    disabled: c.primary.disabled,
                    className: "flex-1 max-w-64",
                    children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ a.jsx("span", { children: c.primary.label }),
                      c.primary.icon && /* @__PURE__ */ a.jsx("div", { className: "w-6 h-6", children: c.primary.icon })
                    ] })
                  }
                )
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const Gl = ({ name: e, className: n }) => {
  const t = I0[e];
  return t ? /* @__PURE__ */ a.jsx(t, { className: q("sidebar-icon", n) }) : /* @__PURE__ */ a.jsx("div", { className: q("w-6 h-6 relative", n), children: /* @__PURE__ */ a.jsx("div", { className: "w-6 h-6 left-0 top-0 absolute inline-flex flex-col justify-center items-center gap-2.5", children: /* @__PURE__ */ a.jsx("div", { className: "w-5 h-4 relative overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { className: "w-5 h-4 left-0 top-[1.11px] absolute bg-CTA-and-buttons-Icons-icon-secondary" }) }) }) });
}, R0 = ii(({ item: e, isExpanded: n, onClick: t, currentPath: r, LinkComponent: s }) => {
  const i = e.isActive || e.href && r === e.href, o = /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4 w-full", children: [
    /* @__PURE__ */ a.jsx(Gl, { name: e.icon }),
    n && /* @__PURE__ */ a.jsx("span", { className: "sidebar-text flex-1", children: e.label })
  ] }), l = q(
    "sidebar-menu-item",
    i && "sidebar-menu-item-active",
    !n && "justify-center",
    e.isDisabled && "opacity-50 cursor-not-allowed"
  );
  return e.href && !e.onClick ? s ? /* @__PURE__ */ a.jsx("div", { className: "self-stretch inline-flex justify-start items-start", children: /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-start items-start", children: /* @__PURE__ */ a.jsx(
    s,
    {
      href: e.href,
      onClick: t,
      className: l,
      children: o
    }
  ) }) }) : /* @__PURE__ */ a.jsx("div", { className: "self-stretch inline-flex justify-start items-start", children: /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-start items-start", children: /* @__PURE__ */ a.jsx(
    "a",
    {
      href: e.href,
      onClick: t,
      className: l,
      children: o
    }
  ) }) }) : /* @__PURE__ */ a.jsx("div", { className: "self-stretch inline-flex justify-start items-start", children: /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-start items-start", children: /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: t || e.onClick,
      disabled: e.isDisabled,
      className: q(
        "sidebar-menu-item",
        i && "sidebar-menu-item-active",
        !n && "justify-center"
      ),
      children: o
    }
  ) }) });
});
R0.displayName = "MenuItemComponent";
const $8 = ({
  sections: e,
  isExpanded: n = !0,
  onToggle: t,
  onSignOut: r,
  className: s,
  logo: i,
  brandName: o,
  LinkComponent: l,
  currentPath: c
}) => {
  const [u, d] = ce(n);
  we(() => {
    d(n);
  }, [n]);
  const f = He(() => {
    const g = !u;
    d(g), t == null || t(g);
  }, [u, t]), h = He(() => {
    r == null || r();
  }, [r]);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: q(
        "sidebar-menu flex flex-col h-full transition-all duration-300 overflow-hidden",
        u ? "w-80" : "w-32",
        s
      ),
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex-shrink-0 flex flex-col justify-start items-start gap-6 p-8 pb-6", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col justify-center items-center w-full", children: [
            i || /* @__PURE__ */ a.jsx(If, { className: "sidebar-brand-logo" }),
            u && o && /* @__PURE__ */ a.jsx("div", { className: "mt-2 sidebar-section-title text-sm", children: o })
          ] }),
          /* @__PURE__ */ a.jsx(Of, { showLabel: u, className: "flex flex-row w-full justify-center items-center" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto overflow-x-hidden min-h-0 w-full px-8", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col justify-start items-start gap-4 pb-4", children: [
          e.map((g) => /* @__PURE__ */ a.jsxs("div", { className: "self-stretch flex flex-col justify-start items-start gap-4", children: [
            u && /* @__PURE__ */ a.jsx("div", { className: "sidebar-section-title", children: g.title }),
            /* @__PURE__ */ a.jsx("div", { className: "self-stretch flex flex-col justify-start items-start gap-4", children: g.items.map((p) => /* @__PURE__ */ a.jsx(
              R0,
              {
                item: p,
                isExpanded: u,
                onClick: p.onClick,
                currentPath: c,
                LinkComponent: l
              },
              p.id
            )) })
          ] }, g.id)),
          /* @__PURE__ */ a.jsx("div", { className: "self-stretch flex flex-col justify-start items-start gap-4", children: /* @__PURE__ */ a.jsx("div", { className: "self-stretch inline-flex justify-start items-center", children: /* @__PURE__ */ a.jsx("div", { className: "flex-1 flex justify-start items-center", children: /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: h,
              className: "sidebar-signout-button",
              children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4 w-full", children: [
                /* @__PURE__ */ a.jsx(Gl, { name: "Sign out" }),
                u && /* @__PURE__ */ a.jsx("span", { className: "sidebar-text flex-1", children: "sign out" })
              ] })
            }
          ) }) }) })
        ] }) }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0 p-8 pt-6", children: /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: f,
            className: "sidebar-toggle-button",
            "aria-label": u ? "Collapse menu" : "Expand menu",
            children: /* @__PURE__ */ a.jsx(
              Gl,
              {
                name: u ? "Chevron Left" : "Chevron Right",
                className: q(
                  "transition-transform duration-300",
                  u ? "rotate-180" : "rotate-0"
                )
              }
            )
          }
        ) })
      ]
    }
  );
}, Ra = ii($8, (e, n) => e.sections === n.sections && e.isExpanded === n.isExpanded && e.className === n.className && e.logo === n.logo && e.brandName === n.brandName && e.currentPath === n.currentPath && e.onToggle === n.onToggle && e.onSignOut === n.onSignOut && e.LinkComponent === n.LinkComponent);
Ra.displayName = "SidebarMenu";
const R8 = [
  {
    id: "sales",
    title: "Sales",
    items: [
      {
        id: "home",
        label: "home",
        icon: "Home",
        href: "/"
      },
      {
        id: "events",
        label: "events",
        icon: "Calendar",
        href: "/events"
      },
      {
        id: "tickets",
        label: "tickets",
        icon: "Ticket",
        href: "/ticketing"
      },
      {
        id: "groups",
        label: "groups",
        icon: "users",
        href: "/tours-groups"
      }
    ]
  },
  {
    id: "customer-management",
    title: "Customer Management",
    items: [
      {
        id: "customer-mgt",
        label: "customer mgt.",
        icon: "user-cog",
        href: "/access-control/users"
      }
    ]
  },
  {
    id: "administrative",
    title: "Administrative",
    items: [
      {
        id: "seating-maps",
        label: "seating maps",
        icon: "couch",
        href: "/seating-maps"
      },
      {
        id: "pricing-tables",
        label: "pricing tables",
        icon: "usd-circle",
        href: "/pricing"
      },
      {
        id: "discounts-promos",
        label: "discounts & promos",
        icon: "tag",
        href: "/discounts"
      },
      {
        id: "bundles",
        label: "bundles",
        icon: "cabinet-filing",
        href: "/bundles"
      },
      {
        id: "data-configuration",
        label: "Data Configuration",
        icon: "cabinet-filing",
        href: "/data-config"
      },
      {
        id: "legal",
        label: "legal",
        icon: "balance-scale",
        href: "/legal"
      },
      {
        id: "system-staff-mgt",
        label: "system / staff mgt.",
        icon: "Settings",
        href: "/system"
      }
    ]
  }
], dp = {
  sections: R8,
  isExpanded: !0,
  brandName: "Admin Panel"
}, P8 = ({
  children: e,
  className: n = "",
  position: t = "bottom",
  variant: r = "default",
  actions: s
}) => {
  const i = "flex items-center justify-between px-4 py-3 bg-surface-primary border-t border-button-grey", o = {
    default: "border-t border-button-grey",
    floating: "shadow-lg rounded-lg border border-button-grey",
    sticky: "sticky border-t border-button-grey"
  }, l = {
    top: "border-t-0 border-b",
    bottom: "border-t"
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: q(
        i,
        o[r],
        l[t],
        n
      ),
      children: [
        s && /* @__PURE__ */ a.jsx("div", { className: "size- flex justify-start items-start gap-4", children: s }),
        e && /* @__PURE__ */ a.jsx("div", { className: "size- flex justify-end items-center gap-2", children: e })
      ]
    }
  );
}, to = ii(P8, (e, n) => e.children === n.children && e.className === n.className && e.position === n.position && e.variant === n.variant && e.actions === n.actions);
to.displayName = "ActionBar";
const fl = (e, n) => typeof n == "number" ? e.map((t, r) => r < n ? "completed" : r === n ? "current" : "upcoming") : e.map((t, r) => t.status ? t.status : r === 0 ? "current" : "upcoming"), H8 = (e, n, t) => {
  if (typeof t == "number")
    return fl(e, t);
  if (n) {
    const r = e.findIndex((s) => s.id === n);
    return fl(e, r === -1 ? void 0 : r);
  }
  return fl(e, 0);
}, B8 = (e) => e !== "completed" ? null : /* @__PURE__ */ a.jsx(
  "svg",
  {
    className: "h-3.5 w-3.5 text-white",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        d: "M5.66573 8.66573L3.8324 6.8324C3.66406 6.66406 3.38698 6.66406 3.21865 6.8324C3.05031 7.00073 3.05031 7.27781 3.21865 7.44615L5.35615 9.58365C5.52448 9.75198 5.80156 9.75198 5.9699 9.58365L10.7815 4.77207C10.9498 4.60373 10.9498 4.32665 10.7815 4.15832C10.6132 3.98998 10.3361 3.98998 10.1677 4.15832L5.66573 8.66573Z",
        fill: "currentColor"
      }
    )
  }
), V8 = (e) => {
  switch (e) {
    case "completed":
      return "bg-sky-600 border-sky-600 text-white";
    case "current":
      return "border-sky-600 text-sky-600 bg-white";
    default:
      return "border-slate-300 text-slate-400 bg-white";
  }
}, oc = (e) => {
  switch (e) {
    case "completed":
      return "bg-sky-600";
    case "current":
      return "bg-sky-300";
    default:
      return "bg-slate-200";
  }
}, z8 = ({
  steps: e,
  currentStepId: n,
  currentIndex: t,
  orientation: r = "horizontal",
  showStepNumbers: s = !0,
  onStepClick: i,
  interactive: o = !0,
  className: l,
  compact: c = !1
}) => {
  const u = H8(e, n, t), d = q(
    "w-full flex",
    r === "horizontal" ? "flex-col gap-6 md:flex-row md:gap-8" : "flex-col gap-6",
    l
  ), f = (h, g, p) => g ? null : p === "horizontal" ? /* @__PURE__ */ a.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: q(
        "hidden md:block h-px flex-1 self-center rounded-full",
        oc(h)
      )
    }
  ) : /* @__PURE__ */ a.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: q(
        "ml-4 h-12 w-0.5 rounded-full",
        oc(h)
      )
    }
  );
  return /* @__PURE__ */ a.jsx("div", { className: d, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: q(
        "flex w-full",
        r === "horizontal" ? "flex-col gap-6 md:flex-row md:items-start md:gap-6" : "flex-col gap-6"
      ),
      children: e.map((h, g) => {
        const p = h.status ?? u[g] ?? "upcoming", C = g === e.length - 1, m = o && p !== "upcoming" && !h.disabled && !!i, x = s && p !== "completed", y = /* @__PURE__ */ a.jsx(
          "div",
          {
            className: q(
              "relative flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-200",
              V8(p),
              h.disabled && "opacity-50"
            ),
            children: p === "completed" ? B8(p) : x ? g + 1 : null
          }
        ), _ = /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ a.jsx("div", { className: "flex-1 text-base font-semibold text-slate-900", children: h.title }),
            h.optional && /* @__PURE__ */ a.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-400", children: "Opcional" })
          ] }),
          h.description && /* @__PURE__ */ a.jsx("div", { className: "text-sm text-slate-600", children: h.description }),
          h.assistiveText && /* @__PURE__ */ a.jsx("div", { className: "text-xs text-slate-400", children: h.assistiveText })
        ] }), v = m ? /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            onClick: () => i == null ? void 0 : i(h, g),
            className: q(
              "flex w-full items-start gap-3 rounded-xl text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
              c && "rounded-lg px-2 py-1",
              !c && "px-2 py-2"
            ),
            "aria-current": p === "current" ? "step" : void 0,
            "aria-disabled": h.disabled,
            children: [
              /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
                "Paso ",
                g + 1
              ] }),
              y,
              /* @__PURE__ */ a.jsx("div", { className: q("flex-1", c && "text-sm"), children: _ })
            ]
          }
        ) : /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: q(
              "flex w-full items-start gap-3",
              r === "horizontal" ? "md:flex-col md:items-start md:gap-3" : ""
            ),
            "aria-current": p === "current" ? "step" : void 0,
            children: [
              y,
              /* @__PURE__ */ a.jsx("div", { className: q("flex-1", c && "text-sm"), children: _ })
            ]
          }
        );
        return /* @__PURE__ */ a.jsxs(
          "div",
          {
            className: q(
              "relative flex flex-col",
              r === "horizontal" ? "gap-4 md:flex-1 md:gap-3" : "gap-4"
            ),
            children: [
              v,
              f(p, C, r)
            ]
          },
          h.id
        );
      })
    }
  ) });
};
z8.displayName = "Stepper";
function hl({
  className: e,
  children: n
}) {
  return e += "grid", /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: e, children: n }) });
}
function fp({
  className: e = "",
  menuOpen: n = !1,
  leftCol: t,
  rightCol: r,
  children: s
}) {
  return /* @__PURE__ */ a.jsxs("div", { className: `left-0 top-0 absolute bg-Surface-surface-background inline-flex justify-between items-end ${e}`, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-cols space-between", children: [
      /* @__PURE__ */ a.jsx(
        Ra,
        {
          brandName: "Event Management",
          isExpanded: n,
          onSignOut: () => {
            alert("Message to log out");
          },
          onToggle: () => {
          },
          sections: [
            {
              id: "sales",
              items: [
                {
                  href: "/dashboard",
                  icon: "Home",
                  id: "home",
                  isActive: !0,
                  label: "home"
                },
                {
                  href: "/events",
                  icon: "Calendar",
                  id: "events",
                  label: "events"
                },
                {
                  href: "/tickets",
                  icon: "Ticket",
                  id: "tickets",
                  label: "tickets"
                },
                {
                  href: "/groups",
                  icon: "users",
                  id: "groups",
                  label: "groups"
                }
              ],
              title: "Sales"
            },
            {
              id: "customer-management",
              items: [
                {
                  href: "/customers",
                  icon: "user-cog",
                  id: "customer-mgt",
                  label: "customer mgt."
                }
              ],
              title: "Customer Management"
            },
            {
              id: "administrative",
              items: [
                {
                  href: "/seating-maps",
                  icon: "couch",
                  id: "seating-maps",
                  label: "seating maps"
                },
                {
                  href: "/pricing",
                  icon: "usd-circle",
                  id: "pricing-tables",
                  label: "pricing tables"
                },
                {
                  href: "/discounts",
                  icon: "tag",
                  id: "discounts-promos",
                  label: "discounts & promos"
                },
                {
                  href: "/data-config",
                  icon: "cabinet-filing",
                  id: "data-configuration",
                  label: "Data Configuration"
                },
                {
                  href: "/legal",
                  icon: "balance-scale",
                  id: "legal",
                  label: "ilegal"
                },
                {
                  href: "/system",
                  icon: "Settings",
                  id: "system-staff-mgt",
                  label: "system / staff mgt."
                }
              ],
              title: "Administrative"
            }
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-cols", children: [
        t && /* @__PURE__ */ a.jsxs(hl, { children: [
          " ",
          t
        ] }),
        /* @__PURE__ */ a.jsx(hl, { children: s }),
        r && /* @__PURE__ */ a.jsx(hl, { children: r })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx(to, {}) })
  ] });
}
let Yl = null;
try {
  Yl = require("next/link").default;
} catch {
}
const ql = Yl ? rr.memo(
  rr.forwardRef(
    ({ href: e, className: n, onClick: t, children: r }, s) => /* @__PURE__ */ a.jsx(Yl, { href: e, className: n, onClick: t, ref: s, children: r })
  )
) : void 0;
ql && (ql.displayName = "LinkComponent");
const P0 = ii(({ children: e }) => {
  try {
    const { usePathname: n } = require("next/navigation"), t = n();
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: e(t) });
  } catch {
    return /* @__PURE__ */ a.jsx(a.Fragment, { children: e(void 0) });
  }
});
P0.displayName = "PathnameWrapper";
const Z8 = ({
  // Sidebar props
  sidebarSections: e = [],
  sidebarExpanded: n = !0,
  onSidebarToggle: t,
  sidebarLogo: r,
  brandName: s = "Admin Panel",
  onSignOut: i,
  // Content props
  columns: o = [],
  children: l,
  // Action bar props
  actionBar: c,
  // Layout props
  className: u = "",
  contentClassName: d = "",
  sidebarClassName: f = "self-stretch ",
  headerClassName: h = "",
  footerClassName: g = "",
  // Responsive props
  mobileSidebarCollapsed: p = !0,
  onMobileSidebarToggle: C,
  // Custom components
  header: m,
  footer: x
}) => {
  const [y, _] = ce(n), [v, w] = ce(p);
  we(() => {
    _(n);
  }, [n]), we(() => {
    w(p);
  }, [p]);
  const E = He((H) => {
    _(H), t == null || t(H);
  }, [t]), N = He((H) => {
    w(H), C == null || C(H);
  }, [C]), S = He(() => {
    N(!0);
  }, [N]), k = ut(() => {
    if (o.length === 0) return "grid-cols-1";
    if (!o.every((G) => G.width))
      switch (o.length) {
        case 1:
          return "grid-cols-1";
        case 2:
          return "grid-cols-1 lg:grid-cols-2";
        case 3:
          return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
        case 4:
          return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
        default:
          return "grid-cols-1";
      }
    return "grid-cols-1 lg:grid-cols-12";
  }, [o.length, o.map((H) => H.width).join(",")]), L = He((H) => {
    switch (H) {
      case "1/3":
        return "lg:col-span-4";
      case "1/2":
        return "lg:col-span-6";
      case "2/3":
        return "lg:col-span-8";
      case "full":
        return "col-span-full lg:col-span-12";
      case "auto":
        return "lg:col-auto";
      default:
        return o.length === 1 ? "lg:col-span-12" : o.length === 2 ? "lg:col-span-6" : o.length === 3 ? "lg:col-span-4" : o.length === 4 ? "lg:col-span-3" : "lg:col-span-12";
    }
  }, [o.length]), A = ut(() => q(
    "flex-shrink-0 transition-all duration-300",
    y ? "w-80" : "w-32",
    // Mobile behavior
    "lg:relative lg:translate-x-0",
    v ? "-translate-x-full" : "translate-x-0",
    "fixed lg:static inset-y-0 left-0 z-50 h-screen lg:h-full",
    f
  ), [y, v, f]);
  return /* @__PURE__ */ a.jsxs("div", { className: q("w-full h-screen bg-slate-400 flex", u), children: [
    e.length > 0 && /* @__PURE__ */ a.jsx("div", { className: A, children: /* @__PURE__ */ a.jsx(P0, { children: (H) => /* @__PURE__ */ a.jsx(
      Ra,
      {
        sections: e,
        isExpanded: y,
        onToggle: E,
        onSignOut: i,
        logo: r,
        brandName: s,
        className: "h-full",
        LinkComponent: ql,
        currentPath: H
      }
    ) }) }),
    !v && /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
        onClick: S
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "flex-1 flex flex-col min-w-0 self-stretch", children: [
      m && /* @__PURE__ */ a.jsx("header", { className: q("flex-shrink-0", h), children: m }),
      (c == null ? void 0 : c.position) === "top" && /* @__PURE__ */ a.jsx(
        to,
        {
          actions: c.actions,
          position: "top",
          variant: c.variant,
          children: c.children
        }
      ),
      /* @__PURE__ */ a.jsx("main", { className: q("flex-1 p-6 overflow-auto", d), children: o.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: q("grid gap-6", k), children: o.map((H) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: q(
            "bg-surface-primary border border-button-grey rounded-lg p-4",
            L(H.width),
            H.className
          ),
          children: [
            H.title && /* @__PURE__ */ a.jsx("h3", { className: "text-text-primary font-semibold mb-4", children: H.title }),
            H.content
          ]
        },
        H.id
      )) }) : l }),
      (c == null ? void 0 : c.position) === "bottom" && /* @__PURE__ */ a.jsx(
        to,
        {
          actions: c.actions,
          position: "bottom",
          children: c.children,
          variant: c.variant
        }
      ),
      x && /* @__PURE__ */ a.jsx("footer", { className: q("flex-shrink-0", g), children: x })
    ] }),
    e.length > 0 && /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "fixed top-4 left-4 z-50 lg:hidden bg-cta-accent text-white p-2 rounded-lg shadow-lg",
        onClick: () => N(!v),
        children: /* @__PURE__ */ a.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
      }
    )
  ] });
}, W8 = ii(Z8, (e, n) => {
  const t = e.actionBar === n.actionBar || e.actionBar && n.actionBar && e.actionBar.title === n.actionBar.title && e.actionBar.subtitle === n.actionBar.subtitle && e.actionBar.position === n.actionBar.position && e.actionBar.variant === n.actionBar.variant && e.actionBar.actions === n.actionBar.actions;
  return !!(e.sidebarSections === n.sidebarSections && e.sidebarExpanded === n.sidebarExpanded && e.mobileSidebarCollapsed === n.mobileSidebarCollapsed && e.sidebarLogo === n.sidebarLogo && e.brandName === n.brandName && e.columns === n.columns && e.children === n.children && t && e.className === n.className && e.contentClassName === n.contentClassName && e.sidebarClassName === n.sidebarClassName && e.headerClassName === n.headerClassName && e.footerClassName === n.footerClassName && e.header === n.header && e.footer === n.footer && e.onSidebarToggle === n.onSidebarToggle && e.onSignOut === n.onSignOut && e.onMobileSidebarToggle === n.onMobileSidebarToggle);
});
W8.displayName = "Layout";
const H0 = ({ name: e, className: n }) => {
  const t = I0[e];
  return t ? /* @__PURE__ */ a.jsx(t, { className: q(n) }) : /* @__PURE__ */ a.jsx("div", { className: q("w-6 h-6 relative", n), children: /* @__PURE__ */ a.jsx("div", { className: "w-6 h-6 left-0 top-0 absolute inline-flex flex-col justify-center items-center gap-2.5", children: /* @__PURE__ */ a.jsx("div", { className: "w-5 h-4 relative overflow-hidden", children: /* @__PURE__ */ a.jsx("div", { className: "w-5 h-4 left-0 top-[1.11px] absolute bg-CTA-and-buttons-Icons-icon-secondary" }) }) }) });
};
function U8(e) {
  const { item: n, onCollapseHandler: t } = e, { id: r, headerBadgeContent: s, headerTitle: i, bodyContent: o, isActive: l, disabled: c } = n || {};
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: q(
        "w-full mb-5",
        l ? "border-t-4 border-accordion-border-accent-active" : c ? "border-t border-accordion-border-accent-disabled" : "border-t border-accordion-border-accent"
      ),
      children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            type: "button",
            disabled: c,
            "aria-expanded": l,
            onClick: () => t(r),
            className: q(
              "w-full min-h-16 p-4 border-b flex items-center text-left",
              c ? "cursor-not-allowed border-accordion-border-accent-disabled text-accordion-border-accent-disabled" : "cursor-pointer",
              l ? "border-accordion-border-accent-active text-accordion-border-accent-active" : !c && "border-accordion-border-accent text-text-primary hover:text-accordion-border-accent-active"
            ),
            children: [
              s && /* @__PURE__ */ a.jsx(
                "span",
                {
                  className: q(
                    "inline-flex w-9 h-9 mr-2.5 border rounded-full items-center justify-center shrink-0",
                    l ? "bg-accordion-border-accent-active border-accordion-border-accent-active text-white" : c ? "border-accordion-border-accent-disabled text-accordion-border-accent-disabled" : "border-accordion-border-accent"
                  ),
                  children: s
                }
              ),
              /* @__PURE__ */ a.jsx("span", { className: "flex-1", children: i }),
              /* @__PURE__ */ a.jsx("span", { className: "inline-flex w-6 h-6 items-center justify-center shrink-0 ml-2", children: /* @__PURE__ */ a.jsx(
                H0,
                {
                  name: "ChevronTop",
                  className: q(
                    "transition-transform duration-300",
                    l ? "rotate-0" : "rotate-180"
                  )
                }
              ) })
            ]
          }
        ),
        l && /* @__PURE__ */ a.jsx("div", { className: q("p-4"), children: o })
      ]
    }
  );
}
function K8(e, n, t) {
  if (n != null && n !== "")
    return [n];
  const r = e.filter((s) => s.isActive).map((s) => s.id);
  return t ? r.slice(0, 1) : r;
}
function hp({
  className: e = "",
  data: n = [],
  defaultActive: t,
  isSingleActive: r = !1,
  onActiveChange: s
}) {
  const [i, o] = ce(
    () => K8(n, t, r)
  ), [l, c] = ce(t);
  t !== l && (c(t), t != null && t !== "" && o((d) => r ? d.length === 1 && d[0] === t ? d : [t] : d.includes(t) ? d : [...d, t]));
  const u = (d) => {
    const f = i.includes(d), h = r ? f ? [] : [d] : f ? i.filter((g) => g !== d) : [...i, d];
    o(h), s == null || s(r ? h[0] ?? null : d);
  };
  return /* @__PURE__ */ a.jsx("div", { className: q("flex flex-col w-full min-w-[320px]", e), children: n.map((d) => /* @__PURE__ */ a.jsx(
    U8,
    {
      item: {
        ...d,
        isActive: i.includes(d.id)
      },
      onCollapseHandler: u
    },
    d.id
  )) });
}
const G8 = ({ anchor: e, node: n, onClose: t, onEdit: r, onDelete: s, onPin: i, onMove: o, onAdd: l }) => {
  const c = Kt(null);
  if (we(() => {
    const f = (h) => {
      c.current && !c.current.contains(h.target) && e && !e.contains(h.target) && t();
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [t, e]), !e) return null;
  const u = e.getBoundingClientRect(), d = n.type === "client";
  return /* @__PURE__ */ a.jsxs("div", { ref: c, style: { top: u.bottom + window.screenY + 4, left: u.left + window.scrollX - 40 }, className: "popoverStyle", children: [
    /* @__PURE__ */ a.jsx("div", { className: "arrowStyle" }),
    l && /* @__PURE__ */ a.jsx("button", { className: "popoverBtn", onClick: () => {
      l == null || l(n), t();
    }, children: " Add Location" }),
    r && !d && /* @__PURE__ */ a.jsx("button", { className: "popoverBtn", onClick: () => {
      r == null || r(n), t();
    }, children: "Edit " }),
    s && !d && /* @__PURE__ */ a.jsx("button", { className: "popoverBtn", onClick: () => {
      s == null || s(n), t();
    }, children: "Delete " }),
    i && !d && /* @__PURE__ */ a.jsx("button", { className: "popoverBtn", onClick: () => {
      i == null || i(n), t();
    }, children: "Pin " }),
    o && !d && /* @__PURE__ */ a.jsx("button", { className: "popoverBtn", onClick: () => {
      o == null || o(n), t();
    }, children: "Move " })
  ] });
}, B0 = (e, n) => {
  if (!n.trim()) return e;
  const t = n.toLowerCase(), r = [];
  for (const s of e) {
    const i = s.label.toLowerCase().includes(t), o = s.children ? B0(s.children, n) : [];
    (i || o.length > 0) && r.push({
      ...s,
      children: o.length ? o : void 0
    });
  }
  return r;
}, gp = ({
  className: e = "",
  data: n,
  activeId: t,
  defaultActiveId: r,
  onActiveChange: s,
  expandedIds: i,
  defaultExpandedIds: o,
  onExpandedChange: l,
  onMoreClick: c,
  renderLabel: u,
  indent: d = 16,
  showMoreButton: f = !1,
  onEdit: h,
  onDelete: g,
  onPin: p,
  onMove: C,
  onAdd: m,
  showActiveId: x = !1,
  showSearchbar: y = !1
}) => {
  const [_, v] = ce(r), w = t !== void 0, E = w ? t : _, [N, S] = ce(() => o ?? []), [k, L] = ce({ anchor: null, node: null }), [A, H] = ce(""), G = A.trim().length > 0, O = i !== void 0, K = O ? i : N, X = ut(() => new Set(K), [K]), se = He((Z) => {
    const fe = new Set(K);
    fe.has(Z) ? fe.delete(Z) : fe.add(Z);
    const te = Array.from(fe);
    O || S(te);
  }, [K, O, l]), ee = He((Z) => {
    w || v(Z.id), s == null || s(Z);
  }, [w, s]), R = (Z, fe) => {
    L({ anchor: fe.currentTarget, node: Z });
  }, V = () => L({ anchor: null, node: null }), F = ut(() => G ? B0(n, A) : n, [n, A, G]);
  we(() => {
    if (!A) return;
    const Z = [], fe = (te) => {
      var Q;
      for (const ge of te)
        (Q = ge.children) != null && Q.length && (Z.push(ge.id), fe(ge.children));
    };
    fe(F), O || S(Z), l == null || l(Z);
  }, [G, F]);
  const U = He((Z, fe) => Z.map((te) => {
    const Q = !!(te.children && te.children.length), ge = X.has(te.id), $e = te.id === E, Ge = fe * d;
    return /* @__PURE__ */ a.jsxs("div", { role: "none", children: [
      /* @__PURE__ */ a.jsxs("div", { style: { paddingLeft: Ge }, className: "rowStyle", role: "treeitem", "aria-expanded": Q ? ge : void 0, "aria-selected": $e, children: [
        Q ? /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-label": ge ? "Collapse" : "Expand",
            onClick: (dt) => {
              dt.stopPropagation(), se(te.id);
            },
            className: "expandButtonStyle",
            children: /* @__PURE__ */ a.jsx(
              H0,
              {
                name: "Chevron Down",
                className: q(
                  "transition-transform duration-300",
                  ge ? "rotate-0" : "-rotate-90"
                )
              }
            )
          }
        ) : /* @__PURE__ */ a.jsx("span", { className: "expandSpacerStyle" }),
        /* @__PURE__ */ a.jsxs("button", { type: "button", className: q("labelButtonBase", $e ? "labelButtonActive" : ""), onClick: () => ee(te), children: [
          te.icon && /* @__PURE__ */ a.jsxs("span", { className: "iconWrapperStyle", children: [
            " ",
            te.icon
          ] }),
          /* @__PURE__ */ a.jsx("span", { children: u ? u(te) : te.label ?? te.id })
        ] }),
        f && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            "aria-label": "More Actions",
            className: "moreButtonStyle",
            onClick: (dt) => {
              dt.stopPropagation(), R(te, dt);
            },
            children: "..."
          }
        )
      ] }),
      Q && ge && /* @__PURE__ */ a.jsx("div", { role: "group", children: U(te.children, fe + 1) })
    ] }, te.id);
  }), [E, X, ee, se, d, c, u]), ie = y ? "calc(100% - 50px)" : "100%";
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    x && /* @__PURE__ */ a.jsxs("h2", { className: "activeIdWrapper", children: [
      "Active Element id: ",
      /* @__PURE__ */ a.jsx("b", { children: E }),
      " "
    ] }),
    /* @__PURE__ */ a.jsxs("div", { role: "tree", className: q("treeWrapper", e), children: [
      y && /* @__PURE__ */ a.jsx("div", { className: "searchWrapper", children: /* @__PURE__ */ a.jsx("input", { type: "text", placeholder: "Search here ..", value: A, onChange: (Z) => H(Z.target.value) }) }),
      /* @__PURE__ */ a.jsx("div", { style: { height: ie }, className: "overflow-auto", children: U(F, 0) }),
      k.node && k.anchor && /* @__PURE__ */ a.jsx(
        G8,
        {
          anchor: k.anchor,
          node: k.node,
          onClose: V,
          onEdit: h,
          onDelete: g,
          onPin: p,
          onMove: C,
          onAdd: m
        }
      )
    ] })
  ] });
};
function D(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function V0(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  t.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const it = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Y8 = it && "documentMode" in document ? document.documentMode : null, Zt = it && /Mac|iPod|iPhone|iPad/.test(navigator.platform), vn = it && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Xr = !(!it || !("InputEvent" in window) || Y8) && "getTargetRanges" in new window.InputEvent("input"), Hn = it && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, z0 = it && /Android/.test(navigator.userAgent), oi = it && /Version\/[\d.]+.*Safari/.test(navigator.userAgent) && !z0, Z0 = it && /^(?=.*Chrome).*/i.test(navigator.userAgent), no = it && z0 && Z0, li = it && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && Zt && !Z0, q8 = 0, J8 = 1, X8 = 2, lc = 1, ac = 2, cc = 4, uc = 8, Q8 = 16, gl = 32, pl = 64, Pa = 128, e6 = 1, t6 = 2, n6 = 3, r6 = 4, s6 = 5, i6 = 6, zs = oi || Hn || li ? " " : "​", Qn = `

`, Ha = vn ? " " : zs, Bn = { bold: 1, capitalize: 1024, code: 16, highlight: Pa, italic: 2, lowercase: 256, strikethrough: 4, subscript: 32, superscript: 64, underline: 8, uppercase: 512 }, o6 = { directionless: 1, unmergeable: 2 }, ro = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, l6 = { [t6]: "center", [i6]: "end", [r6]: "justify", [e6]: "left", [n6]: "right", [s6]: "start" }, a6 = { normal: 0, segmented: 2, token: 1 }, c6 = { [q8]: "normal", [X8]: "segmented", [J8]: "token" }, dc = "$config";
function fc() {
  return De()._blockCursorElement;
}
function u6(e) {
  return e !== null && e.nodeType === 1 && e.hasAttribute("data-lexical-slot");
}
let W0 = class Wi {
  constructor(n, t, r) {
    M(this, "element");
    M(this, "before");
    M(this, "after");
    this.element = n, this.before = t || null, this.after = r || null;
  }
  withBefore(n) {
    return new Wi(this.element, n, this.after);
  }
  withAfter(n) {
    return new Wi(this.element, this.before, n);
  }
  withElement(n) {
    return this.element === n ? this : new Wi(n, this.before, this.after);
  }
  insertChild(n) {
    const t = this.getInsertionAnchor();
    return t !== null && t.parentElement !== this.element && D(357), this.element.insertBefore(n, t), this;
  }
  removeChild(n) {
    return n.parentElement !== this.element && D(358), this.element.removeChild(n), this;
  }
  replaceChild(n, t) {
    return t.parentElement !== this.element && D(359), this.element.replaceChild(n, t), this;
  }
  getFirstChild() {
    const n = this.getFirstChildAnchor(), t = n ? n.nextSibling : this.element.firstChild;
    return t === this.getInsertionAnchor() ? null : t;
  }
  getFirstChildAnchor() {
    return this.after;
  }
  resolveLeafPosition(n, t, r) {
    if (this.element === n) return t === n && r === 0 ? "before" : "after";
    const s = hc(n, this.element);
    if (s === null) return "after";
    const i = Array.prototype.indexOf.call(n.childNodes, s);
    if (i < 0) return "after";
    if (t === n) return r <= i ? "before" : "after";
    const o = hc(n, t);
    if (o === null) return "after";
    const l = Array.prototype.indexOf.call(n.childNodes, o);
    return l >= 0 && l <= i ? "before" : "after";
  }
  getInsertionAnchor() {
    return this.before;
  }
};
function hc(e, n) {
  let t = n;
  for (; t !== null && t.parentNode !== e; ) t = t.parentNode;
  return t;
}
let U0 = class Ui extends W0 {
  withBefore(n) {
    return new Ui(this.element, n, this.after);
  }
  withAfter(n) {
    return new Ui(this.element, this.before, n);
  }
  withElement(n) {
    return this.element === n ? this : new Ui(n, this.before, this.after);
  }
  getInsertionAnchor() {
    return super.getInsertionAnchor() || this.getManagedLineBreak();
  }
  getFirstChildAnchor() {
    let n = super.getFirstChildAnchor(), t = n ? n.nextSibling : this.element.firstChild;
    for (; u6(t); ) n = t, t = t.nextSibling;
    const r = n ? n.nextSibling : this.element.firstChild;
    return r !== null && r === fc() ? r : n;
  }
  getManagedLineBreak() {
    return this.element.__lexicalLineBreak || null;
  }
  setManagedLineBreak(n) {
    if (this.element.__lexicalLastChildKind = n, n === null) this.removeManagedLineBreak();
    else {
      const t = n === "decorator" && (li || Hn || oi);
      this.insertManagedLineBreak(t);
    }
  }
  removeManagedLineBreak() {
    const n = this.getManagedLineBreak();
    if (n) {
      const t = this.element, r = n.nodeName === "IMG" ? n.nextSibling : null;
      r && t.removeChild(r), t.removeChild(n), t.__lexicalLineBreak = void 0;
    }
  }
  insertManagedLineBreak(n) {
    const t = this.getManagedLineBreak();
    if (t) {
      if (n === (t.nodeName === "IMG")) return;
      this.removeManagedLineBreak();
    }
    const r = this.element, s = this.before, i = je().createElement("br");
    if (i.setAttribute("data-lexical-managed-linebreak", "true"), r.insertBefore(i, s), n) {
      const o = je().createElement("img");
      o.setAttribute("data-lexical-managed-linebreak", "true"), o.style.setProperty("display", "inline", "important"), o.style.setProperty("border", "0px", "important"), o.style.setProperty("margin", "0px", "important"), o.alt = "", r.insertBefore(o, i), r.__lexicalLineBreak = o;
    } else r.__lexicalLineBreak = i;
  }
  getFirstChildOffset() {
    const n = this.getFirstChild(), t = this.getInsertionAnchor();
    let r = 0;
    for (let s = this.element.firstChild; s !== null && s !== n && s !== t; s = s.nextSibling) r++;
    return r;
  }
  resolveChildIndex(n, t, r, s) {
    if (r === this.element) {
      const c = this.getFirstChildOffset(), u = fc(), d = this.element.childNodes, f = Math.min(s, d.length);
      let h = 0;
      for (let g = c; g < f; g++) d[g] !== u && h++;
      return [n, Math.min(h, n.getChildrenSize())];
    }
    const i = gc(t, r);
    i.push(s);
    const o = gc(t, this.element);
    let l = n.getIndexWithinParent();
    for (let c = 0; c < o.length; c++) {
      const u = i[c], d = o[c];
      if (u === void 0 || u < d) break;
      if (u > d) {
        l += 1;
        break;
      }
    }
    return [n.getParentOrThrow(), l];
  }
};
function gc(e, n) {
  const t = [];
  let r = n;
  for (; r !== e && r !== null; r = r.parentNode) {
    let s = 0;
    for (let i = r.previousSibling; i !== null; i = i.previousSibling) s++;
    t.push(s);
  }
  return r !== e && D(225), t.reverse();
}
let K0;
try {
  K0 = "0.49.0+prod.esm";
} catch {
}
const G0 = K0 ?? '"<unknown>+source"';
let bs = class {
  constructor() {
    M(this, "_front", /* @__PURE__ */ new Set());
    M(this, "_back", /* @__PURE__ */ new Set());
    M(this, "_cache");
  }
  get size() {
    return this._front.size + this._back.size;
  }
  addBack(n) {
    return delete this._cache, this._front.has(n) || this._back.add(n), this;
  }
  addFront(n) {
    return delete this._cache, this._back.has(n) || this._front.add(n), this;
  }
  delete(n) {
    return delete this._cache, this._front.delete(n) || this._back.delete(n);
  }
  toArray() {
    const n = Array.from(this._front).reverse();
    for (const t of this._back) n.push(t);
    return n;
  }
  toReadonlyArray() {
    return this._cache = this._cache || this.toArray(), this._cache;
  }
  [Symbol.iterator]() {
    return this.toReadonlyArray()[Symbol.iterator]();
  }
};
const Gn = null;
function Y0(e, n = 1e3) {
  return e instanceof Jl ? e.clone() : e.size < n ? new Map(e) : new Jl().init(new Map(e), void 0, e.size);
}
let Jl = class q0 {
  constructor() {
    M(this, "_mutable", !1);
    M(this, "_old");
    M(this, "_nursery");
    M(this, "_size", 0);
  }
  clone() {
    return this._mutable = !1, new q0().init(this._old, this._nursery, this._size);
  }
  init(n, t, r) {
    return this._old = n, this._nursery = t, this._size = r, this;
  }
  get size() {
    return this._size;
  }
  has(n) {
    return this.get(n) !== void 0;
  }
  getWithTombstone(n) {
    const t = this._nursery && this._nursery.get(n);
    return t !== void 0 ? t : this._old && this._old.get(n);
  }
  get(n) {
    const t = this.getWithTombstone(n);
    return t === Gn ? void 0 : t;
  }
  shouldCompact() {
    return this._nursery !== void 0 && 2 * this._nursery.size > this._size;
  }
  getNursery() {
    return this._mutable && this._nursery || (this.compact(), this._nursery = new Map(this._nursery), this._mutable = !0), this._nursery;
  }
  compact(n = !1) {
    if (this._nursery && this._nursery.size > 0 && (n || this.shouldCompact())) {
      const t = new Map(this._old);
      for (const [r, s] of this._nursery) s !== Gn ? t.set(r, s) : t.delete(r);
      this._old = t, this._nursery = void 0;
    }
    return this._mutable = !1, this;
  }
  set(n, t) {
    const r = this.getWithTombstone(n);
    if (r === t) return this;
    const s = this.getNursery();
    return r !== Gn && r !== void 0 || (this._size++, r === Gn && s.delete(n)), s.set(n, t), this;
  }
  delete(n) {
    const t = this.has(n);
    return t && (this.getNursery().set(n, Gn), this._size--), t;
  }
  getOrInsert(n, t) {
    const r = this.get(n);
    return r !== void 0 ? r : (this.set(n, t), t);
  }
  getOrInsertComputed(n, t) {
    const r = this.get(n);
    if (r !== void 0) return r;
    const s = t(n);
    return this.set(n, s), s;
  }
  clear() {
    this._mutable = !1, this._old = void 0, this._nursery = void 0, this._size = 0;
  }
  *keys() {
    for (const n of this.entries()) yield n[0];
  }
  *values() {
    for (const n of this.entries()) yield n[1];
  }
  *entries() {
    const n = this._nursery, t = this._old;
    if (t) for (const r of t) {
      const s = r[0], i = n ? n.get(s) : void 0;
      i !== Gn && (i !== void 0 && (r[1] = i), yield r);
    }
    if (n) for (const r of n) r[1] === Gn || t && t.has(r[0]) || (yield r);
  }
  forEach(n, t) {
    t !== void 0 && (n = n.bind(t));
    for (const [r, s] of this.entries()) n(s, r, this);
  }
  get [Symbol.toStringTag]() {
    return "GenMap";
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
function so(e, n, t, r, s, i) {
  if (T(e)) {
    let o = e.getFirstChild();
    for (; o !== null; ) {
      const l = o.__key;
      o.__parent === n && ((T(o) || _n(o) && o.__slots !== null) && so(o, l, t, r, s, i), t.has(l) || i.delete(l), s.push(l)), o = o.getNextSibling();
    }
  }
  for (const o of _n(e) && e.__slots !== null ? e.__slots.values() : []) {
    const l = r.get(o);
    l !== void 0 && ur(l) && l.__slotHost === n && ((T(l) || _n(l) && l.__slots !== null) && so(l, o, t, r, s, i), t.has(o) || i.delete(o), s.push(o));
  }
}
let Xl = !1, Ba = 0;
function d6(e) {
  Ba = e.timeStamp;
}
function ml(e, n, t) {
  const r = e.nodeName === "BR", s = n.__lexicalLineBreak;
  return s && (e === s || r && e.previousSibling === s) || r && cs(e, t) !== void 0;
}
function f6(e, n, t) {
  const r = mt(wt(t)), s = r && Pt(r, t._rootElement);
  let i = null, o = null;
  s !== null && s.anchorNode === e && (i = s.anchorOffset, o = s.focusOffset);
  const l = e.nodeValue;
  l !== null && e1(n, l, i, o, !1);
}
function h6(e, n, t) {
  if (I(e)) {
    const r = e.anchor.getNode();
    if (r.is(t) && e.format !== r.getFormat()) return !1;
  }
  return vt(n) && t.isAttached();
}
function g6(e, n, t) {
  for (let r = e; r && !A5(r); r = br(r)) {
    const s = cs(r, n);
    if (s !== void 0) {
      const i = Le(s, t);
      if (i) return de(i) || !oe(r) ? void 0 : [r, i];
    }
  }
}
function J0(e, n, t) {
  Xl = !0;
  const r = performance.now() - Ba > 100;
  try {
    Ot(e, () => {
      const s = B() || function(f) {
        return f.read("latest", () => {
          const h = B();
          return h !== null ? h.clone() : null;
        });
      }(e), i = /* @__PURE__ */ new Map(), o = e._editorState, l = e._blockCursorElement;
      let c = !1, u = "";
      for (let f = 0; f < n.length; f++) {
        const h = n[f], g = h.type, p = h.target, C = g6(p, e, o);
        if (!C) continue;
        const [m, x] = C;
        if (g === "characterData") r && $(x) && vt(p) && h6(s, p, x) && f6(p, x, e);
        else if (g === "childList") {
          c = !0;
          const y = h.addedNodes;
          for (let w = 0; w < y.length; w++) {
            const E = y[w], N = x5(E), S = E.parentNode;
            if (!(S == null || E === l || N !== null || ml(E, S, e) || e._slotsUsed && oe(E) && E.hasAttribute("data-lexical-slot") || A5(E))) {
              if (vn) {
                const k = (oe(E) ? E.innerText : null) || E.nodeValue;
                k && (u += k);
              }
              S.removeChild(E);
            }
          }
          const _ = h.removedNodes, v = _.length;
          if (v > 0) {
            let w = 0;
            for (let E = 0; E < v; E++) {
              const N = _[E];
              (ml(N, p, e) || l === N) && (p.appendChild(N), w++);
            }
            v !== w && i.set(m, x);
          }
        }
      }
      if (i.size > 0) for (const [f, h] of i) h.reconcileObservedMutation(f, e);
      const d = t.takeRecords();
      if (d.length > 0) {
        for (let f = 0; f < d.length; f++) {
          const h = d[f], g = h.addedNodes, p = h.target;
          for (let C = 0; C < g.length; C++) {
            const m = g[C], x = m.parentNode;
            x == null || m.nodeName !== "BR" || ml(m, p, e) || x.removeChild(m);
          }
        }
        t.takeRecords();
      }
      s !== null && (c && Xe(s), vn && w5(e) && s.insertRawText(u));
    });
  } finally {
    Xl = !1;
  }
}
function X0(e) {
  const n = e._observer;
  n !== null && J0(e, n.takeRecords(), n);
}
function Q0(e) {
  (function(n) {
    Ba === 0 && wt(n).addEventListener("textInput", d6, !0);
  })(e), e._observer = new MutationObserver((n, t) => {
    J0(e, n, t);
  });
}
const pc = "latest";
let p6 = class {
  constructor(n, t) {
    M(this, "key");
    M(this, "parse");
    M(this, "unparse");
    M(this, "isEqual");
    M(this, "defaultValue");
    M(this, "resetOnCopyNode");
    this.key = n, this.parse = t.parse.bind(t), this.unparse = (t.unparse || y6).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0), this.resetOnCopyNode = t.resetOnCopyNode || !1;
  }
};
function ed(e, n) {
  return new p6(e, n);
}
function td(e, n, t = pc) {
  const r = (t === pc ? e.getLatest() : e).__state;
  return r ? r.getValue(n) : n.defaultValue;
}
function m6(e, n, t) {
  let r;
  if (Ye(), typeof t == "function") {
    const i = e.getLatest(), o = td(i, n);
    if (r = t(o), n.isEqual(o, r)) return i;
  } else r = t;
  const s = e.getWritable();
  return rd(s).updateFromKnown(n, r), s;
}
function x6(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  for (const { ownNodeConfig: r } of i1(typeof e == "function" ? e : e.replace)) if (r && r.stateConfigs) for (const s of r.stateConfigs) {
    let i;
    "stateConfig" in s ? (i = s.stateConfig, s.flat && t.add(i.key)) : i = s, n.set(i.key, i);
  }
  return { flatKeys: t, sharedConfigMap: n };
}
const mc = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
let C6 = class nd {
  constructor(n, t, r = void 0, s = /* @__PURE__ */ new Map(), i = void 0) {
    M(this, "node");
    M(this, "knownState");
    M(this, "unknownState");
    M(this, "sharedNodeState");
    M(this, "size");
    this.node = n, this.sharedNodeState = t, this.unknownState = r, this.knownState = s;
    const { sharedConfigMap: o } = this.sharedNodeState, l = i !== void 0 ? i : function(c, u, d) {
      let f = d.size;
      if (u) for (const h in u) {
        const g = c.get(h);
        g && d.has(g) || f++;
      }
      return f;
    }(o, r, s);
    this.size = l;
  }
  getValue(n) {
    const t = this.knownState.get(n);
    if (t !== void 0) return t;
    this.sharedNodeState.sharedConfigMap.set(n.key, n);
    let r = n.defaultValue;
    if (this.unknownState && n.key in this.unknownState) {
      const s = this.unknownState[n.key];
      s !== void 0 && (r = n.parse(s)), this.updateFromKnown(n, r);
    }
    return r;
  }
  getInternalState() {
    return [this.unknownState, this.knownState];
  }
  toJSON() {
    const n = { ...this.unknownState }, t = {};
    for (const [r, s] of this.knownState) r.isEqual(s, r.defaultValue) ? delete n[r.key] : n[r.key] = r.unparse(s);
    for (const r of this.sharedNodeState.flatKeys) r in n && (t[r] = n[r], delete n[r]);
    return xc(n) && (t.$ = n), t;
  }
  getWritable(n) {
    if (this.node === n) return this;
    const { sharedNodeState: t, unknownState: r } = this, s = new Map(this.knownState);
    return new nd(n, t, function(i, o, l) {
      let c;
      if (l) for (const [u, d] of Object.entries(l)) {
        if (mc.has(u)) continue;
        const f = i.get(u);
        f ? o.has(f) || o.set(f, f.parse(d)) : (c = c || {}, c[u] = d);
      }
      return c;
    }(t.sharedConfigMap, s, r), s, this.size);
  }
  resetOnCopyNode() {
    for (const n of this.knownState.keys()) n.resetOnCopyNode && this.knownState.set(n, n.defaultValue);
    return this;
  }
  updateFromKnown(n, t) {
    const r = n.key;
    this.sharedNodeState.sharedConfigMap.set(r, n);
    const { knownState: s, unknownState: i } = this;
    s.has(n) || i && r in i || (i && (delete i[r], this.unknownState = xc(i)), this.size++), s.set(n, t);
  }
  updateFromUnknown(n, t) {
    if (mc.has(n)) return;
    const r = this.sharedNodeState.sharedConfigMap.get(n);
    r ? this.updateFromKnown(r, r.parse(t)) : (this.unknownState = this.unknownState || {}, n in this.unknownState || this.size++, this.unknownState[n] = t);
  }
  updateFromJSON(n) {
    const { knownState: t } = this;
    for (const r of t.keys()) t.set(r, r.defaultValue);
    if (this.size = t.size, this.unknownState = void 0, n) for (const [r, s] of Object.entries(n)) this.updateFromUnknown(r, s);
  }
};
function rd(e) {
  const n = e.getWritable(), t = n.__state ? n.__state.getWritable(n) : new C6(n, sd(n));
  return n.__state = t, t;
}
function sd(e) {
  return e.__state ? e.__state.sharedNodeState : g5(De(), e.getType()).sharedNodeState;
}
function xc(e) {
  if (e) for (const n in e) return e;
}
function y6(e) {
  return e;
}
function Cc(e, n, t) {
  for (const [r, s] of n.knownState) {
    if (e.has(r.key)) continue;
    e.add(r.key);
    const i = t ? t.getValue(r) : r.defaultValue;
    if (i !== s && !r.isEqual(i, s)) return !0;
  }
  return !1;
}
function yc(e, n, t) {
  const { unknownState: r } = n, s = t ? t.unknownState : void 0;
  if (r) {
    for (const [i, o] of Object.entries(r))
      if (!e.has(i) && (e.add(i), o !== (s ? s[i] : void 0)))
        return !0;
  }
  return !1;
}
function _c(e, n) {
  const t = e.__state;
  return t && t.node === e ? t.getWritable(n) : t;
}
function bc(e, n) {
  const t = e.__mode, r = e.__format, s = e.__style, i = n.__mode, o = n.__format, l = n.__style, c = e.__state, u = n.__state;
  return (t === null || t === i) && (r === null || r === o) && (s === null || s === l) && (e.__state === null || c === u || function(d, f) {
    if (d === f) return !0;
    const h = /* @__PURE__ */ new Set();
    return !(d && Cc(h, d, f) || f && Cc(h, f, d) || d && yc(h, d, f) || f && yc(h, f, d));
  }(c, u));
}
function vc(e, n) {
  const t = e.mergeWithSibling(n), r = be()._normalizedNodes;
  return r.add(e.__key), r.add(n.__key), t;
}
function wc(e) {
  let n, t, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (n = r.getPreviousSibling()) !== null && $(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (bc(n, r)) {
          r = vc(n, r);
          break;
        }
        break;
      }
      n.remove();
    }
    for (; (t = r.getNextSibling()) !== null && $(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (bc(r, t)) {
          r = vc(r, t);
          break;
        }
        break;
      }
      t.remove();
    }
  } else r.remove();
}
function Cn(e) {
  return Sc(e.anchor), Sc(e.focus), e;
}
function Sc(e) {
  for (; e.type === "element"; ) {
    const n = e.getNode(), t = e.offset;
    let r, s;
    if (t === n.getChildrenSize() ? (r = n.getChildAtIndex(t - 1), s = !0) : (r = n.getChildAtIndex(t), s = !1), $(r)) {
      e.set(r.__key, s ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!T(r)) break;
    e.set(r.__key, s ? r.getChildrenSize() : 0, "element", !0);
  }
}
const Zs = Symbol.for("@lexical/CachedTextSize");
function kc(e, n) {
  return ea.read(() => {
    let t = 0, r = e;
    for (let s = 0; s < n && r !== null; s++) {
      const i = Wt.get(r);
      if (i === void 0 && D(345, r), T(i)) {
        const o = Ie.get(r);
        if (o !== void 0 && T(o) && o.__parent !== i.__parent) t += i.getTextContentSize();
        else {
          const l = sr.get(r), c = l && l.__lexicalTextContent;
          typeof c != "string" && D(346, i.getType()), t += c.length;
        }
        s < n - 1 && !i.isInline() && (t += 2);
      } else {
        const o = i[Zs];
        o === void 0 && D(347, i.getType(), r), t += o;
      }
      r = i.__next;
    }
    return t;
  }, { editor: Ce });
}
function id(e) {
  T(e) || e[Zs] === void 0 && (e[Zs] = $(e) ? e.__text.length : e.getTextContentSize());
}
const _6 = 4;
let Ws, Ce, Us, ue = "", Pe = null, at = null, tt = null;
function nn() {
  return { firstTextKey: tt, format: Pe, style: at };
}
function Mt(e) {
  e.firstTextKey !== null && (Pe = e.format, at = e.style, tt = e.firstTextKey);
}
function Ql(e) {
  if (tt !== null) return;
  const n = e.__lexicalFirstTextKey;
  if (n === void 0 && D(348), n === null) return;
  const t = Ie.get(n);
  $(t) && (Pe = t.getFormat(), at = t.getStyle(), tt = n);
}
let Oo, Rs, Ps, Wt, ea, Ie, sr, ta, Ks, ir, xn = !1, io = !1;
function $n(e, n) {
  const t = Wt.get(e), r = Ie.has(e);
  if (n !== null) {
    const s = oa(e);
    s.parentNode === n && n.removeChild(s);
  }
  if (!r) {
    if (Ce._keyToDOMMap.delete(e), T(t)) {
      const s = Eo(t, Wt);
      na(s, 0, s.length - 1, null);
    }
    if (t !== void 0) {
      for (const s of Nt(t).values()) {
        const i = sa(s);
        $n(s, null), i !== null && i.remove();
      }
      t1(Ks, Us, Oo, t, "destroyed");
    }
  }
}
function na(e, n, t, r) {
  for (let s = n; s <= t; ++s) {
    const i = e[s];
    i !== void 0 && $n(i, r);
  }
}
function Yn(e, n) {
  e.setProperty("text-align", n);
}
const b6 = "40px";
function od(e, n) {
  const t = Ws.theme.indent;
  if (typeof t == "string") {
    const r = e.classList.contains(t);
    n > 0 && !r ? e.classList.add(t) : n < 1 && r && e.classList.remove(t);
  }
  e.style.setProperty("padding-inline-start", n === 0 ? "" : `calc(${n} * var(--lexical-indent-base-value, ${b6}))`);
}
function ld(e, n) {
  const t = e.style;
  n === 0 ? Yn(t, "") : n === 1 ? Yn(t, "left") : n === 2 ? Yn(t, "center") : n === 3 ? Yn(t, "right") : n === 4 ? Yn(t, "justify") : n === 5 ? Yn(t, "start") : n === 6 && Yn(t, "end");
}
function ra(e, n) {
  const t = function(r) {
    const s = r.__dir;
    if (s !== null) return s;
    if (ze(r)) return null;
    const i = r.getParent();
    return i === null || Me(i) && i.__dir === null ? "auto" : null;
  }(n);
  t !== null ? e.dir = t : e.removeAttribute("dir");
}
function ad(e) {
  const n = je().createElement("div");
  return n.setAttribute("data-lexical-slot", e), n.style.display = "none", n;
}
function cd(e, n, t) {
  n || e.contentEditable === "false" ? $3(t, Ce) : t.removeAttribute("contenteditable");
}
function Ec(e, n, t) {
  const r = ue, s = nn();
  ue = "";
  let i = "";
  const o = de(e);
  for (const [l, c] of t) {
    const u = ad(l);
    cd(n, o, u), n.appendChild(u), ue = "";
    const d = nn();
    Rn(c, Ht(e, u, Ce)), Mt(d), ud(e, l, n, u), i += ue;
  }
  return Mt(s), ue = r, i;
}
function Nt(e) {
  return _n(e) && e.__slots !== null ? e.__slots : O5;
}
function ud(e, n, t, r) {
  const s = ir.$getSlotTargetElement(e, n, t, Ce);
  s !== null && (r.parentElement !== s && s.appendChild(r), r.style.display = "");
}
function sa(e) {
  const n = sr.get(e);
  return n !== void 0 ? n.parentElement : null;
}
function Nc(e, n, t) {
  const r = Nt(e), s = Nt(n);
  for (const [d, f] of r) if (!s.has(d)) {
    const h = sa(f);
    $n(f, null), h !== null && h.remove();
  }
  const i = ue, o = nn();
  let l = "", c = null;
  const u = de(n);
  for (const [d, f] of s) {
    const h = r.get(d);
    let g = h !== void 0 ? sa(h) : null;
    ue = "";
    const p = nn();
    if (g === null) {
      g = ad(d);
      let C = null;
      for (const m of t.children) if (!m.hasAttribute("data-lexical-slot")) {
        C = m;
        break;
      }
      t.insertBefore(g, C), Rn(f, Ht(n, g, Ce));
    } else h === f ? pn(f, g) : (h !== void 0 && $n(h, g), Rn(f, Ht(n, g, Ce)));
    if (Mt(p), cd(t, u, g), ud(n, d, t, g), l += ue, g.parentElement === t) {
      const C = c === null ? t.firstChild : c.nextSibling;
      C !== g && t.insertBefore(g, C), c = g;
    }
  }
  return Mt(o), ue = i, l;
}
function Rn(e, n) {
  const t = Ie.get(e);
  if (t === void 0 && D(60), n !== null) {
    const s = Wt.get(e);
    if (s !== void 0) {
      const i = sr.get(e);
      if (i !== void 0) {
        const o = ur(s) ? s.__slotHost : null, l = ur(t) ? t.__slotHost : null, c = s.__parent !== t.__parent || o !== l, u = l !== null && i.parentElement !== n.element;
        if (c || u) return n.insertChild(i), pn(e, n.element);
      }
    }
  }
  const r = ir.$createDOM(t, Ce);
  if (function(s, i, o) {
    const l = o._keyToDOMMap;
    C5(i, o, s), l.set(s, i);
  }(e, r, Ce), $(t) ? r.setAttribute("data-lexical-text", "true") : de(t) && (r.setAttribute("data-lexical-decorator", "true"), D3(r, { captureSelection: !0 })), T(t)) {
    const s = t.__indent, i = t.__size;
    ra(r, t), s !== 0 && od(r, s);
    const o = Nt(t), l = o.size > 0 ? Ec(t, r, o) : "";
    if (i === 0) r.__lexicalTextContent = l, r.__lexicalFirstTextKey = null, ue += l, o.size > 0 && (r.__lexicalSlotTextLength = l.length);
    else {
      const u = ue, d = i - 1;
      if (ia(Eo(t, Ie), t, 0, d, Ht(t, r, Ce)), l !== "") {
        const f = r.__lexicalTextContent || "";
        r.__lexicalTextContent = l + f, ue = u + l + f;
      }
      o.size > 0 && (r.__lexicalSlotTextLength = l.length);
    }
    const c = t.__format;
    c !== 0 && ld(r, c), t.isInline() || dd(null, t, r);
  } else {
    const s = t.getTextContent();
    if (de(t)) {
      const i = t.decorate(Ce, Ws);
      i !== null && fd(e, i), r.contentEditable = "false";
      const o = Nt(t);
      o.size > 0 && Ec(t, r, o);
    }
    ue += s;
  }
  return n !== null && n.insertChild(r), ir.$decorateDOM(t, null, r, Ce), id(t), t1(Ks, Us, Oo, t, "created"), r;
}
function ia(e, n, t, r, s) {
  const i = ue, o = nn();
  ue = "", Pe = null, at = null, tt = null;
  let l = t;
  for (; l <= r; ++l) {
    const u = nn();
    Rn(e[l], s);
    const d = Ie.get(e[l]);
    d !== null && $(d) ? Pe === null && (Pe = d.getFormat(), at = d.getStyle(), tt = d.__key) : T(d) && l < r && !d.isInline() && (ue += Qn), Mt(u);
  }
  const c = Ce._keyToDOMMap.get(n.__key);
  c === void 0 && D(349, n.__key), c.__lexicalTextContent = ue, c.__lexicalFirstTextKey = tt, ue = i + ue, Mt(o);
}
function dd(e, n, t) {
  const r = Ht(n, t, Ce), s = r.element.__lexicalLastChildKind ?? null, i = function(o, l) {
    if (o) {
      const c = o.__last;
      if (c) {
        const u = l.get(c);
        if (u) return Rt(u) ? "line-break" : de(u) && u.isInline() ? "decorator" : null;
      }
      return Nt(o).size > 0 ? null : "empty";
    }
    return null;
  }(n, Ie);
  s !== i && r.setManagedLineBreak(i);
}
function v6(e, n, t) {
  var r;
  Pe = null, at = null, tt = null, function(s, i, o) {
    const l = ue, c = s.__size, u = i.__size;
    ue = "";
    const d = o.element, f = Ce._keyToDOMMap.get(i.__key);
    f === void 0 && D(351, i.__key);
    const h = u - c;
    if (!xn && Math.abs(h) <= 1 && c >= _6 && s.__first === i.__first && (h !== 0 || !Ce._cloneNotNeeded.has(s.__key))) {
      const g = f.__lexicalTextContent, p = ta.get(s.__key);
      if (!xn && typeof g == "string" && p !== void 0) {
        const C = function(m, x) {
          const y = x.size;
          if (y === 0 || y >= m.__size) return null;
          let _ = m.__last, v = null, w = 0;
          for (; _ !== null && w < y; ) {
            if (!x.has(_)) return null;
            v = _;
            const E = Ie.get(_);
            if (E === void 0) return null;
            _ = E.__prev, w++;
          }
          return w !== y || _ !== null && x.has(_) ? null : v;
        }(i, p);
        if (C !== null) {
          const m = p.size;
          if (h === 0) {
            const x = kc(C, m);
            let y = C, _ = 0;
            for (; y !== null && _ < m; ) {
              const S = Ie.get(y);
              if (S === void 0) break;
              const k = nn();
              pn(y, d), $(S) && Pe === null && (Pe = S.getFormat(), at = S.getStyle(), tt = S.__key), Mt(k), y = S.__next, _++;
            }
            let v = "";
            for (y = C, _ = 0; y !== null && _ < m; ) {
              const S = Ie.get(y);
              if (S === void 0) break;
              let k;
              if (T(S)) {
                const L = Ce._keyToDOMMap.get(y), A = L && L.__lexicalTextContent;
                typeof A != "string" && D(352, S.getType()), k = A;
              } else k = S.getTextContent();
              v += k, _ < m - 1 && T(S) && !S.isInline() && (v += Qn), y = S.__next, _++;
            }
            const w = f.__lexicalSlotTextLength || 0, E = w > 0 ? g.slice(w) : g, N = E.slice(0, E.length - x) + v;
            return f.__lexicalTextContent = N, ue = l + N, void Tc(i, f, p);
          }
          if (function(x, y, _, v, w, E, N, S) {
            if (S !== 1 && S !== -1 || N !== (S === 1 ? 2 : 1)) return !1;
            const L = N - S;
            let A = x.__last;
            for (let te = 0; te < L - 1; te++) {
              if (A === null) return !1;
              const Q = Wt.get(A);
              if (Q === void 0) return !1;
              A = Q.__prev;
            }
            if (A === null) return !1;
            const H = Ie.get(E), G = Wt.get(A);
            if (H === void 0 || G === void 0 || H.__prev !== G.__prev) return !1;
            const O = [];
            let K = E;
            for (let te = 0; te < N; te++) {
              if (K === null) return !1;
              O.push(K);
              const Q = Ie.get(K);
              K = Q ? Q.__next : null;
            }
            const X = [];
            K = A;
            for (let te = 0; te < L; te++) {
              if (K === null) return !1;
              X.push(K);
              const Q = Wt.get(K);
              K = Q ? Q.__next : null;
            }
            const se = new Set(X), ee = new Set(O), R = [];
            let V = 0, F = 0;
            for (; V < L && F < N; ) if (O[F] === X[V]) R.push({ key: O[F], kind: "reconcile" }), V++, F++;
            else if (ee.has(X[V])) {
              if (se.has(O[F])) return !1;
              R.push({ key: O[F], kind: "create", nextIndex: F }), F++;
            } else R.push({ key: X[V], kind: "destroy" }), V++;
            for (; V < L; ) R.push({ key: X[V++], kind: "destroy" });
            for (; F < N; ) R.push({ key: O[F], kind: "create", nextIndex: F }), F++;
            const U = kc(A, L);
            for (const te of R) {
              const Q = nn();
              if (te.kind === "reconcile") pn(te.key, _.element);
              else if (te.kind === "destroy") $n(te.key, _.element);
              else {
                let ge = null;
                for (let $e = te.nextIndex + 1; $e < N; $e++) {
                  const Ge = Ce._keyToDOMMap.get(O[$e]);
                  if (Ge !== void 0) {
                    ge = Ge;
                    break;
                  }
                }
                Rn(te.key, _.withBefore(ge ?? _.before));
              }
              if (te.kind !== "destroy") {
                const ge = Ie.get(te.key);
                ge && $(ge) && Pe === null && (Pe = ge.getFormat(), at = ge.getStyle(), tt = ge.__key);
              }
              Mt(Q);
            }
            let ie = "";
            for (let te = 0; te < N; te++) {
              const Q = Ie.get(O[te]);
              if (Q === void 0) return !1;
              let ge;
              if (T(Q)) {
                const $e = Ce._keyToDOMMap.get(O[te]), Ge = $e && $e.__lexicalTextContent;
                typeof Ge != "string" && D(350, Q.getType()), ge = Ge;
              } else ge = Q.getTextContent();
              ie += ge, te < N - 1 && T(Q) && !Q.isInline() && (ie += Qn);
            }
            const Z = v.__lexicalSlotTextLength || 0, fe = Z > 0 ? w.slice(Z) : w;
            return v.__lexicalTextContent = fe.slice(0, fe.length - U) + ie, !0;
          }(s, 0, o, f, g, C, m, h)) {
            const x = f.__lexicalTextContent;
            return typeof x != "string" && D(353), ue = l + x, void Tc(i, f, p);
          }
        }
      }
      if (h === 0) {
        let C = s.__first, m = 0;
        for (; C !== null; ) {
          const x = Ie.get(C);
          if (x === void 0) break;
          const y = xn || Ps.has(C) || Rs.has(C), _ = nn();
          if (y) pn(C, d);
          else {
            let v, w;
            if (T(x)) {
              w = sr.get(C);
              const E = w && w.__lexicalTextContent;
              typeof E != "string" && D(354, x.getType()), v = E;
            } else v = x.getTextContent();
            ue += v, w !== void 0 && Ql(w);
          }
          $(x) ? Pe === null && (Pe = x.getFormat(), at = x.getStyle(), tt = x.__key) : T(x) && m < u - 1 && !x.isInline() && (ue += Qn), Mt(_), C = x.__next, m++;
        }
        return f.__lexicalTextContent = ue, f.__lexicalFirstTextKey = tt, void (ue = l + ue);
      }
    }
    if (c === 1 && u === 1) {
      const g = s.__first, p = i.__first;
      if (g === p) pn(g, d);
      else {
        const m = oa(g), x = Rn(p, null);
        try {
          m.parentNode === d ? d.replaceChild(x, m) : o.insertChild(x);
        } catch (y) {
          if (typeof y == "object" && y != null) {
            const _ = `${y.toString()} Parent: ${d.tagName}, new child: {tag: ${x.tagName} key: ${p}}, old child: {tag: ${m.tagName}, key: ${g}}.`;
            throw new Error(_);
          }
          throw y;
        }
        $n(g, null);
      }
      const C = Ie.get(p);
      $(C) && Pe === null && (Pe = C.getFormat(), at = C.getStyle(), tt = C.__key);
    } else {
      const g = Eo(s, Wt), p = Eo(i, Ie);
      if (g.length !== c && D(227), p.length !== u && D(228), c === 0) u !== 0 && ia(p, i, 0, u - 1, o);
      else if (u === 0) {
        if (c !== 0) {
          const C = o.after == null && o.before == null && Nt(i).size === 0 && o.element.__lexicalLineBreak == null;
          na(g, 0, c - 1, C ? null : d), C && (d.textContent = "");
        }
      } else (function(C, m, x, y, _, v) {
        const w = y - 1, E = _ - 1;
        let N, S, k = v.getFirstChild(), L = 0, A = 0;
        for (; L <= w && A <= E; ) {
          const O = m[L], K = x[A], X = nn();
          if (O === K) k = xl(pn(K, v.element)), L++, A++;
          else {
            if (S === void 0 && (S = Lc(x, A)), N === void 0) N = Lc(m, L);
            else if (!N.has(O)) {
              L++, Mt(X);
              continue;
            }
            if (!S.has(O)) {
              k = xl(oa(O)), $n(O, v.element), L++, N.delete(O), Mt(X);
              continue;
            }
            if (N.has(K)) {
              const ee = ts(Ce, K);
              ee !== k && v.withBefore(k ?? v.before).insertChild(ee), k = xl(pn(K, v.element)), L++, A++;
            } else Rn(K, v.withBefore(k ?? v.before)), A++;
          }
          const se = Ie.get(K);
          se !== null && $(se) ? Pe === null && (Pe = se.getFormat(), at = se.getStyle(), tt = se.__key) : T(se) && A <= E && !se.isInline() && (ue += Qn), Mt(X);
        }
        const H = L > w, G = A > E;
        if (H && !G) {
          const O = x[E + 1], K = O === void 0 ? null : Ce.getElementByKey(O);
          ia(x, C, A, E, v.withBefore(K ?? v.before));
        } else G && !H && na(m, L, w, v.element);
      })(i, g, p, c, u, o);
    }
    f.__lexicalTextContent = ue, f.__lexicalFirstTextKey = tt, ue = l + ue;
  }(e, n, Ht(n, t, Ce)), Me(n) || (r = n, Pe == null || Pe === r.__textFormat || io || r.setTextFormat(Pe), function(s) {
    at == null || at === s.__textStyle || io || s.setTextStyle(at);
  }(n));
}
function Tc(e, n, t) {
  const r = n.__lexicalFirstTextKey;
  if (r != null) {
    const s = e.__key;
    let i = r;
    for (; i !== null; ) {
      const o = Ie.get(i);
      if (o === void 0) {
        i = null;
        break;
      }
      if (o.__parent === s) break;
      i = o.__parent;
    }
    if (i !== null && !t.has(i)) {
      const o = Ie.get(r);
      if ($(o)) return Pe = o.getFormat(), void (at = o.getStyle());
    }
  }
  n.__lexicalFirstTextKey = tt;
}
function pn(e, n) {
  const t = Wt.get(e);
  let r = Ie.get(e);
  t !== void 0 && r !== void 0 || D(61);
  const s = xn || Ps.has(e) || Rs.has(e), i = ts(Ce, e);
  if (t === r && !s) {
    let o;
    if (T(t)) {
      const l = i.__lexicalTextContent;
      typeof l != "string" && D(355, t.getType()), o = l, Ql(i);
    } else o = t.getTextContent();
    return ue += o, i;
  }
  if (t !== r && s && t1(Ks, Us, Oo, r, "updated"), ir.$updateDOM(r, t, i, Ce)) {
    const o = Rn(e, null);
    return n === null && D(62), n.replaceChild(o, i), $n(e, null), o;
  }
  if (T(t)) {
    T(r) || D(334, e);
    const o = r.__indent;
    (xn || o !== t.__indent) && od(i, o);
    const l = r.__format;
    (xn || l !== t.__format) && ld(i, l);
    const c = s && (Nt(r).size > 0 || Nt(t).size > 0) ? Nc(t, r, i) : "";
    if (s) {
      const u = ue;
      if (v6(t, r, i), ze(r) || r.isInline() || dd(0, r, i), c !== "") {
        const d = i.__lexicalTextContent || "";
        i.__lexicalTextContent = c + d, ue = u + c + d, i.__lexicalSlotTextLength = c.length;
      } else (Nt(r).size > 0 || Nt(t).size > 0) && (i.__lexicalSlotTextLength = 0);
    } else {
      const u = i.__lexicalTextContent;
      typeof u != "string" && D(356, t.getType()), ue += u, Ql(i);
    }
    if ((xn || r.__dir !== t.__dir || r.__parent !== t.__parent) && (ra(i, r), ze(r) && !xn)) for (const u of r.getChildren()) T(u) && ra(ts(Ce, u.getKey()), u);
  } else {
    const o = r.getTextContent();
    if (de(r)) {
      const l = r.decorate(Ce, Ws);
      l !== null && fd(e, l), s && (Nt(r).size > 0 || Nt(t).size > 0) && Nc(t, r, i);
    }
    ue += o;
  }
  if (!io && ze(r)) {
    const o = r.getLatest();
    if (o.__cachedText !== ue) {
      const l = o.getWritable();
      l.__cachedText = ue, r = l;
    }
  }
  return ir.$decorateDOM(r, t, i, Ce), id(r), i;
}
function fd(e, n) {
  let t = Ce._pendingDecorators;
  const r = Ce._decorators;
  if (t === null) {
    if (r[e] === n) return;
    t = y5(Ce);
  }
  t[e] = n;
}
function xl(e) {
  let n = e.nextSibling;
  return n !== null && n === Ce._blockCursorElement && (n = n.nextSibling), n;
}
function Lc(e, n) {
  const t = /* @__PURE__ */ new Set();
  for (let r = n; r < e.length; r++) t.add(e[r]);
  return t;
}
function w6(e, n, t, r, s, i) {
  ue = "", Pe = null, at = null, tt = null, xn = r === 2, Ce = t, Ws = t._config, ir = t._config.dom || yo, Us = t._nodes, Oo = Ce._listeners.mutation, Rs = s, Ps = i, Wt = e._nodeMap, ea = e, Ie = n._nodeMap, io = n._readOnly, sr = Y0(t._keyToDOMMap), ta = function() {
    const l = /* @__PURE__ */ new Map(), c = (u) => {
      for (const d of u) {
        const f = Ie.get(d);
        if (f === void 0) continue;
        const h = f.__parent;
        if (h === null) continue;
        let g = l.get(h);
        g === void 0 && (g = /* @__PURE__ */ new Set(), l.set(h, g)), g.add(d);
      }
    };
    return c(Rs.keys()), c(Ps), l;
  }();
  const o = /* @__PURE__ */ new Map();
  return Ks = o, pn("root", null), Ce = void 0, Us = void 0, Rs = void 0, Ps = void 0, Wt = void 0, ea = void 0, Ie = void 0, Ws = void 0, sr = void 0, ta = void 0, Ks = void 0, ir = yo, o;
}
function oa(e) {
  const n = sr.get(e);
  return n === void 0 && D(75, e), n;
}
function ne(e) {
  return { type: e };
}
const Va = /* @__PURE__ */ ne("SELECTION_CHANGE_COMMAND"), S6 = /* @__PURE__ */ ne("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), hd = /* @__PURE__ */ ne("CLICK_COMMAND"), gd = /* @__PURE__ */ ne("BEFORE_INPUT_COMMAND"), pd = /* @__PURE__ */ ne("INPUT_COMMAND"), md = /* @__PURE__ */ ne("COMPOSITION_START_COMMAND"), xd = /* @__PURE__ */ ne("COMPOSITION_END_COMMAND"), er = /* @__PURE__ */ ne("DELETE_CHARACTER_COMMAND"), zr = /* @__PURE__ */ ne("INSERT_LINE_BREAK_COMMAND"), Gs = /* @__PURE__ */ ne("INSERT_PARAGRAPH_COMMAND"), Zr = /* @__PURE__ */ ne("CONTROLLED_TEXT_INSERTION_COMMAND"), Io = /* @__PURE__ */ ne("PASTE_COMMAND"), Ki = /* @__PURE__ */ ne("REMOVE_TEXT_COMMAND"), Ys = /* @__PURE__ */ ne("DELETE_WORD_COMMAND"), qs = /* @__PURE__ */ ne("DELETE_LINE_COMMAND"), ct = /* @__PURE__ */ ne("FORMAT_TEXT_COMMAND"), k6 = /* @__PURE__ */ ne("SET_TEXT_FORMAT_COMMAND"), Do = /* @__PURE__ */ ne("UNDO_COMMAND"), $o = /* @__PURE__ */ ne("REDO_COMMAND"), Cd = /* @__PURE__ */ ne("KEYDOWN_COMMAND"), yd = /* @__PURE__ */ ne("KEY_ARROW_RIGHT_COMMAND"), _d = /* @__PURE__ */ ne("MOVE_TO_END"), bd = /* @__PURE__ */ ne("KEY_ARROW_LEFT_COMMAND"), vd = /* @__PURE__ */ ne("MOVE_TO_START"), wd = /* @__PURE__ */ ne("KEY_ARROW_UP_COMMAND"), Sd = /* @__PURE__ */ ne("KEY_ARROW_DOWN_COMMAND"), oo = /* @__PURE__ */ ne("KEY_ENTER_COMMAND"), kd = /* @__PURE__ */ ne("KEY_SPACE_COMMAND"), za = /* @__PURE__ */ ne("KEY_BACKSPACE_COMMAND"), Ed = /* @__PURE__ */ ne("KEY_ESCAPE_COMMAND"), Nd = /* @__PURE__ */ ne("KEY_DELETE_COMMAND"), Td = /* @__PURE__ */ ne("KEY_TAB_COMMAND"), E6 = /* @__PURE__ */ ne("INSERT_TAB_COMMAND"), Ld = /* @__PURE__ */ ne("INDENT_CONTENT_COMMAND"), la = /* @__PURE__ */ ne("OUTDENT_CONTENT_COMMAND"), jd = /* @__PURE__ */ ne("DROP_COMMAND"), Ms = /* @__PURE__ */ ne("FORMAT_ELEMENT_COMMAND"), Ad = /* @__PURE__ */ ne("DRAGSTART_COMMAND"), Md = /* @__PURE__ */ ne("DRAGOVER_COMMAND"), N6 = /* @__PURE__ */ ne("DRAGEND_COMMAND"), Ro = /* @__PURE__ */ ne("COPY_COMMAND"), Za = /* @__PURE__ */ ne("CUT_COMMAND"), Fd = /* @__PURE__ */ ne("SELECT_ALL_COMMAND"), T6 = /* @__PURE__ */ ne("CLEAR_EDITOR_COMMAND"), L6 = /* @__PURE__ */ ne("CLEAR_HISTORY_COMMAND"), Fs = /* @__PURE__ */ ne("CAN_REDO_COMMAND"), Os = /* @__PURE__ */ ne("CAN_UNDO_COMMAND"), j6 = /* @__PURE__ */ ne("FOCUS_COMMAND"), A6 = /* @__PURE__ */ ne("BLUR_COMMAND"), M6 = /* @__PURE__ */ ne("KEY_MODIFIER_COMMAND");
function F6(e) {
  const n = /* @__PURE__ */ new Map();
  return { dispose() {
    for (const t of n.values()) t.dispose();
    n.clear();
  }, register(t, r) {
    let s = n.get(t);
    s === void 0 && (s = { dispose: e(t, r), holders: /* @__PURE__ */ new Set() }, n.set(t, s));
    const i = () => {
      const o = n.get(t);
      o && o.holders.delete(i) && o.holders.size === 0 && (n.delete(t), o.dispose());
    };
    return s.holders.add(i), i;
  } };
}
function O6(e, n, t, r) {
  return e.addEventListener(n, t, r), e.removeEventListener.bind(e, n, t, r);
}
const fn = Object.freeze({}), aa = [["keydown", function(e, n) {
  const t = n._inputState;
  t.lastKeyDownTimeStamp = e.timeStamp, t.lastKeyCode = e.key, e.key !== "Backspace" && Js(t), !n.isComposing() && Y(n, Cd, e);
}], ["pointerdown", function(e, n) {
  const t = T5(e), r = e.pointerType;
  us(t) && r !== "touch" && r !== "pen" && e.button === 0 && Ot(n, () => {
    ko(t, n) || (n._inputState.isSelectionChangeFromMouseDown = !0);
  });
}], ["compositionstart", function(e, n) {
  Y(n, md, e);
}], ["compositionend", function(e, n) {
  const t = n._inputState;
  vn ? t.compositionPhase = "ending-firefox" : Hn || !oi && !li ? Y(n, xd, e) : (t.compositionPhase = "ending-safari", t.compositionEndData = e.data);
}], ["input", function(e, n) {
  e.stopPropagation();
  const t = n._inputState;
  Js(t), Ot(n, () => {
    $d(e, n) || n.dispatchCommand(pd, e);
  }, { event: e }), t.unprocessedBeforeInputData = null;
}], ["click", function(e, n) {
  Ot(n, () => {
    const t = B(), r = mt(wt(n)), s = ls();
    if (r) {
      if (I(t)) {
        const i = t.anchor, o = i.getNode();
        i.type === "element" && i.offset === 0 && t.isCollapsed() && !ze(o) && Fe().getChildrenSize() === 1 && o.getTopLevelElementOrThrow().isEmpty() && s !== null && t.is(s) && (r.removeAllRanges(), t.dirty = !0);
      } else if (e.pointerType === "touch" || e.pointerType === "pen") {
        const i = Pt(r, n._rootElement).anchorNode;
        (oe(i) || vt(i)) && Xe(ho(s, r, n, e));
      }
    }
    if (vn && r !== null && r.rangeCount === 0) {
      const i = n._rootElement;
      if (i !== null && e.target === i) {
        const o = e.clientY;
        let l = i.childNodes.length;
        for (let u = 0; u < i.childNodes.length; u++) {
          const d = i.childNodes[u];
          if (oe(d)) {
            const f = d.getBoundingClientRect();
            if (o <= (f.top + f.bottom) / 2) {
              l = u;
              break;
            }
          }
        }
        r.setBaseAndExtent(i, l, i, l);
        const c = ho(s, r, n, e);
        c !== null ? Xe(c) : r.removeAllRanges();
      }
    }
    Y(n, hd, e);
  });
}], ["cut", fn], ["copy", fn], ["dragstart", fn], ["dragover", fn], ["dragend", fn], ["paste", fn], ["focus", fn], ["blur", fn], ["drop", fn]];
Xr && aa.push(["beforeinput", (e, n) => function(t, r) {
  const s = t.inputType;
  s === "deleteCompositionText" || vn && w5(r) || s !== "insertCompositionText" && Ot(r, () => {
    $d(t, r) || Y(r, gd, t);
  }, { event: t });
}(e, n)]);
const ca = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), I6 = F6((e) => (e.addEventListener("selectionchange", Oc), () => e.removeEventListener("selectionchange", Oc)));
function Od(e, n, t, r, s, i) {
  const o = e.anchor, l = e.focus, c = o.getNode(), u = be();
  let d;
  if (i !== void 0) d = i;
  else {
    const C = mt(wt(u));
    d = C !== null ? Pt(C, u._rootElement) : null;
  }
  const f = d !== null ? d.anchorNode : null, h = o.key, g = u.getElementByKey(h), p = t.length;
  return h !== l.key || !$(c) || (!s && (!Xr || u._inputState.lastBeforeInputInsertTextTimeStamp < r + 50) || c.isDirty() && p < 2 || _5(t)) && o.offset !== l.offset && !c.isComposing() || Tt(c) || c.isDirty() && p > 1 || (s || !Xr) && g !== null && !c.isComposing() && f !== Pn(c, g, u) || d !== null && n !== null && (!n.collapsed || n.startContainer !== d.anchorNode || n.startOffset !== d.anchorOffset) || !c.isComposing() && (c.getFormat() !== e.format || c.getStyle() !== e.style) || function(C, m) {
    if (m.isSegmented()) return !0;
    if (!C.isCollapsed()) return !1;
    const x = C.anchor.offset, y = m.getParentOrThrow(), _ = _o(m);
    return x === 0 ? !m.canInsertTextBefore() || !y.canInsertTextBefore() && !m.isComposing() || _ || function(v) {
      const w = v.getPreviousSibling();
      return ($(w) || T(w) && w.isInline()) && !w.canInsertTextAfter();
    }(m) : x === m.getTextContentSize() && (!m.canInsertTextAfter() || !y.canInsertTextAfter() && !m.isComposing() || _);
  }(e, c);
}
function jc(e, n) {
  return vt(e) && e.nodeValue !== null && n !== 0 && n !== e.nodeValue.length;
}
function Ac(e, n, t) {
  const { anchorNode: r, anchorOffset: s, focusNode: i, focusOffset: o } = Pt(e, n._rootElement), l = n._inputState;
  l.isSelectionChangeFromDOMUpdate && (l.isSelectionChangeFromDOMUpdate = !1, jc(r, s) && jc(i, o) && !l.postDeleteSelectionToRestore) || Ot(n, () => {
    if (!t) return void Xe(null);
    if (!ui(n, r, i)) return;
    let c = B();
    if (l.postDeleteSelectionToRestore && I(c) && c.isCollapsed()) {
      const u = c.anchor, d = l.postDeleteSelectionToRestore.anchor;
      (u.key === d.key && u.offset === d.offset + 1 || u.offset === 1 && d.getNode().is(u.getNode().getPreviousSibling())) && (c = l.postDeleteSelectionToRestore.clone(), Xe(c));
    }
    if (l.postDeleteSelectionToRestore = null, I(c)) {
      const u = c.anchor, d = u.getNode();
      if (c.isCollapsed()) {
        e.type === "Range" && r === i && (c.dirty = !0);
        const f = wt(n).event, h = f ? f.timeStamp : performance.now(), { format: g, style: p, offset: C, key: m, timeStamp: x } = l.collapsedSelectionFormat, y = Fe(), _ = n.isComposing() === !1 && y.getTextContent() === "";
        if (h < x + 200 && u.offset === C && u.key === m) Gi(c, g, p);
        else if (u.type === "text") $(d) || D(141), Id(c, d);
        else if (u.type === "element" && !_) {
          T(d) || D(259);
          const v = u.getNode();
          v.isEmpty() ? function(w, E) {
            const N = E.getTextFormat(), S = E.getTextStyle();
            Gi(w, N, S);
          }(c, v) : Gi(c, c.format, "");
        }
      } else {
        const f = u.key, h = c.focus.key, g = c.getNodes(), p = g.length, C = c.isBackward(), m = C ? o : s, x = C ? s : o, y = C ? h : f, _ = C ? f : h;
        let v = 2047, w = !1;
        for (let E = 0; E < p; E++) {
          const N = g[E], S = N.getTextContentSize();
          if ($(N) && S !== 0 && !(E === 0 && N.__key === y && m === S || E === p - 1 && N.__key === _ && x === 0) && (w = !0, v &= N.getFormat(), v === 0)) break;
        }
        c.format = w ? v : 0;
      }
    }
    Y(n, Va);
  });
}
function Gi(e, n, t) {
  e.format === n && e.style === t || (e.format = n, e.style = t, e.dirty = !0);
}
function Id(e, n) {
  Gi(e, n.getFormat(), n.getStyle());
}
function Dd(e) {
  if (!e.getTargetRanges) return null;
  const n = e.getTargetRanges();
  return n.length === 0 ? null : n[0];
}
function Mc(e) {
  const { lastKeyCode: n } = be()._inputState;
  if (e == null || e.length <= 1 || n == null) return;
  const t = n.length === 1 ? n : n === "Enter" ? `
` : n === "Tab" ? "	" : null;
  if (!t) return;
  const r = B();
  if (!I(r) || !r.isCollapsed()) return;
  const s = r.anchor.getNode();
  if (!$(s)) return;
  const { offset: i } = r.anchor;
  if (s.getTextContentSize() === i) {
    const o = s.getNextSibling();
    if (t === `
`) {
      if (Rt(o)) o.selectEnd();
      else if (!o) {
        const l = Ee(s, es), c = l && l.getNextSibling();
        T(c) && c.selectStart();
      }
    } else t === "	" ? Qr(o) && o.selectEnd() : $(o) && o.getTextContent()[0] === t && o.select(1, 1);
  } else s.getTextContent()[i] === t && s.select(i + 1, i + 1);
}
function Js(e) {
  e.isInsertTextAfterHandledSelectionCommand = !1, e.handledSelectionCommandTimeoutId !== null && (clearTimeout(e.handledSelectionCommandTimeoutId), e.handledSelectionCommandTimeoutId = null);
}
function Fc(e) {
  Js(e), e.isInsertTextAfterHandledSelectionCommand = !0, e.handledSelectionCommandTimeoutId = setTimeout(() => Js(e), 0);
}
function $d(e, n) {
  const t = T5(e);
  if (oe(t) && ko(t, n)) return !0;
  const r = n.getRootElement();
  if (r === null) return !1;
  const s = ss(r.ownerDocument);
  return s !== null && r.contains(s) && ko(s, n);
}
function D6(e) {
  const n = e.inputType, t = Dd(e), r = be(), s = r._inputState, i = B();
  if (n === "insertText" && e.data && s.isInsertTextAfterHandledSelectionCommand) {
    if (Js(s), e.preventDefault(), I(i) && !i.isCollapsed()) {
      const f = i.isBackward() ? i.anchor : i.focus;
      i.anchor.set(f.key, f.offset, f.type), i.focus.set(f.key, f.offset, f.type);
    }
    return !0;
  }
  if (n === "deleteContentBackward") {
    if (i === null) {
      const f = ls();
      if (!I(f)) return !0;
      Xe(f.clone());
    }
    if (I(i)) {
      const f = i.anchor.key === i.focus.key;
      if (function(h, g) {
        return h.lastKeyCode === "MediaLast" && g < h.lastKeyDownTimeStamp + 30;
      }(s, e.timeStamp) && r.isComposing() && f) {
        if (qe(null), s.lastKeyDownTimeStamp = 0, setTimeout(() => {
          Ot(r, () => {
            qe(null);
          });
        }, 30), I(i)) {
          const h = i.anchor.getNode();
          h.markDirty(), $(h) || D(142), Id(i, h);
        }
      } else {
        if (qe(null), Hn && t !== null && !t.collapsed && (i.applyDOMRange(t), !i.isCollapsed())) return e.preventDefault(), i.removeText(), !0;
        e.preventDefault();
        const h = i.anchor.getNode(), g = h.getTextContent(), p = h.canInsertTextAfter(), C = i.anchor.offset === 0 && i.focus.offset === g.length;
        let m = no && f && !C && p;
        if (m && i.isCollapsed() && (m = !de(b3(i.anchor, !0))), !m) {
          Y(r, er, !0);
          const x = B();
          no && I(x) && x.isCollapsed() && (s.postDeleteSelectionToRestore = x, setTimeout(() => s.postDeleteSelectionToRestore = null));
        }
      }
      return !0;
    }
  }
  if (!I(i)) return !0;
  const o = e.data;
  s.unprocessedBeforeInputData !== null && Qa(!1, r, s.unprocessedBeforeInputData), i.dirty && s.unprocessedBeforeInputData === null || !i.isCollapsed() || ze(i.anchor.getNode()) || t === null || i.applyDOMRange(t), s.unprocessedBeforeInputData = null;
  const l = i.anchor, c = i.focus, u = l.getNode(), d = c.getNode();
  if (n === "insertText" || n === "insertTranspose") {
    if (o === `
`) e.preventDefault(), Y(r, zr, !1);
    else if (o === Qn) e.preventDefault(), Y(r, Gs);
    else if (o == null && e.dataTransfer) {
      const f = e.dataTransfer.getData("text/plain");
      e.preventDefault(), i.insertRawText(f);
    } else o != null && Od(i, t, o, e.timeStamp, !0) ? (e.preventDefault(), Y(r, Zr, o), Mc(o)) : s.unprocessedBeforeInputData = o;
    return s.lastBeforeInputInsertTextTimeStamp = e.timeStamp, !0;
  }
  switch (e.preventDefault(), n) {
    case "insertFromYank":
    case "insertFromDrop":
    case "insertReplacementText":
      Y(r, Zr, e), Mc((e.dataTransfer ? e.dataTransfer.getData("text/plain") : null) ?? e.data);
      break;
    case "insertFromComposition": {
      const f = s.hadOrphanedCompositionEvents;
      s.hadOrphanedCompositionEvents = !1;
      const h = r._compositionKey;
      qe(null), f || Y(r, Zr, e), Yi(h);
      break;
    }
    case "insertLineBreak":
      qe(null), Y(r, zr, !1);
      break;
    case "insertParagraph":
      qe(null), s.isInsertLineBreak && !Hn ? (s.isInsertLineBreak = !1, Y(r, zr, !1)) : Y(r, Gs);
      break;
    case "insertFromPaste":
    case "insertFromPasteAsQuotation":
      Y(r, Io, e);
      break;
    case "deleteByComposition":
      (function(f, h) {
        return f !== h || T(f) || T(h) || !_o(f) || !_o(h);
      })(u, d) && Y(r, Ki, e);
      break;
    case "deleteByDrag":
      ns(fa), Y(r, Ki, e);
      break;
    case "deleteByCut":
      Y(r, Ki, e);
      break;
    case "deleteContent":
      Y(r, er, !1);
      break;
    case "deleteWordBackward":
      Y(r, Ys, !0);
      break;
    case "deleteWordForward":
      Y(r, Ys, !1);
      break;
    case "deleteHardLineBackward":
    case "deleteSoftLineBackward":
      Y(r, qs, !0);
      break;
    case "deleteContentForward":
    case "deleteHardLineForward":
    case "deleteSoftLineForward":
      Y(r, qs, !1);
      break;
    case "formatStrikeThrough":
      Y(r, ct, "strikethrough");
      break;
    case "formatBold":
      Y(r, ct, "bold");
      break;
    case "formatItalic":
      Y(r, ct, "italic");
      break;
    case "formatUnderline":
      Y(r, ct, "underline");
      break;
    case "historyUndo":
      Y(r, Do);
      break;
    case "historyRedo":
      Y(r, $o);
  }
  return !0;
}
function $6(e) {
  const n = be(), t = n._inputState, r = B(), s = e.data, i = Dd(e);
  let o = !1;
  if (s != null && I(r)) {
    const l = mt(wt(n)), c = l !== null ? Pt(l, n._rootElement) : null, u = e.inputType === "insertCompositionText" && t.compositionPhase !== "ending-firefox" && !n.isComposing();
    u && (t.hadOrphanedCompositionEvents = !0);
    const d = r.anchor.getNode(), f = e.inputType === "insertCompositionText" && t.compositionPhase !== "ending-firefox" && n.isComposing() && $(d) && Tt(d);
    if (!u && !f && Od(r, i, s, e.timeStamp, !1, c)) {
      if (o = !0, t.compositionPhase === "ending-firefox") {
        const x = ao(n, s);
        if (t.compositionPhase = "idle", x) return ns(uo), lu(), !0;
      }
      const h = r.anchor.getNode();
      if (l === null || c === null) return !0;
      const g = r.isBackward(), p = g ? r.anchor.offset : r.focus.offset, C = g ? r.focus.offset : r.anchor.offset;
      Xr && !r.isCollapsed() && $(h) && c.anchorNode !== null && h.getTextContent().slice(0, p) + s + h.getTextContent().slice(p + C) === v5(c.anchorNode) || Y(n, Zr, s);
      const m = s.length;
      vn && m > 1 && e.inputType === "insertCompositionText" && !n.isComposing() && (r.anchor.offset -= m, r._cachedNodes = null, r._cachedIsBackward = null), no && n.isComposing() && (t.lastKeyDownTimeStamp = 0, qe(null));
    }
  }
  return o || (Qa(!1, n, s !== null ? s : void 0), t.compositionPhase === "ending-firefox" && (ao(n, s || void 0), ns(uo), t.compositionPhase = "idle")), lu(), !0;
}
function R6(e) {
  const n = be(), t = n._inputState, r = B();
  if (I(r) && !n.isComposing()) {
    t.compositionPhase = "composing", t.hadOrphanedCompositionEvents = !1;
    const s = r.anchor, i = r.anchor.getNode();
    if (qe(s.key), ns(zd), e.timeStamp < t.lastKeyDownTimeStamp + 30 || s.type === "element" || !r.isCollapsed() || !no && (i.getFormat() !== r.format || $(i) && i.getStyle() !== r.style) || $(i) && (Tt(i) || s.offset === 0 && !i.canInsertTextBefore() || s.offset === i.getTextContentSize() && !i.canInsertTextAfter())) {
      Y(n, Zr, Ha);
      const o = B();
      I(o) && qe(o.anchor.key);
    }
  }
  return !0;
}
function P6(e) {
  const n = be();
  return n._inputState.compositionPhase = "idle", ao(n, e.data), ns(uo), !0;
}
function Yi(e) {
  if (e === null) return;
  const n = Le(e);
  if (!$(n) || n.getType() === "text" || Tt(n) || !n.isAttached()) return;
  const t = B(), r = I(t) && t.anchor.key === e ? t.anchor.offset : null, s = pt(n.getTextContent());
  if (s.setFormat(n.getFormat()), s.setStyle(n.getStyle()), n.replace(s), r !== null) {
    const i = Math.min(r, s.getTextContentSize());
    s.select(i, i);
  }
}
function ao(e, n) {
  const t = e._compositionKey;
  if (qe(null), t !== null && n != null) {
    if (n === "") {
      const s = Le(t), i = e.getElementByKey(t), o = i !== null && $(s) ? Pn(s, i, e) : null;
      if (o !== null && o.nodeValue !== null && $(s)) {
        const l = mt(wt(e)), c = l && Pt(l, e._rootElement);
        let u = null, d = null;
        c !== null && c.anchorNode === o && (u = c.anchorOffset, d = c.focusOffset), e1(s, o.nodeValue, u, d, !0);
      }
      return Yi(t), !1;
    }
    if (n[n.length - 1] === `
`) {
      const s = B();
      if (I(s) || Ne(s)) {
        if (I(s)) {
          const i = s.focus;
          s.anchor.set(i.key, i.offset, i.type);
        }
        return Y(e, oo, null), Yi(t), !1;
      }
    }
    const r = Le(t);
    if (r !== null && $(r) && Tt(r)) {
      r.markDirty();
      const s = B(), i = r.getTextContentSize(), o = I(s) && s.anchor.key === t ? s.anchor.offset : i;
      return r.select(o, o).insertText(n), !0;
    }
  }
  return Qa(!0, e, n), Yi(t), !1;
}
function H6(e) {
  const n = be(), t = n._inputState;
  if (e.key == null) return !0;
  if (t.compositionPhase === "ending-safari") {
    const r = cu(e);
    if (r && Ot(n, () => {
      ao(n, t.compositionEndData);
    }), t.compositionPhase = "idle", t.compositionEndData = "", r) return !0;
  }
  if (function(r) {
    return ke(r, "ArrowRight", { shiftKey: "any" });
  }(e)) Y(n, yd, e);
  else if (function(r) {
    return ke(r, "ArrowRight", { ...gn, shiftKey: "any" });
  }(e)) Y(n, _d, e);
  else if (function(r) {
    return ke(r, "ArrowLeft", { shiftKey: "any" });
  }(e)) Y(n, bd, e);
  else if (function(r) {
    return ke(r, "ArrowLeft", { ...gn, shiftKey: "any" });
  }(e)) Y(n, vd, e);
  else if (function(r) {
    return ke(r, "ArrowUp", { altKey: "any", shiftKey: "any" });
  }(e)) Y(n, wd, e);
  else if (function(r) {
    return ke(r, "ArrowDown", { altKey: "any", shiftKey: "any" });
  }(e)) Y(n, Sd, e);
  else if (function(r) {
    return ke(r, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
  }(e)) t.isInsertLineBreak = !0, Y(n, oo, e);
  else if (function(r) {
    return r.key === " ";
  }(e)) Y(n, kd, e);
  else if (function(r) {
    return Zt && ke(r, "o", { ctrlKey: !0 });
  }(e)) e.preventDefault(), t.isInsertLineBreak = !0, Y(n, zr, !0);
  else if (function(r) {
    return ke(r, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
  }(e)) t.isInsertLineBreak = !1, Y(n, oo, e);
  else if (function(r) {
    return ke(r, "Backspace", { shiftKey: "any" }) || Zt && ke(r, "h", { ctrlKey: !0 });
  }(e)) cu(e) ? Y(n, za, e) && Fc(t) : (e.preventDefault(), Y(n, er, !0));
  else if (function(r) {
    return r.key === "Escape";
  }(e)) Y(n, Ed, e);
  else if (function(r) {
    return ke(r, "Delete", {}) || Zt && ke(r, "d", { ctrlKey: !0 });
  }(e)) (function(r) {
    return r.key === "Delete";
  })(e) ? Y(n, Nd, e) : (e.preventDefault(), Y(n, er, !1));
  else if (function(r) {
    return ke(r, "Backspace", au);
  }(e)) e.preventDefault(), Y(n, Ys, !0);
  else if (function(r) {
    return ke(r, "Delete", au);
  }(e)) e.preventDefault(), Y(n, Ys, !1);
  else if (function(r) {
    return Zt && ke(r, "Backspace", { metaKey: !0 });
  }(e)) e.preventDefault(), Y(n, qs, !0);
  else if (function(r) {
    return Zt && (ke(r, "Delete", { metaKey: !0 }) || ke(r, "k", { ctrlKey: !0 }));
  }(e)) e.preventDefault(), Y(n, qs, !1);
  else if (function(r) {
    return ke(r, "b", gn);
  }(e)) e.preventDefault(), Y(n, ct, "bold");
  else if (function(r) {
    return ke(r, "u", gn);
  }(e)) e.preventDefault(), Y(n, ct, "underline");
  else if (function(r) {
    return ke(r, "i", gn);
  }(e)) e.preventDefault(), Y(n, ct, "italic");
  else if (function(r) {
    return ke(r, "Tab", { shiftKey: "any" });
  }(e)) Y(n, Td, e);
  else if (function(r) {
    return ke(r, "z", gn);
  }(e)) e.preventDefault(), Y(n, Do);
  else if (function(r) {
    return Zt ? ke(r, "z", { metaKey: !0, shiftKey: !0 }) : ke(r, "y", { ctrlKey: !0 }) || ke(r, "z", { ctrlKey: !0, shiftKey: !0 });
  }(e)) e.preventDefault(), Y(n, $o);
  else {
    const r = n._editorState._selection;
    (function(s) {
      return ke(s, "a", gn);
    })(e) ? (e.preventDefault(), Y(n, Fd, e) && Fc(t)) : r === null || I(r) || (function(s) {
      return ke(s, "c", gn);
    }(e) ? (e.preventDefault(), Y(n, Ro, e)) : function(s) {
      return ke(s, "x", gn);
    }(e) && (e.preventDefault(), Y(n, Za, e)));
  }
  return function(r) {
    return r.ctrlKey || r.shiftKey || r.altKey || r.metaKey;
  }(e) && n.dispatchCommand(M6, e), !0;
}
function Rd(e) {
  let n = e.__lexicalEventHandles;
  return n === void 0 && (n = [], e.__lexicalEventHandles = n), n;
}
const Wr = /* @__PURE__ */ new Map();
function Oc(e) {
  const n = k3(e.target);
  if (n === null) return;
  const t = n1(e.target);
  let r = null, s = null;
  const i = t !== null ? lo.get(t) : void 0;
  if (t !== null) {
    if (i !== void 0) {
      const f = i.editors;
      let h = i.hasShadowEditor;
      if (h === void 0) {
        h = !1;
        for (const g of f) if (g._rootElement !== null && kn(g._rootElement.getRootNode())) {
          h = !0;
          break;
        }
        i.hasShadowEditor = h;
      }
      if (h) {
        let g = null, p = null;
        for (const C of f) {
          const m = C._rootElement;
          if (m === null) continue;
          const x = Pt(n, m).anchorNode;
          if (x !== null && Kr(x) === C) {
            if (kn(m.getRootNode())) {
              r = C, s = x;
              break;
            }
            g === null && (g = C, p = x);
          }
        }
        r === null && g !== null && (r = g, s = p);
      } else {
        const g = n.anchorNode;
        g === null || oe(g) && g.shadowRoot !== null || (r = Kr(g), r !== null && (s = g));
      }
    }
    if (r === null) {
      const f = ss(t);
      r = f !== null ? Kr(f) : null;
    }
  }
  if (r === null) return;
  if (r._inputState.isSelectionChangeFromMouseDown) {
    if (i !== void 0) for (const f of i.editors) f._inputState.isSelectionChangeFromMouseDown = !1;
    Ot(r, () => {
      const f = ls(), h = s ?? Pt(n, r._rootElement).anchorNode;
      (oe(h) || vt(h)) && Xe(ho(f, n, r, e));
    });
  }
  const o = Xa(r), l = o[o.length - 1], c = l._key, u = Wr.get(c), d = u || l;
  d !== r && Ac(n, d, !1), Ac(n, r, !0), r !== l ? Wr.set(c, r) : u && Wr.delete(c);
}
function Ic(e) {
  e._lexicalHandled = !0;
}
function Dc(e) {
  return e._lexicalHandled === !0;
}
function B6(e) {
  const n = ca.get(e);
  if (n === void 0) return;
  const t = lo.get(n);
  if (t === void 0) return;
  ca.delete(e);
  const r = as(e);
  di(r) ? (function(i) {
    if (i._parentEditor !== null) {
      const o = Xa(i), l = o[o.length - 1]._key;
      Wr.get(l) === i && Wr.delete(l);
    } else Wr.delete(i._key);
  }(r), t.editors.delete(r), t.hasShadowEditor = void 0, e.__lexicalEditor = null) : r && D(198);
  const s = Rd(e);
  for (let i = 0; i < s.length; i++) s[i]();
  e.__lexicalEventHandles = [];
}
function ua(e, n, t) {
  Ye();
  const r = e.__key, s = e.getParent();
  if (s === null) return void (st(e) !== null && D(367, r, String(st(e))));
  const i = function(l) {
    const c = B();
    if (!I(c) || !T(l)) return c;
    const { anchor: u, focus: d } = c, f = u.getNode(), h = d.getNode();
    return rs(f, l) && u.set(l.__key, 0, "element"), rs(h, l) && d.set(l.__key, 0, "element"), c;
  }(e);
  let o = !1;
  if (I(i) && n) {
    const l = i.anchor, c = i.focus;
    l.key === r && (go(l, e, s, e.getPreviousSibling(), e.getNextSibling()), o = !0), c.key === r && (go(c, e, s, e.getPreviousSibling(), e.getNextSibling()), o = !0);
  } else Ne(i) && n && e.isSelected() && e.selectPrevious();
  if (I(i) && n && !o) {
    const l = e.getIndexWithinParent();
    rn(e), Jn(i, s, l, -1);
  } else rn(e);
  t || Me(s) || s.canBeEmpty() || !s.isEmpty() || ua(s, n), n && i && ze(s) && s.isEmpty() && s.selectEnd();
}
const Pd = Symbol.for("ephemeral");
function co(e) {
  return e[Pd] || !1;
}
const $c = { configurable: !0, enumerable: !1, value: void 0, writable: !0 };
var N0;
N0 = Zs;
class gt {
  constructor(n) {
    M(this, "__type");
    M(this, "__key");
    M(this, "__parent");
    M(this, "__prev");
    M(this, "__next");
    M(this, "__state");
    M(this, N0);
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", $c), Object.defineProperty(this, Zs, $c), m5(this, n);
  }
  static getType() {
    const { ownNodeType: n } = s1(this);
    return n === void 0 && D(64, this.name), n;
  }
  static clone(n) {
    D(65, this.name);
  }
  $config() {
    return {};
  }
  config(n, t) {
    const r = t.extends || F5(this.constructor);
    return Object.assign(t, { extends: r }), typeof n == "string" && Object.assign(t, { type: n }), { [n]: t };
  }
  afterCloneFrom(n) {
    this.__key === n.__key ? (this.__parent = n.__parent, this.__next = n.__next, this.__prev = n.__prev, this.__state = n.__state) : n.__state && (this.__state = n.__state.getWritable(this));
  }
  resetOnCopyNodeFrom(n) {
    this.__state && (this.__state = this.__state.getWritable(this).resetOnCopyNode());
  }
  getType() {
    return this.__type;
  }
  isInline() {
    D(137, this.constructor.name);
  }
  isAttached() {
    let n = this.__key;
    for (; n !== null; ) {
      if (n === "root") return !0;
      const t = Le(n);
      if (t === null) break;
      n = t.__parent !== null ? t.__parent : st(t);
    }
    return !1;
  }
  isSelected(n) {
    const t = n || B();
    if (t == null) return !1;
    const r = t.getNodes().some((s) => s.__key === this.__key);
    if ($(this)) return r;
    if (I(t) && t.anchor.type === "element" && t.focus.type === "element") {
      if (t.isCollapsed()) return !1;
      const s = this.getParent();
      if (de(this) && this.isInline() && s) {
        const i = t.isBackward() ? t.focus : t.anchor;
        if (s.is(i.getNode()) && i.offset === s.getChildrenSize() && this.is(s.getLastChild())) return !1;
      }
    }
    return r;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const n = this.getParent();
    if (n === null) return -1;
    let t = n.getFirstChild(), r = 0;
    for (; t !== null; ) {
      if (this.is(t)) return r;
      r++, t = t.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const n = this.getLatest().__parent;
    return n === null ? null : Le(n);
  }
  getParentOrThrow() {
    const n = this.getParent();
    return n === null && D(66, this.__key), n;
  }
  getTopLevelElement() {
    let n = this;
    for (; n !== null; ) {
      const t = n.getParent();
      if (Me(t) || st(n) !== null) return T(n) || n === this && de(n) || D(194), n;
      n = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const n = this.getTopLevelElement();
    return n === null && D(67, this.__key), n;
  }
  getParents() {
    const n = [];
    let t = this.getParent();
    for (; t !== null; ) n.push(t), t = t.getParent();
    return n;
  }
  getParentKeys() {
    const n = [];
    let t = this.getParent();
    for (; t !== null; ) n.push(t.__key), t = t.getParent();
    return n;
  }
  getPreviousSibling() {
    const n = this.getLatest().__prev;
    return n === null ? null : Le(n);
  }
  getPreviousSiblings() {
    const n = [], t = this.getParent();
    if (t === null) return n;
    let r = t.getFirstChild();
    for (; r !== null && !r.is(this); ) n.push(r), r = r.getNextSibling();
    return n;
  }
  getNextSibling() {
    const n = this.getLatest().__next;
    return n === null ? null : Le(n);
  }
  getNextSiblings() {
    const n = [];
    let t = this.getNextSibling();
    for (; t !== null; ) n.push(t), t = t.getNextSibling();
    return n;
  }
  getCommonAncestor(n) {
    const t = T(this) ? this : this.getParent(), r = T(n) ? n : n.getParent(), s = t && r ? ba(t, r) : null;
    return s ? s.commonAncestor : null;
  }
  is(n) {
    return n != null && this.__key === n.__key;
  }
  isBefore(n) {
    const t = ba(this, n);
    return t !== null && (t.type === "descendant" || (t.type === "branch" ? P5(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && D(279), !1)));
  }
  isParentOf(n) {
    return rs(n, this);
  }
  getNodesBetween(n) {
    const t = this.isBefore(n), r = [], s = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const o = i.__key;
      if (s.has(o) || (s.add(o), r.push(i)), i === n) break;
      const l = T(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
      if (l !== null) {
        i = l;
        continue;
      }
      const c = t ? i.getNextSibling() : i.getPreviousSibling();
      if (c !== null) {
        i = c;
        continue;
      }
      const u = i.getParentOrThrow();
      if (s.has(u.__key) || r.push(u), u === n) break;
      let d = null, f = u;
      do {
        if (f === null && D(68), d = t ? f.getNextSibling() : f.getPreviousSibling(), f = f.getParent(), f === null) break;
        d !== null || s.has(f.__key) || r.push(f);
      } while (d === null);
      i = d;
    }
    return t || r.reverse(), r;
  }
  isDirty() {
    const n = be()._dirtyLeaves;
    return n !== null && n.has(this.__key);
  }
  getLatest() {
    if (co(this)) return this;
    const n = Le(this.__key);
    return n === null && D(113), n;
  }
  getWritable() {
    if (co(this)) return this;
    Ye();
    const n = Ln(), t = be(), r = n._nodeMap, s = this.__key, i = this.getLatest(), o = t._cloneNotNeeded, l = B();
    if (l !== null && l.setCachedNodes(null), o.has(s)) return bo(i), i;
    const c = j5(i);
    return o.add(s), bo(c), r.set(s, c), c;
  }
  getTextContent() {
    return I5(this);
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(n, t) {
    D(70);
  }
  updateDOM(n, t, r) {
    D(71);
  }
  getDOMSlot(n) {
    return new W0(n);
  }
  exportDOM(n) {
    return { element: this.createDOM(n._config, n) };
  }
  exportJSON() {
    const n = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...n };
  }
  static importJSON(n) {
    D(18, this.name);
  }
  updateFromJSON(n) {
    return function(t, r) {
      const s = t.getWritable(), i = r.$;
      let o = i;
      for (const l of sd(s).flatKeys) l in r && (o !== void 0 && o !== i || (o = { ...i }), o[l] = r[l]);
      return (s.__state || o) && rd(t).updateFromJSON(o), s;
    }(this, n);
  }
  static transform() {
    return null;
  }
  remove(n) {
    ua(this, !0, n);
  }
  replace(n, t) {
    Ye();
    let r = B();
    r !== null && (r = r.clone()), El(this, n);
    const s = this.getLatest(), i = this.__key, o = n.__key, l = n.getWritable(), c = this.getParentOrThrow().getWritable(), u = c.__size, d = l.getParent(), f = d !== null ? l.getIndexWithinParent() : -1;
    rn(l), d !== null && I(r) && Jn(r, d, f, -1);
    const h = s.getPreviousSibling(), g = s.getNextSibling(), p = s.__prev, C = s.__next, m = s.__parent;
    ua(s, !1, !0), h === null ? c.__first = o : h.getWritable().__next = o, l.__prev = p, g === null ? c.__last = o : g.getWritable().__prev = o, l.__next = C, l.__parent = m, c.__size = u;
    let x = 0;
    t && (T(this) && T(l) || D(139), x = l.getChildrenSize(), l.splice(x, 0, this.getChildren()));
    const y = It(this);
    if (y.length > 0) {
      _n(this) && _n(l) || D(368, this.__key, l.__key);
      for (const _ of y) {
        const v = dr(this, _);
        v !== null && (z3(this, _), D5(l, _, v));
      }
    }
    if (I(r)) {
      Xe(r);
      const _ = r.anchor, v = r.focus;
      _.key === i && (t && _.type === "element" ? _.set(l.__key, x + _.offset, "element") : Bc(_, l)), v.key === i && (t && v.type === "element" ? v.set(l.__key, x + v.offset, "element") : Bc(v, l));
    }
    return sn() === i && qe(o), l;
  }
  insertAfter(n, t = !0) {
    Ye(), El(this, n);
    const r = this.getWritable(), s = n.getWritable();
    this.getParentOrThrow();
    const i = s.getParent(), o = B();
    let l = !1, c = !1;
    if (i !== null) {
      const g = n.getIndexWithinParent();
      if (I(o)) {
        const p = i.__key, C = o.anchor, m = o.focus;
        l = C.type === "element" && C.key === p && C.offset === g + 1, c = m.type === "element" && m.key === p && m.offset === g + 1;
      }
      rn(s), t && I(o) && Jn(o, i, g, -1);
    } else rn(s);
    const u = this.getNextSibling(), d = this.getParentOrThrow().getWritable(), f = s.__key, h = r.__next;
    if (u === null ? d.__last = f : u.getWritable().__prev = f, d.__size++, r.__next = f, s.__next = h, s.__prev = r.__key, s.__parent = r.__parent, t && I(o)) {
      const g = this.getIndexWithinParent();
      Jn(o, d, g + 1);
      const p = d.__key;
      l && o.anchor.set(p, g + 2, "element"), c && o.focus.set(p, g + 2, "element");
    }
    return n;
  }
  insertBefore(n, t = !0) {
    Ye(), El(this, n);
    const r = this.getWritable(), s = n.getWritable();
    this.getParentOrThrow();
    const i = s.__key, o = B(), l = s.getParent(), c = l !== null ? s.getIndexWithinParent() : -1;
    rn(s), l !== null && t && I(o) && Jn(o, l, c, -1);
    const u = this.getPreviousSibling(), d = this.getParentOrThrow().getWritable(), f = r.__prev, h = this.getIndexWithinParent();
    return u === null ? d.__first = i : u.getWritable().__next = i, d.__size++, r.__prev = i, s.__prev = f, s.__next = r.__key, s.__parent = r.__parent, t && I(o) && Jn(o, this.getParentOrThrow(), h), n;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return Se();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(n, t) {
    Ye();
    const r = Ut(this);
    if (r !== null) return r.selectPrevious(n, t);
    const s = this.getPreviousSibling(), i = this.getParentOrThrow();
    if (s === null) return i.select(0, 0);
    if (T(s)) return s.select();
    if (!$(s)) {
      const o = s.getIndexWithinParent() + 1;
      return i.select(o, o);
    }
    return s.select(n, t);
  }
  selectNext(n, t) {
    Ye();
    const r = Ut(this);
    if (r !== null) return r.selectNext(n, t);
    const s = this.getNextSibling(), i = this.getParentOrThrow();
    if (s === null) return i.select();
    if (T(s)) return s.select(0, 0);
    if (!$(s)) {
      const o = s.getIndexWithinParent();
      return i.select(o, o);
    }
    return s.select(n, t);
  }
  markDirty() {
    this.getWritable();
  }
  reconcileObservedMutation(n, t) {
    this.markDirty();
  }
}
M(gt, "importDOM");
function Hd(e) {
  return e instanceof gt;
}
const da = "historic", V6 = "history-push", tr = "history-merge", Bd = "paste", Vd = "cut", z6 = "collaboration", Z6 = "skip-scroll-into-view", W6 = "skip-dom-selection", fa = "skip-selection-focus", zd = "composition-start", uo = "composition-end", U6 = "!important";
function Xs(e) {
  const n = {};
  if (!e) return n;
  let t = "", r = "", s = null, i = !1, o = !1, l = !1, c = 0;
  const u = e.length;
  let d = -1;
  for (let g = 0; g < u; g++) {
    const p = e[g];
    if (i) p === "*" && e[g + 1] === "/" && (i = !1, g++);
    else if (o) d === -1 && (d = g), o = !1;
    else if (s === null) if (p !== "/" || e[g + 1] !== "*") if (p !== '"' && p !== "'") if (p !== "(") if (p !== ")") if (l || p !== ":" || c !== 0) {
      if (p === ";" && c === 0) {
        d !== -1 && (l ? r += e.slice(d, g) : t += e.slice(d, g), d = -1);
        const C = t.trim(), m = r.trim();
        C !== "" && m !== "" && (n[C] = m), t = "", r = "", l = !1;
        continue;
      }
      d === -1 && (d = g);
    } else d !== -1 && (t += e.slice(d, g), d = -1), l = !0;
    else d === -1 && (d = g), c = Math.max(0, c - 1);
    else d === -1 && (d = g), c++;
    else d === -1 && (d = g), s = p;
    else d !== -1 && (l ? r += e.slice(d, g) : t += e.slice(d, g), d = -1), i = !0, g++;
    else d === -1 && (d = g), p === "\\" ? o = !0 : p === s && (s = null);
  }
  d !== -1 && (l ? r += e.slice(d, u) : t += e.slice(d, u));
  const f = t.trim(), h = r.trim();
  return f !== "" && h !== "" && (n[f] = h), n;
}
function K6(e, n, t) {
  const r = t.trimEnd(), s = r.length - 10;
  s >= 0 && r.slice(s).toLowerCase() === U6 ? e.setProperty(n, r.slice(0, s).trim(), "important") : e.setProperty(n, t, "");
}
function Ur(e, n, t = "") {
  if (n === t) return;
  const r = Xs(t), s = Xs(n);
  for (const i in s) delete r[i], K6(e, i, s[i]);
  for (const i in r) e.removeProperty(i);
}
function Cl(e, n) {
  return 16 & n ? "code" : n & Pa ? "mark" : 32 & n ? "sub" : 64 & n ? "sup" : null;
}
function yl(e, n) {
  return 1 & n ? "strong" : 2 & n ? "em" : "span";
}
function Zd(e, n, t, r, s) {
  const i = r.classList;
  let o = Gr(s, "base");
  o !== void 0 && i.add(...o), o = Gr(s, "underlineStrikethrough");
  let l = !1;
  const c = 8 & n && 4 & n;
  o !== void 0 && (8 & t && 4 & t ? (l = !0, c || i.add(...o)) : c && i.remove(...o));
  for (const u in Bn) {
    const d = Bn[u];
    if (o = Gr(s, u), o !== void 0) if (t & d) {
      if (l && (u === "underline" || u === "strikethrough")) {
        n & d && i.remove(...o);
        continue;
      }
      (!(n & d) || c && u === "underline" || u === "strikethrough") && i.add(...o);
    } else n & d && i.remove(...o);
  }
}
function Wd(e, n, t) {
  const r = t.isComposing(), s = e + (r ? zs : ""), i = De(), o = Go(i).$getDOMSlot(t, n, i), l = o.getFirstChild();
  if (l === null || l.nodeType !== Node.TEXT_NODE) return void o.insertChild(je().createTextNode(s));
  const c = l, u = c.nodeValue;
  if (u !== s) if (r || vn) {
    const [d, f, h] = function(g, p) {
      const C = g.length, m = p.length;
      let x = 0, y = 0;
      for (; x < C && x < m && g[x] === p[x]; ) x++;
      for (; y + x < C && y + x < m && g[C - y - 1] === p[m - y - 1]; ) y++;
      return [x, C - x - y, p.slice(x, m - y)];
    }(u, s);
    f !== 0 && c.deleteData(d, f), c.insertData(d, h);
  } else c.nodeValue = s;
}
function Rc(e, n, t, r, s, i) {
  Wd(s, e, n);
  const o = i.theme.text;
  o !== void 0 && Zd(0, 0, r, e, o);
}
function Li(e, n) {
  const t = je().createElement(n);
  return t.appendChild(e), t;
}
function ha(e) {
  return e != null && e.__isInlineFormattable === !0;
}
class wn extends gt {
  constructor(t = "", r) {
    super(r);
    M(this, "__text");
    M(this, "__format");
    M(this, "__style");
    M(this, "__mode");
    M(this, "__detail");
    this.__text = t, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  get __isInlineFormattable() {
    return !0;
  }
  $config() {
    return this.config("text", { importDOM: { "#text": () => ({ conversion: J6, priority: 0 }), b: () => ({ conversion: Y6, priority: 0 }), code: () => ({ conversion: hn, priority: 0 }), em: () => ({ conversion: hn, priority: 0 }), i: () => ({ conversion: hn, priority: 0 }), mark: () => ({ conversion: hn, priority: 0 }), s: () => ({ conversion: hn, priority: 0 }), span: () => ({ conversion: G6, priority: 0 }), strong: () => ({ conversion: hn, priority: 0 }), sub: () => ({ conversion: hn, priority: 0 }), sup: () => ({ conversion: hn, priority: 0 }), u: () => ({ conversion: hn, priority: 0 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__text = t.__text, this.__format = t.__format, this.__style = t.__style, this.__mode = t.__mode, this.__detail = t.__detail;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const t = this.getLatest();
    return c6[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === sn();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return !!(1 & this.getLatest().__detail);
  }
  isUnmergeable() {
    return !!(2 & this.getLatest().__detail);
  }
  hasFormat(t) {
    const r = Bn[t];
    return (this.getFormat() & r) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, r) {
    return ar(this.getLatest().__format, t, r);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(t, r) {
    const s = this.__format, i = Cl(0, s), o = yl(0, s), l = i === null ? o : i, c = je().createElement(l);
    let u = c;
    this.hasFormat("code") && c.setAttribute("spellcheck", "false"), i !== null && (u = je().createElement(o), c.appendChild(u)), Rc(u, this, 0, s, this.__text, t);
    const d = this.__style;
    return d !== "" && Ur(c.style, d), c;
  }
  updateDOM(t, r, s) {
    const i = this.__text, o = t.__format, l = this.__format, c = Cl(0, o), u = Cl(0, l), d = yl(0, o), f = yl(0, l);
    if ((c === null ? d : c) !== (u === null ? f : u)) return !0;
    if (c === u && d !== f) {
      const m = r.firstChild;
      m == null && D(48);
      const x = je().createElement(f);
      return Rc(x, this, 0, l, i, s), r.replaceChild(x, m), !1;
    }
    let h = r;
    u !== null && c !== null && (h = r.firstChild, h == null && D(49)), Wd(i, h, this);
    const g = s.theme.text;
    g !== void 0 && o !== l && Zd(0, o, l, h, g);
    const p = t.__style, C = this.__style;
    return p !== C && Ur(r.style, C, p), !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
  }
  exportDOM(t) {
    let { element: r } = super.exportDOM(t);
    return oe(r) || D(132), r.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? r.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? r.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (r.style.textTransform = "capitalize"), this.hasFormat("bold") && (r = Li(r, "b")), this.hasFormat("italic") && (r = Li(r, "i")), this.hasFormat("strikethrough") && (r = Li(r, "s")), this.hasFormat("underline") && (r = Li(r, "u")), { element: r };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(t, r) {
  }
  setFormat(t) {
    const r = this.getWritable();
    return r.__format = typeof t == "string" ? Bn[t] : t, r;
  }
  setDetail(t) {
    const r = this.getWritable();
    return r.__detail = typeof t == "string" ? o6[t] : t, r;
  }
  setStyle(t) {
    const r = this.getWritable();
    return r.__style = t, r;
  }
  toggleFormat(t) {
    const r = ar(this.getFormat(), t, null);
    return this.setFormat(r);
  }
  toggleDirectionless() {
    const t = this.getWritable();
    return t.__detail ^= 1, t;
  }
  toggleUnmergeable() {
    const t = this.getWritable();
    return t.__detail ^= 2, t;
  }
  setMode(t) {
    const r = a6[t];
    if (this.__mode === r) return this;
    const s = this.getWritable();
    return s.__mode = r, s;
  }
  setTextContent(t) {
    if (this.__text === t) return this;
    const r = this.getWritable();
    return r.__text = t, r;
  }
  select(t, r) {
    Ye();
    let s = t, i = r;
    const o = B(), l = this.getTextContent(), c = this.__key;
    if (typeof l == "string") {
      const u = l.length;
      s === void 0 && (s = u), i === void 0 && (i = u);
    } else s = 0, i = 0;
    if (!I(o)) return t5(c, s, c, i, "text", "text");
    {
      const u = sn();
      u !== o.anchor.key && u !== o.focus.key || qe(c), o.setTextNodeRange(this, s, this, i);
    }
    return o;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    const t = this.getTextContentSize();
    return this.select(t, t);
  }
  spliceText(t, r, s, i) {
    const o = this.getWritable(), l = o.__text, c = s.length;
    let u = t;
    u < 0 && (u = c + u, u < 0 && (u = 0));
    const d = B();
    if (i && I(d)) {
      const h = t + c;
      d.setTextNodeRange(o, h, o, h);
    }
    const f = l.slice(0, u) + s + l.slice(u + r);
    return o.__text = f, o;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...t) {
    Ye();
    const r = this.getLatest(), s = r.getTextContent();
    if (s === "") return [];
    const i = r.__key, o = sn(), l = s.length;
    t.sort((k, L) => k - L), t.push(l);
    const c = [], u = t.length;
    for (let k = 0, L = 0; k < l && L <= u; L++) {
      const A = t[L];
      A > k && (c.push(s.slice(k, A)), k = A);
    }
    const d = c.length;
    if (d === 1) return [r];
    const f = c[0], h = r.getParent();
    let g;
    const p = r.getFormat(), C = r.getStyle(), m = r.__detail;
    let x = !1, y = null, _ = null;
    const v = B();
    if (I(v)) {
      const [k, L] = v.isBackward() ? [v.focus, v.anchor] : [v.anchor, v.focus];
      k.type === "text" && k.key === i && (y = k), L.type === "text" && L.key === i && (_ = L);
    }
    r.isSegmented() ? (g = pt(f), g.__format = p, g.__style = C, g.__detail = m, g.__state = _c(r, g), x = !0) : g = r.setTextContent(f);
    const w = [g];
    for (let k = 1; k < d; k++) {
      const L = pt(c[k]);
      L.__format = p, L.__style = C, L.__detail = m, L.__state = _c(r, L);
      const A = L.__key;
      o === i && qe(A), w.push(L);
    }
    const E = y ? y.offset : null, N = _ ? _.offset : null;
    let S = 0;
    for (const k of w) {
      if (!y && !_) break;
      const L = S + k.getTextContentSize();
      if (y !== null && E !== null && E <= L && E >= S && (y.set(k.getKey(), E - S, "text"), E < L && (y = null)), _ !== null && N !== null && N <= L && N >= S) {
        _.set(k.getKey(), N - S, "text");
        break;
      }
      S = L;
    }
    if (h !== null) {
      (function(A) {
        const H = A.getPreviousSibling(), G = A.getNextSibling();
        H !== null && bo(H), G !== null && bo(G);
      })(this);
      const k = h.getWritable(), L = this.getIndexWithinParent();
      x ? (k.splice(L, 0, w), this.remove()) : k.splice(L, 1, w), I(v) && Jn(v, h, L, d - 1);
    }
    return w;
  }
  mergeWithSibling(t) {
    const r = t === this.getPreviousSibling();
    r || t === this.getNextSibling() || D(50);
    const s = this.__key, i = t.__key, o = this.__text, l = o.length;
    sn() === i && qe(s);
    const c = B();
    if (I(c)) {
      const h = c.anchor, g = c.focus;
      h !== null && h.key === i && qc(h, r, s, t, l), g !== null && g.key === i && qc(g, r, s, t, l);
    }
    const u = t.__text, d = r ? u + o : o + u;
    this.setTextContent(d);
    const f = this.getWritable();
    return t.remove(), f;
  }
  isTextEntity() {
    return !1;
  }
}
function G6(e) {
  return { forChild: Wa(e.style), node: null };
}
function Y6(e) {
  const n = e, t = n.style.fontWeight === "normal";
  return { forChild: Wa(n.style, t ? void 0 : "bold"), node: null };
}
const Pc = /* @__PURE__ */ new WeakMap();
function q6(e) {
  if (!oe(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const n = e.style.whiteSpace;
  return typeof n == "string" && n.startsWith("pre");
}
function J6(e) {
  const n = e;
  e.parentElement === null && D(129);
  let t = n.textContent || "";
  if (function(r) {
    let s, i = r.parentNode;
    const o = [r];
    for (; i !== null && (s = Pc.get(i)) === void 0 && !q6(i); ) o.push(i), i = i.parentNode;
    const l = s === void 0 ? i : s;
    for (let c = 0; c < o.length; c++) Pc.set(o[c], l);
    return l;
  }(n) !== null) return { node: Qs(t) };
  if (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), t === "") return { node: null };
  if (t[0] === " ") {
    let r = n, s = !0;
    for (; r !== null && (r = Hc(r, !1)) !== null; ) {
      const i = r.textContent || "";
      if (i.length > 0) {
        /[ \t\n]$/.test(i) && (t = t.slice(1)), s = !1;
        break;
      }
    }
    s && (t = t.slice(1));
  }
  if (t[t.length - 1] === " ") {
    let r = n, s = !0;
    for (; r !== null && (r = Hc(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        s = !1;
        break;
      }
    s && (t = t.slice(0, t.length - 1));
  }
  return t === "" ? { node: null } : { node: pt(t) };
}
function Hc(e, n) {
  let t = e;
  for (; ; ) {
    let r;
    for (; (r = n ? t.nextSibling : t.previousSibling) === null; ) {
      const i = t.parentElement;
      if (i === null) return null;
      t = i;
    }
    if (t = r, oe(t)) {
      const i = t.style.display;
      if (i === "" && !So(t) || i !== "" && !i.startsWith("inline")) return null;
    }
    let s = t;
    for (; (s = n ? t.firstChild : t.lastChild) !== null; ) t = s;
    if (vt(t)) return t;
    if (t.nodeName === "BR") return null;
  }
}
const X6 = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function hn(e) {
  const n = X6[e.nodeName.toLowerCase()];
  return n === void 0 ? { node: null } : { forChild: Wa(e.style, n), node: null };
}
function pt(e = "") {
  return qt(new wn(e));
}
function $(e) {
  return e instanceof wn;
}
function Wa(e, n) {
  const t = e.fontWeight, r = e.textDecoration.split(" "), s = t === "700" || t === "bold", i = r.includes("line-through"), o = e.fontStyle === "italic", l = r.includes("underline"), c = e.verticalAlign;
  return (u) => (($(u) || ha(u)) && (s && !u.hasFormat("bold") && u.toggleFormat("bold"), i && !u.hasFormat("strikethrough") && u.toggleFormat("strikethrough"), o && !u.hasFormat("italic") && u.toggleFormat("italic"), l && !u.hasFormat("underline") && u.toggleFormat("underline"), c !== "sub" || u.hasFormat("subscript") || u.toggleFormat("subscript"), c !== "super" || u.hasFormat("superscript") || u.toggleFormat("superscript"), n && !u.hasFormat(n) && u.toggleFormat(n)), u);
}
class Po extends wn {
  $config() {
    return this.config("tab", { extends: wn });
  }
  constructor(n = void 0) {
    super("	", n), this.__detail = 2;
  }
  createDOM(n) {
    const t = super.createDOM(n), r = Gr(n.theme, "tab");
    return r !== void 0 && t.classList.add(...r), t;
  }
  setTextContent(n) {
    return super.setTextContent("	");
  }
  spliceText(n, t, r, s) {
    return r === "" && t === 0 || r === "	" && t === 1 || D(286), this;
  }
  setDetail(n) {
    return n !== 2 && D(127), this;
  }
  setMode(n) {
    return n !== "normal" && D(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Ho() {
  return qt(new Po());
}
function Qr(e) {
  return e instanceof Po;
}
class Q6 {
  constructor(n, t, r) {
    M(this, "key");
    M(this, "offset");
    M(this, "type");
    M(this, "_selection");
    this._selection = null, this.key = n, this.offset = t, this.type = r;
  }
  is(n) {
    return this.key === n.key && this.offset === n.offset && this.type === n.type;
  }
  isBefore(n) {
    return this.key === n.key ? this.offset < n.offset : ni(yt(bt(this, "next")), yt(bt(n, "next"))) < 0;
  }
  getNode() {
    const n = Le(this.key);
    return n === null && D(20), n;
  }
  set(n, t, r, s) {
    const i = this._selection, o = this.key;
    s && this.key === n && this.offset === t && this.type === r || (this.key = n, this.offset = t, this.type = r, or() || (sn() === o && qe(n), i !== null && (i.setCachedNodes(null), I(i) && (i._cachedIsBackward = null), i.dirty = !0)));
  }
}
function an(e, n, t) {
  return new Q6(e, n, t);
}
function _l(e, n) {
  let t = n.__key, r = e.offset, s = "element";
  if ($(n)) {
    s = "text";
    const i = n.getTextContentSize();
    r > i && (r = i);
  } else if (!T(n)) {
    const i = n.getNextSibling();
    if ($(i)) t = i.__key, r = 0, s = "text";
    else {
      const o = n.getParent();
      o && (t = o.__key, r = n.getIndexWithinParent() + 1);
    }
  }
  e.set(t, r, s);
}
function Bc(e, n) {
  if (T(n)) {
    const t = n.getLastDescendant();
    T(t) || $(t) ? _l(e, t) : _l(e, n);
  } else _l(e, n);
}
function Vc(e, n, t, r) {
  const s = e.getNode(), i = s.getChildAtIndex(e.offset), o = pt();
  if (o.setFormat(t), o.setStyle(r), ci(i)) i.splice(0, 0, [o]);
  else if (i !== null) {
    const l = Me(s) ? Se().append(o) : o;
    i.insertBefore(l);
  } else if (Me(s)) {
    const l = s.getLastChild();
    T(l) && !l.isInline() && l.isEmpty() ? l.append(o) : s.append(Se().append(o));
  } else s.append(o);
  e.is(n) && n.set(o.__key, 0, "text"), e.set(o.__key, 0, "text");
}
function zc(e, n, t, r) {
  const s = e.anchor.getNode();
  $(s) || D(398);
  const i = e.anchor.offset, o = pt(n);
  o.setFormat(t), o.setStyle(r);
  const l = s.getParentOrThrow();
  if (i === 0) l.isInline() && !s.__prev ? l.insertBefore(o) : s.insertBefore(o, !1);
  else if (i === s.getTextContentSize()) l.isInline() && !s.__next ? l.insertAfter(o) : s.insertAfter(o, !1);
  else {
    const [c] = s.splitText(i);
    c.insertAfter(o, !1);
  }
  s.getTextContent() === "" && s.isAttached() && s.remove(), o.selectEnd(), o.isComposing() && e.anchor.type === "text" && e.anchor.set(e.anchor.key, e.anchor.offset - n.length, e.anchor.type);
}
class Bo {
  constructor(n) {
    M(this, "_nodes");
    M(this, "_cachedNodes");
    M(this, "dirty");
    this._cachedNodes = null, this._nodes = n, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    if (!Ne(n)) return !1;
    const t = this._nodes, r = n._nodes;
    return t.size === r.size && Array.from(t).every((s) => r.has(s));
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return !1;
  }
  getStartEndPoints() {
    return null;
  }
  add(n) {
    this.dirty = !0, this._nodes.add(n), this._cachedNodes = null;
  }
  delete(n) {
    this.dirty = !0, this._nodes.delete(n), this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
  }
  has(n) {
    return this._nodes.has(n);
  }
  clone() {
    return new Bo(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(n) {
  }
  insertText() {
  }
  insertNodes(n) {
    const t = this.getNodes().filter((o) => st(o) === null), r = t.length;
    if (r === 0) return;
    const s = t[r - 1];
    let i;
    if ($(s)) i = s.select();
    else {
      const o = s.getIndexWithinParent() + 1;
      i = s.getParentOrThrow().select(o, o);
    }
    i.insertNodes(n);
    for (let o = 0; o < r; o++) t[o].remove();
  }
  getNodes() {
    const n = this._cachedNodes;
    if (n !== null) return n;
    const t = this._nodes, r = [];
    for (const s of t) {
      const i = Le(s);
      i !== null && r.push(i);
    }
    return or() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const n = this.getNodes();
    let t = "";
    for (let r = 0; r < n.length; r++) t += n[r].getTextContent();
    return t;
  }
  deleteNodes() {
    const n = this.getNodes().filter((t) => st(t) === null);
    if ((B() || ls()) === this && n[0]) {
      const t = _e(n[0], "next");
      ri(Gt(t, t));
    }
    for (const t of n) t.remove();
    Ud();
  }
}
function Ud() {
  const e = Fe();
  if (e.isEmpty()) {
    const n = Se();
    e.append(n), n.select();
  }
}
function I(e) {
  return e instanceof yr;
}
class yr {
  constructor(n, t, r, s) {
    M(this, "format");
    M(this, "style");
    M(this, "anchor");
    M(this, "focus");
    M(this, "_cachedNodes");
    M(this, "_cachedIsBackward");
    M(this, "dirty");
    this.anchor = n, this.focus = t, n._selection = this, t._selection = this, this._cachedNodes = null, this._cachedIsBackward = null, this.format = r, this.style = s, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    return !!I(n) && this.anchor.is(n.anchor) && this.focus.is(n.focus) && this.format === n.format && this.style === n.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const n = this._cachedNodes;
    if (n !== null) return n;
    const t = function(r) {
      const s = [], [i, o] = r.getTextSlices();
      i && s.push(i.caret.origin);
      const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
      for (const u of r) if ($t(u)) {
        const { origin: d } = u;
        s.length === 0 ? l.add(d) : (c.add(d), s.push(d));
      } else {
        const { origin: d } = u;
        T(d) && c.has(d) || s.push(d);
      }
      if (o && s.push(o.caret.origin), En(r.focus) && T(r.focus.origin) && r.focus.getNodeAtCaret() === null) for (let u = _t(r.focus.origin, "previous"); $t(u) && l.has(u.origin) && !u.origin.isEmpty() && u.origin.is(s[s.length - 1]); u = a1(u)) l.delete(u.origin), s.pop();
      for (; s.length > 1; ) {
        const u = s[s.length - 1];
        if (!T(u) || c.has(u) || u.isEmpty() || l.has(u)) break;
        s.pop();
      }
      if (s.length === 0 && r.isCollapsed()) {
        const u = yt(r.anchor), d = yt(r.anchor.getFlipped()), f = (g) => Dt(g) ? g.origin : g.getNodeAtCaret(), h = f(u) || f(d) || (r.anchor.getNodeAtCaret() ? u.origin : d.origin);
        s.push(h);
      }
      return s;
    }(d1(No(this), "next"));
    return or() || (this._cachedNodes = t), t;
  }
  setTextNodeRange(n, t, r, s) {
    return this.anchor.set(n.__key, t, "text"), this.focus.set(r.__key, s, "text"), this;
  }
  getTextContent() {
    const n = this.getNodes();
    if (n.length === 0) return "";
    const t = n[0], r = n[n.length - 1], s = this.anchor, i = this.focus, o = s.isBefore(i), [l, c] = ga(this);
    let u = "", d = !0;
    for (let f = 0; f < n.length; f++) {
      const h = n[f];
      if (T(h) && !h.isInline()) {
        d || (u += `
`);
        let g = "";
        for (const p of It(h)) {
          const C = dr(h, p);
          C !== null && (g += C.getTextContent());
        }
        g !== "" ? (u += g, d = !1) : d = !h.isEmpty();
      } else if (d = !1, $(h)) {
        let g = h.getTextContent();
        h === t ? h === r ? s.type === "element" && i.type === "element" && i.offset !== s.offset || (g = l < c ? g.slice(l, c) : g.slice(c, l)) : g = o ? g.slice(l) : g.slice(c) : h === r && (g = o ? g.slice(0, c) : g.slice(0, l)), u += g;
      } else !de(h) && !Rt(h) || h === r && this.isCollapsed() || (u += h.getTextContent());
    }
    return u;
  }
  applyDOMRange(n) {
    const t = be(), r = t.getEditorState()._selection, s = e5(n.startContainer, n.startOffset, n.endContainer, n.endOffset, t, r);
    if (s === null) return;
    const [i, o, l] = s;
    this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(o.key, o.offset, o.type, !0), l && (this.dirty = !0), Cn(this);
  }
  clone() {
    const n = this.anchor, t = this.focus;
    return new yr(an(n.key, n.offset, n.type), an(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(n) {
    this.format = ar(this.format, n, null), this.dirty = !0;
  }
  setFormat(n) {
    this.format = n, this.dirty = !0;
  }
  setStyle(n) {
    this.style = n, this.dirty = !0;
  }
  hasFormat(n) {
    const t = Bn[n];
    return (this.format & t) !== 0;
  }
  insertRawText(n) {
    this.insertNodes(Qs(n));
  }
  insertText(n) {
    let t = this.format, r = this.style;
    if (!this.isCollapsed()) {
      const f = (this.focus.isBefore(this.anchor) ? this.focus : this.anchor).getNode();
      if ($(f) && (t = f.getFormat(), r = f.getStyle()), this.removeText(), this.format = t, this.style = r, n === "") return;
      if (sn() === null) return this.anchor.type === "element" && Vc(this.anchor, this.focus, t, r), void zc(this, n, t, r);
    }
    this.anchor.type === "element" && Vc(this.anchor, this.focus, t, r);
    const s = this.anchor.getNode();
    $(s) || D(398);
    const i = this.anchor.offset, o = s.getParentOrThrow(), l = s.getTextContentSize();
    if (Tt(s) || i === 0 && (!s.canInsertTextBefore() || !o.canInsertTextBefore() && !s.__prev) || i === l && (!s.canInsertTextAfter() || !o.canInsertTextAfter() && !s.__next)) {
      if (s.isSegmented() && i !== 0 && i !== l) {
        if (sn() !== null) s.setMode("normal").setFormat(t).setStyle(r);
        else {
          const h = pt(s.getTextContent());
          h.setFormat(t), h.setStyle(r), s.replace(h), h.select(i, i);
        }
        return void (n !== "" && this.insertText(n));
      }
      if (n === "") return;
      if (i === 0) {
        const h = s.getPreviousSibling();
        if ($(h) && h.canInsertTextAfter() && !Tt(h)) h.select();
        else {
          const g = pt();
          g.setFormat(t), g.setStyle(r), o.canInsertTextBefore() ? s.insertBefore(g) : o.insertBefore(g), g.select();
        }
        return void this.insertText(n);
      }
      if (i === l) {
        const h = s.getNextSibling();
        if ($(h) && h.canInsertTextBefore() && !Tt(h)) h.select(0, 0);
        else {
          const g = pt();
          g.setFormat(t), g.setStyle(r), o.canInsertTextAfter() ? s.insertAfter(g) : o.insertAfter(g), g.select(0, 0);
        }
        return void this.insertText(n);
      }
      const f = pt(n);
      return f.setFormat(t), f.setStyle(r), s.replace(f), void f.select();
    }
    if (n === "") return;
    const c = o.isInline() && i === 0 && !s.__prev, u = o.isInline() && i === l && !s.__next, d = s.getFormat() !== t || s.getStyle() !== r;
    if (c || u || d) {
      if (s.getTextContent() !== "" || c || u) return void zc(this, n, t, r);
      s.setFormat(t), s.setStyle(r);
    }
    s.spliceText(i, 0, n, !0), s.isComposing() && this.anchor.type === "text" && this.anchor.set(this.anchor.key, this.anchor.offset - n.length, this.anchor.type);
  }
  removeText() {
    const n = B() === this;
    Qi(this, J3(No(this))), n && B() !== this && Xe(this);
  }
  formatText(n, t = null) {
    Gd(this, n, t);
  }
  insertNodes(n) {
    if (n.length === 0) return;
    this.isCollapsed() || this.removeText();
    const t = this.anchor.getNode();
    if (this.anchor.type === "element" && T(t) && st(t) !== null) {
      let C = t.isShadowRoot() ? t.getFirstChild() ?? t.append(Se()).getFirstChild() : t.getFirstChild();
      if (t.isShadowRoot() && C !== null && !T(C)) {
        const m = Se();
        C.insertBefore(m), C = m;
      }
      if (C !== null) {
        C.selectStart();
        const m = B();
        return I(m) || D(369), m.insertNodes(n);
      }
    }
    if (this.anchor.type === "element" && Me(t)) {
      const C = vl(n), m = C.getLastDescendant();
      return t.splice(this.anchor.offset, 0, C.getChildren()), void (m !== null && m.selectEnd());
    }
    let r = (this.isBackward() ? this.focus : this.anchor).getNode(), s = Ee(r, nt);
    const i = n[n.length - 1];
    if (T(s) && "__language" in s) {
      if ("__language" in n[0]) this.insertText(n[0].getTextContent());
      else {
        const C = vs(this);
        s.splice(C, 0, n), i.selectEnd();
      }
      return;
    }
    if (!n.some((C) => (T(C) || de(C)) && !C.isInline())) {
      T(s) || D(211, r.constructor.name, r.getType());
      const C = vs(this);
      return s.splice(C, 0, n), void i.selectEnd();
    }
    if (T(s) && st(s) !== null) {
      const C = vs(this), m = ma(n);
      s.splice(C, 0, m);
      const x = m[m.length - 1];
      return void (x !== void 0 ? x.selectEnd() : s.select(C, C));
    }
    if (s === null) {
      const C = vl(n), m = C.getLastDescendant();
      let x = bt(this.anchor, "next");
      for (const y of C.getChildren()) x = f1(y, x);
      return void (m !== null && m.selectEnd());
    }
    if (T(s) && !s.isParentRequired() && !Me(s.getParentOrThrow())) {
      const C = vs(this), m = ma(n);
      s.splice(C, 0, m);
      const x = m[m.length - 1];
      return void (x !== void 0 ? x.selectEnd() : s.select(C, C));
    }
    const o = vl(n), l = o.getLastDescendant(), c = o.getChildren(), u = !T(s) || !s.isEmpty() ? this.insertParagraph() : null;
    u && !s.isAttached() && (r = this.anchor.getNode(), s = Ee(r, nt));
    const d = c[c.length - 1];
    let f = c[0];
    var h;
    T(h = f) && nt(h) && !h.isEmpty() && T(s) && (!s.isEmpty() || s.canMergeWhenEmpty()) && (T(s) || D(211, r.constructor.name, r.getType()), s.append(...f.getChildren()), f = c[1]), f && (s === null && D(212, r.constructor.name, r.getType()), function(C, m) {
      const x = m.getParentOrThrow().getLastChild();
      let y = m;
      const _ = [m];
      for (; y !== x; ) y.getNextSibling() || D(140), y = y.getNextSibling(), _.push(y);
      let v = C;
      for (const w of _) v = v.insertAfter(w);
    }(s, f));
    const g = Ee(l, nt);
    u && T(g) && (u.canMergeWhenEmpty() || nt(d)) && (g.append(...u.getChildren()), u.remove()), T(s) && s.isEmpty() && s.remove(), l.selectEnd();
    const p = T(s) ? s.getLastChild() : null;
    Rt(p) && g !== s && p.remove();
  }
  insertParagraph() {
    const n = this.anchor.getNode();
    if (this.anchor.type === "element" && Me(n)) {
      const l = Se();
      return n.splice(this.anchor.offset, 0, [l]), l.select(), l;
    }
    const t = vs(this), r = Ee(this.anchor.getNode(), nt);
    if (r !== null && st(r) !== null) return null;
    T(r) || D(213);
    const s = r.getChildAtIndex(t), i = s ? [s, ...s.getNextSiblings()] : [], o = r.insertNewAfter(this, !1);
    return o ? (o.append(...i), o.selectStart(), o) : null;
  }
  insertLineBreak(n) {
    const t = Sn();
    if (this.insertNodes([t]), n) {
      const r = t.getParentOrThrow(), s = t.getIndexWithinParent();
      r.select(s, s);
    }
  }
  extract() {
    const n = [...this.getNodes()], t = n.length;
    let r = n[0], s = n[t - 1];
    const [i, o] = ga(this), l = this.isBackward(), [c, u] = l ? [this.focus, this.anchor] : [this.anchor, this.focus], [d, f] = l ? [o, i] : [i, o];
    if (t === 0) return [];
    if (t === 1) {
      if ($(r) && !this.isCollapsed()) {
        const h = r.splitText(d, f), g = d === 0 ? h[0] : h[1];
        return g ? (c.set(g.getKey(), 0, "text"), u.set(g.getKey(), g.getTextContentSize(), "text"), [g]) : [];
      }
      return [r];
    }
    if ($(r) && (d === r.getTextContentSize() ? n.shift() : d !== 0 && ([, r] = r.splitText(d), n[0] = r, c.set(r.getKey(), 0, "text"))), $(s)) {
      const h = s.getTextContent().length;
      f === 0 ? n.pop() : f !== h && ([s] = s.splitText(f), n[n.length - 1] = s, u.set(s.getKey(), s.getTextContentSize(), "text"));
    }
    return n;
  }
  modify(n, t, r) {
    if (mo(this, n, t, r)) return;
    const s = n === "move", i = be(), o = mt(wt(i));
    if (!o) return;
    const l = i._blockCursorElement, c = i._rootElement, u = this.focus.getNode();
    c === null || l === null || !T(u) || u.isInline() || u.canBeEmpty() || vo(l, i, c);
    const d = ts(i, this.focus.key);
    let f = d;
    if (this.focus.type === "text" && (f = $(u) ? Pn(u, d, i) : null), this.dirty) {
      const h = ts(i, this.anchor.key);
      let g = h;
      if (this.anchor.type === "text") {
        const p = this.anchor.getNode();
        g = $(p) ? Pn(p, h, i) : null;
      }
      g && f && po(o, g, this.anchor.offset, f, this.focus.offset);
    }
    if (r === "character" && $(u) && u.isUnmergeable() && (t ? this.focus.offset === 0 : this.focus.offset === u.getTextContentSize())) {
      const h = _e(u, t ? "previous" : "next").getNodeAtCaret();
      if ($(h)) {
        if (!s) {
          const g = h.getTextContentSize();
          return t ? this.focus.set(h.__key, g - 1, "text") : this.focus.set(h.__key, 1, "text"), void (this.dirty = !0);
        }
        {
          const g = i.getElementByKey(h.getKey()), p = g ? Pn(h, g, i) : null;
          if (p) {
            const C = t ? p.length : 0;
            po(o, p, C, p, C);
          }
        }
      }
    }
    if (qd(o, n, t ? "backward" : "forward", r), o.rangeCount > 0) {
      const h = Ko(o, i._rootElement), g = h || o.getRangeAt(0), p = this.anchor.getNode(), C = ze(p) ? p : S5(p);
      this.applyDOMRange(g), this.dirty = !0, !s && (Jd(this, t, C), (h ? o.direction !== "backward" : o.anchorNode === g.startContainer && o.anchorOffset === g.startOffset) || Yd(this));
    }
    r === "lineboundary" && mo(this, n, t, r, "decorators");
  }
  forwardDeletion(n, t, r) {
    if (!r && (n.type === "element" && T(t) && n.offset === t.getChildrenSize() || n.type === "text" && n.offset === t.getTextContentSize())) {
      const s = t.getParent(), i = t.getNextSibling() || (s === null ? null : s.getNextSibling());
      if (T(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(n) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let s = r.getNode();
      if (this.forwardDeletion(r, s, n)) return;
      const i = Jo(bt(r, n ? "previous" : "next"));
      if (i.getTextSlices().every((l) => l === null || l.distance === 0)) {
        let l = { type: "initial" };
        for (const c of i.iterNodeCarets("shadowRoot")) if ($t(c)) {
          if (!c.origin.isInline()) {
            if (c.origin.isShadowRoot()) {
              if (l.type === "merge-block") break;
              if (T(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                const u = yt(c);
                Qi(this, Gt(u, u)), i.anchor.origin.remove();
              }
              return;
            }
            l.type !== "merge-next-block" && l.type !== "merge-block" || (l = { block: l.block, caret: c, type: "merge-block" });
          }
        } else {
          if (l.type === "merge-block") break;
          if (En(c)) {
            if (T(c.origin)) {
              if (c.origin.isInline()) {
                if (!c.origin.isParentOf(i.anchor.origin)) break;
              } else l = { block: c.origin, type: "merge-next-block" };
              continue;
            }
            if (de(c.origin)) {
              if (!c.origin.isIsolated()) if (It(c.origin).length > 0) {
                if (T(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                  i.anchor.origin.remove();
                  const u = fo();
                  u.add(c.origin.getKey()), Xe(u);
                }
              } else if (l.type === "merge-next-block" && (c.origin.isKeyboardSelectable() || !c.origin.isInline()) && T(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                i.anchor.origin.remove();
                const u = fo();
                u.add(c.origin.getKey()), Xe(u);
              } else c.origin.remove();
              return;
            }
            break;
          }
        }
        if (l.type === "merge-block") {
          const { caret: c, block: u } = l;
          return It(u).length > 0 ? void 0 : c.origin.isEmpty() && !u.isEmpty() && c.origin.getParent() === u.getParent() ? void c.origin.remove(!0) : (Qi(this, Gt(!c.origin.isEmpty() && u.isEmpty() ? Zn(_e(u, c.direction)) : i.anchor, c)), this.removeText());
        }
        for (let c = r.getNode(); c !== null; ) {
          if (st(c) !== null) return;
          if (T(c) && c.isShadowRoot()) break;
          c = c.getParent();
        }
      }
      const o = this.focus;
      if (bl(this, n, "character"), this.isCollapsed()) {
        if (n && r.offset === 0 && Wc(this, r.getNode())) return;
      } else {
        const l = o.type === "text" ? o.getNode() : null;
        if (s = r.type === "text" ? r.getNode() : null, l !== null && l.isSegmented()) {
          const c = o.offset, u = l.getTextContentSize();
          if (l.is(s) || n && c !== u || !n && c !== 0) return void Uc(l, n, c);
        } else if (s !== null && s.isSegmented()) {
          const c = r.offset, u = s.getTextContentSize();
          if (s.is(l) || n && c !== 0 || !n && c !== u) return void Uc(s, n, c);
        }
        (function(c, u) {
          const d = c.anchor, f = c.focus, h = d.getNode(), g = f.getNode();
          if (h === g && d.type === "text" && f.type === "text") {
            const p = d.offset, C = f.offset, m = p < C, x = m ? p : C, y = m ? C : p, _ = y - 1;
            x !== _ && function(v) {
              return !(_5(v) || t3(v));
            }(h.getTextContent().slice(x, y)) && (u ? f.set(f.key, _, f.type) : d.set(d.key, _, d.type));
          }
        })(this, n);
      }
    }
    if (this.removeText(), n && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && ze(r.getParent()) && r.getPreviousSibling() === null && Wc(this, r), Ud();
    }
  }
  deleteLine(n) {
    const t = pa(this.anchor);
    if (t !== null && de(Ut(t))) return this.isCollapsed() || this.focus.set(this.anchor.key, this.anchor.offset, this.anchor.type), void this.deleteCharacter(n);
    this.isCollapsed() && bl(this, n, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(n) : Ee(this.anchor.getNode(), nt) !== Ee(this.focus.getNode(), nt) ? (this.focus.set(this.anchor.key, this.anchor.offset, this.anchor.type), this.deleteCharacter(n)) : this.removeText();
  }
  deleteWord(n) {
    if (this.isCollapsed()) {
      const t = this.anchor, r = t.getNode();
      if (this.forwardDeletion(t, r, n)) return;
      bl(this, n, "word");
    }
    this.isCollapsed() ? this.deleteCharacter(n) : this.removeText();
  }
  isBackward() {
    const n = this._cachedIsBackward;
    if (n !== null) return n;
    const t = this.focus.isBefore(this.anchor);
    return or() || (this._cachedIsBackward = t), t;
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function Ne(e) {
  return e instanceof Bo;
}
function Kd(e, n) {
  if (Ne(e)) {
    for (const x of e.getNodes()) ha(x) && x.setFormat(n(x.getFormat()));
    return;
  }
  if (e.isCollapsed()) return e.setFormat(n(e.format)), void qe(null);
  const t = [];
  for (const x of e.getNodes()) $(x) ? t.push(x) : T(x) ? x.setTextFormat(n(x.getTextFormat())) : ha(x) && x.setFormat(n(x.getFormat()));
  const r = t.length;
  if (r === 0) return e.setFormat(n(e.format)), void qe(null);
  const s = e.anchor, i = e.focus, o = e.isBackward(), l = o ? i : s, c = o ? s : i;
  let u = 0, d = t[0], f = l.type === "element" ? 0 : l.offset;
  if (l.type === "text" && f === d.getTextContentSize() && (u = 1, d = t[1], f = 0), d == null) return;
  const h = r - 1;
  let g = t[h];
  const p = c.type === "text" ? c.offset : g.getTextContentSize();
  if (d.is(g)) {
    if (f === p) return;
    const x = n(d.getFormat());
    if (Tt(d) || f === 0 && p === d.getTextContentSize()) d.setFormat(x);
    else {
      const y = d.splitText(f, p), _ = f === 0 ? y[0] : y[1];
      _.setFormat(x), l.type === "text" && l.set(_.__key, 0, "text"), c.type === "text" && c.set(_.__key, p - f, "text");
    }
    return void (e.format = x);
  }
  f === 0 || Tt(d) || ([, d] = d.splitText(f), f = 0);
  const C = n(d.getFormat());
  d.setFormat(C);
  const m = n(g.getFormat());
  p > 0 && (p === g.getTextContentSize() || Tt(g) || ([g] = g.splitText(p)), g.setFormat(m));
  for (let x = u + 1; x < h; x++) {
    const y = t[x];
    y.setFormat(n(y.getFormat()));
  }
  l.type === "text" && l.set(d.__key, f, "text"), c.type === "text" && c.set(g.__key, p, "text"), e.format = C | m;
}
function e3(e, n) {
  const t = [];
  for (const [r, s] of Object.entries(n)) typeof s == "boolean" && t.push([r, s]);
  t.length !== 0 && Kd(e, (r) => {
    for (const [s, i] of t) r = ar(r, s, i ? Bn[s] : 0);
    return r;
  });
}
function Gd(e, n, t = null) {
  const r = t === null && I(e) ? ar(e.format, n, null) : t;
  Kd(e, (s) => ar(s, n, r));
}
function Zc(e) {
  const n = e.offset;
  if (e.type === "text") return n;
  const t = e.getNode();
  return n === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function ga(e) {
  const n = e.getStartEndPoints();
  if (n === null) return [0, 0];
  const [t, r] = n;
  return t.type === "element" && r.type === "element" && t.key === r.key && t.offset === r.offset ? [0, 0] : [Zc(t), Zc(r)];
}
function Wc(e, n) {
  for (let t = n; t; t = t.getParent()) {
    if (T(t)) {
      if (t.collapseAtStart(e)) return !0;
      if (Me(t)) break;
    }
    if (t.getPreviousSibling()) break;
  }
  return !1;
}
function Yd(e) {
  const n = e.focus, t = e.anchor, r = t.key, s = t.offset, i = t.type;
  t.set(n.key, n.offset, n.type, !0), n.set(r, s, i, !0);
}
function qd(e, n, t, r) {
  e.modify(n, t, r);
}
function Jd(e, n, t) {
  const r = e.getNodes(), s = r.filter((l) => rs(l, t));
  if (s.length === 0 || s.length === r.length) return !1;
  const i = n ? s[0] : s[s.length - 1], o = T(i) ? i : i.getParentOrThrow();
  return n ? o.selectStart() : o.selectEnd(), !0;
}
function bl(e, n, t) {
  if (mo(e, "extend", n, t)) return;
  const r = be(), s = mt(wt(r));
  if (!s || typeof s.modify != "function") return;
  const i = r._blockCursorElement, o = r._rootElement, l = e.anchor, c = e.focus.getNode();
  o === null || i === null || !T(c) || c.isInline() || c.canBeEmpty() || vo(i, r, o);
  const u = (k) => {
    const L = k.getNode(), A = r.getElementByKey(k.key);
    return A !== null && k.type === "text" && $(L) ? Pn(L, A, r) : A;
  }, d = l.getNode(), f = u(l);
  if (f === null) return;
  const h = l.offset, g = e.isCollapsed(), p = e.focus, C = g ? f : u(p);
  if (C === null) return;
  const m = p.offset;
  if (po(s, C, m, C, m), qd(s, "move", n ? "backward" : "forward", t), s.rangeCount === 0) return;
  const x = Ko(s, o) || s.getRangeAt(0), y = x.startContainer, _ = x.startOffset;
  if (g && t === "character" && l.type === "text" && $(d) && d.isUnmergeable() && h === (n ? 0 : d.getTextContentSize())) {
    const k = _e(d, n ? "previous" : "next").getNodeAtCaret();
    if ($(k)) {
      const L = n ? k.getTextContentSize() - 1 : 1;
      return e.focus.set(k.__key, L, "text"), void (e.dirty = !0);
    }
  }
  if (g && t === "character" && l.type === "text") {
    const k = n ? 0 : d.getTextContentSize(), L = y === f ? _ : h !== k ? k : -1;
    if (L >= 0) return void (L !== h && (e.focus.set(l.key, L, "text"), e.dirty = !0));
  }
  const [v, w, E, N] = n ? [y, _, f, h] : [f, h, y, _], S = ze(d) ? d : S5(d);
  e.applyDOMRange({ collapsed: !1, endContainer: E, endOffset: N, startContainer: v, startOffset: w }), e.dirty = !0, !Jd(e, n, S) && n && Yd(e), t === "lineboundary" && mo(e, "extend", n, t, "decorators");
}
const t3 = (() => {
  try {
    const e = new RegExp("\\p{Emoji}", "u"), n = e.test.bind(e);
    if (n("❤️") && n("#️⃣") && n("👍")) return n;
  } catch {
  }
  return () => !1;
})();
function Uc(e, n, t) {
  const r = e, s = r.getTextContent().split(/(?=\s)/g), i = s.length;
  let o = 0, l = 0;
  for (let u = 0; u < i; u++) {
    const d = u === i - 1;
    if (l = o, o += s[u].length, n && o === t || o > t || d) {
      s.splice(u, 1), d && (l = void 0);
      break;
    }
  }
  const c = s.join("").trim();
  c === "" ? r.remove() : (r.setTextContent(c), r.select(l, l));
}
function Kc(e, n, t, r) {
  let s, i = n, o = !1;
  if (oe(e)) {
    let l = !1;
    const c = e.childNodes, u = c.length, d = r._blockCursorElement;
    i === u && u > 0 && (l = !0, i = u - 1), cs(e, r) !== void 0 || ko(e, r) || (o = !0);
    let f = c[i], h = !1;
    if (f === d) f = c[i + 1], h = !0;
    else if (d !== null) {
      const g = d.parentNode;
      e === g && n > Array.prototype.indexOf.call(g.children, d) && i--;
    }
    if (s = Hr(f), $(s)) i = on(s, l ? "next" : "previous");
    else {
      let g = Hr(e);
      if (g === null) return null;
      if (T(g)) {
        const p = r.getElementByKey(g.getKey());
        p === null && D(214), [g, i] = Ht(g, p, r).resolveChildIndex(g, p, e, n), T(g) || D(215), l && i >= g.getChildrenSize() && (i = Math.max(0, g.getChildrenSize() - 1));
        let m = g.getChildAtIndex(i);
        if (T(m) && function(x, y, _) {
          const v = x.getParent();
          return _ === null || v === null || !v.canBeEmpty() || v !== _.getNode();
        }(m, 0, t)) {
          const x = l ? m.getLastDescendant() : m.getFirstDescendant();
          x === null ? g = m : (m = x, g = T(m) ? m : m.getParentOrThrow()), i = 0;
        }
        $(m) ? (s = m, g = null, i = on(m, l ? "next" : "previous")) : m !== g && l && !h && (T(g) || D(216), i = Math.min(g.getChildrenSize(), i + 1));
      } else {
        const p = Ut(g), C = p !== null ? p : g, m = C.getIndexWithinParent(), x = r.getElementByKey(g.getKey());
        let y = "after";
        if (x !== null && Hr(e) === g) {
          const _ = Ht(g, x, r);
          _.element !== x ? y = _.resolveLeafPosition(x, e, n) : n === 0 && de(g) && (y = "before");
        }
        i = y === "before" ? m : m + 1, g = C.getParentOrThrow();
      }
      if (T(g)) return [an(g.__key, i, "element"), o];
    }
  } else s = Hr(e);
  return $(s) ? [an(s.__key, on(s, i, "clamp"), "text"), o] : null;
}
function Gc(e, n, t) {
  const r = e.offset, s = e.getNode();
  if (r === 0) {
    const i = s.getPreviousSibling(), o = s.getParent();
    if (n) {
      if ((t || !n) && i === null && T(o) && o.isInline()) {
        const l = o.getPreviousSibling();
        $(l) && e.set(l.__key, l.getTextContent().length, "text");
      }
    } else T(i) && !t && i.isInline() ? e.set(i.__key, i.getChildrenSize(), "element") : $(i) && !s.isUnmergeable() && e.set(i.__key, i.getTextContent().length, "text");
  } else if (r === s.getTextContent().length) {
    const i = s.getNextSibling(), o = s.getParent();
    if (n && T(i) && i.isInline()) e.set(i.__key, 0, "element");
    else if ((t || n) && i === null && T(o) && o.isInline() && !o.canInsertTextAfter() && o.getTextContentSize() > 1) {
      const l = o.getNextSibling();
      $(l) && e.set(l.__key, 0, "text");
    }
  }
}
function pa(e) {
  const n = Le(e.key);
  return n === null ? null : Yo(n);
}
function Xd(e, n, t) {
  const r = pa(e), s = pa(n);
  if (r === s || r !== null && s !== null && r.is(s)) return !1;
  const i = t(r, s);
  if (r !== null) return T(r) ? n.set(r.getKey(), i ? r.getChildrenSize() : 0, "element") : n.set(r.getKey(), i ? r.getTextContentSize() : 0, "text"), !0;
  const o = Ut(s);
  if (o === null) return !1;
  const l = o.getParent();
  if (l === null) return !1;
  const c = o.getIndexWithinParent();
  return n.set(l.getKey(), i ? c + 1 : c, "element"), !0;
}
function Qd(e) {
  const n = Xd(e.anchor, e.focus, (t, r) => function(s, i, o, l) {
    if (o !== null && l !== null) {
      const d = Ut(o), f = Ut(l);
      if (d !== null && d.is(f)) {
        for (const h of qo(d).values()) {
          if (h === o.getKey()) return !0;
          if (h === l.getKey()) return !1;
        }
        return !0;
      }
      return d === null || f === null || d.isBefore(f);
    }
    if (o !== null) {
      const d = Ut(o), f = Le(i.key);
      return d === null || f === null || !(!d.is(f) && !d.isParentOf(f)) || d.isBefore(f);
    }
    const c = Ut(l), u = Le(s.key);
    return c !== null && u !== null && !c.is(u) && !c.isParentOf(u) && u.isBefore(c);
  }(e.anchor, e.focus, t, r));
  return n && (e.dirty = !0), n;
}
function e5(e, n, t, r, s, i) {
  if (e === null || t === null || !ui(s, e, t)) return null;
  const o = Kc(e, n, I(i) ? i.anchor : null, s);
  if (o === null) return null;
  const l = Kc(t, r, I(i) ? i.focus : null, s);
  if (l === null) return null;
  const [c, u] = o, [d, f] = l;
  if (c.type === "element" && d.type === "element") {
    const g = Hr(e), p = Hr(t);
    if (de(g) && de(p)) return null;
  }
  const h = s._slotsUsed && Xd(c, d, () => (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0);
  return function(g, p) {
    if (g.type === "text" && p.type === "text") {
      const C = g.isBefore(p), m = g.is(p);
      Gc(g, C, m), Gc(p, !C, m), m && p.set(g.key, g.offset, g.type);
    }
  }(c, d), [c, d, u || f || h];
}
function es(e) {
  return T(e) && !e.isInline();
}
function t5(e, n, t, r, s, i) {
  const o = Ln(), l = new yr(an(e, n, s), an(t, r, i), 0, "");
  return l.dirty = !0, o._selection = l, l;
}
function n5() {
  const e = an("root", 0, "element"), n = an("root", 0, "element");
  return new yr(e, n, 0, "");
}
function fo() {
  return new Bo(/* @__PURE__ */ new Set());
}
function ho(e, n, t, r) {
  const s = t._window;
  if (s === null) return null;
  const i = r || s.event, o = i ? i.type : void 0, l = o === "selectionchange", c = !Xl && (l || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && i && i.detail === 3 || o === "drop" || o === void 0);
  let u, d, f, h;
  if (I(e) && !c) return e.clone();
  {
    if (n === null) return null;
    const v = Pt(n, t._rootElement);
    if (u = v.anchorNode, d = v.focusNode, f = v.anchorOffset, h = v.focusOffset, (l || o === void 0) && I(e) && !ui(t, u, d)) return e.clone();
  }
  const g = e5(u, f, d, h, t, e);
  if (g === null) return null;
  const [p, C, m] = g;
  let x = 0, y = "";
  if (I(e)) {
    const v = e.anchor;
    if (p.key === v.key) x = e.format, y = e.style;
    else {
      const w = p.getNode();
      $(w) ? (x = w.getFormat(), y = w.getStyle()) : T(w) && (x = w.getTextFormat(), y = w.getTextStyle());
    }
  }
  const _ = new yr(p, C, x, y);
  return m && (_.dirty = !0), _;
}
function B() {
  return Ln()._selection;
}
function ls() {
  return be()._editorState._selection;
}
function Jn(e, n, t, r = 1) {
  const s = e.anchor, i = e.focus, o = s.getNode(), l = i.getNode();
  if (!n.is(o) && !n.is(l)) return;
  const c = n.__key;
  if (e.isCollapsed()) {
    const u = s.offset;
    if (t <= u && r > 0 || t < u && r < 0) {
      const d = Math.max(0, u + r);
      s.set(c, d, "element"), i.set(c, d, "element"), Yc(e);
    }
  } else {
    const u = e.isBackward(), d = u ? i : s, f = d.getNode(), h = u ? s : i, g = h.getNode();
    if (n.is(f)) {
      const p = d.offset;
      (t <= p && r > 0 || t < p && r < 0) && d.set(c, Math.max(0, p + r), "element");
    }
    if (n.is(g)) {
      const p = h.offset;
      (t <= p && r > 0 || t < p && r < 0) && h.set(c, Math.max(0, p + r), "element");
    }
  }
  Yc(e);
}
function Yc(e) {
  const n = e.anchor, t = n.offset, r = e.focus, s = r.offset, i = n.getNode(), o = r.getNode();
  if (e.isCollapsed()) {
    if (!T(i)) return;
    const l = i.getChildrenSize(), c = t >= l, u = c ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(t);
    if ($(u)) {
      let d = 0;
      c && (d = u.getTextContentSize()), n.set(u.__key, d, "text"), r.set(u.__key, d, "text");
    }
    return;
  }
  if (T(i)) {
    const l = i.getChildrenSize(), c = t >= l, u = c ? i.getChildAtIndex(l - 1) : i.getChildAtIndex(t);
    if ($(u)) {
      let d = 0;
      c && (d = u.getTextContentSize()), n.set(u.__key, d, "text");
    }
  }
  if (T(o)) {
    const l = o.getChildrenSize(), c = s >= l, u = c ? o.getChildAtIndex(l - 1) : o.getChildAtIndex(s);
    if ($(u)) {
      let d = 0;
      c && (d = u.getTextContentSize()), r.set(u.__key, d, "text");
    }
  }
}
function go(e, n, t, r, s) {
  let i = null, o = 0, l = null;
  r !== null ? (i = r.__key, $(r) ? (o = r.getTextContentSize(), l = "text") : T(r) && (o = r.getChildrenSize(), l = "element")) : s !== null && (i = s.__key, $(s) ? l = "text" : T(s) && (l = "element")), i !== null && l !== null ? e.set(i, o, l) : (o = n.getIndexWithinParent(), o === -1 && (o = t.getChildrenSize()), e.set(t.__key, o, "element"));
}
function qc(e, n, t, r, s) {
  e.type === "text" ? e.set(t, e.offset + (n ? 0 : s), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function po(e, n, t, r, s) {
  try {
    e.setBaseAndExtent(n, t, r, s);
  } catch {
  }
}
function Jc(e, n, t) {
  const r = ts(e, n.getKey());
  if (T(n)) {
    const s = Ht(n, r, e);
    return [s.element, t + s.getFirstChildOffset()];
  }
  return [r, t];
}
function n3(e, n, t, r, s, i) {
  const o = i.getRootNode(), l = _r(o) || kn(o) ? ss(o) : null;
  if (s.has(z6) && l !== i || l !== null && Ja(l, l)) return;
  const c = Pt(r, i);
  let u;
  if (!I(n)) return void (e !== null && ui(t, c.anchorNode, c.focusNode) && r.removeAllRanges());
  const d = n.anchor, f = n.focus, h = d.getNode(), g = f.getNode(), [p, C] = Jc(t, h, d.offset), [m, x] = Jc(t, g, f.offset), y = n.format, _ = n.style, v = n.isCollapsed();
  let w = p, E = m, N = !1;
  if (d.type === "text" ? (w = $(h) ? Pn(h, p, t) : null, N = h.getFormat() !== y || h.getStyle() !== _) : I(e) && e.anchor.type === "text" && (N = !0), f.type === "text" && (E = $(g) ? Pn(g, m, t) : null), w !== null && E !== null) {
    if (v && (e === null || N || I(e) && (e.format !== y || e.style !== _)) && function(S, k, L, A, H, G) {
      S._inputState.collapsedSelectionFormat = { format: k, key: H, offset: A, style: L, timeStamp: G };
    }(t, y, _, C, d.key, performance.now()), (r.type !== "Range" || !v) && c.anchorOffset === C && c.focusOffset === x && c.anchorNode === w && c.focusNode === E) {
      if (l === null || !i.contains(l)) {
        const S = l !== null ? Kr(l) : null;
        S !== null && S !== t || s.has(fa) || i.focus({ preventScroll: !0 });
      }
      if (d.type !== "element") return;
    }
    if (po(r, w, C, E, x), vn && n.isCollapsed() && i !== null && !s.has(fa)) {
      const S = wo(i);
      if (S === null || !i.contains(S)) {
        const k = ss(i.ownerDocument), L = k !== null ? Kr(k) : null;
        L !== null && L !== t || i.focus({ preventScroll: !0 });
      }
    }
    if (!s.has(Z6) && n.isCollapsed() && i !== null && i === wo(i)) {
      const S = I(n) && n.anchor.type === "element" ? w.childNodes[C] || null : (u === void 0 && (u = N3(r, i)), u);
      if (S !== null) {
        let k;
        if (vt(S)) {
          const L = S.ownerDocument.createRange();
          L.selectNode(S), k = L.getBoundingClientRect();
        } else k = S.getBoundingClientRect();
        (function(L, A, H) {
          const G = n1(H), O = r1(G);
          if (G === null || O === null) return;
          const K = H.getBoundingClientRect();
          if (A.bottom < K.top) return;
          let { top: X, bottom: se } = A, ee = 0, R = 0, V = H;
          for (; V !== null; ) {
            const F = V === G.body;
            if (F) {
              const ie = O.visualViewport;
              if (ie) {
                const Q = ie.offsetTop;
                ee = Q, R = Q + ie.height;
              } else ee = 0, R = wt(L).innerHeight;
              const Z = O.getComputedStyle(G.documentElement), fe = parseFloat(Z.scrollPaddingTop), te = parseFloat(Z.scrollPaddingBottom);
              isFinite(fe) && (ee += fe), isFinite(te) && (R -= te);
            } else {
              const ie = V === H ? K : V.getBoundingClientRect();
              ee = ie.top, R = ie.bottom;
            }
            let U = 0;
            if (X < ee ? U = -(ee - X) : se > R && (U = se - R), U !== 0) if (F) O.scrollBy(0, U);
            else {
              const ie = V.scrollTop;
              V.scrollTop += U;
              const Z = V.scrollTop - ie;
              X -= Z, se -= Z;
            }
            if (F) break;
            V = br(V);
          }
        })(t, k, i);
      }
    }
    (function(S) {
      S._inputState.isSelectionChangeFromDOMUpdate = !0;
    })(t);
  }
}
function Vo(e) {
  let n = B() || ls();
  n === null && (n = Fe().selectEnd()), n.insertNodes(e);
}
function r5(e, n) {
  for (const t of e.split(/(\r?\n|\t)/)) t === `
` || t === `\r
` ? n.linebreak() : t === "	" ? n.tab() : t !== "" && n.text(t);
}
function Qs(e) {
  const n = [];
  return r5(e, { linebreak: () => n.push(Sn()), tab: () => n.push(Ho()), text: (t) => n.push(pt(t)) }), n;
}
function ma(e) {
  const n = [];
  for (const t of e) Rt(t) || (!T(t) && !de(t) || t.isInline() ? n.push(t) : T(t) && n.push(...ma(t.getChildren())));
  return n;
}
function vs(e) {
  let n = e;
  e.isCollapsed() || n.removeText();
  const t = B();
  I(t) && (n = t), I(n) || D(161);
  const r = n.anchor;
  let s = r.getNode(), i = r.offset;
  for (; !nt(s) && st(s) === null; ) {
    const o = s;
    if ([s, i] = r3(s, i), o.is(s)) break;
  }
  return i;
}
function r3(e, n) {
  const t = e.getParent();
  if (!t) {
    const s = Se();
    return Fe().append(s), s.select(), [Fe(), 0];
  }
  if ($(e)) {
    const s = e.splitText(n);
    if (s.length === 0) return [t, e.getIndexWithinParent()];
    const i = n === 0 ? 0 : 1;
    return [t, s[0].getIndexWithinParent() + i];
  }
  if (!T(e) || n === 0) return [t, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(n);
  if (r) {
    const s = new yr(an(e.__key, n, "element"), an(e.__key, n, "element"), 0, ""), i = e.insertNewAfter(s);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [t, e.getIndexWithinParent() + 1];
}
function Xc(e) {
  return Rt(e) || w3(e) || $(e) || e.isParentRequired();
}
function vl(e) {
  const n = Se();
  let t = null;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    if (Xc(s)) {
      if (t === null) {
        t = s.createParentElementNode(), n.append(t);
        const i = e[r + 1];
        if (Rt(s) && (i === void 0 || !Xc(i))) continue;
      }
      t.append(s);
    } else n.append(s), t = null;
  }
  return n;
}
function mo(e, n, t, r, s = "decorators-and-blocks") {
  if (n === "move" && r === "character" && !e.isCollapsed()) {
    const [d, f] = t === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
    return f.set(d.key, d.offset, d.type), !0;
  }
  const i = bt(e.focus, t ? "previous" : "next"), o = r === "lineboundary", l = n === "move";
  let c = i, u = s === "decorators-and-blocks";
  if (!u1(c)) {
    for (const d of c) {
      u = !1;
      const { origin: f } = d;
      if (!de(f) || f.isIsolated() || (c = d, !o || !f.isInline())) break;
    }
    if (u) for (const d of Jo(i).iterNodeCarets(n === "extend" ? "shadowRoot" : "root")) {
      if ($t(d)) d.origin.isInline() || (c = d);
      else {
        if (T(d.origin)) continue;
        de(d.origin) && !d.origin.isInline() && (c = d);
      }
      break;
    }
  }
  if (c === i) return !1;
  if (l && !o && de(c.origin) && c.origin.isKeyboardSelectable()) {
    const d = fo();
    return d.add(c.origin.getKey()), Xe(d), !0;
  }
  return c = yt(c), l && gr(e.anchor, c), gr(e.focus, c), u || !o;
}
let Je = null, Ve = null, Ct = !1, wl = !1, qi = !1;
const Sl = /* @__PURE__ */ new Set();
let Ji = 0;
const Qc = { characterData: !0, childList: !0, subtree: !0 };
function or() {
  return Ct || Je !== null && Je._readOnly;
}
function Ye() {
  Ct && D(13);
}
function s5() {
  Ji > 99 && D(14);
}
function Ln() {
  return Je === null && D(195, i5()), Je;
}
function s3(e) {
  Ln() !== null && Ve === null && (Ve = e), Ve !== e && V0(378);
}
function be() {
  return Ve === null && D(337, i5()), Ve;
}
function i3() {
  be()._dirtyType = 2;
}
function i5() {
  let e = 0;
  const n = /* @__PURE__ */ new Set(), t = lr.version;
  if (typeof window < "u") for (const s of E5(document)) {
    const i = as(s);
    if (di(i)) e++;
    else if (i) {
      let o = String(i.constructor.version || "<0.17.1");
      o === t && (o += " (separately built, likely a bundler configuration issue)"), n.add(o);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${t}`;
  return n.size && (r += ` and incompatible editors with versions ${Array.from(n).join(", ")}`), r;
}
function o5() {
  return Ve;
}
function eu(e, n, t) {
  const r = n.__type, s = g5(e, r);
  let i = t.get(r);
  i === void 0 && (i = Array.from(s.transforms), t.set(r, i));
  const o = i.length;
  for (let l = 0; l < o && (i[l](n), n.isAttached()); l++) ;
}
function tu(e, n) {
  return e !== void 0 && e.__key !== n && e.isAttached();
}
function l5(e, n) {
  if (!n) return;
  const t = e._updateTags;
  let r = n;
  Array.isArray(n) || (r = [n]);
  for (const s of r) t.add(s);
}
function o3(e) {
  return xo(e, be()._nodes);
}
function xo(e, n) {
  const t = e.type, r = n.get(t);
  r === void 0 && D(17, t);
  const s = r.klass;
  e.type !== s.getType() && D(18, s.name);
  const i = s.importJSON(e), o = e.children;
  if (T(i) && Array.isArray(o)) for (let c = 0; c < o.length; c++) {
    const u = xo(o[c], n);
    i.append(u);
  }
  const l = e.$slots;
  if (l) {
    _n(i) || D(379, s.name);
    for (const c in l)
      D5(i, c, xo(l[c], n));
  }
  return i;
}
function nu(e, n, t) {
  const r = Je, s = Ct, i = Ve;
  Je = n, Ct = !0, Ve = e;
  try {
    return t();
  } finally {
    Je = r, Ct = s, Ve = i;
  }
}
function Dn(e, n) {
  const t = qi;
  qi = !0;
  try {
    (function(r, s) {
      const i = r._pendingEditorState, o = r._rootElement, l = r._headless || o === null;
      if (i === null) return void (!r._updating && r._deferred.length > 0 && ru(r, r._deferred));
      const c = r._editorState, u = c._selection, d = i._selection, f = r._dirtyType !== 0, h = Je, g = Ct, p = Ve, C = r._updating, m = r._observer;
      let x = null;
      if (r._pendingEditorState = null, r._editorState = i, !l && f && m !== null) {
        Ve = r, Je = i, Ct = !1, r._updating = !0;
        try {
          const S = r._dirtyType, k = r._dirtyElements, L = r._dirtyLeaves;
          m.disconnect(), x = w6(c, i, r, S, k, L);
        } catch (S) {
          if (S instanceof Error && r._onError(S), wl) throw S;
          return f5(r, null, o, i), Q0(r), r._dirtyType = 2, wl = !0, Dn(r, c), void (wl = !1);
        } finally {
          m.observe(o, Qc), r._updating = C, Je = h, Ct = g, Ve = p;
        }
      }
      i._readOnly || (i._readOnly = !0);
      const y = r._dirtyLeaves, _ = r._dirtyElements, v = r._normalizedNodes, w = r._updateTags;
      f && (r._dirtyType = 0, r._cloneNotNeeded.clear(), r._dirtyLeaves = /* @__PURE__ */ new Set(), r._dirtyElements = /* @__PURE__ */ new Map(), r._normalizedNodes = /* @__PURE__ */ new Set()), r._updateTags = /* @__PURE__ */ new Set(), function(S, k) {
        const L = S._decorators;
        let A = S._pendingDecorators || L;
        const H = k._nodeMap;
        let G;
        for (G in A) H.has(G) || (A === L && (A = y5(S)), delete A[G]);
      }(r, i);
      const E = l ? null : mt(wt(r));
      if (r._editable && E !== null && (f || d === null || d.dirty || !d.is(u)) && o !== null && !w.has(W6)) {
        Ve = r, Je = i;
        try {
          if (m !== null && m.disconnect(), f || d === null || d.dirty) {
            const S = r._blockCursorElement;
            S !== null && vo(S, r, o), n3(u, d, r, E, w, o);
          }
          (function(S, k, L) {
            let A = S._blockCursorElement;
            if (I(L) && L.isCollapsed() && L.anchor.type === "element" && k.contains(wo(k))) {
              const H = L.anchor, G = H.getNode(), O = H.offset;
              let K = !1, X = null;
              if (O === G.getChildrenSize())
                Xi(G.getChildAtIndex(O - 1)) && (K = !0);
              else {
                const se = G.getChildAtIndex(O);
                if (se !== null && Xi(se)) {
                  const ee = se.getPreviousSibling();
                  (ee === null || Xi(ee)) && (K = !0, X = S.getElementByKey(se.__key));
                }
              }
              if (K) {
                const se = Ht(G, S.getElementByKey(G.__key), S).element;
                return A === null && (S._blockCursorElement = A = function(ee) {
                  const R = ee.theme, V = je().createElement("div");
                  V.contentEditable = "false", V.setAttribute("data-lexical-cursor", "true");
                  let F = R.blockCursor;
                  if (F !== void 0) {
                    if (typeof F == "string") {
                      const U = bn(F);
                      F = R.blockCursor = U;
                    }
                    F !== void 0 && V.classList.add(...F);
                  }
                  return V;
                }(S._config)), k.style.caretColor = "transparent", void (X === null ? se.appendChild(A) : se.insertBefore(A, X));
              }
            }
            A !== null && vo(A, S, k);
          })(r, o, d);
        } finally {
          m !== null && m.observe(o, Qc), Ve = p, Je = h;
        }
      }
      x !== null && function(S, k, L, A, H) {
        const G = Array.from(S._listeners.mutation), O = G.length;
        for (let K = 0; K < O; K++) {
          const [X, se] = G[K];
          for (const ee of se) {
            const R = k.get(ee);
            R !== void 0 && X(R, { dirtyLeaves: A, prevEditorState: H, updateTags: L });
          }
        }
      }(r, x, w, y, c), I(d) || d === null || u !== null && u.is(d) || r.dispatchCommand(Va);
      const N = r._pendingDecorators;
      N !== null && (r._decorators = N, r._pendingDecorators = null, Hs("decorator", r, !0, N)), function(S, k, L) {
        const A = ou(k), H = ou(L);
        A !== H && Hs("textcontent", S, !0, H);
      }(r, s || c, i), Hs("update", r, !0, { dirtyElements: _, dirtyLeaves: y, editorState: i, mutatedNodes: x, normalizedNodes: v, prevEditorState: s || c, tags: w }), !C && ru(r, r._deferred), function(S) {
        const k = S._updates;
        if (k.length === 0) return void (S._cascadeCount = 0);
        if (function(A) {
          Sl.has(A) || (Sl.add(A), setTimeout(() => {
            Sl.delete(A), A._cascadeCount = 0;
          }, 0));
        }(S), S._cascadeCount++ > 99) return S._updates = [], S._cascadeCount = 0, void S._onWarn(new Error(`One or more update listeners are endlessly enqueueing more updates. May have encountered infinite recursion caused by update listeners that trigger additional updates without a stop condition. Editor namespace: ${S._config.namespace}`));
        const L = k.shift();
        if (L) {
          const [A, H] = L;
          ei(S, A, H);
        }
      }(r);
    })(e, n);
  } finally {
    qi = t;
  }
}
function Hs(e, n, t, ...r) {
  const s = n._updating;
  n._updating = t;
  try {
    const i = n._listeners[e], o = Array.from(i);
    for (const [l, c] of o) {
      c && c();
      const u = l(...r);
      i.has(l) ? i.set(l, u) : u && u();
    }
  } finally {
    n._updating = s;
  }
}
function a5(e, n, t, r) {
  const s = Xa(e);
  let i;
  if (!qi) for (let o = 0; o < s.length; o++) s[o]._updating || (s[o]._cascadeCount = 0);
  for (let o = 4; o >= 0; o--) for (let l = 0; l < s.length; l++) {
    const c = s[l];
    if (l > 0 && c._updating) {
      i = c;
      break;
    }
    const u = c._commands.get(n);
    if (u !== void 0) {
      const d = u[o];
      if (d.size > 0) {
        let f = !1;
        if (Ot(c, () => {
          for (const h of d) if (h(t, r)) return void (f = !0);
        }), f) return f;
      }
    }
  }
  return i && i.update(() => {
    a5(i, n, t, r);
  }), !1;
}
function ru(e, n) {
  if (e._deferred = [], n.length !== 0) {
    const t = e._updating;
    e._updating = !0;
    try {
      for (let r = 0; r < n.length; r++) n[r]();
    } finally {
      e._updating = t;
    }
  }
}
function su(e, n) {
  const t = e._updates;
  let r = n || !1;
  for (; t.length !== 0; ) {
    const s = t.shift();
    if (s) {
      const [i, o] = s, l = e._pendingEditorState;
      let c;
      o !== void 0 && (c = o.onUpdate, o.skipTransforms && (r = !0), o.discrete && (l === null && D(191), l._flushSync = !0), c && e._deferred.push(c), l5(e, o.tag)), l == null ? ei(e, i, o) : i();
    }
  }
  return r;
}
function ei(e, n, t) {
  const r = e._updateTags;
  let s, i = !1, o = !1;
  t !== void 0 && (s = t.onUpdate, l5(e, t.tag), i = t.skipTransforms || !1, o = t.discrete || !1), s && e._deferred.push(s);
  const l = e._editorState;
  let c = e._pendingEditorState, u = !1;
  (c === null || c._readOnly) && (c = e._pendingEditorState = c5(c || l), u = !0), c._flushSync = o;
  const d = Je, f = Ct, h = Ve, g = e._updating;
  Je = c, Ct = !1, e._updating = !0, Ve = e;
  const p = e._headless || e.getRootElement() === null;
  Ga(null);
  try {
    u && (p ? l._selection !== null && (c._selection = l._selection.clone()) : c._selection = function(y, _) {
      const v = y.getEditorState()._selection, w = mt(wt(y));
      return I(v) || v == null ? ho(v, w, y, _) : v.clone();
    }(e, t && t.event || null));
    const m = e._compositionKey;
    n(), i = su(e, i), function(y, _) {
      const v = _.getEditorState()._selection, w = y._selection;
      if (I(w)) {
        const E = w.anchor, N = w.focus;
        let S;
        if (E.type === "text" && (S = E.getNode(), S.selectionTransform(v, w)), N.type === "text") {
          const k = N.getNode();
          S !== k && k.selectionTransform(v, w);
        }
      }
    }(c, e), e._dirtyType !== 0 && (i ? function(y, _) {
      const v = _._dirtyLeaves, w = y._nodeMap;
      for (const E of v) {
        const N = w.get(E);
        $(N) && N.isAttached() && N.isSimpleText() && !N.isUnmergeable() && wc(N);
      }
    }(c, e) : function(y, _) {
      const v = _._dirtyLeaves, w = _._dirtyElements, E = y._nodeMap, N = sn(), S = /* @__PURE__ */ new Map();
      let k = v, L = k.size, A = w, H = A.size;
      for (; L > 0 || H > 0; ) {
        if (L > 0) {
          _._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const G of k) {
            const O = E.get(G);
            $(O) && O.isAttached() && O.isSimpleText() && !O.isUnmergeable() && wc(O), O !== void 0 && tu(O, N) && eu(_, O, S), v.add(G);
          }
          if (k = _._dirtyLeaves, L = k.size, L > 0) {
            Ji++;
            continue;
          }
        }
        _._dirtyLeaves = /* @__PURE__ */ new Set(), _._dirtyElements = /* @__PURE__ */ new Map(), A.delete("root") && A.set("root", !0);
        for (const G of A) {
          const O = G[0], K = G[1];
          if (w.set(O, K), !K) continue;
          const X = E.get(O);
          X !== void 0 && tu(X, N) && eu(_, X, S);
        }
        k = _._dirtyLeaves, L = k.size, A = _._dirtyElements, H = A.size, Ji++;
      }
      _._dirtyLeaves = v, _._dirtyElements = w;
    }(c, e), su(e), function(y, _, v, w) {
      const E = y._nodeMap, N = _._nodeMap, S = [];
      for (const [A] of w) {
        const H = N.get(A);
        H !== void 0 && (H.isAttached() || (T(H) && so(H, A, E, N, S, w), E.has(A) || w.delete(A), S.push(A)));
      }
      for (const A of v) {
        const H = N.get(A);
        H === void 0 || H.isAttached() || (_n(H) && H.__slots !== null && so(H, A, E, N, S, v), E.has(A) || v.delete(A), S.push(A));
      }
      for (const A of S) N.delete(A);
      const k = be(), L = k._compositionKey;
      L === null || N.has(L) || (k._compositionKey = null);
    }(l, c, e._dirtyLeaves, e._dirtyElements)), m !== e._compositionKey && (c._flushSync = !0);
    const x = c._selection;
    if (I(x)) {
      e._slotsUsed && Qd(x);
      const y = c._nodeMap, _ = x.anchor.key, v = x.focus.key;
      y.get(_) !== void 0 && y.get(v) !== void 0 || D(19);
    } else Ne(x) && x._nodes.size === 0 && (c._selection = null);
  } catch (m) {
    return m instanceof Error && e._onError(m), e._pendingEditorState = l, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void Dn(e);
  } finally {
    Je = d, Ct = f, Ve = h, e._updating = g, Ji = 0;
  }
  e._dirtyType !== 0 || e._deferred.length > 0 || function(m, x) {
    const y = x.getEditorState()._selection, _ = m._selection;
    if (_ !== null) {
      if (_.dirty || !_.is(y)) return !0;
    } else if (y !== null) return !0;
    return !1;
  }(c, e) ? c._flushSync ? (c._flushSync = !1, Dn(e)) : u && x3(() => {
    Dn(e);
  }) : (c._flushSync = !1, u && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function Ot(e, n, t) {
  Ve === e && t === void 0 ? or() ? ei(e, n, t) : n() : ei(e, n, t);
}
function l3(e) {
  if (Me(e)) {
    let n = null;
    for (const t of e.getChildren()) n = t.isInline() ? (n || t.replace(t.createParentElementNode())).append(t) : null;
  }
}
class We extends gt {
  constructor(t) {
    super(t);
    M(this, "__first");
    M(this, "__last");
    M(this, "__size");
    M(this, "__format");
    M(this, "__style");
    M(this, "__indent");
    M(this, "__dir");
    M(this, "__textFormat");
    M(this, "__textStyle");
    M(this, "__slotHost");
    M(this, "__slots");
    this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "", this.__slotHost = null, this.__slots = null;
  }
  $config() {
    return this.config(Symbol.for("ElementNode"), { $transform: l3, extends: gt });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__key === t.__key && (this.__first = t.__first, this.__last = t.__last, this.__size = t.__size, this.__slotHost = t.__slotHost, this.__slotHost !== null && this.__parent !== null && D(384, this.__key, String(this.__slotHost), String(this.__parent)), this.__slots = t.__slots), this.__indent = t.__indent, this.__format = t.__format, this.__style = t.__style, this.__dir = t.__dir, this.__textFormat = t.__textFormat, this.__textStyle = t.__textStyle;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const t = this.getFormat();
    return l6[t] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const t = [];
    let r = this.getFirstChild();
    for (; r !== null; ) t.push(r), r = r.getNextSibling();
    return t;
  }
  getChildrenKeys() {
    const t = [];
    let r = this.getFirstChild();
    for (; r !== null; ) t.push(r.__key), r = r.getNextSibling();
    return t;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0 && It(this).length === 0;
  }
  isDirty() {
    const t = be()._dirtyElements;
    return t !== null && t.has(this.__key);
  }
  isLastChild() {
    const t = this.getLatest(), r = this.getParentOrThrow().getLastChild();
    return r !== null && r.is(t);
  }
  getAllTextNodes() {
    const t = [];
    for (const s of It(this)) {
      const i = dr(this, s);
      T(i) && t.push(...i.getAllTextNodes());
    }
    let r = this.getFirstChild();
    for (; r !== null; ) {
      if ($(r) && t.push(r), T(r)) {
        const s = r.getAllTextNodes();
        t.push(...s);
      }
      r = r.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; T(t); ) {
      const r = t.getFirstChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; T(t); ) {
      const r = t.getLastChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getDescendantByIndex(t) {
    const r = this.getChildren(), s = r.length;
    if (t >= s) {
      const o = r[s - 1];
      return T(o) && o.getLastDescendant() || o || null;
    }
    const i = r[t];
    return T(i) && i.getFirstDescendant() || i || null;
  }
  getFirstChild() {
    const t = this.getLatest().__first;
    return t === null ? null : Le(t);
  }
  getFirstChildOrThrow() {
    const t = this.getFirstChild();
    return t === null && D(45, this.__key), t;
  }
  getLastChild() {
    const t = this.getLatest().__last;
    return t === null ? null : Le(t);
  }
  getLastChildOrThrow() {
    const t = this.getLastChild();
    return t === null && D(96, this.__key), t;
  }
  getChildAtIndex(t) {
    const r = this.getChildrenSize();
    let s, i;
    if (t < r / 2) {
      for (s = this.getFirstChild(), i = 0; s !== null && i <= t; ) {
        if (i === t) return s;
        s = s.getNextSibling(), i++;
      }
      return null;
    }
    for (s = this.getLastChild(), i = r - 1; s !== null && i >= t; ) {
      if (i === t) return s;
      s = s.getPreviousSibling(), i--;
    }
    return null;
  }
  getTextContent() {
    let t = I5(this);
    const r = this.getChildren(), s = r.length;
    for (let i = 0; i < s; i++) {
      const o = r[i];
      t += o.getTextContent(), T(o) && i !== s - 1 && !o.isInline() && (t += Qn);
    }
    return t;
  }
  getTextContentSize() {
    let t = function(i) {
      let o = 0;
      for (const l of It(i)) {
        const c = dr(i, l);
        c !== null && (o += c.getTextContentSize());
      }
      return o;
    }(this);
    const r = this.getChildren(), s = r.length;
    for (let i = 0; i < s; i++) {
      const o = r[i];
      t += o.getTextContentSize(), T(o) && i !== s - 1 && !o.isInline() && (t += 2);
    }
    return t;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  hasFormat(t) {
    if (t !== "") {
      const r = ro[t];
      return (this.getFormat() & r) !== 0;
    }
    return !1;
  }
  hasTextFormat(t) {
    const r = Bn[t];
    return (this.getTextFormat() & r) !== 0;
  }
  getFormatFlags(t, r) {
    return ar(this.getLatest().__textFormat, t, r);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(t, r) {
    Ye();
    const s = B();
    let i = t, o = r;
    const l = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && r === 0) {
        const u = this.getFirstChild();
        if ($(u) || T(u)) return u.select(0, 0);
      } else if (!(t !== void 0 && t !== l || r !== void 0 && r !== l)) {
        const u = this.getLastChild();
        if ($(u) || T(u)) return u.select();
      }
    }
    i === void 0 && (i = l), o === void 0 && (o = l);
    const c = this.__key;
    return I(s) ? (s.anchor.set(c, i, "element"), s.focus.set(c, o, "element"), s.dirty = !0, s) : t5(c, i, c, o, "element", "element");
  }
  selectStart() {
    const t = this.getFirstDescendant();
    return t ? t.selectStart() : this.select();
  }
  selectEnd() {
    const t = this.getLastDescendant();
    return t ? t.selectEnd() : this.select();
  }
  clear() {
    const t = this.getWritable();
    return this.getChildren().forEach((r) => r.remove()), t;
  }
  append(...t) {
    return this.splice(this.getChildrenSize(), 0, t);
  }
  setDirection(t) {
    const r = this.getWritable();
    return r.__dir = t, r;
  }
  setFormat(t) {
    return this.getWritable().__format = t !== "" && ro[t] || 0, this;
  }
  setStyle(t) {
    return this.getWritable().__style = t || "", this;
  }
  setTextFormat(t) {
    const r = this.getWritable();
    return r.__textFormat = t, r;
  }
  setTextStyle(t) {
    const r = this.getWritable();
    return r.__textStyle = t, r;
  }
  setIndent(t) {
    return this.getWritable().__indent = t, this;
  }
  splice(t, r, s) {
    co(this) && D(324, this.__key, this.__type);
    const i = this.getChildrenSize(), o = this.getWritable();
    t + r <= i || D(226, String(t), String(r), String(i));
    for (const p of s) ;
    const l = o.__key, c = [], u = [], d = this.getChildAtIndex(t + r);
    let f = null, h = i - r + s.length;
    if (t !== 0) if (t === i) f = this.getLastChild();
    else {
      const p = this.getChildAtIndex(t);
      p !== null && (f = p.getPreviousSibling());
    }
    if (r > 0) {
      let p = f === null ? this.getFirstChild() : f.getNextSibling();
      for (let C = 0; C < r; C++) {
        p === null && D(100);
        const m = p.getNextSibling(), x = p.__key;
        rn(p.getWritable()), u.push(x), p = m;
      }
    }
    let g = f;
    for (const p of s) {
      g !== null && p.is(g) && (f = g = g.getPreviousSibling());
      const C = p.getWritable();
      C.__parent === l && h--, rn(C);
      const m = p.__key;
      if (g === null) o.__first = m, C.__prev = null;
      else {
        const x = g.getWritable();
        x.__next = m, C.__prev = x.__key;
      }
      p.__key === l && D(76), C.__parent = l, c.push(m), g = p;
    }
    if (t + r === i)
      g !== null && (g.getWritable().__next = null, o.__last = g.__key);
    else if (d !== null) {
      const p = d.getWritable();
      if (g !== null) {
        const C = g.getWritable();
        p.__prev = g.__key, C.__next = d.__key;
      } else p.__prev = null;
    }
    if (o.__size = h, u.length) {
      const p = B();
      if (I(p)) {
        const C = new Set(u), m = new Set(c), { anchor: x, focus: y } = p;
        iu(x, C, m) && go(x, x.getNode(), this, f, d), iu(y, C, m) && go(y, y.getNode(), this, f, d), h !== 0 || this.canBeEmpty() || Me(this) || this.remove();
      }
    }
    return o;
  }
  getDOMSlot(t) {
    return new U0(t);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (oe(r)) {
      const s = this.getIndent();
      s > 0 && (r.style.paddingInlineStart = 40 * s + "px", r.setAttribute("data-lexical-indent", String(s)));
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  exportJSON() {
    const t = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, r = this.getTextFormat(), s = this.getTextStyle();
    return r === 0 && s === "" || Me(this) || this.getChildren().some($) || (r !== 0 && (t.textFormat = r), s !== "" && (t.textStyle = s)), t;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setFormat(t.format).setIndent(t.indent).setDirection(t.direction).setTextFormat(t.textFormat || 0).setTextStyle(t.textStyle || "");
  }
  insertNewAfter(t, r) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(t) {
    return !1;
  }
  excludeFromCopy(t) {
    return !1;
  }
  canReplaceWith(t) {
    return !0;
  }
  canInsertAfter(t) {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith(t) {
    return !1;
  }
  extractWithChild(t, r, s) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  reconcileObservedMutation(t, r) {
    const s = Ht(this, t, r);
    let i = s.getFirstChild();
    for (let o = this.getFirstChild(); o; o = o.getNextSibling()) {
      const l = r.getElementByKey(o.getKey());
      l !== null && (i == null ? (s.insertChild(l), i = l) : i !== l && s.replaceChild(l, i), i = i.nextSibling);
    }
  }
}
function T(e) {
  return e instanceof We;
}
function iu(e, n, t) {
  let r = e.getNode();
  for (; r; ) {
    const s = r.__key;
    if (n.has(s) && !t.has(s)) return !0;
    r = r.getParent();
  }
  return !1;
}
class zo extends gt {
  constructor(t) {
    super(t);
    M(this, "__slotHost");
    M(this, "__slots");
    this.__slotHost = null, this.__slots = null;
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__key === t.__key && (this.__slotHost = t.__slotHost, this.__slotHost !== null && this.__parent !== null && D(383, this.__key, String(this.__slotHost), String(this.__parent)), this.__slots = t.__slots);
  }
  decorate(t, r) {
    return null;
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
function de(e) {
  return e instanceof zo;
}
class Zo extends We {
  constructor() {
    super("root");
    M(this, "__cachedText");
    this.__cachedText = null;
  }
  $config() {
    return this.config("root", { extends: We });
  }
  getTopLevelElementOrThrow() {
    D(51);
  }
  getTextContent() {
    const t = this.__cachedText;
    return t === null || !or() && be()._dirtyType !== 0 ? super.getTextContent() : t;
  }
  remove() {
    D(52);
  }
  replace(t) {
    D(53);
  }
  insertBefore(t) {
    D(54);
  }
  insertAfter(t) {
    D(55);
  }
  updateDOM(t, r) {
    return !1;
  }
  splice(t, r, s) {
    for (const i of s) T(i) || de(i) || D(282);
    return super.splice(t, r, s);
  }
  static importJSON(t) {
    return Fe().updateFromJSON(t);
  }
  collapseAtStart() {
    return !0;
  }
}
function ze(e) {
  return e instanceof Zo;
}
function c5(e) {
  return new ai(Y0(e._nodeMap), null, e._slotsUsed);
}
function Ua() {
  return new ai(/* @__PURE__ */ new Map([["root", new Zo()]]), null, !1);
}
function xa(e) {
  const n = e.exportJSON(), t = e.constructor;
  if (n.type !== t.getType() && D(130, t.name), T(e)) {
    const s = n.children;
    Array.isArray(s) || D(59, t.name);
    const i = e.getChildren();
    for (let o = 0; o < i.length; o++) {
      const l = xa(i[o]);
      s.push(l);
    }
  }
  const r = It(e);
  if (r.length > 0) {
    const s = {};
    for (const i of r) {
      const o = dr(e, i);
      o === null && D(366, t.name, i), s[i] = xa(o);
    }
    n.$slots = s;
  }
  return n;
}
function a3(e) {
  return e instanceof ai;
}
class ai {
  constructor(n, t = null, r = !1) {
    M(this, "_nodeMap");
    M(this, "_selection");
    M(this, "_flushSync");
    M(this, "_readOnly");
    M(this, "_parsed");
    M(this, "_slotsUsed");
    this._nodeMap = n, this._selection = t || null, this._flushSync = !1, this._readOnly = !1, this._parsed = !1, this._slotsUsed = r;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(n, t) {
    return nu(t && t.editor || null, this, n);
  }
  clone(n) {
    const t = new ai(this._nodeMap, n === void 0 ? this._selection : n, this._slotsUsed);
    return t._readOnly = !0, t;
  }
  toJSON() {
    return nu(null, this, () => ({ root: xa(Fe()) }));
  }
}
class Ka extends We {
  $config() {
    return this.config("artificial", { extends: We });
  }
  createDOM(n) {
    return je().createElement("div");
  }
}
class Wo extends gt {
  $config() {
    return this.config("linebreak", { importDOM: { br: (n) => u5(n) || d5(n) ? null : { conversion: c3, priority: 0 } } });
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return je().createElement("br");
  }
  updateDOM() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function c3(e) {
  return { node: Sn() };
}
function Sn() {
  return qt(new Wo());
}
function Rt(e) {
  return e instanceof Wo;
}
function u5(e) {
  const n = e.parentElement;
  if (n !== null && is(n)) {
    const t = n.firstChild;
    if (t === e || t.nextSibling === e && Co(t)) {
      const r = n.lastChild;
      if (r === e || r.previousSibling === e && Co(r)) return !0;
    }
  }
  return !1;
}
function d5(e) {
  const n = e.parentElement;
  if (n !== null && is(n)) {
    const t = n.firstChild;
    if (t === e || t.nextSibling === e && Co(t)) return !1;
    const r = n.lastChild;
    if (r === e || r.previousSibling === e && Co(r)) return !0;
  }
  return !1;
}
function Co(e) {
  return vt(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
class Uo extends We {
  $config() {
    return this.config("paragraph", { extends: We, importDOM: { p: () => ({ conversion: u3, priority: 0 }) } });
  }
  createDOM(n) {
    const t = je().createElement("p"), r = Gr(n.theme, "paragraph");
    return r !== void 0 && t.classList.add(...r), t;
  }
  updateDOM(n, t, r) {
    return !1;
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (oe(t)) {
      this.isEmpty() && t.append(je().createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
    }
    return { element: t };
  }
  exportJSON() {
    const n = super.exportJSON();
    if (n.textFormat === void 0 || n.textStyle === void 0) {
      const t = this.getChildren().find($);
      t ? (n.textFormat = t.getFormat(), n.textStyle = t.getStyle()) : (n.textFormat = this.getTextFormat(), n.textStyle = this.getTextStyle());
    }
    return n;
  }
  insertNewAfter(n, t) {
    const r = Se();
    r.setTextFormat(n.format), r.setTextStyle(n.style);
    const s = this.getDirection();
    return r.setDirection(s), r.setFormat(this.getFormatType()), r.setStyle(this.getStyle()), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = this.getChildren();
    if (n.length === 0 || $(n[0]) && n[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function u3(e) {
  const n = Se();
  if (dn(n, e), vr(e, n), n.getFormatType() === "") {
    const t = e.getAttribute("align");
    t && t && t in ro && n.setFormat(t);
  }
  return Vt(n, e), { node: n };
}
function Se() {
  return qt(new Uo());
}
function ci(e) {
  return e instanceof Uo;
}
function d3(e) {
  console.warn(e);
}
const le = 0, Xn = 1, f3 = 4, h3 = -8;
function f5(e, n, t, r, s) {
  const i = e._keyToDOMMap;
  i.clear(), e._editorState = Ua(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), s && s.preserveUpdateQueue || (e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._cascadeCount = 0), e._blockCursorElement = null, e._inputState.handledSelectionCommandTimeoutId !== null && clearTimeout(e._inputState.handledSelectionCommandTimeoutId), e._inputState = { collapsedSelectionFormat: { format: 0, key: "root", offset: 0, style: "", timeStamp: 0 }, compositionEndData: "", compositionPhase: "idle", hadOrphanedCompositionEvents: !1, handledSelectionCommandTimeoutId: null, isInsertLineBreak: !1, isInsertTextAfterHandledSelectionCommand: !1, isSelectionChangeFromDOMUpdate: !1, isSelectionChangeFromMouseDown: !1, lastBeforeInputInsertTextTimeStamp: 0, lastKeyCode: null, lastKeyDownTimeStamp: 0, postDeleteSelectionToRestore: null, unprocessedBeforeInputData: null };
  const o = e._observer;
  o !== null && (o.disconnect(), e._observer = null), n !== null && (n.textContent = "", function(l, c) {
    const u = `__lexicalKey_${c._key}`;
    delete l[u];
  }(n, e)), t !== null && (t.textContent = "", i.set("root", t), C5(t, e, "root"));
}
function g3(e) {
  const n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  for (const { klass: r, ownNodeConfig: s } of i1(e)) {
    const i = r.transform;
    if (!t.has(i)) {
      t.add(i);
      const o = r.transform();
      o && n.add(o);
    }
    if (s) {
      const o = s.$transform;
      o && n.add(o);
    }
  }
  return n;
}
const yo = { $createDOM: (e, n) => e.createDOM(n._config, n), $decorateDOM: (e, n, t, r) => {
}, $exportDOM: (e, n) => {
  const t = qa(n, e.getType());
  return t && t.exportDOM !== void 0 ? t.exportDOM(n, e) : e.exportDOM(n);
}, $extractWithChild: (e, n, t, r, s) => T(e) && e.extractWithChild(n, t, r), $getDOMSlot: (e, n, t) => e.getDOMSlot(n), $getSlotTargetElement: (e, n, t, r) => null, $shouldExclude: (e, n, t) => T(e) && e.excludeFromCopy("html"), $shouldInclude: (e, n, t) => !n || e.isSelected(n), $updateDOM: (e, n, t, r) => e.updateDOM(n, t, r._config) };
function h5(e) {
  const n = e || {}, t = o5(), r = n.theme || {}, s = e === void 0 ? t : n.parentEditor || null, i = n.disableEvents || !1, o = Ua(), l = n.namespace || (s !== null ? s._config.namespace : b5()), c = n.editorState, u = [Zo, wn, Wo, Po, Uo, Ka, ...n.nodes || []], { onError: d, onWarn: f, html: h } = n, g = n.editable === void 0 || n.editable;
  let p;
  if (e === void 0 && t !== null) p = t._nodes;
  else {
    p = /* @__PURE__ */ new Map();
    for (let m = 0; m < u.length; m++) {
      let x = u[m], y = null, _ = null;
      if (x && typeof x == "object") {
        const E = x;
        x = E.replace, y = E.with, _ = E.withKlass || null;
      }
      if (typeof x != "function" || !x.prototype || !(x === gt || x.prototype instanceof gt)) {
        let E = "<unknown>";
        try {
          E = JSON.parse(G0);
        } catch {
        }
        D(365, String(m - u.length + (n.nodes ? n.nodes.length : 0)), typeof x == "function" ? `${x.name}${typeof x.getType == "function" ? ` (type ${String(x.getType())})` : ""}` : String(x), String(E));
      }
      s1(x);
      const v = x.getType(), w = g3(x);
      p.set(v, { exportDOM: h && h.export ? h.export.get(x) : void 0, klass: x, replace: y, replaceWithKlass: _, sharedNodeState: x6(u[m]), transforms: w });
    }
  }
  const C = new lr(o, s, p, { disableEvents: i, dom: { ...yo, ...e && e.dom }, namespace: l, theme: r }, d || console.error, f || d3, function(m, x) {
    const y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Set(), v = (w) => {
      Object.keys(w).forEach((E) => {
        let N = y.get(E);
        N === void 0 && (N = [], y.set(E, N)), N.push(w[E]);
      });
    };
    return m.forEach((w) => {
      const E = w.klass.importDOM;
      if (E == null || _.has(E)) return;
      _.add(E);
      const N = E.call(w.klass);
      N !== null && v(N);
    }), x && v(x), y;
  }(p, h ? h.import : void 0), g, e);
  return c !== void 0 && (C._pendingEditorState = c, C._dirtyType = 2), function(m) {
    m.registerCommand(gd, D6, le), m.registerCommand(pd, $6, le), m.registerCommand(md, R6, le), m.registerCommand(xd, P6, le), m.registerCommand(Cd, H6, le);
  }(C), C;
}
function p3(e, n) {
  const t = e.get(n);
  e.delete(n), t && t();
}
function ws(e, n, t) {
  return e.set(n, t), p3.bind(null, e, n);
}
class lr {
  constructor(n, t, r, s, i, o, l, c, u) {
    M(this, "_headless");
    M(this, "_parentEditor");
    M(this, "_rootElement");
    M(this, "_editorState");
    M(this, "_pendingEditorState");
    M(this, "_compositionKey");
    M(this, "_deferred");
    M(this, "_keyToDOMMap");
    M(this, "_updates");
    M(this, "_updating");
    M(this, "_cascadeCount");
    M(this, "_listeners");
    M(this, "_commands");
    M(this, "_nodes");
    M(this, "_decorators");
    M(this, "_pendingDecorators");
    M(this, "_config");
    M(this, "_dirtyType");
    M(this, "_cloneNotNeeded");
    M(this, "_dirtyLeaves");
    M(this, "_dirtyElements");
    M(this, "_normalizedNodes");
    M(this, "_updateTags");
    M(this, "_observer");
    M(this, "_key");
    M(this, "_onError");
    M(this, "_onWarn");
    M(this, "_htmlConversions");
    M(this, "_window");
    M(this, "_editable");
    M(this, "_blockCursorElement");
    M(this, "_slotsUsed");
    M(this, "_inputState");
    M(this, "_createEditorArgs");
    this._createEditorArgs = u, this._parentEditor = t, this._rootElement = null, this._editorState = n, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = new Jl(), this._updates = [], this._updating = !1, this._cascadeCount = 0, this._listeners = { decorator: /* @__PURE__ */ new Map(), editable: /* @__PURE__ */ new Map(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Map(), textcontent: /* @__PURE__ */ new Map(), update: /* @__PURE__ */ new Map() }, this._commands = /* @__PURE__ */ new Map(), this._config = s, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = b5(), this._onError = i, this._onWarn = o, this._htmlConversions = l, this._editable = c, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null, this._slotsUsed = !1, this._inputState = { collapsedSelectionFormat: { format: 0, key: "root", offset: 0, style: "", timeStamp: 0 }, compositionEndData: "", compositionPhase: "idle", hadOrphanedCompositionEvents: !1, handledSelectionCommandTimeoutId: null, isInsertLineBreak: !1, isInsertTextAfterHandledSelectionCommand: !1, isSelectionChangeFromDOMUpdate: !1, isSelectionChangeFromMouseDown: !1, lastBeforeInputInsertTextTimeStamp: 0, lastKeyCode: null, lastKeyDownTimeStamp: 0, postDeleteSelectionToRestore: null, unprocessedBeforeInputData: null };
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(n) {
    return ws(this._listeners.update, n);
  }
  registerEditableListener(n) {
    return ws(this._listeners.editable, n);
  }
  registerDecoratorListener(n) {
    return ws(this._listeners.decorator, n);
  }
  registerTextContentListener(n) {
    return ws(this._listeners.textcontent, n);
  }
  registerRootListener(n) {
    const t = this._listeners.root;
    return Bt(ws(t, n, n(this._rootElement, null) || void 0), () => function(r, s, i) {
      const o = r.get(s);
      o && o(), r.set(s, s(...i) || void 0);
    }(t, n, [null, this._rootElement]));
  }
  registerCommand(n, t, r) {
    r === void 0 && D(35);
    const s = this._commands;
    s.has(n) || s.set(n, [new bs(), new bs(), new bs(), new bs(), new bs()]);
    const i = s.get(n);
    i === void 0 && D(36, String(n));
    const o = function(c) {
      return 7 & c;
    }(r), l = i[o];
    return o !== r ? l.addFront(t) : l.addBack(t), () => {
      l.delete(t), i.every((c) => c.size === 0) && s.delete(n);
    };
  }
  registerMutationListener(n, t, r) {
    const s = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(n)).klass, i = this._listeners.mutation;
    let o = i.get(t);
    o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o)), o.add(s);
    const l = r && r.skipInitialization;
    return l !== void 0 && l || this.initializeMutationListener(t, s), () => {
      o.delete(s), o.size === 0 && i.delete(t);
    };
  }
  getRegisteredNode(n) {
    const t = this._nodes.get(n.getType());
    return t === void 0 && D(37, n.name), t;
  }
  resolveRegisteredNodeAfterReplacements(n) {
    for (; n.replaceWithKlass; ) n = this.getRegisteredNode(n.replaceWithKlass);
    return n;
  }
  initializeMutationListener(n, t) {
    const r = this._editorState, s = fu(r).get(t.getType());
    if (!s) return;
    const i = /* @__PURE__ */ new Map();
    for (const o of s.keys()) i.set(o, "created");
    i.size > 0 && n(i, { dirtyLeaves: /* @__PURE__ */ new Set(), prevEditorState: r, updateTags: /* @__PURE__ */ new Set(["registerMutationListener"]) });
  }
  registerNodeTransformToKlass(n, t) {
    const r = this.getRegisteredNode(n);
    return r.transforms.add(t), r;
  }
  registerNodeTransform(n, t) {
    const r = this.registerNodeTransformToKlass(n, t), s = [r], i = r.replaceWithKlass;
    if (i != null) {
      const o = this.registerNodeTransformToKlass(i, t);
      s.push(o);
    }
    return function(o, l) {
      const c = fu(o.getEditorState()), u = [];
      for (const d of l) {
        const f = c.get(d);
        f && u.push(f);
      }
      u.length !== 0 && o.update(() => {
        for (const d of u) for (const f of d.keys()) {
          const h = Le(f);
          h && h.markDirty();
        }
      }, o._pendingEditorState === null ? { tag: tr } : void 0);
    }(this, s.map((o) => o.klass.getType())), () => {
      s.forEach((o) => o.transforms.delete(t));
    };
  }
  hasNode(n) {
    return this._nodes.has(n.getType());
  }
  hasNodes(n) {
    return n.every(this.hasNode.bind(this));
  }
  dispatchCommand(n, ...t) {
    return Y(this, n, ...t);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(n) {
    const t = this._rootElement;
    if (n !== t) {
      const r = Gr(this._config.theme, "root"), s = this._pendingEditorState || this._editorState;
      if (this._rootElement = n, f5(this, t, n, s, { preserveUpdateQueue: !0 }), t !== null && (this._config.disableEvents || B6(t), r != null && t.classList.remove(...r)), n !== null) {
        const i = r1(n), o = n.style;
        o.userSelect = "text", o.whiteSpace = "pre-wrap", o.wordBreak = "break-word", n.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = 2, Q0(this), this._updateTags.add(tr), Dn(this), this._config.disableEvents || function(l, c) {
          const u = l.ownerDocument;
          ca.set(l, u);
          let d = lo.get(u);
          d === void 0 && (d = { editors: /* @__PURE__ */ new Set(), hasShadowEditor: void 0 }, lo.set(u, d)), d.editors.add(c), d.hasShadowEditor = void 0, l.__lexicalEditor = c;
          const f = Rd(l);
          f.push(I6.register(u));
          for (let h = 0; h < aa.length; h++) {
            const [g, p] = aa[h], C = typeof p == "function" ? (m) => {
              Dc(m) || (Ic(m), (c.isEditable() || g === "click") && p(m, c));
            } : (m) => {
              if (Dc(m)) return;
              Ic(m);
              const x = c.isEditable();
              switch (g) {
                case "cut":
                  return x && Y(c, Za, m);
                case "copy":
                  return Y(c, Ro, m);
                case "paste":
                  return x && Y(c, Io, m);
                case "dragstart":
                  return x && Y(c, Ad, m);
                case "dragover":
                  return x && Y(c, Md, m);
                case "dragend":
                  return x && Y(c, N6, m);
                case "focus":
                  return x && Y(c, j6, m);
                case "blur":
                  return x && Y(c, A6, m);
                case "drop":
                  return x && Y(c, jd, m);
              }
            };
            f.push(O6(l, g, C));
          }
        }(n, this), r != null && n.classList.add(...r);
      } else this._window = null, this._updateTags.add(tr), Dn(this);
      Hs("root", this, !1, n, t);
    }
  }
  getElementByKey(n) {
    return this._keyToDOMMap.get(n) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(n, t) {
    n.isEmpty() && D(38);
    let r = n;
    r._readOnly && (r = c5(n), r._selection = n._selection ? n._selection.clone() : null), X0(this);
    const s = this._pendingEditorState, i = t !== void 0 ? t.tag : null;
    s === null || s.isEmpty() || (i != null && this._updateTags.add(i), Dn(this)), this._pendingEditorState = r, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, this._slotsUsed = this._slotsUsed || n._slotsUsed, Ot(this, () => {
      if (i && this._updateTags.add(i), n._parsed) for (const [o, l] of r._nodeMap.entries()) T(l) ? this._dirtyElements.set(o, !0) : this._dirtyLeaves.add(o);
    }, { discrete: !this._updating || void 0 });
  }
  parseEditorState(n, t) {
    return function(r, s, i) {
      const o = Ua(), l = Je, c = Ct, u = Ve, d = s._dirtyElements, f = s._dirtyLeaves, h = s._cloneNotNeeded, g = s._dirtyType;
      s._dirtyElements = /* @__PURE__ */ new Map(), s._dirtyLeaves = /* @__PURE__ */ new Set(), s._cloneNotNeeded = /* @__PURE__ */ new Set(), s._dirtyType = 0, Je = o, Ct = !1, Ve = s, Ga(null);
      try {
        const p = s._nodes;
        xo(r.root, p), i && i(), o._readOnly = !0, o._parsed = !0;
      } catch (p) {
        p instanceof Error && s._onError(p);
      } finally {
        s._dirtyElements = d, s._dirtyLeaves = f, s._cloneNotNeeded = h, s._dirtyType = g, Je = l, Ct = c, Ve = u;
      }
      return o;
    }(typeof n == "string" ? JSON.parse(n) : n, this, t);
  }
  read(...n) {
    const [t, r] = n.length === 1 ? ["force-commit", n[0]] : n;
    return t === "force-commit" && Dn(this), (t === "pending" ? this._pendingEditorState || this._editorState : this.getEditorState()).read(r, { editor: this });
  }
  update(n, t) {
    (function(r, s, i) {
      r._updating ? r._updates.push([s, i]) : ei(r, s, i);
    })(this, n, t);
  }
  focus(n, t = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), Ot(this, () => {
      const s = B(), i = Fe();
      s !== null ? s.dirty || Xe(s.clone()) : i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()), ns("focus"), v3(() => {
        r.removeAttribute("autocapitalize"), n && n();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const n = this._rootElement;
    n !== null && n.blur();
    const t = mt(this._window);
    t !== null && t.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(n) {
    this._editable !== n && (this._editable = n, Hs("editable", this, !0, n), this._slotsUsed && this.update(() => i3()));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
M(lr, "version");
lr.version = G0;
let Ca = null;
function Ga(e) {
  Ca = e;
}
const Ya = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
let m3 = 1;
function g5(e, n) {
  const t = qa(e, n);
  return t === void 0 && D(30, n), t;
}
function qa(e, n) {
  return e._nodes.get(n);
}
const x3 = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function Ja(e, n) {
  const t = n !== void 0 ? n : (() => {
    const i = e.getRootNode();
    return _r(i) || kn(i) ? ss(i) : null;
  })();
  if (!oe(t) || t.hasAttribute("data-lexical-slot")) return !1;
  const r = cr(t), s = t.nodeName;
  return Hd(r) && (s === "INPUT" || s === "TEXTAREA" || t.contentEditable === "true" && as(t) == null);
}
function ui(e, n, t) {
  const r = e.getRootElement();
  if (!r) return !1;
  try {
    if (!n || !r.contains(n) || !r.contains(t)) return !1;
  } catch {
    return !1;
  }
  return Kr(n) === e && e.read("latest", () => !Ja(n));
}
function di(e) {
  return e instanceof lr;
}
function Kr(e) {
  let n = e;
  for (; n != null; ) {
    const t = as(n);
    if (di(t)) return t;
    n = br(n);
  }
  return null;
}
function as(e) {
  return e ? e.__lexicalEditor : null;
}
function _o(e) {
  return Qr(e) || e.isToken();
}
function Tt(e) {
  return _o(e) || e.isSegmented();
}
function vt(e) {
  return us(e) && e.nodeType === 3;
}
function _r(e) {
  return us(e) && e.nodeType === 9;
}
function C3(e) {
  let n = e;
  for (; n != null; ) {
    if (vt(n)) return n;
    n = n.firstChild;
  }
  return null;
}
function ar(e, n, t) {
  const r = Bn[n];
  if (t !== null && (e & r) === (t & r)) return e;
  let s = e ^ r;
  return n === "subscript" ? s &= -65 : n === "superscript" ? s &= -33 : n === "lowercase" ? (s &= -513, s &= -1025) : n === "uppercase" ? (s &= -257, s &= -1025) : n === "capitalize" && (s &= -257, s &= -513), s;
}
function p5(e) {
  return $(e) || Rt(e) || de(e);
}
function m5(e, n) {
  const t = function() {
    const o = Ca;
    return Ca = null, o;
  }();
  if ((n = n || t && t.__key) != null) return void (e.__key = n);
  Ye(), s5();
  const r = be(), s = Ln(), i = "" + m3++;
  s._nodeMap.set(i, e), T(e) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i), r._cloneNotNeeded.add(i), r._dirtyType === 0 && (r._dirtyType = 1), e.__key = i;
}
function rn(e) {
  st(e) !== null && D(380, e.__key, String(st(e)));
  const n = e.getParent();
  if (n !== null) {
    const t = e.getWritable(), r = n.getWritable(), s = e.getPreviousSibling(), i = e.getNextSibling(), o = i !== null ? i.__key : null, l = s !== null ? s.__key : null, c = s !== null ? s.getWritable() : null, u = i !== null ? i.getWritable() : null;
    s === null && (r.__first = o), i === null && (r.__last = l), c !== null && (c.__next = o), u !== null && (u.__prev = l), t.__prev = null, t.__next = null, t.__parent = null, r.__size--;
  }
}
function bo(e) {
  s5(), co(e) && D(323, e.__key, e.__type);
  const n = e.getLatest(), t = n.__parent !== null ? n.__parent : ur(n) ? n.__slotHost : null, r = Ln(), s = be(), i = r._nodeMap, o = s._dirtyElements;
  t !== null && function(c, u, d) {
    let f = c;
    for (; f !== null; ) {
      if (d.has(f)) return;
      const h = u.get(f);
      if (h === void 0) break;
      d.set(f, !1), f = h.__parent !== null ? h.__parent : ur(h) ? h.__slotHost : null;
    }
  }(t, i, o);
  const l = n.__key;
  s._dirtyType === 0 && (s._dirtyType = 1), T(e) ? o.set(l, !0) : s._dirtyLeaves.add(l);
}
function qe(e) {
  Ye();
  const n = be(), t = n._compositionKey;
  if (e !== t) {
    if (n._compositionKey = e, t !== null) {
      const r = Le(t);
      r !== null && r.getWritable();
    }
    if (e !== null) {
      const r = Le(e);
      r !== null && r.getWritable();
    }
  }
}
function sn() {
  return or() ? null : be()._compositionKey;
}
function Le(e, n) {
  const t = (n || Ln())._nodeMap.get(e);
  return t === void 0 ? null : t;
}
function x5(e, n) {
  const t = cs(e, be());
  return t !== void 0 ? Le(t, n) : null;
}
function C5(e, n, t) {
  e[`__lexicalKey_${n._key}`] = t;
}
function cs(e, n) {
  return e[`__lexicalKey_${n._key}`];
}
function cr(e, n) {
  let t = e;
  for (; t != null; ) {
    const r = x5(t, n);
    if (r !== null) return r;
    t = br(t);
  }
  return null;
}
function y5(e) {
  const n = e._decorators, t = Object.assign({}, n);
  return e._pendingDecorators = t, t;
}
function ou(e) {
  return e.read(() => Fe().getTextContent());
}
function Fe() {
  return Ln()._nodeMap.get("root");
}
function Xe(e) {
  Ye();
  const n = Ln();
  e !== null && (e.dirty = !0, e.setCachedNodes(null), I(e) && be()._slotsUsed && Qd(e)), n._selection = e;
}
function lu() {
  Ye(), X0(be());
}
function Hr(e) {
  const n = function(t, r) {
    let s = t;
    for (; s != null; ) {
      const i = cs(s, r);
      if (i !== void 0) return i;
      s = br(s);
    }
    return null;
  }(e, be());
  return n === null ? null : Le(n);
}
function _5(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Xa(e) {
  const n = [];
  for (let t = e; t !== null; t = t._parentEditor) n.push(t);
  return n;
}
function b5() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function v5(e) {
  return vt(e) ? e.nodeValue : null;
}
function Qa(e, n, t) {
  const r = mt(wt(n));
  if (r === null) return;
  const s = Pt(r, n._rootElement), i = s.anchorNode;
  let { anchorOffset: o, focusOffset: l } = s;
  if (i !== null) {
    let c = v5(i);
    const u = cr(i);
    if (c !== null && $(u)) {
      if ((c === zs || c === Ha) && t) {
        const d = t.length;
        c = t, o = d, l = d;
      }
      c !== null && e1(u, c, o, l, e);
    }
  }
}
function e1(e, n, t, r, s) {
  let i = e;
  if (i.isAttached() && (s || !i.isDirty())) {
    const o = i.isComposing();
    if (i.isToken() && o) return;
    let l = n;
    if ((o || s) && (n.endsWith(zs) && (l = n.slice(0, -zs.length)), s)) {
      const u = Ha;
      let d;
      for (; (d = l.indexOf(u)) !== -1; ) l = l.slice(0, d) + l.slice(d + u.length), t !== null && t > d && (t = Math.max(d, t - u.length)), r !== null && r > d && (r = Math.max(d, r - u.length));
    }
    const c = i.getTextContent();
    if (s || l !== c) {
      const u = B();
      if (l === "") {
        if (qe(null), oi || Hn || li) i.remove();
        else {
          const C = be();
          kl(i, "", u), setTimeout(() => {
            C.update(() => {
              i.isAttached() && i.getTextContent() === "" && i.remove();
            });
          }, 20);
        }
        return;
      }
      const d = i.getParent(), f = ls(), h = i.getTextContentSize(), g = sn(), p = i.getKey();
      if (i.isToken() && !o || g !== null && p === g && !o || I(f) && (d !== null && !d.canInsertTextBefore() && f.anchor.offset === 0 || f.anchor.key === e.__key && f.anchor.offset === 0 && !i.canInsertTextBefore() && !o || f.focus.key === e.__key && f.focus.offset === h && !i.canInsertTextAfter() && !o)) return void i.markDirty();
      if (!I(u) || t === null || r === null) return void kl(i, l, u);
      if (u.setTextNodeRange(i, t, i, r), i.isSegmented()) {
        const C = pt(i.getTextContent());
        i.replace(C), i = C;
      }
      kl(i, l, u);
    }
  }
}
function kl(e, n, t) {
  if (e.setTextContent(n), I(t)) {
    const r = e.getKey();
    let s = !1;
    for (const i of ["anchor", "focus"]) {
      const o = t[i];
      o.type === "text" && o.key === r && (o.offset = on(e, o.offset, "clamp"), s = !0);
    }
    s && (t._cachedNodes = null, t._cachedIsBackward = null);
  }
}
function ji(e, n, t) {
  const r = n[t] || !1;
  return r === "any" || r === e[t];
}
function y3(e, n) {
  return ji(e, n, "altKey") && ji(e, n, "ctrlKey") && ji(e, n, "shiftKey") && ji(e, n, "metaKey");
}
function ke(e, n, t) {
  if (!y3(e, t)) return !1;
  if (e.key.toLowerCase() === n.toLowerCase()) return !0;
  if (n.length > 1 || e.key.length === 1 && e.key.charCodeAt(0) <= 127) return !1;
  if (e.code.startsWith("Digit") && /^\d$/.test(n)) return e.code === `Digit${n}`;
  const r = "Key" + n.toUpperCase();
  return e.code === r;
}
const gn = { ctrlKey: !Zt, metaKey: Zt }, au = { altKey: Zt, ctrlKey: !Zt };
function cu(e) {
  return e.key === "Backspace";
}
function _3(e) {
  const n = Fe();
  if (I(e)) {
    const t = e.anchor, r = e.focus, s = t.getNode();
    if (ze(s)) return t.set(s.getKey(), 0, "element"), r.set(s.getKey(), s.getChildrenSize(), "element"), Cn(e), e;
    const i = s.getTopLevelElementOrThrow(), o = i.getParent();
    if (o === null) return T(i) && (t.set(i.getKey(), 0, "element"), r.set(i.getKey(), i.getChildrenSize(), "element"), Cn(e)), e;
    const l = o;
    return t.set(l.getKey(), 0, "element"), r.set(l.getKey(), l.getChildrenSize(), "element"), Cn(e), e;
  }
  {
    const t = n.select(0, n.getChildrenSize());
    return Xe(Cn(t)), t;
  }
}
function Gr(e, n) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const t = e.__lexicalClassNameCache, r = t[n];
  if (r !== void 0) return r;
  const s = e[n];
  if (typeof s == "string") {
    const i = bn(s);
    return t[n] = i, i;
  }
  return s;
}
function t1(e, n, t, r, s) {
  if (t.size === 0) return;
  const i = r.__type, o = r.__key, l = n.get(i);
  l === void 0 && D(33, i);
  const c = l.klass;
  let u = e.get(c);
  u === void 0 && (u = /* @__PURE__ */ new Map(), e.set(c, u));
  const d = u.get(o), f = d === "destroyed" && s === "created";
  (d === void 0 || f) && u.set(o, f ? "updated" : s);
}
function uu(e, n, t) {
  const r = e.getParent();
  let s = t, i = e;
  return r !== null && (t === 0 && (s = i.getIndexWithinParent(), i = r)), i.getChildAtIndex(s - 1);
}
function b3(e, n) {
  const t = e.offset;
  if (e.type === "element")
    return uu(e.getNode(), n, t);
  {
    const r = e.getNode();
    if (t === 0 || !n) {
      const s = r.getPreviousSibling();
      return s === null ? uu(r.getParentOrThrow(), n, r.getIndexWithinParent() + 0) : s;
    }
  }
  return null;
}
function w5(e) {
  const n = wt(e).event, t = n && n.inputType;
  return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function Y(e, n, ...t) {
  return a5(e, n, t[0], e);
}
function ts(e, n) {
  const t = e._keyToDOMMap.get(n);
  return t === void 0 && D(75, n), t;
}
function br(e) {
  const n = e.assignedSlot || e.parentElement;
  if (n !== null) return n;
  const t = e.parentNode;
  return kn(t) ? t.host : null;
}
function n1(e) {
  return _r(e) ? e : oe(e) ? e.ownerDocument : null;
}
function ns(e) {
  Ye(), be()._updateTags.add(e);
}
function v3(e) {
  Ye(), be()._deferred.push(e);
}
function rs(e, n) {
  let t = e.getParent();
  for (; t !== null; ) {
    if (t.is(n)) return !0;
    t = t.getParent();
  }
  return !1;
}
function r1(e) {
  const n = n1(e);
  return n ? n.defaultView : null;
}
function wt(e) {
  const n = e._window;
  return n === null && D(78), n;
}
function w3(e) {
  return T(e) && e.isInline() || de(e) && e.isInline();
}
function S5(e) {
  let n = e.getLatest();
  for (; n !== null; ) {
    if (st(n) !== null && T(n)) return n;
    const t = n.getParentOrThrow();
    if (Me(t)) return t;
    n = t;
  }
  return n;
}
function Bs(e) {
  return T(e) && e.isShadowRoot();
}
function Me(e) {
  return ze(e) || Bs(e);
}
function rt(e, n = !1) {
  const t = e.constructor.clone(e, Ya);
  return m5(t, null), t.afterCloneFrom(e), n || t.resetOnCopyNodeFrom(e), t;
}
function qt(e) {
  const n = be(), t = e.getType(), r = qa(n, t);
  r === void 0 && D(200, e.constructor.name, t);
  const { replace: s, replaceWithKlass: i } = r;
  if (s !== null) {
    const o = s(e), l = o.constructor;
    return i !== null ? o instanceof i || D(201, i.name, i.getType(), l.name, l.getType(), e.constructor.name, t) : o instanceof e.constructor && l !== e.constructor || D(202, l.name, l.getType(), e.constructor.name, t), o.__key === e.__key && D(203, e.constructor.name, t, l.name, l.getType()), o;
  }
  return e;
}
function El(e, n) {
  !ze(e.getParent()) || T(n) || de(n) || D(99);
}
function S3(e) {
  const n = Le(e);
  return n === null && D(63, e), n;
}
function Xi(e) {
  if (!e || e.isInline()) return !1;
  if (de(e)) return !0;
  if (T(e)) {
    if (e.isShadowRoot()) {
      const n = e.getParent();
      return !(T(n) && n.isShadowRoot());
    }
    return !e.canBeEmpty();
  }
  return !1;
}
function vo(e, n, t) {
  t.style.removeProperty("caret-color"), n._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function mt(e) {
  return it ? (e || window).getSelection() : null;
}
function k3(e) {
  const n = r1(e);
  return n ? n.getSelection() : null;
}
function kn(e) {
  return ya(e) && "host" in e;
}
const E3 = [];
function k5(e) {
  const n = e.getRootNode();
  if (n === e || !kn(n)) return E3;
  const t = [n];
  let r = n.host;
  for (; ; ) {
    const s = r.getRootNode();
    if (s === r || !kn(s)) break;
    t.push(s), r = s.host;
  }
  return t;
}
function* E5(e) {
  const n = [e];
  let t;
  for (; t = n.pop(); ) {
    yield* t.querySelectorAll('[data-lexical-editor="true"]');
    const r = (_r(t) ? t : t.ownerDocument).createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
    let s;
    for (; s = r.nextNode(); ) s.shadowRoot && n.push(s.shadowRoot);
  }
}
function N5(e) {
  return e !== null ? e.ownerDocument : document;
}
function je() {
  const e = o5();
  return N5(e !== null ? e._rootElement : null);
}
function Ko(e, n) {
  if (n === null || typeof e.getComposedRanges != "function") return null;
  const t = k5(n);
  if (t.length === 0) return null;
  const r = e.getComposedRanges;
  try {
    const s = r.call(e, { shadowRoots: t })[0];
    if (s !== void 0) return s;
  } catch {
  }
  try {
    const s = r.apply(e, t)[0];
    if (s !== void 0) return s;
  } catch {
  }
  return null;
}
function N3(e, n) {
  const t = Ko(e, n);
  if (t !== null) {
    const r = T3(t);
    if (r !== null) return r;
  }
  return e.rangeCount > 0 ? e.getRangeAt(0) : null;
}
function Pt(e, n) {
  const t = Ko(e, n);
  return t === null ? e : L3(t, j3(e));
}
function T3(e) {
  const n = e.startContainer.ownerDocument;
  if (n === null) return null;
  const t = n.createRange();
  try {
    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), t;
  } catch {
    return null;
  }
}
function L3(e, n) {
  const { startContainer: t, startOffset: r, endContainer: s, endOffset: i } = e;
  return n === "backward" ? { anchorNode: s, anchorOffset: i, direction: n, focusNode: t, focusOffset: r } : { anchorNode: t, anchorOffset: r, direction: n, focusNode: s, focusOffset: i };
}
function j3(e) {
  return e.direction;
}
function wo(e) {
  const n = e.getRootNode();
  return _r(n) || kn(n) ? n.activeElement : null;
}
function ss(e) {
  let n = e.activeElement;
  for (; n !== null && n.shadowRoot !== null; ) {
    const t = n.shadowRoot.activeElement;
    if (t === null) break;
    n = t;
  }
  return n;
}
function T5(e) {
  const n = e.target;
  if (n !== null && oe(n) && n.shadowRoot !== null && typeof e.composedPath == "function") {
    const t = e.composedPath();
    if (t.length > 0) return t[0];
  }
  return n;
}
function L5(e) {
  return oe(e) && e.tagName === "A";
}
function oe(e) {
  return us(e) && e.nodeType === 1;
}
function us(e) {
  return typeof e == "object" && e !== null && "nodeType" in e && typeof e.nodeType == "number";
}
function ya(e) {
  return us(e) && e.nodeType === 11;
}
const A3 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
function So(e) {
  return !(!oe(e) || !e.style.display.startsWith("inline")) || A3.test(e.nodeName);
}
const M3 = /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
function is(e) {
  return (!oe(e) || !e.style.display.startsWith("inline")) && M3.test(e.nodeName);
}
function nt(e) {
  if (de(e) && !e.isInline()) return !0;
  if (!T(e) || Me(e)) return !1;
  const n = e.getFirstChild(), t = n === null || Rt(n) || $(n) || n.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && t;
}
function De() {
  return be();
}
function Go(e = De()) {
  return e._config.dom || yo;
}
function Ht(e, n, t = De()) {
  const r = Go(t).$getDOMSlot(e, n, t);
  return T(e) && (F3(r) || D(344, e.getKey(), e.getType())), r;
}
function F3(e) {
  return e instanceof U0;
}
function Pn(e, n, t = De()) {
  return C3(Ht(e, n, t).element);
}
const du = /* @__PURE__ */ new WeakMap(), O3 = /* @__PURE__ */ new Map();
function fu(e) {
  if (!e._readOnly && e.isEmpty()) return O3;
  e._readOnly || D(192);
  let n = du.get(e);
  return n || (n = function(t) {
    const r = /* @__PURE__ */ new Map();
    for (const [s, i] of t._nodeMap) {
      const o = i.__type;
      let l = r.get(o);
      l || (l = /* @__PURE__ */ new Map(), r.set(o, l)), l.set(s, i);
    }
    return r;
  }(e), du.set(e, n)), n;
}
function j5(e) {
  const n = e.constructor.clone(e, Ya);
  return n.afterCloneFrom(e), n;
}
function I3(e) {
  return (n = j5(e))[Pd] = !0, n;
  var n;
}
function vr(e, n) {
  const t = e.getAttribute("data-lexical-indent");
  if (t !== null) {
    const i = parseInt(t, 10);
    if (Number.isFinite(i) && i >= 0) return void n.setIndent(i);
  }
  const r = parseInt(e.style.paddingInlineStart, 10) || 0, s = Math.round(r / 40);
  n.setIndent(s);
}
function Vt(e, n) {
  const t = n.getAttribute("dir");
  return t === "ltr" || t === "rtl" ? e.setDirection(t) : e;
}
function dn(e, n) {
  const t = n.style.textAlign;
  return t && t in ro ? e.setFormat(t) : e;
}
function D3(e, n) {
  e.__lexicalUnmanaged = !0, n && n.captureSelection !== void 0 && (e.__lexicalCapturedSelection = n.captureSelection);
}
function A5(e) {
  return e.__lexicalUnmanaged === !0;
}
function $3(e, n = De()) {
  const t = n.isEditable();
  e.contentEditable = t ? "true" : "false", t ? e.__lexicalEditor = n : delete e.__lexicalEditor;
}
function ko(e, n) {
  let t = e;
  for (; t != null; ) {
    if (t.__lexicalCapturedSelection === !0) return !0;
    if (oe(t) && t.hasAttribute("data-lexical-slot") || cs(t, n) !== void 0) return !1;
    t = br(t);
  }
  return !1;
}
function Ss(e, n) {
  return function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  }(e, n) && e[n] !== gt[n];
}
const hu = /* @__PURE__ */ new WeakMap(), gu = Symbol("lexical.synthesizedGetType");
function s1(e) {
  const n = hu.get(e);
  if (n) return n;
  const t = e.prototype != null && dc in e.prototype ? e.prototype[dc]() : void 0, r = function(u) {
    if (!(u === gt || u.prototype instanceof gt)) {
      let d = "<unknown>", f = "<unknown>";
      try {
        d = u.getType();
      } catch {
      }
      try {
        lr.version && (f = JSON.parse(lr.version));
      } catch {
      }
      D(290, u.name, d, f);
    }
    return u === zo || u === We || u === gt;
  }(e), s = !r && Ss(e, "getType") ? e.getType : void 0, i = s && !(gu in s) ? s.call(e) : void 0;
  let o, l = i;
  if (t) if (i) o = t[i];
  else {
    for (const [u, d] of Object.entries(t)) l = u, o = d;
    if (!o) for (const u of Object.getOwnPropertySymbols(t)) {
      const d = t[u];
      if (d) {
        o = d;
        break;
      }
    }
  }
  if (!r && l) {
    if (!Ss(e, "getType")) {
      const u = e, d = function() {
        return this !== u ? gt.getType.call(this) : l;
      };
      d[gu] = !0, e.getType = d;
    }
    if (Ss(e, "clone") || (e.clone = (u, d) => {
      Ga(u);
      const f = new e();
      return d !== Ya && f.afterCloneFrom(u), f;
    }), Ss(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((u) => new e().updateFromJSON(u))), !Ss(e, "importDOM") && o) {
      const { importDOM: u } = o;
      u && (e.importDOM = () => u);
    }
  }
  const c = { klass: e, ownNodeConfig: o, ownNodeType: l };
  return hu.set(e, c), c;
}
function* i1(e) {
  for (let n = e; n && (n === gt || Hd(n.prototype)); ) {
    const t = s1(n);
    yield t, n = t.ownNodeConfig && t.ownNodeConfig.extends || F5(n);
  }
}
function M5(e) {
  const n = De();
  return Ye(), new (n.resolveRegisteredNodeAfterReplacements(n.getRegisteredNode(e))).klass();
}
const Ee = (e, n) => {
  let t = e;
  for (; t != null && !ze(t); ) {
    if (n(t)) return t;
    t = t.getParent();
  }
  return null;
};
function Eo(e, n) {
  const t = [];
  let r = e.__first;
  for (; r !== null; ) {
    const s = n === null ? Le(r) : n.get(r);
    s == null && D(174), t.push(r), r = s.__next;
  }
  return t;
}
function F5(e) {
  const n = Object.getPrototypeOf(e);
  if (typeof n == "function" && n !== Function.prototype) return n;
  const t = e.prototype && Object.getPrototypeOf(e.prototype);
  return t ? t.constructor : null;
}
const O5 = /* @__PURE__ */ new Map();
function _n(e) {
  return T(e) || de(e);
}
function ur(e) {
  return T(e) || de(e);
}
function st(e) {
  const n = e.getLatest();
  return ur(n) ? n.__slotHost : null;
}
function Ut(e) {
  const n = st(e);
  if (n === null) return null;
  const t = Le(n);
  return T(t) || de(t) || D(370), t;
}
function R3(e) {
  const n = Ut(e);
  if (n === null) return null;
  const t = e.getLatest().__key;
  for (const [r, s] of qo(n)) if (s === t) return r;
  return null;
}
function Yo(e) {
  let n = e.getLatest();
  for (; n !== null; ) {
    if (st(n) !== null) return n;
    n = n.getParent();
  }
  return null;
}
function qo(e) {
  const n = e.getLatest();
  return _n(n) && n.__slots !== null ? n.__slots : O5;
}
function It(e) {
  return Array.from(qo(e).keys());
}
function dr(e, n) {
  const t = qo(e).get(n);
  return t === void 0 ? null : Le(t);
}
const P3 = ["__proto__", "constructor", "prototype"], pu = Symbol("slotMapOwner");
function _a(e) {
  let n = e.__slots;
  return n !== null && n[pu] === e || (n = new Map(n), n[pu] = e, e.__slots = n), n;
}
const mu = /* @__PURE__ */ new WeakMap(), H3 = [];
function B3(e) {
  for (const { ownNodeConfig: n } of i1(e)) {
    const t = n && n.slots;
    if (t) return t;
  }
  return H3;
}
function I5(e) {
  let n = "";
  for (const t of It(e)) {
    const r = dr(e, t);
    r !== null && (n += r.getTextContent());
  }
  return n;
}
function xu(e, n, t) {
  const r = t.get(e), s = t.get(n);
  return r !== void 0 ? s !== void 0 ? r - s : -1 : s !== void 0 ? 1 : e < n ? -1 : e > n ? 1 : 0;
}
function V3(e) {
  const n = e.__slots;
  if (n === null || n.size < 2) return;
  const t = function(o) {
    let l = mu.get(o);
    if (l === void 0) {
      const c = B3(o), u = /* @__PURE__ */ new Map();
      for (const d of c) P3.includes(d) && D(371, o.name, d), u.has(d) && D(372, o.name, d), u.set(d, u.size);
      l = u, mu.set(o, l);
    }
    return l;
  }(e.constructor);
  let r = null, s = !0;
  for (const o of n.keys()) {
    if (r !== null && xu(r, o, t) > 0) {
      s = !1;
      break;
    }
    r = o;
  }
  if (s) return;
  const i = Array.from(n).sort(([o], [l]) => xu(o, l, t));
  n.clear();
  for (const [o, l] of i) n.set(o, l);
}
function D5(e, n, t) {
  n !== "__proto__" && n !== "constructor" && n !== "prototype" || D(373, n);
  const r = e.getLatest();
  if (r.__slots !== null && r.__slots.get(n) === t.getLatest().__key) return r;
  (!T(t) && !de(t) || t.isInline()) && D(374, t.__key);
  const s = e.getWritable(), i = _a(s), o = i.get(n);
  o !== void 0 && $5(o);
  const l = t.getWritable(), c = Ut(l);
  if (c !== null) {
    const u = R3(l);
    u !== null && _a(c.getWritable()).delete(u), l.__slotHost = null;
  }
  return rn(l), l.__slotHost = s.__key, i.set(n, l.__key), V3(s), function() {
    const u = De();
    u._slotsUsed = !0, u._pendingEditorState && (u._pendingEditorState._slotsUsed = !0);
  }(), s;
}
function z3(e, n) {
  const t = e.getWritable();
  if (t.__slots === null) return t;
  const r = t.__slots.get(n);
  return r !== void 0 && ($5(r), _a(t).delete(n)), t;
}
function $5(e) {
  const n = Le(e);
  if (n === null) return;
  const t = n.getWritable();
  ur(t) || D(377, e), t.__slotHost = null, t.remove();
}
const Z3 = { next: "previous", previous: "next" };
class o1 {
  constructor(n) {
    M(this, "origin");
    this.origin = n;
  }
  [Symbol.iterator]() {
    return R5({ hasNext: En, initial: this.getAdjacentCaret(), map: (n) => n, step: (n) => n.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return _e(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return _e(this.origin, this.direction);
  }
  remove() {
    const n = this.getNodeAtCaret();
    return n && n.remove(), this;
  }
  replaceOrInsert(n, t) {
    const r = this.getNodeAtCaret();
    return n.is(this.origin) || n.is(r) || (r === null ? this.insert(n) : r.replace(n, t)), this;
  }
  splice(n, t, r = "next") {
    const s = r === this.direction ? t : Array.from(t).reverse();
    let i = this;
    const o = this.getParentAtCaret(), l = /* @__PURE__ */ new Map();
    for (let c = i.getAdjacentCaret(); c !== null && l.size < n; c = c.getAdjacentCaret()) {
      const u = c.origin.getWritable();
      l.set(u.getKey(), u);
    }
    for (const c of s) {
      if (l.size > 0) {
        const u = i.getNodeAtCaret();
        if (u) {
          if (l.delete(u.getKey()), l.delete(c.getKey()), !(u.is(c) || i.origin.is(c))) {
            const d = c.getParent();
            d && d.is(o) && c.remove(), u.replace(c);
          }
        } else u === null && D(263, Array.from(l).join(" "));
      } else i.insert(c);
      i = _e(c, this.direction);
    }
    for (const c of l.values()) c.remove();
    return this;
  }
}
class ti extends o1 {
  constructor() {
    super(...arguments);
    M(this, "type", "child");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : _t(t, this.direction);
  }
  getParentCaret(t = "root") {
    return _e(l1(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = zn(this.direction);
    return _e(this.getNodeAtCaret(), t) || _t(this.origin, t);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(t) {
    return t instanceof ti && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSamePointCaret(t) {
    return this.isSameNodeCaret(t);
  }
}
const W3 = { root: ze, shadowRoot: Me };
function zn(e) {
  return Z3[e];
}
function l1(e, n = "root") {
  return e === null || W3[n](e) ? null : st(e) === null ? e : null;
}
class fr extends o1 {
  constructor() {
    super(...arguments);
    M(this, "type", "sibling");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : _e(t, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return T(this.origin) ? _t(this.origin, this.direction) : null;
  }
  getParentCaret(t = "root") {
    return _e(l1(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = zn(this.direction);
    return _e(this.getNodeAtCaret(), t) || _t(this.origin.getParentOrThrow(), t);
  }
  isSamePointCaret(t) {
    return t instanceof fr && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSameNodeCaret(t) {
    return (t instanceof fr || t instanceof hr) && this.direction === t.direction && this.origin.is(t.origin);
  }
}
class hr extends o1 {
  constructor(t, r) {
    super(t);
    M(this, "type", "text");
    M(this, "offset");
    this.offset = r;
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : Vn(t, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(t = "root") {
    return _e(l1(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    return Vn(this.origin, zn(this.direction), this.offset);
  }
  isSamePointCaret(t) {
    return t instanceof hr && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
  }
  isSameNodeCaret(t) {
    return (t instanceof fr || t instanceof hr) && this.direction === t.direction && this.origin.is(t.origin);
  }
  getSiblingCaret() {
    return _e(this.origin, this.direction);
  }
}
function Dt(e) {
  return e instanceof hr;
}
function En(e) {
  return e instanceof fr;
}
function $t(e) {
  return e instanceof ti;
}
const U3 = { next: class extends hr {
  constructor() {
    super(...arguments);
    M(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends hr {
  constructor() {
    super(...arguments);
    M(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, K3 = { next: class extends fr {
  constructor() {
    super(...arguments);
    M(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends fr {
  constructor() {
    super(...arguments);
    M(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, G3 = { next: class extends ti {
  constructor() {
    super(...arguments);
    M(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(n) {
    return this.origin.splice(0, 0, [n]), this;
  }
}, previous: class extends ti {
  constructor() {
    super(...arguments);
    M(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(n) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [n]), this;
  }
} };
function _e(e, n) {
  return e ? new K3[n](e) : null;
}
function Vn(e, n, t) {
  return e ? new U3[n](e, on(e, t)) : null;
}
function on(e, n, t = "error") {
  const r = e.getTextContentSize();
  let s = n === "next" ? r : n === "previous" ? 0 : n;
  return (s < 0 || s > r) && (t !== "clamp" && V0(284, String(n), String(r), e.getKey()), s = s < 0 ? 0 : r), s;
}
function Cu(e, n) {
  return new q3(e, n);
}
function _t(e, n) {
  return T(e) ? new G3[n](e) : null;
}
function Y3(e) {
  return e && e.getChildCaret() || e;
}
function a1(e) {
  return e && Y3(e.getAdjacentCaret());
}
class c1 {
  constructor(n, t, r) {
    M(this, "type", "node-caret-range");
    M(this, "direction");
    M(this, "anchor");
    M(this, "focus");
    this.anchor = n, this.focus = t, this.direction = r;
  }
  getLatest() {
    const n = this.anchor.getLatest(), t = this.focus.getLatest();
    return n === this.anchor && t === this.focus ? this : new c1(n, t, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const n = (s) => {
      const i = this[s].getLatest();
      return Dt(i) ? function(o, l) {
        const { direction: c, origin: u } = o, d = on(u, l === "focus" ? zn(c) : c);
        return Cu(o, d - o.offset);
      }(i, s) : null;
    }, t = n("anchor"), r = n("focus");
    if (t && r) {
      const { caret: s } = t, { caret: i } = r;
      if (s.isSameNodeCaret(i)) return [Cu(s, i.offset - s.offset), null];
    }
    return [t, r];
  }
  iterNodeCarets(n = "root") {
    const t = Dt(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), s = Dt(r), i = (o) => o.isSameNodeCaret(r) ? null : a1(o) || o.getParentCaret(n);
    return R5({ hasNext: (o) => o !== null && !(s && r.isSameNodeCaret(o)), initial: t.isSameNodeCaret(r) ? null : i(t), map: (o) => o, step: i });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class q3 {
  constructor(n, t) {
    M(this, "type", "slice");
    M(this, "caret");
    M(this, "distance");
    this.caret = n, this.distance = t;
  }
  getSliceIndices() {
    const { distance: n, caret: { offset: t } } = this, r = t + n;
    return r < t ? [r, t] : [t, r];
  }
  getTextContent() {
    const [n, t] = this.getSliceIndices();
    return this.caret.origin.getTextContent().slice(n, t);
  }
  getTextContentSize() {
    return Math.abs(this.distance);
  }
  removeTextSlice() {
    const { caret: { origin: n, direction: t } } = this, [r, s] = this.getSliceIndices(), i = n.getTextContent();
    return Vn(n.setTextContent(i.slice(0, r) + i.slice(s)), t, r);
  }
}
function Jo(e) {
  return Gt(e, _e(Fe(), e.direction));
}
function Xo(e) {
  return Gt(e, e);
}
function Gt(e, n) {
  return e.direction !== n.direction && D(265), new c1(e, n, e.direction);
}
function R5(e) {
  const { initial: n, hasNext: t, step: r, map: s } = e;
  let i = n;
  return { [Symbol.iterator]() {
    return this;
  }, next() {
    if (!t(i)) return { done: !0, value: void 0 };
    const o = { done: !1, value: s(i) };
    return i = r(i), o;
  } };
}
function ni(e, n) {
  const t = ba(e.origin, n.origin);
  switch (t === null && D(275, e.origin.getKey(), n.origin.getKey()), t.type) {
    case "same": {
      const r = e.type === "text", s = n.type === "text";
      return r && s ? function(i, o) {
        return Math.sign(i - o);
      }(e.offset, n.offset) : e.type === n.type ? 0 : r ? -1 : s ? 1 : e.type === "child" ? -1 : 1;
    }
    case "ancestor":
      return e.type === "child" ? -1 : 1;
    case "descendant":
      return n.type === "child" ? 1 : -1;
    case "branch":
      return P5(t);
  }
}
function P5(e) {
  const { a: n, b: t } = e, r = n.__key, s = t.__key;
  let i = n, o = t;
  for (; i && o; i = i.getNextSibling(), o = o.getNextSibling()) {
    if (i.__key === s) return -1;
    if (o.__key === r) return 1;
  }
  return i === null ? 1 : -1;
}
function Ai(e, n) {
  return n.is(e);
}
function yu(e) {
  return T(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function ba(e, n) {
  if (e.is(n)) return { commonAncestor: e, type: "same" };
  const t = /* @__PURE__ */ new Map();
  for (let [r, s] = yu(e); r; s = r, r = r.getParent()) t.set(r, s);
  for (let [r, s] = yu(n); r; s = r, r = r.getParent()) {
    const i = t.get(r);
    if (i !== void 0) return i === null ? (Ai(e, r) || D(276), { commonAncestor: r, type: "ancestor" }) : s === null ? (Ai(n, r) || D(277), { commonAncestor: r, type: "descendant" }) : ((T(i) || Ai(e, i)) && (T(s) || Ai(n, s)) && r.is(i.getParent()) && r.is(s.getParent()) || D(278), { a: i, b: s, commonAncestor: r, type: "branch" });
  }
  return null;
}
function bt(e, n) {
  const { type: t, key: r, offset: s } = e, i = S3(e.key);
  return t === "text" ? ($(i) || D(266, i.getType(), r), Vn(i, n, s)) : (T(i) || D(267, i.getType(), r), va(i, e.offset, n));
}
function gr(e, n) {
  const { origin: t, direction: r } = n, s = r === "next";
  Dt(n) ? e.set(t.getKey(), n.offset, "text") : En(n) ? $(t) ? e.set(t.getKey(), on(t, r), "text") : e.set(t.getParentOrThrow().getKey(), t.getIndexWithinParent() + (s ? 1 : 0), "element") : ($t(n) && T(t) || D(268), e.set(t.getKey(), s ? 0 : t.getChildrenSize(), "element"));
}
function ri(e) {
  const n = B(), t = I(n) ? n : n5();
  return Qi(t, e), Xe(t), t;
}
function Qi(e, n) {
  gr(e.anchor, n.anchor), gr(e.focus, n.focus);
}
function No(e) {
  const { anchor: n, focus: t } = e, r = bt(n, "next"), s = bt(t, "next"), i = ni(r, s) <= 0 ? "next" : "previous";
  return Gt(Nn(r, i), Nn(s, i));
}
function Zn(e) {
  const { direction: n, origin: t } = e, r = _e(t, zn(n)).getNodeAtCaret();
  return r ? _e(r, n) : _t(t.getParentOrThrow(), n);
}
function _u(e, n = "root") {
  const t = [e];
  for (let r = $t(e) ? e.getParentCaret(n) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(n)) t.push(Zn(r));
  return t;
}
function Nl(e) {
  return !!e && e.origin.isAttached();
}
function J3(e, n = "removeEmptySlices") {
  if (e.isCollapsed()) return e;
  const t = "root", r = "next";
  let s = n;
  const i = d1(e, r), o = _u(i.anchor, t), l = _u(i.focus.getFlipped(), t), c = /* @__PURE__ */ new Set(), u = [];
  for (const C of i.iterNodeCarets(t)) if ($t(C)) c.add(C.origin.getKey());
  else if (En(C)) {
    const { origin: m } = C;
    T(m) && !c.has(m.getKey()) || u.push(m);
  }
  const d = /* @__PURE__ */ new Set();
  for (const C of u) {
    const m = C.getParent();
    m === null || c.has(m.getKey()) || d.add(m), rn(C);
  }
  for (const C of d) !C.canBeEmpty() && !Me(C) && C.isEmpty() && C.isAttached() && C.remove();
  for (const C of i.getTextSlices()) {
    if (!C) continue;
    const { origin: m } = C.caret, x = m.getTextContentSize(), y = Zn(_e(m, r)), _ = m.getMode();
    if (Math.abs(C.distance) === x && s === "removeEmptySlices" || _ === "token" && C.distance !== 0) y.remove();
    else if (C.distance !== 0) {
      s = "removeEmptySlices";
      let v = C.removeTextSlice();
      const w = C.caret.origin;
      if (_ === "segmented") {
        const E = v.origin, N = pt(E.getTextContent()).setStyle(E.getStyle()).setFormat(E.getFormat());
        y.replaceOrInsert(N), v = Vn(N, r, v.offset);
      }
      w.is(o[0].origin) && (o[0] = v), w.is(l[0].origin) && (l[0] = v.getFlipped());
    }
  }
  let f, h;
  for (const C of o) if (Nl(C)) {
    f = yt(C);
    break;
  }
  for (const C of l) if (Nl(C)) {
    h = yt(C);
    break;
  }
  const g = function(C, m, x) {
    if (!C || !m) return null;
    const y = C.getParentAtCaret(), _ = m.getParentAtCaret();
    if (!y || !_) return null;
    const v = y.getParents().reverse();
    v.push(y);
    const w = _.getParents().reverse();
    w.push(_);
    const E = Math.min(v.length, w.length);
    let N;
    for (N = 0; N < E && v[N] === w[N]; N++) ;
    const S = (A, H) => {
      let G;
      for (let O = N; O < A.length; O++) {
        const K = A[O];
        if (Me(K)) return;
        !G && H(K) && (G = K);
      }
      return G;
    }, k = S(v, nt), L = k && S(w, (A) => x.has(A.getKey()) && nt(A));
    return L && It(L).length > 0 ? null : k && L ? [k, L] : null;
  }(f, h, c);
  if (g) {
    const [C, m] = g;
    _t(C, "previous").splice(0, m.getChildren());
    let x = m.getParent();
    for (m.remove(!0); x && x.isEmpty(); ) {
      const y = x;
      x = x.getParent(), y.remove(!0);
    }
  } else if (h) {
    const C = function(y) {
      if ($t(y)) {
        const _ = y.origin;
        if (nt(_)) return _;
      } else {
        const _ = y.getParentAtCaret();
        if (_ && nt(_)) return _;
      }
      return null;
    }(h), m = C && C.getParent(), x = C && C.getParents().findLast(Bs);
    if (C && m && !ze(m) && C.isEmpty() && c.has(C.getKey()) && It(C).length === 0 && (!x || c.has(x.getKey()))) {
      C.remove(!0);
      let y = m;
      for (; y && !ze(y) && y.isEmpty(); ) {
        const _ = y.getParent();
        if (_ && ze(_) && _.getChildrenSize() <= 1) break;
        const v = y;
        y = _, v.remove(!0);
      }
    }
  }
  const p = [f, h, ...o, ...l].find(Nl);
  if (p)
    return Xo(Nn(yt(p), e.direction));
  D(269, JSON.stringify(o.map((C) => C.origin.__key)));
}
function yt(e) {
  const n = function(s) {
    let i = s;
    for (; $t(i); ) {
      const o = a1(i);
      if (!$t(o)) break;
      i = o;
    }
    return i;
  }(e.getLatest()), { direction: t } = n;
  if ($(n.origin)) return Dt(n) ? n : Vn(n.origin, t, t);
  const r = n.getAdjacentCaret();
  return En(r) && $(r.origin) ? Vn(r.origin, t, zn(t)) : n;
}
function u1(e) {
  return Dt(e) && e.offset !== on(e.origin, e.direction);
}
function Nn(e, n) {
  return e.direction === n ? e : e.getFlipped();
}
function d1(e, n) {
  return e.direction === n ? e : Gt(Nn(e.focus, n), Nn(e.anchor, n));
}
function va(e, n, t) {
  let r = _t(e, "next");
  for (let s = 0; s < n; s++) {
    const i = r.getAdjacentCaret();
    if (i === null) break;
    r = i;
  }
  return Nn(r, t);
}
function X3(e) {
  const { origin: n, offset: t, direction: r } = e;
  if (t === on(n, r)) return e.getSiblingCaret();
  if (t === on(n, zn(r))) return Zn(e.getSiblingCaret());
  const [s] = n.splitText(t);
  return $(s) || D(281), Nn(_e(s, "next"), r);
}
function Q3(e, n) {
  return !0;
}
function H5(e, { $copyElementNode: n = rt, $splitTextPointCaretNext: t = X3, rootMode: r = "shadowRoot", $shouldSplit: s = Q3, removeEmptyDestination: i = !1 } = {}) {
  if (Dt(e)) return t(e);
  const o = e.getParentCaret(r);
  if (o) {
    const { origin: l } = o;
    if ($t(e)) {
      const u = Zn(o);
      if (i && l.isEmpty()) return l.remove(), u;
      if (!l.canBeEmpty() || !s(l, "first")) return u;
    }
    const c = function(u) {
      const d = [];
      for (let f = u.getAdjacentCaret(); f; f = f.getAdjacentCaret()) d.push(f.origin);
      return d;
    }(e);
    (c.length > 0 || !i && l.canBeEmpty() && s(l, "last")) && o.insert(n(l).splice(0, 0, c));
  }
  return o;
}
function f1(e, n, t) {
  let r = Nn(n, "next");
  Dt(r) && (r.offset === 0 ? r = _e(r.origin, "previous").getFlipped() : r.offset === r.origin.getTextContentSize() && (r = _e(r.origin, "next"))), r.origin.is(e) && (En(r) || D(342, e.getKey(), e.getType()), r = Zn(r)), (e.is(r.getNodeAtCaret()) || e.is(r.getFlipped().getNodeAtCaret())) && e.remove(!0);
  for (let s = r; s; s = H5(s, t)) r = s;
  return Dt(r) && D(283), r.insert(e.isInline() ? Se().append(e) : e), Nn(_e(e.getLatest(), "next"), n.direction);
}
function h1(e, n) {
  if (!n || e === n) return e;
  for (const t in n) if (e[t] !== n[t]) return { ...e, ...n };
  return e;
}
function bn(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
function cn(e, ...n) {
  const t = bn(...n);
  t.length > 0 && e.classList.add(...t);
}
function g1(e, ...n) {
  const t = bn(...n);
  t.length > 0 && e.classList.remove(...t);
}
function Bt(...e) {
  return () => {
    for (let n = e.length - 1; n >= 0; n--) e[n]();
    e.length = 0;
  };
}
const B5 = Cf(null);
function e7(e, n) {
  return { getTheme: function() {
    return n ?? null;
  } };
}
function Jt() {
  const e = yf(B5);
  return e == null && function(n, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), s = new URLSearchParams();
    s.append("code", n);
    for (const i of t) s.append("v", i);
    throw r.search = s.toString(), Error(`Minified Lexical error #${n}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }(8), e;
}
const t7 = it ? xr : we, Mi = { tag: tr };
function n7({ initialConfig: e, children: n }) {
  const t = ut(() => {
    const { theme: r, namespace: s, nodes: i, onError: o, onWarn: l, editorState: c, html: u } = e, d = e7(null, r), f = h5({ editable: e.editable, html: u, namespace: s, nodes: i, onError: (h) => o(h, f), ...l ? { onWarn: (h) => l(h, f) } : {}, theme: r });
    return function(h, g) {
      if (g !== null) {
        if (g === void 0) h.update(() => {
          const p = Fe();
          if (p.isEmpty()) {
            const C = Se();
            p.append(C);
            const m = h.getRootElement(), x = it && m !== null ? wo(m) : null;
            (B() !== null || x !== null && x === m) && C.select();
          }
        }, Mi);
        else if (g !== null) switch (typeof g) {
          case "string": {
            const p = h.parseEditorState(g);
            h.setEditorState(p, Mi);
            break;
          }
          case "object":
            h.setEditorState(g, Mi);
            break;
          case "function":
            h.update(() => {
              Fe().isEmpty() && g(h);
            }, Mi);
        }
      }
    }(f, c), [f, d];
  }, []);
  return t7(() => {
    const r = e.editable, [s] = t;
    s.setEditable(r === void 0 || r);
  }, []), /* @__PURE__ */ a.jsx(B5.Provider, { value: t, children: n });
}
const r7 = it ? xr : we;
function s7(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (n) => e.registerEditableListener(n) };
}
function i7() {
  return function(e) {
    const [n] = Jt(), t = ut(() => e(n), [n, e]), [r, s] = ce(() => t.initialValueFn()), i = Kt(r);
    return r7(() => {
      const { initialValueFn: o, subscribe: l } = t, c = o();
      return i.current !== c && (i.current = c, s(c)), l((u) => {
        i.current = u, s(u);
      });
    }, [t, e]), r;
  }(s7);
}
function o7(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function l7(e) {
  let n = "";
  for (const t in e) t && (n += `${t}: ${e[t]};`);
  return n;
}
function V5(e) {
  const n = De().getElementByKey(e.getKey());
  if (n === null) return null;
  const t = n.ownerDocument.defaultView;
  return t === null ? null : t.getComputedStyle(n);
}
function z5(e) {
  return V5(ze(e) ? e : e.getParentOrThrow());
}
function Fi(e) {
  const n = z5(e);
  return n !== null && n.direction === "rtl";
}
function Z5(e, n, t = "self") {
  const r = e.getStartEndPoints();
  if (n.isSelected(e) && !Tt(n) && r !== null) {
    const [s, i] = r, o = e.isBackward(), l = s.getNode(), c = i.getNode(), u = n.is(l), d = n.is(c);
    if (u || d) {
      const [f, h] = ga(e), g = l.is(c), p = n.is(o ? c : l), C = n.is(o ? l : c);
      let m, x = 0;
      g ? (x = f > h ? h : f, m = f > h ? f : h) : p ? (x = o ? h : f, m = void 0) : C && (x = 0, m = o ? f : h);
      const y = n.__text.slice(x, m);
      y !== n.__text && (t === "clone" && (n = I3(n)), n.__text = y);
    }
  }
  return n;
}
function Oi(e, n) {
  (I(e) ? e.isCollapsed() : $(e) || T(e)) || o7(280);
  const t = Xs(I(e) ? e.style : $(e) ? e.getStyle() : e.getTextStyle()), r = l7(Object.entries(n).reduce((s, [i, o]) => (typeof o == "function" ? s[i] = o(t[i], e) : o === null ? delete s[i] : s[i] = o, s), { ...t }));
  I(e) || $(e) ? e.setStyle(r) : e.setTextStyle(r);
}
function Ii(e, n) {
  if (I(e) && e.isCollapsed()) {
    Oi(e, n);
    const r = e.anchor.getNode();
    T(r) && r.isEmpty() && Oi(r, n);
  }
  a7((r) => {
    Oi(r, n);
  });
  const t = e.getNodes();
  if (t.length > 0) {
    const r = /* @__PURE__ */ new Set();
    for (const s of t) {
      if (!T(s) || !s.canBeEmpty() || s.getChildrenSize() !== 0) continue;
      const i = s.getKey();
      r.has(i) || (r.add(i), Oi(s, n));
    }
  }
}
function a7(e) {
  const n = B();
  if (!n) return;
  const t = /* @__PURE__ */ new Map(), r = (i) => t.get(i.getKey()) || [0, i.getTextContentSize()];
  if (I(n)) for (const i of No(n).getTextSlices()) i && t.set(i.caret.origin.getKey(), i.getSliceIndices());
  const s = n.getNodes();
  for (const i of s) {
    if (!$(i) || !i.canHaveFormat()) continue;
    const [o, l] = r(i);
    l !== o && (Tt(i) || o === 0 && l === i.getTextContentSize() ? e(i) : e(i.splitText(o, l)[o === 0 ? 0 : 1]));
  }
  I(n) && n.anchor.type === "text" && n.focus.type === "text" && n.anchor.key === n.focus.key && c7(n);
}
function c7(e) {
  if (e.isBackward()) {
    const { anchor: n, focus: t } = e, { key: r, offset: s, type: i } = n;
    n.set(t.key, t.offset, t.type), t.set(r, s, i);
  }
}
function u7(e, n) {
  const t = e.getFormatType(), r = e.getIndent();
  t !== n.getFormatType() && n.setFormat(t), r !== n.getIndent() && n.setIndent(r);
}
function d7(e, n, t) {
  let r = bt(e, t);
  if (u1(r)) return !1;
  for (; r; r = r.getParentCaret()) {
    const s = r.getParentAtCaret();
    if (!s || r.getNodeAtCaret()) return !1;
    if (n.is(s)) return !0;
  }
  return !1;
}
function ks(e, n, t = u7) {
  if (!e) return;
  const r = e.getStartEndPoints();
  let s = !1, i = null;
  const o = /* @__PURE__ */ new Map();
  if (r) {
    const [l, c] = r, u = Ee(l.getNode(), nt);
    i = Ee(c.getNode(), nt);
    const d = e.isBackward() ? "previous" : "next";
    s = T(i) && !i.is(u) && function(f, h, g) {
      const p = f.getNode();
      return (!T(p) || !p.isEmpty()) && d7(f, h, g);
    }(c, i, zn(d)), T(u) && o.set(u.getKey(), u), T(i) && !s && o.set(i.getKey(), i);
  }
  for (const l of e.getNodes()) if (T(l) && nt(l)) {
    if (s && l.is(i)) continue;
    o.set(l.getKey(), l);
  } else if (!r) {
    const c = Ee(l, nt);
    T(c) && o.set(c.getKey(), c);
  }
  for (const l of o.values()) {
    const c = n();
    t(l, c), l.replace(c, !0);
  }
}
function W5(e) {
  const n = U5(e);
  return n !== null && n.writingMode === "vertical-rl";
}
function U5(e) {
  const n = e.anchor.getNode();
  return T(n) ? V5(n) : z5(n);
}
function bu(e, n) {
  let t = W5(e) ? !n : n;
  K5(e) && (t = !t);
  const r = bt(e.focus, t ? "previous" : "next");
  if (u1(r)) return !1;
  if (Dt(r) && !Qr(r.origin) && r.origin.isUnmergeable()) {
    const s = r.getNodeAtCaret();
    if ($(s) && !Qr(s)) return !0;
  }
  for (const s of Jo(r)) {
    if ($t(s)) return !s.origin.isInline();
    if (!T(s.origin)) {
      if (de(s.origin)) return !0;
      break;
    }
  }
  return !1;
}
function f7(e, n, t, r) {
  e.modify(n ? "extend" : "move", t, r);
}
function K5(e) {
  const n = U5(e);
  return n !== null && n.direction === "rtl";
}
function vu(e, n, t) {
  const r = K5(e);
  let s;
  s = W5(e) || r ? !t : t, f7(e, n, s, "character");
}
function h7(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function g7(e, n) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof n) return t;
    t = t.getParent();
  }
  return null;
}
function p7(e) {
  const n = Ee(e, (t) => T(t) && !t.isInline());
  return T(n) || h7(4, e.__key), n;
}
function yn(e, n) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === n.name;
}
function Di(e) {
  let n = null;
  if (yn(e, DragEvent) ? n = e.dataTransfer : yn(e, ClipboardEvent) && (n = e.clipboardData), n === null) return [!1, [], !1];
  const t = n.types, r = t.includes("Files"), s = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(n.files), s];
}
function wu(e) {
  const n = B();
  if (!I(n)) return !1;
  const t = /* @__PURE__ */ new Set(), r = n.getNodes();
  for (let s = 0; s < r.length; s++) {
    const i = r[s], o = i.getKey();
    if (t.has(o)) continue;
    const l = Ee(i, (u) => T(u) && !u.isInline());
    if (l === null) continue;
    const c = l.getKey();
    l.canIndent() && !t.has(c) && (t.add(c), e(l));
  }
  return t.size > 0;
}
const m7 = Symbol.for("preact-signals");
function p1() {
  if (nr > 1) return void nr--;
  let e, n = !1;
  for (!function() {
    let t = To;
    for (To = void 0; t !== void 0; ) t.S.v === t.v && (t.S.i = t.i), t = t.o;
  }(); Vs !== void 0; ) {
    let t = Vs;
    for (Vs = void 0, Lo++; t !== void 0; ) {
      const r = t.u;
      if (t.u = void 0, t.f &= -3, !(8 & t.f) && G5(t)) try {
        t.c();
      } catch (s) {
        n || (e = s, n = !0);
      }
      t = r;
    }
  }
  if (Lo = 0, nr--, n) throw e;
}
let ve, Vs;
function Su(e) {
  const n = ve;
  ve = void 0;
  try {
    return e();
  } finally {
    ve = n;
  }
}
let To, nr = 0, Lo = 0, ku = 0, eo = 0;
function Eu(e) {
  if (ve === void 0) return;
  let n = e.n;
  return n === void 0 || n.t !== ve ? (n = { i: 0, S: e, p: ve.s, n: void 0, t: ve, e: void 0, x: void 0, r: n }, ve.s !== void 0 && (ve.s.n = n), ve.s = n, e.n = n, 32 & ve.f && e.S(n), n) : n.i === -1 ? (n.i = 0, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = ve.s, n.n = void 0, ve.s.n = n, ve.s = n), n) : void 0;
}
function ht(e, n) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function m1(e, n) {
  return new ht(e, n);
}
function G5(e) {
  for (let n = e.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Nu(e) {
  for (let n = e.s; n !== void 0; n = n.n) {
    const t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      e.s = n;
      break;
    }
  }
}
function Y5(e) {
  let n, t = e.s;
  for (; t !== void 0; ) {
    const r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Mr(e, n) {
  ht.call(this, void 0), this.x = e, this.s = void 0, this.g = eo - 1, this.f = 4, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function q5(e) {
  const n = e.m;
  if (e.m = void 0, typeof n == "function") {
    nr++;
    const t = ve;
    ve = void 0;
    try {
      n();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, x1(e), r;
    } finally {
      ve = t, p1();
    }
  }
}
function x1(e) {
  for (let n = e.s; n !== void 0; n = n.n) n.S.U(n);
  e.x = void 0, e.s = void 0, q5(e);
}
function x7(e) {
  if (ve !== this) throw new Error("Out-of-order effect");
  Y5(this), ve = e, this.f &= -2, 8 & this.f && x1(this), p1();
}
function Rr(e, n) {
  this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = n == null ? void 0 : n.name;
}
function C1(e, n) {
  const t = new Rr(e, n);
  try {
    t.c();
  } catch (s) {
    throw t.d(), s;
  }
  const r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
function C7(e, n = {}) {
  const t = {};
  for (const r in e) {
    const s = n[r], i = m1(s === void 0 ? e[r] : s);
    t[r] = i;
  }
  return t;
}
ht.prototype.brand = m7, ht.prototype.h = function() {
  return !0;
}, ht.prototype.S = function(e) {
  const n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Su(() => {
    var t;
    (t = this.W) == null || t.call(this);
  }));
}, ht.prototype.U = function(e) {
  if (this.t !== void 0) {
    const n = e.e, t = e.x;
    n !== void 0 && (n.x = t, e.e = void 0), t !== void 0 && (t.e = n, e.x = void 0), e === this.t && (this.t = t, t === void 0 && Su(() => {
      var r;
      (r = this.Z) == null || r.call(this);
    }));
  }
}, ht.prototype.subscribe = function(e) {
  return C1(() => {
    const n = this.value, t = ve;
    ve = void 0;
    try {
      e(n);
    } finally {
      ve = t;
    }
  }, { name: "sub" });
}, ht.prototype.valueOf = function() {
  return this.value;
}, ht.prototype.toString = function() {
  return this.value + "";
}, ht.prototype.toJSON = function() {
  return this.value;
}, ht.prototype.peek = function() {
  const e = ve;
  ve = void 0;
  try {
    return this.value;
  } finally {
    ve = e;
  }
}, Object.defineProperty(ht.prototype, "value", { get() {
  const e = Eu(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set(e) {
  if (e !== this.v) {
    if (Lo > 100) throw new Error("Cycle detected");
    (function(n) {
      nr !== 0 && Lo === 0 && n.l !== ku && (n.l = ku, To = { S: n, v: n.v, i: n.i, o: To });
    })(this), this.v = e, this.i++, eo++, nr++;
    try {
      for (let n = this.t; n !== void 0; n = n.x) n.t.N();
    } finally {
      p1();
    }
  }
} }), Mr.prototype = new ht(), Mr.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === eo)) return !0;
  if (this.g = eo, this.f |= 1, this.i > 0 && !G5(this)) return this.f &= -2, !0;
  const e = ve;
  try {
    Nu(this), ve = this;
    const n = this.x();
    (16 & this.f || this.v !== n || this.i === 0) && (this.v = n, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return ve = e, Y5(this), this.f &= -2, !0;
}, Mr.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (let n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  ht.prototype.S.call(this, e);
}, Mr.prototype.U = function(e) {
  if (this.t !== void 0 && (ht.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (let n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Mr.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let e = this.t; e !== void 0; e = e.x) e.t.N();
  }
}, Object.defineProperty(Mr.prototype, "value", { get() {
  if (1 & this.f) throw new Error("Cycle detected");
  const e = Eu(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} }), Rr.prototype.c = function() {
  const e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    const n = this.x();
    typeof n == "function" && (this.m = n);
  } finally {
    e();
  }
}, Rr.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, q5(this), Nu(this), nr++;
  const e = ve;
  return ve = this, x7.bind(this, e);
}, Rr.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = Vs, Vs = this);
}, Rr.prototype.d = function() {
  this.f |= 8, 1 & this.f || x1(this);
}, Rr.prototype.dispose = function() {
  this.d();
};
function y7(e) {
  return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
function _7(e, n) {
  let t;
  return m1(e(), { unwatched() {
    t && (t(), t = void 0);
  }, watched() {
    this.value = e(), t = n(this);
  } });
}
function Te(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let J5;
try {
  J5 = "0.49.0+prod.esm";
} catch {
}
const b7 = J5 ?? '"<unknown>+source"', v7 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function X5(e, n) {
  if (e && n && !Array.isArray(n) && typeof e == "object" && typeof n == "object") {
    const t = e, r = n;
    for (const s in r) !v7.has(s) && Object.prototype.hasOwnProperty.call(r, s) && (t[s] = X5(t[s], r[s]));
    return e;
  }
  return n;
}
const y1 = 0, wa = 1, Q5 = 2, Tl = 3, $i = 4, Fr = 5, Ll = 6, Es = 7;
function jl(e) {
  return e.id === y1;
}
function e2(e) {
  return e.id === Q5;
}
function w7(e) {
  return function(n) {
    return n.id === wa;
  }(e) || Te(305, String(e.id), String(wa)), Object.assign(e, { id: Q5 });
}
const S7 = /* @__PURE__ */ new Set();
let k7 = class {
  constructor(n, t) {
    M(this, "builder");
    M(this, "configs");
    M(this, "_dependency");
    M(this, "_peerNameSet");
    M(this, "extension");
    M(this, "state");
    M(this, "_signal");
    this.builder = n, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: y1 };
  }
  mergeConfigs() {
    let n = this.extension.config || {};
    const t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : h1;
    for (const r of this.configs) n = t(n, r);
    return n;
  }
  init(n) {
    const t = this.state;
    e2(t) || Te(306, String(t.id));
    const r = { getDependency: this.getInitDependency.bind(this), getDirectDependentNames: this.getDirectDependentNames.bind(this), getPeer: this.getInitPeer.bind(this), getPeerNameSet: this.getPeerNameSet.bind(this) }, s = { ...r, getDependency: this.getDependency.bind(this), getInitResult: this.getInitResult.bind(this), getPeer: this.getPeer.bind(this) }, i = function(l, c, u) {
      return Object.assign(l, { config: c, id: Tl, registerState: u });
    }(t, this.mergeConfigs(), r);
    let o;
    this.state = i, this.extension.init && (o = this.extension.init(n, i.config, r)), this.state = function(l, c, u) {
      return Object.assign(l, { id: $i, initResult: c, registerState: u });
    }(i, o, s);
  }
  build(n) {
    const t = this.state;
    let r;
    t.id !== $i && Te(307, String(t.id), String(Fr)), this.extension.build && (r = this.extension.build(n, t.config, t.registerState));
    const s = { ...t.registerState, getOutput: () => r, getSignal: this.getSignal.bind(this) };
    this.state = function(i, o, l) {
      return Object.assign(i, { id: Fr, output: o, registerState: l });
    }(t, r, s);
  }
  register(n, t) {
    this._signal = t;
    const r = this.state;
    r.id !== Fr && Te(308, String(r.id), String(Fr));
    const s = this.extension.register && this.extension.register(n, r.config, r.registerState);
    return this.state = function(i) {
      return Object.assign(i, { id: Ll });
    }(r), () => {
      const i = this.state;
      i.id !== Es && Te(309, String(r.id), String(Es)), this.state = function(o) {
        return Object.assign(o, { id: Fr });
      }(i), s && s();
    };
  }
  afterRegistration(n) {
    const t = this.state;
    let r;
    return t.id !== Ll && Te(310, String(t.id), String(Ll)), this.extension.afterRegistration && (r = this.extension.afterRegistration(n, t.config, t.registerState)), this.state = function(s) {
      return Object.assign(s, { id: Es });
    }(t), r;
  }
  getSignal() {
    return this._signal === void 0 && Te(311), this._signal;
  }
  getInitResult() {
    this.extension.init === void 0 && Te(312, this.extension.name);
    const n = this.state;
    return function(t) {
      return t.id >= $i;
    }(n) || Te(313, String(n.id), String($i)), n.initResult;
  }
  getInitPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionInitDependency() : void 0;
  }
  getExtensionInitDependency() {
    const n = this.state;
    return function(t) {
      return t.id >= Tl;
    }(n) || Te(314, String(n.id), String(Tl)), { config: n.config };
  }
  getPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionDependency() : void 0;
  }
  getInitDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && Te(315, this.extension.name, n.name), t.getExtensionInitDependency();
  }
  getDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && Te(315, this.extension.name, n.name), t.getExtensionDependency();
  }
  getState() {
    const n = this.state;
    return function(t) {
      return t.id >= Es;
    }(n) || Te(316, String(n.id), String(Es)), n;
  }
  getDirectDependentNames() {
    return this.builder.incomingEdges.get(this.extension.name) || S7;
  }
  getPeerNameSet() {
    let n = this._peerNameSet;
    return n || (n = new Set((this.extension.peerDependencies || []).map(([t]) => t)), this._peerNameSet = n), n;
  }
  getExtensionDependency() {
    if (!this._dependency) {
      const n = this.state;
      (function(t) {
        return t.id >= Fr;
      })(n) || Te(317, this.extension.name), this._dependency = { config: n.config, init: n.initResult, output: n.output };
    }
    return this._dependency;
  }
};
const Tu = { tag: tr };
function E7() {
  const e = Fe();
  e.isEmpty() && e.append(Se());
}
const N7 = { config: { setOptions: Tu, updateOptions: Tu }, init: ({ $initialEditorState: e = E7 }) => ({ $initialEditorState: e, initialized: !1 }), afterRegistration(e, { updateOptions: n, setOptions: t }, r) {
  const s = r.getInitResult();
  if (!s.initialized) {
    s.initialized = !0;
    const { $initialEditorState: i } = s;
    if (a3(i)) e.setEditorState(i, t);
    else if (typeof i == "function") e.update(() => {
      i(e);
    }, n);
    else if (i && (typeof i == "string" || typeof i == "object")) {
      const o = e.parseEditorState(i);
      e.setEditorState(o, t);
    }
  }
  return () => {
  };
}, name: "@lexical/extension/InitialState", nodes: [Zo, wn, Wo, Po, Uo] }, Lu = Symbol.for("@lexical/extension/LexicalBuilder");
function ju() {
}
function T7(e) {
  throw e;
}
function Ri(e) {
  return Array.isArray(e) ? e : [e];
}
const Al = b7;
class Yr {
  constructor(n) {
    M(this, "roots");
    M(this, "extensionNameMap");
    M(this, "outgoingConfigEdges");
    M(this, "incomingEdges");
    M(this, "conflicts");
    M(this, "_sortedExtensionReps");
    M(this, "PACKAGE_VERSION");
    this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = Al, this.roots = n;
    for (const t of n) this.addExtension(t);
  }
  static fromExtensions(n) {
    const t = [Ri(N7)];
    for (const r of n) t.push(Ri(r));
    return new Yr(t);
  }
  static maybeFromEditor(n) {
    const t = n[Lu];
    return t && (t.PACKAGE_VERSION !== Al && Te(292, t.PACKAGE_VERSION, Al), t instanceof Yr || Te(293)), t;
  }
  static fromEditor(n) {
    const t = Yr.maybeFromEditor(n);
    return t === void 0 && Te(294), t;
  }
  constructEditor() {
    const { $initialEditorState: n, onError: t, onWarn: r, ...s } = this.buildCreateEditorArgs(), i = Object.assign(h5({ ...s, ...t ? { onError: (o) => {
      t(o, i);
    } } : {}, ...r ? { onWarn: (o) => {
      r(o, i);
    } } : {} }), { [Lu]: this });
    for (const o of this.sortedExtensionReps()) o.build(i);
    return i;
  }
  buildEditor() {
    let n = ju;
    function t() {
      try {
        n();
      } finally {
        n = ju;
      }
    }
    const r = Object.assign(this.constructEditor(), { dispose: t, [Symbol.dispose]: t });
    return n = Bt(this.registerEditor(r), () => r.setRootElement(null)), r;
  }
  hasExtensionByName(n) {
    return this.extensionNameMap.has(n);
  }
  getExtensionRep(n) {
    const t = this.extensionNameMap.get(n.name);
    if (t) return t.extension !== n && Te(295, n.name), t;
  }
  addEdge(n, t, r) {
    const s = this.outgoingConfigEdges.get(n);
    s ? s.set(t, r) : this.outgoingConfigEdges.set(n, /* @__PURE__ */ new Map([[t, r]]));
    const i = this.incomingEdges.get(t);
    i ? i.add(n) : this.incomingEdges.set(t, /* @__PURE__ */ new Set([n]));
  }
  addExtension(n) {
    this._sortedExtensionReps !== void 0 && Te(296);
    const t = Ri(n), [r] = t;
    typeof r.name != "string" && Te(297, typeof r.name);
    let s = this.extensionNameMap.get(r.name);
    if (s !== void 0 && s.extension !== r && Te(298, r.name), !s) {
      s = new k7(this, r), this.extensionNameMap.set(r.name, s);
      const i = this.conflicts.get(r.name);
      typeof i == "string" && Te(299, r.name, i);
      for (const o of r.conflictsWith || []) this.extensionNameMap.has(o) && Te(299, r.name, o), this.conflicts.set(o, r.name);
      for (const o of r.dependencies || []) {
        const l = Ri(o);
        this.addEdge(r.name, l[0].name, l.slice(1)), this.addExtension(l);
      }
      for (const [o, l] of r.peerDependencies || []) this.addEdge(r.name, o, l ? [l] : []);
    }
  }
  sortedExtensionReps() {
    if (this._sortedExtensionReps) return this._sortedExtensionReps;
    const n = [], t = (r, s) => {
      let i = r.state;
      if (e2(i)) return;
      const o = r.extension.name;
      var l;
      jl(i) || Te(300, o, s || "[unknown]"), jl(l = i) || Te(304, String(l.id), String(y1)), i = Object.assign(l, { id: wa }), r.state = i;
      const c = this.outgoingConfigEdges.get(o);
      if (c) for (const u of c.keys()) {
        const d = this.extensionNameMap.get(u);
        d && t(d, o);
      }
      i = w7(i), r.state = i, n.push(r);
    };
    for (const r of this.extensionNameMap.values()) jl(r.state) && t(r);
    for (const r of n) for (const [s, i] of this.outgoingConfigEdges.get(r.extension.name) || []) if (i.length > 0) {
      const o = this.extensionNameMap.get(s);
      if (o) for (const l of i) o.configs.add(l);
    }
    for (const [r, ...s] of this.roots) if (s.length > 0) {
      const i = this.extensionNameMap.get(r.name);
      i === void 0 && Te(301, r.name);
      for (const o of s) i.configs.add(o);
    }
    return this._sortedExtensionReps = n, this._sortedExtensionReps;
  }
  registerEditor(n) {
    const t = this.sortedExtensionReps(), r = new AbortController(), s = [() => r.abort()], i = r.signal;
    for (const o of t) {
      const l = o.register(n, i);
      l && s.push(l);
    }
    for (const o of t) {
      const l = o.afterRegistration(n);
      l && s.push(l);
    }
    return Bt(...s);
  }
  buildCreateEditorArgs() {
    const n = {}, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = {}, o = {}, l = this.sortedExtensionReps();
    for (const d of l) {
      const { extension: f } = d;
      if (f.onError !== void 0 && (n.onError = f.onError), f.onWarn !== void 0 && (n.onWarn = f.onWarn), f.disableEvents !== void 0 && (n.disableEvents = f.disableEvents), f.parentEditor !== void 0 && (n.parentEditor = f.parentEditor), f.editable !== void 0 && (n.editable = f.editable), f.namespace !== void 0 && (n.namespace = f.namespace), f.$initialEditorState !== void 0 && (n.$initialEditorState = f.$initialEditorState), f.nodes) for (const h of y7(f)) {
        if (typeof h != "function") {
          const g = r.get(h.replace);
          g && Te(302, f.name, h.replace.name, g.extension.name), r.set(h.replace, d);
        }
        t.add(h);
      }
      if (f.html) {
        if (f.html.export) for (const [h, g] of f.html.export.entries()) s.set(h, g);
        f.html.import && Object.assign(i, f.html.import);
      }
      f.theme && X5(o, f.theme);
    }
    Object.keys(o).length > 0 && (n.theme = o), t.size && (n.nodes = [...t]);
    const c = Object.keys(i).length > 0, u = s.size > 0;
    (c || u) && (n.html = {}, c && (n.html.import = i), u && (n.html.export = s));
    for (const d of l) d.init(n);
    return n.onError || (n.onError = T7), n;
  }
}
function fi(e, n) {
  const t = Yr.maybeFromEditor(e);
  if (!t) return;
  const r = t.extensionNameMap.get(n);
  return r ? r.getExtensionDependency() : void 0;
}
function L7(e) {
  return fi(De(), e);
}
class t2 extends zo {
  $config() {
    return this.config("horizontalrule", { importDOM: { hr: () => ({ conversion: j7, priority: 0 }) } });
  }
  exportDOM() {
    return { element: je().createElement("hr") };
  }
  createDOM(n) {
    const t = je().createElement("hr");
    return cn(t, n.theme.hr), t;
  }
  getTextContent() {
    return `
`;
  }
  isInline() {
    return !1;
  }
  updateDOM() {
    return !1;
  }
}
function j7() {
  return { node: n2() };
}
function n2() {
  return M5(t2);
}
const A7 = { name: "@lexical/react/ReactProvider" };
function M7() {
  return Fe().getTextContent();
}
function F7(e, n = !0) {
  if (e) return !1;
  let t = M7();
  return n && (t = t.trim()), t === "";
}
function O7(e) {
  if (!F7(e, !1)) return !1;
  const n = Fe().getChildren(), t = n.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const s = n[r];
    if (de(s)) return !1;
    if (T(s)) {
      if (!ci(s) || s.__indent !== 0) return !1;
      const i = s.getChildren(), o = i.length;
      for (let l = 0; l < o; l++) {
        const c = i[r];
        if (!$(c)) return !1;
      }
    }
  }
  return !0;
}
function r2(e) {
  return () => O7(e);
}
const I7 = { bold: "bold", italic: "italic", strikeThrough: "strikethrough", subscript: "subscript", superscript: "superscript", underline: "underline" }, jo = Symbol.for("@lexical/dragon/WindowState");
function D7(e, n, t) {
  const r = function(s) {
    let i = s[jo];
    return i === void 0 && (i = { dispose: () => {
    }, editors: /* @__PURE__ */ new Map(), installs: /* @__PURE__ */ new Set() }, s[jo] = i), i;
  }(e);
  if (r.installs.size === 0) {
    const s = P7.bind(e);
    e.addEventListener("message", s, !0), r.dispose = () => {
      e.removeEventListener("message", s, !0);
    };
  }
  if (r.installs.add(n), t) {
    const s = r.editors.get(t) || /* @__PURE__ */ new Set();
    s.add(n), r.editors.set(t, s);
  }
  return $7.bind(null, e, r, n, t);
}
function $7(e, n, t, r) {
  if (r) {
    const s = n.editors.get(r);
    s && s.delete(t) && s.size === 0 && n.editors.delete(r);
  }
  n.installs.delete(t) && n.installs.size === 0 && (n.dispose(), delete e[jo]);
}
function Au(e) {
  return e && e.ownerDocument.defaultView;
}
function R7(e) {
  const n = _7(() => Au(e.getRootElement()), (t) => e.registerRootListener((r) => {
    t.value = Au(r);
  }));
  return C1(() => {
    const t = n.value;
    if (t) return D7(t, Symbol("@lexical/dragon/editorInstall"), e);
  });
}
function P7(e) {
  if (e.origin !== this.location.origin) return;
  const n = function(r) {
    const s = r[jo];
    if (s === void 0) return null;
    const i = as(ss(r.document));
    return di(i) && s.editors.has(i) ? i : null;
  }(this);
  if (n === null) return;
  const t = e.data;
  if (typeof t == "string") {
    let r;
    try {
      r = JSON.parse(t);
    } catch {
      return;
    }
    if (r && r.protocol === "nuanria_messaging" && r.type === "request") {
      const s = r.payload;
      if (s && s.functionId === "makeChanges") {
        const i = s.args;
        if (Array.isArray(i)) {
          const [o, l, c, u, d, f] = i;
          if (![o, l, u, d].every(Number.isFinite) || typeof c != "string" && c !== -1) return;
          n.update(() => {
            const h = B();
            if (I(h)) {
              const g = h.anchor;
              let p = g.getNode(), C = 0, m = 0;
              if ($(p) && o >= 0 && l >= 0 && (C = o, m = o + l, h.setTextNodeRange(p, C, p, m)), typeof c != "string" || C === m && c === "" || (h.insertRawText(c), p = g.getNode()), $(p)) {
                const x = p.getTextContentSize();
                C = Math.min(Math.max(u, 0), x), m = u < 0 || d < 0 ? C : Math.min(u + d, x), h.setTextNodeRange(p, C, p, m);
              }
              if (typeof f == "string" && d > 0 && !h.isCollapsed()) {
                const x = I7[f];
                x !== void 0 && h.formatText(x);
              }
              e.stopImmediatePropagation();
            }
          });
        }
      }
    }
  }
}
function ds(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
let qr;
function s2(e, n) {
  const { key: t } = n;
  return e && t in e ? e[t] : n.defaultValue;
}
function i2(e) {
  return qr && qr.editor === e ? qr : void 0;
}
function H7(e, n) {
  if ("cfg" in n) {
    const { cfg: t, updater: r } = n;
    return [t, r(s2(e, t))];
  }
  return n;
}
function B7(e, n) {
  let t = n;
  for (const r of e) {
    const [s, i] = H7(t, r), o = s.key;
    if (t === n && s2(t, s) === i) continue;
    const l = t === n || t === void 0 ? V7(n) : t;
    l[o] = i, t = l;
  }
  return t;
}
function V7(e) {
  return Object.create(e || null);
}
function o2(e, n) {
  return [e, n];
}
function z7(e, n, t, r = De()) {
  const s = qr, i = i2(r);
  try {
    return qr = { ...i, editor: r, [e]: n }, t();
  } finally {
    qr = s;
  }
}
function Z7(e, n = () => {
}) {
  return (t, r = De()) => (s) => {
    const i = i2(r), o = i && i[e], l = B7(t, o || n(r));
    return l && l !== o ? z7(e, l, s, r) : s();
  };
}
function l2(e, n, t, r) {
  return Object.assign(ed(Symbol(n), { isEqual: r, parse: t }), { [e]: !0 });
}
function W7(e) {
  if (!_r(e)) return;
  const n = e;
  if (n.querySelector("style") === null) return;
  const t = /* @__PURE__ */ new Map();
  function r(s) {
    let i = t.get(s);
    if (i === void 0) {
      i = /* @__PURE__ */ new Set();
      for (let o = 0; o < s.style.length; o++) i.add(s.style[o]);
      t.set(s, i);
    }
    return i;
  }
  try {
    for (const s of Array.from(n.styleSheets)) {
      let i;
      try {
        i = s.cssRules;
      } catch {
        continue;
      }
      for (const o of Array.from(i)) {
        if (!yn(o, CSSStyleRule)) continue;
        let l;
        try {
          l = n.querySelectorAll(o.selectorText);
        } catch {
          continue;
        }
        for (const c of Array.from(l)) {
          if (!oe(c)) continue;
          const u = r(c);
          for (let d = 0; d < o.style.length; d++) {
            const f = o.style[d];
            u.has(f) || c.style.setProperty(f, o.style.getPropertyValue(f), o.style.getPropertyPriority(f));
          }
        }
      }
    }
  } catch {
  }
}
const a2 = "@lexical/html/DOM", c2 = Symbol.for("@lexical/html/DOMExportContext"), U7 = Symbol.for("@lexical/html/DOMImportContext");
function K7(e, n, t) {
  return l2(c2, e, n, t);
}
const G7 = /* @__PURE__ */ K7("isExport", Boolean);
function Y7(e) {
  const n = fi(e, a2);
  return n ? n.output.defaults : void 0;
}
function q7(e) {
  const n = fi(e, a2);
  return n ? n.output.runtime : void 0;
}
function J7(e = De()) {
  const n = q7(e);
  return n ? n.getSessionConfig() : Go(e);
}
const X7 = Z7(c2, Y7), Qo = Symbol.for("@lexical/html/SelectorImpl");
function si(e, n) {
  const t = { kind: "element", predicate: (r = n, r.length === 0 ? oe : r.length === 1 ? r[0] : (i, o) => {
    for (const l of r) if (!l(i, o)) return !1;
    return !0;
  }), tags: e };
  var r;
  const s = (i) => si(e, [...n, i]);
  return { [Qo]: t, attr: (i, o, l) => s(Sa(i, o, l)), classAll: (...i) => s(d2(i)), classAny: (...i) => s(function(o) {
    const l = u2(o);
    return l.length === 0 ? () => !1 : (c) => {
      if (!oe(c)) return !1;
      const u = c.classList;
      for (const d of l) if (u.contains(d)) return !0;
      return !1;
    };
  }(i)), styleAny: (i, o, l) => s(function(c, u, d) {
    if (typeof u == "string") return (f) => oe(f) && f.style.getPropertyValue(c) === u;
    if (u instanceof RegExp) {
      const f = d && d.capture, h = u;
      return (g, p) => {
        if (!oe(g)) return !1;
        const C = g.style.getPropertyValue(c);
        if (!C) return !1;
        const m = C.match(h);
        return m !== null && (f !== void 0 && (p[f] = m), !0);
      };
    }
    ds(362, JSON.stringify(c));
  }(i, o, l)) };
}
function u2(e) {
  const n = [];
  for (const t of e) t && n.push(t);
  return n;
}
function d2(e) {
  const n = u2(e);
  return n.length === 0 ? () => !0 : (t) => {
    if (!oe(t)) return !1;
    const r = t.classList;
    for (const s of n) if (!r.contains(s)) return !1;
    return !0;
  };
}
function Sa(e, n, t) {
  if (n === !0) return (r) => oe(r) && r.hasAttribute(e);
  if (typeof n == "string") return (r) => oe(r) && r.getAttribute(e) === n;
  if (n instanceof RegExp) {
    const r = t && t.capture, s = n;
    return (i, o) => {
      if (!oe(i)) return !1;
      const l = i.getAttribute(e);
      if (l == null) return !1;
      const c = l.match(s);
      return c !== null && (r !== void 0 && (o[r] = c), !0);
    };
  }
  ds(361, JSON.stringify(e));
}
const Q7 = { kind: "text", predicate: vt, tags: /* @__PURE__ */ new Set() }, eg = { [Qo]: Q7 }, tg = { kind: "comment", predicate: (e) => e.nodeType === 8, tags: /* @__PURE__ */ new Set() }, ng = { [Qo]: tg }, Br = { any: () => si(/* @__PURE__ */ new Set(), []), comment: () => ng, tag(...e) {
  e.length > 0 || ds(363);
  const n = /* @__PURE__ */ new Set();
  for (const t of e) n.add(t.toUpperCase());
  return si(n, []);
}, text: () => eg };
function f2(e, n) {
  return oe(e) && e.nodeName === n.toUpperCase();
}
const h2 = /[A-Za-z0-9_-]/;
class rg {
  constructor(n, t) {
    this.source = n, this.pos = t;
  }
  peek(n = 0) {
    return this.source[this.pos + n] || "";
  }
  consume() {
    return this.source[this.pos++] || "";
  }
  eof() {
    return this.pos >= this.source.length;
  }
  skipWhitespace() {
    for (; !this.eof() && /\s/.test(this.peek()); ) this.pos++;
  }
  readIdent() {
    const n = this.pos;
    for (; !this.eof() && h2.test(this.peek()); ) this.pos++;
    return this.source.slice(n, this.pos);
  }
  readQuoted() {
    const n = this.consume();
    this.assert(n === '"' || n === "'", "expected quote");
    const t = this.pos;
    for (; !this.eof() && this.peek() !== n; ) this.peek() === "\\" ? this.pos += 2 : this.pos++;
    this.assert(!this.eof(), "unterminated string");
    const r = this.source.slice(t, this.pos);
    return this.pos++, r.replace(/\\(.)/g, "$1");
  }
  assert(n, t) {
    n || ds(364, String(this.pos + 1), t, this.source);
  }
}
function sg(e) {
  const n = /* @__PURE__ */ new Set(), t = [], r = [];
  if (e.skipWhitespace(), e.peek() === "*") e.consume();
  else if (h2.test(e.peek())) {
    const s = e.readIdent();
    s && n.add(s.toUpperCase());
  }
  for (; !e.eof(); ) {
    const s = e.peek();
    if (s === ".") {
      e.consume();
      const i = e.readIdent();
      e.assert(i !== "", 'expected class name after "."'), r.push(i);
    } else if (s === "#") {
      e.consume();
      const i = e.readIdent();
      e.assert(i !== "", 'expected id after "#"'), t.push(Sa("id", i));
    } else {
      if (s !== "[") break;
      {
        e.consume(), e.skipWhitespace();
        const i = e.readIdent();
        e.assert(i !== "", 'expected attribute name after "["'), e.skipWhitespace();
        let o = !0;
        if (e.peek() === "=") {
          e.consume(), e.skipWhitespace();
          const l = e.peek();
          l === '"' || l === "'" ? o = e.readQuoted() : (o = e.readIdent(), e.assert(o !== "", "expected attribute value")), e.skipWhitespace();
        }
        e.assert(e.peek() === "]", 'expected "]"'), e.consume(), t.push(Sa(i, o));
      }
    }
  }
  return r.length > 0 && t.push(d2(r)), { predicates: t, tags: n };
}
function ig(e) {
  const n = new rg(e, 0), t = [];
  for (; ; ) {
    const s = sg(n);
    if (t.push(s), n.skipWhitespace(), n.eof()) break;
    n.assert(n.peek() === ",", 'expected "," (selector lists are the only supported combinator)'), n.consume(), n.skipWhitespace();
  }
  if (t.length === 1) return si(t[0].tags, t[0].predicates);
  const r = /* @__PURE__ */ new Set();
  if (t.every((s) => s.tags.size > 0)) for (const s of t) for (const i of s.tags) r.add(i);
  return si(r, [(s, i) => {
    for (const o of t) {
      const l = s.nodeName;
      if (o.tags.size > 0 && !o.tags.has(l)) continue;
      let c = !0;
      for (const u of o.predicates) if (!u(s, i)) {
        c = !1;
        break;
      }
      if (c) return !0;
    }
    return !1;
  }]);
}
function _1(e, n, t) {
  return l2(U7, e, n, t);
}
const ka = /* @__PURE__ */ _1("textFormat", () => 0), og = /* @__PURE__ */ _1("textStyle", () => ({}));
function lg(e) {
  if (!oe(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const n = e.style.whiteSpace;
  return typeof n == "string" && n.startsWith("pre");
}
function ag(e) {
  if (vt(e)) return !0;
  if (!oe(e)) return !1;
  const n = e.style.display;
  return n ? n.startsWith("inline") : !is(e) && So(e);
}
const cg = /* @__PURE__ */ _1("whitespaceConfig", () => ({ isInline: ag, preservesWhitespace: lg }));
function b1(e) {
  return es(e) || de(e) && !e.isInline();
}
function g2(e, n) {
  const t = [];
  let r = [];
  const s = () => {
    r.length !== 0 && (t.push(n().splice(0, 0, r)), r = []);
  };
  for (const i of e) if (b1(i)) {
    if (s(), T(i)) {
      const o = g2(i.getChildren(), n);
      i.splice(0, i.getChildrenSize(), o);
    }
    t.push(i);
  } else r.push(i);
  return s(), t;
}
function p2(e, n) {
  if (!oe(n)) return e;
  const t = n.style.textAlign;
  if (!v1(t)) return e;
  for (const r of e) es(r) && r.getFormatType() === "" && r.setFormat(t);
  return e;
}
function ug(e, n, t) {
  e.length === 1 && Rt(e[0]) && (e = []);
  const r = Se();
  if (oe(t)) {
    const s = t.style.textAlign;
    v1(s) && r.setFormat(s);
  }
  return [r.splice(0, 0, e)];
}
const m2 = { $accepts: b1, $packageRun: ug, name: "BlockSchema" }, wr = Br, dg = /* @__PURE__ */ new Set(["center", "end", "justify", "left", "right", "start"]);
function v1(e) {
  return dg.has(e);
}
const fg = { B: { fontWeight: "bold" }, EM: { fontStyle: "italic" }, I: { fontStyle: "italic" }, S: { textDecoration: "line-through" }, STRONG: { fontWeight: "bold" }, SUB: { verticalAlign: "sub" }, SUP: { verticalAlign: "super" }, U: { textDecoration: "underline" } }, hg = { CODE: Q8, MARK: Pa }, gg = /* @__PURE__ */ new Set(["font-weight", "font-style", "text-decoration", "vertical-align"]), pg = { $import: (e, n) => {
  const t = e.get(ka), r = fg[n.nodeName], s = function(h) {
    return { fontStyle: h.style.fontStyle, fontWeight: h.style.fontWeight, textDecoration: h.style.textDecoration, verticalAlign: h.style.verticalAlign };
  }(n), i = r ? (o = r, { fontStyle: (l = s).fontStyle || o.fontStyle, fontWeight: l.fontWeight || o.fontWeight, textDecoration: l.textDecoration || o.textDecoration, verticalAlign: l.verticalAlign || o.verticalAlign }) : s;
  var o, l;
  let c = (u = t, d = function(h) {
    let g = 0, p = 0;
    const { fontWeight: C, fontStyle: m, textDecoration: x, verticalAlign: y } = h;
    if (C === "700" || C === "bold" ? g |= lc : C !== "normal" && C !== "400" || (p |= lc), m === "italic" ? g |= ac : m === "normal" && (p |= ac), x) {
      const _ = x.split(" ");
      _.includes("underline") && (g |= uc), _.includes("line-through") && (g |= cc), _.includes("none") && (p |= uc | cc);
    }
    return y === "sub" ? (g |= gl, p |= pl) : y === "super" ? (g |= pl, p |= gl) : y === "baseline" && (p |= gl | pl), { clear: p, set: g };
  }(i), u & ~d.clear | d.set);
  var u, d;
  const f = hg[n.nodeName];
  return f && (c |= f), c === t ? e.$importChildren(n) : e.$importChildren(n, { context: [o2(ka, c)] });
}, match: wr.tag("b", "strong", "em", "i", "code", "mark", "s", "sub", "sup", "u", "span"), name: "@lexical/html/inline-format" };
function Mu(e, n, t) {
  let r = e;
  for (; ; ) {
    let s = null;
    for (; (s = n ? r.nextSibling : r.previousSibling) === null; ) {
      const o = r.parentNode;
      if (o === null) return null;
      r = o;
    }
    if (r = s, !t.isInline(r)) return null;
    let i = r;
    for (; (i = n ? r.firstChild : r.lastChild) !== null; ) r = i;
    if (vt(r)) return r;
    if (r.nodeName === "BR") return null;
  }
}
function Fu(e, n) {
  return n !== 0 && $(e) ? e.setFormat(n) : e;
}
function Ou(e, n) {
  if ($(e)) {
    const t = function(r) {
      let s = "";
      for (const i in r) gg.has(i) || (s += `${i}: ${r[i]}; `);
      return s.trimEnd();
    }(n);
    t !== "" && e.setStyle(t);
  }
  return e;
}
const mg = { $import: (e, n) => {
  const t = e.get(ka), r = e.get(og), s = e.get(cg);
  if (function(l, c) {
    let u = l.parentNode;
    for (; u !== null; ) {
      if (c.preservesWhitespace(u)) return !0;
      u = u.parentNode;
    }
    return !1;
  }(n, s)) {
    const l = Qs(n.textContent || "");
    for (const c of l) Fu(c, t), Ou(c, r);
    return l;
  }
  const i = function(l, c) {
    let u = (l.textContent || "").replace(/\r/g, "").replace(/[ \t\n]+/g, " ");
    if (u.length === 0) return "";
    if (u[0] === " ") {
      let d = l, f = !0;
      for (; d !== null && (d = Mu(d, !1, c)) !== null; ) {
        const h = d.textContent || "";
        if (h.length > 0) {
          /[ \t\n]$/.test(h) && (u = u.slice(1)), f = !1;
          break;
        }
      }
      f && (u = u.slice(1));
    }
    if (u.length > 0 && u[u.length - 1] === " ") {
      let d = l, f = !0;
      for (; d !== null && (d = Mu(d, !0, c)) !== null; ) if ((d.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        f = !1;
        break;
      }
      f && (u = u.slice(0, -1));
    }
    return u;
  }(n, s);
  if (i === "") return [];
  const o = pt(i);
  return Fu(o, t), Ou(o, r), [o];
}, match: wr.text(), name: "@lexical/html/#text" }, xg = { $import: () => [], match: wr.tag("script", "style"), name: "@lexical/html/script-style-ignore" }, Cg = { $import: (e, n) => u5(n) || d5(n) ? [] : [Sn()], match: wr.tag("br"), name: "@lexical/html/br" }, yg = { $import: (e, n) => {
  const t = Se();
  if (dn(t, n), vr(n, t), t.getFormatType() === "") {
    const r = n.getAttribute("align");
    r && v1(r) && t.setFormat(r);
  }
  return Vt(t, n), [t.splice(0, 0, e.$importChildren(n))];
}, match: wr.tag("p"), name: "@lexical/html/p" }, _g = { $import: (e, n, t) => De().hasNode(t2) ? [n2()] : t(), match: wr.tag("hr"), name: "@lexical/html/hr" };
wr.any();
function bg(e, n) {
  const t = [];
  let r = 0, s = 0;
  for (; r < e.length && s < n.length; ) e[r] <= n[s] ? t.push(e[r++]) : t.push(n[s++]);
  for (; r < e.length; ) t.push(e[r++]);
  for (; s < n.length; ) t.push(n[s++]);
  return t;
}
function vg(e) {
  const n = [], t = /* @__PURE__ */ new Map(), r = [], s = [], i = [], o = /* @__PURE__ */ new Set();
  e.forEach((c, u) => {
    const d = function(h) {
      const g = h[Qo];
      return g === void 0 && ds(360), g;
    }(c.match), f = c.name || function(h, g) {
      return h.kind === "text" ? `#text@${g}` : h.kind === "comment" ? `#comment@${g}` : h.tags.size === 0 ? `*@${g}` : `${Array.from(h.tags).join(",").toLowerCase()}@${g}`;
    }(d, u);
    if (c.name && o.add(c.name), n.push({ $import: c.$import, name: f, predicate: d.predicate }), d.kind === "text") s.push(u);
    else if (d.kind === "comment") i.push(u);
    else if (d.tags.size === 0) r.push(u);
    else for (const h of d.tags) {
      let g = t.get(h);
      g || (g = [], t.set(h, g)), g.push(u);
    }
  });
  const l = /* @__PURE__ */ new Map();
  if (r.length === 0) for (const [c, u] of t) l.set(c, u);
  else for (const [c, u] of t) l.set(c, bg(u, r));
  return { byTag: l, commentIndices: i, rules: n, textIndices: s, wildcardIndices: r };
}
function wg(e) {
  const n = [];
  for (const t of e) if (Sg(t)) for (const r of t.rules) n.push(r);
  else n.push(t);
  return n;
}
function Sg(e) {
  return typeof e == "object" && e !== null && "__type" in e && e.__type === "CompiledOverlayRules";
}
function x2(e) {
  const n = wg(e);
  return { __type: "CompiledOverlayRules", dispatch: vg(n), rules: n };
}
Br.any();
const Qe = { any: Br.any, comment: Br.comment, css: ig, tag: Br.tag, text: Br.text }, C2 = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function y2(e, n) {
  W7(n);
  const t = _r(n) ? n.body.childNodes : n.childNodes, r = [], s = [];
  for (const i of t) if (!C2.has(i.nodeName)) {
    const o = v2(i, e, s, !1);
    if (o !== null) for (const l of o) r.push(l);
  }
  return function(i) {
    for (const o of i) o.getParent() && o.getNextSibling() instanceof Ka && o.insertAfter(Sn());
    for (const o of i) {
      const l = o.getParent();
      l && l.splice(o.getIndexWithinParent(), 1, o.getChildren());
    }
  }(s), r;
}
function kg(e, n = null, t = De()) {
  return X7([o2(G7, !0)], t)(() => {
    const r = Fe(), s = J7(t), i = I(n) ? Yo(n.anchor.getNode()) : null, o = e.append.bind(e);
    for (const l of (T(i) ? i : r).getChildren()) b2(t, l, o, n, s);
    return e;
  });
}
function _2(e, n = null) {
  return (typeof document > "u" || typeof window > "u" && global.window === void 0) && ds(338), s3(e), kg(je().createElement("div"), n, e).innerHTML;
}
function b2(e, n, t, r = null, s = Go(e)) {
  let i = s.$shouldInclude(n, r, e);
  const o = s.$shouldExclude(n, r, e);
  let l = n;
  r !== null && $(n) && (l = Z5(r, n, "clone"));
  const c = s.$exportDOM(l, e), { element: u, after: d, append: f, $getChildNodes: h } = c;
  if (!u) return !1;
  const g = je().createDocumentFragment(), p = h ? h() : T(l) ? l.getChildren() : [], C = i && Ne(r) && T(n) ? null : r, m = g.append.bind(g);
  for (const x of p) {
    const y = b2(e, x, m, C, s);
    !i && y && s.$extractWithChild(n, x, r, "html", e) && (i = !0);
  }
  if (i && !o) {
    if ((oe(u) || ya(u)) && (f ? f(g) : u.append(g)), t(u), d) {
      const x = d.call(l, u);
      x && (ya(u) ? u.replaceChildren(x) : u.replaceWith(x));
    }
  } else t(g);
  return i;
}
function v2(e, n, t, r, s = /* @__PURE__ */ new Map(), i) {
  const o = [];
  if (C2.has(e.nodeName)) return o;
  let l = null;
  const c = function(p, C) {
    const { nodeName: m } = p, x = C._htmlConversions.get(m.toLowerCase());
    let y = null;
    if (x !== void 0) for (const _ of x) {
      const v = _(p);
      v !== null && (y === null || (y.priority || 0) <= (v.priority || 0)) && (y = v);
    }
    return y !== null ? y.conversion : null;
  }(e, n), u = c ? c(e) : null;
  let d = null;
  if (u !== null) {
    d = u.after;
    const p = u.node;
    if (l = Array.isArray(p) ? p[p.length - 1] : p, l !== null) {
      for (const [, C] of s) if (l = C(l, i), !l) break;
      l && o.push(...Array.isArray(p) ? p : [l]);
    }
    u.forChild != null && s.set(e.nodeName, u.forChild);
  }
  const f = e.childNodes;
  let h = [];
  const g = (l == null || !Me(l)) && (l != null && es(l) || r);
  for (let p = 0; p < f.length; p++) h.push(...v2(f[p], n, t, g, new Map(s), l));
  if (d != null && (h = d(h)), is(e) && (h = Eg(e, h, g ? () => {
    const p = new Ka();
    return t.push(p), p;
  } : Se)), l == null) if (h.length > 0) for (const p of h) o.push(p);
  else is(e) && function(p) {
    return p.nextSibling == null || p.previousSibling == null ? !1 : So(p.nextSibling) && So(p.previousSibling);
  }(e) && o.push(Sn());
  else T(l) && l.append(...h);
  return o;
}
function Eg(e, n, t) {
  const r = e.style.textAlign, s = [];
  let i = [];
  for (let o = 0; o < n.length; o++) {
    const l = n[o];
    if (es(l)) r && !l.getFormat() && l.setFormat(r), s.push(l);
    else if (i.push(l), o === n.length - 1 || o < n.length - 1 && es(n[o + 1])) {
      const c = t();
      c.setFormat(r), c.append(...i), s.push(c), i = [];
    }
  }
  return s;
}
function Ao(e, n, t = null) {
  const r = N5(t), s = t ? k5(t) : [], i = t !== null && s.length > 0;
  if (i && typeof r.caretPositionFromPoint == "function") {
    const o = r.caretPositionFromPoint(e, n, { shadowRoots: s });
    if (o !== null && function(l, c) {
      for (let u = l; u !== null; ) {
        if (u === c) return !0;
        u = br(u);
      }
      return !1;
    }(o.offsetNode, t)) return { node: o.offsetNode, offset: o.offset };
  }
  if (i) {
    const o = t.getRootNode();
    if (kn(o)) {
      const l = o.elementFromPoint(e, n);
      if (l !== null && t.contains(l)) {
        const c = function(u, d, f, h) {
          const g = h.createRange(), p = (N) => d < N.top ? N.top - d : d > N.bottom ? d - N.bottom : 0, C = (N) => u < N.left ? N.left - u : u > N.right ? u - N.right : 0, m = h.createTreeWalker(f, NodeFilter.SHOW_TEXT);
          let x = null, y = 1 / 0, _ = 1 / 0;
          for (let N = m.nextNode(); N; N = m.nextNode()) {
            g.selectNodeContents(N);
            for (const S of g.getClientRects()) {
              const k = p(S), L = C(S);
              (k < y || k === y && L < _) && (y = k, _ = L, x = N);
            }
          }
          if (x === null) return null;
          let v = 0, w = 1 / 0, E = 1 / 0;
          for (let N = 0; N <= x.length; N++) {
            g.setStart(x, N), g.collapse(!0);
            const S = g.getBoundingClientRect(), k = p(S), L = Math.abs(u - S.left);
            (k < w || k === w && L < E) && (w = k, E = L, v = N);
          }
          return { node: x, offset: v };
        }(e, n, l, r);
        if (c !== null) return c;
      }
    }
  }
  if (typeof r.caretRangeFromPoint == "function") {
    const o = r.caretRangeFromPoint(e, n);
    return o === null ? null : { node: o.startContainer, offset: o.startOffset };
  }
  if (typeof r.caretPositionFromPoint == "function") {
    const o = r.caretPositionFromPoint(e, n);
    return o === null ? null : { node: o.offsetNode, offset: o.offset };
  }
  return null;
}
function Vr(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Ea = { "application/x-lexical-editor": 0, "text/html": 10, "text/plain": 20, "text/uri-list": 30 };
function Ng(e) {
  return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (n) => n }).createHTML(e) : e;
}
const Iu = (e, n) => {
  if (!I(n)) return n.insertRawText(e), !0;
  const t = (r) => {
    const s = B();
    I(s) && r(s);
  };
  return r5(e, { linebreak: () => t((r) => r.insertParagraph()), tab: () => t((r) => r.insertNodes([Ho()])), text: (r) => t((s) => s.insertText(r)) }), !0;
}, Na = { "application/x-lexical-editor": [(e, n, t) => {
  try {
    const r = De(), s = JSON.parse(e);
    if (s && s.namespace === r._config.namespace && Array.isArray(s.nodes))
      return Du(r, Ig(s.nodes), n), !0;
  } catch (r) {
    console.error(r);
  }
  return t();
}], "text/html": [(e, n, t) => {
  try {
    const r = De(), s = new DOMParser().parseFromString(Ng(e), "text/html");
    return Du(r, y2(r, s), n), !0;
  } catch (r) {
    return console.error(r), t();
  }
}], "text/plain": [Iu], "text/uri-list": [Iu] };
function Tg(e, n, t, r) {
  if (!e) return !1;
  const s = (i) => !!e[i] && e[i](n, t, s.bind(null, i - 1), r);
  return s(e.length - 1);
}
function w2(e, n, t) {
  const r = n.getData("text/plain");
  for (const s of function(i) {
    return Object.keys(i.$importMimeType).filter((o) => i.$importMimeType[o] !== void 0).sort((o, l) => {
      const c = i.priority[o], u = i.priority[l];
      return c === void 0 && u === void 0 ? o < l ? -1 : o > l ? 1 : 0 : c === void 0 ? 1 : u === void 0 ? -1 : c - u;
    });
  }(e)) {
    const i = n.getData(s);
    if (i && (s !== "text/html" || i !== r) && Tg(e.$importMimeType[s], i, t, n)) return !0;
  }
  return !1;
}
const Lg = { $importMimeType: Na, $insertDataTransfer: (e, n) => w2({ $importMimeType: Na, priority: Ea }, e, n), priority: Ea }, jg = { build: (e, n) => ({ $importMimeType: n.$importMimeType, $insertDataTransfer: (t, r) => w2(n, t, r), priority: n.priority }), config: { $importMimeType: Na, priority: Ea }, mergeConfig(e, n) {
  const t = h1(e, n);
  if (n.$importMimeType) {
    const r = { ...e.$importMimeType };
    for (const [s, i] of Object.entries(n.$importMimeType)) if (i) {
      const o = r[s];
      r[s] = o ? [...o, ...i] : i;
    }
    t.$importMimeType = r;
  }
  return n.priority && (t.priority = { ...e.priority, ...n.priority }), t;
}, name: "@lexical/clipboard/Import" };
function S2(e, n = B()) {
  return n == null && Vr(166), I(n) && n.isCollapsed() || n.getNodes().length === 0 ? "" : _2(e, n);
}
function k2(e, n = B()) {
  return n == null && Vr(166), I(n) && n.isCollapsed() || n.getNodes().length === 0 ? null : JSON.stringify(Og(e, n));
}
function Ta(e, n, t) {
  (function() {
    const r = L7(jg.name);
    return r ? r.output : Lg;
  })().$insertDataTransfer(e, n);
}
const E2 = "application/x-lexical-drag";
function Ag(e, n) {
  const t = { editorKey: n.getKey() };
  e.setData(E2, JSON.stringify(t));
}
function Mg(e, n, t) {
  const r = e.dataTransfer;
  if (r === null) return !1;
  const s = function(u) {
    const d = u.getData(E2);
    if (!d) return null;
    let f;
    try {
      f = JSON.parse(d);
    } catch {
      return null;
    }
    return (h = f) !== null && typeof h == "object" && "editorKey" in h && typeof h.editorKey == "string" ? f : null;
    var h;
  }(r);
  if (s === null) return !1;
  const i = function(u, d) {
    const f = Ao(u.clientX, u.clientY, d.getRootElement());
    if (f === null) return null;
    const h = cr(f.node);
    if (h === null) return null;
    if ($(h)) return Vn(h, "next", f.offset);
    if (T(h)) return va(h, f.offset, "next");
    const g = h.getParent();
    return g === null ? null : va(g, h.getIndexWithinParent() + 1, "next");
  }(e, n);
  if (i === null) return !1;
  const o = H5(i);
  if (o === null) return !1;
  const l = s.editorKey === n.getKey(), c = B();
  if (l) {
    if (!I(c) || c.isCollapsed()) return !1;
    if (function(u, d) {
      const { anchor: f, focus: h } = d1(No(d), "next");
      return ni(f, u) < 0 && ni(u, h) < 0;
    }(i, c)) return e.preventDefault(), !0;
    c.removeText();
  }
  if (!o.origin.isAttached()) return e.preventDefault(), !0;
  if (t(r, ri(Xo(o)), n), !l) {
    const u = n.getRootElement(), d = u ? u.ownerDocument : null, f = d ? function(h, g) {
      for (const p of E5(g)) {
        const C = as(p);
        if (di(C) && C.getKey() === h && oe(p)) return p;
      }
      return null;
    }(s.editorKey, d) : null;
    f !== null && f.dispatchEvent(new InputEvent("beforeinput", { bubbles: !0, cancelable: !0, inputType: "deleteByDrag" }));
  }
  return e.preventDefault(), !0;
}
function Fg(e, n) {
  return Mg(e, n, Ta);
}
function Du(e, n, t) {
  e.dispatchCommand(S6, { nodes: n, selection: t }) || (t.insertNodes(n), function(r) {
    if (I(r) && r.isCollapsed()) {
      const s = r.anchor;
      let i = null;
      const o = bt(s, "previous");
      if (o) if (Dt(o)) i = o.origin;
      else {
        const l = Gt(o, _t(Fe(), "next").getFlipped());
        for (const c of l) {
          if ($(c.origin)) {
            i = c.origin;
            break;
          }
          if (T(c.origin) && !c.origin.isInline()) break;
        }
      }
      if (i && $(i)) {
        const l = i.getFormat(), c = i.getStyle();
        r.format === l && r.style === c || (r.format = l, r.style = c, r.dirty = !0);
      }
    }
  }(t));
}
function La(e, n, t, r = []) {
  let s = n === null || t.isSelected(n);
  const i = T(t) && t.excludeFromCopy("html");
  let o = t;
  n !== null && $(o) && (o = Z5(n, o, "clone"));
  const l = T(o) ? o.getChildren() : [], c = function(d) {
    const f = d.exportJSON(), h = d.constructor;
    if (f.type !== h.getType() && Vr(58, h.name), T(d)) {
      const g = f.children;
      Array.isArray(g) || Vr(59, h.name);
    }
    return f;
  }(o);
  $(o) && o.getTextContentSize() === 0 && (s = !1);
  const u = s && Ne(n) && T(t) ? null : n;
  for (let d = 0; d < l.length; d++) {
    const f = l[d], h = La(e, u, f, c.children);
    !s && T(t) && h && t.extractWithChild(f, n, "clone") && (s = !0);
  }
  if (s && !i) {
    const d = It(o);
    if (d.length > 0) {
      const f = {};
      for (const h of d) {
        const g = dr(o, h);
        g === null && Vr(366, o.constructor.name, h);
        const p = [];
        La(e, null, g, p), p.length === 1 && p[0].type === g.getType() || Vr(385, h, o.constructor.name, String(p.length), String(p.length > 0 ? p[0].type : "none")), f[h] = p[0];
      }
      c.$slots = f;
    }
  }
  if (s && !i) r.push(c);
  else if (Array.isArray(c.children)) for (let d = 0; d < c.children.length; d++) {
    const f = c.children[d];
    r.push(f);
  }
  return s;
}
function Og(e, n) {
  const t = [], r = Fe(), s = I(n) ? n.anchor.getNode() : Ne(n) ? n.getNodes()[0] ?? null : null, i = s !== null ? Yo(s) : null, o = (T(i) ? i : r).getChildren();
  for (let l = 0; l < o.length; l++)
    La(e, n, o[l], t);
  return { namespace: e._config.namespace, nodes: t };
}
function Ig(e) {
  const n = [];
  for (const t of e) n.push(o3(t));
  return n;
}
let Or = null;
async function $u(e, n, t) {
  if (Or !== null) return !1;
  if (n !== null) return new Promise((u, d) => {
    e.update(() => {
      u(Ru(e, n, t));
    });
  });
  const r = e.getRootElement(), s = e._window || window, i = s.document, o = mt(s);
  if (r === null || o === null) return !1;
  const l = i.createElement("span");
  l.style.position = "fixed", l.style.top = "-1000px", l.append(i.createTextNode("#")), r.append(l);
  const c = i.createRange();
  return c.setStart(l, 0), c.setEnd(l, 1), o.removeAllRanges(), o.addRange(c), new Promise((u, d) => {
    const f = e.registerCommand(Ro, (h) => (yn(h, ClipboardEvent) && (f(), Or !== null && (s.clearTimeout(Or), Or = null), u(Ru(e, h, t))), !0), f3);
    Or = s.setTimeout(() => {
      f(), Or = null, u(!1);
    }, 50), i.execCommand("copy"), l.remove();
  });
}
function Ru(e, n, t) {
  if (t === void 0) {
    const s = mt(e._window), i = B();
    if (!i || i.isCollapsed() || !s) return !1;
    const o = Pt(s, e.getRootElement()), l = o.anchorNode, c = o.focusNode;
    if (l !== null && c !== null && !ui(e, l, c)) return !1;
    t = N2(i);
  }
  n.preventDefault();
  const r = n.clipboardData;
  return r !== null && (T2(r, t), !0);
}
const Dg = [["text/html", S2], ["application/x-lexical-editor", k2]];
function N2(e = B()) {
  return function(n, t) {
    const r = { "text/plain": "" };
    for (const [s, i] of Object.entries(n)) if (i) {
      const o = Rg(i, t);
      o !== null && (r[s] = o);
    }
    return r;
  }($g(), e);
}
function T2(e, n) {
  for (const [t] of Dg) n[t] === void 0 && e.setData(t, "");
  for (const t in n) {
    const r = n[t];
    r !== void 0 && e.setData(t, r);
  }
}
function $g(e = De()) {
  const n = fi(e, Pg.name);
  return n ? n.output : L2;
}
const L2 = { "application/x-lexical-editor": [(e, n) => e ? k2(De(), e) : n()], "text/html": [(e, n) => e ? S2(De(), e) : n()], "text/plain": [(e, n) => e ? e.getTextContent() : n()] };
function Rg(e, n) {
  const t = (r) => e[r] ? e[r](n, t.bind(null, r - 1)) : null;
  return t(e.length - 1);
}
const Pg = { build: (e, n, t) => n.$exportMimeType, config: { $exportMimeType: L2 }, mergeConfig(e, n) {
  const t = h1(e, n);
  if (n.$exportMimeType) {
    const r = { ...e.$exportMimeType };
    for (const [s, i] of Object.entries(n.$exportMimeType)) if (i) {
      const o = r[s];
      r[s] = o ? [...o, ...i] : i;
    }
    t.$exportMimeType = r;
  }
  return t;
}, name: "@lexical/clipboard/GetClipboardData" }, Hg = { $import: (e, n) => {
  const t = os(n.nodeName.toLowerCase());
  return vr(n, t), dn(t, n), Vt(t, n), [t.splice(0, 0, e.$importChildren(n))];
}, match: Qe.tag("h1", "h2", "h3", "h4", "h5", "h6"), name: "@lexical/rich-text/heading" }, Bg = { $import: (e, n) => {
  const t = hi();
  return dn(t, n), vr(n, t), Vt(t, n), [t.splice(0, 0, e.$importChildren(n))];
}, match: Qe.tag("blockquote"), name: "@lexical/rich-text/blockquote" };
Qe.tag("blockquote");
Qe.tag("p"), Qe.tag("span");
const Pu = /* @__PURE__ */ ne("DRAG_DROP_PASTE_FILE"), Ml = /* @__PURE__ */ ed("shadowRoot", { parse: Boolean });
let j2 = class extends We {
  $config() {
    return this.config("quote", { extends: We, importDOM: { blockquote: () => ({ conversion: Vg, priority: 0 }) }, stateConfigs: [{ flat: !0, stateConfig: Ml }] });
  }
  isShadowRoot() {
    return td(this, Ml);
  }
  setIsShadowRoot(n) {
    return m6(this, Ml, n);
  }
  createDOM(n) {
    const t = je().createElement("blockquote");
    return cn(t, n.theme.quote), t;
  }
  updateDOM(n, t, r) {
    return !1;
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (oe(t)) {
      this.isEmpty() && t.append(je().createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
      const s = this.getDirection();
      s && (t.dir = s);
    }
    return { element: t };
  }
  exportJSON() {
    return super.exportJSON();
  }
  static importJSON(n) {
    return hi().updateFromJSON(n);
  }
  insertNewAfter(n, t) {
    const r = Se(), s = this.getDirection();
    return r.setDirection(s), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    if (this.isShadowRoot()) {
      for (const t of this.getChildren()) this.insertBefore(t);
      return this.remove(), !0;
    }
    const n = Se();
    return this.getChildren().forEach((t) => n.append(t)), this.replace(n), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function hi(e) {
  const n = qt(new j2());
  return e && e.shadowRoot ? n.setIsShadowRoot(!0) : n;
}
let w1 = class extends We {
  constructor(t = "h1", r) {
    super(r);
    M(this, "__tag");
    this.__tag = t;
  }
  $config() {
    return this.config("heading", { extends: We, importDOM: { h1: () => ({ conversion: Ir, priority: 0 }), h2: () => ({ conversion: Ir, priority: 0 }), h3: () => ({ conversion: Ir, priority: 0 }), h4: () => ({ conversion: Ir, priority: 0 }), h5: () => ({ conversion: Ir, priority: 0 }), h6: () => ({ conversion: Ir, priority: 0 }), p: (t) => {
      const r = t.firstChild;
      return r !== null && Hu(r) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (t) => Hu(t) ? { conversion: () => ({ node: os("h1") }), priority: 3 } : null } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__tag = t.__tag;
  }
  getTag() {
    return this.getLatest().__tag;
  }
  setTag(t) {
    const r = this.getWritable();
    return r.__tag = t, r;
  }
  createDOM(t) {
    const r = this.__tag, s = je().createElement(r), i = t.theme.heading;
    if (i !== void 0) {
      const o = i[r];
      cn(s, o);
    }
    return s;
  }
  updateDOM(t, r, s) {
    return t.__tag !== this.__tag;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (oe(r)) {
      this.isEmpty() && r.append(je().createElement("br"));
      const s = this.getFormatType();
      s && (r.style.textAlign = s);
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(t, r = !0) {
    const s = t ? t.anchor.offset : 0, i = this.getLastDescendant(), o = !i || t && t.anchor.key === i.getKey() && s === i.getTextContentSize() || !t ? Se() : os(this.getTag()), l = this.getDirection();
    if (o.setDirection(l), this.insertAfter(o, r), s === 0 && !this.isEmpty() && t) {
      const c = Se();
      c.select(), this.replace(c, !0);
    }
    return o;
  }
  collapseAtStart() {
    if (this.isEmpty()) {
      const t = Se();
      this.getChildren().forEach((r) => t.append(r)), this.replace(t);
    }
    return !0;
  }
  extractWithChild() {
    return !0;
  }
};
function Hu(e) {
  return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function Ir(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n !== "h1" && n !== "h2" && n !== "h3" && n !== "h4" && n !== "h5" && n !== "h6" || (t = os(n), vr(e, t), dn(t, e), Vt(t, e)), { node: t };
}
function Vg(e) {
  const n = hi();
  return dn(n, e), vr(e, n), Vt(n, e), { node: n };
}
function os(e = "h1") {
  return qt(new w1(e));
}
function zg(e) {
  return e instanceof w1;
}
function Bu(e) {
  const n = cr(e);
  return de(n);
}
function Dr(e, n, t, r) {
  let s = !1, i = null;
  if (e.isCollapsed() && e.anchor.type === "text") {
    const l = e.anchor.getNode();
    if ($(l)) {
      i = l;
      const c = e.anchor.offset, u = c === l.getTextContentSize() && l.getNextSibling() === null, d = c === 0 && l.getPreviousSibling() === null;
      s = t === "end" && u || t === "start" && d || t === "both" && (u || d);
    }
  }
  let o = !1;
  for (const [l, c] of Object.entries(r)) {
    if (c == null || !c[n]) continue;
    const u = l;
    if (c.onlyAtBoundary) {
      if (!(s && i && $(i) && i.hasFormat(u))) continue;
      o = !0;
    }
    e.hasFormat(u) && e.toggleFormat(u);
  }
  o && e.setStyle("");
}
const Zg = { capitalize: { enter: !0, space: !0, tab: !0 }, lowercase: { enter: !0, space: !0, tab: !0 }, uppercase: { enter: !0, space: !0, tab: !0 } };
function Pi(e, n) {
  return function(t, r) {
    if (!t.isCollapsed()) return !1;
    const s = bt(t.focus, r), i = Ee(s.origin, Bs);
    if (!i) return !1;
    const o = t.focus.getNode();
    if (!i.is(o) && !rs(o, i)) return !1;
    const l = Gt(s, _e(i, r));
    if (l.getTextSlices().some((f) => f && f.getTextContentSize() > 0)) return !1;
    const c = Gt(l.anchor.getSiblingCaret(), l.focus);
    let u = c.anchor.origin;
    for (const f of c) {
      if (!En(f) || !f.origin.is(u.getParent())) return !1;
      u = f.origin;
    }
    let d = i;
    for (const f of Jo(_e(i, r))) {
      if (!f.origin.is(d.getParent())) {
        if (Xi(f.origin)) {
          const h = _e(d, r);
          return ri(Gt(h, h)), !0;
        }
        break;
      }
      if (!Bs(f.origin)) break;
      d = f.origin;
    }
    return !1;
  }(e, n) || function(t, r) {
    if (!t.isCollapsed() || t.anchor.type !== "element") return !1;
    const s = bt(t.anchor, r).getNodeAtCaret();
    return !(!Bs(s) || s.isInline() || (ri(Xo(yt(_t(s, r)))), 0));
  }(e, n);
}
function Vu(e) {
  return de(e) && !e.isInline() && !e.isIsolated() && e.isKeyboardSelectable();
}
function Hi(e) {
  const n = fo();
  n.add(e), Xe(n);
}
function zu(e, n) {
  if (!e.isCollapsed()) return !1;
  const t = e.focus, r = t.getNode(), s = n ? "previous" : "next", i = bt(t, s);
  if (t.type === "element" && T(r) && Me(r)) {
    const x = i.getNodeAtCaret();
    return !(x === null || !Vu(x)) && (Hi(x.__key), !0);
  }
  const o = Ee(T(r) ? r : r.getParentOrThrow(), (x) => T(x) && !x.isInline() && Me(x.getParent()));
  if (o === null) return !1;
  const l = _e(o, s).getNodeAtCaret();
  if (l === null || !Vu(l)) return !1;
  if (o.getTextContentSize() === 0) return Hi(l.__key), !0;
  const c = De().getRootElement();
  if (c === null) return !1;
  const u = mt(c.ownerDocument.defaultView);
  if (u === null || u.rangeCount === 0) return !1;
  const d = u.anchorNode, f = u.anchorOffset, h = u.focusNode, g = u.focusOffset;
  u.modify("move", n ? "backward" : "forward", "line");
  const p = u.anchorNode, C = u.anchorOffset;
  if (p === null) return Zu(u, d, f, h, g), !1;
  const m = cr(p);
  return Zu(u, d, f, h, g), m === null ? !1 : (p === d && C === f || !m.is(o) && !rs(m, o)) && (Hi(l.__key), !0);
}
function Zu(e, n, t, r, s) {
  n !== null && r !== null && e.setBaseAndExtent(n, t, r, s);
}
function Wu(e, n) {
  if (!e.isCollapsed()) return !1;
  const t = e.focus.getNode(), r = Ee(T(t) ? t : t.getParentOrThrow(), (m) => T(m) && !m.isInline());
  if (r === null) return !1;
  const s = De(), i = s.getRootElement();
  if (i === null) return !1;
  const o = i.ownerDocument.defaultView;
  if (o === null) return !1;
  let l = !1;
  for (const m of r.getChildren()) if (T(m) && m.isInline()) {
    const x = s.getElementByKey(m.getKey());
    if (x !== null) {
      const y = o.getComputedStyle(x).display;
      if (y === "inline-grid" || y === "inline-flex") {
        l = !0;
        break;
      }
    }
  }
  if (!l) return !1;
  const c = _e(r, n ? "previous" : "next").getNodeAtCaret();
  if (c === null || !T(c)) {
    if (n) {
      const m = r.getFirstDescendant();
      $(m) ? m.select(0, 0) : r.select(0, 0);
    } else {
      const m = r.getLastDescendant();
      if ($(m)) {
        const x = m.getTextContentSize();
        m.select(x, x);
      } else {
        const x = r.getChildrenSize();
        r.select(x, x);
      }
    }
    return !0;
  }
  const u = s.getElementByKey(c.getKey());
  if (u === null) return !1;
  const d = mt(o);
  if (d === null || d.rangeCount === 0) return !1;
  const f = d.getRangeAt(0).cloneRange();
  f.collapse(!0);
  const h = f.getBoundingClientRect(), g = u.getBoundingClientRect(), p = g.top + g.height / 2;
  if (h.height > 0) {
    const m = Ao(h.left, p, i);
    if (m !== null && u.contains(m.node)) {
      const x = i.ownerDocument.createRange();
      return x.setStart(m.node, m.offset), x.collapse(!0), e.applyDOMRange(x), e.dirty = !0, !0;
    }
  }
  const C = n ? c.getLastDescendant() : c.getFirstDescendant();
  if ($(C)) {
    const m = n ? C.getTextContentSize() : 0;
    C.select(m, m);
  } else {
    const m = c.getChildrenSize();
    c.select(n ? m : 0, n ? m : 0);
  }
  return !0;
}
function Bi(e, n) {
  const t = _e(e, n), r = t.getAdjacentCaret();
  r !== null && T(r.origin) && !r.origin.isInline() && r.origin.isShadowRoot() ? ri(Xo(t)) : n === "next" ? e.selectNext(0, 0) : e.selectPrevious();
}
function Uu(e, n, t) {
  t.preventDefault(), t.stopPropagation();
  const r = e.getNodes();
  if (r.length === 0) return !0;
  const s = r.map((c) => _e(c, "next")).sort(ni), i = (n ? s[0] : s[s.length - 1]).origin, o = Ee(i, (c) => c !== i && T(c) && !c.isInline()) ?? Fe(), l = n ? 0 : o.getChildrenSize();
  return o.select(l, l), !0;
}
function Wg(e, n = m1(Zg)) {
  return Bt(e.registerCommand(hd, () => {
    const t = B();
    return Ne(t) ? (t.clear(), !0) : (I(t) && Dr(t, "click", "both", n.peek()), !1);
  }, le), e.registerCommand(er, (t) => {
    const r = B();
    return I(r) ? (r.deleteCharacter(t), !0) : !!Ne(r) && (r.deleteNodes(), !0);
  }, le), e.registerCommand(Ys, (t) => {
    const r = B();
    return !!I(r) && (r.deleteWord(t), !0);
  }, le), e.registerCommand(qs, (t) => {
    const r = B();
    return !!I(r) && (r.deleteLine(t), !0);
  }, le), e.registerCommand(Zr, (t) => {
    const r = B();
    if (typeof t == "string") r !== null && r.insertText(t);
    else {
      if (r === null) return !1;
      const s = t.dataTransfer;
      if (s != null) Ta(s, r);
      else if (I(r)) {
        const i = t.data;
        return i && r.insertText(i), !0;
      }
    }
    return !0;
  }, le), e.registerCommand(Ki, () => {
    const t = B();
    return !!I(t) && (t.removeText(), !0);
  }, le), e.registerCommand(ct, (t) => {
    const r = B();
    return !(!I(r) && !Ne(r)) && (Gd(r, t), !0);
  }, le), e.registerCommand(k6, (t) => {
    const r = B();
    return !(!I(r) && !Ne(r)) && (e3(r, t), !0);
  }, le), e.registerCommand(Ms, (t) => {
    const r = B();
    if (!I(r) && !Ne(r)) return !1;
    const s = r.getNodes();
    for (const i of s) {
      const o = Ee(i, (l) => T(l) && !l.isInline());
      o !== null && o.setFormat(t);
    }
    return !0;
  }, le), e.registerCommand(zr, (t) => {
    const r = B();
    return !!I(r) && (r.insertLineBreak(t), !0);
  }, le), e.registerCommand(Gs, () => {
    const t = B();
    return !!I(t) && (t.insertParagraph(), !0);
  }, le), e.registerCommand(E6, () => {
    const t = Ho(), r = B();
    return I(r) && (t.setFormat(r.format), t.setStyle(r.style)), Vo([t]), !0;
  }, le), e.registerCommand(Ld, () => wu((t) => {
    const r = t.getIndent();
    t.setIndent(r + 1);
  }), le), e.registerCommand(la, () => wu((t) => {
    const r = t.getIndent();
    r > 0 && t.setIndent(Math.max(0, r - 1));
  }), le), e.registerCommand(wd, (t) => {
    const r = B();
    if (Ne(r)) {
      const s = r.getNodes();
      if (s.length > 0) return t.preventDefault(), Bi(s[0], "previous"), !0;
    } else if (I(r) && (function(s) {
      const i = s.focus;
      return i.key === "root" && i.offset === 0;
    }(r) || !t.shiftKey && Pi(r, "previous") || !t.shiftKey && zu(r, !0) || !t.shiftKey && Wu(r, !0)))
      return t.preventDefault(), !0;
    return !1;
  }, le), e.registerCommand(Sd, (t) => {
    const r = B();
    if (Ne(r)) {
      const s = r.getNodes();
      if (s.length > 0) return t.preventDefault(), Bi(s[0], "next"), !0;
    } else if (I(r) && (function(s) {
      const i = s.focus;
      return i.key === "root" && i.offset === Fe().getChildrenSize();
    }(r) || !t.shiftKey && Pi(r, "next") || !t.shiftKey && zu(r, !1) || !t.shiftKey && Wu(r, !1)))
      return t.preventDefault(), !0;
    return !1;
  }, le), e.registerCommand(bd, (t) => {
    const r = B();
    if (Ne(r)) {
      const s = r.getNodes();
      if (s.length > 0) return t.preventDefault(), Bi(s[0], Fi(s[0]) ? "next" : "previous"), !0;
    }
    if (!I(r)) return !1;
    if (!t.shiftKey && Pi(r, Fi(r.anchor.getNode()) ? "next" : "previous")) return t.preventDefault(), !0;
    if (t.shiftKey || Dr(r, "arrow", "start", n.peek()), bu(r, !0)) {
      const s = t.shiftKey;
      return t.preventDefault(), vu(r, s, !0), !0;
    }
    return !1;
  }, le), e.registerCommand(yd, (t) => {
    const r = B();
    if (Ne(r)) {
      const s = r.getNodes();
      if (s.length > 0) return t.preventDefault(), Bi(s[0], Fi(s[0]) ? "previous" : "next"), !0;
    }
    if (!I(r)) return !1;
    if (!t.shiftKey && Pi(r, Fi(r.anchor.getNode()) ? "previous" : "next")) return t.preventDefault(), !0;
    if (t.shiftKey || Dr(r, "arrow", "end", n.peek()), bu(r, !1)) {
      const s = t.shiftKey;
      return t.preventDefault(), vu(r, s, !1), !0;
    }
    return !1;
  }, le), e.registerCommand(za, (t) => {
    const r = B();
    if (!Ne(r) && Bu(t.target)) return !1;
    if (I(r)) {
      if (function(s) {
        if (!s.isCollapsed()) return !1;
        const { anchor: i } = s;
        if (i.offset !== 0) return !1;
        const o = i.getNode();
        if (ze(o)) return !1;
        const l = p7(o);
        return l.getIndent() > 0 && (l.is(o) || o.is(l.getFirstDescendant()));
      }(r)) return t.preventDefault(), e.dispatchCommand(la);
      if (Hn && Xr) return !1;
    } else if (!Ne(r)) return !1;
    return t.preventDefault(), e.dispatchCommand(er, !0);
  }, le), e.registerCommand(Nd, (t) => {
    const r = B();
    return !(!Ne(r) && Bu(t.target)) && !(!I(r) && !Ne(r)) && (t.preventDefault(), e.dispatchCommand(er, !1));
  }, le), e.registerCommand(oo, (t) => {
    let r = B();
    if (Ne(r)) {
      const s = r.getNodes();
      s.length === 1 && de(s[0]) && !s[0].isInline() && (r = s[0].selectNext());
    }
    if (!I(r)) return !1;
    if (Dr(r, "enter", "both", n.peek()), t !== null) {
      if ((Hn || oi || li) && Xr) return !1;
      if (t.preventDefault(), t.shiftKey) return e.dispatchCommand(zr, !1);
    }
    return e.dispatchCommand(Gs);
  }, le), e.registerCommand(Ed, () => {
    const t = B();
    return !!I(t) && (e.blur(), !0);
  }, le), e.registerCommand(jd, (t) => {
    const [, r] = Di(t);
    if (r.length > 0) {
      const s = t.clientX, i = t.clientY, o = Ao(s, i, e.getRootElement());
      if (o !== null) {
        const { offset: l, node: c } = o, u = cr(c);
        if (u !== null) {
          const d = n5();
          if ($(u)) d.anchor.set(u.getKey(), l, "text"), d.focus.set(u.getKey(), l, "text");
          else {
            const h = u.getParentOrThrow().getKey(), g = u.getIndexWithinParent() + 1;
            d.anchor.set(h, g, "element"), d.focus.set(h, g, "element");
          }
          const f = Cn(d);
          Xe(f);
        }
        e.dispatchCommand(Pu, r);
      }
      return t.preventDefault(), !0;
    }
    return Fg(t, e);
  }, le), e.registerCommand(Ad, (t) => {
    const [r] = Di(t), s = B();
    return !(r && !I(s)) && (I(s) && !s.isCollapsed() && t.dataTransfer !== null && (T2(t.dataTransfer, N2(s)), Ag(t.dataTransfer, e)), !0);
  }, le), e.registerCommand(Md, (t) => {
    const [r] = Di(t), s = B();
    if (r && !I(s)) return !1;
    const i = t.clientX, o = t.clientY, l = Ao(i, o, e.getRootElement());
    if (l !== null) {
      const c = cr(l.node);
      de(c) && t.preventDefault();
    }
    return !0;
  }, le), e.registerCommand(Fd, () => {
    const t = B();
    return _3(I(t) && Yo(t.anchor.getNode()) !== null ? t : null), !0;
  }, le), e.registerCommand(Ro, (t) => ($u(e, yn(t, ClipboardEvent) ? t : null), !0), le), e.registerCommand(Za, (t) => (async function(r, s) {
    await $u(s, yn(r, ClipboardEvent) ? r : null), s.update(() => {
      const i = B();
      I(i) ? i.removeText() : Ne(i) && i.getNodes().forEach((o) => o.remove());
    }, { tag: Vd });
  }(t, e), !0), le), e.registerCommand(Io, (t) => {
    const [, r, s] = Di(t);
    return r.length > 0 && !s ? (e.dispatchCommand(Pu, r), !0) : us(t.target) && Ja(t.target) ? !1 : B() !== null && (function(i, o) {
      i.preventDefault(), o.update(() => {
        const l = B(), c = yn(i, InputEvent) || yn(i, KeyboardEvent) ? null : i.clipboardData;
        c != null && l !== null && Ta(c, l);
      }, { tag: Bd });
    }(t, e), !0);
  }, le), e.registerCommand(kd, () => {
    const t = B();
    return I(t) && Dr(t, "space", "both", n.peek()), !1;
  }, le), e.registerCommand(Td, () => {
    const t = B();
    return I(t) && Dr(t, "tab", "both", n.peek()), !1;
  }, le), e.registerCommand(_d, (t) => {
    const r = B();
    if (Ne(r)) return Uu(r, !1, t);
    if (!I(r)) return !1;
    const { anchor: s } = r;
    if (s.type !== "element" || s.offset !== 0) return !1;
    const i = s.getNode();
    if (!T(i)) return !1;
    const o = i.getFirstChild();
    if (!de(o) || !o.isInline()) return !1;
    const l = i.getKey(), c = i.selectEnd();
    return t.shiftKey && c.anchor.set(l, 0, "element"), t.preventDefault(), t.stopPropagation(), !0;
  }, le), e.registerCommand(vd, (t) => {
    const r = B();
    if (Ne(r)) return Uu(r, !0, t);
    if (!I(r)) return !1;
    const { anchor: s, focus: i } = r, o = Ee(i.getNode(), (u) => T(u) && !u.isInline());
    if (o === null) return !1;
    const l = o.getFirstChild();
    if (!de(l) || !l.isInline() || Ee(s.getNode(), (u) => T(u) && !u.isInline()) !== o) return !1;
    const c = o.getKey();
    return (i.type !== "element" || i.key !== c || i.offset !== 0) && (r.focus.set(c, 0, "element"), t.shiftKey || r.anchor.set(c, 0, "element"), t.preventDefault(), t.stopPropagation(), !0);
  }, le));
}
function Ug(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const S1 = it ? xr : we;
function Kg({ editor: e, ErrorBoundary: n }) {
  return function(t, r) {
    const [s, i] = ce(() => t.getDecorators());
    return S1(() => t.registerDecoratorListener((o) => {
      vf(() => {
        i(o);
      });
    }), [t]), we(() => {
      i(t.getDecorators());
    }, [t]), ut(() => {
      const o = [], l = Object.keys(s);
      for (let c = 0; c < l.length; c++) {
        const u = l[c], d = /* @__PURE__ */ a.jsx(r, { onError: (h) => t._onError(h), children: /* @__PURE__ */ a.jsx(_f, { fallback: null, children: s[u] }) }), f = t.getElementByKey(u);
        f !== null && o.push(/* @__PURE__ */ wf(d, f, u));
      }
      return o;
    }, [r, s, t]);
  }(e, n);
}
function Gg({ editor: e, ErrorBoundary: n }) {
  return function(t) {
    const r = Yr.maybeFromEditor(t);
    if (r && r.hasExtensionByName(A7.name)) {
      for (const s of ["@lexical/plain-text", "@lexical/rich-text"]) r.hasExtensionByName(s) && Ug(320, s);
      return !0;
    }
    return !1;
  }(e) ? null : /* @__PURE__ */ a.jsx(Kg, { editor: e, ErrorBoundary: n });
}
function Ku(e) {
  return e.read("latest", r2(e.isComposing()));
}
function Yg({ contentEditable: e, placeholder: n = null, ErrorBoundary: t }) {
  const [r] = Jt();
  return function(s) {
    S1(() => Bt(Wg(s), R7(s)), [s]);
  }(r), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [e, /* @__PURE__ */ a.jsx(qg, { content: n }), /* @__PURE__ */ a.jsx(Gg, { editor: r, ErrorBoundary: t })] });
}
function qg({ content: e }) {
  const [n] = Jt(), t = function(s) {
    const [i, o] = ce(() => Ku(s));
    return S1(() => {
      function l() {
        const c = Ku(s);
        o(c);
      }
      return l(), Bt(s.registerUpdateListener(() => {
        l();
      }), s.registerEditableListener(() => {
        l();
      }));
    }, [s]), i;
  }(n), r = i7();
  return t ? typeof e == "function" ? e(r) : e : null;
}
const A2 = it ? xr : we;
function Jg({ editor: e, ariaActiveDescendant: n, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: s, ariaErrorMessage: i, ariaExpanded: o, ariaInvalid: l, ariaLabel: c, ariaLabelledBy: u, ariaMultiline: d, ariaOwns: f, ariaRequired: h, autoCapitalize: g, className: p, id: C, role: m = "textbox", spellCheck: x = !0, style: y, tabIndex: _, "data-testid": v, ...w }, E) {
  const [N, S] = ce(e.isEditable()), k = He((A) => {
    A && A.ownerDocument && A.ownerDocument.defaultView ? e.setRootElement(A) : e.setRootElement(null);
  }, [e]), L = ut(() => /* @__PURE__ */ function(...A) {
    return (H) => {
      for (const G of A) typeof G == "function" ? G(H) : G != null && (G.current = H);
    };
  }(E, k), [k, E]);
  return A2(() => (S(e.isEditable()), e.registerEditableListener((A) => {
    S(A);
  })), [e]), /* @__PURE__ */ a.jsx("div", { "aria-activedescendant": N ? n : void 0, "aria-autocomplete": N ? t : "none", "aria-controls": N ? r : void 0, "aria-describedby": s, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": N && m === "combobox" ? !!o : void 0, ...l != null ? { "aria-invalid": l } : {}, "aria-label": c, "aria-labelledby": u, "aria-multiline": d, "aria-owns": N ? f : void 0, "aria-readonly": !N || void 0, "aria-required": h, autoCapitalize: g, className: p, contentEditable: N, "data-testid": v, id: C, ref: L, role: m, spellCheck: x, style: y, tabIndex: _ ?? (N ? void 0 : -1), ...w });
}
const Xg = /* @__PURE__ */ un(Jg);
function Gu(e) {
  return e.read("latest", r2(e.isComposing()));
}
const Qg = /* @__PURE__ */ un(e4);
function e4(e, n) {
  const { placeholder: t, ...r } = e, [s] = Jt();
  return a.jsxs(a.Fragment, { children: [/* @__PURE__ */ a.jsx(Xg, { editor: s, ...r, ref: n }), t != null && /* @__PURE__ */ a.jsx(t4, { editor: s, content: t })] });
}
function t4({ content: e, editor: n }) {
  const t = function(o) {
    const [l, c] = ce(() => Gu(o));
    return A2(() => {
      function u() {
        const d = Gu(o);
        c(d);
      }
      return u(), Bt(o.registerUpdateListener(() => {
        u();
      }), o.registerEditableListener(() => {
        u();
      }));
    }, [o]), l;
  }(n), [r, s] = ce(n.isEditable());
  if (xr(() => (s(n.isEditable()), n.registerEditableListener((o) => {
    s(o);
  })), [n]), !t) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : /* @__PURE__ */ a.jsx("div", { "aria-hidden": !0, children: i });
}
function n4(e, n, t, r, s) {
  if (e === null || t.size === 0 && r.size === 0 && !s) return 0;
  const i = n._selection, o = e._selection;
  if (s) return 1;
  if (!(I(i) && I(o) && o.isCollapsed() && i.isCollapsed())) return 0;
  const l = function(x, y, _) {
    const v = x._nodeMap, w = [];
    for (const E of y) {
      const N = v.get(E);
      N !== void 0 && w.push(N);
    }
    for (const [E, N] of _) {
      if (!N) continue;
      const S = v.get(E);
      S === void 0 || ze(S) || w.push(S);
    }
    return w;
  }(n, t, r);
  if (l.length === 0) return 0;
  if (l.length > 1) {
    const x = n._nodeMap, y = x.get(i.anchor.key), _ = x.get(o.anchor.key);
    return y && _ && !e._nodeMap.has(y.__key) && $(y) && y.__text.length === 1 && i.anchor.offset === 1 ? 2 : 0;
  }
  const c = l[0], u = e._nodeMap.get(c.__key);
  if (!$(u) || !$(c) || u.__mode !== c.__mode) return 0;
  const d = u.__text, f = c.__text;
  if (d === f) return 0;
  const h = i.anchor, g = o.anchor;
  if (h.key !== g.key || h.type !== "text") return 0;
  const p = h.offset, C = g.offset, m = f.length - d.length;
  return m === 1 && C === p - 1 ? 2 : m === -1 && C === p + 1 ? 3 : m === -1 && C === p ? 4 : 0;
}
function r4(e, n, t) {
  let r = t(), s = 0, i = r, o = 0, l = null;
  return (c, u, d, f, h, g) => {
    const p = t();
    if (g.has(zd) && (i = r, o = s, l = c), g.has(da)) return s = 0, r = p, 2;
    g.has(uo) && l && (r = i, s = o, c = l);
    const C = g.has(Bd) || g.has(Vd) ? 0 : n4(c, u, f, h, e.isComposing()), m = (() => {
      const x = d === null || d.editor === e, y = g.has(V6);
      if (!y && x && g.has(tr)) return 0;
      if (C === 1) return 2;
      if (c === null) return 1;
      const _ = u._selection;
      if (!(f.size > 0 || h.size > 0)) return _ !== null ? 0 : 2;
      const v = typeof n == "number" ? n : n.peek();
      return y === !1 && C !== 0 && C === s && p < r + v && x || f.size === 1 && function(w, E, N) {
        const S = E._nodeMap.get(w), k = N._nodeMap.get(w), L = E._selection, A = N._selection;
        return !(I(L) && I(A) && L.anchor.type === "element" && L.focus.type === "element" && A.anchor.type === "text" && A.focus.type === "text" || !$(S) || !$(k) || S.__parent !== k.__parent) && JSON.stringify(E.read(() => S.exportJSON())) === JSON.stringify(N.read(() => k.exportJSON()));
      }(Array.from(f)[0], c, u) ? 0 : 1;
    })();
    return r = p, s = C, m;
  };
}
function Yu(e, n) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function s4(e, n, t, r = Date.now, s, i = null) {
  const o = r4(e, t, r);
  return Bt(e.registerCommand(Do, () => (function(l, c, u) {
    const d = c.redoStack, f = c.undoStack;
    if (f.length !== 0) {
      const h = c.current, g = f.pop();
      h !== null && (d.push(h), l.dispatchCommand(Fs, !0)), f.length === 0 && l.dispatchCommand(Os, !1), c.current = g || null, g && g.editor.setEditorState(g.editorState, { tag: da });
    }
  }(e, n), !0), le), e.registerCommand($o, () => (function(l, c, u) {
    const d = c.redoStack, f = c.undoStack;
    if (d.length !== 0) {
      const h = c.current;
      h !== null && (f.push(h), l.dispatchCommand(Os, !0));
      const g = d.pop();
      d.length === 0 && l.dispatchCommand(Fs, !1), c.current = g || null, g && g.editor.setEditorState(g.editorState, { tag: da });
    }
  }(e, n), !0), le), e.registerCommand(T6, () => (Yu(n), !1), le), e.registerCommand(L6, () => (Yu(n), e.dispatchCommand(Fs, !1), e.dispatchCommand(Os, !1), !0), le), e.registerUpdateListener(({ editorState: l, prevEditorState: c, dirtyLeaves: u, dirtyElements: d, tags: f }) => {
    const h = n.current, g = n.redoStack, p = n.undoStack, C = h === null ? null : h.editorState;
    if (h !== null && l === C) return;
    const m = o(c, l, h, u, d, f);
    if (m === 1) {
      if (g.length !== 0 && (n.redoStack = [], e.dispatchCommand(Fs, !1)), h !== null) {
        p.push({ ...h });
        const x = typeof i == "number" || i === null ? i : i.peek();
        x !== null && p.length > x && p.splice(0, p.length - x), e.dispatchCommand(Os, !0);
      }
    } else if (m === 2) return;
    n.current = { editor: e, editorState: l };
  }));
}
function i4() {
  return { current: null, redoStack: [], undoStack: [] };
}
function o4({ delay: e, externalHistoryState: n }) {
  const [t] = Jt();
  return function(r, s, i = 1e3) {
    const o = ut(() => s || i4(), [s]);
    we(() => s4(r, o, i), [i, r, o]);
  }(t, n, e), null;
}
const qu = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class pr extends We {
  constructor(t = "", r = {}, s) {
    super(s);
    M(this, "__url");
    M(this, "__target");
    M(this, "__rel");
    M(this, "__title");
    const { target: i = null, rel: o = null, title: l = null } = r;
    this.__url = t, this.__target = i, this.__rel = o, this.__title = l;
  }
  $config() {
    return this.config("link", { extends: We, importDOM: { a: () => ({ conversion: a4, priority: 1 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__url = t.__url, this.__rel = t.__rel, this.__target = t.__target, this.__title = t.__title;
  }
  createDOM(t) {
    const r = je().createElement("a");
    return this.updateLinkDOM(null, r, t), cn(r, t.theme.link), r;
  }
  updateLinkDOM(t, r, s) {
    if (L5(r)) {
      t && t.__url === this.__url || (r.href = this.sanitizeUrl(this.__url));
      for (const i of ["target", "rel", "title"]) {
        const o = `__${i}`, l = this[o];
        t && t[o] === l || (l ? r[i] = l : r.removeAttribute(i));
      }
    }
  }
  updateDOM(t, r, s) {
    return this.updateLinkDOM(t, r, s), !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setURL(t.url).setRel(t.rel || null).setTarget(t.target || null).setTitle(t.title || null);
  }
  sanitizeUrl(t) {
    const r = t;
    t = e0(t);
    try {
      const s = new URL(e0(t));
      if (!qu.has(s.protocol)) return "about:blank";
    } catch {
      const i = r.replace(/[\u0000-\u001F\u007F\s]/g, "").match(/^([a-z][a-z0-9+.-]*):/i);
      if (i != null && !qu.has(`${i[1].toLowerCase()}:`)) return "about:blank";
    }
    return t;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), url: this.getURL() };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(t) {
    const r = this.getWritable();
    return r.__url = t, r;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(t) {
    const r = this.getWritable();
    return r.__target = t, r;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(t) {
    const r = this.getWritable();
    return r.__rel = t, r;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(t) {
    const r = this.getWritable();
    return r.__title = t, r;
  }
  insertNewAfter(t, r = !0) {
    const s = rt(this);
    return this.insertAfter(s, r), s;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(t, r, s) {
    if (!I(r)) return !1;
    const i = r.anchor.getNode(), o = r.focus.getNode();
    return (this.is(i) || this.isParentOf(i)) && (this.is(o) || this.isParentOf(o)) && r.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
  shouldMergeAdjacentLink(t) {
    return this.getType() === t.getType() && this.__url === t.__url && this.__target === t.__target && this.__rel === t.__rel && this.__title === t.__title;
  }
}
function Ju(e) {
  const n = bt(e, "next");
  return [n, n.getFlipped()];
}
function Xu(e, n) {
  for (const t of n) if (t.origin.isAttached()) {
    const r = yt(t);
    return void gr(e, r);
  }
}
function l4(e) {
  const n = B();
  let t = null, r = null;
  function s() {
    I(n) && (Xu(n.anchor, t), Xu(n.focus, r), Cn(n));
  }
  I(n) && (t = Ju(n.anchor), r = Ju(n.focus));
  let i = !1;
  for (const l of _t(e, "next")) {
    const c = l.origin;
    if (T(c) && !c.isInline()) {
      const u = c.getChildren();
      if (u.length > 0) {
        const d = rt(e);
        d.append(...u), c.append(d), i = !0;
      }
      f1(c, Zn(l), { $shouldSplit: () => !1 });
    }
  }
  function o(l, c, u) {
    const [d, f] = l, h = (p) => En(p) && p.origin.is(c);
    if (!h(d) && !h(f)) return l;
    const g = yt(_t(u, "next"));
    return [g, g.getFlipped()];
  }
  if (e.isAttached()) {
    const l = e.getPreviousSibling();
    if (tn(l) && l.shouldMergeAdjacentLink(e)) return t && (t = o(t, l, e)), r && (r = o(r, l, e)), l.append(...e.getChildren()), e.remove(), void s();
    const c = e.getNextSibling();
    tn(c) && e.shouldMergeAdjacentLink(c) && (t && (t = o(t, e, c)), r && (r = o(r, e, c)), e.append(...c.getChildren()), c.remove(), i = !0);
  }
  if (i) {
    if (!e.canBeEmpty() && e.isEmpty()) {
      const l = e.getParent();
      e.remove(), l && l.isEmpty() && l.remove();
    }
    s();
  }
}
function a4(e) {
  let n = null;
  if (L5(e)) {
    const t = e.textContent;
    (t !== null && t !== "" || e.children.length > 0) && (n = Mo(e.getAttribute("href") || "", { rel: e.getAttribute("rel"), target: e.getAttribute("target"), title: e.getAttribute("title") }));
  }
  return { node: n };
}
function Mo(e = "", n) {
  return qt(new pr(e, n));
}
function tn(e) {
  return e instanceof pr;
}
class k1 extends pr {
  constructor(t = "", r = {}, s) {
    super(t, r, s);
    M(this, "__isUnlinked");
    this.__isUnlinked = r.isUnlinked !== void 0 && r.isUnlinked !== null && r.isUnlinked;
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__isUnlinked = t.__isUnlinked;
  }
  $config() {
    return this.config("autolink", { extends: pr });
  }
  shouldMergeAdjacentLink(t) {
    return !1;
  }
  getIsUnlinked() {
    return this.__isUnlinked;
  }
  setIsUnlinked(t) {
    const r = this.getWritable();
    return r.__isUnlinked = t, r;
  }
  createDOM(t) {
    return this.__isUnlinked ? je().createElement("span") : super.createDOM(t);
  }
  updateDOM(t, r, s) {
    return super.updateDOM(t, r, s) || t.__isUnlinked !== this.__isUnlinked;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setIsUnlinked(t.isUnlinked || !1);
  }
  exportJSON() {
    return { ...super.exportJSON(), isUnlinked: this.__isUnlinked };
  }
  insertNewAfter(t, r = !0) {
    const s = c4(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(s, r), s;
  }
}
function c4(e = "", n) {
  return qt(new k1(e, n));
}
function Ns(e) {
  return e instanceof k1;
}
const Fo = /* @__PURE__ */ ne("TOGGLE_LINK_COMMAND");
function Qu(e, n) {
  if (e.type === "element") {
    const t = e.getNode();
    return T(t) || function(r, ...s) {
      const i = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
      o.append("code", r);
      for (const l of s) o.append("v", l);
      throw i.search = o.toString(), Error(`Minified Lexical error #${r}; visit ${i.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }(252), t.getChildren()[e.offset + n] || null;
  }
  return null;
}
function Fl(e, n = {}) {
  let t;
  if (e && typeof e == "object") {
    const { url: d, ...f } = e;
    t = d, n = { ...f, ...n };
  } else t = e;
  const { target: r, title: s } = n, i = n.rel === void 0 ? "noreferrer" : n.rel, o = B();
  if (o === null || !I(o) && !Ne(o)) return;
  if (Ne(o)) {
    const d = o.getNodes();
    return d.length === 0 ? void 0 : void d.forEach((f) => {
      if (t === null) {
        const h = Ee(f, (g) => !Ns(g) && tn(g));
        h && (h.insertBefore(f), h.getChildren().length === 0 && h.remove());
      } else {
        const h = Ee(f, (g) => !Ns(g) && tn(g));
        if (h) h.setURL(t), r !== void 0 && h.setTarget(r), i !== void 0 && h.setRel(i);
        else {
          const g = Mo(t, { rel: i, target: r });
          f.insertBefore(g), g.append(f);
        }
      }
    });
  }
  if (o.isCollapsed() && t === null) for (const d of o.getNodes()) {
    const f = Ee(d, (h) => !Ns(h) && tn(h));
    return void (f !== null && (f.getParentOrThrow().splice(f.getIndexWithinParent(), 0, f.getChildren()), f.remove()));
  }
  const l = o.extract();
  if (t === null) {
    const d = /* @__PURE__ */ new Set();
    return void l.forEach((f) => {
      const h = Ee(f, (g) => !Ns(g) && tn(g));
      if (h !== null) {
        const g = h.getKey();
        if (d.has(g)) return;
        (function(p, C) {
          const m = new Set(C.filter((S) => p.isParentOf(S)).map((S) => S.getKey())), x = p.getChildren(), y = (S) => m.has(S.getKey()) || T(S) && C.some((k) => p.isParentOf(k) && S.isParentOf(k)), _ = x.filter(y);
          if (_.length === x.length) return x.forEach((S) => p.insertBefore(S)), void p.remove();
          const v = x.findIndex(y), w = x.findLastIndex(y), E = v === 0, N = w === x.length - 1;
          if (E) _.forEach((S) => p.insertBefore(S));
          else if (N) for (let S = _.length - 1; S >= 0; S--) p.insertAfter(_[S]);
          else {
            for (let k = _.length - 1; k >= 0; k--) p.insertAfter(_[k]);
            const S = x.slice(w + 1);
            if (S.length > 0) {
              const k = rt(p);
              _[_.length - 1].insertAfter(k), S.forEach((L) => k.append(L));
            }
          }
        })(h, l), d.add(g);
      }
    });
  }
  const c = /* @__PURE__ */ new Set(), u = (d) => {
    c.has(d.getKey()) || (c.add(d.getKey()), d.setURL(t), r !== void 0 && d.setTarget(r), i !== void 0 && d.setRel(i), s !== void 0 && d.setTitle(s));
  };
  if (l.length === 1) {
    const d = l[0], f = Ee(d, tn);
    if (f !== null) return u(f);
  }
  (function(d) {
    const f = B();
    if (!I(f)) return d();
    const h = Cn(f), g = h.isBackward(), p = Qu(h.anchor, g ? -1 : 0), C = Qu(h.focus, g ? 0 : -1);
    if (d(), p || C) {
      const m = B();
      if (I(m)) {
        const x = m.clone();
        if (p) {
          const y = p.getParent();
          y && x.anchor.set(y.getKey(), p.getIndexWithinParent() + (g ? 1 : 0), "element");
        }
        if (C) {
          const y = C.getParent();
          y && x.focus.set(y.getKey(), C.getIndexWithinParent() + (g ? 0 : 1), "element");
        }
        Xe(Cn(x));
      }
    }
  })(() => {
    let d = null;
    for (const f of l) {
      if (!f.isAttached()) continue;
      const h = Ee(f, tn);
      if (h) {
        u(h);
        continue;
      }
      if (T(f)) {
        if (!f.isInline()) continue;
        if (tn(f)) {
          if (!(Ns(f) || d !== null && d.getParentOrThrow().isParentOf(f))) {
            u(f), d = f;
            continue;
          }
          for (const p of f.getChildren()) f.insertBefore(p);
          f.remove();
          continue;
        }
      }
      const g = f.getPreviousSibling();
      tn(g) && g.is(d) ? g.append(f) : (d = Mo(t, { rel: i, target: r, title: s }), f.insertAfter(d), d.append(f));
    }
  });
}
const u4 = /^\+?[0-9\s()-]{5,}$/;
function e0(e) {
  return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : u4.test(e) ? `tel:${e}` : `https://${e}`;
}
Qe.tag("a");
function d4(e, n) {
  return Bt(e.registerNodeTransform(pr, l4), e.registerCommand(Fo, (t) => {
    const r = n.validateUrl.peek(), s = n.attributes.peek();
    if (t === null) return Fl(null), !0;
    if (typeof t == "string") return !(r !== void 0 && !r(t)) && (Fl(t, s), !0);
    {
      const { url: i, target: o, rel: l, title: c } = t;
      return Fl(i, { ...s, rel: l, target: o, title: c }), !0;
    }
  }, le), C1(() => {
    const t = n.validateUrl.value;
    if (!t) return;
    const r = n.attributes.value;
    return e.registerCommand(Io, (s) => {
      const i = B();
      if (!I(i) || i.isCollapsed() || !yn(s, ClipboardEvent) || s.clipboardData === null) return !1;
      const o = s.clipboardData.getData("text");
      return t(o) ? !i.getNodes().some((l) => T(l) || $(l) && !l.isSimpleText()) && (e.dispatchCommand(Fo, { ...r, url: o }), s.preventDefault(), !0) : !1;
    }, Xn);
  }));
}
function f4({ validateUrl: e, attributes: n }) {
  const [t] = Jt();
  return we(() => {
    if (!t.hasNodes([pr])) throw new Error("LinkPlugin: LinkNode not registered on editor");
  }), we(() => d4(t, C7({ attributes: n, validateUrl: e })), [t, e, n]), null;
}
function In(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const s of n) r.append("v", s);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function ja(e) {
  let n = 1, t = e.getParent();
  for (; t != null; ) {
    if (me(t)) {
      const r = t.getParent();
      if (ae(r)) {
        n++, t = r.getParent();
        continue;
      }
      In(40);
    }
    return n;
  }
  return n;
}
function Aa(e) {
  const n = e.getParent();
  ae(n) || In(40);
  let t = n, r = n;
  for (; r !== null; ) r = r.getParent(), ae(r) && (t = r);
  return t;
}
function M2(e) {
  let n = [];
  const t = e.getChildren().filter(me);
  for (let r = 0; r < t.length; r++) {
    const s = t[r], i = s.getFirstChild();
    ae(i) ? n = n.concat(M2(i)) : n.push(s);
  }
  return n;
}
function Ft(e) {
  return me(e) && ae(e.getFirstChild());
}
function F2(e, n) {
  return me(e) && (n.length === 0 || n.length === 1 && e.is(n[0]) && e.getChildrenSize() === 0);
}
function t0(e) {
  const n = B();
  if (n !== null) {
    let t = n.getNodes();
    if (I(n)) {
      const [s] = n.getStartEndPoints(), i = s.getNode(), o = i.getParent();
      if (Me(i)) {
        const l = i.getFirstChild();
        if (l) t = l.selectStart().getNodes();
        else {
          const c = Se();
          i.append(c), t = c.select().getNodes();
        }
      } else if (F2(i, t)) {
        const l = ln(e);
        if (Me(o)) {
          i.replace(l);
          const c = Tn();
          T(i) && (c.setFormat(i.getFormatType()), c.setIndent(i.getIndent())), l.append(c);
        } else if (me(i)) {
          const c = i.getParentOrThrow();
          mr(l, c.getChildren()), c.replace(l);
        }
        return;
      }
    }
    const r = /* @__PURE__ */ new Set();
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (T(i) && i.isEmpty() && !me(i) && !r.has(i.getKey())) {
        n0(i, e);
        continue;
      }
      let o = p5(i) ? i.getParent() : me(i) && i.isEmpty() ? i : null;
      for (; o != null; ) {
        const l = o.getKey();
        if (ae(o)) {
          if (!r.has(l)) {
            const c = ln(e);
            mr(c, o.getChildren()), o.replace(c), r.add(l);
          }
          break;
        }
        {
          const c = o.getParent();
          if (Me(c) && !r.has(l)) {
            r.add(l), n0(o, e);
            break;
          }
          o = c;
        }
      }
    }
  }
}
function mr(e, n) {
  e.splice(e.getChildrenSize(), 0, n);
}
function n0(e, n) {
  if (ae(e)) return e;
  const t = e.getPreviousSibling(), r = e.getNextSibling(), s = Tn();
  let i;
  if (mr(s, e.getChildren()), ae(t) && n === t.getListType()) t.append(s), ae(r) && n === r.getListType() && (mr(t, r.getChildren()), r.remove()), i = t;
  else if (ae(r) && n === r.getListType()) r.getFirstChildOrThrow().insertBefore(s), i = r;
  else {
    const l = ln(n);
    l.append(s), e.replace(l), i = l;
  }
  s.setFormat(e.getFormatType()), s.setIndent(e.getIndent());
  const o = B();
  return I(o) && (i.getKey() === o.anchor.key && o.anchor.set(s.getKey(), o.anchor.offset, "element"), i.getKey() === o.focus.key && o.focus.set(s.getKey(), o.focus.offset, "element")), e.remove(), i;
}
function E1(e, n) {
  const t = e.getLastChild(), r = n.getFirstChild();
  t && r && Ft(t) && Ft(r) && (E1(t.getFirstChild(), r.getFirstChild()), r.remove());
  const s = n.getChildren();
  s.length > 0 && e.append(...s), n.remove();
}
function h4() {
  const e = B();
  if (I(e)) {
    const n = /* @__PURE__ */ new Set(), t = e.getNodes(), r = e.anchor.getNode();
    if (F2(r, t)) n.add(Aa(r));
    else for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (p5(i)) {
        const o = g7(i, fs);
        o != null && n.add(Aa(o));
      }
    }
    for (const s of n) {
      let i = s;
      const o = M2(s);
      for (const l of o) {
        const c = Se().setTextStyle(e.style).setTextFormat(e.format);
        mr(c, l.getChildren()), i.insertAfter(c), i = c, l.__key === e.anchor.key && gr(e.anchor, yt(_t(c, "next"))), l.__key === e.focus.key && gr(e.focus, yt(_t(c, "next"))), l.remove();
      }
      s.remove();
    }
  }
}
function O2(e) {
  const n = e.getListType() !== "check";
  let t = e.getStart();
  for (const r of e.getChildren()) me(r) && (r.getValue() !== t && r.setValue(t), n && r.getLatest().__checked != null && r.setChecked(void 0), ae(r.getFirstChild()) || t++);
}
function g4(e) {
  const n = /* @__PURE__ */ new Set();
  if (Ft(e) || n.has(e.getKey())) return;
  const t = e.getParent(), r = e.getNextSibling(), s = e.getPreviousSibling();
  if (Ft(r) && Ft(s)) {
    const i = s.getFirstChild();
    if (ae(i)) {
      i.append(e);
      const o = r.getFirstChild();
      ae(o) && (mr(i, o.getChildren()), r.remove(), n.add(r.getKey()));
    }
  } else if (Ft(r)) {
    const i = r.getFirstChild();
    if (ae(i)) {
      const o = i.getFirstChild();
      o !== null && o.insertBefore(e);
    }
  } else if (Ft(s)) {
    const i = s.getFirstChild();
    ae(i) && i.append(e);
  } else if (ae(t)) {
    const i = rt(e), o = rt(t);
    i.append(o), o.append(e), s ? s.insertAfter(i) : r ? r.insertBefore(i) : t.append(i);
  }
}
function r0(e) {
  if (Ft(e)) return;
  const n = e.getParent(), t = n ? n.getParent() : void 0;
  if (ae(t ? t.getParent() : void 0) && me(t) && ae(n)) {
    const r = n ? n.getFirstChild() : void 0, s = n ? n.getLastChild() : void 0;
    if (e.is(r)) t.insertBefore(e), n.isEmpty() && t.remove();
    else if (e.is(s)) t.insertAfter(e), n.isEmpty() && t.remove();
    else {
      const i = rt(e), o = rt(n);
      i.append(o), e.getPreviousSiblings().forEach((u) => o.append(u));
      const l = rt(e), c = rt(n);
      l.append(c), mr(c, e.getNextSiblings()), t.insertBefore(i), t.insertAfter(l), t.replace(e);
    }
  }
}
function p4(e = !1) {
  const n = B();
  if (!I(n) || !n.isCollapsed()) return !1;
  const t = n.anchor.getNode();
  let r = null;
  if (me(t) && t.getChildrenSize() === 0) r = t;
  else if ($(t)) {
    const u = t.getParent();
    me(u) && u.getChildren().every((d) => $(d) && d.getTextContent().trim() === "") && (r = u);
  }
  if (r === null) return !1;
  const s = Aa(r), i = r.getParent();
  ae(i) || In(40);
  const o = i.getParent();
  let l;
  if (Me(o)) l = Se(), s.insertAfter(l);
  else {
    if (!me(o)) return !1;
    l = rt(o), o.insertAfter(l);
  }
  l.setTextStyle(n.style).setTextFormat(n.format).select();
  const c = r.getNextSiblings();
  if (c.length > 0) {
    const u = e ? function(f, h) {
      return f.getStart() + h.getIndexWithinParent();
    }(i, r) : 1, d = rt(i).setStart(u);
    if (me(l)) {
      const f = rt(l);
      f.append(d), l.insertAfter(f);
    } else l.insertAfter(d);
    d.append(...c);
  }
  return function(u) {
    let d = u;
    for (; d.getNextSibling() == null && d.getPreviousSibling() == null; ) {
      const f = d.getParent();
      if (f == null || !me(f) && !ae(f)) break;
      d = f;
    }
    d.remove();
  }(r), !0;
}
class fs extends We {
  constructor(t = 1, r = void 0, s) {
    super(s);
    M(this, "__value");
    M(this, "__checked");
    this.__value = t === void 0 ? 1 : t, this.__checked = r;
  }
  $config() {
    return this.config("listitem", { $transform: (t) => {
      const r = t.getParent();
      if (ae(r)) r.getListType() !== "check" && t.getChecked() != null && t.setChecked(void 0);
      else if (r) {
        const s = t.createParentElementNode();
        ae(s) || In(340);
        const i = [t];
        for (const o of ["previous", "next"]) {
          i.reverse();
          for (const { origin: l } of _e(t, o)) {
            if (!me(l)) break;
            i.push(l);
          }
        }
        t.insertBefore(s), s.splice(0, 0, i), Me(r) || (f1(s, Zn(_e(s, "next")), { $shouldSplit: () => !1, removeEmptyDestination: !0 }), r.isEmpty() && r.isAttached() && r.remove());
      }
    }, extends: We, importDOM: { li: () => ({ conversion: m4, priority: 0 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__value = t.__value, this.__checked = t.__checked;
  }
  createDOM(t) {
    const r = je().createElement("li");
    return this.updateListItemDOM(null, r, t), r;
  }
  updateListItemDOM(t, r, s) {
    (function(l, c) {
      const u = c.getParent();
      !ae(u) || u.getListType() !== "check" || ae(c.getFirstChild()) ? (l.removeAttribute("role"), l.removeAttribute("tabIndex"), l.removeAttribute("aria-checked")) : (l.setAttribute("role", "checkbox"), l.setAttribute("tabIndex", "-1"), l.setAttribute("aria-checked", c.getChecked() ? "true" : "false"));
    })(r, this), r.value = this.__value, function(l, c, u) {
      const d = c.list;
      if (!d) return;
      const f = d.listitem, h = d.nested && d.nested.listitem, g = u.getParent(), p = ae(g) && g.getListType() === "check", C = u.getChecked(), m = u.getChildren().some((_) => ae(_)), x = [];
      d.listitemChecked !== void 0 && x.push(d.listitemChecked), d.listitemUnchecked !== void 0 && x.push(d.listitemUnchecked), h !== void 0 && x.push(...bn(h)), x.length > 0 && g1(l, ...x);
      const y = [];
      if (f !== void 0 && y.push(...bn(f)), p) {
        const _ = C ? d.listitemChecked : d.listitemUnchecked;
        _ !== void 0 && y.push(_);
      }
      h !== void 0 && m && y.push(...bn(h)), y.length > 0 && cn(l, ...y);
    }(r, s.theme, this);
    const i = t ? t.__style : "", o = this.__style;
    i !== o && Ur(r.style, o, i), function(l, c, u) {
      const d = c.__textStyle, f = u ? u.__textStyle : "";
      if (u !== null && f === d) return;
      const h = Xs(d);
      for (const g in h) l.style.setProperty(`--listitem-marker-${g}`, h[g]);
      if (f !== "") for (const g in Xs(f)) g in h || l.style.removeProperty(`--listitem-marker-${g}`);
    }(r, this, t);
  }
  updateDOM(t, r, s) {
    const i = r;
    return this.updateListItemDOM(t, i, s), !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setValue(t.value).setChecked(t.checked);
  }
  exportDOM(t) {
    const r = this.createDOM(t._config), s = this.getFormatType();
    s && (r.style.textAlign = s);
    const i = this.getDirection();
    return i && (r.dir = i), Ft(this) ? { after(o) {
      if (oe(o)) {
        const l = o.previousElementSibling;
        if (oe(l) && l.nodeName === "LI") {
          for (; o.firstChild; ) l.append(o.firstChild);
          o.remove();
        }
      }
      return o;
    }, element: r } : { element: r };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), value: this.getValue() };
  }
  append(...t) {
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      if (T(s) && this.canMergeWith(s)) {
        const i = s.getChildren();
        this.append(...i), s.remove();
      } else super.append(s);
    }
    return this;
  }
  replace(t, r) {
    if (me(t)) return super.replace(t);
    this.setIndent(0);
    const s = this.getParentOrThrow();
    if (!ae(s)) return t;
    if (s.__first === this.getKey()) s.insertBefore(t);
    else if (s.__last === this.getKey()) s.insertAfter(t);
    else {
      const l = rt(s);
      let c = this.getNextSibling();
      for (; c; ) {
        const u = c;
        c = c.getNextSibling(), l.append(u);
      }
      s.insertAfter(t), t.insertAfter(l);
    }
    const i = this.__key;
    let o = 0;
    if (r && (T(t) || In(139), o = t.getChildrenSize(), t.splice(o, 0, this.getChildren())), r && T(t)) {
      const l = B();
      if (I(l)) for (const c of l.getStartEndPoints()) c.key === i && c.type === "element" && c.set(t.getKey(), o + c.offset, "element");
    }
    return this.remove(), s.getChildrenSize() === 0 && s.remove(), t;
  }
  insertAfter(t, r = !0) {
    const s = this.getParentOrThrow();
    if (ae(s) || In(39), me(t)) return super.insertAfter(t, r);
    const i = this.getNextSiblings();
    if (s.insertAfter(t, r), i.length !== 0) {
      const o = rt(s);
      i.forEach((l) => o.append(l)), t.insertAfter(o, r);
    }
    return t;
  }
  remove(t) {
    const r = this.getPreviousSibling(), s = this.getNextSibling();
    super.remove(t), r && s && Ft(r) && Ft(s) && (E1(r.getFirstChild(), s.getFirstChild()), s.remove());
  }
  resetOnCopyNodeFrom(t) {
    super.resetOnCopyNodeFrom(t), t.getChecked() && this.setChecked(!1);
  }
  insertNewAfter(t, r = !0) {
    const s = rt(this);
    return this.insertAfter(s, r), s;
  }
  collapseAtStart(t) {
    if (Ft(this)) return !1;
    const r = this.getParentOrThrow();
    if (me(r.getParentOrThrow())) return r0(this), !0;
    const s = Se().append(...this.getChildren()), i = this.getNextSiblings();
    if (i.length > 0) {
      const o = rt(r);
      o.append(...i), r.insertAfter(o);
    }
    return r.insertAfter(s), this.remove(), r.getChildrenSize() === 0 && r.remove(), s.selectStart(), !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(t) {
    const r = this.getWritable();
    return r.__value = t, r;
  }
  getChecked() {
    const t = this.getLatest();
    let r;
    const s = this.getParent();
    return ae(s) && (r = s.getListType()), r === "check" ? !!t.__checked : void 0;
  }
  setChecked(t) {
    const r = this.getWritable();
    return r.__checked = t, r;
  }
  toggleChecked() {
    const t = this.getWritable();
    return t.setChecked(!t.__checked);
  }
  getIndent() {
    const t = this.getParent();
    if (t === null || !this.isAttached()) return this.getLatest().__indent;
    let r = t.getParentOrThrow(), s = 0;
    for (; me(r); ) r = r.getParentOrThrow().getParentOrThrow(), s++;
    return s;
  }
  setIndent(t) {
    typeof t != "number" && In(117), (t = Math.floor(t)) >= 0 || In(199);
    let r = this.getIndent();
    for (; r !== t; ) r < t ? (g4(this), r++) : (r0(this), r--);
    return this;
  }
  canInsertAfter(t) {
    return me(t);
  }
  canReplaceWith(t) {
    return me(t);
  }
  canMergeWith(t) {
    return me(t) || ci(t);
  }
  extractWithChild(t, r) {
    if (!I(r)) return !1;
    const s = r.anchor.getNode(), i = r.focus.getNode();
    return this.isParentOf(s) && this.isParentOf(i) && this.getTextContent().length === r.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return ln("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function m4(e) {
  if (e.classList.contains("task-list-item")) {
    for (const r of e.children) if (r.tagName === "INPUT") return s0(r);
  }
  if (e.classList.contains("joplin-checkbox")) {
    for (const r of e.children) if (r.classList.contains("checkbox-wrapper") && r.children.length > 0 && r.children[0].tagName === "INPUT") return s0(r.children[0]);
  }
  const n = e.getAttribute("aria-checked"), t = Tn(n === "true" || n !== "false" && void 0);
  return dn(t, e), { after: I2.bind(null, t), node: Vt(t, e) };
}
function s0(e) {
  if (e.getAttribute("type") !== "checkbox") return { node: null };
  const n = Tn(e.hasAttribute("checked"));
  return { after: I2.bind(null, n), node: n };
}
function I2(e, n) {
  const t = n[0];
  return n.length === 1 && ci(t) && !e.getFormatType() && t.getFormatType() ? (e.setFormat(t.getFormatType()), t.getChildren()) : n;
}
function Tn(e) {
  return qt(new fs(void 0, e));
}
function me(e) {
  return e instanceof fs;
}
class gi extends We {
  constructor(t = "number", r = 1, s) {
    super(s);
    M(this, "__tag");
    M(this, "__start");
    M(this, "__listType");
    const i = x4[t] || t;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = r;
  }
  $config() {
    return this.config("list", { $transform: (t) => {
      (function(r) {
        const s = r.getNextSibling();
        ae(s) && r.getListType() === s.getListType() && E1(r, s);
      })(t), O2(t);
    }, extends: We, importDOM: { ol: () => ({ conversion: o0, priority: 0 }), ul: () => ({ conversion: o0, priority: 0 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__listType = t.__listType, this.__tag = t.__tag, this.__start = t.__start;
  }
  getTag() {
    return this.getLatest().__tag;
  }
  setListType(t) {
    const r = this.getWritable();
    return r.__listType = t, r.__tag = t === "number" ? "ol" : "ul", r;
  }
  getListType() {
    return this.getLatest().__listType;
  }
  getStart() {
    return this.getLatest().__start;
  }
  setStart(t) {
    const r = this.getWritable();
    return r.__start = t, r;
  }
  createDOM(t, r) {
    const s = this.__tag, i = je().createElement(s);
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, i0(i, t.theme, this), i;
  }
  updateDOM(t, r, s) {
    return t.__tag !== this.__tag || t.__listType !== this.__listType || (i0(r, s.theme, this), t.__start !== this.__start && r.setAttribute("start", String(this.__start)), !1);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setListType(t.listType).setStart(t.start);
  }
  exportDOM(t) {
    const r = this.createDOM(t._config, t);
    return oe(r) && (this.__start !== 1 && r.setAttribute("start", String(this.__start)), this.__listType === "check" && r.setAttribute("__lexicalListType", "check")), { element: r };
  }
  exportJSON() {
    return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag() };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  splice(t, r, s) {
    let i = s;
    for (let o = 0; o < s.length; o++) {
      const l = s[o];
      me(l) || (i === s && (i = [...s]), i[o] = this.createListItemNode().append(!T(l) || ae(l) || l.isInline() ? l : pt(l.getTextContent())));
    }
    return super.splice(t, r, i);
  }
  extractWithChild(t) {
    return me(t);
  }
  createListItemNode() {
    return Tn();
  }
}
function i0(e, n, t) {
  const r = [], s = [], i = n.list;
  if (i !== void 0) {
    const o = i[`${t.__tag}Depth`] || [], l = ja(t) - 1, c = l % o.length, u = o[c], d = i[t.__tag];
    let f;
    const h = i.nested, g = i.checklist;
    if (h !== void 0 && h.list && (f = h.list), d !== void 0 && r.push(d), g !== void 0 && t.__listType === "check" && r.push(g), u !== void 0) {
      r.push(...bn(u));
      for (let p = 0; p < o.length; p++) p !== c && s.push(t.__tag + p);
    }
    if (f !== void 0) {
      const p = bn(f);
      l > 1 ? r.push(...p) : s.push(...p);
    }
  }
  s.length > 0 && g1(e, ...s), r.length > 0 && cn(e, ...r);
}
function o0(e) {
  let n;
  if (function(t) {
    return oe(t) && t.nodeName.toLowerCase() === "ol";
  }(e)) {
    const t = e.start;
    n = ln("number", t);
  } else n = function(t) {
    if (t.getAttribute("__lexicallisttype") === "check" || t.classList.contains("contains-task-list") || t.getAttribute("data-is-checklist") === "1") return !0;
    for (const r of t.childNodes) if (oe(r) && r.hasAttribute("aria-checked")) return !0;
    return !1;
  }(e) ? ln("check") : ln("bullet");
  return Vt(n, e), { after: (t) => function(r, s) {
    const i = s.createListItemNode.bind(s), o = [];
    for (let l = 0; l < r.length; l++) {
      const c = r[l];
      if (me(c)) {
        o.push(c);
        const u = c.getChildren();
        u.length > 1 && u.forEach((d) => {
          ae(d) && o.push(i().append(d));
        });
      } else o.push(i().append(c));
    }
    return o;
  }(t, n), node: n };
}
const x4 = { ol: "number", ul: "bullet" };
function ln(e = "number", n = 1) {
  return qt(new gi(e, n));
}
function ae(e) {
  return e instanceof gi;
}
function C4(e) {
  const n = [];
  for (const t of e) if (me(t)) {
    n.push(t);
    const r = t.getChildren();
    if (r.length > 1) for (const s of r) ae(s) && n.push(Tn().append(s));
  } else n.push(Tn().append(t));
  return n;
}
const y4 = { $import: (e, n) => {
  let t;
  var r;
  return f2(n, "ol") ? t = ln("number", n.start) : t = (r = n).matches('[__lexicallisttype="check"], .contains-task-list, [data-is-checklist="1"]') || r.querySelector(":scope > [aria-checked]") !== null ? ln("check") : ln("bullet"), Vt(t, n), [t.splice(0, 0, p2(C4(e.$importChildren(n)), n))];
}, match: Qe.tag("ol", "ul"), name: "@lexical/list/list" };
function D2(e, n) {
  if (n.length !== 1) return n;
  const t = n[0];
  return ci(t) && !e.getFormatType() && t.getFormatType() ? (e.setFormat(t.getFormatType()), t.getChildren()) : n;
}
function $2(e) {
  const n = (o) => b1(o) && !ae(o);
  if (!e.some(n)) return e;
  const t = [];
  let r = [];
  const s = () => {
    r.length > 0 && (t.push(r), r = []);
  };
  for (const o of e) n(o) ? (s(), t.push(T(o) ? o.getChildren() : [o])) : r.push(o);
  s();
  const i = [];
  for (const o of t) i.length > 0 && i.push(Sn()), i.push(...o);
  return i;
}
const _4 = { $import: (e, n) => {
  const t = n.getAttribute("aria-checked"), r = Tn(t === "true" || t !== "false" && void 0);
  return dn(r, n), Vt(r, n), [r.splice(0, 0, $2(D2(r, e.$importChildren(n))))];
}, match: Qe.tag("li"), name: "@lexical/list/li" };
function l0(e, n, t) {
  const r = f2(t, "input") ? t : t.querySelector('input[type="checkbox"]');
  if (!r || r.getAttribute("type") !== "checkbox") return [];
  const s = Tn(r.hasAttribute("checked"));
  return dn(s, n), Vt(s, n), [s.splice(0, 0, $2(D2(s, e.$importChildren(n))))];
}
Qe.tag("li").classAll("task-list-item"), Qe.tag("li").classAll("joplin-checkbox");
const b4 = /* @__PURE__ */ ne("UPDATE_LIST_START_COMMAND"), R2 = /* @__PURE__ */ ne("INSERT_UNORDERED_LIST_COMMAND"), P2 = /* @__PURE__ */ ne("INSERT_ORDERED_LIST_COMMAND"), Ma = /* @__PURE__ */ ne("REMOVE_LIST_COMMAND");
function a0(e, n) {
  return Bt(e.registerCommand(P2, () => (t0("number"), !0), Xn), e.registerCommand(b4, (t) => {
    const { listNodeKey: r, newStart: s } = t, i = Le(r);
    return !!ae(i) && (i.getListType() === "number" && (i.setStart(s), O2(i)), !0);
  }, Xn), e.registerCommand(R2, () => (t0("bullet"), !0), Xn), e.registerCommand(Ma, () => (h4(), !0), Xn), e.registerCommand(Gs, () => p4(!!(n && n.restoreNumbering)), Xn), e.registerCommand(za, (t) => {
    const r = B();
    if (!I(r) || !r.isCollapsed()) return !1;
    const { anchor: s } = r;
    if (s.offset !== 0) return !1;
    let i = s.getNode();
    for (; !me(i); ) {
      if (i.getPreviousSibling() !== null) return !1;
      const o = i.getParent();
      if (o === null) return !1;
      i = o;
    }
    return !(!me(i) || !i.collapseAtStart(r)) && (t.preventDefault(), !0);
  }, h3), e.registerNodeTransform(fs, (t) => {
    const r = t.getFirstChild();
    if (r) {
      if ($(r)) {
        const s = r.getStyle(), i = r.getFormat();
        t.getTextStyle() !== s && t.setTextStyle(s), t.getTextFormat() !== i && t.setTextFormat(i);
      }
    } else {
      const s = B();
      I(s) && (s.style !== t.getTextStyle() || s.format !== t.getTextFormat()) && s.isCollapsed() && t.is(s.anchor.getNode()) && t.setTextStyle(s.style).setTextFormat(s.format);
    }
  }), e.registerNodeTransform(wn, (t) => {
    const r = t.getParent();
    if (me(r) && t.is(r.getFirstChild())) {
      const s = t.getStyle(), i = t.getFormat();
      s === r.getTextStyle() && i === r.getTextFormat() || r.setTextStyle(s).setTextFormat(i);
    }
  }));
}
function v4(e) {
  const n = (t) => {
    const r = t.getParent();
    if (ae(t.getFirstChild()) || !ae(r)) return;
    const s = Ee(t, (i) => me(i) && ae(i.getParent()) && me(i.getPreviousSibling()));
    if (s === null && t.getIndent() > 0) t.setIndent(0);
    else if (me(s)) {
      const i = s.getPreviousSibling();
      if (me(i)) {
        const o = function(c) {
          let u = c, d = u.getFirstChild();
          for (; ae(d); ) {
            const f = d.getLastChild();
            if (!me(f)) break;
            u = f, d = u.getFirstChild();
          }
          return u;
        }(i), l = o.getParent();
        if (ae(l)) {
          const c = ja(l);
          c + 1 < ja(r) && t.setIndent(c);
        }
      }
    }
  };
  return e.registerNodeTransform(gi, (t) => {
    const r = [t];
    for (; r.length > 0; ) {
      const s = r.shift();
      if (ae(s)) {
        for (const i of s.getChildren()) if (me(i)) {
          n(i);
          const o = i.getFirstChild();
          ae(o) && r.push(o);
        }
      }
    }
  });
}
function w4({ hasStrictIndent: e = !1, shouldPreserveNumbering: n = !1 }) {
  const [t] = Jt();
  return we(() => {
    if (!t.hasNodes([gi, fs])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [t]), we(() => Bt(a0(t, { restoreNumbering: n }), e ? v4(t) : () => {
  }), [t, e, n]), function(r) {
    we(() => a0(r), [r]);
  }(t), null;
}
const S4 = it ? xr : we;
function k4({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: n = !1, onChange: t }) {
  const [r] = Jt();
  return S4(() => {
    if (t) return r.registerUpdateListener(({ editorState: s, dirtyElements: i, dirtyLeaves: o, prevEditorState: l, tags: c }) => {
      n && i.size === 0 && o.size === 0 || e && c.has(tr) || l.isEmpty() || t(s, r, c);
    });
  }, [r, e, n, t]), null;
}
class E4 extends bf {
  constructor() {
    super(...arguments);
    M(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    this.props.onError(t instanceof Error ? t : new Error(String(t), { cause: t }), r);
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
function N4({ children: e, fallback: n, onError: t }) {
  return a.jsx(E4, { fallback: n === void 0 ? /* @__PURE__ */ a.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }) : n, onError: t, children: e });
}
function T4(e, n) {
  let t = e;
  for (let r = _e(e, n); r && (V2(r.origin) || Qr(r.origin)); r = r.getAdjacentCaret()) t = r.origin;
  return t;
}
function L4(e) {
  return T4(e, "previous");
}
function H2(e, n) {
  for (const t of e.childNodes)
    if (oe(t) && t.tagName === n || H2(t, n)) return !0;
  return !1;
}
const Is = "data-language", Ts = "data-highlight-language", Vi = "data-theme";
class N1 extends We {
  constructor(t = void 0, r) {
    super(r);
    M(this, "__language");
    M(this, "__theme");
    M(this, "__isSyntaxHighlightSupported");
    this.__language = t || void 0, this.__isSyntaxHighlightSupported = !1, this.__theme = void 0;
  }
  $config() {
    return this.config("code", { extends: We, importDOM: { code: (t) => t.textContent != null && (/\r?\n/.test(t.textContent) || H2(t, "BR")) ? { conversion: c0, priority: 1 } : null, div: () => ({ conversion: j4, priority: 1 }), pre: () => ({ conversion: c0, priority: 0 }), table: (t) => Ol(t) ? { conversion: A4, priority: 3 } : null, td: (t) => {
      const r = t, s = r.closest("table");
      return r.classList.contains("js-file-line") || s && Ol(s) ? { conversion: u0, priority: 3 } : null;
    }, tr: (t) => {
      const r = t.closest("table");
      return r && Ol(r) ? { conversion: u0, priority: 3 } : null;
    } } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__language = t.__language, this.__theme = t.__theme, this.__isSyntaxHighlightSupported = t.__isSyntaxHighlightSupported;
  }
  createDOM(t) {
    const r = je().createElement("code");
    cn(r, t.theme.code), r.setAttribute("spellcheck", "false");
    const s = this.getLanguage();
    s && (r.setAttribute(Is, s), this.getIsSyntaxHighlightSupported() && r.setAttribute(Ts, s));
    const i = this.getTheme();
    i && r.setAttribute(Vi, i);
    const o = this.getStyle();
    return o && Ur(r.style, o), r;
  }
  updateDOM(t, r, s) {
    const i = this.__language, o = t.__language;
    i ? i !== o && r.setAttribute(Is, i) : o && r.removeAttribute(Is);
    const l = this.__isSyntaxHighlightSupported;
    t.__isSyntaxHighlightSupported && o ? l && i ? i !== o && r.setAttribute(Ts, i) : r.removeAttribute(Ts) : l && i && r.setAttribute(Ts, i);
    const c = this.__theme, u = t.__theme;
    c ? c !== u && r.setAttribute(Vi, c) : u && r.removeAttribute(Vi);
    const d = this.__style, f = t.__style;
    return d !== f && Ur(r.style, d, f), !1;
  }
  exportDOM(t) {
    const r = je().createElement("pre");
    cn(r, t._config.theme.code), r.setAttribute("spellcheck", "false");
    const s = this.getLanguage();
    s && (r.setAttribute(Is, s), this.getIsSyntaxHighlightSupported() && r.setAttribute(Ts, s));
    const i = this.getTheme();
    i && r.setAttribute(Vi, i);
    const o = this.getStyle();
    return o && Ur(r.style, o), { element: r };
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setLanguage(t.language).setTheme(t.theme);
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage(), theme: this.getTheme() };
  }
  insertNewAfter(t, r = !0) {
    if (!fi(De(), "@lexical/code")) {
      const l = M4(t);
      if (l) return l;
    }
    const { anchor: s, focus: i } = t, o = (s.isBefore(i) ? s : i).getNode();
    if ($(o)) {
      let l = L4(o);
      const c = [];
      for (; ; ) if (Qr(l)) c.push(Ho()), l = l.getNextSibling();
      else {
        if (!V2(l)) break;
        {
          let C = 0;
          const m = l.getTextContent(), x = l.getTextContentSize();
          for (; C < x && m[C] === " "; ) C++;
          if (C !== 0 && c.push(F4(" ".repeat(C))), C !== x) break;
          l = l.getNextSibling();
        }
      }
      const u = o.splitText(s.offset)[0], d = s.offset === 0 ? 0 : 1, f = u.getIndexWithinParent() + d, h = o.getParentOrThrow(), g = [Sn(), ...c];
      h.splice(f, 0, g);
      const p = c[c.length - 1];
      p ? p.select() : s.offset === 0 ? u.selectPrevious() : u.getNextSibling().selectNext(0, 0);
    }
    if (T1(o)) {
      const { offset: l } = t.anchor;
      o.splice(l, 0, [Sn()]), o.select(l + 1, l + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const t = Se();
    return this.getChildren().forEach((r) => t.append(r)), this.replace(t), !0;
  }
  setLanguage(t) {
    const r = this.getWritable();
    return r.__language = t || void 0, r;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  setIsSyntaxHighlightSupported(t) {
    const r = this.getWritable();
    return r.__isSyntaxHighlightSupported = t, r;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
  setTheme(t) {
    const r = this.getWritable();
    return r.__theme = t || void 0, r;
  }
  getTheme() {
    return this.getLatest().__theme;
  }
}
function Yt(e, n) {
  return M5(N1).setLanguage(e).setTheme(n);
}
function T1(e) {
  return e instanceof N1;
}
function c0(e) {
  return { node: Yt(e.getAttribute(Is)) };
}
function j4(e) {
  const n = e, t = d0(n);
  return t || function(r) {
    let s = r.parentElement;
    for (; s !== null; ) {
      if (d0(s)) return !0;
      s = s.parentElement;
    }
    return !1;
  }(n) ? { node: t ? Yt() : null } : { node: null };
}
function A4() {
  return { node: Yt() };
}
function u0() {
  return { node: null };
}
function d0(e) {
  return e.style.fontFamily.match("monospace") !== null;
}
function Ol(e) {
  return e.classList.contains("js-file-line-container");
}
function M4(e) {
  const { anchor: n } = e;
  if (e.isCollapsed() && n.type === "element") {
    const t = n.getNode();
    if (T1(t)) {
      const r = t.getChildrenSize();
      if (r >= 2 && n.offset === r) {
        const s = t.getLastChild();
        if (Rt(s) && Rt(s.getPreviousSibling())) {
          const i = Se();
          return t.splice(r - 2, 2, []).insertAfter(i, !1), i.select(), i;
        }
      }
    }
  }
  return null;
}
class B2 extends wn {
  constructor(t = "", r, s) {
    super(t, s);
    M(this, "__highlightType");
    this.__highlightType = r;
  }
  $config() {
    return this.config("code-highlight", { extends: wn });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__highlightType = t.__highlightType;
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  setHighlightType(t) {
    const r = this.getWritable();
    return r.__highlightType = t || void 0, r;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(t) {
    const r = super.createDOM(t), s = Il(t.theme, this.__highlightType);
    return cn(r, s), r;
  }
  updateDOM(t, r, s) {
    const i = super.updateDOM(t, r, s), o = Il(s.theme, t.__highlightType), l = Il(s.theme, this.__highlightType);
    return o !== l && (o && g1(r, o), l && cn(r, l)), i;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setHighlightType(t.highlightType);
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType() };
  }
  setFormat(t) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return Yt();
  }
}
function Il(e, n) {
  return n && e && e.codeHighlight && e.codeHighlight[n];
}
function F4(e = "", n) {
  return qt(new B2(e, n));
}
function V2(e) {
  return e instanceof B2;
}
const z2 = "data-language";
function Z2(e) {
  return e.style.fontFamily.match("monospace") !== null;
}
function Fa(e) {
  let n = e.parentElement;
  for (; n !== null; ) {
    if (Z2(n)) return !0;
    n = n.parentElement;
  }
  return !1;
}
const O4 = /* @__PURE__ */ x2([{ $import: (e, n) => e.$importChildren(n), match: Qe.tag("tr", "td"), name: "@lexical/code/github-code-table/unwrap" }]), I4 = { $import: (e, n) => [Yt(n.getAttribute(z2)).splice(0, 0, e.$importChildren(n))], match: Qe.tag("pre"), name: "@lexical/code/pre" }, D4 = { $import: (e, n, t) => {
  const r = n.textContent || "";
  return /\r?\n/.test(r) || n.querySelector("br") !== null ? [Yt(n.getAttribute(z2)).splice(0, 0, e.$importChildren(n))] : t();
}, match: Qe.tag("code"), name: "@lexical/code/code-multiline" };
function zi(e) {
  if (!oe(e)) return !1;
  const n = e.style.fontFamily, t = e.style.whiteSpace;
  return typeof n == "string" && /monospace/i.test(n) && typeof t == "string" && t.startsWith("pre");
}
function $4(e) {
  let n = !1;
  const t = [];
  let r = "", s = !1;
  const i = () => {
    s && (t.push(r), r = "", s = !1);
  };
  for (const o of Array.from(e.childNodes)) if (oe(o)) o.tagName === "DIV" ? (i(), t.push(o.textContent || ""), n = !0) : o.tagName === "BR" ? (i(), t.push(""), n = !0) : (r += o.textContent || "", s = !0);
  else if (vt(o)) {
    const l = o.textContent || "";
    l.length > 0 && (r += l, s = !0);
  }
  return i(), n ? t : null;
}
Qe.tag("div"), Qe.tag("div", "br");
const R4 = { $import: (e, n, t) => Z2(n) ? [Yt().splice(0, 0, e.$importChildren(n))] : Fa(n) ? e.$importChildren(n) : t(), match: Qe.tag("div"), name: "@lexical/code/div" };
Qe.tag("table").classAll("js-file-line-container"), Qe.tag("td").classAll("js-file-line");
var P4 = { exports: {} };
(function(e) {
  var n = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(r) {
    var s = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, o = {}, l = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: r.Prism && r.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function y(_) {
          return _ instanceof c ? new c(_.type, y(_.content), _.alias) : Array.isArray(_) ? _.map(y) : _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(y) {
          return Object.prototype.toString.call(y).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(y) {
          return y.__id || Object.defineProperty(y, "__id", { value: ++i }), y.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function y(_, v) {
          v = v || {};
          var w, E;
          switch (l.util.type(_)) {
            case "Object":
              if (E = l.util.objId(_), v[E])
                return v[E];
              w = /** @type {Record<string, any>} */
              {}, v[E] = w;
              for (var N in _)
                _.hasOwnProperty(N) && (w[N] = y(_[N], v));
              return (
                /** @type {any} */
                w
              );
            case "Array":
              return E = l.util.objId(_), v[E] ? v[E] : (w = [], v[E] = w, /** @type {Array} */
              /** @type {any} */
              _.forEach(function(S, k) {
                w[k] = y(S, v);
              }), /** @type {any} */
              w);
            default:
              return _;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(y) {
          for (; y; ) {
            var _ = s.exec(y.className);
            if (_)
              return _[1].toLowerCase();
            y = y.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(y, _) {
          y.className = y.className.replace(RegExp(s, "gi"), ""), y.classList.add("language-" + _);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if (document.currentScript && document.currentScript.tagName === "SCRIPT")
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (w) {
            var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) || [])[1];
            if (y) {
              var _ = document.getElementsByTagName("script");
              for (var v in _)
                if (_[v].src == y)
                  return _[v];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(y, _, v) {
          for (var w = "no-" + _; y; ) {
            var E = y.classList;
            if (E.contains(_))
              return !0;
            if (E.contains(w))
              return !1;
            y = y.parentElement;
          }
          return !!v;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: o,
        plaintext: o,
        text: o,
        txt: o,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(y, _) {
          var v = l.util.clone(l.languages[y]);
          for (var w in _)
            v[w] = _[w];
          return v;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(y, _, v, w) {
          w = w || /** @type {any} */
          l.languages;
          var E = w[y], N = {};
          for (var S in E)
            if (E.hasOwnProperty(S)) {
              if (S == _)
                for (var k in v)
                  v.hasOwnProperty(k) && (N[k] = v[k]);
              v.hasOwnProperty(S) || (N[S] = E[S]);
            }
          var L = w[y];
          return w[y] = N, l.languages.DFS(l.languages, function(A, H) {
            H === L && A != y && (this[A] = N);
          }), N;
        },
        // Traverse a language definition with Depth First Search
        DFS: function y(_, v, w, E) {
          E = E || {};
          var N = l.util.objId;
          for (var S in _)
            if (_.hasOwnProperty(S)) {
              v.call(_, S, _[S], w || S);
              var k = _[S], L = l.util.type(k);
              L === "Object" && !E[N(k)] ? (E[N(k)] = !0, y(k, v, null, E)) : L === "Array" && !E[N(k)] && (E[N(k)] = !0, y(k, v, S, E));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(y, _) {
        l.highlightAllUnder(document, y, _);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(y, _, v) {
        var w = {
          callback: v,
          container: y,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        l.hooks.run("before-highlightall", w), w.elements = Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)), l.hooks.run("before-all-elements-highlight", w);
        for (var E = 0, N; N = w.elements[E++]; )
          l.highlightElement(N, _ === !0, w.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(y, _, v) {
        var w = l.util.getLanguage(y), E = l.languages[w];
        l.util.setLanguage(y, w);
        var N = y.parentElement;
        N && N.nodeName.toLowerCase() === "pre" && l.util.setLanguage(N, w);
        var S = y.textContent, k = {
          element: y,
          language: w,
          grammar: E,
          code: S
        };
        function L(H) {
          k.highlightedCode = H, l.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, l.hooks.run("after-highlight", k), l.hooks.run("complete", k), v && v.call(k.element);
        }
        if (l.hooks.run("before-sanity-check", k), N = k.element.parentElement, N && N.nodeName.toLowerCase() === "pre" && !N.hasAttribute("tabindex") && N.setAttribute("tabindex", "0"), !k.code) {
          l.hooks.run("complete", k), v && v.call(k.element);
          return;
        }
        if (l.hooks.run("before-highlight", k), !k.grammar) {
          L(l.util.encode(k.code));
          return;
        }
        if (_ && r.Worker) {
          var A = new Worker(l.filename);
          A.onmessage = function(H) {
            L(H.data);
          }, A.postMessage(JSON.stringify({
            language: k.language,
            code: k.code,
            immediateClose: !0
          }));
        } else
          L(l.highlight(k.code, k.grammar, k.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(y, _, v) {
        var w = {
          code: y,
          grammar: _,
          language: v
        };
        if (l.hooks.run("before-tokenize", w), !w.grammar)
          throw new Error('The language "' + w.language + '" has no grammar.');
        return w.tokens = l.tokenize(w.code, w.grammar), l.hooks.run("after-tokenize", w), c.stringify(l.util.encode(w.tokens), w.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(y, _) {
        var v = _.rest;
        if (v) {
          for (var w in v)
            _[w] = v[w];
          delete _.rest;
        }
        var E = new f();
        return h(E, E.head, y), d(y, E, _, E.head, 0), p(E);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(y, _) {
          var v = l.hooks.all;
          v[y] = v[y] || [], v[y].push(_);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(y, _) {
          var v = l.hooks.all[y];
          if (!(!v || !v.length))
            for (var w = 0, E; E = v[w++]; )
              E(_);
        }
      },
      Token: c
    };
    r.Prism = l;
    function c(y, _, v, w) {
      this.type = y, this.content = _, this.alias = v, this.length = (w || "").length | 0;
    }
    c.stringify = function y(_, v) {
      if (typeof _ == "string")
        return _;
      if (Array.isArray(_)) {
        var w = "";
        return _.forEach(function(L) {
          w += y(L, v);
        }), w;
      }
      var E = {
        type: _.type,
        content: y(_.content, v),
        tag: "span",
        classes: ["token", _.type],
        attributes: {},
        language: v
      }, N = _.alias;
      N && (Array.isArray(N) ? Array.prototype.push.apply(E.classes, N) : E.classes.push(N)), l.hooks.run("wrap", E);
      var S = "";
      for (var k in E.attributes)
        S += " " + k + '="' + (E.attributes[k] || "").replace(/"/g, "&quot;") + '"';
      return "<" + E.tag + ' class="' + E.classes.join(" ") + '"' + S + ">" + E.content + "</" + E.tag + ">";
    };
    function u(y, _, v, w) {
      y.lastIndex = _;
      var E = y.exec(v);
      if (E && w && E[1]) {
        var N = E[1].length;
        E.index += N, E[0] = E[0].slice(N);
      }
      return E;
    }
    function d(y, _, v, w, E, N) {
      for (var S in v)
        if (!(!v.hasOwnProperty(S) || !v[S])) {
          var k = v[S];
          k = Array.isArray(k) ? k : [k];
          for (var L = 0; L < k.length; ++L) {
            if (N && N.cause == S + "," + L)
              return;
            var A = k[L], H = A.inside, G = !!A.lookbehind, O = !!A.greedy, K = A.alias;
            if (O && !A.pattern.global) {
              var X = A.pattern.toString().match(/[imsuy]*$/)[0];
              A.pattern = RegExp(A.pattern.source, X + "g");
            }
            for (var se = A.pattern || A, ee = w.next, R = E; ee !== _.tail && !(N && R >= N.reach); R += ee.value.length, ee = ee.next) {
              var V = ee.value;
              if (_.length > y.length)
                return;
              if (!(V instanceof c)) {
                var F = 1, U;
                if (O) {
                  if (U = u(se, R, y, G), !U || U.index >= y.length)
                    break;
                  var te = U.index, ie = U.index + U[0].length, Z = R;
                  for (Z += ee.value.length; te >= Z; )
                    ee = ee.next, Z += ee.value.length;
                  if (Z -= ee.value.length, R = Z, ee.value instanceof c)
                    continue;
                  for (var fe = ee; fe !== _.tail && (Z < ie || typeof fe.value == "string"); fe = fe.next)
                    F++, Z += fe.value.length;
                  F--, V = y.slice(R, Z), U.index -= R;
                } else if (U = u(se, 0, V, G), !U)
                  continue;
                var te = U.index, Q = U[0], ge = V.slice(0, te), $e = V.slice(te + Q.length), Ge = R + V.length;
                N && Ge > N.reach && (N.reach = Ge);
                var dt = ee.prev;
                ge && (dt = h(_, dt, ge), R += ge.length), g(_, dt, F);
                var hs = new c(S, H ? l.tokenize(Q, H) : Q, K, Q);
                if (ee = h(_, dt, hs), $e && h(_, ee, $e), F > 1) {
                  var jn = {
                    cause: S + "," + L,
                    reach: Ge
                  };
                  d(y, _, v, ee.prev, R, jn), N && jn.reach > N.reach && (N.reach = jn.reach);
                }
              }
            }
          }
        }
    }
    function f() {
      var y = { value: null, prev: null, next: null }, _ = { value: null, prev: y, next: null };
      y.next = _, this.head = y, this.tail = _, this.length = 0;
    }
    function h(y, _, v) {
      var w = _.next, E = { value: v, prev: _, next: w };
      return _.next = E, w.prev = E, y.length++, E;
    }
    function g(y, _, v) {
      for (var w = _.next, E = 0; E < v && w !== y.tail; E++)
        w = w.next;
      _.next = w, w.prev = _, y.length -= E;
    }
    function p(y) {
      for (var _ = [], v = y.head.next; v !== y.tail; )
        _.push(v.value), v = v.next;
      return _;
    }
    if (!r.document)
      return r.addEventListener && (l.disableWorkerMessageHandler || r.addEventListener("message", function(y) {
        var _ = JSON.parse(y.data), v = _.language, w = _.code, E = _.immediateClose;
        r.postMessage(l.highlight(w, l.languages[v], v)), E && r.close();
      }, !1)), l;
    var C = l.util.currentScript();
    C && (l.filename = C.src, C.hasAttribute("data-manual") && (l.manual = !0));
    function m() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var x = document.readyState;
      x === "loading" || x === "interactive" && C && C.defer ? document.addEventListener("DOMContentLoaded", m) : window.requestAnimationFrame ? window.requestAnimationFrame(m) : window.setTimeout(m, 16);
    }
    return l;
  }(n);
  e.exports && (e.exports = t), typeof Q1 < "u" && (Q1.Prism = t), t.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(s, i) {
      var o = {};
      o["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var l = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: o
        }
      };
      l["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var c = {};
      c[s] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return s;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: l
      }, t.languages.insertBefore("markup", "cdata", c);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, s) {
      t.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [s, "language-" + s],
                inside: t.languages[s]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(r) {
    var s = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + s.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + s.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + s.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + s.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: s,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var i = r.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: t.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: t.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var r = "Loading…", s = function(C, m) {
      return "✖ Error " + C + " while fetching file: " + m;
    }, i = "✖ Error: File does not exist or is empty", o = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, l = "data-src-status", c = "loading", u = "loaded", d = "failed", f = "pre[data-src]:not([" + l + '="' + u + '"]):not([' + l + '="' + c + '"])';
    function h(C, m, x) {
      var y = new XMLHttpRequest();
      y.open("GET", C, !0), y.onreadystatechange = function() {
        y.readyState == 4 && (y.status < 400 && y.responseText ? m(y.responseText) : y.status >= 400 ? x(s(y.status, y.statusText)) : x(i));
      }, y.send(null);
    }
    function g(C) {
      var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C || "");
      if (m) {
        var x = Number(m[1]), y = m[2], _ = m[3];
        return y ? _ ? [x, Number(_)] : [x, void 0] : [x, x];
      }
    }
    t.hooks.add("before-highlightall", function(C) {
      C.selector += ", " + f;
    }), t.hooks.add("before-sanity-check", function(C) {
      var m = (
        /** @type {HTMLPreElement} */
        C.element
      );
      if (m.matches(f)) {
        C.code = "", m.setAttribute(l, c);
        var x = m.appendChild(document.createElement("CODE"));
        x.textContent = r;
        var y = m.getAttribute("data-src"), _ = C.language;
        if (_ === "none") {
          var v = (/\.(\w+)$/.exec(y) || [, "none"])[1];
          _ = o[v] || v;
        }
        t.util.setLanguage(x, _), t.util.setLanguage(m, _);
        var w = t.plugins.autoloader;
        w && w.loadLanguages(_), h(
          y,
          function(E) {
            m.setAttribute(l, u);
            var N = g(m.getAttribute("data-range"));
            if (N) {
              var S = E.split(/\r\n?|\n/g), k = N[0], L = N[1] == null ? S.length : N[1];
              k < 0 && (k += S.length), k = Math.max(0, Math.min(k - 1, S.length)), L < 0 && (L += S.length), L = Math.max(0, Math.min(L, S.length)), E = S.slice(k, L).join(`
`), m.hasAttribute("data-start") || m.setAttribute("data-start", String(k + 1));
            }
            x.textContent = E, t.highlightElement(x);
          },
          function(E) {
            m.setAttribute(l, d), x.textContent = E;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(m) {
        for (var x = (m || document).querySelectorAll(f), y = 0, _; _ = x[y++]; )
          t.highlightElement(_);
      }
    };
    var p = !1;
    t.fileHighlight = function() {
      p || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), p = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(P4);
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(n, t) {
    var r = {};
    r["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var s = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: r
      }
    };
    s["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var i = {};
    i[n] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return n;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: s
    }, Prism.languages.insertBefore("markup", "cdata", i);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(e, n) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [n, "language-" + n],
              inside: Prism.languages[n]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(e) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(d) {
    return d = d.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: e.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + s + i + "(?:" + s + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + s + i + ")(?:" + s + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(r),
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + s + ")" + i + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + s + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(r),
              alias: "important",
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(d) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
      d !== f && (e.languages.markdown[d].inside.content.inside[f] = e.languages.markdown[f]);
    });
  }), e.hooks.add("after-tokenize", function(d) {
    if (d.language !== "markdown" && d.language !== "md")
      return;
    function f(h) {
      if (!(!h || typeof h == "string"))
        for (var g = 0, p = h.length; g < p; g++) {
          var C = h[g];
          if (C.type !== "code") {
            f(C.content);
            continue;
          }
          var m = C.content[1], x = C.content[3];
          if (m && x && m.type === "code-language" && x.type === "code-block" && typeof m.content == "string") {
            var y = m.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            y = (/[a-z][\w-]*/i.exec(y) || [""])[0].toLowerCase();
            var _ = "language-" + y;
            x.alias ? typeof x.alias == "string" ? x.alias = [x.alias, _] : x.alias.push(_) : x.alias = [_];
          }
        }
    }
    f(d.tokens);
  }), e.hooks.add("wrap", function(d) {
    if (d.type === "code-block") {
      for (var f = "", h = 0, g = d.classes.length; h < g; h++) {
        var p = d.classes[h], C = /language-(.+)/.exec(p);
        if (C) {
          f = C[1];
          break;
        }
      }
      var m = e.languages[f];
      if (m)
        d.content = e.highlight(u(d.content), m, f);
      else if (f && f !== "none" && e.plugins.autoloader) {
        var x = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        d.attributes.id = x, e.plugins.autoloader.loadLanguages(f, function() {
          var y = document.getElementById(x);
          y && (y.innerHTML = e.highlight(y.textContent, e.languages[f], f));
        });
      }
    }
  });
  var o = RegExp(e.languages.markup.tag.pattern.source, "gi"), l = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, c = String.fromCodePoint || String.fromCharCode;
  function u(d) {
    var f = d.replace(o, "");
    return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(h, g) {
      if (g = g.toLowerCase(), g[0] === "#") {
        var p;
        return g[1] === "x" ? p = parseInt(g.slice(2), 16) : p = Number(g.slice(1)), c(p);
      } else {
        var C = l[g];
        return C || h;
      }
    }), f;
  }
  e.languages.md = e.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + n.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: n,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, e.languages.css.atrule.inside.rest = e.languages.css;
  var t = e.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(e) {
  var n = e.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  n.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: n
    },
    boolean: n.boolean,
    variable: n.variable
  };
})(Prism);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + n),
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
      greedy: !0
    },
    char: {
      pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
      greedy: !0
    },
    attribute: {
      pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
      greedy: !0,
      alias: "attr-name",
      inside: {
        string: null
        // see below
      }
    },
    // Closure params should not be confused with bitwise OR |
    "closure-params": {
      pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "closure-punctuation": {
          pattern: /^\||\|$/,
          alias: "punctuation"
        },
        rest: null
        // see below
      }
    },
    "lifetime-annotation": {
      pattern: /'\w+/,
      alias: "symbol"
    },
    "fragment-specifier": {
      pattern: /(\$\w+:)[a-z]+/,
      lookbehind: !0,
      alias: "punctuation"
    },
    variable: /\$\w+/,
    "function-definition": {
      pattern: /(\bfn\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    "type-definition": {
      pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
      lookbehind: !0,
      alias: "class-name"
    },
    "module-declaration": [
      {
        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
        lookbehind: !0,
        alias: "namespace"
      },
      {
        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
        lookbehind: !0,
        alias: "namespace",
        inside: {
          punctuation: /::/
        }
      }
    ],
    keyword: [
      // https://github.com/rust-lang/reference/blob/master/src/keywords.md
      /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
      // primitives and str
      // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
      /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
    ],
    // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
    // and Rust's naming conventions recommend snake_case anyway.
    // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
    function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
    macro: {
      pattern: /\b\w+!/,
      alias: "property"
    },
    constant: /\b[A-Z_][A-Z_\d]+\b/,
    "class-name": /\b[A-Z]\w*\b/,
    namespace: {
      pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
      inside: {
        punctuation: /::/
      }
    },
    // Hex, oct, bin, dec numbers with visual separators and type suffix
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
    boolean: /\b(?:false|true)\b/,
    punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
    operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
  }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(Prism);
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = Prism.languages.swift;
});
(function(e) {
  e.languages.typescript = e.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: !0,
      greedy: !0,
      inside: null
      // see below
    },
    builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }), e.languages.typescript.keyword.push(
    /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
    // keywords that have to be followed by an identifier
    /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
    // This is for `import type *, {}`
    /\btype\b(?=\s*(?:[\{*]|$))/
  ), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", {
    decorator: {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        at: {
          pattern: /^@/,
          alias: "operator"
        },
        function: /^[\s\S]+/
      }
    },
    "generic-function": {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: !0,
      inside: {
        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        generic: {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: "class-name",
          inside: n
        }
      }
    }
  }), e.languages.ts = e.languages.typescript;
})(Prism);
(function(e) {
  var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
    pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: !0,
    inside: {
      namespace: {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          punctuation: /\./
        }
      },
      punctuation: /\./
    }
  };
  e.languages.java = e.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      r,
      {
        // variables, parameters, and constructor references
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: r.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: r.inside
      }
    ],
    keyword: n,
    function: [
      e.languages.clike.function,
      {
        pattern: /(::\s*)[a-z_]\w*/,
        lookbehind: !0
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: !0
    },
    constant: /\b[A-Z][A-Z_\d]+\b/
  }), e.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: !0,
      alias: "string"
    },
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: !0
    }
  }), e.languages.insertBefore("java", "class-name", {
    annotation: {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: !0,
      alias: "punctuation"
    },
    generics: {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        "class-name": r,
        keyword: n,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: r.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
        lookbehind: !0,
        alias: "static",
        inside: {
          namespace: r.inside.namespace,
          static: /\b\w+$/,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      }
    ],
    namespace: {
      pattern: RegExp(
        /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
          return n.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return n.source;
        })),
        lookbehind: !0
      },
      // This is intended to capture the class name of method implementations like:
      //   void foo::bar() const {}
      // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
      // it starts with an uppercase letter. This approximation should give decent results.
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      // This will capture the class name before destructors like:
      //   Foo::~Foo() {}
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      // This also intends to capture the class name of method implementations but here the class has template
      // parameters, so it can't be a namespace (until C++ adds generic namespaces).
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    keyword: n,
    number: {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: !0
    },
    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    boolean: /\b(?:false|true)\b/
  }), e.languages.insertBefore("cpp", "string", {
    module: {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(
        /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
        /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
        /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
          return t;
        }) + ")"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        string: /^[<"][\s\S]+/,
        operator: /:/,
        punctuation: /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: !0
    }
  }), e.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        function: /^\w+/,
        generic: {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: e.languages.cpp
        }
      }
    }
  }), e.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  }), e.languages.insertBefore("cpp", "class-name", {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: !0,
      greedy: !0,
      inside: e.languages.extend("cpp", {})
    }
  }), e.languages.insertBefore("inside", "double-colon", {
    // All untokenized words that are not namespaces should be class names
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, e.languages.cpp["base-clause"]);
})(Prism);
(function(e) {
  e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
  var n = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
  Object.keys(n).forEach(function(t) {
    var r = n[t], s = [];
    /^\w+$/.test(t) || s.push(/\w+/.exec(t)[0]), t === "diff" && s.push("bold"), e.languages.diff[t] = { pattern: RegExp("^(?:[" + r + `].*(?:\r
?|
|(?![\\s\\S])))+`, "m"), alias: s, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(t)[0] } } };
  }), Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
})(Prism), Prism.languages.go = Prism.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), Prism.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete Prism.languages.go["class-name"];
function H4({ src: e, altText: n }) {
  return /* @__PURE__ */ a.jsx("img", { src: e, alt: n, className: "rte-image" });
}
class pi extends zo {
  static getType() {
    return "image";
  }
  static clone(n) {
    return new pi(n.__src, n.__altText, n.__key);
  }
  static importJSON(n) {
    return W2({
      src: n.src,
      altText: n.altText
    });
  }
  exportJSON() {
    return {
      src: this.__src,
      altText: this.__altText,
      type: "image",
      version: 1
    };
  }
  constructor(n, t, r) {
    super(r), this.__src = n, this.__altText = t;
  }
  createDOM() {
    const n = document.createElement("div");
    return n.className = "rte-image-wrapper", n;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return /* @__PURE__ */ a.jsx(H4, { src: this.__src, altText: this.__altText });
  }
}
function W2({ src: e, altText: n, key: t }) {
  return new pi(e, n, t);
}
const U2 = ne(
  "INSERT_IMAGE_COMMAND"
), B4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-italic-icon lucide-italic", children: [
  /* @__PURE__ */ a.jsx("line", { x1: "19", x2: "10", y1: "4", y2: "4" }),
  /* @__PURE__ */ a.jsx("line", { x1: "14", x2: "5", y1: "20", y2: "20" }),
  /* @__PURE__ */ a.jsx("line", { x1: "15", x2: "9", y1: "4", y2: "20" })
] }), V4 = /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-bold-icon lucide-bold", children: /* @__PURE__ */ a.jsx("path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }) }), z4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-underline-icon lucide-underline", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }),
  /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "20", y2: "20" })
] }), Z4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-list-icon lucide-list", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M3 5h.01" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 12h.01" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 19h.01" }),
  /* @__PURE__ */ a.jsx("path", { d: "M8 5h13" }),
  /* @__PURE__ */ a.jsx("path", { d: "M8 12h13" }),
  /* @__PURE__ */ a.jsx("path", { d: "M8 19h13" })
] }), W4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-strikethrough-icon lucide-strikethrough", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }),
  /* @__PURE__ */ a.jsx("path", { d: "M14 12a4 4 0 0 1 0 8H6" }),
  /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" })
] }), U4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-braces-icon lucide-braces", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }),
  /* @__PURE__ */ a.jsx("path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" })
] }), K4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-superscript-icon lucide-superscript", children: [
  /* @__PURE__ */ a.jsx("path", { d: "m4 19 8-8" }),
  /* @__PURE__ */ a.jsx("path", { d: "m12 19-8-8" }),
  /* @__PURE__ */ a.jsx("path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" })
] }), G4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-subscript-icon lucide-subscript", children: [
  /* @__PURE__ */ a.jsx("path", { d: "m4 5 8 8" }),
  /* @__PURE__ */ a.jsx("path", { d: "m12 5-8 8" }),
  /* @__PURE__ */ a.jsx("path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" })
] }), Y4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-list-ordered-icon lucide-list-ordered", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M11 5h10" }),
  /* @__PURE__ */ a.jsx("path", { d: "M11 12h10" }),
  /* @__PURE__ */ a.jsx("path", { d: "M11 19h10" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 4h1v5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 9h2" }),
  /* @__PURE__ */ a.jsx("path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" })
] }), q4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-list-indent-increase-icon lucide-list-indent-increase", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 5H11" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 12H11" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 19H11" }),
  /* @__PURE__ */ a.jsx("path", { d: "m3 8 4 4-4 4" })
] }), J4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-list-indent-decrease-icon lucide-list-indent-decrease", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 5H11" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 12H11" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 19H11" }),
  /* @__PURE__ */ a.jsx("path", { d: "m7 8-4 4 4 4" })
] }), X4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-text-align-start-icon lucide-text-align-start", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 5H3" }),
  /* @__PURE__ */ a.jsx("path", { d: "M15 12H3" }),
  /* @__PURE__ */ a.jsx("path", { d: "M17 19H3" })
] }), Q4 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-text-align-end-icon lucide-text-align-end", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 5H3" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 12H9" }),
  /* @__PURE__ */ a.jsx("path", { d: "M21 19H7" })
] }), e9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-text-align-center-icon lucide-text-align-center", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 5H3" }),
  /* @__PURE__ */ a.jsx("path", { d: "M17 12H7" }),
  /* @__PURE__ */ a.jsx("path", { d: "M19 19H5" })
] }), t9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-text-align-justify-icon lucide-text-align-justify", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M3 5h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 12h18" }),
  /* @__PURE__ */ a.jsx("path", { d: "M3 19h18" })
] }), n9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-link-icon lucide-link", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ a.jsx("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
] }), r9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-unlink-icon lucide-unlink", children: [
  /* @__PURE__ */ a.jsx("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
  /* @__PURE__ */ a.jsx("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
  /* @__PURE__ */ a.jsx("line", { x1: "8", x2: "8", y1: "2", y2: "5" }),
  /* @__PURE__ */ a.jsx("line", { x1: "2", x2: "5", y1: "8", y2: "8" }),
  /* @__PURE__ */ a.jsx("line", { x1: "16", x2: "16", y1: "19", y2: "22" }),
  /* @__PURE__ */ a.jsx("line", { x1: "19", x2: "22", y1: "16", y2: "16" })
] }), s9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-image-icon lucide-image", children: [
  /* @__PURE__ */ a.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }),
  /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ a.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
] }), i9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-eraser-icon lucide-eraser", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" }),
  /* @__PURE__ */ a.jsx("path", { d: "m5.082 11.09 8.828 8.828" })
] }), o9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-undo2-icon lucide-undo-2", children: [
  /* @__PURE__ */ a.jsx("path", { d: "M9 14 4 9l5-5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
] }), l9 = /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-redo2-icon lucide-redo-2", children: [
  /* @__PURE__ */ a.jsx("path", { d: "m15 14 5-5-5-5" }),
  /* @__PURE__ */ a.jsx("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
] }), Dl = Xn, a9 = ["12px", "14px", "15px", "16px", "18px", "20px", "24px", "28px", "32px"], c9 = ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana"];
function u9() {
  const [e] = Jt(), n = Kt(null), [t, r] = ce("paragraph"), [s, i] = ce(!1), [o, l] = ce(!1), [c, u] = ce(!1), [d, f] = ce(!1), [h, g] = ce(!1), [p, C] = ce(!1), [m, x] = ce(!1), [y, _] = ce(!1), [v, w] = ce(!1), E = He(() => {
    var ie;
    const R = B();
    if (!I(R)) return;
    i(R.hasFormat("bold")), l(R.hasFormat("italic")), u(R.hasFormat("underline")), f(R.hasFormat("strikethrough")), g(R.hasFormat("code")), C(R.hasFormat("superscript")), x(R.hasFormat("subscript"));
    const V = R.anchor.getNode(), F = V.getKey() === "root" ? V : Ee(V, (Z) => {
      const fe = Z.getParent();
      return fe !== null && fe.getKey() === "root";
    }) ?? V, U = F.getTopLevelElementOrThrow ? F.getTopLevelElementOrThrow() : F;
    if (ae(U)) {
      const Z = Ee(V, ae), fe = Z ? Z.getListType() : U.getListType();
      r(fe === "bullet" ? "bullet" : "number");
    } else if (zg(U))
      r(U.getTag());
    else if (T1(U))
      r("code");
    else {
      const Z = (ie = U.getType) == null ? void 0 : ie.call(U);
      r(Z === "quote" ? "quote" : "paragraph");
    }
  }, []);
  we(() => Bt(
    e.registerUpdateListener(({ editorState: R }) => {
      R.read(() => E());
    }),
    e.registerCommand(
      Va,
      () => (E(), !1),
      Dl
    ),
    e.registerCommand(
      Os,
      (R) => (_(R), !1),
      Dl
    ),
    e.registerCommand(
      Fs,
      (R) => (w(R), !1),
      Dl
    )
  ), [e, E]);
  const N = (R) => {
    e.update(() => {
      const V = B();
      I(V) && ks(V, () => os(R));
    });
  }, S = () => {
    e.update(() => {
      const R = B();
      I(R) && ks(R, () => Se());
    });
  }, k = () => {
    e.update(() => {
      const R = B();
      I(R) && ks(R, () => hi());
    });
  }, L = () => {
    e.update(() => {
      const R = B();
      I(R) && ks(R, () => Yt());
    });
  }, A = (R) => {
    e.update(() => {
      const V = B();
      I(V) && Ii(V, { "font-size": R });
    });
  }, H = (R) => {
    e.update(() => {
      const V = B();
      I(V) && Ii(V, { "font-family": R });
    });
  }, G = (R) => {
    e.update(() => {
      const V = B();
      I(V) && Ii(V, { color: R });
    });
  }, O = () => {
    e.update(() => {
      const R = B();
      I(R) && (["bold", "italic", "underline", "strikethrough", "code", "superscript", "subscript"].forEach(
        (V) => {
          R.hasFormat(V) && e.dispatchCommand(ct, V);
        }
      ), Ii(R, {
        "font-size": "",
        "font-family": "",
        color: ""
      }), ks(R, () => Se()));
    });
  }, K = () => {
    const R = window.prompt("Enter URL");
    R && e.dispatchCommand(Fo, R);
  }, X = () => {
    e.dispatchCommand(Fo, null);
  }, se = () => {
    var R;
    return (R = n.current) == null ? void 0 : R.click();
  }, ee = (R) => {
    var U;
    const V = (U = R.target.files) == null ? void 0 : U[0];
    if (!V) return;
    const F = new FileReader();
    F.onload = () => {
      e.dispatchCommand(U2, {
        src: F.result,
        altText: V.name
      });
    }, F.readAsDataURL(V), R.target.value = "";
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "rte-toolbar", role: "toolbar", "aria-label": "Text formatting", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "rte-toolbar__row", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Bold",
          "aria-pressed": s,
          className: `rte-toolbar__btn ${s ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "bold"),
          children: V4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Italic",
          "aria-pressed": o,
          className: `rte-toolbar__btn ${o ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "italic"),
          children: B4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Underline",
          "aria-pressed": c,
          className: `rte-toolbar__btn ${c ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "underline"),
          children: z4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Strikethrough",
          "aria-pressed": d,
          className: `rte-toolbar__btn ${d ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "strikethrough"),
          children: W4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Inline code",
          "aria-pressed": h,
          className: `rte-toolbar__btn ${h ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "code"),
          children: U4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Superscript",
          "aria-pressed": p,
          className: `rte-toolbar__btn ${p ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "superscript"),
          children: K4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Subscript",
          "aria-pressed": m,
          className: `rte-toolbar__btn ${m ? "is-active" : ""}`,
          onClick: () => e.dispatchCommand(ct, "subscript"),
          children: G4
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          "aria-label": "Block type",
          className: "rte-toolbar__select",
          value: t,
          onChange: (R) => {
            const V = R.target.value;
            V === "paragraph" ? S() : V === "h1" || V === "h2" || V === "h3" ? N(V) : V === "quote" ? k() : V === "code" && L();
          },
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "paragraph", children: "Normal" }),
            /* @__PURE__ */ a.jsx("option", { value: "h1", children: "Heading 1" }),
            /* @__PURE__ */ a.jsx("option", { value: "h2", children: "Heading 2" }),
            /* @__PURE__ */ a.jsx("option", { value: "h3", children: "Heading 3" }),
            /* @__PURE__ */ a.jsx("option", { value: "quote", children: "Quote" }),
            /* @__PURE__ */ a.jsx("option", { value: "code", children: "Code block" })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "select",
        {
          "aria-label": "Font size",
          className: "rte-toolbar__select rte-toolbar__select--sm",
          defaultValue: "16px",
          onChange: (R) => A(R.target.value),
          children: a9.map((R) => /* @__PURE__ */ a.jsx("option", { value: R, children: R.replace("px", "") }, R))
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "select",
        {
          "aria-label": "Font family",
          className: "rte-toolbar__select",
          defaultValue: "",
          onChange: (R) => H(R.target.value),
          children: [
            /* @__PURE__ */ a.jsx("option", { value: "", children: "Font" }),
            c9.map((R) => /* @__PURE__ */ a.jsx("option", { value: R, children: R }, R))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "rte-toolbar__row", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Bulleted list",
          "aria-pressed": t === "bullet",
          className: `rte-toolbar__btn ${t === "bullet" ? "is-active" : ""}`,
          onClick: () => t === "bullet" ? e.dispatchCommand(Ma, void 0) : e.dispatchCommand(R2, void 0),
          children: Z4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Numbered list",
          "aria-pressed": t === "number",
          className: `rte-toolbar__btn ${t === "number" ? "is-active" : ""}`,
          onClick: () => t === "number" ? e.dispatchCommand(Ma, void 0) : e.dispatchCommand(P2, void 0),
          children: Y4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Indent",
          className: "rte-toolbar__btn",
          onClick: () => e.dispatchCommand(Ld, void 0),
          children: q4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Outdent",
          className: "rte-toolbar__btn",
          onClick: () => e.dispatchCommand(la, void 0),
          children: J4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Align left",
          className: "rte-toolbar__btn",
          onClick: () => e.dispatchCommand(Ms, "left"),
          children: X4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Align center",
          className: "rte-toolbar__btn",
          onClick: () => e.dispatchCommand(Ms, "center"),
          children: e9
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Align right",
          className: "rte-toolbar__btn",
          onClick: () => e.dispatchCommand(Ms, "right"),
          children: Q4
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Justify",
          className: "rte-toolbar__btn",
          onClick: () => e.dispatchCommand(Ms, "justify"),
          children: t9
        }
      ),
      /* @__PURE__ */ a.jsxs("label", { className: "rte-toolbar__color", "aria-label": "Text color", children: [
        /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "color",
            defaultValue: "#101828",
            onChange: (R) => G(R.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Insert link",
          className: "rte-toolbar__btn",
          onClick: K,
          children: n9
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Remove link",
          className: "rte-toolbar__btn",
          onClick: X,
          children: r9
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Insert image",
          className: "rte-toolbar__btn",
          onClick: se,
          children: s9
        }
      ),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          ref: n,
          type: "file",
          accept: "image/*",
          className: "rte-hidden-input",
          onChange: ee
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Clear formatting",
          className: "rte-toolbar__btn",
          onClick: O,
          children: i9
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Undo",
          disabled: !y,
          onClick: () => e.dispatchCommand(Do, void 0),
          className: "rte-toolbar__btn",
          children: o9
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          "aria-label": "Redo",
          disabled: !v,
          onClick: () => e.dispatchCommand($o, void 0),
          className: "rte-toolbar__btn",
          children: l9
        }
      )
    ] })
  ] });
}
function d9() {
  const [e] = Jt();
  return we(() => {
    if (!e.hasNodes([pi]))
      throw new Error("ImagesPlugin: ImageNode is not registered on the editor");
    return e.registerCommand(
      U2,
      (n) => {
        const t = W2(n);
        return Vo([t]), !0;
      },
      le
    );
  }, [e]), null;
}
const f9 = [
  w1,
  j2,
  gi,
  fs,
  pr,
  k1,
  N1,
  pi
];
function K2(e, n) {
  const r = new DOMParser().parseFromString(n, "text/html");
  return y2(e, r);
}
function h9({
  html: e,
  lastEmittedHtml: n
}) {
  const [t] = Jt(), r = Kt(!0);
  return we(() => {
    if (r.current) {
      r.current = !1;
      return;
    }
    e === void 0 || e === n.current || (t.update(() => {
      Fe().clear();
      const s = K2(t, e);
      Fe().select(), Vo(s);
    }), n.current = e);
  }, [e, t, n]), null;
}
function _p({
  placeholder: e = "Start typing...",
  initialHtml: n,
  disabled: t = !1,
  onChange: r,
  onBlur: s,
  name: i,
  invalid: o = !1,
  minHeight: l = "160px",
  className: c = ""
}) {
  const u = Kt(n), d = {
    namespace: "RichTextEditor",
    theme: {},
    nodes: f9,
    editable: !t,
    onError(h) {
      throw h;
    },
    editorState: n ? (h) => {
      const g = K2(h, n);
      Fe().select(), Vo(g);
    } : void 0
  }, f = (h, g) => {
    r && h.read(() => {
      const p = _2(g, null), C = Fe().getTextContent();
      u.current = p, r({ html: p, text: C });
    });
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `rte ${o ? "rte--invalid" : ""} ${c}`,
      "data-field-name": i,
      onBlur: s,
      children: /* @__PURE__ */ a.jsxs(n7, { initialConfig: d, children: [
        !t && /* @__PURE__ */ a.jsx(u9, {}),
        /* @__PURE__ */ a.jsx("div", { className: "rte-editor", style: { minHeight: l }, children: /* @__PURE__ */ a.jsx(
          Yg,
          {
            contentEditable: /* @__PURE__ */ a.jsx(Qg, { className: "rte-content" }),
            placeholder: /* @__PURE__ */ a.jsx("div", { className: "rte-placeholder", children: e }),
            ErrorBoundary: N4
          }
        ) }),
        /* @__PURE__ */ a.jsx(o4, {}),
        /* @__PURE__ */ a.jsx(w4, {}),
        /* @__PURE__ */ a.jsx(f4, {}),
        /* @__PURE__ */ a.jsx(d9, {}),
        /* @__PURE__ */ a.jsx(h9, { html: n, lastEmittedHtml: u }),
        r && /* @__PURE__ */ a.jsx(k4, { onChange: f })
      ] })
    }
  );
}
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function f0(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function g9(e) {
  if (Array.isArray(e)) return e;
}
function p9(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, s, i, o, l = [], c = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, n !== 0) for (; !(c = (r = i.call(t)).done) && (l.push(r.value), l.length !== n); c = !0) ;
    } catch (d) {
      u = !0, s = d;
    } finally {
      try {
        if (!c && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw s;
      }
    }
    return l;
  }
}
function m9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function x9(e, n) {
  return g9(e) || p9(e, n) || C9(e, n) || m9();
}
function C9(e, n) {
  if (e) {
    if (typeof e == "string") return f0(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f0(e, n) : void 0;
  }
}
const G2 = Object.entries, h0 = Object.setPrototypeOf, y9 = Object.isFrozen, _9 = Object.getPrototypeOf, b9 = Object.getOwnPropertyDescriptor;
let Ke = Object.freeze, et = Object.seal, Pr = Object.create, Y2 = typeof Reflect < "u" && Reflect, Oa = Y2.apply, Ia = Y2.construct;
Ke || (Ke = function(n) {
  return n;
});
et || (et = function(n) {
  return n;
});
Oa || (Oa = function(n, t) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) s[i - 2] = arguments[i];
  return n.apply(t, s);
});
Ia || (Ia = function(n) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
  return new n(...r);
});
const qn = Ue(Array.prototype.forEach), v9 = Ue(Array.prototype.lastIndexOf), g0 = Ue(Array.prototype.pop), Ls = Ue(Array.prototype.push), w9 = Ue(Array.prototype.splice), Jr = Array.isArray, Ds = Ue(String.prototype.toLowerCase), $l = Ue(String.prototype.toString), p0 = Ue(String.prototype.match), js = Ue(String.prototype.replace), m0 = Ue(String.prototype.indexOf), S9 = Ue(String.prototype.trim), k9 = Ue(Number.prototype.toString), E9 = Ue(Boolean.prototype.toString), x0 = typeof BigInt > "u" ? null : Ue(BigInt.prototype.toString), C0 = typeof Symbol > "u" ? null : Ue(Symbol.prototype.toString), xt = Ue(Object.prototype.hasOwnProperty), As = Ue(Object.prototype.toString), lt = Ue(RegExp.prototype.test), Fn = N9(TypeError);
function Ue(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
    return Oa(e, n, r);
  };
}
function N9(e) {
  return function() {
    for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
    return Ia(e, t);
  };
}
function ye(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ds;
  if (h0 && h0(e, null), !Jr(n)) return e;
  let r = n.length;
  for (; r--; ) {
    let s = n[r];
    if (typeof s == "string") {
      const i = t(s);
      i !== s && (y9(n) || (n[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function T9(e) {
  for (let n = 0; n < e.length; n++) xt(e, n) || (e[n] = null);
  return e;
}
function Et(e) {
  const n = Pr(null);
  for (const r of G2(e)) {
    var t = x9(r, 2);
    const s = t[0], i = t[1];
    xt(e, s) && (Jr(i) ? n[s] = T9(i) : i && typeof i == "object" && i.constructor === Object ? n[s] = Et(i) : n[s] = i);
  }
  return n;
}
function L9(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return k9(e);
    case "boolean":
      return E9(e);
    case "bigint":
      return x0 ? x0(e) : "0";
    case "symbol":
      return C0 ? C0(e) : "Symbol()";
    case "undefined":
      return As(e);
    case "function":
    case "object": {
      if (e === null) return As(e);
      const n = e, t = At(n, "toString");
      if (typeof t == "function") {
        const r = t(n);
        return typeof r == "string" ? r : As(r);
      }
      return As(e);
    }
    default:
      return As(e);
  }
}
function At(e, n) {
  for (; e !== null; ) {
    const r = b9(e, n);
    if (r) {
      if (r.get) return Ue(r.get);
      if (typeof r.value == "function") return Ue(r.value);
    }
    e = _9(e);
  }
  function t() {
    return null;
  }
  return t;
}
function j9(e) {
  try {
    return lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const y0 = Ke([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Rl = Ke([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Pl = Ke([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), A9 = Ke([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Hl = Ke([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), M9 = Ke([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), _0 = Ke(["#text"]), b0 = Ke([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Bl = Ke([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), v0 = Ke([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Zi = Ke([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), F9 = et(/{{[\w\W]*|^[\w\W]*}}/g), O9 = et(/<%[\w\W]*|^[\w\W]*%>/g), I9 = et(/\${[\w\W]*/g), D9 = et(/^data-[\-\w.\u00B7-\uFFFF]+$/), $9 = et(/^aria-[\-\w]+$/), w0 = et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), R9 = et(/^(?:\w+script|data):/i), P9 = et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), H9 = et(/^html$/i), B9 = et(/^[a-z][.\w]*(-[.\w]+)+$/i), S0 = et(/<[/\w!]/g), k0 = et(/<[/\w]/g), V9 = et(/<\/no(script|embed|frames)/i), z9 = et(/\/>/i), kt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, q2 = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], Z9 = Ke(ye({}, q2)), W9 = function() {
  const e = {};
  return qn(q2, (n) => {
    e[n] = et(new RegExp("</" + n + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ke(e);
}(), U9 = function() {
  return typeof window > "u" ? null : window;
}, K9 = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function") return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (r = t.getAttribute(s));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return n.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, E0 = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, On = function(n, t, r, s) {
  return xt(n, t) && Jr(n[t]) ? ye(s.base ? Et(s.base) : {}, n[t], s.transform) : r;
}, Vl = function(n, t, r) {
  const s = xt(n, t) ? n[t] : void 0;
  return s && typeof s == "object" ? Et(s) : r();
};
function J2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : U9();
  const n = (z) => J2(z);
  if (n.version = "3.4.16", n.removed = [], !e || !e.document || e.document.nodeType !== kt.document || !e.Element)
    return n.isSupported = !1, n;
  let t = e.document;
  const r = t, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = l.prototype, h = At(f, "cloneNode"), g = At(f, "remove"), p = At(f, "removeAttributeNode"), C = At(f, "nextSibling"), m = At(f, "childNodes"), x = At(f, "parentNode"), y = At(f, "shadowRoot"), _ = At(f, "attributes"), v = o && o.prototype ? At(o.prototype, "nodeType") : null, w = o && o.prototype ? At(o.prototype, "nodeName") : null, E = o && o.prototype ? At(o.prototype, "ownerDocument") : null, N = function(b) {
    return v ? v(b) : b.nodeType;
  }, S = function(b) {
    return w ? w(b) : b.nodeName;
  };
  if (typeof i == "function") {
    const z = t.createElement("template");
    z.content && z.content.ownerDocument && (t = z.content.ownerDocument);
  }
  let k, L = "", A, H = !1, G = 0;
  const O = function() {
    if (G > 0) throw Fn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, K = function(b) {
    O(), G++;
    try {
      return k.createHTML(b);
    } finally {
      G--;
    }
  }, X = function(b) {
    O(), G++;
    try {
      return k.createScriptURL(b);
    } finally {
      G--;
    }
  }, se = function() {
    return H || (A = K9(d, s), H = !0), A;
  }, ee = t, R = ee.implementation, V = ee.createNodeIterator, F = ee.createDocumentFragment, U = ee.getElementsByTagName, ie = r.importNode;
  let Z = E0();
  n.isSupported = typeof G2 == "function" && typeof x == "function" && R && R.createHTMLDocument !== void 0;
  const fe = F9, te = O9, Q = I9, ge = D9, $e = $9, Ge = R9, dt = P9, hs = B9;
  let jn = w0, Ae = null;
  const gs = ye({}, [
    ...y0,
    ...Rl,
    ...Pl,
    ...Hl,
    ..._0
  ]);
  let J = null;
  const he = ye({}, [
    ...b0,
    ...Bl,
    ...v0,
    ...Zi
  ]);
  let Oe = Object.seal(Pr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ze = null, ot = null;
  const Lt = Object.seal(Pr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let zt = !0, Xt = !0, mi = !1, L1 = !0, An = !1, Wn = !0, Un = !1, el = !1, xi = null, Ci = null, tl = !1, Sr = !1, yi = !1, _i = !1, j1 = !0, A1 = !1;
  const M1 = "user-content-";
  let nl = !0, rl = !1, kr = {}, Er = null;
  const F1 = ye({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let O1 = null;
  const I1 = ye({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let D1 = null;
  const $1 = ye({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), bi = "http://www.w3.org/1998/Math/MathML", vi = "http://www.w3.org/2000/svg", Qt = "http://www.w3.org/1999/xhtml";
  let Nr = Qt, sl = !1, il = null;
  const X2 = ye({}, [
    bi,
    vi,
    Qt
  ], $l), R1 = Ke([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ol = ye({}, R1);
  const P1 = Ke(["annotation-xml"]);
  let ll = ye({}, P1);
  const Q2 = ye({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let ps = null;
  const ef = ["application/xhtml+xml", "text/html"], tf = "text/html";
  let Be = null, Tr = null;
  const nf = t.createElement("form"), H1 = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, al = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tr && Tr === b) return;
    (!b || typeof b != "object") && (b = {}), b = Et(b), ps = ef.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? tf : b.PARSER_MEDIA_TYPE, Be = ps === "application/xhtml+xml" ? $l : Ds, Ae = On(b, "ALLOWED_TAGS", gs, { transform: Be }), J = On(b, "ALLOWED_ATTR", he, { transform: Be }), il = On(b, "ALLOWED_NAMESPACES", X2, { transform: $l }), D1 = On(b, "ADD_URI_SAFE_ATTR", $1, {
      transform: Be,
      base: $1
    }), O1 = On(b, "ADD_DATA_URI_TAGS", I1, {
      transform: Be,
      base: I1
    }), Er = On(b, "FORBID_CONTENTS", F1, { transform: Be }), Ze = On(b, "FORBID_TAGS", Et({}), { transform: Be }), ot = On(b, "FORBID_ATTR", Et({}), { transform: Be }), kr = xt(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Et(b.USE_PROFILES) : b.USE_PROFILES : !1, zt = b.ALLOW_ARIA_ATTR !== !1, Xt = b.ALLOW_DATA_ATTR !== !1, mi = b.ALLOW_UNKNOWN_PROTOCOLS || !1, L1 = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, An = b.SAFE_FOR_TEMPLATES || !1, Wn = b.SAFE_FOR_XML !== !1, Un = b.WHOLE_DOCUMENT || !1, Sr = b.RETURN_DOM || !1, yi = b.RETURN_DOM_FRAGMENT || !1, _i = b.RETURN_TRUSTED_TYPE || !1, tl = b.FORCE_BODY || !1, j1 = b.SANITIZE_DOM !== !1, A1 = b.SANITIZE_NAMED_PROPS || !1, nl = b.KEEP_CONTENT !== !1, rl = b.IN_PLACE || !1, jn = j9(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : w0, Nr = typeof b.NAMESPACE == "string" ? b.NAMESPACE : Qt, ol = Vl(b, "MATHML_TEXT_INTEGRATION_POINTS", () => ye({}, R1)), ll = Vl(b, "HTML_INTEGRATION_POINTS", () => ye({}, P1));
    const j = Vl(b, "CUSTOM_ELEMENT_HANDLING", () => Pr(null));
    if (Oe = Pr(null), xt(j, "tagNameCheck") && H1(j.tagNameCheck) && (Oe.tagNameCheck = j.tagNameCheck), xt(j, "attributeNameCheck") && H1(j.attributeNameCheck) && (Oe.attributeNameCheck = j.attributeNameCheck), xt(j, "allowCustomizedBuiltInElements") && typeof j.allowCustomizedBuiltInElements == "boolean" && (Oe.allowCustomizedBuiltInElements = j.allowCustomizedBuiltInElements), et(Oe), An && (Xt = !1), yi && (Sr = !0), kr && (Ae = ye({}, _0), J = Pr(null), kr.html === !0 && (ye(Ae, y0), ye(J, b0)), kr.svg === !0 && (ye(Ae, Rl), ye(J, Bl), ye(J, Zi)), kr.svgFilters === !0 && (ye(Ae, Pl), ye(J, Bl), ye(J, Zi)), kr.mathMl === !0 && (ye(Ae, Hl), ye(J, v0), ye(J, Zi))), Lt.tagCheck = null, Lt.attributeCheck = null, xt(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? Lt.tagCheck = b.ADD_TAGS : Jr(b.ADD_TAGS) && (Ae === gs && (Ae = Et(Ae)), ye(Ae, b.ADD_TAGS, Be))), xt(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? Lt.attributeCheck = b.ADD_ATTR : Jr(b.ADD_ATTR) && (J === he && (J = Et(J)), ye(J, b.ADD_ATTR, Be))), xt(b, "ADD_FORBID_CONTENTS") && Jr(b.ADD_FORBID_CONTENTS) && (Er === F1 && (Er = Et(Er)), ye(Er, b.ADD_FORBID_CONTENTS, Be)), nl && (Ae["#text"] = !0), Un && ye(Ae, [
      "html",
      "head",
      "body"
    ]), Ae.table && (ye(Ae, ["tbody"]), delete Ze.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function") throw Fn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Fn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const P = k;
      k = b.TRUSTED_TYPES_POLICY;
      try {
        L = K("");
      } catch (W) {
        throw k = P, W;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (k = void 0, L = "") : (k === void 0 && (k = se()), k && typeof L == "string" && (L = K("")));
    Ke && Ke(b), Tr = b;
  }, B1 = ye({}, [
    ...Rl,
    ...Pl,
    ...A9
  ]), V1 = ye({}, [...Hl, ...M9]), rf = function(b, j, P) {
    return j.namespaceURI === Qt ? b === "svg" : j.namespaceURI === bi ? b === "svg" && (P === "annotation-xml" || ol[P]) : !!B1[b];
  }, sf = function(b, j, P) {
    return j.namespaceURI === Qt ? b === "math" : j.namespaceURI === vi ? b === "math" && ll[P] : !!V1[b];
  }, of = function(b, j, P) {
    return j.namespaceURI === vi && !ll[P] || j.namespaceURI === bi && !ol[P] ? !1 : !V1[b] && (Q2[b] || !B1[b]);
  }, lf = function(b) {
    let j = x(b);
    (!j || !j.tagName) && (j = {
      namespaceURI: Nr,
      tagName: "template"
    });
    const P = Ds(b.tagName), W = Ds(j.tagName);
    return il[b.namespaceURI] ? b.namespaceURI === vi ? rf(P, j, W) : b.namespaceURI === bi ? sf(P, j, W) : b.namespaceURI === Qt ? of(P, j, W) : !!(ps === "application/xhtml+xml" && il[b.namespaceURI]) : !1;
  }, Mn = function(b) {
    Ls(n.removed, { element: b });
    try {
      x(b).removeChild(b);
    } catch {
      if (g(b), !x(b)) throw Fn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, z1 = function(b, j, P) {
    try {
      p(b, j);
    } catch {
      try {
        b.removeAttribute(P);
      } catch {
      }
    }
  }, wi = function(b) {
    Si(b);
    const j = m(b);
    if (j) {
      const W = [];
      qn(j, (re) => {
        Ls(W, re);
      }), qn(W, (re) => {
        try {
          g(re);
        } catch {
        }
      });
    }
    const P = _(b);
    if (P) for (let W = P.length - 1; W >= 0; --W) {
      const re = P[W], pe = re && re.name;
      typeof pe == "string" && z1(b, re, pe);
    }
  }, Kn = function(b, j, P) {
    if (!P) try {
      P = j.getAttributeNode(b);
    } catch {
      P = null;
    }
    Ls(n.removed, {
      attribute: P || null,
      from: j
    });
    try {
      P ? p(j, P) : j.removeAttribute(b);
    } catch {
      try {
        j.removeAttribute(b);
      } catch {
      }
    }
    if (b === "is")
      if (Sr || yi) try {
        Mn(j);
      } catch {
      }
      else try {
        j.setAttribute(b, "");
      } catch {
      }
  }, af = function(b) {
    const j = _(b);
    if (j)
      for (let P = j.length - 1; P >= 0; --P) {
        const W = j[P], re = W && W.name;
        typeof re != "string" || J[Be(re)] || z1(b, W, re);
      }
  }, Si = function(b) {
    const j = [b];
    for (; j.length > 0; ) {
      const P = j.pop();
      N(P) === kt.element && af(P);
      const W = m(P);
      if (W) for (let re = W.length - 1; re >= 0; --re) j.push(W[re]);
    }
  }, Z1 = function(b, j) {
    return Wn ? b === "patchsrc" ? !0 : b === "for" && j !== "label" && j !== "output" : !1;
  }, cf = function(b) {
    if (!Wn) return;
    const j = [b];
    for (; j.length > 0; ) {
      const P = j.pop(), W = N(P);
      if (W === kt.processingInstruction || W === kt.comment && lt(k0, P.data)) {
        try {
          g(P);
        } catch {
        }
        continue;
      }
      if (W === kt.element) {
        const pe = P, xe = Be(S(P));
        try {
          pe.hasAttribute && pe.hasAttribute("patchsrc") && pe.removeAttribute("patchsrc"), pe.hasAttribute && pe.hasAttribute("for") && Z1("for", xe) && pe.removeAttribute("for");
        } catch {
        }
      }
      const re = m(P);
      if (re) for (let pe = re.length - 1; pe >= 0; --pe) j.push(re[pe]);
    }
  }, W1 = function(b) {
    let j = null, P = null;
    if (tl) b = "<remove></remove>" + b;
    else {
      const pe = p0(b, /^[\r\n\t ]+/);
      P = pe && pe[0];
    }
    ps === "application/xhtml+xml" && Nr === Qt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const W = k ? K(b) : b;
    if (Nr === Qt) try {
      j = new u().parseFromString(W, ps);
    } catch {
    }
    if (!j || !j.documentElement) {
      j = R.createDocument(Nr, "template", null);
      try {
        j.documentElement.innerHTML = sl ? L : W;
      } catch {
      }
    }
    const re = j.body || j.documentElement;
    return b && P && re.insertBefore(t.createTextNode(P), re.childNodes[0] || null), Nr === Qt ? U.call(j, Un ? "html" : "body")[0] : Un ? j.documentElement : re;
  }, U1 = function(b) {
    const j = E ? E(b) : b.ownerDocument;
    return V.call(j || b, b, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
  }, ki = function(b) {
    return b = js(b, fe, " "), b = js(b, te, " "), b = js(b, Q, " "), b;
  }, cl = function(b) {
    var j;
    b.normalize();
    const P = E ? E(b) : b.ownerDocument, W = V.call(P || b, b, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null);
    let re = W.nextNode();
    for (; re; )
      re.data = ki(re.data), re = W.nextNode();
    const pe = (j = b.querySelectorAll) === null || j === void 0 ? void 0 : j.call(b, "template");
    pe && qn(pe, (xe) => {
      Lr(xe.content) && cl(xe.content);
    });
  }, Ei = function(b) {
    const j = w ? w(b) : null;
    return typeof j != "string" || Be(j) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || b.attributes !== _(b) || typeof b.removeAttribute != "function" || typeof b.removeAttributeNode != "function" || typeof b.getAttributeNode != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || b.nodeType !== v(b) || b.childNodes !== m(b);
  }, Lr = function(b) {
    if (!v || typeof b != "object" || b === null) return !1;
    try {
      return v(b) === kt.documentFragment;
    } catch {
      return !1;
    }
  }, ms = function(b) {
    if (!v || typeof b != "object" || b === null) return !1;
    try {
      return typeof v(b) == "number";
    } catch {
      return !1;
    }
  };
  function en(z, b, j) {
    z.length !== 0 && qn(z, (P) => {
      P.call(n, b, j, Tr);
    });
  }
  const uf = function(b, j) {
    return !!(Wn && b.hasChildNodes() && !ms(b.firstElementChild) && lt(S0, b.textContent) && lt(S0, b.innerHTML) || Wn && b.namespaceURI === Qt && Z9[j] && (ms(b.firstElementChild) || typeof b.textContent == "string" && lt(W9[j], b.textContent)) || b.nodeType === kt.processingInstruction || Wn && b.nodeType === kt.comment && lt(k0, b.data));
  }, Ni = function(b, j) {
    if (b instanceof RegExp) return lt(b, j);
    if (b instanceof Function) {
      for (var P = arguments.length, W = new Array(P > 2 ? P - 2 : 0), re = 2; re < P; re++) W[re - 2] = arguments[re];
      return !!b(j, ...W);
    }
    return !1;
  }, df = function(b, j, P) {
    if (!Ze[j] && q1(j) && Ni(Oe.tagNameCheck, j)) return !1;
    if (nl && !Er[j]) {
      const W = x(b), re = m(b);
      if (re && W) {
        const pe = re.length;
        for (let xe = pe - 1; xe >= 0; --xe) {
          const Re = b === P ? h(re[xe], !0) : re[xe];
          W.insertBefore(Re, C(b));
        }
      }
    }
    return Mn(b), !0;
  }, K1 = function(b, j, P, W) {
    return b.length === 0 ? j : j === P || j === W ? Et(j) : j;
  }, jr = function(b, j) {
    return b === j || x(b) !== null ? !1 : (rl && Si(b), !0);
  }, G1 = function(b, j) {
    if (en(Z.beforeSanitizeElements, b, null), jr(b, j)) return !0;
    if (Ei(b))
      return Mn(b), !0;
    const P = Be(S(b));
    if (Ae = K1(Z.uponSanitizeElement, Ae, gs, xi), en(Z.uponSanitizeElement, b, {
      tagName: P,
      allowedTags: Ae
    }), jr(b, j)) return !0;
    if (uf(b, P))
      return Mn(b), !0;
    if (Ze[P] || !(Lt.tagCheck instanceof Function && Lt.tagCheck(P)) && !Ae[P]) {
      const W = df(b, P, j);
      return W === !1 && (en(Z.afterSanitizeElements, b, null), jr(b, j)) ? !0 : W;
    }
    if (N(b) === kt.element && !lf(b) || (P === "noscript" || P === "noembed" || P === "noframes") && lt(V9, b.innerHTML))
      return Mn(b), !0;
    if (An && b.nodeType === kt.text) {
      const W = ki(b.textContent);
      b.textContent !== W && (Ls(n.removed, { element: b.cloneNode() }), b.textContent = W);
    }
    return en(Z.afterSanitizeElements, b, null), jr(b, j);
  }, Y1 = function(b, j, P) {
    if (ot[j] || Z1(j, b) || j1 && (j === "id" || j === "name") && (P in t || P in nf)) return !1;
    const W = J[j] || Lt.attributeCheck instanceof Function && Lt.attributeCheck(j, b);
    return Xt && lt(ge, j) || zt && lt($e, j) ? !0 : W ? D1[j] || lt(jn, js(P, dt, "")) || (j === "src" || j === "xlink:href" || j === "href") && b !== "script" && m0(P, "data:") === 0 && O1[b] || mi && !lt(Ge, js(P, dt, "")) ? !0 : !P : q1(b) && Ni(Oe.tagNameCheck, b) && Ni(Oe.attributeNameCheck, j, b) || j === "is" && Oe.allowCustomizedBuiltInElements && Ni(Oe.tagNameCheck, P);
  }, ff = ye({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), q1 = function(b) {
    return !ff[Ds(b)] && lt(hs, b);
  }, hf = function(b, j, P, W) {
    if (k && typeof d == "object" && typeof d.getAttributeType == "function" && !P) switch (d.getAttributeType(b, j)) {
      case "TrustedHTML":
        return K(W);
      case "TrustedScriptURL":
        return X(W);
    }
    return W;
  }, gf = function(b, j, P, W) {
    try {
      return P ? b.setAttributeNS(P, j, W) : b.setAttribute(j, W), Ei(b) ? (Mn(b), !1) : !0;
    } catch {
      return Kn(j, b), !1;
    }
  }, J1 = function(b, j) {
    if (en(Z.beforeSanitizeAttributes, b, null), jr(b, j)) return;
    const P = b.attributes;
    if (!P || Ei(b)) return;
    J = K1(Z.uponSanitizeAttribute, J, he, Ci);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: J,
      forceKeepAttr: void 0
    };
    let re = P.length;
    const pe = Be(b.nodeName);
    for (; re--; ) {
      const xe = P[re], Re = xe.name, jt = xe.namespaceURI, St = xe.value, Ar = Be(Re), dl = St;
      let ft = Re === "value" ? dl : S9(dl), X1 = !1;
      if (W.attrName = Ar, W.attrValue = ft, W.keepAttr = !0, W.forceKeepAttr = void 0, en(Z.uponSanitizeAttribute, b, W), ft = W.attrValue, A1 && (Ar === "id" || Ar === "name") && m0(ft, M1) !== 0 && (Kn(Re, b, xe), ft = M1 + ft, X1 = !0), Wn && lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        Kn(Re, b, xe);
        continue;
      }
      if (Ar === "attributename" && p0(ft, "href")) {
        Kn(Re, b, xe);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          Kn(Re, b, xe);
          continue;
        }
        if (!L1 && lt(z9, ft)) {
          Kn(Re, b, xe);
          continue;
        }
        if (An && (ft = ki(ft)), !Y1(pe, Ar, ft)) {
          Kn(Re, b, xe);
          continue;
        }
        ft = hf(pe, Ar, jt, ft), ft !== dl && gf(b, Re, jt, ft) && X1 && g0(n.removed);
      }
    }
    en(Z.afterSanitizeAttributes, b, null), jr(b, j);
  }, Ti = function(b) {
    let j = null;
    const P = U1(b);
    for (en(Z.beforeSanitizeShadowDOM, b, null); j = P.nextNode(); )
      if (en(Z.uponSanitizeShadowNode, j, null), G1(j, b), J1(j, b), Lr(j.content) && Ti(j.content), N(j) === kt.element) {
        const W = y(j);
        Lr(W) && (ul(W), Ti(W));
      }
    en(Z.afterSanitizeShadowDOM, b, null);
  }, ul = function(b) {
    const j = [{
      node: b,
      shadow: null
    }];
    for (; j.length > 0; ) {
      const P = j.pop();
      if (P.shadow) {
        Ti(P.shadow);
        continue;
      }
      const W = P.node, re = N(W) === kt.element, pe = m(W);
      if (pe) for (let xe = pe.length - 1; xe >= 0; --xe) j.push({
        node: pe[xe],
        shadow: null
      });
      if (re) {
        const xe = w ? w(W) : null;
        if (typeof xe == "string" && Be(xe) === "template") {
          const Re = W.content;
          Lr(Re) && j.push({
            node: Re,
            shadow: null
          });
        }
      }
      if (re) {
        const xe = y(W);
        Lr(xe) && j.push({
          node: null,
          shadow: xe
        }, {
          node: xe,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(z) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, j = null, P = null, W = null, re = null;
    if (sl = !z, sl && (z = "<!-->"), typeof z != "string" && !ms(z) && (z = L9(z), typeof z != "string"))
      throw Fn("dirty is not a string, aborting");
    if (!n.isSupported) return z;
    el ? (Ae = xi, J = Ci) : al(b), (Z.uponSanitizeElement.length > 0 || Z.uponSanitizeAttribute.length > 0) && (Ae = Et(Ae)), Z.uponSanitizeAttribute.length > 0 && (J = Et(J)), n.removed = [];
    const pe = rl && typeof z != "string" && ms(z);
    if (pe) {
      cf(z);
      const jt = S(z);
      if (typeof jt == "string") {
        const St = Be(jt);
        if (!Ae[St] || Ze[St])
          throw wi(z), Fn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ei(z))
        throw wi(z), Fn("root node is clobbered and cannot be sanitized in-place");
      try {
        ul(z);
      } catch (St) {
        throw wi(z), St;
      }
    } else if (ms(z))
      j = W1("<!---->"), P = j.ownerDocument.importNode(z, !0), P.nodeType === kt.element && P.nodeName === "BODY" || P.nodeName === "HTML" ? j = P : j.appendChild(P), ul(j);
    else {
      if (!Sr && !An && !Un && z.indexOf("<") === -1) return k && _i ? K(z) : z;
      if (j = W1(z), !j) return Sr ? null : _i ? L : "";
    }
    j && tl && Mn(j.firstChild);
    const xe = pe ? z : j;
    try {
      const jt = U1(xe);
      for (; W = jt.nextNode(); )
        G1(W, xe), J1(W, xe), Lr(W.content) && Ti(W.content);
    } catch (jt) {
      throw pe && (wi(z), qn(n.removed, (St) => {
        St.element && Si(St.element);
      })), jt;
    }
    if (pe) {
      let jt = !1;
      if (qn(n.removed, (St) => {
        St.element && (St.element === z && (jt = !0), Si(St.element));
      }), jt) throw Fn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return An && cl(z), z;
    }
    if (Sr) {
      if (An && cl(j), yi)
        for (re = F.call(j.ownerDocument); j.firstChild; ) re.appendChild(j.firstChild);
      else re = j;
      return (J.shadowroot || J.shadowrootmode) && (re = ie.call(r, re, !0)), re;
    }
    let Re = Un ? j.outerHTML : j.innerHTML;
    return Un && Ae["!doctype"] && j.ownerDocument && j.ownerDocument.doctype && j.ownerDocument.doctype.name && lt(H9, j.ownerDocument.doctype.name) && (Re = "<!DOCTYPE " + j.ownerDocument.doctype.name + `>
` + Re), An && (Re = ki(Re)), k && _i ? K(Re) : Re;
  }, n.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    al(z), el = !0, xi = Ae, Ci = J;
  }, n.clearConfig = function() {
    Tr = null, el = !1, xi = null, Ci = null, k = A, L = "";
  }, n.isValidAttribute = function(z, b, j) {
    Tr || al({});
    const P = Be(z), W = Be(b);
    return Y1(P, W, j);
  }, n.addHook = function(z, b) {
    typeof b == "function" && xt(Z, z) && Ls(Z[z], b);
  }, n.removeHook = function(z, b) {
    if (xt(Z, z)) {
      if (b !== void 0) {
        const j = v9(Z[z], b);
        return j === -1 ? void 0 : w9(Z[z], j, 1)[0];
      }
      return g0(Z[z]);
    }
  }, n.removeHooks = function(z) {
    xt(Z, z) && (Z[z] = []);
  }, n.removeAllHooks = function() {
    Z = E0();
  }, n;
}
var G9 = J2();
function bp({ html: e, className: n = "" }) {
  const t = ut(
    () => G9.sanitize(e, {
      // allow the tags/attrs the editor actually produces; nothing else
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "em",
        "u",
        "s",
        "code",
        "pre",
        "h1",
        "h2",
        "h3",
        "blockquote",
        "ul",
        "ol",
        "li",
        "a",
        "img"
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "style"]
    }),
    [e]
  );
  return e ? /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `rte-content ${n}`,
      dangerouslySetInnerHTML: { __html: t }
    }
  ) : null;
}
export {
  Bf as AcademicCapIcon,
  fh as AccessibleIcon,
  hp as Accordion,
  to as ActionBar,
  f8 as AddressIcon,
  cp as Alert,
  mh as ArrowDownIcon,
  hh as ArrowLeftIcon,
  gh as ArrowRightIcon,
  ph as ArrowUpIcon,
  sh as BalanceScaleIcon,
  fp as BaseLayout,
  If as BrandIcon,
  Tf as Button,
  Ul as CTA,
  Ul as CTADefault,
  rh as CabinetFilingIcon,
  $f as CalendarIcon,
  $a as Card,
  $a as CardDefault,
  uh as CartIcon,
  Th as ChatIcon,
  Hh as CheckBoxEmptyIcon,
  Bh as CheckBoxFilledIcon,
  Zh as CheckIcon,
  Zf as ChevronDownIcon,
  M0 as ChevronLeftIcon,
  A0 as ChevronRightIcon,
  Wf as ChevronTopIcon,
  ch as ClockIcon,
  F0 as CloseCircleIcon,
  zh as CloseFilledIcon,
  Vh as CloseIcon,
  op as ColorSystemSelector,
  Lh as CommentIcon,
  s8 as CompressIcon,
  hl as Container,
  Uh as CopyIcon,
  oh as CouchIcon,
  Of as DarkModeToggle,
  u8 as DiamondIcon,
  d8 as DollarIcon,
  ah as DonateIcon,
  up as Drawer,
  Rh as EditIcon,
  eh as EmailIcon,
  T8 as EntitySummaryCard,
  o8 as ExchangeIcon,
  O0 as ExclamationCircleIcon,
  Yf as ExpandAllIcon,
  r8 as ExpandIcon,
  Kh as ExternalLinkIcon,
  Nh as EyeOffIcon,
  Eh as EyeOnIcon,
  Gh as FileDownloadIcon,
  b8 as FilterPopover,
  Gf as FiltersIcon,
  L0 as FormControl,
  F8 as FormModal,
  Dh as GiftCardIcon,
  m8 as GiftCertificateCard,
  m8 as GiftCertificateCardDefault,
  Ih as GiftIcon,
  jh as GridIcon,
  Qf as HeadphonesIcon,
  vh as HeartFilledIcon,
  bh as HeartIcon,
  Df as HomeIcon,
  H0 as Icon,
  Da as Input,
  Da as InputDefault,
  t8 as KeyboardIcon,
  W8 as Layout,
  W8 as LayoutDefault,
  Xf as LinkIcon,
  Ah as ListIcon,
  wh as LocationIcon,
  Qh as LockIcon,
  Jh as MembershipIcon,
  Mh as MenuIcon,
  j8 as MetricCard,
  yh as MinusCircleIcon,
  Ch as MinusIcon,
  A8 as Modal,
  zf as MoonIcon,
  Ph as NewsIcon,
  S8 as Pagination,
  S8 as PaginationDefault,
  nc as PaletteIcon,
  $h as PersonalizeIcon,
  _h as PlayIcon,
  qf as PlusCircleIcon,
  xh as PlusIcon,
  y8 as Popover,
  Uf as PrintIcon,
  Jf as ReceiptIcon,
  _p as RichTextEditor,
  bp as RichTextViewer,
  n8 as RingIcon,
  i8 as ScanIcon,
  x8 as SchoolChurchCard,
  x8 as SchoolChurchCardDefault,
  Kf as SearchIcon,
  th as SettingsIcon,
  Wh as ShareIcon,
  Ra as SidebarMenu,
  Ra as SidebarMenuDefault,
  Xh as SignInIcon,
  Hf as SignOutIcon,
  a8 as SpeakerIcon,
  kh as StarFilledIcon,
  Sh as StarIcon,
  D0 as StatusPill,
  z8 as Stepper,
  rc as SunIcon,
  Fh as SwapIcon,
  ap as Table,
  ap as TableDefault,
  $0 as Tabs,
  nh as TagIcon,
  l8 as TheatreIcon,
  Rf as TicketIcon,
  lp as Toggle,
  lp as ToggleComponent,
  c8 as ToolsIcon,
  Oh as TrashIcon,
  gp as TreeView,
  qh as TwoFactorAuthIcon,
  e8 as UnlockIcon,
  ih as UsdCircleIcon,
  dh as UserAltIcon,
  lh as UserCogIcon,
  Yh as UserIcon,
  Pf as UsersIcon,
  Vf as WaterDropIcon,
  ys as applyVariantToDOM,
  Cr as colorSystem,
  rp as createColorClass,
  $r as createVariant,
  dp as defaultSidebarMenuProps,
  sp as exportColorSystem,
  Ff as generateVariantCSS,
  jf as getAlertClasses,
  ep as getAvailableColorClasses,
  Wl as getAvailableModes,
  Zl as getAvailableThemes,
  tp as getAvailableVariants,
  X9 as getButtonClasses,
  Mf as getColor,
  Lf as getInputClasses,
  Af as getModalClasses,
  Q9 as getToastClasses,
  $s as getVariantColors,
  I0 as iconMap,
  ip as importColorSystem,
  np as isValidColorClass,
  mn as parseVariant,
  R8 as sampleSidebarMenuData,
  j0 as useColorSystem
};
