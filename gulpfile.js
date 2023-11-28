const { src, watch, dest, series } = require("gulp");
const postcss = require("gulp-postcss");
const gulpServer = require("gulp-webserver");
const clean = require("gulp-clean");
const less = require("gulp-less");

const cleanDist = function () {
  return src("dist", { read: false }).pipe(clean());
};

// 处理静态资源
const publicResource = function () {
  src(["assets/img/*"]).pipe(dest("dist/img"));
  src(["assets/font/*"]).pipe(dest("dist/font"));
  return src(["lib/**/*"]).pipe(dest("dist/lib"));
};

//处理css
const compileCss = function () {
  return src(["assets/css/**/*.less"])
    .pipe(less())
    .pipe(postcss())
    .pipe(dest("dist/css"));
};

//处理js
const compileJs = function () {
  return src(["src/js/**/*.js"]).pipe(dest("dist/js"));
};

// 处理html
const compileHtml = function () {
  return src("./src/pages/**/*.html").pipe(dest("dist/"));
};

// exports.default = cssTransfore;

const devServer = function () {
  return src("./dist/").pipe(
    gulpServer({
      port: 8888,
      host: "localhost",
      livereload: true, // 开启热更新
      open: false, // 开启浏览器
    })
  );
};

// 监听文件
const watchFile = function () {
  watch("./assets/img/**/*", (cb) => {
    publicResource();
    cb();
  });
  watch("./assets/css/**/*.css", (cb) => {
    compileCss();
    cb();
  });
  watch("./src/js/**/*.js", (cb) => {
    compileJs();
    cb();
  });
  watch("./src/pages/**/*.html", (cb) => {
    compileHtml();
    cb();
  });
};

exports.cssTransform = compileCss;
exports.build = series(
  cleanDist,
  publicResource,
  compileCss,
  compileJs,
  compileHtml
);

exports.default = series(
  cleanDist,
  publicResource,
  compileCss,
  compileJs,
  compileHtml,
  devServer,
  watchFile
);
