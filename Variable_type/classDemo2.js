// 父类
class People {
  constructor(name) {
    this.name = name
  }

  eat() {
    console.log(`${this.name} is eating something...`)
  }
}

// 子类
class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }

  teach() {
    console.log(`${this.name} is teaching ${this.major} lesson...`)
  }
}

// 子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }

  sayHi() {
    console.log(`Name: ${this.name}, Number: ${this.number}`)
  }
}

const wanglaoshi = new Teacher('王老师', '数学')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()
wanglaoshi.eat()

const xiaoming = new Student('小明', 10)
console.log(xiaoming.name)
console.log(xiaoming.number)
xiaoming.sayHi()
xiaoming.eat()

module.exports = {
  People,
  Teacher,
  Student,
  xiaoming,
  wanglaoshi
}