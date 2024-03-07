---
title: react-router
description: react-router
---

## 请简述 react-router 和 react-router-dom 的有什么区别？

- React Router 是包含路由核心功能的库，而 React Router DOM 是在 React Router 基础上构建的特定于浏览器环境的实现。

- React Router 是用于构建通用的路由功能，可以在不同的平台上使用，例如 Web、Native 等。它提供了一组核心组件和 API，用于处理路由的配置、导航和状态管理等。它不依赖于具体的渲染引擎或 DOM 操作。

- React Router DOM 是针对 Web 平台的实现，它基于 React Router 提供了一组特定于浏览器环境的组件和实用工具。它使用了 React Router 的核心功能，并添加了用于处理浏览器历史记录、URL 解析和 DOM 操作等的功能。它依赖于浏览器环境和 React DOM。

- React Router DOM 提供了一些常用的组件，例如 BrowserRouter、Route、Switch、Link 等，这些组件使得在 React 应用程序中实现路由功能变得更加简单和直观。

总结来说，React Router 是通用的路由库，提供了核心的路由功能，而 React Router DOM 是在 React Router 基础上构建的特定于浏览器环境的实现，提供了用于 Web 平台的路由组件和实用工具。因此，如果你需要在 Web 应用程序中实现路由功能，可以使用 React Router DOM

## 简述 React-Router 的实现原理是什么 ？

- 基于 hash 的路由：在过去，通过修改 URL 的哈希部分来实现客户端路由。通过监听浏览器的 hashchange 事件，可以感知到 URL 中哈希部分的变化，并据此改变应用程序的状态。可以直接通过修改 location.hash 属性来改变 URL 的哈希部分。

- 基于 H5 history 路由：HTML5 引入了 history API，通过使用 pushState 和 replaceState 等方法，可以在不刷新页面的情况下修改 URL。这些方法会将新的 URL 压入历史堆栈中，并且可以使用 history.go() 等 API 进行导航。可以通过监听 URL 的变化，通过自定义事件来触发相应的逻辑。
