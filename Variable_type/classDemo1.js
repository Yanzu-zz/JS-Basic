/**
 * 重要提示！
 * class 是 ES6 语法规范，由 ECMA 委员会发布
 * 而 ECMA 只规定语法规则，即我们代码的书写规范，但不规定如何实现
 * 所以本项目实现方式都是 v8 引擎的实现方式，也是主流的
 */

class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
    // this.gender = 'male'
  }

  sayHi() {
    console.log(`Name: ${this.name}, Number: ${this.number}`)
  }

  study() {
    console.log(`${this.name} starts studying...`)
  }
}

// 通过类声明 对象/实例
const xiaoming = new Student('小明', 1)
console.log(xiaoming.name)
console.log(xiaoming.number)
xiaoming.sayHi()
xiaoming.study()
