# 本项目是通过【yarn create react-app antd-demo-ts --typescript】指令创建的项目框架

## 本项目需要使用antd作为整体页面的前端框架【yarn add antd】[参考链接](https://ant.design/docs/react/use-in-typescript-cn)
> 在antd进行按需加载的时候，需要我们使用babel-plugin-import插件进行引入【yarn add babel-plugin-import】[参考链接](https://github.com/ant-design/babel-plugin-import)

## 本项目的是打算就以CRA（create-react-app）模式进行项目的研发（without react）
1. 首先需要安装react-app-rewired 【yarn add react-app-rewired --dev】 [参考链接](https://github.com/timarney/react-app-rewired)
> 使用该插件的时候，需要在根目录创建一个config-overrides.js文件
> 并且修改package.json文件的script脚本指令
2. 使用了react-app-rewired这个插件，可以使用customize-cra一起连用。【yarn add customize-cra】


## 