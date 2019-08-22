# 本项目是通过【yarn create react-app antd-demo-ts --typescript】指令创建的项目框架

## 本项目需要使用antd作为整体页面的前端框架【yarn add antd】[参考链接](https://ant.design/docs/react/use-in-typescript-cn)
> 在antd进行按需加载的时候，需要我们使用babel-plugin-import插件进行引入【yarn add babel-plugin-import】[参考链接](https://github.com/ant-design/babel-plugin-import)

## 本项目的是打算就以CRA（create-react-app）模式进行项目的研发（without react）
1. 首先需要安装react-app-rewired 【yarn add react-app-rewired --dev】 [参考链接](https://github.com/timarney/react-app-rewired)
> 使用该插件的时候，需要在根目录创建一个config-overrides.js文件
> 并且修改package.json文件的script脚本指令
2. 使用了react-app-rewired这个插件，可以使用customize-cra一起连用。【yarn add customize-cra】


## 项目使用redux，需要安装redux以及react-redux 【yarn add redux react-redux】 [参考链接](https://github.com/reduxjs/redux)

## 在项目中需要使用国际化语言，那么配置的插件有atool-l10n【yarn add atool-l10n】 [参考链接](https://github.com/ant-tool/atool-l10n)
> 添加一个文件（l10n.config.js）到根目录, 里面代码如下
```js
module.exports = {
  middlewares: {
    summary: ['summary?sourcePattern=i18n-messages/**/*.json'],
    process: [
      'fetchLocal?source=locales,skip',
      'metaToResult?from=defaultMessage,to=zh',
      'youdao?apiname=iamatestmanx,apikey=2137553564',
      'reduce?-autoPick,autoReduce[]=local,autoReduce[]=meta',
    ],
    emit: ['save?dest=locales'],
  },
};
```
> 在package.json文件中添加指令 "trans": "atool-l10n" 或者 "trans": "node_modules/.bin/atool-l10n"

## 然后需要使用react-intl，这个是国际化语言的根本【yarn add react-intl】 [参考链接](https://github.com/formatjs/react-intl)
> [使用参考链接](https://www.jianshu.com/p/574f6cea4f26)

## 还需要使用babel-plugin-react-intl，这个插件是react-intl的hook[使用解释说明](https://github.com/formatjs/react-intl/blob/master/docs/API.md)
## babel-plugin-react-intl[文档说明](https://github.com/formatjs/formatjs/tree/master/packages/babel-plugin-react-intl)
> 使用时，修改package.json文件，然后添加如下配置
```json
"babel": {
    "plugins": [
    [
      "react-intl",
      {
        "messagesDir": "i18n-messages"
      }
    ]
  ]
}
```

** 在配置国际化的时候，需要注意几点，引入文件的目录结构，以及生成文件的目录结构。
```js
module.exports = {
    middlewares: {
      summary: ['summary?sourcePattern=i18n-messages/**/*.json'], //这个是需要将babel-plugin-react-intl生成的文件夹目录结构一致的
      process: [
        'fetchLocal?source=src/locales,skip',
        'metaToResult?from=defaultMessage,to=zh',
        'youdao?apiname=iamatestmanx,apikey=2137553564',
        'reduce?-autoPick,autoReduce[]=local,autoReduce[]=meta',
      ],
      // emit: ['save?dest=locales'],
      emit: ["save?dest=src/locales"], //这是储存文件的根目录
    },
  };
  ```
  ** 因为上面的文件，引入的文件目录结构是i18n-messages,所以在配置package.json文件或者.babelrc文件的时候，也是需要将配置的目录文件夹命名为i18n-messages
  ```json
    {
        "babel": {
            "plugins": [
                [
                    "react-intl", 
                    { "messageDir": "i18n-messages"}
                ]
            ]

        }
    }
  ```
  ** 导出的文件夹目录就是当前项目的src下的locales文件下的zh.json跟en.json文件

  在ie9下的时候，会出现img为空的时候，设置css样式将其进行透明度设置成0，从而不显示图片信息
  img[src=""],
  img:not([src]) {
     opacity:0;
  }