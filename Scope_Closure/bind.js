function fn1(a, b) {
  console.log('this: ', this)
  console.log(a, b)
  return 'this is fn1'
}

// 第一个参数是要绑定的 this
const fn2 = fn1.bind({
  x: 100
}, 10, 20)
const res = fn2()
console.log(res)


// 模拟手写 bing 函数
// 这样写和 jQuery 的插件类似
/**
 * bind1
 * @param {1} this
 * @param {...args} 剩余需要传入的参数
 */
Function.prototype.bind1 = function () {
  // 将参数解析为数组（因为 bind 函数可以传入多个参数，我们就这样解析参数就好了）
  const args = Array.prototype.slice.call(arguments)

  // 获取 this（去除数组第一项，数组剩余的就是传递的参数）
  const t = args.shift()
  const self = this // 当前函数（fn1.bind(...) 中的 fn1）

  // 返回原函数的 return 值
  return function () {
    // 执行原函数，并返回结果
    return self.apply(t, args)
  }
}

function fn3(a, b, c) {
  console.log('this: ', this)
  console.log(a, b, c)
  return 'this is fn3'
}
const fn4 = fn3.bind1({
  y: 200
}, 100, 50, 25)
const res2=fn4()
console.log(res2)