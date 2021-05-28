# manage-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 引入依赖
vue-class-component
vue-property-decorator
less less-loader

### 移动端自适应配置
具体配置：
1.npm i autoprefixer postcss-pxtorem lib-flexible sass-loader -S
2.vue.config.js增加：
module.exports = {
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            sass:{
                prependData:`@import "~@/lib/css/customConfig.scss";`,  //配置的全局公用的scss文件模板
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
}
3.在main.ts引入
import 'lib-flexible';


### 嵌入的html，ios手机小横条会挡住底部tab问题
height: 'calc(100% - 5rem - constant(safe-area-inset-bottom)) !important',
height: 'calc(100% - 5rem - env(safe-area-inset-bottom)) !important'
height: 'calc(100% - 5rem - env(safe-area-inset-bottom)) !important'
margin-bottom:calc(~'5px + constant(safe-area-inset-bottom')

### 









