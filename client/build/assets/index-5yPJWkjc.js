var Rb = Object.defineProperty;
var Lb = (e, t, n) =>
  t in e
    ? Rb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ib = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var N = (e, t, n) => Lb(e, typeof t != "symbol" ? t + "" : t, n);
var I4 = Ib((kt, Ct) => {
  function z0(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r)
          if (i !== "default" && !(i in e)) {
            const s = Object.getOwnPropertyDescriptor(r, i);
            s &&
              Object.defineProperty(
                e,
                i,
                s.get ? s : { enumerable: !0, get: () => r[i] },
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const s of i)
        if (s.type === "childList")
          for (const o of s.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const s = {};
      return (
        i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (s.credentials = "include")
          : i.crossOrigin === "anonymous"
            ? (s.credentials = "omit")
            : (s.credentials = "same-origin"),
        s
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  function Fl(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var B0 = { exports: {} },
    zl = {},
    U0 = { exports: {} },
    ne = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var So = Symbol.for("react.element"),
    Db = Symbol.for("react.portal"),
    Fb = Symbol.for("react.fragment"),
    zb = Symbol.for("react.strict_mode"),
    Bb = Symbol.for("react.profiler"),
    Ub = Symbol.for("react.provider"),
    Vb = Symbol.for("react.context"),
    Hb = Symbol.for("react.forward_ref"),
    Wb = Symbol.for("react.suspense"),
    $b = Symbol.for("react.memo"),
    qb = Symbol.for("react.lazy"),
    qh = Symbol.iterator;
  function Yb(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (qh && e[qh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V0 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H0 = Object.assign,
    W0 = {};
  function Ui(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = W0),
      (this.updater = n || V0);
  }
  Ui.prototype.isReactComponent = {};
  Ui.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Ui.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function $0() {}
  $0.prototype = Ui.prototype;
  function gf(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = W0),
      (this.updater = n || V0);
  }
  var yf = (gf.prototype = new $0());
  yf.constructor = gf;
  H0(yf, Ui.prototype);
  yf.isPureReactComponent = !0;
  var Yh = Array.isArray,
    q0 = Object.prototype.hasOwnProperty,
    vf = { current: null },
    Y0 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q0(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        q0.call(t, r) && !Y0.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
      $$typeof: So,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: vf.current,
    };
  }
  function Qb(e, t) {
    return {
      $$typeof: So,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function xf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === So;
  }
  function Kb(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Qh = /\/+/g;
  function Bc(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Kb("" + e.key)
      : t.toString(36);
  }
  function Aa(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
      switch (s) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case So:
            case Db:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (i = i(o)),
        (e = r === "" ? "." + Bc(o, 0) : r),
        Yh(i)
          ? ((n = ""),
            e != null && (n = e.replace(Qh, "$&/") + "/"),
            Aa(i, t, n, "", function (c) {
              return c;
            }))
          : i != null &&
            (xf(i) &&
              (i = Qb(
                i,
                n +
                  (!i.key || (o && o.key === i.key)
                    ? ""
                    : ("" + i.key).replace(Qh, "$&/") + "/") +
                  e,
              )),
            t.push(i)),
        1
      );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Yh(e)))
      for (var a = 0; a < e.length; a++) {
        s = e[a];
        var l = r + Bc(s, a);
        o += Aa(s, t, n, l, i);
      }
    else if (((l = Yb(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(s = e.next()).done; )
        (s = s.value), (l = r + Bc(s, a++)), (o += Aa(s, t, n, l, i));
    else if (s === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return o;
  }
  function Do(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      Aa(e, r, "", "", function (s) {
        return t.call(n, s, i++);
      }),
      r
    );
  }
  function Xb(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var lt = { current: null },
    Ea = { transition: null },
    Gb = {
      ReactCurrentDispatcher: lt,
      ReactCurrentBatchConfig: Ea,
      ReactCurrentOwner: vf,
    };
  function K0() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  ne.Children = {
    map: Do,
    forEach: function (e, t, n) {
      Do(
        e,
        function () {
          t.apply(this, arguments);
        },
        n,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Do(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Do(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!xf(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  ne.Component = Ui;
  ne.Fragment = Fb;
  ne.Profiler = Bb;
  ne.PureComponent = gf;
  ne.StrictMode = zb;
  ne.Suspense = Wb;
  ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gb;
  ne.act = K0;
  ne.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var r = H0({}, e.props),
      i = e.key,
      s = e.ref,
      o = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (o = vf.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        q0.call(t, l) &&
          !Y0.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
      r.children = a;
    }
    return { $$typeof: So, type: e.type, key: i, ref: s, props: r, _owner: o };
  };
  ne.createContext = function (e) {
    return (
      (e = {
        $$typeof: Vb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Ub, _context: e }),
      (e.Consumer = e)
    );
  };
  ne.createElement = Q0;
  ne.createFactory = function (e) {
    var t = Q0.bind(null, e);
    return (t.type = e), t;
  };
  ne.createRef = function () {
    return { current: null };
  };
  ne.forwardRef = function (e) {
    return { $$typeof: Hb, render: e };
  };
  ne.isValidElement = xf;
  ne.lazy = function (e) {
    return { $$typeof: qb, _payload: { _status: -1, _result: e }, _init: Xb };
  };
  ne.memo = function (e, t) {
    return { $$typeof: $b, type: e, compare: t === void 0 ? null : t };
  };
  ne.startTransition = function (e) {
    var t = Ea.transition;
    Ea.transition = {};
    try {
      e();
    } finally {
      Ea.transition = t;
    }
  };
  ne.unstable_act = K0;
  ne.useCallback = function (e, t) {
    return lt.current.useCallback(e, t);
  };
  ne.useContext = function (e) {
    return lt.current.useContext(e);
  };
  ne.useDebugValue = function () {};
  ne.useDeferredValue = function (e) {
    return lt.current.useDeferredValue(e);
  };
  ne.useEffect = function (e, t) {
    return lt.current.useEffect(e, t);
  };
  ne.useId = function () {
    return lt.current.useId();
  };
  ne.useImperativeHandle = function (e, t, n) {
    return lt.current.useImperativeHandle(e, t, n);
  };
  ne.useInsertionEffect = function (e, t) {
    return lt.current.useInsertionEffect(e, t);
  };
  ne.useLayoutEffect = function (e, t) {
    return lt.current.useLayoutEffect(e, t);
  };
  ne.useMemo = function (e, t) {
    return lt.current.useMemo(e, t);
  };
  ne.useReducer = function (e, t, n) {
    return lt.current.useReducer(e, t, n);
  };
  ne.useRef = function (e) {
    return lt.current.useRef(e);
  };
  ne.useState = function (e) {
    return lt.current.useState(e);
  };
  ne.useSyncExternalStore = function (e, t, n) {
    return lt.current.useSyncExternalStore(e, t, n);
  };
  ne.useTransition = function () {
    return lt.current.useTransition();
  };
  ne.version = "18.3.1";
  U0.exports = ne;
  var w = U0.exports;
  const V = Fl(w),
    Jb = z0({ __proto__: null, default: V }, [w]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Zb = w,
    e_ = Symbol.for("react.element"),
    t_ = Symbol.for("react.fragment"),
    n_ = Object.prototype.hasOwnProperty,
    r_ =
      Zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i_ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X0(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    n !== void 0 && (s = "" + n),
      t.key !== void 0 && (s = "" + t.key),
      t.ref !== void 0 && (o = t.ref);
    for (r in t) n_.call(t, r) && !i_.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: e_,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: r_.current,
    };
  }
  zl.Fragment = t_;
  zl.jsx = X0;
  zl.jsxs = X0;
  B0.exports = zl;
  var d = B0.exports,
    Iu = {},
    G0 = { exports: {} },
    Tt = {},
    J0 = { exports: {} },
    Z0 = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(M, R) {
      var F = M.length;
      M.push(R);
      e: for (; 0 < F; ) {
        var Y = (F - 1) >>> 1,
          U = M[Y];
        if (0 < i(U, R)) (M[Y] = R), (M[F] = U), (F = Y);
        else break e;
      }
    }
    function n(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var R = M[0],
        F = M.pop();
      if (F !== R) {
        M[0] = F;
        e: for (var Y = 0, U = M.length, oe = U >>> 1; Y < oe; ) {
          var te = 2 * (Y + 1) - 1,
            ae = M[te],
            ce = te + 1,
            pe = M[ce];
          if (0 > i(ae, F))
            ce < U && 0 > i(pe, ae)
              ? ((M[Y] = pe), (M[ce] = F), (Y = ce))
              : ((M[Y] = ae), (M[te] = F), (Y = te));
          else if (ce < U && 0 > i(pe, F)) (M[Y] = pe), (M[ce] = F), (Y = ce);
          else break e;
        }
      }
      return R;
    }
    function i(M, R) {
      var F = M.sortIndex - R.sortIndex;
      return F !== 0 ? F : M.id - R.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var s = performance;
      e.unstable_now = function () {
        return s.now();
      };
    } else {
      var o = Date,
        a = o.now();
      e.unstable_now = function () {
        return o.now() - a;
      };
    }
    var l = [],
      c = [],
      u = 1,
      f = null,
      h = 3,
      m = !1,
      g = !1,
      v = !1,
      b = typeof setTimeout == "function" ? setTimeout : null,
      y = typeof clearTimeout == "function" ? clearTimeout : null,
      p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(M) {
      for (var R = n(c); R !== null; ) {
        if (R.callback === null) r(c);
        else if (R.startTime <= M)
          r(c), (R.sortIndex = R.expirationTime), t(l, R);
        else break;
        R = n(c);
      }
    }
    function _(M) {
      if (((v = !1), x(M), !g))
        if (n(l) !== null) (g = !0), X(S);
        else {
          var R = n(c);
          R !== null && Q(_, R.startTime - M);
        }
    }
    function S(M, R) {
      (g = !1), v && ((v = !1), y(k), (k = -1)), (m = !0);
      var F = h;
      try {
        for (
          x(R), f = n(l);
          f !== null && (!(f.expirationTime > R) || (M && !L()));

        ) {
          var Y = f.callback;
          if (typeof Y == "function") {
            (f.callback = null), (h = f.priorityLevel);
            var U = Y(f.expirationTime <= R);
            (R = e.unstable_now()),
              typeof U == "function" ? (f.callback = U) : f === n(l) && r(l),
              x(R);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var oe = !0;
        else {
          var te = n(c);
          te !== null && Q(_, te.startTime - R), (oe = !1);
        }
        return oe;
      } finally {
        (f = null), (h = F), (m = !1);
      }
    }
    var E = !1,
      A = null,
      k = -1,
      P = 5,
      T = -1;
    function L() {
      return !(e.unstable_now() - T < P);
    }
    function B() {
      if (A !== null) {
        var M = e.unstable_now();
        T = M;
        var R = !0;
        try {
          R = A(!0, M);
        } finally {
          R ? $() : ((E = !1), (A = null));
        }
      } else E = !1;
    }
    var $;
    if (typeof p == "function")
      $ = function () {
        p(B);
      };
    else if (typeof MessageChannel < "u") {
      var ee = new MessageChannel(),
        q = ee.port2;
      (ee.port1.onmessage = B),
        ($ = function () {
          q.postMessage(null);
        });
    } else
      $ = function () {
        b(B, 0);
      };
    function X(M) {
      (A = M), E || ((E = !0), $());
    }
    function Q(M, R) {
      k = b(function () {
        M(e.unstable_now());
      }, R);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (M) {
        M.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || m || ((g = !0), X(S));
      }),
      (e.unstable_forceFrameRate = function (M) {
        0 > M || 125 < M
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
            )
          : (P = 0 < M ? Math.floor(1e3 / M) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (M) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var R = 3;
            break;
          default:
            R = h;
        }
        var F = h;
        h = R;
        try {
          return M();
        } finally {
          h = F;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (M, R) {
        switch (M) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            M = 3;
        }
        var F = h;
        h = M;
        try {
          return R();
        } finally {
          h = F;
        }
      }),
      (e.unstable_scheduleCallback = function (M, R, F) {
        var Y = e.unstable_now();
        switch (
          (typeof F == "object" && F !== null
            ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? Y + F : Y))
            : (F = Y),
          M)
        ) {
          case 1:
            var U = -1;
            break;
          case 2:
            U = 250;
            break;
          case 5:
            U = 1073741823;
            break;
          case 4:
            U = 1e4;
            break;
          default:
            U = 5e3;
        }
        return (
          (U = F + U),
          (M = {
            id: u++,
            callback: R,
            priorityLevel: M,
            startTime: F,
            expirationTime: U,
            sortIndex: -1,
          }),
          F > Y
            ? ((M.sortIndex = F),
              t(c, M),
              n(l) === null &&
                M === n(c) &&
                (v ? (y(k), (k = -1)) : (v = !0), Q(_, F - Y)))
            : ((M.sortIndex = U), t(l, M), g || m || ((g = !0), X(S))),
          M
        );
      }),
      (e.unstable_shouldYield = L),
      (e.unstable_wrapCallback = function (M) {
        var R = h;
        return function () {
          var F = h;
          h = R;
          try {
            return M.apply(this, arguments);
          } finally {
            h = F;
          }
        };
      });
  })(Z0);
  J0.exports = Z0;
  var s_ = J0.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var o_ = w,
    Pt = s_;
  function O(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var ey = new Set(),
    Bs = {};
  function Jr(e, t) {
    Ci(e, t), Ci(e + "Capture", t);
  }
  function Ci(e, t) {
    for (Bs[e] = t, e = 0; e < t.length; e++) ey.add(t[e]);
  }
  var Pn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Du = Object.prototype.hasOwnProperty,
    a_ =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Kh = {},
    Xh = {};
  function l_(e) {
    return Du.call(Xh, e)
      ? !0
      : Du.call(Kh, e)
        ? !1
        : a_.test(e)
          ? (Xh[e] = !0)
          : ((Kh[e] = !0), !1);
  }
  function c_(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function u_(e, t, n, r) {
    if (t === null || typeof t > "u" || c_(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function ct(e, t, n, r, i, s, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o);
  }
  var Ge = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Ge[e] = new ct(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    Ge[t] = new ct(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Ge[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    Ge[e] = new ct(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      Ge[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Ge[e] = new ct(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    Ge[e] = new ct(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    Ge[e] = new ct(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    Ge[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var bf = /[\-:]([a-z])/g;
  function _f(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(bf, _f);
      Ge[t] = new ct(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(bf, _f);
      Ge[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(bf, _f);
    Ge[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    Ge[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Ge.xlinkHref = new ct(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    Ge[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function wf(e, t, n, r) {
    var i = Ge.hasOwnProperty(t) ? Ge[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (u_(t, n, i, r) && (n = null),
      r || i === null
        ? l_(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Nn = o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Fo = Symbol.for("react.element"),
    li = Symbol.for("react.portal"),
    ci = Symbol.for("react.fragment"),
    Sf = Symbol.for("react.strict_mode"),
    Fu = Symbol.for("react.profiler"),
    ty = Symbol.for("react.provider"),
    ny = Symbol.for("react.context"),
    Af = Symbol.for("react.forward_ref"),
    zu = Symbol.for("react.suspense"),
    Bu = Symbol.for("react.suspense_list"),
    Ef = Symbol.for("react.memo"),
    Bn = Symbol.for("react.lazy"),
    ry = Symbol.for("react.offscreen"),
    Gh = Symbol.iterator;
  function Gi(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Gh && e[Gh]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Pe = Object.assign,
    Uc;
  function fs(e) {
    if (Uc === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Uc = (t && t[1]) || "";
      }
    return (
      `
` +
      Uc +
      e
    );
  }
  var Vc = !1;
  function Hc(e, t) {
    if (!e || Vc) return "";
    Vc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (c) {
            var r = c;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (c) {
            r = c;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (c) {
          r = c;
        }
        e();
      }
    } catch (c) {
      if (c && r && typeof c.stack == "string") {
        for (
          var i = c.stack.split(`
`),
            s = r.stack.split(`
`),
            o = i.length - 1,
            a = s.length - 1;
          1 <= o && 0 <= a && i[o] !== s[a];

        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (i[o] !== s[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || i[o] !== s[a])) {
                  var l =
                    `
` + i[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      (Vc = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
  }
  function d_(e) {
    switch (e.tag) {
      case 5:
        return fs(e.type);
      case 16:
        return fs("Lazy");
      case 13:
        return fs("Suspense");
      case 19:
        return fs("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Hc(e.type, !1)), e;
      case 11:
        return (e = Hc(e.type.render, !1)), e;
      case 1:
        return (e = Hc(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Uu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ci:
        return "Fragment";
      case li:
        return "Portal";
      case Fu:
        return "Profiler";
      case Sf:
        return "StrictMode";
      case zu:
        return "Suspense";
      case Bu:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ny:
          return (e.displayName || "Context") + ".Consumer";
        case ty:
          return (e._context.displayName || "Context") + ".Provider";
        case Af:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ef:
          return (
            (t = e.displayName || null), t !== null ? t : Uu(e.type) || "Memo"
          );
        case Bn:
          (t = e._payload), (e = e._init);
          try {
            return Uu(e(t));
          } catch {}
      }
    return null;
  }
  function f_(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Uu(t);
      case 8:
        return t === Sf ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function lr(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function iy(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function h_(e) {
    var t = iy(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (o) {
            (r = "" + o), s.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function zo(e) {
    e._valueTracker || (e._valueTracker = h_(e));
  }
  function sy(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = iy(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Qa(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Vu(e, t) {
    var n = t.checked;
    return Pe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Jh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = lr(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function oy(e, t) {
    (t = t.checked), t != null && wf(e, "checked", t, !1);
  }
  function Hu(e, t) {
    oy(e, t);
    var n = lr(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Wu(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Wu(e, t.type, lr(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Zh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Wu(e, t, n) {
    (t !== "number" || Qa(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var hs = Array.isArray;
  function bi(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + lr(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $u(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return Pe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ep(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(O(92));
        if (hs(n)) {
          if (1 < n.length) throw Error(O(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: lr(n) };
  }
  function ay(e, t) {
    var n = lr(t.value),
      r = lr(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function tp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ly(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function qu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ly(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Bo,
    cy = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Bo = Bo || document.createElement("div"),
            Bo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Bo.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Us(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ws = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    p_ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ws).forEach(function (e) {
    p_.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ws[t] = ws[e]);
    });
  });
  function uy(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (ws.hasOwnProperty(e) && ws[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function dy(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = uy(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var m_ = Pe(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Yu(e, t) {
    if (t) {
      if (m_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(O(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(O(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(O(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(O(62));
    }
  }
  function Qu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ku = null;
  function kf(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Xu = null,
    _i = null,
    wi = null;
  function np(e) {
    if ((e = ko(e))) {
      if (typeof Xu != "function") throw Error(O(280));
      var t = e.stateNode;
      t && ((t = Wl(t)), Xu(e.stateNode, e.type, t));
    }
  }
  function fy(e) {
    _i ? (wi ? wi.push(e) : (wi = [e])) : (_i = e);
  }
  function hy() {
    if (_i) {
      var e = _i,
        t = wi;
      if (((wi = _i = null), np(e), t)) for (e = 0; e < t.length; e++) np(t[e]);
    }
  }
  function py(e, t) {
    return e(t);
  }
  function my() {}
  var Wc = !1;
  function gy(e, t, n) {
    if (Wc) return e(t, n);
    Wc = !0;
    try {
      return py(e, t, n);
    } finally {
      (Wc = !1), (_i !== null || wi !== null) && (my(), hy());
    }
  }
  function Vs(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(O(231, t, typeof n));
    return n;
  }
  var Gu = !1;
  if (Pn)
    try {
      var Ji = {};
      Object.defineProperty(Ji, "passive", {
        get: function () {
          Gu = !0;
        },
      }),
        window.addEventListener("test", Ji, Ji),
        window.removeEventListener("test", Ji, Ji);
    } catch {
      Gu = !1;
    }
  function g_(e, t, n, r, i, s, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (u) {
      this.onError(u);
    }
  }
  var Ss = !1,
    Ka = null,
    Xa = !1,
    Ju = null,
    y_ = {
      onError: function (e) {
        (Ss = !0), (Ka = e);
      },
    };
  function v_(e, t, n, r, i, s, o, a, l) {
    (Ss = !1), (Ka = null), g_.apply(y_, arguments);
  }
  function x_(e, t, n, r, i, s, o, a, l) {
    if ((v_.apply(this, arguments), Ss)) {
      if (Ss) {
        var c = Ka;
        (Ss = !1), (Ka = null);
      } else throw Error(O(198));
      Xa || ((Xa = !0), (Ju = c));
    }
  }
  function Zr(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function yy(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function rp(e) {
    if (Zr(e) !== e) throw Error(O(188));
  }
  function b_(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Zr(e)), t === null)) throw Error(O(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return rp(i), e;
          if (s === r) return rp(i), t;
          s = s.sibling;
        }
        throw Error(O(188));
      }
      if (n.return !== r.return) (n = i), (r = s);
      else {
        for (var o = !1, a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = s.child; a; ) {
            if (a === n) {
              (o = !0), (n = s), (r = i);
              break;
            }
            if (a === r) {
              (o = !0), (r = s), (n = i);
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(O(189));
        }
      }
      if (n.alternate !== r) throw Error(O(190));
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? e : t;
  }
  function vy(e) {
    return (e = b_(e)), e !== null ? xy(e) : null;
  }
  function xy(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = xy(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var by = Pt.unstable_scheduleCallback,
    ip = Pt.unstable_cancelCallback,
    __ = Pt.unstable_shouldYield,
    w_ = Pt.unstable_requestPaint,
    Re = Pt.unstable_now,
    S_ = Pt.unstable_getCurrentPriorityLevel,
    Cf = Pt.unstable_ImmediatePriority,
    _y = Pt.unstable_UserBlockingPriority,
    Ga = Pt.unstable_NormalPriority,
    A_ = Pt.unstable_LowPriority,
    wy = Pt.unstable_IdlePriority,
    Bl = null,
    un = null;
  function E_(e) {
    if (un && typeof un.onCommitFiberRoot == "function")
      try {
        un.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Xt = Math.clz32 ? Math.clz32 : j_,
    k_ = Math.log,
    C_ = Math.LN2;
  function j_(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((k_(e) / C_) | 0)) | 0;
  }
  var Uo = 64,
    Vo = 4194304;
  function ps(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ja(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~i;
      a !== 0 ? (r = ps(a)) : ((s &= o), s !== 0 && (r = ps(s)));
    } else (o = n & ~i), o !== 0 ? (r = ps(o)) : s !== 0 && (r = ps(s));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Xt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function P_(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function T_(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var o = 31 - Xt(s),
        a = 1 << o,
        l = i[o];
      l === -1
        ? (!(a & n) || a & r) && (i[o] = P_(a, t))
        : l <= t && (e.expiredLanes |= a),
        (s &= ~a);
    }
  }
  function Zu(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Sy() {
    var e = Uo;
    return (Uo <<= 1), !(Uo & 4194240) && (Uo = 64), e;
  }
  function $c(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ao(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Xt(t)),
      (e[t] = n);
  }
  function O_(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Xt(n),
        s = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
    }
  }
  function jf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Xt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var fe = 0;
  function Ay(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ey,
    Pf,
    ky,
    Cy,
    jy,
    ed = !1,
    Ho = [],
    Jn = null,
    Zn = null,
    er = null,
    Hs = new Map(),
    Ws = new Map(),
    Vn = [],
    M_ =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function sp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jn = null;
        break;
      case "dragenter":
      case "dragleave":
        Zn = null;
        break;
      case "mouseover":
      case "mouseout":
        er = null;
        break;
      case "pointerover":
      case "pointerout":
        Hs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ws.delete(t.pointerId);
    }
  }
  function Zi(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = ko(t)), t !== null && Pf(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function N_(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Jn = Zi(Jn, e, t, n, r, i)), !0;
      case "dragenter":
        return (Zn = Zi(Zn, e, t, n, r, i)), !0;
      case "mouseover":
        return (er = Zi(er, e, t, n, r, i)), !0;
      case "pointerover":
        var s = i.pointerId;
        return Hs.set(s, Zi(Hs.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (s = i.pointerId), Ws.set(s, Zi(Ws.get(s) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Py(e) {
    var t = Mr(e.target);
    if (t !== null) {
      var n = Zr(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = yy(n)), t !== null)) {
            (e.blockedOn = t),
              jy(e.priority, function () {
                ky(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ka(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = td(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Ku = r), n.target.dispatchEvent(r), (Ku = null);
      } else return (t = ko(n)), t !== null && Pf(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function op(e, t, n) {
    ka(e) && n.delete(t);
  }
  function R_() {
    (ed = !1),
      Jn !== null && ka(Jn) && (Jn = null),
      Zn !== null && ka(Zn) && (Zn = null),
      er !== null && ka(er) && (er = null),
      Hs.forEach(op),
      Ws.forEach(op);
  }
  function es(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ed ||
        ((ed = !0),
        Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, R_)));
  }
  function $s(e) {
    function t(i) {
      return es(i, e);
    }
    if (0 < Ho.length) {
      es(Ho[0], e);
      for (var n = 1; n < Ho.length; n++) {
        var r = Ho[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Jn !== null && es(Jn, e),
        Zn !== null && es(Zn, e),
        er !== null && es(er, e),
        Hs.forEach(t),
        Ws.forEach(t),
        n = 0;
      n < Vn.length;
      n++
    )
      (r = Vn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Vn.length && ((n = Vn[0]), n.blockedOn === null); )
      Py(n), n.blockedOn === null && Vn.shift();
  }
  var Si = Nn.ReactCurrentBatchConfig,
    Za = !0;
  function L_(e, t, n, r) {
    var i = fe,
      s = Si.transition;
    Si.transition = null;
    try {
      (fe = 1), Tf(e, t, n, r);
    } finally {
      (fe = i), (Si.transition = s);
    }
  }
  function I_(e, t, n, r) {
    var i = fe,
      s = Si.transition;
    Si.transition = null;
    try {
      (fe = 4), Tf(e, t, n, r);
    } finally {
      (fe = i), (Si.transition = s);
    }
  }
  function Tf(e, t, n, r) {
    if (Za) {
      var i = td(e, t, n, r);
      if (i === null) tu(e, t, r, el, n), sp(e, r);
      else if (N_(i, e, t, n, r)) r.stopPropagation();
      else if ((sp(e, r), t & 4 && -1 < M_.indexOf(e))) {
        for (; i !== null; ) {
          var s = ko(i);
          if (
            (s !== null && Ey(s),
            (s = td(e, t, n, r)),
            s === null && tu(e, t, r, el, n),
            s === i)
          )
            break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else tu(e, t, r, null, n);
    }
  }
  var el = null;
  function td(e, t, n, r) {
    if (((el = null), (e = kf(r)), (e = Mr(e)), e !== null))
      if (((t = Zr(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = yy(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (el = e), null;
  }
  function Ty(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (S_()) {
          case Cf:
            return 1;
          case _y:
            return 4;
          case Ga:
          case A_:
            return 16;
          case wy:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wn = null,
    Of = null,
    Ca = null;
  function Oy() {
    if (Ca) return Ca;
    var e,
      t = Of,
      n = t.length,
      r,
      i = "value" in Wn ? Wn.value : Wn.textContent,
      s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return (Ca = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function ja(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Wo() {
    return !0;
  }
  function ap() {
    return !1;
  }
  function Ot(e) {
    function t(n, r, i, s, o) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Wo
          : ap),
        (this.isPropagationStopped = ap),
        this
      );
    }
    return (
      Pe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Wo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Wo));
        },
        persist: function () {},
        isPersistent: Wo,
      }),
      t
    );
  }
  var Vi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mf = Ot(Vi),
    Eo = Pe({}, Vi, { view: 0, detail: 0 }),
    D_ = Ot(Eo),
    qc,
    Yc,
    ts,
    Ul = Pe({}, Eo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nf,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ts &&
              (ts && e.type === "mousemove"
                ? ((qc = e.screenX - ts.screenX), (Yc = e.screenY - ts.screenY))
                : (Yc = qc = 0),
              (ts = e)),
            qc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Yc;
      },
    }),
    lp = Ot(Ul),
    F_ = Pe({}, Ul, { dataTransfer: 0 }),
    z_ = Ot(F_),
    B_ = Pe({}, Eo, { relatedTarget: 0 }),
    Qc = Ot(B_),
    U_ = Pe({}, Vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V_ = Ot(U_),
    H_ = Pe({}, Vi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    W_ = Ot(H_),
    $_ = Pe({}, Vi, { data: 0 }),
    cp = Ot($_),
    q_ = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Y_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Q_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function K_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Q_[e])
        ? !!t[e]
        : !1;
  }
  function Nf() {
    return K_;
  }
  var X_ = Pe({}, Eo, {
      key: function (e) {
        if (e.key) {
          var t = q_[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ja(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Y_[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nf,
      charCode: function (e) {
        return e.type === "keypress" ? ja(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ja(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    G_ = Ot(X_),
    J_ = Pe({}, Ul, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    up = Ot(J_),
    Z_ = Pe({}, Eo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nf,
    }),
    ew = Ot(Z_),
    tw = Pe({}, Vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nw = Ot(tw),
    rw = Pe({}, Ul, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    iw = Ot(rw),
    sw = [9, 13, 27, 32],
    Rf = Pn && "CompositionEvent" in window,
    As = null;
  Pn && "documentMode" in document && (As = document.documentMode);
  var ow = Pn && "TextEvent" in window && !As,
    My = Pn && (!Rf || (As && 8 < As && 11 >= As)),
    dp = " ",
    fp = !1;
  function Ny(e, t) {
    switch (e) {
      case "keyup":
        return sw.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ry(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ui = !1;
  function aw(e, t) {
    switch (e) {
      case "compositionend":
        return Ry(t);
      case "keypress":
        return t.which !== 32 ? null : ((fp = !0), dp);
      case "textInput":
        return (e = t.data), e === dp && fp ? null : e;
      default:
        return null;
    }
  }
  function lw(e, t) {
    if (ui)
      return e === "compositionend" || (!Rf && Ny(e, t))
        ? ((e = Oy()), (Ca = Of = Wn = null), (ui = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return My && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function hp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cw[e.type] : t === "textarea";
  }
  function Ly(e, t, n, r) {
    fy(r),
      (t = tl(t, "onChange")),
      0 < t.length &&
        ((n = new Mf("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Es = null,
    qs = null;
  function uw(e) {
    qy(e, 0);
  }
  function Vl(e) {
    var t = hi(e);
    if (sy(t)) return e;
  }
  function dw(e, t) {
    if (e === "change") return t;
  }
  var Iy = !1;
  if (Pn) {
    var Kc;
    if (Pn) {
      var Xc = "oninput" in document;
      if (!Xc) {
        var pp = document.createElement("div");
        pp.setAttribute("oninput", "return;"),
          (Xc = typeof pp.oninput == "function");
      }
      Kc = Xc;
    } else Kc = !1;
    Iy = Kc && (!document.documentMode || 9 < document.documentMode);
  }
  function mp() {
    Es && (Es.detachEvent("onpropertychange", Dy), (qs = Es = null));
  }
  function Dy(e) {
    if (e.propertyName === "value" && Vl(qs)) {
      var t = [];
      Ly(t, qs, e, kf(e)), gy(uw, t);
    }
  }
  function fw(e, t, n) {
    e === "focusin"
      ? (mp(), (Es = t), (qs = n), Es.attachEvent("onpropertychange", Dy))
      : e === "focusout" && mp();
  }
  function hw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vl(qs);
  }
  function pw(e, t) {
    if (e === "click") return Vl(t);
  }
  function mw(e, t) {
    if (e === "input" || e === "change") return Vl(t);
  }
  function gw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var en = typeof Object.is == "function" ? Object.is : gw;
  function Ys(e, t) {
    if (en(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Du.call(t, i) || !en(e[i], t[i])) return !1;
    }
    return !0;
  }
  function gp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yp(e, t) {
    var n = gp(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = gp(n);
    }
  }
  function Fy(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Fy(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function zy() {
    for (var e = window, t = Qa(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qa(e.document);
    }
    return t;
  }
  function Lf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function yw(e) {
    var t = zy(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Fy(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Lf(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            s = Math.min(r.start, i);
          (r = r.end === void 0 ? s : Math.min(r.end, i)),
            !e.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = yp(n, s));
          var o = yp(n, r);
          i &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var vw = Pn && "documentMode" in document && 11 >= document.documentMode,
    di = null,
    nd = null,
    ks = null,
    rd = !1;
  function vp(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rd ||
      di == null ||
      di !== Qa(r) ||
      ((r = di),
      "selectionStart" in r && Lf(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ks && Ys(ks, r)) ||
        ((ks = r),
        (r = tl(nd, "onSelect")),
        0 < r.length &&
          ((t = new Mf("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = di))));
  }
  function $o(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var fi = {
      animationend: $o("Animation", "AnimationEnd"),
      animationiteration: $o("Animation", "AnimationIteration"),
      animationstart: $o("Animation", "AnimationStart"),
      transitionend: $o("Transition", "TransitionEnd"),
    },
    Gc = {},
    By = {};
  Pn &&
    ((By = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fi.animationend.animation,
      delete fi.animationiteration.animation,
      delete fi.animationstart.animation),
    "TransitionEvent" in window || delete fi.transitionend.transition);
  function Hl(e) {
    if (Gc[e]) return Gc[e];
    if (!fi[e]) return e;
    var t = fi[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in By) return (Gc[e] = t[n]);
    return e;
  }
  var Uy = Hl("animationend"),
    Vy = Hl("animationiteration"),
    Hy = Hl("animationstart"),
    Wy = Hl("transitionend"),
    $y = new Map(),
    xp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function hr(e, t) {
    $y.set(e, t), Jr(t, [e]);
  }
  for (var Jc = 0; Jc < xp.length; Jc++) {
    var Zc = xp[Jc],
      xw = Zc.toLowerCase(),
      bw = Zc[0].toUpperCase() + Zc.slice(1);
    hr(xw, "on" + bw);
  }
  hr(Uy, "onAnimationEnd");
  hr(Vy, "onAnimationIteration");
  hr(Hy, "onAnimationStart");
  hr("dblclick", "onDoubleClick");
  hr("focusin", "onFocus");
  hr("focusout", "onBlur");
  hr(Wy, "onTransitionEnd");
  Ci("onMouseEnter", ["mouseout", "mouseover"]);
  Ci("onMouseLeave", ["mouseout", "mouseover"]);
  Ci("onPointerEnter", ["pointerout", "pointerover"]);
  Ci("onPointerLeave", ["pointerout", "pointerover"]);
  Jr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  Jr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  Jr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Jr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  Jr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  Jr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var ms =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    _w = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ms),
    );
  function bp(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), x_(r, t, void 0, e), (e.currentTarget = null);
  }
  function qy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              l = a.instance,
              c = a.currentTarget;
            if (((a = a.listener), l !== s && i.isPropagationStopped()))
              break e;
            bp(i, a, c), (s = l);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (l = a.instance),
              (c = a.currentTarget),
              (a = a.listener),
              l !== s && i.isPropagationStopped())
            )
              break e;
            bp(i, a, c), (s = l);
          }
      }
    }
    if (Xa) throw ((e = Ju), (Xa = !1), (Ju = null), e);
  }
  function be(e, t) {
    var n = t[ld];
    n === void 0 && (n = t[ld] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Yy(t, e, 2, !1), n.add(r));
  }
  function eu(e, t, n) {
    var r = 0;
    t && (r |= 4), Yy(n, e, r, t);
  }
  var qo = "_reactListening" + Math.random().toString(36).slice(2);
  function Qs(e) {
    if (!e[qo]) {
      (e[qo] = !0),
        ey.forEach(function (n) {
          n !== "selectionchange" && (_w.has(n) || eu(n, !1, e), eu(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[qo] || ((t[qo] = !0), eu("selectionchange", !1, t));
    }
  }
  function Yy(e, t, n, r) {
    switch (Ty(t)) {
      case 1:
        var i = L_;
        break;
      case 4:
        i = I_;
        break;
      default:
        i = Tf;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Gu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function tu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var l = o.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = o.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (((o = Mr(a)), o === null)) return;
            if (((l = o.tag), l === 5 || l === 6)) {
              r = s = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    gy(function () {
      var c = s,
        u = kf(n),
        f = [];
      e: {
        var h = $y.get(e);
        if (h !== void 0) {
          var m = Mf,
            g = e;
          switch (e) {
            case "keypress":
              if (ja(n) === 0) break e;
            case "keydown":
            case "keyup":
              m = G_;
              break;
            case "focusin":
              (g = "focus"), (m = Qc);
              break;
            case "focusout":
              (g = "blur"), (m = Qc);
              break;
            case "beforeblur":
            case "afterblur":
              m = Qc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = lp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = z_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = ew;
              break;
            case Uy:
            case Vy:
            case Hy:
              m = V_;
              break;
            case Wy:
              m = nw;
              break;
            case "scroll":
              m = D_;
              break;
            case "wheel":
              m = iw;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = W_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = up;
          }
          var v = (t & 4) !== 0,
            b = !v && e === "scroll",
            y = v ? (h !== null ? h + "Capture" : null) : h;
          v = [];
          for (var p = c, x; p !== null; ) {
            x = p;
            var _ = x.stateNode;
            if (
              (x.tag === 5 &&
                _ !== null &&
                ((x = _),
                y !== null &&
                  ((_ = Vs(p, y)), _ != null && v.push(Ks(p, _, x)))),
              b)
            )
              break;
            p = p.return;
          }
          0 < v.length &&
            ((h = new m(h, g, null, n, u)), f.push({ event: h, listeners: v }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            h &&
              n !== Ku &&
              (g = n.relatedTarget || n.fromElement) &&
              (Mr(g) || g[Tn]))
          )
            break e;
          if (
            (m || h) &&
            ((h =
              u.window === u
                ? u
                : (h = u.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            m
              ? ((g = n.relatedTarget || n.toElement),
                (m = c),
                (g = g ? Mr(g) : null),
                g !== null &&
                  ((b = Zr(g)), g !== b || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((m = null), (g = c)),
            m !== g)
          ) {
            if (
              ((v = lp),
              (_ = "onMouseLeave"),
              (y = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((v = up),
                (_ = "onPointerLeave"),
                (y = "onPointerEnter"),
                (p = "pointer")),
              (b = m == null ? h : hi(m)),
              (x = g == null ? h : hi(g)),
              (h = new v(_, p + "leave", m, n, u)),
              (h.target = b),
              (h.relatedTarget = x),
              (_ = null),
              Mr(u) === c &&
                ((v = new v(y, p + "enter", g, n, u)),
                (v.target = x),
                (v.relatedTarget = b),
                (_ = v)),
              (b = _),
              m && g)
            )
              t: {
                for (v = m, y = g, p = 0, x = v; x; x = si(x)) p++;
                for (x = 0, _ = y; _; _ = si(_)) x++;
                for (; 0 < p - x; ) (v = si(v)), p--;
                for (; 0 < x - p; ) (y = si(y)), x--;
                for (; p--; ) {
                  if (v === y || (y !== null && v === y.alternate)) break t;
                  (v = si(v)), (y = si(y));
                }
                v = null;
              }
            else v = null;
            m !== null && _p(f, h, m, v, !1),
              g !== null && b !== null && _p(f, b, g, v, !0);
          }
        }
        e: {
          if (
            ((h = c ? hi(c) : window),
            (m = h.nodeName && h.nodeName.toLowerCase()),
            m === "select" || (m === "input" && h.type === "file"))
          )
            var S = dw;
          else if (hp(h))
            if (Iy) S = mw;
            else {
              S = hw;
              var E = fw;
            }
          else
            (m = h.nodeName) &&
              m.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (S = pw);
          if (S && (S = S(e, c))) {
            Ly(f, S, n, u);
            break e;
          }
          E && E(e, h, c),
            e === "focusout" &&
              (E = h._wrapperState) &&
              E.controlled &&
              h.type === "number" &&
              Wu(h, "number", h.value);
        }
        switch (((E = c ? hi(c) : window), e)) {
          case "focusin":
            (hp(E) || E.contentEditable === "true") &&
              ((di = E), (nd = c), (ks = null));
            break;
          case "focusout":
            ks = nd = di = null;
            break;
          case "mousedown":
            rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (rd = !1), vp(f, n, u);
            break;
          case "selectionchange":
            if (vw) break;
          case "keydown":
          case "keyup":
            vp(f, n, u);
        }
        var A;
        if (Rf)
          e: {
            switch (e) {
              case "compositionstart":
                var k = "onCompositionStart";
                break e;
              case "compositionend":
                k = "onCompositionEnd";
                break e;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break e;
            }
            k = void 0;
          }
        else
          ui
            ? Ny(e, n) && (k = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (k = "onCompositionStart");
        k &&
          (My &&
            n.locale !== "ko" &&
            (ui || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && ui && (A = Oy())
              : ((Wn = u),
                (Of = "value" in Wn ? Wn.value : Wn.textContent),
                (ui = !0))),
          (E = tl(c, k)),
          0 < E.length &&
            ((k = new cp(k, e, null, n, u)),
            f.push({ event: k, listeners: E }),
            A ? (k.data = A) : ((A = Ry(n)), A !== null && (k.data = A)))),
          (A = ow ? aw(e, n) : lw(e, n)) &&
            ((c = tl(c, "onBeforeInput")),
            0 < c.length &&
              ((u = new cp("onBeforeInput", "beforeinput", null, n, u)),
              f.push({ event: u, listeners: c }),
              (u.data = A)));
      }
      qy(f, t);
    });
  }
  function Ks(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function tl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = Vs(e, n)),
        s != null && r.unshift(Ks(e, s, i)),
        (s = Vs(e, t)),
        s != null && r.push(Ks(e, s, i))),
        (e = e.return);
    }
    return r;
  }
  function si(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function _p(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        c = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 &&
        c !== null &&
        ((a = c),
        i
          ? ((l = Vs(n, s)), l != null && o.unshift(Ks(n, l, a)))
          : i || ((l = Vs(n, s)), l != null && o.push(Ks(n, l, a)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var ww = /\r\n?/g,
    Sw = /\u0000|\uFFFD/g;
  function wp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ww,
        `
`,
      )
      .replace(Sw, "");
  }
  function Yo(e, t, n) {
    if (((t = wp(t)), wp(e) !== t && n)) throw Error(O(425));
  }
  function nl() {}
  var id = null,
    sd = null;
  function od(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ad = typeof setTimeout == "function" ? setTimeout : void 0,
    Aw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Sp = typeof Promise == "function" ? Promise : void 0,
    Ew =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Sp < "u"
          ? function (e) {
              return Sp.resolve(null).then(e).catch(kw);
            }
          : ad;
  function kw(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function nu(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), $s(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    $s(t);
  }
  function tr(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ap(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Hi = Math.random().toString(36).slice(2),
    cn = "__reactFiber$" + Hi,
    Xs = "__reactProps$" + Hi,
    Tn = "__reactContainer$" + Hi,
    ld = "__reactEvents$" + Hi,
    Cw = "__reactListeners$" + Hi,
    jw = "__reactHandles$" + Hi;
  function Mr(e) {
    var t = e[cn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Tn] || n[cn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ap(e); e !== null; ) {
            if ((n = e[cn])) return n;
            e = Ap(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ko(e) {
    return (
      (e = e[cn] || e[Tn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function hi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(O(33));
  }
  function Wl(e) {
    return e[Xs] || null;
  }
  var cd = [],
    pi = -1;
  function pr(e) {
    return { current: e };
  }
  function we(e) {
    0 > pi || ((e.current = cd[pi]), (cd[pi] = null), pi--);
  }
  function xe(e, t) {
    pi++, (cd[pi] = e.current), (e.current = t);
  }
  var cr = {},
    rt = pr(cr),
    mt = pr(!1),
    Hr = cr;
  function ji(e, t) {
    var n = e.type.contextTypes;
    if (!n) return cr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      s;
    for (s in n) i[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function gt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function rl() {
    we(mt), we(rt);
  }
  function Ep(e, t, n) {
    if (rt.current !== cr) throw Error(O(168));
    xe(rt, t), xe(mt, n);
  }
  function Qy(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(O(108, f_(e) || "Unknown", i));
    return Pe({}, n, r);
  }
  function il(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        cr),
      (Hr = rt.current),
      xe(rt, e),
      xe(mt, mt.current),
      !0
    );
  }
  function kp(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(O(169));
    n
      ? ((e = Qy(e, t, Hr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        we(mt),
        we(rt),
        xe(rt, e))
      : we(mt),
      xe(mt, n);
  }
  var bn = null,
    $l = !1,
    ru = !1;
  function Ky(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function Pw(e) {
    ($l = !0), Ky(e);
  }
  function mr() {
    if (!ru && bn !== null) {
      ru = !0;
      var e = 0,
        t = fe;
      try {
        var n = bn;
        for (fe = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (bn = null), ($l = !1);
      } catch (i) {
        throw (bn !== null && (bn = bn.slice(e + 1)), by(Cf, mr), i);
      } finally {
        (fe = t), (ru = !1);
      }
    }
    return null;
  }
  var mi = [],
    gi = 0,
    sl = null,
    ol = 0,
    It = [],
    Dt = 0,
    Wr = null,
    Sn = 1,
    An = "";
  function Cr(e, t) {
    (mi[gi++] = ol), (mi[gi++] = sl), (sl = e), (ol = t);
  }
  function Xy(e, t, n) {
    (It[Dt++] = Sn), (It[Dt++] = An), (It[Dt++] = Wr), (Wr = e);
    var r = Sn;
    e = An;
    var i = 32 - Xt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - Xt(t) + i;
    if (30 < s) {
      var o = i - (i % 5);
      (s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (Sn = (1 << (32 - Xt(t) + i)) | (n << i) | r),
        (An = s + e);
    } else (Sn = (1 << s) | (n << i) | r), (An = e);
  }
  function If(e) {
    e.return !== null && (Cr(e, 1), Xy(e, 1, 0));
  }
  function Df(e) {
    for (; e === sl; )
      (sl = mi[--gi]), (mi[gi] = null), (ol = mi[--gi]), (mi[gi] = null);
    for (; e === Wr; )
      (Wr = It[--Dt]),
        (It[Dt] = null),
        (An = It[--Dt]),
        (It[Dt] = null),
        (Sn = It[--Dt]),
        (It[Dt] = null);
  }
  var jt = null,
    At = null,
    Ee = !1,
    Yt = null;
  function Gy(e, t) {
    var n = Ft(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Cp(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (jt = e), (At = tr(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (jt = e), (At = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Wr !== null ? { id: Sn, overflow: An } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Ft(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (jt = e),
              (At = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ud(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function dd(e) {
    if (Ee) {
      var t = At;
      if (t) {
        var n = t;
        if (!Cp(e, t)) {
          if (ud(e)) throw Error(O(418));
          t = tr(n.nextSibling);
          var r = jt;
          t && Cp(e, t)
            ? Gy(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (jt = e));
        }
      } else {
        if (ud(e)) throw Error(O(418));
        (e.flags = (e.flags & -4097) | 2), (Ee = !1), (jt = e);
      }
    }
  }
  function jp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    jt = e;
  }
  function Qo(e) {
    if (e !== jt) return !1;
    if (!Ee) return jp(e), (Ee = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !od(e.type, e.memoizedProps))),
      t && (t = At))
    ) {
      if (ud(e)) throw (Jy(), Error(O(418)));
      for (; t; ) Gy(e, t), (t = tr(t.nextSibling));
    }
    if ((jp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(O(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                At = tr(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        At = null;
      }
    } else At = jt ? tr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Jy() {
    for (var e = At; e; ) e = tr(e.nextSibling);
  }
  function Pi() {
    (At = jt = null), (Ee = !1);
  }
  function Ff(e) {
    Yt === null ? (Yt = [e]) : Yt.push(e);
  }
  var Tw = Nn.ReactCurrentBatchConfig;
  function ns(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(O(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(O(147, e));
        var i = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (o) {
              var a = i.refs;
              o === null ? delete a[s] : (a[s] = o);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(O(284));
      if (!n._owner) throw Error(O(290, e));
    }
    return e;
  }
  function Ko(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        O(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function Pp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Zy(e) {
    function t(y, p) {
      if (e) {
        var x = y.deletions;
        x === null ? ((y.deletions = [p]), (y.flags |= 16)) : x.push(p);
      }
    }
    function n(y, p) {
      if (!e) return null;
      for (; p !== null; ) t(y, p), (p = p.sibling);
      return null;
    }
    function r(y, p) {
      for (y = new Map(); p !== null; )
        p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
      return y;
    }
    function i(y, p) {
      return (y = sr(y, p)), (y.index = 0), (y.sibling = null), y;
    }
    function s(y, p, x) {
      return (
        (y.index = x),
        e
          ? ((x = y.alternate),
            x !== null
              ? ((x = x.index), x < p ? ((y.flags |= 2), p) : x)
              : ((y.flags |= 2), p))
          : ((y.flags |= 1048576), p)
      );
    }
    function o(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, p, x, _) {
      return p === null || p.tag !== 6
        ? ((p = uu(x, y.mode, _)), (p.return = y), p)
        : ((p = i(p, x)), (p.return = y), p);
    }
    function l(y, p, x, _) {
      var S = x.type;
      return S === ci
        ? u(y, p, x.props.children, _, x.key)
        : p !== null &&
            (p.elementType === S ||
              (typeof S == "object" &&
                S !== null &&
                S.$$typeof === Bn &&
                Pp(S) === p.type))
          ? ((_ = i(p, x.props)), (_.ref = ns(y, p, x)), (_.return = y), _)
          : ((_ = La(x.type, x.key, x.props, null, y.mode, _)),
            (_.ref = ns(y, p, x)),
            (_.return = y),
            _);
    }
    function c(y, p, x, _) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== x.containerInfo ||
        p.stateNode.implementation !== x.implementation
        ? ((p = du(x, y.mode, _)), (p.return = y), p)
        : ((p = i(p, x.children || [])), (p.return = y), p);
    }
    function u(y, p, x, _, S) {
      return p === null || p.tag !== 7
        ? ((p = Dr(x, y.mode, _, S)), (p.return = y), p)
        : ((p = i(p, x)), (p.return = y), p);
    }
    function f(y, p, x) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return (p = uu("" + p, y.mode, x)), (p.return = y), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Fo:
            return (
              (x = La(p.type, p.key, p.props, null, y.mode, x)),
              (x.ref = ns(y, null, p)),
              (x.return = y),
              x
            );
          case li:
            return (p = du(p, y.mode, x)), (p.return = y), p;
          case Bn:
            var _ = p._init;
            return f(y, _(p._payload), x);
        }
        if (hs(p) || Gi(p))
          return (p = Dr(p, y.mode, x, null)), (p.return = y), p;
        Ko(y, p);
      }
      return null;
    }
    function h(y, p, x, _) {
      var S = p !== null ? p.key : null;
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return S !== null ? null : a(y, p, "" + x, _);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Fo:
            return x.key === S ? l(y, p, x, _) : null;
          case li:
            return x.key === S ? c(y, p, x, _) : null;
          case Bn:
            return (S = x._init), h(y, p, S(x._payload), _);
        }
        if (hs(x) || Gi(x)) return S !== null ? null : u(y, p, x, _, null);
        Ko(y, x);
      }
      return null;
    }
    function m(y, p, x, _, S) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return (y = y.get(x) || null), a(p, y, "" + _, S);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Fo:
            return (
              (y = y.get(_.key === null ? x : _.key) || null), l(p, y, _, S)
            );
          case li:
            return (
              (y = y.get(_.key === null ? x : _.key) || null), c(p, y, _, S)
            );
          case Bn:
            var E = _._init;
            return m(y, p, x, E(_._payload), S);
        }
        if (hs(_) || Gi(_)) return (y = y.get(x) || null), u(p, y, _, S, null);
        Ko(p, _);
      }
      return null;
    }
    function g(y, p, x, _) {
      for (
        var S = null, E = null, A = p, k = (p = 0), P = null;
        A !== null && k < x.length;
        k++
      ) {
        A.index > k ? ((P = A), (A = null)) : (P = A.sibling);
        var T = h(y, A, x[k], _);
        if (T === null) {
          A === null && (A = P);
          break;
        }
        e && A && T.alternate === null && t(y, A),
          (p = s(T, p, k)),
          E === null ? (S = T) : (E.sibling = T),
          (E = T),
          (A = P);
      }
      if (k === x.length) return n(y, A), Ee && Cr(y, k), S;
      if (A === null) {
        for (; k < x.length; k++)
          (A = f(y, x[k], _)),
            A !== null &&
              ((p = s(A, p, k)),
              E === null ? (S = A) : (E.sibling = A),
              (E = A));
        return Ee && Cr(y, k), S;
      }
      for (A = r(y, A); k < x.length; k++)
        (P = m(A, y, k, x[k], _)),
          P !== null &&
            (e && P.alternate !== null && A.delete(P.key === null ? k : P.key),
            (p = s(P, p, k)),
            E === null ? (S = P) : (E.sibling = P),
            (E = P));
      return (
        e &&
          A.forEach(function (L) {
            return t(y, L);
          }),
        Ee && Cr(y, k),
        S
      );
    }
    function v(y, p, x, _) {
      var S = Gi(x);
      if (typeof S != "function") throw Error(O(150));
      if (((x = S.call(x)), x == null)) throw Error(O(151));
      for (
        var E = (S = null), A = p, k = (p = 0), P = null, T = x.next();
        A !== null && !T.done;
        k++, T = x.next()
      ) {
        A.index > k ? ((P = A), (A = null)) : (P = A.sibling);
        var L = h(y, A, T.value, _);
        if (L === null) {
          A === null && (A = P);
          break;
        }
        e && A && L.alternate === null && t(y, A),
          (p = s(L, p, k)),
          E === null ? (S = L) : (E.sibling = L),
          (E = L),
          (A = P);
      }
      if (T.done) return n(y, A), Ee && Cr(y, k), S;
      if (A === null) {
        for (; !T.done; k++, T = x.next())
          (T = f(y, T.value, _)),
            T !== null &&
              ((p = s(T, p, k)),
              E === null ? (S = T) : (E.sibling = T),
              (E = T));
        return Ee && Cr(y, k), S;
      }
      for (A = r(y, A); !T.done; k++, T = x.next())
        (T = m(A, y, k, T.value, _)),
          T !== null &&
            (e && T.alternate !== null && A.delete(T.key === null ? k : T.key),
            (p = s(T, p, k)),
            E === null ? (S = T) : (E.sibling = T),
            (E = T));
      return (
        e &&
          A.forEach(function (B) {
            return t(y, B);
          }),
        Ee && Cr(y, k),
        S
      );
    }
    function b(y, p, x, _) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === ci &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case Fo:
            e: {
              for (var S = x.key, E = p; E !== null; ) {
                if (E.key === S) {
                  if (((S = x.type), S === ci)) {
                    if (E.tag === 7) {
                      n(y, E.sibling),
                        (p = i(E, x.props.children)),
                        (p.return = y),
                        (y = p);
                      break e;
                    }
                  } else if (
                    E.elementType === S ||
                    (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === Bn &&
                      Pp(S) === E.type)
                  ) {
                    n(y, E.sibling),
                      (p = i(E, x.props)),
                      (p.ref = ns(y, E, x)),
                      (p.return = y),
                      (y = p);
                    break e;
                  }
                  n(y, E);
                  break;
                } else t(y, E);
                E = E.sibling;
              }
              x.type === ci
                ? ((p = Dr(x.props.children, y.mode, _, x.key)),
                  (p.return = y),
                  (y = p))
                : ((_ = La(x.type, x.key, x.props, null, y.mode, _)),
                  (_.ref = ns(y, p, x)),
                  (_.return = y),
                  (y = _));
            }
            return o(y);
          case li:
            e: {
              for (E = x.key; p !== null; ) {
                if (p.key === E)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === x.containerInfo &&
                    p.stateNode.implementation === x.implementation
                  ) {
                    n(y, p.sibling),
                      (p = i(p, x.children || [])),
                      (p.return = y),
                      (y = p);
                    break e;
                  } else {
                    n(y, p);
                    break;
                  }
                else t(y, p);
                p = p.sibling;
              }
              (p = du(x, y.mode, _)), (p.return = y), (y = p);
            }
            return o(y);
          case Bn:
            return (E = x._init), b(y, p, E(x._payload), _);
        }
        if (hs(x)) return g(y, p, x, _);
        if (Gi(x)) return v(y, p, x, _);
        Ko(y, x);
      }
      return (typeof x == "string" && x !== "") || typeof x == "number"
        ? ((x = "" + x),
          p !== null && p.tag === 6
            ? (n(y, p.sibling), (p = i(p, x)), (p.return = y), (y = p))
            : (n(y, p), (p = uu(x, y.mode, _)), (p.return = y), (y = p)),
          o(y))
        : n(y, p);
    }
    return b;
  }
  var Ti = Zy(!0),
    ev = Zy(!1),
    al = pr(null),
    ll = null,
    yi = null,
    zf = null;
  function Bf() {
    zf = yi = ll = null;
  }
  function Uf(e) {
    var t = al.current;
    we(al), (e._currentValue = t);
  }
  function fd(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ai(e, t) {
    (ll = e),
      (zf = yi = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (pt = !0), (e.firstContext = null));
  }
  function Ut(e) {
    var t = e._currentValue;
    if (zf !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), yi === null)) {
        if (ll === null) throw Error(O(308));
        (yi = e), (ll.dependencies = { lanes: 0, firstContext: e });
      } else yi = yi.next = e;
    return t;
  }
  var Nr = null;
  function Vf(e) {
    Nr === null ? (Nr = [e]) : Nr.push(e);
  }
  function tv(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Vf(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      On(e, r)
    );
  }
  function On(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Un = !1;
  function Hf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function nv(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function jn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function nr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ie & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        On(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Vf(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      On(e, n)
    );
  }
  function Pa(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), jf(e, n);
    }
  }
  function Tp(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
        } while (n !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function cl(e, t, n, r) {
    var i = e.updateQueue;
    Un = !1;
    var s = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a,
        c = l.next;
      (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
      var u = e.alternate;
      u !== null &&
        ((u = u.updateQueue),
        (a = u.lastBaseUpdate),
        a !== o &&
          (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
          (u.lastBaseUpdate = l)));
    }
    if (s !== null) {
      var f = i.baseState;
      (o = 0), (u = c = l = null), (a = s);
      do {
        var h = a.lane,
          m = a.eventTime;
        if ((r & h) === h) {
          u !== null &&
            (u = u.next =
              {
                eventTime: m,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var g = e,
              v = a;
            switch (((h = t), (m = n), v.tag)) {
              case 1:
                if (((g = v.payload), typeof g == "function")) {
                  f = g.call(m, f, h);
                  break e;
                }
                f = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = v.payload),
                  (h = typeof g == "function" ? g.call(m, f, h) : g),
                  h == null)
                )
                  break e;
                f = Pe({}, f, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (h = i.effects),
            h === null ? (i.effects = [a]) : h.push(a));
        } else
          (m = {
            eventTime: m,
            lane: h,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            u === null ? ((c = u = m), (l = f)) : (u = u.next = m),
            (o |= h);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (h = a),
            (a = h.next),
            (h.next = null),
            (i.lastBaseUpdate = h),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (u === null && (l = f),
        (i.baseState = l),
        (i.firstBaseUpdate = c),
        (i.lastBaseUpdate = u),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (o |= i.lane), (i = i.next);
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      (qr |= o), (e.lanes = o), (e.memoizedState = f);
    }
  }
  function Op(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(O(191, i));
          i.call(r);
        }
      }
  }
  var Co = {},
    dn = pr(Co),
    Gs = pr(Co),
    Js = pr(Co);
  function Rr(e) {
    if (e === Co) throw Error(O(174));
    return e;
  }
  function Wf(e, t) {
    switch ((xe(Js, t), xe(Gs, e), xe(dn, Co), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qu(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = qu(t, e));
    }
    we(dn), xe(dn, t);
  }
  function Oi() {
    we(dn), we(Gs), we(Js);
  }
  function rv(e) {
    Rr(Js.current);
    var t = Rr(dn.current),
      n = qu(t, e.type);
    t !== n && (xe(Gs, e), xe(dn, n));
  }
  function $f(e) {
    Gs.current === e && (we(dn), we(Gs));
  }
  var Ce = pr(0);
  function ul(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var iu = [];
  function qf() {
    for (var e = 0; e < iu.length; e++)
      iu[e]._workInProgressVersionPrimary = null;
    iu.length = 0;
  }
  var Ta = Nn.ReactCurrentDispatcher,
    su = Nn.ReactCurrentBatchConfig,
    $r = 0,
    je = null,
    Be = null,
    $e = null,
    dl = !1,
    Cs = !1,
    Zs = 0,
    Ow = 0;
  function Je() {
    throw Error(O(321));
  }
  function Yf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!en(e[n], t[n])) return !1;
    return !0;
  }
  function Qf(e, t, n, r, i, s) {
    if (
      (($r = s),
      (je = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ta.current = e === null || e.memoizedState === null ? Lw : Iw),
      (e = n(r, i)),
      Cs)
    ) {
      s = 0;
      do {
        if (((Cs = !1), (Zs = 0), 25 <= s)) throw Error(O(301));
        (s += 1),
          ($e = Be = null),
          (t.updateQueue = null),
          (Ta.current = Dw),
          (e = n(r, i));
      } while (Cs);
    }
    if (
      ((Ta.current = fl),
      (t = Be !== null && Be.next !== null),
      ($r = 0),
      ($e = Be = je = null),
      (dl = !1),
      t)
    )
      throw Error(O(300));
    return e;
  }
  function Kf() {
    var e = Zs !== 0;
    return (Zs = 0), e;
  }
  function an() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return $e === null ? (je.memoizedState = $e = e) : ($e = $e.next = e), $e;
  }
  function Vt() {
    if (Be === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = $e === null ? je.memoizedState : $e.next;
    if (t !== null) ($e = t), (Be = e);
    else {
      if (e === null) throw Error(O(310));
      (Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        $e === null ? (je.memoizedState = $e = e) : ($e = $e.next = e);
    }
    return $e;
  }
  function eo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ou(e) {
    var t = Vt(),
      n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = Be,
      i = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var o = i.next;
        (i.next = s.next), (s.next = o);
      }
      (r.baseQueue = i = s), (n.pending = null);
    }
    if (i !== null) {
      (s = i.next), (r = r.baseState);
      var a = (o = null),
        l = null,
        c = s;
      do {
        var u = c.lane;
        if (($r & u) === u)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            (r = c.hasEagerState ? c.eagerState : e(r, c.action));
        else {
          var f = {
            lane: u,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          };
          l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
            (je.lanes |= u),
            (qr |= u);
        }
        c = c.next;
      } while (c !== null && c !== s);
      l === null ? (o = r) : (l.next = a),
        en(r, t.memoizedState) || (pt = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (s = i.lane), (je.lanes |= s), (qr |= s), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function au(e) {
    var t = Vt(),
      n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var o = (i = i.next);
      do (s = e(s, o.action)), (o = o.next);
      while (o !== i);
      en(s, t.memoizedState) || (pt = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function iv() {}
  function sv(e, t) {
    var n = je,
      r = Vt(),
      i = t(),
      s = !en(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (pt = !0)),
      (r = r.queue),
      Xf(lv.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || ($e !== null && $e.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        to(9, av.bind(null, n, r, i, t), void 0, null),
        Ye === null)
      )
        throw Error(O(349));
      $r & 30 || ov(n, t, i);
    }
    return i;
  }
  function ov(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function av(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), cv(t) && uv(e);
  }
  function lv(e, t, n) {
    return n(function () {
      cv(t) && uv(e);
    });
  }
  function cv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !en(e, n);
    } catch {
      return !0;
    }
  }
  function uv(e) {
    var t = On(e, 1);
    t !== null && Gt(t, e, 1, -1);
  }
  function Mp(e) {
    var t = an();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: eo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Rw.bind(null, je, e)),
      [t.memoizedState, e]
    );
  }
  function to(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = je.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (je.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function dv() {
    return Vt().memoizedState;
  }
  function Oa(e, t, n, r) {
    var i = an();
    (je.flags |= e),
      (i.memoizedState = to(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function ql(e, t, n, r) {
    var i = Vt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Be !== null) {
      var o = Be.memoizedState;
      if (((s = o.destroy), r !== null && Yf(r, o.deps))) {
        i.memoizedState = to(t, n, s, r);
        return;
      }
    }
    (je.flags |= e), (i.memoizedState = to(1 | t, n, s, r));
  }
  function Np(e, t) {
    return Oa(8390656, 8, e, t);
  }
  function Xf(e, t) {
    return ql(2048, 8, e, t);
  }
  function fv(e, t) {
    return ql(4, 2, e, t);
  }
  function hv(e, t) {
    return ql(4, 4, e, t);
  }
  function pv(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function mv(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), ql(4, 4, pv.bind(null, t, e), n)
    );
  }
  function Gf() {}
  function gv(e, t) {
    var n = Vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yf(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function yv(e, t) {
    var n = Vt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yf(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function vv(e, t, n) {
    return $r & 21
      ? (en(n, t) ||
          ((n = Sy()), (je.lanes |= n), (qr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = n));
  }
  function Mw(e, t) {
    var n = fe;
    (fe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = su.transition;
    su.transition = {};
    try {
      e(!1), t();
    } finally {
      (fe = n), (su.transition = r);
    }
  }
  function xv() {
    return Vt().memoizedState;
  }
  function Nw(e, t, n) {
    var r = ir(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bv(e))
    )
      _v(t, n);
    else if (((n = tv(e, t, n, r)), n !== null)) {
      var i = at();
      Gt(n, e, r, i), wv(n, t, r);
    }
  }
  function Rw(e, t, n) {
    var r = ir(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (bv(e)) _v(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = s(o, n);
          if (((i.hasEagerState = !0), (i.eagerState = a), en(a, o))) {
            var l = t.interleaved;
            l === null
              ? ((i.next = i), Vf(t))
              : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = tv(e, t, i, r)),
        n !== null && ((i = at()), Gt(n, e, r, i), wv(n, t, r));
    }
  }
  function bv(e) {
    var t = e.alternate;
    return e === je || (t !== null && t === je);
  }
  function _v(e, t) {
    Cs = dl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function wv(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), jf(e, n);
    }
  }
  var fl = {
      readContext: Ut,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useInsertionEffect: Je,
      useLayoutEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useMutableSource: Je,
      useSyncExternalStore: Je,
      useId: Je,
      unstable_isNewReconciler: !1,
    },
    Lw = {
      readContext: Ut,
      useCallback: function (e, t) {
        return (an().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ut,
      useEffect: Np,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Oa(4194308, 4, pv.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Oa(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Oa(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = an();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = an();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Nw.bind(null, je, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = an();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Mp,
      useDebugValue: Gf,
      useDeferredValue: function (e) {
        return (an().memoizedState = e);
      },
      useTransition: function () {
        var e = Mp(!1),
          t = e[0];
        return (e = Mw.bind(null, e[1])), (an().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = je,
          i = an();
        if (Ee) {
          if (n === void 0) throw Error(O(407));
          n = n();
        } else {
          if (((n = t()), Ye === null)) throw Error(O(349));
          $r & 30 || ov(r, t, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (i.queue = s),
          Np(lv.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          to(9, av.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = an(),
          t = Ye.identifierPrefix;
        if (Ee) {
          var n = An,
            r = Sn;
          (n = (r & ~(1 << (32 - Xt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Zs++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Ow++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Iw = {
      readContext: Ut,
      useCallback: gv,
      useContext: Ut,
      useEffect: Xf,
      useImperativeHandle: mv,
      useInsertionEffect: fv,
      useLayoutEffect: hv,
      useMemo: yv,
      useReducer: ou,
      useRef: dv,
      useState: function () {
        return ou(eo);
      },
      useDebugValue: Gf,
      useDeferredValue: function (e) {
        var t = Vt();
        return vv(t, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = ou(eo)[0],
          t = Vt().memoizedState;
        return [e, t];
      },
      useMutableSource: iv,
      useSyncExternalStore: sv,
      useId: xv,
      unstable_isNewReconciler: !1,
    },
    Dw = {
      readContext: Ut,
      useCallback: gv,
      useContext: Ut,
      useEffect: Xf,
      useImperativeHandle: mv,
      useInsertionEffect: fv,
      useLayoutEffect: hv,
      useMemo: yv,
      useReducer: au,
      useRef: dv,
      useState: function () {
        return au(eo);
      },
      useDebugValue: Gf,
      useDeferredValue: function (e) {
        var t = Vt();
        return Be === null ? (t.memoizedState = e) : vv(t, Be.memoizedState, e);
      },
      useTransition: function () {
        var e = au(eo)[0],
          t = Vt().memoizedState;
        return [e, t];
      },
      useMutableSource: iv,
      useSyncExternalStore: sv,
      useId: xv,
      unstable_isNewReconciler: !1,
    };
  function $t(e, t) {
    if (e && e.defaultProps) {
      (t = Pe({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function hd(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Pe({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Yl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = at(),
        i = ir(e),
        s = jn(r, i);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = nr(e, s, i)),
        t !== null && (Gt(t, e, i, r), Pa(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = at(),
        i = ir(e),
        s = jn(r, i);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = nr(e, s, i)),
        t !== null && (Gt(t, e, i, r), Pa(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = at(),
        r = ir(e),
        i = jn(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = nr(e, i, r)),
        t !== null && (Gt(t, e, r, n), Pa(t, e, r));
    },
  };
  function Rp(e, t, n, r, i, s, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ys(n, r) || !Ys(i, s)
          : !0
    );
  }
  function Sv(e, t, n) {
    var r = !1,
      i = cr,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = Ut(s))
        : ((i = gt(t) ? Hr : rt.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? ji(e, i) : cr)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Yl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function Lp(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Yl.enqueueReplaceState(t, t.state, null);
  }
  function pd(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Hf(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (i.context = Ut(s))
      : ((s = gt(t) ? Hr : rt.current), (i.context = ji(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (hd(e, t, s, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Yl.enqueueReplaceState(i, i.state, null),
        cl(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Mi(e, t) {
    try {
      var n = "",
        r = t;
      do (n += d_(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function lu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function md(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Fw = typeof WeakMap == "function" ? WeakMap : Map;
  function Av(e, t, n) {
    (n = jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        pl || ((pl = !0), (Ed = r)), md(e, t);
      }),
      n
    );
  }
  function Ev(e, t, n) {
    (n = jn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          md(e, t);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          md(e, t),
            typeof r != "function" &&
              (rr === null ? (rr = new Set([this])) : rr.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function Ip(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Fw();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Jw.bind(null, e, t, n)), t.then(e, e));
  }
  function Dp(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fp(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = jn(-1, 1)), (t.tag = 2), nr(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var zw = Nn.ReactCurrentOwner,
    pt = !1;
  function st(e, t, n, r) {
    t.child = e === null ? ev(t, null, n, r) : Ti(t, e.child, n, r);
  }
  function zp(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return (
      Ai(t, i),
      (r = Qf(e, t, n, r, s, i)),
      (n = Kf()),
      e !== null && !pt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Mn(e, t, i))
        : (Ee && n && If(t), (t.flags |= 1), st(e, t, r, i), t.child)
    );
  }
  function Bp(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !sh(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), kv(e, t, s, r, i))
        : ((e = La(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & i))) {
      var o = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ys), n(o, r) && e.ref === t.ref)
      )
        return Mn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = sr(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function kv(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Ys(s, r) && e.ref === t.ref)
        if (((pt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          e.flags & 131072 && (pt = !0);
        else return (t.lanes = e.lanes), Mn(e, t, i);
    }
    return gd(e, t, n, r, i);
  }
  function Cv(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          xe(xi, wt),
          (wt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            xe(xi, wt),
            (wt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          xe(xi, wt),
          (wt |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        xe(xi, wt),
        (wt |= r);
    return st(e, t, i, n), t.child;
  }
  function jv(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function gd(e, t, n, r, i) {
    var s = gt(n) ? Hr : rt.current;
    return (
      (s = ji(t, s)),
      Ai(t, i),
      (n = Qf(e, t, n, r, s, i)),
      (r = Kf()),
      e !== null && !pt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Mn(e, t, i))
        : (Ee && r && If(t), (t.flags |= 1), st(e, t, n, i), t.child)
    );
  }
  function Up(e, t, n, r, i) {
    if (gt(n)) {
      var s = !0;
      il(t);
    } else s = !1;
    if ((Ai(t, i), t.stateNode === null))
      Ma(e, t), Sv(t, n, r), pd(t, n, r, i), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var l = o.context,
        c = n.contextType;
      typeof c == "object" && c !== null
        ? (c = Ut(c))
        : ((c = gt(n) ? Hr : rt.current), (c = ji(t, c)));
      var u = n.getDerivedStateFromProps,
        f =
          typeof u == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || l !== c) && Lp(t, o, r, c)),
        (Un = !1);
      var h = t.memoizedState;
      (o.state = h),
        cl(t, r, o, i),
        (l = t.memoizedState),
        a !== r || h !== l || mt.current || Un
          ? (typeof u == "function" && (hd(t, n, u, r), (l = t.memoizedState)),
            (a = Un || Rp(t, n, a, r, h, l, c))
              ? (f ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (o.props = r),
            (o.state = l),
            (o.context = c),
            (r = a))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        nv(e, t),
        (a = t.memoizedProps),
        (c = t.type === t.elementType ? a : $t(t.type, a)),
        (o.props = c),
        (f = t.pendingProps),
        (h = o.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = Ut(l))
          : ((l = gt(n) ? Hr : rt.current), (l = ji(t, l)));
      var m = n.getDerivedStateFromProps;
      (u =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== f || h !== l) && Lp(t, o, r, l)),
        (Un = !1),
        (h = t.memoizedState),
        (o.state = h),
        cl(t, r, o, i);
      var g = t.memoizedState;
      a !== f || h !== g || mt.current || Un
        ? (typeof m == "function" && (hd(t, n, m, r), (g = t.memoizedState)),
          (c = Un || Rp(t, n, c, r, h, g, l) || !1)
            ? (u ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, g, l),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, g, l)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = g)),
          (o.props = r),
          (o.state = g),
          (o.context = l),
          (r = c))
        : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return yd(e, t, n, r, s, i);
  }
  function yd(e, t, n, r, i, s) {
    jv(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && kp(t, n, !1), Mn(e, t, s);
    (r = t.stateNode), (zw.current = t);
    var a =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Ti(t, e.child, null, s)), (t.child = Ti(t, null, a, s)))
        : st(e, t, a, s),
      (t.memoizedState = r.state),
      i && kp(t, n, !0),
      t.child
    );
  }
  function Pv(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ep(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ep(e, t.context, !1),
      Wf(e, t.containerInfo);
  }
  function Vp(e, t, n, r, i) {
    return Pi(), Ff(i), (t.flags |= 256), st(e, t, n, r), t.child;
  }
  var vd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xd(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Tv(e, t, n) {
    var r = t.pendingProps,
      i = Ce.current,
      s = !1,
      o = (t.flags & 128) !== 0,
      a;
    if (
      ((a = o) ||
        (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      xe(Ce, i & 1),
      e === null)
    )
      return (
        dd(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = o))
                  : (s = Xl(o, r, 0, null)),
                (e = Dr(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = xd(n)),
                (t.memoizedState = vd),
                e)
              : Jf(t, o))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return Bw(e, t, o, r, a, i, n);
    if (s) {
      (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = sr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (s = sr(a, s)) : ((s = Dr(s, o, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? xd(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (s.memoizedState = o),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = vd),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = sr(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Jf(e, t) {
    return (
      (t = Xl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xo(e, t, n, r) {
    return (
      r !== null && Ff(r),
      Ti(t, e.child, null, n),
      (e = Jf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bw(e, t, n, r, i, s, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = lu(Error(O(422)))), Xo(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (i = t.mode),
            (r = Xl({ mode: "visible", children: r.children }, i, 0, null)),
            (s = Dr(s, i, o, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            t.mode & 1 && Ti(t, e.child, null, o),
            (t.child.memoizedState = xd(o)),
            (t.memoizedState = vd),
            s);
    if (!(t.mode & 1)) return Xo(e, t, o, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (s = Error(O(419))), (r = lu(s, r, void 0)), Xo(e, t, o, r)
      );
    }
    if (((a = (o & e.childLanes) !== 0), pt || a)) {
      if (((r = Ye), r !== null)) {
        switch (o & -o) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | o) ? 0 : i),
          i !== 0 &&
            i !== s.retryLane &&
            ((s.retryLane = i), On(e, i), Gt(r, e, i, -1));
      }
      return ih(), (r = lu(Error(O(421)))), Xo(e, t, o, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Zw.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (At = tr(i.nextSibling)),
        (jt = t),
        (Ee = !0),
        (Yt = null),
        e !== null &&
          ((It[Dt++] = Sn),
          (It[Dt++] = An),
          (It[Dt++] = Wr),
          (Sn = e.id),
          (An = e.overflow),
          (Wr = t)),
        (t = Jf(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Hp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), fd(e.return, t, n);
  }
  function cu(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i));
  }
  function Ov(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((st(e, t, r.children, n), (r = Ce.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Hp(e, n, t);
          else if (e.tag === 19) Hp(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((xe(Ce, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && ul(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            cu(t, !1, i, n, s);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && ul(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          cu(t, !0, n, null, s);
          break;
        case "together":
          cu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ma(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Mn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (qr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
      for (
        e = t.child, n = sr(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = sr(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Uw(e, t, n) {
    switch (t.tag) {
      case 3:
        Pv(t), Pi();
        break;
      case 5:
        rv(t);
        break;
      case 1:
        gt(t.type) && il(t);
        break;
      case 4:
        Wf(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        xe(al, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (xe(Ce, Ce.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Tv(e, t, n)
              : (xe(Ce, Ce.current & 1),
                (e = Mn(e, t, n)),
                e !== null ? e.sibling : null);
        xe(Ce, Ce.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ov(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          xe(Ce, Ce.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Cv(e, t, n);
    }
    return Mn(e, t, n);
  }
  var Mv, bd, Nv, Rv;
  Mv = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  bd = function () {};
  Nv = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      (e = t.stateNode), Rr(dn.current);
      var s = null;
      switch (n) {
        case "input":
          (i = Vu(e, i)), (r = Vu(e, r)), (s = []);
          break;
        case "select":
          (i = Pe({}, i, { value: void 0 })),
            (r = Pe({}, r, { value: void 0 })),
            (s = []);
          break;
        case "textarea":
          (i = $u(e, i)), (r = $u(e, r)), (s = []);
          break;
        default:
          typeof i.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = nl);
      }
      Yu(n, r);
      var o;
      n = null;
      for (c in i)
        if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
          if (c === "style") {
            var a = i[c];
            for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
          } else
            c !== "dangerouslySetInnerHTML" &&
              c !== "children" &&
              c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              c !== "autoFocus" &&
              (Bs.hasOwnProperty(c)
                ? s || (s = [])
                : (s = s || []).push(c, null));
      for (c in r) {
        var l = r[c];
        if (
          ((a = i != null ? i[c] : void 0),
          r.hasOwnProperty(c) && l !== a && (l != null || a != null))
        )
          if (c === "style")
            if (a) {
              for (o in a)
                !a.hasOwnProperty(o) ||
                  (l && l.hasOwnProperty(o)) ||
                  (n || (n = {}), (n[o] = ""));
              for (o in l)
                l.hasOwnProperty(o) &&
                  a[o] !== l[o] &&
                  (n || (n = {}), (n[o] = l[o]));
            } else n || (s || (s = []), s.push(c, n)), (n = l);
          else
            c === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (s = s || []).push(c, l))
              : c === "children"
                ? (typeof l != "string" && typeof l != "number") ||
                  (s = s || []).push(c, "" + l)
                : c !== "suppressContentEditableWarning" &&
                  c !== "suppressHydrationWarning" &&
                  (Bs.hasOwnProperty(c)
                    ? (l != null && c === "onScroll" && be("scroll", e),
                      s || a === l || (s = []))
                    : (s = s || []).push(c, l));
      }
      n && (s = s || []).push("style", n);
      var c = s;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  Rv = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function rs(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Vw(e, t, n) {
    var r = t.pendingProps;
    switch ((Df(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ze(t), null;
      case 1:
        return gt(t.type) && rl(), Ze(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Oi(),
          we(mt),
          we(rt),
          qf(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Qo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Yt !== null && (jd(Yt), (Yt = null)))),
          bd(e, t),
          Ze(t),
          null
        );
      case 5:
        $f(t);
        var i = Rr(Js.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Nv(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(O(166));
            return Ze(t), null;
          }
          if (((e = Rr(dn.current)), Qo(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[cn] = t), (r[Xs] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                be("cancel", r), be("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                be("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ms.length; i++) be(ms[i], r);
                break;
              case "source":
                be("error", r);
                break;
              case "img":
              case "image":
              case "link":
                be("error", r), be("load", r);
                break;
              case "details":
                be("toggle", r);
                break;
              case "input":
                Jh(r, s), be("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  be("invalid", r);
                break;
              case "textarea":
                ep(r, s), be("invalid", r);
            }
            Yu(n, s), (i = null);
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== !0 &&
                        Yo(r.textContent, a, e),
                      (i = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (s.suppressHydrationWarning !== !0 &&
                        Yo(r.textContent, a, e),
                      (i = ["children", "" + a]))
                  : Bs.hasOwnProperty(o) &&
                    a != null &&
                    o === "onScroll" &&
                    be("scroll", r);
              }
            switch (n) {
              case "input":
                zo(r), Zh(r, s, !0);
                break;
              case "textarea":
                zo(r), tp(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = nl);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ly(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = o.createElement(n, { is: r.is }))
                    : ((e = o.createElement(n)),
                      n === "select" &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[cn] = t),
              (e[Xs] = r),
              Mv(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = Qu(n, r)), n)) {
                case "dialog":
                  be("cancel", e), be("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  be("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < ms.length; i++) be(ms[i], e);
                  i = r;
                  break;
                case "source":
                  be("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  be("error", e), be("load", e), (i = r);
                  break;
                case "details":
                  be("toggle", e), (i = r);
                  break;
                case "input":
                  Jh(e, r), (i = Vu(e, r)), be("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = Pe({}, r, { value: void 0 })),
                    be("invalid", e);
                  break;
                case "textarea":
                  ep(e, r), (i = $u(e, r)), be("invalid", e);
                  break;
                default:
                  i = r;
              }
              Yu(n, i), (a = i);
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var l = a[s];
                  s === "style"
                    ? dy(e, l)
                    : s === "dangerouslySetInnerHTML"
                      ? ((l = l ? l.__html : void 0), l != null && cy(e, l))
                      : s === "children"
                        ? typeof l == "string"
                          ? (n !== "textarea" || l !== "") && Us(e, l)
                          : typeof l == "number" && Us(e, "" + l)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (Bs.hasOwnProperty(s)
                            ? l != null && s === "onScroll" && be("scroll", e)
                            : l != null && wf(e, s, l, o));
                }
              switch (n) {
                case "input":
                  zo(e), Zh(e, r, !1);
                  break;
                case "textarea":
                  zo(e), tp(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + lr(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? bi(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        bi(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = nl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) Rv(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
          if (((n = Rr(Js.current)), Rr(dn.current), Qo(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[cn] = t),
              (s = r.nodeValue !== n) && ((e = jt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Yo(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Yo(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[cn] = t),
              (t.stateNode = r);
        }
        return Ze(t), null;
      case 13:
        if (
          (we(Ce),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ee && At !== null && t.mode & 1 && !(t.flags & 128))
            Jy(), Pi(), (t.flags |= 98560), (s = !1);
          else if (((s = Qo(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(O(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(O(317));
              s[cn] = t;
            } else
              Pi(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ze(t), (s = !1);
          } else Yt !== null && (jd(Yt), (Yt = null)), (s = !0);
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || Ce.current & 1 ? Ue === 0 && (Ue = 3) : ih())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (
          Oi(),
          bd(e, t),
          e === null && Qs(t.stateNode.containerInfo),
          Ze(t),
          null
        );
      case 10:
        return Uf(t.type._context), Ze(t), null;
      case 17:
        return gt(t.type) && rl(), Ze(t), null;
      case 19:
        if ((we(Ce), (s = t.memoizedState), s === null)) return Ze(t), null;
        if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) rs(s, !1);
          else {
            if (Ue !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = ul(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      rs(s, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (o = s.alternate),
                      o === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = o.childLanes),
                          (s.lanes = o.lanes),
                          (s.child = o.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = o.memoizedProps),
                          (s.memoizedState = o.memoizedState),
                          (s.updateQueue = o.updateQueue),
                          (s.type = o.type),
                          (e = o.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return xe(Ce, (Ce.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Re() > Ni &&
              ((t.flags |= 128), (r = !0), rs(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ul(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                rs(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ee)
              )
                return Ze(t), null;
            } else
              2 * Re() - s.renderingStartTime > Ni &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), rs(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = s.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Re()),
            (t.sibling = null),
            (n = Ce.current),
            xe(Ce, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          rh(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? wt & 1073741824 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(O(156, t.tag));
  }
  function Hw(e, t) {
    switch ((Df(t), t.tag)) {
      case 1:
        return (
          gt(t.type) && rl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Oi(),
          we(mt),
          we(rt),
          qf(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return $f(t), null;
      case 13:
        if (
          (we(Ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(O(340));
          Pi();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return we(Ce), null;
      case 4:
        return Oi(), null;
      case 10:
        return Uf(t.type._context), null;
      case 22:
      case 23:
        return rh(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Go = !1,
    tt = !1,
    Ww = typeof WeakSet == "function" ? WeakSet : Set,
    D = null;
  function vi(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Te(e, t, r);
        }
      else n.current = null;
  }
  function _d(e, t, n) {
    try {
      n();
    } catch (r) {
      Te(e, t, r);
    }
  }
  var Wp = !1;
  function $w(e, t) {
    if (((id = Za), (e = zy()), Lf(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              a = -1,
              l = -1,
              c = 0,
              u = 0,
              f = e,
              h = null;
            t: for (;;) {
              for (
                var m;
                f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                  f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                  f.nodeType === 3 && (o += f.nodeValue.length),
                  (m = f.firstChild) !== null;

              )
                (h = f), (f = m);
              for (;;) {
                if (f === e) break t;
                if (
                  (h === n && ++c === i && (a = o),
                  h === s && ++u === r && (l = o),
                  (m = f.nextSibling) !== null)
                )
                  break;
                (f = h), (h = f.parentNode);
              }
              f = m;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      sd = { focusedElem: e, selectionRange: n }, Za = !1, D = t;
      D !== null;

    )
      if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (D = e);
      else
        for (; D !== null; ) {
          t = D;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var v = g.memoizedProps,
                      b = g.memoizedState,
                      y = t.stateNode,
                      p = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? v : $t(t.type, v),
                        b,
                      );
                    y.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var x = t.stateNode.containerInfo;
                  x.nodeType === 1
                    ? (x.textContent = "")
                    : x.nodeType === 9 &&
                      x.documentElement &&
                      x.removeChild(x.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(O(163));
              }
          } catch (_) {
            Te(t, t.return, _);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (D = e);
            break;
          }
          D = t.return;
        }
    return (g = Wp), (Wp = !1), g;
  }
  function js(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          (i.destroy = void 0), s !== void 0 && _d(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ql(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function wd(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Lv(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Lv(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[cn],
          delete t[Xs],
          delete t[ld],
          delete t[Cw],
          delete t[jw])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Iv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function $p(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Iv(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = nl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Sd(e, t, n), e = e.sibling; e !== null; )
        Sd(e, t, n), (e = e.sibling);
  }
  function Ad(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ad(e, t, n), e = e.sibling; e !== null; )
        Ad(e, t, n), (e = e.sibling);
  }
  var Ke = null,
    qt = !1;
  function In(e, t, n) {
    for (n = n.child; n !== null; ) Dv(e, t, n), (n = n.sibling);
  }
  function Dv(e, t, n) {
    if (un && typeof un.onCommitFiberUnmount == "function")
      try {
        un.onCommitFiberUnmount(Bl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        tt || vi(n, t);
      case 6:
        var r = Ke,
          i = qt;
        (Ke = null),
          In(e, t, n),
          (Ke = r),
          (qt = i),
          Ke !== null &&
            (qt
              ? ((e = Ke),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ke.removeChild(n.stateNode));
        break;
      case 18:
        Ke !== null &&
          (qt
            ? ((e = Ke),
              (n = n.stateNode),
              e.nodeType === 8
                ? nu(e.parentNode, n)
                : e.nodeType === 1 && nu(e, n),
              $s(e))
            : nu(Ke, n.stateNode));
        break;
      case 4:
        (r = Ke),
          (i = qt),
          (Ke = n.stateNode.containerInfo),
          (qt = !0),
          In(e, t, n),
          (Ke = r),
          (qt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !tt &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var s = i,
              o = s.destroy;
            (s = s.tag),
              o !== void 0 && (s & 2 || s & 4) && _d(n, t, o),
              (i = i.next);
          } while (i !== r);
        }
        In(e, t, n);
        break;
      case 1:
        if (
          !tt &&
          (vi(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            Te(n, t, a);
          }
        In(e, t, n);
        break;
      case 21:
        In(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((tt = (r = tt) || n.memoizedState !== null), In(e, t, n), (tt = r))
          : In(e, t, n);
        break;
      default:
        In(e, t, n);
    }
  }
  function qp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ww()),
        t.forEach(function (r) {
          var i = eS.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function Ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = e,
            o = t,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (Ke = a.stateNode), (qt = !1);
                break e;
              case 3:
                (Ke = a.stateNode.containerInfo), (qt = !0);
                break e;
              case 4:
                (Ke = a.stateNode.containerInfo), (qt = !0);
                break e;
            }
            a = a.return;
          }
          if (Ke === null) throw Error(O(160));
          Dv(s, o, i), (Ke = null), (qt = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (c) {
          Te(i, t, c);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Fv(t, e), (t = t.sibling);
  }
  function Fv(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ht(t, e), sn(e), r & 4)) {
          try {
            js(3, e, e.return), Ql(3, e);
          } catch (v) {
            Te(e, e.return, v);
          }
          try {
            js(5, e, e.return);
          } catch (v) {
            Te(e, e.return, v);
          }
        }
        break;
      case 1:
        Ht(t, e), sn(e), r & 512 && n !== null && vi(n, n.return);
        break;
      case 5:
        if (
          (Ht(t, e),
          sn(e),
          r & 512 && n !== null && vi(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Us(i, "");
          } catch (v) {
            Te(e, e.return, v);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var s = e.memoizedProps,
            o = n !== null ? n.memoizedProps : s,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              a === "input" && s.type === "radio" && s.name != null && oy(i, s),
                Qu(a, o);
              var c = Qu(a, s);
              for (o = 0; o < l.length; o += 2) {
                var u = l[o],
                  f = l[o + 1];
                u === "style"
                  ? dy(i, f)
                  : u === "dangerouslySetInnerHTML"
                    ? cy(i, f)
                    : u === "children"
                      ? Us(i, f)
                      : wf(i, u, f, c);
              }
              switch (a) {
                case "input":
                  Hu(i, s);
                  break;
                case "textarea":
                  ay(i, s);
                  break;
                case "select":
                  var h = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var m = s.value;
                  m != null
                    ? bi(i, !!s.multiple, m, !1)
                    : h !== !!s.multiple &&
                      (s.defaultValue != null
                        ? bi(i, !!s.multiple, s.defaultValue, !0)
                        : bi(i, !!s.multiple, s.multiple ? [] : "", !1));
              }
              i[Xs] = s;
            } catch (v) {
              Te(e, e.return, v);
            }
        }
        break;
      case 6:
        if ((Ht(t, e), sn(e), r & 4)) {
          if (e.stateNode === null) throw Error(O(162));
          (i = e.stateNode), (s = e.memoizedProps);
          try {
            i.nodeValue = s;
          } catch (v) {
            Te(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          (Ht(t, e), sn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            $s(t.containerInfo);
          } catch (v) {
            Te(e, e.return, v);
          }
        break;
      case 4:
        Ht(t, e), sn(e);
        break;
      case 13:
        Ht(t, e),
          sn(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (th = Re())),
          r & 4 && qp(e);
        break;
      case 22:
        if (
          ((u = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((tt = (c = tt) || u), Ht(t, e), (tt = c)) : Ht(t, e),
          sn(e),
          r & 8192)
        ) {
          if (
            ((c = e.memoizedState !== null),
            (e.stateNode.isHidden = c) && !u && e.mode & 1)
          )
            for (D = e, u = e.child; u !== null; ) {
              for (f = D = u; D !== null; ) {
                switch (((h = D), (m = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    js(4, h, h.return);
                    break;
                  case 1:
                    vi(h, h.return);
                    var g = h.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (v) {
                        Te(r, n, v);
                      }
                    }
                    break;
                  case 5:
                    vi(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      Qp(f);
                      continue;
                    }
                }
                m !== null ? ((m.return = h), (D = m)) : Qp(f);
              }
              u = u.sibling;
            }
          e: for (u = null, f = e; ; ) {
            if (f.tag === 5) {
              if (u === null) {
                u = f;
                try {
                  (i = f.stateNode),
                    c
                      ? ((s = i.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((a = f.stateNode),
                        (l = f.memoizedProps.style),
                        (o =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = uy("display", o)));
                } catch (v) {
                  Te(e, e.return, v);
                }
              }
            } else if (f.tag === 6) {
              if (u === null)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (v) {
                  Te(e, e.return, v);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              u === f && (u = null), (f = f.return);
            }
            u === f && (u = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        Ht(t, e), sn(e), r & 4 && qp(e);
        break;
      case 21:
        break;
      default:
        Ht(t, e), sn(e);
    }
  }
  function sn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Iv(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(O(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Us(i, ""), (r.flags &= -33));
            var s = $p(e);
            Ad(e, s, i);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = $p(e);
            Sd(e, a, o);
            break;
          default:
            throw Error(O(161));
        }
      } catch (l) {
        Te(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function qw(e, t, n) {
    (D = e), zv(e);
  }
  function zv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
      var i = D,
        s = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || Go;
        if (!o) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || tt;
          a = Go;
          var c = tt;
          if (((Go = o), (tt = l) && !c))
            for (D = i; D !== null; )
              (o = D),
                (l = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Kp(i)
                  : l !== null
                    ? ((l.return = o), (D = l))
                    : Kp(i);
          for (; s !== null; ) (D = s), zv(s), (s = s.sibling);
          (D = i), (Go = a), (tt = c);
        }
        Yp(e);
      } else
        i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (D = s)) : Yp(e);
    }
  }
  function Yp(e) {
    for (; D !== null; ) {
      var t = D;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                tt || Ql(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !tt)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : $t(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && Op(t, s, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Op(t, o, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var c = t.alternate;
                  if (c !== null) {
                    var u = c.memoizedState;
                    if (u !== null) {
                      var f = u.dehydrated;
                      f !== null && $s(f);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(O(163));
            }
          tt || (t.flags & 512 && wd(t));
        } catch (h) {
          Te(t, t.return, h);
        }
      }
      if (t === e) {
        D = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (D = n);
        break;
      }
      D = t.return;
    }
  }
  function Qp(e) {
    for (; D !== null; ) {
      var t = D;
      if (t === e) {
        D = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (D = n);
        break;
      }
      D = t.return;
    }
  }
  function Kp(e) {
    for (; D !== null; ) {
      var t = D;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ql(4, t);
            } catch (l) {
              Te(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                Te(t, i, l);
              }
            }
            var s = t.return;
            try {
              wd(t);
            } catch (l) {
              Te(t, s, l);
            }
            break;
          case 5:
            var o = t.return;
            try {
              wd(t);
            } catch (l) {
              Te(t, o, l);
            }
        }
      } catch (l) {
        Te(t, t.return, l);
      }
      if (t === e) {
        D = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (D = a);
        break;
      }
      D = t.return;
    }
  }
  var Yw = Math.ceil,
    hl = Nn.ReactCurrentDispatcher,
    Zf = Nn.ReactCurrentOwner,
    zt = Nn.ReactCurrentBatchConfig,
    ie = 0,
    Ye = null,
    Fe = null,
    Xe = 0,
    wt = 0,
    xi = pr(0),
    Ue = 0,
    no = null,
    qr = 0,
    Kl = 0,
    eh = 0,
    Ps = null,
    ft = null,
    th = 0,
    Ni = 1 / 0,
    xn = null,
    pl = !1,
    Ed = null,
    rr = null,
    Jo = !1,
    $n = null,
    ml = 0,
    Ts = 0,
    kd = null,
    Na = -1,
    Ra = 0;
  function at() {
    return ie & 6 ? Re() : Na !== -1 ? Na : (Na = Re());
  }
  function ir(e) {
    return e.mode & 1
      ? ie & 2 && Xe !== 0
        ? Xe & -Xe
        : Tw.transition !== null
          ? (Ra === 0 && (Ra = Sy()), Ra)
          : ((e = fe),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ty(e.type))),
            e)
      : 1;
  }
  function Gt(e, t, n, r) {
    if (50 < Ts) throw ((Ts = 0), (kd = null), Error(O(185)));
    Ao(e, n, r),
      (!(ie & 2) || e !== Ye) &&
        (e === Ye && (!(ie & 2) && (Kl |= n), Ue === 4 && Hn(e, Xe)),
        yt(e, r),
        n === 1 &&
          ie === 0 &&
          !(t.mode & 1) &&
          ((Ni = Re() + 500), $l && mr()));
  }
  function yt(e, t) {
    var n = e.callbackNode;
    T_(e, t);
    var r = Ja(e, e === Ye ? Xe : 0);
    if (r === 0)
      n !== null && ip(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ip(n), t === 1))
        e.tag === 0 ? Pw(Xp.bind(null, e)) : Ky(Xp.bind(null, e)),
          Ew(function () {
            !(ie & 6) && mr();
          }),
          (n = null);
      else {
        switch (Ay(r)) {
          case 1:
            n = Cf;
            break;
          case 4:
            n = _y;
            break;
          case 16:
            n = Ga;
            break;
          case 536870912:
            n = wy;
            break;
          default:
            n = Ga;
        }
        n = Yv(n, Bv.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Bv(e, t) {
    if (((Na = -1), (Ra = 0), ie & 6)) throw Error(O(327));
    var n = e.callbackNode;
    if (Ei() && e.callbackNode !== n) return null;
    var r = Ja(e, e === Ye ? Xe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
    else {
      t = r;
      var i = ie;
      ie |= 2;
      var s = Vv();
      (Ye !== e || Xe !== t) && ((xn = null), (Ni = Re() + 500), Ir(e, t));
      do
        try {
          Xw();
          break;
        } catch (a) {
          Uv(e, a);
        }
      while (!0);
      Bf(),
        (hl.current = s),
        (ie = i),
        Fe !== null ? (t = 0) : ((Ye = null), (Xe = 0), (t = Ue));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Zu(e)), i !== 0 && ((r = i), (t = Cd(e, i)))),
        t === 1)
      )
        throw ((n = no), Ir(e, 0), Hn(e, r), yt(e, Re()), n);
      if (t === 6) Hn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !Qw(i) &&
            ((t = gl(e, r)),
            t === 2 && ((s = Zu(e)), s !== 0 && ((r = s), (t = Cd(e, s)))),
            t === 1))
        )
          throw ((n = no), Ir(e, 0), Hn(e, r), yt(e, Re()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(O(345));
          case 2:
            jr(e, ft, xn);
            break;
          case 3:
            if (
              (Hn(e, r),
              (r & 130023424) === r && ((t = th + 500 - Re()), 10 < t))
            ) {
              if (Ja(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                at(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = ad(jr.bind(null, e, ft, xn), t);
              break;
            }
            jr(e, ft, xn);
            break;
          case 4:
            if ((Hn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - Xt(r);
              (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
            }
            if (
              ((r = i),
              (r = Re() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Yw(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ad(jr.bind(null, e, ft, xn), r);
              break;
            }
            jr(e, ft, xn);
            break;
          case 5:
            jr(e, ft, xn);
            break;
          default:
            throw Error(O(329));
        }
      }
    }
    return yt(e, Re()), e.callbackNode === n ? Bv.bind(null, e) : null;
  }
  function Cd(e, t) {
    var n = Ps;
    return (
      e.current.memoizedState.isDehydrated && (Ir(e, t).flags |= 256),
      (e = gl(e, t)),
      e !== 2 && ((t = ft), (ft = n), t !== null && jd(t)),
      e
    );
  }
  function jd(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e);
  }
  function Qw(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot;
            i = i.value;
            try {
              if (!en(s(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Hn(e, t) {
    for (
      t &= ~eh,
        t &= ~Kl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Xt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Xp(e) {
    if (ie & 6) throw Error(O(327));
    Ei();
    var t = Ja(e, 0);
    if (!(t & 1)) return yt(e, Re()), null;
    var n = gl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Zu(e);
      r !== 0 && ((t = r), (n = Cd(e, r)));
    }
    if (n === 1) throw ((n = no), Ir(e, 0), Hn(e, t), yt(e, Re()), n);
    if (n === 6) throw Error(O(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      jr(e, ft, xn),
      yt(e, Re()),
      null
    );
  }
  function nh(e, t) {
    var n = ie;
    ie |= 1;
    try {
      return e(t);
    } finally {
      (ie = n), ie === 0 && ((Ni = Re() + 500), $l && mr());
    }
  }
  function Yr(e) {
    $n !== null && $n.tag === 0 && !(ie & 6) && Ei();
    var t = ie;
    ie |= 1;
    var n = zt.transition,
      r = fe;
    try {
      if (((zt.transition = null), (fe = 1), e)) return e();
    } finally {
      (fe = r), (zt.transition = n), (ie = t), !(ie & 6) && mr();
    }
  }
  function rh() {
    (wt = xi.current), we(xi);
  }
  function Ir(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Aw(n)), Fe !== null))
      for (n = Fe.return; n !== null; ) {
        var r = n;
        switch ((Df(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && rl();
            break;
          case 3:
            Oi(), we(mt), we(rt), qf();
            break;
          case 5:
            $f(r);
            break;
          case 4:
            Oi();
            break;
          case 13:
            we(Ce);
            break;
          case 19:
            we(Ce);
            break;
          case 10:
            Uf(r.type._context);
            break;
          case 22:
          case 23:
            rh();
        }
        n = n.return;
      }
    if (
      ((Ye = e),
      (Fe = e = sr(e.current, null)),
      (Xe = wt = t),
      (Ue = 0),
      (no = null),
      (eh = Kl = qr = 0),
      (ft = Ps = null),
      Nr !== null)
    ) {
      for (t = 0; t < Nr.length; t++)
        if (((n = Nr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            s = n.pending;
          if (s !== null) {
            var o = s.next;
            (s.next = i), (r.next = o);
          }
          n.pending = r;
        }
      Nr = null;
    }
    return e;
  }
  function Uv(e, t) {
    do {
      var n = Fe;
      try {
        if ((Bf(), (Ta.current = fl), dl)) {
          for (var r = je.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          dl = !1;
        }
        if (
          (($r = 0),
          ($e = Be = je = null),
          (Cs = !1),
          (Zs = 0),
          (Zf.current = null),
          n === null || n.return === null)
        ) {
          (Ue = 1), (no = t), (Fe = null);
          break;
        }
        e: {
          var s = e,
            o = n.return,
            a = n,
            l = t;
          if (
            ((t = Xe),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var c = l,
              u = a,
              f = u.tag;
            if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var h = u.alternate;
              h
                ? ((u.updateQueue = h.updateQueue),
                  (u.memoizedState = h.memoizedState),
                  (u.lanes = h.lanes))
                : ((u.updateQueue = null), (u.memoizedState = null));
            }
            var m = Dp(o);
            if (m !== null) {
              (m.flags &= -257),
                Fp(m, o, a, s, t),
                m.mode & 1 && Ip(s, c, t),
                (t = m),
                (l = c);
              var g = t.updateQueue;
              if (g === null) {
                var v = new Set();
                v.add(l), (t.updateQueue = v);
              } else g.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                Ip(s, c, t), ih();
                break e;
              }
              l = Error(O(426));
            }
          } else if (Ee && a.mode & 1) {
            var b = Dp(o);
            if (b !== null) {
              !(b.flags & 65536) && (b.flags |= 256),
                Fp(b, o, a, s, t),
                Ff(Mi(l, a));
              break e;
            }
          }
          (s = l = Mi(l, a)),
            Ue !== 4 && (Ue = 2),
            Ps === null ? (Ps = [s]) : Ps.push(s),
            (s = o);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var y = Av(s, l, t);
                Tp(s, y);
                break e;
              case 1:
                a = l;
                var p = s.type,
                  x = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (x !== null &&
                      typeof x.componentDidCatch == "function" &&
                      (rr === null || !rr.has(x))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var _ = Ev(s, a, t);
                  Tp(s, _);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Wv(n);
      } catch (S) {
        (t = S), Fe === n && n !== null && (Fe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vv() {
    var e = hl.current;
    return (hl.current = fl), e === null ? fl : e;
  }
  function ih() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
      Ye === null || (!(qr & 268435455) && !(Kl & 268435455)) || Hn(Ye, Xe);
  }
  function gl(e, t) {
    var n = ie;
    ie |= 2;
    var r = Vv();
    (Ye !== e || Xe !== t) && ((xn = null), Ir(e, t));
    do
      try {
        Kw();
        break;
      } catch (i) {
        Uv(e, i);
      }
    while (!0);
    if ((Bf(), (ie = n), (hl.current = r), Fe !== null)) throw Error(O(261));
    return (Ye = null), (Xe = 0), Ue;
  }
  function Kw() {
    for (; Fe !== null; ) Hv(Fe);
  }
  function Xw() {
    for (; Fe !== null && !__(); ) Hv(Fe);
  }
  function Hv(e) {
    var t = qv(e.alternate, e, wt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Wv(e) : (Fe = t),
      (Zf.current = null);
  }
  function Wv(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Hw(n, t)), n !== null)) {
          (n.flags &= 32767), (Fe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ue = 6), (Fe = null);
          return;
        }
      } else if (((n = Vw(n, t, wt)), n !== null)) {
        Fe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function jr(e, t, n) {
    var r = fe,
      i = zt.transition;
    try {
      (zt.transition = null), (fe = 1), Gw(e, t, n, r);
    } finally {
      (zt.transition = i), (fe = r);
    }
    return null;
  }
  function Gw(e, t, n, r) {
    do Ei();
    while ($n !== null);
    if (ie & 6) throw Error(O(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(O(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (O_(e, s),
      e === Ye && ((Fe = Ye = null), (Xe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Jo ||
        ((Jo = !0),
        Yv(Ga, function () {
          return Ei(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = zt.transition), (zt.transition = null);
      var o = fe;
      fe = 1;
      var a = ie;
      (ie |= 4),
        (Zf.current = null),
        $w(e, n),
        Fv(n, e),
        yw(sd),
        (Za = !!id),
        (sd = id = null),
        (e.current = n),
        qw(n),
        w_(),
        (ie = a),
        (fe = o),
        (zt.transition = s);
    } else e.current = n;
    if (
      (Jo && ((Jo = !1), ($n = e), (ml = i)),
      (s = e.pendingLanes),
      s === 0 && (rr = null),
      E_(n.stateNode),
      yt(e, Re()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (pl) throw ((pl = !1), (e = Ed), (Ed = null), e);
    return (
      ml & 1 && e.tag !== 0 && Ei(),
      (s = e.pendingLanes),
      s & 1 ? (e === kd ? Ts++ : ((Ts = 0), (kd = e))) : (Ts = 0),
      mr(),
      null
    );
  }
  function Ei() {
    if ($n !== null) {
      var e = Ay(ml),
        t = zt.transition,
        n = fe;
      try {
        if (((zt.transition = null), (fe = 16 > e ? 16 : e), $n === null))
          var r = !1;
        else {
          if (((e = $n), ($n = null), (ml = 0), ie & 6)) throw Error(O(331));
          var i = ie;
          for (ie |= 4, D = e.current; D !== null; ) {
            var s = D,
              o = s.child;
            if (D.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var c = a[l];
                  for (D = c; D !== null; ) {
                    var u = D;
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        js(8, u, s);
                    }
                    var f = u.child;
                    if (f !== null) (f.return = u), (D = f);
                    else
                      for (; D !== null; ) {
                        u = D;
                        var h = u.sibling,
                          m = u.return;
                        if ((Lv(u), u === c)) {
                          D = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = m), (D = h);
                          break;
                        }
                        D = m;
                      }
                  }
                }
                var g = s.alternate;
                if (g !== null) {
                  var v = g.child;
                  if (v !== null) {
                    g.child = null;
                    do {
                      var b = v.sibling;
                      (v.sibling = null), (v = b);
                    } while (v !== null);
                  }
                }
                D = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (D = o);
            else
              e: for (; D !== null; ) {
                if (((s = D), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      js(9, s, s.return);
                  }
                var y = s.sibling;
                if (y !== null) {
                  (y.return = s.return), (D = y);
                  break e;
                }
                D = s.return;
              }
          }
          var p = e.current;
          for (D = p; D !== null; ) {
            o = D;
            var x = o.child;
            if (o.subtreeFlags & 2064 && x !== null) (x.return = o), (D = x);
            else
              e: for (o = p; D !== null; ) {
                if (((a = D), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ql(9, a);
                    }
                  } catch (S) {
                    Te(a, a.return, S);
                  }
                if (a === o) {
                  D = null;
                  break e;
                }
                var _ = a.sibling;
                if (_ !== null) {
                  (_.return = a.return), (D = _);
                  break e;
                }
                D = a.return;
              }
          }
          if (
            ((ie = i),
            mr(),
            un && typeof un.onPostCommitFiberRoot == "function")
          )
            try {
              un.onPostCommitFiberRoot(Bl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (fe = n), (zt.transition = t);
      }
    }
    return !1;
  }
  function Gp(e, t, n) {
    (t = Mi(n, t)),
      (t = Av(e, t, 1)),
      (e = nr(e, t, 1)),
      (t = at()),
      e !== null && (Ao(e, 1, t), yt(e, t));
  }
  function Te(e, t, n) {
    if (e.tag === 3) Gp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gp(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (rr === null || !rr.has(r)))
          ) {
            (e = Mi(n, e)),
              (e = Ev(t, e, 1)),
              (t = nr(t, e, 1)),
              (e = at()),
              t !== null && (Ao(t, 1, e), yt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = at()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ye === e &&
        (Xe & n) === n &&
        (Ue === 4 || (Ue === 3 && (Xe & 130023424) === Xe && 500 > Re() - th)
          ? Ir(e, 0)
          : (eh |= n)),
      yt(e, t);
  }
  function $v(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Vo), (Vo <<= 1), !(Vo & 130023424) && (Vo = 4194304))
        : (t = 1));
    var n = at();
    (e = On(e, t)), e !== null && (Ao(e, t, n), yt(e, n));
  }
  function Zw(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), $v(e, n);
  }
  function eS(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(O(314));
    }
    r !== null && r.delete(t), $v(e, n);
  }
  var qv;
  qv = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || mt.current) pt = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (pt = !1), Uw(e, t, n);
        pt = !!(e.flags & 131072);
      }
    else (pt = !1), Ee && t.flags & 1048576 && Xy(t, ol, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Ma(e, t), (e = t.pendingProps);
        var i = ji(t, rt.current);
        Ai(t, n), (i = Qf(null, t, r, e, i, n));
        var s = Kf();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              gt(r) ? ((s = !0), il(t)) : (s = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Hf(t),
              (i.updater = Yl),
              (t.stateNode = i),
              (i._reactInternals = t),
              pd(t, r, e, n),
              (t = yd(null, t, r, !0, s, n)))
            : ((t.tag = 0), Ee && s && If(t), st(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ma(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = nS(r)),
            (e = $t(r, e)),
            i)
          ) {
            case 0:
              t = gd(null, t, r, e, n);
              break e;
            case 1:
              t = Up(null, t, r, e, n);
              break e;
            case 11:
              t = zp(null, t, r, e, n);
              break e;
            case 14:
              t = Bp(null, t, r, $t(r.type, e), n);
              break e;
          }
          throw Error(O(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : $t(r, i)),
          gd(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : $t(r, i)),
          Up(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Pv(t), e === null)) throw Error(O(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (i = s.element),
            nv(e, t),
            cl(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              (i = Mi(Error(O(423)), t)), (t = Vp(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Mi(Error(O(424)), t)), (t = Vp(e, t, r, n, i));
              break e;
            } else
              for (
                At = tr(t.stateNode.containerInfo.firstChild),
                  jt = t,
                  Ee = !0,
                  Yt = null,
                  n = ev(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Pi(), r === i)) {
              t = Mn(e, t, n);
              break e;
            }
            st(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          rv(t),
          e === null && dd(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = i.children),
          od(r, i) ? (o = null) : s !== null && od(r, s) && (t.flags |= 32),
          jv(e, t),
          st(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && dd(t), null;
      case 13:
        return Tv(e, t, n);
      case 4:
        return (
          Wf(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ti(t, null, r, n)) : st(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : $t(r, i)),
          zp(e, t, r, i, n)
        );
      case 7:
        return st(e, t, t.pendingProps, n), t.child;
      case 8:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return st(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (s = t.memoizedProps),
            (o = i.value),
            xe(al, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (en(s.value, o)) {
              if (s.children === i.children && !mt.current) {
                t = Mn(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var a = s.dependencies;
                if (a !== null) {
                  o = s.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (s.tag === 1) {
                        (l = jn(-1, n & -n)), (l.tag = 2);
                        var c = s.updateQueue;
                        if (c !== null) {
                          c = c.shared;
                          var u = c.pending;
                          u === null
                            ? (l.next = l)
                            : ((l.next = u.next), (u.next = l)),
                            (c.pending = l);
                        }
                      }
                      (s.lanes |= n),
                        (l = s.alternate),
                        l !== null && (l.lanes |= n),
                        fd(s.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(O(341));
                  (o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    fd(o, n, t),
                    (o = s.sibling);
                } else o = s.child;
                if (o !== null) o.return = s;
                else
                  for (o = s; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((s = o.sibling), s !== null)) {
                      (s.return = o.return), (o = s);
                      break;
                    }
                    o = o.return;
                  }
                s = o;
              }
          st(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Ai(t, n),
          (i = Ut(i)),
          (r = r(i)),
          (t.flags |= 1),
          st(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = $t(r, t.pendingProps)),
          (i = $t(r.type, i)),
          Bp(e, t, r, i, n)
        );
      case 15:
        return kv(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : $t(r, i)),
          Ma(e, t),
          (t.tag = 1),
          gt(r) ? ((e = !0), il(t)) : (e = !1),
          Ai(t, n),
          Sv(t, r, i),
          pd(t, r, i, n),
          yd(null, t, r, !0, e, n)
        );
      case 19:
        return Ov(e, t, n);
      case 22:
        return Cv(e, t, n);
    }
    throw Error(O(156, t.tag));
  };
  function Yv(e, t) {
    return by(e, t);
  }
  function tS(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ft(e, t, n, r) {
    return new tS(e, t, n, r);
  }
  function sh(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function nS(e) {
    if (typeof e == "function") return sh(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Af)) return 11;
      if (e === Ef) return 14;
    }
    return 2;
  }
  function sr(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Ft(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function La(e, t, n, r, i, s) {
    var o = 2;
    if (((r = e), typeof e == "function")) sh(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case ci:
          return Dr(n.children, i, s, t);
        case Sf:
          (o = 8), (i |= 8);
          break;
        case Fu:
          return (
            (e = Ft(12, n, t, i | 2)), (e.elementType = Fu), (e.lanes = s), e
          );
        case zu:
          return (e = Ft(13, n, t, i)), (e.elementType = zu), (e.lanes = s), e;
        case Bu:
          return (e = Ft(19, n, t, i)), (e.elementType = Bu), (e.lanes = s), e;
        case ry:
          return Xl(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ty:
                o = 10;
                break e;
              case ny:
                o = 9;
                break e;
              case Af:
                o = 11;
                break e;
              case Ef:
                o = 14;
                break e;
              case Bn:
                (o = 16), (r = null);
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Ft(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
    );
  }
  function Dr(e, t, n, r) {
    return (e = Ft(7, e, r, t)), (e.lanes = n), e;
  }
  function Xl(e, t, n, r) {
    return (
      (e = Ft(22, e, r, t)),
      (e.elementType = ry),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function uu(e, t, n) {
    return (e = Ft(6, e, null, t)), (e.lanes = n), e;
  }
  function du(e, t, n) {
    return (
      (t = Ft(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function rS(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $c(0)),
      (this.expirationTimes = $c(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $c(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function oh(e, t, n, r, i, s, o, a, l) {
    return (
      (e = new rS(e, t, n, a, l)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = Ft(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Hf(s),
      e
    );
  }
  function iS(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: li,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Qv(e) {
    if (!e) return cr;
    e = e._reactInternals;
    e: {
      if (Zr(e) !== e || e.tag !== 1) throw Error(O(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(O(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (gt(n)) return Qy(e, n, t);
    }
    return t;
  }
  function Kv(e, t, n, r, i, s, o, a, l) {
    return (
      (e = oh(n, r, !0, e, i, s, o, a, l)),
      (e.context = Qv(null)),
      (n = e.current),
      (r = at()),
      (i = ir(n)),
      (s = jn(r, i)),
      (s.callback = t ?? null),
      nr(n, s, i),
      (e.current.lanes = i),
      Ao(e, i, r),
      yt(e, r),
      e
    );
  }
  function Gl(e, t, n, r) {
    var i = t.current,
      s = at(),
      o = ir(i);
    return (
      (n = Qv(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = jn(s, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = nr(i, t, o)),
      e !== null && (Gt(e, i, o, s), Pa(e, i, o)),
      o
    );
  }
  function yl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Jp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ah(e, t) {
    Jp(e, t), (e = e.alternate) && Jp(e, t);
  }
  function sS() {
    return null;
  }
  var Xv =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function lh(e) {
    this._internalRoot = e;
  }
  Jl.prototype.render = lh.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    Gl(e, t, null, null);
  };
  Jl.prototype.unmount = lh.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Yr(function () {
        Gl(null, e, null, null);
      }),
        (t[Tn] = null);
    }
  };
  function Jl(e) {
    this._internalRoot = e;
  }
  Jl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Cy();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++);
      Vn.splice(n, 0, e), n === 0 && Py(e);
    }
  };
  function ch(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Zp() {}
  function oS(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var c = yl(o);
          s.call(c);
        };
      }
      var o = Kv(t, r, e, 0, null, !1, !1, "", Zp);
      return (
        (e._reactRootContainer = o),
        (e[Tn] = o.current),
        Qs(e.nodeType === 8 ? e.parentNode : e),
        Yr(),
        o
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var c = yl(l);
        a.call(c);
      };
    }
    var l = oh(e, 0, !1, null, null, !1, !1, "", Zp);
    return (
      (e._reactRootContainer = l),
      (e[Tn] = l.current),
      Qs(e.nodeType === 8 ? e.parentNode : e),
      Yr(function () {
        Gl(t, l, n, r);
      }),
      l
    );
  }
  function ec(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof i == "function") {
        var a = i;
        i = function () {
          var l = yl(o);
          a.call(l);
        };
      }
      Gl(t, o, e, i);
    } else o = oS(n, t, e, i, r);
    return yl(o);
  }
  Ey = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = ps(t.pendingLanes);
          n !== 0 &&
            (jf(t, n | 1), yt(t, Re()), !(ie & 6) && ((Ni = Re() + 500), mr()));
        }
        break;
      case 13:
        Yr(function () {
          var r = On(e, 1);
          if (r !== null) {
            var i = at();
            Gt(r, e, 1, i);
          }
        }),
          ah(e, 1);
    }
  };
  Pf = function (e) {
    if (e.tag === 13) {
      var t = On(e, 134217728);
      if (t !== null) {
        var n = at();
        Gt(t, e, 134217728, n);
      }
      ah(e, 134217728);
    }
  };
  ky = function (e) {
    if (e.tag === 13) {
      var t = ir(e),
        n = On(e, t);
      if (n !== null) {
        var r = at();
        Gt(n, e, t, r);
      }
      ah(e, t);
    }
  };
  Cy = function () {
    return fe;
  };
  jy = function (e, t) {
    var n = fe;
    try {
      return (fe = e), t();
    } finally {
      fe = n;
    }
  };
  Xu = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Hu(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Wl(r);
              if (!i) throw Error(O(90));
              sy(r), Hu(r, i);
            }
          }
        }
        break;
      case "textarea":
        ay(e, n);
        break;
      case "select":
        (t = n.value), t != null && bi(e, !!n.multiple, t, !1);
    }
  };
  py = nh;
  my = Yr;
  var aS = { usingClientEntryPoint: !1, Events: [ko, hi, Wl, fy, hy, nh] },
    is = {
      findFiberByHostInstance: Mr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    lS = {
      bundleType: is.bundleType,
      version: is.version,
      rendererPackageName: is.rendererPackageName,
      rendererConfig: is.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Nn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = vy(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: is.findFiberByHostInstance || sS,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber)
      try {
        (Bl = Zo.inject(lS)), (un = Zo);
      } catch {}
  }
  Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aS;
  Tt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ch(t)) throw Error(O(200));
    return iS(e, t, null, n);
  };
  Tt.createRoot = function (e, t) {
    if (!ch(e)) throw Error(O(299));
    var n = !1,
      r = "",
      i = Xv;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = oh(e, 1, !1, null, null, n, !1, r, i)),
      (e[Tn] = t.current),
      Qs(e.nodeType === 8 ? e.parentNode : e),
      new lh(t)
    );
  };
  Tt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(O(188))
        : ((e = Object.keys(e).join(",")), Error(O(268, e)));
    return (e = vy(t)), (e = e === null ? null : e.stateNode), e;
  };
  Tt.flushSync = function (e) {
    return Yr(e);
  };
  Tt.hydrate = function (e, t, n) {
    if (!Zl(t)) throw Error(O(200));
    return ec(null, e, t, !0, n);
  };
  Tt.hydrateRoot = function (e, t, n) {
    if (!ch(e)) throw Error(O(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      s = "",
      o = Xv;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = Kv(t, null, e, 1, n ?? null, i, !1, s, o)),
      (e[Tn] = t.current),
      Qs(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i);
    return new Jl(t);
  };
  Tt.render = function (e, t, n) {
    if (!Zl(t)) throw Error(O(200));
    return ec(null, e, t, !1, n);
  };
  Tt.unmountComponentAtNode = function (e) {
    if (!Zl(e)) throw Error(O(40));
    return e._reactRootContainer
      ? (Yr(function () {
          ec(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Tn] = null);
          });
        }),
        !0)
      : !1;
  };
  Tt.unstable_batchedUpdates = nh;
  Tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Zl(n)) throw Error(O(200));
    if (e == null || e._reactInternals === void 0) throw Error(O(38));
    return ec(e, t, n, !1, r);
  };
  Tt.version = "18.3.1-next-f1338f8080-20240426";
  function Gv() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv);
      } catch (e) {
        console.error(e);
      }
  }
  Gv(), (G0.exports = Tt);
  var uh = G0.exports;
  const cS = Fl(uh),
    uS = z0({ __proto__: null, default: cS }, [uh]);
  var em = uh;
  (Iu.createRoot = em.createRoot), (Iu.hydrateRoot = em.hydrateRoot);
  /**
   * @remix-run/router v1.17.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function ro() {
    return (
      (ro = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      ro.apply(this, arguments)
    );
  }
  var qn;
  (function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(qn || (qn = {}));
  const tm = "popstate";
  function dS(e) {
    e === void 0 && (e = {});
    function t(r, i) {
      let { pathname: s, search: o, hash: a } = r.location;
      return Pd(
        "",
        { pathname: s, search: o, hash: a },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default",
      );
    }
    function n(r, i) {
      return typeof i == "string" ? i : vl(i);
    }
    return hS(t, n, null, e);
  }
  function Ne(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function Jv(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function fS() {
    return Math.random().toString(36).substr(2, 8);
  }
  function nm(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function Pd(e, t, n, r) {
    return (
      n === void 0 && (n = null),
      ro(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? Wi(t) : t,
        { state: n, key: (t && t.key) || r || fS() },
      )
    );
  }
  function vl(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
      r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
      t
    );
  }
  function Wi(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function hS(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: s = !1 } = r,
      o = i.history,
      a = qn.Pop,
      l = null,
      c = u();
    c == null && ((c = 0), o.replaceState(ro({}, o.state, { idx: c }), ""));
    function u() {
      return (o.state || { idx: null }).idx;
    }
    function f() {
      a = qn.Pop;
      let b = u(),
        y = b == null ? null : b - c;
      (c = b), l && l({ action: a, location: v.location, delta: y });
    }
    function h(b, y) {
      a = qn.Push;
      let p = Pd(v.location, b, y);
      c = u() + 1;
      let x = nm(p, c),
        _ = v.createHref(p);
      try {
        o.pushState(x, "", _);
      } catch (S) {
        if (S instanceof DOMException && S.name === "DataCloneError") throw S;
        i.location.assign(_);
      }
      s && l && l({ action: a, location: v.location, delta: 1 });
    }
    function m(b, y) {
      a = qn.Replace;
      let p = Pd(v.location, b, y);
      c = u();
      let x = nm(p, c),
        _ = v.createHref(p);
      o.replaceState(x, "", _),
        s && l && l({ action: a, location: v.location, delta: 0 });
    }
    function g(b) {
      let y =
          i.location.origin !== "null" ? i.location.origin : i.location.href,
        p = typeof b == "string" ? b : vl(b);
      return (
        (p = p.replace(/ $/, "%20")),
        Ne(
          y,
          "No window.location.(origin|href) available to create URL for href: " +
            p,
        ),
        new URL(p, y)
      );
    }
    let v = {
      get action() {
        return a;
      },
      get location() {
        return e(i, o);
      },
      listen(b) {
        if (l) throw new Error("A history only accepts one active listener");
        return (
          i.addEventListener(tm, f),
          (l = b),
          () => {
            i.removeEventListener(tm, f), (l = null);
          }
        );
      },
      createHref(b) {
        return t(i, b);
      },
      createURL: g,
      encodeLocation(b) {
        let y = g(b);
        return { pathname: y.pathname, search: y.search, hash: y.hash };
      },
      push: h,
      replace: m,
      go(b) {
        return o.go(b);
      },
    };
    return v;
  }
  var rm;
  (function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(rm || (rm = {}));
  function pS(e, t, n) {
    return n === void 0 && (n = "/"), mS(e, t, n, !1);
  }
  function mS(e, t, n, r) {
    let i = typeof t == "string" ? Wi(t) : t,
      s = Ri(i.pathname || "/", n);
    if (s == null) return null;
    let o = Zv(e);
    gS(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
      let c = CS(s);
      a = ES(o[l], c, r);
    }
    return a;
  }
  function Zv(e, t, n, r) {
    t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = "");
    let i = (s, o, a) => {
      let l = {
        relativePath: a === void 0 ? s.path || "" : a,
        caseSensitive: s.caseSensitive === !0,
        childrenIndex: o,
        route: s,
      };
      l.relativePath.startsWith("/") &&
        (Ne(
          l.relativePath.startsWith(r),
          'Absolute route path "' +
            l.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (l.relativePath = l.relativePath.slice(r.length)));
      let c = or([r, l.relativePath]),
        u = n.concat(l);
      s.children &&
        s.children.length > 0 &&
        (Ne(
          s.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + c + '".'),
        ),
        Zv(s.children, t, u, c)),
        !(s.path == null && !s.index) &&
          t.push({ path: c, score: SS(c, s.index), routesMeta: u });
    };
    return (
      e.forEach((s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
          i(s, o);
        else for (let l of e1(s.path)) i(s, o, l);
      }),
      t
    );
  }
  function e1(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
      i = n.endsWith("?"),
      s = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [s, ""] : [s];
    let o = e1(r.join("/")),
      a = [];
    return (
      a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
      i && a.push(...o),
      a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
  }
  function gS(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : AS(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex),
          ),
    );
  }
  const yS = /^:[\w-]+$/,
    vS = 3,
    xS = 2,
    bS = 1,
    _S = 10,
    wS = -2,
    im = (e) => e === "*";
  function SS(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(im) && (r += wS),
      t && (r += xS),
      n
        .filter((i) => !im(i))
        .reduce((i, s) => i + (yS.test(s) ? vS : s === "" ? bS : _S), r)
    );
  }
  function AS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function ES(e, t, n) {
    let { routesMeta: r } = e,
      i = {},
      s = "/",
      o = [];
    for (let a = 0; a < r.length; ++a) {
      let l = r[a],
        c = a === r.length - 1,
        u = s === "/" ? t : t.slice(s.length) || "/",
        f = xl(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
          u,
        ),
        h = l.route;
      if (
        (!f &&
          c &&
          n &&
          !r[r.length - 1].route.index &&
          (f = xl(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
            u,
          )),
        !f)
      )
        return null;
      Object.assign(i, f.params),
        o.push({
          params: i,
          pathname: or([s, f.pathname]),
          pathnameBase: OS(or([s, f.pathnameBase])),
          route: h,
        }),
        f.pathnameBase !== "/" && (s = or([s, f.pathnameBase]));
    }
    return o;
  }
  function xl(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = kS(e.path, e.caseSensitive, e.end),
      i = t.match(n);
    if (!i) return null;
    let s = i[0],
      o = s.replace(/(.)\/+$/, "$1"),
      a = i.slice(1);
    return {
      params: r.reduce((c, u, f) => {
        let { paramName: h, isOptional: m } = u;
        if (h === "*") {
          let v = a[f] || "";
          o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const g = a[f];
        return (
          m && !g ? (c[h] = void 0) : (c[h] = (g || "").replace(/%2F/g, "/")), c
        );
      }, {}),
      pathname: s,
      pathnameBase: o,
      pattern: e,
    };
  }
  function kS(e, t, n) {
    t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      Jv(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
      );
    let r = [],
      i =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (o, a, l) => (
              r.push({ paramName: a, isOptional: l != null }),
              l ? "/?([^\\/]+)?" : "/([^\\/]+)"
            ),
          );
    return (
      e.endsWith("*")
        ? (r.push({ paramName: "*" }),
          (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : n
          ? (i += "\\/*$")
          : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
      [new RegExp(i, t ? void 0 : "i"), r]
    );
  }
  function CS(e) {
    try {
      return e
        .split("/")
        .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        Jv(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ")."),
        ),
        e
      );
    }
  }
  function Ri(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  function jS(e, t) {
    t === void 0 && (t = "/");
    let {
      pathname: n,
      search: r = "",
      hash: i = "",
    } = typeof e == "string" ? Wi(e) : e;
    return {
      pathname: n ? (n.startsWith("/") ? n : PS(n, t)) : t,
      search: MS(r),
      hash: NS(i),
    };
  }
  function PS(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((i) => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
      }),
      n.length > 1 ? n.join("/") : "/"
    );
  }
  function fu(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
        t +
        "` field [" +
        JSON.stringify(r) +
        "].  Please separate it out to the ") +
      ("`to." +
        n +
        "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function TS(e) {
    return e.filter(
      (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
    );
  }
  function t1(e, t) {
    let n = TS(e);
    return t
      ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
      : n.map((r) => r.pathnameBase);
  }
  function n1(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string"
      ? (i = Wi(e))
      : ((i = ro({}, e)),
        Ne(
          !i.pathname || !i.pathname.includes("?"),
          fu("?", "pathname", "search", i),
        ),
        Ne(
          !i.pathname || !i.pathname.includes("#"),
          fu("#", "pathname", "hash", i),
        ),
        Ne(!i.search || !i.search.includes("#"), fu("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "",
      o = s ? "/" : i.pathname,
      a;
    if (o == null) a = n;
    else {
      let f = t.length - 1;
      if (!r && o.startsWith("..")) {
        let h = o.split("/");
        for (; h[0] === ".."; ) h.shift(), (f -= 1);
        i.pathname = h.join("/");
      }
      a = f >= 0 ? t[f] : "/";
    }
    let l = jS(i, a),
      c = o && o !== "/" && o.endsWith("/"),
      u = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
  }
  const or = (e) => e.join("/").replace(/\/\/+/g, "/"),
    OS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    MS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    NS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function RS(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  const r1 = ["post", "put", "patch", "delete"];
  new Set(r1);
  const LS = ["get", ...r1];
  new Set(LS);
  /**
   * React Router v6.24.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function io() {
    return (
      (io = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      io.apply(this, arguments)
    );
  }
  const tc = w.createContext(null),
    i1 = w.createContext(null),
    gr = w.createContext(null),
    nc = w.createContext(null),
    yr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    s1 = w.createContext(null);
  function IS(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    jo() || Ne(!1);
    let { basename: r, navigator: i } = w.useContext(gr),
      { hash: s, pathname: o, search: a } = ic(e, { relative: n }),
      l = o;
    return (
      r !== "/" && (l = o === "/" ? r : or([r, o])),
      i.createHref({ pathname: l, search: a, hash: s })
    );
  }
  function jo() {
    return w.useContext(nc) != null;
  }
  function $i() {
    return jo() || Ne(!1), w.useContext(nc).location;
  }
  function o1(e) {
    w.useContext(gr).static || w.useLayoutEffect(e);
  }
  function tn() {
    let { isDataRoute: e } = w.useContext(yr);
    return e ? KS() : DS();
  }
  function DS() {
    jo() || Ne(!1);
    let e = w.useContext(tc),
      { basename: t, future: n, navigator: r } = w.useContext(gr),
      { matches: i } = w.useContext(yr),
      { pathname: s } = $i(),
      o = JSON.stringify(t1(i, n.v7_relativeSplatPath)),
      a = w.useRef(!1);
    return (
      o1(() => {
        a.current = !0;
      }),
      w.useCallback(
        function (c, u) {
          if ((u === void 0 && (u = {}), !a.current)) return;
          if (typeof c == "number") {
            r.go(c);
            return;
          }
          let f = n1(c, JSON.parse(o), s, u.relative === "path");
          e == null &&
            t !== "/" &&
            (f.pathname = f.pathname === "/" ? t : or([t, f.pathname])),
            (u.replace ? r.replace : r.push)(f, u.state, u);
        },
        [t, r, o, s, e],
      )
    );
  }
  function rc() {
    let { matches: e } = w.useContext(yr),
      t = e[e.length - 1];
    return t ? t.params : {};
  }
  function ic(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
      { future: r } = w.useContext(gr),
      { matches: i } = w.useContext(yr),
      { pathname: s } = $i(),
      o = JSON.stringify(t1(i, r.v7_relativeSplatPath));
    return w.useMemo(() => n1(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
  }
  function FS(e, t) {
    return zS(e, t);
  }
  function zS(e, t, n, r) {
    jo() || Ne(!1);
    let { navigator: i } = w.useContext(gr),
      { matches: s } = w.useContext(yr),
      o = s[s.length - 1],
      a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let c = $i(),
      u;
    if (t) {
      var f;
      let b = typeof t == "string" ? Wi(t) : t;
      l === "/" || ((f = b.pathname) != null && f.startsWith(l)) || Ne(!1),
        (u = b);
    } else u = c;
    let h = u.pathname || "/",
      m = h;
    if (l !== "/") {
      let b = l.replace(/^\//, "").split("/");
      m = "/" + h.replace(/^\//, "").split("/").slice(b.length).join("/");
    }
    let g = pS(e, { pathname: m }),
      v = WS(
        g &&
          g.map((b) =>
            Object.assign({}, b, {
              params: Object.assign({}, a, b.params),
              pathname: or([
                l,
                i.encodeLocation
                  ? i.encodeLocation(b.pathname).pathname
                  : b.pathname,
              ]),
              pathnameBase:
                b.pathnameBase === "/"
                  ? l
                  : or([
                      l,
                      i.encodeLocation
                        ? i.encodeLocation(b.pathnameBase).pathname
                        : b.pathnameBase,
                    ]),
            }),
          ),
        s,
        n,
        r,
      );
    return t && v
      ? w.createElement(
          nc.Provider,
          {
            value: {
              location: io(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                u,
              ),
              navigationType: qn.Pop,
            },
          },
          v,
        )
      : v;
  }
  function BS() {
    let e = QS(),
      t = RS(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return w.createElement(
      w.Fragment,
      null,
      w.createElement("h2", null, "Unexpected Application Error!"),
      w.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? w.createElement("pre", { style: i }, n) : null,
      null,
    );
  }
  const US = w.createElement(BS, null);
  class VS extends w.Component {
    constructor(t) {
      super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        });
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
      return n.location !== t.location ||
        (n.revalidation !== "idle" && t.revalidation === "idle")
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation,
          };
    }
    componentDidCatch(t, n) {
      console.error(
        "React Router caught the following error during render",
        t,
        n,
      );
    }
    render() {
      return this.state.error !== void 0
        ? w.createElement(
            yr.Provider,
            { value: this.props.routeContext },
            w.createElement(s1.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  }
  function HS(e) {
    let { routeContext: t, match: n, children: r } = e,
      i = w.useContext(tc);
    return (
      i &&
        i.static &&
        i.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (i.staticContext._deepestRenderedBoundaryId = n.route.id),
      w.createElement(yr.Provider, { value: t }, r)
    );
  }
  function WS(e, t, n, r) {
    var i;
    if (
      (t === void 0 && (t = []),
      n === void 0 && (n = null),
      r === void 0 && (r = null),
      e == null)
    ) {
      var s;
      if ((s = n) != null && s.errors) e = n.matches;
      else return null;
    }
    let o = e,
      a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
      let u = o.findIndex(
        (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
      );
      u >= 0 || Ne(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
    }
    let l = !1,
      c = -1;
    if (n && r && r.v7_partialHydration)
      for (let u = 0; u < o.length; u++) {
        let f = o[u];
        if (
          ((f.route.HydrateFallback || f.route.hydrateFallbackElement) &&
            (c = u),
          f.route.id)
        ) {
          let { loaderData: h, errors: m } = n,
            g =
              f.route.loader &&
              h[f.route.id] === void 0 &&
              (!m || m[f.route.id] === void 0);
          if (f.route.lazy || g) {
            (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
            break;
          }
        }
      }
    return o.reduceRight((u, f, h) => {
      let m,
        g = !1,
        v = null,
        b = null;
      n &&
        ((m = a && f.route.id ? a[f.route.id] : void 0),
        (v = f.route.errorElement || US),
        l &&
          (c < 0 && h === 0
            ? ((g = !0), (b = null))
            : c === h &&
              ((g = !0), (b = f.route.hydrateFallbackElement || null))));
      let y = t.concat(o.slice(0, h + 1)),
        p = () => {
          let x;
          return (
            m
              ? (x = v)
              : g
                ? (x = b)
                : f.route.Component
                  ? (x = w.createElement(f.route.Component, null))
                  : f.route.element
                    ? (x = f.route.element)
                    : (x = u),
            w.createElement(HS, {
              match: f,
              routeContext: { outlet: u, matches: y, isDataRoute: n != null },
              children: x,
            })
          );
        };
      return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
        ? w.createElement(VS, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: m,
            children: p(),
            routeContext: { outlet: null, matches: y, isDataRoute: !0 },
          })
        : p();
    }, null);
  }
  var a1 = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(a1 || {}),
    bl = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(bl || {});
  function $S(e) {
    let t = w.useContext(tc);
    return t || Ne(!1), t;
  }
  function qS(e) {
    let t = w.useContext(i1);
    return t || Ne(!1), t;
  }
  function YS(e) {
    let t = w.useContext(yr);
    return t || Ne(!1), t;
  }
  function l1(e) {
    let t = YS(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || Ne(!1), n.route.id;
  }
  function QS() {
    var e;
    let t = w.useContext(s1),
      n = qS(bl.UseRouteError),
      r = l1(bl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
  }
  function KS() {
    let { router: e } = $S(a1.UseNavigateStable),
      t = l1(bl.UseNavigateStable),
      n = w.useRef(!1);
    return (
      o1(() => {
        n.current = !0;
      }),
      w.useCallback(
        function (i, s) {
          s === void 0 && (s = {}),
            n.current &&
              (typeof i == "number"
                ? e.navigate(i)
                : e.navigate(i, io({ fromRouteId: t }, s)));
        },
        [e, t],
      )
    );
  }
  function ge(e) {
    Ne(!1);
  }
  function XS(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: r,
      navigationType: i = qn.Pop,
      navigator: s,
      static: o = !1,
      future: a,
    } = e;
    jo() && Ne(!1);
    let l = t.replace(/^\/*/, "/"),
      c = w.useMemo(
        () => ({
          basename: l,
          navigator: s,
          static: o,
          future: io({ v7_relativeSplatPath: !1 }, a),
        }),
        [l, a, s, o],
      );
    typeof r == "string" && (r = Wi(r));
    let {
        pathname: u = "/",
        search: f = "",
        hash: h = "",
        state: m = null,
        key: g = "default",
      } = r,
      v = w.useMemo(() => {
        let b = Ri(u, l);
        return b == null
          ? null
          : {
              location: { pathname: b, search: f, hash: h, state: m, key: g },
              navigationType: i,
            };
      }, [l, u, f, h, m, g, i]);
    return v == null
      ? null
      : w.createElement(
          gr.Provider,
          { value: c },
          w.createElement(nc.Provider, { children: n, value: v }),
        );
  }
  function GS(e) {
    let { children: t, location: n } = e;
    return FS(Td(t), n);
  }
  new Promise(() => {});
  function Td(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
      w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r)) return;
        let s = [...t, i];
        if (r.type === w.Fragment) {
          n.push.apply(n, Td(r.props.children, s));
          return;
        }
        r.type !== ge && Ne(!1), !r.props.index || !r.props.children || Ne(!1);
        let o = {
          id: r.props.id || s.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
        r.props.children && (o.children = Td(r.props.children, s)), n.push(o);
      }),
      n
    );
  }
  /**
   * React Router DOM v6.24.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function _l() {
    return (
      (_l = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      _l.apply(this, arguments)
    );
  }
  function c1(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      s;
    for (s = 0; s < r.length; s++)
      (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function JS(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function ZS(e, t) {
    return e.button === 0 && (!t || t === "_self") && !JS(e);
  }
  const e2 = [
      "onClick",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
      "unstable_viewTransition",
    ],
    t2 = [
      "aria-current",
      "caseSensitive",
      "className",
      "end",
      "style",
      "to",
      "unstable_viewTransition",
      "children",
    ],
    n2 = "6";
  try {
    window.__reactRouterVersion = n2;
  } catch {}
  const r2 = w.createContext({ isTransitioning: !1 }),
    i2 = "startTransition",
    sm = Jb[i2];
  function s2(e) {
    let { basename: t, children: n, future: r, window: i } = e,
      s = w.useRef();
    s.current == null && (s.current = dS({ window: i, v5Compat: !0 }));
    let o = s.current,
      [a, l] = w.useState({ action: o.action, location: o.location }),
      { v7_startTransition: c } = r || {},
      u = w.useCallback(
        (f) => {
          c && sm ? sm(() => l(f)) : l(f);
        },
        [l, c],
      );
    return (
      w.useLayoutEffect(() => o.listen(u), [o, u]),
      w.createElement(XS, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r,
      })
    );
  }
  const o2 =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
    a2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    W = w.forwardRef(function (t, n) {
      let {
          onClick: r,
          relative: i,
          reloadDocument: s,
          replace: o,
          state: a,
          target: l,
          to: c,
          preventScrollReset: u,
          unstable_viewTransition: f,
        } = t,
        h = c1(t, e2),
        { basename: m } = w.useContext(gr),
        g,
        v = !1;
      if (typeof c == "string" && a2.test(c) && ((g = c), o2))
        try {
          let x = new URL(window.location.href),
            _ = c.startsWith("//") ? new URL(x.protocol + c) : new URL(c),
            S = Ri(_.pathname, m);
          _.origin === x.origin && S != null
            ? (c = S + _.search + _.hash)
            : (v = !0);
        } catch {}
      let b = IS(c, { relative: i }),
        y = c2(c, {
          replace: o,
          state: a,
          target: l,
          preventScrollReset: u,
          relative: i,
          unstable_viewTransition: f,
        });
      function p(x) {
        r && r(x), x.defaultPrevented || y(x);
      }
      return w.createElement(
        "a",
        _l({}, h, { href: g || b, onClick: v || s ? r : p, ref: n, target: l }),
      );
    }),
    Dn = w.forwardRef(function (t, n) {
      let {
          "aria-current": r = "page",
          caseSensitive: i = !1,
          className: s = "",
          end: o = !1,
          style: a,
          to: l,
          unstable_viewTransition: c,
          children: u,
        } = t,
        f = c1(t, t2),
        h = ic(l, { relative: f.relative }),
        m = $i(),
        g = w.useContext(i1),
        { navigator: v, basename: b } = w.useContext(gr),
        y = g != null && u2(h) && c === !0,
        p = v.encodeLocation ? v.encodeLocation(h).pathname : h.pathname,
        x = m.pathname,
        _ =
          g && g.navigation && g.navigation.location
            ? g.navigation.location.pathname
            : null;
      i ||
        ((x = x.toLowerCase()),
        (_ = _ ? _.toLowerCase() : null),
        (p = p.toLowerCase())),
        _ && b && (_ = Ri(_, b) || _);
      const S = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
      let E = x === p || (!o && x.startsWith(p) && x.charAt(S) === "/"),
        A =
          _ != null &&
          (_ === p || (!o && _.startsWith(p) && _.charAt(p.length) === "/")),
        k = { isActive: E, isPending: A, isTransitioning: y },
        P = E ? r : void 0,
        T;
      typeof s == "function"
        ? (T = s(k))
        : (T = [
            s,
            E ? "active" : null,
            A ? "pending" : null,
            y ? "transitioning" : null,
          ]
            .filter(Boolean)
            .join(" "));
      let L = typeof a == "function" ? a(k) : a;
      return w.createElement(
        W,
        _l({}, f, {
          "aria-current": P,
          className: T,
          ref: n,
          style: L,
          to: l,
          unstable_viewTransition: c,
        }),
        typeof u == "function" ? u(k) : u,
      );
    });
  var Od;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Od || (Od = {}));
  var om;
  (function (e) {
    (e.UseFetcher = "useFetcher"),
      (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
  })(om || (om = {}));
  function l2(e) {
    let t = w.useContext(tc);
    return t || Ne(!1), t;
  }
  function c2(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: s,
        relative: o,
        unstable_viewTransition: a,
      } = t === void 0 ? {} : t,
      l = tn(),
      c = $i(),
      u = ic(e, { relative: o });
    return w.useCallback(
      (f) => {
        if (ZS(f, n)) {
          f.preventDefault();
          let h = r !== void 0 ? r : vl(c) === vl(u);
          l(e, {
            replace: h,
            state: i,
            preventScrollReset: s,
            relative: o,
            unstable_viewTransition: a,
          });
        }
      },
      [c, l, u, r, i, n, e, s, o, a],
    );
  }
  function u2(e, t) {
    t === void 0 && (t = {});
    let n = w.useContext(r2);
    n == null && Ne(!1);
    let { basename: r } = l2(Od.useViewTransitionState),
      i = ic(e, { relative: t.relative });
    if (!n.isTransitioning) return !1;
    let s = Ri(n.currentLocation.pathname, r) || n.currentLocation.pathname,
      o = Ri(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return xl(i.pathname, o) != null || xl(i.pathname, s) != null;
  }
  var u1 = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    am = V.createContext && V.createContext(u1),
    d2 = ["attr", "size", "title"];
  function f2(e, t) {
    if (e == null) return {};
    var n = h2(e, t),
      r,
      i;
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++)
        (r = s[i]),
          !(t.indexOf(r) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(e, r) &&
            (n[r] = e[r]);
    }
    return n;
  }
  function h2(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        if (t.indexOf(r) >= 0) continue;
        n[r] = e[r];
      }
    return n;
  }
  function wl() {
    return (
      (wl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      wl.apply(this, arguments)
    );
  }
  function lm(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Sl(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? lm(Object(n), !0).forEach(function (r) {
            p2(e, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : lm(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r),
              );
            });
    }
    return e;
  }
  function p2(e, t, n) {
    return (
      (t = m2(t)),
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function m2(e) {
    var t = g2(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function g2(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object") return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function d1(e) {
    return (
      e &&
      e.map((t, n) =>
        V.createElement(t.tag, Sl({ key: n }, t.attr), d1(t.child)),
      )
    );
  }
  function ut(e) {
    return (t) =>
      V.createElement(y2, wl({ attr: Sl({}, e.attr) }, t), d1(e.child));
  }
  function y2(e) {
    var t = (n) => {
      var { attr: r, size: i, title: s } = e,
        o = f2(e, d2),
        a = i || n.size || "1em",
        l;
      return (
        n.className && (l = n.className),
        e.className && (l = (l ? l + " " : "") + e.className),
        V.createElement(
          "svg",
          wl(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            n.attr,
            r,
            o,
            {
              className: l,
              style: Sl(Sl({ color: e.color || n.color }, n.style), e.style),
              height: a,
              width: a,
              xmlns: "http://www.w3.org/2000/svg",
            },
          ),
          s && V.createElement("title", null, s),
          e.children,
        )
      );
    };
    return am !== void 0
      ? V.createElement(am.Consumer, null, (n) => t(n))
      : t(u1);
  }
  function Md(e) {
    return ut({
      tag: "svg",
      attr: {
        version: "1.1",
        x: "0px",
        y: "0px",
        viewBox: "0 0 48 48",
        enableBackground: "new 0 0 48 48",
      },
      child: [
        {
          tag: "path",
          attr: {
            fill: "#FFC107",
            d: `M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`,
          },
          child: [],
        },
        {
          tag: "path",
          attr: {
            fill: "#FF3D00",
            d: `M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`,
          },
          child: [],
        },
        {
          tag: "path",
          attr: {
            fill: "#4CAF50",
            d: `M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`,
          },
          child: [],
        },
        {
          tag: "path",
          attr: {
            fill: "#1976D2",
            d: `M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`,
          },
          child: [],
        },
      ],
    })(e);
  }
  const cm =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA7EAABAwIDBQUGBAUFAQAAAAABAAIDBBEFEiEGEzFBUQciYXGBFDJCkaHBI7HR8DNSYoLhF0NyouIV/8QAGQEBAQADAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAAICAgICAQUAAAAAAAAAAAECAxESIQQxIlEyE0FCYXH/2gAMAwEAAhEDEQA/AOoDdURrUg3VEDVkxM1qOxuiixqOxoQSjai5UmBFaElTMZZHaBZM1qI1qgYNUw1Ta1TDUAwxMWI7W6JnNUFchUcSxGkw2DfVs7ImX0J4nyHNPtDiLcJwqerLS9zQGsZ/M8mzR815dU4ZW4vWOq8Vqy+Z1u4ODR08Feo9s6UtaenX/wCoOAul3W+mAvbOYjZSfiFNiMb5qSojmZ/Q7guGxPZSnjgu2aRr/HgubkirsInZPRykFp4tPHwI6JNqfstsN4epA6ogCo4LXNxPDKasYLbxurf5XAkEfMFaAGqrUNE3RGAsowt0RbIJsFwhVvdg8yjtGir1xuGtQZkbNShzM0VyNlgUKZqkqynR6pKy5mqSI6BTbqogXKKxquxNgRmhRaitUUSMKwxqDGrMaCTQpgJNUhxQTaFOyixTKgTRokRonCeyDju0POMMpi0cKgfPK6y5bBJYpHEGeN0g4jNddlt9Tb3Bg6+jZNW30NwQL/Necuw/EWNaambK4aMbGxrQOlrarl8j29HxI6b2OvgbCRLMGk6ADUrgcTkzMkjjc15HTQrpaqlllxd8e/ex+UZQHEa2WRi+F1VC7fVs7pi69nOAu0dLhasczE9t+aOum5sDYbPxsJFxK/u9Lm/6rpw3VctsTTsZBNJHqHWGYC3Mn7rrGBd9J3DycleNtQsxN0U7JRcFMrJgdo0VSr1fborreBVOQXeT1KSBtbYIMrVby6ILwoqg9mqSM9uqSDTaUWNV2o7FdIO3git4IKI06KA7CjxlVmFGaUVZB0SDtUIE2Tg6oLTXIl1XaUQFAcJ0MOT5lBnbSMMmB1mVuZzY87R4t1+y8qqMRnqqkMY+9Sb5Yg24a0c7c/NeyPs5pB1B4grzfHsMjwPGIn0rntje4yQPae9GeDm36fYrRmpvt2+Jl4/FhV7K6OY1lS2R8TfxJMsBDQAObrefNYeOYjUT0maZzmMafw43m7rcl2OP11ZXUrRUvkMYsbOdp6hclQYVU7R4zHHTsc4OeAwW0A5uP1K0UpuXTkvMR27bBqaOkw+COKMRjIC4Dm6wuVpxqptLVUuAYvDh9QJWslDTDKW9wgm1r36/ZW4uK9HWoeRvcrUR0RCgs0RAVAQmzCqttbo8ptH5oPgkqe2iE8I54BBeoKzhqkndxSQWGnVHYVWYbqwwqg91NrkBTaUYrLSjNKrNciscEVZBU2hBYUZhUkGATqIcLJ8wRRLpi63NYe1G0cGAU0bnMM08xtFEDa/U36Lz7GNtsUxAFkcjaSH+SHifNx1/JbaYbX/xrvlrV6Ti2P4dhMZdXVUcbuUYN3u8mhcox022uDYpV7uQex1DHU0MROcNDTe39Wt/Sy8xqah00xfmJzHUk6ld9Qiowjs3ZWQVL6Z1bV3lcx2VxYA4AA8R7t9Oq2ZMERTX2xxZpm+/o2E7F1WOPjL6qqlpL958r+59AM3kuwxKowjs8wfNTRCWtmGWNpIzSEcz0aFX2MrcQwXZCTE8fqAaEMMkET7mUAnQFxOuY8vFeUbUY7VY7iktdVuF3aMYODGjg0eC0eP4vfbf5HlbjUdK20GJ1OMV8tdiVQZZXHQcAByAHILqNl9r4d1FSYm5zZAMu/4gjx6ea88Ja+UyBtz16o8ZLTmv8l6E0i0al58Xms7e4se17GvY4OY4XBBvfyUw5eX7PbUVWFjJu2z05+BziLHwPJegbObQ4Zjkvs8RdDVAX3UnxDnbquO+KaS6qZYs0ZHaAIQN3WRKuzZS0G+VVmn8RapbIWnFBeUnOQHv4qKi52qSA9+qSIvsCM1QYEVrVkh76KTUwabozWBAmIzVFrUSyB2uRWvQgFMDRAbeWChNVMhiklldljjYXuPQAalQffKuU7Q640+BmFo71Q/KbH4QLn6BWtd20lrajbg9psblxnFpKxwLWABkMZPuN/VYznkgn8kZsbRE8c2gkeX7CjGxoY0uHeJ+Wq9KuojUPPtuZ3IcDBJJ3jYDU/O33XUTYrPXNwrCIbGmgayNkQ1zyOtcn52Hl4rnZRZ4IFnCQDMDbirGBVTqOpFc3vSsldu78ncj6Gx9Frv224+nYdp20IqqpmEUz7UdCA1xadHyAa+g4fNecuvO7KBpyB+6uzj2mX3tA7vkn3jxU5WMgysbo487KxqsahJ3adyrCnjhZmcbn6ITGF5vyPLwQ66oDWgnWxs1nU8v1TNZPOPx5MkZ+Bml/MpyOG+x5HMvkL2tA5E2KfDq32HFaOohe5j4522dy42I+RKqH2SAZY4mZvT7pUMW/wAUpI4WjM+Zg5WtmHRYWnpnWO3t88ud0jup0Q43d5DzDKbnmma7ouJ1jvdoqz3p3Fx+K3kEJ7GH3hf/AJKAD52B1sw+aSkdDYBJB0MbOqIGi6ZilzWTEmjUIwaoM4o7VQgFKycKSgQCnlBCiFMIIuaLaLyXtBxV1ZjTqaGXNTU7cltMpf8AF+dl6JtXi7cHwmWcfxnjJEP6jz9OK8WkfvXlziSb810+PT+UufPbrUAb1zZHtJ95oRWEu1dx8lUqe7Owg6WIRaaoZKbA68F0cojpp4TPYs73F7den0QGzSQUbnH3i8lo8SdFYqAAwHmCq8rBJLG2+jOXif39VJZQLRBzYgXEkk3J8VKsn77WZhm5X6nRSdIyKPVwAGpS2foTjGIyVwyupaYXyubfOQOnRacmSKRuW3FjtedQzmOZJUGTiG6M5+Z/fJWY3WPvAX9VsbTYtDiE7KaghjjpYjmc9rGtdNJbV1xytoB4LIyADULZj+VdzDXljjbjE7CqQ4auylvVanZ/hhrdoTVNjAhpGF5I4Fx0b+ZPosirfcBoNl6x2c4L7BszFUSttNXfjG/EN4N+lj6rVlnUNmON+xy0hxzJwVqVNKHagWWfJCWLldAJchvcpvagPQW6CmFUZNbZbfW/6JIdLMYIbg2LnH5AD/KSLt0ICQGqZrtE4fYqsU2IzSqzH+KnnQWM1k+ZVi830SEhQWg9S3gQAVIxyuHdaUHl/aLi7a7HfZYZhkpY8ltf4h1d9LBcjIyeLvtBmZ0HEfqjbSxmm2kxFljdtQ69zzvdRo57gAld1NRXTlnuXR9n2C4NjDqjE8bc19PSOyRUriRvHkfEBxAuBbqUHGMBoaRu93bYZ5nFzI4WNjbGL6aAa6W4rJdLPTytqKGTdvabltu67zH75K3V189fuZKg2e2MNIvpzP3XN+nk/W5T+Loi+OMOo/JRlpmkZd+TfS1uCqU9DI/ePM7mxPOhPvHldHkcWzWJGVwtx4FKKcbtocbW7vquqZhzaMcNpiwskfJJfq5SbvKKB1NRzyQwOblys+IcSCfFPmzcFGQGw56rGeM/sy+UepCjsBYjgVCeWwUpXNjH911m1M41ubAFLXmUisN7Y7A5dpdoIKINJpwc9S/kyMcfU8B5r3uohZHZkbQGNADQOQC4HsMgpnYPiOIBx9qfUCJ4to1rRdo/7FejSWzahcl7bl0VjUMecWWbUnVbVVGHA6LHqoy13DRYslKQaKs9qtSKu9AKW+6iAPIn6pJ6g95o6MH11+6SiNzfDqm3wuow0dQ//bcB1K0KfCHP951lVU4nEhWoopH+60n0WtTYVDHx1WjDAxgs0AJsYkGHTyEZm2HVaMODtGrrn1Wo0AdFMWU2KkdBCzg1FEDQO6AEdJTY+c+0iidSba4m17SN48St8Q4DVc4whh4AnzX0/imC4ZizQMSoYKnL7plYCR5HkuOxzsrwGtDn0G+w+XrE/Mw+bXfYhdFc3Wpapx/Txj2g24+ipVVRNHK7UkcV0O1+xmKbL5Zqx8UtI9+Rk0bra2vYtOoNlzrDHLJ39QG9Vt3uOmvWp7VxWnP+Jz5HminEIsxIdcOFnDr0Pmuwwp+zsGydZBV1FPDi80rZo2yRFwyNtZpIBLQddfJc1jmL085ZBQ09JIwC75Nz3fJvAnzWiclotrTojFWa8pnSmMQa0gsdcK3DXxyttnAPiucLJZZHlg58BwUoaeS93F9/Bq2c/wCmHCPtr1lSHEhp+Sy5XuklsQQ3hZWhFlb7r79SENzbiwbrfqEmUjp7J2Hlsey9Zf33Vhv42AXornArzfscidHs9VE/HVk/JoXoGY2Wi3tt3uDS2VKaNruKsPeeYQHkKDOqYOOVZk0bgeC3JrFU5GgkX6oMqoB377cAbD0SRpPeTIj0FjNOFkVrAOSGyQKe9HVGQoA6KYI5oBmbyUd7dQW2kdVMOVMSJw89UF256pZiOaqiWyW+QHdIR4qBkPRC3yg6ZXQ8o7bq72irw7DGkERxmd48XHK36By8odTSMd+GdAu02+rf/obUV0oN2teIm+TRb87n1WAGgNuea661+Lmtb5MZkUktW4vaczgLuPQclbbCAS2w1VhhBlcOAA+qnGzVIrotaZRZTMjaLABDcwjlcK68XQi1F2puZx7pVVxyG+T6rRmFmLPkP4ixHpvZDXD2CvguQGzhwB5Xb/hekNla7gvGOymp3eNVtMf92APH9rv/AEvVmTZRpzK0W9t1fTQcQgut0Vf2lIzg81ipSgDgVTl0ufA/kiyS+KpzSix1QVHnveiSDJKMx1SRHdh7uqfMeqSSMk1NrikkoJZilmPVJJA+YqLnkJ0lUDc4nmhve4MJB4BJJWB881UjpKiZ7zdzpHEnxJKE8nKkku1xyzqJ7n1lVc/EAtNnFOksa+mdvyO8lRuUklFgGoJyrNk/is80klirb2AkczbKlDTYPjka7xGQn8wF7CHGyZJaL+22vonOKE5x6pJLFkDJI7qqU0jrHXmmSQUJJHZjqmSSQf/Z",
    v2 = "/assets/p3-e7WyeobL.jpeg",
    x2 = "/assets/p4-BxKW0FuG.jpg",
    b2 = "/assets/logo-DxcybwfW.jpeg";
  function _2() {
    return d.jsxs("div", {
      children: [
        d.jsx("div", {
          className: "otherssaying",
          children: d.jsx("h1", {
            className: "actualsay",
            children: "What Others Say About Us",
          }),
        }),
        d.jsxs("section", {
          className: "testimonies",
          children: [
            d.jsxs("div", {
              className: "jostechh",
              children: [
                d.jsx("div", {
                  className: "testimonyimg",
                  children: d.jsx("img", { src: b2, alt: "Phyllis" }),
                }),
                d.jsxs("div", {
                  className: "thetestimony",
                  children: [
                    d.jsx("h2", { children: "JosTech Computers" }),
                    d.jsx("p", { className: "p11", children: "5.0 ★ ★ ★ ★ ★" }),
                    d.jsx("p", {
                      className: "p22",
                      children: "based On 11 Reviews",
                    }),
                    d.jsxs("p", {
                      className: "p33",
                      children: ["Powerde by", d.jsx(Md, {}), " "],
                    }),
                    d.jsxs("p", {
                      className: "p44",
                      children: [
                        "Review Us On",
                        " ",
                        d.jsx(W, {
                          to: "https://github.com/Joseh254",
                          children: d.jsx(Md, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "jostechh",
              children: [
                d.jsx("div", {
                  className: "testimonyimg",
                  children: d.jsx("img", { src: cm, alt: "Phyllis" }),
                }),
                d.jsxs("div", {
                  className: "thetestimony",
                  children: [
                    d.jsx("h2", { children: "Phyllis Wambui" }),
                    d.jsx("p", { className: "p11", children: "5.0 ★ ★ ★ ★ ★" }),
                    d.jsx("p", { children: "Best laptop shop in Nairobi CBD" }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "jostechh",
              children: [
                d.jsx("div", {
                  className: "testimonyimg",
                  children: d.jsx("img", { src: v2, alt: "Phyllis" }),
                }),
                d.jsxs("div", {
                  className: "thetestimony",
                  children: [
                    d.jsx("h2", { children: "Emmah Njambi" }),
                    d.jsx("p", { className: "p11", children: " 4.0 ★ ★ ★ ★ " }),
                    d.jsx("p", {
                      children:
                        "I bought my Laptop from them 3months ago and its serving me well..They are reliable dealers and their customer service is the best.",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "jostechh",
              children: [
                d.jsx("div", {
                  className: "testimonyimg",
                  children: d.jsx("img", { src: x2, alt: "Phyllis" }),
                }),
                d.jsxs("div", {
                  className: "thetestimony",
                  children: [
                    d.jsx("h2", { children: "Jane Wangari" }),
                    d.jsx("p", { className: "p11", children: "4.0 ★ ★ ★ ★ " }),
                    d.jsx("p", {
                      children:
                        "I bought a laptop and a ssd and they are all serving me well.I recommend others to visit the sho",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "jostechh",
              children: [
                d.jsx("div", {
                  className: "testimonyimg",
                  children: d.jsx("img", { src: cm, alt: "Phyllis" }),
                }),
                d.jsxs("div", {
                  className: "thetestimony",
                  children: [
                    d.jsx("h2", { children: "Annastscia Wanja" }),
                    d.jsx("p", { className: "p11", children: "5.0 ★ ★ ★ ★ ★" }),
                    d.jsx("p", {
                      children:
                        "Bought my laptop here and experienced great customer service",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function w2(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 1024 1024" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
          },
          child: [],
        },
      ],
    })(e);
  }
  const f1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACUCAMAAADF0xngAAAAZlBMVEX///8AAACvr6/7+/v39/fu7u52dnZISEjn5+fj4+P09PTr6+uWlpbOzs7Dw8N+fn7U1NQtLS2kpKRRUVEkJCS3t7eQkJAQEBAyMjLb29s5OTmdnZ0VFRVnZ2cdHR2FhYVcXFxAQEDgPrntAAALPklEQVR4nMVc2aKiMAy97LLKLosI/v9PDqikKbS0VHDOy9xRCrFJTpa2/P2pwA8HTQVZ5Cs9TwVx6SjJOKEp49/I2OXKMk7Iu9PlNKNMIMQ9z/O74JosMs8UMrK5T3bsUi+iKArDOAzHfwu9tPmGYUenyXhhuswtyfqo9kxjdb1hem7UZ8mNNWy4nCNjwHhWYrdC7ZlRayeMscEJckYM9XVFLWdgZl10DCM5Wu2X1UPyrNjnAmaRrcihO5Q+o6XG8jZUuE3YLuVsDpzOfmH/99RVvJObLm516w+SsW4W5pR+dTt9YeBNfYSQBS1koltf3tDSafupiu+FTOlf3h9BH5eevul3yvn7867U7bpDtDOipjnj6n0lJH2z4qub0Xcu6J//xZ19KiQOqo7NhkvfXNmSXCr/adeB+jsYFCtlinPgYyGTM5IYKlhkSnGImsnhW/phw8JaV5lNCwt5PVrbM0zMIdn+qcDeXZ4g34wSe/rOsQZKym/6KeLNSFH9Ye/TWfkzIcfAjlx9l9YipIbzKpQvnxaTNPB+9kxO0InSc+ky2EO51beJgBxQSuPIxkrk3u2pwhG0yIPkRqA84HqubAiIN6XSTZdkvcOpLQgKHolCjUQMMoi+n+eERTasJzy3E7OmTohSpUxUR0h0LuQVv/qxexMQR69E6RGJjL/znA8M4kECPw+BX+9qRmlEeqpHaimURR6+bWwkXVMqP732OT3p/myV6hjCgYPcZTuzkzcuhMQalToGZWIbk2RCaExUSloXdy0clTqmhhLD4c8SYSGVyGi+mbZ6vmmiUwkJJFJy2YgUEbnCA94JWKL7f/67xaKU8kE2xi0vSJ6n9IDXb3w754uhM5WbFEIZwCj2dxoMP341tOdI8GLoIPZ3+yDppiTsCyBE3fZOZa33z9fI+zwyelNf0+t7F3cKqC/YnAm/gqEq88qVvO4ziKr5fOfwAVOSXWPejIb92sMMIApmRRmDwhkCeePH/WoR0aujRb99pjmd/rgr6qUR+dHUHmSYFnhHwlIDBHuWg3uvucl61PE3o6B7YEkmJQ/vaTOmbPGOf8GjC9CSi1n0L197sBwA3JyR7nhAQyym8j7WcmvscBTE8PSuIQXqLe/GeX5Vx+884RVDyj8r6nJ0VTPo3jQ4tOexN5aUoIds/W08f8dMlU2bBL972eIgk3Tl2xqt1yTkQRG8/3gTXlh2uGfltCUpGJsri/lJsbBWOTSR2RmbwVxX0h59RBamaGMElZh11D8YYzvdZbsVZHDr9QvQC5+GDH2o0FOqZ7B4DO7B00ZluMGTGjvofCqNwEpW34AWuIMnXFL7/bCs1xmWoc/GnTGM+6K/XUarrul2xgQqX84YNIZEq0SGW3RDGnNy/tFfktFSI04Q9uM06wqOoglA5Yu2ESk0JVK26JuujC4R2OpZmIH2cqD0RJxv+c5DfR3AfTjizrQ5U+aC2CEVkVgWHHPAXrU3bPRSuSsQDp2yg1mK9VGvR8ujkDMq8GXKMI3ZNyvxHQbNydTS5L8p+mWONggvi2fWyrABerPs4jJg5MTIVW21jypzI4neBXFm7D4QHoWtAreaTLfVHkqr+I/JKHutEnofcBF2Hwgawq6Lrd0ur9aTRMtpCaN7NcguN3GPkikQhGiRWc7qClXaSOkn/9bFTgqMiVNhCLECs5zm8P3XmJvtXZHzof8zzqmgsgJHQQHbmDld5LopdHDcXIZaKfRa/rHH8C7UxJxEoRrNzRnzy8Co52D+u9hLmnhAwKu9ALOT58TRoNMm4BdHq8BnxqKh2VMQe81cbkyDK83ZvnwOMw/i5BAft4mMtvqdpDlRJflfJNIEZNTkMvD7TTXUCW2KqVBtCEtS6AUNM2gOkFHQQ9piW+O6YGMrk2+CeN2i8TNGh83lbHcWieQmkGtspdBrJUXypJmuKLLYJs3LLBKxqquElGPOt+p5XGVJ02fE3jFl2WBnkBLGQdv9vvFMFnn4ErHuhTGurm6NaW0Nf67QwC6gUZzzpRzJipG9SpIm+7J2q8nvzxRur6SsuOsSIzuyFlvNTpMoEHyHmZt4DmLQJayKKyV/SY+XINQypFlyspgt0rQarpQNT0r3xss8W3EeVXNLnat243HfxlwmHO2N7sVbaJ3Utp1ImWxjmeA2XNL0E66UD46UW8QY3YRxld/UWdMoSHlfSiniSy/XBr4UvbZZnruPrRRv0HL2PK/5kpS/bCl51v+Gt53wdcyG7wyu9zFiT7Ap5bum4mOTNEWMyqvzQMoAXfoBq5O9ShSWMG0+aV4czd50Ll7KAlUtmSBGMveHvxTUUvGDG+sCnMYywSnPGSlvdF9NL8CS2DvTsrXwmhFhV2gkGIaqZiNEQXSr7rG5LIrQcJbzHEHTdsLIjIxpmGtvVPdYM4VWq6vlckjOVXw6FF41h57EW3+mLSOB38jt3whYBUKdb+VmBGNkW6rL1BjzBs0jzM+hrhcj35eFLkQR3LVu/JfMSTz+r9PugczgkY+v43V4nzkUFAM1FQwn/3zIPOm0xOciMu/h/sG43wcujp0PKjYczKz9Z/WQ4lgrPNvAMwTREFO+NX9IZausI1ybwL4aiS+ngVmCbGPDJGU+Px8+sWGaOw+QUhHI6MUDKOAn1yAPFbjglhQnXJ7M+3GQ017usVYEubhTDwZF0AQDMZIOFRfR+UuMZfjxRQc8MWjGhMSCDp6wN8ChcwP5CWGcBTGllV7ReRHsa1rkS+SowCJ5M3XOjRcomUmkXolHjugXvxDStuXBCEjXV5EulpjOjFdYL09FsVCtNu9Bd20Z94BGn+tHufZz8yn2VuvN7zePcT8GRqTnrukaMIyVg7k6d0KHVLQXx9evvBDktCGjhowhIqy+BDHYCYLpF1dneZaxsvWLTG/QsKLeudGjb/mgu+zB0AJcJ5JAUQ6/8ebFRVpeXyjTIt63g8uoozT4DG6LkF+kXMBE1sbgb20n+inIhiJG+g1RW2kX3YGAYMCyPbLp66hDj2qA6jFnUQesPsueZDgJZLsds4UElKm0XnsUiEo53QZgidMOw4lBNjDfOFeQrPf/WSYs5nILeR8iEyNM/gjPWYRVWQkgk/m/OJNsC+bXyGQyFQ5QHgGyy5s/lXgyzzyoyQc54LjVXvJIcfs/HIi4ztayGraL/+FAZCfq9loXqnOkWjyHgtibaFsTOVf14wNd46NJAip8NDHg/Jy33vBwIT4hdl1oc0idpTsOJjo7KHGahezK/alpEqOUOyCBmli/O8aHNj7LnS0yUGn6q0iJOnQbp6Qo1ETnyW8cPSQb7+/S4QSZZvULMZGQe07toBcGJOfzkYuOMOxyWNRfbc6ezRi9WmjYNRIdlD7ntSUEEerLDTuPkqFIwC45j0KIH7Tbuly8yHAeb+IDIg8FFwhxh7Q851S+gd9cosZ6EW6SHfvmtQ983G/cfXLwgxAfchIclla6P15bUDd+SkwtODZFMqhFr2+CXE2t0z2PJHh6LemLUy5/qzWb4Cjr9OnVQ7X3PBFYdEM9O+ANcSMWbyTtvq/+F2shmfA8lghGvVhUO+RVg8ViBfr6nbeH9IvstPwY9axeh/iw1VsKtb34zce8DPGFYLlg04Qq9m6Fz8V9boeWVtHy9poT7J2EOlgt8j4PTres9YJikqXyiZaXZus3yPbHd/Zi1s6Dpo3FPu/GbcMYO5zyDmZz6ewfrdlB4fJSJtMtguvKWibkB74AkoYVcLbF5Iljp1HtjTAnTH/UUWo7CW9AcGYb1ypZukO459WzEr3IuinPbjW77f6dQosf0h77Ik02jMJRF/ThFD/rkUWl3IaMJZLyt4sfl42XmPNgR6oJ6j8HCIfnWg6STAAAAABJRU5ErkJggg==",
    h1 = "/assets/mission-rq7NZnv9.png",
    p1 =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACUCAMAAACul5XwAAAAZlBMVEX///8AAAD6+vrn5+fr6+v09PTv7+/MzMzc3Nz39/ff39/X19fQ0NAYGBhGRkaAgIC7u7tmZmY+Pj5SUlKqqqqenp56enqQkJCxsbHCwsJhYWFwcHAkJCQ0NDQQEBCkpKSIiIgrKyu2ftSlAAANCklEQVR4nN1d2ZaiMBDVsO+7rCL8/0+O9mibpCoLIOrMPWceRhtIkcqtNfFw2AqSnjbf41+A2x/H8tOD2B/W5Xw8HmP/0+PYG2ExHm+YyKdHsi+q4XiH8+mh7AknPj7x/06pUR9pJJ8ez04gbcfIeRzTTw9pHzRHHoUh+3sjbMtqmqakz7Ks7/vTVNeXNHTtdw14LcwCSFqjfxikdR9HUTSO4ILjOI5RNHdJGX7xCnciMO6W/t4y3LbK4B8JMHZ16xvWp6SRoQaDLR7jtNz0kuS6Mj5xPlVp8HXK7EFJfpTXvOnqciEfyPs6la729yOEo3RJk8UD/HwZhji7mJ+Wjka1VSIZzpXxNQxldOrxbkFcfsuCbTdrqQqnMvi0kD+Y9hb0Oq2n9gtUmCBewMsxFF8Q1ztvEPSGxPzotBrNBoO5VFTnY8TkV9Df3RFj33zEQ7Trt4r5I2rWvF/OcqErOxdJVaata9wRpGVVd/lCMhvjVj20F8JrZ72BRXNenJpWxiSW00xdnM+6IueO9y4xiZPpvf1+KkM9BiGmc0myWE/Y/k2JuCDRCDLj0yUNFloEO0irXieAHaZ3pJFrrcWZrDR7tuskGvMaV3ub1VDTcM7r3zkhwTSrRd1Vf/1ET8wrum2v3K8LVcDQ7xaykvSsLedxvGx8mpUmCu2Zy318JX9ZqHJ2Nz/RTRX0nu1hVVMpCfXQTepfwBd2eJJKOry+PtBLHhdl7sGDHwv8NUI827AtQvRehFVJWTh/KSmRcJY86vSTtIOp+yO/hIgRtFWf303leLW1oa/BKORSyGStX0dKViU243N9z3UQOOc9cxe3QcKAIatadXLTamSLtQtfJKchecr0dH8CyMnPzABpJxGHjt2k5hQ7lcRK8+Ul7m8oNioF4+XB7Gf8YN5SnuwdCvVKs1OJd9hvNzREkrzlqkqI8ia3V01SmZB35I6am0rJ29qqvoaM3gvOzwvgO08PB0cz+3tSe422xNEuN6UfAvkgJ25twNk/B5V27vfcqJdaAEtbvy9qQ8XGUbnwHIsQ+MIfd8j7ZEp6udDjpF5qxBGy0no/v1FOxsBdEQj+rjQs7+ooeLZfS++Za5CKdRFdHa3L/3oCLRln6j89dxEyiDFnuxsaqS+pE97ZwgV1WuF2WoKQLKqYmJRTFxOOAXSV2b3M0Ul1xnoRralscRwsotviuixLaqAF54DButMZLB1SS0zioNXdEoisgYZFZuAKtCO5vTFCf8m3aMBgrgALj4i58yqp1lAtkXE+LwrdXFw1ontAYlGfjfy4oF4i7SpSs6XnpVsC+o0WZLkRy3/DU00b9NP7xfBCWOP0pOSrSSkXwU1qXUrC5RwpSiO0n19xl0PlzaEnUMoE1SXPULTA9FxfZ8YuHi7005lQhZswrV4r6ZRqNzqbgvROpiMpXm6IuKVIe3sFd4cULNMZEoyMj55hjwqkwU1VpzYzeGl34JXPo5WXnzBogmEcJXKi7nfUtvyCTHOs6n3A5ezgHwaU7vGm0oAPB9lPX57x1zeHNm5SFckkpEnqBp5Zb6CVl18T0MhFfMBoy9JtcDnIgPsf0FGh4IiyCbxPewM9bTx7QCli7i9ELuYDS9puGnTYCDE8IMmaIP4GvcpGbsoNeAfuXYhihgeWTOkhRNeB0EkKJJSfI8pL28Kc+64FdxhYIlTN6HFRph93kyLcb/Zn2XORxDsTqnAThsjRMcxtq6rJC5Pw+O0wSRE7z7wdxIWkQ5WBm4EAaBPrBihYl+r+1QROSVBSE2NBWvYcycnQjsmJG1gJTPmZVl4Bvz+hF689QUpMUqC96JKJbUYS5Oa0MPyUQw2hfVh1Dyzeoy8BGrnNLCMRzGnMLFafEeWlmZcvFFr8/WhFQr7ksTwrHWD+ILtPBXu/2U1XW1ofEOaVTTmSQLIl3/FQenGIpJg/GFFzik36j5zsVGPMS085tx4IZMLHuzB0Om1WlHldjFGHX6/MQQzoIwFiU04EFj7RJZGB4yNYbbzrkSf3/+5Yk71E3Owrj951A0ucPBM9IXIFDZrFeE8Rroi/ZQyFV3RHvaZI5s3Inf4+FWuNp714RhJo3EzqNfHG1oPKO5GDpdkNgTxMB5j23vaTYYTLBL6ezHs/sAuc36AWwrXY+vK+BOpm62rZqM+VkIMLP51ZDWVytUjoTi84dd0p1m5/HVaWjZAs+s11RoieW4lMGhaJKgzaBHGxEVJ30sa4tj5mI+/ycoCKBGidsSF80u/AKm/EmSB5ykSO9YVAaEYyuHYRSeithWdYXGb8Rz7q0HANXi+oB6TKYXyTI2VyWnmRXCITqvAJpPX7nTaUdgE3dEgqOYYPYJYa0ua3rO6kiWi9oLDrqcKyHh3kddptGBHmla1i/Z5QFvHqVikXWjUXLW0hktK6MMNbS+tOK6d0pcNwJU9I9bdOaQMhYxgimbJyy4FNIHXc1Sv3OyUrBbVE1Wik5wup89AlGb5AceBCFXXRVAcrW349+LThbjFhyg7LTdHKi61i6kXwKTxMadRYebIDUqj7ffGYrYOZDFoS5G3L6k5I76cSYKnroYVEROViMT8bnGhj0t/CUUjrTiuUt1tlXTA+oARB4inooDMTDzsTDqHEf0IDYjmmVXIiDM+4tGhWl2ckSzZnB9Z/4nlbp/ORwapjr2A2GZQgXazuwqe7mCIU9BQZ/4kfp9Y+Lwr5it0HiAGF1hiJS2E6jAnYYKaDCVU4YjaPy5AtlxPzTBD3CskGPHKBT9DzglRHaOZV152kWM65NpKqnzFGSzFXrWCjcJ96GwPMRzKhCpdAUtbPGJwXy+ljfIemTAna4sx1h9LmGGFeOlSZlXUnCRZTEdoEJnCuCBokz4yHInX1Dmyowu85XBCD8yliJQzsLYoPt8NLP4wPz7RbITG6rO6kb0yXun8o1ck2U+H7hphWLMYiwlsxCW913QkHH/+ogMZH8k1j+GYeug/Wov1FhHlp5eUNsbQz7gmE5mQgzYzcBGEQ5iJc0oJ6tEvdFmkTYLw97mvU1YRYeHAk2r+u7D4T7HQZKAJjmBcaKjpUmTmvAm805HBeprjoy4s1dsII3FKq2YJ2jJFutmV1J4hFhVEbZTgslYlIOisGYNO6grgNkrqTpVbeRYzroMZZZz7FVx+jy8O6MdoJFU1Wd1Km7hf1LpQzdouztk4IesjG/r7CPZp5kS4OxquQBAYIQBQsgcCrXLJ71kDf1HX67prIuHMI89LXcGrkSffEL9m64uNFAL31+QtRPuueF6OVFzkwmQ5VBm7saED4kFN/gKKmZH5voPI+k2B3ytz8LEq6KnoC6sZ4FRN3ZyHzzgvWpy/og0ASlAp4aCvWDf1NN+yZ+gS2IEnrTgJtyfX51hMdCqHVTs/DETXJnGubpVaEeem6E++64nWnXj95YohOVDmtq9cYQt64vnym+QFJfNCGnK9hYOnVRp+GcKNy3HDouCfOCsSGK++fY0IV3quAI9XfgITm8W5Yua/yB0S0XeiKuqbzKpDr6Dhbo+6kma/2a9GCyredKCLegnuc6ZcAi3zesv1OyFYMCFu4o/JYbN7QrpfUGqHuMXUnbsZ1towAkEbcJ9BvP5WXwB5jDMhhTcvqTupNOZJTyZCS7QoIfC0OGaA8aQ0DKi/fxM3AFkQaP5Bs/ViIadaQFJIenRQHdSc4cDFr+o2sxPoCtf1Fq1PLlSuvuu50FgxYcXrma4+qsjV6T6HbwNSdeLqCCwJlXuckTZOuqUbJQSfFBICUwMTZ3JtHkrHA2/UaxSGQ0x5Hl1bK49W61GcfTKQ7TcH1TEenZ7SqVu2lu/R1EaptapQ0IS2rKas7QZ/3GfG56TQrnjXXux26S2QnKD2Q93X7jCLoUOXMH5gDmPdvopgEVaJ+0L6neJpa7sMcd9WDJJjMPmdrkcZl00uTQuMIwjHd+2Bhb9I8I3Ys6sAibKii3u+k90Mb45pzURbD7WflSB449yVtmHJOee1VB6MP/bvOr9c6NBVFYtuW9xe2bfqi1I8U7zy73tMgYBw/v+DzgyzrinjBgaB3FLsvTk5UV3dfx0uRtx843Nyq5/dKGe17rq4EdtVp/xzRZpz7T/6Ul612YF6DuNI4O3BXeO4bfmqhSL/ihyIt7Q1n63Dy33Y6vRrOKd9luea7HIy8CVYzdS/+UZ+4r77qd6h+YbYXxXmOC5DXi0/1fydst9U7tV+Fy/f8zpYQxG6nzcJ2X/kLgBjCy+nqy65nqNckpd8EM2yq5NTFs1ymIS6Qtf0VpnMJPMN12rS81Ke+K87R3whvjM5x0WX9VF2a1AkMD2YbNv5Qw+fgWdcQ1PBvcK//DMM0r9HpQxpkb/Y/pbz6aMFylh4c9g8DFgNW9V58P0wQHPyvv/nOV/zr/1ROvl3lm38keSOsZ65sXN1L80/gt4mr+08J94H7xuXxS6OzF+Jn51X3dbH2DmjGqNohcfIHbfa5KgkWMz8AAAAASUVORK5CYII=";
  function S2() {
    return d.jsxs("div", {
      className: "homeabout",
      children: [
        d.jsx("div", {
          className: "title",
          children: d.jsx("h1", { children: "About us" }),
        }),
        d.jsxs("div", {
          className: "aboutcards",
          children: [
            d.jsxs("div", {
              className: "card",
              children: [
                d.jsx("img", { src: h1, alt: "" }),
                d.jsx("h1", { children: "Mission" }),
                d.jsx("p", {
                  children:
                    "To deliver innovative, high-quality, and reliable technology solutions that empower individuals and businesses to achieve their full potential.",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "card",
              children: [
                d.jsx("img", { src: p1, alt: "" }),
                d.jsx("h1", { children: "Vission" }),
                d.jsx("p", {
                  children:
                    "To be a global leader in providing cutting-edge technology solutions, driving the future of computing, and transforming lives through innovation.",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "card",
              children: [
                d.jsx("img", { src: f1, alt: "" }),
                d.jsx("h1", { children: "Objective" }),
                d.jsx("p", {
                  children:
                    "Maintain the highest standards of quality in all products ,services and continuously enhance customer satisfaction by providing exceptional products and services.",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function um() {
    return d.jsxs(d.Fragment, {
      children: [
        d.jsxs("section", {
          className: "hero",
          children: [
            d.jsx("div", {
              className: "heroitems",
              children: d.jsxs("section", {
                className: "homesectionlinks",
                children: [
                  d.jsx(W, {
                    to: "",
                    children: d.jsxs("p", {
                      className: "products",
                      children: [d.jsx(w2, {}), " All Products "],
                    }),
                  }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "Laptops" }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "Desktops" }),
                  d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: " Cooling Fans",
                  }),
                  d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: "Central Processing Unit",
                  }),
                  d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: "Solid State drive",
                  }),
                  d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: "motheboards",
                  }),
                  d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: "hdd connectors",
                  }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "heat sinks" }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "printers" }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "screens" }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "casings" }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "hindges" }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "switches" }),
                  d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: "charging ports",
                  }),
                  d.jsx(W, { to: "/FeaturedProducts", children: "hdd covers" }),
                ],
              }),
            }),
            d.jsxs("div", {
              className: "heroimg",
              children: [
                d.jsxs("div", {
                  className: "abouthero",
                  children: [
                    d.jsx("h1", { children: "Welcome" }),
                    d.jsx("h4", { children: "to " }),
                    d.jsx("h2", { children: " JosTech Computers! " }),
                    d.jsx("p", {
                      children:
                        "We provide top-notch tech solutions to meet all your computing needs.",
                    }),
                    d.jsx("p", {
                      children:
                        "Explore our services and products to find the best fit for you.",
                    }),
                  ],
                }),
                d.jsx("div", {
                  className: "shop",
                  children: d.jsx(W, {
                    to: "/FeaturedProducts",
                    children: "Shop Now",
                  }),
                }),
              ],
            }),
          ],
        }),
        d.jsx(_2, {}),
        d.jsx(S2, {}),
      ],
    });
  }
  function A2(e) {
    return ut({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        { tag: "circle", attr: { cx: "9", cy: "21", r: "1" }, child: [] },
        { tag: "circle", attr: { cx: "20", cy: "21", r: "1" }, child: [] },
        {
          tag: "path",
          attr: {
            d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
          },
          child: [],
        },
      ],
    })(e);
  }
  function E2(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "32",
            d: "M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z",
          },
          child: [],
        },
        {
          tag: "circle",
          attr: {
            cx: "256",
            cy: "192",
            r: "48",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "32",
          },
          child: [],
        },
      ],
    })(e);
  }
  function k2(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M464 428 339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37 110.5 110.5 0 0 1-110.37 110.37z",
          },
          child: [],
        },
      ],
    })(e);
  }
  var C2 = {
    VITE_API_URL: "http://localhost:3000",
    VITE_CLOUDINARY_CLOUD_NAME: "dukptptve",
    VITE_CLOUDINARY_UPLOAD_PRESET: "preset",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  };
  const dm = (e) => {
      let t;
      const n = new Set(),
        r = (u, f) => {
          const h = typeof u == "function" ? u(t) : u;
          if (!Object.is(h, t)) {
            const m = t;
            (t =
              f ?? (typeof h != "object" || h === null)
                ? h
                : Object.assign({}, t, h)),
              n.forEach((g) => g(t, m));
          }
        },
        i = () => t,
        l = {
          setState: r,
          getState: i,
          getInitialState: () => c,
          subscribe: (u) => (n.add(u), () => n.delete(u)),
          destroy: () => {
            (C2 ? "production" : void 0) !== "production" &&
              console.warn(
                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
              ),
              n.clear();
          },
        },
        c = (t = e(r, i, l));
      return l;
    },
    j2 = (e) => (e ? dm(e) : dm);
  var m1 = { exports: {} },
    g1 = {},
    y1 = { exports: {} },
    v1 = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Li = w;
  function P2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var T2 = typeof Object.is == "function" ? Object.is : P2,
    O2 = Li.useState,
    M2 = Li.useEffect,
    N2 = Li.useLayoutEffect,
    R2 = Li.useDebugValue;
  function L2(e, t) {
    var n = t(),
      r = O2({ inst: { value: n, getSnapshot: t } }),
      i = r[0].inst,
      s = r[1];
    return (
      N2(
        function () {
          (i.value = n), (i.getSnapshot = t), hu(i) && s({ inst: i });
        },
        [e, n, t],
      ),
      M2(
        function () {
          return (
            hu(i) && s({ inst: i }),
            e(function () {
              hu(i) && s({ inst: i });
            })
          );
        },
        [e],
      ),
      R2(n),
      n
    );
  }
  function hu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !T2(e, n);
    } catch {
      return !0;
    }
  }
  function I2(e, t) {
    return t();
  }
  var D2 =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? I2
      : L2;
  v1.useSyncExternalStore =
    Li.useSyncExternalStore !== void 0 ? Li.useSyncExternalStore : D2;
  y1.exports = v1;
  var F2 = y1.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var sc = w,
    z2 = F2;
  function B2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var U2 = typeof Object.is == "function" ? Object.is : B2,
    V2 = z2.useSyncExternalStore,
    H2 = sc.useRef,
    W2 = sc.useEffect,
    $2 = sc.useMemo,
    q2 = sc.useDebugValue;
  g1.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var s = H2(null);
    if (s.current === null) {
      var o = { hasValue: !1, value: null };
      s.current = o;
    } else o = s.current;
    s = $2(
      function () {
        function l(m) {
          if (!c) {
            if (((c = !0), (u = m), (m = r(m)), i !== void 0 && o.hasValue)) {
              var g = o.value;
              if (i(g, m)) return (f = g);
            }
            return (f = m);
          }
          if (((g = f), U2(u, m))) return g;
          var v = r(m);
          return i !== void 0 && i(g, v) ? g : ((u = m), (f = v));
        }
        var c = !1,
          u,
          f,
          h = n === void 0 ? null : n;
        return [
          function () {
            return l(t());
          },
          h === null
            ? void 0
            : function () {
                return l(h());
              },
        ];
      },
      [t, n, r, i],
    );
    var a = V2(e, s[0], s[1]);
    return (
      W2(
        function () {
          (o.hasValue = !0), (o.value = a);
        },
        [a],
      ),
      q2(a),
      a
    );
  };
  m1.exports = g1;
  var Y2 = m1.exports;
  const Q2 = Fl(Y2);
  var x1 = {
    VITE_API_URL: "http://localhost:3000",
    VITE_CLOUDINARY_CLOUD_NAME: "dukptptve",
    VITE_CLOUDINARY_UPLOAD_PRESET: "preset",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  };
  const { useDebugValue: K2 } = V,
    { useSyncExternalStoreWithSelector: X2 } = Q2;
  let fm = !1;
  const G2 = (e) => e;
  function J2(e, t = G2, n) {
    (x1 ? "production" : void 0) !== "production" &&
      n &&
      !fm &&
      (console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
      ),
      (fm = !0));
    const r = X2(
      e.subscribe,
      e.getState,
      e.getServerState || e.getInitialState,
      t,
      n,
    );
    return K2(r), r;
  }
  const hm = (e) => {
      (x1 ? "production" : void 0) !== "production" &&
        typeof e != "function" &&
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
        );
      const t = typeof e == "function" ? j2(e) : e,
        n = (r, i) => J2(t, r, i);
      return Object.assign(n, t), n;
    },
    Z2 = (e) => (e ? hm(e) : hm);
  var Ia = {
    VITE_API_URL: "http://localhost:3000",
    VITE_CLOUDINARY_CLOUD_NAME: "dukptptve",
    VITE_CLOUDINARY_UPLOAD_PRESET: "preset",
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
  };
  const Nd = new Map(),
    ea = (e) => {
      const t = Nd.get(e);
      return t
        ? Object.fromEntries(
            Object.entries(t.stores).map(([n, r]) => [n, r.getState()]),
          )
        : {};
    },
    eA = (e, t, n) => {
      if (e === void 0) return { type: "untracked", connection: t.connect(n) };
      const r = Nd.get(n.name);
      if (r) return { type: "tracked", store: e, ...r };
      const i = { connection: t.connect(n), stores: {} };
      return Nd.set(n.name, i), { type: "tracked", store: e, ...i };
    },
    tA =
      (e, t = {}) =>
      (n, r, i) => {
        const { enabled: s, anonymousActionType: o, store: a, ...l } = t;
        let c;
        try {
          c =
            (s ?? (Ia ? "production" : void 0) !== "production") &&
            window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch {}
        if (!c)
          return (
            (Ia ? "production" : void 0) !== "production" &&
              s &&
              console.warn(
                "[zustand devtools middleware] Please install/enable Redux devtools extension",
              ),
            e(n, r, i)
          );
        const { connection: u, ...f } = eA(a, c, l);
        let h = !0;
        i.setState = (v, b, y) => {
          const p = n(v, b);
          if (!h) return p;
          const x =
            y === void 0
              ? { type: o || "anonymous" }
              : typeof y == "string"
                ? { type: y }
                : y;
          return a === void 0
            ? (u == null || u.send(x, r()), p)
            : (u == null ||
                u.send(
                  { ...x, type: `${a}/${x.type}` },
                  { ...ea(l.name), [a]: i.getState() },
                ),
              p);
        };
        const m = (...v) => {
            const b = h;
            (h = !1), n(...v), (h = b);
          },
          g = e(i.setState, r, i);
        if (
          (f.type === "untracked"
            ? u == null || u.init(g)
            : ((f.stores[f.store] = i),
              u == null ||
                u.init(
                  Object.fromEntries(
                    Object.entries(f.stores).map(([v, b]) => [
                      v,
                      v === f.store ? g : b.getState(),
                    ]),
                  ),
                )),
          i.dispatchFromDevtools && typeof i.dispatch == "function")
        ) {
          let v = !1;
          const b = i.dispatch;
          i.dispatch = (...y) => {
            (Ia ? "production" : void 0) !== "production" &&
              y[0].type === "__setState" &&
              !v &&
              (console.warn(
                '[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.',
              ),
              (v = !0)),
              b(...y);
          };
        }
        return (
          u.subscribe((v) => {
            var b;
            switch (v.type) {
              case "ACTION":
                if (typeof v.payload != "string") {
                  console.error(
                    "[zustand devtools middleware] Unsupported action format",
                  );
                  return;
                }
                return pu(v.payload, (y) => {
                  if (y.type === "__setState") {
                    if (a === void 0) {
                      m(y.state);
                      return;
                    }
                    Object.keys(y.state).length !== 1 &&
                      console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                    const p = y.state[a];
                    if (p == null) return;
                    JSON.stringify(i.getState()) !== JSON.stringify(p) && m(p);
                    return;
                  }
                  i.dispatchFromDevtools &&
                    typeof i.dispatch == "function" &&
                    i.dispatch(y);
                });
              case "DISPATCH":
                switch (v.payload.type) {
                  case "RESET":
                    return (
                      m(g),
                      a === void 0
                        ? u == null
                          ? void 0
                          : u.init(i.getState())
                        : u == null
                          ? void 0
                          : u.init(ea(l.name))
                    );
                  case "COMMIT":
                    if (a === void 0) {
                      u == null || u.init(i.getState());
                      return;
                    }
                    return u == null ? void 0 : u.init(ea(l.name));
                  case "ROLLBACK":
                    return pu(v.state, (y) => {
                      if (a === void 0) {
                        m(y), u == null || u.init(i.getState());
                        return;
                      }
                      m(y[a]), u == null || u.init(ea(l.name));
                    });
                  case "JUMP_TO_STATE":
                  case "JUMP_TO_ACTION":
                    return pu(v.state, (y) => {
                      if (a === void 0) {
                        m(y);
                        return;
                      }
                      JSON.stringify(i.getState()) !== JSON.stringify(y[a]) &&
                        m(y[a]);
                    });
                  case "IMPORT_STATE": {
                    const { nextLiftedState: y } = v.payload,
                      p =
                        (b = y.computedStates.slice(-1)[0]) == null
                          ? void 0
                          : b.state;
                    if (!p) return;
                    m(a === void 0 ? p : p[a]), u == null || u.send(null, y);
                    return;
                  }
                  case "PAUSE_RECORDING":
                    return (h = !h);
                }
                return;
            }
          }),
          g
        );
      },
    nA = tA,
    pu = (e, t) => {
      let n;
      try {
        n = JSON.parse(e);
      } catch (r) {
        console.error(
          "[zustand devtools middleware] Could not parse the received json",
          r,
        );
      }
      n !== void 0 && t(n);
    };
  function rA(e, t) {
    let n;
    try {
      n = e();
    } catch {
      return;
    }
    return {
      getItem: (i) => {
        var s;
        const o = (l) => (l === null ? null : JSON.parse(l, void 0)),
          a = (s = n.getItem(i)) != null ? s : null;
        return a instanceof Promise ? a.then(o) : o(a);
      },
      setItem: (i, s) => n.setItem(i, JSON.stringify(s, void 0)),
      removeItem: (i) => n.removeItem(i),
    };
  }
  const so = (e) => (t) => {
      try {
        const n = e(t);
        return n instanceof Promise
          ? n
          : {
              then(r) {
                return so(r)(n);
              },
              catch(r) {
                return this;
              },
            };
      } catch (n) {
        return {
          then(r) {
            return this;
          },
          catch(r) {
            return so(r)(n);
          },
        };
      }
    },
    iA = (e, t) => (n, r, i) => {
      let s = {
          getStorage: () => localStorage,
          serialize: JSON.stringify,
          deserialize: JSON.parse,
          partialize: (b) => b,
          version: 0,
          merge: (b, y) => ({ ...y, ...b }),
          ...t,
        },
        o = !1;
      const a = new Set(),
        l = new Set();
      let c;
      try {
        c = s.getStorage();
      } catch {}
      if (!c)
        return e(
          (...b) => {
            console.warn(
              `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`,
            ),
              n(...b);
          },
          r,
          i,
        );
      const u = so(s.serialize),
        f = () => {
          const b = s.partialize({ ...r() });
          let y;
          const p = u({ state: b, version: s.version })
            .then((x) => c.setItem(s.name, x))
            .catch((x) => {
              y = x;
            });
          if (y) throw y;
          return p;
        },
        h = i.setState;
      i.setState = (b, y) => {
        h(b, y), f();
      };
      const m = e(
        (...b) => {
          n(...b), f();
        },
        r,
        i,
      );
      let g;
      const v = () => {
        var b;
        if (!c) return;
        (o = !1), a.forEach((p) => p(r()));
        const y =
          ((b = s.onRehydrateStorage) == null ? void 0 : b.call(s, r())) ||
          void 0;
        return so(c.getItem.bind(c))(s.name)
          .then((p) => {
            if (p) return s.deserialize(p);
          })
          .then((p) => {
            if (p)
              if (typeof p.version == "number" && p.version !== s.version) {
                if (s.migrate) return s.migrate(p.state, p.version);
                console.error(
                  "State loaded from storage couldn't be migrated since no migrate function was provided",
                );
              } else return p.state;
          })
          .then((p) => {
            var x;
            return (g = s.merge(p, (x = r()) != null ? x : m)), n(g, !0), f();
          })
          .then(() => {
            y == null || y(g, void 0), (o = !0), l.forEach((p) => p(g));
          })
          .catch((p) => {
            y == null || y(void 0, p);
          });
      };
      return (
        (i.persist = {
          setOptions: (b) => {
            (s = { ...s, ...b }), b.getStorage && (c = b.getStorage());
          },
          clearStorage: () => {
            c == null || c.removeItem(s.name);
          },
          getOptions: () => s,
          rehydrate: () => v(),
          hasHydrated: () => o,
          onHydrate: (b) => (
            a.add(b),
            () => {
              a.delete(b);
            }
          ),
          onFinishHydration: (b) => (
            l.add(b),
            () => {
              l.delete(b);
            }
          ),
        }),
        v(),
        g || m
      );
    },
    sA = (e, t) => (n, r, i) => {
      let s = {
          storage: rA(() => localStorage),
          partialize: (v) => v,
          version: 0,
          merge: (v, b) => ({ ...b, ...v }),
          ...t,
        },
        o = !1;
      const a = new Set(),
        l = new Set();
      let c = s.storage;
      if (!c)
        return e(
          (...v) => {
            console.warn(
              `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`,
            ),
              n(...v);
          },
          r,
          i,
        );
      const u = () => {
          const v = s.partialize({ ...r() });
          return c.setItem(s.name, { state: v, version: s.version });
        },
        f = i.setState;
      i.setState = (v, b) => {
        f(v, b), u();
      };
      const h = e(
        (...v) => {
          n(...v), u();
        },
        r,
        i,
      );
      i.getInitialState = () => h;
      let m;
      const g = () => {
        var v, b;
        if (!c) return;
        (o = !1),
          a.forEach((p) => {
            var x;
            return p((x = r()) != null ? x : h);
          });
        const y =
          ((b = s.onRehydrateStorage) == null
            ? void 0
            : b.call(s, (v = r()) != null ? v : h)) || void 0;
        return so(c.getItem.bind(c))(s.name)
          .then((p) => {
            if (p)
              if (typeof p.version == "number" && p.version !== s.version) {
                if (s.migrate) return s.migrate(p.state, p.version);
                console.error(
                  "State loaded from storage couldn't be migrated since no migrate function was provided",
                );
              } else return p.state;
          })
          .then((p) => {
            var x;
            return (m = s.merge(p, (x = r()) != null ? x : h)), n(m, !0), u();
          })
          .then(() => {
            y == null || y(m, void 0),
              (m = r()),
              (o = !0),
              l.forEach((p) => p(m));
          })
          .catch((p) => {
            y == null || y(void 0, p);
          });
      };
      return (
        (i.persist = {
          setOptions: (v) => {
            (s = { ...s, ...v }), v.storage && (c = v.storage);
          },
          clearStorage: () => {
            c == null || c.removeItem(s.name);
          },
          getOptions: () => s,
          rehydrate: () => g(),
          hasHydrated: () => o,
          onHydrate: (v) => (
            a.add(v),
            () => {
              a.delete(v);
            }
          ),
          onFinishHydration: (v) => (
            l.add(v),
            () => {
              l.delete(v);
            }
          ),
        }),
        s.skipHydration || g(),
        m || h
      );
    },
    oA = (e, t) =>
      "getStorage" in t || "serialize" in t || "deserialize" in t
        ? ((Ia ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.",
            ),
          iA(e, t))
        : sA(e, t),
    aA = oA,
    lA = (e) => ({
      user: null,
      changeUserInformation: (t) => {
        e((n) => ({ user: t }));
      },
      clearUserInformation: () => {
        e(() => ({ user: null }));
      },
    }),
    xt = Z2(nA(aA(lA, { name: "josTech-user" })));
  function b1(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: cA } = Object.prototype,
    { getPrototypeOf: dh } = Object,
    oc = ((e) => (t) => {
      const n = cA.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    nn = (e) => ((e = e.toLowerCase()), (t) => oc(t) === e),
    ac = (e) => (t) => typeof t === e,
    { isArray: qi } = Array,
    oo = ac("undefined");
  function uA(e) {
    return (
      e !== null &&
      !oo(e) &&
      e.constructor !== null &&
      !oo(e.constructor) &&
      Bt(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const _1 = nn("ArrayBuffer");
  function dA(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && _1(e.buffer)),
      t
    );
  }
  const fA = ac("string"),
    Bt = ac("function"),
    w1 = ac("number"),
    lc = (e) => e !== null && typeof e == "object",
    hA = (e) => e === !0 || e === !1,
    Da = (e) => {
      if (oc(e) !== "object") return !1;
      const t = dh(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    pA = nn("Date"),
    mA = nn("File"),
    gA = nn("Blob"),
    yA = nn("FileList"),
    vA = (e) => lc(e) && Bt(e.pipe),
    xA = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (Bt(e.append) &&
            ((t = oc(e)) === "formdata" ||
              (t === "object" &&
                Bt(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    bA = nn("URLSearchParams"),
    [_A, wA, SA, AA] = ["ReadableStream", "Request", "Response", "Headers"].map(
      nn,
    ),
    EA = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function Po(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if ((typeof e != "object" && (e = [e]), qi(e)))
      for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
      const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        o = s.length;
      let a;
      for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
    }
  }
  function S1(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
      i;
    for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
    return null;
  }
  const A1 =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : global,
    E1 = (e) => !oo(e) && e !== A1;
  function Rd() {
    const { caseless: e } = (E1(this) && this) || {},
      t = {},
      n = (r, i) => {
        const s = (e && S1(t, i)) || i;
        Da(t[s]) && Da(r)
          ? (t[s] = Rd(t[s], r))
          : Da(r)
            ? (t[s] = Rd({}, r))
            : qi(r)
              ? (t[s] = r.slice())
              : (t[s] = r);
      };
    for (let r = 0, i = arguments.length; r < i; r++)
      arguments[r] && Po(arguments[r], n);
    return t;
  }
  const kA = (e, t, n, { allOwnKeys: r } = {}) => (
      Po(
        t,
        (i, s) => {
          n && Bt(i) ? (e[s] = b1(i, n)) : (e[s] = i);
        },
        { allOwnKeys: r },
      ),
      e
    ),
    CA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    jA = (e, t, n, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    PA = (e, t, n, r) => {
      let i, s, o;
      const a = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
          (o = i[s]),
            (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
        e = n !== !1 && dh(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    TA = (e, t, n) => {
      (e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length);
      const r = e.indexOf(t, n);
      return r !== -1 && r === n;
    },
    OA = (e) => {
      if (!e) return null;
      if (qi(e)) return e;
      let t = e.length;
      if (!w1(t)) return null;
      const n = new Array(t);
      for (; t-- > 0; ) n[t] = e[t];
      return n;
    },
    MA = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && dh(Uint8Array)),
    NA = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let i;
      for (; (i = r.next()) && !i.done; ) {
        const s = i.value;
        t.call(e, s[0], s[1]);
      }
    },
    RA = (e, t) => {
      let n;
      const r = [];
      for (; (n = e.exec(t)) !== null; ) r.push(n);
      return r;
    },
    LA = nn("HTMLFormElement"),
    IA = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
        return r.toUpperCase() + i;
      }),
    pm = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    DA = nn("RegExp"),
    k1 = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Po(n, (i, s) => {
        let o;
        (o = t(i, s, e)) !== !1 && (r[s] = o || i);
      }),
        Object.defineProperties(e, r);
    },
    FA = (e) => {
      k1(e, (t, n) => {
        if (Bt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
        const r = e[n];
        if (Bt(r)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'");
            });
        }
      });
    },
    zA = (e, t) => {
      const n = {},
        r = (i) => {
          i.forEach((s) => {
            n[s] = !0;
          });
        };
      return qi(e) ? r(e) : r(String(e).split(t)), n;
    },
    BA = () => {},
    UA = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
    mu = "abcdefghijklmnopqrstuvwxyz",
    mm = "0123456789",
    C1 = { DIGIT: mm, ALPHA: mu, ALPHA_DIGIT: mu + mu.toUpperCase() + mm },
    VA = (e = 16, t = C1.ALPHA_DIGIT) => {
      let n = "";
      const { length: r } = t;
      for (; e--; ) n += t[(Math.random() * r) | 0];
      return n;
    };
  function HA(e) {
    return !!(
      e &&
      Bt(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const WA = (e) => {
      const t = new Array(10),
        n = (r, i) => {
          if (lc(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[i] = r;
              const s = qi(r) ? [] : {};
              return (
                Po(r, (o, a) => {
                  const l = n(o, i + 1);
                  !oo(l) && (s[a] = l);
                }),
                (t[i] = void 0),
                s
              );
            }
          }
          return r;
        };
      return n(e, 0);
    },
    $A = nn("AsyncFunction"),
    qA = (e) => e && (lc(e) || Bt(e)) && Bt(e.then) && Bt(e.catch),
    j = {
      isArray: qi,
      isArrayBuffer: _1,
      isBuffer: uA,
      isFormData: xA,
      isArrayBufferView: dA,
      isString: fA,
      isNumber: w1,
      isBoolean: hA,
      isObject: lc,
      isPlainObject: Da,
      isReadableStream: _A,
      isRequest: wA,
      isResponse: SA,
      isHeaders: AA,
      isUndefined: oo,
      isDate: pA,
      isFile: mA,
      isBlob: gA,
      isRegExp: DA,
      isFunction: Bt,
      isStream: vA,
      isURLSearchParams: bA,
      isTypedArray: MA,
      isFileList: yA,
      forEach: Po,
      merge: Rd,
      extend: kA,
      trim: EA,
      stripBOM: CA,
      inherits: jA,
      toFlatObject: PA,
      kindOf: oc,
      kindOfTest: nn,
      endsWith: TA,
      toArray: OA,
      forEachEntry: NA,
      matchAll: RA,
      isHTMLForm: LA,
      hasOwnProperty: pm,
      hasOwnProp: pm,
      reduceDescriptors: k1,
      freezeMethods: FA,
      toObjectSet: zA,
      toCamelCase: IA,
      noop: BA,
      toFiniteNumber: UA,
      findKey: S1,
      global: A1,
      isContextDefined: E1,
      ALPHABET: C1,
      generateString: VA,
      isSpecCompliantForm: HA,
      toJSONObject: WA,
      isAsyncFn: $A,
      isThenable: qA,
    };
  function G(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i);
  }
  j.inherits(G, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: j.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const j1 = G.prototype,
    P1 = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    P1[e] = { value: e };
  });
  Object.defineProperties(G, P1);
  Object.defineProperty(j1, "isAxiosError", { value: !0 });
  G.from = (e, t, n, r, i, s) => {
    const o = Object.create(j1);
    return (
      j.toFlatObject(
        e,
        o,
        function (l) {
          return l !== Error.prototype;
        },
        (a) => a !== "isAxiosError",
      ),
      G.call(o, e.message, t, n, r, i),
      (o.cause = e),
      (o.name = e.name),
      s && Object.assign(o, s),
      o
    );
  };
  const YA = null;
  function Ld(e) {
    return j.isPlainObject(e) || j.isArray(e);
  }
  function T1(e) {
    return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function gm(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (i, s) {
            return (i = T1(i)), !n && s ? "[" + i + "]" : i;
          })
          .join(n ? "." : "")
      : t;
  }
  function QA(e) {
    return j.isArray(e) && !e.some(Ld);
  }
  const KA = j.toFlatObject(j, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function cc(e, t, n) {
    if (!j.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (n = j.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (v, b) {
          return !j.isUndefined(b[v]);
        },
      ));
    const r = n.metaTokens,
      i = n.visitor || u,
      s = n.dots,
      o = n.indexes,
      l = (n.Blob || (typeof Blob < "u" && Blob)) && j.isSpecCompliantForm(t);
    if (!j.isFunction(i)) throw new TypeError("visitor must be a function");
    function c(g) {
      if (g === null) return "";
      if (j.isDate(g)) return g.toISOString();
      if (!l && j.isBlob(g))
        throw new G("Blob is not supported. Use a Buffer instead.");
      return j.isArrayBuffer(g) || j.isTypedArray(g)
        ? l && typeof Blob == "function"
          ? new Blob([g])
          : Buffer.from(g)
        : g;
    }
    function u(g, v, b) {
      let y = g;
      if (g && !b && typeof g == "object") {
        if (j.endsWith(v, "{}"))
          (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g));
        else if (
          (j.isArray(g) && QA(g)) ||
          ((j.isFileList(g) || j.endsWith(v, "[]")) && (y = j.toArray(g)))
        )
          return (
            (v = T1(v)),
            y.forEach(function (x, _) {
              !(j.isUndefined(x) || x === null) &&
                t.append(
                  o === !0 ? gm([v], _, s) : o === null ? v : v + "[]",
                  c(x),
                );
            }),
            !1
          );
      }
      return Ld(g) ? !0 : (t.append(gm(b, v, s), c(g)), !1);
    }
    const f = [],
      h = Object.assign(KA, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: Ld,
      });
    function m(g, v) {
      if (!j.isUndefined(g)) {
        if (f.indexOf(g) !== -1)
          throw Error("Circular reference detected in " + v.join("."));
        f.push(g),
          j.forEach(g, function (y, p) {
            (!(j.isUndefined(y) || y === null) &&
              i.call(t, y, j.isString(p) ? p.trim() : p, v, h)) === !0 &&
              m(y, v ? v.concat(p) : [p]);
          }),
          f.pop();
      }
    }
    if (!j.isObject(e)) throw new TypeError("data must be an object");
    return m(e), t;
  }
  function ym(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
      return t[r];
    });
  }
  function fh(e, t) {
    (this._pairs = []), e && cc(e, this, t);
  }
  const O1 = fh.prototype;
  O1.append = function (t, n) {
    this._pairs.push([t, n]);
  };
  O1.toString = function (t) {
    const n = t
      ? function (r) {
          return t.call(this, r, ym);
        }
      : ym;
    return this._pairs
      .map(function (i) {
        return n(i[0]) + "=" + n(i[1]);
      }, "")
      .join("&");
  };
  function XA(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function M1(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || XA,
      i = n && n.serialize;
    let s;
    if (
      (i
        ? (s = i(t, n))
        : (s = j.isURLSearchParams(t)
            ? t.toString()
            : new fh(t, n).toString(r)),
      s)
    ) {
      const o = e.indexOf("#");
      o !== -1 && (e = e.slice(0, o)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
    }
    return e;
  }
  class vm {
    constructor() {
      this.handlers = [];
    }
    use(t, n, r) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: n,
          synchronous: r ? r.synchronous : !1,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      j.forEach(this.handlers, function (r) {
        r !== null && t(r);
      });
    }
  }
  const N1 = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    GA = typeof URLSearchParams < "u" ? URLSearchParams : fh,
    JA = typeof FormData < "u" ? FormData : null,
    ZA = typeof Blob < "u" ? Blob : null,
    eE = {
      isBrowser: !0,
      classes: { URLSearchParams: GA, FormData: JA, Blob: ZA },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    hh = typeof window < "u" && typeof document < "u",
    tE = ((e) => hh && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
      typeof navigator < "u" && navigator.product,
    ),
    nE =
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function",
    rE = (hh && window.location.href) || "http://localhost",
    iE = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          hasBrowserEnv: hh,
          hasStandardBrowserEnv: tE,
          hasStandardBrowserWebWorkerEnv: nE,
          origin: rE,
        },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
    Jt = { ...iE, ...eE };
  function sE(e, t) {
    return cc(
      e,
      new Jt.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (n, r, i, s) {
            return Jt.isNode && j.isBuffer(n)
              ? (this.append(r, n.toString("base64")), !1)
              : s.defaultVisitor.apply(this, arguments);
          },
        },
        t,
      ),
    );
  }
  function oE(e) {
    return j
      .matchAll(/\w+|\[(\w*)]/g, e)
      .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
  }
  function aE(e) {
    const t = {},
      n = Object.keys(e);
    let r;
    const i = n.length;
    let s;
    for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
    return t;
  }
  function R1(e) {
    function t(n, r, i, s) {
      let o = n[s++];
      if (o === "__proto__") return !0;
      const a = Number.isFinite(+o),
        l = s >= n.length;
      return (
        (o = !o && j.isArray(i) ? i.length : o),
        l
          ? (j.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
          : ((!i[o] || !j.isObject(i[o])) && (i[o] = []),
            t(n, r, i[o], s) && j.isArray(i[o]) && (i[o] = aE(i[o])),
            !a)
      );
    }
    if (j.isFormData(e) && j.isFunction(e.entries)) {
      const n = {};
      return (
        j.forEachEntry(e, (r, i) => {
          t(oE(r), i, n, 0);
        }),
        n
      );
    }
    return null;
  }
  function lE(e, t, n) {
    if (j.isString(e))
      try {
        return (t || JSON.parse)(e), j.trim(e);
      } catch (r) {
        if (r.name !== "SyntaxError") throw r;
      }
    return (n || JSON.stringify)(e);
  }
  const To = {
    transitional: N1,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (t, n) {
        const r = n.getContentType() || "",
          i = r.indexOf("application/json") > -1,
          s = j.isObject(t);
        if ((s && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t)))
          return i ? JSON.stringify(R1(t)) : t;
        if (
          j.isArrayBuffer(t) ||
          j.isBuffer(t) ||
          j.isStream(t) ||
          j.isFile(t) ||
          j.isBlob(t) ||
          j.isReadableStream(t)
        )
          return t;
        if (j.isArrayBufferView(t)) return t.buffer;
        if (j.isURLSearchParams(t))
          return (
            n.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1,
            ),
            t.toString()
          );
        let a;
        if (s) {
          if (r.indexOf("application/x-www-form-urlencoded") > -1)
            return sE(t, this.formSerializer).toString();
          if ((a = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
            const l = this.env && this.env.FormData;
            return cc(
              a ? { "files[]": t } : t,
              l && new l(),
              this.formSerializer,
            );
          }
        }
        return s || i ? (n.setContentType("application/json", !1), lE(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const n = this.transitional || To.transitional,
          r = n && n.forcedJSONParsing,
          i = this.responseType === "json";
        if (j.isResponse(t) || j.isReadableStream(t)) return t;
        if (t && j.isString(t) && ((r && !this.responseType) || i)) {
          const o = !(n && n.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (a) {
            if (o)
              throw a.name === "SyntaxError"
                ? G.from(a, G.ERR_BAD_RESPONSE, this, null, this.response)
                : a;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    To.headers[e] = {};
  });
  const cE = j.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    uE = (e) => {
      const t = {};
      let n, r, i;
      return (
        e &&
          e
            .split(
              `
`,
            )
            .forEach(function (o) {
              (i = o.indexOf(":")),
                (n = o.substring(0, i).trim().toLowerCase()),
                (r = o.substring(i + 1).trim()),
                !(!n || (t[n] && cE[n])) &&
                  (n === "set-cookie"
                    ? t[n]
                      ? t[n].push(r)
                      : (t[n] = [r])
                    : (t[n] = t[n] ? t[n] + ", " + r : r));
            }),
        t
      );
    },
    xm = Symbol("internals");
  function ss(e) {
    return e && String(e).trim().toLowerCase();
  }
  function Fa(e) {
    return e === !1 || e == null ? e : j.isArray(e) ? e.map(Fa) : String(e);
  }
  function dE(e) {
    const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
  }
  const fE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function gu(e, t, n, r, i) {
    if (j.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), !!j.isString(t))) {
      if (j.isString(r)) return t.indexOf(r) !== -1;
      if (j.isRegExp(r)) return r.test(t);
    }
  }
  function hE(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
  }
  function pE(e, t) {
    const n = j.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
      Object.defineProperty(e, r + n, {
        value: function (i, s, o) {
          return this[r].call(this, t, i, s, o);
        },
        configurable: !0,
      });
    });
  }
  class vt {
    constructor(t) {
      t && this.set(t);
    }
    set(t, n, r) {
      const i = this;
      function s(a, l, c) {
        const u = ss(l);
        if (!u) throw new Error("header name must be a non-empty string");
        const f = j.findKey(i, u);
        (!f || i[f] === void 0 || c === !0 || (c === void 0 && i[f] !== !1)) &&
          (i[f || l] = Fa(a));
      }
      const o = (a, l) => j.forEach(a, (c, u) => s(c, u, l));
      if (j.isPlainObject(t) || t instanceof this.constructor) o(t, n);
      else if (j.isString(t) && (t = t.trim()) && !fE(t)) o(uE(t), n);
      else if (j.isHeaders(t)) for (const [a, l] of t.entries()) s(l, a, r);
      else t != null && s(n, t, r);
      return this;
    }
    get(t, n) {
      if (((t = ss(t)), t)) {
        const r = j.findKey(this, t);
        if (r) {
          const i = this[r];
          if (!n) return i;
          if (n === !0) return dE(i);
          if (j.isFunction(n)) return n.call(this, i, r);
          if (j.isRegExp(n)) return n.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, n) {
      if (((t = ss(t)), t)) {
        const r = j.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || gu(this, this[r], r, n)));
      }
      return !1;
    }
    delete(t, n) {
      const r = this;
      let i = !1;
      function s(o) {
        if (((o = ss(o)), o)) {
          const a = j.findKey(r, o);
          a && (!n || gu(r, r[a], a, n)) && (delete r[a], (i = !0));
        }
      }
      return j.isArray(t) ? t.forEach(s) : s(t), i;
    }
    clear(t) {
      const n = Object.keys(this);
      let r = n.length,
        i = !1;
      for (; r--; ) {
        const s = n[r];
        (!t || gu(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const n = this,
        r = {};
      return (
        j.forEach(this, (i, s) => {
          const o = j.findKey(r, s);
          if (o) {
            (n[o] = Fa(i)), delete n[s];
            return;
          }
          const a = t ? hE(s) : String(s).trim();
          a !== s && delete n[s], (n[a] = Fa(i)), (r[a] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const n = Object.create(null);
      return (
        j.forEach(this, (r, i) => {
          r != null &&
            r !== !1 &&
            (n[i] = t && j.isArray(r) ? r.join(", ") : r);
        }),
        n
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
      const r = new this(t);
      return n.forEach((i) => r.set(i)), r;
    }
    static accessor(t) {
      const r = (this[xm] = this[xm] = { accessors: {} }).accessors,
        i = this.prototype;
      function s(o) {
        const a = ss(o);
        r[a] || (pE(i, o), (r[a] = !0));
      }
      return j.isArray(t) ? t.forEach(s) : s(t), this;
    }
  }
  vt.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]);
  j.reduceDescriptors(vt.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(r) {
        this[n] = r;
      },
    };
  });
  j.freezeMethods(vt);
  function yu(e, t) {
    const n = this || To,
      r = t || n,
      i = vt.from(r.headers);
    let s = r.data;
    return (
      j.forEach(e, function (a) {
        s = a.call(n, s, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      s
    );
  }
  function L1(e) {
    return !!(e && e.__CANCEL__);
  }
  function Yi(e, t, n) {
    G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  j.inherits(Yi, G, { __CANCEL__: !0 });
  function I1(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
      ? e(n)
      : t(
          new G(
            "Request failed with status code " + n.status,
            [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n,
          ),
        );
  }
  function mE(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function gE(e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let i = 0,
      s = 0,
      o;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (l) {
        const c = Date.now(),
          u = r[s];
        o || (o = c), (n[i] = l), (r[i] = c);
        let f = s,
          h = 0;
        for (; f !== i; ) (h += n[f++]), (f = f % e);
        if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t))
          return;
        const m = u && c - u;
        return m ? Math.round((h * 1e3) / m) : void 0;
      }
    );
  }
  function yE(e, t) {
    let n = 0;
    const r = 1e3 / t;
    let i = null;
    return function () {
      const o = this === !0,
        a = Date.now();
      if (o || a - n > r)
        return (
          i && (clearTimeout(i), (i = null)), (n = a), e.apply(null, arguments)
        );
      i ||
        (i = setTimeout(
          () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
          r - (a - n),
        ));
    };
  }
  const Al = (e, t, n = 3) => {
      let r = 0;
      const i = gE(50, 250);
      return yE((s) => {
        const o = s.loaded,
          a = s.lengthComputable ? s.total : void 0,
          l = o - r,
          c = i(l),
          u = o <= a;
        r = o;
        const f = {
          loaded: o,
          total: a,
          progress: a ? o / a : void 0,
          bytes: l,
          rate: c || void 0,
          estimated: c && a && u ? (a - o) / c : void 0,
          event: s,
          lengthComputable: a != null,
        };
        (f[t ? "download" : "upload"] = !0), e(f);
      }, n);
    },
    vE = Jt.hasStandardBrowserEnv
      ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          let r;
          function i(s) {
            let o = s;
            return (
              t && (n.setAttribute("href", o), (o = n.href)),
              n.setAttribute("href", o),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (r = i(window.location.href)),
            function (o) {
              const a = j.isString(o) ? i(o) : o;
              return a.protocol === r.protocol && a.host === r.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })(),
    xE = Jt.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, i, s) {
            const o = [e + "=" + encodeURIComponent(t)];
            j.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
              j.isString(r) && o.push("path=" + r),
              j.isString(i) && o.push("domain=" + i),
              s === !0 && o.push("secure"),
              (document.cookie = o.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
  function bE(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function _E(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function D1(e, t) {
    return e && !bE(t) ? _E(e, t) : t;
  }
  const bm = (e) => (e instanceof vt ? { ...e } : e);
  function Qr(e, t) {
    t = t || {};
    const n = {};
    function r(c, u, f) {
      return j.isPlainObject(c) && j.isPlainObject(u)
        ? j.merge.call({ caseless: f }, c, u)
        : j.isPlainObject(u)
          ? j.merge({}, u)
          : j.isArray(u)
            ? u.slice()
            : u;
    }
    function i(c, u, f) {
      if (j.isUndefined(u)) {
        if (!j.isUndefined(c)) return r(void 0, c, f);
      } else return r(c, u, f);
    }
    function s(c, u) {
      if (!j.isUndefined(u)) return r(void 0, u);
    }
    function o(c, u) {
      if (j.isUndefined(u)) {
        if (!j.isUndefined(c)) return r(void 0, c);
      } else return r(void 0, u);
    }
    function a(c, u, f) {
      if (f in t) return r(c, u);
      if (f in e) return r(void 0, c);
    }
    const l = {
      url: s,
      method: s,
      data: s,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: a,
      headers: (c, u) => i(bm(c), bm(u), !0),
    };
    return (
      j.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
        const f = l[u] || i,
          h = f(e[u], t[u], u);
        (j.isUndefined(h) && f !== a) || (n[u] = h);
      }),
      n
    );
  }
  const F1 = (e) => {
      const t = Qr({}, e);
      let {
        data: n,
        withXSRFToken: r,
        xsrfHeaderName: i,
        xsrfCookieName: s,
        headers: o,
        auth: a,
      } = t;
      (t.headers = o = vt.from(o)),
        (t.url = M1(D1(t.baseURL, t.url), e.params, e.paramsSerializer)),
        a &&
          o.set(
            "Authorization",
            "Basic " +
              btoa(
                (a.username || "") +
                  ":" +
                  (a.password ? unescape(encodeURIComponent(a.password)) : ""),
              ),
          );
      let l;
      if (j.isFormData(n)) {
        if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
          o.setContentType(void 0);
        else if ((l = o.getContentType()) !== !1) {
          const [c, ...u] = l
            ? l
                .split(";")
                .map((f) => f.trim())
                .filter(Boolean)
            : [];
          o.setContentType([c || "multipart/form-data", ...u].join("; "));
        }
      }
      if (
        Jt.hasStandardBrowserEnv &&
        (r && j.isFunction(r) && (r = r(t)), r || (r !== !1 && vE(t.url)))
      ) {
        const c = i && s && xE.read(s);
        c && o.set(i, c);
      }
      return t;
    },
    wE = typeof XMLHttpRequest < "u",
    SE =
      wE &&
      function (e) {
        return new Promise(function (n, r) {
          const i = F1(e);
          let s = i.data;
          const o = vt.from(i.headers).normalize();
          let { responseType: a } = i,
            l;
          function c() {
            i.cancelToken && i.cancelToken.unsubscribe(l),
              i.signal && i.signal.removeEventListener("abort", l);
          }
          let u = new XMLHttpRequest();
          u.open(i.method.toUpperCase(), i.url, !0), (u.timeout = i.timeout);
          function f() {
            if (!u) return;
            const m = vt.from(
                "getAllResponseHeaders" in u && u.getAllResponseHeaders(),
              ),
              v = {
                data:
                  !a || a === "text" || a === "json"
                    ? u.responseText
                    : u.response,
                status: u.status,
                statusText: u.statusText,
                headers: m,
                config: e,
                request: u,
              };
            I1(
              function (y) {
                n(y), c();
              },
              function (y) {
                r(y), c();
              },
              v,
            ),
              (u = null);
          }
          "onloadend" in u
            ? (u.onloadend = f)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
            (u.onabort = function () {
              u &&
                (r(new G("Request aborted", G.ECONNABORTED, i, u)), (u = null));
            }),
            (u.onerror = function () {
              r(new G("Network Error", G.ERR_NETWORK, i, u)), (u = null);
            }),
            (u.ontimeout = function () {
              let g = i.timeout
                ? "timeout of " + i.timeout + "ms exceeded"
                : "timeout exceeded";
              const v = i.transitional || N1;
              i.timeoutErrorMessage && (g = i.timeoutErrorMessage),
                r(
                  new G(
                    g,
                    v.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                    i,
                    u,
                  ),
                ),
                (u = null);
            }),
            s === void 0 && o.setContentType(null),
            "setRequestHeader" in u &&
              j.forEach(o.toJSON(), function (g, v) {
                u.setRequestHeader(v, g);
              }),
            j.isUndefined(i.withCredentials) ||
              (u.withCredentials = !!i.withCredentials),
            a && a !== "json" && (u.responseType = i.responseType),
            typeof i.onDownloadProgress == "function" &&
              u.addEventListener("progress", Al(i.onDownloadProgress, !0)),
            typeof i.onUploadProgress == "function" &&
              u.upload &&
              u.upload.addEventListener("progress", Al(i.onUploadProgress)),
            (i.cancelToken || i.signal) &&
              ((l = (m) => {
                u &&
                  (r(!m || m.type ? new Yi(null, e, u) : m),
                  u.abort(),
                  (u = null));
              }),
              i.cancelToken && i.cancelToken.subscribe(l),
              i.signal &&
                (i.signal.aborted
                  ? l()
                  : i.signal.addEventListener("abort", l)));
          const h = mE(i.url);
          if (h && Jt.protocols.indexOf(h) === -1) {
            r(new G("Unsupported protocol " + h + ":", G.ERR_BAD_REQUEST, e));
            return;
          }
          u.send(s || null);
        });
      },
    AE = (e, t) => {
      let n = new AbortController(),
        r;
      const i = function (l) {
        if (!r) {
          (r = !0), o();
          const c = l instanceof Error ? l : this.reason;
          n.abort(
            c instanceof G ? c : new Yi(c instanceof Error ? c.message : c),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          i(new G(`timeout ${t} of ms exceeded`, G.ETIMEDOUT));
        }, t);
      const o = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((l) => {
            l &&
              (l.removeEventListener
                ? l.removeEventListener("abort", i)
                : l.unsubscribe(i));
          }),
          (e = null));
      };
      e.forEach(
        (l) => l && l.addEventListener && l.addEventListener("abort", i),
      );
      const { signal: a } = n;
      return (
        (a.unsubscribe = o),
        [
          a,
          () => {
            s && clearTimeout(s), (s = null);
          },
        ]
      );
    },
    EE = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) {
        yield e;
        return;
      }
      let r = 0,
        i;
      for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
    },
    kE = async function* (e, t, n) {
      for await (const r of e)
        yield* EE(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
    },
    _m = (e, t, n, r, i) => {
      const s = kE(e, t, i);
      let o = 0;
      return new ReadableStream(
        {
          type: "bytes",
          async pull(a) {
            const { done: l, value: c } = await s.next();
            if (l) {
              a.close(), r();
              return;
            }
            let u = c.byteLength;
            n && n((o += u)), a.enqueue(new Uint8Array(c));
          },
          cancel(a) {
            return r(a), s.return();
          },
        },
        { highWaterMark: 2 },
      );
    },
    wm = (e, t) => {
      const n = e != null;
      return (r) =>
        setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
    },
    uc =
      typeof fetch == "function" &&
      typeof Request == "function" &&
      typeof Response == "function",
    z1 = uc && typeof ReadableStream == "function",
    Id =
      uc &&
      (typeof TextEncoder == "function"
        ? (
            (e) => (t) =>
              e.encode(t)
          )(new TextEncoder())
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    CE =
      z1 &&
      (() => {
        let e = !1;
        const t = new Request(Jt.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      })(),
    Sm = 64 * 1024,
    Dd =
      z1 &&
      !!(() => {
        try {
          return j.isReadableStream(new Response("").body);
        } catch {}
      })(),
    El = { stream: Dd && ((e) => e.body) };
  uc &&
    ((e) => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
        !El[t] &&
          (El[t] = j.isFunction(e[t])
            ? (n) => n[t]()
            : (n, r) => {
                throw new G(
                  `Response type '${t}' is not supported`,
                  G.ERR_NOT_SUPPORT,
                  r,
                );
              });
      });
    })(new Response());
  const jE = async (e) => {
      if (e == null) return 0;
      if (j.isBlob(e)) return e.size;
      if (j.isSpecCompliantForm(e))
        return (await new Request(e).arrayBuffer()).byteLength;
      if (j.isArrayBufferView(e)) return e.byteLength;
      if ((j.isURLSearchParams(e) && (e = e + ""), j.isString(e)))
        return (await Id(e)).byteLength;
    },
    PE = async (e, t) => {
      const n = j.toFiniteNumber(e.getContentLength());
      return n ?? jE(t);
    },
    TE =
      uc &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: i,
          cancelToken: s,
          timeout: o,
          onDownloadProgress: a,
          onUploadProgress: l,
          responseType: c,
          headers: u,
          withCredentials: f = "same-origin",
          fetchOptions: h,
        } = F1(e);
        c = c ? (c + "").toLowerCase() : "text";
        let [m, g] = i || s || o ? AE([i, s], o) : [],
          v,
          b;
        const y = () => {
          !v &&
            setTimeout(() => {
              m && m.unsubscribe();
            }),
            (v = !0);
        };
        let p;
        try {
          if (
            l &&
            CE &&
            n !== "get" &&
            n !== "head" &&
            (p = await PE(u, r)) !== 0
          ) {
            let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
              A;
            j.isFormData(r) &&
              (A = E.headers.get("content-type")) &&
              u.setContentType(A),
              E.body && (r = _m(E.body, Sm, wm(p, Al(l)), null, Id));
          }
          j.isString(f) || (f = f ? "cors" : "omit"),
            (b = new Request(t, {
              ...h,
              signal: m,
              method: n.toUpperCase(),
              headers: u.normalize().toJSON(),
              body: r,
              duplex: "half",
              withCredentials: f,
            }));
          let x = await fetch(b);
          const _ = Dd && (c === "stream" || c === "response");
          if (Dd && (a || _)) {
            const E = {};
            ["status", "statusText", "headers"].forEach((k) => {
              E[k] = x[k];
            });
            const A = j.toFiniteNumber(x.headers.get("content-length"));
            x = new Response(
              _m(x.body, Sm, a && wm(A, Al(a, !0)), _ && y, Id),
              E,
            );
          }
          c = c || "text";
          let S = await El[j.findKey(El, c) || "text"](x, e);
          return (
            !_ && y(),
            g && g(),
            await new Promise((E, A) => {
              I1(E, A, {
                data: S,
                headers: vt.from(x.headers),
                status: x.status,
                statusText: x.statusText,
                config: e,
                request: b,
              });
            })
          );
        } catch (x) {
          throw (
            (y(),
            x && x.name === "TypeError" && /fetch/i.test(x.message)
              ? Object.assign(new G("Network Error", G.ERR_NETWORK, e, b), {
                  cause: x.cause || x,
                })
              : G.from(x, x && x.code, e, b))
          );
        }
      }),
    Fd = { http: YA, xhr: SE, fetch: TE };
  j.forEach(Fd, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const Am = (e) => `- ${e}`,
    OE = (e) => j.isFunction(e) || e === null || e === !1,
    B1 = {
      getAdapter: (e) => {
        e = j.isArray(e) ? e : [e];
        const { length: t } = e;
        let n, r;
        const i = {};
        for (let s = 0; s < t; s++) {
          n = e[s];
          let o;
          if (
            ((r = n),
            !OE(n) && ((r = Fd[(o = String(n)).toLowerCase()]), r === void 0))
          )
            throw new G(`Unknown adapter '${o}'`);
          if (r) break;
          i[o || "#" + s] = r;
        }
        if (!r) {
          const s = Object.entries(i).map(
            ([a, l]) =>
              `adapter ${a} ` +
              (l === !1
                ? "is not supported by the environment"
                : "is not available in the build"),
          );
          let o = t
            ? s.length > 1
              ? `since :
` +
                s.map(Am).join(`
`)
              : " " + Am(s[0])
            : "as no adapter specified";
          throw new G(
            "There is no suitable adapter to dispatch the request " + o,
            "ERR_NOT_SUPPORT",
          );
        }
        return r;
      },
      adapters: Fd,
    };
  function vu(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Yi(null, e);
  }
  function Em(e) {
    return (
      vu(e),
      (e.headers = vt.from(e.headers)),
      (e.data = yu.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      B1.getAdapter(e.adapter || To.adapter)(e).then(
        function (r) {
          return (
            vu(e),
            (r.data = yu.call(e, e.transformResponse, r)),
            (r.headers = vt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            L1(r) ||
              (vu(e),
              r &&
                r.response &&
                ((r.response.data = yu.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = vt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
    );
  }
  const U1 = "1.7.2",
    ph = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      ph[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    },
  );
  const km = {};
  ph.transitional = function (t, n, r) {
    function i(s, o) {
      return (
        "[Axios v" +
        U1 +
        "] Transitional option '" +
        s +
        "'" +
        o +
        (r ? ". " + r : "")
      );
    }
    return (s, o, a) => {
      if (t === !1)
        throw new G(
          i(o, " has been removed" + (n ? " in " + n : "")),
          G.ERR_DEPRECATED,
        );
      return (
        n &&
          !km[o] &&
          ((km[o] = !0),
          console.warn(
            i(
              o,
              " has been deprecated since v" +
                n +
                " and will be removed in the near future",
            ),
          )),
        t ? t(s, o, a) : !0
      );
    };
  };
  function ME(e, t, n) {
    if (typeof e != "object")
      throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
      const s = r[i],
        o = t[s];
      if (o) {
        const a = e[s],
          l = a === void 0 || o(a, s, e);
        if (l !== !0)
          throw new G("option " + s + " must be " + l, G.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (n !== !0) throw new G("Unknown option " + s, G.ERR_BAD_OPTION);
    }
  }
  const zd = { assertOptions: ME, validators: ph },
    Fn = zd.validators;
  class Fr {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new vm(), response: new vm() });
    }
    async request(t, n) {
      try {
        return await this._request(t, n);
      } catch (r) {
        if (r instanceof Error) {
          let i;
          Error.captureStackTrace
            ? Error.captureStackTrace((i = {}))
            : (i = new Error());
          const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
          try {
            r.stack
              ? s &&
                !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
                (r.stack +=
                  `
` + s)
              : (r.stack = s);
          } catch {}
        }
        throw r;
      }
    }
    _request(t, n) {
      typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
        (n = Qr(this.defaults, n));
      const { transitional: r, paramsSerializer: i, headers: s } = n;
      r !== void 0 &&
        zd.assertOptions(
          r,
          {
            silentJSONParsing: Fn.transitional(Fn.boolean),
            forcedJSONParsing: Fn.transitional(Fn.boolean),
            clarifyTimeoutError: Fn.transitional(Fn.boolean),
          },
          !1,
        ),
        i != null &&
          (j.isFunction(i)
            ? (n.paramsSerializer = { serialize: i })
            : zd.assertOptions(
                i,
                { encode: Fn.function, serialize: Fn.function },
                !0,
              )),
        (n.method = (n.method || this.defaults.method || "get").toLowerCase());
      let o = s && j.merge(s.common, s[n.method]);
      s &&
        j.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (g) => {
            delete s[g];
          },
        ),
        (n.headers = vt.concat(o, s));
      const a = [];
      let l = !0;
      this.interceptors.request.forEach(function (v) {
        (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
          ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
      });
      const c = [];
      this.interceptors.response.forEach(function (v) {
        c.push(v.fulfilled, v.rejected);
      });
      let u,
        f = 0,
        h;
      if (!l) {
        const g = [Em.bind(this), void 0];
        for (
          g.unshift.apply(g, a),
            g.push.apply(g, c),
            h = g.length,
            u = Promise.resolve(n);
          f < h;

        )
          u = u.then(g[f++], g[f++]);
        return u;
      }
      h = a.length;
      let m = n;
      for (f = 0; f < h; ) {
        const g = a[f++],
          v = a[f++];
        try {
          m = g(m);
        } catch (b) {
          v.call(this, b);
          break;
        }
      }
      try {
        u = Em.call(this, m);
      } catch (g) {
        return Promise.reject(g);
      }
      for (f = 0, h = c.length; f < h; ) u = u.then(c[f++], c[f++]);
      return u;
    }
    getUri(t) {
      t = Qr(this.defaults, t);
      const n = D1(t.baseURL, t.url);
      return M1(n, t.params, t.paramsSerializer);
    }
  }
  j.forEach(["delete", "get", "head", "options"], function (t) {
    Fr.prototype[t] = function (n, r) {
      return this.request(
        Qr(r || {}, { method: t, url: n, data: (r || {}).data }),
      );
    };
  });
  j.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
      return function (s, o, a) {
        return this.request(
          Qr(a || {}, {
            method: t,
            headers: r ? { "Content-Type": "multipart/form-data" } : {},
            url: s,
            data: o,
          }),
        );
      };
    }
    (Fr.prototype[t] = n()), (Fr.prototype[t + "Form"] = n(!0));
  });
  class mh {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function (s) {
        n = s;
      });
      const r = this;
      this.promise.then((i) => {
        if (!r._listeners) return;
        let s = r._listeners.length;
        for (; s-- > 0; ) r._listeners[s](i);
        r._listeners = null;
      }),
        (this.promise.then = (i) => {
          let s;
          const o = new Promise((a) => {
            r.subscribe(a), (s = a);
          }).then(i);
          return (
            (o.cancel = function () {
              r.unsubscribe(s);
            }),
            o
          );
        }),
        t(function (s, o, a) {
          r.reason || ((r.reason = new Yi(s, o, a)), n(r.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
      let t;
      return {
        token: new mh(function (i) {
          t = i;
        }),
        cancel: t,
      };
    }
  }
  function NE(e) {
    return function (n) {
      return e.apply(null, n);
    };
  }
  function RE(e) {
    return j.isObject(e) && e.isAxiosError === !0;
  }
  const Bd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Bd).forEach(([e, t]) => {
    Bd[t] = e;
  });
  function V1(e) {
    const t = new Fr(e),
      n = b1(Fr.prototype.request, t);
    return (
      j.extend(n, Fr.prototype, t, { allOwnKeys: !0 }),
      j.extend(n, t, null, { allOwnKeys: !0 }),
      (n.create = function (i) {
        return V1(Qr(e, i));
      }),
      n
    );
  }
  const K = V1(To);
  K.Axios = Fr;
  K.CanceledError = Yi;
  K.CancelToken = mh;
  K.isCancel = L1;
  K.VERSION = U1;
  K.toFormData = cc;
  K.AxiosError = G;
  K.Cancel = K.CanceledError;
  K.all = function (t) {
    return Promise.all(t);
  };
  K.spread = NE;
  K.isAxiosError = RE;
  K.mergeConfig = Qr;
  K.AxiosHeaders = vt;
  K.formToJSON = (e) => R1(j.isHTMLForm(e) ? new FormData(e) : e);
  K.getAdapter = B1.getAdapter;
  K.HttpStatusCode = Bd;
  K.default = K;
  var LE = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0,
  };
  function IE(e) {
    if (typeof e == "number") return { value: e, unit: "px" };
    var t,
      n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return LE[r]
      ? { value: t, unit: r }
      : (console.warn(
          "React Spinners: "
            .concat(e, " is not a valid css value. Defaulting to ")
            .concat(t, "px."),
        ),
        { value: t, unit: "px" });
  }
  function Cm(e) {
    var t = IE(e);
    return "".concat(t.value).concat(t.unit);
  }
  var DE = function (e, t, n) {
      var r = "react-spinners-".concat(e, "-").concat(n);
      if (typeof window > "u" || !window.document) return r;
      var i = document.createElement("style");
      document.head.appendChild(i);
      var s = i.sheet,
        o = `
    @keyframes `
          .concat(
            r,
            ` {
      `,
          )
          .concat(
            t,
            `
    }
  `,
          );
      return s && s.insertRule(o, 0), r;
    },
    kl = function () {
      return (
        (kl =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        kl.apply(this, arguments)
      );
    },
    FE = function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    },
    zE = DE(
      "ClipLoader",
      "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}",
      "clip",
    );
  function BE(e) {
    var t = e.loading,
      n = t === void 0 ? !0 : t,
      r = e.color,
      i = r === void 0 ? "#000000" : r,
      s = e.speedMultiplier,
      o = s === void 0 ? 1 : s,
      a = e.cssOverride,
      l = a === void 0 ? {} : a,
      c = e.size,
      u = c === void 0 ? 35 : c,
      f = FE(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]),
      h = kl(
        {
          background: "transparent !important",
          width: Cm(u),
          height: Cm(u),
          borderRadius: "100%",
          border: "2px solid",
          borderTopColor: i,
          borderBottomColor: "transparent",
          borderLeftColor: i,
          borderRightColor: i,
          display: "inline-block",
          animation: ""
            .concat(zE, " ")
            .concat(0.75 / o, "s 0s infinite linear"),
          animationFillMode: "both",
        },
        l,
      );
    return n ? w.createElement("span", kl({ style: h }, f)) : null;
  }
  function H1(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var i = e.length;
        for (t = 0; t < i; t++)
          e[t] && (n = H1(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function Yn() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
      (e = arguments[n]) && (t = H1(e)) && (r && (r += " "), (r += t));
    return r;
  }
  const ao = (e) => typeof e == "number" && !isNaN(e),
    zr = (e) => typeof e == "string",
    Et = (e) => typeof e == "function",
    za = (e) => (zr(e) || Et(e) ? e : null),
    Ud = (e) => w.isValidElement(e) || zr(e) || Et(e) || ao(e);
  function UE(e, t, n) {
    n === void 0 && (n = 300);
    const { scrollHeight: r, style: i } = e;
    requestAnimationFrame(() => {
      (i.minHeight = "initial"),
        (i.height = r + "px"),
        (i.transition = `all ${n}ms`),
        requestAnimationFrame(() => {
          (i.height = "0"),
            (i.padding = "0"),
            (i.margin = "0"),
            setTimeout(t, n);
        });
    });
  }
  function dc(e) {
    let {
      enter: t,
      exit: n,
      appendPosition: r = !1,
      collapse: i = !0,
      collapseDuration: s = 300,
    } = e;
    return function (o) {
      let {
        children: a,
        position: l,
        preventExitTransition: c,
        done: u,
        nodeRef: f,
        isIn: h,
        playToast: m,
      } = o;
      const g = r ? `${t}--${l}` : t,
        v = r ? `${n}--${l}` : n,
        b = w.useRef(0);
      return (
        w.useLayoutEffect(() => {
          const y = f.current,
            p = g.split(" "),
            x = (_) => {
              _.target === f.current &&
                (m(),
                y.removeEventListener("animationend", x),
                y.removeEventListener("animationcancel", x),
                b.current === 0 &&
                  _.type !== "animationcancel" &&
                  y.classList.remove(...p));
            };
          y.classList.add(...p),
            y.addEventListener("animationend", x),
            y.addEventListener("animationcancel", x);
        }, []),
        w.useEffect(() => {
          const y = f.current,
            p = () => {
              y.removeEventListener("animationend", p), i ? UE(y, u, s) : u();
            };
          h ||
            (c
              ? p()
              : ((b.current = 1),
                (y.className += ` ${v}`),
                y.addEventListener("animationend", p)));
        }, [h]),
        V.createElement(V.Fragment, null, a)
      );
    };
  }
  function jm(e, t) {
    return e != null
      ? {
          content: e.content,
          containerId: e.props.containerId,
          id: e.props.toastId,
          theme: e.props.theme,
          type: e.props.type,
          data: e.props.data || {},
          isLoading: e.props.isLoading,
          icon: e.props.icon,
          status: t,
        }
      : {};
  }
  const ot = new Map();
  let lo = [];
  const Vd = new Set(),
    VE = (e) => Vd.forEach((t) => t(e)),
    W1 = () => ot.size > 0;
  function $1(e, t) {
    var n;
    if (t) return !((n = ot.get(t)) == null || !n.isToastActive(e));
    let r = !1;
    return (
      ot.forEach((i) => {
        i.isToastActive(e) && (r = !0);
      }),
      r
    );
  }
  function q1(e, t) {
    Ud(e) &&
      (W1() || lo.push({ content: e, options: t }),
      ot.forEach((n) => {
        n.buildToast(e, t);
      }));
  }
  function Pm(e, t) {
    ot.forEach((n) => {
      t != null && t != null && t.containerId
        ? (t == null ? void 0 : t.containerId) === n.id &&
          n.toggle(e, t == null ? void 0 : t.id)
        : n.toggle(e, t == null ? void 0 : t.id);
    });
  }
  function HE(e) {
    const {
      subscribe: t,
      getSnapshot: n,
      setProps: r,
    } = w.useRef(
      (function (s) {
        const o = s.containerId || 1;
        return {
          subscribe(a) {
            const l = (function (u, f, h) {
              let m = 1,
                g = 0,
                v = [],
                b = [],
                y = [],
                p = f;
              const x = new Map(),
                _ = new Set(),
                S = () => {
                  (y = Array.from(x.values())), _.forEach((k) => k());
                },
                E = (k) => {
                  (b = k == null ? [] : b.filter((P) => P !== k)), S();
                },
                A = (k) => {
                  const {
                      toastId: P,
                      onOpen: T,
                      updateId: L,
                      children: B,
                    } = k.props,
                    $ = L == null;
                  k.staleId && x.delete(k.staleId),
                    x.set(P, k),
                    (b = [...b, k.props.toastId].filter(
                      (ee) => ee !== k.staleId,
                    )),
                    S(),
                    h(jm(k, $ ? "added" : "updated")),
                    $ && Et(T) && T(w.isValidElement(B) && B.props);
                };
              return {
                id: u,
                props: p,
                observe: (k) => (_.add(k), () => _.delete(k)),
                toggle: (k, P) => {
                  x.forEach((T) => {
                    (P != null && P !== T.props.toastId) ||
                      (Et(T.toggle) && T.toggle(k));
                  });
                },
                removeToast: E,
                toasts: x,
                clearQueue: () => {
                  (g -= v.length), (v = []);
                },
                buildToast: (k, P) => {
                  if (
                    ((U) => {
                      let { containerId: oe, toastId: te, updateId: ae } = U;
                      const ce = oe ? oe !== u : u !== 1,
                        pe = x.has(te) && ae == null;
                      return ce || pe;
                    })(P)
                  )
                    return;
                  const {
                      toastId: T,
                      updateId: L,
                      data: B,
                      staleId: $,
                      delay: ee,
                    } = P,
                    q = () => {
                      E(T);
                    },
                    X = L == null;
                  X && g++;
                  const Q = {
                    ...p,
                    style: p.toastStyle,
                    key: m++,
                    ...Object.fromEntries(
                      Object.entries(P).filter((U) => {
                        let [oe, te] = U;
                        return te != null;
                      }),
                    ),
                    toastId: T,
                    updateId: L,
                    data: B,
                    closeToast: q,
                    isIn: !1,
                    className: za(P.className || p.toastClassName),
                    bodyClassName: za(P.bodyClassName || p.bodyClassName),
                    progressClassName: za(
                      P.progressClassName || p.progressClassName,
                    ),
                    autoClose:
                      !P.isLoading &&
                      ((M = P.autoClose),
                      (R = p.autoClose),
                      M === !1 || (ao(M) && M > 0) ? M : R),
                    deleteToast() {
                      const U = x.get(T),
                        { onClose: oe, children: te } = U.props;
                      Et(oe) && oe(w.isValidElement(te) && te.props),
                        h(jm(U, "removed")),
                        x.delete(T),
                        g--,
                        g < 0 && (g = 0),
                        v.length > 0 ? A(v.shift()) : S();
                    },
                  };
                  var M, R;
                  (Q.closeButton = p.closeButton),
                    P.closeButton === !1 || Ud(P.closeButton)
                      ? (Q.closeButton = P.closeButton)
                      : P.closeButton === !0 &&
                        (Q.closeButton = !Ud(p.closeButton) || p.closeButton);
                  let F = k;
                  w.isValidElement(k) && !zr(k.type)
                    ? (F = w.cloneElement(k, {
                        closeToast: q,
                        toastProps: Q,
                        data: B,
                      }))
                    : Et(k) &&
                      (F = k({ closeToast: q, toastProps: Q, data: B }));
                  const Y = { content: F, props: Q, staleId: $ };
                  p.limit && p.limit > 0 && g > p.limit && X
                    ? v.push(Y)
                    : ao(ee)
                      ? setTimeout(() => {
                          A(Y);
                        }, ee)
                      : A(Y);
                },
                setProps(k) {
                  p = k;
                },
                setToggle: (k, P) => {
                  x.get(k).toggle = P;
                },
                isToastActive: (k) => b.some((P) => P === k),
                getSnapshot: () => (p.newestOnTop ? y.reverse() : y),
              };
            })(o, s, VE);
            ot.set(o, l);
            const c = l.observe(a);
            return (
              lo.forEach((u) => q1(u.content, u.options)),
              (lo = []),
              () => {
                c(), ot.delete(o);
              }
            );
          },
          setProps(a) {
            var l;
            (l = ot.get(o)) == null || l.setProps(a);
          },
          getSnapshot() {
            var a;
            return (a = ot.get(o)) == null ? void 0 : a.getSnapshot();
          },
        };
      })(e),
    ).current;
    r(e);
    const i = w.useSyncExternalStore(t, n, n);
    return {
      getToastToRender: function (s) {
        if (!i) return [];
        const o = new Map();
        return (
          i.forEach((a) => {
            const { position: l } = a.props;
            o.has(l) || o.set(l, []), o.get(l).push(a);
          }),
          Array.from(o, (a) => s(a[0], a[1]))
        );
      },
      isToastActive: $1,
      count: i == null ? void 0 : i.length,
    };
  }
  function WE(e) {
    const [t, n] = w.useState(!1),
      [r, i] = w.useState(!1),
      s = w.useRef(null),
      o = w.useRef({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1,
      }).current,
      {
        autoClose: a,
        pauseOnHover: l,
        closeToast: c,
        onClick: u,
        closeOnClick: f,
      } = e;
    var h, m;
    function g() {
      n(!0);
    }
    function v() {
      n(!1);
    }
    function b(x) {
      const _ = s.current;
      o.canDrag &&
        _ &&
        ((o.didMove = !0),
        t && v(),
        (o.delta =
          e.draggableDirection === "x"
            ? x.clientX - o.start
            : x.clientY - o.start),
        o.start !== x.clientX && (o.canCloseOnClick = !1),
        (_.style.transform = `translate3d(${e.draggableDirection === "x" ? `${o.delta}px, var(--y)` : `0, calc(${o.delta}px + var(--y))`},0)`),
        (_.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
    }
    function y() {
      document.removeEventListener("pointermove", b),
        document.removeEventListener("pointerup", y);
      const x = s.current;
      if (o.canDrag && o.didMove && x) {
        if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
          return i(!0), e.closeToast(), void e.collapseAll();
        (x.style.transition = "transform 0.2s, opacity 0.2s"),
          x.style.removeProperty("transform"),
          x.style.removeProperty("opacity");
      }
    }
    (m = ot.get(
      (h = { id: e.toastId, containerId: e.containerId, fn: n }).containerId ||
        1,
    )) == null || m.setToggle(h.id, h.fn),
      w.useEffect(() => {
        if (e.pauseOnFocusLoss)
          return (
            document.hasFocus() || v(),
            window.addEventListener("focus", g),
            window.addEventListener("blur", v),
            () => {
              window.removeEventListener("focus", g),
                window.removeEventListener("blur", v);
            }
          );
      }, [e.pauseOnFocusLoss]);
    const p = {
      onPointerDown: function (x) {
        if (e.draggable === !0 || e.draggable === x.pointerType) {
          (o.didMove = !1),
            document.addEventListener("pointermove", b),
            document.addEventListener("pointerup", y);
          const _ = s.current;
          (o.canCloseOnClick = !0),
            (o.canDrag = !0),
            (_.style.transition = "none"),
            e.draggableDirection === "x"
              ? ((o.start = x.clientX),
                (o.removalDistance =
                  _.offsetWidth * (e.draggablePercent / 100)))
              : ((o.start = x.clientY),
                (o.removalDistance =
                  (_.offsetHeight *
                    (e.draggablePercent === 80
                      ? 1.5 * e.draggablePercent
                      : e.draggablePercent)) /
                  100));
        }
      },
      onPointerUp: function (x) {
        const {
          top: _,
          bottom: S,
          left: E,
          right: A,
        } = s.current.getBoundingClientRect();
        x.nativeEvent.type !== "touchend" &&
        e.pauseOnHover &&
        x.clientX >= E &&
        x.clientX <= A &&
        x.clientY >= _ &&
        x.clientY <= S
          ? v()
          : g();
      },
    };
    return (
      a && l && ((p.onMouseEnter = v), e.stacked || (p.onMouseLeave = g)),
      f &&
        (p.onClick = (x) => {
          u && u(x), o.canCloseOnClick && c();
        }),
      {
        playToast: g,
        pauseToast: v,
        isRunning: t,
        preventExitTransition: r,
        toastRef: s,
        eventHandlers: p,
      }
    );
  }
  function $E(e) {
    let {
      delay: t,
      isRunning: n,
      closeToast: r,
      type: i = "default",
      hide: s,
      className: o,
      style: a,
      controlledProgress: l,
      progress: c,
      rtl: u,
      isIn: f,
      theme: h,
    } = e;
    const m = s || (l && c === 0),
      g = {
        ...a,
        animationDuration: `${t}ms`,
        animationPlayState: n ? "running" : "paused",
      };
    l && (g.transform = `scaleX(${c})`);
    const v = Yn(
        "Toastify__progress-bar",
        l
          ? "Toastify__progress-bar--controlled"
          : "Toastify__progress-bar--animated",
        `Toastify__progress-bar-theme--${h}`,
        `Toastify__progress-bar--${i}`,
        { "Toastify__progress-bar--rtl": u },
      ),
      b = Et(o) ? o({ rtl: u, type: i, defaultClassName: v }) : Yn(v, o),
      y = {
        [l && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
          l && c < 1
            ? null
            : () => {
                f && r();
              },
      };
    return V.createElement(
      "div",
      { className: "Toastify__progress-bar--wrp", "data-hidden": m },
      V.createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${i}`,
      }),
      V.createElement("div", {
        role: "progressbar",
        "aria-hidden": m ? "true" : "false",
        "aria-label": "notification timer",
        className: b,
        style: g,
        ...y,
      }),
    );
  }
  let qE = 1;
  const Y1 = () => "" + qE++;
  function YE(e) {
    return e && (zr(e.toastId) || ao(e.toastId)) ? e.toastId : Y1();
  }
  function Os(e, t) {
    return q1(e, t), t.toastId;
  }
  function Cl(e, t) {
    return { ...t, type: (t && t.type) || e, toastId: YE(t) };
  }
  function ta(e) {
    return (t, n) => Os(t, Cl(e, n));
  }
  function me(e, t) {
    return Os(e, Cl("default", t));
  }
  (me.loading = (e, t) =>
    Os(
      e,
      Cl("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...t,
      }),
    )),
    (me.promise = function (e, t, n) {
      let r,
        { pending: i, error: s, success: o } = t;
      i &&
        (r = zr(i) ? me.loading(i, n) : me.loading(i.render, { ...n, ...i }));
      const a = {
          isLoading: null,
          autoClose: null,
          closeOnClick: null,
          closeButton: null,
          draggable: null,
        },
        l = (u, f, h) => {
          if (f == null) return void me.dismiss(r);
          const m = { type: u, ...a, ...n, data: h },
            g = zr(f) ? { render: f } : f;
          return (
            r ? me.update(r, { ...m, ...g }) : me(g.render, { ...m, ...g }), h
          );
        },
        c = Et(e) ? e() : e;
      return (
        c.then((u) => l("success", o, u)).catch((u) => l("error", s, u)), c
      );
    }),
    (me.success = ta("success")),
    (me.info = ta("info")),
    (me.error = ta("error")),
    (me.warning = ta("warning")),
    (me.warn = me.warning),
    (me.dark = (e, t) => Os(e, Cl("default", { theme: "dark", ...t }))),
    (me.dismiss = function (e) {
      (function (t) {
        var n;
        if (W1()) {
          if (t == null || zr((n = t)) || ao(n))
            ot.forEach((r) => {
              r.removeToast(t);
            });
          else if (t && ("containerId" in t || "id" in t)) {
            const r = ot.get(t.containerId);
            r
              ? r.removeToast(t.id)
              : ot.forEach((i) => {
                  i.removeToast(t.id);
                });
          }
        } else lo = lo.filter((r) => t != null && r.options.toastId !== t);
      })(e);
    }),
    (me.clearWaitingQueue = function (e) {
      e === void 0 && (e = {}),
        ot.forEach((t) => {
          !t.props.limit ||
            (e.containerId && t.id !== e.containerId) ||
            t.clearQueue();
        });
    }),
    (me.isActive = $1),
    (me.update = function (e, t) {
      t === void 0 && (t = {});
      const n = ((r, i) => {
        var s;
        let { containerId: o } = i;
        return (s = ot.get(o || 1)) == null ? void 0 : s.toasts.get(r);
      })(e, t);
      if (n) {
        const { props: r, content: i } = n,
          s = {
            delay: 100,
            ...r,
            ...t,
            toastId: t.toastId || e,
            updateId: Y1(),
          };
        s.toastId !== e && (s.staleId = e);
        const o = s.render || i;
        delete s.render, Os(o, s);
      }
    }),
    (me.done = (e) => {
      me.update(e, { progress: 1 });
    }),
    (me.onChange = function (e) {
      return (
        Vd.add(e),
        () => {
          Vd.delete(e);
        }
      );
    }),
    (me.play = (e) => Pm(!0, e)),
    (me.pause = (e) => Pm(!1, e));
  const QE = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
    na = (e) => {
      let { theme: t, type: n, isLoading: r, ...i } = e;
      return V.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill:
          t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
        ...i,
      });
    },
    xu = {
      info: function (e) {
        return V.createElement(
          na,
          { ...e },
          V.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
          }),
        );
      },
      warning: function (e) {
        return V.createElement(
          na,
          { ...e },
          V.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
          }),
        );
      },
      success: function (e) {
        return V.createElement(
          na,
          { ...e },
          V.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
          }),
        );
      },
      error: function (e) {
        return V.createElement(
          na,
          { ...e },
          V.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
          }),
        );
      },
      spinner: function () {
        return V.createElement("div", { className: "Toastify__spinner" });
      },
    },
    KE = (e) => {
      const {
          isRunning: t,
          preventExitTransition: n,
          toastRef: r,
          eventHandlers: i,
          playToast: s,
        } = WE(e),
        {
          closeButton: o,
          children: a,
          autoClose: l,
          onClick: c,
          type: u,
          hideProgressBar: f,
          closeToast: h,
          transition: m,
          position: g,
          className: v,
          style: b,
          bodyClassName: y,
          bodyStyle: p,
          progressClassName: x,
          progressStyle: _,
          updateId: S,
          role: E,
          progress: A,
          rtl: k,
          toastId: P,
          deleteToast: T,
          isIn: L,
          isLoading: B,
          closeOnClick: $,
          theme: ee,
        } = e,
        q = Yn(
          "Toastify__toast",
          `Toastify__toast-theme--${ee}`,
          `Toastify__toast--${u}`,
          { "Toastify__toast--rtl": k },
          { "Toastify__toast--close-on-click": $ },
        ),
        X = Et(v)
          ? v({ rtl: k, position: g, type: u, defaultClassName: q })
          : Yn(q, v),
        Q = (function (Y) {
          let { theme: U, type: oe, isLoading: te, icon: ae } = Y,
            ce = null;
          const pe = { theme: U, type: oe };
          return (
            ae === !1 ||
              (Et(ae)
                ? (ce = ae({ ...pe, isLoading: te }))
                : w.isValidElement(ae)
                  ? (ce = w.cloneElement(ae, pe))
                  : te
                    ? (ce = xu.spinner())
                    : ((le) => le in xu)(oe) && (ce = xu[oe](pe))),
            ce
          );
        })(e),
        M = !!A || !l,
        R = { closeToast: h, type: u, theme: ee };
      let F = null;
      return (
        o === !1 ||
          (F = Et(o)
            ? o(R)
            : w.isValidElement(o)
              ? w.cloneElement(o, R)
              : (function (Y) {
                  let { closeToast: U, theme: oe, ariaLabel: te = "close" } = Y;
                  return V.createElement(
                    "button",
                    {
                      className: `Toastify__close-button Toastify__close-button--${oe}`,
                      type: "button",
                      onClick: (ae) => {
                        ae.stopPropagation(), U(ae);
                      },
                      "aria-label": te,
                    },
                    V.createElement(
                      "svg",
                      { "aria-hidden": "true", viewBox: "0 0 14 16" },
                      V.createElement("path", {
                        fillRule: "evenodd",
                        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                      }),
                    ),
                  );
                })(R)),
        V.createElement(
          m,
          {
            isIn: L,
            done: T,
            position: g,
            preventExitTransition: n,
            nodeRef: r,
            playToast: s,
          },
          V.createElement(
            "div",
            {
              id: P,
              onClick: c,
              "data-in": L,
              className: X,
              ...i,
              style: b,
              ref: r,
            },
            V.createElement(
              "div",
              {
                ...(L && { role: E }),
                className: Et(y)
                  ? y({ type: u })
                  : Yn("Toastify__toast-body", y),
                style: p,
              },
              Q != null &&
                V.createElement(
                  "div",
                  {
                    className: Yn("Toastify__toast-icon", {
                      "Toastify--animate-icon Toastify__zoom-enter": !B,
                    }),
                  },
                  Q,
                ),
              V.createElement("div", null, a),
            ),
            F,
            V.createElement($E, {
              ...(S && !M ? { key: `pb-${S}` } : {}),
              rtl: k,
              theme: ee,
              delay: l,
              isRunning: t,
              isIn: L,
              closeToast: h,
              hide: f,
              type: u,
              style: _,
              className: x,
              controlledProgress: M,
              progress: A || 0,
            }),
          ),
        )
      );
    },
    fc = function (e, t) {
      return (
        t === void 0 && (t = !1),
        {
          enter: `Toastify--animate Toastify__${e}-enter`,
          exit: `Toastify--animate Toastify__${e}-exit`,
          appendPosition: t,
        }
      );
    },
    XE = dc(fc("bounce", !0));
  dc(fc("slide", !0));
  dc(fc("zoom"));
  dc(fc("flip"));
  const GE = {
    position: "top-right",
    transition: XE,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  };
  function JE(e) {
    let t = { ...GE, ...e };
    const n = e.stacked,
      [r, i] = w.useState(!0),
      s = w.useRef(null),
      { getToastToRender: o, isToastActive: a, count: l } = HE(t),
      { className: c, style: u, rtl: f, containerId: h } = t;
    function m(v) {
      const b = Yn(
        "Toastify__toast-container",
        `Toastify__toast-container--${v}`,
        { "Toastify__toast-container--rtl": f },
      );
      return Et(c)
        ? c({ position: v, rtl: f, defaultClassName: b })
        : Yn(b, za(c));
    }
    function g() {
      n && (i(!0), me.play());
    }
    return (
      QE(() => {
        if (n) {
          var v;
          const b = s.current.querySelectorAll('[data-in="true"]'),
            y = 12,
            p = (v = t.position) == null ? void 0 : v.includes("top");
          let x = 0,
            _ = 0;
          Array.from(b)
            .reverse()
            .forEach((S, E) => {
              const A = S;
              A.classList.add("Toastify__toast--stacked"),
                E > 0 && (A.dataset.collapsed = `${r}`),
                A.dataset.pos || (A.dataset.pos = p ? "top" : "bot");
              const k = x * (r ? 0.2 : 1) + (r ? 0 : y * E);
              A.style.setProperty("--y", `${p ? k : -1 * k}px`),
                A.style.setProperty("--g", `${y}`),
                A.style.setProperty("--s", "" + (1 - (r ? _ : 0))),
                (x += A.offsetHeight),
                (_ += 0.025);
            });
        }
      }, [r, l, n]),
      V.createElement(
        "div",
        {
          ref: s,
          className: "Toastify",
          id: h,
          onMouseEnter: () => {
            n && (i(!1), me.pause());
          },
          onMouseLeave: g,
        },
        o((v, b) => {
          const y = b.length ? { ...u } : { ...u, pointerEvents: "none" };
          return V.createElement(
            "div",
            { className: m(v), style: y, key: `container-${v}` },
            b.map((p) => {
              let { content: x, props: _ } = p;
              return V.createElement(
                KE,
                {
                  ..._,
                  stacked: n,
                  collapseAll: g,
                  isIn: a(_.toastId, _.containerId),
                  style: _.style,
                  key: `toast-${_.key}`,
                },
                x,
              );
            }),
          );
        }),
      )
    );
  }
  const ze = "http://localhost:3000";
  function ZE() {
    const e = tn(),
      t = $i(),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(!1),
      [o, a] = w.useState(""),
      [l, c] = w.useState([]),
      [u, f] = w.useState(!1),
      [h, m] = w.useState(!1),
      g = xt((A) => A.user),
      v = xt((A) => A.changeUserInformation);
    w.useEffect(() => {
      g ? (r(!0), s(g.role === "admin")) : (r(!1), s(!1));
    }, [g]);
    const b = () => {
        e("/Signin");
      },
      y = () => {
        e("/Login");
      },
      p = () => {
        v(null), r(!1), s(!1), e("/Login");
      },
      x = t.pathname === "/Login",
      _ = (A) => {
        a(A.target.value);
      },
      S = async () => {
        f(!0);
        try {
          const P = (await K.get(`${ze}/api/products/get`)).data.data.filter(
            (T) => T.productName.toLowerCase().includes(o.toLowerCase()),
          );
          c(P), m(!0), P.length === 0 && me.error("Product not found");
        } catch (A) {
          console.error("Error fetching products:", A),
            me.error("Error fetching products");
        } finally {
          f(!1);
        }
      },
      E = () => {
        m(!1), c([]), a("");
      };
    return d.jsxs("header", {
      className: "topheader",
      children: [
        d.jsxs("div", {
          className: "top_nav",
          children: [
            d.jsx("img", {
              src: "https://res.cloudinary.com/dukptptve/image/upload/v1720545743/tsfefecdldflhhwttjwx.png",
              alt: "logo",
            }),
            d.jsxs("div", {
              className: "topleftbtn",
              children: [
                d.jsx("button", { className: "btnleft", children: "All" }),
                d.jsx(k2, { className: "icon" }),
                d.jsx("input", {
                  type: "text",
                  className: "searchinput",
                  id: "searchinput",
                  placeholder: "Search...",
                  value: o,
                  onChange: _,
                }),
                d.jsx("button", {
                  className: "btnright",
                  onClick: S,
                  children: "Search",
                }),
              ],
            }),
            d.jsx("section", {
              className: "signcart",
              children: d.jsxs("div", {
                className: "cart",
                children: [
                  d.jsx("h1", { className: "headericons" }),
                  d.jsxs("div", {
                    className: "headeractionbuttons",
                    children: [
                      n &&
                        !x &&
                        !i &&
                        d.jsx("button", {
                          className: "usercartBtn",
                          children: d.jsxs(W, {
                            to: "/Cart",
                            className: "cartlink",
                            children: [d.jsx(A2, {}), " Cart"],
                          }),
                        }),
                      !n &&
                        !x &&
                        d.jsxs(d.Fragment, {
                          children: [
                            d.jsx("button", {
                              onClick: y,
                              className: "userLogInBtn",
                              children: "Log In",
                            }),
                            d.jsx("button", {
                              onClick: b,
                              className: "userSignupBtn",
                              children: "Sign Up",
                            }),
                          ],
                        }),
                      n &&
                        d.jsx(d.Fragment, {
                          children: d.jsxs("div", {
                            className: "logoutProfile",
                            children: [
                              d.jsx("button", {
                                onClick: p,
                                className: "userLogoutBtn",
                                children: "Log Out",
                              }),
                              d.jsx(W, {
                                to: `/Profile/${g.id}`,
                                children: d.jsx("button", {
                                  className: "userUpdateprofileBtn",
                                  children: "Profile",
                                }),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        h &&
          d.jsx("div", {
            className: "overlay",
            onClick: E,
            children: d.jsxs("div", {
              className: "overlay-content",
              onClick: (A) => A.stopPropagation(),
              children: [
                d.jsx("button", {
                  className: "close-overlay",
                  onClick: E,
                  children: "X",
                }),
                u
                  ? d.jsx("div", {
                      className: "loading-spinner",
                      children: d.jsx(BE, { size: 50 }),
                    })
                  : d.jsx(d.Fragment, {
                      children:
                        l.length > 0
                          ? d.jsx("ul", {
                              className: "search-results",
                              children: l.map((A) =>
                                d.jsx(
                                  "li",
                                  {
                                    children: d.jsxs(W, {
                                      to: `/product/${A.id}`,
                                      onClick: E,
                                      className: "resultLink",
                                      children: [
                                        d.jsx("img", {
                                          src: A.productImage,
                                          alt: A.productName,
                                        }),
                                        d.jsx("p", { children: A.productName }),
                                        d.jsxs("p", {
                                          children: ["Ksh ", A.productPrice],
                                        }),
                                        d.jsx("p", {
                                          className: "seemorelink",
                                          children: "see more →",
                                        }),
                                      ],
                                    }),
                                  },
                                  A.id,
                                ),
                              ),
                            })
                          : d.jsx("p", { children: "No products found." }),
                    }),
              ],
            }),
          }),
        d.jsx(JE, {}),
      ],
    });
  }
  function ek() {
    return d.jsxs("section", {
      className: "navigation",
      children: [
        d.jsx(ZE, {}),
        d.jsxs("nav", {
          className: "navigation_bar",
          children: [
            d.jsx(W, { to: "/", children: "Home" }),
            d.jsx(W, { to: "/About", children: "About Us" }),
            d.jsx(W, {
              to: "/FeaturedProducts",
              children: "Featured Products",
            }),
            d.jsx(W, { to: "/Help", children: "Help Center" }),
            d.jsx(W, { to: "/Hotdeals", children: "Hot Deals" }),
            d.jsx(W, { to: "/Contact", children: "Contact Us" }),
          ],
        }),
      ],
    });
  }
  function tk() {
    return d.jsx(d.Fragment, { children: d.jsx(ek, {}) });
  }
  const nk = "/assets/aboutus-DpaFTWUo.jpg";
  function rk() {
    return d.jsxs(d.Fragment, {
      children: [
        d.jsxs("div", {
          className: "aboutaboutus",
          children: [
            d.jsxs("div", {
              className: "aboutaboutuscontent",
              children: [
                d.jsx("h1", { children: "Our History" }),
                d.jsxs("p", {
                  children: [
                    "Founded in 2005, JosTech Computers started as a small local business in the bustling city of Jos. Initially focusing on computer sales and repair services, the company quickly gained a reputation for its exceptional customer service and technical expertise. As technology evolved, so did JosTech Computers. By 2010, the company expanded its offerings to include custom-built PCs, networking solutions, and IT consulting services. This expansion marked the beginning of JosTech's growth into a comprehensive technology solutions provider.",
                    d.jsx("br", {}),
                    d.jsx("p", {
                      children:
                        "Today, JosTech Computers operates on a global scale, serving customers across multiple continents. Despite its growth, the company remains rooted in its core values of customer satisfaction, quality assurance, and community engagement. As JosTech looks to the future, it remains dedicated to pushing the boundaries of technology and delivering solutions that meet the needs of a diverse and dynamic clientele.",
                    }),
                  ],
                }),
              ],
            }),
            d.jsx("div", {
              className: "aboutaboutusimg",
              children: d.jsx("img", { src: nk, alt: "" }),
            }),
          ],
        }),
        d.jsxs("div", {
          className: "thegoals",
          children: [
            d.jsxs("section", {
              className: "aboutusgoals",
              children: [
                d.jsx("h1", { children: "Mission" }),
                d.jsx("div", {
                  className: "aboutusgoal",
                  children: d.jsxs("div", {
                    className: "aboutgoalcontent",
                    children: [
                      d.jsx("img", { src: h1, alt: "our mission" }),
                      d.jsx("p", {
                        children:
                          "To be a global leader in providing cutting-edge technology solutions, driving the future of computing, and transforming lives through innovation.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            d.jsxs("section", {
              className: "aboutusgoals",
              children: [
                d.jsx("h1", { children: "Vision" }),
                d.jsx("div", {
                  className: "aboutusgoal",
                  children: d.jsxs("div", {
                    className: "aboutgoalcontent",
                    children: [
                      d.jsx("img", { src: p1, alt: "our vision" }),
                      d.jsx("p", {
                        children:
                          "To deliver innovative, high-quality, and reliable technology solutions that empower individuals and businesses to achieve their full potential.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            d.jsxs("section", {
              className: "aboutusgoals",
              children: [
                d.jsx("h1", { children: "Objective" }),
                d.jsx("div", {
                  className: "aboutusgoal",
                  children: d.jsxs("div", {
                    className: "aboutgoalcontent",
                    children: [
                      d.jsx("img", { src: f1, alt: "our objective" }),
                      d.jsx("p", {
                        children:
                          "Maintain the highest standards of quality in all products ,services and continuously enhance customer satisfaction by providing exceptional products and service",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function ik() {
    return d.jsx(rk, {});
  }
  function Tm(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Om(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 496 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Q1(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 576 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function sk() {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(!0),
      [i, s] = w.useState(null);
    return (
      w.useEffect(() => {
        async function o() {
          try {
            const a = await K.get(`${ze}/api/products/get`);
            t(a.data.data), r(!1);
          } catch (a) {
            s(a), r(!1);
          }
        }
        o();
      }, []),
      n
        ? d.jsx("p", { children: "Loading..." })
        : i
          ? d.jsxs("p", { children: ["Error fetching products: ", i.message] })
          : d.jsxs(d.Fragment, {
              children: [
                d.jsx("div", {
                  className: "sign",
                  children: d.jsx("div", { className: "signinicon" }),
                }),
                d.jsxs("div", {
                  className: "productswrapper",
                  children: [
                    d.jsx("div", {
                      className: "productstitle",
                      children: d.jsx("h1", { children: "Laptops" }),
                    }),
                    d.jsx("section", {
                      className: "laptops",
                      children: e.map((o) =>
                        d.jsxs(
                          "div",
                          {
                            className: "laptopcontainer",
                            children: [
                              d.jsx("img", {
                                src: o.productImage,
                                alt: o.productName,
                              }),
                              d.jsx("h1", { children: o.productName }),
                              d.jsx("p", {
                                children: d.jsxs("strike", {
                                  children: ["was Ksh ", o.productPrice + 300],
                                }),
                              }),
                              d.jsxs("h3", {
                                children: ["Now Ksh ", o.productPrice],
                              }),
                              d.jsxs("button", {
                                children: [d.jsx(Q1, {}), " Add to Cart"],
                              }),
                              d.jsxs("div", {
                                className: "more",
                                children: [
                                  " ",
                                  d.jsxs(W, {
                                    to: `/product/${o.id}`,
                                    children: [
                                      " ",
                                      d.jsx("h4", {
                                        className: "morebtnlink",
                                        children: "More →",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          o.productId,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            })
    );
  }
  function ok() {
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("section", {
          className: "featuredproducts",
          children: d.jsx("div", {
            className: "itemsandproducts",
            children: d.jsx("div", { className: "featuredproductsproducts" }),
          }),
        }),
        d.jsx(sk, {}),
      ],
    });
  }
  const ak =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AKgDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAYHAQMFBAL/xABGEAABBAEBBAYFBQwLAQAAAAAAAQIDBAURBhIhMQcTIkFRYSMycYGhFBYzkaIVJDQ1QlJygpKTscIXJ1VklLKzwdLT8PH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AtsAAAAAAAAAAADIGADIGAAAAAAAAAAAAAAAAAAAAAAAADJgADJgAAAAAAAAAAAAAAAAAAAAAAAAAAarNmpTgms2p4oK8Ld+WWZ6MjYnLi53DyQgWQ6T8WydauHx9vJTKqo13aha/wWONrHzKntY0CwgVn89+kL6RdjrHU8/wPI72nPnu6/ZPZjuk/EyzJWy9C1jZkVEc5d6aNi8tZGK1syJ+ooFgA1V7Fa3DFYrTRTQTN34pYXtfG9vi1zeBtAAAAAAAAAAAAAAMgwAMmAABqs2a1OvYtWZGxV68T5ppHcmRsTeVV04m0r7pPyFiPHYvEVtVmy1tN5qL67IXMRkap4K9zP2QOLDFmekrKTTTSz09m6E24xrNEdvaa7jNdWrMqLq9y67qLonPjZeLwuGwsCV8bThrs0Tfcxussq/nSyu1e5fNVUYXFVsLi8fjIETdqwtY9+nGWZe1JK7zcuqr7ToADnZXCYXNQrBkqcU7dFSN6puzRKv5UUrdHovsU6IAqZ7cz0a5WJySTXNmb8ujmqnaRebtWp2UmanFFTRHonino7VgngswQWIJGyQTxsmhkYurXxvRHNc1fBUPDncTBm8VkMdKiazxO6h6omsVhnaikRV8F0+PiRLowyMs+Jv4udV6zEWtyNHc2wWN56M/VckiJ7vACfgADIMADJgAAAAAAAAAAAABWe3Onzw2AWX6D5TS58tfl8ev8pZhAOk/HTzYzHZavqk2Jtauc1PUjnVmki9/Ze1n1qBPwc3B5avm8Vj8lCqaWIkWViKmsU7ezJE7zauqf/TpAAAA8PaVn0f6LtNt+sX0HX9nTl+G2t34ak4z+XhwmJv5GRW78UTm1mLp6Wy/sxRonmvFfJFXuIr0YYyWth7uUmRetzFrrI1drq6tXRY2PXXj2nK93vTxAnwAAAAAAAAAAAAAAAAAAGuxBXtQT1rEbZILET4Zo3+q+N7Va5q+02ACpUdmujbKTejmu7M35k0Xhq13Jurl7LZmpw46I9ETkqejsfE57CZuFsuOuRTLuoskKruWIl04pJC7tp9WnmpxMrttsRFN9y7czbkU7uouLDClmnC1efXu9VU8d1Hae45dro32byCR3sHkZqTZfSQurvbbqKi8liVXI9E9kvuAsL/3I5eX2gwWEidJkbkUT91VjgaqPsy8NUSOFva48tdETxVCD/MDbLTqvnjP1HLT7/5fofKNPiemp0cbL4xsl/O5CW6yH0kzrTm1KacecqNdvLx8ZF9i6gchjM10lZSGWWKSpsvRkd3/AEnc5jHcnSu5OVODE4cVX0lrwxQ14oYIWNjhhjZFFGxNGMjYiNa1qJ3InBCK4nbbYqzN9zas6U2Qu6imliFKtWZjeCdQvqongjkavkS0AAAAAAAAAAAAAAAAAAANNq3Uo1rFu3MyGtXjWSaWRdGsanx8kTv5d5V1rKbUdINufHYVHUcDFIjLc8qOaj2/3hWLqrlTlGi6ce0ve36ztu9tztFHs5jJXR4fHyOfessXVjljduPn4cF0XsQp3rq7l6tlY3HUMTSrUKMLYa1dm6xjeKqvNXPdzVy83KvMCN0ujvZCtQkpzVFtzTNak1yw5UtbycUWFzNEYiLyRvv17+C/YXa/CSyS7LZ5yQucr1r2nugcvgj91r4HL5rG0s0AVn/Xr6n3ond1m9ivr9X+QwzYLavNTRzbVZ97omu30r1HumemvNGue1sLF82xqWaAIhe6O9kLVGOpXqfI5oWObFbrqqzqq6qqz76qj9V573uVO6MU8xtPsDcgxeebJcwkqq2pZj3nrGxO+u53a4flRquqfk8PXtY8WTxmPzFKxQvwpLXmboqcnscnqyRu7nJzRQN9azWuV4LVWVk1eeNssMsao5j2OTVFRTcVZs9dv7F7QSbMZWVX4u9KjsfYcitY2SVypHK3uRr17Midzk15KqutMAAAAAAAAAAAAAAEc20zDsLs9kLMT1ZZn3aVV6cFZLMior0Xxa1HOT2EjK06TlfctbIYdqqiXLb99E71llhqtX6nPA7fR7hG4rAV7MjN25lkZfsKqdpsTm+gi156NbovtcpMD5Y1jGtYxEaxjUY1qcka1NERD6AAAAAAAAAhvSHhGZTBTXI2KtvEo61G5uu8tddEnZqnl2/azzOnsfmH5vAY25K7etRtdUuL3rYrruOev6SaO/WO5LHHNHLDK1HRysdFI1eTmvRWqhXHRc+SB21mKeq/elyvK1F/OVJKz/8ATQCygAAAAAAAAAAAAAh+1+yV/PWMXkMbkGVL2PRzY+tR+4q77ZWPY+LtNc1U56L8OMwAFZadNeK4J8mycMfg6rOrk899IZviplNvNtqX412Rn0Tm6KG9A39rclZ9oswAVtH0sYpFRLWIuwr3o2aByp7perX4HsZ0q7Hu01hybV7/AEVV3+WcnUkMMqaSxxvTwka1yfaQ8j8NgpNesxeOfrz36ld38WARP+lLY783JfuIv+01u6VtkG67sOUcvd6Oo1PtTks+4GzX9i4n/A1f+BsZh8HHp1eLxzNOW5Urt/gwCCSdLOLVdKmIuzr3I6aFqr7oUkU+F2824u/irZGfdXk6WC9O1NfF25Ez4lksihiTSOONieEbWtT7KH2BWW702ZXgq1sXDJ4vqwq390k0yfWh3tjtk7mzz8rbv3mW72R6pJVha9I2oxz5Fcr5F3nOcrlVV0T4kvAAAAAAAAAAAAAAAAAAAAADIGADIGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANL3WN9EYxNxuiqqrorlXXgnkn+/lxDcDxI6w/VFV2rXom+1E7DkjXe0RNeWunfxXyMqth+72JNNd9Ec1NU9I1rEX2Jq5fAD2A8aOt6Iu69dEcuit59Wiac+PaXyTkAPYAAAAAAAAAAAAAAAAAAAAAAAD4iYjI2NTVdE1VV5qqrqqr5qfYAAAAf/9k=",
    lk = "/assets/orders-DBvUMwq8.jpeg",
    ck = "/assets/return-CVYtkRxk.jpeg",
    uk = "/assets/membership-XZzSZuly.jpeg";
  function dk(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function Mm(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function fk() {
    return d.jsxs(d.Fragment, {
      children: [
        d.jsxs("section", {
          className: "helpcenter",
          children: [
            d.jsx("h1", { className: "helpheading", children: "Help Center" }),
            d.jsxs("section", {
              className: "helpitems",
              children: [
                d.jsxs("div", {
                  className: "help",
                  children: [
                    d.jsxs("div", {
                      className: "helpimg",
                      children: [
                        d.jsx("img", { src: ak, alt: "" }),
                        d.jsx("h2", { children: "Managing your account" }),
                      ],
                    }),
                    d.jsx("p", { children: "Reseting Password" }),
                    d.jsx("p", { children: "Managing payment methods" }),
                    d.jsx("p", { children: "updating profile" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "help",
                  children: [
                    d.jsxs("div", {
                      className: "helpimg",
                      children: [
                        d.jsx("img", { src: lk, alt: "" }),
                        d.jsx("h2", { children: "Managing your Orders" }),
                      ],
                    }),
                    d.jsx("p", { children: "canceling Order" }),
                    d.jsx("p", { children: "Tracking Order" }),
                    d.jsx("p", { children: "Viewing Order History" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "help",
                  children: [
                    d.jsxs("div", {
                      className: "helpimg",
                      children: [
                        d.jsx("img", { src: ck, alt: "" }),
                        d.jsx("h2", { children: "Returns & Exchange" }),
                      ],
                    }),
                    d.jsx("p", { children: "Returning an item" }),
                    d.jsx("p", { children: "Returning a Damaged item" }),
                    d.jsx("p", { children: "viewing returned items" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "help",
                  children: [
                    d.jsxs("div", {
                      className: "helpimg",
                      children: [
                        d.jsx("img", { src: uk, alt: "" }),
                        d.jsx("h2", { children: "Membership & more" }),
                      ],
                    }),
                    d.jsx("p", { children: "My Deals" }),
                    d.jsx("p", { children: "viewing membership" }),
                    d.jsx("p", { children: "updating profile" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsxs("section", {
          className: "bottomhelpwrapper",
          children: [
            d.jsxs("div", {
              className: "helptopics",
              children: [
                d.jsx("h1", { children: "Help Center Topics" }),
                d.jsxs("select", {
                  name: "ManagingAccount",
                  id: "manage",
                  children: [
                    d.jsx("option", {
                      value: "manage",
                      children: "Managing account",
                    }),
                    d.jsx("option", {
                      value: "manage",
                      children: "Manage account",
                    }),
                  ],
                }),
                d.jsxs("select", {
                  name: "topic",
                  id: "manage",
                  children: [
                    d.jsx("option", {
                      value: "manangingorders",
                      children: "Manage Orders",
                    }),
                    d.jsx("option", {
                      value: "manage",
                      children: "Manage Orders",
                    }),
                  ],
                }),
                d.jsxs("select", {
                  name: "Returns",
                  id: "manage",
                  children: [
                    d.jsx("option", {
                      value: "returns",
                      children: "Returns & Exchange",
                    }),
                    d.jsx("option", {
                      value: "returns",
                      children: "Returns & Exchannge",
                    }),
                  ],
                }),
                d.jsxs("select", {
                  name: "topic",
                  id: "manage",
                  children: [
                    d.jsx("option", {
                      value: "membership",
                      children: "Membership",
                    }),
                    d.jsx("option", {
                      value: "manage",
                      children: "Membership",
                    }),
                  ],
                }),
              ],
            }),
            d.jsxs("div", {
              className: "articles",
              children: [
                d.jsx("input", {
                  type: "text ",
                  placeholder: "Search In Help Center",
                }),
                d.jsx("h2", { children: "Recommended Articles" }),
                d.jsx("select", {
                  name: "trackingorders",
                  id: "track",
                  children: d.jsx("option", {
                    value: "Tracking",
                    children: "Tracking an Order",
                  }),
                }),
                d.jsx("select", {
                  name: "",
                  id: "",
                  children: d.jsx("option", {
                    value: "returns",
                    children: "Return an Item",
                  }),
                }),
                d.jsx("select", {
                  name: "returns",
                  id: "returns",
                  children: d.jsx("option", {
                    value: "returns",
                    children: "Multiple Shipments",
                  }),
                }),
                d.jsx("select", {
                  name: "",
                  id: "",
                  children: d.jsx("option", {
                    value: "returns",
                    children: "My Account",
                  }),
                }),
              ],
            }),
            d.jsxs("div", {
              className: "helpcontact",
              children: [
                d.jsx("h2", { children: "Need an Expert?" }),
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci veniam aperiam, molestias quidem id laborum incidunt dolores vitae eos alias in quam perspiciatis magni, eius maxime eum reiciendis? Exercitationem?",
                d.jsxs("div", {
                  className: "messagehelp",
                  children: [
                    d.jsxs("div", {
                      className: "icontext",
                      children: [
                        d.jsx("h1", { children: d.jsx(Mm, {}) }),
                        d.jsx("p", {
                          children: "Click to Chart With An Expert",
                        }),
                      ],
                    }),
                    d.jsx("p", { children: "Monday-Friday: 8Am-5Pm" }),
                    d.jsx("p", { children: "Sat: 8Am-1Pm" }),
                  ],
                }),
                d.jsxs("div", {
                  className: "messagehelp",
                  children: [
                    d.jsxs("div", {
                      className: "icontext",
                      children: [
                        d.jsx("h1", { children: d.jsx(Mm, {}) }),
                        d.jsx("p", { children: "Click to Call An Expert" }),
                      ],
                    }),
                    d.jsx("p", { children: "Monday-Friday: 8Am-5Pm" }),
                    d.jsx("p", { children: "Sat: 8Am-1Pm" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function hk() {
    return d.jsx("div", { children: d.jsx(fk, {}) });
  }
  function pk(e) {
    return ut({
      tag: "svg",
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function mk(e) {
    return ut({
      tag: "svg",
      attr: { role: "img", viewBox: "0 0 24 24" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function gk() {
    return d.jsxs("section", {
      className: "footer",
      children: [
        d.jsxs("div", {
          className: "newsletter",
          children: [
            d.jsxs("div", {
              children: [
                d.jsx("h1", { children: "Sign Up For Newsletters" }),
                d.jsx("div", {
                  className: "newsletteroffer",
                  children: d.jsxs("p", {
                    className: "p1",
                    children: [
                      "Get E-mail updates about our latest news and",
                      " ",
                      d.jsx("p", {
                        className: "p2",
                        children: " special offers.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            d.jsxs("div", {
              className: "newsletteremail",
              children: [
                d.jsx("input", {
                  type: "text",
                  placeholder: "Your Email Address",
                }),
                d.jsx("button", { children: "Sign Up" }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "bottomfooter",
          children: d.jsxs("div", {
            className: "columns",
            children: [
              d.jsxs("div", {
                className: "about",
                children: [
                  d.jsx("h1", { children: "About JosTech" }),
                  d.jsxs("div", {
                    className: "info",
                    children: [
                      d.jsxs("p", { children: [d.jsx(E2, {}), " "] }),
                      " ",
                      d.jsx("p", {
                        children: "Nairobi,Moi Avenue,Festive Mall,SE",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "info",
                    children: [
                      d.jsxs("p", { children: [d.jsx(pk, {}), " "] }),
                      " ",
                      d.jsx(W, {
                        to: "https://github.com/Joseh254",
                        children: "JosTech@info.co.ke",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "info",
                    children: [
                      d.jsx("p", { children: d.jsx(mk, {}) }),
                      " +254768163608",
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "quicklinks",
                children: [
                  d.jsx("h1", { children: "Quick Links" }),
                  d.jsxs("div", {
                    className: "links",
                    children: [
                      d.jsx(W, { to: "/", children: "Home" }),
                      d.jsx(W, { to: "/About", children: "About" }),
                      d.jsx(W, {
                        to: "/FeaturedProducts",
                        children: "Featured Products",
                      }),
                      d.jsx(W, { to: "/Contact", children: "Get In Tourch" }),
                    ],
                  }),
                ],
              }),
              d.jsx("div", {
                className: "usefullinks",
                children: d.jsxs("div", {
                  children: [
                    d.jsx("p", { children: "Laptops" }),
                    d.jsx("p", { children: "Motherboards" }),
                    d.jsx("p", { children: "Desktops" }),
                    d.jsx("p", { children: "Batteries" }),
                    d.jsx("p", { children: "Lcd Cables" }),
                    d.jsx("p", { children: "Track pads" }),
                    d.jsx("p", { children: "Keyboards" }),
                    d.jsx("p", { children: "Mouse" }),
                  ],
                }),
              }),
              d.jsx("div", {
                className: "usefullinks",
                children: d.jsxs("div", {
                  children: [
                    d.jsx("p", { children: "Printers" }),
                    d.jsx("p", { children: "Hardisk" }),
                    d.jsx("p", { children: "SSD" }),
                    d.jsx("p", { children: "SCreens" }),
                    d.jsx("p", { children: "Casing" }),
                    d.jsx("p", { children: "Wifi-cards" }),
                    d.jsx("p", { children: "Charger" }),
                    d.jsx("p", { children: "HDD conectors" }),
                  ],
                }),
              }),
            ],
          }),
        }),
        d.jsx("div", {
          class: "marquee",
          children: d.jsx("h2", {
            children: " ©JosTech Computers All Rights Reserved",
          }),
        }),
      ],
    });
  }
  function yk() {
    return d.jsx("div", { children: "Hotdeals" });
  }
  const Nm = "/assets/contactus-D3HjWH0Q.jpeg";
  function vk(e) {
    return ut({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",
          },
          child: [],
        },
        {
          tag: "path",
          attr: { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" },
          child: [],
        },
      ],
    })(e);
  }
  const xk =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAxlBMVEVjQIb/////3c759vb/y77dY25iPoX6+fleO4WDXpD6y73/49Hq5uv68/GQbpf/0MC8sMdcNIF4XJT+39PcXGj518veanTbVmPoo6jtub7ww8bnm6JxUIz26erkipLvycz/1cjhfofi3eitn77qrrLz3N786+Wkk7aNd6VrSoxVKXzNxNfUzNnzxLuah69OHnjaTVuCbJ3VtLmsgp61jKGLZZK/labfc3yaeJvjwb/tzMbpubbEorCtjaXXrbFTNIXEqr9DE3mdjMpjAAAMKklEQVR4nM2cCXPiOhKADSSSiCEgyPliCEdCsIGQY0jIMcPu//9TK/mQZakl24zJ266pmgIT9NHd6m6dTq2ktGejUb0/a4cvGq3Jsjt9nPc833cc3/d688dpdzlpNcp+bUackp+fHR0d1bn024vpvOfTIKCUIOQgh/1DiFD2DvF78+mi9VNQ/aMEql7fBgyGseiCOFywRo+LyQ9AcT0ddWKo+inJshAuMhsN/OfuHgorBdU+ykB9EllP1NlsX7dNSjM6I8G6V5qrFNR5CDVKoOqvKQAhv75OOp3R+ccpVUxKAn++PBRUoxsyHQkm90W4FG1+dWIlsncVszJ9lVOXGao9689mWLzEXc/rZKHqn34MRbxVRzxyXxzd/Qn1utjYVjEofB4bqR8HpK4f0I0Kde5FrSM/1FNiWPc7gLpk4HQLhi8Yqn2Seg6nWvQoccipCYq+Zp/0m6oB497YK+ZbIBTOuHN7Ml/zRsxQ61W2B7jfFIJiX7GeF4lcINR5BqrvRU0YoYjqbO4H4FVxj0DTfNeCoGbZjl//zkB1NCj6pj4QPQByrXwbQlB95XefR02YoJDzR9GgDYp9T66yICglHNXdKJ+YoEhT/QM7lOMEc3vQMkOl9nNfAhsU/dVR7O2+gL1P8iyy2A9Kbjz84Sao9VdHUZT729D7Us+i07+FqoeNGKCQd6J+vN/L0RT390dzJDU7uuxUL7weMEDFkVO23gcU0TUT9oxUEFRbdap63UuhRlkohP6Ut15E5ZkCKQSFR6r9wmYMUN5KtV69Z+17KZVv6IRgRJ/pfZwVSTAUZD24SNaF+HAcBaEGGhRPsTDUzmY9VqsTYiE06AqCmuxWqlO53wYo5Gt9z01qBESd5unpxqPmvkh8yK8AqIYX/FJTr8vqcRCKbrVO8RlEuiG7169Vp3P09cfbmXXlAX1Qh2r0KNITh7shIBT51q0XIdBNVI1yPb7tjDaEIoMO9UhFis1kjgCCIv5Kxa9vQmvRpmAaCVCQ6jEf6oEHPrWU5AA+BaD09+pRLUU3J4mawt+0NYeuQMs4KtQi/GPka1D17Q6ACnTrhdVXqqf4459mAyKqZmcFqhV34OCPmlLcFwiKaNYL+16qp+TTNlUh0rJB4ee495Ktbj/Ap/yocdl656zvpXqSfpMl9dA5tkBNk0yKvC/N1bcbHepNC+dseJXqSYI1l+26W2WglmmUo9969tChYnTZeqckjQXy+x/WYpQsTVBYKoNIc6TZ77fq1OdaMcMK4V2ip0yOrr9YEyLJxFAZaiqXQYGWauovJ0qHPAf6XgDpyTIUhAwoQU0yv0UfN9XPR51RpiV1FoZbr3kCMSWDD6MgNAGh5pnfQjbQd6vS6WSN1G+ulFgQMyUJ0Sh0DkEt1wq65sQF5EOJmUI2uVX7eqFDNdRiP041HbBxs+pAJlvoFKZJM7OA6qp/BqWaAjJiFlXV5P4uNJLoqlDY1/Qbpxq1hfJSRE+hFrAC1dV/y372A+T3GuVIrIVuFqrhATOCzZMi9uvniPvg9XLEI+HkLUoiaAy1ABSMHC3/6USzdruRI628DzRay6nDsZIaJoYCx9m7tzxXn+W2V0xwDU9Z0UR6MtRk7fBVFWU4RLSZ1wMxcSzMjbWeSFBzSv1wvcCRzYhox2q/XMOVEuZCiMxTqJYf/P6su657/rFdS8qiX7b+V6GeQsGPFEWD0xCq63+6UUOu++GlyqJWp6qYqYFbDoqiQgj1nDBxrM9TkTtJPKgBVdWvGqrBRneRq3Oo1ocrt+Z++zTx9BNzqVCtR3HBy8BZt2Koe6U597MZKQvFQ03Q1auHakyCKKozKPyptcnqRB64EPmCKtvIegeAarFQ9RxBtU9083B/RyInR2BK8j8IFAr7H4O6XwHmcetbRhXPRqcyOiQUZlBOsAih/rMCncZ9IYRuFSjJkofRVDjfwaDCYgCi+tyumxqUwDqQphDiUC26MnQwt/5GOkfClVK+0QE1xYOCU1v8VxsMS/6eeXc0kpR1IE1xp3LYENSz592MjBIqKSRg5buNjWZfxSK9FULRKYOak6SPFavGYyyhKdwYyF+cvMSp1KLneCARYDyIJXmcaIpVCk6jhxB5K0/ViaHw/fvFldQYe3nD/78ev48jeR+HmO3hxTjFHwwvYhlfiXdDKNRrOC2fefzudVVmkBBSJVDvZ8dP96IxPGQvbzG+vzwWcjZmD2p3T8eXV7X4Y7XrJ/H48uwusmykKRY+nUlYs1Pvq8woT4biX3ubqmrMXl5j/M9ZCnV8MWAYN2fHZ0MBdSVBH1/eyJoiE2cZja0I+nVUYphXDOoykqerBgh1dvn09HQZfvCuJjTlBEsnGfAhurHWmRpVPtTFdSThUwBqeM/kdhjqNHSAGKrrTEWhSf3vEiYcFYBiFYjo9ToUexU+veZK430l1hSdOo9p9Yt221VhE/YLQDUkgaDiUMGfjIVPseznzOURH/W0qWqjVAd1yw3YFpoicye7YEjo60lBZVUIxcNGW2gK9RxlEgHtNgWDQwZKzHdhGUrOIxaoa/7ZVFPIc3x1sE6Ct0LKkqDObu6EXEhQcSKxQ+EB/4Zh6lM6UhgcTiMqbfLLBMUijpBjKU7FiSSM42Dv43I/Zh89+yftfQiC4nv+vsEpXiNUVtSIHmYhIE5dDIfD8QWPnmdjLGnKIIj5u3EcA0GdCYGgbmGo4/jz7P/7LJRhdWKXJEMjluxT46GQCy3NRL5jyX2X7/dSQubmgw3I/N0RIxnYtbIhQZRscu+7j6RhggpVe3l5k9QuwtGBecXYhEESHKwjZFuckmtLAOr97urq7u52kFR5aUiw7LYg/h8LVQXBsyYHsoYUPOeWpQCRDCHPqiyiC0nTzKN1jjve6QrpqnqoNCFP7RPvJIiLP42quE/JpUv82qYpVroAs/pZEyYLnaoBC0DFvW+Q9L7j8SDqjlZNsSJvmbtsQpwvKBcWKYefIrmOgyeLo6EMsU1TrByeqDu1Aaom5OslBg7vgwQqyTsWTfGBQ8u++zGi0rYjSVDwEOtWHmKFUHdPMhQbYl3egJriQ6xGgW1hwNafFMowGL25SOU2HowmcsfGx8Pj9zasKTYYrdkClbCftieinjtsHwhpJ8N26TXODOJlTfFhey0nJkhQHRDKNMEhTSY0su+AfyU0FU5wLPJXLcFFtoNOBbXW/y9Q0qRZLX+v4U9qKpperNmz309rKp6IzXeqn9RUPGWdHz5/UFPJ5H7tOS9S/aCmkmUQaPn/39KUWDDKDwoQ1EEWjGi6tAavtf8L5luu00XIXPuBUFUvIbNCohtIy7V5/Q+Eqn65FntEWthW9nMVg6rcfnhBqbQFQN3QVQyqYlfHzF6ZzRI5rm7YilOpAXHjmWa3lehbuopAMV0ZF4fKSm3So+oGHGirUj5UvZ/tglgv7EyPFWlNfaptVbJHBdtOqv4slUU3laWO1TXJdE75ngN1U1cNW8+ZFdve5W4CmkjwUFP1NKVGiQ6gadvfrF5VFEraYEpVKDzJy7D6RkF9S2W1UNj2/VEjwJZKW6yqACq/vl2nG62N23Srhcovb+FtusqG5mqhWtaQ45g3NGe3flcKVXvOM55p67fZ1/8WqtbNLSN72AAlHyeoEgov80eWxuME8UmeSqDIXEDhmlfKeNoRFbgH7gGFPLERFj/kMdFn2xEVcZjnr6F4fE6iQd5cYc5hHngT8V5QKOiysoD9W+YdJHDyjj3BbrUPFA+Hi1Zr8pA7f5J/QAyc79gPyiEBk9zZkyJH6fihw4qgHMd21ClhKnTokFWhKtX+UPlMxY5nsiSonnc4HFThg6x8cJrV1cGgShz5Zfkmq6tDQZU6HK3q6kBQ5Y6RM5nI3n4YqHIH7kORI8NBoEpeTRBTPYrYfgiospc4JPKQZNLqocpfdyFkQehhoEj5i0FSac2DQ0Dtc4WKJHjKLwSrFoqQhz0um8nIshegKqH2vZZHVRai1UHtfYGRKpNnryKov7nqSRW8rAQK0Z6105WDYlizv4ZCgV/0VrPCt7/hPnCSpThUFRetgViz/p5QiKy9opeslYRi0rZiGaAOenlfhGVRFzRwIMG6/PWLZaFqFjOqUD9zIaSQ9mxmg4qvzqQ/c3WmLJhZst9XoP6VS0ZVabeZ0hI4d1vRdaz/A/1VpJbmHdeeAAAAAElFTkSuQmCC";
  function bk(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 24 24" },
      child: [
        { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
        {
          tag: "path",
          attr: {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
          },
          child: [],
        },
      ],
    })(e);
  }
  function _k(e) {
    return ut({
      tag: "svg",
      attr: { viewBox: "0 0 512 512" },
      child: [
        {
          tag: "path",
          attr: {
            d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z",
          },
          child: [],
        },
      ],
    })(e);
  }
  var wk = function (t) {
    return Sk(t) && !Ak(t);
  };
  function Sk(e) {
    return !!e && typeof e == "object";
  }
  function Ak(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || Ck(e);
  }
  var Ek = typeof Symbol == "function" && Symbol.for,
    kk = Ek ? Symbol.for("react.element") : 60103;
  function Ck(e) {
    return e.$$typeof === kk;
  }
  function jk(e) {
    return Array.isArray(e) ? [] : {};
  }
  function jl(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? co(jk(e), e, t) : e;
  }
  function Pk(e, t, n) {
    return e.concat(t).map(function (r) {
      return jl(r, n);
    });
  }
  function Tk(e, t, n) {
    var r = {};
    return (
      n.isMergeableObject(e) &&
        Object.keys(e).forEach(function (i) {
          r[i] = jl(e[i], n);
        }),
      Object.keys(t).forEach(function (i) {
        !n.isMergeableObject(t[i]) || !e[i]
          ? (r[i] = jl(t[i], n))
          : (r[i] = co(e[i], t[i], n));
      }),
      r
    );
  }
  function co(e, t, n) {
    (n = n || {}),
      (n.arrayMerge = n.arrayMerge || Pk),
      (n.isMergeableObject = n.isMergeableObject || wk);
    var r = Array.isArray(t),
      i = Array.isArray(e),
      s = r === i;
    return s ? (r ? n.arrayMerge(e, t, n) : Tk(e, t, n)) : jl(t, n);
  }
  co.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (r, i) {
      return co(r, i, n);
    }, {});
  };
  var Hd = co,
    K1 =
      typeof global == "object" && global && global.Object === Object && global,
    Ok = typeof self == "object" && self && self.Object === Object && self,
    hn = K1 || Ok || Function("return this")(),
    ur = hn.Symbol,
    X1 = Object.prototype,
    Mk = X1.hasOwnProperty,
    Nk = X1.toString,
    os = ur ? ur.toStringTag : void 0;
  function Rk(e) {
    var t = Mk.call(e, os),
      n = e[os];
    try {
      e[os] = void 0;
      var r = !0;
    } catch {}
    var i = Nk.call(e);
    return r && (t ? (e[os] = n) : delete e[os]), i;
  }
  var Lk = Object.prototype,
    Ik = Lk.toString;
  function Dk(e) {
    return Ik.call(e);
  }
  var Fk = "[object Null]",
    zk = "[object Undefined]",
    Rm = ur ? ur.toStringTag : void 0;
  function ei(e) {
    return e == null
      ? e === void 0
        ? zk
        : Fk
      : Rm && Rm in Object(e)
        ? Rk(e)
        : Dk(e);
  }
  function G1(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var gh = G1(Object.getPrototypeOf, Object);
  function ti(e) {
    return e != null && typeof e == "object";
  }
  var Bk = "[object Object]",
    Uk = Function.prototype,
    Vk = Object.prototype,
    J1 = Uk.toString,
    Hk = Vk.hasOwnProperty,
    Wk = J1.call(Object);
  function Lm(e) {
    if (!ti(e) || ei(e) != Bk) return !1;
    var t = gh(e);
    if (t === null) return !0;
    var n = Hk.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && J1.call(n) == Wk;
  }
  function $k() {
    (this.__data__ = []), (this.size = 0);
  }
  function Z1(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function hc(e, t) {
    for (var n = e.length; n--; ) if (Z1(e[n][0], t)) return n;
    return -1;
  }
  var qk = Array.prototype,
    Yk = qk.splice;
  function Qk(e) {
    var t = this.__data__,
      n = hc(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Yk.call(t, n, 1), --this.size, !0;
  }
  function Kk(e) {
    var t = this.__data__,
      n = hc(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function Xk(e) {
    return hc(this.__data__, e) > -1;
  }
  function Gk(e, t) {
    var n = this.__data__,
      r = hc(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function Rn(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Rn.prototype.clear = $k;
  Rn.prototype.delete = Qk;
  Rn.prototype.get = Kk;
  Rn.prototype.has = Xk;
  Rn.prototype.set = Gk;
  function Jk() {
    (this.__data__ = new Rn()), (this.size = 0);
  }
  function Zk(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function eC(e) {
    return this.__data__.get(e);
  }
  function tC(e) {
    return this.__data__.has(e);
  }
  function Oo(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var nC = "[object AsyncFunction]",
    rC = "[object Function]",
    iC = "[object GeneratorFunction]",
    sC = "[object Proxy]";
  function ex(e) {
    if (!Oo(e)) return !1;
    var t = ei(e);
    return t == rC || t == iC || t == nC || t == sC;
  }
  var bu = hn["__core-js_shared__"],
    Im = (function () {
      var e = /[^.]+$/.exec((bu && bu.keys && bu.keys.IE_PROTO) || "");
      return e ? "Symbol(src)_1." + e : "";
    })();
  function oC(e) {
    return !!Im && Im in e;
  }
  var aC = Function.prototype,
    lC = aC.toString;
  function ni(e) {
    if (e != null) {
      try {
        return lC.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var cC = /[\\^$.*+?()[\]{}|]/g,
    uC = /^\[object .+?Constructor\]$/,
    dC = Function.prototype,
    fC = Object.prototype,
    hC = dC.toString,
    pC = fC.hasOwnProperty,
    mC = RegExp(
      "^" +
        hC
          .call(pC)
          .replace(cC, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function gC(e) {
    if (!Oo(e) || oC(e)) return !1;
    var t = ex(e) ? mC : uC;
    return t.test(ni(e));
  }
  function yC(e, t) {
    return e == null ? void 0 : e[t];
  }
  function ri(e, t) {
    var n = yC(e, t);
    return gC(n) ? n : void 0;
  }
  var uo = ri(hn, "Map"),
    fo = ri(Object, "create");
  function vC() {
    (this.__data__ = fo ? fo(null) : {}), (this.size = 0);
  }
  function xC(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var bC = "__lodash_hash_undefined__",
    _C = Object.prototype,
    wC = _C.hasOwnProperty;
  function SC(e) {
    var t = this.__data__;
    if (fo) {
      var n = t[e];
      return n === bC ? void 0 : n;
    }
    return wC.call(t, e) ? t[e] : void 0;
  }
  var AC = Object.prototype,
    EC = AC.hasOwnProperty;
  function kC(e) {
    var t = this.__data__;
    return fo ? t[e] !== void 0 : EC.call(t, e);
  }
  var CC = "__lodash_hash_undefined__";
  function jC(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = fo && t === void 0 ? CC : t),
      this
    );
  }
  function Kr(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Kr.prototype.clear = vC;
  Kr.prototype.delete = xC;
  Kr.prototype.get = SC;
  Kr.prototype.has = kC;
  Kr.prototype.set = jC;
  function PC() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Kr(),
        map: new (uo || Rn)(),
        string: new Kr(),
      });
  }
  function TC(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function pc(e, t) {
    var n = e.__data__;
    return TC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function OC(e) {
    var t = pc(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function MC(e) {
    return pc(this, e).get(e);
  }
  function NC(e) {
    return pc(this, e).has(e);
  }
  function RC(e, t) {
    var n = pc(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function vr(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  vr.prototype.clear = PC;
  vr.prototype.delete = OC;
  vr.prototype.get = MC;
  vr.prototype.has = NC;
  vr.prototype.set = RC;
  var LC = 200;
  function IC(e, t) {
    var n = this.__data__;
    if (n instanceof Rn) {
      var r = n.__data__;
      if (!uo || r.length < LC - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new vr(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  function Qi(e) {
    var t = (this.__data__ = new Rn(e));
    this.size = t.size;
  }
  Qi.prototype.clear = Jk;
  Qi.prototype.delete = Zk;
  Qi.prototype.get = eC;
  Qi.prototype.has = tC;
  Qi.prototype.set = IC;
  function DC(e, t) {
    for (
      var n = -1, r = e == null ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  var Dm = (function () {
    try {
      var e = ri(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  function tx(e, t, n) {
    t == "__proto__" && Dm
      ? Dm(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var FC = Object.prototype,
    zC = FC.hasOwnProperty;
  function nx(e, t, n) {
    var r = e[t];
    (!(zC.call(e, t) && Z1(r, n)) || (n === void 0 && !(t in e))) &&
      tx(e, t, n);
  }
  function mc(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var s = -1, o = t.length; ++s < o; ) {
      var a = t[s],
        l = void 0;
      l === void 0 && (l = e[a]), i ? tx(n, a, l) : nx(n, a, l);
    }
    return n;
  }
  function BC(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var UC = "[object Arguments]";
  function Fm(e) {
    return ti(e) && ei(e) == UC;
  }
  var rx = Object.prototype,
    VC = rx.hasOwnProperty,
    HC = rx.propertyIsEnumerable,
    WC = Fm(
      (function () {
        return arguments;
      })(),
    )
      ? Fm
      : function (e) {
          return ti(e) && VC.call(e, "callee") && !HC.call(e, "callee");
        },
    Mo = Array.isArray;
  function $C() {
    return !1;
  }
  var ix = typeof kt == "object" && kt && !kt.nodeType && kt,
    zm = ix && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    qC = zm && zm.exports === ix,
    Bm = qC ? hn.Buffer : void 0,
    YC = Bm ? Bm.isBuffer : void 0,
    sx = YC || $C,
    QC = 9007199254740991,
    KC = /^(?:0|[1-9]\d*)$/;
  function XC(e, t) {
    var n = typeof e;
    return (
      (t = t ?? QC),
      !!t &&
        (n == "number" || (n != "symbol" && KC.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var GC = 9007199254740991;
  function ox(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= GC;
  }
  var JC = "[object Arguments]",
    ZC = "[object Array]",
    ej = "[object Boolean]",
    tj = "[object Date]",
    nj = "[object Error]",
    rj = "[object Function]",
    ij = "[object Map]",
    sj = "[object Number]",
    oj = "[object Object]",
    aj = "[object RegExp]",
    lj = "[object Set]",
    cj = "[object String]",
    uj = "[object WeakMap]",
    dj = "[object ArrayBuffer]",
    fj = "[object DataView]",
    hj = "[object Float32Array]",
    pj = "[object Float64Array]",
    mj = "[object Int8Array]",
    gj = "[object Int16Array]",
    yj = "[object Int32Array]",
    vj = "[object Uint8Array]",
    xj = "[object Uint8ClampedArray]",
    bj = "[object Uint16Array]",
    _j = "[object Uint32Array]",
    _e = {};
  _e[hj] =
    _e[pj] =
    _e[mj] =
    _e[gj] =
    _e[yj] =
    _e[vj] =
    _e[xj] =
    _e[bj] =
    _e[_j] =
      !0;
  _e[JC] =
    _e[ZC] =
    _e[dj] =
    _e[ej] =
    _e[fj] =
    _e[tj] =
    _e[nj] =
    _e[rj] =
    _e[ij] =
    _e[sj] =
    _e[oj] =
    _e[aj] =
    _e[lj] =
    _e[cj] =
    _e[uj] =
      !1;
  function wj(e) {
    return ti(e) && ox(e.length) && !!_e[ei(e)];
  }
  function yh(e) {
    return function (t) {
      return e(t);
    };
  }
  var ax = typeof kt == "object" && kt && !kt.nodeType && kt,
    Ms = ax && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    Sj = Ms && Ms.exports === ax,
    _u = Sj && K1.process,
    Ii = (function () {
      try {
        var e = Ms && Ms.require && Ms.require("util").types;
        return e || (_u && _u.binding && _u.binding("util"));
      } catch {}
    })(),
    Um = Ii && Ii.isTypedArray,
    Aj = Um ? yh(Um) : wj,
    Ej = Object.prototype,
    kj = Ej.hasOwnProperty;
  function lx(e, t) {
    var n = Mo(e),
      r = !n && WC(e),
      i = !n && !r && sx(e),
      s = !n && !r && !i && Aj(e),
      o = n || r || i || s,
      a = o ? BC(e.length, String) : [],
      l = a.length;
    for (var c in e)
      (t || kj.call(e, c)) &&
        !(
          o &&
          (c == "length" ||
            (i && (c == "offset" || c == "parent")) ||
            (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            XC(c, l))
        ) &&
        a.push(c);
    return a;
  }
  var Cj = Object.prototype;
  function vh(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || Cj;
    return e === n;
  }
  var jj = G1(Object.keys, Object),
    Pj = Object.prototype,
    Tj = Pj.hasOwnProperty;
  function Oj(e) {
    if (!vh(e)) return jj(e);
    var t = [];
    for (var n in Object(e)) Tj.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function cx(e) {
    return e != null && ox(e.length) && !ex(e);
  }
  function xh(e) {
    return cx(e) ? lx(e) : Oj(e);
  }
  function Mj(e, t) {
    return e && mc(t, xh(t), e);
  }
  function Nj(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var Rj = Object.prototype,
    Lj = Rj.hasOwnProperty;
  function Ij(e) {
    if (!Oo(e)) return Nj(e);
    var t = vh(e),
      n = [];
    for (var r in e) (r == "constructor" && (t || !Lj.call(e, r))) || n.push(r);
    return n;
  }
  function bh(e) {
    return cx(e) ? lx(e, !0) : Ij(e);
  }
  function Dj(e, t) {
    return e && mc(t, bh(t), e);
  }
  var ux = typeof kt == "object" && kt && !kt.nodeType && kt,
    Vm = ux && typeof Ct == "object" && Ct && !Ct.nodeType && Ct,
    Fj = Vm && Vm.exports === ux,
    Hm = Fj ? hn.Buffer : void 0,
    Wm = Hm ? Hm.allocUnsafe : void 0;
  function zj(e, t) {
    if (t) return e.slice();
    var n = e.length,
      r = Wm ? Wm(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function dx(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  }
  function Bj(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
      var o = e[n];
      t(o, n, e) && (s[i++] = o);
    }
    return s;
  }
  function fx() {
    return [];
  }
  var Uj = Object.prototype,
    Vj = Uj.propertyIsEnumerable,
    $m = Object.getOwnPropertySymbols,
    _h = $m
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              Bj($m(e), function (t) {
                return Vj.call(e, t);
              }));
        }
      : fx;
  function Hj(e, t) {
    return mc(e, _h(e), t);
  }
  function hx(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
    return e;
  }
  var Wj = Object.getOwnPropertySymbols,
    px = Wj
      ? function (e) {
          for (var t = []; e; ) hx(t, _h(e)), (e = gh(e));
          return t;
        }
      : fx;
  function $j(e, t) {
    return mc(e, px(e), t);
  }
  function mx(e, t, n) {
    var r = t(e);
    return Mo(e) ? r : hx(r, n(e));
  }
  function qj(e) {
    return mx(e, xh, _h);
  }
  function Yj(e) {
    return mx(e, bh, px);
  }
  var Wd = ri(hn, "DataView"),
    $d = ri(hn, "Promise"),
    qd = ri(hn, "Set"),
    Yd = ri(hn, "WeakMap"),
    qm = "[object Map]",
    Qj = "[object Object]",
    Ym = "[object Promise]",
    Qm = "[object Set]",
    Km = "[object WeakMap]",
    Xm = "[object DataView]",
    Kj = ni(Wd),
    Xj = ni(uo),
    Gj = ni($d),
    Jj = ni(qd),
    Zj = ni(Yd),
    _n = ei;
  ((Wd && _n(new Wd(new ArrayBuffer(1))) != Xm) ||
    (uo && _n(new uo()) != qm) ||
    ($d && _n($d.resolve()) != Ym) ||
    (qd && _n(new qd()) != Qm) ||
    (Yd && _n(new Yd()) != Km)) &&
    (_n = function (e) {
      var t = ei(e),
        n = t == Qj ? e.constructor : void 0,
        r = n ? ni(n) : "";
      if (r)
        switch (r) {
          case Kj:
            return Xm;
          case Xj:
            return qm;
          case Gj:
            return Ym;
          case Jj:
            return Qm;
          case Zj:
            return Km;
        }
      return t;
    });
  var eP = Object.prototype,
    tP = eP.hasOwnProperty;
  function nP(e) {
    var t = e.length,
      n = new e.constructor(t);
    return (
      t &&
        typeof e[0] == "string" &&
        tP.call(e, "index") &&
        ((n.index = e.index), (n.input = e.input)),
      n
    );
  }
  var Gm = hn.Uint8Array;
  function wh(e) {
    var t = new e.constructor(e.byteLength);
    return new Gm(t).set(new Gm(e)), t;
  }
  function rP(e, t) {
    var n = t ? wh(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var iP = /\w*$/;
  function sP(e) {
    var t = new e.constructor(e.source, iP.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var Jm = ur ? ur.prototype : void 0,
    Zm = Jm ? Jm.valueOf : void 0;
  function oP(e) {
    return Zm ? Object(Zm.call(e)) : {};
  }
  function aP(e, t) {
    var n = t ? wh(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var lP = "[object Boolean]",
    cP = "[object Date]",
    uP = "[object Map]",
    dP = "[object Number]",
    fP = "[object RegExp]",
    hP = "[object Set]",
    pP = "[object String]",
    mP = "[object Symbol]",
    gP = "[object ArrayBuffer]",
    yP = "[object DataView]",
    vP = "[object Float32Array]",
    xP = "[object Float64Array]",
    bP = "[object Int8Array]",
    _P = "[object Int16Array]",
    wP = "[object Int32Array]",
    SP = "[object Uint8Array]",
    AP = "[object Uint8ClampedArray]",
    EP = "[object Uint16Array]",
    kP = "[object Uint32Array]";
  function CP(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case gP:
        return wh(e);
      case lP:
      case cP:
        return new r(+e);
      case yP:
        return rP(e, n);
      case vP:
      case xP:
      case bP:
      case _P:
      case wP:
      case SP:
      case AP:
      case EP:
      case kP:
        return aP(e, n);
      case uP:
        return new r();
      case dP:
      case pP:
        return new r(e);
      case fP:
        return sP(e);
      case hP:
        return new r();
      case mP:
        return oP(e);
    }
  }
  var eg = Object.create,
    jP = (function () {
      function e() {}
      return function (t) {
        if (!Oo(t)) return {};
        if (eg) return eg(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })();
  function PP(e) {
    return typeof e.constructor == "function" && !vh(e) ? jP(gh(e)) : {};
  }
  var TP = "[object Map]";
  function OP(e) {
    return ti(e) && _n(e) == TP;
  }
  var tg = Ii && Ii.isMap,
    MP = tg ? yh(tg) : OP,
    NP = "[object Set]";
  function RP(e) {
    return ti(e) && _n(e) == NP;
  }
  var ng = Ii && Ii.isSet,
    LP = ng ? yh(ng) : RP,
    IP = 1,
    DP = 2,
    FP = 4,
    gx = "[object Arguments]",
    zP = "[object Array]",
    BP = "[object Boolean]",
    UP = "[object Date]",
    VP = "[object Error]",
    yx = "[object Function]",
    HP = "[object GeneratorFunction]",
    WP = "[object Map]",
    $P = "[object Number]",
    vx = "[object Object]",
    qP = "[object RegExp]",
    YP = "[object Set]",
    QP = "[object String]",
    KP = "[object Symbol]",
    XP = "[object WeakMap]",
    GP = "[object ArrayBuffer]",
    JP = "[object DataView]",
    ZP = "[object Float32Array]",
    eT = "[object Float64Array]",
    tT = "[object Int8Array]",
    nT = "[object Int16Array]",
    rT = "[object Int32Array]",
    iT = "[object Uint8Array]",
    sT = "[object Uint8ClampedArray]",
    oT = "[object Uint16Array]",
    aT = "[object Uint32Array]",
    ye = {};
  ye[gx] =
    ye[zP] =
    ye[GP] =
    ye[JP] =
    ye[BP] =
    ye[UP] =
    ye[ZP] =
    ye[eT] =
    ye[tT] =
    ye[nT] =
    ye[rT] =
    ye[WP] =
    ye[$P] =
    ye[vx] =
    ye[qP] =
    ye[YP] =
    ye[QP] =
    ye[KP] =
    ye[iT] =
    ye[sT] =
    ye[oT] =
    ye[aT] =
      !0;
  ye[VP] = ye[yx] = ye[XP] = !1;
  function Ns(e, t, n, r, i, s) {
    var o,
      a = t & IP,
      l = t & DP,
      c = t & FP;
    if (o !== void 0) return o;
    if (!Oo(e)) return e;
    var u = Mo(e);
    if (u) {
      if (((o = nP(e)), !a)) return dx(e, o);
    } else {
      var f = _n(e),
        h = f == yx || f == HP;
      if (sx(e)) return zj(e, a);
      if (f == vx || f == gx || (h && !i)) {
        if (((o = l || h ? {} : PP(e)), !a))
          return l ? $j(e, Dj(o, e)) : Hj(e, Mj(o, e));
      } else {
        if (!ye[f]) return i ? e : {};
        o = CP(e, f, a);
      }
    }
    s || (s = new Qi());
    var m = s.get(e);
    if (m) return m;
    s.set(e, o),
      LP(e)
        ? e.forEach(function (b) {
            o.add(Ns(b, t, n, b, e, s));
          })
        : MP(e) &&
          e.forEach(function (b, y) {
            o.set(y, Ns(b, t, n, y, e, s));
          });
    var g = c ? (l ? Yj : qj) : l ? bh : xh,
      v = u ? void 0 : g(e);
    return (
      DC(v || e, function (b, y) {
        v && ((y = b), (b = e[y])), nx(o, y, Ns(b, t, n, y, e, s));
      }),
      o
    );
  }
  var lT = 1,
    cT = 4;
  function ra(e) {
    return Ns(e, lT | cT);
  }
  var rg = Array.isArray,
    ig = Object.keys,
    uT = Object.prototype.hasOwnProperty,
    dT = typeof Element < "u";
  function Qd(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = rg(e),
        r = rg(t),
        i,
        s,
        o;
      if (n && r) {
        if (((s = e.length), s != t.length)) return !1;
        for (i = s; i-- !== 0; ) if (!Qd(e[i], t[i])) return !1;
        return !0;
      }
      if (n != r) return !1;
      var a = e instanceof Date,
        l = t instanceof Date;
      if (a != l) return !1;
      if (a && l) return e.getTime() == t.getTime();
      var c = e instanceof RegExp,
        u = t instanceof RegExp;
      if (c != u) return !1;
      if (c && u) return e.toString() == t.toString();
      var f = ig(e);
      if (((s = f.length), s !== ig(t).length)) return !1;
      for (i = s; i-- !== 0; ) if (!uT.call(t, f[i])) return !1;
      if (dT && e instanceof Element && t instanceof Element) return e === t;
      for (i = s; i-- !== 0; )
        if (((o = f[i]), !(o === "_owner" && e.$$typeof) && !Qd(e[o], t[o])))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var fT = function (t, n) {
    try {
      return Qd(t, n);
    } catch (r) {
      if (
        (r.message && r.message.match(/stack|recursion/i)) ||
        r.number === -2146828260
      )
        return (
          console.warn(
            "Warning: react-fast-compare does not handle circular references.",
            r.name,
            r.message,
          ),
          !1
        );
      throw r;
    }
  };
  const Pr = Fl(fT);
  var hT = 4;
  function sg(e) {
    return Ns(e, hT);
  }
  function xx(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var pT = "[object Symbol]";
  function Sh(e) {
    return typeof e == "symbol" || (ti(e) && ei(e) == pT);
  }
  var mT = "Expected a function";
  function Ah(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(mT);
    var n = function () {
      var r = arguments,
        i = t ? t.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(i)) return s.get(i);
      var o = e.apply(this, r);
      return (n.cache = s.set(i, o) || s), o;
    };
    return (n.cache = new (Ah.Cache || vr)()), n;
  }
  Ah.Cache = vr;
  var gT = 500;
  function yT(e) {
    var t = Ah(e, function (r) {
        return n.size === gT && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var vT =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    xT = /\\(\\)?/g,
    bT = yT(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(vT, function (n, r, i, s) {
          t.push(i ? s.replace(xT, "$1") : r || n);
        }),
        t
      );
    }),
    _T = 1 / 0;
  function wT(e) {
    if (typeof e == "string" || Sh(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -_T ? "-0" : t;
  }
  var ST = 1 / 0,
    og = ur ? ur.prototype : void 0,
    ag = og ? og.toString : void 0;
  function bx(e) {
    if (typeof e == "string") return e;
    if (Mo(e)) return xx(e, bx) + "";
    if (Sh(e)) return ag ? ag.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -ST ? "-0" : t;
  }
  function AT(e) {
    return e == null ? "" : bx(e);
  }
  function _x(e) {
    return Mo(e) ? xx(e, wT) : Sh(e) ? [e] : dx(bT(AT(e)));
  }
  var wx = { exports: {} },
    he = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Qe = typeof Symbol == "function" && Symbol.for,
    Eh = Qe ? Symbol.for("react.element") : 60103,
    kh = Qe ? Symbol.for("react.portal") : 60106,
    gc = Qe ? Symbol.for("react.fragment") : 60107,
    yc = Qe ? Symbol.for("react.strict_mode") : 60108,
    vc = Qe ? Symbol.for("react.profiler") : 60114,
    xc = Qe ? Symbol.for("react.provider") : 60109,
    bc = Qe ? Symbol.for("react.context") : 60110,
    Ch = Qe ? Symbol.for("react.async_mode") : 60111,
    _c = Qe ? Symbol.for("react.concurrent_mode") : 60111,
    wc = Qe ? Symbol.for("react.forward_ref") : 60112,
    Sc = Qe ? Symbol.for("react.suspense") : 60113,
    ET = Qe ? Symbol.for("react.suspense_list") : 60120,
    Ac = Qe ? Symbol.for("react.memo") : 60115,
    Ec = Qe ? Symbol.for("react.lazy") : 60116,
    kT = Qe ? Symbol.for("react.block") : 60121,
    CT = Qe ? Symbol.for("react.fundamental") : 60117,
    jT = Qe ? Symbol.for("react.responder") : 60118,
    PT = Qe ? Symbol.for("react.scope") : 60119;
  function Mt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Eh:
          switch (((e = e.type), e)) {
            case Ch:
            case _c:
            case gc:
            case vc:
            case yc:
            case Sc:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case bc:
                case wc:
                case Ec:
                case Ac:
                case xc:
                  return e;
                default:
                  return t;
              }
          }
        case kh:
          return t;
      }
    }
  }
  function Sx(e) {
    return Mt(e) === _c;
  }
  he.AsyncMode = Ch;
  he.ConcurrentMode = _c;
  he.ContextConsumer = bc;
  he.ContextProvider = xc;
  he.Element = Eh;
  he.ForwardRef = wc;
  he.Fragment = gc;
  he.Lazy = Ec;
  he.Memo = Ac;
  he.Portal = kh;
  he.Profiler = vc;
  he.StrictMode = yc;
  he.Suspense = Sc;
  he.isAsyncMode = function (e) {
    return Sx(e) || Mt(e) === Ch;
  };
  he.isConcurrentMode = Sx;
  he.isContextConsumer = function (e) {
    return Mt(e) === bc;
  };
  he.isContextProvider = function (e) {
    return Mt(e) === xc;
  };
  he.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Eh;
  };
  he.isForwardRef = function (e) {
    return Mt(e) === wc;
  };
  he.isFragment = function (e) {
    return Mt(e) === gc;
  };
  he.isLazy = function (e) {
    return Mt(e) === Ec;
  };
  he.isMemo = function (e) {
    return Mt(e) === Ac;
  };
  he.isPortal = function (e) {
    return Mt(e) === kh;
  };
  he.isProfiler = function (e) {
    return Mt(e) === vc;
  };
  he.isStrictMode = function (e) {
    return Mt(e) === yc;
  };
  he.isSuspense = function (e) {
    return Mt(e) === Sc;
  };
  he.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === gc ||
      e === _c ||
      e === vc ||
      e === yc ||
      e === Sc ||
      e === ET ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ec ||
          e.$$typeof === Ac ||
          e.$$typeof === xc ||
          e.$$typeof === bc ||
          e.$$typeof === wc ||
          e.$$typeof === CT ||
          e.$$typeof === jT ||
          e.$$typeof === PT ||
          e.$$typeof === kT))
    );
  };
  he.typeOf = Mt;
  wx.exports = he;
  var TT = wx.exports,
    Ax = TT,
    OT = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    MT = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Ex = {};
  Ex[Ax.ForwardRef] = OT;
  Ex[Ax.Memo] = MT;
  function We() {
    return (
      (We =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
      We.apply(this, arguments)
    );
  }
  function kx(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      s;
    for (s = 0; s < r.length; s++)
      (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  var kc = w.createContext(void 0);
  kc.displayName = "FormikContext";
  kc.Provider;
  kc.Consumer;
  function NT() {
    var e = w.useContext(kc);
    return e;
  }
  var Wt = function (t) {
      return typeof t == "function";
    },
    Cc = function (t) {
      return t !== null && typeof t == "object";
    },
    RT = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    wu = function (t) {
      return Object.prototype.toString.call(t) === "[object String]";
    },
    Su = function (t) {
      return Cc(t) && Wt(t.then);
    };
  function bt(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = _x(t); e && r < i.length; ) e = e[i[r++]];
    return (r !== i.length && !e) || e === void 0 ? n : e;
  }
  function Br(e, t, n) {
    for (var r = sg(e), i = r, s = 0, o = _x(t); s < o.length - 1; s++) {
      var a = o[s],
        l = bt(e, o.slice(0, s + 1));
      if (l && (Cc(l) || Array.isArray(l))) i = i[a] = sg(l);
      else {
        var c = o[s + 1];
        i = i[a] = RT(c) && Number(c) >= 0 ? [] : {};
      }
    }
    return (s === 0 ? e : i)[o[s]] === n
      ? e
      : (n === void 0 ? delete i[o[s]] : (i[o[s]] = n),
        s === 0 && n === void 0 && delete r[o[s]],
        r);
  }
  function Cx(e, t, n, r) {
    n === void 0 && (n = new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, s = Object.keys(e); i < s.length; i++) {
      var o = s[i],
        a = e[o];
      Cc(a)
        ? n.get(a) ||
          (n.set(a, !0), (r[o] = Array.isArray(a) ? [] : {}), Cx(a, t, n, r[o]))
        : (r[o] = t);
    }
    return r;
  }
  function LT(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return We({}, e, { values: t.payload });
      case "SET_TOUCHED":
        return We({}, e, { touched: t.payload });
      case "SET_ERRORS":
        return Pr(e.errors, t.payload) ? e : We({}, e, { errors: t.payload });
      case "SET_STATUS":
        return We({}, e, { status: t.payload });
      case "SET_ISSUBMITTING":
        return We({}, e, { isSubmitting: t.payload });
      case "SET_ISVALIDATING":
        return We({}, e, { isValidating: t.payload });
      case "SET_FIELD_VALUE":
        return We({}, e, {
          values: Br(e.values, t.payload.field, t.payload.value),
        });
      case "SET_FIELD_TOUCHED":
        return We({}, e, {
          touched: Br(e.touched, t.payload.field, t.payload.value),
        });
      case "SET_FIELD_ERROR":
        return We({}, e, {
          errors: Br(e.errors, t.payload.field, t.payload.value),
        });
      case "RESET_FORM":
        return We({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return We({}, e, {
          touched: Cx(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1,
        });
      case "SUBMIT_FAILURE":
        return We({}, e, { isSubmitting: !1 });
      case "SUBMIT_SUCCESS":
        return We({}, e, { isSubmitting: !1 });
      default:
        return e;
    }
  }
  var wr = {},
    ia = {};
  function xr(e) {
    var t = e.validateOnChange,
      n = t === void 0 ? !0 : t,
      r = e.validateOnBlur,
      i = r === void 0 ? !0 : r,
      s = e.validateOnMount,
      o = s === void 0 ? !1 : s,
      a = e.isInitialValid,
      l = e.enableReinitialize,
      c = l === void 0 ? !1 : l,
      u = e.onSubmit,
      f = kx(e, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit",
      ]),
      h = We(
        {
          validateOnChange: n,
          validateOnBlur: i,
          validateOnMount: o,
          onSubmit: u,
        },
        f,
      ),
      m = w.useRef(h.initialValues),
      g = w.useRef(h.initialErrors || wr),
      v = w.useRef(h.initialTouched || ia),
      b = w.useRef(h.initialStatus),
      y = w.useRef(!1),
      p = w.useRef({});
    w.useEffect(function () {
      return (
        (y.current = !0),
        function () {
          y.current = !1;
        }
      );
    }, []);
    var x = w.useState(0),
      _ = x[1],
      S = w.useRef({
        values: ra(h.initialValues),
        errors: ra(h.initialErrors) || wr,
        touched: ra(h.initialTouched) || ia,
        status: ra(h.initialStatus),
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      E = S.current,
      A = w.useCallback(function (C) {
        var I = S.current;
        (S.current = LT(I, C)),
          I !== S.current &&
            _(function (z) {
              return z + 1;
            });
      }, []),
      k = w.useCallback(
        function (C, I) {
          return new Promise(function (z, H) {
            var Z = h.validate(C, I);
            Z == null
              ? z(wr)
              : Su(Z)
                ? Z.then(
                    function (ue) {
                      z(ue || wr);
                    },
                    function (ue) {
                      H(ue);
                    },
                  )
                : z(Z);
          });
        },
        [h.validate],
      ),
      P = w.useCallback(
        function (C, I) {
          var z = h.validationSchema,
            H = Wt(z) ? z(I) : z,
            Z = I && H.validateAt ? H.validateAt(I, C) : DT(C, H);
          return new Promise(function (ue, He) {
            Z.then(
              function () {
                ue(wr);
              },
              function (mn) {
                mn.name === "ValidationError" ? ue(IT(mn)) : He(mn);
              },
            );
          });
        },
        [h.validationSchema],
      ),
      T = w.useCallback(function (C, I) {
        return new Promise(function (z) {
          return z(p.current[C].validate(I));
        });
      }, []),
      L = w.useCallback(
        function (C) {
          var I = Object.keys(p.current).filter(function (H) {
              return Wt(p.current[H].validate);
            }),
            z =
              I.length > 0
                ? I.map(function (H) {
                    return T(H, bt(C, H));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all(z).then(function (H) {
            return H.reduce(function (Z, ue, He) {
              return (
                ue === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                  (ue && (Z = Br(Z, I[He], ue))),
                Z
              );
            }, {});
          });
        },
        [T],
      ),
      B = w.useCallback(
        function (C) {
          return Promise.all([
            L(C),
            h.validationSchema ? P(C) : {},
            h.validate ? k(C) : {},
          ]).then(function (I) {
            var z = I[0],
              H = I[1],
              Z = I[2],
              ue = Hd.all([z, H, Z], { arrayMerge: FT });
            return ue;
          });
        },
        [h.validate, h.validationSchema, L, k, P],
      ),
      $ = Nt(function (C) {
        return (
          C === void 0 && (C = E.values),
          A({ type: "SET_ISVALIDATING", payload: !0 }),
          B(C).then(function (I) {
            return (
              y.current &&
                (A({ type: "SET_ISVALIDATING", payload: !1 }),
                A({ type: "SET_ERRORS", payload: I })),
              I
            );
          })
        );
      });
    w.useEffect(
      function () {
        o && y.current === !0 && Pr(m.current, h.initialValues) && $(m.current);
      },
      [o, $],
    );
    var ee = w.useCallback(
      function (C) {
        var I = C && C.values ? C.values : m.current,
          z =
            C && C.errors
              ? C.errors
              : g.current
                ? g.current
                : h.initialErrors || {},
          H =
            C && C.touched
              ? C.touched
              : v.current
                ? v.current
                : h.initialTouched || {},
          Z =
            C && C.status ? C.status : b.current ? b.current : h.initialStatus;
        (m.current = I), (g.current = z), (v.current = H), (b.current = Z);
        var ue = function () {
          A({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!C && !!C.isSubmitting,
              errors: z,
              touched: H,
              status: Z,
              values: I,
              isValidating: !!C && !!C.isValidating,
              submitCount:
                C && C.submitCount && typeof C.submitCount == "number"
                  ? C.submitCount
                  : 0,
            },
          });
        };
        if (h.onReset) {
          var He = h.onReset(E.values, Xi);
          Su(He) ? He.then(ue) : ue();
        } else ue();
      },
      [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset],
    );
    w.useEffect(
      function () {
        y.current === !0 &&
          !Pr(m.current, h.initialValues) &&
          c &&
          ((m.current = h.initialValues), ee(), o && $(m.current));
      },
      [c, h.initialValues, ee, o, $],
    ),
      w.useEffect(
        function () {
          c &&
            y.current === !0 &&
            !Pr(g.current, h.initialErrors) &&
            ((g.current = h.initialErrors || wr),
            A({ type: "SET_ERRORS", payload: h.initialErrors || wr }));
        },
        [c, h.initialErrors],
      ),
      w.useEffect(
        function () {
          c &&
            y.current === !0 &&
            !Pr(v.current, h.initialTouched) &&
            ((v.current = h.initialTouched || ia),
            A({ type: "SET_TOUCHED", payload: h.initialTouched || ia }));
        },
        [c, h.initialTouched],
      ),
      w.useEffect(
        function () {
          c &&
            y.current === !0 &&
            !Pr(b.current, h.initialStatus) &&
            ((b.current = h.initialStatus),
            A({ type: "SET_STATUS", payload: h.initialStatus }));
        },
        [c, h.initialStatus, h.initialTouched],
      );
    var q = Nt(function (C) {
        if (p.current[C] && Wt(p.current[C].validate)) {
          var I = bt(E.values, C),
            z = p.current[C].validate(I);
          return Su(z)
            ? (A({ type: "SET_ISVALIDATING", payload: !0 }),
              z
                .then(function (H) {
                  return H;
                })
                .then(function (H) {
                  A({
                    type: "SET_FIELD_ERROR",
                    payload: { field: C, value: H },
                  }),
                    A({ type: "SET_ISVALIDATING", payload: !1 });
                }))
            : (A({ type: "SET_FIELD_ERROR", payload: { field: C, value: z } }),
              Promise.resolve(z));
        } else if (h.validationSchema)
          return (
            A({ type: "SET_ISVALIDATING", payload: !0 }),
            P(E.values, C)
              .then(function (H) {
                return H;
              })
              .then(function (H) {
                A({
                  type: "SET_FIELD_ERROR",
                  payload: { field: C, value: bt(H, C) },
                }),
                  A({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      X = w.useCallback(function (C, I) {
        var z = I.validate;
        p.current[C] = { validate: z };
      }, []),
      Q = w.useCallback(function (C) {
        delete p.current[C];
      }, []),
      M = Nt(function (C, I) {
        A({ type: "SET_TOUCHED", payload: C });
        var z = I === void 0 ? i : I;
        return z ? $(E.values) : Promise.resolve();
      }),
      R = w.useCallback(function (C) {
        A({ type: "SET_ERRORS", payload: C });
      }, []),
      F = Nt(function (C, I) {
        var z = Wt(C) ? C(E.values) : C;
        A({ type: "SET_VALUES", payload: z });
        var H = I === void 0 ? n : I;
        return H ? $(z) : Promise.resolve();
      }),
      Y = w.useCallback(function (C, I) {
        A({ type: "SET_FIELD_ERROR", payload: { field: C, value: I } });
      }, []),
      U = Nt(function (C, I, z) {
        A({ type: "SET_FIELD_VALUE", payload: { field: C, value: I } });
        var H = z === void 0 ? n : z;
        return H ? $(Br(E.values, C, I)) : Promise.resolve();
      }),
      oe = w.useCallback(
        function (C, I) {
          var z = I,
            H = C,
            Z;
          if (!wu(C)) {
            C.persist && C.persist();
            var ue = C.target ? C.target : C.currentTarget,
              He = ue.type,
              mn = ue.name,
              Fc = ue.id,
              zc = ue.value,
              Mb = ue.checked,
              D4 = ue.outerHTML,
              $h = ue.options,
              Nb = ue.multiple;
            (z = I || mn || Fc),
              (H = /number|range/.test(He)
                ? ((Z = parseFloat(zc)), isNaN(Z) ? "" : Z)
                : /checkbox/.test(He)
                  ? BT(bt(E.values, z), Mb, zc)
                  : $h && Nb
                    ? zT($h)
                    : zc);
          }
          z && U(z, H);
        },
        [U, E.values],
      ),
      te = Nt(function (C) {
        if (wu(C))
          return function (I) {
            return oe(I, C);
          };
        oe(C);
      }),
      ae = Nt(function (C, I, z) {
        I === void 0 && (I = !0),
          A({ type: "SET_FIELD_TOUCHED", payload: { field: C, value: I } });
        var H = z === void 0 ? i : z;
        return H ? $(E.values) : Promise.resolve();
      }),
      ce = w.useCallback(
        function (C, I) {
          C.persist && C.persist();
          var z = C.target,
            H = z.name,
            Z = z.id,
            ue = z.outerHTML,
            He = I || H || Z;
          ae(He, !0);
        },
        [ae],
      ),
      pe = Nt(function (C) {
        if (wu(C))
          return function (I) {
            return ce(I, C);
          };
        ce(C);
      }),
      le = w.useCallback(function (C) {
        Wt(C)
          ? A({ type: "SET_FORMIK_STATE", payload: C })
          : A({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return C;
              },
            });
      }, []),
      pn = w.useCallback(function (C) {
        A({ type: "SET_STATUS", payload: C });
      }, []),
      rn = w.useCallback(function (C) {
        A({ type: "SET_ISSUBMITTING", payload: C });
      }, []),
      _r = Nt(function () {
        return (
          A({ type: "SUBMIT_ATTEMPT" }),
          $().then(function (C) {
            var I = C instanceof Error,
              z = !I && Object.keys(C).length === 0;
            if (z) {
              var H;
              try {
                if (((H = Io()), H === void 0)) return;
              } catch (Z) {
                throw Z;
              }
              return Promise.resolve(H)
                .then(function (Z) {
                  return y.current && A({ type: "SUBMIT_SUCCESS" }), Z;
                })
                .catch(function (Z) {
                  if (y.current) throw (A({ type: "SUBMIT_FAILURE" }), Z);
                });
            } else if (y.current && (A({ type: "SUBMIT_FAILURE" }), I)) throw C;
          })
        );
      }),
      Ki = Nt(function (C) {
        C && C.preventDefault && Wt(C.preventDefault) && C.preventDefault(),
          C &&
            C.stopPropagation &&
            Wt(C.stopPropagation) &&
            C.stopPropagation(),
          _r().catch(function (I) {
            console.warn(
              "Warning: An unhandled error was caught from submitForm()",
              I,
            );
          });
      }),
      Xi = {
        resetForm: ee,
        validateForm: $,
        validateField: q,
        setErrors: R,
        setFieldError: Y,
        setFieldTouched: ae,
        setFieldValue: U,
        setStatus: pn,
        setSubmitting: rn,
        setTouched: M,
        setValues: F,
        setFormikState: le,
        submitForm: _r,
      },
      Io = Nt(function () {
        return u(E.values, Xi);
      }),
      Rc = Nt(function (C) {
        C && C.preventDefault && Wt(C.preventDefault) && C.preventDefault(),
          C &&
            C.stopPropagation &&
            Wt(C.stopPropagation) &&
            C.stopPropagation(),
          ee();
      }),
      Lc = w.useCallback(
        function (C) {
          return {
            value: bt(E.values, C),
            error: bt(E.errors, C),
            touched: !!bt(E.touched, C),
            initialValue: bt(m.current, C),
            initialTouched: !!bt(v.current, C),
            initialError: bt(g.current, C),
          };
        },
        [E.errors, E.touched, E.values],
      ),
      Ic = w.useCallback(
        function (C) {
          return {
            setValue: function (z, H) {
              return U(C, z, H);
            },
            setTouched: function (z, H) {
              return ae(C, z, H);
            },
            setError: function (z) {
              return Y(C, z);
            },
          };
        },
        [U, ae, Y],
      ),
      Pb = w.useCallback(
        function (C) {
          var I = Cc(C),
            z = I ? C.name : C,
            H = bt(E.values, z),
            Z = { name: z, value: H, onChange: te, onBlur: pe };
          if (I) {
            var ue = C.type,
              He = C.value,
              mn = C.as,
              Fc = C.multiple;
            ue === "checkbox"
              ? He === void 0
                ? (Z.checked = !!H)
                : ((Z.checked = !!(Array.isArray(H) && ~H.indexOf(He))),
                  (Z.value = He))
              : ue === "radio"
                ? ((Z.checked = H === He), (Z.value = He))
                : mn === "select" &&
                  Fc &&
                  ((Z.value = Z.value || []), (Z.multiple = !0));
          }
          return Z;
        },
        [pe, te, E.values],
      ),
      Dc = w.useMemo(
        function () {
          return !Pr(m.current, E.values);
        },
        [m.current, E.values],
      ),
      Tb = w.useMemo(
        function () {
          return typeof a < "u"
            ? Dc
              ? E.errors && Object.keys(E.errors).length === 0
              : a !== !1 && Wt(a)
                ? a(h)
                : a
            : E.errors && Object.keys(E.errors).length === 0;
        },
        [a, Dc, E.errors, h],
      ),
      Ob = We({}, E, {
        initialValues: m.current,
        initialErrors: g.current,
        initialTouched: v.current,
        initialStatus: b.current,
        handleBlur: pe,
        handleChange: te,
        handleReset: Rc,
        handleSubmit: Ki,
        resetForm: ee,
        setErrors: R,
        setFormikState: le,
        setFieldTouched: ae,
        setFieldValue: U,
        setFieldError: Y,
        setStatus: pn,
        setSubmitting: rn,
        setTouched: M,
        setValues: F,
        submitForm: _r,
        validateForm: $,
        validateField: q,
        isValid: Tb,
        dirty: Dc,
        unregisterField: Q,
        registerField: X,
        getFieldProps: Pb,
        getFieldMeta: Lc,
        getFieldHelpers: Ic,
        validateOnBlur: i,
        validateOnChange: n,
        validateOnMount: o,
      });
    return Ob;
  }
  function IT(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0) return Br(t, e.path, e.message);
      for (
        var i = e.inner,
          n = Array.isArray(i),
          r = 0,
          i = n ? i : i[Symbol.iterator]();
        ;

      ) {
        var s;
        if (n) {
          if (r >= i.length) break;
          s = i[r++];
        } else {
          if (((r = i.next()), r.done)) break;
          s = r.value;
        }
        var o = s;
        bt(t, o.path) || (t = Br(t, o.path, o.message));
      }
    }
    return t;
  }
  function DT(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = Kd(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: i,
    });
  }
  function Kd(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0
          ? (t[r] = e[r].map(function (i) {
              return Array.isArray(i) === !0 || Lm(i)
                ? Kd(i)
                : i !== ""
                  ? i
                  : void 0;
            }))
          : Lm(e[r])
            ? (t[r] = Kd(e[r]))
            : (t[r] = e[r] !== "" ? e[r] : void 0);
      }
    return t;
  }
  function FT(e, t, n) {
    var r = e.slice();
    return (
      t.forEach(function (s, o) {
        if (typeof r[o] > "u") {
          var a = n.clone !== !1,
            l = a && n.isMergeableObject(s);
          r[o] = l ? Hd(Array.isArray(s) ? [] : {}, s, n) : s;
        } else
          n.isMergeableObject(s)
            ? (r[o] = Hd(e[o], s, n))
            : e.indexOf(s) === -1 && r.push(s);
      }),
      r
    );
  }
  function zT(e) {
    return Array.from(e)
      .filter(function (t) {
        return t.selected;
      })
      .map(function (t) {
        return t.value;
      });
  }
  function BT(e, t, n) {
    if (typeof e == "boolean") return !!t;
    var r = [],
      i = !1,
      s = -1;
    if (Array.isArray(e)) (r = e), (s = e.indexOf(n)), (i = s >= 0);
    else if (!n || n == "true" || n == "false") return !!t;
    return t && n && !i
      ? r.concat(n)
      : i
        ? r.slice(0, s).concat(r.slice(s + 1))
        : r;
  }
  var UT =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? w.useLayoutEffect
      : w.useEffect;
  function Nt(e) {
    var t = w.useRef(e);
    return (
      UT(function () {
        t.current = e;
      }),
      w.useCallback(function () {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return t.current.apply(void 0, r);
      }, [])
    );
  }
  var VT = w.forwardRef(function (e, t) {
    var n = e.action,
      r = kx(e, ["action"]),
      i = n ?? "#",
      s = NT(),
      o = s.handleReset,
      a = s.handleSubmit;
    return w.createElement(
      "form",
      We({ onSubmit: a, ref: t, onReset: o, action: i }, r),
    );
  });
  VT.displayName = "Form";
  var ho = function () {
      return (
        (ho =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        ho.apply(this, arguments)
      );
    },
    Qt = {
      toast_container: "style_toast_container__DT-ei",
      "toast-message": "style_toast-message__-UN8x",
      "top-center": "style_top-center__zZFy4",
      "bottom-center": "style_bottom-center__NH15O",
      center: "style_center__GLmmM",
      "toast-content": "style_toast-content__jaj36",
      "toast-theme-content": "style_toast-theme-content__JPkou",
      clickable: "style_clickable__F3Zx7",
      loading: "style_loading__tn5sw",
      "spinner-wrap": "style_spinner-wrap__kOodK",
      spinner: "style_spinner__mu5OS",
      spin: "style_spin__Ez3u3",
    };
  (function (e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (typeof document < "u") {
      var r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
      (i.type = "text/css"),
        n === "top" && r.firstChild
          ? r.insertBefore(i, r.firstChild)
          : r.appendChild(i),
        i.styleSheet
          ? (i.styleSheet.cssText = e)
          : i.appendChild(document.createTextNode(e));
    }
  })(`#style_toast_container__DT-ei * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
.style_toast-message__-UN8x {
  opacity: 0;
  position: fixed;
  z-index: 1000;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 90%;
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
}
.style_top-center__zZFy4,
.style_bottom-center__NH15O,
.style_center__GLmmM {
  left: 50%;
}
.style_toast-message__-UN8x.toast-enter-active,
.style_toast-message__-UN8x.toast-appear-active {
  opacity: 1;
}
.style_toast-message__-UN8x.toast-exit-active {
  opacity: 0;
}
.style_toast-content__jaj36 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.style_toast-theme-content__JPkou {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.style_clickable__F3Zx7 {
  cursor: pointer;
}
.style_loading__tn5sw .style_spinner-wrap__kOodK {
  visibility: visible;
  opacity: 1;
  width: 1.1em;
  margin-right: 12px;
}
.style_spinner-wrap__kOodK {
  display: inline-block;
  visibility: hidden;
  opacity: 0;
  width: 0;
  margin-right: 0;
}
.style_spinner__mu5OS {
  display: block;
  overflow: hidden;
  width: 1.1em;
  height: 1.1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  vertical-align: middle;
  text-indent: -99999px;
  -webkit-animation: style_spin__Ez3u3 1s ease-in-out infinite;
          animation: style_spin__Ez3u3 1s ease-in-out infinite;
}
@-webkit-keyframes style_spin__Ez3u3 {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes style_spin__Ez3u3 {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
`);
  var Xd,
    Di = ho({}, uS),
    HT = Di.version,
    WT = Di.render;
  Di.unmountComponentAtNode;
  try {
    Number((HT || "").split(".")[0]) >= 18 &&
      Di.createRoot &&
      (Xd = Di.createRoot);
  } catch {}
  function lg(e) {
    var t = Di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    t && typeof t == "object" && (t.usingClientEntryPoint = e);
  }
  var cg = "__rc_react_root__";
  function $T(e, t) {
    Xd == null
      ? (function (n, r) {
          WT(n, r);
        })(e, t)
      : (function (n, r) {
          lg(!0);
          var i = r[cg] || Xd(r);
          lg(!1), i.render(n), (r[cg] = i);
        })(e, t);
  }
  var qT = function () {
      return Date.now() + Math.floor(1e16 * Math.random());
    },
    Pl = function () {
      return typeof window < "u";
    },
    YT = function (e, t) {
      var n = e
          .replace(/[rgb(]|[)]/g, "")
          .split(",")
          .map(function (o) {
            return o.trim();
          }),
        r = n[0],
        i = n[1],
        s = n[2];
      return "rgba("
        .concat(r, ", ")
        .concat(i, ", ")
        .concat(s, ", ")
        .concat(t, ")");
    },
    ug = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.filter(Boolean).join(" ");
    },
    QT = 2147483647,
    jx = {
      BOTTOM_LEFT: "bottom-left",
      BOTTOM_CENTER: "bottom-center",
      BOTTOM_RIGHT: "bottom-right",
      TOP_LEFT: "top-left",
      TOP_CENTER: "top-center",
      TOP_RIGHT: "top-right",
      CENTER: "center",
    };
  function Gd() {
    return (
      (Gd = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Gd.apply(this, arguments)
    );
  }
  var dg = {
      "toast-blue-dusk": "_toast-blue-dusk_pnidt_1",
      "toast-chroma": "_toast-chroma_1u0sn_1",
      "toast-frosted-glass": "_toast-frosted-glass_lv9sk_1",
      "toast-frosted-glass-wrapper": "_toast-frosted-glass-wrapper_lv9sk_6",
      "toast-dark-edge": "_toast-dark-edge_z8drx_1",
      "toast-dark": "_toast-dark_1uck5_1",
      "toast-light": "_toast-light_1t8t0_1",
      "toast-failure": "_toast-failure_1xuna_1",
      "toast-light-edge": "_toast-light-edge_8cluo_1",
      "toast-info": "_toast-info_v91zz_1",
      "toast-moonlight": "_toast-moonlight_128j9_1",
      "toast-plain": "_toast-plain_11plr_1",
      "toast-pink-dawn": "_toast-pink-dawn_13jqk_1",
      "toast-success": "_toast-success_1dljs_1",
      "toast-ocean-wave": "_toast-ocean-wave_1cgng_1",
      "toast-sunset": "_toast-sunset_1tanv_1",
      "toast-warning": "_toast-warning_ohu7r_1",
    },
    sa = typeof window < "u" ? V.useLayoutEffect : V.useEffect;
  function KT(e) {
    var t = e.color,
      n = t && YT(t, 0.3);
    return V.createElement(
      "span",
      { className: Qt["spinner-wrap"] },
      V.createElement(
        "span",
        {
          className: Qt.spinner,
          style: { border: "2px solid ".concat(n), borderTopColor: t },
        },
        "loading",
      ),
    );
  }
  function fg(e) {
    var t = e.id,
      n = e.message,
      r = e.className,
      i = e.clickable,
      s = e.position,
      o = e.isExit,
      a = e.render,
      l = e.theme,
      c = e.offsetX,
      u = e.offsetY,
      f = e.baseOffsetX,
      h = e.baseOffsetY,
      m = e.zIndex,
      g = e.loading,
      v = e.onClick,
      b = e._onEnter,
      y = w.useRef(null),
      p = s == null ? void 0 : s.includes("top"),
      x = s == null ? void 0 : s.includes("bottom"),
      _ = s == null ? void 0 : s.includes("right"),
      S = s == null ? void 0 : s.includes("left"),
      E = s == null ? void 0 : s.includes("-center"),
      A = s === jx.CENTER,
      k = w.useState(!1),
      P = k[0],
      T = k[1],
      L = w.useState({
        transform: "translate("
          .concat(c, ", ")
          .concat(
            A
              ? "calc(50% - 20px)"
              : "".concat(parseInt(u || "0") + 20 * (p ? -1 : 1), "px"),
            ")",
          ),
      }),
      B = L[0],
      $ = L[1],
      ee = w.useState(!!g),
      q = ee[0],
      X = ee[1],
      Q = w.useState(),
      M = Q[0],
      R = Q[1],
      F = A ? "50%" : p ? h : void 0,
      Y = x ? h : void 0,
      U = _ ? f : void 0,
      oe = E || A ? "50%" : S ? f : void 0;
    sa(
      function () {
        var pe = "translate(".concat(c, ", ").concat(u, ")");
        $({
          top: F,
          right: U,
          bottom: Y,
          left: oe,
          zIndex: m,
          transform: pe,
          WebkitTransform: pe,
        });
      },
      [c, u, m, F, U, Y, oe],
    ),
      sa(
        function () {
          var pe;
          if (
            ((pe = y.current) === null || pe === void 0
              ? void 0
              : pe.clientHeight) != null &&
            !P
          ) {
            var le = y.current.clientWidth,
              pn = y.current.clientHeight;
            y.current &&
              (b == null || b({ target: y.current, width: le, height: pn })),
              T(!0);
          }
        },
        [P, b],
      ),
      sa(function () {
        if (y.current) {
          var pe = y.current.querySelector("span"),
            le = pe && window.getComputedStyle(pe).color;
          le && R(le);
        }
      }, []),
      sa(
        function () {
          if (g instanceof Promise)
            return (
              X(!0),
              void g.then(function () {
                X(!1);
              })
            );
          X(!!g);
        },
        [g],
      );
    var te = ug(
        Qt["toast-message"],
        Qt[s || "bottom-center"],
        dg["toast-".concat(l, "-wrapper")],
        P ? "toast-enter-active" : "",
        o ? "toast-exit-active" : "",
        q ? Qt.loading : "",
      ),
      ae = ug(
        Qt["toast-content"],
        i ? Qt.clickable : "",
        !a && dg["toast-".concat(l)],
        !a && l ? Qt["toast-theme-content"] : "",
        l || "",
        r,
      ),
      ce = { onClick: v, tabIndex: 0, role: "button" };
    return V.createElement(
      "div",
      { ref: y, id: t.toString(), className: te, style: B },
      V.createElement(
        "div",
        Gd({ className: ae }, i && ce),
        q && V.createElement(KT, { color: M }),
        a ? a(n) : n,
      ),
    );
  }
  var oa = function (e) {
      return (
        !(!e || typeof e != "object") &&
        ("message" in e || "duration" in e || "loading" in e)
      );
    },
    De = [],
    XT = function () {
      var e,
        t,
        n,
        r = Pl() && document.getElementById(Qt.toast_container);
      Pl() &&
        !r &&
        ((t = Qt.toast_container),
        (n = document.createElement("div")).setAttribute("id", t),
        (e = n),
        document.body.appendChild(e)),
        (De && Array.isArray(De)) || (De = []);
    },
    Rt = {
      duration: 3e3,
      className: "",
      position: "bottom-center",
      offsetX: 30,
      offsetY: 30,
      gap: 10,
      clickClosable: !1,
      render: null,
      maxVisibleToasts: null,
      isReversedOrder: !1,
      theme: null,
      zIndex: null,
    },
    GT = function (e) {
      var t = Object.values(jx);
      if (!t.includes(e))
        throw new Error(
          "Invalid position value. Expected one of "
            .concat(t.join(", "), " but got ")
            .concat(e),
        );
      return !0;
    };
  function JT() {
    return V.createElement(
      V.Fragment,
      null,
      De.map(function (e) {
        var t = e.position.includes("top")
            ? (function (l) {
                for (var c = [], u = l.length - 1; u >= 0; u--) c.push(l[u]);
                return c;
              })(De)
            : De,
          n = t.findIndex(function (l) {
            return l.id === e.id;
          }),
          r = t.slice(n + 1).filter(function (l) {
            return l.position === e.position && !l.isExit;
          }),
          i = r.reduce(function (l, c) {
            var u;
            return (
              l + ((u = c.height) !== null && u !== void 0 ? u : 0) + e.gap
            );
          }, 0),
          s =
            e.position.includes("left") || e.position.includes("right")
              ? "0%"
              : "-50%",
          o = i * (e.position.includes("top") ? 1 : -1),
          a =
            e.position === "center"
              ? "calc(-50% - ".concat(-1 * o, "px)")
              : "".concat(o, "px");
        return V.createElement(
          w.Fragment,
          { key: e.id },
          w.cloneElement(e.component, {
            isExit: e.isExit,
            offsetX: s,
            offsetY: a,
            _onEnter: function (l) {
              return (function (c, u) {
                De.forEach(function (f) {
                  f.id === c.id && (f.startCloseTimer(), (f.height = u.height));
                }),
                  po();
              })(e, l);
            },
          }),
        );
      }),
    );
  }
  var po = function () {
    if (Pl()) {
      var e = document.getElementById(Qt.toast_container);
      e && $T(V.createElement(JT, null), e);
    }
  };
  function aa(e, t) {
    var n,
      r = De.findIndex(function (i) {
        return i.id === e;
      });
    De[r] && (De[r].isExit = !0),
      (n = t.onCloseStart) === null || n === void 0 || n.call(t),
      po(),
      setTimeout(function () {
        var i;
        (De = De.filter(function (s) {
          return s.id !== e;
        })),
          (i = t.onClose) === null || i === void 0 || i.call(t),
          po();
      }, 300);
  }
  function ZT(e, t) {
    var n;
    if (!Pl())
      return {
        close: function () {
          return null;
        },
        updateDuration: function () {
          return null;
        },
        update: function () {
          return null;
        },
      };
    var r = qT(),
      i = t || {},
      s = i.duration,
      o = i.clickable,
      a = o !== void 0 && o,
      l = i.clickClosable,
      c = l === void 0 ? Rt.clickClosable : l,
      u = i.className,
      f = u === void 0 ? Rt.className : u,
      h = i.position,
      m = h === void 0 ? Rt.position : h,
      g = i.offsetX,
      v = g === void 0 ? Rt.offsetX : g,
      b = i.offsetY,
      y = b === void 0 ? Rt.offsetY : b,
      p = i.gap,
      x = p === void 0 ? Rt.gap : p,
      _ = i.maxVisibleToasts,
      S = _ === void 0 ? Rt.maxVisibleToasts : _,
      E = i.isReversedOrder,
      A = E === void 0 ? Rt.isReversedOrder : E,
      k = i.render,
      P = k === void 0 ? Rt.render : k,
      T = i.theme,
      L = T === void 0 ? Rt.theme : T,
      B = i.zIndex,
      $ = B === void 0 ? Rt.zIndex : B,
      ee = i.loading,
      q = i.onClick,
      X = q === void 0 ? void 0 : q,
      Q = i.onClose,
      M = Q === void 0 ? void 0 : Q,
      R = i.onCloseStart,
      F = R === void 0 ? void 0 : R,
      Y = s === void 0 ? Rt.duration : s,
      U = { onClose: M, onCloseStart: F };
    GT(m), XT();
    var oe = function (le) {
        c && (n && clearTimeout(n), aa(r, U)), X == null || X(le);
      },
      te = function (le, pn) {
        le === void 0 && (le = Y),
          le === null ||
            le === 0 ||
            le > QT ||
            (n && clearTimeout(n),
            (n = window.setTimeout(function () {
              aa(
                r,
                ho(ho({}, U), {
                  onCloseStart: function () {
                    var rn;
                    pn == null || pn(),
                      (rn = U.onClose) === null || rn === void 0 || rn.call(U);
                  },
                }),
              );
            }, le)));
      },
      ae = {
        id: r,
        message: e,
        position: m,
        startCloseTimer: te,
        gap: x,
        component: V.createElement(fg, {
          id: r,
          message: e,
          className: f,
          clickable: a || c,
          position: m,
          baseOffsetX: v,
          baseOffsetY: y,
          render: P,
          theme: L,
          zIndex: $ || void 0,
          loading: ee,
          onClick: oe,
        }),
      };
    if ((A ? De.unshift(ae) : De.push(ae), S))
      for (var ce = De.length - S, pe = 0; pe < ce; pe++) aa(De[pe].id, U);
    return (
      po(),
      {
        close: function () {
          return aa(r, U);
        },
        updateDuration: function (le) {
          le === void 0 && (le = Y), te(le);
        },
        update: function (le, pn) {
          var rn,
            _r,
            Ki = De.findIndex(function (Ic) {
              return Ic.id === r;
            }),
            Xi = oa(le) ? le.duration : pn;
          if (De[Ki]) {
            var Io =
                (rn = oa(le) ? le.message : le) !== null && rn !== void 0
                  ? rn
                  : e,
              Rc =
                !!oa(le) &&
                ((_r = le.loading) !== null && _r !== void 0 ? _r : ee),
              Lc = (oa(le) && le.theme) || L;
            (De[Ki].message = Io),
              (De[Ki].component = V.createElement(fg, {
                id: r,
                message: Io,
                className: f,
                clickable: a || c,
                position: m,
                baseOffsetX: v,
                baseOffsetY: y,
                render: P,
                theme: Lc,
                loading: Rc,
                onClick: oe,
              }));
          }
          po(), Xi !== void 0 && te(Xi);
        },
      }
    );
  }
  function Le(e, t) {
    return ZT(e, typeof t == "number" || t === null ? { duration: t } : t);
  }
  function eO() {
    const e = document.getElementById("needhelp");
    e.style.display = "none";
  }
  function tO() {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState(""),
      i = xr({
        initialValues: {
          first_name: "",
          last_name: "",
          email: "",
          location: "",
          phone_number: "",
          subject: "",
          message: "",
        },
        onSubmit: s,
        validate: function (o) {
          let a = {};
          return (
            o.first_name === "" && (a.first_name = "First name is required"),
            o.last_name === "" && (a.last_name = "Last name is required"),
            o.email === "" && (a.email = "Email is required"),
            o.location === "" && (a.location = "Location is required"),
            o.phone_number === "" &&
              (a.phone_number = "Phone number is required"),
            o.subject === "" && (a.subject = "Please include a subject"),
            o.message === "" && (a.message = "Include a message"),
            a
          );
        },
      });
    async function s(o) {
      t(!0);
      try {
        const a = await K.post(`${ze}/api/users/writeMessages`, o);
        console.log(a), Le("message sent", { theme: "success" });
      } catch (a) {
        r(Le(a.message, { theme: "failure" }));
      } finally {
        t(!1);
      }
    }
    return d.jsxs(d.Fragment, {
      children: [
        d.jsxs("section", {
          className: "contactuswrapper",
          children: [
            d.jsxs("div", {
              className: "contactheader",
              children: [
                d.jsx("h1", { children: "Get In Touch" }),
                d.jsx("p", {
                  children:
                    "Want to get in touch? We'd love to hear from you. Here's how you can reach us...",
                }),
              ],
            }),
            d.jsx("div", {
              className: "contactimg",
              children: d.jsx("img", { src: Nm, alt: Nm }),
            }),
          ],
        }),
        d.jsxs("section", {
          className: "talking",
          children: [
            d.jsxs("div", {
              className: "talktous",
              children: [
                d.jsx("h1", { children: d.jsx(dk, {}) }),
                d.jsx("h3", { children: "Talk to sales" }),
                d.jsx("p", {
                  children:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo!",
                }),
              ],
            }),
            d.jsx("div", {
              className: "custommersurport",
              children: d.jsxs("div", {
                className: "talktous",
                children: [
                  d.jsx("h1", { children: d.jsx(vk, {}) }),
                  d.jsx("h3", { children: "Contact customer support" }),
                  d.jsx("p", {
                    children:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quo!",
                  }),
                ],
              }),
            }),
            d.jsxs("div", {
              className: "needhelp",
              id: "needhelp",
              children: [
                d.jsx("div", {
                  className: "close",
                  children: d.jsx("button", {
                    onClick: eO,
                    children: d.jsx(_k, {}),
                  }),
                }),
                d.jsx("img", { src: xk, alt: "Help" }),
                d.jsxs("p", {
                  children: [
                    d.jsx(bk, {}),
                    " Need to get in Touch? I'm here to help you",
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsxs("section", {
          className: "contactsurport",
          children: [
            d.jsxs("div", {
              className: "surppotcontactlinks",
              children: [
                d.jsx("h1", { children: "Contact support" }),
                d.jsx("p", {
                  children:
                    "Have an Account? Sign in and we will be able to help out",
                }),
                d.jsx("button", { children: "Sign in →" }),
                d.jsx(W, {
                  to: "/Help",
                  children: "Can't sign in or have a question?",
                }),
                d.jsx(W, { to: "/Help", children: "Forgot your password?" }),
                d.jsx(W, { to: "/Help", children: "Can't Access your Cart?" }),
                d.jsx(W, {
                  to: "/Help",
                  children: "Add a recovery Email Address?",
                }),
                d.jsx(W, { to: "/Help", children: "Purchase Products" }),
                d.jsx(W, { to: "/contactheader", children: "Exchange Item?" }),
              ],
            }),
            d.jsx("div", {
              className: "fillform",
              children: d.jsxs("form", {
                onSubmit: i.handleSubmit,
                children: [
                  d.jsx("h1", { children: "We'd love to hear from you!" }),
                  d.jsx("h1", { children: "Let's get in touch" }),
                  d.jsxs("div", {
                    className: "forminputss",
                    children: [
                      d.jsxs("div", {
                        className: "inputs1",
                        children: [
                          d.jsx("label", {
                            htmlFor: "first_name",
                            children: "First Name",
                          }),
                          d.jsx("input", {
                            type: "text",
                            placeholder: "First name e.g. John",
                            name: "first_name",
                            value: i.values.first_name,
                            onChange: i.handleChange,
                            onBlur: i.handleBlur,
                            required: !0,
                          }),
                          i.touched.first_name &&
                            i.errors.first_name &&
                            d.jsx("p", { children: i.errors.first_name }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "inputs1",
                        children: [
                          d.jsx("label", {
                            htmlFor: "last_name",
                            children: "Last Name",
                          }),
                          d.jsx("input", {
                            type: "text",
                            placeholder: "Last name e.g. Doe",
                            name: "last_name",
                            value: i.values.last_name,
                            onChange: i.handleChange,
                            onBlur: i.handleBlur,
                            required: !0,
                          }),
                          i.touched.last_name &&
                            i.errors.last_name &&
                            d.jsx("p", { children: i.errors.last_name }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "forminputss",
                    children: [
                      d.jsxs("div", {
                        className: "inputs1",
                        children: [
                          d.jsx("label", {
                            htmlFor: "email",
                            children: "Email",
                          }),
                          d.jsx("input", {
                            type: "email",
                            placeholder: "Email address e.g. johndoe@gmail.com",
                            name: "email",
                            value: i.values.email,
                            onChange: i.handleChange,
                            onBlur: i.handleBlur,
                            required: !0,
                          }),
                          i.touched.email &&
                            i.errors.email &&
                            d.jsx("p", { children: i.errors.email }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "inputs1",
                        children: [
                          d.jsx("label", {
                            htmlFor: "location",
                            children: "Location",
                          }),
                          d.jsx("input", {
                            type: "text",
                            placeholder: "Your location e.g. Nairobi",
                            name: "location",
                            value: i.values.location,
                            onChange: i.handleChange,
                            onBlur: i.handleBlur,
                            required: !0,
                          }),
                          i.touched.location &&
                            i.errors.location &&
                            d.jsx("p", { children: i.errors.location }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "forminputss",
                    children: [
                      d.jsxs("div", {
                        className: "inputs1",
                        children: [
                          d.jsx("label", {
                            htmlFor: "phone_number",
                            children: "Phone Number",
                          }),
                          d.jsx("input", {
                            type: "number",
                            placeholder: "Phone number e.g. 0712345678",
                            name: "phone_number",
                            value: i.values.phone_number,
                            onChange: i.handleChange,
                            onBlur: i.handleBlur,
                            required: !0,
                          }),
                          i.touched.phone_number &&
                            i.errors.phone_number &&
                            d.jsx("p", { children: i.errors.phone_number }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "inputs1",
                        children: [
                          d.jsx("label", {
                            htmlFor: "subject",
                            children: "Subject",
                          }),
                          d.jsx("input", {
                            type: "text",
                            placeholder: "Subject",
                            name: "subject",
                            value: i.values.subject,
                            onChange: i.handleChange,
                            onBlur: i.handleBlur,
                            required: !0,
                          }),
                          i.touched.subject &&
                            i.errors.subject &&
                            d.jsx("p", { children: i.errors.subject }),
                        ],
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "forminputs",
                    children: [
                      d.jsx("textarea", {
                        name: "message",
                        placeholder: "Insert your message here",
                        value: i.values.message,
                        onChange: i.handleChange,
                        onBlur: i.handleBlur,
                        required: !0,
                      }),
                      i.touched.message &&
                        i.errors.message &&
                        d.jsx("p", { children: i.errors.message }),
                      d.jsx("button", {
                        type: "submit",
                        disabled: e,
                        children: e ? "Sending..." : "Send message",
                      }),
                      n && d.jsx("p", { className: "error", children: n }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  }
  function nO() {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState(""),
      i = tn(),
      o = xr({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        onSubmit: async (a) => {
          try {
            t(!0), r("");
            const l = await K.post(`${ze}/api/users/register`, {
              firstName: a.firstName,
              lastName: a.lastName,
              email: a.email,
              password: a.password,
            });
            l.data.success ? i("/Login") : r(l.data.message);
          } catch (l) {
            l.response && l.response.data && l.response.data.message
              ? r(l.response.data.message)
              : r(l.message);
          } finally {
            t(!1);
          }
        },
        validate: (a) => {
          let l = {};
          return (
            a.firstName || (l.firstName = "First name is required"),
            a.lastName || (l.lastName = "Last name is required"),
            a.email || (l.email = "Email is required"),
            a.password || (l.password = "Password is required"),
            a.password !== a.confirmPassword &&
              (l.confirmPassword = "Passwords did not match"),
            l
          );
        },
      });
    return d.jsxs("section", {
      className: "signinpage",
      children: [
        d.jsxs("div", {
          className: "signinform",
          children: [
            d.jsx("h1", { children: "Create An Account" }),
            d.jsxs("p", {
              children: [
                "Already have an Account?",
                " ",
                d.jsx(W, { to: "/Login", children: "Log in to your account" }),
              ],
            }),
            n && d.jsx("h1", { className: "error", children: n }),
            d.jsxs("form", {
              onSubmit: o.handleSubmit,
              children: [
                d.jsxs("div", {
                  className: "signininputs",
                  children: [
                    d.jsx("label", { children: "First Name" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Your first name",
                      name: "firstName",
                      value: o.values.firstName,
                      onChange: o.handleChange,
                      onBlur: o.handleBlur,
                      required: !0,
                    }),
                    o.touched.firstName &&
                      o.errors.firstName &&
                      d.jsx("p", { children: o.errors.firstName }),
                  ],
                }),
                d.jsxs("div", {
                  className: "signininputs",
                  children: [
                    d.jsx("label", { children: "Last Name" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Your last name",
                      name: "lastName",
                      value: o.values.lastName,
                      onChange: o.handleChange,
                      onBlur: o.handleBlur,
                      required: !0,
                    }),
                    o.touched.lastName &&
                      o.errors.lastName &&
                      d.jsx("p", { children: o.errors.lastName }),
                  ],
                }),
                d.jsxs("div", {
                  className: "signininputs",
                  children: [
                    d.jsx("label", { children: "Email Address" }),
                    d.jsx("input", {
                      type: "email",
                      placeholder: "Your email",
                      name: "email",
                      value: o.values.email,
                      onChange: o.handleChange,
                      onBlur: o.handleBlur,
                      required: !0,
                    }),
                    o.touched.email &&
                      o.errors.email &&
                      d.jsx("p", { children: o.errors.email }),
                  ],
                }),
                d.jsxs("div", {
                  className: "signininputs",
                  children: [
                    d.jsx("label", { children: "Password" }),
                    d.jsx("input", {
                      type: "password",
                      placeholder: "Create a strong password",
                      name: "password",
                      value: o.values.password,
                      onChange: o.handleChange,
                      onBlur: o.handleBlur,
                      required: !0,
                    }),
                    o.touched.password &&
                      o.errors.password &&
                      d.jsx("p", { children: o.errors.password }),
                  ],
                }),
                d.jsxs("div", {
                  className: "signininputs",
                  children: [
                    d.jsx("label", { children: "Confirm Password" }),
                    d.jsx("input", {
                      type: "password",
                      placeholder: "Confirm your password",
                      name: "confirmPassword",
                      value: o.values.confirmPassword,
                      onChange: o.handleChange,
                      onBlur: o.handleBlur,
                      required: !0,
                    }),
                    o.touched.confirmPassword &&
                      o.errors.confirmPassword &&
                      d.jsx("p", { children: o.errors.confirmPassword }),
                  ],
                }),
                d.jsx("button", {
                  type: "submit",
                  className: "createaccountbtn",
                  disabled: e,
                  children: e ? "Please wait..." : "Submit",
                }),
                d.jsxs("div", {
                  className: "alternativesignin",
                  children: [
                    d.jsx("p", { children: "Or sign in with" }),
                    d.jsxs("button", {
                      className: "googlesignin",
                      children: [d.jsx(Md, {}), " Google"],
                    }),
                    d.jsxs("button", {
                      className: "googlesignin",
                      children: [d.jsx(Tm, {}), " Messenger"],
                    }),
                    d.jsxs("button", {
                      className: "googlesignin",
                      children: [d.jsx(Om, {}), " Github"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsxs("div", {
          className: "signinimg",
          children: [
            d.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus amet iste sunt minus ut.",
            }),
            d.jsx("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            }),
            d.jsx("p", {
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus amet iste sunt minus ut.",
            }),
            d.jsx("h1", { children: "sign in with" }),
            d.jsxs("button", {
              className: "googlesignin",
              children: [d.jsx(Tm, {}), " Messenger"],
            }),
            d.jsxs("button", {
              className: "googlesignin",
              children: [d.jsx(Om, {}), " Github"],
            }),
          ],
        }),
      ],
    });
  }
  function hg() {
    const e = tn(),
      [t, n] = w.useState(!1),
      [r, i] = w.useState(""),
      s = xt((l) => l.changeUserInformation);
    async function o(l) {
      try {
        n(!0), i("");
        const u = (
          await K.post(`${ze}/api/users/login`, l, { withCredentials: !0 })
        ).data;
        console.log(u.data),
          u.success
            ? (localStorage.setItem("jwt_token", u.token),
              s(u.data),
              u.data.role === "admin"
                ? e("/AdminHome")
                : e("/FeaturedProducts"))
            : i("Login failed");
      } catch (c) {
        console.log(c), i("User not found");
      } finally {
        n(!1);
      }
    }
    const a = xr({
      initialValues: { email: "", password: "" },
      onSubmit: o,
      validate: (l) => {
        const c = {};
        return (
          l.email || (c.email = "Email is required"),
          l.password || (c.password = "Please enter a password"),
          c
        );
      },
    });
    return d.jsx("section", {
      className: "loginsection",
      children: d.jsx("div", {
        className: "loginpage",
        children: d.jsx("form", {
          onSubmit: a.handleSubmit,
          children: d.jsxs("div", {
            children: [
              d.jsx("h1", { children: "Log in to your account" }),
              d.jsxs("div", {
                className: "logininputs",
                children: [
                  d.jsx("label", { htmlFor: "email", children: "Email" }),
                  d.jsx("input", {
                    type: "email",
                    placeholder: "Your email address",
                    name: "email",
                    value: a.values.email,
                    onChange: a.handleChange,
                    onBlur: a.handleBlur,
                    required: !0,
                  }),
                  a.touched.email &&
                    a.errors.email &&
                    d.jsx("p", { children: a.errors.email }),
                ],
              }),
              d.jsxs("div", {
                className: "logininputs",
                children: [
                  d.jsx("label", { htmlFor: "password", children: "Password" }),
                  d.jsx("input", {
                    type: "password",
                    placeholder: "Your password",
                    name: "password",
                    value: a.values.password,
                    onChange: a.handleChange,
                    onBlur: a.handleBlur,
                    required: !0,
                  }),
                  a.touched.password &&
                    a.errors.password &&
                    d.jsx("p", {
                      className: "loginerror",
                      children: a.errors.password,
                    }),
                  d.jsxs("p", {
                    children: [
                      "Forgot your password? ",
                      d.jsx(W, { to: "/", children: "Reset Password" }),
                    ],
                  }),
                  r && d.jsx("p", { className: "loginerror", children: r }),
                  d.jsx("button", {
                    type: "submit",
                    disabled: t,
                    children: t ? "Logging in..." : "Log in",
                  }),
                  d.jsx("p", {
                    children: d.jsx(W, {
                      to: "/Signin",
                      children: "Create Account",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }
  const rO = "dukptptve",
    iO = "preset";
  function sO() {
    const { userId: e } = rc(),
      t = tn(),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(""),
      [o, a] = w.useState(null),
      [l, c] = w.useState(""),
      [u, f] = w.useState(!1),
      [h, m] = w.useState(""),
      g = xt((x) => x.user),
      v = async () => {
        try {
          const x = await K.get(`${ze}/api/users/getOneUser/${e}`, {
            withCredentials: !0,
          });
          x.data.success
            ? (p.setValues(x.data.data),
              m(x.data.data.profilePicture || ""),
              c(x.data.data.profilePicture || ""))
            : s("Failed to fetch user data.");
        } catch (x) {
          console.error("Error fetching user data:", x),
            s("Failed to fetch user data.");
        }
      };
    w.useEffect(() => {
      g ? (v(), console.log(g)) : (s("Unauthorized"), t("/Page404"));
    }, [g, e, t]),
      w.useEffect(() => {
        h && p.setFieldValue("profilePicture", h);
      }, [h]);
    async function b() {
      if (!o) {
        Le("Please select an image to upload.", { theme: "failure" });
        return;
      }
      const x = new FormData();
      x.append("file", o), x.append("upload_preset", iO);
      try {
        f(!0);
        const _ = await K.post(
          `https://api.cloudinary.com/v1_1/${rO}/upload`,
          x,
        );
        _.data.secure_url
          ? (m(_.data.secure_url), c(_.data.secure_url))
          : Le("Failed to upload image. Please try again.", {
              theme: "failure",
            });
      } catch {
        Le("Failed to upload image. Please try again.", { theme: "failure" });
      } finally {
        f(!1);
      }
    }
    function y(x) {
      if (x.target.files && x.target.files[0]) {
        const _ = x.target.files[0];
        _.type.startsWith("image/")
          ? (a(_), c(URL.createObjectURL(_)))
          : Le("Please select a valid image file.", { theme: "failure" });
      }
    }
    const p = xr({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        profilePicture: "",
      },
      onSubmit: async (x) => {
        if (g)
          try {
            r(!0),
              s(""),
              (
                await K.patch(`${ze}/api/users/updateUserDetails/${e}`, x, {
                  withCredentials: !0,
                })
              ).data.success
                ? Le("Profile updated successfully", { theme: "success" })
                : s("Failed to update profile. Please try again.");
          } catch (_) {
            console.error("Error updating profile:", _),
              s("Failed to update profile. Please try again.");
          } finally {
            r(!1);
          }
        else s("You do not have permission to edit this profile.");
      },
    });
    return d.jsx("div", {
      className: "EditProfile",
      children: d.jsxs("div", {
        className: "editUserProfileContainer",
        children: [
          d.jsx("h1", { children: "Update Your Profile" }),
          d.jsxs("form", {
            onSubmit: p.handleSubmit,
            children: [
              d.jsx("img", {
                src: l || g.profilePicture,
                alt: g.firstName || "Profile",
                className: "profilePicture",
              }),
              d.jsxs("div", {
                className: "editProfile",
                children: [
                  d.jsx("label", { children: "First Name" }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Enter your first Name",
                    name: "firstName",
                    value: p.values.firstName,
                    onChange: p.handleChange,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "editProfile",
                children: [
                  d.jsx("label", { children: "Last Name" }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Enter your last Name",
                    name: "lastName",
                    value: p.values.lastName,
                    onChange: p.handleChange,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "editProfile",
                children: [
                  d.jsx("label", { children: "Email" }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Enter your Email",
                    name: "email",
                    value: p.values.email,
                    onChange: p.handleChange,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "uploaduserimagewrapper",
                children: [
                  d.jsx("input", {
                    type: "file",
                    className: "file",
                    onChange: y,
                  }),
                  d.jsx("button", {
                    type: "button",
                    onClick: b,
                    disabled: u || !o,
                    className: "uploadbtn",
                    children: u ? "Uploading..." : "Upload Image",
                  }),
                ],
              }),
              i && d.jsx("p", { className: "error", children: i }),
              d.jsx("button", {
                type: "submit",
                className: "updateProfilebtn",
                disabled: n,
                children: n ? "Please wait..." : "Update profile",
              }),
            ],
          }),
        ],
      }),
    });
  }
  const oO = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  function aO() {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(!0);
    w.useEffect(() => {
      r(!1),
        setTimeout(() => {
          t(oO), r(!1);
        }, 1e3);
    }, []);
    const i = (o) => {
        t(e.filter((a) => a.id !== o));
      },
      s = () => {
        t([]), alert("Purchase successful!");
      };
    return n
      ? d.jsx("div", { children: "Loading..." })
      : d.jsxs("div", {
          children: [
            d.jsx("h1", { children: "Your Cart" }),
            e.length === 0
              ? d.jsx("p", { children: "Your cart is empty" })
              : d.jsx("ul", {
                  children: e.map((o) =>
                    d.jsxs(
                      "li",
                      {
                        children: [
                          o.name,
                          " - $",
                          o.price,
                          d.jsx("button", {
                            onClick: () => i(o.id),
                            children: "Remove",
                          }),
                        ],
                      },
                      o.id,
                    ),
                  ),
                }),
            d.jsx("button", {
              onClick: s,
              disabled: e.length === 0,
              children: "Purchase",
            }),
            d.jsx("button", {
              children: d.jsx(W, { to: "/", children: "log out" }),
            }),
          ],
        });
  }
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */ function No(e) {
    return (e + 0.5) | 0;
  }
  const Qn = (e, t, n) => Math.max(Math.min(e, n), t);
  function gs(e) {
    return Qn(No(e * 2.55), 0, 255);
  }
  function ar(e) {
    return Qn(No(e * 255), 0, 255);
  }
  function wn(e) {
    return Qn(No(e / 2.55) / 100, 0, 1);
  }
  function pg(e) {
    return Qn(No(e * 100), 0, 100);
  }
  const Lt = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    },
    Jd = [..."0123456789ABCDEF"],
    lO = (e) => Jd[e & 15],
    cO = (e) => Jd[(e & 240) >> 4] + Jd[e & 15],
    la = (e) => (e & 240) >> 4 === (e & 15),
    uO = (e) => la(e.r) && la(e.g) && la(e.b) && la(e.a);
  function dO(e) {
    var t = e.length,
      n;
    return (
      e[0] === "#" &&
        (t === 4 || t === 5
          ? (n = {
              r: 255 & (Lt[e[1]] * 17),
              g: 255 & (Lt[e[2]] * 17),
              b: 255 & (Lt[e[3]] * 17),
              a: t === 5 ? Lt[e[4]] * 17 : 255,
            })
          : (t === 7 || t === 9) &&
            (n = {
              r: (Lt[e[1]] << 4) | Lt[e[2]],
              g: (Lt[e[3]] << 4) | Lt[e[4]],
              b: (Lt[e[5]] << 4) | Lt[e[6]],
              a: t === 9 ? (Lt[e[7]] << 4) | Lt[e[8]] : 255,
            })),
      n
    );
  }
  const fO = (e, t) => (e < 255 ? t(e) : "");
  function hO(e) {
    var t = uO(e) ? lO : cO;
    return e ? "#" + t(e.r) + t(e.g) + t(e.b) + fO(e.a, t) : void 0;
  }
  const pO =
    /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Px(e, t, n) {
    const r = t * Math.min(n, 1 - n),
      i = (s, o = (s + e / 30) % 12) =>
        n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [i(0), i(8), i(4)];
  }
  function mO(e, t, n) {
    const r = (i, s = (i + e / 60) % 6) =>
      n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
    return [r(5), r(3), r(1)];
  }
  function gO(e, t, n) {
    const r = Px(e, 1, 0.5);
    let i;
    for (
      t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0;
      i < 3;
      i++
    )
      (r[i] *= 1 - t - n), (r[i] += t);
    return r;
  }
  function yO(e, t, n, r, i) {
    return e === i
      ? (t - n) / r + (t < n ? 6 : 0)
      : t === i
        ? (n - e) / r + 2
        : (e - t) / r + 4;
  }
  function jh(e) {
    const n = e.r / 255,
      r = e.g / 255,
      i = e.b / 255,
      s = Math.max(n, r, i),
      o = Math.min(n, r, i),
      a = (s + o) / 2;
    let l, c, u;
    return (
      s !== o &&
        ((u = s - o),
        (c = a > 0.5 ? u / (2 - s - o) : u / (s + o)),
        (l = yO(n, r, i, u, s)),
        (l = l * 60 + 0.5)),
      [l | 0, c || 0, a]
    );
  }
  function Ph(e, t, n, r) {
    return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(ar);
  }
  function Th(e, t, n) {
    return Ph(Px, e, t, n);
  }
  function vO(e, t, n) {
    return Ph(gO, e, t, n);
  }
  function xO(e, t, n) {
    return Ph(mO, e, t, n);
  }
  function Tx(e) {
    return ((e % 360) + 360) % 360;
  }
  function bO(e) {
    const t = pO.exec(e);
    let n = 255,
      r;
    if (!t) return;
    t[5] !== r && (n = t[6] ? gs(+t[5]) : ar(+t[5]));
    const i = Tx(+t[2]),
      s = +t[3] / 100,
      o = +t[4] / 100;
    return (
      t[1] === "hwb"
        ? (r = vO(i, s, o))
        : t[1] === "hsv"
          ? (r = xO(i, s, o))
          : (r = Th(i, s, o)),
      { r: r[0], g: r[1], b: r[2], a: n }
    );
  }
  function _O(e, t) {
    var n = jh(e);
    (n[0] = Tx(n[0] + t)),
      (n = Th(n)),
      (e.r = n[0]),
      (e.g = n[1]),
      (e.b = n[2]);
  }
  function wO(e) {
    if (!e) return;
    const t = jh(e),
      n = t[0],
      r = pg(t[1]),
      i = pg(t[2]);
    return e.a < 255
      ? `hsla(${n}, ${r}%, ${i}%, ${wn(e.a)})`
      : `hsl(${n}, ${r}%, ${i}%)`;
  }
  const mg = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh",
    },
    gg = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32",
    };
  function SO() {
    const e = {},
      t = Object.keys(gg),
      n = Object.keys(mg);
    let r, i, s, o, a;
    for (r = 0; r < t.length; r++) {
      for (o = a = t[r], i = 0; i < n.length; i++)
        (s = n[i]), (a = a.replace(s, mg[s]));
      (s = parseInt(gg[o], 16)),
        (e[a] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
    }
    return e;
  }
  let ca;
  function AO(e) {
    ca || ((ca = SO()), (ca.transparent = [0, 0, 0, 0]));
    const t = ca[e.toLowerCase()];
    return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
  }
  const EO =
    /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function kO(e) {
    const t = EO.exec(e);
    let n = 255,
      r,
      i,
      s;
    if (t) {
      if (t[7] !== r) {
        const o = +t[7];
        n = t[8] ? gs(o) : Qn(o * 255, 0, 255);
      }
      return (
        (r = +t[1]),
        (i = +t[3]),
        (s = +t[5]),
        (r = 255 & (t[2] ? gs(r) : Qn(r, 0, 255))),
        (i = 255 & (t[4] ? gs(i) : Qn(i, 0, 255))),
        (s = 255 & (t[6] ? gs(s) : Qn(s, 0, 255))),
        { r, g: i, b: s, a: n }
      );
    }
  }
  function CO(e) {
    return (
      e &&
      (e.a < 255
        ? `rgba(${e.r}, ${e.g}, ${e.b}, ${wn(e.a)})`
        : `rgb(${e.r}, ${e.g}, ${e.b})`)
    );
  }
  const Au = (e) =>
      e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
    oi = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
  function jO(e, t, n) {
    const r = oi(wn(e.r)),
      i = oi(wn(e.g)),
      s = oi(wn(e.b));
    return {
      r: ar(Au(r + n * (oi(wn(t.r)) - r))),
      g: ar(Au(i + n * (oi(wn(t.g)) - i))),
      b: ar(Au(s + n * (oi(wn(t.b)) - s))),
      a: e.a + n * (t.a - e.a),
    };
  }
  function ua(e, t, n) {
    if (e) {
      let r = jh(e);
      (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1))),
        (r = Th(r)),
        (e.r = r[0]),
        (e.g = r[1]),
        (e.b = r[2]);
    }
  }
  function Ox(e, t) {
    return e && Object.assign(t || {}, e);
  }
  function yg(e) {
    var t = { r: 0, g: 0, b: 0, a: 255 };
    return (
      Array.isArray(e)
        ? e.length >= 3 &&
          ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
          e.length > 3 && (t.a = ar(e[3])))
        : ((t = Ox(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = ar(t.a))),
      t
    );
  }
  function PO(e) {
    return e.charAt(0) === "r" ? kO(e) : bO(e);
  }
  class mo {
    constructor(t) {
      if (t instanceof mo) return t;
      const n = typeof t;
      let r;
      n === "object"
        ? (r = yg(t))
        : n === "string" && (r = dO(t) || AO(t) || PO(t)),
        (this._rgb = r),
        (this._valid = !!r);
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var t = Ox(this._rgb);
      return t && (t.a = wn(t.a)), t;
    }
    set rgb(t) {
      this._rgb = yg(t);
    }
    rgbString() {
      return this._valid ? CO(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? hO(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? wO(this._rgb) : void 0;
    }
    mix(t, n) {
      if (t) {
        const r = this.rgb,
          i = t.rgb;
        let s;
        const o = n === s ? 0.5 : n,
          a = 2 * o - 1,
          l = r.a - i.a,
          c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
        (s = 1 - c),
          (r.r = 255 & (c * r.r + s * i.r + 0.5)),
          (r.g = 255 & (c * r.g + s * i.g + 0.5)),
          (r.b = 255 & (c * r.b + s * i.b + 0.5)),
          (r.a = o * r.a + (1 - o) * i.a),
          (this.rgb = r);
      }
      return this;
    }
    interpolate(t, n) {
      return t && (this._rgb = jO(this._rgb, t._rgb, n)), this;
    }
    clone() {
      return new mo(this.rgb);
    }
    alpha(t) {
      return (this._rgb.a = ar(t)), this;
    }
    clearer(t) {
      const n = this._rgb;
      return (n.a *= 1 - t), this;
    }
    greyscale() {
      const t = this._rgb,
        n = No(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
      return (t.r = t.g = t.b = n), this;
    }
    opaquer(t) {
      const n = this._rgb;
      return (n.a *= 1 + t), this;
    }
    negate() {
      const t = this._rgb;
      return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
    }
    lighten(t) {
      return ua(this._rgb, 2, t), this;
    }
    darken(t) {
      return ua(this._rgb, 2, -t), this;
    }
    saturate(t) {
      return ua(this._rgb, 1, t), this;
    }
    desaturate(t) {
      return ua(this._rgb, 1, -t), this;
    }
    rotate(t) {
      return _O(this._rgb, t), this;
    }
  }
  /*!
   * Chart.js v4.4.3
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   */ function gn() {}
  const TO = (() => {
    let e = 0;
    return () => e++;
  })();
  function se(e) {
    return e === null || typeof e > "u";
  }
  function ke(e) {
    if (Array.isArray && Array.isArray(e)) return !0;
    const t = Object.prototype.toString.call(e);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
  }
  function re(e) {
    return (
      e !== null && Object.prototype.toString.call(e) === "[object Object]"
    );
  }
  function Oe(e) {
    return (typeof e == "number" || e instanceof Number) && isFinite(+e);
  }
  function _t(e, t) {
    return Oe(e) ? e : t;
  }
  function J(e, t) {
    return typeof e > "u" ? t : e;
  }
  const OO = (e, t) =>
      typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t,
    Mx = (e, t) =>
      typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
  function ve(e, t, n) {
    if (e && typeof e.call == "function") return e.apply(n, t);
  }
  function de(e, t, n, r) {
    let i, s, o;
    if (ke(e)) for (s = e.length, i = 0; i < s; i++) t.call(n, e[i], i);
    else if (re(e))
      for (o = Object.keys(e), s = o.length, i = 0; i < s; i++)
        t.call(n, e[o[i]], o[i]);
  }
  function Tl(e, t) {
    let n, r, i, s;
    if (!e || !t || e.length !== t.length) return !1;
    for (n = 0, r = e.length; n < r; ++n)
      if (
        ((i = e[n]),
        (s = t[n]),
        i.datasetIndex !== s.datasetIndex || i.index !== s.index)
      )
        return !1;
    return !0;
  }
  function Ol(e) {
    if (ke(e)) return e.map(Ol);
    if (re(e)) {
      const t = Object.create(null),
        n = Object.keys(e),
        r = n.length;
      let i = 0;
      for (; i < r; ++i) t[n[i]] = Ol(e[n[i]]);
      return t;
    }
    return e;
  }
  function Nx(e) {
    return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
  }
  function MO(e, t, n, r) {
    if (!Nx(e)) return;
    const i = t[e],
      s = n[e];
    re(i) && re(s) ? go(i, s, r) : (t[e] = Ol(s));
  }
  function go(e, t, n) {
    const r = ke(t) ? t : [t],
      i = r.length;
    if (!re(e)) return e;
    n = n || {};
    const s = n.merger || MO;
    let o;
    for (let a = 0; a < i; ++a) {
      if (((o = r[a]), !re(o))) continue;
      const l = Object.keys(o);
      for (let c = 0, u = l.length; c < u; ++c) s(l[c], e, o, n);
    }
    return e;
  }
  function Rs(e, t) {
    return go(e, t, { merger: NO });
  }
  function NO(e, t, n) {
    if (!Nx(e)) return;
    const r = t[e],
      i = n[e];
    re(r) && re(i)
      ? Rs(r, i)
      : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Ol(i));
  }
  const vg = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
  function RO(e) {
    const t = e.split("."),
      n = [];
    let r = "";
    for (const i of t)
      (r += i),
        r.endsWith("\\") ? (r = r.slice(0, -1) + ".") : (n.push(r), (r = ""));
    return n;
  }
  function LO(e) {
    const t = RO(e);
    return (n) => {
      for (const r of t) {
        if (r === "") break;
        n = n && n[r];
      }
      return n;
    };
  }
  function dr(e, t) {
    return (vg[t] || (vg[t] = LO(t)))(e);
  }
  function Oh(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  const yo = (e) => typeof e < "u",
    fr = (e) => typeof e == "function",
    xg = (e, t) => {
      if (e.size !== t.size) return !1;
      for (const n of e) if (!t.has(n)) return !1;
      return !0;
    };
  function IO(e) {
    return (
      e.type === "mouseup" || e.type === "click" || e.type === "contextmenu"
    );
  }
  const Ae = Math.PI,
    Se = 2 * Ae,
    DO = Se + Ae,
    Ml = Number.POSITIVE_INFINITY,
    FO = Ae / 180,
    Ie = Ae / 2,
    Sr = Ae / 4,
    bg = (Ae * 2) / 3,
    Kn = Math.log10,
    fn = Math.sign;
  function Ls(e, t, n) {
    return Math.abs(e - t) < n;
  }
  function _g(e) {
    const t = Math.round(e);
    e = Ls(e, t, e / 1e3) ? t : e;
    const n = Math.pow(10, Math.floor(Kn(e))),
      r = e / n;
    return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
  }
  function zO(e) {
    const t = [],
      n = Math.sqrt(e);
    let r;
    for (r = 1; r < n; r++) e % r === 0 && (t.push(r), t.push(e / r));
    return n === (n | 0) && t.push(n), t.sort((i, s) => i - s).pop(), t;
  }
  function Fi(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }
  function BO(e, t) {
    const n = Math.round(e);
    return n - t <= e && n + t >= e;
  }
  function Rx(e, t, n) {
    let r, i, s;
    for (r = 0, i = e.length; r < i; r++)
      (s = e[r][n]),
        isNaN(s) ||
          ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
  }
  function Kt(e) {
    return e * (Ae / 180);
  }
  function Mh(e) {
    return e * (180 / Ae);
  }
  function wg(e) {
    if (!Oe(e)) return;
    let t = 1,
      n = 0;
    for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
    return n;
  }
  function Lx(e, t) {
    const n = t.x - e.x,
      r = t.y - e.y,
      i = Math.sqrt(n * n + r * r);
    let s = Math.atan2(r, n);
    return s < -0.5 * Ae && (s += Se), { angle: s, distance: i };
  }
  function Zd(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  }
  function UO(e, t) {
    return ((e - t + DO) % Se) - Ae;
  }
  function St(e) {
    return ((e % Se) + Se) % Se;
  }
  function vo(e, t, n, r) {
    const i = St(e),
      s = St(t),
      o = St(n),
      a = St(s - i),
      l = St(o - i),
      c = St(i - s),
      u = St(i - o);
    return i === s || i === o || (r && s === o) || (a > l && c < u);
  }
  function qe(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  function VO(e) {
    return qe(e, -32768, 32767);
  }
  function En(e, t, n, r = 1e-6) {
    return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
  }
  function Nh(e, t, n) {
    n = n || ((o) => e[o] < t);
    let r = e.length - 1,
      i = 0,
      s;
    for (; r - i > 1; ) (s = (i + r) >> 1), n(s) ? (i = s) : (r = s);
    return { lo: i, hi: r };
  }
  const kn = (e, t, n, r) =>
      Nh(
        e,
        n,
        r
          ? (i) => {
              const s = e[i][t];
              return s < n || (s === n && e[i + 1][t] === n);
            }
          : (i) => e[i][t] < n,
      ),
    HO = (e, t, n) => Nh(e, n, (r) => e[r][t] >= n);
  function WO(e, t, n) {
    let r = 0,
      i = e.length;
    for (; r < i && e[r] < t; ) r++;
    for (; i > r && e[i - 1] > n; ) i--;
    return r > 0 || i < e.length ? e.slice(r, i) : e;
  }
  const Ix = ["push", "pop", "shift", "splice", "unshift"];
  function $O(e, t) {
    if (e._chartjs) {
      e._chartjs.listeners.push(t);
      return;
    }
    Object.defineProperty(e, "_chartjs", {
      configurable: !0,
      enumerable: !1,
      value: { listeners: [t] },
    }),
      Ix.forEach((n) => {
        const r = "_onData" + Oh(n),
          i = e[n];
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !1,
          value(...s) {
            const o = i.apply(this, s);
            return (
              e._chartjs.listeners.forEach((a) => {
                typeof a[r] == "function" && a[r](...s);
              }),
              o
            );
          },
        });
      });
  }
  function Sg(e, t) {
    const n = e._chartjs;
    if (!n) return;
    const r = n.listeners,
      i = r.indexOf(t);
    i !== -1 && r.splice(i, 1),
      !(r.length > 0) &&
        (Ix.forEach((s) => {
          delete e[s];
        }),
        delete e._chartjs);
  }
  function Dx(e) {
    const t = new Set(e);
    return t.size === e.length ? e : Array.from(t);
  }
  const Fx = (function () {
    return typeof window > "u"
      ? function (e) {
          return e();
        }
      : window.requestAnimationFrame;
  })();
  function zx(e, t) {
    let n = [],
      r = !1;
    return function (...i) {
      (n = i),
        r ||
          ((r = !0),
          Fx.call(window, () => {
            (r = !1), e.apply(t, n);
          }));
    };
  }
  function qO(e, t) {
    let n;
    return function (...r) {
      return (
        t ? (clearTimeout(n), (n = setTimeout(e, t, r))) : e.apply(this, r), t
      );
    };
  }
  const Rh = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
    et = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
    YO = (e, t, n, r) =>
      e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
  function Bx(e, t, n) {
    const r = t.length;
    let i = 0,
      s = r;
    if (e._sorted) {
      const { iScale: o, _parsed: a } = e,
        l = o.axis,
        { min: c, max: u, minDefined: f, maxDefined: h } = o.getUserBounds();
      f &&
        (i = qe(
          Math.min(kn(a, l, c).lo, n ? r : kn(t, l, o.getPixelForValue(c)).lo),
          0,
          r - 1,
        )),
        h
          ? (s =
              qe(
                Math.max(
                  kn(a, o.axis, u, !0).hi + 1,
                  n ? 0 : kn(t, l, o.getPixelForValue(u), !0).hi + 1,
                ),
                i,
                r,
              ) - i)
          : (s = r - i);
    }
    return { start: i, count: s };
  }
  function Ux(e) {
    const { xScale: t, yScale: n, _scaleRanges: r } = e,
      i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
    if (!r) return (e._scaleRanges = i), !0;
    const s =
      r.xmin !== t.min ||
      r.xmax !== t.max ||
      r.ymin !== n.min ||
      r.ymax !== n.max;
    return Object.assign(r, i), s;
  }
  const da = (e) => e === 0 || e === 1,
    Ag = (e, t, n) =>
      -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Se) / n)),
    Eg = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Se) / n) + 1,
    Is = {
      linear: (e) => e,
      easeInQuad: (e) => e * e,
      easeOutQuad: (e) => -e * (e - 2),
      easeInOutQuad: (e) =>
        (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
      easeInCubic: (e) => e * e * e,
      easeOutCubic: (e) => (e -= 1) * e * e + 1,
      easeInOutCubic: (e) =>
        (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
      easeInQuart: (e) => e * e * e * e,
      easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
      easeInOutQuart: (e) =>
        (e /= 0.5) < 1
          ? 0.5 * e * e * e * e
          : -0.5 * ((e -= 2) * e * e * e - 2),
      easeInQuint: (e) => e * e * e * e * e,
      easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
      easeInOutQuint: (e) =>
        (e /= 0.5) < 1
          ? 0.5 * e * e * e * e * e
          : 0.5 * ((e -= 2) * e * e * e * e + 2),
      easeInSine: (e) => -Math.cos(e * Ie) + 1,
      easeOutSine: (e) => Math.sin(e * Ie),
      easeInOutSine: (e) => -0.5 * (Math.cos(Ae * e) - 1),
      easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
      easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
      easeInOutExpo: (e) =>
        da(e)
          ? e
          : e < 0.5
            ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
            : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
      easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
      easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
      easeInOutCirc: (e) =>
        (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
      easeInElastic: (e) => (da(e) ? e : Ag(e, 0.075, 0.3)),
      easeOutElastic: (e) => (da(e) ? e : Eg(e, 0.075, 0.3)),
      easeInOutElastic(e) {
        return da(e)
          ? e
          : e < 0.5
            ? 0.5 * Ag(e * 2, 0.1125, 0.45)
            : 0.5 + 0.5 * Eg(e * 2 - 1, 0.1125, 0.45);
      },
      easeInBack(e) {
        return e * e * ((1.70158 + 1) * e - 1.70158);
      },
      easeOutBack(e) {
        return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
      },
      easeInOutBack(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      },
      easeInBounce: (e) => 1 - Is.easeOutBounce(1 - e),
      easeOutBounce(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      },
      easeInOutBounce: (e) =>
        e < 0.5
          ? Is.easeInBounce(e * 2) * 0.5
          : Is.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
    };
  function Lh(e) {
    if (e && typeof e == "object") {
      const t = e.toString();
      return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
    }
    return !1;
  }
  function kg(e) {
    return Lh(e) ? e : new mo(e);
  }
  function Eu(e) {
    return Lh(e) ? e : new mo(e).saturate(0.5).darken(0.1).hexString();
  }
  const QO = ["x", "y", "borderWidth", "radius", "tension"],
    KO = ["color", "borderColor", "backgroundColor"];
  function XO(e) {
    e.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0,
    }),
      e.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: (t) =>
          t !== "onProgress" && t !== "onComplete" && t !== "fn",
      }),
      e.set("animations", {
        colors: { type: "color", properties: KO },
        numbers: { type: "number", properties: QO },
      }),
      e.describe("animations", { _fallback: "animation" }),
      e.set("transitions", {
        active: { animation: { duration: 400 } },
        resize: { animation: { duration: 0 } },
        show: {
          animations: {
            colors: { from: "transparent" },
            visible: { type: "boolean", duration: 0 },
          },
        },
        hide: {
          animations: {
            colors: { to: "transparent" },
            visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
          },
        },
      });
  }
  function GO(e) {
    e.set("layout", {
      autoPadding: !0,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    });
  }
  const Cg = new Map();
  function JO(e, t) {
    t = t || {};
    const n = e + JSON.stringify(t);
    let r = Cg.get(n);
    return r || ((r = new Intl.NumberFormat(e, t)), Cg.set(n, r)), r;
  }
  function Ro(e, t, n) {
    return JO(t, n).format(e);
  }
  const Vx = {
    values(e) {
      return ke(e) ? e : "" + e;
    },
    numeric(e, t, n) {
      if (e === 0) return "0";
      const r = this.chart.options.locale;
      let i,
        s = e;
      if (n.length > 1) {
        const c = Math.max(
          Math.abs(n[0].value),
          Math.abs(n[n.length - 1].value),
        );
        (c < 1e-4 || c > 1e15) && (i = "scientific"), (s = ZO(e, n));
      }
      const o = Kn(Math.abs(s)),
        a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
        l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
      return Object.assign(l, this.options.ticks.format), Ro(e, r, l);
    },
    logarithmic(e, t, n) {
      if (e === 0) return "0";
      const r = n[t].significand || e / Math.pow(10, Math.floor(Kn(e)));
      return [1, 2, 3, 5, 10, 15].includes(r) || t > 0.8 * n.length
        ? Vx.numeric.call(this, e, t, n)
        : "";
    },
  };
  function ZO(e, t) {
    let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return (
      Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n
    );
  }
  var jc = { formatters: Vx };
  function eM(e) {
    e.set("scale", {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: "ticks",
      clip: !0,
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (t, n) => n.lineWidth,
        tickColor: (t, n) => n.color,
        offset: !1,
      },
      border: { display: !0, dash: [], dashOffset: 0, width: 1 },
      title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: jc.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2,
      },
    }),
      e.route("scale.ticks", "color", "", "color"),
      e.route("scale.grid", "color", "", "borderColor"),
      e.route("scale.border", "color", "", "borderColor"),
      e.route("scale.title", "color", "", "color"),
      e.describe("scale", {
        _fallback: !1,
        _scriptable: (t) =>
          !t.startsWith("before") &&
          !t.startsWith("after") &&
          t !== "callback" &&
          t !== "parser",
        _indexable: (t) =>
          t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
      }),
      e.describe("scales", { _fallback: "scale" }),
      e.describe("scale.ticks", {
        _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
        _indexable: (t) => t !== "backdropPadding",
      });
  }
  const Xr = Object.create(null),
    ef = Object.create(null);
  function Ds(e, t) {
    if (!t) return e;
    const n = t.split(".");
    for (let r = 0, i = n.length; r < i; ++r) {
      const s = n[r];
      e = e[s] || (e[s] = Object.create(null));
    }
    return e;
  }
  function ku(e, t, n) {
    return typeof t == "string" ? go(Ds(e, t), n) : go(Ds(e, ""), t);
  }
  class tM {
    constructor(t, n) {
      (this.animation = void 0),
        (this.backgroundColor = "rgba(0,0,0,0.1)"),
        (this.borderColor = "rgba(0,0,0,0.1)"),
        (this.color = "#666"),
        (this.datasets = {}),
        (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
        (this.elements = {}),
        (this.events = [
          "mousemove",
          "mouseout",
          "click",
          "touchstart",
          "touchmove",
        ]),
        (this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "normal",
          lineHeight: 1.2,
          weight: null,
        }),
        (this.hover = {}),
        (this.hoverBackgroundColor = (r, i) => Eu(i.backgroundColor)),
        (this.hoverBorderColor = (r, i) => Eu(i.borderColor)),
        (this.hoverColor = (r, i) => Eu(i.color)),
        (this.indexAxis = "x"),
        (this.interaction = {
          mode: "nearest",
          intersect: !0,
          includeInvisible: !1,
        }),
        (this.maintainAspectRatio = !0),
        (this.onHover = null),
        (this.onClick = null),
        (this.parsing = !0),
        (this.plugins = {}),
        (this.responsive = !0),
        (this.scale = void 0),
        (this.scales = {}),
        (this.showLine = !0),
        (this.drawActiveElementsOnTop = !0),
        this.describe(t),
        this.apply(n);
    }
    set(t, n) {
      return ku(this, t, n);
    }
    get(t) {
      return Ds(this, t);
    }
    describe(t, n) {
      return ku(ef, t, n);
    }
    override(t, n) {
      return ku(Xr, t, n);
    }
    route(t, n, r, i) {
      const s = Ds(this, t),
        o = Ds(this, r),
        a = "_" + n;
      Object.defineProperties(s, {
        [a]: { value: s[n], writable: !0 },
        [n]: {
          enumerable: !0,
          get() {
            const l = this[a],
              c = o[i];
            return re(l) ? Object.assign({}, c, l) : J(l, c);
          },
          set(l) {
            this[a] = l;
          },
        },
      });
    }
    apply(t) {
      t.forEach((n) => n(this));
    }
  }
  var Me = new tM(
    {
      _scriptable: (e) => !e.startsWith("on"),
      _indexable: (e) => e !== "events",
      hover: { _fallback: "interaction" },
      interaction: { _scriptable: !1, _indexable: !1 },
    },
    [XO, GO, eM],
  );
  function nM(e) {
    return !e || se(e.size) || se(e.family)
      ? null
      : (e.style ? e.style + " " : "") +
          (e.weight ? e.weight + " " : "") +
          e.size +
          "px " +
          e.family;
  }
  function Nl(e, t, n, r, i) {
    let s = t[i];
    return (
      s || ((s = t[i] = e.measureText(i).width), n.push(i)), s > r && (r = s), r
    );
  }
  function rM(e, t, n, r) {
    r = r || {};
    let i = (r.data = r.data || {}),
      s = (r.garbageCollect = r.garbageCollect || []);
    r.font !== t &&
      ((i = r.data = {}), (s = r.garbageCollect = []), (r.font = t)),
      e.save(),
      (e.font = t);
    let o = 0;
    const a = n.length;
    let l, c, u, f, h;
    for (l = 0; l < a; l++)
      if (((f = n[l]), f != null && !ke(f))) o = Nl(e, i, s, o, f);
      else if (ke(f))
        for (c = 0, u = f.length; c < u; c++)
          (h = f[c]), h != null && !ke(h) && (o = Nl(e, i, s, o, h));
    e.restore();
    const m = s.length / 2;
    if (m > n.length) {
      for (l = 0; l < m; l++) delete i[s[l]];
      s.splice(0, m);
    }
    return o;
  }
  function Ar(e, t, n) {
    const r = e.currentDevicePixelRatio,
      i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
    return Math.round((t - i) * r) / r + i;
  }
  function jg(e, t) {
    (!t && !e) ||
      ((t = t || e.getContext("2d")),
      t.save(),
      t.resetTransform(),
      t.clearRect(0, 0, e.width, e.height),
      t.restore());
  }
  function tf(e, t, n, r) {
    Hx(e, t, n, r, null);
  }
  function Hx(e, t, n, r, i) {
    let s, o, a, l, c, u, f, h;
    const m = t.pointStyle,
      g = t.rotation,
      v = t.radius;
    let b = (g || 0) * FO;
    if (
      m &&
      typeof m == "object" &&
      ((s = m.toString()),
      s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
    ) {
      e.save(),
        e.translate(n, r),
        e.rotate(b),
        e.drawImage(m, -m.width / 2, -m.height / 2, m.width, m.height),
        e.restore();
      return;
    }
    if (!(isNaN(v) || v <= 0)) {
      switch ((e.beginPath(), m)) {
        default:
          i ? e.ellipse(n, r, i / 2, v, 0, 0, Se) : e.arc(n, r, v, 0, Se),
            e.closePath();
          break;
        case "triangle":
          (u = i ? i / 2 : v),
            e.moveTo(n + Math.sin(b) * u, r - Math.cos(b) * v),
            (b += bg),
            e.lineTo(n + Math.sin(b) * u, r - Math.cos(b) * v),
            (b += bg),
            e.lineTo(n + Math.sin(b) * u, r - Math.cos(b) * v),
            e.closePath();
          break;
        case "rectRounded":
          (c = v * 0.516),
            (l = v - c),
            (o = Math.cos(b + Sr) * l),
            (f = Math.cos(b + Sr) * (i ? i / 2 - c : l)),
            (a = Math.sin(b + Sr) * l),
            (h = Math.sin(b + Sr) * (i ? i / 2 - c : l)),
            e.arc(n - f, r - a, c, b - Ae, b - Ie),
            e.arc(n + h, r - o, c, b - Ie, b),
            e.arc(n + f, r + a, c, b, b + Ie),
            e.arc(n - h, r + o, c, b + Ie, b + Ae),
            e.closePath();
          break;
        case "rect":
          if (!g) {
            (l = Math.SQRT1_2 * v),
              (u = i ? i / 2 : l),
              e.rect(n - u, r - l, 2 * u, 2 * l);
            break;
          }
          b += Sr;
        case "rectRot":
          (f = Math.cos(b) * (i ? i / 2 : v)),
            (o = Math.cos(b) * v),
            (a = Math.sin(b) * v),
            (h = Math.sin(b) * (i ? i / 2 : v)),
            e.moveTo(n - f, r - a),
            e.lineTo(n + h, r - o),
            e.lineTo(n + f, r + a),
            e.lineTo(n - h, r + o),
            e.closePath();
          break;
        case "crossRot":
          b += Sr;
        case "cross":
          (f = Math.cos(b) * (i ? i / 2 : v)),
            (o = Math.cos(b) * v),
            (a = Math.sin(b) * v),
            (h = Math.sin(b) * (i ? i / 2 : v)),
            e.moveTo(n - f, r - a),
            e.lineTo(n + f, r + a),
            e.moveTo(n + h, r - o),
            e.lineTo(n - h, r + o);
          break;
        case "star":
          (f = Math.cos(b) * (i ? i / 2 : v)),
            (o = Math.cos(b) * v),
            (a = Math.sin(b) * v),
            (h = Math.sin(b) * (i ? i / 2 : v)),
            e.moveTo(n - f, r - a),
            e.lineTo(n + f, r + a),
            e.moveTo(n + h, r - o),
            e.lineTo(n - h, r + o),
            (b += Sr),
            (f = Math.cos(b) * (i ? i / 2 : v)),
            (o = Math.cos(b) * v),
            (a = Math.sin(b) * v),
            (h = Math.sin(b) * (i ? i / 2 : v)),
            e.moveTo(n - f, r - a),
            e.lineTo(n + f, r + a),
            e.moveTo(n + h, r - o),
            e.lineTo(n - h, r + o);
          break;
        case "line":
          (o = i ? i / 2 : Math.cos(b) * v),
            (a = Math.sin(b) * v),
            e.moveTo(n - o, r - a),
            e.lineTo(n + o, r + a);
          break;
        case "dash":
          e.moveTo(n, r),
            e.lineTo(n + Math.cos(b) * (i ? i / 2 : v), r + Math.sin(b) * v);
          break;
        case !1:
          e.closePath();
          break;
      }
      e.fill(), t.borderWidth > 0 && e.stroke();
    }
  }
  function Cn(e, t, n) {
    return (
      (n = n || 0.5),
      !t ||
        (e &&
          e.x > t.left - n &&
          e.x < t.right + n &&
          e.y > t.top - n &&
          e.y < t.bottom + n)
    );
  }
  function Pc(e, t) {
    e.save(),
      e.beginPath(),
      e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
      e.clip();
  }
  function Tc(e) {
    e.restore();
  }
  function iM(e, t, n, r, i) {
    if (!t) return e.lineTo(n.x, n.y);
    if (i === "middle") {
      const s = (t.x + n.x) / 2;
      e.lineTo(s, t.y), e.lineTo(s, n.y);
    } else (i === "after") != !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
    e.lineTo(n.x, n.y);
  }
  function sM(e, t, n, r) {
    if (!t) return e.lineTo(n.x, n.y);
    e.bezierCurveTo(
      r ? t.cp1x : t.cp2x,
      r ? t.cp1y : t.cp2y,
      r ? n.cp2x : n.cp1x,
      r ? n.cp2y : n.cp1y,
      n.x,
      n.y,
    );
  }
  function oM(e, t) {
    t.translation && e.translate(t.translation[0], t.translation[1]),
      se(t.rotation) || e.rotate(t.rotation),
      t.color && (e.fillStyle = t.color),
      t.textAlign && (e.textAlign = t.textAlign),
      t.textBaseline && (e.textBaseline = t.textBaseline);
  }
  function aM(e, t, n, r, i) {
    if (i.strikethrough || i.underline) {
      const s = e.measureText(r),
        o = t - s.actualBoundingBoxLeft,
        a = t + s.actualBoundingBoxRight,
        l = n - s.actualBoundingBoxAscent,
        c = n + s.actualBoundingBoxDescent,
        u = i.strikethrough ? (l + c) / 2 : c;
      (e.strokeStyle = e.fillStyle),
        e.beginPath(),
        (e.lineWidth = i.decorationWidth || 2),
        e.moveTo(o, u),
        e.lineTo(a, u),
        e.stroke();
    }
  }
  function lM(e, t) {
    const n = e.fillStyle;
    (e.fillStyle = t.color),
      e.fillRect(t.left, t.top, t.width, t.height),
      (e.fillStyle = n);
  }
  function Gr(e, t, n, r, i, s = {}) {
    const o = ke(t) ? t : [t],
      a = s.strokeWidth > 0 && s.strokeColor !== "";
    let l, c;
    for (e.save(), e.font = i.string, oM(e, s), l = 0; l < o.length; ++l)
      (c = o[l]),
        s.backdrop && lM(e, s.backdrop),
        a &&
          (s.strokeColor && (e.strokeStyle = s.strokeColor),
          se(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
          e.strokeText(c, n, r, s.maxWidth)),
        e.fillText(c, n, r, s.maxWidth),
        aM(e, n, r, c, s),
        (r += Number(i.lineHeight));
    e.restore();
  }
  function xo(e, t) {
    const { x: n, y: r, w: i, h: s, radius: o } = t;
    e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * Ae, Ae, !0),
      e.lineTo(n, r + s - o.bottomLeft),
      e.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, Ae, Ie, !0),
      e.lineTo(n + i - o.bottomRight, r + s),
      e.arc(
        n + i - o.bottomRight,
        r + s - o.bottomRight,
        o.bottomRight,
        Ie,
        0,
        !0,
      ),
      e.lineTo(n + i, r + o.topRight),
      e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -Ie, !0),
      e.lineTo(n + o.topLeft, r);
  }
  const cM = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    uM =
      /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function dM(e, t) {
    const n = ("" + e).match(cM);
    if (!n || n[1] === "normal") return t * 1.2;
    switch (((e = +n[2]), n[3])) {
      case "px":
        return e;
      case "%":
        e /= 100;
        break;
    }
    return t * e;
  }
  const fM = (e) => +e || 0;
  function Ih(e, t) {
    const n = {},
      r = re(t),
      i = r ? Object.keys(t) : t,
      s = re(e) ? (r ? (o) => J(e[o], e[t[o]]) : (o) => e[o]) : () => e;
    for (const o of i) n[o] = fM(s(o));
    return n;
  }
  function Wx(e) {
    return Ih(e, { top: "y", right: "x", bottom: "y", left: "x" });
  }
  function Ur(e) {
    return Ih(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function it(e) {
    const t = Wx(e);
    return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
  }
  function Ve(e, t) {
    (e = e || {}), (t = t || Me.font);
    let n = J(e.size, t.size);
    typeof n == "string" && (n = parseInt(n, 10));
    let r = J(e.style, t.style);
    r &&
      !("" + r).match(uM) &&
      (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
    const i = {
      family: J(e.family, t.family),
      lineHeight: dM(J(e.lineHeight, t.lineHeight), n),
      size: n,
      style: r,
      weight: J(e.weight, t.weight),
      string: "",
    };
    return (i.string = nM(i)), i;
  }
  function ys(e, t, n, r) {
    let i, s, o;
    for (i = 0, s = e.length; i < s; ++i)
      if (((o = e[i]), o !== void 0 && o !== void 0)) return o;
  }
  function hM(e, t, n) {
    const { min: r, max: i } = e,
      s = Mx(t, (i - r) / 2),
      o = (a, l) => (n && a === 0 ? 0 : a + l);
    return { min: o(r, -Math.abs(s)), max: o(i, s) };
  }
  function br(e, t) {
    return Object.assign(Object.create(e), t);
  }
  function Dh(e, t = [""], n, r, i = () => e[0]) {
    const s = n || e;
    typeof r > "u" && (r = Qx("_fallback", e));
    const o = {
      [Symbol.toStringTag]: "Object",
      _cacheable: !0,
      _scopes: e,
      _rootScopes: s,
      _fallback: r,
      _getTarget: i,
      override: (a) => Dh([a, ...e], t, s, r),
    };
    return new Proxy(o, {
      deleteProperty(a, l) {
        return delete a[l], delete a._keys, delete e[0][l], !0;
      },
      get(a, l) {
        return qx(a, l, () => _M(l, t, e, a));
      },
      getOwnPropertyDescriptor(a, l) {
        return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(e[0]);
      },
      has(a, l) {
        return Tg(a).includes(l);
      },
      ownKeys(a) {
        return Tg(a);
      },
      set(a, l, c) {
        const u = a._storage || (a._storage = i());
        return (a[l] = u[l] = c), delete a._keys, !0;
      },
    });
  }
  function zi(e, t, n, r) {
    const i = {
      _cacheable: !1,
      _proxy: e,
      _context: t,
      _subProxy: n,
      _stack: new Set(),
      _descriptors: $x(e, r),
      setContext: (s) => zi(e, s, n, r),
      override: (s) => zi(e.override(s), t, n, r),
    };
    return new Proxy(i, {
      deleteProperty(s, o) {
        return delete s[o], delete e[o], !0;
      },
      get(s, o, a) {
        return qx(s, o, () => mM(s, o, a));
      },
      getOwnPropertyDescriptor(s, o) {
        return s._descriptors.allKeys
          ? Reflect.has(e, o)
            ? { enumerable: !0, configurable: !0 }
            : void 0
          : Reflect.getOwnPropertyDescriptor(e, o);
      },
      getPrototypeOf() {
        return Reflect.getPrototypeOf(e);
      },
      has(s, o) {
        return Reflect.has(e, o);
      },
      ownKeys() {
        return Reflect.ownKeys(e);
      },
      set(s, o, a) {
        return (e[o] = a), delete s[o], !0;
      },
    });
  }
  function $x(e, t = { scriptable: !0, indexable: !0 }) {
    const {
      _scriptable: n = t.scriptable,
      _indexable: r = t.indexable,
      _allKeys: i = t.allKeys,
    } = e;
    return {
      allKeys: i,
      scriptable: n,
      indexable: r,
      isScriptable: fr(n) ? n : () => n,
      isIndexable: fr(r) ? r : () => r,
    };
  }
  const pM = (e, t) => (e ? e + Oh(t) : t),
    Fh = (e, t) =>
      re(t) &&
      e !== "adapters" &&
      (Object.getPrototypeOf(t) === null || t.constructor === Object);
  function qx(e, t, n) {
    if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
      return e[t];
    const r = n();
    return (e[t] = r), r;
  }
  function mM(e, t, n) {
    const { _proxy: r, _context: i, _subProxy: s, _descriptors: o } = e;
    let a = r[t];
    return (
      fr(a) && o.isScriptable(t) && (a = gM(t, a, e, n)),
      ke(a) && a.length && (a = yM(t, a, e, o.isIndexable)),
      Fh(t, a) && (a = zi(a, i, s && s[t], o)),
      a
    );
  }
  function gM(e, t, n, r) {
    const { _proxy: i, _context: s, _subProxy: o, _stack: a } = n;
    if (a.has(e))
      throw new Error(
        "Recursion detected: " + Array.from(a).join("->") + "->" + e,
      );
    a.add(e);
    let l = t(s, o || r);
    return a.delete(e), Fh(e, l) && (l = zh(i._scopes, i, e, l)), l;
  }
  function yM(e, t, n, r) {
    const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = n;
    if (typeof s.index < "u" && r(e)) return t[s.index % t.length];
    if (re(t[0])) {
      const l = t,
        c = i._scopes.filter((u) => u !== l);
      t = [];
      for (const u of l) {
        const f = zh(c, i, e, u);
        t.push(zi(f, s, o && o[e], a));
      }
    }
    return t;
  }
  function Yx(e, t, n) {
    return fr(e) ? e(t, n) : e;
  }
  const vM = (e, t) =>
    e === !0 ? t : typeof e == "string" ? dr(t, e) : void 0;
  function xM(e, t, n, r, i) {
    for (const s of t) {
      const o = vM(n, s);
      if (o) {
        e.add(o);
        const a = Yx(o._fallback, n, i);
        if (typeof a < "u" && a !== n && a !== r) return a;
      } else if (o === !1 && typeof r < "u" && n !== r) return null;
    }
    return !1;
  }
  function zh(e, t, n, r) {
    const i = t._rootScopes,
      s = Yx(t._fallback, n, r),
      o = [...e, ...i],
      a = new Set();
    a.add(r);
    let l = Pg(a, o, n, s || n, r);
    return l === null ||
      (typeof s < "u" && s !== n && ((l = Pg(a, o, s, l, r)), l === null))
      ? !1
      : Dh(Array.from(a), [""], i, s, () => bM(t, n, r));
  }
  function Pg(e, t, n, r, i) {
    for (; n; ) n = xM(e, t, n, r, i);
    return n;
  }
  function bM(e, t, n) {
    const r = e._getTarget();
    t in r || (r[t] = {});
    const i = r[t];
    return ke(i) && re(n) ? n : i || {};
  }
  function _M(e, t, n, r) {
    let i;
    for (const s of t)
      if (((i = Qx(pM(s, e), n)), typeof i < "u"))
        return Fh(e, i) ? zh(n, r, e, i) : i;
  }
  function Qx(e, t) {
    for (const n of t) {
      if (!n) continue;
      const r = n[e];
      if (typeof r < "u") return r;
    }
  }
  function Tg(e) {
    let t = e._keys;
    return t || (t = e._keys = wM(e._scopes)), t;
  }
  function wM(e) {
    const t = new Set();
    for (const n of e)
      for (const r of Object.keys(n).filter((i) => !i.startsWith("_")))
        t.add(r);
    return Array.from(t);
  }
  function Kx(e, t, n, r) {
    const { iScale: i } = e,
      { key: s = "r" } = this._parsing,
      o = new Array(r);
    let a, l, c, u;
    for (a = 0, l = r; a < l; ++a)
      (c = a + n), (u = t[c]), (o[a] = { r: i.parse(dr(u, s), c) });
    return o;
  }
  const SM = Number.EPSILON || 1e-14,
    Bi = (e, t) => t < e.length && !e[t].skip && e[t],
    Xx = (e) => (e === "x" ? "y" : "x");
  function AM(e, t, n, r) {
    const i = e.skip ? t : e,
      s = t,
      o = n.skip ? t : n,
      a = Zd(s, i),
      l = Zd(o, s);
    let c = a / (a + l),
      u = l / (a + l);
    (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
    const f = r * c,
      h = r * u;
    return {
      previous: { x: s.x - f * (o.x - i.x), y: s.y - f * (o.y - i.y) },
      next: { x: s.x + h * (o.x - i.x), y: s.y + h * (o.y - i.y) },
    };
  }
  function EM(e, t, n) {
    const r = e.length;
    let i,
      s,
      o,
      a,
      l,
      c = Bi(e, 0);
    for (let u = 0; u < r - 1; ++u)
      if (((l = c), (c = Bi(e, u + 1)), !(!l || !c))) {
        if (Ls(t[u], 0, SM)) {
          n[u] = n[u + 1] = 0;
          continue;
        }
        (i = n[u] / t[u]),
          (s = n[u + 1] / t[u]),
          (a = Math.pow(i, 2) + Math.pow(s, 2)),
          !(a <= 9) &&
            ((o = 3 / Math.sqrt(a)),
            (n[u] = i * o * t[u]),
            (n[u + 1] = s * o * t[u]));
      }
  }
  function kM(e, t, n = "x") {
    const r = Xx(n),
      i = e.length;
    let s,
      o,
      a,
      l = Bi(e, 0);
    for (let c = 0; c < i; ++c) {
      if (((o = a), (a = l), (l = Bi(e, c + 1)), !a)) continue;
      const u = a[n],
        f = a[r];
      o &&
        ((s = (u - o[n]) / 3),
        (a[`cp1${n}`] = u - s),
        (a[`cp1${r}`] = f - s * t[c])),
        l &&
          ((s = (l[n] - u) / 3),
          (a[`cp2${n}`] = u + s),
          (a[`cp2${r}`] = f + s * t[c]));
    }
  }
  function CM(e, t = "x") {
    const n = Xx(t),
      r = e.length,
      i = Array(r).fill(0),
      s = Array(r);
    let o,
      a,
      l,
      c = Bi(e, 0);
    for (o = 0; o < r; ++o)
      if (((a = l), (l = c), (c = Bi(e, o + 1)), !!l)) {
        if (c) {
          const u = c[t] - l[t];
          i[o] = u !== 0 ? (c[n] - l[n]) / u : 0;
        }
        s[o] = a
          ? c
            ? fn(i[o - 1]) !== fn(i[o])
              ? 0
              : (i[o - 1] + i[o]) / 2
            : i[o - 1]
          : i[o];
      }
    EM(e, i, s), kM(e, s, t);
  }
  function fa(e, t, n) {
    return Math.max(Math.min(e, n), t);
  }
  function jM(e, t) {
    let n,
      r,
      i,
      s,
      o,
      a = Cn(e[0], t);
    for (n = 0, r = e.length; n < r; ++n)
      (o = s),
        (s = a),
        (a = n < r - 1 && Cn(e[n + 1], t)),
        s &&
          ((i = e[n]),
          o &&
            ((i.cp1x = fa(i.cp1x, t.left, t.right)),
            (i.cp1y = fa(i.cp1y, t.top, t.bottom))),
          a &&
            ((i.cp2x = fa(i.cp2x, t.left, t.right)),
            (i.cp2y = fa(i.cp2y, t.top, t.bottom))));
  }
  function PM(e, t, n, r, i) {
    let s, o, a, l;
    if (
      (t.spanGaps && (e = e.filter((c) => !c.skip)),
      t.cubicInterpolationMode === "monotone")
    )
      CM(e, i);
    else {
      let c = r ? e[e.length - 1] : e[0];
      for (s = 0, o = e.length; s < o; ++s)
        (a = e[s]),
          (l = AM(c, a, e[Math.min(s + 1, o - (r ? 0 : 1)) % o], t.tension)),
          (a.cp1x = l.previous.x),
          (a.cp1y = l.previous.y),
          (a.cp2x = l.next.x),
          (a.cp2y = l.next.y),
          (c = a);
    }
    t.capBezierPoints && jM(e, n);
  }
  function Bh() {
    return typeof window < "u" && typeof document < "u";
  }
  function Uh(e) {
    let t = e.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
  }
  function Rl(e, t, n) {
    let r;
    return (
      typeof e == "string"
        ? ((r = parseInt(e, 10)),
          e.indexOf("%") !== -1 && (r = (r / 100) * t.parentNode[n]))
        : (r = e),
      r
    );
  }
  const Oc = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
  function TM(e, t) {
    return Oc(e).getPropertyValue(t);
  }
  const OM = ["top", "right", "bottom", "left"];
  function Vr(e, t, n) {
    const r = {};
    n = n ? "-" + n : "";
    for (let i = 0; i < 4; i++) {
      const s = OM[i];
      r[s] = parseFloat(e[t + "-" + s + n]) || 0;
    }
    return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
  }
  const MM = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
  function NM(e, t) {
    const n = e.touches,
      r = n && n.length ? n[0] : e,
      { offsetX: i, offsetY: s } = r;
    let o = !1,
      a,
      l;
    if (MM(i, s, e.target)) (a = i), (l = s);
    else {
      const c = t.getBoundingClientRect();
      (a = r.clientX - c.left), (l = r.clientY - c.top), (o = !0);
    }
    return { x: a, y: l, box: o };
  }
  function Tr(e, t) {
    if ("native" in e) return e;
    const { canvas: n, currentDevicePixelRatio: r } = t,
      i = Oc(n),
      s = i.boxSizing === "border-box",
      o = Vr(i, "padding"),
      a = Vr(i, "border", "width"),
      { x: l, y: c, box: u } = NM(e, n),
      f = o.left + (u && a.left),
      h = o.top + (u && a.top);
    let { width: m, height: g } = t;
    return (
      s && ((m -= o.width + a.width), (g -= o.height + a.height)),
      {
        x: Math.round((((l - f) / m) * n.width) / r),
        y: Math.round((((c - h) / g) * n.height) / r),
      }
    );
  }
  function RM(e, t, n) {
    let r, i;
    if (t === void 0 || n === void 0) {
      const s = e && Uh(e);
      if (!s) (t = e.clientWidth), (n = e.clientHeight);
      else {
        const o = s.getBoundingClientRect(),
          a = Oc(s),
          l = Vr(a, "border", "width"),
          c = Vr(a, "padding");
        (t = o.width - c.width - l.width),
          (n = o.height - c.height - l.height),
          (r = Rl(a.maxWidth, s, "clientWidth")),
          (i = Rl(a.maxHeight, s, "clientHeight"));
      }
    }
    return { width: t, height: n, maxWidth: r || Ml, maxHeight: i || Ml };
  }
  const ha = (e) => Math.round(e * 10) / 10;
  function LM(e, t, n, r) {
    const i = Oc(e),
      s = Vr(i, "margin"),
      o = Rl(i.maxWidth, e, "clientWidth") || Ml,
      a = Rl(i.maxHeight, e, "clientHeight") || Ml,
      l = RM(e, t, n);
    let { width: c, height: u } = l;
    if (i.boxSizing === "content-box") {
      const h = Vr(i, "border", "width"),
        m = Vr(i, "padding");
      (c -= m.width + h.width), (u -= m.height + h.height);
    }
    return (
      (c = Math.max(0, c - s.width)),
      (u = Math.max(0, r ? c / r : u - s.height)),
      (c = ha(Math.min(c, o, l.maxWidth))),
      (u = ha(Math.min(u, a, l.maxHeight))),
      c && !u && (u = ha(c / 2)),
      (t !== void 0 || n !== void 0) &&
        r &&
        l.height &&
        u > l.height &&
        ((u = l.height), (c = ha(Math.floor(u * r)))),
      { width: c, height: u }
    );
  }
  function Og(e, t, n) {
    const r = t || 1,
      i = Math.floor(e.height * r),
      s = Math.floor(e.width * r);
    (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
    const o = e.canvas;
    return (
      o.style &&
        (n || (!o.style.height && !o.style.width)) &&
        ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
      e.currentDevicePixelRatio !== r || o.height !== i || o.width !== s
        ? ((e.currentDevicePixelRatio = r),
          (o.height = i),
          (o.width = s),
          e.ctx.setTransform(r, 0, 0, r, 0, 0),
          !0)
        : !1
    );
  }
  const IM = (function () {
    let e = !1;
    try {
      const t = {
        get passive() {
          return (e = !0), !1;
        },
      };
      Bh() &&
        (window.addEventListener("test", null, t),
        window.removeEventListener("test", null, t));
    } catch {}
    return e;
  })();
  function Mg(e, t) {
    const n = TM(e, t),
      r = n && n.match(/^(\d+)(\.\d+)?px$/);
    return r ? +r[1] : void 0;
  }
  function Or(e, t, n, r) {
    return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
  }
  function DM(e, t, n, r) {
    return {
      x: e.x + n * (t.x - e.x),
      y:
        r === "middle"
          ? n < 0.5
            ? e.y
            : t.y
          : r === "after"
            ? n < 1
              ? e.y
              : t.y
            : n > 0
              ? t.y
              : e.y,
    };
  }
  function FM(e, t, n, r) {
    const i = { x: e.cp2x, y: e.cp2y },
      s = { x: t.cp1x, y: t.cp1y },
      o = Or(e, i, n),
      a = Or(i, s, n),
      l = Or(s, t, n),
      c = Or(o, a, n),
      u = Or(a, l, n);
    return Or(c, u, n);
  }
  const zM = function (e, t) {
      return {
        x(n) {
          return e + e + t - n;
        },
        setWidth(n) {
          t = n;
        },
        textAlign(n) {
          return n === "center" ? n : n === "right" ? "left" : "right";
        },
        xPlus(n, r) {
          return n - r;
        },
        leftForLtr(n, r) {
          return n - r;
        },
      };
    },
    BM = function () {
      return {
        x(e) {
          return e;
        },
        setWidth(e) {},
        textAlign(e) {
          return e;
        },
        xPlus(e, t) {
          return e + t;
        },
        leftForLtr(e, t) {
          return e;
        },
      };
    };
  function ki(e, t, n) {
    return e ? zM(t, n) : BM();
  }
  function Gx(e, t) {
    let n, r;
    (t === "ltr" || t === "rtl") &&
      ((n = e.canvas.style),
      (r = [
        n.getPropertyValue("direction"),
        n.getPropertyPriority("direction"),
      ]),
      n.setProperty("direction", t, "important"),
      (e.prevTextDirection = r));
  }
  function Jx(e, t) {
    t !== void 0 &&
      (delete e.prevTextDirection,
      e.canvas.style.setProperty("direction", t[0], t[1]));
  }
  function Zx(e) {
    return e === "angle"
      ? { between: vo, compare: UO, normalize: St }
      : { between: En, compare: (t, n) => t - n, normalize: (t) => t };
  }
  function Ng({ start: e, end: t, count: n, loop: r, style: i }) {
    return {
      start: e % n,
      end: t % n,
      loop: r && (t - e + 1) % n === 0,
      style: i,
    };
  }
  function UM(e, t, n) {
    const { property: r, start: i, end: s } = n,
      { between: o, normalize: a } = Zx(r),
      l = t.length;
    let { start: c, end: u, loop: f } = e,
      h,
      m;
    if (f) {
      for (c += l, u += l, h = 0, m = l; h < m && o(a(t[c % l][r]), i, s); ++h)
        c--, u--;
      (c %= l), (u %= l);
    }
    return u < c && (u += l), { start: c, end: u, loop: f, style: e.style };
  }
  function eb(e, t, n) {
    if (!n) return [e];
    const { property: r, start: i, end: s } = n,
      o = t.length,
      { compare: a, between: l, normalize: c } = Zx(r),
      { start: u, end: f, loop: h, style: m } = UM(e, t, n),
      g = [];
    let v = !1,
      b = null,
      y,
      p,
      x;
    const _ = () => l(i, x, y) && a(i, x) !== 0,
      S = () => a(s, y) === 0 || l(s, x, y),
      E = () => v || _(),
      A = () => !v || S();
    for (let k = u, P = u; k <= f; ++k)
      (p = t[k % o]),
        !p.skip &&
          ((y = c(p[r])),
          y !== x &&
            ((v = l(y, i, s)),
            b === null && E() && (b = a(y, i) === 0 ? k : P),
            b !== null &&
              A() &&
              (g.push(Ng({ start: b, end: k, loop: h, count: o, style: m })),
              (b = null)),
            (P = k),
            (x = y)));
    return (
      b !== null &&
        g.push(Ng({ start: b, end: f, loop: h, count: o, style: m })),
      g
    );
  }
  function tb(e, t) {
    const n = [],
      r = e.segments;
    for (let i = 0; i < r.length; i++) {
      const s = eb(r[i], e.points, t);
      s.length && n.push(...s);
    }
    return n;
  }
  function VM(e, t, n, r) {
    let i = 0,
      s = t - 1;
    if (n && !r) for (; i < t && !e[i].skip; ) i++;
    for (; i < t && e[i].skip; ) i++;
    for (i %= t, n && (s += i); s > i && e[s % t].skip; ) s--;
    return (s %= t), { start: i, end: s };
  }
  function HM(e, t, n, r) {
    const i = e.length,
      s = [];
    let o = t,
      a = e[t],
      l;
    for (l = t + 1; l <= n; ++l) {
      const c = e[l % i];
      c.skip || c.stop
        ? a.skip ||
          ((r = !1),
          s.push({ start: t % i, end: (l - 1) % i, loop: r }),
          (t = o = c.stop ? l : null))
        : ((o = l), a.skip && (t = l)),
        (a = c);
    }
    return o !== null && s.push({ start: t % i, end: o % i, loop: r }), s;
  }
  function WM(e, t) {
    const n = e.points,
      r = e.options.spanGaps,
      i = n.length;
    if (!i) return [];
    const s = !!e._loop,
      { start: o, end: a } = VM(n, i, s, r);
    if (r === !0) return Rg(e, [{ start: o, end: a, loop: s }], n, t);
    const l = a < o ? a + i : a,
      c = !!e._fullLoop && o === 0 && a === i - 1;
    return Rg(e, HM(n, o, l, c), n, t);
  }
  function Rg(e, t, n, r) {
    return !r || !r.setContext || !n ? t : $M(e, t, n, r);
  }
  function $M(e, t, n, r) {
    const i = e._chart.getContext(),
      s = Lg(e.options),
      {
        _datasetIndex: o,
        options: { spanGaps: a },
      } = e,
      l = n.length,
      c = [];
    let u = s,
      f = t[0].start,
      h = f;
    function m(g, v, b, y) {
      const p = a ? -1 : 1;
      if (g !== v) {
        for (g += l; n[g % l].skip; ) g -= p;
        for (; n[v % l].skip; ) v += p;
        g % l !== v % l &&
          (c.push({ start: g % l, end: v % l, loop: b, style: y }),
          (u = y),
          (f = v % l));
      }
    }
    for (const g of t) {
      f = a ? f : g.start;
      let v = n[f % l],
        b;
      for (h = f + 1; h <= g.end; h++) {
        const y = n[h % l];
        (b = Lg(
          r.setContext(
            br(i, {
              type: "segment",
              p0: v,
              p1: y,
              p0DataIndex: (h - 1) % l,
              p1DataIndex: h % l,
              datasetIndex: o,
            }),
          ),
        )),
          qM(b, u) && m(f, h - 1, g.loop, u),
          (v = y),
          (u = b);
      }
      f < h - 1 && m(f, h - 1, g.loop, u);
    }
    return c;
  }
  function Lg(e) {
    return {
      backgroundColor: e.backgroundColor,
      borderCapStyle: e.borderCapStyle,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderJoinStyle: e.borderJoinStyle,
      borderWidth: e.borderWidth,
      borderColor: e.borderColor,
    };
  }
  function qM(e, t) {
    if (!t) return !1;
    const n = [],
      r = function (i, s) {
        return Lh(s) ? (n.includes(s) || n.push(s), n.indexOf(s)) : s;
      };
    return JSON.stringify(e, r) !== JSON.stringify(t, r);
  }
  /*!
   * Chart.js v4.4.3
   * https://www.chartjs.org
   * (c) 2024 Chart.js Contributors
   * Released under the MIT License
   */ class YM {
    constructor() {
      (this._request = null),
        (this._charts = new Map()),
        (this._running = !1),
        (this._lastDate = void 0);
    }
    _notify(t, n, r, i) {
      const s = n.listeners[i],
        o = n.duration;
      s.forEach((a) =>
        a({
          chart: t,
          initial: n.initial,
          numSteps: o,
          currentStep: Math.min(r - n.start, o),
        }),
      );
    }
    _refresh() {
      this._request ||
        ((this._running = !0),
        (this._request = Fx.call(window, () => {
          this._update(),
            (this._request = null),
            this._running && this._refresh();
        })));
    }
    _update(t = Date.now()) {
      let n = 0;
      this._charts.forEach((r, i) => {
        if (!r.running || !r.items.length) return;
        const s = r.items;
        let o = s.length - 1,
          a = !1,
          l;
        for (; o >= 0; --o)
          (l = s[o]),
            l._active
              ? (l._total > r.duration && (r.duration = l._total),
                l.tick(t),
                (a = !0))
              : ((s[o] = s[s.length - 1]), s.pop());
        a && (i.draw(), this._notify(i, r, t, "progress")),
          s.length ||
            ((r.running = !1),
            this._notify(i, r, t, "complete"),
            (r.initial = !1)),
          (n += s.length);
      }),
        (this._lastDate = t),
        n === 0 && (this._running = !1);
    }
    _getAnims(t) {
      const n = this._charts;
      let r = n.get(t);
      return (
        r ||
          ((r = {
            running: !1,
            initial: !0,
            items: [],
            listeners: { complete: [], progress: [] },
          }),
          n.set(t, r)),
        r
      );
    }
    listen(t, n, r) {
      this._getAnims(t).listeners[n].push(r);
    }
    add(t, n) {
      !n || !n.length || this._getAnims(t).items.push(...n);
    }
    has(t) {
      return this._getAnims(t).items.length > 0;
    }
    start(t) {
      const n = this._charts.get(t);
      n &&
        ((n.running = !0),
        (n.start = Date.now()),
        (n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0)),
        this._refresh());
    }
    running(t) {
      if (!this._running) return !1;
      const n = this._charts.get(t);
      return !(!n || !n.running || !n.items.length);
    }
    stop(t) {
      const n = this._charts.get(t);
      if (!n || !n.items.length) return;
      const r = n.items;
      let i = r.length - 1;
      for (; i >= 0; --i) r[i].cancel();
      (n.items = []), this._notify(t, n, Date.now(), "complete");
    }
    remove(t) {
      return this._charts.delete(t);
    }
  }
  var yn = new YM();
  const Ig = "transparent",
    QM = {
      boolean(e, t, n) {
        return n > 0.5 ? t : e;
      },
      color(e, t, n) {
        const r = kg(e || Ig),
          i = r.valid && kg(t || Ig);
        return i && i.valid ? i.mix(r, n).hexString() : t;
      },
      number(e, t, n) {
        return e + (t - e) * n;
      },
    };
  class KM {
    constructor(t, n, r, i) {
      const s = n[r];
      i = ys([t.to, i, s, t.from]);
      const o = ys([t.from, s, i]);
      (this._active = !0),
        (this._fn = t.fn || QM[t.type || typeof o]),
        (this._easing = Is[t.easing] || Is.linear),
        (this._start = Math.floor(Date.now() + (t.delay || 0))),
        (this._duration = this._total = Math.floor(t.duration)),
        (this._loop = !!t.loop),
        (this._target = n),
        (this._prop = r),
        (this._from = o),
        (this._to = i),
        (this._promises = void 0);
    }
    active() {
      return this._active;
    }
    update(t, n, r) {
      if (this._active) {
        this._notify(!1);
        const i = this._target[this._prop],
          s = r - this._start,
          o = this._duration - s;
        (this._start = r),
          (this._duration = Math.floor(Math.max(o, t.duration))),
          (this._total += s),
          (this._loop = !!t.loop),
          (this._to = ys([t.to, n, i, t.from])),
          (this._from = ys([t.from, i, n]));
      }
    }
    cancel() {
      this._active &&
        (this.tick(Date.now()), (this._active = !1), this._notify(!1));
    }
    tick(t) {
      const n = t - this._start,
        r = this._duration,
        i = this._prop,
        s = this._from,
        o = this._loop,
        a = this._to;
      let l;
      if (((this._active = s !== a && (o || n < r)), !this._active)) {
        (this._target[i] = a), this._notify(!0);
        return;
      }
      if (n < 0) {
        this._target[i] = s;
        return;
      }
      (l = (n / r) % 2),
        (l = o && l > 1 ? 2 - l : l),
        (l = this._easing(Math.min(1, Math.max(0, l)))),
        (this._target[i] = this._fn(s, a, l));
    }
    wait() {
      const t = this._promises || (this._promises = []);
      return new Promise((n, r) => {
        t.push({ res: n, rej: r });
      });
    }
    _notify(t) {
      const n = t ? "res" : "rej",
        r = this._promises || [];
      for (let i = 0; i < r.length; i++) r[i][n]();
    }
  }
  class nb {
    constructor(t, n) {
      (this._chart = t), (this._properties = new Map()), this.configure(n);
    }
    configure(t) {
      if (!re(t)) return;
      const n = Object.keys(Me.animation),
        r = this._properties;
      Object.getOwnPropertyNames(t).forEach((i) => {
        const s = t[i];
        if (!re(s)) return;
        const o = {};
        for (const a of n) o[a] = s[a];
        ((ke(s.properties) && s.properties) || [i]).forEach((a) => {
          (a === i || !r.has(a)) && r.set(a, o);
        });
      });
    }
    _animateOptions(t, n) {
      const r = n.options,
        i = GM(t, r);
      if (!i) return [];
      const s = this._createAnimations(i, r);
      return (
        r.$shared &&
          XM(t.options.$animations, r).then(
            () => {
              t.options = r;
            },
            () => {},
          ),
        s
      );
    }
    _createAnimations(t, n) {
      const r = this._properties,
        i = [],
        s = t.$animations || (t.$animations = {}),
        o = Object.keys(n),
        a = Date.now();
      let l;
      for (l = o.length - 1; l >= 0; --l) {
        const c = o[l];
        if (c.charAt(0) === "$") continue;
        if (c === "options") {
          i.push(...this._animateOptions(t, n));
          continue;
        }
        const u = n[c];
        let f = s[c];
        const h = r.get(c);
        if (f)
          if (h && f.active()) {
            f.update(h, u, a);
            continue;
          } else f.cancel();
        if (!h || !h.duration) {
          t[c] = u;
          continue;
        }
        (s[c] = f = new KM(h, t, c, u)), i.push(f);
      }
      return i;
    }
    update(t, n) {
      if (this._properties.size === 0) {
        Object.assign(t, n);
        return;
      }
      const r = this._createAnimations(t, n);
      if (r.length) return yn.add(this._chart, r), !0;
    }
  }
  function XM(e, t) {
    const n = [],
      r = Object.keys(t);
    for (let i = 0; i < r.length; i++) {
      const s = e[r[i]];
      s && s.active() && n.push(s.wait());
    }
    return Promise.all(n);
  }
  function GM(e, t) {
    if (!t) return;
    let n = e.options;
    if (!n) {
      e.options = t;
      return;
    }
    return (
      n.$shared &&
        (e.options = n =
          Object.assign({}, n, { $shared: !1, $animations: {} })),
      n
    );
  }
  function Dg(e, t) {
    const n = (e && e.options) || {},
      r = n.reverse,
      i = n.min === void 0 ? t : 0,
      s = n.max === void 0 ? t : 0;
    return { start: r ? s : i, end: r ? i : s };
  }
  function JM(e, t, n) {
    if (n === !1) return !1;
    const r = Dg(e, n),
      i = Dg(t, n);
    return { top: i.end, right: r.end, bottom: i.start, left: r.start };
  }
  function ZM(e) {
    let t, n, r, i;
    return (
      re(e)
        ? ((t = e.top), (n = e.right), (r = e.bottom), (i = e.left))
        : (t = n = r = i = e),
      { top: t, right: n, bottom: r, left: i, disabled: e === !1 }
    );
  }
  function rb(e, t) {
    const n = [],
      r = e._getSortedDatasetMetas(t);
    let i, s;
    for (i = 0, s = r.length; i < s; ++i) n.push(r[i].index);
    return n;
  }
  function Fg(e, t, n, r = {}) {
    const i = e.keys,
      s = r.mode === "single";
    let o, a, l, c;
    if (t !== null) {
      for (o = 0, a = i.length; o < a; ++o) {
        if (((l = +i[o]), l === n)) {
          if (r.all) continue;
          break;
        }
        (c = e.values[l]),
          Oe(c) && (s || t === 0 || fn(t) === fn(c)) && (t += c);
      }
      return t;
    }
  }
  function eN(e, t) {
    const { iScale: n, vScale: r } = t,
      i = n.axis === "x" ? "x" : "y",
      s = r.axis === "x" ? "x" : "y",
      o = Object.keys(e),
      a = new Array(o.length);
    let l, c, u;
    for (l = 0, c = o.length; l < c; ++l)
      (u = o[l]), (a[l] = { [i]: u, [s]: e[u] });
    return a;
  }
  function zg(e, t) {
    const n = e && e.options.stacked;
    return n || (n === void 0 && t.stack !== void 0);
  }
  function tN(e, t, n) {
    return `${e.id}.${t.id}.${n.stack || n.type}`;
  }
  function nN(e) {
    const { min: t, max: n, minDefined: r, maxDefined: i } = e.getUserBounds();
    return {
      min: r ? t : Number.NEGATIVE_INFINITY,
      max: i ? n : Number.POSITIVE_INFINITY,
    };
  }
  function rN(e, t, n) {
    const r = e[t] || (e[t] = {});
    return r[n] || (r[n] = {});
  }
  function Bg(e, t, n, r) {
    for (const i of t.getMatchingVisibleMetas(r).reverse()) {
      const s = e[i.index];
      if ((n && s > 0) || (!n && s < 0)) return i.index;
    }
    return null;
  }
  function Ug(e, t) {
    const { chart: n, _cachedMeta: r } = e,
      i = n._stacks || (n._stacks = {}),
      { iScale: s, vScale: o, index: a } = r,
      l = s.axis,
      c = o.axis,
      u = tN(s, o, r),
      f = t.length;
    let h;
    for (let m = 0; m < f; ++m) {
      const g = t[m],
        { [l]: v, [c]: b } = g,
        y = g._stacks || (g._stacks = {});
      (h = y[c] = rN(i, u, v)),
        (h[a] = b),
        (h._top = Bg(h, o, !0, r.type)),
        (h._bottom = Bg(h, o, !1, r.type));
      const p = h._visualValues || (h._visualValues = {});
      p[a] = b;
    }
  }
  function Cu(e, t) {
    const n = e.scales;
    return Object.keys(n)
      .filter((r) => n[r].axis === t)
      .shift();
  }
  function iN(e, t) {
    return br(e, {
      active: !1,
      dataset: void 0,
      datasetIndex: t,
      index: t,
      mode: "default",
      type: "dataset",
    });
  }
  function sN(e, t, n) {
    return br(e, {
      active: !1,
      dataIndex: t,
      parsed: void 0,
      raw: void 0,
      element: n,
      index: t,
      mode: "default",
      type: "data",
    });
  }
  function as(e, t) {
    const n = e.controller.index,
      r = e.vScale && e.vScale.axis;
    if (r) {
      t = t || e._parsed;
      for (const i of t) {
        const s = i._stacks;
        if (!s || s[r] === void 0 || s[r][n] === void 0) return;
        delete s[r][n],
          s[r]._visualValues !== void 0 &&
            s[r]._visualValues[n] !== void 0 &&
            delete s[r]._visualValues[n];
      }
    }
  }
  const ju = (e) => e === "reset" || e === "none",
    Vg = (e, t) => (t ? e : Object.assign({}, e)),
    oN = (e, t, n) =>
      e && !t.hidden && t._stacked && { keys: rb(n, !0), values: null };
  class Zt {
    constructor(t, n) {
      (this.chart = t),
        (this._ctx = t.ctx),
        (this.index = n),
        (this._cachedDataOpts = {}),
        (this._cachedMeta = this.getMeta()),
        (this._type = this._cachedMeta.type),
        (this.options = void 0),
        (this._parsing = !1),
        (this._data = void 0),
        (this._objectData = void 0),
        (this._sharedOptions = void 0),
        (this._drawStart = void 0),
        (this._drawCount = void 0),
        (this.enableOptionSharing = !1),
        (this.supportsDecimation = !1),
        (this.$context = void 0),
        (this._syncList = []),
        (this.datasetElementType = new.target.datasetElementType),
        (this.dataElementType = new.target.dataElementType),
        this.initialize();
    }
    initialize() {
      const t = this._cachedMeta;
      this.configure(),
        this.linkScales(),
        (t._stacked = zg(t.vScale, t)),
        this.addElements(),
        this.options.fill &&
          !this.chart.isPluginEnabled("filler") &&
          console.warn(
            "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
          );
    }
    updateIndex(t) {
      this.index !== t && as(this._cachedMeta), (this.index = t);
    }
    linkScales() {
      const t = this.chart,
        n = this._cachedMeta,
        r = this.getDataset(),
        i = (f, h, m, g) => (f === "x" ? h : f === "r" ? g : m),
        s = (n.xAxisID = J(r.xAxisID, Cu(t, "x"))),
        o = (n.yAxisID = J(r.yAxisID, Cu(t, "y"))),
        a = (n.rAxisID = J(r.rAxisID, Cu(t, "r"))),
        l = n.indexAxis,
        c = (n.iAxisID = i(l, s, o, a)),
        u = (n.vAxisID = i(l, o, s, a));
      (n.xScale = this.getScaleForId(s)),
        (n.yScale = this.getScaleForId(o)),
        (n.rScale = this.getScaleForId(a)),
        (n.iScale = this.getScaleForId(c)),
        (n.vScale = this.getScaleForId(u));
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
      return this.chart.scales[t];
    }
    _getOtherScale(t) {
      const n = this._cachedMeta;
      return t === n.iScale ? n.vScale : n.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const t = this._cachedMeta;
      this._data && Sg(this._data, this), t._stacked && as(t);
    }
    _dataCheck() {
      const t = this.getDataset(),
        n = t.data || (t.data = []),
        r = this._data;
      if (re(n)) {
        const i = this._cachedMeta;
        this._data = eN(n, i);
      } else if (r !== n) {
        if (r) {
          Sg(r, this);
          const i = this._cachedMeta;
          as(i), (i._parsed = []);
        }
        n && Object.isExtensible(n) && $O(n, this),
          (this._syncList = []),
          (this._data = n);
      }
    }
    addElements() {
      const t = this._cachedMeta;
      this._dataCheck(),
        this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
      const n = this._cachedMeta,
        r = this.getDataset();
      let i = !1;
      this._dataCheck();
      const s = n._stacked;
      (n._stacked = zg(n.vScale, n)),
        n.stack !== r.stack && ((i = !0), as(n), (n.stack = r.stack)),
        this._resyncElements(t),
        (i || s !== n._stacked) && Ug(this, n._parsed);
    }
    configure() {
      const t = this.chart.config,
        n = t.datasetScopeKeys(this._type),
        r = t.getOptionScopes(this.getDataset(), n, !0);
      (this.options = t.createResolver(r, this.getContext())),
        (this._parsing = this.options.parsing),
        (this._cachedDataOpts = {});
    }
    parse(t, n) {
      const { _cachedMeta: r, _data: i } = this,
        { iScale: s, _stacked: o } = r,
        a = s.axis;
      let l = t === 0 && n === i.length ? !0 : r._sorted,
        c = t > 0 && r._parsed[t - 1],
        u,
        f,
        h;
      if (this._parsing === !1) (r._parsed = i), (r._sorted = !0), (h = i);
      else {
        ke(i[t])
          ? (h = this.parseArrayData(r, i, t, n))
          : re(i[t])
            ? (h = this.parseObjectData(r, i, t, n))
            : (h = this.parsePrimitiveData(r, i, t, n));
        const m = () => f[a] === null || (c && f[a] < c[a]);
        for (u = 0; u < n; ++u)
          (r._parsed[u + t] = f = h[u]), l && (m() && (l = !1), (c = f));
        r._sorted = l;
      }
      o && Ug(this, h);
    }
    parsePrimitiveData(t, n, r, i) {
      const { iScale: s, vScale: o } = t,
        a = s.axis,
        l = o.axis,
        c = s.getLabels(),
        u = s === o,
        f = new Array(i);
      let h, m, g;
      for (h = 0, m = i; h < m; ++h)
        (g = h + r),
          (f[h] = { [a]: u || s.parse(c[g], g), [l]: o.parse(n[g], g) });
      return f;
    }
    parseArrayData(t, n, r, i) {
      const { xScale: s, yScale: o } = t,
        a = new Array(i);
      let l, c, u, f;
      for (l = 0, c = i; l < c; ++l)
        (u = l + r),
          (f = n[u]),
          (a[l] = { x: s.parse(f[0], u), y: o.parse(f[1], u) });
      return a;
    }
    parseObjectData(t, n, r, i) {
      const { xScale: s, yScale: o } = t,
        { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
        c = new Array(i);
      let u, f, h, m;
      for (u = 0, f = i; u < f; ++u)
        (h = u + r),
          (m = n[h]),
          (c[u] = { x: s.parse(dr(m, a), h), y: o.parse(dr(m, l), h) });
      return c;
    }
    getParsed(t) {
      return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
      return this._cachedMeta.data[t];
    }
    applyStack(t, n, r) {
      const i = this.chart,
        s = this._cachedMeta,
        o = n[t.axis],
        a = { keys: rb(i, !0), values: n._stacks[t.axis]._visualValues };
      return Fg(a, o, s.index, { mode: r });
    }
    updateRangeFromParsed(t, n, r, i) {
      const s = r[n.axis];
      let o = s === null ? NaN : s;
      const a = i && r._stacks[n.axis];
      i && a && ((i.values = a), (o = Fg(i, s, this._cachedMeta.index))),
        (t.min = Math.min(t.min, o)),
        (t.max = Math.max(t.max, o));
    }
    getMinMax(t, n) {
      const r = this._cachedMeta,
        i = r._parsed,
        s = r._sorted && t === r.iScale,
        o = i.length,
        a = this._getOtherScale(t),
        l = oN(n, r, this.chart),
        c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
        { min: u, max: f } = nN(a);
      let h, m;
      function g() {
        m = i[h];
        const v = m[a.axis];
        return !Oe(m[t.axis]) || u > v || f < v;
      }
      for (
        h = 0;
        h < o && !(!g() && (this.updateRangeFromParsed(c, t, m, l), s));
        ++h
      );
      if (s) {
        for (h = o - 1; h >= 0; --h)
          if (!g()) {
            this.updateRangeFromParsed(c, t, m, l);
            break;
          }
      }
      return c;
    }
    getAllParsedValues(t) {
      const n = this._cachedMeta._parsed,
        r = [];
      let i, s, o;
      for (i = 0, s = n.length; i < s; ++i)
        (o = n[i][t.axis]), Oe(o) && r.push(o);
      return r;
    }
    getMaxOverflow() {
      return !1;
    }
    getLabelAndValue(t) {
      const n = this._cachedMeta,
        r = n.iScale,
        i = n.vScale,
        s = this.getParsed(t);
      return {
        label: r ? "" + r.getLabelForValue(s[r.axis]) : "",
        value: i ? "" + i.getLabelForValue(s[i.axis]) : "",
      };
    }
    _update(t) {
      const n = this._cachedMeta;
      this.update(t || "default"),
        (n._clip = ZM(
          J(this.options.clip, JM(n.xScale, n.yScale, this.getMaxOverflow())),
        ));
    }
    update(t) {}
    draw() {
      const t = this._ctx,
        n = this.chart,
        r = this._cachedMeta,
        i = r.data || [],
        s = n.chartArea,
        o = [],
        a = this._drawStart || 0,
        l = this._drawCount || i.length - a,
        c = this.options.drawActiveElementsOnTop;
      let u;
      for (r.dataset && r.dataset.draw(t, s, a, l), u = a; u < a + l; ++u) {
        const f = i[u];
        f.hidden || (f.active && c ? o.push(f) : f.draw(t, s));
      }
      for (u = 0; u < o.length; ++u) o[u].draw(t, s);
    }
    getStyle(t, n) {
      const r = n ? "active" : "default";
      return t === void 0 && this._cachedMeta.dataset
        ? this.resolveDatasetElementOptions(r)
        : this.resolveDataElementOptions(t || 0, r);
    }
    getContext(t, n, r) {
      const i = this.getDataset();
      let s;
      if (t >= 0 && t < this._cachedMeta.data.length) {
        const o = this._cachedMeta.data[t];
        (s = o.$context || (o.$context = sN(this.getContext(), t, o))),
          (s.parsed = this.getParsed(t)),
          (s.raw = i.data[t]),
          (s.index = s.dataIndex = t);
      } else
        (s =
          this.$context ||
          (this.$context = iN(this.chart.getContext(), this.index))),
          (s.dataset = i),
          (s.index = s.datasetIndex = this.index);
      return (s.active = !!n), (s.mode = r), s;
    }
    resolveDatasetElementOptions(t) {
      return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, n) {
      return this._resolveElementOptions(this.dataElementType.id, n, t);
    }
    _resolveElementOptions(t, n = "default", r) {
      const i = n === "active",
        s = this._cachedDataOpts,
        o = t + "-" + n,
        a = s[o],
        l = this.enableOptionSharing && yo(r);
      if (a) return Vg(a, l);
      const c = this.chart.config,
        u = c.datasetElementScopeKeys(this._type, t),
        f = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
        h = c.getOptionScopes(this.getDataset(), u),
        m = Object.keys(Me.elements[t]),
        g = () => this.getContext(r, i, n),
        v = c.resolveNamedOptions(h, m, g, f);
      return (
        v.$shared && ((v.$shared = l), (s[o] = Object.freeze(Vg(v, l)))), v
      );
    }
    _resolveAnimations(t, n, r) {
      const i = this.chart,
        s = this._cachedDataOpts,
        o = `animation-${n}`,
        a = s[o];
      if (a) return a;
      let l;
      if (i.options.animation !== !1) {
        const u = this.chart.config,
          f = u.datasetAnimationScopeKeys(this._type, n),
          h = u.getOptionScopes(this.getDataset(), f);
        l = u.createResolver(h, this.getContext(t, r, n));
      }
      const c = new nb(i, l && l.animations);
      return l && l._cacheable && (s[o] = Object.freeze(c)), c;
    }
    getSharedOptions(t) {
      if (t.$shared)
        return (
          this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        );
    }
    includeOptions(t, n) {
      return !n || ju(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, n) {
      const r = this.resolveDataElementOptions(t, n),
        i = this._sharedOptions,
        s = this.getSharedOptions(r),
        o = this.includeOptions(n, s) || s !== i;
      return (
        this.updateSharedOptions(s, n, r),
        { sharedOptions: s, includeOptions: o }
      );
    }
    updateElement(t, n, r, i) {
      ju(i) ? Object.assign(t, r) : this._resolveAnimations(n, i).update(t, r);
    }
    updateSharedOptions(t, n, r) {
      t && !ju(n) && this._resolveAnimations(void 0, n).update(t, r);
    }
    _setStyle(t, n, r, i) {
      t.active = i;
      const s = this.getStyle(n, i);
      this._resolveAnimations(n, r, i).update(t, {
        options: (!i && this.getSharedOptions(s)) || s,
      });
    }
    removeHoverStyle(t, n, r) {
      this._setStyle(t, r, "active", !1);
    }
    setHoverStyle(t, n, r) {
      this._setStyle(t, r, "active", !0);
    }
    _removeDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
      const t = this._cachedMeta.dataset;
      t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
      const n = this._data,
        r = this._cachedMeta.data;
      for (const [a, l, c] of this._syncList) this[a](l, c);
      this._syncList = [];
      const i = r.length,
        s = n.length,
        o = Math.min(s, i);
      o && this.parse(0, o),
        s > i
          ? this._insertElements(i, s - i, t)
          : s < i && this._removeElements(s, i - s);
    }
    _insertElements(t, n, r = !0) {
      const i = this._cachedMeta,
        s = i.data,
        o = t + n;
      let a;
      const l = (c) => {
        for (c.length += n, a = c.length - 1; a >= o; a--) c[a] = c[a - n];
      };
      for (l(s), a = t; a < o; ++a) s[a] = new this.dataElementType();
      this._parsing && l(i._parsed),
        this.parse(t, n),
        r && this.updateElements(s, t, n, "reset");
    }
    updateElements(t, n, r, i) {}
    _removeElements(t, n) {
      const r = this._cachedMeta;
      if (this._parsing) {
        const i = r._parsed.splice(t, n);
        r._stacked && as(r, i);
      }
      r.data.splice(t, n);
    }
    _sync(t) {
      if (this._parsing) this._syncList.push(t);
      else {
        const [n, r, i] = t;
        this[n](r, i);
      }
      this.chart._dataChanges.push([this.index, ...t]);
    }
    _onDataPush() {
      const t = arguments.length;
      this._sync(["_insertElements", this.getDataset().data.length - t, t]);
    }
    _onDataPop() {
      this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
    }
    _onDataShift() {
      this._sync(["_removeElements", 0, 1]);
    }
    _onDataSplice(t, n) {
      n && this._sync(["_removeElements", t, n]);
      const r = arguments.length - 2;
      r && this._sync(["_insertElements", t, r]);
    }
    _onDataUnshift() {
      this._sync(["_insertElements", 0, arguments.length]);
    }
  }
  N(Zt, "defaults", {}),
    N(Zt, "datasetElementType", null),
    N(Zt, "dataElementType", null);
  function aN(e, t) {
    if (!e._cache.$bar) {
      const n = e.getMatchingVisibleMetas(t);
      let r = [];
      for (let i = 0, s = n.length; i < s; i++)
        r = r.concat(n[i].controller.getAllParsedValues(e));
      e._cache.$bar = Dx(r.sort((i, s) => i - s));
    }
    return e._cache.$bar;
  }
  function lN(e) {
    const t = e.iScale,
      n = aN(t, e.type);
    let r = t._length,
      i,
      s,
      o,
      a;
    const l = () => {
      o === 32767 ||
        o === -32768 ||
        (yo(a) && (r = Math.min(r, Math.abs(o - a) || r)), (a = o));
    };
    for (i = 0, s = n.length; i < s; ++i) (o = t.getPixelForValue(n[i])), l();
    for (a = void 0, i = 0, s = t.ticks.length; i < s; ++i)
      (o = t.getPixelForTick(i)), l();
    return r;
  }
  function cN(e, t, n, r) {
    const i = n.barThickness;
    let s, o;
    return (
      se(i)
        ? ((s = t.min * n.categoryPercentage), (o = n.barPercentage))
        : ((s = i * r), (o = 1)),
      { chunk: s / r, ratio: o, start: t.pixels[e] - s / 2 }
    );
  }
  function uN(e, t, n, r) {
    const i = t.pixels,
      s = i[e];
    let o = e > 0 ? i[e - 1] : null,
      a = e < i.length - 1 ? i[e + 1] : null;
    const l = n.categoryPercentage;
    o === null && (o = s - (a === null ? t.end - t.start : a - s)),
      a === null && (a = s + s - o);
    const c = s - ((s - Math.min(o, a)) / 2) * l;
    return {
      chunk: ((Math.abs(a - o) / 2) * l) / r,
      ratio: n.barPercentage,
      start: c,
    };
  }
  function dN(e, t, n, r) {
    const i = n.parse(e[0], r),
      s = n.parse(e[1], r),
      o = Math.min(i, s),
      a = Math.max(i, s);
    let l = o,
      c = a;
    Math.abs(o) > Math.abs(a) && ((l = a), (c = o)),
      (t[n.axis] = c),
      (t._custom = {
        barStart: l,
        barEnd: c,
        start: i,
        end: s,
        min: o,
        max: a,
      });
  }
  function ib(e, t, n, r) {
    return ke(e) ? dN(e, t, n, r) : (t[n.axis] = n.parse(e, r)), t;
  }
  function Hg(e, t, n, r) {
    const i = e.iScale,
      s = e.vScale,
      o = i.getLabels(),
      a = i === s,
      l = [];
    let c, u, f, h;
    for (c = n, u = n + r; c < u; ++c)
      (h = t[c]),
        (f = {}),
        (f[i.axis] = a || i.parse(o[c], c)),
        l.push(ib(h, f, s, c));
    return l;
  }
  function Pu(e) {
    return e && e.barStart !== void 0 && e.barEnd !== void 0;
  }
  function fN(e, t, n) {
    return e !== 0
      ? fn(e)
      : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
  }
  function hN(e) {
    let t, n, r, i, s;
    return (
      e.horizontal
        ? ((t = e.base > e.x), (n = "left"), (r = "right"))
        : ((t = e.base < e.y), (n = "bottom"), (r = "top")),
      t ? ((i = "end"), (s = "start")) : ((i = "start"), (s = "end")),
      { start: n, end: r, reverse: t, top: i, bottom: s }
    );
  }
  function pN(e, t, n, r) {
    let i = t.borderSkipped;
    const s = {};
    if (!i) {
      e.borderSkipped = s;
      return;
    }
    if (i === !0) {
      e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
      return;
    }
    const { start: o, end: a, reverse: l, top: c, bottom: u } = hN(e);
    i === "middle" &&
      n &&
      ((e.enableBorderRadius = !0),
      (n._top || 0) === r
        ? (i = c)
        : (n._bottom || 0) === r
          ? (i = u)
          : ((s[Wg(u, o, a, l)] = !0), (i = c))),
      (s[Wg(i, o, a, l)] = !0),
      (e.borderSkipped = s);
  }
  function Wg(e, t, n, r) {
    return r ? ((e = mN(e, t, n)), (e = $g(e, n, t))) : (e = $g(e, t, n)), e;
  }
  function mN(e, t, n) {
    return e === t ? n : e === n ? t : e;
  }
  function $g(e, t, n) {
    return e === "start" ? t : e === "end" ? n : e;
  }
  function gN(e, { inflateAmount: t }, n) {
    e.inflateAmount = t === "auto" ? (n === 1 ? 0.33 : 0) : t;
  }
  class Fs extends Zt {
    parsePrimitiveData(t, n, r, i) {
      return Hg(t, n, r, i);
    }
    parseArrayData(t, n, r, i) {
      return Hg(t, n, r, i);
    }
    parseObjectData(t, n, r, i) {
      const { iScale: s, vScale: o } = t,
        { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
        c = s.axis === "x" ? a : l,
        u = o.axis === "x" ? a : l,
        f = [];
      let h, m, g, v;
      for (h = r, m = r + i; h < m; ++h)
        (v = n[h]),
          (g = {}),
          (g[s.axis] = s.parse(dr(v, c), h)),
          f.push(ib(dr(v, u), g, o, h));
      return f;
    }
    updateRangeFromParsed(t, n, r, i) {
      super.updateRangeFromParsed(t, n, r, i);
      const s = r._custom;
      s &&
        n === this._cachedMeta.vScale &&
        ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)));
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(t) {
      const n = this._cachedMeta,
        { iScale: r, vScale: i } = n,
        s = this.getParsed(t),
        o = s._custom,
        a = Pu(o)
          ? "[" + o.start + ", " + o.end + "]"
          : "" + i.getLabelForValue(s[i.axis]);
      return { label: "" + r.getLabelForValue(s[r.axis]), value: a };
    }
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
      const t = this._cachedMeta;
      t.stack = this.getDataset().stack;
    }
    update(t) {
      const n = this._cachedMeta;
      this.updateElements(n.data, 0, n.data.length, t);
    }
    updateElements(t, n, r, i) {
      const s = i === "reset",
        {
          index: o,
          _cachedMeta: { vScale: a },
        } = this,
        l = a.getBasePixel(),
        c = a.isHorizontal(),
        u = this._getRuler(),
        { sharedOptions: f, includeOptions: h } = this._getSharedOptions(n, i);
      for (let m = n; m < n + r; m++) {
        const g = this.getParsed(m),
          v =
            s || se(g[a.axis])
              ? { base: l, head: l }
              : this._calculateBarValuePixels(m),
          b = this._calculateBarIndexPixels(m, u),
          y = (g._stacks || {})[a.axis],
          p = {
            horizontal: c,
            base: v.base,
            enableBorderRadius:
              !y || Pu(g._custom) || o === y._top || o === y._bottom,
            x: c ? v.head : b.center,
            y: c ? b.center : v.head,
            height: c ? b.size : Math.abs(v.size),
            width: c ? Math.abs(v.size) : b.size,
          };
        h &&
          (p.options =
            f || this.resolveDataElementOptions(m, t[m].active ? "active" : i));
        const x = p.options || t[m].options;
        pN(p, x, y, o), gN(p, x, u.ratio), this.updateElement(t[m], m, p, i);
      }
    }
    _getStacks(t, n) {
      const { iScale: r } = this._cachedMeta,
        i = r
          .getMatchingVisibleMetas(this._type)
          .filter((l) => l.controller.options.grouped),
        s = r.options.stacked,
        o = [],
        a = (l) => {
          const c = l.controller.getParsed(n),
            u = c && c[l.vScale.axis];
          if (se(u) || isNaN(u)) return !0;
        };
      for (const l of i)
        if (
          !(n !== void 0 && a(l)) &&
          ((s === !1 ||
            o.indexOf(l.stack) === -1 ||
            (s === void 0 && l.stack === void 0)) &&
            o.push(l.stack),
          l.index === t)
        )
          break;
      return o.length || o.push(void 0), o;
    }
    _getStackCount(t) {
      return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, n, r) {
      const i = this._getStacks(t, r),
        s = n !== void 0 ? i.indexOf(n) : -1;
      return s === -1 ? i.length - 1 : s;
    }
    _getRuler() {
      const t = this.options,
        n = this._cachedMeta,
        r = n.iScale,
        i = [];
      let s, o;
      for (s = 0, o = n.data.length; s < o; ++s)
        i.push(r.getPixelForValue(this.getParsed(s)[r.axis], s));
      const a = t.barThickness;
      return {
        min: a || lN(n),
        pixels: i,
        start: r._startPixel,
        end: r._endPixel,
        stackCount: this._getStackCount(),
        scale: r,
        grouped: t.grouped,
        ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
      };
    }
    _calculateBarValuePixels(t) {
      const {
          _cachedMeta: { vScale: n, _stacked: r, index: i },
          options: { base: s, minBarLength: o },
        } = this,
        a = s || 0,
        l = this.getParsed(t),
        c = l._custom,
        u = Pu(c);
      let f = l[n.axis],
        h = 0,
        m = r ? this.applyStack(n, l, r) : f,
        g,
        v;
      m !== f && ((h = m - f), (m = f)),
        u &&
          ((f = c.barStart),
          (m = c.barEnd - c.barStart),
          f !== 0 && fn(f) !== fn(c.barEnd) && (h = 0),
          (h += f));
      const b = !se(s) && !u ? s : h;
      let y = n.getPixelForValue(b);
      if (
        (this.chart.getDataVisibility(t)
          ? (g = n.getPixelForValue(h + m))
          : (g = y),
        (v = g - y),
        Math.abs(v) < o)
      ) {
        (v = fN(v, n, a) * o), f === a && (y -= v / 2);
        const p = n.getPixelForDecimal(0),
          x = n.getPixelForDecimal(1),
          _ = Math.min(p, x),
          S = Math.max(p, x);
        (y = Math.max(Math.min(y, S), _)),
          (g = y + v),
          r &&
            !u &&
            (l._stacks[n.axis]._visualValues[i] =
              n.getValueForPixel(g) - n.getValueForPixel(y));
      }
      if (y === n.getPixelForValue(a)) {
        const p = (fn(v) * n.getLineWidthForValue(a)) / 2;
        (y += p), (v -= p);
      }
      return { size: v, base: y, head: g, center: g + v / 2 };
    }
    _calculateBarIndexPixels(t, n) {
      const r = n.scale,
        i = this.options,
        s = i.skipNull,
        o = J(i.maxBarThickness, 1 / 0);
      let a, l;
      if (n.grouped) {
        const c = s ? this._getStackCount(t) : n.stackCount,
          u = i.barThickness === "flex" ? uN(t, n, i, c) : cN(t, n, i, c),
          f = this._getStackIndex(
            this.index,
            this._cachedMeta.stack,
            s ? t : void 0,
          );
        (a = u.start + u.chunk * f + u.chunk / 2),
          (l = Math.min(o, u.chunk * u.ratio));
      } else
        (a = r.getPixelForValue(this.getParsed(t)[r.axis], t)),
          (l = Math.min(o, n.min * n.ratio));
      return { base: a - l / 2, head: a + l / 2, center: a, size: l };
    }
    draw() {
      const t = this._cachedMeta,
        n = t.vScale,
        r = t.data,
        i = r.length;
      let s = 0;
      for (; s < i; ++s)
        this.getParsed(s)[n.axis] !== null &&
          !r[s].hidden &&
          r[s].draw(this._ctx);
    }
  }
  N(Fs, "id", "bar"),
    N(Fs, "defaults", {
      datasetElementType: !1,
      dataElementType: "bar",
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: !0,
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "base", "width", "height"],
        },
      },
    }),
    N(Fs, "overrides", {
      scales: {
        _index_: { type: "category", offset: !0, grid: { offset: !0 } },
        _value_: { type: "linear", beginAtZero: !0 },
      },
    });
  class Ba extends Zt {
    initialize() {
      (this.enableOptionSharing = !0), super.initialize();
    }
    parsePrimitiveData(t, n, r, i) {
      const s = super.parsePrimitiveData(t, n, r, i);
      for (let o = 0; o < s.length; o++)
        s[o]._custom = this.resolveDataElementOptions(o + r).radius;
      return s;
    }
    parseArrayData(t, n, r, i) {
      const s = super.parseArrayData(t, n, r, i);
      for (let o = 0; o < s.length; o++) {
        const a = n[r + o];
        s[o]._custom = J(a[2], this.resolveDataElementOptions(o + r).radius);
      }
      return s;
    }
    parseObjectData(t, n, r, i) {
      const s = super.parseObjectData(t, n, r, i);
      for (let o = 0; o < s.length; o++) {
        const a = n[r + o];
        s[o]._custom = J(
          a && a.r && +a.r,
          this.resolveDataElementOptions(o + r).radius,
        );
      }
      return s;
    }
    getMaxOverflow() {
      const t = this._cachedMeta.data;
      let n = 0;
      for (let r = t.length - 1; r >= 0; --r)
        n = Math.max(n, t[r].size(this.resolveDataElementOptions(r)) / 2);
      return n > 0 && n;
    }
    getLabelAndValue(t) {
      const n = this._cachedMeta,
        r = this.chart.data.labels || [],
        { xScale: i, yScale: s } = n,
        o = this.getParsed(t),
        a = i.getLabelForValue(o.x),
        l = s.getLabelForValue(o.y),
        c = o._custom;
      return {
        label: r[t] || "",
        value: "(" + a + ", " + l + (c ? ", " + c : "") + ")",
      };
    }
    update(t) {
      const n = this._cachedMeta.data;
      this.updateElements(n, 0, n.length, t);
    }
    updateElements(t, n, r, i) {
      const s = i === "reset",
        { iScale: o, vScale: a } = this._cachedMeta,
        { sharedOptions: l, includeOptions: c } = this._getSharedOptions(n, i),
        u = o.axis,
        f = a.axis;
      for (let h = n; h < n + r; h++) {
        const m = t[h],
          g = !s && this.getParsed(h),
          v = {},
          b = (v[u] = s ? o.getPixelForDecimal(0.5) : o.getPixelForValue(g[u])),
          y = (v[f] = s ? a.getBasePixel() : a.getPixelForValue(g[f]));
        (v.skip = isNaN(b) || isNaN(y)),
          c &&
            ((v.options =
              l || this.resolveDataElementOptions(h, m.active ? "active" : i)),
            s && (v.options.radius = 0)),
          this.updateElement(m, h, v, i);
      }
    }
    resolveDataElementOptions(t, n) {
      const r = this.getParsed(t);
      let i = super.resolveDataElementOptions(t, n);
      i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
      const s = i.radius;
      return (
        n !== "active" && (i.radius = 0), (i.radius += J(r && r._custom, s)), i
      );
    }
  }
  N(Ba, "id", "bubble"),
    N(Ba, "defaults", {
      datasetElementType: !1,
      dataElementType: "point",
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "borderWidth", "radius"],
        },
      },
    }),
    N(Ba, "overrides", {
      scales: { x: { type: "linear" }, y: { type: "linear" } },
    });
  function yN(e, t, n) {
    let r = 1,
      i = 1,
      s = 0,
      o = 0;
    if (t < Se) {
      const a = e,
        l = a + t,
        c = Math.cos(a),
        u = Math.sin(a),
        f = Math.cos(l),
        h = Math.sin(l),
        m = (x, _, S) => (vo(x, a, l, !0) ? 1 : Math.max(_, _ * n, S, S * n)),
        g = (x, _, S) => (vo(x, a, l, !0) ? -1 : Math.min(_, _ * n, S, S * n)),
        v = m(0, c, f),
        b = m(Ie, u, h),
        y = g(Ae, c, f),
        p = g(Ae + Ie, u, h);
      (r = (v - y) / 2),
        (i = (b - p) / 2),
        (s = -(v + y) / 2),
        (o = -(b + p) / 2);
    }
    return { ratioX: r, ratioY: i, offsetX: s, offsetY: o };
  }
  class Lr extends Zt {
    constructor(t, n) {
      super(t, n),
        (this.enableOptionSharing = !0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.offsetX = void 0),
        (this.offsetY = void 0);
    }
    linkScales() {}
    parse(t, n) {
      const r = this.getDataset().data,
        i = this._cachedMeta;
      if (this._parsing === !1) i._parsed = r;
      else {
        let s = (l) => +r[l];
        if (re(r[t])) {
          const { key: l = "value" } = this._parsing;
          s = (c) => +dr(r[c], l);
        }
        let o, a;
        for (o = t, a = t + n; o < a; ++o) i._parsed[o] = s(o);
      }
    }
    _getRotation() {
      return Kt(this.options.rotation - 90);
    }
    _getCircumference() {
      return Kt(this.options.circumference);
    }
    _getRotationExtents() {
      let t = Se,
        n = -Se;
      for (let r = 0; r < this.chart.data.datasets.length; ++r)
        if (
          this.chart.isDatasetVisible(r) &&
          this.chart.getDatasetMeta(r).type === this._type
        ) {
          const i = this.chart.getDatasetMeta(r).controller,
            s = i._getRotation(),
            o = i._getCircumference();
          (t = Math.min(t, s)), (n = Math.max(n, s + o));
        }
      return { rotation: t, circumference: n - t };
    }
    update(t) {
      const n = this.chart,
        { chartArea: r } = n,
        i = this._cachedMeta,
        s = i.data,
        o =
          this.getMaxBorderWidth() +
          this.getMaxOffset(s) +
          this.options.spacing,
        a = Math.max((Math.min(r.width, r.height) - o) / 2, 0),
        l = Math.min(OO(this.options.cutout, a), 1),
        c = this._getRingWeight(this.index),
        { circumference: u, rotation: f } = this._getRotationExtents(),
        { ratioX: h, ratioY: m, offsetX: g, offsetY: v } = yN(f, u, l),
        b = (r.width - o) / h,
        y = (r.height - o) / m,
        p = Math.max(Math.min(b, y) / 2, 0),
        x = Mx(this.options.radius, p),
        _ = Math.max(x * l, 0),
        S = (x - _) / this._getVisibleDatasetWeightTotal();
      (this.offsetX = g * x),
        (this.offsetY = v * x),
        (i.total = this.calculateTotal()),
        (this.outerRadius = x - S * this._getRingWeightOffset(this.index)),
        (this.innerRadius = Math.max(this.outerRadius - S * c, 0)),
        this.updateElements(s, 0, s.length, t);
    }
    _circumference(t, n) {
      const r = this.options,
        i = this._cachedMeta,
        s = this._getCircumference();
      return (n && r.animation.animateRotate) ||
        !this.chart.getDataVisibility(t) ||
        i._parsed[t] === null ||
        i.data[t].hidden
        ? 0
        : this.calculateCircumference((i._parsed[t] * s) / Se);
    }
    updateElements(t, n, r, i) {
      const s = i === "reset",
        o = this.chart,
        a = o.chartArea,
        c = o.options.animation,
        u = (a.left + a.right) / 2,
        f = (a.top + a.bottom) / 2,
        h = s && c.animateScale,
        m = h ? 0 : this.innerRadius,
        g = h ? 0 : this.outerRadius,
        { sharedOptions: v, includeOptions: b } = this._getSharedOptions(n, i);
      let y = this._getRotation(),
        p;
      for (p = 0; p < n; ++p) y += this._circumference(p, s);
      for (p = n; p < n + r; ++p) {
        const x = this._circumference(p, s),
          _ = t[p],
          S = {
            x: u + this.offsetX,
            y: f + this.offsetY,
            startAngle: y,
            endAngle: y + x,
            circumference: x,
            outerRadius: g,
            innerRadius: m,
          };
        b &&
          (S.options =
            v || this.resolveDataElementOptions(p, _.active ? "active" : i)),
          (y += x),
          this.updateElement(_, p, S, i);
      }
    }
    calculateTotal() {
      const t = this._cachedMeta,
        n = t.data;
      let r = 0,
        i;
      for (i = 0; i < n.length; i++) {
        const s = t._parsed[i];
        s !== null &&
          !isNaN(s) &&
          this.chart.getDataVisibility(i) &&
          !n[i].hidden &&
          (r += Math.abs(s));
      }
      return r;
    }
    calculateCircumference(t) {
      const n = this._cachedMeta.total;
      return n > 0 && !isNaN(t) ? Se * (Math.abs(t) / n) : 0;
    }
    getLabelAndValue(t) {
      const n = this._cachedMeta,
        r = this.chart,
        i = r.data.labels || [],
        s = Ro(n._parsed[t], r.options.locale);
      return { label: i[t] || "", value: s };
    }
    getMaxBorderWidth(t) {
      let n = 0;
      const r = this.chart;
      let i, s, o, a, l;
      if (!t) {
        for (i = 0, s = r.data.datasets.length; i < s; ++i)
          if (r.isDatasetVisible(i)) {
            (o = r.getDatasetMeta(i)), (t = o.data), (a = o.controller);
            break;
          }
      }
      if (!t) return 0;
      for (i = 0, s = t.length; i < s; ++i)
        (l = a.resolveDataElementOptions(i)),
          l.borderAlign !== "inner" &&
            (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
      return n;
    }
    getMaxOffset(t) {
      let n = 0;
      for (let r = 0, i = t.length; r < i; ++r) {
        const s = this.resolveDataElementOptions(r);
        n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
      }
      return n;
    }
    _getRingWeightOffset(t) {
      let n = 0;
      for (let r = 0; r < t; ++r)
        this.chart.isDatasetVisible(r) && (n += this._getRingWeight(r));
      return n;
    }
    _getRingWeight(t) {
      return Math.max(J(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }
  N(Lr, "id", "doughnut"),
    N(Lr, "defaults", {
      datasetElementType: !1,
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !1 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
            "spacing",
          ],
        },
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r",
    }),
    N(Lr, "descriptors", {
      _scriptable: (t) => t !== "spacing",
      _indexable: (t) =>
        t !== "spacing" &&
        !t.startsWith("borderDash") &&
        !t.startsWith("hoverBorderDash"),
    }),
    N(Lr, "overrides", {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const n = t.data;
              if (n.labels.length && n.datasets.length) {
                const {
                  labels: { pointStyle: r, color: i },
                } = t.legend.options;
                return n.labels.map((s, o) => {
                  const l = t.getDatasetMeta(0).controller.getStyle(o);
                  return {
                    text: s,
                    fillStyle: l.backgroundColor,
                    strokeStyle: l.borderColor,
                    fontColor: i,
                    lineWidth: l.borderWidth,
                    pointStyle: r,
                    hidden: !t.getDataVisibility(o),
                    index: o,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, n, r) {
            r.chart.toggleDataVisibility(n.index), r.chart.update();
          },
        },
      },
    });
  class Ua extends Zt {
    initialize() {
      (this.enableOptionSharing = !0),
        (this.supportsDecimation = !0),
        super.initialize();
    }
    update(t) {
      const n = this._cachedMeta,
        { dataset: r, data: i = [], _dataset: s } = n,
        o = this.chart._animationsDisabled;
      let { start: a, count: l } = Bx(n, i, o);
      (this._drawStart = a),
        (this._drawCount = l),
        Ux(n) && ((a = 0), (l = i.length)),
        (r._chart = this.chart),
        (r._datasetIndex = this.index),
        (r._decimated = !!s._decimated),
        (r.points = i);
      const c = this.resolveDatasetElementOptions(t);
      this.options.showLine || (c.borderWidth = 0),
        (c.segment = this.options.segment),
        this.updateElement(r, void 0, { animated: !o, options: c }, t),
        this.updateElements(i, a, l, t);
    }
    updateElements(t, n, r, i) {
      const s = i === "reset",
        { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
        { sharedOptions: u, includeOptions: f } = this._getSharedOptions(n, i),
        h = o.axis,
        m = a.axis,
        { spanGaps: g, segment: v } = this.options,
        b = Fi(g) ? g : Number.POSITIVE_INFINITY,
        y = this.chart._animationsDisabled || s || i === "none",
        p = n + r,
        x = t.length;
      let _ = n > 0 && this.getParsed(n - 1);
      for (let S = 0; S < x; ++S) {
        const E = t[S],
          A = y ? E : {};
        if (S < n || S >= p) {
          A.skip = !0;
          continue;
        }
        const k = this.getParsed(S),
          P = se(k[m]),
          T = (A[h] = o.getPixelForValue(k[h], S)),
          L = (A[m] =
            s || P
              ? a.getBasePixel()
              : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[m], S));
        (A.skip = isNaN(T) || isNaN(L) || P),
          (A.stop = S > 0 && Math.abs(k[h] - _[h]) > b),
          v && ((A.parsed = k), (A.raw = c.data[S])),
          f &&
            (A.options =
              u || this.resolveDataElementOptions(S, E.active ? "active" : i)),
          y || this.updateElement(E, S, A, i),
          (_ = k);
      }
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        n = t.dataset,
        r = (n.options && n.options.borderWidth) || 0,
        i = t.data || [];
      if (!i.length) return r;
      const s = i[0].size(this.resolveDataElementOptions(0)),
        o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
      return Math.max(r, s, o) / 2;
    }
    draw() {
      const t = this._cachedMeta;
      t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw();
    }
  }
  N(Ua, "id", "line"),
    N(Ua, "defaults", {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: !0,
      spanGaps: !1,
    }),
    N(Ua, "overrides", {
      scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
    });
  class zs extends Zt {
    constructor(t, n) {
      super(t, n), (this.innerRadius = void 0), (this.outerRadius = void 0);
    }
    getLabelAndValue(t) {
      const n = this._cachedMeta,
        r = this.chart,
        i = r.data.labels || [],
        s = Ro(n._parsed[t].r, r.options.locale);
      return { label: i[t] || "", value: s };
    }
    parseObjectData(t, n, r, i) {
      return Kx.bind(this)(t, n, r, i);
    }
    update(t) {
      const n = this._cachedMeta.data;
      this._updateRadius(), this.updateElements(n, 0, n.length, t);
    }
    getMinMax() {
      const t = this._cachedMeta,
        n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
      return (
        t.data.forEach((r, i) => {
          const s = this.getParsed(i).r;
          !isNaN(s) &&
            this.chart.getDataVisibility(i) &&
            (s < n.min && (n.min = s), s > n.max && (n.max = s));
        }),
        n
      );
    }
    _updateRadius() {
      const t = this.chart,
        n = t.chartArea,
        r = t.options,
        i = Math.min(n.right - n.left, n.bottom - n.top),
        s = Math.max(i / 2, 0),
        o = Math.max(
          r.cutoutPercentage ? (s / 100) * r.cutoutPercentage : 1,
          0,
        ),
        a = (s - o) / t.getVisibleDatasetCount();
      (this.outerRadius = s - a * this.index),
        (this.innerRadius = this.outerRadius - a);
    }
    updateElements(t, n, r, i) {
      const s = i === "reset",
        o = this.chart,
        l = o.options.animation,
        c = this._cachedMeta.rScale,
        u = c.xCenter,
        f = c.yCenter,
        h = c.getIndexAngle(0) - 0.5 * Ae;
      let m = h,
        g;
      const v = 360 / this.countVisibleElements();
      for (g = 0; g < n; ++g) m += this._computeAngle(g, i, v);
      for (g = n; g < n + r; g++) {
        const b = t[g];
        let y = m,
          p = m + this._computeAngle(g, i, v),
          x = o.getDataVisibility(g)
            ? c.getDistanceFromCenterForValue(this.getParsed(g).r)
            : 0;
        (m = p),
          s && (l.animateScale && (x = 0), l.animateRotate && (y = p = h));
        const _ = {
          x: u,
          y: f,
          innerRadius: 0,
          outerRadius: x,
          startAngle: y,
          endAngle: p,
          options: this.resolveDataElementOptions(g, b.active ? "active" : i),
        };
        this.updateElement(b, g, _, i);
      }
    }
    countVisibleElements() {
      const t = this._cachedMeta;
      let n = 0;
      return (
        t.data.forEach((r, i) => {
          !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && n++;
        }),
        n
      );
    }
    _computeAngle(t, n, r) {
      return this.chart.getDataVisibility(t)
        ? Kt(this.resolveDataElementOptions(t, n).angle || r)
        : 0;
    }
  }
  N(zs, "id", "polarArea"),
    N(zs, "defaults", {
      dataElementType: "arc",
      animation: { animateRotate: !0, animateScale: !0 },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
          ],
        },
      },
      indexAxis: "r",
      startAngle: 0,
    }),
    N(zs, "overrides", {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(t) {
              const n = t.data;
              if (n.labels.length && n.datasets.length) {
                const {
                  labels: { pointStyle: r, color: i },
                } = t.legend.options;
                return n.labels.map((s, o) => {
                  const l = t.getDatasetMeta(0).controller.getStyle(o);
                  return {
                    text: s,
                    fillStyle: l.backgroundColor,
                    strokeStyle: l.borderColor,
                    fontColor: i,
                    lineWidth: l.borderWidth,
                    pointStyle: r,
                    hidden: !t.getDataVisibility(o),
                    index: o,
                  };
                });
              }
              return [];
            },
          },
          onClick(t, n, r) {
            r.chart.toggleDataVisibility(n.index), r.chart.update();
          },
        },
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: { display: !1 },
          beginAtZero: !0,
          grid: { circular: !0 },
          pointLabels: { display: !1 },
          startAngle: 0,
        },
      },
    });
  class nf extends Lr {}
  N(nf, "id", "pie"),
    N(nf, "defaults", {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: "100%",
    });
  class Va extends Zt {
    getLabelAndValue(t) {
      const n = this._cachedMeta.vScale,
        r = this.getParsed(t);
      return {
        label: n.getLabels()[t],
        value: "" + n.getLabelForValue(r[n.axis]),
      };
    }
    parseObjectData(t, n, r, i) {
      return Kx.bind(this)(t, n, r, i);
    }
    update(t) {
      const n = this._cachedMeta,
        r = n.dataset,
        i = n.data || [],
        s = n.iScale.getLabels();
      if (((r.points = i), t !== "resize")) {
        const o = this.resolveDatasetElementOptions(t);
        this.options.showLine || (o.borderWidth = 0);
        const a = { _loop: !0, _fullLoop: s.length === i.length, options: o };
        this.updateElement(r, void 0, a, t);
      }
      this.updateElements(i, 0, i.length, t);
    }
    updateElements(t, n, r, i) {
      const s = this._cachedMeta.rScale,
        o = i === "reset";
      for (let a = n; a < n + r; a++) {
        const l = t[a],
          c = this.resolveDataElementOptions(a, l.active ? "active" : i),
          u = s.getPointPositionForValue(a, this.getParsed(a).r),
          f = o ? s.xCenter : u.x,
          h = o ? s.yCenter : u.y,
          m = {
            x: f,
            y: h,
            angle: u.angle,
            skip: isNaN(f) || isNaN(h),
            options: c,
          };
        this.updateElement(l, a, m, i);
      }
    }
  }
  N(Va, "id", "radar"),
    N(Va, "defaults", {
      datasetElementType: "line",
      dataElementType: "point",
      indexAxis: "r",
      showLine: !0,
      elements: { line: { fill: "start" } },
    }),
    N(Va, "overrides", {
      aspectRatio: 1,
      scales: { r: { type: "radialLinear" } },
    });
  class Ha extends Zt {
    getLabelAndValue(t) {
      const n = this._cachedMeta,
        r = this.chart.data.labels || [],
        { xScale: i, yScale: s } = n,
        o = this.getParsed(t),
        a = i.getLabelForValue(o.x),
        l = s.getLabelForValue(o.y);
      return { label: r[t] || "", value: "(" + a + ", " + l + ")" };
    }
    update(t) {
      const n = this._cachedMeta,
        { data: r = [] } = n,
        i = this.chart._animationsDisabled;
      let { start: s, count: o } = Bx(n, r, i);
      if (
        ((this._drawStart = s),
        (this._drawCount = o),
        Ux(n) && ((s = 0), (o = r.length)),
        this.options.showLine)
      ) {
        this.datasetElementType || this.addElements();
        const { dataset: a, _dataset: l } = n;
        (a._chart = this.chart),
          (a._datasetIndex = this.index),
          (a._decimated = !!l._decimated),
          (a.points = r);
        const c = this.resolveDatasetElementOptions(t);
        (c.segment = this.options.segment),
          this.updateElement(a, void 0, { animated: !i, options: c }, t);
      } else
        this.datasetElementType &&
          (delete n.dataset, (this.datasetElementType = !1));
      this.updateElements(r, s, o, t);
    }
    addElements() {
      const { showLine: t } = this.options;
      !this.datasetElementType &&
        t &&
        (this.datasetElementType = this.chart.registry.getElement("line")),
        super.addElements();
    }
    updateElements(t, n, r, i) {
      const s = i === "reset",
        { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
        u = this.resolveDataElementOptions(n, i),
        f = this.getSharedOptions(u),
        h = this.includeOptions(i, f),
        m = o.axis,
        g = a.axis,
        { spanGaps: v, segment: b } = this.options,
        y = Fi(v) ? v : Number.POSITIVE_INFINITY,
        p = this.chart._animationsDisabled || s || i === "none";
      let x = n > 0 && this.getParsed(n - 1);
      for (let _ = n; _ < n + r; ++_) {
        const S = t[_],
          E = this.getParsed(_),
          A = p ? S : {},
          k = se(E[g]),
          P = (A[m] = o.getPixelForValue(E[m], _)),
          T = (A[g] =
            s || k
              ? a.getBasePixel()
              : a.getPixelForValue(l ? this.applyStack(a, E, l) : E[g], _));
        (A.skip = isNaN(P) || isNaN(T) || k),
          (A.stop = _ > 0 && Math.abs(E[m] - x[m]) > y),
          b && ((A.parsed = E), (A.raw = c.data[_])),
          h &&
            (A.options =
              f || this.resolveDataElementOptions(_, S.active ? "active" : i)),
          p || this.updateElement(S, _, A, i),
          (x = E);
      }
      this.updateSharedOptions(f, i, u);
    }
    getMaxOverflow() {
      const t = this._cachedMeta,
        n = t.data || [];
      if (!this.options.showLine) {
        let a = 0;
        for (let l = n.length - 1; l >= 0; --l)
          a = Math.max(a, n[l].size(this.resolveDataElementOptions(l)) / 2);
        return a > 0 && a;
      }
      const r = t.dataset,
        i = (r.options && r.options.borderWidth) || 0;
      if (!n.length) return i;
      const s = n[0].size(this.resolveDataElementOptions(0)),
        o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
      return Math.max(i, s, o) / 2;
    }
  }
  N(Ha, "id", "scatter"),
    N(Ha, "defaults", {
      datasetElementType: !1,
      dataElementType: "point",
      showLine: !1,
      fill: !1,
    }),
    N(Ha, "overrides", {
      interaction: { mode: "point" },
      scales: { x: { type: "linear" }, y: { type: "linear" } },
    });
  var vN = Object.freeze({
    __proto__: null,
    BarController: Fs,
    BubbleController: Ba,
    DoughnutController: Lr,
    LineController: Ua,
    PieController: nf,
    PolarAreaController: zs,
    RadarController: Va,
    ScatterController: Ha,
  });
  function Er() {
    throw new Error(
      "This method is not implemented: Check that a complete date adapter is provided.",
    );
  }
  class Vh {
    constructor(t) {
      N(this, "options");
      this.options = t || {};
    }
    static override(t) {
      Object.assign(Vh.prototype, t);
    }
    init() {}
    formats() {
      return Er();
    }
    parse() {
      return Er();
    }
    format() {
      return Er();
    }
    add() {
      return Er();
    }
    diff() {
      return Er();
    }
    startOf() {
      return Er();
    }
    endOf() {
      return Er();
    }
  }
  var xN = { _date: Vh };
  function bN(e, t, n, r) {
    const { controller: i, data: s, _sorted: o } = e,
      a = i._cachedMeta.iScale;
    if (a && t === a.axis && t !== "r" && o && s.length) {
      const l = a._reversePixels ? HO : kn;
      if (r) {
        if (i._sharedOptions) {
          const c = s[0],
            u = typeof c.getRange == "function" && c.getRange(t);
          if (u) {
            const f = l(s, t, n - u),
              h = l(s, t, n + u);
            return { lo: f.lo, hi: h.hi };
          }
        }
      } else return l(s, t, n);
    }
    return { lo: 0, hi: s.length - 1 };
  }
  function Lo(e, t, n, r, i) {
    const s = e.getSortedVisibleDatasetMetas(),
      o = n[t];
    for (let a = 0, l = s.length; a < l; ++a) {
      const { index: c, data: u } = s[a],
        { lo: f, hi: h } = bN(s[a], t, o, i);
      for (let m = f; m <= h; ++m) {
        const g = u[m];
        g.skip || r(g, c, m);
      }
    }
  }
  function _N(e) {
    const t = e.indexOf("x") !== -1,
      n = e.indexOf("y") !== -1;
    return function (r, i) {
      const s = t ? Math.abs(r.x - i.x) : 0,
        o = n ? Math.abs(r.y - i.y) : 0;
      return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
    };
  }
  function Tu(e, t, n, r, i) {
    const s = [];
    return (
      (!i && !e.isPointInArea(t)) ||
        Lo(
          e,
          n,
          t,
          function (a, l, c) {
            (!i && !Cn(a, e.chartArea, 0)) ||
              (a.inRange(t.x, t.y, r) &&
                s.push({ element: a, datasetIndex: l, index: c }));
          },
          !0,
        ),
      s
    );
  }
  function wN(e, t, n, r) {
    let i = [];
    function s(o, a, l) {
      const { startAngle: c, endAngle: u } = o.getProps(
          ["startAngle", "endAngle"],
          r,
        ),
        { angle: f } = Lx(o, { x: t.x, y: t.y });
      vo(f, c, u) && i.push({ element: o, datasetIndex: a, index: l });
    }
    return Lo(e, n, t, s), i;
  }
  function SN(e, t, n, r, i, s) {
    let o = [];
    const a = _N(n);
    let l = Number.POSITIVE_INFINITY;
    function c(u, f, h) {
      const m = u.inRange(t.x, t.y, i);
      if (r && !m) return;
      const g = u.getCenterPoint(i);
      if (!(!!s || e.isPointInArea(g)) && !m) return;
      const b = a(t, g);
      b < l
        ? ((o = [{ element: u, datasetIndex: f, index: h }]), (l = b))
        : b === l && o.push({ element: u, datasetIndex: f, index: h });
    }
    return Lo(e, n, t, c), o;
  }
  function Ou(e, t, n, r, i, s) {
    return !s && !e.isPointInArea(t)
      ? []
      : n === "r" && !r
        ? wN(e, t, n, i)
        : SN(e, t, n, r, i, s);
  }
  function qg(e, t, n, r, i) {
    const s = [],
      o = n === "x" ? "inXRange" : "inYRange";
    let a = !1;
    return (
      Lo(e, n, t, (l, c, u) => {
        l[o](t[n], i) &&
          (s.push({ element: l, datasetIndex: c, index: u }),
          (a = a || l.inRange(t.x, t.y, i)));
      }),
      r && !a ? [] : s
    );
  }
  var AN = {
    evaluateInteractionItems: Lo,
    modes: {
      index(e, t, n, r) {
        const i = Tr(t, e),
          s = n.axis || "x",
          o = n.includeInvisible || !1,
          a = n.intersect ? Tu(e, i, s, r, o) : Ou(e, i, s, !1, r, o),
          l = [];
        return a.length
          ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
              const u = a[0].index,
                f = c.data[u];
              f &&
                !f.skip &&
                l.push({ element: f, datasetIndex: c.index, index: u });
            }),
            l)
          : [];
      },
      dataset(e, t, n, r) {
        const i = Tr(t, e),
          s = n.axis || "xy",
          o = n.includeInvisible || !1;
        let a = n.intersect ? Tu(e, i, s, r, o) : Ou(e, i, s, !1, r, o);
        if (a.length > 0) {
          const l = a[0].datasetIndex,
            c = e.getDatasetMeta(l).data;
          a = [];
          for (let u = 0; u < c.length; ++u)
            a.push({ element: c[u], datasetIndex: l, index: u });
        }
        return a;
      },
      point(e, t, n, r) {
        const i = Tr(t, e),
          s = n.axis || "xy",
          o = n.includeInvisible || !1;
        return Tu(e, i, s, r, o);
      },
      nearest(e, t, n, r) {
        const i = Tr(t, e),
          s = n.axis || "xy",
          o = n.includeInvisible || !1;
        return Ou(e, i, s, n.intersect, r, o);
      },
      x(e, t, n, r) {
        const i = Tr(t, e);
        return qg(e, i, "x", n.intersect, r);
      },
      y(e, t, n, r) {
        const i = Tr(t, e);
        return qg(e, i, "y", n.intersect, r);
      },
    },
  };
  const sb = ["left", "top", "right", "bottom"];
  function ls(e, t) {
    return e.filter((n) => n.pos === t);
  }
  function Yg(e, t) {
    return e.filter((n) => sb.indexOf(n.pos) === -1 && n.box.axis === t);
  }
  function cs(e, t) {
    return e.sort((n, r) => {
      const i = t ? r : n,
        s = t ? n : r;
      return i.weight === s.weight ? i.index - s.index : i.weight - s.weight;
    });
  }
  function EN(e) {
    const t = [];
    let n, r, i, s, o, a;
    for (n = 0, r = (e || []).length; n < r; ++n)
      (i = e[n]),
        ({
          position: s,
          options: { stack: o, stackWeight: a = 1 },
        } = i),
        t.push({
          index: n,
          box: i,
          pos: s,
          horizontal: i.isHorizontal(),
          weight: i.weight,
          stack: o && s + o,
          stackWeight: a,
        });
    return t;
  }
  function kN(e) {
    const t = {};
    for (const n of e) {
      const { stack: r, pos: i, stackWeight: s } = n;
      if (!r || !sb.includes(i)) continue;
      const o = t[r] || (t[r] = { count: 0, placed: 0, weight: 0, size: 0 });
      o.count++, (o.weight += s);
    }
    return t;
  }
  function CN(e, t) {
    const n = kN(e),
      { vBoxMaxWidth: r, hBoxMaxHeight: i } = t;
    let s, o, a;
    for (s = 0, o = e.length; s < o; ++s) {
      a = e[s];
      const { fullSize: l } = a.box,
        c = n[a.stack],
        u = c && a.stackWeight / c.weight;
      a.horizontal
        ? ((a.width = u ? u * r : l && t.availableWidth), (a.height = i))
        : ((a.width = r), (a.height = u ? u * i : l && t.availableHeight));
    }
    return n;
  }
  function jN(e) {
    const t = EN(e),
      n = cs(
        t.filter((c) => c.box.fullSize),
        !0,
      ),
      r = cs(ls(t, "left"), !0),
      i = cs(ls(t, "right")),
      s = cs(ls(t, "top"), !0),
      o = cs(ls(t, "bottom")),
      a = Yg(t, "x"),
      l = Yg(t, "y");
    return {
      fullSize: n,
      leftAndTop: r.concat(s),
      rightAndBottom: i.concat(l).concat(o).concat(a),
      chartArea: ls(t, "chartArea"),
      vertical: r.concat(i).concat(l),
      horizontal: s.concat(o).concat(a),
    };
  }
  function Qg(e, t, n, r) {
    return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
  }
  function ob(e, t) {
    (e.top = Math.max(e.top, t.top)),
      (e.left = Math.max(e.left, t.left)),
      (e.bottom = Math.max(e.bottom, t.bottom)),
      (e.right = Math.max(e.right, t.right));
  }
  function PN(e, t, n, r) {
    const { pos: i, box: s } = n,
      o = e.maxPadding;
    if (!re(i)) {
      n.size && (e[i] -= n.size);
      const f = r[n.stack] || { size: 0, count: 1 };
      (f.size = Math.max(f.size, n.horizontal ? s.height : s.width)),
        (n.size = f.size / f.count),
        (e[i] += n.size);
    }
    s.getPadding && ob(o, s.getPadding());
    const a = Math.max(0, t.outerWidth - Qg(o, e, "left", "right")),
      l = Math.max(0, t.outerHeight - Qg(o, e, "top", "bottom")),
      c = a !== e.w,
      u = l !== e.h;
    return (
      (e.w = a),
      (e.h = l),
      n.horizontal ? { same: c, other: u } : { same: u, other: c }
    );
  }
  function TN(e) {
    const t = e.maxPadding;
    function n(r) {
      const i = Math.max(t[r] - e[r], 0);
      return (e[r] += i), i;
    }
    (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
  }
  function ON(e, t) {
    const n = t.maxPadding;
    function r(i) {
      const s = { left: 0, top: 0, right: 0, bottom: 0 };
      return (
        i.forEach((o) => {
          s[o] = Math.max(t[o], n[o]);
        }),
        s
      );
    }
    return r(e ? ["left", "right"] : ["top", "bottom"]);
  }
  function vs(e, t, n, r) {
    const i = [];
    let s, o, a, l, c, u;
    for (s = 0, o = e.length, c = 0; s < o; ++s) {
      (a = e[s]),
        (l = a.box),
        l.update(a.width || t.w, a.height || t.h, ON(a.horizontal, t));
      const { same: f, other: h } = PN(t, n, a, r);
      (c |= f && i.length), (u = u || h), l.fullSize || i.push(a);
    }
    return (c && vs(i, t, n, r)) || u;
  }
  function pa(e, t, n, r, i) {
    (e.top = n),
      (e.left = t),
      (e.right = t + r),
      (e.bottom = n + i),
      (e.width = r),
      (e.height = i);
  }
  function Kg(e, t, n, r) {
    const i = n.padding;
    let { x: s, y: o } = t;
    for (const a of e) {
      const l = a.box,
        c = r[a.stack] || { count: 1, placed: 0, weight: 1 },
        u = a.stackWeight / c.weight || 1;
      if (a.horizontal) {
        const f = t.w * u,
          h = c.size || l.height;
        yo(c.start) && (o = c.start),
          l.fullSize
            ? pa(l, i.left, o, n.outerWidth - i.right - i.left, h)
            : pa(l, t.left + c.placed, o, f, h),
          (c.start = o),
          (c.placed += f),
          (o = l.bottom);
      } else {
        const f = t.h * u,
          h = c.size || l.width;
        yo(c.start) && (s = c.start),
          l.fullSize
            ? pa(l, s, i.top, h, n.outerHeight - i.bottom - i.top)
            : pa(l, s, t.top + c.placed, h, f),
          (c.start = s),
          (c.placed += f),
          (s = l.right);
      }
    }
    (t.x = s), (t.y = o);
  }
  var nt = {
    addBox(e, t) {
      e.boxes || (e.boxes = []),
        (t.fullSize = t.fullSize || !1),
        (t.position = t.position || "top"),
        (t.weight = t.weight || 0),
        (t._layers =
          t._layers ||
          function () {
            return [
              {
                z: 0,
                draw(n) {
                  t.draw(n);
                },
              },
            ];
          }),
        e.boxes.push(t);
    },
    removeBox(e, t) {
      const n = e.boxes ? e.boxes.indexOf(t) : -1;
      n !== -1 && e.boxes.splice(n, 1);
    },
    configure(e, t, n) {
      (t.fullSize = n.fullSize),
        (t.position = n.position),
        (t.weight = n.weight);
    },
    update(e, t, n, r) {
      if (!e) return;
      const i = it(e.options.layout.padding),
        s = Math.max(t - i.width, 0),
        o = Math.max(n - i.height, 0),
        a = jN(e.boxes),
        l = a.vertical,
        c = a.horizontal;
      de(e.boxes, (v) => {
        typeof v.beforeLayout == "function" && v.beforeLayout();
      });
      const u =
          l.reduce(
            (v, b) =>
              b.box.options && b.box.options.display === !1 ? v : v + 1,
            0,
          ) || 1,
        f = Object.freeze({
          outerWidth: t,
          outerHeight: n,
          padding: i,
          availableWidth: s,
          availableHeight: o,
          vBoxMaxWidth: s / 2 / u,
          hBoxMaxHeight: o / 2,
        }),
        h = Object.assign({}, i);
      ob(h, it(r));
      const m = Object.assign(
          { maxPadding: h, w: s, h: o, x: i.left, y: i.top },
          i,
        ),
        g = CN(l.concat(c), f);
      vs(a.fullSize, m, f, g),
        vs(l, m, f, g),
        vs(c, m, f, g) && vs(l, m, f, g),
        TN(m),
        Kg(a.leftAndTop, m, f, g),
        (m.x += m.w),
        (m.y += m.h),
        Kg(a.rightAndBottom, m, f, g),
        (e.chartArea = {
          left: m.left,
          top: m.top,
          right: m.left + m.w,
          bottom: m.top + m.h,
          height: m.h,
          width: m.w,
        }),
        de(a.chartArea, (v) => {
          const b = v.box;
          Object.assign(b, e.chartArea),
            b.update(m.w, m.h, { left: 0, top: 0, right: 0, bottom: 0 });
        });
    },
  };
  class ab {
    acquireContext(t, n) {}
    releaseContext(t) {
      return !1;
    }
    addEventListener(t, n, r) {}
    removeEventListener(t, n, r) {}
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(t, n, r, i) {
      return (
        (n = Math.max(0, n || t.width)),
        (r = r || t.height),
        { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) }
      );
    }
    isAttached(t) {
      return !0;
    }
    updateConfig(t) {}
  }
  class MN extends ab {
    acquireContext(t) {
      return (t && t.getContext && t.getContext("2d")) || null;
    }
    updateConfig(t) {
      t.options.animation = !1;
    }
  }
  const Wa = "$chartjs",
    NN = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout",
    },
    Xg = (e) => e === null || e === "";
  function RN(e, t) {
    const n = e.style,
      r = e.getAttribute("height"),
      i = e.getAttribute("width");
    if (
      ((e[Wa] = {
        initial: {
          height: r,
          width: i,
          style: { display: n.display, height: n.height, width: n.width },
        },
      }),
      (n.display = n.display || "block"),
      (n.boxSizing = n.boxSizing || "border-box"),
      Xg(i))
    ) {
      const s = Mg(e, "width");
      s !== void 0 && (e.width = s);
    }
    if (Xg(r))
      if (e.style.height === "") e.height = e.width / (t || 2);
      else {
        const s = Mg(e, "height");
        s !== void 0 && (e.height = s);
      }
    return e;
  }
  const lb = IM ? { passive: !0 } : !1;
  function LN(e, t, n) {
    e && e.addEventListener(t, n, lb);
  }
  function IN(e, t, n) {
    e && e.canvas && e.canvas.removeEventListener(t, n, lb);
  }
  function DN(e, t) {
    const n = NN[e.type] || e.type,
      { x: r, y: i } = Tr(e, t);
    return {
      type: n,
      chart: t,
      native: e,
      x: r !== void 0 ? r : null,
      y: i !== void 0 ? i : null,
    };
  }
  function Ll(e, t) {
    for (const n of e) if (n === t || n.contains(t)) return !0;
  }
  function FN(e, t, n) {
    const r = e.canvas,
      i = new MutationObserver((s) => {
        let o = !1;
        for (const a of s)
          (o = o || Ll(a.addedNodes, r)), (o = o && !Ll(a.removedNodes, r));
        o && n();
      });
    return i.observe(document, { childList: !0, subtree: !0 }), i;
  }
  function zN(e, t, n) {
    const r = e.canvas,
      i = new MutationObserver((s) => {
        let o = !1;
        for (const a of s)
          (o = o || Ll(a.removedNodes, r)), (o = o && !Ll(a.addedNodes, r));
        o && n();
      });
    return i.observe(document, { childList: !0, subtree: !0 }), i;
  }
  const bo = new Map();
  let Gg = 0;
  function cb() {
    const e = window.devicePixelRatio;
    e !== Gg &&
      ((Gg = e),
      bo.forEach((t, n) => {
        n.currentDevicePixelRatio !== e && t();
      }));
  }
  function BN(e, t) {
    bo.size || window.addEventListener("resize", cb), bo.set(e, t);
  }
  function UN(e) {
    bo.delete(e), bo.size || window.removeEventListener("resize", cb);
  }
  function VN(e, t, n) {
    const r = e.canvas,
      i = r && Uh(r);
    if (!i) return;
    const s = zx((a, l) => {
        const c = i.clientWidth;
        n(a, l), c < i.clientWidth && n();
      }, window),
      o = new ResizeObserver((a) => {
        const l = a[0],
          c = l.contentRect.width,
          u = l.contentRect.height;
        (c === 0 && u === 0) || s(c, u);
      });
    return o.observe(i), BN(e, s), o;
  }
  function Mu(e, t, n) {
    n && n.disconnect(), t === "resize" && UN(e);
  }
  function HN(e, t, n) {
    const r = e.canvas,
      i = zx((s) => {
        e.ctx !== null && n(DN(s, e));
      }, e);
    return LN(r, t, i), i;
  }
  class WN extends ab {
    acquireContext(t, n) {
      const r = t && t.getContext && t.getContext("2d");
      return r && r.canvas === t ? (RN(t, n), r) : null;
    }
    releaseContext(t) {
      const n = t.canvas;
      if (!n[Wa]) return !1;
      const r = n[Wa].initial;
      ["height", "width"].forEach((s) => {
        const o = r[s];
        se(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
      });
      const i = r.style || {};
      return (
        Object.keys(i).forEach((s) => {
          n.style[s] = i[s];
        }),
        (n.width = n.width),
        delete n[Wa],
        !0
      );
    }
    addEventListener(t, n, r) {
      this.removeEventListener(t, n);
      const i = t.$proxies || (t.$proxies = {}),
        o = { attach: FN, detach: zN, resize: VN }[n] || HN;
      i[n] = o(t, n, r);
    }
    removeEventListener(t, n) {
      const r = t.$proxies || (t.$proxies = {}),
        i = r[n];
      if (!i) return;
      (({ attach: Mu, detach: Mu, resize: Mu })[n] || IN)(t, n, i),
        (r[n] = void 0);
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(t, n, r, i) {
      return LM(t, n, r, i);
    }
    isAttached(t) {
      const n = t && Uh(t);
      return !!(n && n.isConnected);
    }
  }
  function $N(e) {
    return !Bh() ||
      (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
      ? MN
      : WN;
  }
  var Sa;
  let Ln =
    ((Sa = class {
      constructor() {
        N(this, "x");
        N(this, "y");
        N(this, "active", !1);
        N(this, "options");
        N(this, "$animations");
      }
      tooltipPosition(t) {
        const { x: n, y: r } = this.getProps(["x", "y"], t);
        return { x: n, y: r };
      }
      hasValue() {
        return Fi(this.x) && Fi(this.y);
      }
      getProps(t, n) {
        const r = this.$animations;
        if (!n || !r) return this;
        const i = {};
        return (
          t.forEach((s) => {
            i[s] = r[s] && r[s].active() ? r[s]._to : this[s];
          }),
          i
        );
      }
    }),
    N(Sa, "defaults", {}),
    N(Sa, "defaultRoutes"),
    Sa);
  function qN(e, t) {
    const n = e.options.ticks,
      r = YN(e),
      i = Math.min(n.maxTicksLimit || r, r),
      s = n.major.enabled ? KN(t) : [],
      o = s.length,
      a = s[0],
      l = s[o - 1],
      c = [];
    if (o > i) return XN(t, c, s, o / i), c;
    const u = QN(s, t, i);
    if (o > 0) {
      let f, h;
      const m = o > 1 ? Math.round((l - a) / (o - 1)) : null;
      for (ma(t, c, u, se(m) ? 0 : a - m, a), f = 0, h = o - 1; f < h; f++)
        ma(t, c, u, s[f], s[f + 1]);
      return ma(t, c, u, l, se(m) ? t.length : l + m), c;
    }
    return ma(t, c, u), c;
  }
  function YN(e) {
    const t = e.options.offset,
      n = e._tickSize(),
      r = e._length / n + (t ? 0 : 1),
      i = e._maxLength / n;
    return Math.floor(Math.min(r, i));
  }
  function QN(e, t, n) {
    const r = GN(e),
      i = t.length / n;
    if (!r) return Math.max(i, 1);
    const s = zO(r);
    for (let o = 0, a = s.length - 1; o < a; o++) {
      const l = s[o];
      if (l > i) return l;
    }
    return Math.max(i, 1);
  }
  function KN(e) {
    const t = [];
    let n, r;
    for (n = 0, r = e.length; n < r; n++) e[n].major && t.push(n);
    return t;
  }
  function XN(e, t, n, r) {
    let i = 0,
      s = n[0],
      o;
    for (r = Math.ceil(r), o = 0; o < e.length; o++)
      o === s && (t.push(e[o]), i++, (s = n[i * r]));
  }
  function ma(e, t, n, r, i) {
    const s = J(r, 0),
      o = Math.min(J(i, e.length), e.length);
    let a = 0,
      l,
      c,
      u;
    for (
      n = Math.ceil(n), i && ((l = i - r), (n = l / Math.floor(l / n))), u = s;
      u < 0;

    )
      a++, (u = Math.round(s + a * n));
    for (c = Math.max(s, 0); c < o; c++)
      c === u && (t.push(e[c]), a++, (u = Math.round(s + a * n)));
  }
  function GN(e) {
    const t = e.length;
    let n, r;
    if (t < 2) return !1;
    for (r = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== r) return !1;
    return r;
  }
  const JN = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
    Jg = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
    Zg = (e, t) => Math.min(t || e, e);
  function e0(e, t) {
    const n = [],
      r = e.length / t,
      i = e.length;
    let s = 0;
    for (; s < i; s += r) n.push(e[Math.floor(s)]);
    return n;
  }
  function ZN(e, t, n) {
    const r = e.ticks.length,
      i = Math.min(t, r - 1),
      s = e._startPixel,
      o = e._endPixel,
      a = 1e-6;
    let l = e.getPixelForTick(i),
      c;
    if (
      !(
        n &&
        (r === 1
          ? (c = Math.max(l - s, o - l))
          : t === 0
            ? (c = (e.getPixelForTick(1) - l) / 2)
            : (c = (l - e.getPixelForTick(i - 1)) / 2),
        (l += i < t ? c : -c),
        l < s - a || l > o + a)
      )
    )
      return l;
  }
  function eR(e, t) {
    de(e, (n) => {
      const r = n.gc,
        i = r.length / 2;
      let s;
      if (i > t) {
        for (s = 0; s < i; ++s) delete n.data[r[s]];
        r.splice(0, i);
      }
    });
  }
  function us(e) {
    return e.drawTicks ? e.tickLength : 0;
  }
  function t0(e, t) {
    if (!e.display) return 0;
    const n = Ve(e.font, t),
      r = it(e.padding);
    return (ke(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
  }
  function tR(e, t) {
    return br(e, { scale: t, type: "scale" });
  }
  function nR(e, t, n) {
    return br(e, { tick: n, index: t, type: "tick" });
  }
  function rR(e, t, n) {
    let r = Rh(e);
    return ((n && t !== "right") || (!n && t === "right")) && (r = JN(r)), r;
  }
  function iR(e, t, n, r) {
    const { top: i, left: s, bottom: o, right: a, chart: l } = e,
      { chartArea: c, scales: u } = l;
    let f = 0,
      h,
      m,
      g;
    const v = o - i,
      b = a - s;
    if (e.isHorizontal()) {
      if (((m = et(r, s, a)), re(n))) {
        const y = Object.keys(n)[0],
          p = n[y];
        g = u[y].getPixelForValue(p) + v - t;
      } else
        n === "center"
          ? (g = (c.bottom + c.top) / 2 + v - t)
          : (g = Jg(e, n, t));
      h = a - s;
    } else {
      if (re(n)) {
        const y = Object.keys(n)[0],
          p = n[y];
        m = u[y].getPixelForValue(p) - b + t;
      } else
        n === "center"
          ? (m = (c.left + c.right) / 2 - b + t)
          : (m = Jg(e, n, t));
      (g = et(r, o, i)), (f = n === "left" ? -Ie : Ie);
    }
    return { titleX: m, titleY: g, maxWidth: h, rotation: f };
  }
  class ii extends Ln {
    constructor(t) {
      super(),
        (this.id = t.id),
        (this.type = t.type),
        (this.options = void 0),
        (this.ctx = t.ctx),
        (this.chart = t.chart),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
        (this.maxWidth = void 0),
        (this.maxHeight = void 0),
        (this.paddingTop = void 0),
        (this.paddingBottom = void 0),
        (this.paddingLeft = void 0),
        (this.paddingRight = void 0),
        (this.axis = void 0),
        (this.labelRotation = void 0),
        (this.min = void 0),
        (this.max = void 0),
        (this._range = void 0),
        (this.ticks = []),
        (this._gridLineItems = null),
        (this._labelItems = null),
        (this._labelSizes = null),
        (this._length = 0),
        (this._maxLength = 0),
        (this._longestTextCache = {}),
        (this._startPixel = void 0),
        (this._endPixel = void 0),
        (this._reversePixels = !1),
        (this._userMax = void 0),
        (this._userMin = void 0),
        (this._suggestedMax = void 0),
        (this._suggestedMin = void 0),
        (this._ticksLength = 0),
        (this._borderValue = 0),
        (this._cache = {}),
        (this._dataLimitsCached = !1),
        (this.$context = void 0);
    }
    init(t) {
      (this.options = t.setContext(this.getContext())),
        (this.axis = t.axis),
        (this._userMin = this.parse(t.min)),
        (this._userMax = this.parse(t.max)),
        (this._suggestedMin = this.parse(t.suggestedMin)),
        (this._suggestedMax = this.parse(t.suggestedMax));
    }
    parse(t, n) {
      return t;
    }
    getUserBounds() {
      let {
        _userMin: t,
        _userMax: n,
        _suggestedMin: r,
        _suggestedMax: i,
      } = this;
      return (
        (t = _t(t, Number.POSITIVE_INFINITY)),
        (n = _t(n, Number.NEGATIVE_INFINITY)),
        (r = _t(r, Number.POSITIVE_INFINITY)),
        (i = _t(i, Number.NEGATIVE_INFINITY)),
        { min: _t(t, r), max: _t(n, i), minDefined: Oe(t), maxDefined: Oe(n) }
      );
    }
    getMinMax(t) {
      let {
          min: n,
          max: r,
          minDefined: i,
          maxDefined: s,
        } = this.getUserBounds(),
        o;
      if (i && s) return { min: n, max: r };
      const a = this.getMatchingVisibleMetas();
      for (let l = 0, c = a.length; l < c; ++l)
        (o = a[l].controller.getMinMax(this, t)),
          i || (n = Math.min(n, o.min)),
          s || (r = Math.max(r, o.max));
      return (
        (n = s && n > r ? r : n),
        (r = i && n > r ? n : r),
        { min: _t(n, _t(r, n)), max: _t(r, _t(n, r)) }
      );
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0,
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const t = this.chart.data;
      return (
        this.options.labels ||
        (this.isHorizontal() ? t.xLabels : t.yLabels) ||
        t.labels ||
        []
      );
    }
    getLabelItems(t = this.chart.chartArea) {
      return (
        this._labelItems || (this._labelItems = this._computeLabelItems(t))
      );
    }
    beforeLayout() {
      (this._cache = {}), (this._dataLimitsCached = !1);
    }
    beforeUpdate() {
      ve(this.options.beforeUpdate, [this]);
    }
    update(t, n, r) {
      const { beginAtZero: i, grace: s, ticks: o } = this.options,
        a = o.sampleSize;
      this.beforeUpdate(),
        (this.maxWidth = t),
        (this.maxHeight = n),
        (this._margins = r =
          Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
        (this.ticks = null),
        (this._labelSizes = null),
        (this._gridLineItems = null),
        (this._labelItems = null),
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        (this._maxLength = this.isHorizontal()
          ? this.width + r.left + r.right
          : this.height + r.top + r.bottom),
        this._dataLimitsCached ||
          (this.beforeDataLimits(),
          this.determineDataLimits(),
          this.afterDataLimits(),
          (this._range = hM(this, s, i)),
          (this._dataLimitsCached = !0)),
        this.beforeBuildTicks(),
        (this.ticks = this.buildTicks() || []),
        this.afterBuildTicks();
      const l = a < this.ticks.length;
      this._convertTicksToLabels(l ? e0(this.ticks, a) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display &&
          (o.autoSkip || o.source === "auto") &&
          ((this.ticks = qN(this, this.ticks)),
          (this._labelSizes = null),
          this.afterAutoSkip()),
        l && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate();
    }
    configure() {
      let t = this.options.reverse,
        n,
        r;
      this.isHorizontal()
        ? ((n = this.left), (r = this.right))
        : ((n = this.top), (r = this.bottom), (t = !t)),
        (this._startPixel = n),
        (this._endPixel = r),
        (this._reversePixels = t),
        (this._length = r - n),
        (this._alignToPixels = this.options.alignToPixels);
    }
    afterUpdate() {
      ve(this.options.afterUpdate, [this]);
    }
    beforeSetDimensions() {
      ve(this.options.beforeSetDimensions, [this]);
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = 0),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = 0),
          (this.bottom = this.height)),
        (this.paddingLeft = 0),
        (this.paddingTop = 0),
        (this.paddingRight = 0),
        (this.paddingBottom = 0);
    }
    afterSetDimensions() {
      ve(this.options.afterSetDimensions, [this]);
    }
    _callHooks(t) {
      this.chart.notifyPlugins(t, this.getContext()),
        ve(this.options[t], [this]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      ve(this.options.beforeTickToLabelConversion, [this]);
    }
    generateTickLabels(t) {
      const n = this.options.ticks;
      let r, i, s;
      for (r = 0, i = t.length; r < i; r++)
        (s = t[r]), (s.label = ve(n.callback, [s.value, r, t], this));
    }
    afterTickToLabelConversion() {
      ve(this.options.afterTickToLabelConversion, [this]);
    }
    beforeCalculateLabelRotation() {
      ve(this.options.beforeCalculateLabelRotation, [this]);
    }
    calculateLabelRotation() {
      const t = this.options,
        n = t.ticks,
        r = Zg(this.ticks.length, t.ticks.maxTicksLimit),
        i = n.minRotation || 0,
        s = n.maxRotation;
      let o = i,
        a,
        l,
        c;
      if (
        !this._isVisible() ||
        !n.display ||
        i >= s ||
        r <= 1 ||
        !this.isHorizontal()
      ) {
        this.labelRotation = i;
        return;
      }
      const u = this._getLabelSizes(),
        f = u.widest.width,
        h = u.highest.height,
        m = qe(this.chart.width - f, 0, this.maxWidth);
      (a = t.offset ? this.maxWidth / r : m / (r - 1)),
        f + 6 > a &&
          ((a = m / (r - (t.offset ? 0.5 : 1))),
          (l =
            this.maxHeight -
            us(t.grid) -
            n.padding -
            t0(t.title, this.chart.options.font)),
          (c = Math.sqrt(f * f + h * h)),
          (o = Mh(
            Math.min(
              Math.asin(qe((u.highest.height + 6) / a, -1, 1)),
              Math.asin(qe(l / c, -1, 1)) - Math.asin(qe(h / c, -1, 1)),
            ),
          )),
          (o = Math.max(i, Math.min(s, o)))),
        (this.labelRotation = o);
    }
    afterCalculateLabelRotation() {
      ve(this.options.afterCalculateLabelRotation, [this]);
    }
    afterAutoSkip() {}
    beforeFit() {
      ve(this.options.beforeFit, [this]);
    }
    fit() {
      const t = { width: 0, height: 0 },
        {
          chart: n,
          options: { ticks: r, title: i, grid: s },
        } = this,
        o = this._isVisible(),
        a = this.isHorizontal();
      if (o) {
        const l = t0(i, n.options.font);
        if (
          (a
            ? ((t.width = this.maxWidth), (t.height = us(s) + l))
            : ((t.height = this.maxHeight), (t.width = us(s) + l)),
          r.display && this.ticks.length)
        ) {
          const {
              first: c,
              last: u,
              widest: f,
              highest: h,
            } = this._getLabelSizes(),
            m = r.padding * 2,
            g = Kt(this.labelRotation),
            v = Math.cos(g),
            b = Math.sin(g);
          if (a) {
            const y = r.mirror ? 0 : b * f.width + v * h.height;
            t.height = Math.min(this.maxHeight, t.height + y + m);
          } else {
            const y = r.mirror ? 0 : v * f.width + b * h.height;
            t.width = Math.min(this.maxWidth, t.width + y + m);
          }
          this._calculatePadding(c, u, b, v);
        }
      }
      this._handleMargins(),
        a
          ? ((this.width = this._length =
              n.width - this._margins.left - this._margins.right),
            (this.height = t.height))
          : ((this.width = t.width),
            (this.height = this._length =
              n.height - this._margins.top - this._margins.bottom));
    }
    _calculatePadding(t, n, r, i) {
      const {
          ticks: { align: s, padding: o },
          position: a,
        } = this.options,
        l = this.labelRotation !== 0,
        c = a !== "top" && this.axis === "x";
      if (this.isHorizontal()) {
        const u = this.getPixelForTick(0) - this.left,
          f = this.right - this.getPixelForTick(this.ticks.length - 1);
        let h = 0,
          m = 0;
        l
          ? c
            ? ((h = i * t.width), (m = r * n.height))
            : ((h = r * t.height), (m = i * n.width))
          : s === "start"
            ? (m = n.width)
            : s === "end"
              ? (h = t.width)
              : s !== "inner" && ((h = t.width / 2), (m = n.width / 2)),
          (this.paddingLeft = Math.max(
            ((h - u + o) * this.width) / (this.width - u),
            0,
          )),
          (this.paddingRight = Math.max(
            ((m - f + o) * this.width) / (this.width - f),
            0,
          ));
      } else {
        let u = n.height / 2,
          f = t.height / 2;
        s === "start"
          ? ((u = 0), (f = t.height))
          : s === "end" && ((u = n.height), (f = 0)),
          (this.paddingTop = u + o),
          (this.paddingBottom = f + o);
      }
    }
    _handleMargins() {
      this._margins &&
        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
        (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
        (this._margins.right = Math.max(
          this.paddingRight,
          this._margins.right,
        )),
        (this._margins.bottom = Math.max(
          this.paddingBottom,
          this._margins.bottom,
        )));
    }
    afterFit() {
      ve(this.options.afterFit, [this]);
    }
    isHorizontal() {
      const { axis: t, position: n } = this.options;
      return n === "top" || n === "bottom" || t === "x";
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
      this.beforeTickToLabelConversion(), this.generateTickLabels(t);
      let n, r;
      for (n = 0, r = t.length; n < r; n++)
        se(t[n].label) && (t.splice(n, 1), r--, n--);
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let t = this._labelSizes;
      if (!t) {
        const n = this.options.ticks.sampleSize;
        let r = this.ticks;
        n < r.length && (r = e0(r, n)),
          (this._labelSizes = t =
            this._computeLabelSizes(
              r,
              r.length,
              this.options.ticks.maxTicksLimit,
            ));
      }
      return t;
    }
    _computeLabelSizes(t, n, r) {
      const { ctx: i, _longestTextCache: s } = this,
        o = [],
        a = [],
        l = Math.floor(n / Zg(n, r));
      let c = 0,
        u = 0,
        f,
        h,
        m,
        g,
        v,
        b,
        y,
        p,
        x,
        _,
        S;
      for (f = 0; f < n; f += l) {
        if (
          ((g = t[f].label),
          (v = this._resolveTickFontOptions(f)),
          (i.font = b = v.string),
          (y = s[b] = s[b] || { data: {}, gc: [] }),
          (p = v.lineHeight),
          (x = _ = 0),
          !se(g) && !ke(g))
        )
          (x = Nl(i, y.data, y.gc, x, g)), (_ = p);
        else if (ke(g))
          for (h = 0, m = g.length; h < m; ++h)
            (S = g[h]),
              !se(S) && !ke(S) && ((x = Nl(i, y.data, y.gc, x, S)), (_ += p));
        o.push(x), a.push(_), (c = Math.max(x, c)), (u = Math.max(_, u));
      }
      eR(s, n);
      const E = o.indexOf(c),
        A = a.indexOf(u),
        k = (P) => ({ width: o[P] || 0, height: a[P] || 0 });
      return {
        first: k(0),
        last: k(n - 1),
        widest: k(E),
        highest: k(A),
        widths: o,
        heights: a,
      };
    }
    getLabelForValue(t) {
      return t;
    }
    getPixelForValue(t, n) {
      return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
      const n = this.ticks;
      return t < 0 || t > n.length - 1
        ? null
        : this.getPixelForValue(n[t].value);
    }
    getPixelForDecimal(t) {
      this._reversePixels && (t = 1 - t);
      const n = this._startPixel + t * this._length;
      return VO(this._alignToPixels ? Ar(this.chart, n, 0) : n);
    }
    getDecimalForPixel(t) {
      const n = (t - this._startPixel) / this._length;
      return this._reversePixels ? 1 - n : n;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min: t, max: n } = this;
      return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
    }
    getContext(t) {
      const n = this.ticks || [];
      if (t >= 0 && t < n.length) {
        const r = n[t];
        return r.$context || (r.$context = nR(this.getContext(), t, r));
      }
      return (
        this.$context || (this.$context = tR(this.chart.getContext(), this))
      );
    }
    _tickSize() {
      const t = this.options.ticks,
        n = Kt(this.labelRotation),
        r = Math.abs(Math.cos(n)),
        i = Math.abs(Math.sin(n)),
        s = this._getLabelSizes(),
        o = t.autoSkipPadding || 0,
        a = s ? s.widest.width + o : 0,
        l = s ? s.highest.height + o : 0;
      return this.isHorizontal()
        ? l * r > a * i
          ? a / r
          : l / i
        : l * i < a * r
          ? l / r
          : a / i;
    }
    _isVisible() {
      const t = this.options.display;
      return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
      const n = this.axis,
        r = this.chart,
        i = this.options,
        { grid: s, position: o, border: a } = i,
        l = s.offset,
        c = this.isHorizontal(),
        f = this.ticks.length + (l ? 1 : 0),
        h = us(s),
        m = [],
        g = a.setContext(this.getContext()),
        v = g.display ? g.width : 0,
        b = v / 2,
        y = function (X) {
          return Ar(r, X, v);
        };
      let p, x, _, S, E, A, k, P, T, L, B, $;
      if (o === "top")
        (p = y(this.bottom)),
          (A = this.bottom - h),
          (P = p - b),
          (L = y(t.top) + b),
          ($ = t.bottom);
      else if (o === "bottom")
        (p = y(this.top)),
          (L = t.top),
          ($ = y(t.bottom) - b),
          (A = p + b),
          (P = this.top + h);
      else if (o === "left")
        (p = y(this.right)),
          (E = this.right - h),
          (k = p - b),
          (T = y(t.left) + b),
          (B = t.right);
      else if (o === "right")
        (p = y(this.left)),
          (T = t.left),
          (B = y(t.right) - b),
          (E = p + b),
          (k = this.left + h);
      else if (n === "x") {
        if (o === "center") p = y((t.top + t.bottom) / 2 + 0.5);
        else if (re(o)) {
          const X = Object.keys(o)[0],
            Q = o[X];
          p = y(this.chart.scales[X].getPixelForValue(Q));
        }
        (L = t.top), ($ = t.bottom), (A = p + b), (P = A + h);
      } else if (n === "y") {
        if (o === "center") p = y((t.left + t.right) / 2);
        else if (re(o)) {
          const X = Object.keys(o)[0],
            Q = o[X];
          p = y(this.chart.scales[X].getPixelForValue(Q));
        }
        (E = p - b), (k = E - h), (T = t.left), (B = t.right);
      }
      const ee = J(i.ticks.maxTicksLimit, f),
        q = Math.max(1, Math.ceil(f / ee));
      for (x = 0; x < f; x += q) {
        const X = this.getContext(x),
          Q = s.setContext(X),
          M = a.setContext(X),
          R = Q.lineWidth,
          F = Q.color,
          Y = M.dash || [],
          U = M.dashOffset,
          oe = Q.tickWidth,
          te = Q.tickColor,
          ae = Q.tickBorderDash || [],
          ce = Q.tickBorderDashOffset;
        (_ = ZN(this, x, l)),
          _ !== void 0 &&
            ((S = Ar(r, _, R)),
            c ? (E = k = T = B = S) : (A = P = L = $ = S),
            m.push({
              tx1: E,
              ty1: A,
              tx2: k,
              ty2: P,
              x1: T,
              y1: L,
              x2: B,
              y2: $,
              width: R,
              color: F,
              borderDash: Y,
              borderDashOffset: U,
              tickWidth: oe,
              tickColor: te,
              tickBorderDash: ae,
              tickBorderDashOffset: ce,
            }));
      }
      return (this._ticksLength = f), (this._borderValue = p), m;
    }
    _computeLabelItems(t) {
      const n = this.axis,
        r = this.options,
        { position: i, ticks: s } = r,
        o = this.isHorizontal(),
        a = this.ticks,
        { align: l, crossAlign: c, padding: u, mirror: f } = s,
        h = us(r.grid),
        m = h + u,
        g = f ? -u : m,
        v = -Kt(this.labelRotation),
        b = [];
      let y,
        p,
        x,
        _,
        S,
        E,
        A,
        k,
        P,
        T,
        L,
        B,
        $ = "middle";
      if (i === "top")
        (E = this.bottom - g), (A = this._getXAxisLabelAlignment());
      else if (i === "bottom")
        (E = this.top + g), (A = this._getXAxisLabelAlignment());
      else if (i === "left") {
        const q = this._getYAxisLabelAlignment(h);
        (A = q.textAlign), (S = q.x);
      } else if (i === "right") {
        const q = this._getYAxisLabelAlignment(h);
        (A = q.textAlign), (S = q.x);
      } else if (n === "x") {
        if (i === "center") E = (t.top + t.bottom) / 2 + m;
        else if (re(i)) {
          const q = Object.keys(i)[0],
            X = i[q];
          E = this.chart.scales[q].getPixelForValue(X) + m;
        }
        A = this._getXAxisLabelAlignment();
      } else if (n === "y") {
        if (i === "center") S = (t.left + t.right) / 2 - m;
        else if (re(i)) {
          const q = Object.keys(i)[0],
            X = i[q];
          S = this.chart.scales[q].getPixelForValue(X);
        }
        A = this._getYAxisLabelAlignment(h).textAlign;
      }
      n === "y" &&
        (l === "start" ? ($ = "top") : l === "end" && ($ = "bottom"));
      const ee = this._getLabelSizes();
      for (y = 0, p = a.length; y < p; ++y) {
        (x = a[y]), (_ = x.label);
        const q = s.setContext(this.getContext(y));
        (k = this.getPixelForTick(y) + s.labelOffset),
          (P = this._resolveTickFontOptions(y)),
          (T = P.lineHeight),
          (L = ke(_) ? _.length : 1);
        const X = L / 2,
          Q = q.color,
          M = q.textStrokeColor,
          R = q.textStrokeWidth;
        let F = A;
        o
          ? ((S = k),
            A === "inner" &&
              (y === p - 1
                ? (F = this.options.reverse ? "left" : "right")
                : y === 0
                  ? (F = this.options.reverse ? "right" : "left")
                  : (F = "center")),
            i === "top"
              ? c === "near" || v !== 0
                ? (B = -L * T + T / 2)
                : c === "center"
                  ? (B = -ee.highest.height / 2 - X * T + T)
                  : (B = -ee.highest.height + T / 2)
              : c === "near" || v !== 0
                ? (B = T / 2)
                : c === "center"
                  ? (B = ee.highest.height / 2 - X * T)
                  : (B = ee.highest.height - L * T),
            f && (B *= -1),
            v !== 0 && !q.showLabelBackdrop && (S += (T / 2) * Math.sin(v)))
          : ((E = k), (B = ((1 - L) * T) / 2));
        let Y;
        if (q.showLabelBackdrop) {
          const U = it(q.backdropPadding),
            oe = ee.heights[y],
            te = ee.widths[y];
          let ae = B - U.top,
            ce = 0 - U.left;
          switch ($) {
            case "middle":
              ae -= oe / 2;
              break;
            case "bottom":
              ae -= oe;
              break;
          }
          switch (A) {
            case "center":
              ce -= te / 2;
              break;
            case "right":
              ce -= te;
              break;
            case "inner":
              y === p - 1 ? (ce -= te) : y > 0 && (ce -= te / 2);
              break;
          }
          Y = {
            left: ce,
            top: ae,
            width: te + U.width,
            height: oe + U.height,
            color: q.backdropColor,
          };
        }
        b.push({
          label: _,
          font: P,
          textOffset: B,
          options: {
            rotation: v,
            color: Q,
            strokeColor: M,
            strokeWidth: R,
            textAlign: F,
            textBaseline: $,
            translation: [S, E],
            backdrop: Y,
          },
        });
      }
      return b;
    }
    _getXAxisLabelAlignment() {
      const { position: t, ticks: n } = this.options;
      if (-Kt(this.labelRotation)) return t === "top" ? "left" : "right";
      let i = "center";
      return (
        n.align === "start"
          ? (i = "left")
          : n.align === "end"
            ? (i = "right")
            : n.align === "inner" && (i = "inner"),
        i
      );
    }
    _getYAxisLabelAlignment(t) {
      const {
          position: n,
          ticks: { crossAlign: r, mirror: i, padding: s },
        } = this.options,
        o = this._getLabelSizes(),
        a = t + s,
        l = o.widest.width;
      let c, u;
      return (
        n === "left"
          ? i
            ? ((u = this.right + s),
              r === "near"
                ? (c = "left")
                : r === "center"
                  ? ((c = "center"), (u += l / 2))
                  : ((c = "right"), (u += l)))
            : ((u = this.right - a),
              r === "near"
                ? (c = "right")
                : r === "center"
                  ? ((c = "center"), (u -= l / 2))
                  : ((c = "left"), (u = this.left)))
          : n === "right"
            ? i
              ? ((u = this.left + s),
                r === "near"
                  ? (c = "right")
                  : r === "center"
                    ? ((c = "center"), (u -= l / 2))
                    : ((c = "left"), (u -= l)))
              : ((u = this.left + a),
                r === "near"
                  ? (c = "left")
                  : r === "center"
                    ? ((c = "center"), (u += l / 2))
                    : ((c = "right"), (u = this.right)))
            : (c = "right"),
        { textAlign: c, x: u }
      );
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) return;
      const t = this.chart,
        n = this.options.position;
      if (n === "left" || n === "right")
        return { top: 0, left: this.left, bottom: t.height, right: this.right };
      if (n === "top" || n === "bottom")
        return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
    }
    drawBackground() {
      const {
        ctx: t,
        options: { backgroundColor: n },
        left: r,
        top: i,
        width: s,
        height: o,
      } = this;
      n && (t.save(), (t.fillStyle = n), t.fillRect(r, i, s, o), t.restore());
    }
    getLineWidthForValue(t) {
      const n = this.options.grid;
      if (!this._isVisible() || !n.display) return 0;
      const i = this.ticks.findIndex((s) => s.value === t);
      return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
    }
    drawGrid(t) {
      const n = this.options.grid,
        r = this.ctx,
        i =
          this._gridLineItems ||
          (this._gridLineItems = this._computeGridLineItems(t));
      let s, o;
      const a = (l, c, u) => {
        !u.width ||
          !u.color ||
          (r.save(),
          (r.lineWidth = u.width),
          (r.strokeStyle = u.color),
          r.setLineDash(u.borderDash || []),
          (r.lineDashOffset = u.borderDashOffset),
          r.beginPath(),
          r.moveTo(l.x, l.y),
          r.lineTo(c.x, c.y),
          r.stroke(),
          r.restore());
      };
      if (n.display)
        for (s = 0, o = i.length; s < o; ++s) {
          const l = i[s];
          n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
            n.drawTicks &&
              a(
                { x: l.tx1, y: l.ty1 },
                { x: l.tx2, y: l.ty2 },
                {
                  color: l.tickColor,
                  width: l.tickWidth,
                  borderDash: l.tickBorderDash,
                  borderDashOffset: l.tickBorderDashOffset,
                },
              );
        }
    }
    drawBorder() {
      const {
          chart: t,
          ctx: n,
          options: { border: r, grid: i },
        } = this,
        s = r.setContext(this.getContext()),
        o = r.display ? s.width : 0;
      if (!o) return;
      const a = i.setContext(this.getContext(0)).lineWidth,
        l = this._borderValue;
      let c, u, f, h;
      this.isHorizontal()
        ? ((c = Ar(t, this.left, o) - o / 2),
          (u = Ar(t, this.right, a) + a / 2),
          (f = h = l))
        : ((f = Ar(t, this.top, o) - o / 2),
          (h = Ar(t, this.bottom, a) + a / 2),
          (c = u = l)),
        n.save(),
        (n.lineWidth = s.width),
        (n.strokeStyle = s.color),
        n.beginPath(),
        n.moveTo(c, f),
        n.lineTo(u, h),
        n.stroke(),
        n.restore();
    }
    drawLabels(t) {
      if (!this.options.ticks.display) return;
      const r = this.ctx,
        i = this._computeLabelArea();
      i && Pc(r, i);
      const s = this.getLabelItems(t);
      for (const o of s) {
        const a = o.options,
          l = o.font,
          c = o.label,
          u = o.textOffset;
        Gr(r, c, 0, u, l, a);
      }
      i && Tc(r);
    }
    drawTitle() {
      const {
        ctx: t,
        options: { position: n, title: r, reverse: i },
      } = this;
      if (!r.display) return;
      const s = Ve(r.font),
        o = it(r.padding),
        a = r.align;
      let l = s.lineHeight / 2;
      n === "bottom" || n === "center" || re(n)
        ? ((l += o.bottom),
          ke(r.text) && (l += s.lineHeight * (r.text.length - 1)))
        : (l += o.top);
      const {
        titleX: c,
        titleY: u,
        maxWidth: f,
        rotation: h,
      } = iR(this, l, n, a);
      Gr(t, r.text, 0, 0, s, {
        color: r.color,
        maxWidth: f,
        rotation: h,
        textAlign: rR(a, n, i),
        textBaseline: "middle",
        translation: [c, u],
      });
    }
    draw(t) {
      this._isVisible() &&
        (this.drawBackground(),
        this.drawGrid(t),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(t));
    }
    _layers() {
      const t = this.options,
        n = (t.ticks && t.ticks.z) || 0,
        r = J(t.grid && t.grid.z, -1),
        i = J(t.border && t.border.z, 0);
      return !this._isVisible() || this.draw !== ii.prototype.draw
        ? [
            {
              z: n,
              draw: (s) => {
                this.draw(s);
              },
            },
          ]
        : [
            {
              z: r,
              draw: (s) => {
                this.drawBackground(), this.drawGrid(s), this.drawTitle();
              },
            },
            {
              z: i,
              draw: () => {
                this.drawBorder();
              },
            },
            {
              z: n,
              draw: (s) => {
                this.drawLabels(s);
              },
            },
          ];
    }
    getMatchingVisibleMetas(t) {
      const n = this.chart.getSortedVisibleDatasetMetas(),
        r = this.axis + "AxisID",
        i = [];
      let s, o;
      for (s = 0, o = n.length; s < o; ++s) {
        const a = n[s];
        a[r] === this.id && (!t || a.type === t) && i.push(a);
      }
      return i;
    }
    _resolveTickFontOptions(t) {
      const n = this.options.ticks.setContext(this.getContext(t));
      return Ve(n.font);
    }
    _maxDigits() {
      const t = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / t;
    }
  }
  class ga {
    constructor(t, n, r) {
      (this.type = t),
        (this.scope = n),
        (this.override = r),
        (this.items = Object.create(null));
    }
    isForType(t) {
      return Object.prototype.isPrototypeOf.call(
        this.type.prototype,
        t.prototype,
      );
    }
    register(t) {
      const n = Object.getPrototypeOf(t);
      let r;
      aR(n) && (r = this.register(n));
      const i = this.items,
        s = t.id,
        o = this.scope + "." + s;
      if (!s) throw new Error("class does not have id: " + t);
      return (
        s in i ||
          ((i[s] = t),
          sR(t, o, r),
          this.override && Me.override(t.id, t.overrides)),
        o
      );
    }
    get(t) {
      return this.items[t];
    }
    unregister(t) {
      const n = this.items,
        r = t.id,
        i = this.scope;
      r in n && delete n[r],
        i && r in Me[i] && (delete Me[i][r], this.override && delete Xr[r]);
    }
  }
  function sR(e, t, n) {
    const r = go(Object.create(null), [
      n ? Me.get(n) : {},
      Me.get(t),
      e.defaults,
    ]);
    Me.set(t, r),
      e.defaultRoutes && oR(t, e.defaultRoutes),
      e.descriptors && Me.describe(t, e.descriptors);
  }
  function oR(e, t) {
    Object.keys(t).forEach((n) => {
      const r = n.split("."),
        i = r.pop(),
        s = [e].concat(r).join("."),
        o = t[n].split("."),
        a = o.pop(),
        l = o.join(".");
      Me.route(s, i, l, a);
    });
  }
  function aR(e) {
    return "id" in e && "defaults" in e;
  }
  class lR {
    constructor() {
      (this.controllers = new ga(Zt, "datasets", !0)),
        (this.elements = new ga(Ln, "elements")),
        (this.plugins = new ga(Object, "plugins")),
        (this.scales = new ga(ii, "scales")),
        (this._typedRegistries = [
          this.controllers,
          this.scales,
          this.elements,
        ]);
    }
    add(...t) {
      this._each("register", t);
    }
    remove(...t) {
      this._each("unregister", t);
    }
    addControllers(...t) {
      this._each("register", t, this.controllers);
    }
    addElements(...t) {
      this._each("register", t, this.elements);
    }
    addPlugins(...t) {
      this._each("register", t, this.plugins);
    }
    addScales(...t) {
      this._each("register", t, this.scales);
    }
    getController(t) {
      return this._get(t, this.controllers, "controller");
    }
    getElement(t) {
      return this._get(t, this.elements, "element");
    }
    getPlugin(t) {
      return this._get(t, this.plugins, "plugin");
    }
    getScale(t) {
      return this._get(t, this.scales, "scale");
    }
    removeControllers(...t) {
      this._each("unregister", t, this.controllers);
    }
    removeElements(...t) {
      this._each("unregister", t, this.elements);
    }
    removePlugins(...t) {
      this._each("unregister", t, this.plugins);
    }
    removeScales(...t) {
      this._each("unregister", t, this.scales);
    }
    _each(t, n, r) {
      [...n].forEach((i) => {
        const s = r || this._getRegistryForType(i);
        r || s.isForType(i) || (s === this.plugins && i.id)
          ? this._exec(t, s, i)
          : de(i, (o) => {
              const a = r || this._getRegistryForType(o);
              this._exec(t, a, o);
            });
      });
    }
    _exec(t, n, r) {
      const i = Oh(t);
      ve(r["before" + i], [], r), n[t](r), ve(r["after" + i], [], r);
    }
    _getRegistryForType(t) {
      for (let n = 0; n < this._typedRegistries.length; n++) {
        const r = this._typedRegistries[n];
        if (r.isForType(t)) return r;
      }
      return this.plugins;
    }
    _get(t, n, r) {
      const i = n.get(t);
      if (i === void 0)
        throw new Error('"' + t + '" is not a registered ' + r + ".");
      return i;
    }
  }
  var ln = new lR();
  class cR {
    constructor() {
      this._init = [];
    }
    notify(t, n, r, i) {
      n === "beforeInit" &&
        ((this._init = this._createDescriptors(t, !0)),
        this._notify(this._init, t, "install"));
      const s = i ? this._descriptors(t).filter(i) : this._descriptors(t),
        o = this._notify(s, t, n, r);
      return (
        n === "afterDestroy" &&
          (this._notify(s, t, "stop"),
          this._notify(this._init, t, "uninstall")),
        o
      );
    }
    _notify(t, n, r, i) {
      i = i || {};
      for (const s of t) {
        const o = s.plugin,
          a = o[r],
          l = [n, i, s.options];
        if (ve(a, l, o) === !1 && i.cancelable) return !1;
      }
      return !0;
    }
    invalidate() {
      se(this._cache) ||
        ((this._oldCache = this._cache), (this._cache = void 0));
    }
    _descriptors(t) {
      if (this._cache) return this._cache;
      const n = (this._cache = this._createDescriptors(t));
      return this._notifyStateChanges(t), n;
    }
    _createDescriptors(t, n) {
      const r = t && t.config,
        i = J(r.options && r.options.plugins, {}),
        s = uR(r);
      return i === !1 && !n ? [] : fR(t, s, i, n);
    }
    _notifyStateChanges(t) {
      const n = this._oldCache || [],
        r = this._cache,
        i = (s, o) =>
          s.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
      this._notify(i(n, r), t, "stop"), this._notify(i(r, n), t, "start");
    }
  }
  function uR(e) {
    const t = {},
      n = [],
      r = Object.keys(ln.plugins.items);
    for (let s = 0; s < r.length; s++) n.push(ln.getPlugin(r[s]));
    const i = e.plugins || [];
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
    }
    return { plugins: n, localIds: t };
  }
  function dR(e, t) {
    return !t && e === !1 ? null : e === !0 ? {} : e;
  }
  function fR(e, { plugins: t, localIds: n }, r, i) {
    const s = [],
      o = e.getContext();
    for (const a of t) {
      const l = a.id,
        c = dR(r[l], i);
      c !== null &&
        s.push({
          plugin: a,
          options: hR(e.config, { plugin: a, local: n[l] }, c, o),
        });
    }
    return s;
  }
  function hR(e, { plugin: t, local: n }, r, i) {
    const s = e.pluginScopeKeys(t),
      o = e.getOptionScopes(r, s);
    return (
      n && t.defaults && o.push(t.defaults),
      e.createResolver(o, i, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0,
      })
    );
  }
  function rf(e, t) {
    const n = Me.datasets[e] || {};
    return (
      ((t.datasets || {})[e] || {}).indexAxis ||
      t.indexAxis ||
      n.indexAxis ||
      "x"
    );
  }
  function pR(e, t) {
    let n = e;
    return (
      e === "_index_"
        ? (n = t)
        : e === "_value_" && (n = t === "x" ? "y" : "x"),
      n
    );
  }
  function mR(e, t) {
    return e === t ? "_index_" : "_value_";
  }
  function n0(e) {
    if (e === "x" || e === "y" || e === "r") return e;
  }
  function gR(e) {
    if (e === "top" || e === "bottom") return "x";
    if (e === "left" || e === "right") return "y";
  }
  function sf(e, ...t) {
    if (n0(e)) return e;
    for (const n of t) {
      const r =
        n.axis || gR(n.position) || (e.length > 1 && n0(e[0].toLowerCase()));
      if (r) return r;
    }
    throw new Error(
      `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`,
    );
  }
  function r0(e, t, n) {
    if (n[t + "AxisID"] === e) return { axis: t };
  }
  function yR(e, t) {
    if (t.data && t.data.datasets) {
      const n = t.data.datasets.filter(
        (r) => r.xAxisID === e || r.yAxisID === e,
      );
      if (n.length) return r0(e, "x", n[0]) || r0(e, "y", n[0]);
    }
    return {};
  }
  function vR(e, t) {
    const n = Xr[e.type] || { scales: {} },
      r = t.scales || {},
      i = rf(e.type, t),
      s = Object.create(null);
    return (
      Object.keys(r).forEach((o) => {
        const a = r[o];
        if (!re(a))
          return console.error(`Invalid scale configuration for scale: ${o}`);
        if (a._proxy)
          return console.warn(
            `Ignoring resolver passed as options for scale: ${o}`,
          );
        const l = sf(o, a, yR(o, e), Me.scales[a.type]),
          c = mR(l, i),
          u = n.scales || {};
        s[o] = Rs(Object.create(null), [{ axis: l }, a, u[l], u[c]]);
      }),
      e.data.datasets.forEach((o) => {
        const a = o.type || e.type,
          l = o.indexAxis || rf(a, t),
          u = (Xr[a] || {}).scales || {};
        Object.keys(u).forEach((f) => {
          const h = pR(f, l),
            m = o[h + "AxisID"] || h;
          (s[m] = s[m] || Object.create(null)),
            Rs(s[m], [{ axis: h }, r[m], u[f]]);
        });
      }),
      Object.keys(s).forEach((o) => {
        const a = s[o];
        Rs(a, [Me.scales[a.type], Me.scale]);
      }),
      s
    );
  }
  function ub(e) {
    const t = e.options || (e.options = {});
    (t.plugins = J(t.plugins, {})), (t.scales = vR(e, t));
  }
  function db(e) {
    return (
      (e = e || {}),
      (e.datasets = e.datasets || []),
      (e.labels = e.labels || []),
      e
    );
  }
  function xR(e) {
    return (e = e || {}), (e.data = db(e.data)), ub(e), e;
  }
  const i0 = new Map(),
    fb = new Set();
  function ya(e, t) {
    let n = i0.get(e);
    return n || ((n = t()), i0.set(e, n), fb.add(n)), n;
  }
  const ds = (e, t, n) => {
    const r = dr(t, n);
    r !== void 0 && e.add(r);
  };
  class bR {
    constructor(t) {
      (this._config = xR(t)),
        (this._scopeCache = new Map()),
        (this._resolverCache = new Map());
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(t) {
      this._config.type = t;
    }
    get data() {
      return this._config.data;
    }
    set data(t) {
      this._config.data = db(t);
    }
    get options() {
      return this._config.options;
    }
    set options(t) {
      this._config.options = t;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const t = this._config;
      this.clearCache(), ub(t);
    }
    clearCache() {
      this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
      return ya(t, () => [[`datasets.${t}`, ""]]);
    }
    datasetAnimationScopeKeys(t, n) {
      return ya(`${t}.transition.${n}`, () => [
        [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
        [`datasets.${t}`, ""],
      ]);
    }
    datasetElementScopeKeys(t, n) {
      return ya(`${t}-${n}`, () => [
        [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
      ]);
    }
    pluginScopeKeys(t) {
      const n = t.id,
        r = this.type;
      return ya(`${r}-plugin-${n}`, () => [
        [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
      ]);
    }
    _cachedScopes(t, n) {
      const r = this._scopeCache;
      let i = r.get(t);
      return (!i || n) && ((i = new Map()), r.set(t, i)), i;
    }
    getOptionScopes(t, n, r) {
      const { options: i, type: s } = this,
        o = this._cachedScopes(t, r),
        a = o.get(n);
      if (a) return a;
      const l = new Set();
      n.forEach((u) => {
        t && (l.add(t), u.forEach((f) => ds(l, t, f))),
          u.forEach((f) => ds(l, i, f)),
          u.forEach((f) => ds(l, Xr[s] || {}, f)),
          u.forEach((f) => ds(l, Me, f)),
          u.forEach((f) => ds(l, ef, f));
      });
      const c = Array.from(l);
      return (
        c.length === 0 && c.push(Object.create(null)),
        fb.has(n) && o.set(n, c),
        c
      );
    }
    chartOptionScopes() {
      const { options: t, type: n } = this;
      return [t, Xr[n] || {}, Me.datasets[n] || {}, { type: n }, Me, ef];
    }
    resolveNamedOptions(t, n, r, i = [""]) {
      const s = { $shared: !0 },
        { resolver: o, subPrefixes: a } = s0(this._resolverCache, t, i);
      let l = o;
      if (wR(o, n)) {
        (s.$shared = !1), (r = fr(r) ? r() : r);
        const c = this.createResolver(t, r, a);
        l = zi(o, r, c);
      }
      for (const c of n) s[c] = l[c];
      return s;
    }
    createResolver(t, n, r = [""], i) {
      const { resolver: s } = s0(this._resolverCache, t, r);
      return re(n) ? zi(s, n, void 0, i) : s;
    }
  }
  function s0(e, t, n) {
    let r = e.get(t);
    r || ((r = new Map()), e.set(t, r));
    const i = n.join();
    let s = r.get(i);
    return (
      s ||
        ((s = {
          resolver: Dh(t, n),
          subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
        }),
        r.set(i, s)),
      s
    );
  }
  const _R = (e) =>
    re(e) && Object.getOwnPropertyNames(e).some((t) => fr(e[t]));
  function wR(e, t) {
    const { isScriptable: n, isIndexable: r } = $x(e);
    for (const i of t) {
      const s = n(i),
        o = r(i),
        a = (o || s) && e[i];
      if ((s && (fr(a) || _R(a))) || (o && ke(a))) return !0;
    }
    return !1;
  }
  var SR = "4.4.3";
  const AR = ["top", "bottom", "left", "right", "chartArea"];
  function o0(e, t) {
    return e === "top" || e === "bottom" || (AR.indexOf(e) === -1 && t === "x");
  }
  function a0(e, t) {
    return function (n, r) {
      return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
    };
  }
  function l0(e) {
    const t = e.chart,
      n = t.options.animation;
    t.notifyPlugins("afterRender"), ve(n && n.onComplete, [e], t);
  }
  function ER(e) {
    const t = e.chart,
      n = t.options.animation;
    ve(n && n.onProgress, [e], t);
  }
  function hb(e) {
    return (
      Bh() && typeof e == "string"
        ? (e = document.getElementById(e))
        : e && e.length && (e = e[0]),
      e && e.canvas && (e = e.canvas),
      e
    );
  }
  const $a = {},
    c0 = (e) => {
      const t = hb(e);
      return Object.values($a)
        .filter((n) => n.canvas === t)
        .pop();
    };
  function kR(e, t, n) {
    const r = Object.keys(e);
    for (const i of r) {
      const s = +i;
      if (s >= t) {
        const o = e[i];
        delete e[i], (n > 0 || s > t) && (e[s + n] = o);
      }
    }
  }
  function CR(e, t, n, r) {
    return !n || e.type === "mouseout" ? null : r ? t : e;
  }
  function va(e, t, n) {
    return e.options.clip ? e[n] : t[n];
  }
  function jR(e, t) {
    const { xScale: n, yScale: r } = e;
    return n && r
      ? {
          left: va(n, t, "left"),
          right: va(n, t, "right"),
          top: va(r, t, "top"),
          bottom: va(r, t, "bottom"),
        }
      : t;
  }
  var zn;
  let Mc =
    ((zn = class {
      static register(...t) {
        ln.add(...t), u0();
      }
      static unregister(...t) {
        ln.remove(...t), u0();
      }
      constructor(t, n) {
        const r = (this.config = new bR(n)),
          i = hb(t),
          s = c0(i);
        if (s)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              s.id +
              "' must be destroyed before the canvas with ID '" +
              s.canvas.id +
              "' can be reused.",
          );
        const o = r.createResolver(r.chartOptionScopes(), this.getContext());
        (this.platform = new (r.platform || $N(i))()),
          this.platform.updateConfig(r);
        const a = this.platform.acquireContext(i, o.aspectRatio),
          l = a && a.canvas,
          c = l && l.height,
          u = l && l.width;
        if (
          ((this.id = TO()),
          (this.ctx = a),
          (this.canvas = l),
          (this.width = u),
          (this.height = c),
          (this._options = o),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new cR()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = qO((f) => this.update(f), o.resizeDelay || 0)),
          (this._dataChanges = []),
          ($a[this.id] = this),
          !a || !l)
        ) {
          console.error(
            "Failed to create chart: can't acquire context from the given item",
          );
          return;
        }
        yn.listen(this, "complete", l0),
          yn.listen(this, "progress", ER),
          this._initialize(),
          this.attached && this.update();
      }
      get aspectRatio() {
        const {
          options: { aspectRatio: t, maintainAspectRatio: n },
          width: r,
          height: i,
          _aspectRatio: s,
        } = this;
        return se(t) ? (n && s ? s : i ? r / i : null) : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      get registry() {
        return ln;
      }
      _initialize() {
        return (
          this.notifyPlugins("beforeInit"),
          this.options.responsive
            ? this.resize()
            : Og(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins("afterInit"),
          this
        );
      }
      clear() {
        return jg(this.canvas, this.ctx), this;
      }
      stop() {
        return yn.stop(this), this;
      }
      resize(t, n) {
        yn.running(this)
          ? (this._resizeBeforeDraw = { width: t, height: n })
          : this._resize(t, n);
      }
      _resize(t, n) {
        const r = this.options,
          i = this.canvas,
          s = r.maintainAspectRatio && this.aspectRatio,
          o = this.platform.getMaximumSize(i, t, n, s),
          a = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
          l = this.width ? "resize" : "attach";
        (this.width = o.width),
          (this.height = o.height),
          (this._aspectRatio = this.aspectRatio),
          Og(this, a, !0) &&
            (this.notifyPlugins("resize", { size: o }),
            ve(r.onResize, [this, o], this),
            this.attached && this._doResize(l) && this.render());
      }
      ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        de(n, (r, i) => {
          r.id = i;
        });
      }
      buildOrUpdateScales() {
        const t = this.options,
          n = t.scales,
          r = this.scales,
          i = Object.keys(r).reduce((o, a) => ((o[a] = !1), o), {});
        let s = [];
        n &&
          (s = s.concat(
            Object.keys(n).map((o) => {
              const a = n[o],
                l = sf(o, a),
                c = l === "r",
                u = l === "x";
              return {
                options: a,
                dposition: c ? "chartArea" : u ? "bottom" : "left",
                dtype: c ? "radialLinear" : u ? "category" : "linear",
              };
            }),
          )),
          de(s, (o) => {
            const a = o.options,
              l = a.id,
              c = sf(l, a),
              u = J(a.type, o.dtype);
            (a.position === void 0 || o0(a.position, c) !== o0(o.dposition)) &&
              (a.position = o.dposition),
              (i[l] = !0);
            let f = null;
            if (l in r && r[l].type === u) f = r[l];
            else {
              const h = ln.getScale(u);
              (f = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
                (r[f.id] = f);
            }
            f.init(a, t);
          }),
          de(i, (o, a) => {
            o || delete r[a];
          }),
          de(r, (o) => {
            nt.configure(this, o, o.options), nt.addBox(this, o);
          });
      }
      _updateMetasets() {
        const t = this._metasets,
          n = this.data.datasets.length,
          r = t.length;
        if ((t.sort((i, s) => i.index - s.index), r > n)) {
          for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
          t.splice(n, r - n);
        }
        this._sortedMetasets = t.slice(0).sort(a0("order", "index"));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: t,
          data: { datasets: n },
        } = this;
        t.length > n.length && delete this._stacks,
          t.forEach((r, i) => {
            n.filter((s) => s === r._dataset).length === 0 &&
              this._destroyDatasetMeta(i);
          });
      }
      buildOrUpdateControllers() {
        const t = [],
          n = this.data.datasets;
        let r, i;
        for (
          this._removeUnreferencedMetasets(), r = 0, i = n.length;
          r < i;
          r++
        ) {
          const s = n[r];
          let o = this.getDatasetMeta(r);
          const a = s.type || this.config.type;
          if (
            (o.type &&
              o.type !== a &&
              (this._destroyDatasetMeta(r), (o = this.getDatasetMeta(r))),
            (o.type = a),
            (o.indexAxis = s.indexAxis || rf(a, this.options)),
            (o.order = s.order || 0),
            (o.index = r),
            (o.label = "" + s.label),
            (o.visible = this.isDatasetVisible(r)),
            o.controller)
          )
            o.controller.updateIndex(r), o.controller.linkScales();
          else {
            const l = ln.getController(a),
              { datasetElementType: c, dataElementType: u } = Me.datasets[a];
            Object.assign(l, {
              dataElementType: ln.getElement(u),
              datasetElementType: c && ln.getElement(c),
            }),
              (o.controller = new l(this, r)),
              t.push(o.controller);
          }
        }
        return this._updateMetasets(), t;
      }
      _resetElements() {
        de(
          this.data.datasets,
          (t, n) => {
            this.getDatasetMeta(n).controller.reset();
          },
          this,
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
      update(t) {
        const n = this.config;
        n.update();
        const r = (this._options = n.createResolver(
            n.chartOptionScopes(),
            this.getContext(),
          )),
          i = (this._animationsDisabled = !r.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) ===
            !1)
        )
          return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let o = 0;
        for (let c = 0, u = this.data.datasets.length; c < u; c++) {
          const { controller: f } = this.getDatasetMeta(c),
            h = !i && s.indexOf(f) === -1;
          f.buildOrUpdateElements(h), (o = Math.max(+f.getMaxOverflow(), o));
        }
        (o = this._minPadding = r.layout.autoPadding ? o : 0),
          this._updateLayout(o),
          i ||
            de(s, (c) => {
              c.reset();
            }),
          this._updateDatasets(t),
          this.notifyPlugins("afterUpdate", { mode: t }),
          this._layers.sort(a0("z", "_idx"));
        const { _active: a, _lastEvent: l } = this;
        l
          ? this._eventHandler(l, !0)
          : a.length && this._updateHoverStyles(a, a, !0),
          this.render();
      }
      _updateScales() {
        de(this.scales, (t) => {
          nt.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        const t = this.options,
          n = new Set(Object.keys(this._listeners)),
          r = new Set(t.events);
        (!xg(n, r) || !!this._responsiveListeners !== t.responsive) &&
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        const { _hiddenIndices: t } = this,
          n = this._getUniformDataChanges() || [];
        for (const { method: r, start: i, count: s } of n) {
          const o = r === "_removeElements" ? -s : s;
          kR(t, i, o);
        }
      }
      _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const n = this.data.datasets.length,
          r = (s) =>
            new Set(
              t
                .filter((o) => o[0] === s)
                .map((o, a) => a + "," + o.splice(1).join(",")),
            ),
          i = r(0);
        for (let s = 1; s < n; s++) if (!xg(i, r(s))) return;
        return Array.from(i)
          .map((s) => s.split(","))
          .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
      }
      _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1)
          return;
        nt.update(this, this.width, this.height, t);
        const n = this.chartArea,
          r = n.width <= 0 || n.height <= 0;
        (this._layers = []),
          de(
            this.boxes,
            (i) => {
              (r && i.position === "chartArea") ||
                (i.configure && i.configure(),
                this._layers.push(...i._layers()));
            },
            this,
          ),
          this._layers.forEach((i, s) => {
            i._idx = s;
          }),
          this.notifyPlugins("afterLayout");
      }
      _updateDatasets(t) {
        if (
          this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0,
          }) !== !1
        ) {
          for (let n = 0, r = this.data.datasets.length; n < r; ++n)
            this.getDatasetMeta(n).controller.configure();
          for (let n = 0, r = this.data.datasets.length; n < r; ++n)
            this._updateDataset(n, fr(t) ? t({ datasetIndex: n }) : t);
          this.notifyPlugins("afterDatasetsUpdate", { mode: t });
        }
      }
      _updateDataset(t, n) {
        const r = this.getDatasetMeta(t),
          i = { meta: r, index: t, mode: n, cancelable: !0 };
        this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
          (r.controller._update(n),
          (i.cancelable = !1),
          this.notifyPlugins("afterDatasetUpdate", i));
      }
      render() {
        this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
          (yn.has(this)
            ? this.attached && !yn.running(this) && yn.start(this)
            : (this.draw(), l0({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          const { width: r, height: i } = this._resizeBeforeDraw;
          this._resize(r, i), (this._resizeBeforeDraw = null);
        }
        if (
          (this.clear(),
          this.width <= 0 ||
            this.height <= 0 ||
            this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
        )
          return;
        const n = this._layers;
        for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
        for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
      }
      _getSortedDatasetMetas(t) {
        const n = this._sortedMetasets,
          r = [];
        let i, s;
        for (i = 0, s = n.length; i < s; ++i) {
          const o = n[i];
          (!t || o.visible) && r.push(o);
        }
        return r;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
          return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
        this.notifyPlugins("afterDatasetsDraw");
      }
      _drawDataset(t) {
        const n = this.ctx,
          r = t._clip,
          i = !r.disabled,
          s = jR(t, this.chartArea),
          o = { meta: t, index: t.index, cancelable: !0 };
        this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
          (i &&
            Pc(n, {
              left: r.left === !1 ? 0 : s.left - r.left,
              right: r.right === !1 ? this.width : s.right + r.right,
              top: r.top === !1 ? 0 : s.top - r.top,
              bottom: r.bottom === !1 ? this.height : s.bottom + r.bottom,
            }),
          t.controller.draw(),
          i && Tc(n),
          (o.cancelable = !1),
          this.notifyPlugins("afterDatasetDraw", o));
      }
      isPointInArea(t) {
        return Cn(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, n, r, i) {
        const s = AN.modes[n];
        return typeof s == "function" ? s(this, t, r, i) : [];
      }
      getDatasetMeta(t) {
        const n = this.data.datasets[t],
          r = this._metasets;
        let i = r.filter((s) => s && s._dataset === n).pop();
        return (
          i ||
            ((i = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (n && n.order) || 0,
              index: t,
              _dataset: n,
              _parsed: [],
              _sorted: !1,
            }),
            r.push(i)),
          i
        );
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = br(null, { chart: this, type: "chart" }))
        );
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        const n = this.data.datasets[t];
        if (!n) return !1;
        const r = this.getDatasetMeta(t);
        return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden;
      }
      setDatasetVisibility(t, n) {
        const r = this.getDatasetMeta(t);
        r.hidden = !n;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(t, n, r) {
        const i = r ? "show" : "hide",
          s = this.getDatasetMeta(t),
          o = s.controller._resolveAnimations(void 0, i);
        yo(n)
          ? ((s.data[n].hidden = !r), this.update())
          : (this.setDatasetVisibility(t, r),
            o.update(s, { visible: r }),
            this.update((a) => (a.datasetIndex === t ? i : void 0)));
      }
      hide(t, n) {
        this._updateVisibility(t, n, !1);
      }
      show(t, n) {
        this._updateVisibility(t, n, !0);
      }
      _destroyDatasetMeta(t) {
        const n = this._metasets[t];
        n && n.controller && n.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, n;
        for (
          this.stop(), yn.remove(this), t = 0, n = this.data.datasets.length;
          t < n;
          ++t
        )
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas: t, ctx: n } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            jg(t, n),
            this.platform.releaseContext(n),
            (this.canvas = null),
            (this.ctx = null)),
          delete $a[this.id],
          this.notifyPlugins("afterDestroy");
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive
            ? this.bindResponsiveEvents()
            : (this.attached = !0);
      }
      bindUserEvents() {
        const t = this._listeners,
          n = this.platform,
          r = (s, o) => {
            n.addEventListener(this, s, o), (t[s] = o);
          },
          i = (s, o, a) => {
            (s.offsetX = o), (s.offsetY = a), this._eventHandler(s);
          };
        de(this.options.events, (s) => r(s, i));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners,
          n = this.platform,
          r = (l, c) => {
            n.addEventListener(this, l, c), (t[l] = c);
          },
          i = (l, c) => {
            t[l] && (n.removeEventListener(this, l, c), delete t[l]);
          },
          s = (l, c) => {
            this.canvas && this.resize(l, c);
          };
        let o;
        const a = () => {
          i("attach", a),
            (this.attached = !0),
            this.resize(),
            r("resize", s),
            r("detach", o);
        };
        (o = () => {
          (this.attached = !1),
            i("resize", s),
            this._stop(),
            this._resize(0, 0),
            r("attach", a);
        }),
          n.isAttached(this.canvas) ? a() : o();
      }
      unbindEvents() {
        de(this._listeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
          (this._listeners = {}),
          de(this._responsiveListeners, (t, n) => {
            this.platform.removeEventListener(this, n, t);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(t, n, r) {
        const i = r ? "set" : "remove";
        let s, o, a, l;
        for (
          n === "dataset" &&
            ((s = this.getDatasetMeta(t[0].datasetIndex)),
            s.controller["_" + i + "DatasetHoverStyle"]()),
            a = 0,
            l = t.length;
          a < l;
          ++a
        ) {
          o = t[a];
          const c = o && this.getDatasetMeta(o.datasetIndex).controller;
          c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        const n = this._active || [],
          r = t.map(({ datasetIndex: s, index: o }) => {
            const a = this.getDatasetMeta(s);
            if (!a) throw new Error("No dataset found at index " + s);
            return { datasetIndex: s, element: a.data[o], index: o };
          });
        !Tl(r, n) &&
          ((this._active = r),
          (this._lastEvent = null),
          this._updateHoverStyles(r, n));
      }
      notifyPlugins(t, n, r) {
        return this._plugins.notify(this, t, n, r);
      }
      isPluginEnabled(t) {
        return (
          this._plugins._cache.filter((n) => n.plugin.id === t).length === 1
        );
      }
      _updateHoverStyles(t, n, r) {
        const i = this.options.hover,
          s = (l, c) =>
            l.filter(
              (u) =>
                !c.some(
                  (f) =>
                    u.datasetIndex === f.datasetIndex && u.index === f.index,
                ),
            ),
          o = s(n, t),
          a = r ? t : s(t, n);
        o.length && this.updateHoverStyle(o, i.mode, !1),
          a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
      }
      _eventHandler(t, n) {
        const r = {
            event: t,
            replay: n,
            cancelable: !0,
            inChartArea: this.isPointInArea(t),
          },
          i = (o) =>
            (o.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", r, i) === !1) return;
        const s = this._handleEvent(t, n, r.inChartArea);
        return (
          (r.cancelable = !1),
          this.notifyPlugins("afterEvent", r, i),
          (s || r.changed) && this.render(),
          this
        );
      }
      _handleEvent(t, n, r) {
        const { _active: i = [], options: s } = this,
          o = n,
          a = this._getActiveElements(t, i, r, o),
          l = IO(t),
          c = CR(t, this._lastEvent, r, l);
        r &&
          ((this._lastEvent = null),
          ve(s.onHover, [t, a, this], this),
          l && ve(s.onClick, [t, a, this], this));
        const u = !Tl(a, i);
        return (
          (u || n) && ((this._active = a), this._updateHoverStyles(a, i, n)),
          (this._lastEvent = c),
          u
        );
      }
      _getActiveElements(t, n, r, i) {
        if (t.type === "mouseout") return [];
        if (!r) return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(t, s.mode, s, i);
      }
    }),
    N(zn, "defaults", Me),
    N(zn, "instances", $a),
    N(zn, "overrides", Xr),
    N(zn, "registry", ln),
    N(zn, "version", SR),
    N(zn, "getChart", c0),
    zn);
  function u0() {
    return de(Mc.instances, (e) => e._plugins.invalidate());
  }
  function PR(e, t, n) {
    const {
      startAngle: r,
      pixelMargin: i,
      x: s,
      y: o,
      outerRadius: a,
      innerRadius: l,
    } = t;
    let c = i / a;
    e.beginPath(),
      e.arc(s, o, a, r - c, n + c),
      l > i
        ? ((c = i / l), e.arc(s, o, l, n + c, r - c, !0))
        : e.arc(s, o, i, n + Ie, r - Ie),
      e.closePath(),
      e.clip();
  }
  function TR(e) {
    return Ih(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
  }
  function OR(e, t, n, r) {
    const i = TR(e.options.borderRadius),
      s = (n - t) / 2,
      o = Math.min(s, (r * t) / 2),
      a = (l) => {
        const c = ((n - Math.min(s, l)) * r) / 2;
        return qe(l, 0, Math.min(s, c));
      };
    return {
      outerStart: a(i.outerStart),
      outerEnd: a(i.outerEnd),
      innerStart: qe(i.innerStart, 0, o),
      innerEnd: qe(i.innerEnd, 0, o),
    };
  }
  function ai(e, t, n, r) {
    return { x: n + e * Math.cos(t), y: r + e * Math.sin(t) };
  }
  function Il(e, t, n, r, i, s) {
    const { x: o, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = t,
      f = Math.max(t.outerRadius + r + n - c, 0),
      h = u > 0 ? u + r + n + c : 0;
    let m = 0;
    const g = i - l;
    if (r) {
      const q = u > 0 ? u - r : 0,
        X = f > 0 ? f - r : 0,
        Q = (q + X) / 2,
        M = Q !== 0 ? (g * Q) / (Q + r) : g;
      m = (g - M) / 2;
    }
    const v = Math.max(0.001, g * f - n / Ae) / f,
      b = (g - v) / 2,
      y = l + b + m,
      p = i - b - m,
      {
        outerStart: x,
        outerEnd: _,
        innerStart: S,
        innerEnd: E,
      } = OR(t, h, f, p - y),
      A = f - x,
      k = f - _,
      P = y + x / A,
      T = p - _ / k,
      L = h + S,
      B = h + E,
      $ = y + S / L,
      ee = p - E / B;
    if ((e.beginPath(), s)) {
      const q = (P + T) / 2;
      if ((e.arc(o, a, f, P, q), e.arc(o, a, f, q, T), _ > 0)) {
        const R = ai(k, T, o, a);
        e.arc(R.x, R.y, _, T, p + Ie);
      }
      const X = ai(B, p, o, a);
      if ((e.lineTo(X.x, X.y), E > 0)) {
        const R = ai(B, ee, o, a);
        e.arc(R.x, R.y, E, p + Ie, ee + Math.PI);
      }
      const Q = (p - E / h + (y + S / h)) / 2;
      if (
        (e.arc(o, a, h, p - E / h, Q, !0),
        e.arc(o, a, h, Q, y + S / h, !0),
        S > 0)
      ) {
        const R = ai(L, $, o, a);
        e.arc(R.x, R.y, S, $ + Math.PI, y - Ie);
      }
      const M = ai(A, y, o, a);
      if ((e.lineTo(M.x, M.y), x > 0)) {
        const R = ai(A, P, o, a);
        e.arc(R.x, R.y, x, y - Ie, P);
      }
    } else {
      e.moveTo(o, a);
      const q = Math.cos(P) * f + o,
        X = Math.sin(P) * f + a;
      e.lineTo(q, X);
      const Q = Math.cos(T) * f + o,
        M = Math.sin(T) * f + a;
      e.lineTo(Q, M);
    }
    e.closePath();
  }
  function MR(e, t, n, r, i) {
    const { fullCircles: s, startAngle: o, circumference: a } = t;
    let l = t.endAngle;
    if (s) {
      Il(e, t, n, r, l, i);
      for (let c = 0; c < s; ++c) e.fill();
      isNaN(a) || (l = o + (a % Se || Se));
    }
    return Il(e, t, n, r, l, i), e.fill(), l;
  }
  function NR(e, t, n, r, i) {
    const { fullCircles: s, startAngle: o, circumference: a, options: l } = t,
      {
        borderWidth: c,
        borderJoinStyle: u,
        borderDash: f,
        borderDashOffset: h,
      } = l,
      m = l.borderAlign === "inner";
    if (!c) return;
    e.setLineDash(f || []),
      (e.lineDashOffset = h),
      m
        ? ((e.lineWidth = c * 2), (e.lineJoin = u || "round"))
        : ((e.lineWidth = c), (e.lineJoin = u || "bevel"));
    let g = t.endAngle;
    if (s) {
      Il(e, t, n, r, g, i);
      for (let v = 0; v < s; ++v) e.stroke();
      isNaN(a) || (g = o + (a % Se || Se));
    }
    m && PR(e, t, g), s || (Il(e, t, n, r, g, i), e.stroke());
  }
  class xs extends Ln {
    constructor(n) {
      super();
      N(this, "circumference");
      N(this, "endAngle");
      N(this, "fullCircles");
      N(this, "innerRadius");
      N(this, "outerRadius");
      N(this, "pixelMargin");
      N(this, "startAngle");
      (this.options = void 0),
        (this.circumference = void 0),
        (this.startAngle = void 0),
        (this.endAngle = void 0),
        (this.innerRadius = void 0),
        (this.outerRadius = void 0),
        (this.pixelMargin = 0),
        (this.fullCircles = 0),
        n && Object.assign(this, n);
    }
    inRange(n, r, i) {
      const s = this.getProps(["x", "y"], i),
        { angle: o, distance: a } = Lx(s, { x: n, y: r }),
        {
          startAngle: l,
          endAngle: c,
          innerRadius: u,
          outerRadius: f,
          circumference: h,
        } = this.getProps(
          [
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference",
          ],
          i,
        ),
        m = (this.options.spacing + this.options.borderWidth) / 2,
        v = J(h, c - l) >= Se || vo(o, l, c),
        b = En(a, u + m, f + m);
      return v && b;
    }
    getCenterPoint(n) {
      const {
          x: r,
          y: i,
          startAngle: s,
          endAngle: o,
          innerRadius: a,
          outerRadius: l,
        } = this.getProps(
          ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
          n,
        ),
        { offset: c, spacing: u } = this.options,
        f = (s + o) / 2,
        h = (a + l + u + c) / 2;
      return { x: r + Math.cos(f) * h, y: i + Math.sin(f) * h };
    }
    tooltipPosition(n) {
      return this.getCenterPoint(n);
    }
    draw(n) {
      const { options: r, circumference: i } = this,
        s = (r.offset || 0) / 4,
        o = (r.spacing || 0) / 2,
        a = r.circular;
      if (
        ((this.pixelMargin = r.borderAlign === "inner" ? 0.33 : 0),
        (this.fullCircles = i > Se ? Math.floor(i / Se) : 0),
        i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      )
        return;
      n.save();
      const l = (this.startAngle + this.endAngle) / 2;
      n.translate(Math.cos(l) * s, Math.sin(l) * s);
      const c = 1 - Math.sin(Math.min(Ae, i || 0)),
        u = s * c;
      (n.fillStyle = r.backgroundColor),
        (n.strokeStyle = r.borderColor),
        MR(n, this, u, o, a),
        NR(n, this, u, o, a),
        n.restore();
    }
  }
  N(xs, "id", "arc"),
    N(xs, "defaults", {
      borderAlign: "center",
      borderColor: "#fff",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: !0,
    }),
    N(xs, "defaultRoutes", { backgroundColor: "backgroundColor" }),
    N(xs, "descriptors", {
      _scriptable: !0,
      _indexable: (n) => n !== "borderDash",
    });
  function pb(e, t, n = t) {
    (e.lineCap = J(n.borderCapStyle, t.borderCapStyle)),
      e.setLineDash(J(n.borderDash, t.borderDash)),
      (e.lineDashOffset = J(n.borderDashOffset, t.borderDashOffset)),
      (e.lineJoin = J(n.borderJoinStyle, t.borderJoinStyle)),
      (e.lineWidth = J(n.borderWidth, t.borderWidth)),
      (e.strokeStyle = J(n.borderColor, t.borderColor));
  }
  function RR(e, t, n) {
    e.lineTo(n.x, n.y);
  }
  function LR(e) {
    return e.stepped
      ? iM
      : e.tension || e.cubicInterpolationMode === "monotone"
        ? sM
        : RR;
  }
  function mb(e, t, n = {}) {
    const r = e.length,
      { start: i = 0, end: s = r - 1 } = n,
      { start: o, end: a } = t,
      l = Math.max(i, o),
      c = Math.min(s, a),
      u = (i < o && s < o) || (i > a && s > a);
    return {
      count: r,
      start: l,
      loop: t.loop,
      ilen: c < l && !u ? r + c - l : c - l,
    };
  }
  function IR(e, t, n, r) {
    const { points: i, options: s } = t,
      { count: o, start: a, loop: l, ilen: c } = mb(i, n, r),
      u = LR(s);
    let { move: f = !0, reverse: h } = r || {},
      m,
      g,
      v;
    for (m = 0; m <= c; ++m)
      (g = i[(a + (h ? c - m : m)) % o]),
        !g.skip &&
          (f ? (e.moveTo(g.x, g.y), (f = !1)) : u(e, v, g, h, s.stepped),
          (v = g));
    return l && ((g = i[(a + (h ? c : 0)) % o]), u(e, v, g, h, s.stepped)), !!l;
  }
  function DR(e, t, n, r) {
    const i = t.points,
      { count: s, start: o, ilen: a } = mb(i, n, r),
      { move: l = !0, reverse: c } = r || {};
    let u = 0,
      f = 0,
      h,
      m,
      g,
      v,
      b,
      y;
    const p = (_) => (o + (c ? a - _ : _)) % s,
      x = () => {
        v !== b && (e.lineTo(u, b), e.lineTo(u, v), e.lineTo(u, y));
      };
    for (l && ((m = i[p(0)]), e.moveTo(m.x, m.y)), h = 0; h <= a; ++h) {
      if (((m = i[p(h)]), m.skip)) continue;
      const _ = m.x,
        S = m.y,
        E = _ | 0;
      E === g
        ? (S < v ? (v = S) : S > b && (b = S), (u = (f * u + _) / ++f))
        : (x(), e.lineTo(_, S), (g = E), (f = 0), (v = b = S)),
        (y = S);
    }
    x();
  }
  function of(e) {
    const t = e.options,
      n = t.borderDash && t.borderDash.length;
    return !e._decimated &&
      !e._loop &&
      !t.tension &&
      t.cubicInterpolationMode !== "monotone" &&
      !t.stepped &&
      !n
      ? DR
      : IR;
  }
  function FR(e) {
    return e.stepped
      ? DM
      : e.tension || e.cubicInterpolationMode === "monotone"
        ? FM
        : Or;
  }
  function zR(e, t, n, r) {
    let i = t._path;
    i || ((i = t._path = new Path2D()), t.path(i, n, r) && i.closePath()),
      pb(e, t.options),
      e.stroke(i);
  }
  function BR(e, t, n, r) {
    const { segments: i, options: s } = t,
      o = of(t);
    for (const a of i)
      pb(e, s, a.style),
        e.beginPath(),
        o(e, t, a, { start: n, end: n + r - 1 }) && e.closePath(),
        e.stroke();
  }
  const UR = typeof Path2D == "function";
  function VR(e, t, n, r) {
    UR && !t.options.segment ? zR(e, t, n, r) : BR(e, t, n, r);
  }
  class Xn extends Ln {
    constructor(t) {
      super(),
        (this.animated = !0),
        (this.options = void 0),
        (this._chart = void 0),
        (this._loop = void 0),
        (this._fullLoop = void 0),
        (this._path = void 0),
        (this._points = void 0),
        (this._segments = void 0),
        (this._decimated = !1),
        (this._pointsUpdated = !1),
        (this._datasetIndex = void 0),
        t && Object.assign(this, t);
    }
    updateControlPoints(t, n) {
      const r = this.options;
      if (
        (r.tension || r.cubicInterpolationMode === "monotone") &&
        !r.stepped &&
        !this._pointsUpdated
      ) {
        const i = r.spanGaps ? this._loop : this._fullLoop;
        PM(this._points, r, t, i, n), (this._pointsUpdated = !0);
      }
    }
    set points(t) {
      (this._points = t),
        delete this._segments,
        delete this._path,
        (this._pointsUpdated = !1);
    }
    get points() {
      return this._points;
    }
    get segments() {
      return (
        this._segments || (this._segments = WM(this, this.options.segment))
      );
    }
    first() {
      const t = this.segments,
        n = this.points;
      return t.length && n[t[0].start];
    }
    last() {
      const t = this.segments,
        n = this.points,
        r = t.length;
      return r && n[t[r - 1].end];
    }
    interpolate(t, n) {
      const r = this.options,
        i = t[n],
        s = this.points,
        o = tb(this, { property: n, start: i, end: i });
      if (!o.length) return;
      const a = [],
        l = FR(r);
      let c, u;
      for (c = 0, u = o.length; c < u; ++c) {
        const { start: f, end: h } = o[c],
          m = s[f],
          g = s[h];
        if (m === g) {
          a.push(m);
          continue;
        }
        const v = Math.abs((i - m[n]) / (g[n] - m[n])),
          b = l(m, g, v, r.stepped);
        (b[n] = t[n]), a.push(b);
      }
      return a.length === 1 ? a[0] : a;
    }
    pathSegment(t, n, r) {
      return of(this)(t, this, n, r);
    }
    path(t, n, r) {
      const i = this.segments,
        s = of(this);
      let o = this._loop;
      (n = n || 0), (r = r || this.points.length - n);
      for (const a of i) o &= s(t, this, a, { start: n, end: n + r - 1 });
      return !!o;
    }
    draw(t, n, r, i) {
      const s = this.options || {};
      (this.points || []).length &&
        s.borderWidth &&
        (t.save(), VR(t, this, r, i), t.restore()),
        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
    }
  }
  N(Xn, "id", "line"),
    N(Xn, "defaults", {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: !0,
      cubicInterpolationMode: "default",
      fill: !1,
      spanGaps: !1,
      stepped: !1,
      tension: 0,
    }),
    N(Xn, "defaultRoutes", {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    }),
    N(Xn, "descriptors", {
      _scriptable: !0,
      _indexable: (t) => t !== "borderDash" && t !== "fill",
    });
  function d0(e, t, n, r) {
    const i = e.options,
      { [n]: s } = e.getProps([n], r);
    return Math.abs(t - s) < i.radius + i.hitRadius;
  }
  class qa extends Ln {
    constructor(n) {
      super();
      N(this, "parsed");
      N(this, "skip");
      N(this, "stop");
      (this.options = void 0),
        (this.parsed = void 0),
        (this.skip = void 0),
        (this.stop = void 0),
        n && Object.assign(this, n);
    }
    inRange(n, r, i) {
      const s = this.options,
        { x: o, y: a } = this.getProps(["x", "y"], i);
      return (
        Math.pow(n - o, 2) + Math.pow(r - a, 2) <
        Math.pow(s.hitRadius + s.radius, 2)
      );
    }
    inXRange(n, r) {
      return d0(this, n, "x", r);
    }
    inYRange(n, r) {
      return d0(this, n, "y", r);
    }
    getCenterPoint(n) {
      const { x: r, y: i } = this.getProps(["x", "y"], n);
      return { x: r, y: i };
    }
    size(n) {
      n = n || this.options || {};
      let r = n.radius || 0;
      r = Math.max(r, (r && n.hoverRadius) || 0);
      const i = (r && n.borderWidth) || 0;
      return (r + i) * 2;
    }
    draw(n, r) {
      const i = this.options;
      this.skip ||
        i.radius < 0.1 ||
        !Cn(this, r, this.size(i) / 2) ||
        ((n.strokeStyle = i.borderColor),
        (n.lineWidth = i.borderWidth),
        (n.fillStyle = i.backgroundColor),
        tf(n, i, this.x, this.y));
    }
    getRange() {
      const n = this.options || {};
      return n.radius + n.hitRadius;
    }
  }
  N(qa, "id", "point"),
    N(qa, "defaults", {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0,
    }),
    N(qa, "defaultRoutes", {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    });
  function gb(e, t) {
    const {
      x: n,
      y: r,
      base: i,
      width: s,
      height: o,
    } = e.getProps(["x", "y", "base", "width", "height"], t);
    let a, l, c, u, f;
    return (
      e.horizontal
        ? ((f = o / 2),
          (a = Math.min(n, i)),
          (l = Math.max(n, i)),
          (c = r - f),
          (u = r + f))
        : ((f = s / 2),
          (a = n - f),
          (l = n + f),
          (c = Math.min(r, i)),
          (u = Math.max(r, i))),
      { left: a, top: c, right: l, bottom: u }
    );
  }
  function Gn(e, t, n, r) {
    return e ? 0 : qe(t, n, r);
  }
  function HR(e, t, n) {
    const r = e.options.borderWidth,
      i = e.borderSkipped,
      s = Wx(r);
    return {
      t: Gn(i.top, s.top, 0, n),
      r: Gn(i.right, s.right, 0, t),
      b: Gn(i.bottom, s.bottom, 0, n),
      l: Gn(i.left, s.left, 0, t),
    };
  }
  function WR(e, t, n) {
    const { enableBorderRadius: r } = e.getProps(["enableBorderRadius"]),
      i = e.options.borderRadius,
      s = Ur(i),
      o = Math.min(t, n),
      a = e.borderSkipped,
      l = r || re(i);
    return {
      topLeft: Gn(!l || a.top || a.left, s.topLeft, 0, o),
      topRight: Gn(!l || a.top || a.right, s.topRight, 0, o),
      bottomLeft: Gn(!l || a.bottom || a.left, s.bottomLeft, 0, o),
      bottomRight: Gn(!l || a.bottom || a.right, s.bottomRight, 0, o),
    };
  }
  function $R(e) {
    const t = gb(e),
      n = t.right - t.left,
      r = t.bottom - t.top,
      i = HR(e, n / 2, r / 2),
      s = WR(e, n / 2, r / 2);
    return {
      outer: { x: t.left, y: t.top, w: n, h: r, radius: s },
      inner: {
        x: t.left + i.l,
        y: t.top + i.t,
        w: n - i.l - i.r,
        h: r - i.t - i.b,
        radius: {
          topLeft: Math.max(0, s.topLeft - Math.max(i.t, i.l)),
          topRight: Math.max(0, s.topRight - Math.max(i.t, i.r)),
          bottomLeft: Math.max(0, s.bottomLeft - Math.max(i.b, i.l)),
          bottomRight: Math.max(0, s.bottomRight - Math.max(i.b, i.r)),
        },
      },
    };
  }
  function Nu(e, t, n, r) {
    const i = t === null,
      s = n === null,
      a = e && !(i && s) && gb(e, r);
    return a && (i || En(t, a.left, a.right)) && (s || En(n, a.top, a.bottom));
  }
  function qR(e) {
    return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
  }
  function YR(e, t) {
    e.rect(t.x, t.y, t.w, t.h);
  }
  function Ru(e, t, n = {}) {
    const r = e.x !== n.x ? -t : 0,
      i = e.y !== n.y ? -t : 0,
      s = (e.x + e.w !== n.x + n.w ? t : 0) - r,
      o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
    return { x: e.x + r, y: e.y + i, w: e.w + s, h: e.h + o, radius: e.radius };
  }
  class Ya extends Ln {
    constructor(t) {
      super(),
        (this.options = void 0),
        (this.horizontal = void 0),
        (this.base = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.inflateAmount = void 0),
        t && Object.assign(this, t);
    }
    draw(t) {
      const {
          inflateAmount: n,
          options: { borderColor: r, backgroundColor: i },
        } = this,
        { inner: s, outer: o } = $R(this),
        a = qR(o.radius) ? xo : YR;
      t.save(),
        (o.w !== s.w || o.h !== s.h) &&
          (t.beginPath(),
          a(t, Ru(o, n, s)),
          t.clip(),
          a(t, Ru(s, -n, o)),
          (t.fillStyle = r),
          t.fill("evenodd")),
        t.beginPath(),
        a(t, Ru(s, n)),
        (t.fillStyle = i),
        t.fill(),
        t.restore();
    }
    inRange(t, n, r) {
      return Nu(this, t, n, r);
    }
    inXRange(t, n) {
      return Nu(this, t, null, n);
    }
    inYRange(t, n) {
      return Nu(this, null, t, n);
    }
    getCenterPoint(t) {
      const {
        x: n,
        y: r,
        base: i,
        horizontal: s,
      } = this.getProps(["x", "y", "base", "horizontal"], t);
      return { x: s ? (n + i) / 2 : n, y: s ? r : (r + i) / 2 };
    }
    getRange(t) {
      return t === "x" ? this.width / 2 : this.height / 2;
    }
  }
  N(Ya, "id", "bar"),
    N(Ya, "defaults", {
      borderSkipped: "start",
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: "auto",
      pointStyle: void 0,
    }),
    N(Ya, "defaultRoutes", {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor",
    });
  var QR = Object.freeze({
    __proto__: null,
    ArcElement: xs,
    BarElement: Ya,
    LineElement: Xn,
    PointElement: qa,
  });
  const af = [
      "rgb(54, 162, 235)",
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(153, 102, 255)",
      "rgb(201, 203, 207)",
    ],
    f0 = af.map((e) => e.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function yb(e) {
    return af[e % af.length];
  }
  function vb(e) {
    return f0[e % f0.length];
  }
  function KR(e, t) {
    return (e.borderColor = yb(t)), (e.backgroundColor = vb(t)), ++t;
  }
  function XR(e, t) {
    return (e.backgroundColor = e.data.map(() => yb(t++))), t;
  }
  function GR(e, t) {
    return (e.backgroundColor = e.data.map(() => vb(t++))), t;
  }
  function JR(e) {
    let t = 0;
    return (n, r) => {
      const i = e.getDatasetMeta(r).controller;
      i instanceof Lr
        ? (t = XR(n, t))
        : i instanceof zs
          ? (t = GR(n, t))
          : i && (t = KR(n, t));
    };
  }
  function h0(e) {
    let t;
    for (t in e) if (e[t].borderColor || e[t].backgroundColor) return !0;
    return !1;
  }
  function ZR(e) {
    return e && (e.borderColor || e.backgroundColor);
  }
  var e3 = {
    id: "colors",
    defaults: { enabled: !0, forceOverride: !1 },
    beforeLayout(e, t, n) {
      if (!n.enabled) return;
      const {
          data: { datasets: r },
          options: i,
        } = e.config,
        { elements: s } = i;
      if (!n.forceOverride && (h0(r) || ZR(i) || (s && h0(s)))) return;
      const o = JR(e);
      r.forEach(o);
    },
  };
  function t3(e, t, n, r, i) {
    const s = i.samples || r;
    if (s >= n) return e.slice(t, t + n);
    const o = [],
      a = (n - 2) / (s - 2);
    let l = 0;
    const c = t + n - 1;
    let u = t,
      f,
      h,
      m,
      g,
      v;
    for (o[l++] = e[u], f = 0; f < s - 2; f++) {
      let b = 0,
        y = 0,
        p;
      const x = Math.floor((f + 1) * a) + 1 + t,
        _ = Math.min(Math.floor((f + 2) * a) + 1, n) + t,
        S = _ - x;
      for (p = x; p < _; p++) (b += e[p].x), (y += e[p].y);
      (b /= S), (y /= S);
      const E = Math.floor(f * a) + 1 + t,
        A = Math.min(Math.floor((f + 1) * a) + 1, n) + t,
        { x: k, y: P } = e[u];
      for (m = g = -1, p = E; p < A; p++)
        (g = 0.5 * Math.abs((k - b) * (e[p].y - P) - (k - e[p].x) * (y - P))),
          g > m && ((m = g), (h = e[p]), (v = p));
      (o[l++] = h), (u = v);
    }
    return (o[l++] = e[c]), o;
  }
  function n3(e, t, n, r) {
    let i = 0,
      s = 0,
      o,
      a,
      l,
      c,
      u,
      f,
      h,
      m,
      g,
      v;
    const b = [],
      y = t + n - 1,
      p = e[t].x,
      _ = e[y].x - p;
    for (o = t; o < t + n; ++o) {
      (a = e[o]), (l = ((a.x - p) / _) * r), (c = a.y);
      const S = l | 0;
      if (S === u)
        c < g ? ((g = c), (f = o)) : c > v && ((v = c), (h = o)),
          (i = (s * i + a.x) / ++s);
      else {
        const E = o - 1;
        if (!se(f) && !se(h)) {
          const A = Math.min(f, h),
            k = Math.max(f, h);
          A !== m && A !== E && b.push({ ...e[A], x: i }),
            k !== m && k !== E && b.push({ ...e[k], x: i });
        }
        o > 0 && E !== m && b.push(e[E]),
          b.push(a),
          (u = S),
          (s = 0),
          (g = v = c),
          (f = h = m = o);
      }
    }
    return b;
  }
  function xb(e) {
    if (e._decimated) {
      const t = e._data;
      delete e._decimated,
        delete e._data,
        Object.defineProperty(e, "data", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: t,
        });
    }
  }
  function p0(e) {
    e.data.datasets.forEach((t) => {
      xb(t);
    });
  }
  function r3(e, t) {
    const n = t.length;
    let r = 0,
      i;
    const { iScale: s } = e,
      { min: o, max: a, minDefined: l, maxDefined: c } = s.getUserBounds();
    return (
      l && (r = qe(kn(t, s.axis, o).lo, 0, n - 1)),
      c ? (i = qe(kn(t, s.axis, a).hi + 1, r, n) - r) : (i = n - r),
      { start: r, count: i }
    );
  }
  var i3 = {
    id: "decimation",
    defaults: { algorithm: "min-max", enabled: !1 },
    beforeElementsUpdate: (e, t, n) => {
      if (!n.enabled) {
        p0(e);
        return;
      }
      const r = e.width;
      e.data.datasets.forEach((i, s) => {
        const { _data: o, indexAxis: a } = i,
          l = e.getDatasetMeta(s),
          c = o || i.data;
        if (
          ys([a, e.options.indexAxis]) === "y" ||
          !l.controller.supportsDecimation
        )
          return;
        const u = e.scales[l.xAxisID];
        if ((u.type !== "linear" && u.type !== "time") || e.options.parsing)
          return;
        let { start: f, count: h } = r3(l, c);
        const m = n.threshold || 4 * r;
        if (h <= m) {
          xb(i);
          return;
        }
        se(o) &&
          ((i._data = c),
          delete i.data,
          Object.defineProperty(i, "data", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return this._decimated;
            },
            set: function (v) {
              this._data = v;
            },
          }));
        let g;
        switch (n.algorithm) {
          case "lttb":
            g = t3(c, f, h, r, n);
            break;
          case "min-max":
            g = n3(c, f, h, r);
            break;
          default:
            throw new Error(
              `Unsupported decimation algorithm '${n.algorithm}'`,
            );
        }
        i._decimated = g;
      });
    },
    destroy(e) {
      p0(e);
    },
  };
  function s3(e, t, n) {
    const r = e.segments,
      i = e.points,
      s = t.points,
      o = [];
    for (const a of r) {
      let { start: l, end: c } = a;
      c = Hh(l, c, i);
      const u = lf(n, i[l], i[c], a.loop);
      if (!t.segments) {
        o.push({ source: a, target: u, start: i[l], end: i[c] });
        continue;
      }
      const f = tb(t, u);
      for (const h of f) {
        const m = lf(n, s[h.start], s[h.end], h.loop),
          g = eb(a, i, m);
        for (const v of g)
          o.push({
            source: v,
            target: h,
            start: { [n]: m0(u, m, "start", Math.max) },
            end: { [n]: m0(u, m, "end", Math.min) },
          });
      }
    }
    return o;
  }
  function lf(e, t, n, r) {
    if (r) return;
    let i = t[e],
      s = n[e];
    return (
      e === "angle" && ((i = St(i)), (s = St(s))),
      { property: e, start: i, end: s }
    );
  }
  function o3(e, t) {
    const { x: n = null, y: r = null } = e || {},
      i = t.points,
      s = [];
    return (
      t.segments.forEach(({ start: o, end: a }) => {
        a = Hh(o, a, i);
        const l = i[o],
          c = i[a];
        r !== null
          ? (s.push({ x: l.x, y: r }), s.push({ x: c.x, y: r }))
          : n !== null && (s.push({ x: n, y: l.y }), s.push({ x: n, y: c.y }));
      }),
      s
    );
  }
  function Hh(e, t, n) {
    for (; t > e; t--) {
      const r = n[t];
      if (!isNaN(r.x) && !isNaN(r.y)) break;
    }
    return t;
  }
  function m0(e, t, n, r) {
    return e && t ? r(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
  }
  function bb(e, t) {
    let n = [],
      r = !1;
    return (
      ke(e) ? ((r = !0), (n = e)) : (n = o3(e, t)),
      n.length
        ? new Xn({ points: n, options: { tension: 0 }, _loop: r, _fullLoop: r })
        : null
    );
  }
  function g0(e) {
    return e && e.fill !== !1;
  }
  function a3(e, t, n) {
    let i = e[t].fill;
    const s = [t];
    let o;
    if (!n) return i;
    for (; i !== !1 && s.indexOf(i) === -1; ) {
      if (!Oe(i)) return i;
      if (((o = e[i]), !o)) return !1;
      if (o.visible) return i;
      s.push(i), (i = o.fill);
    }
    return !1;
  }
  function l3(e, t, n) {
    const r = f3(e);
    if (re(r)) return isNaN(r.value) ? !1 : r;
    let i = parseFloat(r);
    return Oe(i) && Math.floor(i) === i
      ? c3(r[0], t, i, n)
      : ["origin", "start", "end", "stack", "shape"].indexOf(r) >= 0 && r;
  }
  function c3(e, t, n, r) {
    return (
      (e === "-" || e === "+") && (n = t + n),
      n === t || n < 0 || n >= r ? !1 : n
    );
  }
  function u3(e, t) {
    let n = null;
    return (
      e === "start"
        ? (n = t.bottom)
        : e === "end"
          ? (n = t.top)
          : re(e)
            ? (n = t.getPixelForValue(e.value))
            : t.getBasePixel && (n = t.getBasePixel()),
      n
    );
  }
  function d3(e, t, n) {
    let r;
    return (
      e === "start"
        ? (r = n)
        : e === "end"
          ? (r = t.options.reverse ? t.min : t.max)
          : re(e)
            ? (r = e.value)
            : (r = t.getBaseValue()),
      r
    );
  }
  function f3(e) {
    const t = e.options,
      n = t.fill;
    let r = J(n && n.target, n);
    return (
      r === void 0 && (r = !!t.backgroundColor),
      r === !1 || r === null ? !1 : r === !0 ? "origin" : r
    );
  }
  function h3(e) {
    const { scale: t, index: n, line: r } = e,
      i = [],
      s = r.segments,
      o = r.points,
      a = p3(t, n);
    a.push(bb({ x: null, y: t.bottom }, r));
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      for (let u = c.start; u <= c.end; u++) m3(i, o[u], a);
    }
    return new Xn({ points: i, options: {} });
  }
  function p3(e, t) {
    const n = [],
      r = e.getMatchingVisibleMetas("line");
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      if (s.index === t) break;
      s.hidden || n.unshift(s.dataset);
    }
    return n;
  }
  function m3(e, t, n) {
    const r = [];
    for (let i = 0; i < n.length; i++) {
      const s = n[i],
        { first: o, last: a, point: l } = g3(s, t, "x");
      if (!(!l || (o && a))) {
        if (o) r.unshift(l);
        else if ((e.push(l), !a)) break;
      }
    }
    e.push(...r);
  }
  function g3(e, t, n) {
    const r = e.interpolate(t, n);
    if (!r) return {};
    const i = r[n],
      s = e.segments,
      o = e.points;
    let a = !1,
      l = !1;
    for (let c = 0; c < s.length; c++) {
      const u = s[c],
        f = o[u.start][n],
        h = o[u.end][n];
      if (En(i, f, h)) {
        (a = i === f), (l = i === h);
        break;
      }
    }
    return { first: a, last: l, point: r };
  }
  class _b {
    constructor(t) {
      (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
    }
    pathSegment(t, n, r) {
      const { x: i, y: s, radius: o } = this;
      return (
        (n = n || { start: 0, end: Se }),
        t.arc(i, s, o, n.end, n.start, !0),
        !r.bounds
      );
    }
    interpolate(t) {
      const { x: n, y: r, radius: i } = this,
        s = t.angle;
      return { x: n + Math.cos(s) * i, y: r + Math.sin(s) * i, angle: s };
    }
  }
  function y3(e) {
    const { chart: t, fill: n, line: r } = e;
    if (Oe(n)) return v3(t, n);
    if (n === "stack") return h3(e);
    if (n === "shape") return !0;
    const i = x3(e);
    return i instanceof _b ? i : bb(i, r);
  }
  function v3(e, t) {
    const n = e.getDatasetMeta(t);
    return n && e.isDatasetVisible(t) ? n.dataset : null;
  }
  function x3(e) {
    return (e.scale || {}).getPointPositionForValue ? _3(e) : b3(e);
  }
  function b3(e) {
    const { scale: t = {}, fill: n } = e,
      r = u3(n, t);
    if (Oe(r)) {
      const i = t.isHorizontal();
      return { x: i ? r : null, y: i ? null : r };
    }
    return null;
  }
  function _3(e) {
    const { scale: t, fill: n } = e,
      r = t.options,
      i = t.getLabels().length,
      s = r.reverse ? t.max : t.min,
      o = d3(n, t, s),
      a = [];
    if (r.grid.circular) {
      const l = t.getPointPositionForValue(0, s);
      return new _b({
        x: l.x,
        y: l.y,
        radius: t.getDistanceFromCenterForValue(o),
      });
    }
    for (let l = 0; l < i; ++l) a.push(t.getPointPositionForValue(l, o));
    return a;
  }
  function Lu(e, t, n) {
    const r = y3(t),
      { line: i, scale: s, axis: o } = t,
      a = i.options,
      l = a.fill,
      c = a.backgroundColor,
      { above: u = c, below: f = c } = l || {};
    r &&
      i.points.length &&
      (Pc(e, n),
      w3(e, {
        line: i,
        target: r,
        above: u,
        below: f,
        area: n,
        scale: s,
        axis: o,
      }),
      Tc(e));
  }
  function w3(e, t) {
    const { line: n, target: r, above: i, below: s, area: o, scale: a } = t,
      l = n._loop ? "angle" : t.axis;
    e.save(),
      l === "x" &&
        s !== i &&
        (y0(e, r, o.top),
        v0(e, { line: n, target: r, color: i, scale: a, property: l }),
        e.restore(),
        e.save(),
        y0(e, r, o.bottom)),
      v0(e, { line: n, target: r, color: s, scale: a, property: l }),
      e.restore();
  }
  function y0(e, t, n) {
    const { segments: r, points: i } = t;
    let s = !0,
      o = !1;
    e.beginPath();
    for (const a of r) {
      const { start: l, end: c } = a,
        u = i[l],
        f = i[Hh(l, c, i)];
      s
        ? (e.moveTo(u.x, u.y), (s = !1))
        : (e.lineTo(u.x, n), e.lineTo(u.x, u.y)),
        (o = !!t.pathSegment(e, a, { move: o })),
        o ? e.closePath() : e.lineTo(f.x, n);
    }
    e.lineTo(t.first().x, n), e.closePath(), e.clip();
  }
  function v0(e, t) {
    const { line: n, target: r, property: i, color: s, scale: o } = t,
      a = s3(n, r, i);
    for (const { source: l, target: c, start: u, end: f } of a) {
      const { style: { backgroundColor: h = s } = {} } = l,
        m = r !== !0;
      e.save(), (e.fillStyle = h), S3(e, o, m && lf(i, u, f)), e.beginPath();
      const g = !!n.pathSegment(e, l);
      let v;
      if (m) {
        g ? e.closePath() : x0(e, r, f, i);
        const b = !!r.pathSegment(e, c, { move: g, reverse: !0 });
        (v = g && b), v || x0(e, r, u, i);
      }
      e.closePath(), e.fill(v ? "evenodd" : "nonzero"), e.restore();
    }
  }
  function S3(e, t, n) {
    const { top: r, bottom: i } = t.chart.chartArea,
      { property: s, start: o, end: a } = n || {};
    s === "x" && (e.beginPath(), e.rect(o, r, a - o, i - r), e.clip());
  }
  function x0(e, t, n, r) {
    const i = t.interpolate(n, r);
    i && e.lineTo(i.x, i.y);
  }
  var A3 = {
    id: "filler",
    afterDatasetsUpdate(e, t, n) {
      const r = (e.data.datasets || []).length,
        i = [];
      let s, o, a, l;
      for (o = 0; o < r; ++o)
        (s = e.getDatasetMeta(o)),
          (a = s.dataset),
          (l = null),
          a &&
            a.options &&
            a instanceof Xn &&
            (l = {
              visible: e.isDatasetVisible(o),
              index: o,
              fill: l3(a, o, r),
              chart: e,
              axis: s.controller.options.indexAxis,
              scale: s.vScale,
              line: a,
            }),
          (s.$filler = l),
          i.push(l);
      for (o = 0; o < r; ++o)
        (l = i[o]), !(!l || l.fill === !1) && (l.fill = a3(i, o, n.propagate));
    },
    beforeDraw(e, t, n) {
      const r = n.drawTime === "beforeDraw",
        i = e.getSortedVisibleDatasetMetas(),
        s = e.chartArea;
      for (let o = i.length - 1; o >= 0; --o) {
        const a = i[o].$filler;
        a &&
          (a.line.updateControlPoints(s, a.axis),
          r && a.fill && Lu(e.ctx, a, s));
      }
    },
    beforeDatasetsDraw(e, t, n) {
      if (n.drawTime !== "beforeDatasetsDraw") return;
      const r = e.getSortedVisibleDatasetMetas();
      for (let i = r.length - 1; i >= 0; --i) {
        const s = r[i].$filler;
        g0(s) && Lu(e.ctx, s, e.chartArea);
      }
    },
    beforeDatasetDraw(e, t, n) {
      const r = t.meta.$filler;
      !g0(r) || n.drawTime !== "beforeDatasetDraw" || Lu(e.ctx, r, e.chartArea);
    },
    defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
  };
  const b0 = (e, t) => {
      let { boxHeight: n = t, boxWidth: r = t } = e;
      return (
        e.usePointStyle &&
          ((n = Math.min(n, t)), (r = e.pointStyleWidth || Math.min(r, t))),
        { boxWidth: r, boxHeight: n, itemHeight: Math.max(t, n) }
      );
    },
    E3 = (e, t) =>
      e !== null &&
      t !== null &&
      e.datasetIndex === t.datasetIndex &&
      e.index === t.index;
  class _0 extends Ln {
    constructor(t) {
      super(),
        (this._added = !1),
        (this.legendHitBoxes = []),
        (this._hoveredItem = null),
        (this.doughnutMode = !1),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this.legendItems = void 0),
        (this.columnSizes = void 0),
        (this.lineWidths = void 0),
        (this.maxHeight = void 0),
        (this.maxWidth = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this._margins = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, n, r) {
      (this.maxWidth = t),
        (this.maxHeight = n),
        (this._margins = r),
        this.setDimensions(),
        this.buildLabels(),
        this.fit();
    }
    setDimensions() {
      this.isHorizontal()
        ? ((this.width = this.maxWidth),
          (this.left = this._margins.left),
          (this.right = this.width))
        : ((this.height = this.maxHeight),
          (this.top = this._margins.top),
          (this.bottom = this.height));
    }
    buildLabels() {
      const t = this.options.labels || {};
      let n = ve(t.generateLabels, [this.chart], this) || [];
      t.filter && (n = n.filter((r) => t.filter(r, this.chart.data))),
        t.sort && (n = n.sort((r, i) => t.sort(r, i, this.chart.data))),
        this.options.reverse && n.reverse(),
        (this.legendItems = n);
    }
    fit() {
      const { options: t, ctx: n } = this;
      if (!t.display) {
        this.width = this.height = 0;
        return;
      }
      const r = t.labels,
        i = Ve(r.font),
        s = i.size,
        o = this._computeTitleHeight(),
        { boxWidth: a, itemHeight: l } = b0(r, s);
      let c, u;
      (n.font = i.string),
        this.isHorizontal()
          ? ((c = this.maxWidth), (u = this._fitRows(o, s, a, l) + 10))
          : ((u = this.maxHeight), (c = this._fitCols(o, i, a, l) + 10)),
        (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
        (this.height = Math.min(u, t.maxHeight || this.maxHeight));
    }
    _fitRows(t, n, r, i) {
      const {
          ctx: s,
          maxWidth: o,
          options: {
            labels: { padding: a },
          },
        } = this,
        l = (this.legendHitBoxes = []),
        c = (this.lineWidths = [0]),
        u = i + a;
      let f = t;
      (s.textAlign = "left"), (s.textBaseline = "middle");
      let h = -1,
        m = -u;
      return (
        this.legendItems.forEach((g, v) => {
          const b = r + n / 2 + s.measureText(g.text).width;
          (v === 0 || c[c.length - 1] + b + 2 * a > o) &&
            ((f += u), (c[c.length - (v > 0 ? 0 : 1)] = 0), (m += u), h++),
            (l[v] = { left: 0, top: m, row: h, width: b, height: i }),
            (c[c.length - 1] += b + a);
        }),
        f
      );
    }
    _fitCols(t, n, r, i) {
      const {
          ctx: s,
          maxHeight: o,
          options: {
            labels: { padding: a },
          },
        } = this,
        l = (this.legendHitBoxes = []),
        c = (this.columnSizes = []),
        u = o - t;
      let f = a,
        h = 0,
        m = 0,
        g = 0,
        v = 0;
      return (
        this.legendItems.forEach((b, y) => {
          const { itemWidth: p, itemHeight: x } = k3(r, n, s, b, i);
          y > 0 &&
            m + x + 2 * a > u &&
            ((f += h + a),
            c.push({ width: h, height: m }),
            (g += h + a),
            v++,
            (h = m = 0)),
            (l[y] = { left: g, top: m, col: v, width: p, height: x }),
            (h = Math.max(h, p)),
            (m += x + a);
        }),
        (f += h),
        c.push({ width: h, height: m }),
        f
      );
    }
    adjustHitBoxes() {
      if (!this.options.display) return;
      const t = this._computeTitleHeight(),
        {
          legendHitBoxes: n,
          options: {
            align: r,
            labels: { padding: i },
            rtl: s,
          },
        } = this,
        o = ki(s, this.left, this.width);
      if (this.isHorizontal()) {
        let a = 0,
          l = et(r, this.left + i, this.right - this.lineWidths[a]);
        for (const c of n)
          a !== c.row &&
            ((a = c.row),
            (l = et(r, this.left + i, this.right - this.lineWidths[a]))),
            (c.top += this.top + t + i),
            (c.left = o.leftForLtr(o.x(l), c.width)),
            (l += c.width + i);
      } else {
        let a = 0,
          l = et(r, this.top + t + i, this.bottom - this.columnSizes[a].height);
        for (const c of n)
          c.col !== a &&
            ((a = c.col),
            (l = et(
              r,
              this.top + t + i,
              this.bottom - this.columnSizes[a].height,
            ))),
            (c.top = l),
            (c.left += this.left + i),
            (c.left = o.leftForLtr(o.x(c.left), c.width)),
            (l += c.height + i);
      }
    }
    isHorizontal() {
      return (
        this.options.position === "top" || this.options.position === "bottom"
      );
    }
    draw() {
      if (this.options.display) {
        const t = this.ctx;
        Pc(t, this), this._draw(), Tc(t);
      }
    }
    _draw() {
      const { options: t, columnSizes: n, lineWidths: r, ctx: i } = this,
        { align: s, labels: o } = t,
        a = Me.color,
        l = ki(t.rtl, this.left, this.width),
        c = Ve(o.font),
        { padding: u } = o,
        f = c.size,
        h = f / 2;
      let m;
      this.drawTitle(),
        (i.textAlign = l.textAlign("left")),
        (i.textBaseline = "middle"),
        (i.lineWidth = 0.5),
        (i.font = c.string);
      const { boxWidth: g, boxHeight: v, itemHeight: b } = b0(o, f),
        y = function (E, A, k) {
          if (isNaN(g) || g <= 0 || isNaN(v) || v < 0) return;
          i.save();
          const P = J(k.lineWidth, 1);
          if (
            ((i.fillStyle = J(k.fillStyle, a)),
            (i.lineCap = J(k.lineCap, "butt")),
            (i.lineDashOffset = J(k.lineDashOffset, 0)),
            (i.lineJoin = J(k.lineJoin, "miter")),
            (i.lineWidth = P),
            (i.strokeStyle = J(k.strokeStyle, a)),
            i.setLineDash(J(k.lineDash, [])),
            o.usePointStyle)
          ) {
            const T = {
                radius: (v * Math.SQRT2) / 2,
                pointStyle: k.pointStyle,
                rotation: k.rotation,
                borderWidth: P,
              },
              L = l.xPlus(E, g / 2),
              B = A + h;
            Hx(i, T, L, B, o.pointStyleWidth && g);
          } else {
            const T = A + Math.max((f - v) / 2, 0),
              L = l.leftForLtr(E, g),
              B = Ur(k.borderRadius);
            i.beginPath(),
              Object.values(B).some(($) => $ !== 0)
                ? xo(i, { x: L, y: T, w: g, h: v, radius: B })
                : i.rect(L, T, g, v),
              i.fill(),
              P !== 0 && i.stroke();
          }
          i.restore();
        },
        p = function (E, A, k) {
          Gr(i, k.text, E, A + b / 2, c, {
            strikethrough: k.hidden,
            textAlign: l.textAlign(k.textAlign),
          });
        },
        x = this.isHorizontal(),
        _ = this._computeTitleHeight();
      x
        ? (m = {
            x: et(s, this.left + u, this.right - r[0]),
            y: this.top + u + _,
            line: 0,
          })
        : (m = {
            x: this.left + u,
            y: et(s, this.top + _ + u, this.bottom - n[0].height),
            line: 0,
          }),
        Gx(this.ctx, t.textDirection);
      const S = b + u;
      this.legendItems.forEach((E, A) => {
        (i.strokeStyle = E.fontColor), (i.fillStyle = E.fontColor);
        const k = i.measureText(E.text).width,
          P = l.textAlign(E.textAlign || (E.textAlign = o.textAlign)),
          T = g + h + k;
        let L = m.x,
          B = m.y;
        l.setWidth(this.width),
          x
            ? A > 0 &&
              L + T + u > this.right &&
              ((B = m.y += S),
              m.line++,
              (L = m.x = et(s, this.left + u, this.right - r[m.line])))
            : A > 0 &&
              B + S > this.bottom &&
              ((L = m.x = L + n[m.line].width + u),
              m.line++,
              (B = m.y =
                et(s, this.top + _ + u, this.bottom - n[m.line].height)));
        const $ = l.x(L);
        if (
          (y($, B, E),
          (L = YO(P, L + g + h, x ? L + T : this.right, t.rtl)),
          p(l.x(L), B, E),
          x)
        )
          m.x += T + u;
        else if (typeof E.text != "string") {
          const ee = c.lineHeight;
          m.y += wb(E, ee) + u;
        } else m.y += S;
      }),
        Jx(this.ctx, t.textDirection);
    }
    drawTitle() {
      const t = this.options,
        n = t.title,
        r = Ve(n.font),
        i = it(n.padding);
      if (!n.display) return;
      const s = ki(t.rtl, this.left, this.width),
        o = this.ctx,
        a = n.position,
        l = r.size / 2,
        c = i.top + l;
      let u,
        f = this.left,
        h = this.width;
      if (this.isHorizontal())
        (h = Math.max(...this.lineWidths)),
          (u = this.top + c),
          (f = et(t.align, f, this.right - h));
      else {
        const g = this.columnSizes.reduce((v, b) => Math.max(v, b.height), 0);
        u =
          c +
          et(
            t.align,
            this.top,
            this.bottom - g - t.labels.padding - this._computeTitleHeight(),
          );
      }
      const m = et(a, f, f + h);
      (o.textAlign = s.textAlign(Rh(a))),
        (o.textBaseline = "middle"),
        (o.strokeStyle = n.color),
        (o.fillStyle = n.color),
        (o.font = r.string),
        Gr(o, n.text, m, u, r);
    }
    _computeTitleHeight() {
      const t = this.options.title,
        n = Ve(t.font),
        r = it(t.padding);
      return t.display ? n.lineHeight + r.height : 0;
    }
    _getLegendItemAt(t, n) {
      let r, i, s;
      if (En(t, this.left, this.right) && En(n, this.top, this.bottom)) {
        for (s = this.legendHitBoxes, r = 0; r < s.length; ++r)
          if (
            ((i = s[r]),
            En(t, i.left, i.left + i.width) && En(n, i.top, i.top + i.height))
          )
            return this.legendItems[r];
      }
      return null;
    }
    handleEvent(t) {
      const n = this.options;
      if (!P3(t.type, n)) return;
      const r = this._getLegendItemAt(t.x, t.y);
      if (t.type === "mousemove" || t.type === "mouseout") {
        const i = this._hoveredItem,
          s = E3(i, r);
        i && !s && ve(n.onLeave, [t, i, this], this),
          (this._hoveredItem = r),
          r && !s && ve(n.onHover, [t, r, this], this);
      } else r && ve(n.onClick, [t, r, this], this);
    }
  }
  function k3(e, t, n, r, i) {
    const s = C3(r, e, t, n),
      o = j3(i, r, t.lineHeight);
    return { itemWidth: s, itemHeight: o };
  }
  function C3(e, t, n, r) {
    let i = e.text;
    return (
      i &&
        typeof i != "string" &&
        (i = i.reduce((s, o) => (s.length > o.length ? s : o))),
      t + n.size / 2 + r.measureText(i).width
    );
  }
  function j3(e, t, n) {
    let r = e;
    return typeof t.text != "string" && (r = wb(t, n)), r;
  }
  function wb(e, t) {
    const n = e.text ? e.text.length : 0;
    return t * n;
  }
  function P3(e, t) {
    return !!(
      ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
      (t.onClick && (e === "click" || e === "mouseup"))
    );
  }
  var T3 = {
    id: "legend",
    _element: _0,
    start(e, t, n) {
      const r = (e.legend = new _0({ ctx: e.ctx, options: n, chart: e }));
      nt.configure(e, r, n), nt.addBox(e, r);
    },
    stop(e) {
      nt.removeBox(e, e.legend), delete e.legend;
    },
    beforeUpdate(e, t, n) {
      const r = e.legend;
      nt.configure(e, r, n), (r.options = n);
    },
    afterUpdate(e) {
      const t = e.legend;
      t.buildLabels(), t.adjustHitBoxes();
    },
    afterEvent(e, t) {
      t.replay || e.legend.handleEvent(t.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick(e, t, n) {
        const r = t.datasetIndex,
          i = n.chart;
        i.isDatasetVisible(r)
          ? (i.hide(r), (t.hidden = !0))
          : (i.show(r), (t.hidden = !1));
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (e) => e.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(e) {
          const t = e.data.datasets,
            {
              labels: {
                usePointStyle: n,
                pointStyle: r,
                textAlign: i,
                color: s,
                useBorderRadius: o,
                borderRadius: a,
              },
            } = e.legend.options;
          return e._getSortedDatasetMetas().map((l) => {
            const c = l.controller.getStyle(n ? 0 : void 0),
              u = it(c.borderWidth);
            return {
              text: t[l.index].label,
              fillStyle: c.backgroundColor,
              fontColor: s,
              hidden: !l.visible,
              lineCap: c.borderCapStyle,
              lineDash: c.borderDash,
              lineDashOffset: c.borderDashOffset,
              lineJoin: c.borderJoinStyle,
              lineWidth: (u.width + u.height) / 4,
              strokeStyle: c.borderColor,
              pointStyle: r || c.pointStyle,
              rotation: c.rotation,
              textAlign: i || c.textAlign,
              borderRadius: o && (a || c.borderRadius),
              datasetIndex: l.index,
            };
          }, this);
        },
      },
      title: {
        color: (e) => e.chart.options.color,
        display: !1,
        position: "center",
        text: "",
      },
    },
    descriptors: {
      _scriptable: (e) => !e.startsWith("on"),
      labels: {
        _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
      },
    },
  };
  class Wh extends Ln {
    constructor(t) {
      super(),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.ctx = t.ctx),
        (this._padding = void 0),
        (this.top = void 0),
        (this.bottom = void 0),
        (this.left = void 0),
        (this.right = void 0),
        (this.width = void 0),
        (this.height = void 0),
        (this.position = void 0),
        (this.weight = void 0),
        (this.fullSize = void 0);
    }
    update(t, n) {
      const r = this.options;
      if (((this.left = 0), (this.top = 0), !r.display)) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      (this.width = this.right = t), (this.height = this.bottom = n);
      const i = ke(r.text) ? r.text.length : 1;
      this._padding = it(r.padding);
      const s = i * Ve(r.font).lineHeight + this._padding.height;
      this.isHorizontal() ? (this.height = s) : (this.width = s);
    }
    isHorizontal() {
      const t = this.options.position;
      return t === "top" || t === "bottom";
    }
    _drawArgs(t) {
      const { top: n, left: r, bottom: i, right: s, options: o } = this,
        a = o.align;
      let l = 0,
        c,
        u,
        f;
      return (
        this.isHorizontal()
          ? ((u = et(a, r, s)), (f = n + t), (c = s - r))
          : (o.position === "left"
              ? ((u = r + t), (f = et(a, i, n)), (l = Ae * -0.5))
              : ((u = s - t), (f = et(a, n, i)), (l = Ae * 0.5)),
            (c = i - n)),
        { titleX: u, titleY: f, maxWidth: c, rotation: l }
      );
    }
    draw() {
      const t = this.ctx,
        n = this.options;
      if (!n.display) return;
      const r = Ve(n.font),
        s = r.lineHeight / 2 + this._padding.top,
        { titleX: o, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(s);
      Gr(t, n.text, 0, 0, r, {
        color: n.color,
        maxWidth: l,
        rotation: c,
        textAlign: Rh(n.align),
        textBaseline: "middle",
        translation: [o, a],
      });
    }
  }
  function O3(e, t) {
    const n = new Wh({ ctx: e.ctx, options: t, chart: e });
    nt.configure(e, n, t), nt.addBox(e, n), (e.titleBlock = n);
  }
  var M3 = {
    id: "title",
    _element: Wh,
    start(e, t, n) {
      O3(e, n);
    },
    stop(e) {
      const t = e.titleBlock;
      nt.removeBox(e, t), delete e.titleBlock;
    },
    beforeUpdate(e, t, n) {
      const r = e.titleBlock;
      nt.configure(e, r, n), (r.options = n);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "bold" },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const xa = new WeakMap();
  var N3 = {
    id: "subtitle",
    start(e, t, n) {
      const r = new Wh({ ctx: e.ctx, options: n, chart: e });
      nt.configure(e, r, n), nt.addBox(e, r), xa.set(e, r);
    },
    stop(e) {
      nt.removeBox(e, xa.get(e)), xa.delete(e);
    },
    beforeUpdate(e, t, n) {
      const r = xa.get(e);
      nt.configure(e, r, n), (r.options = n);
    },
    defaults: {
      align: "center",
      display: !1,
      font: { weight: "normal" },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500,
    },
    defaultRoutes: { color: "color" },
    descriptors: { _scriptable: !0, _indexable: !1 },
  };
  const bs = {
    average(e) {
      if (!e.length) return !1;
      let t,
        n,
        r = new Set(),
        i = 0,
        s = 0;
      for (t = 0, n = e.length; t < n; ++t) {
        const a = e[t].element;
        if (a && a.hasValue()) {
          const l = a.tooltipPosition();
          r.add(l.x), (i += l.y), ++s;
        }
      }
      return { x: [...r].reduce((a, l) => a + l) / r.size, y: i / s };
    },
    nearest(e, t) {
      if (!e.length) return !1;
      let n = t.x,
        r = t.y,
        i = Number.POSITIVE_INFINITY,
        s,
        o,
        a;
      for (s = 0, o = e.length; s < o; ++s) {
        const l = e[s].element;
        if (l && l.hasValue()) {
          const c = l.getCenterPoint(),
            u = Zd(t, c);
          u < i && ((i = u), (a = l));
        }
      }
      if (a) {
        const l = a.tooltipPosition();
        (n = l.x), (r = l.y);
      }
      return { x: n, y: r };
    },
  };
  function on(e, t) {
    return t && (ke(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
  }
  function vn(e) {
    return (typeof e == "string" || e instanceof String) &&
      e.indexOf(`
`) > -1
      ? e.split(`
`)
      : e;
  }
  function R3(e, t) {
    const { element: n, datasetIndex: r, index: i } = t,
      s = e.getDatasetMeta(r).controller,
      { label: o, value: a } = s.getLabelAndValue(i);
    return {
      chart: e,
      label: o,
      parsed: s.getParsed(i),
      raw: e.data.datasets[r].data[i],
      formattedValue: a,
      dataset: s.getDataset(),
      dataIndex: i,
      datasetIndex: r,
      element: n,
    };
  }
  function w0(e, t) {
    const n = e.chart.ctx,
      { body: r, footer: i, title: s } = e,
      { boxWidth: o, boxHeight: a } = t,
      l = Ve(t.bodyFont),
      c = Ve(t.titleFont),
      u = Ve(t.footerFont),
      f = s.length,
      h = i.length,
      m = r.length,
      g = it(t.padding);
    let v = g.height,
      b = 0,
      y = r.reduce(
        (_, S) => _ + S.before.length + S.lines.length + S.after.length,
        0,
      );
    if (
      ((y += e.beforeBody.length + e.afterBody.length),
      f &&
        (v +=
          f * c.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
      y)
    ) {
      const _ = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
      v += m * _ + (y - m) * l.lineHeight + (y - 1) * t.bodySpacing;
    }
    h &&
      (v += t.footerMarginTop + h * u.lineHeight + (h - 1) * t.footerSpacing);
    let p = 0;
    const x = function (_) {
      b = Math.max(b, n.measureText(_).width + p);
    };
    return (
      n.save(),
      (n.font = c.string),
      de(e.title, x),
      (n.font = l.string),
      de(e.beforeBody.concat(e.afterBody), x),
      (p = t.displayColors ? o + 2 + t.boxPadding : 0),
      de(r, (_) => {
        de(_.before, x), de(_.lines, x), de(_.after, x);
      }),
      (p = 0),
      (n.font = u.string),
      de(e.footer, x),
      n.restore(),
      (b += g.width),
      { width: b, height: v }
    );
  }
  function L3(e, t) {
    const { y: n, height: r } = t;
    return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center";
  }
  function I3(e, t, n, r) {
    const { x: i, width: s } = r,
      o = n.caretSize + n.caretPadding;
    if (
      (e === "left" && i + s + o > t.width) ||
      (e === "right" && i - s - o < 0)
    )
      return !0;
  }
  function D3(e, t, n, r) {
    const { x: i, width: s } = n,
      {
        width: o,
        chartArea: { left: a, right: l },
      } = e;
    let c = "center";
    return (
      r === "center"
        ? (c = i <= (a + l) / 2 ? "left" : "right")
        : i <= s / 2
          ? (c = "left")
          : i >= o - s / 2 && (c = "right"),
      I3(c, e, t, n) && (c = "center"),
      c
    );
  }
  function S0(e, t, n) {
    const r = n.yAlign || t.yAlign || L3(e, n);
    return { xAlign: n.xAlign || t.xAlign || D3(e, t, n, r), yAlign: r };
  }
  function F3(e, t) {
    let { x: n, width: r } = e;
    return t === "right" ? (n -= r) : t === "center" && (n -= r / 2), n;
  }
  function z3(e, t, n) {
    let { y: r, height: i } = e;
    return (
      t === "top" ? (r += n) : t === "bottom" ? (r -= i + n) : (r -= i / 2), r
    );
  }
  function A0(e, t, n, r) {
    const { caretSize: i, caretPadding: s, cornerRadius: o } = e,
      { xAlign: a, yAlign: l } = n,
      c = i + s,
      { topLeft: u, topRight: f, bottomLeft: h, bottomRight: m } = Ur(o);
    let g = F3(t, a);
    const v = z3(t, l, c);
    return (
      l === "center"
        ? a === "left"
          ? (g += c)
          : a === "right" && (g -= c)
        : a === "left"
          ? (g -= Math.max(u, h) + i)
          : a === "right" && (g += Math.max(f, m) + i),
      { x: qe(g, 0, r.width - t.width), y: qe(v, 0, r.height - t.height) }
    );
  }
  function ba(e, t, n) {
    const r = it(n.padding);
    return t === "center"
      ? e.x + e.width / 2
      : t === "right"
        ? e.x + e.width - r.right
        : e.x + r.left;
  }
  function E0(e) {
    return on([], vn(e));
  }
  function B3(e, t, n) {
    return br(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
  }
  function k0(e, t) {
    const n =
      t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return n ? e.override(n) : e;
  }
  const Sb = {
    beforeTitle: gn,
    title(e) {
      if (e.length > 0) {
        const t = e[0],
          n = t.chart.data.labels,
          r = n ? n.length : 0;
        if (this && this.options && this.options.mode === "dataset")
          return t.dataset.label || "";
        if (t.label) return t.label;
        if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
      }
      return "";
    },
    afterTitle: gn,
    beforeBody: gn,
    beforeLabel: gn,
    label(e) {
      if (this && this.options && this.options.mode === "dataset")
        return e.label + ": " + e.formattedValue || e.formattedValue;
      let t = e.dataset.label || "";
      t && (t += ": ");
      const n = e.formattedValue;
      return se(n) || (t += n), t;
    },
    labelColor(e) {
      const n = e.chart
        .getDatasetMeta(e.datasetIndex)
        .controller.getStyle(e.dataIndex);
      return {
        borderColor: n.borderColor,
        backgroundColor: n.backgroundColor,
        borderWidth: n.borderWidth,
        borderDash: n.borderDash,
        borderDashOffset: n.borderDashOffset,
        borderRadius: 0,
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(e) {
      const n = e.chart
        .getDatasetMeta(e.datasetIndex)
        .controller.getStyle(e.dataIndex);
      return { pointStyle: n.pointStyle, rotation: n.rotation };
    },
    afterLabel: gn,
    afterBody: gn,
    beforeFooter: gn,
    footer: gn,
    afterFooter: gn,
  };
  function dt(e, t, n, r) {
    const i = e[t].call(n, r);
    return typeof i > "u" ? Sb[t].call(n, r) : i;
  }
  class cf extends Ln {
    constructor(t) {
      super(),
        (this.opacity = 0),
        (this._active = []),
        (this._eventPosition = void 0),
        (this._size = void 0),
        (this._cachedAnimations = void 0),
        (this._tooltipItems = []),
        (this.$animations = void 0),
        (this.$context = void 0),
        (this.chart = t.chart),
        (this.options = t.options),
        (this.dataPoints = void 0),
        (this.title = void 0),
        (this.beforeBody = void 0),
        (this.body = void 0),
        (this.afterBody = void 0),
        (this.footer = void 0),
        (this.xAlign = void 0),
        (this.yAlign = void 0),
        (this.x = void 0),
        (this.y = void 0),
        (this.height = void 0),
        (this.width = void 0),
        (this.caretX = void 0),
        (this.caretY = void 0),
        (this.labelColors = void 0),
        (this.labelPointStyles = void 0),
        (this.labelTextColors = void 0);
    }
    initialize(t) {
      (this.options = t),
        (this._cachedAnimations = void 0),
        (this.$context = void 0);
    }
    _resolveAnimations() {
      const t = this._cachedAnimations;
      if (t) return t;
      const n = this.chart,
        r = this.options.setContext(this.getContext()),
        i = r.enabled && n.options.animation && r.animations,
        s = new nb(this.chart, i);
      return i._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = B3(this.chart.getContext(), this, this._tooltipItems))
      );
    }
    getTitle(t, n) {
      const { callbacks: r } = n,
        i = dt(r, "beforeTitle", this, t),
        s = dt(r, "title", this, t),
        o = dt(r, "afterTitle", this, t);
      let a = [];
      return (a = on(a, vn(i))), (a = on(a, vn(s))), (a = on(a, vn(o))), a;
    }
    getBeforeBody(t, n) {
      return E0(dt(n.callbacks, "beforeBody", this, t));
    }
    getBody(t, n) {
      const { callbacks: r } = n,
        i = [];
      return (
        de(t, (s) => {
          const o = { before: [], lines: [], after: [] },
            a = k0(r, s);
          on(o.before, vn(dt(a, "beforeLabel", this, s))),
            on(o.lines, dt(a, "label", this, s)),
            on(o.after, vn(dt(a, "afterLabel", this, s))),
            i.push(o);
        }),
        i
      );
    }
    getAfterBody(t, n) {
      return E0(dt(n.callbacks, "afterBody", this, t));
    }
    getFooter(t, n) {
      const { callbacks: r } = n,
        i = dt(r, "beforeFooter", this, t),
        s = dt(r, "footer", this, t),
        o = dt(r, "afterFooter", this, t);
      let a = [];
      return (a = on(a, vn(i))), (a = on(a, vn(s))), (a = on(a, vn(o))), a;
    }
    _createItems(t) {
      const n = this._active,
        r = this.chart.data,
        i = [],
        s = [],
        o = [];
      let a = [],
        l,
        c;
      for (l = 0, c = n.length; l < c; ++l) a.push(R3(this.chart, n[l]));
      return (
        t.filter && (a = a.filter((u, f, h) => t.filter(u, f, h, r))),
        t.itemSort && (a = a.sort((u, f) => t.itemSort(u, f, r))),
        de(a, (u) => {
          const f = k0(t.callbacks, u);
          i.push(dt(f, "labelColor", this, u)),
            s.push(dt(f, "labelPointStyle", this, u)),
            o.push(dt(f, "labelTextColor", this, u));
        }),
        (this.labelColors = i),
        (this.labelPointStyles = s),
        (this.labelTextColors = o),
        (this.dataPoints = a),
        a
      );
    }
    update(t, n) {
      const r = this.options.setContext(this.getContext()),
        i = this._active;
      let s,
        o = [];
      if (!i.length) this.opacity !== 0 && (s = { opacity: 0 });
      else {
        const a = bs[r.position].call(this, i, this._eventPosition);
        (o = this._createItems(r)),
          (this.title = this.getTitle(o, r)),
          (this.beforeBody = this.getBeforeBody(o, r)),
          (this.body = this.getBody(o, r)),
          (this.afterBody = this.getAfterBody(o, r)),
          (this.footer = this.getFooter(o, r));
        const l = (this._size = w0(this, r)),
          c = Object.assign({}, a, l),
          u = S0(this.chart, r, c),
          f = A0(r, c, u, this.chart);
        (this.xAlign = u.xAlign),
          (this.yAlign = u.yAlign),
          (s = {
            opacity: 1,
            x: f.x,
            y: f.y,
            width: l.width,
            height: l.height,
            caretX: a.x,
            caretY: a.y,
          });
      }
      (this._tooltipItems = o),
        (this.$context = void 0),
        s && this._resolveAnimations().update(this, s),
        t &&
          r.external &&
          r.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: n,
          });
    }
    drawCaret(t, n, r, i) {
      const s = this.getCaretPosition(t, r, i);
      n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
    }
    getCaretPosition(t, n, r) {
      const { xAlign: i, yAlign: s } = this,
        { caretSize: o, cornerRadius: a } = r,
        { topLeft: l, topRight: c, bottomLeft: u, bottomRight: f } = Ur(a),
        { x: h, y: m } = t,
        { width: g, height: v } = n;
      let b, y, p, x, _, S;
      return (
        s === "center"
          ? ((_ = m + v / 2),
            i === "left"
              ? ((b = h), (y = b - o), (x = _ + o), (S = _ - o))
              : ((b = h + g), (y = b + o), (x = _ - o), (S = _ + o)),
            (p = b))
          : (i === "left"
              ? (y = h + Math.max(l, u) + o)
              : i === "right"
                ? (y = h + g - Math.max(c, f) - o)
                : (y = this.caretX),
            s === "top"
              ? ((x = m), (_ = x - o), (b = y - o), (p = y + o))
              : ((x = m + v), (_ = x + o), (b = y + o), (p = y - o)),
            (S = x)),
        { x1: b, x2: y, x3: p, y1: x, y2: _, y3: S }
      );
    }
    drawTitle(t, n, r) {
      const i = this.title,
        s = i.length;
      let o, a, l;
      if (s) {
        const c = ki(r.rtl, this.x, this.width);
        for (
          t.x = ba(this, r.titleAlign, r),
            n.textAlign = c.textAlign(r.titleAlign),
            n.textBaseline = "middle",
            o = Ve(r.titleFont),
            a = r.titleSpacing,
            n.fillStyle = r.titleColor,
            n.font = o.string,
            l = 0;
          l < s;
          ++l
        )
          n.fillText(i[l], c.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + a),
            l + 1 === s && (t.y += r.titleMarginBottom - a);
      }
    }
    _drawColorBox(t, n, r, i, s) {
      const o = this.labelColors[r],
        a = this.labelPointStyles[r],
        { boxHeight: l, boxWidth: c } = s,
        u = Ve(s.bodyFont),
        f = ba(this, "left", s),
        h = i.x(f),
        m = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
        g = n.y + m;
      if (s.usePointStyle) {
        const v = {
            radius: Math.min(c, l) / 2,
            pointStyle: a.pointStyle,
            rotation: a.rotation,
            borderWidth: 1,
          },
          b = i.leftForLtr(h, c) + c / 2,
          y = g + l / 2;
        (t.strokeStyle = s.multiKeyBackground),
          (t.fillStyle = s.multiKeyBackground),
          tf(t, v, b, y),
          (t.strokeStyle = o.borderColor),
          (t.fillStyle = o.backgroundColor),
          tf(t, v, b, y);
      } else {
        (t.lineWidth = re(o.borderWidth)
          ? Math.max(...Object.values(o.borderWidth))
          : o.borderWidth || 1),
          (t.strokeStyle = o.borderColor),
          t.setLineDash(o.borderDash || []),
          (t.lineDashOffset = o.borderDashOffset || 0);
        const v = i.leftForLtr(h, c),
          b = i.leftForLtr(i.xPlus(h, 1), c - 2),
          y = Ur(o.borderRadius);
        Object.values(y).some((p) => p !== 0)
          ? (t.beginPath(),
            (t.fillStyle = s.multiKeyBackground),
            xo(t, { x: v, y: g, w: c, h: l, radius: y }),
            t.fill(),
            t.stroke(),
            (t.fillStyle = o.backgroundColor),
            t.beginPath(),
            xo(t, { x: b, y: g + 1, w: c - 2, h: l - 2, radius: y }),
            t.fill())
          : ((t.fillStyle = s.multiKeyBackground),
            t.fillRect(v, g, c, l),
            t.strokeRect(v, g, c, l),
            (t.fillStyle = o.backgroundColor),
            t.fillRect(b, g + 1, c - 2, l - 2));
      }
      t.fillStyle = this.labelTextColors[r];
    }
    drawBody(t, n, r) {
      const { body: i } = this,
        {
          bodySpacing: s,
          bodyAlign: o,
          displayColors: a,
          boxHeight: l,
          boxWidth: c,
          boxPadding: u,
        } = r,
        f = Ve(r.bodyFont);
      let h = f.lineHeight,
        m = 0;
      const g = ki(r.rtl, this.x, this.width),
        v = function (k) {
          n.fillText(k, g.x(t.x + m), t.y + h / 2), (t.y += h + s);
        },
        b = g.textAlign(o);
      let y, p, x, _, S, E, A;
      for (
        n.textAlign = o,
          n.textBaseline = "middle",
          n.font = f.string,
          t.x = ba(this, b, r),
          n.fillStyle = r.bodyColor,
          de(this.beforeBody, v),
          m = a && b !== "right" ? (o === "center" ? c / 2 + u : c + 2 + u) : 0,
          _ = 0,
          E = i.length;
        _ < E;
        ++_
      ) {
        for (
          y = i[_],
            p = this.labelTextColors[_],
            n.fillStyle = p,
            de(y.before, v),
            x = y.lines,
            a &&
              x.length &&
              (this._drawColorBox(n, t, _, g, r),
              (h = Math.max(f.lineHeight, l))),
            S = 0,
            A = x.length;
          S < A;
          ++S
        )
          v(x[S]), (h = f.lineHeight);
        de(y.after, v);
      }
      (m = 0), (h = f.lineHeight), de(this.afterBody, v), (t.y -= s);
    }
    drawFooter(t, n, r) {
      const i = this.footer,
        s = i.length;
      let o, a;
      if (s) {
        const l = ki(r.rtl, this.x, this.width);
        for (
          t.x = ba(this, r.footerAlign, r),
            t.y += r.footerMarginTop,
            n.textAlign = l.textAlign(r.footerAlign),
            n.textBaseline = "middle",
            o = Ve(r.footerFont),
            n.fillStyle = r.footerColor,
            n.font = o.string,
            a = 0;
          a < s;
          ++a
        )
          n.fillText(i[a], l.x(t.x), t.y + o.lineHeight / 2),
            (t.y += o.lineHeight + r.footerSpacing);
      }
    }
    drawBackground(t, n, r, i) {
      const { xAlign: s, yAlign: o } = this,
        { x: a, y: l } = t,
        { width: c, height: u } = r,
        {
          topLeft: f,
          topRight: h,
          bottomLeft: m,
          bottomRight: g,
        } = Ur(i.cornerRadius);
      (n.fillStyle = i.backgroundColor),
        (n.strokeStyle = i.borderColor),
        (n.lineWidth = i.borderWidth),
        n.beginPath(),
        n.moveTo(a + f, l),
        o === "top" && this.drawCaret(t, n, r, i),
        n.lineTo(a + c - h, l),
        n.quadraticCurveTo(a + c, l, a + c, l + h),
        o === "center" && s === "right" && this.drawCaret(t, n, r, i),
        n.lineTo(a + c, l + u - g),
        n.quadraticCurveTo(a + c, l + u, a + c - g, l + u),
        o === "bottom" && this.drawCaret(t, n, r, i),
        n.lineTo(a + m, l + u),
        n.quadraticCurveTo(a, l + u, a, l + u - m),
        o === "center" && s === "left" && this.drawCaret(t, n, r, i),
        n.lineTo(a, l + f),
        n.quadraticCurveTo(a, l, a + f, l),
        n.closePath(),
        n.fill(),
        i.borderWidth > 0 && n.stroke();
    }
    _updateAnimationTarget(t) {
      const n = this.chart,
        r = this.$animations,
        i = r && r.x,
        s = r && r.y;
      if (i || s) {
        const o = bs[t.position].call(this, this._active, this._eventPosition);
        if (!o) return;
        const a = (this._size = w0(this, t)),
          l = Object.assign({}, o, this._size),
          c = S0(n, t, l),
          u = A0(t, l, c, n);
        (i._to !== u.x || s._to !== u.y) &&
          ((this.xAlign = c.xAlign),
          (this.yAlign = c.yAlign),
          (this.width = a.width),
          (this.height = a.height),
          (this.caretX = o.x),
          (this.caretY = o.y),
          this._resolveAnimations().update(this, u));
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(t) {
      const n = this.options.setContext(this.getContext());
      let r = this.opacity;
      if (!r) return;
      this._updateAnimationTarget(n);
      const i = { width: this.width, height: this.height },
        s = { x: this.x, y: this.y };
      r = Math.abs(r) < 0.001 ? 0 : r;
      const o = it(n.padding),
        a =
          this.title.length ||
          this.beforeBody.length ||
          this.body.length ||
          this.afterBody.length ||
          this.footer.length;
      n.enabled &&
        a &&
        (t.save(),
        (t.globalAlpha = r),
        this.drawBackground(s, t, i, n),
        Gx(t, n.textDirection),
        (s.y += o.top),
        this.drawTitle(s, t, n),
        this.drawBody(s, t, n),
        this.drawFooter(s, t, n),
        Jx(t, n.textDirection),
        t.restore());
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t, n) {
      const r = this._active,
        i = t.map(({ datasetIndex: a, index: l }) => {
          const c = this.chart.getDatasetMeta(a);
          if (!c) throw new Error("Cannot find a dataset at index " + a);
          return { datasetIndex: a, element: c.data[l], index: l };
        }),
        s = !Tl(r, i),
        o = this._positionChanged(i, n);
      (s || o) &&
        ((this._active = i),
        (this._eventPosition = n),
        (this._ignoreReplayEvents = !0),
        this.update(!0));
    }
    handleEvent(t, n, r = !0) {
      if (n && this._ignoreReplayEvents) return !1;
      this._ignoreReplayEvents = !1;
      const i = this.options,
        s = this._active || [],
        o = this._getActiveElements(t, s, n, r),
        a = this._positionChanged(o, t),
        l = n || !Tl(o, s) || a;
      return (
        l &&
          ((this._active = o),
          (i.enabled || i.external) &&
            ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
        l
      );
    }
    _getActiveElements(t, n, r, i) {
      const s = this.options;
      if (t.type === "mouseout") return [];
      if (!i)
        return n.filter(
          (a) =>
            this.chart.data.datasets[a.datasetIndex] &&
            this.chart
              .getDatasetMeta(a.datasetIndex)
              .controller.getParsed(a.index) !== void 0,
        );
      const o = this.chart.getElementsAtEventForMode(t, s.mode, s, r);
      return s.reverse && o.reverse(), o;
    }
    _positionChanged(t, n) {
      const { caretX: r, caretY: i, options: s } = this,
        o = bs[s.position].call(this, t, n);
      return o !== !1 && (r !== o.x || i !== o.y);
    }
  }
  N(cf, "positioners", bs);
  var U3 = {
      id: "tooltip",
      _element: cf,
      positioners: bs,
      afterInit(e, t, n) {
        n && (e.tooltip = new cf({ chart: e, options: n }));
      },
      beforeUpdate(e, t, n) {
        e.tooltip && e.tooltip.initialize(n);
      },
      reset(e, t, n) {
        e.tooltip && e.tooltip.initialize(n);
      },
      afterDraw(e) {
        const t = e.tooltip;
        if (t && t._willRender()) {
          const n = { tooltip: t };
          if (
            e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) ===
            !1
          )
            return;
          t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
        }
      },
      afterEvent(e, t) {
        if (e.tooltip) {
          const n = t.replay;
          e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
        }
      },
      defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: { weight: "bold" },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: "bold" },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (e, t) => t.bodyFont.size,
        boxWidth: (e, t) => t.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: { duration: 400, easing: "easeOutQuart" },
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "width", "height", "caretX", "caretY"],
          },
          opacity: { easing: "linear", duration: 200 },
        },
        callbacks: Sb,
      },
      defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font",
      },
      descriptors: {
        _scriptable: (e) =>
          e !== "filter" && e !== "itemSort" && e !== "external",
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: "animation" },
      },
      additionalOptionScopes: ["interaction"],
    },
    V3 = Object.freeze({
      __proto__: null,
      Colors: e3,
      Decimation: i3,
      Filler: A3,
      Legend: T3,
      SubTitle: N3,
      Title: M3,
      Tooltip: U3,
    });
  const H3 = (e, t, n, r) => (
    typeof t == "string"
      ? ((n = e.push(t) - 1), r.unshift({ index: n, label: t }))
      : isNaN(t) && (n = null),
    n
  );
  function W3(e, t, n, r) {
    const i = e.indexOf(t);
    if (i === -1) return H3(e, t, n, r);
    const s = e.lastIndexOf(t);
    return i !== s ? n : i;
  }
  const $3 = (e, t) => (e === null ? null : qe(Math.round(e), 0, t));
  function C0(e) {
    const t = this.getLabels();
    return e >= 0 && e < t.length ? t[e] : e;
  }
  class uf extends ii {
    constructor(t) {
      super(t),
        (this._startValue = void 0),
        (this._valueRange = 0),
        (this._addedLabels = []);
    }
    init(t) {
      const n = this._addedLabels;
      if (n.length) {
        const r = this.getLabels();
        for (const { index: i, label: s } of n) r[i] === s && r.splice(i, 1);
        this._addedLabels = [];
      }
      super.init(t);
    }
    parse(t, n) {
      if (se(t)) return null;
      const r = this.getLabels();
      return (
        (n =
          isFinite(n) && r[n] === t ? n : W3(r, t, J(n, t), this._addedLabels)),
        $3(n, r.length - 1)
      );
    }
    determineDataLimits() {
      const { minDefined: t, maxDefined: n } = this.getUserBounds();
      let { min: r, max: i } = this.getMinMax(!0);
      this.options.bounds === "ticks" &&
        (t || (r = 0), n || (i = this.getLabels().length - 1)),
        (this.min = r),
        (this.max = i);
    }
    buildTicks() {
      const t = this.min,
        n = this.max,
        r = this.options.offset,
        i = [];
      let s = this.getLabels();
      (s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1)),
        (this._valueRange = Math.max(s.length - (r ? 0 : 1), 1)),
        (this._startValue = this.min - (r ? 0.5 : 0));
      for (let o = t; o <= n; o++) i.push({ value: o });
      return i;
    }
    getLabelForValue(t) {
      return C0.call(this, t);
    }
    configure() {
      super.configure(),
        this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
      return (
        typeof t != "number" && (t = this.parse(t)),
        t === null
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
      );
    }
    getPixelForTick(t) {
      const n = this.ticks;
      return t < 0 || t > n.length - 1
        ? null
        : this.getPixelForValue(n[t].value);
    }
    getValueForPixel(t) {
      return Math.round(
        this._startValue + this.getDecimalForPixel(t) * this._valueRange,
      );
    }
    getBasePixel() {
      return this.bottom;
    }
  }
  N(uf, "id", "category"), N(uf, "defaults", { ticks: { callback: C0 } });
  function q3(e, t) {
    const n = [],
      {
        bounds: i,
        step: s,
        min: o,
        max: a,
        precision: l,
        count: c,
        maxTicks: u,
        maxDigits: f,
        includeBounds: h,
      } = e,
      m = s || 1,
      g = u - 1,
      { min: v, max: b } = t,
      y = !se(o),
      p = !se(a),
      x = !se(c),
      _ = (b - v) / (f + 1);
    let S = _g((b - v) / g / m) * m,
      E,
      A,
      k,
      P;
    if (S < 1e-14 && !y && !p) return [{ value: v }, { value: b }];
    (P = Math.ceil(b / S) - Math.floor(v / S)),
      P > g && (S = _g((P * S) / g / m) * m),
      se(l) || ((E = Math.pow(10, l)), (S = Math.ceil(S * E) / E)),
      i === "ticks"
        ? ((A = Math.floor(v / S) * S), (k = Math.ceil(b / S) * S))
        : ((A = v), (k = b)),
      y && p && s && BO((a - o) / s, S / 1e3)
        ? ((P = Math.round(Math.min((a - o) / S, u))),
          (S = (a - o) / P),
          (A = o),
          (k = a))
        : x
          ? ((A = y ? o : A), (k = p ? a : k), (P = c - 1), (S = (k - A) / P))
          : ((P = (k - A) / S),
            Ls(P, Math.round(P), S / 1e3)
              ? (P = Math.round(P))
              : (P = Math.ceil(P)));
    const T = Math.max(wg(S), wg(A));
    (E = Math.pow(10, se(l) ? T : l)),
      (A = Math.round(A * E) / E),
      (k = Math.round(k * E) / E);
    let L = 0;
    for (
      y &&
      (h && A !== o
        ? (n.push({ value: o }),
          A < o && L++,
          Ls(Math.round((A + L * S) * E) / E, o, j0(o, _, e)) && L++)
        : A < o && L++);
      L < P;
      ++L
    ) {
      const B = Math.round((A + L * S) * E) / E;
      if (p && B > a) break;
      n.push({ value: B });
    }
    return (
      p && h && k !== a
        ? n.length && Ls(n[n.length - 1].value, a, j0(a, _, e))
          ? (n[n.length - 1].value = a)
          : n.push({ value: a })
        : (!p || k === a) && n.push({ value: k }),
      n
    );
  }
  function j0(e, t, { horizontal: n, minRotation: r }) {
    const i = Kt(r),
      s = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = 0.75 * t * ("" + e).length;
    return Math.min(t / s, o);
  }
  class Dl extends ii {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._endValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, n) {
      return se(t) ||
        ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
        ? null
        : +t;
    }
    handleTickRangeOptions() {
      const { beginAtZero: t } = this.options,
        { minDefined: n, maxDefined: r } = this.getUserBounds();
      let { min: i, max: s } = this;
      const o = (l) => (i = n ? i : l),
        a = (l) => (s = r ? s : l);
      if (t) {
        const l = fn(i),
          c = fn(s);
        l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
      }
      if (i === s) {
        let l = s === 0 ? 1 : Math.abs(s * 0.05);
        a(s + l), t || o(i - l);
      }
      (this.min = i), (this.max = s);
    }
    getTickLimit() {
      const t = this.options.ticks;
      let { maxTicksLimit: n, stepSize: r } = t,
        i;
      return (
        r
          ? ((i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
            i > 1e3 &&
              (console.warn(
                `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`,
              ),
              (i = 1e3)))
          : ((i = this.computeTickLimit()), (n = n || 11)),
        n && (i = Math.min(n, i)),
        i
      );
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const t = this.options,
        n = t.ticks;
      let r = this.getTickLimit();
      r = Math.max(2, r);
      const i = {
          maxTicks: r,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: n.precision,
          step: n.stepSize,
          count: n.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: n.minRotation || 0,
          includeBounds: n.includeBounds !== !1,
        },
        s = this._range || this,
        o = q3(i, s);
      return (
        t.bounds === "ticks" && Rx(o, this, "value"),
        t.reverse
          ? (o.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        o
      );
    }
    configure() {
      const t = this.ticks;
      let n = this.min,
        r = this.max;
      if ((super.configure(), this.options.offset && t.length)) {
        const i = (r - n) / Math.max(t.length - 1, 1) / 2;
        (n -= i), (r += i);
      }
      (this._startValue = n), (this._endValue = r), (this._valueRange = r - n);
    }
    getLabelForValue(t) {
      return Ro(t, this.chart.options.locale, this.options.ticks.format);
    }
  }
  class df extends Dl {
    determineDataLimits() {
      const { min: t, max: n } = this.getMinMax(!0);
      (this.min = Oe(t) ? t : 0),
        (this.max = Oe(n) ? n : 1),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const t = this.isHorizontal(),
        n = t ? this.width : this.height,
        r = Kt(this.options.ticks.minRotation),
        i = (t ? Math.sin(r) : Math.cos(r)) || 0.001,
        s = this._resolveTickFontOptions(0);
      return Math.ceil(n / Math.min(40, s.lineHeight / i));
    }
    getPixelForValue(t) {
      return t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
      return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
  }
  N(df, "id", "linear"),
    N(df, "defaults", { ticks: { callback: jc.formatters.numeric } });
  const _o = (e) => Math.floor(Kn(e)),
    kr = (e, t) => Math.pow(10, _o(e) + t);
  function P0(e) {
    return e / Math.pow(10, _o(e)) === 1;
  }
  function T0(e, t, n) {
    const r = Math.pow(10, n),
      i = Math.floor(e / r);
    return Math.ceil(t / r) - i;
  }
  function Y3(e, t) {
    const n = t - e;
    let r = _o(n);
    for (; T0(e, t, r) > 10; ) r++;
    for (; T0(e, t, r) < 10; ) r--;
    return Math.min(r, _o(e));
  }
  function Q3(e, { min: t, max: n }) {
    t = _t(e.min, t);
    const r = [],
      i = _o(t);
    let s = Y3(t, n),
      o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const a = Math.pow(10, s),
      l = i > s ? Math.pow(10, i) : 0,
      c = Math.round((t - l) * o) / o,
      u = Math.floor((t - l) / a / 10) * a * 10;
    let f = Math.floor((c - u) / Math.pow(10, s)),
      h = _t(e.min, Math.round((l + u + f * Math.pow(10, s)) * o) / o);
    for (; h < n; )
      r.push({ value: h, major: P0(h), significand: f }),
        f >= 10 ? (f = f < 15 ? 15 : 20) : f++,
        f >= 20 && (s++, (f = 2), (o = s >= 0 ? 1 : o)),
        (h = Math.round((l + u + f * Math.pow(10, s)) * o) / o);
    const m = _t(e.max, h);
    return r.push({ value: m, major: P0(m), significand: f }), r;
  }
  class ff extends ii {
    constructor(t) {
      super(t),
        (this.start = void 0),
        (this.end = void 0),
        (this._startValue = void 0),
        (this._valueRange = 0);
    }
    parse(t, n) {
      const r = Dl.prototype.parse.apply(this, [t, n]);
      if (r === 0) {
        this._zero = !0;
        return;
      }
      return Oe(r) && r > 0 ? r : null;
    }
    determineDataLimits() {
      const { min: t, max: n } = this.getMinMax(!0);
      (this.min = Oe(t) ? Math.max(0, t) : null),
        (this.max = Oe(n) ? Math.max(0, n) : null),
        this.options.beginAtZero && (this._zero = !0),
        this._zero &&
          this.min !== this._suggestedMin &&
          !Oe(this._userMin) &&
          (this.min =
            t === kr(this.min, 0) ? kr(this.min, -1) : kr(this.min, 0)),
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined: t, maxDefined: n } = this.getUserBounds();
      let r = this.min,
        i = this.max;
      const s = (a) => (r = t ? r : a),
        o = (a) => (i = n ? i : a);
      r === i && (r <= 0 ? (s(1), o(10)) : (s(kr(r, -1)), o(kr(i, 1)))),
        r <= 0 && s(kr(i, -1)),
        i <= 0 && o(kr(r, 1)),
        (this.min = r),
        (this.max = i);
    }
    buildTicks() {
      const t = this.options,
        n = { min: this._userMin, max: this._userMax },
        r = Q3(n, this);
      return (
        t.bounds === "ticks" && Rx(r, this, "value"),
        t.reverse
          ? (r.reverse(), (this.start = this.max), (this.end = this.min))
          : ((this.start = this.min), (this.end = this.max)),
        r
      );
    }
    getLabelForValue(t) {
      return t === void 0
        ? "0"
        : Ro(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const t = this.min;
      super.configure(),
        (this._startValue = Kn(t)),
        (this._valueRange = Kn(this.max) - Kn(t));
    }
    getPixelForValue(t) {
      return (
        (t === void 0 || t === 0) && (t = this.min),
        t === null || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min
                ? 0
                : (Kn(t) - this._startValue) / this._valueRange,
            )
      );
    }
    getValueForPixel(t) {
      const n = this.getDecimalForPixel(t);
      return Math.pow(10, this._startValue + n * this._valueRange);
    }
  }
  N(ff, "id", "logarithmic"),
    N(ff, "defaults", {
      ticks: { callback: jc.formatters.logarithmic, major: { enabled: !0 } },
    });
  function hf(e) {
    const t = e.ticks;
    if (t.display && e.display) {
      const n = it(t.backdropPadding);
      return J(t.font && t.font.size, Me.font.size) + n.height;
    }
    return 0;
  }
  function K3(e, t, n) {
    return (
      (n = ke(n) ? n : [n]),
      { w: rM(e, t.string, n), h: n.length * t.lineHeight }
    );
  }
  function O0(e, t, n, r, i) {
    return e === r || e === i
      ? { start: t - n / 2, end: t + n / 2 }
      : e < r || e > i
        ? { start: t - n, end: t }
        : { start: t, end: t + n };
  }
  function X3(e) {
    const t = {
        l: e.left + e._padding.left,
        r: e.right - e._padding.right,
        t: e.top + e._padding.top,
        b: e.bottom - e._padding.bottom,
      },
      n = Object.assign({}, t),
      r = [],
      i = [],
      s = e._pointLabels.length,
      o = e.options.pointLabels,
      a = o.centerPointLabels ? Ae / s : 0;
    for (let l = 0; l < s; l++) {
      const c = o.setContext(e.getPointLabelContext(l));
      i[l] = c.padding;
      const u = e.getPointPosition(l, e.drawingArea + i[l], a),
        f = Ve(c.font),
        h = K3(e.ctx, f, e._pointLabels[l]);
      r[l] = h;
      const m = St(e.getIndexAngle(l) + a),
        g = Math.round(Mh(m)),
        v = O0(g, u.x, h.w, 0, 180),
        b = O0(g, u.y, h.h, 90, 270);
      G3(n, t, m, v, b);
    }
    e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
      (e._pointLabelItems = e4(e, r, i));
  }
  function G3(e, t, n, r, i) {
    const s = Math.abs(Math.sin(n)),
      o = Math.abs(Math.cos(n));
    let a = 0,
      l = 0;
    r.start < t.l
      ? ((a = (t.l - r.start) / s), (e.l = Math.min(e.l, t.l - a)))
      : r.end > t.r &&
        ((a = (r.end - t.r) / s), (e.r = Math.max(e.r, t.r + a))),
      i.start < t.t
        ? ((l = (t.t - i.start) / o), (e.t = Math.min(e.t, t.t - l)))
        : i.end > t.b &&
          ((l = (i.end - t.b) / o), (e.b = Math.max(e.b, t.b + l)));
  }
  function J3(e, t, n) {
    const r = e.drawingArea,
      { extra: i, additionalAngle: s, padding: o, size: a } = n,
      l = e.getPointPosition(t, r + i + o, s),
      c = Math.round(Mh(St(l.angle + Ie))),
      u = r4(l.y, a.h, c),
      f = t4(c),
      h = n4(l.x, a.w, f);
    return {
      visible: !0,
      x: l.x,
      y: u,
      textAlign: f,
      left: h,
      top: u,
      right: h + a.w,
      bottom: u + a.h,
    };
  }
  function Z3(e, t) {
    if (!t) return !0;
    const { left: n, top: r, right: i, bottom: s } = e;
    return !(
      Cn({ x: n, y: r }, t) ||
      Cn({ x: n, y: s }, t) ||
      Cn({ x: i, y: r }, t) ||
      Cn({ x: i, y: s }, t)
    );
  }
  function e4(e, t, n) {
    const r = [],
      i = e._pointLabels.length,
      s = e.options,
      { centerPointLabels: o, display: a } = s.pointLabels,
      l = { extra: hf(s) / 2, additionalAngle: o ? Ae / i : 0 };
    let c;
    for (let u = 0; u < i; u++) {
      (l.padding = n[u]), (l.size = t[u]);
      const f = J3(e, u, l);
      r.push(f), a === "auto" && ((f.visible = Z3(f, c)), f.visible && (c = f));
    }
    return r;
  }
  function t4(e) {
    return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
  }
  function n4(e, t, n) {
    return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
  }
  function r4(e, t, n) {
    return (
      n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
    );
  }
  function i4(e, t, n) {
    const { left: r, top: i, right: s, bottom: o } = n,
      { backdropColor: a } = t;
    if (!se(a)) {
      const l = Ur(t.borderRadius),
        c = it(t.backdropPadding);
      e.fillStyle = a;
      const u = r - c.left,
        f = i - c.top,
        h = s - r + c.width,
        m = o - i + c.height;
      Object.values(l).some((g) => g !== 0)
        ? (e.beginPath(),
          xo(e, { x: u, y: f, w: h, h: m, radius: l }),
          e.fill())
        : e.fillRect(u, f, h, m);
    }
  }
  function s4(e, t) {
    const {
      ctx: n,
      options: { pointLabels: r },
    } = e;
    for (let i = t - 1; i >= 0; i--) {
      const s = e._pointLabelItems[i];
      if (!s.visible) continue;
      const o = r.setContext(e.getPointLabelContext(i));
      i4(n, o, s);
      const a = Ve(o.font),
        { x: l, y: c, textAlign: u } = s;
      Gr(n, e._pointLabels[i], l, c + a.lineHeight / 2, a, {
        color: o.color,
        textAlign: u,
        textBaseline: "middle",
      });
    }
  }
  function Ab(e, t, n, r) {
    const { ctx: i } = e;
    if (n) i.arc(e.xCenter, e.yCenter, t, 0, Se);
    else {
      let s = e.getPointPosition(0, t);
      i.moveTo(s.x, s.y);
      for (let o = 1; o < r; o++)
        (s = e.getPointPosition(o, t)), i.lineTo(s.x, s.y);
    }
  }
  function o4(e, t, n, r, i) {
    const s = e.ctx,
      o = t.circular,
      { color: a, lineWidth: l } = t;
    (!o && !r) ||
      !a ||
      !l ||
      n < 0 ||
      (s.save(),
      (s.strokeStyle = a),
      (s.lineWidth = l),
      s.setLineDash(i.dash),
      (s.lineDashOffset = i.dashOffset),
      s.beginPath(),
      Ab(e, n, o, r),
      s.closePath(),
      s.stroke(),
      s.restore());
  }
  function a4(e, t, n) {
    return br(e, { label: n, index: t, type: "pointLabel" });
  }
  class _s extends Dl {
    constructor(t) {
      super(t),
        (this.xCenter = void 0),
        (this.yCenter = void 0),
        (this.drawingArea = void 0),
        (this._pointLabels = []),
        (this._pointLabelItems = []);
    }
    setDimensions() {
      const t = (this._padding = it(hf(this.options) / 2)),
        n = (this.width = this.maxWidth - t.width),
        r = (this.height = this.maxHeight - t.height);
      (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
        (this.yCenter = Math.floor(this.top + r / 2 + t.top)),
        (this.drawingArea = Math.floor(Math.min(n, r) / 2));
    }
    determineDataLimits() {
      const { min: t, max: n } = this.getMinMax(!1);
      (this.min = Oe(t) && !isNaN(t) ? t : 0),
        (this.max = Oe(n) && !isNaN(n) ? n : 0),
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / hf(this.options));
    }
    generateTickLabels(t) {
      Dl.prototype.generateTickLabels.call(this, t),
        (this._pointLabels = this.getLabels()
          .map((n, r) => {
            const i = ve(this.options.pointLabels.callback, [n, r], this);
            return i || i === 0 ? i : "";
          })
          .filter((n, r) => this.chart.getDataVisibility(r)));
    }
    fit() {
      const t = this.options;
      t.display && t.pointLabels.display
        ? X3(this)
        : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, n, r, i) {
      (this.xCenter += Math.floor((t - n) / 2)),
        (this.yCenter += Math.floor((r - i) / 2)),
        (this.drawingArea -= Math.min(
          this.drawingArea / 2,
          Math.max(t, n, r, i),
        ));
    }
    getIndexAngle(t) {
      const n = Se / (this._pointLabels.length || 1),
        r = this.options.startAngle || 0;
      return St(t * n + Kt(r));
    }
    getDistanceFromCenterForValue(t) {
      if (se(t)) return NaN;
      const n = this.drawingArea / (this.max - this.min);
      return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
    }
    getValueForDistanceFromCenter(t) {
      if (se(t)) return NaN;
      const n = t / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - n : this.min + n;
    }
    getPointLabelContext(t) {
      const n = this._pointLabels || [];
      if (t >= 0 && t < n.length) {
        const r = n[t];
        return a4(this.getContext(), t, r);
      }
    }
    getPointPosition(t, n, r = 0) {
      const i = this.getIndexAngle(t) - Ie + r;
      return {
        x: Math.cos(i) * n + this.xCenter,
        y: Math.sin(i) * n + this.yCenter,
        angle: i,
      };
    }
    getPointPositionForValue(t, n) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
    }
    getBasePosition(t) {
      return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
      const { left: n, top: r, right: i, bottom: s } = this._pointLabelItems[t];
      return { left: n, top: r, right: i, bottom: s };
    }
    drawBackground() {
      const {
        backgroundColor: t,
        grid: { circular: n },
      } = this.options;
      if (t) {
        const r = this.ctx;
        r.save(),
          r.beginPath(),
          Ab(
            this,
            this.getDistanceFromCenterForValue(this._endValue),
            n,
            this._pointLabels.length,
          ),
          r.closePath(),
          (r.fillStyle = t),
          r.fill(),
          r.restore();
      }
    }
    drawGrid() {
      const t = this.ctx,
        n = this.options,
        { angleLines: r, grid: i, border: s } = n,
        o = this._pointLabels.length;
      let a, l, c;
      if (
        (n.pointLabels.display && s4(this, o),
        i.display &&
          this.ticks.forEach((u, f) => {
            if (f !== 0 || (f === 0 && this.min < 0)) {
              l = this.getDistanceFromCenterForValue(u.value);
              const h = this.getContext(f),
                m = i.setContext(h),
                g = s.setContext(h);
              o4(this, m, l, o, g);
            }
          }),
        r.display)
      ) {
        for (t.save(), a = o - 1; a >= 0; a--) {
          const u = r.setContext(this.getPointLabelContext(a)),
            { color: f, lineWidth: h } = u;
          !h ||
            !f ||
            ((t.lineWidth = h),
            (t.strokeStyle = f),
            t.setLineDash(u.borderDash),
            (t.lineDashOffset = u.borderDashOffset),
            (l = this.getDistanceFromCenterForValue(
              n.ticks.reverse ? this.min : this.max,
            )),
            (c = this.getPointPosition(a, l)),
            t.beginPath(),
            t.moveTo(this.xCenter, this.yCenter),
            t.lineTo(c.x, c.y),
            t.stroke());
        }
        t.restore();
      }
    }
    drawBorder() {}
    drawLabels() {
      const t = this.ctx,
        n = this.options,
        r = n.ticks;
      if (!r.display) return;
      const i = this.getIndexAngle(0);
      let s, o;
      t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(i),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        this.ticks.forEach((a, l) => {
          if (l === 0 && this.min >= 0 && !n.reverse) return;
          const c = r.setContext(this.getContext(l)),
            u = Ve(c.font);
          if (
            ((s = this.getDistanceFromCenterForValue(this.ticks[l].value)),
            c.showLabelBackdrop)
          ) {
            (t.font = u.string),
              (o = t.measureText(a.label).width),
              (t.fillStyle = c.backdropColor);
            const f = it(c.backdropPadding);
            t.fillRect(
              -o / 2 - f.left,
              -s - u.size / 2 - f.top,
              o + f.width,
              u.size + f.height,
            );
          }
          Gr(t, a.label, 0, -s, u, {
            color: c.color,
            strokeColor: c.textStrokeColor,
            strokeWidth: c.textStrokeWidth,
          });
        }),
        t.restore();
    }
    drawTitle() {}
  }
  N(_s, "id", "radialLinear"),
    N(_s, "defaults", {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0,
      },
      grid: { circular: !1 },
      startAngle: 0,
      ticks: { showLabelBackdrop: !0, callback: jc.formatters.numeric },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: { size: 10 },
        callback(t) {
          return t;
        },
        padding: 5,
        centerPointLabels: !1,
      },
    }),
    N(_s, "defaultRoutes", {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color",
    }),
    N(_s, "descriptors", { angleLines: { _fallback: "grid" } });
  const Nc = {
      millisecond: { common: !0, size: 1, steps: 1e3 },
      second: { common: !0, size: 1e3, steps: 60 },
      minute: { common: !0, size: 6e4, steps: 60 },
      hour: { common: !0, size: 36e5, steps: 24 },
      day: { common: !0, size: 864e5, steps: 30 },
      week: { common: !1, size: 6048e5, steps: 4 },
      month: { common: !0, size: 2628e6, steps: 12 },
      quarter: { common: !1, size: 7884e6, steps: 4 },
      year: { common: !0, size: 3154e7 },
    },
    ht = Object.keys(Nc);
  function M0(e, t) {
    return e - t;
  }
  function N0(e, t) {
    if (se(t)) return null;
    const n = e._adapter,
      { parser: r, round: i, isoWeekday: s } = e._parseOpts;
    let o = t;
    return (
      typeof r == "function" && (o = r(o)),
      Oe(o) || (o = typeof r == "string" ? n.parse(o, r) : n.parse(o)),
      o === null
        ? null
        : (i &&
            (o =
              i === "week" && (Fi(s) || s === !0)
                ? n.startOf(o, "isoWeek", s)
                : n.startOf(o, i)),
          +o)
    );
  }
  function R0(e, t, n, r) {
    const i = ht.length;
    for (let s = ht.indexOf(e); s < i - 1; ++s) {
      const o = Nc[ht[s]],
        a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
      if (o.common && Math.ceil((n - t) / (a * o.size)) <= r) return ht[s];
    }
    return ht[i - 1];
  }
  function l4(e, t, n, r, i) {
    for (let s = ht.length - 1; s >= ht.indexOf(n); s--) {
      const o = ht[s];
      if (Nc[o].common && e._adapter.diff(i, r, o) >= t - 1) return o;
    }
    return ht[n ? ht.indexOf(n) : 0];
  }
  function c4(e) {
    for (let t = ht.indexOf(e) + 1, n = ht.length; t < n; ++t)
      if (Nc[ht[t]].common) return ht[t];
  }
  function L0(e, t, n) {
    if (!n) e[t] = !0;
    else if (n.length) {
      const { lo: r, hi: i } = Nh(n, t),
        s = n[r] >= t ? n[r] : n[i];
      e[s] = !0;
    }
  }
  function u4(e, t, n, r) {
    const i = e._adapter,
      s = +i.startOf(t[0].value, r),
      o = t[t.length - 1].value;
    let a, l;
    for (a = s; a <= o; a = +i.add(a, 1, r))
      (l = n[a]), l >= 0 && (t[l].major = !0);
    return t;
  }
  function I0(e, t, n) {
    const r = [],
      i = {},
      s = t.length;
    let o, a;
    for (o = 0; o < s; ++o)
      (a = t[o]), (i[a] = o), r.push({ value: a, major: !1 });
    return s === 0 || !n ? r : u4(e, r, i, n);
  }
  class wo extends ii {
    constructor(t) {
      super(t),
        (this._cache = { data: [], labels: [], all: [] }),
        (this._unit = "day"),
        (this._majorUnit = void 0),
        (this._offsets = {}),
        (this._normalized = !1),
        (this._parseOpts = void 0);
    }
    init(t, n = {}) {
      const r = t.time || (t.time = {}),
        i = (this._adapter = new xN._date(t.adapters.date));
      i.init(n),
        Rs(r.displayFormats, i.formats()),
        (this._parseOpts = {
          parser: r.parser,
          round: r.round,
          isoWeekday: r.isoWeekday,
        }),
        super.init(t),
        (this._normalized = n.normalized);
    }
    parse(t, n) {
      return t === void 0 ? null : N0(this, t);
    }
    beforeLayout() {
      super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
    }
    determineDataLimits() {
      const t = this.options,
        n = this._adapter,
        r = t.time.unit || "day";
      let {
        min: i,
        max: s,
        minDefined: o,
        maxDefined: a,
      } = this.getUserBounds();
      function l(c) {
        !o && !isNaN(c.min) && (i = Math.min(i, c.min)),
          !a && !isNaN(c.max) && (s = Math.max(s, c.max));
      }
      (!o || !a) &&
        (l(this._getLabelBounds()),
        (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
          l(this.getMinMax(!1))),
        (i = Oe(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
        (s = Oe(s) && !isNaN(s) ? s : +n.endOf(Date.now(), r) + 1),
        (this.min = Math.min(i, s - 1)),
        (this.max = Math.max(i + 1, s));
    }
    _getLabelBounds() {
      const t = this.getLabelTimestamps();
      let n = Number.POSITIVE_INFINITY,
        r = Number.NEGATIVE_INFINITY;
      return (
        t.length && ((n = t[0]), (r = t[t.length - 1])), { min: n, max: r }
      );
    }
    buildTicks() {
      const t = this.options,
        n = t.time,
        r = t.ticks,
        i =
          r.source === "labels" ? this.getLabelTimestamps() : this._generate();
      t.bounds === "ticks" &&
        i.length &&
        ((this.min = this._userMin || i[0]),
        (this.max = this._userMax || i[i.length - 1]));
      const s = this.min,
        o = this.max,
        a = WO(i, s, o);
      return (
        (this._unit =
          n.unit ||
          (r.autoSkip
            ? R0(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
            : l4(this, a.length, n.minUnit, this.min, this.max))),
        (this._majorUnit =
          !r.major.enabled || this._unit === "year" ? void 0 : c4(this._unit)),
        this.initOffsets(i),
        t.reverse && a.reverse(),
        I0(this, a, this._majorUnit)
      );
    }
    afterAutoSkip() {
      this.options.offsetAfterAutoskip &&
        this.initOffsets(this.ticks.map((t) => +t.value));
    }
    initOffsets(t = []) {
      let n = 0,
        r = 0,
        i,
        s;
      this.options.offset &&
        t.length &&
        ((i = this.getDecimalForValue(t[0])),
        t.length === 1
          ? (n = 1 - i)
          : (n = (this.getDecimalForValue(t[1]) - i) / 2),
        (s = this.getDecimalForValue(t[t.length - 1])),
        t.length === 1
          ? (r = s)
          : (r = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
      const o = t.length < 3 ? 0.5 : 0.25;
      (n = qe(n, 0, o)),
        (r = qe(r, 0, o)),
        (this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) });
    }
    _generate() {
      const t = this._adapter,
        n = this.min,
        r = this.max,
        i = this.options,
        s = i.time,
        o = s.unit || R0(s.minUnit, n, r, this._getLabelCapacity(n)),
        a = J(i.ticks.stepSize, 1),
        l = o === "week" ? s.isoWeekday : !1,
        c = Fi(l) || l === !0,
        u = {};
      let f = n,
        h,
        m;
      if (
        (c && (f = +t.startOf(f, "isoWeek", l)),
        (f = +t.startOf(f, c ? "day" : o)),
        t.diff(r, n, o) > 1e5 * a)
      )
        throw new Error(
          n +
            " and " +
            r +
            " are too far apart with stepSize of " +
            a +
            " " +
            o,
        );
      const g = i.ticks.source === "data" && this.getDataTimestamps();
      for (h = f, m = 0; h < r; h = +t.add(h, a, o), m++) L0(u, h, g);
      return (
        (h === r || i.bounds === "ticks" || m === 1) && L0(u, h, g),
        Object.keys(u)
          .sort(M0)
          .map((v) => +v)
      );
    }
    getLabelForValue(t) {
      const n = this._adapter,
        r = this.options.time;
      return r.tooltipFormat
        ? n.format(t, r.tooltipFormat)
        : n.format(t, r.displayFormats.datetime);
    }
    format(t, n) {
      const i = this.options.time.displayFormats,
        s = this._unit,
        o = n || i[s];
      return this._adapter.format(t, o);
    }
    _tickFormatFunction(t, n, r, i) {
      const s = this.options,
        o = s.ticks.callback;
      if (o) return ve(o, [t, n, r], this);
      const a = s.time.displayFormats,
        l = this._unit,
        c = this._majorUnit,
        u = l && a[l],
        f = c && a[c],
        h = r[n],
        m = c && f && h && h.major;
      return this._adapter.format(t, i || (m ? f : u));
    }
    generateTickLabels(t) {
      let n, r, i;
      for (n = 0, r = t.length; n < r; ++n)
        (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t));
    }
    getDecimalForValue(t) {
      return t === null ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
      const n = this._offsets,
        r = this.getDecimalForValue(t);
      return this.getPixelForDecimal((n.start + r) * n.factor);
    }
    getValueForPixel(t) {
      const n = this._offsets,
        r = this.getDecimalForPixel(t) / n.factor - n.end;
      return this.min + r * (this.max - this.min);
    }
    _getLabelSize(t) {
      const n = this.options.ticks,
        r = this.ctx.measureText(t).width,
        i = Kt(this.isHorizontal() ? n.maxRotation : n.minRotation),
        s = Math.cos(i),
        o = Math.sin(i),
        a = this._resolveTickFontOptions(0).size;
      return { w: r * s + a * o, h: r * o + a * s };
    }
    _getLabelCapacity(t) {
      const n = this.options.time,
        r = n.displayFormats,
        i = r[n.unit] || r.millisecond,
        s = this._tickFormatFunction(t, 0, I0(this, [t], this._majorUnit), i),
        o = this._getLabelSize(s),
        a =
          Math.floor(
            this.isHorizontal() ? this.width / o.w : this.height / o.h,
          ) - 1;
      return a > 0 ? a : 1;
    }
    getDataTimestamps() {
      let t = this._cache.data || [],
        n,
        r;
      if (t.length) return t;
      const i = this.getMatchingVisibleMetas();
      if (this._normalized && i.length)
        return (this._cache.data = i[0].controller.getAllParsedValues(this));
      for (n = 0, r = i.length; n < r; ++n)
        t = t.concat(i[n].controller.getAllParsedValues(this));
      return (this._cache.data = this.normalize(t));
    }
    getLabelTimestamps() {
      const t = this._cache.labels || [];
      let n, r;
      if (t.length) return t;
      const i = this.getLabels();
      for (n = 0, r = i.length; n < r; ++n) t.push(N0(this, i[n]));
      return (this._cache.labels = this._normalized ? t : this.normalize(t));
    }
    normalize(t) {
      return Dx(t.sort(M0));
    }
  }
  N(wo, "id", "time"),
    N(wo, "defaults", {
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {},
      },
      ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
    });
  function _a(e, t, n) {
    let r = 0,
      i = e.length - 1,
      s,
      o,
      a,
      l;
    n
      ? (t >= e[r].pos && t <= e[i].pos && ({ lo: r, hi: i } = kn(e, "pos", t)),
        ({ pos: s, time: a } = e[r]),
        ({ pos: o, time: l } = e[i]))
      : (t >= e[r].time &&
          t <= e[i].time &&
          ({ lo: r, hi: i } = kn(e, "time", t)),
        ({ time: s, pos: a } = e[r]),
        ({ time: o, pos: l } = e[i]));
    const c = o - s;
    return c ? a + ((l - a) * (t - s)) / c : a;
  }
  class pf extends wo {
    constructor(t) {
      super(t),
        (this._table = []),
        (this._minPos = void 0),
        (this._tableRange = void 0);
    }
    initOffsets() {
      const t = this._getTimestampsForTable(),
        n = (this._table = this.buildLookupTable(t));
      (this._minPos = _a(n, this.min)),
        (this._tableRange = _a(n, this.max) - this._minPos),
        super.initOffsets(t);
    }
    buildLookupTable(t) {
      const { min: n, max: r } = this,
        i = [],
        s = [];
      let o, a, l, c, u;
      for (o = 0, a = t.length; o < a; ++o)
        (c = t[o]), c >= n && c <= r && i.push(c);
      if (i.length < 2)
        return [
          { time: n, pos: 0 },
          { time: r, pos: 1 },
        ];
      for (o = 0, a = i.length; o < a; ++o)
        (u = i[o + 1]),
          (l = i[o - 1]),
          (c = i[o]),
          Math.round((u + l) / 2) !== c &&
            s.push({ time: c, pos: o / (a - 1) });
      return s;
    }
    _generate() {
      const t = this.min,
        n = this.max;
      let r = super.getDataTimestamps();
      return (
        (!r.includes(t) || !r.length) && r.splice(0, 0, t),
        (!r.includes(n) || r.length === 1) && r.push(n),
        r.sort((i, s) => i - s)
      );
    }
    _getTimestampsForTable() {
      let t = this._cache.all || [];
      if (t.length) return t;
      const n = this.getDataTimestamps(),
        r = this.getLabelTimestamps();
      return (
        n.length && r.length
          ? (t = this.normalize(n.concat(r)))
          : (t = n.length ? n : r),
        (t = this._cache.all = t),
        t
      );
    }
    getDecimalForValue(t) {
      return (_a(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
      const n = this._offsets,
        r = this.getDecimalForPixel(t) / n.factor - n.end;
      return _a(this._table, r * this._tableRange + this._minPos, !0);
    }
  }
  N(pf, "id", "timeseries"), N(pf, "defaults", wo.defaults);
  var d4 = Object.freeze({
    __proto__: null,
    CategoryScale: uf,
    LinearScale: df,
    LogarithmicScale: ff,
    RadialLinearScale: _s,
    TimeScale: wo,
    TimeSeriesScale: pf,
  });
  const f4 = [vN, QR, V3, d4],
    Eb = "label";
  function D0(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  function h4(e, t) {
    const n = e.options;
    n && t && Object.assign(n, t);
  }
  function kb(e, t) {
    e.labels = t;
  }
  function Cb(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Eb;
    const r = [];
    e.datasets = t.map((i) => {
      const s = e.datasets.find((o) => o[n] === i[n]);
      return !s || !i.data || r.includes(s)
        ? { ...i }
        : (r.push(s), Object.assign(s, i), s);
    });
  }
  function p4(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Eb;
    const n = { labels: [], datasets: [] };
    return kb(n, e.labels), Cb(n, e.datasets, t), n;
  }
  function m4(e, t) {
    const {
        height: n = 150,
        width: r = 300,
        redraw: i = !1,
        datasetIdKey: s,
        type: o,
        data: a,
        options: l,
        plugins: c = [],
        fallbackContent: u,
        updateMode: f,
        ...h
      } = e,
      m = w.useRef(null),
      g = w.useRef(),
      v = () => {
        m.current &&
          ((g.current = new Mc(m.current, {
            type: o,
            data: p4(a, s),
            options: l && { ...l },
            plugins: c,
          })),
          D0(t, g.current));
      },
      b = () => {
        D0(t, null), g.current && (g.current.destroy(), (g.current = null));
      };
    return (
      w.useEffect(() => {
        !i && g.current && l && h4(g.current, l);
      }, [i, l]),
      w.useEffect(() => {
        !i && g.current && kb(g.current.config.data, a.labels);
      }, [i, a.labels]),
      w.useEffect(() => {
        !i &&
          g.current &&
          a.datasets &&
          Cb(g.current.config.data, a.datasets, s);
      }, [i, a.datasets]),
      w.useEffect(() => {
        g.current && (i ? (b(), setTimeout(v)) : g.current.update(f));
      }, [i, l, a.labels, a.datasets, f]),
      w.useEffect(() => {
        g.current && (b(), setTimeout(v));
      }, [o]),
      w.useEffect(() => (v(), () => b()), []),
      V.createElement(
        "canvas",
        Object.assign({ ref: m, role: "img", height: n, width: r }, h),
        u,
      )
    );
  }
  const g4 = w.forwardRef(m4);
  function y4(e, t) {
    return (
      Mc.register(t),
      w.forwardRef((n, r) =>
        V.createElement(g4, Object.assign({}, n, { ref: r, type: e })),
      )
    );
  }
  const v4 = y4("bar", Fs);
  Mc.register(...f4);
  function F0() {
    const e = xt((l) => l.user),
      [t, n] = w.useState(null),
      [r, i] = w.useState(!0),
      [s, o] = w.useState(null);
    w.useEffect(() => {
      (async () => {
        try {
          const c = await fetch("http://localhost:3000/api/users/getusers");
          if ((console.log(c), !c.ok))
            throw new Error("Network response was not ok");
          const u = await c.json();
          if (u.success) {
            const f = u.data.map((g) => g.firstName),
              h = u.data.map((g) => new Date(g.createdAt).getTime());
            n({
              labels: f,
              datasets: [
                {
                  label: "User Registration Dates",
                  data: h,
                  backgroundColor: "rgba(153, 102, 255, 0.2)",
                  borderColor: "rgba(153, 102, 255, 1)",
                  borderWidth: 1,
                },
              ],
            });
          } else o(u.message);
        } catch (c) {
          console.error("Error fetching user data:", c), o(c.message);
        } finally {
          i(!1);
        }
      })();
    }, []);
    const a = {
      scales: {
        x: { beginAtZero: !0, title: { display: !0, text: "Users" } },
        y: {
          beginAtZero: !0,
          title: { display: !0, text: "Registration Dates" },
        },
      },
    };
    return r
      ? d.jsx("p", { children: "Loading..." })
      : s
        ? d.jsxs("p", { children: ["Error: ", s] })
        : d.jsxs(d.Fragment, {
            children: [
              d.jsx("div", {
                className: "adminHome",
                children: d.jsxs("h1", {
                  className: "adminwelcomemessage",
                  children: ["Welcome, ", e.firstName],
                }),
              }),
              d.jsxs("div", {
                className: "adminHome",
                children: [
                  d.jsx("h2", {
                    className: "chartTitle",
                    children: "User Statistics",
                  }),
                  d.jsx("div", {
                    className: "chartContainer",
                    children: t
                      ? d.jsx(v4, { data: t, options: a })
                      : d.jsx("p", { children: "No data available" }),
                  }),
                ],
              }),
            ],
          });
  }
  function x4() {
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("h1", {
          className: "messagesheading",
          children: "Available orders",
        }),
        d.jsx("div", { className: "adminorders", children: "AdminOrders" }),
      ],
    });
  }
  function b4() {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(!0),
      [i, s] = w.useState(null),
      [o, a] = w.useState(null);
    w.useEffect(() => {
      async function c() {
        try {
          const u = await K.get(`${ze}/api/products/get`);
          t(u.data.data), r(!1);
        } catch (u) {
          s(u), r(!1);
        }
      }
      c();
    }, []);
    async function l(c) {
      try {
        r(!0),
          (await K.delete(`${ze}/api/products/delete/${c}`)).data.success ===
            !0 && Le("Product deleted", { theme: "success" }),
          t(e.filter((h) => h.id !== c));
      } catch (f) {
        s(f.message),
          Le("There was an error when deleting", { theme: "failure" }),
          r(!1);
      } finally {
        r(!1), a(null);
      }
      function u() {
        navigate("/AddProduct");
      }
      u();
    }
    return n
      ? d.jsx("p", { children: "Loading..." })
      : i
        ? d.jsxs("p", { children: ["Error fetching products: ", i.message] })
        : d.jsx(d.Fragment, {
            children: d.jsxs("div", {
              className: "",
              children: [
                d.jsx("h1", {
                  className: "messagesheading",
                  children: "Products Available In store",
                }),
                d.jsxs("section", {
                  className: "adminproducts",
                  children: [
                    e.map((c) =>
                      d.jsxs(
                        "div",
                        {
                          className: "productscontainer",
                          children: [
                            d.jsx("img", {
                              src: c.productImage,
                              alt: c.productName,
                            }),
                            d.jsx("h1", { children: c.productName }),
                            d.jsxs("p", {
                              children: [
                                " Products Remaining ",
                                c.productsRemaining,
                              ],
                            }),
                            d.jsxs("h3", {
                              children: ["price Ksh ", c.productPrice],
                            }),
                            d.jsxs("div", {
                              className: "adminproductsactionbts",
                              children: [
                                d.jsx(W, {
                                  to: `/EditProduct/${c.id}`,
                                  children: d.jsx("button", {
                                    className: "editbtn",
                                    children: "Edit",
                                  }),
                                }),
                                d.jsx("button", {
                                  onClick: () => l(c.id),
                                  className: "deleteproductsbtn",
                                  children:
                                    o === c.id ? "Deleting .." : "Delete",
                                }),
                              ],
                            }),
                          ],
                        },
                        c.productId,
                      ),
                    ),
                    d.jsxs(W, {
                      to: "/AddProduct",
                      className: "AddProductLink",
                      children: [
                        " ",
                        d.jsx("button", {
                          className: "addproductsbtn",
                          children: "+",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
  }
  function jb() {
    const e = xt((l) => l.user),
      t = tn(),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(!1),
      o = xt((l) => l.changeUserInformation);
    w.useEffect(() => {
      r(!!e);
    }, [e]);
    const a = () => {
      o(null), r(!1), t("/Login");
    };
    return d.jsx(d.Fragment, {
      children: d.jsx("div", {
        children: d.jsxs("nav", {
          className: "nav",
          children: [
            d.jsxs("ul", {
              className: i ? "open" : "",
              children: [
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/AdminHome",
                    end: !0,
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "Home",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/AdminProducts",
                    end: !0,
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "View All Products",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/AddProduct",
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "Add A Product",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/AdminOrders",
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "View Orders",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/AdminUsers",
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "View Users",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/AddUser",
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "Add An Admin",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: "/Messages",
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "View Messages",
                  }),
                }),
                d.jsx("li", {
                  children: d.jsx(Dn, {
                    to: `/AdminProfile/${e.id}`,
                    className: ({ isActive: l }) => (l ? "active" : ""),
                    children: "Profile",
                  }),
                }),
              ],
            }),
            n &&
              d.jsx("button", {
                onClick: a,
                className: "adminlogout",
                children: "Log Out",
              }),
          ],
        }),
      }),
    });
  }
  function _4() {
    const [e, t] = w.useState(null),
      [n, r] = w.useState(!1),
      i = tn(),
      s = xt((o) => o.user);
    return (
      w.useEffect(() => {
        async function o() {
          if (s && s.role === "admin")
            try {
              r(!0);
              const a = await K.get(`${ze}/api/users/getusers`, {
                withCredentials: !0,
              });
              a.data.success === !0 && t(a.data.data);
            } catch (a) {
              a && (Le("There was an error getting users"), r(!1));
            } finally {
              r(!1);
            }
          else i("/Page404");
        }
        o();
      }, [s]),
      n
        ? d.jsx("p", { children: "Loading..." })
        : e
          ? d.jsxs(d.Fragment, {
              children: [
                d.jsx(jb, {}),
                d.jsx("div", {
                  className: "messagesheading",
                  children: d.jsxs("div", {
                    className: "messagesheadingg",
                    children: [
                      d.jsx("h1", { children: "Jostech Users" }),
                      d.jsx(W, {
                        to: "/AddUser",
                        children: d.jsx("button", { children: "Add An Admin" }),
                      }),
                    ],
                  }),
                }),
                d.jsx("div", {
                  className: "adminusers",
                  children: e.map((o) =>
                    d.jsxs(
                      "div",
                      {
                        className: "userscontainer",
                        children: [
                          d.jsxs("p", { children: ["Name ", o.firstName] }),
                          d.jsxs("p", {
                            children: ["Last Name: ", o.lastName],
                          }),
                          d.jsxs("p", { children: ["Email: ", o.email] }),
                          d.jsxs("p", { children: ["Role: ", o.role] }),
                        ],
                      },
                      o.id,
                    ),
                  ),
                }),
              ],
            })
          : d.jsx("p", { children: "No users Found" })
    );
  }
  function w4() {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(null),
      [o, a] = w.useState(null);
    w.useEffect(() => {
      async function c() {
        r(!0);
        try {
          const u = await K.get(`${ze}/api/users/readMessages`);
          t(u.data.data);
        } catch {
          s("There was an error getting messages");
        } finally {
          r(!1);
        }
      }
      c();
    }, []);
    const l = async (c) => {
      a(c);
      try {
        await K.delete(`${ze}/api/users/deleteMessage/${c}`),
          t(e.filter((u) => u.id !== c));
      } catch {
        s("There was an error deleting the message");
      } finally {
        a(null);
      }
    };
    return n
      ? d.jsx("p", { children: "Loading messages..." })
      : i
        ? d.jsx("p", { children: i })
        : d.jsxs("section", {
            children: [
              d.jsx("h1", {
                className: "messagesheading",
                children: "Welcome to customer Messages",
              }),
              d.jsx("div", {
                className: "messages",
                children: e.map((c) =>
                  d.jsxs(
                    "div",
                    {
                      className: "messagesContainers",
                      children: [
                        d.jsxs("div", {
                          className: "userdetails",
                          children: [
                            d.jsxs("p", { children: ["Name: ", c.first_name] }),
                            d.jsxs("p", {
                              children: ["Phone: ", c.phone_number],
                            }),
                            d.jsxs("p", { children: ["Email: ", c.email] }),
                          ],
                        }),
                        d.jsxs("p", { children: ["Subject: ", c.subject] }),
                        d.jsxs("p", { children: ["Message: ", c.message] }),
                        d.jsxs("div", {
                          className: "messageactionbtns",
                          children: [
                            d.jsx("button", {
                              className: "replycustomermessages",
                              children: d.jsx("a", {
                                href: c.email,
                                children: "Reply",
                              }),
                            }),
                            d.jsx("button", { children: "Mark as read" }),
                            d.jsx("button", {
                              onClick: () => l(c.id),
                              className: "deletecustomermessages",
                              children: o === c.id ? "Deleting..." : "Delete",
                            }),
                          ],
                        }),
                      ],
                    },
                    c.id,
                  ),
                ),
              }),
            ],
          });
  }
  function S4() {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(""),
      [o, a] = w.useState(""),
      [l, c] = w.useState(""),
      [u, f] = w.useState(null),
      h = xt((_) => _.user),
      m = tn(),
      g = "dukptptve",
      v = "preset",
      b = async (_) => {
        if (h)
          if (h.role === "admin")
            try {
              t(!0),
                s(""),
                (
                  await K.post(
                    `${ze}/api/products/create`,
                    { ..._, productImage: l },
                    { withCredentials: !0 },
                  )
                ).data.success === !0
                  ? (Le("Product Added to Database", { theme: "success" }),
                    x.resetForm(),
                    c(""))
                  : Le("Failed to add product. Please try again.", {
                      theme: "failure",
                    });
            } catch (S) {
              s(S.message),
                Le("Failed to add product. Please try again.", {
                  theme: "failure",
                });
            } finally {
              t(!1);
            }
          else window.open(window.location.href, "_blank"), m("/Page404");
        else m("/Page404");
      };
    async function y() {
      const _ = new FormData();
      _.append("file", u), _.append("upload_preset", v);
      try {
        r(!0);
        const S = await K.post(
          `https://api.cloudinary.com/v1_1/${g}/upload`,
          _,
        );
        c(S.data.secure_url);
      } catch (S) {
        console.log(S),
          Le("Failed to upload image. Please try again.", { theme: "failure" });
      } finally {
        r(!1);
      }
    }
    function p(_) {
      f(_.target.files[0]);
    }
    const x = xr({
      initialValues: {
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
        productsRemaining: "",
      },
      onSubmit: b,
      validate: (_) => {
        let S = {};
        return (
          _.productName || (S.productName = "Product name is required"),
          _.productPrice || (S.productPrice = "Product price is required"),
          _.productDescription ||
            _.productsRemaining ||
            (S.productsRemaining = " Total Products remaining is required"),
          l || (S.productImage = "Product image is required"),
          S
        );
      },
    });
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("h1", {
          className: "messagesheading",
          children: "Add Products To Database",
        }),
        d.jsx("div", {
          className: "addproductswrapper",
          children: d.jsx("div", {
            className: "addProductContainer",
            children: d.jsxs("form", {
              onSubmit: x.handleSubmit,
              children: [
                d.jsxs("div", {
                  className: "AddProducts",
                  children: [
                    d.jsx("label", { children: "Product Name" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Enter Product Name",
                      name: "productName",
                      value: x.values.productName,
                      onChange: x.handleChange,
                      onBlur: x.handleBlur,
                      required: !0,
                    }),
                    x.touched.productName &&
                      x.errors.productName &&
                      d.jsx("p", { children: x.errors.productName }),
                  ],
                }),
                d.jsxs("div", {
                  className: "AddProducts",
                  children: [
                    d.jsx("label", { children: "Product Price" }),
                    d.jsx("input", {
                      type: "number",
                      placeholder: "Enter Product Price",
                      name: "productPrice",
                      value: x.values.productPrice,
                      onChange: x.handleChange,
                      onBlur: x.handleBlur,
                      required: !0,
                    }),
                    x.touched.productPrice &&
                      x.errors.productPrice &&
                      d.jsx("p", { children: x.errors.productPrice }),
                  ],
                }),
                d.jsxs("div", {
                  className: "AddProducts",
                  children: [
                    d.jsx("label", { children: "Product Description" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Enter Product Description",
                      name: "productDescription",
                      value: x.values.productDescription,
                      onChange: x.handleChange,
                      onBlur: x.handleBlur,
                      required: !0,
                    }),
                    x.touched.productDescription &&
                      x.errors.productDescription &&
                      d.jsx("p", { children: x.errors.productDescription }),
                  ],
                }),
                d.jsxs("div", {
                  className: "AddProducts",
                  children: [
                    d.jsx("label", { children: "Products In Store" }),
                    d.jsx("input", {
                      type: "number",
                      placeholder: "Enter Products remaining",
                      name: "productsRemaining",
                      value: x.values.productsRemaining,
                      onChange: x.handleChange,
                      onBlur: x.handleBlur,
                      required: !0,
                    }),
                    x.touched.productsRemaining &&
                      x.errors.productsRemaining &&
                      d.jsx("p", { children: x.errors.productsRemaining }),
                  ],
                }),
                d.jsxs("div", {
                  className: "uploadimagewrapper",
                  children: [
                    d.jsx("input", {
                      type: "file",
                      className: "file",
                      onChange: p,
                    }),
                    d.jsx("button", {
                      type: "button",
                      onClick: y,
                      disabled: n || !u,
                      className: "uploadbtn",
                      children: n ? "Uploading..." : "Upload Image",
                    }),
                    l &&
                      d.jsx("div", {
                        className: "AddProducts",
                        children: d.jsx("img", {
                          src: l,
                          alt: "Uploaded",
                          className: "uploadedImage",
                        }),
                      }),
                  ],
                }),
                i && d.jsx("p", { className: "error", children: i }),
                d.jsx("button", {
                  type: "submit",
                  className: "AddProductbtn",
                  disabled: e || n,
                  children: e ? "Please wait..." : "Add product",
                }),
                d.jsx("p", { className: "addedToDbMessage", children: o }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  function A4() {
    const { id: e } = rc(),
      [t, n] = w.useState(null),
      [r, i] = w.useState(!0),
      [s, o] = w.useState(null);
    return (
      w.useEffect(() => {
        async function a() {
          try {
            const l = await K.get(`${ze}/api/products/getOneProduct/${e}`);
            n(l.data.data), i(!1);
          } catch (l) {
            o(l), i(!1);
          }
        }
        a();
      }, [e]),
      r
        ? d.jsx("p", { children: "Loading..." })
        : s
          ? d.jsxs("p", { children: ["Error fetching product: ", s.message] })
          : d.jsx("div", {
              className: "product-details",
              children: t
                ? d.jsx(d.Fragment, {
                    children: d.jsxs("div", {
                      className: "laptopcontainerr",
                      children: [
                        d.jsx("img", {
                          src: t.productImage,
                          alt: t.productName,
                        }),
                        d.jsx("h1", { children: t.productName }),
                        d.jsx("p", {
                          className: "description",
                          children: t.productDescription,
                        }),
                        d.jsx("p", {
                          children: d.jsxs("strike", {
                            children: ["was Ksh ", t.productPrice + 300],
                          }),
                        }),
                        d.jsxs("h3", {
                          children: ["Now Ksh ", t.productPrice],
                        }),
                        d.jsxs("button", {
                          children: [d.jsx(Q1, {}), " Add to Cart"],
                        }),
                      ],
                    }),
                  })
                : d.jsx("p", { children: "Product not found." }),
            })
    );
  }
  function E4() {
    return d.jsx("div", {
      style: { textAlign: "center", marginTop: "50px" },
      children: d.jsx("img", {
        src: "https://res.cloudinary.com/dukptptve/image/upload/v1721824724/uiiwuoz1vzgkxhh4kyki.png",
        alt: "",
      }),
    });
  }
  function k4() {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState(""),
      i = tn(),
      s = xt((l) => l.user);
    async function o(l) {
      if (s && s.role === "admin")
        try {
          t(!0), r("");
          const c = await K.post(`${ze}/api/users/register`, {
            firstName: l.firstName,
            lastName: l.lastName,
            email: l.email,
            password: l.password,
            role: l.role,
          });
          c.data.success
            ? (Le("User Added", { theme: "success" }), i("/AdminUsers"))
            : r(c.data.message);
        } catch (c) {
          c.response && c.response.data && c.response.data.message
            ? r(c.response.data.message)
            : r(c.message);
        } finally {
          t(!1);
        }
      else i("/Page404");
    }
    const a = xr({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "admin",
      },
      onSubmit: o,
      validate: (l) => {
        let c = {};
        return (
          l.firstName || (c.firstName = "First name is required"),
          l.lastName || (c.lastName = "Last name is required"),
          l.email || (c.email = "Email is required"),
          l.password || (c.password = "Password is required"),
          c
        );
      },
    });
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("h1", {
          className: "messagesheading",
          children: "Add A New Admin",
        }),
        d.jsx("div", {
          className: "addusers",
          children: d.jsx("section", {
            className: "",
            children: d.jsxs("div", {
              className: "",
              children: [
                n && d.jsx("h1", { className: "error", children: n }),
                d.jsxs("form", {
                  onSubmit: a.handleSubmit,
                  children: [
                    d.jsxs("div", {
                      className: "addAdminInputs",
                      children: [
                        d.jsx("label", { children: "First Name" }),
                        d.jsx("input", {
                          type: "text",
                          placeholder: " First Name",
                          name: "firstName",
                          value: a.values.firstName,
                          onChange: a.handleChange,
                          onBlur: a.handleBlur,
                          required: !0,
                        }),
                        a.touched.firstName &&
                          a.errors.firstName &&
                          d.jsx("p", { children: a.errors.firstName }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "addAdminInputs",
                      children: [
                        d.jsx("label", { children: "Last Name" }),
                        d.jsx("input", {
                          type: "text",
                          placeholder: "Last Name",
                          name: "lastName",
                          value: a.values.lastName,
                          onChange: a.handleChange,
                          onBlur: a.handleBlur,
                          required: !0,
                        }),
                        a.touched.lastName &&
                          a.errors.lastName &&
                          d.jsx("p", { children: a.errors.lastName }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "addAdminInputs",
                      children: [
                        d.jsx("label", { children: "Email Address" }),
                        d.jsx("input", {
                          type: "email",
                          placeholder: "Email",
                          name: "email",
                          value: a.values.email,
                          onChange: a.handleChange,
                          onBlur: a.handleBlur,
                          required: !0,
                        }),
                        a.touched.email &&
                          a.errors.email &&
                          d.jsx("p", { children: a.errors.email }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: "addAdminInputs",
                      children: [
                        d.jsx("label", { children: "Password" }),
                        d.jsx("input", {
                          type: "password",
                          placeholder: "Create a strong password",
                          name: "password",
                          value: a.values.password,
                          onChange: a.handleChange,
                          onBlur: a.handleBlur,
                          required: !0,
                        }),
                        a.touched.password &&
                          a.errors.password &&
                          d.jsx("p", { children: a.errors.password }),
                      ],
                    }),
                    d.jsx("button", {
                      type: "submit",
                      className: "createaccountbtn",
                      disabled: e,
                      children: e ? "Please wait..." : "Submit",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  }
  const C4 = "dukptptve",
    j4 = "preset";
  function P4() {
    const { userId: e } = rc(),
      t = tn(),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(""),
      [o, a] = w.useState(null),
      [l, c] = w.useState(""),
      [u, f] = w.useState(!1),
      [h, m] = w.useState(""),
      g = xt((p) => p.user);
    w.useEffect(() => {
      (async () => {
        if (g && g.role === "admin")
          try {
            const x = await K.get(`${ze}/api/users/getOneUser/${e}`, {
              withCredentials: !0,
            });
            x.data.success
              ? (y.setValues(x.data.data),
                m(x.data.data.profilePicture || ""),
                c(x.data.data.profilePicture || ""))
              : s("Failed to fetch user data.");
          } catch (x) {
            s(x.message);
          }
        else s("Unauthorized"), t("/Page404");
      })();
    }, [g, e, t]);
    async function v() {
      if (!o) {
        Le("Please select an image to upload.", { theme: "failure" });
        return;
      }
      const p = new FormData();
      p.append("file", o), p.append("upload_preset", j4);
      try {
        f(!0);
        const x = await K.post(
          `https://api.cloudinary.com/v1_1/${C4}/upload`,
          p,
        );
        x.data.secure_url
          ? (m(x.data.secure_url),
            y.setFieldValue("profilePicture", x.data.secure_url))
          : Le("Failed to upload image. Please try again.", {
              theme: "failure",
            });
      } catch {
        Le("Failed to upload image. Please try again.", { theme: "failure" });
      } finally {
        f(!1);
      }
    }
    function b(p) {
      const x = p.target.files[0];
      if ((a(x), x)) {
        const _ = URL.createObjectURL(x);
        c(_);
      }
    }
    const y = xr({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        profilePicture: "",
      },
      onSubmit: async (p) => {
        if (g)
          try {
            r(!0),
              s(""),
              (
                await K.patch(`${ze}/api/users/updateUserDetails/${e}`, p, {
                  withCredentials: !0,
                })
              ).data.success
                ? Le("Profile updated successfully", { theme: "success" })
                : s("Failed to update profile. Please try again.");
          } catch (x) {
            s(x.message);
          } finally {
            r(!1);
          }
        else s("You do not have permission to edit this profile.");
      },
    });
    return d.jsx("section", {
      className: "adminProfile",
      children: d.jsx("div", {
        className: "EditProfile",
        children: d.jsxs("div", {
          className: "editUserProfileContainer",
          children: [
            d.jsx("h1", { children: "Update Your Profile" }),
            d.jsxs("form", {
              onSubmit: y.handleSubmit,
              children: [
                d.jsx("div", {
                  className: "profileImageWrapper",
                  children: d.jsx("img", {
                    src: l || g.profilePicture,
                    alt: "Profile",
                  }),
                }),
                d.jsxs("div", {
                  className: "editProfile",
                  children: [
                    d.jsx("label", { children: "First Name" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Enter your first Name",
                      name: "firstName",
                      value: y.values.firstName,
                      onChange: y.handleChange,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "editProfile",
                  children: [
                    d.jsx("label", { children: "Last Name" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Enter your last Name",
                      name: "lastName",
                      value: y.values.lastName,
                      onChange: y.handleChange,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "editProfile",
                  children: [
                    d.jsx("label", { children: "Email" }),
                    d.jsx("input", {
                      type: "text",
                      placeholder: "Enter your Email",
                      name: "email",
                      value: y.values.email,
                      onChange: y.handleChange,
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "uploaduserimagewrapper",
                  children: [
                    d.jsx("input", {
                      type: "file",
                      className: "file",
                      onChange: b,
                    }),
                    d.jsx("button", {
                      type: "button",
                      onClick: v,
                      disabled: u || !o,
                      className: "uploadbtn",
                      children: u ? "Uploading..." : "Upload Image",
                    }),
                  ],
                }),
                i && d.jsx("p", { className: "error", children: i }),
                d.jsx("button", {
                  type: "submit",
                  className: "updateProfilebtn",
                  disabled: n,
                  children: n ? "Please wait..." : "Update profile",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
  const T4 = "dukptptve",
    O4 = "preset";
  function M4() {
    const { productId: e } = rc(),
      t = tn(),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(""),
      [o, a] = w.useState(null),
      [l, c] = w.useState(!1),
      [u, f] = w.useState(""),
      h = xt((y) => y.user);
    w.useEffect(() => {
      (async () => {
        if (h && h.role === "admin")
          try {
            const p = await K.get(`${ze}/api/products/getOneProduct/${e}`, {
              withCredentials: !0,
            });
            p.data.success
              ? v.setValues(p.data.data)
              : s("Failed to fetch product data.");
          } catch (p) {
            s(p.message);
          }
        else s("Unauthorized"), t("/Page404");
      })();
    }, [h, e, t]);
    async function m() {
      const y = new FormData();
      y.append("file", o), y.append("upload_preset", O4);
      try {
        c(!0);
        const p = await K.post(
          `https://api.cloudinary.com/v1_1/${T4}/upload`,
          y,
        );
        f(p.data.secure_url),
          v.setFieldValue("productImage", p.data.secure_url);
      } catch {
        Le("Failed to upload image. Please try again.", { theme: "failure" });
      } finally {
        c(!1);
      }
    }
    function g(y) {
      a(y.target.files[0]);
    }
    const v = xr({
      initialValues: {
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
      },
      onSubmit: b,
    });
    async function b(y) {
      if ((h == null ? void 0 : h.role) === "admin")
        try {
          r(!0),
            s(""),
            (
              await K.patch(`${ze}/api/products/updateproduct/${e}`, y, {
                withCredentials: !0,
              })
            ).data.success
              ? (Le("Product updated successfully", { theme: "success" }),
                v.resetForm(),
                t("/AdminProducts"))
              : s("Failed to update product. Please try again.");
        } catch (p) {
          s(p.message);
        } finally {
          r(!1);
        }
      else s("You do not have permission to edit a product.");
    }
    return d.jsx("div", {
      className: "EditProduct",
      children: d.jsxs("div", {
        className: "addProductContainer",
        children: [
          d.jsx("h1", { children: "Update Product" }),
          d.jsxs("form", {
            onSubmit: v.handleSubmit,
            children: [
              d.jsxs("div", {
                className: "AddProducts",
                children: [
                  d.jsx("label", { children: "Product Name" }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Enter Product Name",
                    name: "productName",
                    value: v.values.productName,
                    onChange: v.handleChange,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "AddProducts",
                children: [
                  d.jsx("label", { children: "Product Price" }),
                  d.jsx("input", {
                    type: "number",
                    placeholder: "Enter Product Price",
                    name: "productPrice",
                    value: v.values.productPrice,
                    onChange: v.handleChange,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "AddProducts",
                children: [
                  d.jsx("label", { children: "Product Description" }),
                  d.jsx("input", {
                    type: "text",
                    placeholder: "Enter Product Description",
                    name: "productDescription",
                    value: v.values.productDescription,
                    onChange: v.handleChange,
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "uploadimagewrapper",
                children: [
                  d.jsx("input", {
                    type: "file",
                    className: "file",
                    onChange: g,
                  }),
                  d.jsx("button", {
                    type: "button",
                    onClick: m,
                    disabled: l || !o,
                    className: "uploadbtn",
                    children: l ? "Uploading..." : "Upload Image",
                  }),
                  u &&
                    d.jsx("div", {
                      className: "AddProducts",
                      children: d.jsx("img", {
                        src: u,
                        alt: "Uploaded",
                        className: "uploadedImage",
                      }),
                    }),
                ],
              }),
              i && d.jsx("p", { className: "error", children: i }),
              d.jsx("button", {
                type: "submit",
                className: "AddProductbtn",
                disabled: n,
                children: n ? "Please wait..." : "Update Product",
              }),
            ],
          }),
        ],
      }),
    });
  }
  /*! js-cookie v3.0.5 | MIT */ function wa(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) e[r] = n[r];
    }
    return e;
  }
  var N4 = {
    read: function (e) {
      return (
        e[0] === '"' && (e = e.slice(1, -1)),
        e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      );
    },
    write: function (e) {
      return encodeURIComponent(e).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent,
      );
    },
  };
  function mf(e, t) {
    function n(i, s, o) {
      if (!(typeof document > "u")) {
        (o = wa({}, t, o)),
          typeof o.expires == "number" &&
            (o.expires = new Date(Date.now() + o.expires * 864e5)),
          o.expires && (o.expires = o.expires.toUTCString()),
          (i = encodeURIComponent(i)
            .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape));
        var a = "";
        for (var l in o)
          o[l] &&
            ((a += "; " + l), o[l] !== !0 && (a += "=" + o[l].split(";")[0]));
        return (document.cookie = i + "=" + e.write(s, i) + a);
      }
    }
    function r(i) {
      if (!(typeof document > "u" || (arguments.length && !i))) {
        for (
          var s = document.cookie ? document.cookie.split("; ") : [],
            o = {},
            a = 0;
          a < s.length;
          a++
        ) {
          var l = s[a].split("="),
            c = l.slice(1).join("=");
          try {
            var u = decodeURIComponent(l[0]);
            if (((o[u] = e.read(c, u)), i === u)) break;
          } catch {}
        }
        return i ? o[i] : o;
      }
    }
    return Object.create(
      {
        set: n,
        get: r,
        remove: function (i, s) {
          n(i, "", wa({}, s, { expires: -1 }));
        },
        withAttributes: function (i) {
          return mf(this.converter, wa({}, this.attributes, i));
        },
        withConverter: function (i) {
          return mf(wa({}, this.converter, i), this.attributes);
        },
      },
      {
        attributes: { value: Object.freeze(t) },
        converter: { value: Object.freeze(e) },
      },
    );
  }
  mf(N4, { path: "/" });
  function R4() {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(!0),
      [i, s] = w.useState(null),
      o = xt((a) => a.user);
    return (
      w.useEffect(() => {
        (async () => {
          console.log(o);
          try {
            const l = await K.get(`${ze}/api/cart/GetUserCart/${o.id}`, {
              withCredentials: !0,
            });
            console.log(l);
            const c = await l.json();
            t(c);
          } catch (l) {
            s(l.message);
          } finally {
            r(!1);
          }
        })();
      }, [o]),
      n
        ? d.jsx("div", { children: "Loading..." })
        : i
          ? d.jsxs("div", { children: ["Error: ", i] })
          : d.jsxs("div", {
              children: [
                d.jsx("h1", { children: "Your Cart" }),
                e.length === 0
                  ? d.jsx("p", { children: "Your cart is empty." })
                  : d.jsx("ul", {
                      children: e.map((a) =>
                        d.jsxs(
                          "li",
                          {
                            children: [
                              d.jsx("h2", { children: a.productName }),
                              d.jsx("p", { children: a.productDescription }),
                              d.jsxs("p", {
                                children: ["Price: Ksh", a.productPrice],
                              }),
                            ],
                          },
                          a.id,
                        ),
                      ),
                    }),
              ],
            })
    );
  }
  function L4() {
    const e = xt((r) => r.user),
      [t, n] = w.useState(!1);
    return (
      w.useEffect(() => {
        e && e.role === "admin" ? n(!0) : n(!1);
      }, [e]),
      d.jsxs(s2, {
        children: [
          !t && d.jsx(tk, {}),
          t && d.jsx(jb, {}),
          d.jsx(GS, {
            children: t
              ? d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(ge, {
                      path: "/EditProduct/:productId",
                      element: d.jsx(M4, {}),
                    }),
                    d.jsx(ge, {
                      path: "/AdminProfile/:userId",
                      element: d.jsx(P4, {}),
                    }),
                    d.jsx(ge, { path: "/Page404", element: d.jsx(E4, {}) }),
                    d.jsx(ge, { path: "/AdminOrders", element: d.jsx(x4, {}) }),
                    d.jsx(ge, { path: "/AddProduct", element: d.jsx(S4, {}) }),
                    d.jsx(ge, { path: "/Messages", element: d.jsx(w4, {}) }),
                    d.jsx(ge, { path: "/Login", element: d.jsx(hg, {}) }),
                    d.jsx(ge, {
                      path: "/AdminProducts",
                      element: d.jsx(b4, {}),
                    }),
                    d.jsx(ge, { path: "/AdminUsers", element: d.jsx(_4, {}) }),
                    d.jsx(ge, { path: "/AdminHome", element: d.jsx(F0, {}) }),
                    d.jsx(ge, { path: "*", element: d.jsx(F0, {}) }),
                    d.jsx(ge, { path: "/AddUser", element: d.jsx(k4, {}) }),
                  ],
                })
              : d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(ge, {
                      path: "Profile/:userId",
                      element: d.jsx(sO, {}),
                    }),
                    d.jsx(ge, { path: "Cart", element: d.jsx(R4, {}) }),
                    d.jsx(ge, { path: "/", element: d.jsx(um, {}) }),
                    d.jsx(ge, { path: "/About", element: d.jsx(ik, {}) }),
                    d.jsx(ge, {
                      path: "/FeaturedProducts",
                      element: d.jsx(ok, {}),
                    }),
                    d.jsx(ge, { path: "/Help", element: d.jsx(hk, {}) }),
                    d.jsx(ge, { path: "/Hotdeals", element: d.jsx(yk, {}) }),
                    d.jsx(ge, { path: "/Contact", element: d.jsx(tO, {}) }),
                    d.jsx(ge, { path: "/Signin", element: d.jsx(nO, {}) }),
                    d.jsx(ge, { path: "/Login", element: d.jsx(hg, {}) }),
                    d.jsx(ge, { path: "/Account", element: d.jsx(aO, {}) }),
                    d.jsx(ge, { path: "*", element: d.jsx(um, {}) }),
                    d.jsx(ge, { path: "/product/:id", element: d.jsx(A4, {}) }),
                  ],
                }),
          }),
          !t && d.jsx(gk, {}),
        ],
      })
    );
  }
  Iu.createRoot(document.getElementById("root")).render(
    d.jsx(V.StrictMode, { children: d.jsx(L4, {}) }),
  );
});
export default I4();
