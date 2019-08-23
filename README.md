##dva-cli
由于原本的 dva-cli 有各种各样的问题，现在基于 create-react-app 整理一套使用于 dva 的 react 脚手架，方便开发

###别名
定义了 @ 作为 src 根目录的别名

> import something from '@/container'
>
> import something from '@/utils'

###目录

-  containers - 组件
-  components - 路由页面
-  common - 静态资源
   -  css
   -  images
   -  fonts
-  config - 公共配置
-  utils - 公共部件
-  store - 状态管理 index.js 入口文件
