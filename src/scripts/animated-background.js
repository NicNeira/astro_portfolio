// Adaptado de Matthias Hurrle (@atzedent)
// Modificado para tema claro/oscuro

class AnimatedBackground {
  constructor() {
    this.canvas = null;
    this.gl = null;
    this.dpr = window.devicePixelRatio || 1;
    this.animationId = null;
    this.isInitialized = false;
    this.resources = {
      time: null,
      buffer: null,
      program: null,
      resolution: null,
      isDarkMode: null,
      vertices: []
    };

    this.vertexSource = "#version 300 es\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nin vec2 position;\n\nvoid main(void) {\n    gl_Position = vec4(position, 0., 1.);\n}";

    this.fragmentSource = "#version 300 es\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nout vec4 fragColor;\n\nuniform vec2 resolution;\nuniform float time;\nuniform bool isDarkMode;\n\n#define S smoothstep\n#define T .112358+time\n\nfloat rnd(vec2 p) {\n  return fract(\n    sin(\n      dot(\n        p,\n        vec2(12.9898, 78.233)\n      )\n    )*43758.5453123\n  );\n}\n\nfloat noise(vec2 p) {\n  vec2 f=fract(p), i=floor(p);\n  float\n  a=rnd(i),\n  b=rnd(i+vec2(1,0)),\n  c=rnd(i+vec2(0,1)),\n  d=rnd(i+vec2(1,1));\n\n  vec2 u = f*f*(3.-2.*f);\n\n  return mix(a,b,u.x)+\n    (c-a)*u.y*(1.-u.x)+\n    (d-b)*u.y*u.x;\n}\n\nvoid main(void) {\n  vec2 uv = (\n    gl_FragCoord.xy -.5 * resolution.xy\n  )/min(resolution.x, resolution.y);\n\n  float t = T*.1;\n  vec3 col = vec3(0);\n  vec2 p = vec2(0);\n  p.x = noise(uv+vec2(0,1));\n  p.y = noise(uv+vec2(1,0));\n\n  p = 8.*(\n    vec2(\n      sin(t),\n      -cos(t)\n    )*.15-p\n  );\n\n  float s = .35;\n  \n  for(float i=.0;i<6.;i++) {\n    p.x += s*sin(2.*t-i*1.5*p.y)+t;\n    p.y += s*cos(2.*t+i*1.5*p.x)-t;\n  }\n\n  col+= sin(t+p.x+p.y);\n  col = pow(S(vec3(0),vec3(1),col), vec3(.4));\n  col = mix(vec3(.7,.6,.4)*col, col, col);\n\n  if (isDarkMode) {\n    col = col;\n  } else {\n    col = 1.0 - col;\n  }\n\n  fragColor = vec4(col, 1.0);\n}";
  }

  getCanvasAndContext() {
    this.canvas = document.getElementById("animated-background");
    if (!this.canvas) {
      console.warn("AnimatedBackground: Canvas not found");
      return false;
    }

    this.gl = this.canvas.getContext("webgl2");
    if (!this.gl) {
      console.warn("AnimatedBackground: WebGL2 not supported");
      return false;
    }

    return true;
  }

  resize() {
    if (!this.canvas || !this.gl) return;

    var width = window.innerWidth;
    var height = window.innerHeight;

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    this.gl.viewport(0, 0, width * this.dpr, height * this.dpr);
  }

  compile(shader, source) {
    if (!this.gl) return;

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(this.gl.getShaderInfoLog(shader));
    }
  }

  isDarkTheme() {
    var htmlElement = document.documentElement;
    var hasClass = htmlElement.classList.contains("dark");
    var dataTheme = htmlElement.getAttribute("data-theme");
    return hasClass || dataTheme === "dark";
  }

  setup() {
    if (!this.gl) return;

    var vs = this.gl.createShader(this.gl.VERTEX_SHADER);
    var fs = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    this.resources.program = this.gl.createProgram();
    if (!this.resources.program) return;

    this.compile(vs, this.vertexSource);
    this.compile(fs, this.fragmentSource);

    this.gl.attachShader(this.resources.program, vs);
    this.gl.attachShader(this.resources.program, fs);
    this.gl.linkProgram(this.resources.program);

    if (!this.gl.getProgramParameter(this.resources.program, this.gl.LINK_STATUS)) {
      console.error(this.gl.getProgramInfoLog(this.resources.program));
    }

    this.resources.vertices = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0];

    this.resources.buffer = this.gl.createBuffer();
    if (!this.resources.buffer) return;

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resources.buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.resources.vertices), this.gl.STATIC_DRAW);

    var position = this.gl.getAttribLocation(this.resources.program, "position");

    this.gl.enableVertexAttribArray(position);
    this.gl.vertexAttribPointer(position, 2, this.gl.FLOAT, false, 0, 0);

    this.resources.time = this.gl.getUniformLocation(this.resources.program, "time");
    this.resources.resolution = this.gl.getUniformLocation(this.resources.program, "resolution");
    this.resources.isDarkMode = this.gl.getUniformLocation(this.resources.program, "isDarkMode");
  }

  draw(now) {
    if (!this.gl || !this.canvas || !this.resources.program || !this.resources.buffer) return;

    this.gl.clearColor(0, 0, 0, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.gl.useProgram(this.resources.program);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.resources.buffer);

    this.gl.uniform1f(this.resources.time, now * 0.001);
    this.gl.uniform2f(this.resources.resolution, this.canvas.width, this.canvas.height);
    this.gl.uniform1i(this.resources.isDarkMode, this.isDarkTheme() ? 1 : 0);

    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.resources.vertices.length * 0.5);
  }

  loop(now) {
    if (!this.isInitialized) return;

    this.draw(now);
    var self = this;
    this.animationId = requestAnimationFrame(function (time) {
      self.loop(time);
    });
  }

  cleanup() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.isInitialized = false;
  }

  init() {
    try {
      this.cleanup();
      this.setup();
      this.resize();
      this.isInitialized = true;
      this.loop(0);
    } catch (error) {
      console.warn("AnimatedBackground: Error during initialization", error);
      this.isInitialized = false;
    }
  }

  safeInit() {
    var self = this;
    setTimeout(function () {
      if (!self.isInitialized && self.getCanvasAndContext()) {
        self.init();
      } else {
        setTimeout(function () {
          if (!self.isInitialized && self.getCanvasAndContext()) {
            self.init();
          }
        }, 200);
      }
    }, 100);
  }

  start() {
    var self = this;

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        self.safeInit();
      });
    } else if (document.readyState === "interactive") {
      setTimeout(function () {
        self.safeInit();
      }, 50);
    } else {
      self.safeInit();
    }

    window.addEventListener("resize", function () {
      if (self.canvas && self.gl) {
        self.resize();
      }
    });

    var themeObserver = new MutationObserver(function () {
      // Theme updates automatically on next frame
    });

    if (document.documentElement) {
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }

    document.addEventListener("astro:before-preparation", function () {
      self.cleanup();
    });

    document.addEventListener("astro:before-swap", function () {
      self.cleanup();
    });

    document.addEventListener("astro:page-load", function () {
      setTimeout(function () {
        if (self.getCanvasAndContext()) {
          self.safeInit();
        }
      }, 100);
    });

    document.addEventListener("DOMContentLoaded", function () {
      if (!self.isInitialized) {
        self.safeInit();
      }
    });
  }
}

export default AnimatedBackground; 