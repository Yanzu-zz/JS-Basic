function createA() {
  let i, a
  for (i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br/>'
    a.addEventListener('click', function (e) {
      e.preventDefault()
      // 这样子写弹出的信息都是 10
      alert(i) // 这里是个坑
    })

    document.body.appendChild(a)
  }
}

createA()