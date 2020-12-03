/**
 * （本节建议配合视频理解）
 * event loop（事件循环 / 事件轮询）
 * JS 是单线程运行的
 * 异步要基于回调来实现
 * event loop 就是异步回调的实现原理
 * 
 * 
 * JS 如何执行？
 * 1. 从前到后，一行一行执行
 * 2. 如果某一行执行报错，则停止下面代码的执行
 * 3. 先把同步代码执行完，再执行异步（通过异步回调来实现后执行异步代码）
 * 
 * 那么，又是怎么实现 异步回调的呢？
 * 那就是本次的主角 —— event loop 
 * （可能比较难）
 */

/**
 * event loop 运行机制
 * 1. 把 JS 代码一行行压栈并运行
 * 2. 遇到异步代码时把其加入 Web APIs
 * 3. 当同步代码执行完时，开始执行当前微任务
 * 4. 然后尝试渲染 DOM（如果其结构有变化的话）
 * 4. 接着当 Web APIs 里面的方法有回调的时候，将其压入 Callback Queue
 * 5. Event Loop 开始遍历并运行 Callback Queue 里的代码
 */

// 示例
console.log('Hi')

setTimeout(function cb1() {
  console.log('cb1')
}, 2000)

console.log('Bye')