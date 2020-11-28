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
 * 注意：Object 的 __proto__ 为 null
 */

// 所以我们可以得出
People.prototype === Student.prototype.__proto__ // true

// 那怎么判断一个属性或者方法是不是自身的而不是继承的呢？
// 用 hasOwnProperty() 方法
// 而 hasOwnProperty() 是继承于最高级别的父对象 Object（真就是硬套娃呗）
xiaoming.hasOwnProperty('name') // true
xiaoming.hasOwnProperty('sayHi') // false
xiaoming.sayHi()
xiaoming.hasOwnProperty('hasOwnproperty') // false


/**
 * 再看 instanceof
 * 学习了继承链以后，再回过头来理解 instanceof 就容易了
 * A instanceof B 就是随着 A 的继承链一层层往上找，能不能对应到 B，找到就返回 true，反之 false
 */
// 所以
xiaoming instanceof Array // false 找不到对应的 Array 父对象
xiaoming instanceof Object // true 在最上层找着了对应上的 Object