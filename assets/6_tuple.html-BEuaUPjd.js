import{_ as s,c as a,a as p,o as t}from"./app-Bj_TYjpC.js";const e={};function l(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="元组" tabindex="-1"><a class="header-anchor" href="#元组"><span>元组</span></a></h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p>元组(tuple) 是 TypeScript 特有的数据类型，JavaScript 没有单独区分这种类型。它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。</p><p>格式：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> s<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>元组在声明时必须给定类型，否则 TypeScript 会自动推断为一个联合类型的数组。</p><p>元组成员的类型可以添加问号后缀(?) ，表示该成员可选。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">?</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意可选类型只能用于元组的尾部成员。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">myTuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>元组类型一般是有成员限制的，但是可以通过扩展运算符(<code>...</code>)来设置不限成员数量的元组。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">NameNums</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> a<span class="token operator">:</span> NamedNums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> b<span class="token operator">:</span> NamedNums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（<code>...</code>）可以出现在元组的任意位置。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">t1</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">t2</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">t3</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>元组的成员可以添加成员名，这个成员名是说明性的，可以任意取名，没有实际作用</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Color</span> <span class="token operator">=</span> <span class="token punctuation">[</span>red<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> green<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> blue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>元组可以通过方括号，读取成员类型</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Tuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> Tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//number</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以通过 number 来提取元组的类型成一个联合类型</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Tuple</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> Date<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">TupleEl</span> <span class="token operator">=</span> Tuple<span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// string|number|Date</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-只读元组" tabindex="-1"><a class="header-anchor" href="#_2-只读元组"><span>2. 只读元组</span></a></h2><p>元组也可以只读，不允许修改，有两种写法。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// 写法一</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">t</span> <span class="token operator">=</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写法二</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">t</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跟数组一样，只读元组可以被元组赋值，元组不能被只读元组赋值</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">t1</span> <span class="token operator">=</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">t2</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> t2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> y<span class="token operator">:</span> t1 <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> y<span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于只读元组不能代替元组，所以会产生一些令人困惑的报错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">distanceFromOrigin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> y <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">distanceFromOrigin</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候就需要使用类型断言来解决这个问题</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token function">distanceFromOrigin</span><span class="token punctuation">(</span>point <span class="token keyword">as</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-成员数量的推断" tabindex="-1"><a class="header-anchor" href="#_3-成员数量的推断"><span>3. 成员数量的推断</span></a></h2><p>成员推断需要结合元组的情况来进行判断</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>point<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 报错</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>point<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 报错</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果使用了<code>...</code>运算符，那么 TypeScript 就无法推断出成员数量。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> myTuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>myTuple<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 正确</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可以看出，它的推断只根据类型。而不是根据实际的赋予的值。</p><h2 id="_4-扩展运算符与成员数量" tabindex="-1"><a class="header-anchor" href="#_4-扩展运算符与成员数量"><span>4. 扩展运算符与成员数量</span></a></h2><p>扩展运算符(<code>...</code>)将数组(注意，不是元组)转换为一个逗号分割的序列，这时 TypeScript 会认为这个序列的成员数量是不确定的，因为数组的成员数量是不确定的。</p><p>这导致如果函数调用时，使用扩展运算符传入函数参数，可能发生参数数量与数组长度不匹配的报错。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例会报错，原因是函数 add()只能接受两个参数，但是传入的是...arr，TypeScript 认为转换后的参数个数是不确定的。</p><p>有些函数可以接受任意数量的参数，这时使用扩展运算符就不会报错</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>console.log()</code>可以接受任意数量的参数吗，所以传入<code>...arr</code>就不会报错。</p><p>解决这个问题的一个方法，就是把成员数量不确定的数组，写成成员数量确定的元组，在使用扩展运算符。</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种做法就是使用 <code>as const</code>断言</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面这种写法也可以，因为 TypeScript 会认为 arr 的类型是 readonly [1, 2]，这是一个只读的值类型，可以当作数组，也可以当作元组。</p>`,49)]))}const i=s(e,[["render",l],["__file","6_tuple.html.vue"]]),u=JSON.parse('{"path":"/typescript/6_tuple.html","title":"元组","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 只读元组","slug":"_2-只读元组","link":"#_2-只读元组","children":[]},{"level":2,"title":"3. 成员数量的推断","slug":"_3-成员数量的推断","link":"#_3-成员数量的推断","children":[]},{"level":2,"title":"4. 扩展运算符与成员数量","slug":"_4-扩展运算符与成员数量","link":"#_4-扩展运算符与成员数量","children":[]}],"git":{"updatedTime":1709200017000,"contributors":[{"name":"Mrlishizhen","username":"Mrlishizhen","email":"718647063@qq.com","commits":1,"url":"https://github.com/Mrlishizhen"}]},"filePathRelative":"typescript/6_tuple.md"}');export{i as comp,u as data};
