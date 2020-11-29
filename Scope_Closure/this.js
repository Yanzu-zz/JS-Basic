/**
 * this
 * 做为普通函数被调用
 * 使用 call, apply, bind 被调用
 * 做为对象方法
 * 在 class 方法中调用
 * 在箭头函数
 * 
 * this 是什么样的值，是在函数执行是确定的！！不是在定中
 */

function fn1() {
  console.log(this)
}
fn1() // window

fn1.call({
  x: 100
}) // { x: 100 }

const fn2 = fn1.bind({
  x: 200
}) // { x: 200 }


const zhangsan = {
  name: '张三',
  sayHi() {
    console.log(this) // this 即当前对象
  },
  wait() {
    setTimeout(function () {
      console.log(this) // this === window
    })
  }
}

const xiaohong = {
  name: '小红',
  sayHi() {
    console.log(this) // this 即当前对象
  },
  waitAgain() {
    // 箭头函数的 上下文 和 function 不一样
    // 箭头函数的 this 永远取它 上一层作用域的 this
    setTimeout(() => {
      console.log(this) // 取 waitAgain 的 this，即 当前对象
    })
  }
}