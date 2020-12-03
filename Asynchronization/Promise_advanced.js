/**
 * Promise 的进阶
 * 1. 三种状态
 * 2. 状态的表现和变化
 * 3. then 和 catch 对状态的影响
 */


/**
 * 1. Promise的三种状态
 * Pending  在过程中，但还没有结果
 * fulfilled(resolved) 已经解决（成功了）
 * Rejected 被拒绝了（失败了）
 * 
 * 注意，只能：pending -> fulfilled 或 pending -> rejected
 * 这种变化不可逆
 */
const p1 = new Promise((resolve, reject) => {})
console.log('p1:', p1) // pending status

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  })
})
console.log('p2:', p2)

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  })
})
console.log('p3:', p3)

setTimeout(() => {
  console.log('——————————')

  console.log('p2-setTimeout', p2) // fulfilled
  console.log('p3-setTimeout', p3) // rejected
})

console.log('——————————')



/**
 * 2. Promise 状态的表现和变化
 * pending 状态，不会触发 then 和 catch
 * fulfilled(resolve) 状态，会触发后续的 then 回调函数
 * rejected 状态，会触发后续的 catch 回调函数
 */
const p10 = Promise.resolve(100)
console.log('p10:', p10)

const p11 = Promise.reject('rejected error')
console.log('p11:', p11)

p10.then((val) => {
  console.log('resolved val:', val)
}).catch((err) => {
  console.log('resolved err:', err) // never been excecuted
})

p11.then((val) => {
  console.log('rejected val:', val) // also will never been console
}).catch((err) => {
  console.log('rejected err:', err)
})

console.log('——————————')



/**
 * 3. then 和 catch 对状态的影响
 * then 正常返回 resolved，里面有报错则返回 rejected
 * catch 正常返回 resolved，里面有报错则返回 rejected
 */
const p20 = Promise.resolve().then(() => {
  return 100
})
console.log('p20:', p20) // resolved 触发后续 then 回调
p20.then(() => {}) // 能触发

const p21 = Promise.resolve().then(() => {
  throw new Error('then error')
})
console.log('p21:', p21) // rejected 触发后续 catch回调
p21
  .then(() => {}) // 触发不了
  .catch(() => {}) // 这个就触发得了


const p30 = Promise.reject('30err') // rejected status
  .catch(err => {
    console.error(err)
    // 注意，这里一切执行正常，没有错误，故返回的是 resolved 状态
  })
console.log('p30:', p30) // 这里是 resolved 状态的 Promise ！！
// 所以这时候，p30 返回的 resolved 结果是可以继续触发 .then() 的！！！
p30.then(() => {
  console.log('I still can running after returning a resolved status')
})

const p31 = Promise.reject('31err')
  .catch(err => {
    // 注意，这里抛出异常了，所以 p31 是 rejected 状态的 Promise
    throw new Error('31err')
  })
console.log('p31:', p31) // 这里就是 rejected 状态
// 同理，这里就只能执行 catch，then 是出不来的
p31
  .then(() => {
    console.log('This log feature will never ever appear in the console panel')
  })
  .catch(err => { // 这就就会出现在控制台
    console.error(err)

    // 现在关键来了！！！！
    // 这里没有发生错误，故这里的 catch 返回的是 resolved 状态
    // 所以下面可以接着用 .then() 来继续执行
  })
  .then(() => {
    console.log('......') // 这段还会出现哦
  })



/**
 * ————————————————————————————
 * Promise 例题
 * ————————————————————————————
 */

// 第一题
Promise.resolve()
  .then(() => {
    console.log(1)
  })
  .catch(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
// 输出 1 3


// 第二题
Promise.resolve()
  .then(() => {
    console.log('1')
    throw new Error('error1')
  })
  .catch(() => {
    console.log('2')
  })
  .then(() => {
    console.log('3')
  })
// 输出 1 2 3


// 第三题
Promise.resolve()
  .then(() => {
    console.log('1')
    throw new Error('error2')
  })
  .catch(() => {
    console.log('2')
  })
  .catch(() => {
    console.log('3')
  })
// 输出 1 2


// 第四题
async function async4() {
  console.log('async4 start') // 2
  await async5()
  // await 后面的内容（这里只有一行）都作为回调内容 —— 微任务
  console.log('async4 end') // 6
}

async function async5() {
  console.log('async5') // 3
}

console.log('Question 4 embark') // 1

// 宏任务
setTimeout(function () {
  console.log('setTimeout') // 8
}, 0)

async4()

// 注意：初始化 Promise 时，传入的函数会立即执行
new Promise(function (resolve) {
  console.log('Promise1') // 4
  resolve()
}).then(() => { // 微任务
  console.log('Promise2') // 7
})

console.log('Question 4 over') // 5