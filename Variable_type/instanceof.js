const {
  xiaoming,
  People,
  Student,
  Teacher
} = require('./classDemo2.js')

console.log('————————')

xiaoming instanceof Student // true
xiaoming instanceof People // true
xiaoming instanceof Object; // true

[] instanceof Array; // true
[] instanceof Object // true

// {} instanceof Object // true

// class 实际上是函数，其实是语法糖
typeof People // 'function'
typeof Student // 'function'

// 隐式原型和显示原型
// 每个 class 都有显示原型 prototype
console.log(Student.prototype)
// 每个实例都有隐式原型 __proto__
console.log(xiaoming.__proto__)
// 实例的 __protp__ 指向对应 class 的 prototype
console.log(xiaoming.__proto__ === Student.prototype)

/**
 * 基于原型的执行规则
 * 获取属性 xiaoming.name 或执行方法 xiaoming.sayHi() 时，现在自身属性和方法寻找
 * 如果找不到则到 __protp__ 中查找
 * 而 __proto__ 又可能类似于实例有继承之类的关系，又有 __proto__，又会一层层网上找
 * 所以继承链，查找链就是这么来的
 */