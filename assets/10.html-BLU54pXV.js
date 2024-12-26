import{_ as n,c as a,a as e,o as p}from"./app-Bj_TYjpC.js";const l={};function t(i,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="自动清空上次打包文件" tabindex="-1"><a class="header-anchor" href="#自动清空上次打包文件"><span>自动清空上次打包文件</span></a></h1><h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置"><span>1.配置</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//入口</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">//相对路径</span></span>
<span class="line">  <span class="token comment">//输出</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//文件的输出路径</span></span>
<span class="line">    <span class="token comment">//__dirname nodejs的变量，代表当前文件的文件夹目录</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//相对路径</span></span>
<span class="line">    <span class="token comment">//文件名</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/js/main.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">//自动清空上次打包的内容</span></span>
<span class="line">    <span class="token comment">//原理：在打包前，将path整个目录内容清空，在进行打包。</span></span>
<span class="line">    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//加载器</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 用来匹配 .css 结尾的文件</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">//loader 只能使用一个 loader</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token comment">// compiles Less to CSS</span></span>
<span class="line">          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token comment">// 将 JS 字符串生成为 style 节点</span></span>
<span class="line">          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 将 CSS 转化成 CommonJS 模块</span></span>
<span class="line">          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 将 Sass 编译成 CSS</span></span>
<span class="line">          <span class="token string">&quot;sass-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.styl$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token string">&quot;stylus-loader&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 将stylus编译成css文件</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif|webp)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;asset&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">//小于10kb的图片转base64</span></span>
<span class="line">          <span class="token comment">//优点：减少请求数量 缺点：体积会更大</span></span>
<span class="line">          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 10kb</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">//输出图片名称</span></span>
<span class="line">          <span class="token comment">//[hash:10] hash 取前10位</span></span>
<span class="line">          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;static/images/[hash:10][ext][query]&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">//插件</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">//plugin的配置</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//模式</span></span>
<span class="line">  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-运行指令" tabindex="-1"><a class="header-anchor" href="#_2-运行指令"><span>2.运行指令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">npx webpack</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>观察 dist 目录资源情况。</p>`,6)]))}const o=n(l,[["render",t],["__file","10.html.vue"]]),r=JSON.parse('{"path":"/webpack/10.html","title":"自动清空上次打包文件","lang":"zh-CN","frontmatter":{"title":"自动清空上次打包文件","description":"自动清空上次打包文件"},"headers":[{"level":2,"title":"1.配置","slug":"_1-配置","link":"#_1-配置","children":[]},{"level":2,"title":"2.运行指令","slug":"_2-运行指令","link":"#_2-运行指令","children":[]}],"git":{"updatedTime":1723039053000,"contributors":[{"name":"Mrlishizhen","username":"Mrlishizhen","email":"718647063@qq.com","commits":2,"url":"https://github.com/Mrlishizhen"}]},"filePathRelative":"webpack/10.md"}');export{o as comp,r as data};
