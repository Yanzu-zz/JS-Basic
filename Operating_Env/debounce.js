/**
 * 防抖 debounce
 * 监听一个输入框的文字变化后触发 change 事件
 * 直接用 keypup事件，则会频繁触发 change 事件
 * 防抖：用户输入结束或暂停时，才会触发 change 事件
 */

const input1 = document.getElementById('input1')

// 不防抖，会频繁触发事件回调，造成服务器资源浪费
// input1.addEventListener('keyup', function () {
//   console.log(input1.value)
// })

// 防抖后
// 但不可能每个元素都写一遍这个代码，所以需要封装
// let itimer = null
// input1.addEventListener('keyup', function () {
//   if (itimer) {
//     clearTimeout(itimer)
//   }

//   itimer = setTimeout(() => {
//     console.log(input1.value) // 模拟触发 change 事件

//     itimer = null // 清空定时器
//   }, 500)
// })


// 封装 debounce
function debounce(fn, delay = 500) {
  // 这个 timer 是在闭包中的
  // 如果这里的 timer 被外部修改，那么我们的业务逻辑可能就会乱掉
  // 所以闭包就很好的解决了我们的问题
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

// 这样就清爽多了
input1.addEventListener('keyup', debounce(function () {
  console.log(input1.value)
}, 400))