class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length

    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }

    this.length = length
    this.selector = selector
  }

  get(index) {
    return this[index]
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }

  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
}

// 使用
const $p = new jQuery('p')

$p.each((el) => {
  console.log(el.nodeName)
})
$p.on('click', () => {
  alert('111')
})


// 插件和扩展性

// 插件，用法就是前面讲过的 prototype 形式
jQuery.prototype.dialog = function (info) {
  alert(info)
}
// jQuert.prototype.xxxx = yyyy


// 拓展性
// 复写机制 —— “造轮子”
// 基于 jQuery 做出一个更加完美的东西
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }

  // 扩展自己的方法，造新轮子
  addClass(el, className) {
    el.className += className
  }

  style(data) {
    // ...
  }
}