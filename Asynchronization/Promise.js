/**
 * 异步和同步的区别
 * 1. 异步不会阻塞代码执行
 * 2. 同步会阻塞代码执行
 */

// 而 Promise 的出现就是为了解决 异步 调用中的回调地狱问题

// 手写 Promise 加载一张图片
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
const imgUrl2 = 'http://cdn.toutiao.lawnewcn.com/static/20200617/b8/9352217aebb7a7b3e38dafe59d9532b8'

loadImg(imgUrl)
  .then((img) => {
    console.log(img)
    return img
  })
  .then((img) => {
    console.log(img.height)
    document.body.appendChild(img)
    return img // 只要 return img: Promise，后面就能无限 .then() 下去
  })
  .then((img) => {
    console.log(img.width)
    // 这里就是解决 callback hell 的精髓了
    return loadImg(imgUrl2) // return promise 实例
  })
  .then((img) => { // 这里接收到的就是上面 return 的 promise 实例
    console.log(img.width)
  })
  .catch((err) => {
    console.log(err)
  })


loadImg(imgUrl2)
  .then((img) => {
    console.log(img)
    return img
  })
  .then((img) => {
    document.body.appendChild(img)
    return img // 只要 return img，后面就能无限 .then() 下去
  })
  .catch((err) => {
    console.log(err)
  })