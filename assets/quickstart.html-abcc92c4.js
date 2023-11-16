import{_ as e,r as o,o as c,c as l,a as s,b as n,d as t,e as p}from"./app-e9bf6a4a.js";const u={},i=p(`<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><p>本节将介绍如何在项目中使用 zView。</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><h3 id="完整引入" tabindex="-1"><a class="header-anchor" href="#完整引入" aria-hidden="true">#</a> 完整引入</h3><p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="volar-支持" tabindex="-1"><a class="header-anchor" href="#volar-支持" aria-hidden="true">#</a> Volar 支持</h4><p>如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;element-plus/global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="按需导入" tabindex="-1"><a class="header-anchor" href="#按需导入" aria-hidden="true">#</a> 按需导入</h3><p>您需要使用额外的插件来导入要使用的组件。</p><h4 id="自动导入" tabindex="-1"><a class="header-anchor" href="#自动导入" aria-hidden="true">#</a> 自动导入</h4><p>首先你需要安装<code>unplugin-vue-components</code> 和 <code>unplugin-auto-import</code>这两款插件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import
</code></pre></div><p>然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中</p><h5 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h5><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h5><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> AutoImport <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-auto-import/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Components <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),r={href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/unplugin/unplugin-vue-components#installation",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/unplugin/unplugin-auto-import#install",target:"_blank",rel:"noopener noreferrer"},m=p(`<h4 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> Nuxt</h4><p>对于 Nuxt 用户，只需要安装 <code>@element-plus/nuxt</code> 即可。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @element-plus/nuxt
</code></pre></div><p>然后将下面的代码写入你的配置文件。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// nuxt.config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@element-plus/nuxt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,5),h={href:"https://github.com/element-plus/element-plus-nuxt#readme",target:"_blank",rel:"noopener noreferrer"},f=s("h3",{id:"手动导入",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#手动导入","aria-hidden":"true"},"#"),n(" 手动导入")],-1),v={href:"https://webpack.js.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/element-plus/unplugin-element-plus",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/element-plus/unplugin-element-plus#readme",target:"_blank",rel:"noopener noreferrer"},w=p(`<div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>我是 ElButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;unplugin-element-plus/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,2);function b(x,E){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,s("p",null,[n("想了解更多打包 ("),s("a",r,[n("Rollup"),t(a)]),n(", "),s("a",k,[n("Vue CLI"),t(a)]),n(") 和配置工具，请参考 "),s("a",d,[n("unplugin-vue-components"),t(a)]),n(" 和 "),s("a",g,[n("unplugin-auto-import"),t(a)]),n("。")]),m,s("p",null,[n("配置文档参考 "),s("a",h,[n("docs"),t(a)]),n("。")]),f,s("p",null,[n("zView 提供了基于 ES Module 的开箱即用的 "),s("a",v,[n("Tree Shaking"),t(a)]),n(" 功能。")]),s("p",null,[n("但你需要安装 "),s("a",y,[n("unplugin-element-plus"),t(a)]),n(" 来导入样式。 配置文档参考 "),s("a",_,[n("docs"),t(a)]),n(".")]),w])}const C=e(u,[["render",b],["__file","quickstart.html.vue"]]);export{C as default};
