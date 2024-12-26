import{_ as l,c as e,a as o,o as a}from"./app-Bj_TYjpC.js";const n={};function s(r,i){return a(),e("div",null,i[0]||(i[0]=[o('<h2 id="对-web-标准以及-w3c-的理解和认识" tabindex="-1"><a class="header-anchor" href="#对-web-标准以及-w3c-的理解和认识"><span>对 WEB 标准以及 W3C 的理解和认识</span></a></h2><ul><li><p>Web 标准简单来说可以分为结构、表现、行为。其中结构有 HTML 各种标签组成，表现指的是 CSS 层叠样式表，行为指页面和用户具有一定的交互，由 JS 组成。</p></li><li><p>W3C(World Wide Web Consortium) 是一个指定各种标准的非盈利性组织，也叫万维网联盟，标准包括 HTML、CSS、ECMAScript 等。</p></li></ul><h2 id="浏览器渲染原理-回流-重绘的概念和原理" tabindex="-1"><a class="header-anchor" href="#浏览器渲染原理-回流-重绘的概念和原理"><span>浏览器渲染原理,回流，重绘的概念和原理</span></a></h2><ul><li><p>浏览器的渲染机制 浏览器的渲染机制分为以下步骤</p><ol><li>处理 HTML 构建 DOM 树</li><li>处理 CSS 构建 CSSOM 树</li><li>将 DOM 和 CSSOM 合并成一个渲染树</li><li>根据渲染树来布局，计算每个节点位置</li><li>调用 GPU 绘制，合成图层并显示</li></ol></li><li><p>回流</p><ul><li>当元素尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时浏览器会重新计算，然后重新页面布局，因此属于较重的操作</li></ul><ul><li>会触发回流的操作 <ol><li>修改元素的尺寸：例如修改元素的宽度、高度、内外边距、边框等属性。</li><li>修改元素的位置：例如修改元素的定位属性（position）或设置元素的左右上下位置。</li><li>修改元素的内容：例如修改文本内容、动态添加或移除子元素。</li><li>修改元素的样式：例如修改字体大小、颜色、背景色、visibility、display 等样式属性。</li><li>查询某些元素的属性：例如使用 JavaScript 获取元素的尺寸或位置等属性。</li><li>浏览器窗口的大小变化：当浏览器窗口的大小发生改变时，会触发所有元素的回流。</li><li>激活某些 CSS 伪类：例如:hover、:focus 等伪类可能触发回流。</li></ol></li></ul></li><li><p>重绘 当元素样式的改变不影响布局时，浏览器使用重绘对元素进行更新，此时由于只需要 UI 层面的重新像素绘制，因此损耗较小</p></li><li><p>总结 回流必定触发重绘，重绘不一定触发回流。重绘的开销较小。</p></li></ul><h2 id="前端页面的组成" tabindex="-1"><a class="header-anchor" href="#前端页面的组成"><span>前端页面的组成</span></a></h2><p>结构(HTML)、样式(CSS)、行为(JavaScript)</p><h2 id="http-状态码有哪些" tabindex="-1"><a class="header-anchor" href="#http-状态码有哪些"><span>HTTP 状态码有哪些</span></a></h2><ul><li><p>100-199 用于指定客户端应响应的某些动作</p><ol><li>100 Continue：服务器已接收到请求的初始部分，客户端应继续发送剩余部分。</li><li>101 Switching Protocols：服务器已根据客户端的请求切换协议。</li></ol></li><li><p>200-299 用于表示请求成功</p><ol><li>200 OK：请求成功，并返回请求的资源。</li><li>201 Created：请求成功，并在服务器上创建了新的资源。</li><li>204 No Content：请求成功，但无返回内容。</li></ol></li><li><p>300-399 用于已经移动的文件并且被包含在定位头信息中指定新的地址信息(重定向)</p><ol><li>301 Moved Permanently：请求的资源已永久移动到新位置。</li><li>302 Found：请求的资源暂时移动到新位置。</li><li>304 Not Modified：客户端的缓存资源是最新的，服务器返回未修改</li></ol></li><li><p>400-499 用于指出客户端的错误</p><ol><li>400 Bad Request：请求无效或无法被理解。</li><li>401 Unauthorized：请求需要用户身份验证。</li><li>404 Not Found：请求的资源不存在。</li></ol></li><li><p>500-599 用于支持服务器错误</p><ol><li>500 Internal Server Error：服务器遇到了意外错误，无法完成请求。</li><li>503 Service Unavailable：服务器暂时无法处理请求，通常是由于过载或维护。</li></ol></li></ul><h2 id="常用浏览器内核" tabindex="-1"><a class="header-anchor" href="#常用浏览器内核"><span>常用浏览器内核</span></a></h2><ul><li>WebKit：最初由苹果公司开发，是开源的浏览器引擎。许多浏览器基于 WebKit，包括苹果的 Safari、谷歌的 Chrome（早期版本）和 Opera。</li><li>Blink：Blink 是基于 WebKit 的一个分支，由谷歌开发和维护。Chrome、Opera 和许多其他基于 Chromium 的浏览器使用 Blink 作为其渲染引擎。</li><li>Gecko：由 Mozilla 基金会开发的开源浏览器引擎，用于 Mozilla Firefox 浏览器。Gecko 注重标准的实现和性能。</li><li>Trident：由微软开发的浏览器引擎，主要用于 Internet Explorer 浏览器。然而，微软已宣布放弃 Trident，并转向使用基于 Chromium 的 Edge 浏览器。</li><li>EdgeHTML：EdgeHTML 是微软为其 Edge 浏览器开发的一种浏览器引擎。然而，自 2020 年开始，微软宣布将 Edge 浏览器转向使用 Chromium 作为其基础，取代了 EdgeHTML。</li></ul><h2 id="优雅降级和渐进增强" tabindex="-1"><a class="header-anchor" href="#优雅降级和渐进增强"><span>优雅降级和渐进增强</span></a></h2><p>优雅降级（Graceful Degradation）和渐进增强（Progressive Enhancement）是两种 Web 开发的策略，用于确保网站或应用程序在不同的浏览器和设备上具有良好的用户体验。</p><ul><li><p>优雅降级是指首先针对现代浏览器和功能强大的设备进行开发，利用最新的技术和功能来创建丰富的用户体验。然后，通过逐步添加和实现附加功能，以确保在较旧的浏览器或设备上也能正常工作，尽管功能可能有所减弱。换句话说，优雅降级是从高级浏览器向较低级浏览器逐渐降级提供功能。</p></li><li><p>渐进增强则是相反的策略。它是从基本的、核心的功能开始开发，确保在所有浏览器和设备上都能正常工作。然后，通过逐步添加和改进功能，利用现代浏览器的能力来提供更丰富的用户体验。渐进增强是从低级浏览器向高级浏览器逐渐增强提供功能。</p></li><li><p>两种策略的目标都是确保网站或应用程序在不同环境中都能正常运行，并提供最佳的用户体验。然而，两种策略的侧重点不同。优雅降级侧重于优化现代浏览器和设备上的体验，而渐进增强侧重于确保基本功能在所有环境中都可用，并逐步增加增强功能。</p></li></ul><h2 id="什么是盒子模型" tabindex="-1"><a class="header-anchor" href="#什么是盒子模型"><span>什么是盒子模型</span></a></h2><p>盒子模型（Box Model）是指在网页设计中，将网页元素表示为一个矩形盒子的概念。它是 CSS（层叠样式表）中的基本概念之一，用于描述和布局网页元素的尺寸、边距、边框和填充等属性。</p><ul><li>内容（Content）：盒子的实际内容，例如文本、图像或其他嵌套的元素。</li><li>内边距（Padding）：内容与边框之间的空白区域。可以通过设置 padding 属性来控制</li><li>边框（Border）：内边距之外的一条边框，可以用来包围盒子的内容和内边距。可以通过设置 border 属性来控制。</li><li>外边距（Margin）：盒子与其他元素之间的空白区域，用于控制元素之间的间距。可以通过设置 margin 属性来控制。</li></ul><p>在 CSS 中，这些部分可以通过不同的属性进行设置和调整，例如 width（宽度）、height（高度）、padding、border 和 margin 等。这些属性可以单独设置，也可以组合在一起形成复合属性，如 margin-top、padding-left 等。</p><p>盒子模型的理解对于网页布局和设计非常重要，它决定了元素在页面中的大小、位置和间距。通过合理地控制盒子模型的属性，可以实现丰富多样的网页布局效果。</p><p><strong>注</strong>：怪异盒模型（Quirks Mode Box Model）是指在某些旧版本的浏览器中，对于盒子模型的计算方式与标准盒模型（Standard Box Model）有所不同的行为。</p><p>在标准盒模型中，一个元素的尺寸由其内容区域、内边距、边框和外边距共同决定。这意味着通过设置元素的宽度和高度属性，可以明确指定元素的可见区域的大小。</p><p>然而，在一些旧版的浏览器中，当页面处于怪异模式（Quirks Mode）时，盒子模型的计算方式会发生变化。在这种模式下，元素的尺寸计算不包括内边距和边框，只包括内容区域的大小。这意味着通过设置元素的宽度和高度属性，实际上只会影响到内容区域的大小，而不会包括内边距和边框的宽度。</p><p>怪异盒模型通常是由于早期浏览器在处理网页布局时存在的不兼容性和错误解释导致的。为了向后兼容旧版网页，一些浏览器在特定条件下（如缺少文档类型声明）会切换到怪异模式。</p><h2 id="前端模块化的理解" tabindex="-1"><a class="header-anchor" href="#前端模块化的理解"><span>前端模块化的理解</span></a></h2><ul><li>问题：命名冲突、代码耦合。</li><li>概念：前端模块化是一种组织和管理前端代码的方法，旨在提高代码的可维护性、可重用性和可扩展性。它将代码划分为独立的模块，每个模块具有特定的功能和责任，并且可以在需要的时候被引入和使用。</li><li>优点：通过将代码按照功能分割，提供更好的封装性和隔离性。</li><li>方式： <ul><li>AMD（Asynchronous Module Definition）：采用异步加载模块的方式，最著名的实现是 RequireJS。</li><li>CommonJS：采用同步加载模块的方式，主要用于服务器端的模块化，Node.js 就是基于 CommonJS 规范的。</li><li>ES6（ECMAScript 2015）模块化：在 ES6 中，官方引入了原生的模块化支持，通过 import 和 export 关键字来导入和导出模块。</li></ul></li></ul><h2 id="简述-expires-和-cache-control" tabindex="-1"><a class="header-anchor" href="#简述-expires-和-cache-control"><span>简述 Expires 和 Cache-Control</span></a></h2><p>Expires 和 Cache-Control 是 HTTP 响应头部中的两个字段，用于控制浏览器对资源缓存的行为。</p><ul><li><p>Expires：Expires 字段是一个日期/时间值，指定了资源的过期时间。当浏览器请求资源时，它会检查该资源的 Expires 字段，如果当前时间在过期时间之前，浏览器会直接从缓存中加载资源，而不发送请求到服务器。如果过期时间已经过去，浏览器会重新请求服务器获取最新的资源。Expires 字段的值是一个具体的过期时间，例如：Expires: Wed, 01 Jan 2025 00:00:00 GMT。</p></li><li><p>Cache-Control：Cache-Control 字段是一个用于控制缓存行为的指令集合。它可以包含多个指令，每个指令之间使用逗号分隔。常见的指令有：</p><ol><li>public：允许任意缓存（包括 CDN 和浏览器缓存）缓存该资源。</li><li>private：只允许客户端浏览器缓存该资源，而不允许 CDN 或代理服务器缓存。</li><li>no-cache：表示缓存服务器在返回缓存资源之前必须先与源服务器进行验证，以确保资源仍然有效。</li><li>max-age：指定资源在缓存中的最大存储时间（以秒为单位），例如：Cache-Control: max-age=3600 表示资源在缓存中最多保留 1 小时。</li><li>no-store：指示缓存服务器不应存储任何与请求和响应相关的内容。</li></ol></li></ul><p>Cache-Control 的优先级高于 Expires，如果两者都存在，Cache-Control 的指令会覆盖 Expires 字段。 Expires 和 Cache-Control 的使用可以提高网站的性能和加载速度，通过合理设置缓存策略，可以减少对服务器的请求次数，提升用户体验。</p><h2 id="关于-http2-0-的概念和描述" tabindex="-1"><a class="header-anchor" href="#关于-http2-0-的概念和描述"><span>关于 HTTP2.0 的概念和描述</span></a></h2><p>HTTP/2.0（简称 HTTP2）是 HTTP 协议的下一代版本，于 2015 年发布。它是对 HTTP/1.1 的重大改进，旨在提高性能、效率和安全性。</p><ul><li>二进制协议：HTTP/2 使用二进制格式传输数据，而不是 HTTP/1.1 的文本格式。这使得数据的解析和传输更高效，减少了解析时间和网络带宽的占用。</li><li>多路复用：HTTP/2 引入了多路复用的概念，允许在单个连接上同时传输多个请求和响应。这消除了 HTTP/1.1 中的队头阻塞问题，提高了并发性能，减少了延迟。</li><li>Header 压缩：HTTP/2 使用了一种称为 HPACK 的压缩算法，对请求和响应的 Header 进行压缩，减少了数据传输的大小。这降低了带宽消耗，加快了页面加载速度。</li><li>服务器推送：HTTP/2 支持服务器主动推送资源到客户端缓存，无需客户端明确请求。这样可以减少往返时间，提前将所需资源发送给客户端，加快页面加载速度。</li><li>流量控制：HTTP/2 引入了流的概念，允许客户端和服务器之间对流量进行控制。这样可以避免过载和拥塞，优化网络性能。</li><li>安全性：HTTP/2 要求使用加密的传输协议（如 TLS），因此提供了更高的安全性，保护数据的机密性和完整性。</li></ul><p>目标：提高网页性能和用户体验，通过优化传输效率和并发处理能力，减少延迟和带宽消耗。它与 HTTP/1.1 兼容，无需对现有的 Web 应用程序进行太多的修改，只需升级服务器和客户端的软件即可享受 HTTP/2 的好处。</p><h2 id="简述-cookie-的理解" tabindex="-1"><a class="header-anchor" href="#简述-cookie-的理解"><span>简述 cookie 的理解</span></a></h2><p>Cookie 是一种在客户端（通常是浏览器）存储小段数据的机制。它是由服务器通过 HTTP 响应头部中的 Set-Cookie 字段发送给客户端，并保存在客户端的浏览器中。随后，客户端在后续的 HTTP 请求中通过 Cookie 字段将该数据发送回服务器。</p><ul><li>存储数据：Cookie 可以存储少量的文本数据，通常用于记录用户的身份认证信息、会话状态、用户偏好设置等。每个 Cookie 都有一个名称和对应的值。</li><li>域名关联：Cookie 与特定的域名关联。当浏览器向服务器发送请求时，会自动将与该域名关联的 Cookie 发送到服务器，从而实现跨请求的数据传递。</li><li>生命周期：每个 Cookie 都有一个生命周期，可以通过设置过期时间（Expires）或最大存活时间（Max-Age）来控制。一旦过期，浏览器将不再发送该 Cookie 到服务器。</li><li>安全性：Cookie 可以设置为只在通过 HTTPS 加密的连接中传输，从而提供一定的安全性。此外，可以通过设置 HttpOnly 标志，禁止 JavaScript 访问 Cookie，减少被恶意脚本利用的风险。</li><li>限制：每个域名下的 Cookie 数量和总大小都有限制。不同浏览器对 Cookie 的限制有所不同，通常限制在几千个 Cookie 和几百 KB 的总大小。</li><li>隐私问题：由于 Cookie 在客户端存储用户数据，存在一定的隐私问题。为了保护用户隐私，现代浏览器提供了对 Cookie 的控制选项，允许用户删除、禁用或限制 Cookie 的使用。</li></ul><p>Cookie 在 Web 开发中广泛应用，用于实现用户认证、会话管理、个性化设置等功能。</p><h2 id="cookie-和-session-的区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-session-的区别"><span>Cookie 和 Session 的区别</span></a></h2><p>Cookie 和 Session 是用于在 Web 应用程序中跟踪用户状态和保持会话的两种不同的机制。</p><ul><li>存储位置：Cookie 是在客户端（通常是浏览器）存储的一小段数据，而 Session 是在服务器端存储的数据。</li><li>数据存储方式：Cookie 将数据以键值对的形式存储在客户端的浏览器中，而 Session 将数据存储在服务器端的内存或持久化存储中（如数据库或文件系统）。</li><li>数据安全性：由于 Cookie 存储在客户端，所以可以被用户和其他应用程序访问和修改，存在一定的安全风险。而 Session 存储在服务器端，对于客户端是不可见的，提供了更高的安全性。</li><li>存储容量：Cookie 的存储容量有限，通常限制在几 KB 到几十 KB 之间。而 Session 在服务器端存储，可以存储更大量的数据。</li><li>生命周期：Cookie 可以设置过期时间，可以在客户端存储一段时间，即使用户关闭浏览器后仍然有效。而 Session 的生命周期通常与用户会话相关联，当用户关闭浏览器或一段时间不活动时，会话会过期并被清除。</li><li>跨页面传递：由于 Cookie 存储在客户端，所以可以在不同页面之间传递和共享。而 Session 存储在服务器端，需要使用 Cookie 或其他机制来传递会话标识符（如 Session ID）来实现跨页面的会话。</li></ul><p>在实际应用中，Cookie 和 Session 常常结合使用。通常情况下，服务器会在客户端设置一个 Cookie，其中包含一个唯一的会话标识符（Session ID），然后将会话数据存储在服务器端的 Session 中。当客户端发送请求时，服务器通过 Session ID 来识别和恢复相应的会话数据。 总结起来，Cookie 是在客户端存储的一小段数据，用于跟踪用户状态和在客户端保持会话；而 Session 是在服务器端存储的数据，用于存储和管理用户会话状态。</p><h2 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc"><span>BFC</span></a></h2><p>BFC 指的是“块级格式化上下文”（Block Formatting Context）。它是 Web 页面中一种用于控制块级元素布局和相对定位的渲染环境。 BFC 是一个独立的渲染区域，具有一些特定的规则和属性，影响其内部元素的布局和外部元素与之的相互影响。BFC 的主要作用是解决盒模型布局中的一些常见问题，提供更可靠的布局机制。</p>',42)]))}const p=l(n,[["render",s],["__file","basics.html.vue"]]),h=JSON.parse('{"path":"/interview/web/basics.html","title":"前端常识","lang":"zh-CN","frontmatter":{"title":"前端常识","description":"前端常识性问题"},"headers":[{"level":2,"title":"对 WEB 标准以及 W3C 的理解和认识","slug":"对-web-标准以及-w3c-的理解和认识","link":"#对-web-标准以及-w3c-的理解和认识","children":[]},{"level":2,"title":"浏览器渲染原理,回流，重绘的概念和原理","slug":"浏览器渲染原理-回流-重绘的概念和原理","link":"#浏览器渲染原理-回流-重绘的概念和原理","children":[]},{"level":2,"title":"前端页面的组成","slug":"前端页面的组成","link":"#前端页面的组成","children":[]},{"level":2,"title":"HTTP 状态码有哪些","slug":"http-状态码有哪些","link":"#http-状态码有哪些","children":[]},{"level":2,"title":"常用浏览器内核","slug":"常用浏览器内核","link":"#常用浏览器内核","children":[]},{"level":2,"title":"优雅降级和渐进增强","slug":"优雅降级和渐进增强","link":"#优雅降级和渐进增强","children":[]},{"level":2,"title":"什么是盒子模型","slug":"什么是盒子模型","link":"#什么是盒子模型","children":[]},{"level":2,"title":"前端模块化的理解","slug":"前端模块化的理解","link":"#前端模块化的理解","children":[]},{"level":2,"title":"简述 Expires 和 Cache-Control","slug":"简述-expires-和-cache-control","link":"#简述-expires-和-cache-control","children":[]},{"level":2,"title":"关于 HTTP2.0 的概念和描述","slug":"关于-http2-0-的概念和描述","link":"#关于-http2-0-的概念和描述","children":[]},{"level":2,"title":"简述 cookie 的理解","slug":"简述-cookie-的理解","link":"#简述-cookie-的理解","children":[]},{"level":2,"title":"Cookie 和 Session 的区别","slug":"cookie-和-session-的区别","link":"#cookie-和-session-的区别","children":[]},{"level":2,"title":"BFC","slug":"bfc","link":"#bfc","children":[]}],"git":{"updatedTime":1709135432000,"contributors":[{"name":"Mrlishizhen","username":"Mrlishizhen","email":"718647063@qq.com","commits":3,"url":"https://github.com/Mrlishizhen"}]},"filePathRelative":"interview/web/basics.md"}');export{p as comp,h as data};
