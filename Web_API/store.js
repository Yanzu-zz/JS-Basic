/**
 * cookie, localStorage, sessionStorage 的区别
 */

/**
 * cookie
 * 本身用于浏览器和 server 通讯
 * 最早是被“借用”到本地存储来，可用 document.cookie = '...' 来修改
 * 
 * 缺点：
 *   存储大小：最大 4KB
 *   http请求时需要发送到服务端，增加请求数据量
 *   只能用 document.cookie = '...' 来修改，太过简陋（没法覆盖，只能追加）
 */


/**
 * localStorage 和 sessionStorage
 * 是 HTML5 专门为存储而设计，最大可存 5M
 * API 简单易用（setItem, getItem）
 * 不会随着 HTTP 请求被发送出去
 * 
 * 两者的区别：
 *    localStorage 数据会永久储存，除非代码或手动删除
 *    sessionStorage 数据只存在于当前会话，浏览器关闭则清空
 *    一般用 localStorage 会更多一些
 */
