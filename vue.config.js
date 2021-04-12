const registerRouter = require('./backend/router');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        /**
         * 全局引入变量和mixin；
         * 只有css文件才能在main.js中引入，变量和函数只能在vue文件的style中单独引入，这样很麻烦，所以在这里统一引入
         * （要求node-sass5.0、sass-loader10.1.0）
         */
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app);
    }
  }
};
