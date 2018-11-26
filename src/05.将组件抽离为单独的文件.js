import React from 'react';
import ReactDOM from 'react-dom';

// 导入 Hello 组件
// 默认， 如果不做单独的处理，jsx后缀名是不能省略的     
import Hello from '@/components/Hello'

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