(() => {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  var r = globalThis,
    s = {},
    n = {},
    t = r.parcelRequire18c4;
  null == t &&
    (((t = function (e) {
      if (e in s) return s[e].exports;
      if (e in n) {
        var r = n[e];
        delete n[e];
        var t = { id: e, exports: {} };
        return (s[e] = t), r.call(t.exports, t, t.exports), t.exports;
      }
      var a = new Error("Cannot find module '" + e + "'");
      throw ((a.code = "MODULE_NOT_FOUND"), a);
    }).register = function (e, r) {
      n[e] = r;
    }),
    (r.parcelRequire18c4 = t)),
    (0, t.register)("3YbIY", function (e, r) {
      var s;
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self && self,
        (s = function (e) {
          "use strict";
          if (!globalThis.chrome?.runtime?.id)
            throw new Error(
              "This script should only be loaded in a browser extension."
            );
          if (
            void 0 === globalThis.browser ||
            Object.getPrototypeOf(globalThis.browser) !== Object.prototype
          ) {
            const r = "The message port closed before a response was received.",
              s = (e) => {
                const s = {
                  alarms: {
                    clear: { minArgs: 0, maxArgs: 1 },
                    clearAll: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getAll: { minArgs: 0, maxArgs: 0 },
                  },
                  bookmarks: {
                    create: { minArgs: 1, maxArgs: 1 },
                    get: { minArgs: 1, maxArgs: 1 },
                    getChildren: { minArgs: 1, maxArgs: 1 },
                    getRecent: { minArgs: 1, maxArgs: 1 },
                    getSubTree: { minArgs: 1, maxArgs: 1 },
                    getTree: { minArgs: 0, maxArgs: 0 },
                    move: { minArgs: 2, maxArgs: 2 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    removeTree: { minArgs: 1, maxArgs: 1 },
                    search: { minArgs: 1, maxArgs: 1 },
                    update: { minArgs: 2, maxArgs: 2 },
                  },
                  browserAction: {
                    disable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    enable: {
                      minArgs: 0,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                    getBadgeText: { minArgs: 1, maxArgs: 1 },
                    getPopup: { minArgs: 1, maxArgs: 1 },
                    getTitle: { minArgs: 1, maxArgs: 1 },
                    openPopup: { minArgs: 0, maxArgs: 0 },
                    setBadgeBackgroundColor: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setBadgeText: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setIcon: { minArgs: 1, maxArgs: 1 },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                  },
                  browsingData: {
                    remove: { minArgs: 2, maxArgs: 2 },
                    removeCache: { minArgs: 1, maxArgs: 1 },
                    removeCookies: { minArgs: 1, maxArgs: 1 },
                    removeDownloads: { minArgs: 1, maxArgs: 1 },
                    removeFormData: { minArgs: 1, maxArgs: 1 },
                    removeHistory: { minArgs: 1, maxArgs: 1 },
                    removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                    removePasswords: { minArgs: 1, maxArgs: 1 },
                    removePluginData: { minArgs: 1, maxArgs: 1 },
                    settings: { minArgs: 0, maxArgs: 0 },
                  },
                  commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                  contextMenus: {
                    remove: { minArgs: 1, maxArgs: 1 },
                    removeAll: { minArgs: 0, maxArgs: 0 },
                    update: { minArgs: 2, maxArgs: 2 },
                  },
                  cookies: {
                    get: { minArgs: 1, maxArgs: 1 },
                    getAll: { minArgs: 1, maxArgs: 1 },
                    getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  devtools: {
                    inspectedWindow: {
                      eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                    },
                    panels: {
                      create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                      elements: {
                        createSidebarPane: { minArgs: 1, maxArgs: 1 },
                      },
                    },
                  },
                  downloads: {
                    cancel: { minArgs: 1, maxArgs: 1 },
                    download: { minArgs: 1, maxArgs: 1 },
                    erase: { minArgs: 1, maxArgs: 1 },
                    getFileIcon: { minArgs: 1, maxArgs: 2 },
                    open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                    pause: { minArgs: 1, maxArgs: 1 },
                    removeFile: { minArgs: 1, maxArgs: 1 },
                    resume: { minArgs: 1, maxArgs: 1 },
                    search: { minArgs: 1, maxArgs: 1 },
                    show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  },
                  extension: {
                    isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                    isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                  },
                  history: {
                    addUrl: { minArgs: 1, maxArgs: 1 },
                    deleteAll: { minArgs: 0, maxArgs: 0 },
                    deleteRange: { minArgs: 1, maxArgs: 1 },
                    deleteUrl: { minArgs: 1, maxArgs: 1 },
                    getVisits: { minArgs: 1, maxArgs: 1 },
                    search: { minArgs: 1, maxArgs: 1 },
                  },
                  i18n: {
                    detectLanguage: { minArgs: 1, maxArgs: 1 },
                    getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                  },
                  identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                  idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                  management: {
                    get: { minArgs: 1, maxArgs: 1 },
                    getAll: { minArgs: 0, maxArgs: 0 },
                    getSelf: { minArgs: 0, maxArgs: 0 },
                    setEnabled: { minArgs: 2, maxArgs: 2 },
                    uninstallSelf: { minArgs: 0, maxArgs: 1 },
                  },
                  notifications: {
                    clear: { minArgs: 1, maxArgs: 1 },
                    create: { minArgs: 1, maxArgs: 2 },
                    getAll: { minArgs: 0, maxArgs: 0 },
                    getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                    update: { minArgs: 2, maxArgs: 2 },
                  },
                  pageAction: {
                    getPopup: { minArgs: 1, maxArgs: 1 },
                    getTitle: { minArgs: 1, maxArgs: 1 },
                    hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                    setIcon: { minArgs: 1, maxArgs: 1 },
                    setPopup: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    setTitle: {
                      minArgs: 1,
                      maxArgs: 1,
                      fallbackToNoCallback: !0,
                    },
                    show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  },
                  permissions: {
                    contains: { minArgs: 1, maxArgs: 1 },
                    getAll: { minArgs: 0, maxArgs: 0 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    request: { minArgs: 1, maxArgs: 1 },
                  },
                  runtime: {
                    getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                    getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                    openOptionsPage: { minArgs: 0, maxArgs: 0 },
                    requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                    sendMessage: { minArgs: 1, maxArgs: 3 },
                    sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                    setUninstallURL: { minArgs: 1, maxArgs: 1 },
                  },
                  sessions: {
                    getDevices: { minArgs: 0, maxArgs: 1 },
                    getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                    restore: { minArgs: 0, maxArgs: 1 },
                  },
                  storage: {
                    local: {
                      clear: { minArgs: 0, maxArgs: 0 },
                      get: { minArgs: 0, maxArgs: 1 },
                      getBytesInUse: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    },
                    managed: {
                      get: { minArgs: 0, maxArgs: 1 },
                      getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    },
                    sync: {
                      clear: { minArgs: 0, maxArgs: 0 },
                      get: { minArgs: 0, maxArgs: 1 },
                      getBytesInUse: { minArgs: 0, maxArgs: 1 },
                      remove: { minArgs: 1, maxArgs: 1 },
                      set: { minArgs: 1, maxArgs: 1 },
                    },
                  },
                  tabs: {
                    captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                    create: { minArgs: 1, maxArgs: 1 },
                    detectLanguage: { minArgs: 0, maxArgs: 1 },
                    discard: { minArgs: 0, maxArgs: 1 },
                    duplicate: { minArgs: 1, maxArgs: 1 },
                    executeScript: { minArgs: 1, maxArgs: 2 },
                    get: { minArgs: 1, maxArgs: 1 },
                    getCurrent: { minArgs: 0, maxArgs: 0 },
                    getZoom: { minArgs: 0, maxArgs: 1 },
                    getZoomSettings: { minArgs: 0, maxArgs: 1 },
                    goBack: { minArgs: 0, maxArgs: 1 },
                    goForward: { minArgs: 0, maxArgs: 1 },
                    highlight: { minArgs: 1, maxArgs: 1 },
                    insertCSS: { minArgs: 1, maxArgs: 2 },
                    move: { minArgs: 2, maxArgs: 2 },
                    query: { minArgs: 1, maxArgs: 1 },
                    reload: { minArgs: 0, maxArgs: 2 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    removeCSS: { minArgs: 1, maxArgs: 2 },
                    sendMessage: { minArgs: 2, maxArgs: 3 },
                    setZoom: { minArgs: 1, maxArgs: 2 },
                    setZoomSettings: { minArgs: 1, maxArgs: 2 },
                    update: { minArgs: 1, maxArgs: 2 },
                  },
                  topSites: { get: { minArgs: 0, maxArgs: 0 } },
                  webNavigation: {
                    getAllFrames: { minArgs: 1, maxArgs: 1 },
                    getFrame: { minArgs: 1, maxArgs: 1 },
                  },
                  webRequest: {
                    handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                  },
                  windows: {
                    create: { minArgs: 0, maxArgs: 1 },
                    get: { minArgs: 1, maxArgs: 2 },
                    getAll: { minArgs: 0, maxArgs: 1 },
                    getCurrent: { minArgs: 0, maxArgs: 1 },
                    getLastFocused: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    update: { minArgs: 2, maxArgs: 2 },
                  },
                };
                if (0 === Object.keys(s).length)
                  throw new Error(
                    "api-metadata.json has not been included in browser-polyfill"
                  );
                class n extends WeakMap {
                  constructor(e, r) {
                    super(r), (this.createItem = e);
                  }
                  get(e) {
                    return (
                      this.has(e) || this.set(e, this.createItem(e)),
                      super.get(e)
                    );
                  }
                }
                const t =
                    (r, s) =>
                    (...n) => {
                      e.runtime.lastError
                        ? r.reject(new Error(e.runtime.lastError.message))
                        : s.singleCallbackArg ||
                          (n.length <= 1 && !1 !== s.singleCallbackArg)
                        ? r.resolve(n[0])
                        : r.resolve(n);
                    },
                  a = (e) => (1 == e ? "argument" : "arguments"),
                  i = (e, r, s) =>
                    new Proxy(r, { apply: (r, n, t) => s.call(n, e, ...t) });
                let g = Function.call.bind(Object.prototype.hasOwnProperty);
                const m = (e, r = {}, s = {}) => {
                    let n = Object.create(null),
                      o = {
                        has: (r, s) => s in e || s in n,
                        get(o, l, A) {
                          if (l in n) return n[l];
                          if (!(l in e)) return;
                          let c = e[l];
                          if ("function" == typeof c)
                            if ("function" == typeof r[l]) c = i(e, e[l], r[l]);
                            else if (g(s, l)) {
                              let r = ((e, r) =>
                                function (s, ...n) {
                                  if (n.length < r.minArgs)
                                    throw new Error(
                                      `Expected at least ${r.minArgs} ${a(
                                        r.minArgs
                                      )} for ${e}(), got ${n.length}`
                                    );
                                  if (n.length > r.maxArgs)
                                    throw new Error(
                                      `Expected at most ${r.maxArgs} ${a(
                                        r.maxArgs
                                      )} for ${e}(), got ${n.length}`
                                    );
                                  return new Promise((a, i) => {
                                    if (r.fallbackToNoCallback)
                                      try {
                                        s[e](
                                          ...n,
                                          t({ resolve: a, reject: i }, r)
                                        );
                                      } catch (t) {
                                        console.warn(
                                          `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                                          t
                                        ),
                                          s[e](...n),
                                          (r.fallbackToNoCallback = !1),
                                          (r.noCallback = !0),
                                          a();
                                      }
                                    else
                                      r.noCallback
                                        ? (s[e](...n), a())
                                        : s[e](
                                            ...n,
                                            t({ resolve: a, reject: i }, r)
                                          );
                                  });
                                })(l, s[l]);
                              c = i(e, e[l], r);
                            } else c = c.bind(e);
                          else if (
                            "object" == typeof c &&
                            null !== c &&
                            (g(r, l) || g(s, l))
                          )
                            c = m(c, r[l], s[l]);
                          else {
                            if (!g(s, "*"))
                              return (
                                Object.defineProperty(n, l, {
                                  configurable: !0,
                                  enumerable: !0,
                                  get: () => e[l],
                                  set(r) {
                                    e[l] = r;
                                  },
                                }),
                                c
                              );
                            c = m(c, r[l], s["*"]);
                          }
                          return (n[l] = c), c;
                        },
                        set: (r, s, t, a) => (
                          s in n ? (n[s] = t) : (e[s] = t), !0
                        ),
                        defineProperty: (e, r, s) =>
                          Reflect.defineProperty(n, r, s),
                        deleteProperty: (e, r) => Reflect.deleteProperty(n, r),
                      },
                      l = Object.create(e);
                    return new Proxy(l, o);
                  },
                  o = (e) => ({
                    addListener(r, s, ...n) {
                      r.addListener(e.get(s), ...n);
                    },
                    hasListener: (r, s) => r.hasListener(e.get(s)),
                    removeListener(r, s) {
                      r.removeListener(e.get(s));
                    },
                  }),
                  l = new n((e) =>
                    "function" != typeof e
                      ? e
                      : function (r) {
                          const s = m(
                            r,
                            {},
                            { getContent: { minArgs: 0, maxArgs: 0 } }
                          );
                          e(s);
                        }
                  ),
                  A = new n((e) =>
                    "function" != typeof e
                      ? e
                      : function (r, s, n) {
                          let t,
                            a,
                            i = !1,
                            g = new Promise((e) => {
                              t = function (r) {
                                (i = !0), e(r);
                              };
                            });
                          try {
                            a = e(r, s, t);
                          } catch (e) {
                            a = Promise.reject(e);
                          }
                          const m =
                            !0 !== a &&
                            (o = a) &&
                            "object" == typeof o &&
                            "function" == typeof o.then;
                          var o;
                          if (!0 !== a && !m && !i) return !1;
                          const l = (e) => {
                            e.then(
                              (e) => {
                                n(e);
                              },
                              (e) => {
                                let r;
                                (r =
                                  e &&
                                  (e instanceof Error ||
                                    "string" == typeof e.message)
                                    ? e.message
                                    : "An unexpected error occurred"),
                                  n({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: r,
                                  });
                              }
                            ).catch((e) => {
                              console.error(
                                "Failed to send onMessage rejected reply",
                                e
                              );
                            });
                          };
                          return l(m ? a : g), !0;
                        }
                  ),
                  c = ({ reject: s, resolve: n }, t) => {
                    e.runtime.lastError
                      ? e.runtime.lastError.message === r
                        ? n()
                        : s(new Error(e.runtime.lastError.message))
                      : t && t.__mozWebExtensionPolyfillReject__
                      ? s(new Error(t.message))
                      : n(t);
                  },
                  d = (e, r, s, ...n) => {
                    if (n.length < r.minArgs)
                      throw new Error(
                        `Expected at least ${r.minArgs} ${a(
                          r.minArgs
                        )} for ${e}(), got ${n.length}`
                      );
                    if (n.length > r.maxArgs)
                      throw new Error(
                        `Expected at most ${r.maxArgs} ${a(
                          r.maxArgs
                        )} for ${e}(), got ${n.length}`
                      );
                    return new Promise((e, r) => {
                      const t = c.bind(null, { resolve: e, reject: r });
                      n.push(t), s.sendMessage(...n);
                    });
                  },
                  x = {
                    devtools: { network: { onRequestFinished: o(l) } },
                    runtime: {
                      onMessage: o(A),
                      onMessageExternal: o(A),
                      sendMessage: d.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3,
                      }),
                    },
                    tabs: {
                      sendMessage: d.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3,
                      }),
                    },
                  },
                  p = {
                    clear: { minArgs: 1, maxArgs: 1 },
                    get: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  };
                return (
                  (s.privacy = {
                    network: { "*": p },
                    services: { "*": p },
                    websites: { "*": p },
                  }),
                  m(e, x, s)
                );
              };
            e.exports = s(chrome);
          } else e.exports = globalThis.browser;
        }),
        "function" == typeof define && define.amd
          ? define("webextension-polyfill", ["module"], s)
          : s(e);
    });
  var a = t("3YbIY");
  if (
    ('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" width="16" height="17" fill="none"><rect y=".5" width="16" height="16" rx="2" fill="#004664"/><path d="M8.75 3.75a2.875 2.875 0 0 0-2.875 2.875V14.5M8.75 3.75a2.875 2.875 0 0 1 2.875 2.875M11.625 6.625A2.875 2.875 0 0 1 8.75 9.5" stroke="#FFEFD6" stroke-width="2.5"/><path fill="url(\'#paint0_linear_612_11432\')" d="M7.125 8.25H8.75v2.5H7.125z"/><path fill="url(\'#paint1_linear_612_11432\')" d="M3 8.25h1.625v2.5H3z"/><path d="M5.875 6.625A2.875 2.875 0 0 1 3 9.5" stroke="#FFEFD6" stroke-width="2.5"/><defs><linearGradient id="paint0_linear_612_11432" x1="7.125" y1="9.297" x2="8.75" y2="9.297" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEFD6" stop-opacity=".6"/><stop offset="1" stop-color="#FFEFD6"/></linearGradient><linearGradient id="paint1_linear_612_11432" x1="3" y1="9.297" x2="4.625" y2="9.297" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEFD6"/><stop offset="1" stop-color="#FFEFD6" stop-opacity=".6"/></linearGradient></defs></svg>',
    (console.log =
      console.error =
      console.warn =
      console.info =
      console.debug =
        () => {}),
    !document.getElementById("pixefy-iframe-0"))
  ) {
    e(a)
      .runtime.sendMessage({ exit: !0 })
      .catch(() => {});
    const r = document.createElement("div");
    r.classList.add("pixefy-measurements");
    const s = document.createElement("div");
    s.classList.add("pixefy-measurement");
    const n = document.createElement("div");
    n.classList.add("pixefy-measurement-prefix"), (n.innerHTML = "w:");
    const t = document.createElement("div");
    t.classList.add("pixefy-measurement-inner"),
      (t.innerHTML = window.innerWidth.toString());
    const i = document.createElement("div");
    i.classList.add("pixefy-measurement-sufix"),
      (i.innerHTML = "px"),
      s.appendChild(n),
      s.appendChild(t),
      s.appendChild(i),
      r.appendChild(s);
    const g = document.createElement("div");
    g.classList.add("pixefy-measurement");
    const m = document.createElement("div");
    m.classList.add("pixefy-measurement-prefix"), (m.innerHTML = "h:");
    const o = document.createElement("div");
    o.classList.add("pixefy-measurement-inner"),
      (o.innerHTML = window.innerHeight.toString());
    const l = document.createElement("div");
    l.classList.add("pixefy-measurement-sufix"),
      (l.innerHTML = "px"),
      g.appendChild(m),
      g.appendChild(o),
      g.appendChild(l),
      r.appendChild(g);
    const A = document.createElement("div");
    let c;
    (A.innerHTML = e(
      '<svg xmlns="http://www.w3.org/2000/svg" style="display:block" width="16" height="17" fill="none"><rect y=".5" width="16" height="16" rx="2" fill="#004664"/><path d="M8.75 3.75a2.875 2.875 0 0 0-2.875 2.875V14.5M8.75 3.75a2.875 2.875 0 0 1 2.875 2.875M11.625 6.625A2.875 2.875 0 0 1 8.75 9.5" stroke="#FFEFD6" stroke-width="2.5"/><path fill="url(\'#paint0_linear_612_11432\')" d="M7.125 8.25H8.75v2.5H7.125z"/><path fill="url(\'#paint1_linear_612_11432\')" d="M3 8.25h1.625v2.5H3z"/><path d="M5.875 6.625A2.875 2.875 0 0 1 3 9.5" stroke="#FFEFD6" stroke-width="2.5"/><defs><linearGradient id="paint0_linear_612_11432" x1="7.125" y1="9.297" x2="8.75" y2="9.297" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEFD6" stop-opacity=".6"/><stop offset="1" stop-color="#FFEFD6"/></linearGradient><linearGradient id="paint1_linear_612_11432" x1="3" y1="9.297" x2="4.625" y2="9.297" gradientUnits="userSpaceOnUse"><stop stop-color="#FFEFD6"/><stop offset="1" stop-color="#FFEFD6" stop-opacity=".6"/></linearGradient></defs></svg>'
    )),
      r.appendChild(A),
      window.addEventListener("resize", () => {
        if (!document.getElementById("pixefy-iframe-0")) {
          const e = () => {
            document.body.removeChild(r);
          };
          clearTimeout(c),
            r.parentNode || document.body.appendChild(r),
            (t.innerHTML = window.innerWidth.toString()),
            (o.innerHTML = window.innerHeight.toString()),
            (c = setTimeout(e, 800));
        }
      });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVdDLFdBQ3BDSyxFQUFPVCxVQUFZRSxPQUFPUSxZQUFZTixXQUN0Q1MsRUFBVU8sV0FBV0wsRUFBZ0IsSUFDekMsSUFFUixDIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsInNvdXJjZS9tZWFzdXJlbWVudHMudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9idW5kbGVzL3J1bnRpbWUtNDVkMjQ4ZDVkNzY3NmE2Yy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMC4wIC0gRnJpIEF1ZyAxMiAyMDIyIDE5OjQyOjQ0ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIWdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lPy5pZCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG59XG5cbmlmICh0eXBlb2YgZ2xvYmFsVGhpcy5icm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWxUaGlzLmJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiXHJcblxyXG5pbXBvcnQgc3ZnTG9nbyBmcm9tICdidW5kbGUtdGV4dDouLi9pY29ucy9zdmcvbG9nby5zdmcnXHJcblxyXG5jb25zb2xlLmxvZyA9IGNvbnNvbGUuZXJyb3IgPSBjb25zb2xlLndhcm4gPSBjb25zb2xlLmluZm8gPSBjb25zb2xlLmRlYnVnID0gKCkgPT4ge31cclxuXHJcbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpeGVmeS1pZnJhbWUtMCcpKSB7XHJcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBleGl0OiB0cnVlIH0pLmNhdGNoKCgpID0+IHt9KVxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwaXhlZnktbWVhc3VyZW1lbnRzJylcclxuICAgIGNvbnN0IHdpZHRoTWVhc3VybWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB3aWR0aE1lYXN1cm1lbnQuY2xhc3NMaXN0LmFkZCgncGl4ZWZ5LW1lYXN1cmVtZW50JylcclxuICAgIGNvbnN0IHdpZHRoUHJlZml4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHdpZHRoUHJlZml4LmNsYXNzTGlzdC5hZGQoJ3BpeGVmeS1tZWFzdXJlbWVudC1wcmVmaXgnKVxyXG4gICAgd2lkdGhQcmVmaXguaW5uZXJIVE1MID0gJ3c6J1xyXG4gICAgY29uc3Qgd2lkdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgd2lkdGguY2xhc3NMaXN0LmFkZCgncGl4ZWZ5LW1lYXN1cmVtZW50LWlubmVyJylcclxuICAgIHdpZHRoLmlubmVySFRNTCA9IHdpbmRvdy5pbm5lcldpZHRoLnRvU3RyaW5nKClcclxuICAgIGNvbnN0IHdpZHRoU3VmaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgd2lkdGhTdWZpeC5jbGFzc0xpc3QuYWRkKCdwaXhlZnktbWVhc3VyZW1lbnQtc3VmaXgnKVxyXG4gICAgd2lkdGhTdWZpeC5pbm5lckhUTUwgPSAncHgnXHJcbiAgICB3aWR0aE1lYXN1cm1lbnQuYXBwZW5kQ2hpbGQod2lkdGhQcmVmaXgpXHJcbiAgICB3aWR0aE1lYXN1cm1lbnQuYXBwZW5kQ2hpbGQod2lkdGgpXHJcbiAgICB3aWR0aE1lYXN1cm1lbnQuYXBwZW5kQ2hpbGQod2lkdGhTdWZpeClcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQod2lkdGhNZWFzdXJtZW50KVxyXG4gICAgY29uc3QgaGVpZ2h0TWVhc3VybWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZWlnaHRNZWFzdXJtZW50LmNsYXNzTGlzdC5hZGQoJ3BpeGVmeS1tZWFzdXJlbWVudCcpXHJcbiAgICBjb25zdCBoZWlnaHRQcmVmaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaGVpZ2h0UHJlZml4LmNsYXNzTGlzdC5hZGQoJ3BpeGVmeS1tZWFzdXJlbWVudC1wcmVmaXgnKVxyXG4gICAgaGVpZ2h0UHJlZml4LmlubmVySFRNTCA9ICdoOidcclxuICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZWlnaHQuY2xhc3NMaXN0LmFkZCgncGl4ZWZ5LW1lYXN1cmVtZW50LWlubmVyJylcclxuICAgIGhlaWdodC5pbm5lckhUTUwgPSB3aW5kb3cuaW5uZXJIZWlnaHQudG9TdHJpbmcoKVxyXG4gICAgY29uc3QgaGVpZ2h0U3VmaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaGVpZ2h0U3VmaXguY2xhc3NMaXN0LmFkZCgncGl4ZWZ5LW1lYXN1cmVtZW50LXN1Zml4JylcclxuICAgIGhlaWdodFN1Zml4LmlubmVySFRNTCA9ICdweCdcclxuICAgIGhlaWdodE1lYXN1cm1lbnQuYXBwZW5kQ2hpbGQoaGVpZ2h0UHJlZml4KVxyXG4gICAgaGVpZ2h0TWVhc3VybWVudC5hcHBlbmRDaGlsZChoZWlnaHQpXHJcbiAgICBoZWlnaHRNZWFzdXJtZW50LmFwcGVuZENoaWxkKGhlaWdodFN1Zml4KVxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWlnaHRNZWFzdXJtZW50KVxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsb2dvLmlubmVySFRNTCA9IHN2Z0xvZ29cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobG9nbylcclxuICAgIGxldCB0aW1lb3V0XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpeGVmeS1pZnJhbWUtMCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXREaXNhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpZHRoLmlubmVySFRNTCA9IHdpbmRvdy5pbm5lcldpZHRoLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgaGVpZ2h0LmlubmVySFRNTCA9IHdpbmRvdy5pbm5lckhlaWdodC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHRpbWVvdXREaXNhYmxlLCA4MDApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI0YjI5YzkwZWQzYjNkMDhhXCI7Il0sIm5hbWVzIjpbImdsb2JhbFRoaXMiLCJjaHJvbWUiLCJydW50aW1lIiwiaWQiLCJFcnJvciIsImJyb3dzZXIiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIkNIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSIsIndyYXBBUElzIiwiZXh0ZW5zaW9uQVBJcyIsImFwaU1ldGFkYXRhIiwiYWxhcm1zIiwiY2xlYXIiLCJtaW5BcmdzIiwibWF4QXJncyIsImNsZWFyQWxsIiwiZ2V0IiwiZ2V0QWxsIiwiYm9va21hcmtzIiwiY3JlYXRlIiwiZ2V0Q2hpbGRyZW4iLCJnZXRSZWNlbnQiLCJnZXRTdWJUcmVlIiwiZ2V0VHJlZSIsIm1vdmUiLCJyZW1vdmUiLCJyZW1vdmVUcmVlIiwic2VhcmNoIiwidXBkYXRlIiwiYnJvd3NlckFjdGlvbiIsImRpc2FibGUiLCJmYWxsYmFja1RvTm9DYWxsYmFjayIsImVuYWJsZSIsImdldEJhZGdlQmFja2dyb3VuZENvbG9yIiwiZ2V0QmFkZ2VUZXh0IiwiZ2V0UG9wdXAiLCJnZXRUaXRsZSIsIm9wZW5Qb3B1cCIsInNldEJhZGdlQmFja2dyb3VuZENvbG9yIiwic2V0QmFkZ2VUZXh0Iiwic2V0SWNvbiIsInNldFBvcHVwIiwic2V0VGl0bGUiLCJicm93c2luZ0RhdGEiLCJyZW1vdmVDYWNoZSIsInJlbW92ZUNvb2tpZXMiLCJyZW1vdmVEb3dubG9hZHMiLCJyZW1vdmVGb3JtRGF0YSIsInJlbW92ZUhpc3RvcnkiLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVQYXNzd29yZHMiLCJyZW1vdmVQbHVnaW5EYXRhIiwic2V0dGluZ3MiLCJjb21tYW5kcyIsImNvbnRleHRNZW51cyIsInJlbW92ZUFsbCIsImNvb2tpZXMiLCJnZXRBbGxDb29raWVTdG9yZXMiLCJzZXQiLCJkZXZ0b29scyIsImluc3BlY3RlZFdpbmRvdyIsImV2YWwiLCJzaW5nbGVDYWxsYmFja0FyZyIsInBhbmVscyIsImVsZW1lbnRzIiwiY3JlYXRlU2lkZWJhclBhbmUiLCJkb3dubG9hZHMiLCJjYW5jZWwiLCJkb3dubG9hZCIsImVyYXNlIiwiZ2V0RmlsZUljb24iLCJvcGVuIiwicGF1c2UiLCJyZW1vdmVGaWxlIiwicmVzdW1lIiwic2hvdyIsImV4dGVuc2lvbiIsImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3MiLCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3MiLCJoaXN0b3J5IiwiYWRkVXJsIiwiZGVsZXRlQWxsIiwiZGVsZXRlUmFuZ2UiLCJkZWxldGVVcmwiLCJnZXRWaXNpdHMiLCJpMThuIiwiZGV0ZWN0TGFuZ3VhZ2UiLCJnZXRBY2NlcHRMYW5ndWFnZXMiLCJpZGVudGl0eSIsImxhdW5jaFdlYkF1dGhGbG93IiwiaWRsZSIsInF1ZXJ5U3RhdGUiLCJtYW5hZ2VtZW50IiwiZ2V0U2VsZiIsInNldEVuYWJsZWQiLCJ1bmluc3RhbGxTZWxmIiwibm90aWZpY2F0aW9ucyIsImdldFBlcm1pc3Npb25MZXZlbCIsInBhZ2VBY3Rpb24iLCJoaWRlIiwicGVybWlzc2lvbnMiLCJjb250YWlucyIsInJlcXVlc3QiLCJnZXRCYWNrZ3JvdW5kUGFnZSIsImdldFBsYXRmb3JtSW5mbyIsIm9wZW5PcHRpb25zUGFnZSIsInJlcXVlc3RVcGRhdGVDaGVjayIsInNlbmRNZXNzYWdlIiwic2VuZE5hdGl2ZU1lc3NhZ2UiLCJzZXRVbmluc3RhbGxVUkwiLCJzZXNzaW9ucyIsImdldERldmljZXMiLCJnZXRSZWNlbnRseUNsb3NlZCIsInJlc3RvcmUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXRCeXRlc0luVXNlIiwibWFuYWdlZCIsInN5bmMiLCJ0YWJzIiwiY2FwdHVyZVZpc2libGVUYWIiLCJkaXNjYXJkIiwiZHVwbGljYXRlIiwiZXhlY3V0ZVNjcmlwdCIsImdldEN1cnJlbnQiLCJnZXRab29tIiwiZ2V0Wm9vbVNldHRpbmdzIiwiZ29CYWNrIiwiZ29Gb3J3YXJkIiwiaGlnaGxpZ2h0IiwiaW5zZXJ0Q1NTIiwicXVlcnkiLCJyZWxvYWQiLCJyZW1vdmVDU1MiLCJzZXRab29tIiwic2V0Wm9vbVNldHRpbmdzIiwidG9wU2l0ZXMiLCJ3ZWJOYXZpZ2F0aW9uIiwiZ2V0QWxsRnJhbWVzIiwiZ2V0RnJhbWUiLCJ3ZWJSZXF1ZXN0IiwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZCIsIndpbmRvd3MiLCJnZXRMYXN0Rm9jdXNlZCIsImtleXMiLCJsZW5ndGgiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjb25zdHJ1Y3RvciIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInN1cGVyIiwidGhpcyIsImtleSIsImhhcyIsIm1ha2VDYWxsYmFjayIsInByb21pc2UiLCJtZXRhZGF0YSIsImNhbGxiYWNrQXJncyIsImxhc3RFcnJvciIsInJlamVjdCIsIm1lc3NhZ2UiLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBNZXRob2QiLCJ0YXJnZXQiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJhcmdzIiwiY2FsbCIsImhhc093blByb3BlcnR5IiwiRnVuY3Rpb24iLCJiaW5kIiwid3JhcE9iamVjdCIsIndyYXBwZXJzIiwiY2FjaGUiLCJoYW5kbGVycyIsInByb3h5VGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwidmFsdWUiLCJuYW1lIiwiUHJvbWlzZSIsImNiRXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm5vQ2FsbGJhY2siLCJ3cmFwQXN5bmNGdW5jdGlvbiIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImRlc2MiLCJSZWZsZWN0IiwiZGVsZXRlUHJvcGVydHkiLCJ3cmFwRXZlbnQiLCJ3cmFwcGVyTWFwIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImhhc0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzIiwicmVxIiwid3JhcHBlZFJlcSIsImdldENvbnRlbnQiLCJvbk1lc3NhZ2VXcmFwcGVycyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIndyYXBwZWRTZW5kUmVzcG9uc2UiLCJyZXN1bHQiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwic2VuZFJlc3BvbnNlUHJvbWlzZSIsInJlc3BvbnNlIiwiZXJyIiwiaXNSZXN1bHRUaGVuYWJsZSIsInRoZW4iLCJzZW5kUHJvbWlzZWRSZXN1bHQiLCJtc2ciLCJlcnJvciIsIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsImNhdGNoIiwid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCJyZXBseSIsIndyYXBwZWRTZW5kTWVzc2FnZSIsImFwaU5hbWVzcGFjZU9iaiIsIndyYXBwZWRDYiIsInB1c2giLCJzdGF0aWNXcmFwcGVycyIsIm5ldHdvcmsiLCJvblJlcXVlc3RGaW5pc2hlZCIsIm9uTWVzc2FnZSIsIm9uTWVzc2FnZUV4dGVybmFsIiwic2V0dGluZ01ldGFkYXRhIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibG9nIiwiaW5mbyIsImRlYnVnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIiRwYXJjZWwkaW50ZXJvcERlZmF1bHQiLCIkM1liSVkiLCJleGl0IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aWR0aE1lYXN1cm1lbnQiLCJ3aWR0aFByZWZpeCIsImlubmVySFRNTCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInRvU3RyaW5nIiwid2lkdGhTdWZpeCIsImFwcGVuZENoaWxkIiwiaGVpZ2h0TWVhc3VybWVudCIsImhlaWdodFByZWZpeCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0U3VmaXgiLCJsb2dvIiwidGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aW1lb3V0RGlzYWJsZSIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNsZWFyVGltZW91dCIsInBhcmVudE5vZGUiLCJzZXRUaW1lb3V0Il0sInZlcnNpb24iOjMsImZpbGUiOiJtZWFzdXJlbWVudHMuSEFTSF9SRUZfODEwMzNjODkzM2YyN2MyMy5qcy5tYXAifQ==
