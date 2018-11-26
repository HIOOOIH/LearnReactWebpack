import React from 'react';
import ReactDOM from 'react-dom';

// 第一种创建组件的方式
function Hello(props){
    // 如果在一个组件中 return null,则表示此组件是空的，什么都不会渲染
    //return null
    // 在组件中，必须返回一个 合法的 JSX 虚拟DOM元素
    // 注意：不论是Vue 还是React, 组件中的 props 永远都是只读的；不能被重新赋值；
    // props.name = 'zs'
    return <div>这是 Hello 组件 -- {props.name} -- {props.gender}</div>
}

const dog = {
    name:"dd",
    age:3,
    gender:'male'
}

ReactDOM.render(
    <div>
        123
        {/* 直接把组件的名称，以标签的形式，丢到页面上即可 */}
        {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
        <Hello {...dog}></Hello>
    </div>,document.getElementById("app")
);