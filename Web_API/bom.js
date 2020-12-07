/**
 * BOM（Browser Object Model 浏览器对象模型）
 * 就是一堆简单粗暴的 API，不会就去网上查就好了
 */


/**
 * 考题
 * 1. 如何识别浏览器的类型？
 * 2. 分析拆解 url 各个部分
 */

/**
 * 知识点
 * 1. * navigator 浏览器的信息
 * 2. screen    屏幕的信息
 * 3. * location  网站地址的信息
 * 4. history   浏览历史的信息
 */

// navigator 和 screen
const ua = navigator.userAgent // userAgent 简称 ua
console.log(ua)
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)

// screen
console.log(screen.width)
console.log(screen.height)


// location 和 history
console.log(location.href)      // 完整网址
console.log(location.protocol)  // http:
console.log(location.host)      // localhost:8001
console.log(location.pathname)  // /Web_API/
console.log(location.search)    // ?abc=123
console.log(location.hash)      // #hashName

// history
// history.back()
// history.forward()