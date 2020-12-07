/**
 * DOM 操作（Document Object Model 文档对象集合）
 * 
 * Vue 和 React 框架应用广泛，封装了 DOM 操作
 * 在公司编码的时候，一般也不允许你自己手写代码
 * 但 DOM 操作一直都是前端工程师的基础、必备知识
 * 且只会 Vue/React 而不懂 DOM 操作的前端程序员，不会长久
 */


/**
 * DOM 本质是一颗树
 * XML
 * HTML 是一种特定的 XML
 * 
 * HTML 不是 DOM
 * HTML 是你自己写的一段代码
 * 而 DOM 是浏览器在内存里已经初始化一个树的结构
 */


/**
 * DOM 节点操作
 */

// 获取 DOM 节点
const div1 = document.getElementById('div1') // 元素
const divList = document.getElementsByTagName('div') // 集合
console.log(div1)
console.log(divList)

const containerList = document.getElementsByClassName('container')
console.log(containerList)

// 通过 css 选择器来获取
const pList = document.querySelectorAll('p') // 集合
console.log(pList)

// DOM 节点的 property
// 即对 DOM 元素的 JS变量进行修改，来修改页面样式或渲染结构的一种形式
// 修改对象属性，不会体现到 HTML 结构中
const p1 = pList[0]
p1.style.width = '100px' // 修改样式
console.log(p1.style.width) // 获取样式
p1.className = 'red' // 修改类名
console.log(p1.className) // 获取类名

// 获取 nodeName 和 nodeType
// 这两个属性除非你要深度操作 DOM 或写个框架，不然用的场景不会多
console.log(p1.nodeName) // nodeName 就是标签的名称
console.log(p1.nodeType) // nodeType node结构的类型，一般是 1


// DOM 节点的 attribute
// 它是对 DOM 节点的属性做的一个修改，它是真的能作用到节点属性上去的
// 修改 HTML 属性，会改变 HTML 结构
const p2 = pList[1]
p2.setAttribute('data-name', 'book')
console.log(p2.getAttribute('data-name'))
p2.setAttribute('style', 'font-size: 30px')
console.log(p2.getAttribute('style'))

// property 和 attribute 两者都可能会引起 DOM 重新渲染
// 建议尽量用 property 去操作，因为 JS 会尽量避免一些重复的 DOM 操作
// 当然如果需要修改标签结构，那就是用 attribute



/**
 * DOM 结构操作
 */

// 新增 / 插入节点
const newP1 = document.createElement('p')
newP1.innerHTML = 'this is newP1' // 添加新节点
div1.appendChild(newP1) // 添加新创建的元素
// 移动已有节点，注意是移动！！
div2.appendChild(p2)


// 获取 子元素列表
const child = div1.childNodes
// 有 7 个子元素，然而我们真实的只有 3 个 p
// 因为标签里面的 文字 也算是一个标签
// 可以通过它的 nodeType 来区别它（nodeType === 3 就是文本元素）
console.log(child)

// 过滤文本元素
const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes)
  .filter(child => child.nodeType === 1)
console.log(div1ChildNodesP)

// 获取父元素
const parent = div1.parentNode
console.log(parent)


// 删除节点
// div1.removeChild(div1ChildNodesP[0])



/**
 * DOM 性能
 * DOM 操作非常“昂贵”，要避免频繁的 DOM 操作
 * 要对 DOM 查询做缓存
 * 将频繁操作改为一次性操作
 */
// 不缓存 DOM 查询结果
for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
  // 每次循环，都会计算 length，频繁进行 DOM 查询
}

// 缓存 DOM 查询结果
const pLength = pList.length
for (let i = 0; i < length; i++) {
  // 缓存 length，只进行一次 DOM 查询
}


// 将频繁操作改为一次性操作
const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHTML = 'List item ' + x
  frag.appendChild(li)
}

// 都完成之后，再插入到 DOM 树中
listNode.appendChild(frag)