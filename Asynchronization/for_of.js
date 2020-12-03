/**
 * for ... of
 * for ... in 以及 forEach，for 都是常规的同步遍历
 * for ... of 常用与异步的遍历
 */
function mutiply(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

const nums = [1, 2, 3]
// 这样写会一瞬间把全部都计算完，1秒后全部打印出来
nums.forEach(async (i) => {
  const res = await mutiply(i)
  console.log(res)
});

// 这样就会依次打印出来，配合异步效果特别好
!(async function () {
  for (let i of nums) {
    const res = await mutiply(i)
    console.log(res)
  }
})()