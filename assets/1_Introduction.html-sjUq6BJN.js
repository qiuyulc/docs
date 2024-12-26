import{_ as n,c as a,a as e,o as t}from"./app-Bj_TYjpC.js";const p={};function l(i,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述"><span>1.概述</span></a></h2><p>TypeScript 是微软公司开发的一种基于 JavaScript 语言的变成语言。目的是为了增强 JavaScript 的功能，可以将它看成 JavaScript 的超集。</p><h2 id="_2-类型的概念" tabindex="-1"><a class="header-anchor" href="#_2-类型的概念"><span>2.类型的概念</span></a></h2><p>类型(type)指的是一组具有相同特征的值。如果两个值具有某种相同的特征，就可以说，他们属于同一种类型。</p><p>类型是人为添加的一种编程约束和用法提示。</p><h2 id="_3-动态类型与静态类型" tabindex="-1"><a class="header-anchor" href="#_3-动态类型与静态类型"><span>3.动态类型与静态类型</span></a></h2><p>JavaScript 属于动态类型，js 解析器可以根据赋值自动分析变量类型。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">delete</span> y<span class="token punctuation">.</span>foo<span class="token punctuation">;</span></span>
<span class="line">y<span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 引入了一个更强大、更严格的类型系统，属于静态类型语言 上面的代码在 TypeScript 中都会报错。</p><h2 id="_4-静态类型的有点" tabindex="-1"><a class="header-anchor" href="#_4-静态类型的有点"><span>4.静态类型的有点</span></a></h2><ol><li><p>有利于代码的静态分析。</p></li><li><p>有利于发现错误。</p></li></ol><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>messege<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>更好的 IDE 支持，做到语法提示和自动补全。</li><li>提供了代码文档。</li><li>有助于代码重构。</li></ol><h2 id="_5-静态类型的缺点" tabindex="-1"><a class="header-anchor" href="#_5-静态类型的缺点"><span>5.静态类型的缺点</span></a></h2><ol><li><p>丧失了动态类型的代码灵活性。 JavaScript 之所以被那么多人喜欢不就是因为用起来没那么多的限制</p></li><li><p>增加了编程工作量。</p></li><li><p>更高的学习成本</p></li><li><p>引入了独立的编译步骤</p></li><li><p>兼容性问题</p></li></ol>`,16)]))}const c=n(p,[["render",l],["__file","1_Introduction.html.vue"]]),r=JSON.parse('{"path":"/typescript/1_Introduction.html","title":"简介","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2.类型的概念","slug":"_2-类型的概念","link":"#_2-类型的概念","children":[]},{"level":2,"title":"3.动态类型与静态类型","slug":"_3-动态类型与静态类型","link":"#_3-动态类型与静态类型","children":[]},{"level":2,"title":"4.静态类型的有点","slug":"_4-静态类型的有点","link":"#_4-静态类型的有点","children":[]},{"level":2,"title":"5.静态类型的缺点","slug":"_5-静态类型的缺点","link":"#_5-静态类型的缺点","children":[]}],"git":{"updatedTime":1709135719000,"contributors":[{"name":"Mrlishizhen","username":"Mrlishizhen","email":"718647063@qq.com","commits":2,"url":"https://github.com/Mrlishizhen"}]},"filePathRelative":"typescript/1_Introduction.md"}');export{c as comp,r as data};
