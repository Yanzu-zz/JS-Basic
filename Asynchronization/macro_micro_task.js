/**
 * 宏任务和微任务
 * 宏任务：setTimeout, setInterval, Ajax, DOM 事件
 * 微任务：Promise, async/await
 * 微任务执行时机比宏任务要早
 * 为什么会这样呢？那就要说到 event loop 和 DOM 渲染的关系了
 * 具体点就是：
 *    宏任务在 DOM 渲染后触发
 *    微任务在 DOM 渲染前触发
 * 原因是：
 *    当 call stack 遇到 Promise, async/await 时，会压入 micro task queue（先进先出）
 *    而不会经过 Web APIs，因为 Promise 是 ES 规范，不是 W3C 规范
 *    
 * 所以可以得知，微任务是 ES 语法规定的，宏任务是由浏览器规定的
 */

console.log(100) // 1

// 宏任务
setTimeout(() => {
  console.log(200) // 4
})

// 微任务
Promise.resolve().then(() => {
  console.log(300) // 3
})

console.log(400) // 2



/**
 * event loop 和 DOM 渲染
 * JS 是单线程的，而且和 DOM 渲染共用一个线程
 * 所以 JS 执行的时候，得留一些时机供 DOM 渲染
 * 每次 Call Stack 清空（即每次轮询结束），即同步代码执行完毕
 * 都是 DOM 重新渲染的机会，DOM 结构如有改变则重新渲染
 * 然后再去触发下一次 event loop
 */

const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#container')
  .append($p1)
  .append($p2)
  .append($p3);

// alert('本次 call stack 结束，DOM 结构已更新，但尚未触发渲染')
// alert 点击结束后，同步代码就执行结束了，开始执行微任务

// 微任务：DOM 渲染前触发
Promise.resolve().then(() => {
  console.log('length1:', $('#container').children().length)
  // alert 会阻断 JS 执行，也会阻断 DOM 渲染，便于查看效果
  alert('Promise then，此时 DOM 还没渲染')
  // 微任务之类的执行完毕后，开始尝试渲染 DOM
})

// 宏任务：DOM 渲染后触发
setTimeout(() => {
  // 最后再是执行 宏任务
  console.log('length2:', $('#container').children().length)
  alert('setTimeout，此时 DOM 已经渲染完毕')
})