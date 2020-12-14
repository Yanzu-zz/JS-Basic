/**
 * 网页的加载过程
 *    DNS 解析：域名 -> IP地址
 *    浏览器根据 IP 地址向服务器发起 HTTP 请求
 *    服务器处理 HTTP 请求，并返回给浏览器
 * 
 * 网页的渲染过程
 *    根据 HTML 代码生成 DOM Tree
 *    根据 CSS 代码生成 CSSOM
 *    将 DOM Tree 和 CSSOM 整合形成 Render Tree
 *    根据 Render Tree 渲染页面
 *    遇到 <script> 则暂停渲染，优先加载并执行 JS 代码，完成再继续（JS 线程和 DOM 渲染共用一个线程）
 *    直至把 Render Tree 渲染完成
 */


/**
 * window.onload 和 document.DOMContentLoaded 的区别
 * 可以回去看 Promise.js
 */

// 页面的全部资源加载完才会执行，包括图片、视频等
window.addEventListener('load', function () {})

// DOM 渲染完才执行，此时图片、视频还可能没有加载完（图片过大请求慢之类的）
document.addEventListener('DOMContentLoaded', function () {})


/**
 * SSR（服务器端渲染）
 *    将网页和数据一起加载，一起渲染
 * 
 * 非 SSR（前后端分离）
 *    先加载网页，再加载数据，再渲染数据
 * 
 * 早先的 JSP ASP PHP，现在的 vue React SSR
 */