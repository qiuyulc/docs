### 介绍

Nest （NestJS） 是一个用于构建高效、可扩展 Node.js 服务器端应用程序的框架。它使用渐进式 JavaScript，使用并完全支持 TypeScript（但仍然允许开发人员使用纯 JavaScript 编写代码），并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式响应式编程）的元素。

在后台，Nest 使用强大的 HTTP 服务器框架，如 Express（默认），并且可以选择配置为使用 Fastify！

Nest 提供了高于这些常见 Node.js 框架（Express/Fastify）的抽象级别，但也直接向开发人员公开了它们的 API。这使开发人员可以自由地使用可用于底层平台的无数第三方模块。

### 哲学

近年来，由于 Node.js，JavaScript 已成为前端和后端应用程序的 Web “通用语言”。这催生了像 Angular、React 和 Vue 这样的优秀项目，它们提高了开发人员的生产力，并能够创建快速、可测试和可扩展的前端应用程序。然而，虽然 Node（和服务器端 JavaScript）存在大量出色的库、帮助程序和工具，但它们都不能有效地解决架构的主要问题。

**Nest 提供了一个开箱即用的应用程序架构，允许开发人员和团队创建高度可测试、可扩展、松散耦合且易于维护的应用程序。该架构深受 Angular 的启发。**

### 安装

```bash
$ npm i -g @nestjs/cli
$ nest new project-name

# 若要创建具有更严格功能集的新 TypeScript 项目，请将该标志传递给命令。--strictnest new
```

### 选择

#### git

```git
$ git clone https://github.com/nestjs/typescript-starter.git project
$ cd project
$ npm install
$ npm run start
```

#### 手动创建

安装下面这些核心模块，从头配置新项目。

```bash
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```
