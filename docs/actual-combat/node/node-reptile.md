# Node 实战

## 目标
1. 通过命令行，输入关键字，数量。实现下载百度搜索来的图片。

## 课程大纲

node爬虫&cli实战

## 什么是爬虫
爬虫就是一个探测机器，自动模拟用户在浏览器上的各种操作，比如点击、输入、提交表单等，从而获取到网页的数据。

- 网络引擎
- App


### 爬虫的分类

通用爬虫：搜索引擎

聚焦爬虫：特定领域

### 爬虫是否可以随意爬去所有内容

不是的，会爬取

规范：
```js
//允许所有机器人
User-agent:*
Disallow:

User-agent:*
Allow:/

//允许特定的机器人
User-agent: name_spider(用其他爬虫的名称代替)
Allow:

//拦截所有爬虫
User-agent:*
Disallow:/

// 禁止所有机器人访问特定的目录
User-agent:*
Disallow:/cgi-bin/
Disallow:/images/
Disallow:/tmp/
Disallow:/private/

// 禁止所有机器人访问特定文件
User-agent:*
Disallow:/*.php$
Disallow:/*.js$
Disallow:/*.inc$
Disallow:/*.css$
```
或者其他形式
```js
<meta name='robots' content='noindex,nofollow'>
```

### 如何实现一个爬虫应用？

1.明确要爬去的网站，页面；
2.分析网站的数据及DOM
3.确定技术选型
 a. 模拟浏览器端请求
    1. request:已经不维护了，不建议使用
    2. axios: 基于Promise的HTTP库，可以用于浏览器和node.js
    3. **superagent**: 基于Promise的HTTP库，可以用于浏览器和node.js
    4. request-promise-native: 基于Promise的HTTP库，可以用于浏览器和node.js
    5. cheerio: 类似jQuery的库，可以用于浏览器和node.js
    6. puppeteer: 基于Chrome的库，可以用于浏览器和node.js
 b. 解析DOM
    1. cheerio: 类似jQuery的库，可以用于浏览器和node.js
    2. jsDOM:可以解析DOM文本
 c. 模拟用户行为操作
    1. Puppeteer

## CLI
Command Line Interface，命令行交互页面，比如，vue-cli

作用：代替人实现重复劳动，提高开发效率。

### 与 npm scripts对比
npm脚本也可以实现开发工作流，通过在package.json中的脚本对象上配置相关npm命令，执行相关js来达到相同的目的;但是cli工具与npm脚本相比有什么优势呢?
1. npm脚本是某个具体项目的，只能在该项目内使用，cli可以是全局安装的，多个项目使用;
2. 使用npm脚本在业务工程里面嵌入工作流，耦合太高;使用cli可以让业务代码工作流相关代码剥离，业务代码专注业务;
3. cli工具可以不断法代开发，演进，沉淀:

### 如何实现一个CLI

涉及库：
commander：为cli提供命令行接入的方案
inquirer：提供交互的GUI

## 实战
课程以搜索 柯基 为例子

### 初始化项目
1. npm init
2. 安装superagent cheerio