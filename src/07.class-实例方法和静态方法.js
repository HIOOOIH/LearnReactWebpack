function Person(name, age){
    this.name = name
    this.age = age
}

// 实例方法 因为可以被 p1 访问
Person.prototype.say =  function(){
    console.log('这是 Person 的实例方法')
}

Person.info = 'aaaa'

Person.show = function(){
    console.log('这是 Person 的静态 show 方法')
}

const p1 = new Person('TH','18')
console.log(p1)
// 这是 实例方法
p1.say()
// 这是 静态方法
Person.show()


//-------------------------
console.log('-------------------------');

// 注意1：在 class 的 { } 区间内，只能写 构造器、实例方法、静态属性、静态方法
// 注意2：class 关键字内部，还是用 原来的配方 实现的
// 所以说，把 class 关键字，称作 语法糖
class Animal {
    // 构造器 (经常用到)
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Animal 的实例方法 (经常用到)
    bark(){
        console.log(' Animal 的实例方法')
    }

    // 在 class 内部，通过 static 修饰的属性，就是静态属性 (用到不多)
    static info="eee"

    //  静态方法 (用到不多)
    static show(){
        console.log(' Animal 的静态 show 方法')
    }
}

const dog = new Animal('puppet', 3)
console.log(dog)

