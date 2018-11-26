function Person(name, age){
    this.name = name
    this.age = age
}

// 1. new Person 在堆上创建了一个空内存
// 2. TH,18挂载到内存上
// 3. 把内存中的 引用/指针 交给 p1
const p1 = new Person('TH','18')
console.log(p1)
// 通过 new 出来的实例，访问到的属性，叫做 [实例属性]
console.log(p1.name)
console.log(p1.age)


//-------------------------
console.log('-------------------------');

// 创建了一个动物类
class Animal {
    // 这是类中的 构造器
    // 每一个类中，都有一个构造器，如果我们程序员没有手动指定构造器，那么，可以认为类内部有个隐形的、看不见的
    // 空构造器，类似于 constructor() {}
    // 构造器的作用，就是每当 new 这个类的时候，必然会优先执行 构造器 中的代码
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
    }
}

const dog = new Animal('puppet','3')
console.log(dog)