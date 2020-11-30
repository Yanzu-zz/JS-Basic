function createA() {
  let i, a
  for (i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br/>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      // 这样子写弹出的信息都是 10
      // 因为每次执行函数的时候，都会向上一级作用域查找 i，此时 i 循环完毕，值为 10
      alert(i) // 这里是个坑
    })

    document.body.appendChild(a)
  }
}

createA() // wrong!!


function createA2() {
  let a
  // 把 i 定义在同一个作用域就可以解决问题了
  for (let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = '我是 ' + i + '<br/>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      alert(i)
    })

    document.body.appendChild(a)
  }
}

createA2() // right!!