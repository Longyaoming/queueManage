const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);//生产环境

module.exports = {
    publicPath: IS_PROD ? './' : '/', // 公共路径
    chainWebpack: config => {
      config.resolve.extensions.merge([".ts", ".tsx", ".js", ",json"])
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
          sass:{
            prependData:`@import "~@/lib/css/customConfig.scss";`,
          },
          postcss: {
            plugins: [
              require('autoprefixer')({
                overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
              }),
              //px to rem 适配
              require('postcss-pxtorem')({
                rootValue: 37.5, //换算的基数
                propList: ['*'],
                unitPrecision: 3,
                minPixelValue: 2
              })
            ]
          }
        }
      },
      //配置跨域
      devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
          warnings: true,
          errors: true
        },
        host: '0.0.0.0',
        port: '8080', // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
        proxy: {
          '/api': {
              target: 'https://vuets-api.herokuapp.com/api/',
              changeOrigin: true,
              pathRewrite: {
                  '/api': ''
              }
          }
      },
    }
}


http://60.174.229.33:443/meeting/call/wdgl/page/00/dist3/static/js.zip

