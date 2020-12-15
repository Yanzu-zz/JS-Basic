/**
 * 节流 throttle
 * 拖拽一个元素时，要随时拿到该元素被拖拽的位置
 * 直接用 drag 事件，则会频繁触发，很容易导致卡顿
 * 
 * 节流：无论拖拽速度多快，都会每隔 100ms 触发一次
 * 和防抖不一样的是，它不会根据判断最后一次操作才进行回调
 */
const div1 = document.getElementById('div1')
// 不节流，回调次数超级多
// div1.addEventListener('drag', function (e) {
//   console.log(e.offsetX, e.offsetY)
// })


// 节流
// let timer = null
// div1.addEventListener('drag', function (e) {
//   if (timer) {
//     // 和防抖区别就是不清空计时器
//     return
//   }

//   timer = setTimeout(() => {
//     console.log(e.offsetX, e.offsetY)
//     timer = null
//   }, 200)
// })


// 封装
function throttle(fn, delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments) // 这里再把 e 传递给 48 行
      timer = null
    }, delay)
  }
}

// 这里的 e 是传递给 32 行 throttle 函数的，不是直接传给 48 行的函数块的
div1.addEventListener('drag', throttle(function (e) {
  console.log(e.offsetX, e.offsetY)
}, 200))