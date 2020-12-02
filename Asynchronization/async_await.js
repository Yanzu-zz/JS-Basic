/**
 * async/await 出现的因果
 * 前面学过 Promise 的出现是为了解决 callback hell 的问题
 * 但 Promise then catch 链式调用，也是基于回调函数
 * 所以 async/await 是同步语法，它的出现，就是为了彻底消灭回调函数
 * 
 * 注意：await 的使用必须是在 async 包裹的块内
 * async-awiat 是语法糖，异步的本质还是回调函数，回调函数还是得基于 event loop
 * 但是这颗糖是真的香
 */

// 因为浏览器还不支持 module import/export，用 webpack又要配置，所以就这样将就着看吧
function loadImg(src) {
  // pending
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')

    img.onload = () => {
      // 找个合适的（结合自己的项目业务逻辑）实际把结果 resolve 出去
      resolve(img) // resolved
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败 ${src}`)
      reject(err) // rejected
    }

    img.src = src
    // 这个函数只初始化图片和赋值图片的地址，挂载图片上网页在其它地方执行（如 resolve 中）
  })
}
const imgUrl = 'https://news.sznews.com/pic/2020-11/19/5df905f6-230d-4cb4-a440-b603aadc5d13.png'
const imgUrl2 = 'http://cdn.toutiao.lawnewcn.com/static/20200617/b8/9352217aebb7a7b3e38dafe59d9532b8';
// 这里不加分号后面的匿名函数会报错... 编译器会把这一段网址字符串当函数来执行
const imgUrl3 = 'https://inews.gtimg.com/newsapp_bt/0/12420916210/1000';

async function loadPageImg(url) {
  const img = await loadImg(url)
  return img
};

// 下面的一段代码就是用同步的写法，彻底把回调给干消失了（功能和 Promise.then() 的一样）
// 或者这里加个 非 符号
!(async function () {
  // img1
  const img1 = await loadImg(imgUrl)
  console.log('img1:', img1.width, img1.width)

  // img2，这里是会等 img1 加载完毕后才执行
  const img2 = await loadPageImg(imgUrl2)
  console.log('img2:', img2.width, img2.width)

  const img3 = await loadImg(imgUrl3)
  console.log('img3:', img3.width, img3.width)
})()


// async/await 的执行顺序
async function async1() {
  console.log('async1 start') // 2
  await async2() // undefined
  console.log('———————— async line ————————')

  // 但是注意了，在 await 的后面的代码内容，都可以看做是 callback 里的内容，即是异步的回调哦
  // 类似 event loop，setTimeout(cb)
  // 但实际上更像是 Promise.resolve.then(()=>{console.log('async1 end')})
  console.log('async1 end') // 5，所以这里实际上是看做异步里的操作，所以最后打印

  await async3()
  // 下面的这行代码又是作为一个回调
  console.log('async1 end 2') // 7
}

async function async2() {
  console.log('async2') // 3
}

async function async3() {
  console.log('async3') // 6
}

console.log('script embark') // 1
async1()
console.log('script terminate') // 4
// 同步代码已经执行完，启动 event loop



/**
 * async/await 和 Promise 的关系
 * 前面说过 async/await 是消灭异步回调的终极武器
 * 但是它和 Promise 并不互斥，反之，两者相辅相成
 * 
 * 因为执行 async 函数，返回的是 Promise 对象
 * await 相当于 Promise 的 then
 * try...catch 可捕获异常，这个代替了 Promise 中的 catch
 */
async function fn1() {
  return 100 // return Promise
  // 相当于 return Promise.resolve(100)
  // 区别就是你返回的不是 Promise 对象时，那么它会自动帮你封装成 Promise 对象
}

const res1 = fn1() // res1 就是个 Promise 对象，能干任何 Promise 能干的事
// console.log('res1:', res1)
res1.then((data) => {
  console.log('data:', data)
});

!(async function () {
  const p1 = Promise.resolve(200)
  // await 相当于 Promise 的 then
  // 就相当于 p1.then((data)=>data)
  const val = await p1
  console.log('val: ', val)

  // 如果 await 后面跟着的不是一个 Promise 对象，它也会帮你封装起来
  const val2 = await 300 // await Promise.resolve(300)
  console.log('val2:', val2)
})()


!(async function () {
  const p4 = Promise.reject('err1')
  try {
    const res = await p4
    console.log('res:', res)
  } catch (e) {
    console.error(e)
  }

  // 前面说过，await 是相当于 then
  // 但是这里有没有 catch() 来捕获错误，所以到这里执行就会报错
  const res4 = await p4
  // 不会往下执行了
  // 所以上面的 try...catch 的重要性也就体现出来了
  // 而且和我们正常的捕获错误机制一致
  console.log('res4:', res4) 
})()