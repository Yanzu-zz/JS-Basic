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
