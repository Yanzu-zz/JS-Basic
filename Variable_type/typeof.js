// 判断所有值的类型
let a
const str = 'abc'
const n = 100
const b = true
const s = Symbol('s')

typeof a // 'undefined'
typeof str // 'string'
typeof n // 'number'
typeof b // 'boolean'
typeof s // 'symbol'


// 能判断函数
typeof console.log // function
typeof

function () {} // function


// 能识别引用类型（不能再继续细分 引用类型的类型）
typeof null // 'object'
typeof ['a', 'b'] // 'object'
typeof {
  x: 100
} // 'object'


// 何时使用 == 何时使用 ===
// 除了 == null 之外，其余一律使用 ===
const obj4 = {
  x: 20
}
// 这里相当于 if(obj4.a === null || obj4.a === undefined)
if (obj4.a == null) {}