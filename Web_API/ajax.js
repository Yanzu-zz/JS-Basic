/**
 * ajax 知识点
 * XMLHttpRequest
 * 状态码
 * 跨域：同源策略，跨域解决方案
 */


/**
 * XMLHttpRequest
 * 
 * xhr.readyState
 *    0 —— 未初始化（还没调用 send()）
 *    1 —— （载入）已调用 send()，正在发送请求
 *    2 —— （载入完成）send()执行完成，已经接收到全部响应内容
 *    3 —— （交互）正在解析响应内容
 *    4 —— （完成）响应内容解析完成，可以在客户端调用
 * 
 * xhr.status（http 状态码）
 *    2xx 表示成功处理请求
 *    3xx 需要重定向，浏览器直接（临时or永久）跳转
 *    4xx 客户端请求错误
 *    5xx 服务端错误
 */
const xhr = new XMLHttpRequest()
// 网络请求一般都不要卡住下面的代码任务，所以是异步

// GET request
xhr.open('GET', './data/test.json', true) // true 是异步的请求
// 状态改变时会触发的回调
xhr.onreadystatechange = function () {
  // 这里的函数异步执行，可参考之前学过的异步模块运行逻辑
  // 只有等于 4，200 时数据才会返回，因为这时候才解析完成
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // console.log(xhr.responseText)
      console.log(
        JSON.parse(xhr.responseText)
      )
    } else {
      console.log('other problem')
    }
  }
}
xhr.send(null)


// 因为 post 请求我们这个简单服务器无法实现，所以就单纯的代码演示
const xhr2 = new XMLHttpRequest()
xhr2.open('POST', '/login', true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText))
    } else {
      console.log('post problem')
    }
  }
}

const postData = {
  user: 'zhangsan',
  password: '123456'
}
// 发送是需要发送 JSON 字符串的，平常别的工具帮你弄好了而已
xhr.send(JSON.stringify(postData))


/**
 * 跨域
 *    所有的跨域，都必须经过 server 端允许和配合
 *    未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号
 *    
 * 
 * 同源策略
 *    ajax 请求时，浏览器要求当前网页和 server 必须同源（安全）
 *    同源：协议、域名、端口，这三者必须一致
 *    注意：同源策略仅限浏览器环境（如爬虫不需要验证）
 *          加载图片、css、js 可无视同源策略
 *          <img/>可用于统计打点，可使用第三方统计服务
 *          <link/>、<script> 可使用 CDN，CDN 一般都是外域
 *          <script> 可实现 JSONP
 * 
 * JSONP
 *    我们先来看个问题：访问 https://imooc.com/，服务端一定会返回一个 html 文件吗？
 *    并不是，服务器可以任意动态拼接数据返回，只要符合 html 格式要求
 *    同理与 <script src="https://xxx.com/a.js">
 * 
 *    <script> 可以绕过跨域限制，服务器又可以任意动态凭借数据返回
 *    所以，<script>就可以获得跨域的数据，只要服务端愿意返回
 *    这就是 JSONP 的基本实现原理
 * 
 * CORS（服务端支持）
 *    服务器端填写
 */

// JSONP（到 html 里去看）
// 配合这个函数
// window.callback = function(data){
//   console.log(data)
// }

// <script src="https://imooc.com/getData.js"></script>
// 这样将返回 callback({x:100, y:200})，上面的回调就会打印出来

// jQuery 实现 jsonp
/* $.ajax({
  url: 'http://xxx.com/x-origin.json',
  dataType: 'jsonp',
  jsonpCallback: 'callbackName',
  success: function (data) {
    console.log(data)
  }
}) */