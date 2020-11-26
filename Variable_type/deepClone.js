/**
 * 深拷贝
 */

const obj1 = {
  age: 20,
  name: 'ryann',
  address: {
    city: 'beijing',
    district: 'haifeng'
  },
  arr: ['a', 'b', 'c']
}

// 因为是引用类型，所以用 const 还修改下面的属性也无妨
const obj2 = obj1
obj2.address.city = 'shanghai'
console.log(obj1.address.city) // 'shanghai'

// 这样做会把 obj1 的值也给改变了，因为它们指向同一内存地址
// 而深拷贝就是要把这个同指向给消灭，同时完全复制它的值，

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  // obj 是 null，或者不是 对象或数组时，直接返回
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  // 开始深拷贝操作
  for (let key in obj) {
    // 保证 key 不是对象原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归，因为某些属性可能也是一个 Ojbect或Array
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

const obj3 = deepClone(obj1)
// 这样就不会影响了
obj3.age = 30
obj3.arr[0] = '1'
console.log(obj1.age)
console.log(obj1.arr[0])