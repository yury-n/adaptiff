!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports._vantaEffect = t())
    : (e._vantaEffect = t());
})("undefined" != typeof self ? self : this, function() {
  return (function(e) {
    var t = {};
    function i(s) {
      if (t[s]) return t[s].exports;
      var n = (t[s] = { i: s, l: !1, exports: {} });
      return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
      }),
      (i.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function(e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (
          (i.r(s),
          Object.defineProperty(s, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var n in e)
            i.d(
              s,
              n,
              function(t) {
                return e[t];
              }.bind(null, n)
            );
        return s;
      }),
      (i.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = ""),
      i((i.s = 14))
    );
  })({
    0: function(e, t, i) {
      "use strict";
      function s(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e;
      }
      function n() {
        return (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth < 600
        );
      }
      i.d(t, "c", function() {
        return s;
      }),
        i.d(t, "d", function() {
          return n;
        }),
        i.d(t, "h", function() {
          return o;
        }),
        i.d(t, "g", function() {
          return r;
        }),
        i.d(t, "f", function() {
          return a;
        }),
        i.d(t, "e", function() {
          return h;
        }),
        i.d(t, "a", function() {
          return u;
        }),
        i.d(t, "b", function() {
          return l;
        }),
        (Number.prototype.clamp = function(e, t) {
          return Math.min(Math.max(this, e), t);
        });
      const o = e => e[Math.floor(Math.random() * e.length)];
      function r(e, t) {
        return (
          null == e && (e = 0),
          null == t && (t = 1),
          e + Math.random() * (t - e)
        );
      }
      function a(e, t) {
        return (
          null == e && (e = 0),
          null == t && (t = 1),
          Math.floor(e + Math.random() * (t - e + 1))
        );
      }
      var h = e => document.querySelector(e);
      const u = e =>
          "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e,
        l = (e, t = 1) => {
          const i = u(e),
            s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
            n = s
              ? {
                  r: parseInt(s[1], 16),
                  g: parseInt(s[2], 16),
                  b: parseInt(s[3], 16)
                }
              : null;
          return "rgba(" + n.r + "," + n.g + "," + n.b + "," + t + ")";
        };
    },
    1: function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
        return o;
      });
      var s = i(0);
      const n = "object" == typeof window;
      n && !window.VANTA && (window.VANTA = { version: "0.3.1" });
      const o = (n && window.VANTA) || {};
      o.register || (o.register = (e, t) => ((o[e] = e => new t(e)), o[e]));
      var r = function() {
        return (
          Array.prototype.unshift.call(arguments, "[VANTA]"),
          console.error.apply(this, arguments)
        );
      };
      (o.VantaBase = class {
        constructor(e = {}) {
          if (!n) return !1;
          var t, i, a, h;
          if (
            ((o.current = this),
            (this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this)),
            (this.resize = this.resize.bind(this)),
            (this.animationLoop = this.animationLoop.bind(this)),
            (this.restart = this.restart.bind(this)),
            (this.options = Object(s.c)({}, this.defaultOptions)),
            e instanceof HTMLElement || "string" == typeof e
              ? Object(s.c)(this.options, { el: e })
              : Object(s.c)(this.options, e),
            (this.el = this.options.el),
            null == this.el)
          )
            r('Instance needs "el" param!');
          else if (
            !(
              this.options.el instanceof HTMLElement ||
              ((h = this.el), (this.el = Object(s.e)(h)), this.el)
            )
          )
            return void r("Cannot find element", h);
          for (a = 0; a < this.el.children.length; a++)
            (t = this.el.children[a]),
              "static" === getComputedStyle(t).position &&
                (t.style.position = "relative"),
              "auto" === getComputedStyle(t).zIndex && (t.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position &&
            (this.el.style.position = "relative"),
            "object" == typeof THREE && this.initThree(),
            this.setSize(),
            (this.uniforms = {
              u_time: { type: "f", value: 1 },
              u_resolution: { type: "v2", value: new THREE.Vector2(1, 1) },
              u_mouse: { type: "v2", value: new THREE.Vector2(0, 0) }
            });
          try {
            this.init();
          } catch (e) {
            return (
              (i = e),
              r("Init error"),
              r(i),
              this.el.removeChild(this.renderer.domElement),
              void (
                this.options.backgroundColor &&
                (console.log("[VANTA] Falling back to backgroundColor"),
                (this.el.style.background = Object(s.a)(
                  this.options.backgroundColor
                )))
              )
            );
          }
          window.addEventListener("resize", this.resize),
            this.resize(),
            this.animationLoop(),
            this.el.addEventListener("mousemove", this.onMouseMoveWrapper, !1),
            window.addEventListener("scroll", this.onMouseMoveWrapper);
        }
        applyCanvasStyles(e, t = {}) {
          Object(s.c)(e.style, {
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            background: ""
          }),
            Object(s.c)(e.style, t),
            e.classList.add("vanta-canvas");
        }
        initThree() {
          (this.renderer = new THREE.WebGLRenderer({
            alpha: !0,
            antialias: !0
          })),
            this.el.appendChild(this.renderer.domElement),
            this.applyCanvasStyles(this.renderer.domElement),
            isNaN(this.options.backgroundAlpha) &&
              (this.options.backgroundAlpha = 1),
            (this.scene = new THREE.Scene());
        }
        onMouseMoveWrapper(e) {
          var t, i, s;
          (t = this.renderer.domElement.getBoundingClientRect()),
            (i = this.mouseX = e.clientX - t.left),
            (s = this.mouseY = e.clientY - t.top),
            i >= 0 &&
              s >= 0 &&
              !this.options.mouseEase &&
              this.triggerMouseMove(i, s);
        }
        triggerMouseMove(e, t) {
          this.uniforms &&
            ((this.uniforms.u_mouse.value.x = e / this.scale),
            (this.uniforms.u_mouse.value.y = t / this.scale));
          const i = e / this.width,
            s = t / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(i, s);
        }
        setSize() {
          this.scale || (this.scale = 1),
            Object(s.d)() && this.options.scaleMobile
              ? (this.scale = this.options.scaleMobile)
              : this.options.scale && (this.scale = this.options.scale),
            (this.width = this.el.offsetWidth || window.innerWidth),
            (this.height = this.el.offsetHeight || window.innerHeight);
        }
        resize() {
          var e, t;
          this.setSize(),
            null != (e = this.camera) && (e.aspect = this.width / this.height),
            null != (t = this.camera) &&
              "function" == typeof t.updateProjectionMatrix &&
              t.updateProjectionMatrix(),
            this.renderer &&
              (this.renderer.setSize(this.width, this.height),
              this.renderer.setPixelRatio(
                window.devicePixelRatio / this.scale
              )),
            "function" == typeof this.onResize && this.onResize();
        }
        animationLoop() {
          var e, t, i, s, n, o, r, a;
          return (
            this.t || (this.t = 0),
            (this.t += 1),
            this.t2 || (this.t2 = 0),
            (this.t2 += null != (o = this.options.speed) ? o : 1),
            this.uniforms && (this.uniforms.u_time.value = 0.016667 * this.t2),
            (e = this.el.offsetHeight),
            (t = this.el.getBoundingClientRect()),
            (a =
              null != (r = window.pageYOffset)
                ? r
                : (
                    document.documentElement ||
                    document.body.parentNode ||
                    document.body
                  ).scrollTop),
            (s = (n = t.top + a) - window.innerHeight),
            (i = n + e),
            this.options.mouseEase &&
              ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
              (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
              Math.abs(this.mouseEaseX - this.mouseX) +
                Math.abs(this.mouseEaseY - this.mouseY) >
                0.1 &&
                ((this.mouseEaseX =
                  this.mouseEaseX + 0.05 * (this.mouseX - this.mouseEaseX)),
                (this.mouseEaseY =
                  this.mouseEaseY + 0.05 * (this.mouseY - this.mouseEaseY)),
                this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
            s <= a &&
              a <= i &&
              ("function" == typeof this.onUpdate && this.onUpdate(),
              this.scene &&
                this.camera &&
                (this.renderer.render(this.scene, this.camera),
                this.renderer.setClearColor(
                  this.options.backgroundColor,
                  this.options.backgroundAlpha
                )),
              this.fps && this.fps.update && this.fps.update()),
            (this.req = window.requestAnimationFrame(this.animationLoop))
          );
        }
        restart() {
          if (this.scene)
            for (; this.scene.children.length; )
              this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          "function" == typeof this.onInit && this.onInit();
        }
        destroy() {
          "function" == typeof this.onDestroy && this.onDestroy(),
            this.el.removeEventListener("mousemove", this.onMouseMoveWrapper),
            window.removeEventListener("scroll", this.onMouseMoveWrapper),
            window.removeEventListener("resize", this.resize),
            window.cancelAnimationFrame(this.req),
            this.renderer &&
              (this.el.removeChild(this.renderer.domElement),
              (this.renderer = null),
              (this.scene = null));
        }
      }),
        (t.b = o.VantaBase);
    },
    14: function(e, t, i) {
      "use strict";
      i.r(t);
      var s = i(3),
        n = i(0);
      class o extends s.b {
        static initClass() {
          (this.prototype.p5 = !0),
            (this.prototype.defaultOptions = {
              color: 9979487,
              backgroundColor: 2237478,
              points: 100,
              maxDistance: 20,
              spacing: 15,
              showDots: !0
            });
        }
        onInit() {
          const e = this;
          this.p5 = new p5(function(t) {
            let i = Object(n.d)() ? 35 : 55,
              s = 50,
              o = 4,
              r = 0.2,
              a = 0.12,
              h = 20,
              u = t.random(1e4),
              l = t.random(1e4),
              c = t.random(1e4);
            function d(e, i, s) {
              let n = e % t.TWO_PI;
              return (
                n < 0 && (n += t.TWO_PI),
                t.noise(u + t.cos(n) * i, l + t.sin(n) * i, c + s)
              );
            }
            (t.setup = function() {
              e.initP5(t),
                t.strokeWeight(1),
                t.stroke(Object(n.a)(e.options.color)),
                t.smooth(),
                t.noFill();
            }),
              (t.draw = function() {
                t.clear(),
                  t.translate(t.width / 2, t.height / 2),
                  (function() {
                    (l -= 0.02), (c += 0.005);
                    for (let e = 0; e < i; e++) {
                      t.beginShape();
                      for (let i = 0; i < 360; i++) {
                        let n = t.radians(i),
                          u = h * d(n, a * e + r, c) + (o * e + s);
                        t.vertex(u * t.cos(n), u * t.sin(n));
                      }
                      t.endShape(t.CLOSE);
                    }
                  })();
              });
          });
        }
      }
      o.initClass(), (t.default = s.a.register("TRUNK", o));
    },
    3: function(e, t, i) {
      "use strict";
      i.d(t, "b", function() {
        return o;
      });
      var s = i(1),
        n = i(0);
      i.d(t, "a", function() {
        return s.a;
      });
      class o extends s.b {
        constructor(e) {
          super(e), (this.mode = "p5");
        }
        initP5(e) {
          const t = this,
            i = e.createCanvas(t.width, t.height);
          i.parent(t.el),
            t.applyCanvasStyles(e.canvas, {
              background: Object(n.a)(t.options.backgroundColor)
            }),
            (t.p5renderer = i),
            (t.p5canvas = e.canvas),
            (t.id = '#preview'),
            (t.p5 = e);
        }
        restart() {
          this.p5 && "object" == typeof this.p5 && this.p5.remove(),
            super.restart();
        }
        destroy() {
          this.p5 && "object" == typeof this.p5 && this.p5.remove(),
            super.destroy();
        }
        resize() {
          super.resize(),
            this.p5 &&
              this.p5.resizeCanvas &&
              this.p5.resizeCanvas(this.width, this.height);
        }
      }
    }
  });
});
