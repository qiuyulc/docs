import{_ as s,c as a,a as p,o as l}from"./app-Bj_TYjpC.js";const t="/blog/assets/flex-C0xIOGD7.png",e="/blog/assets/grid-T8sDrb_s.png",i={};function c(o,n){return l(),a("div",null,n[0]||(n[0]=[p('<h1 id="css-布局" tabindex="-1"><a class="header-anchor" href="#css-布局"><span>CSS 布局</span></a></h1><h4 id="布局方式" tabindex="-1"><a class="header-anchor" href="#布局方式"><span>布局方式</span></a></h4><ul><li>正常布局流</li><li>display 属性</li><li>弹性盒子</li><li>网格</li><li>浮动</li><li>定位</li><li>CSS 表格布局</li><li>多列布局</li></ul><h4 id="正常布局流" tabindex="-1"><a class="header-anchor" href="#正常布局流"><span>正常布局流</span></a></h4><ul><li>块级元素</li><li>行内元素</li></ul><p>覆盖默认的布局行为</p><ul><li>display</li><li>浮动</li><li>position</li><li>表格布局</li><li>多列布局</li></ul><h4 id="display-属性" tabindex="-1"><a class="header-anchor" href="#display-属性"><span>display 属性</span></a></h4><ul><li>block</li><li>inline</li><li>inline-block</li><li>flex</li><li>...</li></ul><h4 id="弹性盒子" tabindex="-1"><a class="header-anchor" href="#弹性盒子"><span>弹性盒子</span></a></h4><p>设置<code>display:flex</code></p><p>模型说明</p><p><img src="'+t+'" alt="alt text"></p><ul><li>主轴：水平方向</li><li>交叉轴：垂直方向</li><li>设置<code>display:flex</code>的元素为容器，其直接子元素为 flex 项</li></ul><p>属性：</p><ul><li><p>flex-direction：设置主轴方向</p><ul><li>row：水平方向，从左到右</li><li>row-reverse：水平方向，从右到左</li><li>column：垂直方向，从上到下</li><li>column-reverse：垂直方向，从下到上</li></ul></li><li><p>flex-wrap：设置是否换行</p></li><li><p>flex-flow：flex-direction 和 flex-wrap 的简写</p><ul><li>flex-flow:row wrap;</li></ul></li><li><p>flex: 设置 flex 项的伸缩比例</p><ul><li>flex 是一个可以指定最多三个不同值的缩写属性</li><li>flex-grow:占比</li><li>flex-shrink: 缩小比例</li><li>flex-basis:最小宽度</li></ul></li><li><p>justify-content:设置主轴的对齐方式。</p></li><li><p>align-items:设置交叉轴的对齐方式。</p></li><li><p>align-self:设置单个子元素的交叉轴的对齐方式。</p></li><li><p>order:设置子元素的排序顺序 值越小排名越靠前，最小值为-1</p></li></ul><h4 id="grid-布局" tabindex="-1"><a class="header-anchor" href="#grid-布局"><span>Grid 布局</span></a></h4><p>设置<code>display:grid</code></p><p><img src="'+e+`" alt="alt text"></p><p>一个网格通常具有许多的列（column）与行（row），以及行与行、列与列之间的间隙，这些间隙一般被称为沟槽（gutter）</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">/* grid-template-rows: 1fr 1fr 1fr; */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>grid-template-columns：定义网格的列数以及每列的宽度</li><li>grid-template-rows：定义网格的行数以及每行的高度</li><li>grid-column-gap：定义网格列与列之间的间隙</li><li>grid-row-gap：定义网格行与行之间的间隙（使用 grid-gap 可以同时设置 grid-column-gap 和 grid-row-gap，注意单位不能是 fr）</li><li>grid-gap(gap)：定义网格行与行之间的间隙（使用 grid-gap 可以同时设置 grid-column-gap 和 grid-row-gap，注意单位不能是 fr）</li><li>grid-template-columns: repeat(3, 1fr); 重复 3 次，每次 1fr</li><li>grid-auto-rows: minmax(100px, auto); 定义行高最小 100px，最大为 auto。也可以是一个固定值 100px</li></ul><p>fr 单位分配的是可用空间而非所有空间，所以如果某一个包含的内容变多了，那么整个可用空间就会减少，可用空间是不包含哪些已经确定被占用的空间的。</p><h5 id="自动使用多列填充" tabindex="-1"><a class="header-anchor" href="#自动使用多列填充"><span>自动使用多列填充</span></a></h5><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">/*形成一个最少宽度200px的网格，网格会自动根据容器宽度进行调整，每一列的宽度总是大雨200px*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="基于线的元素放置" tabindex="-1"><a class="header-anchor" href="#基于线的元素放置"><span>基于线的元素放置</span></a></h5><ul><li>grid-column-start：定义网格项的起始列</li><li>grid-column-end：定义网格项的结束列</li><li>grid-row-start：定义网格项的起始行</li><li>grid-row-end：定义网格项的结束行</li></ul><p>简写：</p><ul><li>grid-column：grid-column-start 和 grid-column-end 的简写</li><li>grid-row：grid-row-start 和 grid-row-end 的简写</li></ul><p>注意：开始与结束的线的序号要使用<code>/</code>符号分开。</p><h5 id="使用-grid-template-areas-属性放置元素" tabindex="-1"><a class="header-anchor" href="#使用-grid-template-areas-属性放置元素"><span>使用 grid-template-areas 属性放置元素</span></a></h5><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token string">&quot;header header&quot;</span></span>
<span class="line">    <span class="token string">&quot;sidebar content&quot;</span></span>
<span class="line">    <span class="token string">&quot;footer footer&quot;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 3fr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">article</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">grid-area</span><span class="token punctuation">:</span> content<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">aside</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">grid-area</span><span class="token punctuation">:</span> sidebar<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">footer</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用规则：</p><ol><li>需要填满网格的每个格子。</li><li>对于某个横跨多个格子的元素，重复写上那个元素<code>grid-area</code>属性定义的区域名字。</li><li>所有名字只能出现在一个连续的区域，不能在不同的位置出现。</li><li>一个连续的区域必须是一个矩形。</li><li>使用<code>.</code>符号，让一个格子留空。</li></ol><p>CSS网格实现的网格排版框架</p><p>推荐阅读</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout#guides" target="_blank" rel="noopener noreferrer">CSS网格指南</a></li><li><a href="https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html" target="_blank" rel="noopener noreferrer">CSS 网格检查器</a></li></ul><h4 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动"><span>浮动</span></a></h4><p>float 属性</p><ul><li>left：元素向左浮动</li><li>right：元素向右浮动</li><li>none：元素不浮动</li><li>inherit：元素继承父元素的浮动属性</li></ul><p>应用： 文字环绕图片</p><p>清除浮动：</p><ul><li>clear 属性 <ul><li>left：不允许左侧有浮动元素</li><li>right：不允许右侧有浮动元素</li><li>both：不允许左右两侧有浮动元素</li><li>none：允许两侧有浮动元素</li><li>inherit：元素继承父元素的清除浮动属性</li></ul></li><li>display:flow-root; 清除浮动</li></ul><h4 id="定位" tabindex="-1"><a class="header-anchor" href="#定位"><span>定位</span></a></h4><p>设置 position 属性</p><ul><li>static：默认值，元素按照正常布局流进行排列</li><li>relative：元素相对于其正常位置进行定位</li><li>absolute：元素相对于最近的已定位祖先元素进行定位</li><li>fixed：元素相对于浏览器窗口进行定位</li><li>sticky：元素在跨越特定阈值前为相对定位，之后为固定定位</li></ul><p>层级</p><ul><li>z-index：设置定位元素的层级</li></ul><h4 id="表格布局" tabindex="-1"><a class="header-anchor" href="#表格布局"><span>表格布局</span></a></h4><p>设置<code>display:table</code></p><ul><li>dispaly:table-row</li><li>display:table-cell</li><li>display:table-caption <ul><li>caption-side:bottom|top</li></ul></li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>First of all, tell us your name and age.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>First name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Last name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Age:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">form</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">form div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">form label,</span>
<span class="line">form input</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">form label</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-right</span><span class="token punctuation">:</span> 5%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">form input</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">form p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> table-caption<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">caption-side</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多列布局" tabindex="-1"><a class="header-anchor" href="#多列布局"><span>多列布局</span></a></h4><p>属性：</p><ul><li>column-count：指定列数</li><li>column-width：指定列宽</li><li>column-gap：指定列间距</li><li>column-rule：指定列边框</li><li>column-span：指定列跨度</li><li>column-fill：指定列填充方式</li><li>column-break-before：指定列前换行</li><li>column-break-after：指定列后换行</li><li>column-break-inside：指定列内换行</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Multi-column layout<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Paragraph 1.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Paragraph 2.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57)]))}const r=s(i,[["render",c],["__file","03.html.vue"]]),d=JSON.parse('{"path":"/web/css/03.html","title":"CSS布局","lang":"zh-CN","frontmatter":{"title":"CSS布局","description":"CSS布局"},"headers":[],"git":{"updatedTime":1732785657000,"contributors":[{"name":"qiuyulc","username":"qiuyulc","email":"qiuyulc@gmail.com","commits":1,"url":"https://github.com/qiuyulc"}]},"filePathRelative":"web/css/03.md"}');export{r as comp,d as data};
