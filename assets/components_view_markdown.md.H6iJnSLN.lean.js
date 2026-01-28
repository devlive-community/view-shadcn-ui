import{d as C,u as v,C as E,o as B,c as A,j as a,a as p,E as i,w as e,ag as t,n as _,h as b,p as d}from"./chunks/framework.DIrgMjJZ.js";const D={class:"vp-raw"},S=JSON.parse('{"title":"Markdown 编辑器 (Markdown)","description":"","frontmatter":{"title":"Markdown 编辑器 (Markdown)"},"headers":[],"relativePath":"components/view/markdown.md","filePath":"components/view/markdown.md","lastUpdated":1766222931000}'),q={name:"components/view/markdown.md"},V=C({...q,setup(f){const{isDark:m}=v(),l=b(()=>m.value),r=d(`# 欢迎使用 ShadcnMarkdown

这是一个基于 **marked** 库的 Markdown 编辑器组件。

## 功能

- 支持**粗体**和*斜体*
- 支持\`行内代码\`
- 支持[链接](https://example.com)`),o=d(`# 编辑模式

在这里输入您的 Markdown 内容...`),g=d(`# 分屏模式

左侧编辑，右侧实时预览。

## 代码示例

\`\`\`javascript
console.log('Hello World!')
\`\`\``),y=d(`# 液态玻璃效果

支持**液态玻璃效果**的 Markdown 编辑器。

## 特性

- 毛玻璃背景模糊
- 饱和度增强
- 优雅的视觉效果`),F=d(`# 自定义高度

可以通过 height 属性自定义组件高度。`),u=d("");return(w,s)=>{const h=E("ShadcnMarkdown"),k=E("CodeRunner"),c=E("ApiTable");return B(),A("div",null,[s[6]||(s[6]=a("h1",{id:"介绍",tabindex:"-1"},[p("介绍 "),a("a",{class:"header-anchor",href:"#介绍","aria-label":'Permalink to "介绍"'},"​")],-1)),s[7]||(s[7]=a("br",null,null,-1)),s[8]||(s[8]=a("p",null,[p("本文档主要用于描述 "),a("code",null,"ShadcnMarkdown"),p(" 组件的一些特性和用法。该组件基于成熟的 "),a("strong",null,"marked"),p(" 库实现 Markdown 解析，使用 Tailwind CSS 样式。")],-1)),s[9]||(s[9]=a("h2",{id:"用法",tabindex:"-1"},[p("用法 "),a("a",{class:"header-anchor",href:"#用法","aria-label":'Permalink to "用法"'},"​")],-1)),i(k,{title:"用法"},{default:e(()=>[i(h,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=n=>r.value=n),mode:"preview",dark:l.value},null,8,["modelValue","dark"])]),_:1}),s[10]||(s[10]=t("",2)),i(k,{title:"编辑模式"},{default:e(()=>[i(h,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n),mode:"edit",dark:l.value},null,8,["modelValue","dark"])]),_:1}),s[11]||(s[11]=t("",2)),i(k,{title:"分屏模式"},{default:e(()=>[i(h,{modelValue:g.value,"onUpdate:modelValue":s[2]||(s[2]=n=>g.value=n),mode:"split",dark:l.value},null,8,["modelValue","dark"])]),_:1}),s[12]||(s[12]=t("",2)),a("div",D,[i(k,{title:"液态玻璃效果 (Glass)"},{default:e(()=>[a("div",{class:_(["h-96 rounded-lg flex items-center justify-center p-6",l.value?"bg-gradient-to-r from-blue-900 to-indigo-900":"bg-gradient-to-r from-blue-400 to-indigo-400"])},[i(h,{modelValue:y.value,"onUpdate:modelValue":s[3]||(s[3]=n=>y.value=n),mode:"split",glass:"",dark:l.value},null,8,["modelValue","dark"])],2)]),_:1})]),s[13]||(s[13]=t("",2)),i(k,{title:"自定义高度"},{default:e(()=>[i(h,{modelValue:F.value,"onUpdate:modelValue":s[4]||(s[4]=n=>F.value=n),mode:"split",height:"300px",dark:l.value},null,8,["modelValue","dark"])]),_:1}),s[14]||(s[14]=t("",2)),i(k,{title:"占位符"},{default:e(()=>[i(h,{modelValue:u.value,"onUpdate:modelValue":s[5]||(s[5]=n=>u.value=n),mode:"edit",placeholder:"请输入您的内容...",dark:l.value},null,8,["modelValue","dark"])]),_:1}),s[15]||(s[15]=t("",2)),i(c,{title:"Markdown 编辑器",headers:["属性","描述","类型","默认值","支持列表"],columns:[["modelValue","绑定值","string","-","-"],["mode","显示模式","enum","split","preview | edit | split"],["dark","暗黑模式","boolean","false","-"],["glass","液态玻璃效果","boolean","false","-"],["height","组件高度","string","400px","-"],["placeholder","编辑模式占位符","string","请输入 Markdown 内容...","-"]]}),s[16]||(s[16]=a("h2",{id:"markdown-编辑器-事件",tabindex:"-1"},[p("Markdown 编辑器 事件 "),a("a",{class:"header-anchor",href:"#markdown-编辑器-事件","aria-label":'Permalink to "Markdown 编辑器 事件"'},"​")],-1)),i(c,{title:"Markdown 编辑器 事件",headers:["事件","描述","参数"],columns:[["update:modelValue","值更新时触发","value: string"],["on-change","内容改变时触发","value: string"]]}),s[17]||(s[17]=t("",2))])}}});export{S as __pageData,V as default};
