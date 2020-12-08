/**
 * 事件绑定
 */
const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', event => {
  console.log('btn1 clicked')
})

// 通用的绑定函数（简洁）
// function bindEvent(element, type, fn) {
//   element.addEventListener(type, fn)
// }
/**
 * 完整的通用事件绑定函数
 * 能支持最普通的 btton 点击绑定，也能支持事件代理
 */
bindEvent = function (element, type, selector, fn) {
  if (fn == null) { // 判断 null 用 ==
    fn = selector
    selector = null
  }

  element.addEventListener(type, function (e) {
    const target = e.target
    // 需要代理
    if (selector) {
      if (target.matches(selector)) {
        fn.call(target, e) // 把 target 绑定成 this
      }
    } else { // 不需要代理
      fn.call(target, e) // 把 target 绑定成 this
    }
  })
}

const btn2 = document.getElementById('btn2')
bindEvent(btn2, 'click', e => {
  e.preventDefault() // 组织默认行为
  console.log(e.target) // 获取触发的元素
  console.log('btn2 clicked')
})



/**
 * 事件冒泡
 * 是基于 DOM 树形结构，事件会顺着触发元素向上冒泡
 * 
 * 应用场景：代理（看下方）
 */
const p1 = document.getElementById('p1')
const body = document.body

bindEvent(p1, 'click', e => {
  // 注释掉这一行，会事件冒泡
  e.stopPropagation() // 阻止冒泡
  console.log('激活')
})

// bindEvent(body, 'click', e => {
//   alert('事件冒泡了！')
//   console.log('取消')
// })

const div2 = document.getElementById('bubble2')
bindEvent(div2, 'click', e => {
  console.log(e.target)
  console.log('div2 clicked')
})



/**
 * 事件代理
 * 是基于事件冒泡来做的
 * 
 * 可以
 *    使代码简介
 *    减少浏览器内存占用（当大量同一组件下的元素需要绑定时）
 *    但是，不要滥用
 */
const agent1 = document.getElementById('agent1')
// 这是一个可以无限新增 a 标签的方法
// 我们到后面根本不可能知道有多少个 a 标签，是哪个 a 标签被点击的
// 所以我们就在它的父元素 agent1 上绑定一个点击事件，通过冒泡机制冒到这里来
// 再通过 e 参数获取 某个 a 标签的点击
// bindEvent(agent1, 'click', e => {
//   e.preventDefault()

//   const target = e.target
//   // 通过 nodeName 来判断是不是点击了 a 标签
//   if (target.nodeName === 'A') {
//     alert(target.innerHTML)
//   }
// })


// 改写完成后就可以这样写（一定不要用箭头函数）
bindEvent(agent1, 'click', 'a', function(e) {
  e.preventDefault()

  console.log(this)
  alert(this.innerHTML)
})

bindEvent(btn1, 'click', function(e) {
  console.log(e)
  console.log(this.innerHTML)
})