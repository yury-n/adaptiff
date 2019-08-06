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
    function i(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
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
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            i.d(
              n,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
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
      i((i.s = 5))
    );
  })([
    function(e, t, i) {
      "use strict";
      function n(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e;
      }
      function o() {
        return (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth < 600
        );
      }
      i.d(t, "c", function() {
        return n;
      }),
        i.d(t, "d", function() {
          return o;
        }),
        i.d(t, "h", function() {
          return s;
        }),
        i.d(t, "g", function() {
          return r;
        }),
        i.d(t, "f", function() {
          return a;
        }),
        i.d(t, "e", function() {
          return u;
        }),
        i.d(t, "a", function() {
          return h;
        }),
        i.d(t, "b", function() {
          return l;
        }),
        (Number.prototype.clamp = function(e, t) {
          return Math.min(Math.max(this, e), t);
        });
      const s = e => e[Math.floor(Math.random() * e.length)];
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
      var u = e => document.querySelector(e);
      const h = e =>
          "number" == typeof e ? "#" + ("00000" + e.toString(16)).slice(-6) : e,
        l = (e, t = 1) => {
          const i = h(e),
            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
            o = n
              ? {
                  r: parseInt(n[1], 16),
                  g: parseInt(n[2], 16),
                  b: parseInt(n[3], 16)
                }
              : null;
          return "rgba(" + o.r + "," + o.g + "," + o.b + "," + t + ")";
        };
    },
    function(e, t, i) {
      "use strict";
      i.d(t, "a", function() {
        return s;
      });
      var n = i(0);
      const o = "object" == typeof window;
      o && !window.VANTA && (window.VANTA = { version: "0.3.1" });
      const s = (o && window.VANTA) || {};
      s.register || (s.register = (e, t) => ((s[e] = e => new t(e)), s[e]));
      var r = function() {
        return (
          Array.prototype.unshift.call(arguments, "[VANTA]"),
          console.error.apply(this, arguments)
        );
      };
      (s.VantaBase = class {
        constructor(e = {}) {
          if (!o) return !1;
          var t, i, a, u;
          if (
            ((s.current = this),
            (this.onMouseMoveWrapper = this.onMouseMoveWrapper.bind(this)),
            (this.resize = this.resize.bind(this)),
            (this.animationLoop = this.animationLoop.bind(this)),
            (this.restart = this.restart.bind(this)),
            (this.options = Object(n.c)({}, this.defaultOptions)),
            e instanceof HTMLElement || "string" == typeof e
              ? Object(n.c)(this.options, { el: e })
              : Object(n.c)(this.options, e),
            (this.el = this.options.el),
            null == this.el)
          )
            r('Instance needs "el" param!');
          else if (
            !(
              this.options.el instanceof HTMLElement ||
              ((u = this.el), (this.el = Object(n.e)(u)), this.el)
            )
          )
            return void r("Cannot find element", u);
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
                (this.el.style.background = Object(n.a)(
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
          Object(n.c)(e.style, {
            position: "absolute",
            zIndex: 20000,
            top: 0,
            left: 0,
            background: ""
          }),
            Object(n.c)(e.style, t),
            (e.id = "preview");
        }
        initThree() {
          (this.renderer = new THREE.WebGLRenderer({
            alpha: !0,
            antialias: !0,
            preserveDrawingBuffer: true
          })),
            this.el.appendChild(this.renderer.domElement),
            this.applyCanvasStyles(this.renderer.domElement),
            isNaN(this.options.backgroundAlpha) &&
              (this.options.backgroundAlpha = 1),
            (this.scene = new THREE.Scene());
        }
        onMouseMoveWrapper(e) {
          var t, i, n;
          (t = this.renderer.domElement.getBoundingClientRect()),
            (i = this.mouseX = e.clientX - t.left),
            (n = this.mouseY = e.clientY - t.top),
            i >= 0 &&
              n >= 0 &&
              !this.options.mouseEase &&
              this.triggerMouseMove(i, n);
        }
        triggerMouseMove(e, t) {
          this.uniforms &&
            ((this.uniforms.u_mouse.value.x = e / this.scale),
            (this.uniforms.u_mouse.value.y = t / this.scale));
          const i = e / this.width,
            n = t / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(i, n);
        }
        setSize() {
          this.scale || (this.scale = 1),
            Object(n.d)() && this.options.scaleMobile
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
          var e, t, i, n, o, s, r, a;
          return (
            this.t || (this.t = 0),
            (this.t += 1),
            this.t2 || (this.t2 = 0),
            (this.t2 += null != (s = this.options.speed) ? s : 1),
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
            (n = (o = t.top + a) - window.innerHeight),
            (i = o + e),
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
            n <= a &&
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
        (t.b = s.VantaBase);
    },
    function(e, t, i) {
      "use strict";
      i.d(t, "b", function() {
        return s;
      });
      var n = i(1),
        o = i(0);
      i.d(t, "a", function() {
        return n.a;
      }),
        "object" == typeof THREE &&
          (THREE.Color.prototype.toVector = function() {
            return new THREE.Vector3(this.r, this.g, this.b);
          });
      class s extends n.b {
        constructor(e) {
          super(e),
            (this.mode = "shader"),
            (this.updateUniforms = this.updateUniforms.bind(this));
        }
        initBasicShader(e = this.fragmentShader, t = this.vertexShader) {
          var i, n, o;
          return (
            t ||
              (t =
                "uniform float u_time;\nuniform vec2 u_resolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"),
            this.updateUniforms(),
            "function" == typeof this.valuesChanger && this.valuesChanger(),
            (i = new THREE.ShaderMaterial({
              uniforms: this.uniforms,
              vertexShader: t,
              fragmentShader: e
            })),
            (o = this.options.texturePath) &&
              (this.uniforms.u_tex = {
                type: "t",
                value: new THREE.TextureLoader().load(o)
              }),
            (n = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), i)),
            this.scene.add(n),
            (this.camera = new THREE.Camera()),
            (this.camera.position.z = 1)
          );
        }
        updateUniforms() {
          var e, t, i, n;
          for (e in ((t = {}), (i = this.options)))
            (n = i[e]),
              -1 !== e.toLowerCase().indexOf("color")
                ? (t[e] = { type: "v3", value: new THREE.Color(n).toVector() })
                : "number" == typeof n && (t[e] = { type: "f", value: n });
          return Object(o.c)(this.uniforms, t);
        }
        init() {
          super.init(), this.fragmentShader && this.initBasicShader();
        }
        resize() {
          super.resize(),
            (this.uniforms.u_resolution.value.x = this.width / this.scale),
            (this.uniforms.u_resolution.value.y = this.height / this.scale);
        }
      }
    },
    ,
    ,
    function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i(2);
      class o extends n.b {}
      (t.default = n.a.register("CELLS", o)),
        (o.prototype.defaultOptions = {
          color1: 35980,
          color2: 15918901,
          backgroundColor: 14155663,
          amplitudeFactor: window.amplitudeFactor,
          ringFactor: 1,
          rotationFactor: 1,
          size: 1.5,
          speed: 1,
          scaleMobile: 3
        }),
        (o.prototype.fragmentShader =
          "uniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\nuniform float blurFactor;\nuniform vec3 color1;\nuniform vec3 color2;\nuniform vec3 backgroundColor;\nuniform float size;\nuniform float amplitudeFactor;\nuniform float ringFactor;\nuniform float rotationFactor;\n\nfloat length2(vec2 p) { return dot(p, p); }\n\nfloat noise(vec2 p){\n    return fract(sin(fract(sin(p.x) * (43.13311)) + p.y) * 31.0011);\n}\n\nfloat worley(vec2 p) {\n    float d = 1e30;\n    for (int xo = -1; xo <= 1; ++xo) {\n        for (int yo = -1; yo <= 1; ++yo) {\n            vec2 tp = floor(p) + vec2(xo, yo);\n            d = min(d, length2(p - tp - vec2(noise(tp))));\n        }\n    }\n    vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n    float timeOffset =  0.15 * sin(u_time * 2.0 + 10.0*(uv.x - uv.y));\n    return 3.0*exp(-4.0*abs(2.0*d - 1.0 + timeOffset));\n}\n\nfloat fworley(vec2 p) {\n    return sqrt(sqrt(sqrt(\n    1.1 * // light\n    worley(p*5. + .3 + u_time*.0525) *\n    sqrt(worley(p * 50. / size + 0.3 + u_time * -0.15)) *\n    sqrt(sqrt(worley(p * -10. + 9.3))))));\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n    float t = fworley(uv * u_resolution.xy / 1500.0);\n    t *= exp(-length2(abs(0.7*uv - 1.0)));\n\n    float tExp = pow(t, 0.5 - t);\n    vec3 c1 = color1 * (1.0 - t);\n    vec3 c2 = color2 * tExp;\n\n    gl_FragColor = vec4(pow(t, 1.0 - t) * (c1 + c2), 1.0);\n}\n");
    }
  ]);
});