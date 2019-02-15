auto-build-react-redux
=========================

脚手架包含了 [react](https://github.com/facebook/react) ,&nbsp; &nbsp; [react-redux](https://github.com/reduxjs/react-redux) ,&nbsp; &nbsp; [webpack](https://github.com/webpack/webpack).  
开箱即用.

[![build status](https://img.shields.io/travis/reduxjs/react-redux/master.svg?style=flat-square)](https://travis-ci.org/reduxjs/react-redux) [![npm version](https://img.shields.io/npm/v/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![npm downloads](https://img.shields.io/npm/dm/react-redux.svg?style=flat-square)](https://www.npmjs.com/package/react-redux)
[![redux channel on discord](https://img.shields.io/badge/discord-redux@reactiflux-61DAFB.svg?style=flat-square)](http://www.reactiflux.com)


## Installation

```
npm install auto-build-react-redux -g
```
脚手架里面包含了指定版本的react，如果你清晰的知道react的版本依赖 你可以remove react  并install react 你想要的版本（同样适用于redux等全家桶）


## Documentation

[1.脚手架简介](#1)  
&nbsp; &nbsp; [ 1.1 开发脚手架的原因](#1.1)  
&nbsp; &nbsp; [ 1.2 写在前面的话](#1.2)  

[2.如何使用](#2)  
&nbsp; &nbsp; [ 2.1 ui版本](#2.1)  
&nbsp; &nbsp; [ 2.2 创建demo](#2.2)  
&nbsp; &nbsp; [ 2.3 创建工程](#2.3)  
&nbsp; &nbsp; [ 2.4 使用命令](#2.4)   
&nbsp; &nbsp; [ 2.5 命令详解](#2.5) 
&nbsp; &nbsp; [ 2.6 打包](#2.6)

[3.demo简介](#3)  
&nbsp; &nbsp; [ 3.1 项目结构](#3.1)  
&nbsp; &nbsp; [ 3.2 src 介绍](#3.2)  
&nbsp; &nbsp; [ 3.3 redux-data 介绍](#3.3)
&nbsp; &nbsp; [ 3.4 server 介绍](#3.4)  
&nbsp; &nbsp; [ 3.5 webpack 介绍](#3.5)   
&nbsp; &nbsp; [ 3.6 其他](#3.6) 

<h2 id='1'>
1.脚手架简介
</h2>
<span id='1.1'>
1.1 开发脚手架的原因    

本人写前端的路程是 jquery=> react=> react全家桶，个人比较喜欢装饰着模式的react，但对于flux并不是很感兴趣，而且在开发中，发生新加页面，新加模块，redux要配置好多东西，但是我偏偏不想关注redux做了什么，只是当一个中央数据库，只有少量的公用数据才会放到redux中，从而推动我写了一个这样半自动化的工具。

主要功能：通过配置文件生成redux，在开发过程中只需要关注react 而忽视redux的内容，顺便附带了新建html 新建view 新建cmpt的小工具
</span>
<span id='1.2'>
1.2 写在前面的话    

本项目适合快速开发 快速迭代 性能问题并未考虑在内
</span>

<h2 id='2'>
2.如何使用
</h2>
<span id='2.1'>
2.1 ui版本

ui采用antd  由于antd3.9以后对icon进行打包 体积过大 本项目采用的antd@3.8.4
</span>
<span id='2.2'>
2.2 创建demo

```
auto-build-react-redux init --demo
```
</span>
<span id='2.3'>
2.3 创建工程

```
auto-build-react-redux init
```
</span>

<span id='2.4'>
2.4 使用命令

```
auto-build-react-redux
```
</span>

<span id='2.5'>
2.5 命令详解


输入命令后

```
? What do you want to do? (Use arrow keys)
> build
  ──────────────
  create HTML
  ──────────────
  create HTML's Cmpt and HTML's View according to redux-data
  create View according to redux-data
  create Component according to redux-data
  ──────────────
  create all according to redux-data
  ──────────────
(Move up and down to reveal more choices)
```

### build : 如果你不需要改动任何react部分 仅仅是 根据redux的配置项生成 redux 就执行这么命令 这个命令对于react是没有副作用的  
### create HTML : 如果你想新建个html页面 就选择这个 这个命令会在entry下生成一个新的文件 作为新的spa页面的入口 （注意不要和已有的文件名重复，这样会覆盖掉已有的文件，那你写好的东西就gg了）
### create HTML's Cmpt and HTML's View according to redux-data : 如果你有一个新的html 已经配置好了 redux-data 想单独的生成这个html的所有模块 （开发进行中的时候，不要选择已经添加代码的html，这样会覆盖掉已有的代码）  
### create View according to redux-data ： 在已经有的spa中，想添加一个新的view层级的模块， 那么更新redux-data 并执行此命令 就会单独的生成新模块所有的文件（不要选错，会覆盖已有的文件）
### create Component according to redux-data ： 在已经有的spa中，想添加一个新的Component层级的模块， 那么更新redux-data 并执行此命令 就会单独的生成新模块所有的文件（不要选错，会覆盖已有的文件）
### create Component according to redux-data ： 项目刚启动，已经有redux-data了  src下还是空的  那么选择这个
</span>
<span id='2.6'>
2.6 打包  

开发模式  
```
npm run dev
```
生产模式
```
npm run build
```
</span>

<h2 id='3'>
3.项目简介
</h2>
<span id='3.1'>    
3.1 项目结构

├── config    
│ &nbsp; &nbsp;  └── routerConfig.jsx  &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;//&#8195;react-router-dom 的路由配置   
├── fetch  
│ &nbsp; &nbsp;  └── fetch.jsx  &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;fetch的封装 **http code** 做中间件的时候 要在这里插入  
├── node_modules                      
├── public   
│ &nbsp; &nbsp;  └── asset  &nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;前端服务器的静态文件  
├── redux-data                          
│ &nbsp; &nbsp;  ├── config  &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;redux的配置文件   
│ &nbsp; &nbsp;  └── data  &nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;redux的数据   
├── src    
│ &nbsp; &nbsp;  └── entry &nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;所有spa页面的入口文件  
├── views  &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;服务器的html 几个spa页面就有几个ejs    
├── webpack  &nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;webpack的配置文件   
├── package.json          
├── server.js  &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;前端服务器    
├── theme.js   &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;antd的主题包文件   
└── webpack.config.js  &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;//&#8195;webpack启动文件   
</span>  
<span id='3.2'>    
3.2 src 介绍

src下一共有 1 + n（页面个数） 个文件夹 entry是webpack的入口文件   

每个页面中  
├── components    &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;V的组件   
├── control  &nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;C  
│ &nbsp; &nbsp;  └── components &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;//&#8195;对应的cmpt   
│ &nbsp; &nbsp;  └── view  &nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;对应的view   
├── index &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;入口文件 里面有react-router-dom  也是为了给context留出封装  
├── model   &nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;M   
├── redux    &nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;redux 相关文件（生成的）  
└── view  &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;V 
</span> 
<span id='3.3'>    
3.3 redux-data 介绍

├── config    &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;最终的配置文件       
└── data  &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;引入的参数和方法 
以app为例
```
const {
    usernameState,
    setUsername,
    mobileState,
    setMobile,
    language_typeState,
    setLanguage_type
} = require('../data/app/app')
module.exports = {
    'app': {
        'index': {
            'state': [language_typeState],
            'func': [setLanguage_type]
        },
        'components': {
            'Header': {
                'state': [usernameState, mobileState, language_typeState],
                'func': [setUsername, setMobile, setLanguage_type]
            },
            'Menus': {
                'state': [usernameState],
                'func': [setUsername]
            },
            'ArticleList': {
                'state': [mobileState],
                'func': [setMobile]
            },
            'SearchHeader': {
                'state': [],
                'func': []
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'Menus', 'ArticleList'],
                'state': [usernameState],
                'func': [setUsername]
            },
            'SearchView': {
                'components': ['SearchHeader', 'ArticleList'],
                'state': [],
                'func': []
            },
            'AdminView': {
                'components': ['ArticleList'],
                'state': [],
                'func': []
            }
        }
    }

}
```
意思是 app中有三个需要标注的地方  一个是 组件 一个是view  最后一个是index  
index是唯一的 用到了什么state  可以全局设置什么  
components 是 这个spa页面有 多少个组件  每个组件和redux的关系
views 是这个spa页面有多少个view（相对于react-router-dom）包含了什么组件 和redux的关系是什么

</span>

<span id='3.4'>    
3.4 server 介绍

这个没什么好说的 几个接口，两个默认路由，新建html以后 记得添加路由

</span>
<span id='3.5'>    
3.5 webpack 介绍

├── config    &nbsp;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;//&#8195;配置文件   
│ &nbsp; &nbsp;  └── entry.js &#8195;&nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;//&#8195;入口   
│ &nbsp; &nbsp;  └── optimization.js &nbsp;&nbsp;&#8195;//&#8195;优化   
│ &nbsp; &nbsp;  └── plugins.js &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;//&#8195;插件   
│ &nbsp; &nbsp;  └── rules.js &nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;//&#8195;loader       
└── viewBabel  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8195;&#8195;&#8195;&#8195;//&#8195;生成html的模板 

entry是直接写的读取entry下所有  

optimization 里面包含了拆分第三方包 和生产模式下去除console  
**引用其他包可以继续拆分 例如echarts等等**

plugins 里面包含了清除文件的插件 单独提取css 生成html 插入srcipt的插件  
**这里面需要自己更改一个引入机制的东西 HtmlWebpackPlugin中的chunks 现在默认是所有模块均引入react和自己的那部分js 在实际开发中 可能还会需要echarts  antd等等这种有的页面需要 有的页面不需要的第三方包 所以需要自行更改**  

rules 里面包含的是loader

</span>

<span id='3.6'>    
3.6 其他

demo介绍

自己网站还没弄完，以后再补
</span>