(() => {
  "use strict";
  var e = {
      894: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(272),
          i = t.n(r),
          o = t(609),
          a = t.n(o)()(i());
        a.push([
          e.id,
          ":root {\n    --ruffle-blue: #37528c;\n    --ruffle-orange: #ffad33;\n}\n\nbody {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Lato, sans-serif;\n    display: flex;\n    flex-flow: column;\n    background: black;\n}\n\n#main {\n    position: relative;\n    flex: 1;\n}\n\n#overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    pointer-events: none;\n    border: 8px dashed var(--ruffle-orange);\n    border-radius: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    margin: 10px 5px;\n}\n\n#overlay.drag {\n    opacity: 1;\n    transition-timing-function: ease-out;\n}\n\n#prompt {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: var(--ruffle-orange);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n}\n\n#player {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: auto;\n    height: auto;\n    margin: 10px 0;\n}\n\n#nav {\n    width: 100%;\n    background: var(--ruffle-blue);\n    box-shadow: 0 3px 6px 5px var(--ruffle-blue);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    color: white;\n    padding: 10px 0 5px;\n    margin-bottom: 5px;\n}\n\n#title {\n    transition: opacity 0.5s;\n}\n\n#title:hover {\n    opacity: 0.5;\n}\n\n#title img {\n    height: 32px;\n}\n\n#file-picker select,\n#file-picker input,\n#author {\n    margin-left: 5px;\n}\n\n#local-file-container,\n#sample-swfs-container {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#author-container {\n    font-size: small;\n}\n\n#author {\n    color: var(--ruffle-orange);\n}\n\n.hidden {\n    display: none !important;\n}\n\n@media only screen and (max-width: 800px) {\n    #local-file-container,\n    #sample-swfs-container {\n        display: block;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #local-file-container span {\n        display: block;\n    }\n\n    #sample-swfs-label {\n        display: block;\n    }\n\n    #author-container {\n        font-size: 12px;\n        text-align: center;\n    }\n\n    #nav {\n        flex-flow: column;\n    }\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./www/index.css"],
            names: [],
            mappings:
              "AAAA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,SAAS;IACT,6BAA6B;IAC7B,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,UAAU;IACV,oBAAoB;IACpB,uCAAuC;IACvC,mBAAmB;IACnB,UAAU;IACV,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;;QAEI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ",
            sourcesContent: [
              ":root {\n    --ruffle-blue: #37528c;\n    --ruffle-orange: #ffad33;\n}\n\nbody {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Lato, sans-serif;\n    display: flex;\n    flex-flow: column;\n    background: black;\n}\n\n#main {\n    position: relative;\n    flex: 1;\n}\n\n#overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    pointer-events: none;\n    border: 8px dashed var(--ruffle-orange);\n    border-radius: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    margin: 10px 5px;\n}\n\n#overlay.drag {\n    opacity: 1;\n    transition-timing-function: ease-out;\n}\n\n#prompt {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: var(--ruffle-orange);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: large;\n}\n\n#player {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: auto;\n    height: auto;\n    margin: 10px 0;\n}\n\n#nav {\n    width: 100%;\n    background: var(--ruffle-blue);\n    box-shadow: 0 3px 6px 5px var(--ruffle-blue);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    color: white;\n    padding: 10px 0 5px;\n    margin-bottom: 5px;\n}\n\n#title {\n    transition: opacity 0.5s;\n}\n\n#title:hover {\n    opacity: 0.5;\n}\n\n#title img {\n    height: 32px;\n}\n\n#file-picker select,\n#file-picker input,\n#author {\n    margin-left: 5px;\n}\n\n#local-file-container,\n#sample-swfs-container {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#author-container {\n    font-size: small;\n}\n\n#author {\n    color: var(--ruffle-orange);\n}\n\n.hidden {\n    display: none !important;\n}\n\n@media only screen and (max-width: 800px) {\n    #local-file-container,\n    #sample-swfs-container {\n        display: block;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #local-file-container span {\n        display: block;\n    }\n\n    #sample-swfs-label {\n        display: block;\n    }\n\n    #author-container {\n        font-size: 12px;\n        text-align: center;\n    }\n\n    #nav {\n        flex-flow: column;\n    }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = a;
      },
      609: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, i, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  i &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = i))
                      : (l[4] = "".concat(i))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      272: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              i =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              o = "/*# ".concat(i, " */"),
              a = t.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(e, " */");
              });
            return [n].concat(a).concat([o]).join("\n");
          }
          return [n].join("\n");
        };
      },
      62: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var o = {}, a = [], s = 0; s < e.length; s++) {
            var c = e[s],
              u = r.base ? c[0] + r.base : c[0],
              l = o[u] || 0,
              f = "".concat(u, " ").concat(l);
            o[u] = l + 1;
            var _ = t(f),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== _) n[_].references++, n[_].updater(d);
            else {
              var b = i(d, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: f, updater: b, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function i(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, i) {
          var o = r((e = e || []), (i = i || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < o.length; a++) {
              var s = t(o[a]);
              n[s].references--;
            }
            for (var c = r(e, i), u = 0; u < o.length; u++) {
              var l = t(o[u]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            o = c;
          };
        };
      },
      793: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      173: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      892: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      36: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var i = void 0 !== t.layer;
                i &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  i && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var o = t.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      464: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      931: (e, n, t) => {
        e.exports = t.p + "751fe1d8b0592cb342f4.wasm";
      },
    },
    n = {};
  function t(r) {
    var i = n[r];
    if (void 0 !== i) return i.exports;
    var o = (n[r] = { id: r, exports: {} });
    return e[r](o, o.exports, t), o.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.p = ""),
    (t.b = document.baseURI || self.location.href),
    (() => {
      var e = t(62),
        n = t.n(e),
        r = t(36),
        i = t.n(r),
        o = t(793),
        a = t.n(o),
        s = t(892),
        c = t.n(s),
        u = t(173),
        l = t.n(u),
        f = t(464),
        _ = t.n(f),
        d = t(894),
        b = {};
      (b.styleTagTransform = _()),
        (b.setAttributes = c()),
        (b.insert = a().bind(null, "head")),
        (b.domAPI = i()),
        (b.insertStyleElement = l()),
        n()(d.Z, b),
        d.Z && d.Z.locals && d.Z.locals;
      const g =
        "undefined" != typeof AudioContext
          ? AudioContext
          : "undefined" != typeof webkitAudioContext
          ? webkitAudioContext
          : void 0;
      let w;
      const p = new Array(32).fill(void 0);
      function h(e) {
        return p[e];
      }
      p.push(void 0, null, !0, !1);
      let m = p.length;
      function v(e) {
        const n = h(e);
        return (
          (function (e) {
            e < 36 || ((p[e] = m), (m = e));
          })(e),
          n
        );
      }
      function y(e) {
        m === p.length && p.push(p.length + 1);
        const n = m;
        return (m = p[n]), (p[n] = e), n;
      }
      let A = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      A.decode();
      let x = null;
      function C() {
        return (
          (null !== x && x.buffer === w.memory.buffer) ||
            (x = new Uint8Array(w.memory.buffer)),
          x
        );
      }
      function I(e, n) {
        return A.decode(C().subarray(e, e + n));
      }
      function E(e) {
        return null == e;
      }
      let k = null,
        S = null;
      function B() {
        return (
          (null !== S && S.buffer === w.memory.buffer) ||
            (S = new Int32Array(w.memory.buffer)),
          S
        );
      }
      let R = 0,
        P = new TextEncoder("utf-8");
      const F =
        "function" == typeof P.encodeInto
          ? function (e, n) {
              return P.encodeInto(e, n);
            }
          : function (e, n) {
              const t = P.encode(e);
              return n.set(t), { read: e.length, written: t.length };
            };
      function T(e, n, t) {
        if (void 0 === t) {
          const t = P.encode(e),
            r = n(t.length);
          return (
            C()
              .subarray(r, r + t.length)
              .set(t),
            (R = t.length),
            r
          );
        }
        let r = e.length,
          i = n(r);
        const o = C();
        let a = 0;
        for (; a < r; a++) {
          const n = e.charCodeAt(a);
          if (n > 127) break;
          o[i + a] = n;
        }
        if (a !== r) {
          0 !== a && (e = e.slice(a)), (i = t(i, r, (r = a + 3 * e.length)));
          const n = C().subarray(i + a, i + r);
          a += F(e, n).written;
        }
        return (R = a), i;
      }
      function L(e) {
        const n = typeof e;
        if ("number" == n || "boolean" == n || null == e) return `${e}`;
        if ("string" == n) return `"${e}"`;
        if ("symbol" == n) {
          const n = e.description;
          return null == n ? "Symbol" : `Symbol(${n})`;
        }
        if ("function" == n) {
          const n = e.name;
          return "string" == typeof n && n.length > 0
            ? `Function(${n})`
            : "Function";
        }
        if (Array.isArray(e)) {
          const n = e.length;
          let t = "[";
          n > 0 && (t += L(e[0]));
          for (let r = 1; r < n; r++) t += ", " + L(e[r]);
          return (t += "]"), t;
        }
        const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let r;
        if (!(t.length > 1)) return toString.call(e);
        if (((r = t[1]), "Object" == r))
          try {
            return "Object(" + JSON.stringify(e) + ")";
          } catch (e) {
            return "Object";
          }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : r;
      }
      function M(e, n, t, r) {
        const i = { a: e, b: n, cnt: 1, dtor: t },
          o = (...e) => {
            i.cnt++;
            const n = i.a;
            i.a = 0;
            try {
              return r(n, i.b, ...e);
            } finally {
              0 == --i.cnt
                ? w.__wbindgen_export_2.get(i.dtor)(n, i.b)
                : (i.a = n);
            }
          };
        return (o.original = i), o;
      }
      function O(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15a55dbbf3347977(
          e,
          n,
          y(t)
        );
      }
      function j(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15a55dbbf3347977(
          e,
          n,
          y(t)
        );
      }
      function D(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15a55dbbf3347977(
          e,
          n,
          y(t)
        );
      }
      function U(e, n) {
        w._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h04118b89eb20498d(
          e,
          n
        );
      }
      function N(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hea430b77c25bfe5e(
          e,
          n,
          t
        );
      }
      function W(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15a55dbbf3347977(
          e,
          n,
          y(t)
        );
      }
      function V(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15a55dbbf3347977(
          e,
          n,
          y(t)
        );
      }
      function q(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h15a55dbbf3347977(
          e,
          n,
          y(t)
        );
      }
      function $(e, n, t) {
        w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0017b6248e5a7e46(
          e,
          n,
          y(t)
        );
      }
      function z(e, n) {
        try {
          return e.apply(this, n);
        } catch (e) {
          w.__wbindgen_exn_store(y(e));
        }
      }
      let G = 32;
      function H(e) {
        if (1 == G) throw new Error("out of js stack");
        return (p[--G] = e), G;
      }
      let Q = null;
      function Y() {
        return (
          (null !== Q && Q.buffer === w.memory.buffer) ||
            (Q = new Uint32Array(w.memory.buffer)),
          Q
        );
      }
      let J = null;
      function Z(e, n) {
        return ((null !== J && J.buffer === w.memory.buffer) ||
          (J = new Float32Array(w.memory.buffer)),
        J).subarray(e / 4, e / 4 + n);
      }
      function X(e, n) {
        return C().subarray(e / 1, e / 1 + n);
      }
      let K = null;
      function ee(e, n) {
        return ((null !== K && K.buffer === w.memory.buffer) ||
          (K = new Uint8ClampedArray(w.memory.buffer)),
        K).subarray(e / 1, e / 1 + n);
      }
      class ne {
        static __wrap(e) {
          const n = Object.create(ne.prototype);
          return (n.ptr = e), n;
        }
        __destroy_into_raw() {
          const e = this.ptr;
          return (this.ptr = 0), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          w.__wbg_ruffle_free(e);
        }
        constructor(e, n, t) {
          try {
            return v(w.ruffle_new(y(e), y(n), H(t)));
          } finally {
            p[G++] = void 0;
          }
        }
        stream_from(e, n) {
          try {
            var t = T(e, w.__wbindgen_malloc, w.__wbindgen_realloc),
              r = R;
            w.ruffle_stream_from(this.ptr, t, r, H(n));
          } finally {
            p[G++] = void 0;
          }
        }
        load_data(e, n) {
          try {
            w.ruffle_load_data(this.ptr, y(e), H(n));
          } finally {
            p[G++] = void 0;
          }
        }
        play() {
          w.ruffle_play(this.ptr);
        }
        pause() {
          w.ruffle_pause(this.ptr);
        }
        is_playing() {
          return 0 !== w.ruffle_is_playing(this.ptr);
        }
        prepare_context_menu() {
          return v(w.ruffle_prepare_context_menu(this.ptr));
        }
        run_context_menu_callback(e) {
          w.ruffle_run_context_menu_callback(this.ptr, e);
        }
        set_fullscreen(e) {
          w.ruffle_set_fullscreen(this.ptr, e);
        }
        clear_custom_menu_items() {
          w.ruffle_clear_custom_menu_items(this.ptr);
        }
        destroy() {
          w.ruffle_destroy(this.ptr);
        }
        call_exposed_callback(e, n) {
          var t = T(e, w.__wbindgen_malloc, w.__wbindgen_realloc),
            r = R,
            i = (function (e, n) {
              const t = n(4 * e.length),
                r = Y();
              for (let n = 0; n < e.length; n++) r[t / 4 + n] = y(e[n]);
              return (R = e.length), t;
            })(n, w.__wbindgen_malloc),
            o = R;
          return v(w.ruffle_call_exposed_callback(this.ptr, t, r, i, o));
        }
        set_trace_observer(e) {
          w.ruffle_set_trace_observer(this.ptr, y(e));
        }
        audio_context() {
          return v(w.ruffle_audio_context(this.ptr));
        }
      }
      const te = async function e(n) {
        void 0 === n && (n = new URL(t(931), t.b));
        const r = { wbg: {} };
        (r.wbg.__wbindgen_object_drop_ref = function (e) {
          v(e);
        }),
          (r.wbg.__wbindgen_cb_drop = function (e) {
            const n = v(e).original;
            return 1 == n.cnt-- && ((n.a = 0), !0);
          }),
          (r.wbg.__wbindgen_object_clone_ref = function (e) {
            return y(h(e));
          }),
          (r.wbg.__wbg_setMetadata_bbaeaee7f48274e6 = function (e, n) {
            h(e).setMetadata(v(n));
          }),
          (r.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof h(e);
          }),
          (r.wbg.__wbindgen_string_new = function (e, n) {
            return y(I(e, n));
          }),
          (r.wbg.__wbg_onCallbackAvailable_3a48fae397926c96 = function (
            e,
            n,
            t
          ) {
            h(e).onCallbackAvailable(I(n, t));
          }),
          (r.wbg.__wbg_onFSCommand_fb2f94653f71796e = function () {
            return z(function (e, n, t, r, i) {
              return h(e).onFSCommand(I(n, t), I(r, i));
            }, arguments);
          }),
          (r.wbg.__wbindgen_number_get = function (e, n) {
            const t = h(n);
            var r = "number" == typeof t ? t : void 0;
            (((null !== k && k.buffer === w.memory.buffer) ||
              (k = new Float64Array(w.memory.buffer)),
            k)[e / 8 + 1] = E(r) ? 0 : r),
              (B()[e / 4 + 0] = !E(r));
          }),
          (r.wbg.__wbindgen_string_get = function (e, n) {
            const t = h(n);
            var r = "string" == typeof t ? t : void 0,
              i = E(r) ? 0 : T(r, w.__wbindgen_malloc, w.__wbindgen_realloc),
              o = R;
            (B()[e / 4 + 1] = o), (B()[e / 4 + 0] = i);
          }),
          (r.wbg.__wbindgen_boolean_get = function (e) {
            const n = h(e);
            return "boolean" == typeof n ? (n ? 1 : 0) : 2;
          }),
          (r.wbg.__wbindgen_number_new = function (e) {
            return y(e);
          }),
          (r.wbg.__wbg_new_df6e6ab7a65c4c4d = function (e, n) {
            return y(new Error(I(e, n)));
          }),
          (r.wbg.__wbg_panic_bbc809dd04a12c60 = function (e, n) {
            h(e).panic(h(n));
          }),
          (r.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91 = function (
            e
          ) {
            h(e).displayUnsupportedMessage();
          }),
          (r.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a =
            function (e) {
              h(e).displayRootMovieDownloadFailedMessage();
            }),
          (r.wbg.__wbg_displayMessage_c57c20204892da2b = function (e, n, t) {
            h(e).displayMessage(I(n, t));
          }),
          (r.wbg.__wbg_setFullscreen_9819a8b20564e39b = function () {
            return z(function (e, n) {
              h(e).setFullscreen(0 !== n);
            }, arguments);
          }),
          (r.wbg.__wbindgen_json_serialize = function (e, n) {
            const t = h(n);
            var r = T(
                JSON.stringify(void 0 === t ? null : t),
                w.__wbindgen_malloc,
                w.__wbindgen_realloc
              ),
              i = R;
            (B()[e / 4 + 1] = i), (B()[e / 4 + 0] = r);
          }),
          (r.wbg.__wbindgen_json_parse = function (e, n) {
            return y(JSON.parse(I(e, n)));
          }),
          (r.wbg.__wbg_ruffle_new = function (e) {
            return y(ne.__wrap(e));
          }),
          (r.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            var o, a, s;
            (o = h(e)),
              (a = 0 === n ? void 0 : Z(n, t)),
              (s = 0 === r ? void 0 : Z(r, i)),
              a && o.getChannelData(0).set(a),
              s && o.getChannelData(1).set(s);
          }),
          (r.wbg.__wbg_getAudioOutputTimestamp_a67aa6687740cd15 = function (e) {
            var n = (function (e) {
              var n, t;
              const r =
                null === (n = e.getOutputTimestamp) || void 0 === n
                  ? void 0
                  : n.call(e);
              return null !== (t = null == r ? void 0 : r.contextTime) &&
                void 0 !== t
                ? t
                : e.currentTime - e.baseLatency;
            })(h(e));
            return n;
          }),
          (r.wbg.__wbg_new_693216e109162396 = function () {
            return y(new Error());
          }),
          (r.wbg.__wbg_stack_0ddaca5d1abfb52f = function (e, n) {
            var t = T(h(n).stack, w.__wbindgen_malloc, w.__wbindgen_realloc),
              r = R;
            (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
          }),
          (r.wbg.__wbg_error_09919627ac0992f5 = function (e, n) {
            try {
              console.error(I(e, n));
            } finally {
              w.__wbindgen_free(e, n);
            }
          }),
          (r.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === h(e);
          }),
          (r.wbg.__wbg_instanceof_WebGl2RenderingContext_56ad96bfac3f5531 =
            function (e) {
              return h(e) instanceof WebGL2RenderingContext;
            }),
          (r.wbg.__wbg_bindVertexArray_52b8b2f5fd93d81d = function (e, n) {
            h(e).bindVertexArray(h(n));
          }),
          (r.wbg.__wbg_blitFramebuffer_d6dafd082e3b1266 = function (
            e,
            n,
            t,
            r,
            i,
            o,
            a,
            s,
            c,
            u,
            l
          ) {
            h(e).blitFramebuffer(n, t, r, i, o, a, s, c, u >>> 0, l >>> 0);
          }),
          (r.wbg.__wbg_createVertexArray_d59135c0a43c410b = function (e) {
            var n = h(e).createVertexArray();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_renderbufferStorageMultisample_41916a754c02df64 =
            function (e, n, t, r, i, o) {
              h(e).renderbufferStorageMultisample(n >>> 0, t, r >>> 0, i, o);
            }),
          (r.wbg.__wbg_texImage2D_29ea0a7f026e239b = function () {
            return z(function (e, n, t, r, i, o, a, s, c, u, l) {
              h(e).texImage2D(
                n >>> 0,
                t,
                r,
                i,
                o,
                a,
                s >>> 0,
                c >>> 0,
                0 === u ? void 0 : X(u, l)
              );
            }, arguments);
          }),
          (r.wbg.__wbg_bindFramebuffer_48c4bf8ff82bf7e9 = function (e, n, t) {
            h(e).bindFramebuffer(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_bindRenderbuffer_4a9ad1cf80580397 = function (e, n, t) {
            h(e).bindRenderbuffer(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_bindTexture_9d8ed0fcd83eb0a9 = function (e, n, t) {
            h(e).bindTexture(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_createFramebuffer_9818fc04b4a38c18 = function (e) {
            var n = h(e).createFramebuffer();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_createRenderbuffer_d1a55ec78e26295b = function (e) {
            var n = h(e).createRenderbuffer();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_createTexture_8f31e7386e22fc37 = function (e) {
            var n = h(e).createTexture();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_deleteFramebuffer_5f58ccb548438c57 = function (e, n) {
            h(e).deleteFramebuffer(h(n));
          }),
          (r.wbg.__wbg_deleteRenderbuffer_6372146d4689793e = function (e, n) {
            h(e).deleteRenderbuffer(h(n));
          }),
          (r.wbg.__wbg_deleteTexture_a0632c71429795ac = function (e, n) {
            h(e).deleteTexture(h(n));
          }),
          (r.wbg.__wbg_framebufferRenderbuffer_9d619e8bf8f2aeb6 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).framebufferRenderbuffer(n >>> 0, t >>> 0, r >>> 0, h(i));
          }),
          (r.wbg.__wbg_framebufferTexture2D_3da41a7f38e2c523 = function (
            e,
            n,
            t,
            r,
            i,
            o
          ) {
            h(e).framebufferTexture2D(n >>> 0, t >>> 0, r >>> 0, h(i), o);
          }),
          (r.wbg.__wbg_getError_868f7c8ef6475b32 = function (e) {
            return h(e).getError();
          }),
          (r.wbg.__wbg_getParameter_e3aea13dd0a2904d = function () {
            return z(function (e, n) {
              return y(h(e).getParameter(n >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_texParameteri_c54aab65b2f8cf6d = function (e, n, t, r) {
            h(e).texParameteri(n >>> 0, t >>> 0, r);
          }),
          (r.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec = function (e) {
            return h(e) instanceof Window;
          }),
          (r.wbg.__wbg_document_1c64944725c0d81d = function (e) {
            var n = h(e).document;
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_location_f98ad02632f88c43 = function (e) {
            return y(h(e).location);
          }),
          (r.wbg.__wbg_navigator_480e592af6ad365b = function (e) {
            return y(h(e).navigator);
          }),
          (r.wbg.__wbg_devicePixelRatio_d8c3852bb37f76bf = function (e) {
            return h(e).devicePixelRatio;
          }),
          (r.wbg.__wbg_performance_947628766699c5bb = function (e) {
            var n = h(e).performance;
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_localStorage_6775414303ab5085 = function () {
            return z(function (e) {
              var n = h(e).localStorage;
              return E(n) ? 0 : y(n);
            }, arguments);
          }),
          (r.wbg.__wbg_cancelAnimationFrame_5f2a1e987a6de100 = function () {
            return z(function (e, n) {
              h(e).cancelAnimationFrame(n);
            }, arguments);
          }),
          (r.wbg.__wbg_focus_70ecc8fcab4bdb61 = function () {
            return z(function (e) {
              h(e).focus();
            }, arguments);
          }),
          (r.wbg.__wbg_open_5416e4448a959cfa = function () {
            return z(function (e, n, t, r, i) {
              var o = h(e).open(I(n, t), I(r, i));
              return E(o) ? 0 : y(o);
            }, arguments);
          }),
          (r.wbg.__wbg_requestAnimationFrame_71638ca922068239 = function () {
            return z(function (e, n) {
              return h(e).requestAnimationFrame(h(n));
            }, arguments);
          }),
          (r.wbg.__wbg_fetch_cfe0d1dd786e9cd4 = function (e, n) {
            return y(h(e).fetch(h(n)));
          }),
          (r.wbg.__wbg_debug_675b0ecb65722d2a = function (e) {
            console.debug(h(e));
          }),
          (r.wbg.__wbg_error_cc38ce2b4b661e1d = function (e) {
            console.error(h(e));
          }),
          (r.wbg.__wbg_info_e0c9813e6fd3bdc1 = function (e) {
            console.info(h(e));
          }),
          (r.wbg.__wbg_log_3445347661d4505e = function (e) {
            console.log(h(e));
          }),
          (r.wbg.__wbg_warn_5ec7c7c02d0b3841 = function (e) {
            console.warn(h(e));
          }),
          (r.wbg.__wbg_style_c88e323890d3a091 = function (e) {
            return y(h(e).style);
          }),
          (r.wbg.__wbg_getMappedRange_b7e0584a925b70f2 = function (e, n, t) {
            return y(h(e).getMappedRange(n, t));
          }),
          (r.wbg.__wbg_mapAsync_9347a5b713de2ebf = function (e, n, t, r) {
            return y(h(e).mapAsync(n >>> 0, t, r));
          }),
          (r.wbg.__wbg_unmap_c1d380622582211c = function (e) {
            h(e).unmap();
          }),
          (r.wbg.__wbg_now_559193109055ebad = function (e) {
            return h(e).now();
          }),
          (r.wbg.__wbg_label_1faadee62e787d90 = function (e, n) {
            var t = h(n).label,
              r = E(t) ? 0 : T(t, w.__wbindgen_malloc, w.__wbindgen_realloc),
              i = R;
            (B()[e / 4 + 1] = i), (B()[e / 4 + 0] = r);
          }),
          (r.wbg.__wbg_beginRenderPass_edc7408e114dba14 = function (e, n) {
            return y(h(e).beginRenderPass(h(n)));
          }),
          (r.wbg.__wbg_copyBufferToBuffer_2b5d6d40d5872861 = function (
            e,
            n,
            t,
            r,
            i,
            o
          ) {
            h(e).copyBufferToBuffer(h(n), t, h(r), i, o);
          }),
          (r.wbg.__wbg_finish_d4f9c5bbc890722e = function (e) {
            return y(h(e).finish());
          }),
          (r.wbg.__wbg_finish_1ef6fa1d9fce45bf = function (e, n) {
            return y(h(e).finish(h(n)));
          }),
          (r.wbg.__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e =
            function (e) {
              return h(e) instanceof HTMLCanvasElement;
            }),
          (r.wbg.__wbg_width_555f63ab09ba7d3f = function (e) {
            return h(e).width;
          }),
          (r.wbg.__wbg_setwidth_c1a7061891b71f25 = function (e, n) {
            h(e).width = n >>> 0;
          }),
          (r.wbg.__wbg_height_7153faec70fbaf7b = function (e) {
            return h(e).height;
          }),
          (r.wbg.__wbg_setheight_88894b05710ff752 = function (e, n) {
            h(e).height = n >>> 0;
          }),
          (r.wbg.__wbg_getContext_f701d0231ae22393 = function () {
            return z(function (e, n, t) {
              var r = h(e).getContext(I(n, t));
              return E(r) ? 0 : y(r);
            }, arguments);
          }),
          (r.wbg.__wbg_getContext_3e21e21280a332fc = function () {
            return z(function (e, n, t, r) {
              var i = h(e).getContext(I(n, t), h(r));
              return E(i) ? 0 : y(i);
            }, arguments);
          }),
          (r.wbg.__wbg_setsrc_3eb04f553f8335c7 = function (e, n, t) {
            h(e).src = I(n, t);
          }),
          (r.wbg.__wbg_new_265b3e027a3022bd = function () {
            return z(function () {
              return y(new Image());
            }, arguments);
          }),
          (r.wbg.__wbg_setonaudioprocess_4334efc34353560d = function (e, n) {
            h(e).onaudioprocess = h(n);
          }),
          (r.wbg.__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae =
            function (e) {
              return h(e) instanceof CanvasRenderingContext2D;
            }),
          (r.wbg.__wbg_setglobalAlpha_27b14e5f5b7567ec = function (e, n) {
            h(e).globalAlpha = n;
          }),
          (r.wbg.__wbg_setglobalCompositeOperation_c650e9805cc6316f =
            function () {
              return z(function (e, n, t) {
                h(e).globalCompositeOperation = I(n, t);
              }, arguments);
            }),
          (r.wbg.__wbg_setstrokeStyle_947bd4c26c94673f = function (e, n) {
            h(e).strokeStyle = h(n);
          }),
          (r.wbg.__wbg_setfillStyle_528a6a267c863ae7 = function (e, n) {
            h(e).fillStyle = h(n);
          }),
          (r.wbg.__wbg_setfilter_3d48443a4a710be8 = function (e, n, t) {
            h(e).filter = I(n, t);
          }),
          (r.wbg.__wbg_setimageSmoothingEnabled_92d14a22667eae22 = function (
            e,
            n
          ) {
            h(e).imageSmoothingEnabled = 0 !== n;
          }),
          (r.wbg.__wbg_setlineWidth_3221b7818c00ed48 = function (e, n) {
            h(e).lineWidth = n;
          }),
          (r.wbg.__wbg_setlineCap_5284a001e1efcecd = function (e, n, t) {
            h(e).lineCap = I(n, t);
          }),
          (r.wbg.__wbg_setlineJoin_a6af4e7d24a3a67e = function (e, n, t) {
            h(e).lineJoin = I(n, t);
          }),
          (r.wbg.__wbg_setmiterLimit_9fa0d72650341727 = function (e, n) {
            h(e).miterLimit = n;
          }),
          (r.wbg.__wbg_drawImage_5e8203c5b210fce3 = function () {
            return z(function (e, n, t, r) {
              h(e).drawImage(h(n), t, r);
            }, arguments);
          }),
          (r.wbg.__wbg_drawImage_9492b361f8b31282 = function () {
            return z(function (e, n, t, r) {
              h(e).drawImage(h(n), t, r);
            }, arguments);
          }),
          (r.wbg.__wbg_fill_75988ff43d6e3499 = function (e, n, t) {
            h(e).fill(h(n), v(t));
          }),
          (r.wbg.__wbg_stroke_d91ac76d5b1eb792 = function (e, n) {
            h(e).stroke(h(n));
          }),
          (r.wbg.__wbg_createPattern_1d0b3c3750c8448c = function () {
            return z(function (e, n, t, r) {
              var i = h(e).createPattern(h(n), I(t, r));
              return E(i) ? 0 : y(i);
            }, arguments);
          }),
          (r.wbg.__wbg_createPattern_b824d17776fa1f1e = function () {
            return z(function (e, n, t, r) {
              var i = h(e).createPattern(h(n), I(t, r));
              return E(i) ? 0 : y(i);
            }, arguments);
          }),
          (r.wbg.__wbg_getImageData_9ffc3df78ca3dbc9 = function () {
            return z(function (e, n, t, r, i) {
              return y(h(e).getImageData(n, t, r, i));
            }, arguments);
          }),
          (r.wbg.__wbg_putImageData_b9544b271e569392 = function () {
            return z(function (e, n, t, r) {
              h(e).putImageData(h(n), t, r);
            }, arguments);
          }),
          (r.wbg.__wbg_clearRect_07caefec3496ced1 = function (e, n, t, r, i) {
            h(e).clearRect(n, t, r, i);
          }),
          (r.wbg.__wbg_fillRect_10e42dc7a5e8cccd = function (e, n, t, r, i) {
            h(e).fillRect(n, t, r, i);
          }),
          (r.wbg.__wbg_resetTransform_26f86c1cc48a4fae = function () {
            return z(function (e) {
              h(e).resetTransform();
            }, arguments);
          }),
          (r.wbg.__wbg_setTransform_8ffd6a5c85396174 = function () {
            return z(function (e, n, t, r, i, o, a) {
              h(e).setTransform(n, t, r, i, o, a);
            }, arguments);
          }),
          (r.wbg.__wbg_currentTarget_65309531208d5df3 = function (e) {
            var n = h(e).currentTarget;
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_preventDefault_9866c9fd51eecfb6 = function (e) {
            h(e).preventDefault();
          }),
          (r.wbg.__wbg_width_16bd64d09cbf5661 = function (e) {
            return h(e).width;
          }),
          (r.wbg.__wbg_height_368bb86c37d51bc9 = function (e) {
            return h(e).height;
          }),
          (r.wbg.__wbg_data_1ae7496c58caf755 = function (e, n) {
            var t = (function (e, n) {
                const t = n(1 * e.length);
                return C().set(e, t / 1), (R = e.length), t;
              })(h(n).data, w.__wbindgen_malloc),
              r = R;
            (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
          }),
          (r.wbg.__wbg_newwithu8clampedarray_45da2809f7882d12 = function () {
            return z(function (e, n, t) {
              return y(new ImageData(ee(e, n), t >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_key_10dcaa4bb6d5449f = function (e, n) {
            var t = T(h(n).key, w.__wbindgen_malloc, w.__wbindgen_realloc),
              r = R;
            (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
          }),
          (r.wbg.__wbg_code_1c2fd251f38b398a = function (e, n) {
            var t = T(h(n).code, w.__wbindgen_malloc, w.__wbindgen_realloc),
              r = R;
            (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
          }),
          (r.wbg.__wbg_newwithstrandinit_9b0fa00478c37287 = function () {
            return z(function (e, n, t) {
              return y(new Request(I(e, n), h(t)));
            }, arguments);
          }),
          (r.wbg.__wbg_body_78ae4fd43b446013 = function (e) {
            var n = h(e).body;
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_createElement_86c152812a141a62 = function () {
            return z(function (e, n, t) {
              return y(h(e).createElement(I(n, t)));
            }, arguments);
          }),
          (r.wbg.__wbg_createElementNS_ae12b8681c3957a3 = function () {
            return z(function (e, n, t, r, i) {
              return y(
                h(e).createElementNS(0 === n ? void 0 : I(n, t), I(r, i))
              );
            }, arguments);
          }),
          (r.wbg.__wbg_destination_6c3ac66ee8b2fe85 = function (e) {
            return y(h(e).destination);
          }),
          (r.wbg.__wbg_sampleRate_ffa6f08191b00934 = function (e) {
            return h(e).sampleRate;
          }),
          (r.wbg.__wbg_currentTime_e231c76a3c011126 = function (e) {
            return h(e).currentTime;
          }),
          (r.wbg.__wbg_new_52bbbd81ffc19dff = function () {
            return z(function () {
              return y(new g());
            }, arguments);
          }),
          (r.wbg.__wbg_suspend_5b2c4674b28d07f2 = function () {
            return z(function (e) {
              return y(h(e).suspend());
            }, arguments);
          }),
          (r.wbg.__wbg_createBuffer_79833a4052d7b42a = function () {
            return z(function (e, n, t, r) {
              return y(h(e).createBuffer(n >>> 0, t >>> 0, r));
            }, arguments);
          }),
          (r.wbg.__wbg_createBufferSource_7244d810d62a0bed = function () {
            return z(function (e) {
              return y(h(e).createBufferSource());
            }, arguments);
          }),
          (r.wbg.__wbg_createChannelMerger_542d0885aa4bdc09 = function () {
            return z(function (e, n) {
              return y(h(e).createChannelMerger(n >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_createChannelSplitter_95302cbc3f9b9f85 = function () {
            return z(function (e, n) {
              return y(h(e).createChannelSplitter(n >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_createGain_c5f114390c363029 = function () {
            return z(function (e) {
              return y(h(e).createGain());
            }, arguments);
          }),
          (r.wbg.__wbg_createScriptProcessor_ec30f8ab6ea543d1 = function () {
            return z(function (e, n, t, r) {
              return y(h(e).createScriptProcessor(n >>> 0, t >>> 0, r >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_decodeAudioData_66b886741a4167f4 = function () {
            return z(function (e, n, t, r) {
              return y(h(e).decodeAudioData(h(n), h(t), h(r)));
            }, arguments);
          }),
          (r.wbg.__wbg_resume_ca50287e91c0323e = function () {
            return z(function (e) {
              return y(h(e).resume());
            }, arguments);
          }),
          (r.wbg.__wbg_setvalue_df8236adf40ea2d3 = function (e, n) {
            h(e).value = n;
          }),
          (r.wbg.__wbg_linearRampToValueAtTime_113d2920c90f1851 = function () {
            return z(function (e, n, t) {
              return y(h(e).linearRampToValueAtTime(n, t));
            }, arguments);
          }),
          (r.wbg.__wbg_setValueAtTime_9396570ff0d3cc1f = function () {
            return z(function (e, n, t) {
              return y(h(e).setValueAtTime(n, t));
            }, arguments);
          }),
          (r.wbg.__wbg_newwithbuffersourcesequenceandoptions_2b60b470c130cb1a =
            function () {
              return z(function (e, n) {
                return y(new Blob(h(e), h(n)));
              }, arguments);
            }),
          (r.wbg.__wbg_addEventListener_52721772cc0a7f30 = function () {
            return z(function (e, n, t, r) {
              h(e).addEventListener(I(n, t), h(r));
            }, arguments);
          }),
          (r.wbg.__wbg_addEventListener_09e11fbf8b4b719b = function () {
            return z(function (e, n, t, r, i) {
              h(e).addEventListener(I(n, t), h(r), h(i));
            }, arguments);
          }),
          (r.wbg.__wbg_addEventListener_0ed522a6d9900d5d = function () {
            return z(function (e, n, t, r, i) {
              h(e).addEventListener(I(n, t), h(r), 0 !== i);
            }, arguments);
          }),
          (r.wbg.__wbg_removeEventListener_f2adc9b2b318de99 = function () {
            return z(function (e, n, t, r) {
              h(e).removeEventListener(I(n, t), h(r));
            }, arguments);
          }),
          (r.wbg.__wbg_removeEventListener_24d5a7c12c3f3c39 = function () {
            return z(function (e, n, t, r, i) {
              h(e).removeEventListener(I(n, t), h(r), 0 !== i);
            }, arguments);
          }),
          (r.wbg.__wbg_gpu_c75610e8028c0f1d = function (e) {
            return y(h(e).gpu);
          }),
          (r.wbg.__wbg_userAgent_bdd46cceef222f52 = function () {
            return z(function (e, n) {
              var t = T(
                  h(n).userAgent,
                  w.__wbindgen_malloc,
                  w.__wbindgen_realloc
                ),
                r = R;
              (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
            }, arguments);
          }),
          (r.wbg.__wbg_baseURI_083fd53f8bea9af2 = function () {
            return z(function (e, n) {
              var t = h(n).baseURI,
                r = E(t) ? 0 : T(t, w.__wbindgen_malloc, w.__wbindgen_realloc),
                i = R;
              (B()[e / 4 + 1] = i), (B()[e / 4 + 0] = r);
            }, arguments);
          }),
          (r.wbg.__wbg_appendChild_d318db34c4559916 = function () {
            return z(function (e, n) {
              return y(h(e).appendChild(h(n)));
            }, arguments);
          }),
          (r.wbg.__wbg_gain_d4eaca6128dcfd90 = function (e) {
            return y(h(e).gain);
          }),
          (r.wbg.__wbg_submit_63bc0d270b23a1a1 = function (e, n) {
            h(e).submit(h(n));
          }),
          (r.wbg.__wbg_writeTexture_52fbda935520cee9 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).writeTexture(h(n), h(t), h(r), h(i));
          }),
          (r.wbg.__wbg_endPass_d29bb4449fa885a0 = function (e) {
            h(e).endPass();
          }),
          (r.wbg.__wbg_setStencilReference_4af6e77b23a9a3b4 = function (e, n) {
            h(e).setStencilReference(n >>> 0);
          }),
          (r.wbg.__wbg_setBindGroup_f62eec4fa460ad93 = function (
            e,
            n,
            t,
            r,
            i,
            o,
            a
          ) {
            var s, c;
            h(e).setBindGroup(
              n >>> 0,
              h(t),
              ((s = r), (c = i), Y().subarray(s / 4, s / 4 + c)),
              o,
              a >>> 0
            );
          }),
          (r.wbg.__wbg_drawIndexed_0e83b5853a27a162 = function (
            e,
            n,
            t,
            r,
            i,
            o
          ) {
            h(e).drawIndexed(n >>> 0, t >>> 0, r >>> 0, i, o >>> 0);
          }),
          (r.wbg.__wbg_setIndexBuffer_cb887b862c178461 = function (e, n, t, r) {
            h(e).setIndexBuffer(h(n), v(t), r);
          }),
          (r.wbg.__wbg_setIndexBuffer_b07c46f16b90a321 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).setIndexBuffer(h(n), v(t), r, i);
          }),
          (r.wbg.__wbg_setPipeline_2a966888f05946b1 = function (e, n) {
            h(e).setPipeline(h(n));
          }),
          (r.wbg.__wbg_setVertexBuffer_73fe9b37da554401 = function (
            e,
            n,
            t,
            r
          ) {
            h(e).setVertexBuffer(n >>> 0, h(t), r);
          }),
          (r.wbg.__wbg_setVertexBuffer_f1d371e2c02aca63 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).setVertexBuffer(n >>> 0, h(t), r, i);
          }),
          (r.wbg.__wbg_instanceof_SvgsvgElement_631275f115d8f8e3 = function (
            e
          ) {
            return h(e) instanceof SVGSVGElement;
          }),
          (r.wbg.__wbg_createSVGMatrix_037d6368ea06b02d = function (e) {
            return y(h(e).createSVGMatrix());
          }),
          (r.wbg.__wbg_setid_681bb5a14c3d5850 = function (e, n, t) {
            h(e).id = I(n, t);
          }),
          (r.wbg.__wbg_clientWidth_4d9e01af2b5b9f21 = function (e) {
            return h(e).clientWidth;
          }),
          (r.wbg.__wbg_clientHeight_87c209f0cacf2e97 = function (e) {
            return h(e).clientHeight;
          }),
          (r.wbg.__wbg_querySelector_dc71838110c91f39 = function () {
            return z(function (e, n, t) {
              var r = h(e).querySelector(I(n, t));
              return E(r) ? 0 : y(r);
            }, arguments);
          }),
          (r.wbg.__wbg_releasePointerCapture_326599f769b49681 = function () {
            return z(function (e, n) {
              h(e).releasePointerCapture(n);
            }, arguments);
          }),
          (r.wbg.__wbg_setAttribute_1b533bf07966de55 = function () {
            return z(function (e, n, t, r, i) {
              h(e).setAttribute(I(n, t), I(r, i));
            }, arguments);
          }),
          (r.wbg.__wbg_setAttributeNS_92db6decf2ec8400 = function () {
            return z(function (e, n, t, r, i, o, a) {
              h(e).setAttributeNS(0 === n ? void 0 : I(n, t), I(r, i), I(o, a));
            }, arguments);
          }),
          (r.wbg.__wbg_setPointerCapture_bd3244d9f008798f = function () {
            return z(function (e, n) {
              h(e).setPointerCapture(n);
            }, arguments);
          }),
          (r.wbg.__wbg_remove_c63cabc94a77cacb = function (e) {
            h(e).remove();
          }),
          (r.wbg.__wbg_instanceof_WebGlRenderingContext_101b938bec1286a3 =
            function (e) {
              return h(e) instanceof WebGLRenderingContext;
            }),
          (r.wbg.__wbg_drawingBufferWidth_8b0c2b31d9d6eee7 = function (e) {
            return h(e).drawingBufferWidth;
          }),
          (r.wbg.__wbg_drawingBufferHeight_f62678018bab567c = function (e) {
            return h(e).drawingBufferHeight;
          }),
          (r.wbg.__wbg_bufferData_2f9be23b37e5a1a4 = function (e, n, t, r, i) {
            h(e).bufferData(n >>> 0, X(t, r), i >>> 0);
          }),
          (r.wbg.__wbg_texImage2D_712c56fe5a9825ed = function () {
            return z(function (e, n, t, r, i, o, a, s, c, u, l) {
              h(e).texImage2D(
                n >>> 0,
                t,
                r,
                i,
                o,
                a,
                s >>> 0,
                c >>> 0,
                0 === u ? void 0 : X(u, l)
              );
            }, arguments);
          }),
          (r.wbg.__wbg_uniform1fv_02b26dddaa3ea984 = function (e, n, t, r) {
            h(e).uniform1fv(h(n), Z(t, r));
          }),
          (r.wbg.__wbg_uniform4fv_ca394beb323215c6 = function (e, n, t, r) {
            h(e).uniform4fv(h(n), Z(t, r));
          }),
          (r.wbg.__wbg_uniformMatrix3fv_340429fe0911bc6f = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).uniformMatrix3fv(h(n), 0 !== t, Z(r, i));
          }),
          (r.wbg.__wbg_uniformMatrix4fv_a92133b68236ac68 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).uniformMatrix4fv(h(n), 0 !== t, Z(r, i));
          }),
          (r.wbg.__wbg_activeTexture_b34aca0c2110966c = function (e, n) {
            h(e).activeTexture(n >>> 0);
          }),
          (r.wbg.__wbg_attachShader_eaa824fd5b37a770 = function (e, n, t) {
            h(e).attachShader(h(n), h(t));
          }),
          (r.wbg.__wbg_bindBuffer_2ca7e1c18819ecb2 = function (e, n, t) {
            h(e).bindBuffer(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_bindFramebuffer_c9f468afa9d42a5f = function (e, n, t) {
            h(e).bindFramebuffer(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_bindRenderbuffer_7b2b49f71f3eeef9 = function (e, n, t) {
            h(e).bindRenderbuffer(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_bindTexture_edd827f3dba6038e = function (e, n, t) {
            h(e).bindTexture(n >>> 0, h(t));
          }),
          (r.wbg.__wbg_blendFunc_d5ab9f0ff5a40a48 = function (e, n, t) {
            h(e).blendFunc(n >>> 0, t >>> 0);
          }),
          (r.wbg.__wbg_clear_da26620d46f0a11a = function (e, n) {
            h(e).clear(n >>> 0);
          }),
          (r.wbg.__wbg_clearColor_cbf22f8faa5a52c1 = function (e, n, t, r, i) {
            h(e).clearColor(n, t, r, i);
          }),
          (r.wbg.__wbg_colorMask_035708eb94fe9af8 = function (e, n, t, r, i) {
            h(e).colorMask(0 !== n, 0 !== t, 0 !== r, 0 !== i);
          }),
          (r.wbg.__wbg_compileShader_8fb70a472f32552c = function (e, n) {
            h(e).compileShader(h(n));
          }),
          (r.wbg.__wbg_createBuffer_4802e2f0e1b1acdf = function (e) {
            var n = h(e).createBuffer();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_createProgram_b1d94f4c7554d3a1 = function (e) {
            var n = h(e).createProgram();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_createShader_da09e167692f0dc7 = function (e, n) {
            var t = h(e).createShader(n >>> 0);
            return E(t) ? 0 : y(t);
          }),
          (r.wbg.__wbg_createTexture_bafc7c08393ae59d = function (e) {
            var n = h(e).createTexture();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_disable_b07faddb7d04349f = function (e, n) {
            h(e).disable(n >>> 0);
          }),
          (r.wbg.__wbg_disableVertexAttribArray_c9fdabd5f12b0539 = function (
            e,
            n
          ) {
            h(e).disableVertexAttribArray(n >>> 0);
          }),
          (r.wbg.__wbg_drawElements_8e8af4b6757fedce = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).drawElements(n >>> 0, t, r >>> 0, i);
          }),
          (r.wbg.__wbg_enable_d3d210aeb08eff52 = function (e, n) {
            h(e).enable(n >>> 0);
          }),
          (r.wbg.__wbg_enableVertexAttribArray_d539e547495bea44 = function (
            e,
            n
          ) {
            h(e).enableVertexAttribArray(n >>> 0);
          }),
          (r.wbg.__wbg_getAttribLocation_706a0beabcdaebcf = function (
            e,
            n,
            t,
            r
          ) {
            return h(e).getAttribLocation(h(n), I(t, r));
          }),
          (r.wbg.__wbg_getExtension_045789240c50a108 = function () {
            return z(function (e, n, t) {
              var r = h(e).getExtension(I(n, t));
              return E(r) ? 0 : y(r);
            }, arguments);
          }),
          (r.wbg.__wbg_getParameter_6412bd2d0602696d = function () {
            return z(function (e, n) {
              return y(h(e).getParameter(n >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_getProgramInfoLog_b60e82d52c200cbd = function (e, n, t) {
            var r = h(n).getProgramInfoLog(h(t)),
              i = E(r) ? 0 : T(r, w.__wbindgen_malloc, w.__wbindgen_realloc),
              o = R;
            (B()[e / 4 + 1] = o), (B()[e / 4 + 0] = i);
          }),
          (r.wbg.__wbg_getProgramParameter_229c193895936bbe = function (
            e,
            n,
            t
          ) {
            return y(h(e).getProgramParameter(h(n), t >>> 0));
          }),
          (r.wbg.__wbg_getShaderInfoLog_ba51160c01b98360 = function (e, n, t) {
            var r = h(n).getShaderInfoLog(h(t)),
              i = E(r) ? 0 : T(r, w.__wbindgen_malloc, w.__wbindgen_realloc),
              o = R;
            (B()[e / 4 + 1] = o), (B()[e / 4 + 0] = i);
          }),
          (r.wbg.__wbg_getUniformLocation_c3b3570b4632cc5c = function (
            e,
            n,
            t,
            r
          ) {
            var i = h(e).getUniformLocation(h(n), I(t, r));
            return E(i) ? 0 : y(i);
          }),
          (r.wbg.__wbg_linkProgram_7080c84b0233cea2 = function (e, n) {
            h(e).linkProgram(h(n));
          }),
          (r.wbg.__wbg_pixelStorei_3cd96723ae22a5c6 = function (e, n, t) {
            h(e).pixelStorei(n >>> 0, t);
          }),
          (r.wbg.__wbg_shaderSource_67b991301db003d0 = function (e, n, t, r) {
            h(e).shaderSource(h(n), I(t, r));
          }),
          (r.wbg.__wbg_stencilFunc_bbc24750c2db9a15 = function (e, n, t, r) {
            h(e).stencilFunc(n >>> 0, t, r >>> 0);
          }),
          (r.wbg.__wbg_stencilMask_0ec7662710f598d4 = function (e, n) {
            h(e).stencilMask(n >>> 0);
          }),
          (r.wbg.__wbg_stencilOp_fd4ec71a7de6ac85 = function (e, n, t, r) {
            h(e).stencilOp(n >>> 0, t >>> 0, r >>> 0);
          }),
          (r.wbg.__wbg_texParameteri_bd724f6a5ad0cbbc = function (e, n, t, r) {
            h(e).texParameteri(n >>> 0, t >>> 0, r);
          }),
          (r.wbg.__wbg_uniform1f_b9cff1cea32def5a = function (e, n, t) {
            h(e).uniform1f(h(n), t);
          }),
          (r.wbg.__wbg_uniform1i_0811c29c0eebe191 = function (e, n, t) {
            h(e).uniform1i(h(n), t);
          }),
          (r.wbg.__wbg_useProgram_b72b0bfcbc720fa9 = function (e, n) {
            h(e).useProgram(h(n));
          }),
          (r.wbg.__wbg_vertexAttribPointer_b5cb524c6fe9eec8 = function (
            e,
            n,
            t,
            r,
            i,
            o,
            a
          ) {
            h(e).vertexAttribPointer(n >>> 0, t, r >>> 0, 0 !== i, o, a);
          }),
          (r.wbg.__wbg_viewport_89af3aceb7036a2c = function (e, n, t, r, i) {
            h(e).viewport(n, t, r, i);
          }),
          (r.wbg.__wbg_setProperty_1460c660bc329763 = function () {
            return z(function (e, n, t, r, i) {
              h(e).setProperty(I(n, t), I(r, i));
            }, arguments);
          }),
          (r.wbg.__wbg_requestAdapter_7e3eeec455b1dacf = function (e, n) {
            return y(h(e).requestAdapter(h(n)));
          }),
          (r.wbg.__wbg_instanceof_GpuAdapter_805119f46d27f85e = function (e) {
            return h(e) instanceof GPUAdapter;
          }),
          (r.wbg.__wbg_requestDevice_4b8bbcb0e4c9f923 = function (e, n) {
            return y(h(e).requestDevice(h(n)));
          }),
          (r.wbg.__wbg_protocol_f17adabd4e662b06 = function () {
            return z(function (e, n) {
              var t = T(
                  h(n).protocol,
                  w.__wbindgen_malloc,
                  w.__wbindgen_realloc
                ),
                r = R;
              (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
            }, arguments);
          }),
          (r.wbg.__wbg_assign_26269af9ce90e6c7 = function () {
            return z(function (e, n, t) {
              h(e).assign(I(n, t));
            }, arguments);
          }),
          (r.wbg.__wbg_offsetX_5da3ebf8a8cda8a4 = function (e) {
            return h(e).offsetX;
          }),
          (r.wbg.__wbg_offsetY_b0edbc16723a55cb = function (e) {
            return h(e).offsetY;
          }),
          (r.wbg.__wbg_button_a02c0467d38e8338 = function (e) {
            return h(e).button;
          }),
          (r.wbg.__wbg_new_a3422e0170c31454 = function () {
            return z(function () {
              return y(new Path2D());
            }, arguments);
          }),
          (r.wbg.__wbg_addPath_18881cd56483fe63 = function (e, n, t) {
            h(e).addPath(h(n), h(t));
          }),
          (r.wbg.__wbg_closePath_bf39ada268053aea = function (e) {
            h(e).closePath();
          }),
          (r.wbg.__wbg_lineTo_4d75fbab7308c3d2 = function (e, n, t) {
            h(e).lineTo(n, t);
          }),
          (r.wbg.__wbg_moveTo_70f7a4760893f917 = function (e, n, t) {
            h(e).moveTo(n, t);
          }),
          (r.wbg.__wbg_quadraticCurveTo_7724e01d766ebfe2 = function (
            e,
            n,
            t,
            r,
            i
          ) {
            h(e).quadraticCurveTo(n, t, r, i);
          }),
          (r.wbg.__wbg_get_f0092ad67dc97639 = function () {
            return z(function (e, n, t, r) {
              var i = h(n)[I(t, r)],
                o = E(i) ? 0 : T(i, w.__wbindgen_malloc, w.__wbindgen_realloc),
                a = R;
              (B()[e / 4 + 1] = a), (B()[e / 4 + 0] = o);
            }, arguments);
          }),
          (r.wbg.__wbg_set_3a236a97145dc780 = function () {
            return z(function (e, n, t, r, i) {
              h(e)[I(n, t)] = I(r, i);
            }, arguments);
          }),
          (r.wbg.__wbg_delete_881ab2d2a830b82f = function () {
            return z(function (e, n, t) {
              delete h(e)[I(n, t)];
            }, arguments);
          }),
          (r.wbg.__wbg_length_b398b347bd3c9cd5 = function (e) {
            return h(e).length;
          }),
          (r.wbg.__wbg_setTransform_3f9fc1784a580fff = function (e, n) {
            h(e).setTransform(h(n));
          }),
          (r.wbg.__wbg_configure_d0e7ecc3ca69d9ec = function (e, n) {
            h(e).configure(h(n));
          }),
          (r.wbg.__wbg_getCurrentTexture_668469dcb84cf149 = function (e) {
            return y(h(e).getCurrentTexture());
          }),
          (r.wbg.__wbg_getPreferredFormat_dfa1168407a98dce = function (e, n) {
            return y(h(e).getPreferredFormat(h(n)));
          }),
          (r.wbg.__wbg_queue_ea40b4361b0e9500 = function (e) {
            return y(h(e).queue);
          }),
          (r.wbg.__wbg_createBindGroup_d2823f24d47c0120 = function (e, n) {
            return y(h(e).createBindGroup(h(n)));
          }),
          (r.wbg.__wbg_createBindGroupLayout_5d8252afb2226afa = function (
            e,
            n
          ) {
            return y(h(e).createBindGroupLayout(h(n)));
          }),
          (r.wbg.__wbg_createBuffer_0d9204bf8cfae5c1 = function (e, n) {
            return y(h(e).createBuffer(h(n)));
          }),
          (r.wbg.__wbg_createCommandEncoder_fb495e19c2fed9ee = function (e, n) {
            return y(h(e).createCommandEncoder(h(n)));
          }),
          (r.wbg.__wbg_createPipelineLayout_171b5650b232fc90 = function (e, n) {
            return y(h(e).createPipelineLayout(h(n)));
          }),
          (r.wbg.__wbg_createRenderPipeline_1948cf8cc7fef748 = function (e, n) {
            return y(h(e).createRenderPipeline(h(n)));
          }),
          (r.wbg.__wbg_createSampler_87a3fa16b1bfe820 = function (e, n) {
            return y(h(e).createSampler(h(n)));
          }),
          (r.wbg.__wbg_createShaderModule_420cb2836fafff99 = function (e, n) {
            return y(h(e).createShaderModule(h(n)));
          }),
          (r.wbg.__wbg_createTexture_a066c5777bda5027 = function (e, n) {
            return y(h(e).createTexture(h(n)));
          }),
          (r.wbg.__wbg_createView_fd2c0718d7beecf8 = function (e, n) {
            return y(h(e).createView(h(n)));
          }),
          (r.wbg.__wbg_bindVertexArrayOES_7104c80fb0d31cb0 = function (e, n) {
            h(e).bindVertexArrayOES(h(n));
          }),
          (r.wbg.__wbg_createVertexArrayOES_ced4f8a084b789b7 = function (e) {
            var n = h(e).createVertexArrayOES();
            return E(n) ? 0 : y(n);
          }),
          (r.wbg.__wbg_seta_f5667df13832f473 = function (e, n) {
            h(e).a = n;
          }),
          (r.wbg.__wbg_setb_51b68c87004ceb92 = function (e, n) {
            h(e).b = n;
          }),
          (r.wbg.__wbg_setc_62d7a8abc0082fcc = function (e, n) {
            h(e).c = n;
          }),
          (r.wbg.__wbg_setd_544fd4902db40bca = function (e, n) {
            h(e).d = n;
          }),
          (r.wbg.__wbg_sete_a3575dd88c8f17a3 = function (e, n) {
            h(e).e = n;
          }),
          (r.wbg.__wbg_setf_956eaea5b3047302 = function (e, n) {
            h(e).f = n;
          }),
          (r.wbg.__wbg_deltaY_080604c20160c0e8 = function (e) {
            return h(e).deltaY;
          }),
          (r.wbg.__wbg_deltaMode_c5ec1ee518ea0a08 = function (e) {
            return h(e).deltaMode;
          }),
          (r.wbg.__wbg_setbuffer_c643a88bac27b2bd = function (e, n) {
            h(e).buffer = h(n);
          }),
          (r.wbg.__wbg_setloop_32c84ea32fabef74 = function (e, n) {
            h(e).loop = 0 !== n;
          }),
          (r.wbg.__wbg_setloopStart_a113b4d478da7f93 = function (e, n) {
            h(e).loopStart = n;
          }),
          (r.wbg.__wbg_setloopEnd_b83c2563fe5be665 = function (e, n) {
            h(e).loopEnd = n;
          }),
          (r.wbg.__wbg_setonended_6ce8715add45953e = function (e, n) {
            h(e).onended = h(n);
          }),
          (r.wbg.__wbg_start_551bedf1ecfdc0e2 = function () {
            return z(function (e) {
              h(e).start();
            }, arguments);
          }),
          (r.wbg.__wbg_start_885262ec460f3ef3 = function () {
            return z(function (e, n, t) {
              h(e).start(n, t);
            }, arguments);
          }),
          (r.wbg.__wbg_stop_c6532de1aeb2e765 = function () {
            return z(function (e, n) {
              h(e).stop(n);
            }, arguments);
          }),
          (r.wbg.__wbg_connect_723cc4823fe3e6c0 = function () {
            return z(function (e, n) {
              return y(h(e).connect(h(n)));
            }, arguments);
          }),
          (r.wbg.__wbg_connect_cb8dcaafd6d14fe4 = function () {
            return z(function (e, n, t) {
              return y(h(e).connect(h(n), t >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_connect_eb8fcb61cab88f0b = function () {
            return z(function (e, n, t, r) {
              return y(h(e).connect(h(n), t >>> 0, r >>> 0));
            }, arguments);
          }),
          (r.wbg.__wbg_disconnect_661941cf5b88fa5a = function () {
            return z(function (e) {
              h(e).disconnect();
            }, arguments);
          }),
          (r.wbg.__wbg_outputBuffer_3f27dc3af0998ec9 = function () {
            return z(function (e) {
              return y(h(e).outputBuffer);
            }, arguments);
          }),
          (r.wbg.__wbg_instanceof_HtmlFormElement_aeafa27e92962efa = function (
            e
          ) {
            return h(e) instanceof HTMLFormElement;
          }),
          (r.wbg.__wbg_submit_7479ea6e99f76174 = function () {
            return z(function (e) {
              h(e).submit();
            }, arguments);
          }),
          (r.wbg.__wbg_pointerId_9302f0e125f0b48e = function (e) {
            return h(e).pointerId;
          }),
          (r.wbg.__wbg_instanceof_Response_e1b11afbefa5b563 = function (e) {
            return h(e) instanceof Response;
          }),
          (r.wbg.__wbg_ok_270f6d403efe7e7b = function (e) {
            return h(e).ok;
          }),
          (r.wbg.__wbg_statusText_97740db9b8bb12e3 = function (e, n) {
            var t = T(
                h(n).statusText,
                w.__wbindgen_malloc,
                w.__wbindgen_realloc
              ),
              r = R;
            (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
          }),
          (r.wbg.__wbg_arrayBuffer_b8937ed04beb0d36 = function () {
            return z(function (e) {
              return y(h(e).arrayBuffer());
            }, arguments);
          }),
          (r.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function () {
            return z(function (e, n, t) {
              h(e).randomFillSync(X(n, t));
            }, arguments);
          }),
          (r.wbg.__wbg_getRandomValues_98117e9a7e993920 = function () {
            return z(function (e, n) {
              h(e).getRandomValues(h(n));
            }, arguments);
          }),
          (r.wbg.__wbg_process_2f24d6544ea7b200 = function (e) {
            return y(h(e).process);
          }),
          (r.wbg.__wbindgen_is_object = function (e) {
            const n = h(e);
            return "object" == typeof n && null !== n;
          }),
          (r.wbg.__wbg_versions_6164651e75405d4a = function (e) {
            return y(h(e).versions);
          }),
          (r.wbg.__wbg_node_4b517d861cbcb3bc = function (e) {
            return y(h(e).node);
          }),
          (r.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof h(e);
          }),
          (r.wbg.__wbg_modulerequire_3440a4bcf44437db = function () {
            return z(function (e, n) {
              return y(o.require(I(e, n)));
            }, arguments);
          }),
          (r.wbg.__wbg_crypto_98fc271021c7d2ad = function (e) {
            return y(h(e).crypto);
          }),
          (r.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function (e) {
            return y(h(e).msCrypto);
          }),
          (r.wbg.__wbg_get_67189fe0b323d288 = function (e, n) {
            return y(h(e)[n >>> 0]);
          }),
          (r.wbg.__wbg_new_949bbc1147195c4e = function () {
            return y(new Array());
          }),
          (r.wbg.__wbg_newnoargs_be86524d73f67598 = function (e, n) {
            return y(new Function(I(e, n)));
          }),
          (r.wbg.__wbg_next_7720502039b96d00 = function () {
            return z(function (e) {
              return y(h(e).next());
            }, arguments);
          }),
          (r.wbg.__wbg_done_b06cf0578e89ff68 = function (e) {
            return h(e).done;
          }),
          (r.wbg.__wbg_value_e74a542443d92451 = function (e) {
            return y(h(e).value);
          }),
          (r.wbg.__wbg_get_4d0f21c2f823742e = function () {
            return z(function (e, n) {
              return y(Reflect.get(h(e), h(n)));
            }, arguments);
          }),
          (r.wbg.__wbg_call_888d259a5fefc347 = function () {
            return z(function (e, n) {
              return y(h(e).call(h(n)));
            }, arguments);
          }),
          (r.wbg.__wbg_new_0b83d3df67ecb33e = function () {
            return y(new Object());
          }),
          (r.wbg.__wbg_isArray_eb7ad55f2da67dde = function (e) {
            return Array.isArray(h(e));
          }),
          (r.wbg.__wbg_of_db9e1b8e0a7ed9bc = function (e, n) {
            return y(Array.of(h(e), h(n)));
          }),
          (r.wbg.__wbg_push_284486ca27c6aa8b = function (e, n) {
            return h(e).push(h(n));
          }),
          (r.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function (e) {
            return h(e) instanceof ArrayBuffer;
          }),
          (r.wbg.__wbg_new_3e02a228090b2e72 = function (e) {
            return y(new ArrayBuffer(e >>> 0));
          }),
          (r.wbg.__wbg_slice_dcc477bca8fe38b1 = function (e, n, t) {
            return y(h(e).slice(n >>> 0, t >>> 0));
          }),
          (r.wbg.__wbg_values_364ae56c608e6824 = function (e) {
            return y(h(e).values());
          }),
          (r.wbg.__wbg_apply_7cfa6ebf144990a5 = function () {
            return z(function (e, n, t) {
              return y(h(e).apply(h(n), h(t)));
            }, arguments);
          }),
          (r.wbg.__wbg_call_346669c262382ad7 = function () {
            return z(function (e, n, t) {
              return y(h(e).call(h(n), h(t)));
            }, arguments);
          }),
          (r.wbg.__wbg_getTime_10d33f4f2959e5dd = function (e) {
            return h(e).getTime();
          }),
          (r.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8 = function (e) {
            return h(e).getTimezoneOffset();
          }),
          (r.wbg.__wbg_new0_fd3a3a290b25cdac = function () {
            return y(new Date());
          }),
          (r.wbg.__wbg_instanceof_Object_66786225e0dbc8ba = function (e) {
            return h(e) instanceof Object;
          }),
          (r.wbg.__wbg_entries_aadf9c3f38203a12 = function (e) {
            return y(Object.entries(h(e)));
          }),
          (r.wbg.__wbg_fromEntries_164ebf0f69983a8e = function () {
            return z(function (e) {
              return y(Object.fromEntries(h(e)));
            }, arguments);
          }),
          (r.wbg.__wbg_is_0f5efc7977a2c50b = function (e, n) {
            return Object.is(h(e), h(n));
          }),
          (r.wbg.__wbg_new_b1d61b5687f5e73a = function (e, n) {
            try {
              var t = { a: e, b: n },
                r = new Promise((e, n) => {
                  const r = t.a;
                  t.a = 0;
                  try {
                    return (function (e, n, t, r) {
                      w.wasm_bindgen__convert__closures__invoke2_mut__hb98954a061226d04(
                        e,
                        n,
                        y(t),
                        y(r)
                      );
                    })(r, t.b, e, n);
                  } finally {
                    t.a = r;
                  }
                });
              return y(r);
            } finally {
              t.a = t.b = 0;
            }
          }),
          (r.wbg.__wbg_resolve_d23068002f584f22 = function (e) {
            return y(Promise.resolve(h(e)));
          }),
          (r.wbg.__wbg_then_2fcac196782070cc = function (e, n) {
            return y(h(e).then(h(n)));
          }),
          (r.wbg.__wbg_then_8c2d62e8ae5978f7 = function (e, n, t) {
            return y(h(e).then(h(n), h(t)));
          }),
          (r.wbg.__wbg_self_c6fbdfc2918d5e58 = function () {
            return z(function () {
              return y(self.self);
            }, arguments);
          }),
          (r.wbg.__wbg_window_baec038b5ab35c54 = function () {
            return z(function () {
              return y(window.window);
            }, arguments);
          }),
          (r.wbg.__wbg_globalThis_3f735a5746d41fbd = function () {
            return z(function () {
              return y(globalThis.globalThis);
            }, arguments);
          }),
          (r.wbg.__wbg_global_1bc0b39582740e95 = function () {
            return z(function () {
              return y(t.g.global);
            }, arguments);
          }),
          (r.wbg.__wbg_buffer_397eaa4d72ee94dd = function (e) {
            return y(h(e).buffer);
          }),
          (r.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff = function (
            e,
            n,
            t
          ) {
            return y(new Uint8Array(h(e), n >>> 0, t >>> 0));
          }),
          (r.wbg.__wbg_new_a7ce447f15ff496f = function (e) {
            return y(new Uint8Array(h(e)));
          }),
          (r.wbg.__wbg_set_969ad0a60e51d320 = function (e, n, t) {
            h(e).set(h(n), t >>> 0);
          }),
          (r.wbg.__wbg_length_1eb8fc608a0d4cdb = function (e) {
            return h(e).length;
          }),
          (r.wbg.__wbg_newwithlength_929232475839a482 = function (e) {
            return y(new Uint8Array(e >>> 0));
          }),
          (r.wbg.__wbg_fill_cd6951964c67ad3a = function (e, n, t, r) {
            return y(h(e).fill(n, t >>> 0, r >>> 0));
          }),
          (r.wbg.__wbg_buffer_facf0398a281c85b = function (e) {
            return y(h(e).buffer);
          }),
          (r.wbg.__wbg_subarray_8b658422a224f479 = function (e, n, t) {
            return y(h(e).subarray(n >>> 0, t >>> 0));
          }),
          (r.wbg.__wbg_byteLength_3e250b41a8915757 = function (e) {
            return h(e).byteLength;
          }),
          (r.wbg.__wbg_byteOffset_4204ecb24a6e5df9 = function (e) {
            return h(e).byteOffset;
          }),
          (r.wbg.__wbg_has_1275b5eec3dc7a7a = function () {
            return z(function (e, n) {
              return Reflect.has(h(e), h(n));
            }, arguments);
          }),
          (r.wbg.__wbg_ownKeys_f3f1916b5564918f = function () {
            return z(function (e) {
              return y(Reflect.ownKeys(h(e)));
            }, arguments);
          }),
          (r.wbg.__wbg_set_82a4e8a85e31ac42 = function () {
            return z(function (e, n, t) {
              return Reflect.set(h(e), h(n), h(t));
            }, arguments);
          }),
          (r.wbg.__wbindgen_debug_string = function (e, n) {
            var t = T(L(h(n)), w.__wbindgen_malloc, w.__wbindgen_realloc),
              r = R;
            (B()[e / 4 + 1] = r), (B()[e / 4 + 0] = t);
          }),
          (r.wbg.__wbindgen_throw = function (e, n) {
            throw new Error(I(e, n));
          }),
          (r.wbg.__wbindgen_rethrow = function (e) {
            throw v(e);
          }),
          (r.wbg.__wbindgen_memory = function () {
            return y(w.memory);
          }),
          (r.wbg.__wbindgen_closure_wrapper674 = function (e, n, t) {
            return y(M(e, n, 57, O));
          }),
          (r.wbg.__wbindgen_closure_wrapper676 = function (e, n, t) {
            return y(M(e, n, 57, j));
          }),
          (r.wbg.__wbindgen_closure_wrapper678 = function (e, n, t) {
            return y(M(e, n, 57, D));
          }),
          (r.wbg.__wbindgen_closure_wrapper680 = function (e, n, t) {
            return y(M(e, n, 57, U));
          }),
          (r.wbg.__wbindgen_closure_wrapper682 = function (e, n, t) {
            return y(M(e, n, 57, N));
          }),
          (r.wbg.__wbindgen_closure_wrapper684 = function (e, n, t) {
            return y(M(e, n, 57, W));
          }),
          (r.wbg.__wbindgen_closure_wrapper686 = function (e, n, t) {
            return y(M(e, n, 57, V));
          }),
          (r.wbg.__wbindgen_closure_wrapper688 = function (e, n, t) {
            return y(M(e, n, 57, q));
          }),
          (r.wbg.__wbindgen_closure_wrapper2212 = function (e, n, t) {
            return y(M(e, n, 988, $));
          }),
          ("string" == typeof n ||
            ("function" == typeof Request && n instanceof Request) ||
            ("function" == typeof URL && n instanceof URL)) &&
            (n = fetch(n));
        const { instance: i, module: o } = await (async function (e, n) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, n);
              } catch (n) {
                if ("application/wasm" == e.headers.get("Content-Type"))
                  throw n;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  n
                );
              }
            const t = await e.arrayBuffer();
            return await WebAssembly.instantiate(t, n);
          }
          {
            const t = await WebAssembly.instantiate(e, n);
            return t instanceof WebAssembly.Instance
              ? { instance: t, module: e }
              : t;
          }
        })(await n, r);
        return (w = i.exports), (e.__wbindgen_wasm_module = o), w;
      };
      function re(e) {
        const n =
          "function" == typeof Function.prototype.toString
            ? Function.prototype.toString()
            : null;
        return (
          "string" == typeof n &&
          n.indexOf("[native code]") >= 0 &&
          Function.prototype.toString.call(e).indexOf("[native code]") >= 0
        );
      }
      let ie = "";
      try {
        void 0 !== document.currentScript &&
          null !== document.currentScript &&
          "src" in document.currentScript &&
          "" !== document.currentScript.src &&
          (ie = new URL(".", document.currentScript.src).href);
      } catch (e) {
        console.warn("Unable to get currentScript URL");
      }
      function oe(e) {
        let n = ie;
        return (
          void 0 !== e && void 0 !== e.publicPath && (n = e.publicPath),
          "" === n || n.endsWith("/") || (n += "/"),
          n
        );
      }
      let ae = null;
      function se(e) {
        return (
          null == ae &&
            (ae = (async function (e) {
              return (
                ("function" == typeof Array.prototype.reduce &&
                  re(Array.prototype.reduce)) ||
                  Object.defineProperty(Array.prototype, "reduce", {
                    value(...e) {
                      if (
                        0 === e.length &&
                        window.Prototype &&
                        window.Prototype.Version &&
                        window.Prototype.Version < "1.6.1"
                      )
                        return this.length > 1 ? this : this[0];
                      const n = e[0];
                      if (null === this)
                        throw new TypeError(
                          "Array.prototype.reduce called on null or undefined"
                        );
                      if ("function" != typeof n)
                        throw new TypeError(`${n} is not a function`);
                      const t = Object(this),
                        r = t.length >>> 0;
                      let i,
                        o = 0;
                      if (e.length >= 2) i = e[1];
                      else {
                        for (; o < r && !(o in t); ) o++;
                        if (o >= r)
                          throw new TypeError(
                            "Reduce of empty array with no initial value"
                          );
                        i = t[o++];
                      }
                      for (; o < r; ) o in t && (i = n(i, t[o], o, t)), o++;
                      return i;
                    },
                  }),
                ("function" == typeof Window && re(Window)) ||
                  ("function" == typeof window.constructor &&
                    re(window.constructor) &&
                    (window.Window = window.constructor)),
                null == window.Reflect && (window.Reflect = {}),
                "function" != typeof Reflect.get &&
                  Object.defineProperty(Reflect, "get", {
                    value: (e, n) => e[n],
                  }),
                "function" != typeof Reflect.set &&
                  Object.defineProperty(Reflect, "set", {
                    value(e, n, t) {
                      e[n] = t;
                    },
                  }),
                (t.p = oe(e)),
                await te(),
                ne
              );
            })(e)),
          ae
        );
      }
      class ce {
        constructor(e) {
          if (((this.__mimetypes = []), (this.__named_mimetypes = {}), e))
            for (let n = 0; n < e.length; n++) this.install(e[n]);
        }
        install(e) {
          const n = this.__mimetypes.length;
          this.__mimetypes.push(e),
            (this.__named_mimetypes[e.type] = e),
            (this[e.type] = e),
            (this[n] = e);
        }
        item(e) {
          return this.__mimetypes[e];
        }
        namedItem(e) {
          return this.__named_mimetypes[e];
        }
        get length() {
          return this.__mimetypes.length;
        }
        [Symbol.iterator]() {
          return this.__mimetypes[Symbol.iterator]();
        }
      }
      class ue extends ce {
        constructor(e, n, t, r) {
          super(r),
            (this.name = e),
            (this.description = n),
            (this.filename = t);
        }
        install(e) {
          super.install(e);
        }
        [Symbol.iterator]() {
          return super[Symbol.iterator]();
        }
      }
      class le {
        constructor(e) {
          (this.__plugins = []), (this.__named_plugins = {});
          for (let n = 0; n < e.length; n++) this.install(e[n]);
        }
        install(e) {
          const n = this.__plugins.length;
          this.__plugins.push(e),
            (this.__named_plugins[e.name] = e),
            (this[e.name] = e),
            (this[n] = e);
        }
        item(e) {
          return this.__plugins[e];
        }
        namedItem(e) {
          return this.__named_plugins[e];
        }
        get length() {
          return this.__plugins.length;
        }
      }
      const fe = new ue(
        "Shockwave Flash",
        "Shockwave Flash 32.0 r0",
        "ruffle.js",
        null
      );
      fe.install({
        type: "application/futuresplash",
        description: "Shockwave Flash",
        suffixes: "spl",
        enabledPlugin: fe,
      }),
        fe.install({
          type: "application/x-shockwave-flash",
          description: "Shockwave Flash",
          suffixes: "swf",
          enabledPlugin: fe,
        }),
        fe.install({
          type: "application/x-shockwave-flash2-preview",
          description: "Shockwave Flash",
          suffixes: "swf",
          enabledPlugin: fe,
        }),
        fe.install({
          type: "application/vnd.adobe.flash-movie",
          description: "Shockwave Flash",
          suffixes: "swf",
          enabledPlugin: fe,
        });
      const _e = document.createElement("template");
      _e.innerHTML =
        '\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n\n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .menu_item.disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .menu_item:not(.disabled):hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" style="width:100%;height:100%;"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584" style="width:100%;height:100%;scale:0.8;"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" style="font-size:60px;fill:#FFF;stroke:#FFF;">Click to unmute</text></svg></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n';
      const de = {};
      function be(e, n) {
        if (void 0 !== de[e]) {
          if (de[e].class !== n)
            throw new Error("Internal naming conflict on " + e);
          return de[e].name;
        }
        let t = 0;
        if (void 0 !== window.customElements)
          for (; t < 999; ) {
            let r = e;
            if (
              (t > 0 && (r = r + "-" + t),
              void 0 === window.customElements.get(r))
            )
              return (
                window.customElements.define(r, n),
                (de[e] = { class: n, name: r, internalName: e }),
                r
              );
            t += 1;
          }
        throw new Error("Failed to assign custom element " + e);
      }
      const ge = "application/x-shockwave-flash",
        we = "application/futuresplash",
        pe = "application/x-shockwave-flash2-preview",
        he = "application/vnd.adobe.flash-movie",
        me = "https://ruffle.rs",
        ve = /^\s*(\d+(\.\d+)?(%)?)/;
      let ye = !1;
      function Ae(e) {
        if (null == e) return {};
        e instanceof URLSearchParams || (e = new URLSearchParams(e));
        const n = {};
        for (const [t, r] of e) n[t] = r.toString();
        return n;
      }
      class xe extends HTMLElement {
        constructor() {
          return (
            super(),
            (this.hasContextMenu = !1),
            (this.contextMenuForceDisabled = !1),
            (this.isTouch = !1),
            (this.showSwfDownload = !1),
            (this.panicked = !1),
            (this.isExtension = !1),
            (this.config = {}),
            (this.shadow = this.attachShadow({ mode: "open" })),
            this.shadow.appendChild(_e.content.cloneNode(!0)),
            (this.dynamicStyles = this.shadow.getElementById("dynamic_styles")),
            (this.container = this.shadow.getElementById("container")),
            (this.playButton = this.shadow.getElementById("play_button")),
            this.playButton &&
              this.playButton.addEventListener("click", () => this.play()),
            (this.unmuteOverlay = this.shadow.getElementById("unmute_overlay")),
            (this.contextMenuElement =
              this.shadow.getElementById("context-menu")),
            this.addEventListener(
              "contextmenu",
              this.showContextMenu.bind(this)
            ),
            this.addEventListener("pointerdown", this.pointerDown.bind(this)),
            this.addEventListener(
              "fullscreenchange",
              this.fullScreenChange.bind(this)
            ),
            this.addEventListener(
              "webkitfullscreenchange",
              this.fullScreenChange.bind(this)
            ),
            window.addEventListener("click", this.hideContextMenu.bind(this)),
            (this.instance = null),
            (this.options = null),
            (this.onFSCommand = null),
            (this._readyState = 0),
            (this._metadata = null),
            (this.lastActivePlayingState = !1),
            this.setupPauseOnTabHidden(),
            this
          );
        }
        get readyState() {
          return this._readyState;
        }
        get metadata() {
          return this._metadata;
        }
        setupPauseOnTabHidden() {
          document.addEventListener(
            "visibilitychange",
            () => {
              this.instance &&
                (document.hidden &&
                  ((this.lastActivePlayingState = this.instance.is_playing()),
                  this.instance.pause()),
                document.hidden ||
                  !0 !== this.lastActivePlayingState ||
                  this.instance.play());
            },
            !1
          );
        }
        connectedCallback() {
          this.updateStyles();
        }
        static get observedAttributes() {
          return ["width", "height"];
        }
        attributeChangedCallback(e, n, t) {
          ("width" !== e && "height" !== e) || this.updateStyles();
        }
        disconnectedCallback() {
          this.destroy();
        }
        updateStyles() {
          if (this.dynamicStyles.sheet) {
            if (this.dynamicStyles.sheet.rules)
              for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++)
                this.dynamicStyles.sheet.deleteRule(e);
            const e = this.attributes.getNamedItem("width");
            if (null != e) {
              const n = xe.htmlDimensionToCssDimension(e.value);
              null !== n &&
                this.dynamicStyles.sheet.insertRule(`:host { width: ${n}; }`);
            }
            const n = this.attributes.getNamedItem("height");
            if (null != n) {
              const e = xe.htmlDimensionToCssDimension(n.value);
              null !== e &&
                this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`);
            }
          }
        }
        isUnusedFallbackObject() {
          let e = this.parentNode;
          const n = (function (e) {
            const n = de[e];
            return void 0 !== n
              ? { internalName: e, name: n.name, class: n.class }
              : null;
          })("ruffle-object");
          if (null !== n)
            for (; e != document && null != e; ) {
              if (e.nodeName === n.name) return !0;
              e = e.parentNode;
            }
          return !1;
        }
        async ensureFreshInstance(e) {
          var n;
          this.destroy();
          const t = await se(e).catch((e) => {
            if (
              (console.error(`Serious error loading Ruffle: ${e}`),
              "file:" === window.location.protocol)
            )
              e.ruffleIndexError = 2;
            else {
              e.ruffleIndexError = 9;
              const n = String(e.message).toLowerCase();
              n.includes("mime")
                ? (e.ruffleIndexError = 8)
                : n.includes("networkerror") || n.includes("failed to fetch")
                ? (e.ruffleIndexError = 6)
                : n.includes("disallowed by embedder")
                ? (e.ruffleIndexError = 1)
                : "CompileError" === e.name
                ? (e.ruffleIndexError = 3)
                : n.includes("could not download wasm module") &&
                  "TypeError" === e.name
                ? (e.ruffleIndexError = 7)
                : "TypeError" === e.name && (e.ruffleIndexError = 5);
            }
            throw (this.panic(e), e);
          });
          if (
            ((this.instance = await new t(this.container, this, e)),
            console.log("New Ruffle instance created."),
            "running" !== this.audioState() &&
              ((this.container.style.visibility = "hidden"),
              await new Promise((e) => {
                window.setTimeout(() => {
                  e();
                }, 200);
              }),
              (this.container.style.visibility = "")),
            this.unmuteAudioContext(),
            "on" === e.autoplay ||
              ("off" !== e.autoplay && "running" === this.audioState()))
          ) {
            if ((this.play(), "running" !== this.audioState())) {
              "hidden" !== e.unmuteOverlay &&
                (this.unmuteOverlay.style.display = "block"),
                this.container.addEventListener(
                  "click",
                  this.unmuteOverlayClicked.bind(this),
                  { once: !0 }
                );
              const t =
                null === (n = this.instance) || void 0 === n
                  ? void 0
                  : n.audio_context();
              t &&
                (t.onstatechange = () => {
                  "running" === t.state && this.unmuteOverlayClicked(),
                    (t.onstatechange = null);
                });
            }
          } else this.playButton.style.display = "block";
        }
        destroy() {
          this.instance &&
            (this.instance.destroy(),
            (this.instance = null),
            (this._metadata = null),
            (this._readyState = 0),
            console.log("Ruffle instance destroyed."));
        }
        async load(e) {
          var n, t;
          let r = "";
          switch (typeof e) {
            case "string":
              e = { url: e };
              break;
            case "object":
              null === e
                ? (r = "Argument 0 must be a string or object")
                : "url" in e || "data" in e
                ? "url" in e &&
                  "string" != typeof e.url &&
                  (r = "`url` must be a string")
                : (r = "Argument 0 must contain a `url` or `data` key");
              break;
            default:
              r = "Argument 0 must be a string or object";
          }
          if (r.length > 0) {
            const e = new TypeError(r);
            throw ((e.ruffleIndexError = 4), this.panic(e), e);
          }
          if (this.isConnected && !this.isUnusedFallbackObject()) {
            if (!ke(this))
              try {
                const r = Object.assign(
                  Object.assign(
                    Object.assign(
                      {},
                      null !==
                        (t =
                          null === (n = window.RufflePlayer) || void 0 === n
                            ? void 0
                            : n.config) && void 0 !== t
                        ? t
                        : {}
                    ),
                    this.config
                  ),
                  e
                );
                if (
                  ((r.allowScriptAccess = e.allowScriptAccess),
                  (this.showSwfDownload = !0 === r.showSwfDownload),
                  (this.options = e),
                  (this.hasContextMenu = !1 !== r.contextMenu),
                  r.backgroundColor &&
                    (this.container.style.backgroundColor = r.backgroundColor),
                  await this.ensureFreshInstance(r),
                  "url" in e)
                ) {
                  console.log(`Loading SWF file ${e.url}`);
                  try {
                    this.swfUrl = new URL(e.url, document.location.href).href;
                  } catch (n) {
                    this.swfUrl = e.url;
                  }
                  const n = Object.assign(
                    Object.assign({}, Ae(e.url.substring(e.url.indexOf("?")))),
                    Ae(e.parameters)
                  );
                  this.instance.stream_from(this.swfUrl, n);
                } else
                  "data" in e &&
                    (console.log("Loading SWF data"),
                    this.instance.load_data(
                      new Uint8Array(e.data),
                      Ae(e.parameters)
                    ));
              } catch (e) {
                throw (
                  (console.error(
                    `Serious error occurred loading SWF file: ${e}`
                  ),
                  e)
                );
              }
          } else
            console.warn(
              "Ignoring attempt to play a disconnected or suspended Ruffle element"
            );
        }
        play() {
          this.instance &&
            (this.instance.play(),
            this.playButton && (this.playButton.style.display = "none"));
        }
        get fullscreenEnabled() {
          return !(
            !document.fullscreenEnabled && !document.webkitFullscreenEnabled
          );
        }
        get isFullscreen() {
          return (
            (document.fullscreenElement || document.webkitFullscreenElement) ===
            this
          );
        }
        setFullscreen(e) {
          this.fullscreenEnabled &&
            (e ? this.enterFullscreen() : this.exitFullscreen());
        }
        enterFullscreen() {
          const e = { navigationUI: "hide" };
          this.requestFullscreen
            ? this.requestFullscreen(e)
            : this.webkitRequestFullscreen
            ? this.webkitRequestFullscreen(e)
            : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e);
        }
        exitFullscreen() {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.webkitCancelFullScreen &&
              document.webkitCancelFullScreen();
        }
        fullScreenChange() {
          var e;
          null === (e = this.instance) ||
            void 0 === e ||
            e.set_fullscreen(this.isFullscreen);
        }
        pointerDown(e) {
          ("touch" !== e.pointerType && "pen" !== e.pointerType) ||
            (this.isTouch = !0);
        }
        async downloadSwf() {
          try {
            if (this.swfUrl) {
              console.log("Downloading SWF: " + this.swfUrl);
              const e = await fetch(this.swfUrl);
              if (!e.ok) return void console.error("SWF download failed");
              const n = await e.blob(),
                t = URL.createObjectURL(n),
                r = document.createElement("a");
              (r.style.display = "none"),
                (r.href = t),
                (r.download = this.swfUrl.substring(
                  this.swfUrl.lastIndexOf("/") + 1
                )),
                document.body.appendChild(r),
                r.click(),
                document.body.removeChild(r),
                URL.revokeObjectURL(t);
            } else console.error("SWF download failed");
          } catch (e) {
            console.error("SWF download failed");
          }
        }
        contextMenuItems() {
          const e = String.fromCharCode(10003),
            n = [];
          this.instance &&
            this.instance.prepare_context_menu().forEach((t, r) => {
              t.separatorBefore && n.push(null),
                n.push({
                  text: t.caption + (t.checked ? ` (${e})` : ""),
                  onClick: () => {
                    var e;
                    return null === (e = this.instance) || void 0 === e
                      ? void 0
                      : e.run_context_menu_callback(r);
                  },
                  enabled: t.enabled,
                });
            }),
            n.push(null),
            this.fullscreenEnabled &&
              (this.isFullscreen
                ? n.push({
                    text: "Exit fullscreen",
                    onClick: () => {
                      var e;
                      return null === (e = this.instance) || void 0 === e
                        ? void 0
                        : e.set_fullscreen(!1);
                    },
                  })
                : n.push({
                    text: "Enter fullscreen",
                    onClick: () => {
                      var e;
                      return null === (e = this.instance) || void 0 === e
                        ? void 0
                        : e.set_fullscreen(!0);
                    },
                  })),
            this.instance &&
              this.swfUrl &&
              this.showSwfDownload &&
              (n.push(null),
              n.push({
                text: "Download .swf",
                onClick: this.downloadSwf.bind(this),
              })),
            n.push(null);
          const t = this.isExtension ? "extension" : "";
          return (
            n.push({
              text: `About Ruffle ${t} (nightly 2021-12-28)`,
              onClick() {
                window.open(me, "_blank");
              },
            }),
            this.isTouch &&
              (n.push(null),
              n.push({
                text: "Hide this menu",
                onClick: () => (this.contextMenuForceDisabled = !0),
              })),
            n
          );
        }
        showContextMenu(e) {
          if (
            (e.preventDefault(),
            !this.hasContextMenu || this.contextMenuForceDisabled)
          )
            return;
          for (; this.contextMenuElement.firstChild; )
            this.contextMenuElement.removeChild(
              this.contextMenuElement.firstChild
            );
          for (const e of this.contextMenuItems())
            if (null === e) {
              if (!this.contextMenuElement.lastElementChild) continue;
              if (
                this.contextMenuElement.lastElementChild.classList.contains(
                  "menu_separator"
                )
              )
                continue;
              const e = document.createElement("li");
              e.className = "menu_separator";
              const n = document.createElement("hr");
              e.appendChild(n), this.contextMenuElement.appendChild(e);
            } else {
              const { text: n, onClick: t, enabled: r } = e,
                i = document.createElement("li");
              (i.className = "menu_item"),
                (i.textContent = n),
                this.contextMenuElement.appendChild(i),
                !1 !== r
                  ? i.addEventListener("click", t)
                  : i.classList.add("disabled");
            }
          (this.contextMenuElement.style.left = "0"),
            (this.contextMenuElement.style.top = "0"),
            (this.contextMenuElement.style.display = "block");
          const n = this.getBoundingClientRect(),
            t = e.clientX - n.x,
            r = e.clientY - n.y,
            i = n.width - this.contextMenuElement.clientWidth - 1,
            o = n.height - this.contextMenuElement.clientHeight - 1;
          (this.contextMenuElement.style.left =
            Math.floor(Math.min(t, i)) + "px"),
            (this.contextMenuElement.style.top =
              Math.floor(Math.min(r, o)) + "px");
        }
        hideContextMenu() {
          var e;
          null === (e = this.instance) ||
            void 0 === e ||
            e.clear_custom_menu_items(),
            (this.contextMenuElement.style.display = "none");
        }
        pause() {
          this.instance &&
            (this.instance.pause(),
            this.playButton && (this.playButton.style.display = "block"));
        }
        audioState() {
          if (this.instance) {
            const e = this.instance.audio_context();
            return (e && e.state) || "running";
          }
          return "suspended";
        }
        unmuteOverlayClicked() {
          if (this.instance) {
            if ("running" !== this.audioState()) {
              const e = this.instance.audio_context();
              e && e.resume();
            }
            this.unmuteOverlay && (this.unmuteOverlay.style.display = "none");
          }
        }
        unmuteAudioContext() {
          ye ||
            (navigator.maxTouchPoints < 1
              ? (ye = !0)
              : this.container.addEventListener(
                  "click",
                  () => {
                    var e;
                    if (ye) return;
                    const n =
                      null === (e = this.instance) || void 0 === e
                        ? void 0
                        : e.audio_context();
                    if (!n) return;
                    const t = new Audio();
                    (t.src = (() => {
                      const e = new ArrayBuffer(10),
                        t = new DataView(e),
                        r = n.sampleRate;
                      return (
                        t.setUint32(0, r, !0),
                        t.setUint32(4, r, !0),
                        t.setUint16(8, 1, !0),
                        `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window
                          .btoa(String.fromCharCode(...new Uint8Array(e)))
                          .slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
                      );
                    })()),
                      t.load(),
                      t
                        .play()
                        .then(() => {
                          ye = !0;
                        })
                        .catch((e) => {
                          console.warn(`Failed to play dummy sound: ${e}`);
                        });
                  },
                  { once: !0 }
                ));
        }
        copyElement(e) {
          if (e) {
            for (let n = 0; n < e.attributes.length; n++) {
              const t = e.attributes[n];
              if (t.specified) {
                if ("title" === t.name && "Adobe Flash Player" === t.value)
                  continue;
                try {
                  this.setAttribute(t.name, t.value);
                } catch (e) {
                  console.warn(
                    `Unable to set attribute ${t.name} on Ruffle instance`
                  );
                }
              }
            }
            for (const n of Array.from(e.children)) this.appendChild(n);
          }
        }
        static htmlDimensionToCssDimension(e) {
          if (e) {
            const n = e.match(ve);
            if (n) {
              let e = n[1];
              return n[3] || (e += "px"), e;
            }
          }
          return null;
        }
        onCallbackAvailable(e) {
          const n = this.instance;
          this[e] = (...t) =>
            null == n ? void 0 : n.call_exposed_callback(e, t);
        }
        set traceObserver(e) {
          var n;
          null === (n = this.instance) ||
            void 0 === n ||
            n.set_trace_observer(e);
        }
        panic(e) {
          var n;
          if (this.panicked) return;
          if (
            ((this.panicked = !0),
            e instanceof Error &&
              ("AbortError" === e.name || e.message.includes("AbortError")))
          )
            return;
          const t =
              null !== (n = null == e ? void 0 : e.ruffleIndexError) &&
              void 0 !== n
                ? n
                : 0,
            r = Object.assign([], { stackIndex: -1 });
          if ((r.push("# Error Info\n"), e instanceof Error)) {
            if (
              (r.push(`Error name: ${e.name}\n`),
              r.push(`Error message: ${e.message}\n`),
              e.stack)
            ) {
              const n =
                r.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
              r.stackIndex = n;
            }
          } else r.push(`Error: ${e}\n`);
          r.push("\n# Player Info\n"),
            r.push(this.debugPlayerInfo()),
            r.push("\n# Page Info\n"),
            r.push(`Page URL: ${document.location.href}\n`),
            this.swfUrl && r.push(`SWF URL: ${this.swfUrl}\n`),
            r.push("\n# Browser Info\n"),
            r.push(`Useragent: ${window.navigator.userAgent}\n`),
            r.push(`OS: ${window.navigator.platform}\n`),
            r.push("\n# Ruffle Info\n"),
            r.push("Version: 0.1.0\n"),
            r.push("Name: nightly 2021-12-28\n"),
            r.push("Channel: nightly\n"),
            r.push("Built: 2021-12-28T00:12:10.643Z\n"),
            r.push("Commit: dc8ba4ee597982ed97b7c0ce5b75f1ba5e69289e\n"),
            r.push(`Is extension: ${this.isExtension}\n`);
          const i = r.join(""),
            o = document.location.href.split(/[?#]/)[0];
          let a,
            s,
            c = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(
              `Error on ${o}`
            )}&labels=error-report&body=`,
            u = encodeURIComponent(i);
          switch (
            (r.stackIndex > -1 &&
              String(c + u).length > 8195 &&
              ((r[r.stackIndex] = null), (u = encodeURIComponent(r.join("")))),
            (c += u),
            t)
          ) {
            case 2:
              (a =
                '\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                '),
                (s = `\n                    <li><a target="_top" href="${me}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `);
              break;
            case 4:
              (a =
                "\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                "),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 9:
              (a =
                '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 8:
              (a =
                '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 10:
              (a =
                "\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>You are probably blocking it wit AdBlock/Ublock or Umatrix.</p>\n                    <p>This page doesnt have any ads.</p>\n                "),
                (s =
                  '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 6:
              (a =
                '\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>You are probably blocking it wit AdBlock/Ublock or Umatrix</p>\n                    <p>This page doesnt have any ads.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 3:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>You are probably blocking it wit AdBlock/Ublock or Umatrix.</p>\n                    <p>This page doesnt have any ads.</p>\n                "),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 7:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This can often resolve itself, so you can try reloading the page.</p>\n                    <p>Otherwise, please contact the website administrator.</p>\n                "),
                (s =
                  '\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            case 5:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                "),
                (s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `);
              break;
            case 1:
              (a =
                '\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
                (s =
                  '\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
              break;
            default:
              (a =
                "\n                    <p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>\n                    <p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>\n                "),
                (s = `\n                    <li><a target="_top" href="${c}">Report Bug</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `);
          }
          this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${a}</div>\n                <div id="panic-footer">\n                    <ul>${s}</ul>\n                </div>\n            </div>\n        `;
          const l = this.container.querySelector("#panic-view-details");
          l &&
            (l.onclick = () => {
              const e = this.container.querySelector("#panic-body");
              return (
                e.classList.add("details"),
                (e.innerHTML = `<textarea>${i}</textarea>`),
                !1
              );
            }),
            this.destroy();
        }
        displayRootMovieDownloadFailedMessage() {
          const e = new URL(this.swfUrl);
          if (
            window.location.origin == e.origin ||
            !this.isExtension ||
            !window.location.protocol.includes("http")
          ) {
            const e = new Error("Failed to fetch: " + this.swfUrl);
            return (e.ruffleIndexError = 10), void this.panic(e);
          }
          const n = document.createElement("div");
          (n.id = "message_overlay"),
            (n.innerHTML = `<div class="message">\n            <p>Ruffle wasn't able to run the Flash embedded in this page.</p>\n            <p>You can try to open the file in a separate tab, to sidestep this issue.</p>\n            <div>\n                <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>\n            </div>\n        </div>`),
            this.container.prepend(n);
        }
        displayUnsupportedMessage() {
          const e = document.createElement("div");
          (e.id = "message_overlay"),
            (e.innerHTML =
              '<div class="message">\n            <p>Flash Player has been removed from browsers in 2021.</p>\n            <p>This content is not yet supported by the Ruffle emulator and will likely not run as intended.</p>\n            <div>\n                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>'),
            this.container.prepend(e),
            (e.querySelector("#run-anyway-btn").onclick = () => {
              e.parentNode.removeChild(e);
            });
        }
        displayMessage(e) {
          const n = document.createElement("div");
          (n.id = "message_overlay"),
            (n.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`),
            this.container.prepend(n),
            (this.container.querySelector("#continue-btn").onclick = () => {
              n.parentNode.removeChild(n);
            });
        }
        debugPlayerInfo() {
          var e, n;
          return `Allows script access: ${
            null !==
              (n =
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.allowScriptAccess) &&
            void 0 !== n &&
            n
          }\n`;
        }
        setMetadata(e) {
          (this._metadata = e),
            (this._readyState = 2),
            this.dispatchEvent(new Event(xe.LOADED_METADATA)),
            this.dispatchEvent(new Event(xe.LOADED_DATA));
        }
        setIsExtension(e) {
          this.isExtension = e;
        }
      }
      function Ce(e, n) {
        switch ((e || (e = "sameDomain"), e.toLowerCase())) {
          case "always":
            return !0;
          case "never":
            return !1;
          default:
            try {
              return (
                new URL(window.location.href).origin ===
                new URL(n, window.location.href).origin
              );
            } catch (e) {
              return !1;
            }
        }
      }
      function Ie(e) {
        return null === e || "true" === e.toLowerCase();
      }
      function Ee(e) {
        if (e) {
          let n = "";
          try {
            n = new URL(e, me).pathname;
          } catch (e) {}
          if (n && n.length >= 4) {
            const e = n.slice(-4).toLowerCase();
            if (".swf" === e || ".spl" === e) return !0;
          }
        }
        return !1;
      }
      function ke(e) {
        let n = e.parentElement;
        for (; null !== n; ) {
          switch (n.tagName) {
            case "AUDIO":
            case "VIDEO":
              return !0;
          }
          n = n.parentElement;
        }
        return !1;
      }
      (xe.LOADED_METADATA = "loadedmetadata"), (xe.LOADED_DATA = "loadeddata");
      class Se extends xe {
        constructor() {
          super();
        }
        connectedCallback() {
          var e, n, t, r, i, o, a, s, c, u, l, f, _;
          super.connectedCallback();
          const d = this.attributes.getNamedItem("src");
          if (d) {
            const b =
                null !==
                  (n =
                    null ===
                      (e = this.attributes.getNamedItem("allowScriptAccess")) ||
                    void 0 === e
                      ? void 0
                      : e.value) && void 0 !== n
                  ? n
                  : null,
              g =
                null !==
                  (r =
                    null === (t = this.attributes.getNamedItem("menu")) ||
                    void 0 === t
                      ? void 0
                      : t.value) && void 0 !== r
                  ? r
                  : null;
            this.load({
              url: d.value,
              allowScriptAccess: Ce(b, d.value),
              parameters:
                null === (i = this.attributes.getNamedItem("flashvars")) ||
                void 0 === i
                  ? void 0
                  : i.value,
              backgroundColor:
                null === (o = this.attributes.getNamedItem("bgcolor")) ||
                void 0 === o
                  ? void 0
                  : o.value,
              base:
                null === (a = this.attributes.getNamedItem("base")) ||
                void 0 === a
                  ? void 0
                  : a.value,
              menu: Ie(g),
              salign:
                null !==
                  (c =
                    null === (s = this.attributes.getNamedItem("salign")) ||
                    void 0 === s
                      ? void 0
                      : s.value) && void 0 !== c
                  ? c
                  : "",
              quality:
                null !==
                  (l =
                    null === (u = this.attributes.getNamedItem("quality")) ||
                    void 0 === u
                      ? void 0
                      : u.value) && void 0 !== l
                  ? l
                  : "high",
              scale:
                null !==
                  (_ =
                    null === (f = this.attributes.getNamedItem("scale")) ||
                    void 0 === f
                      ? void 0
                      : f.value) && void 0 !== _
                  ? _
                  : "showAll",
            });
          }
        }
        get src() {
          var e;
          return null === (e = this.attributes.getNamedItem("src")) ||
            void 0 === e
            ? void 0
            : e.value;
        }
        set src(e) {
          if (null != e) {
            const n = document.createAttribute("src");
            (n.value = e), this.attributes.setNamedItem(n);
          } else this.attributes.removeNamedItem("src");
        }
        static get observedAttributes() {
          return ["src", "width", "height"];
        }
        attributeChangedCallback(e, n, t) {
          var r;
          if (
            (super.attributeChangedCallback(e, n, t),
            this.isConnected && "src" === e)
          ) {
            let e;
            const n = this.attributes.getNamedItem("flashvars");
            n && (e = n.value);
            const t = this.attributes.getNamedItem("src");
            t &&
              this.load({
                url: t.value,
                parameters: e,
                base:
                  null === (r = this.attributes.getNamedItem("base")) ||
                  void 0 === r
                    ? void 0
                    : r.value,
              });
          }
        }
        static isInterdictable(e) {
          var n;
          if (ke(e)) return !1;
          if (!e.getAttribute("src")) return !1;
          const t =
            null === (n = e.getAttribute("type")) || void 0 === n
              ? void 0
              : n.toLowerCase();
          return (
            t === ge.toLowerCase() ||
            t === we.toLowerCase() ||
            t === pe.toLowerCase() ||
            t === he.toLowerCase() ||
            ((null == t || "" === t) && Ee(e.getAttribute("src")))
          );
        }
        static fromNativeEmbedElement(e) {
          const n = be("ruffle-embed", Se),
            t = document.createElement(n);
          return t.copyElement(e), t;
        }
      }
      function Be(e, n, t) {
        n = n.toLowerCase();
        for (const t in e)
          if (Object.hasOwnProperty.call(e, t) && n === t.toLowerCase())
            return e[t];
        return t;
      }
      function Re(e) {
        var n, t;
        const r = {};
        for (const i of e.children)
          if (i instanceof HTMLParamElement) {
            const e =
                null === (n = i.attributes.getNamedItem("name")) || void 0 === n
                  ? void 0
                  : n.value,
              o =
                null === (t = i.attributes.getNamedItem("value")) ||
                void 0 === t
                  ? void 0
                  : t.value;
            e && o && (r[e] = o);
          }
        return r;
      }
      class Pe extends xe {
        constructor() {
          super(), (this.params = {});
        }
        connectedCallback() {
          var e;
          super.connectedCallback(), (this.params = Re(this));
          let n = null;
          this.attributes.getNamedItem("data")
            ? (n =
                null === (e = this.attributes.getNamedItem("data")) ||
                void 0 === e
                  ? void 0
                  : e.value)
            : this.params.movie && (n = this.params.movie);
          const t = Be(this.params, "allowScriptAccess", null),
            r = Be(this.params, "flashvars", this.getAttribute("flashvars")),
            i = Be(this.params, "bgcolor", this.getAttribute("bgcolor")),
            o = Be(this.params, "base", this.getAttribute("base")),
            a = Be(this.params, "menu", null),
            s = Be(this.params, "salign", ""),
            c = Be(this.params, "quality", "high"),
            u = Be(this.params, "scale", "showAll");
          if (n) {
            const e = { url: n };
            (e.allowScriptAccess = Ce(t, n)),
              r && (e.parameters = r),
              i && (e.backgroundColor = i),
              o && (e.base = o),
              (e.menu = Ie(a)),
              s && (e.salign = s),
              c && (e.quality = c),
              u && (e.scale = u),
              this.load(e);
          }
        }
        debugPlayerInfo() {
          var e;
          let n = super.debugPlayerInfo();
          n += "Player type: Object\n";
          let t = null;
          return (
            this.attributes.getNamedItem("data")
              ? (t =
                  null === (e = this.attributes.getNamedItem("data")) ||
                  void 0 === e
                    ? void 0
                    : e.value)
              : this.params.movie && (t = this.params.movie),
            (n += `SWF URL: ${t}\n`),
            Object.keys(this.params).forEach((e) => {
              n += `Param ${e}: ${this.params[e]}\n`;
            }),
            Object.keys(this.attributes).forEach((e) => {
              var t;
              n += `Attribute ${e}: ${
                null === (t = this.attributes.getNamedItem(e)) || void 0 === t
                  ? void 0
                  : t.value
              }\n`;
            }),
            n
          );
        }
        get data() {
          return this.getAttribute("data");
        }
        set data(e) {
          if (null != e) {
            const n = document.createAttribute("data");
            (n.value = e), this.attributes.setNamedItem(n);
          } else this.attributes.removeNamedItem("data");
        }
        static isInterdictable(e) {
          var n, t, r;
          if (ke(e)) return !1;
          if (e.getElementsByTagName("ruffle-embed").length > 0) return !1;
          const i =
              null === (n = e.attributes.getNamedItem("data")) || void 0 === n
                ? void 0
                : n.value.toLowerCase(),
            o = Re(e);
          let a;
          if (i) a = Ee(i);
          else {
            if (!o || !o.movie) return !1;
            a = Ee(o.movie);
          }
          const s =
            null === (t = e.attributes.getNamedItem("classid")) || void 0 === t
              ? void 0
              : t.value.toLowerCase();
          if (s === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase())
            return !Array.from(e.getElementsByTagName("embed")).some(
              Se.isInterdictable
            );
          if (null != s && "" !== s) return !1;
          const c =
            null === (r = e.attributes.getNamedItem("type")) || void 0 === r
              ? void 0
              : r.value.toLowerCase();
          return (
            c === ge.toLowerCase() ||
            c === we.toLowerCase() ||
            c === pe.toLowerCase() ||
            c === he.toLowerCase() ||
            ((null == c || "" === c) && a)
          );
        }
        static fromNativeObjectElement(e) {
          const n = be("ruffle-object", Pe),
            t = document.createElement(n);
          for (const n of Array.from(e.getElementsByTagName("embed")))
            Se.isInterdictable(n) && n.remove();
          for (const n of Array.from(e.getElementsByTagName("object")))
            Pe.isInterdictable(n) && n.remove();
          return t.copyElement(e), t;
        }
      }
      var Fe, Te;
      let Le;
      const Me =
          null !==
            (Te =
              null === (Fe = window.RufflePlayer) || void 0 === Fe
                ? void 0
                : Fe.config) && void 0 !== Te
            ? Te
            : {},
        Oe = oe(Me) + "ruffle.js";
      let je, De, Ue, Ne;
      function We() {
        try {
          (je = null != je ? je : document.getElementsByTagName("object")),
            (De = null != De ? De : document.getElementsByTagName("embed"));
          for (const e of Array.from(je))
            if (Pe.isInterdictable(e)) {
              const n = Pe.fromNativeObjectElement(e);
              n.setIsExtension(Le), e.replaceWith(n);
            }
          for (const e of Array.from(De))
            if (Se.isInterdictable(e)) {
              const n = Se.fromNativeEmbedElement(e);
              n.setIsExtension(Le), e.replaceWith(n);
            }
        } catch (e) {
          console.error(
            `Serious error encountered when polyfilling native Flash elements: ${e}`
          );
        }
      }
      function Ve() {
        (Ue = null != Ue ? Ue : document.getElementsByTagName("iframe")),
          (Ne = null != Ne ? Ne : document.getElementsByTagName("frame")),
          [Ue, Ne].forEach((e) => {
            for (let n = 0; n < e.length; n++) {
              const t = e[n];
              if (void 0 !== t.dataset.rufflePolyfilled) continue;
              t.dataset.rufflePolyfilled = "";
              const r = t.contentWindow,
                i = `Couldn't load Ruffle into ${t.tagName}[${t.src}]: `;
              try {
                "complete" === r.document.readyState && qe(r, i);
              } catch (e) {
                Le || console.warn(i + e);
              }
              t.addEventListener(
                "load",
                () => {
                  qe(r, i);
                },
                !1
              );
            }
          });
      }
      async function qe(e, n) {
        var t;
        let r;
        await new Promise((e) => {
          window.setTimeout(() => {
            e();
          }, 100);
        });
        try {
          if (((r = e.document), !r)) return;
        } catch (e) {
          return void (Le || console.warn(n + e));
        }
        if (Le || void 0 === r.documentElement.dataset.ruffleOptout)
          if (Le)
            e.RufflePlayer || (e.RufflePlayer = {}),
              (e.RufflePlayer.config = Object.assign(
                Object.assign({}, Me),
                null !== (t = e.RufflePlayer.config) && void 0 !== t ? t : {}
              ));
          else if (!e.RufflePlayer) {
            const n = r.createElement("script");
            n.setAttribute("src", Oe),
              (n.onload = () => {
                (e.RufflePlayer = {}), (e.RufflePlayer.config = Me);
              }),
              r.head.appendChild(n);
          }
      }
      class $e {
        constructor(e, n, t, r, i) {
          (this.major = e),
            (this.minor = n),
            (this.patch = t),
            (this.prIdent = r),
            (this.buildIdent = i);
        }
        static fromSemver(e) {
          const n = e.split("+"),
            t = n[0].split("-"),
            r = t[0].split("."),
            i = parseInt(r[0], 10);
          let o = 0,
            a = 0,
            s = null,
            c = null;
          return (
            null != r[1] && (o = parseInt(r[1], 10)),
            null != r[2] && (a = parseInt(r[2], 10)),
            null != t[1] && (s = t[1].split(".")),
            null != n[1] && (c = n[1].split(".")),
            new $e(i, o, a, s, c)
          );
        }
        isCompatibleWith(e) {
          return (
            (0 !== this.major && this.major === e.major) ||
            (0 === this.major &&
              0 === e.major &&
              0 !== this.minor &&
              this.minor === e.minor) ||
            (0 === this.major &&
              0 === e.major &&
              0 === this.minor &&
              0 === e.minor &&
              0 !== this.patch &&
              this.patch === e.patch)
          );
        }
        hasPrecedenceOver(e) {
          if (this.major > e.major) return !0;
          if (this.major < e.major) return !1;
          if (this.minor > e.minor) return !0;
          if (this.minor < e.minor) return !1;
          if (this.patch > e.patch) return !0;
          if (this.patch < e.patch) return !1;
          if (null == this.prIdent && null != e.prIdent) return !0;
          if (null != this.prIdent && null != e.prIdent) {
            const n = /^[0-9]*$/;
            for (
              let t = 0;
              t < this.prIdent.length && t < e.prIdent.length;
              t += 1
            ) {
              if (!n.test(this.prIdent[t]) && n.test(e.prIdent[t])) return !0;
              if (n.test(this.prIdent[t]) && n.test(e.prIdent[t])) {
                if (parseInt(this.prIdent[t], 10) > parseInt(e.prIdent[t], 10))
                  return !0;
                if (parseInt(this.prIdent[t], 10) < parseInt(e.prIdent[t], 10))
                  return !1;
              } else {
                if (n.test(this.prIdent[t]) && !n.test(e.prIdent[t])) return !1;
                if (!n.test(this.prIdent[t]) && !n.test(e.prIdent[t])) {
                  if (this.prIdent[t] > e.prIdent[t]) return !0;
                  if (this.prIdent[t] < e.prIdent[t]) return !1;
                }
              }
            }
            return this.prIdent.length > e.prIdent.length;
          }
          return !1;
        }
        isEqual(e) {
          return (
            this.major === e.major &&
            this.minor === e.minor &&
            this.patch === e.patch
          );
        }
        isStableOrCompatiblePrerelease(e) {
          return (
            null == e.prIdent ||
            (this.major === e.major &&
              this.minor === e.minor &&
              this.patch === e.patch)
          );
        }
      }
      class ze {
        constructor(e) {
          this.requirements = e;
        }
        satisfiedBy(e) {
          for (let n = 0; n < this.requirements.length; n += 1) {
            let t = !0;
            for (let r = 0; r < this.requirements[n].length; r += 1) {
              const i = this.requirements[n][r].comparator,
                o = this.requirements[n][r].version;
              (t = t && o.isStableOrCompatiblePrerelease(e)),
                "" === i || "=" === i
                  ? (t = t && o.isEqual(e))
                  : ">" === i
                  ? (t = t && e.hasPrecedenceOver(o))
                  : ">=" === i
                  ? (t = t && (e.hasPrecedenceOver(o) || o.isEqual(e)))
                  : "<" === i
                  ? (t = t && o.hasPrecedenceOver(e))
                  : "<=" === i
                  ? (t = t && (o.hasPrecedenceOver(e) || o.isEqual(e)))
                  : "^" === i && (t = t && o.isCompatibleWith(e));
            }
            if (t) return !0;
          }
          return !1;
        }
        static fromRequirementString(e) {
          const n = e.split(" ");
          let t = [];
          const r = [];
          for (let e = 0; e < n.length; e += 1)
            if ("||" === n[e]) t.length > 0 && (r.push(t), (t = []));
            else if (n[e].length > 0) {
              const r = /[0-9]/.exec(n[e]);
              if (r) {
                const i = n[e].slice(0, r.index).trim(),
                  o = $e.fromSemver(n[e].slice(r.index).trim());
                t.push({ comparator: i, version: o });
              }
            }
          return t.length > 0 && r.push(t), new ze(r);
        }
      }
      class Ge {
        constructor(e) {
          (this.sources = {}),
            (this.config = {}),
            (this.invoked = !1),
            (this.newestName = null),
            (this.conflict = null),
            null != e &&
              (e instanceof Ge
                ? ((this.sources = e.sources),
                  (this.config = e.config),
                  (this.invoked = e.invoked),
                  (this.conflict = e.conflict),
                  (this.newestName = e.newestName),
                  e.superseded())
                : e.constructor === Object && e.config instanceof Object
                ? (this.config = e.config)
                : (this.conflict = e)),
            "loading" === document.readyState
              ? window.addEventListener(
                  "DOMContentLoaded",
                  this.init.bind(this)
                )
              : window.setTimeout(this.init.bind(this), 0);
        }
        get version() {
          return "0.1.0";
        }
        registerSource(e, n) {
          this.sources[e] = n;
        }
        newestSourceName() {
          let e = null,
            n = $e.fromSemver("0.0.0");
          for (const t in this.sources)
            if (Object.prototype.hasOwnProperty.call(this.sources, t)) {
              const r = $e.fromSemver(this.sources[t].version);
              r.hasPrecedenceOver(n) && ((e = t), (n = r));
            }
          return e;
        }
        init() {
          if (!this.invoked) {
            if (
              ((this.invoked = !0),
              (this.newestName = this.newestSourceName()),
              null === this.newestName)
            )
              throw new Error("No registered Ruffle source!");
            !1 !== this.config.polyfills &&
              this.sources[this.newestName].polyfill(
                "extension" === this.newestName
              );
          }
        }
        newest() {
          const e = this.newestSourceName();
          return null != e ? this.sources[e] : null;
        }
        satisfying(e) {
          const n = ze.fromRequirementString(e);
          let t = null;
          for (const e in this.sources)
            if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
              const r = $e.fromSemver(this.sources[e].version);
              n.satisfiedBy(r) && (t = this.sources[e]);
            }
          return t;
        }
        localCompatible() {
          return void 0 !== this.sources.local
            ? this.satisfying("^" + this.sources.local.version)
            : this.newest();
        }
        local() {
          return void 0 !== this.sources.local
            ? this.satisfying("=" + this.sources.local.version)
            : this.newest();
        }
        superseded() {
          this.invoked = !0;
        }
        static negotiate(e, n, t) {
          let r;
          return (
            (r = e instanceof Ge ? e : new Ge(e)),
            void 0 !== n &&
              void 0 !== t &&
              (r.registerSource(n, t),
              !1 !== r.config.polyfills && t.pluginPolyfill()),
            r
          );
        }
      }
      window.RufflePlayer = Ge.negotiate(
        window.RufflePlayer,
        "local",
        new (class {
          constructor(e) {
            this.name = e;
          }
          get version() {
            return "0.1.0";
          }
          polyfill(e) {
            !(function (e) {
              (Le = e),
                We(),
                Ve(),
                new MutationObserver(function (e) {
                  e.some((e) => e.addedNodes.length > 0) && (We(), Ve());
                }).observe(document, { childList: !0, subtree: !0 });
            })(e);
          }
          pluginPolyfill() {
            !(function (e) {
              ("install" in navigator.plugins && navigator.plugins.install) ||
                Object.defineProperty(navigator, "plugins", {
                  value: new le(navigator.plugins),
                  writable: !1,
                }),
                navigator.plugins.install(e),
                !(e.length > 0) ||
                  ("install" in navigator.mimeTypes &&
                    navigator.mimeTypes.install) ||
                  Object.defineProperty(navigator, "mimeTypes", {
                    value: new ce(navigator.mimeTypes),
                    writable: !1,
                  });
              const n = navigator.mimeTypes;
              for (let t = 0; t < e.length; t += 1) n.install(e[t]);
            })(fe);
          }
          createPlayer() {
            const e = be("ruffle-player", xe);
            return document.createElement(e);
          }
        })("local")
      );
      const He = window.RufflePlayer.newest();
      let Qe;
      const Ye = document.getElementById("main"),
        Je = document.getElementById("overlay"),
        Ze = document.getElementById("prompt"),
        Xe = document.getElementById("author-container"),
        Ke = document.getElementById("author"),
        en = document.getElementById("sample-swfs-container"),
        nn = document.getElementById("local-file"),
        tn = document.getElementById("sample-swfs"),
        rn = {
          Mod: document.getElementById("mods-optgroup"),
          Official: document.getElementById("official-optgroup"),
        },
        on = { letterbox: "on", logLevel: "warn" };
      function an() {
        Qe && Qe.remove(), Ze.classList.remove("hidden");
      }
      function sn(e) {
        an(),
          Ze.classList.add("hidden"),
          (Qe = He.createPlayer()),
          (Qe.id = "player"),
          Ye.append(Qe),
          Qe.load(e);
      }
      function cn() {
        (tn.selectedIndex = 0),
          Xe.classList.add("hidden"),
          (Ke.textContent = ""),
          (Ke.href = "");
      }
      async function un(e) {
        e && (cn(), sn({ data: await new Response(e).arrayBuffer(), ...on }));
      }
      function ln() {
        const e = tn[tn.selectedIndex].swfData;
        e
          ? ((function (e) {
              Xe.classList.remove("hidden"),
                (Ke.textContent = e.author),
                (Ke.href = e.authorLink),
                (nn.value = null);
            })(e),
            sn({ url: e.location, ...on }))
          : (cn(), an());
      }
      nn.addEventListener("change", (e) => {
        un(e.target.files[0]);
      }),
        tn.addEventListener("change", () => ln()),
        Ye.addEventListener("dragenter", (e) => {
          e.stopPropagation(), e.preventDefault();
        }),
        Ye.addEventListener("dragleave", (e) => {
          e.stopPropagation(), e.preventDefault(), Je.classList.remove("drag");
        }),
        Ye.addEventListener("dragover", (e) => {
          e.stopPropagation(), e.preventDefault(), Je.classList.add("drag");
        }),
        Ye.addEventListener("drop", (e) => {
          e.stopPropagation(),
            e.preventDefault(),
            Je.classList.remove("drag"),
            (nn.files = e.dataTransfer.files),
            un(e.dataTransfer.files[0]);
        }),
        nn.addEventListener("dragleave", (e) => {
          e.stopPropagation(), e.preventDefault(), Je.classList.remove("drag");
        }),
        nn.addEventListener("dragover", (e) => {
          e.stopPropagation(), e.preventDefault(), Je.classList.add("drag");
        }),
        nn.addEventListener("drop", (e) => {
          e.stopPropagation(),
            e.preventDefault(),
            Je.classList.remove("drag"),
            (nn.files = e.dataTransfer.files),
            un(e.dataTransfer.files[0]);
        }),
        window.addEventListener("load", () => {
          (navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPhone/i)) &&
            nn.removeAttribute("accept"),
            Je.classList.remove("hidden");
        }),
        (async () => {
          const e = await fetch("swfs.json");
          if (!e.ok) return;
          const n = await e.json();
          for (const e of n.swfs) {
            const n = document.createElement("option");
            (n.textContent = e.title),
              (n.value = e.location),
              (n.swfData = e),
              rn[e.type].append(n);
          }
          en.classList.remove("hidden");
          const t = new URL(window.location).searchParams.get("file");
          if (t) {
            const e = Array.from(tn.options);
            (tn.selectedIndex = Math.max(
              e.findIndex((e) => e.value.endsWith(t)),
              0
            )),
              ln();
          }
        })();
    })();
})();
//# sourceMappingURL=index.js.map
