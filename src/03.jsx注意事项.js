import React from 'react';
import ReactDOM from 'react-dom';

let a = 10;
let str = "th & em";
let boo = true;
let title = '999';
const h1 = <h1>这是一个h1</h1>;
const arr = [
    <h2>这是一个h2</h2>,
    <h3>这是一个h3</h3>
];
const arrStr = ["Tom Hardy","Ezra Miller","Venom","‎Fantastic Beasts and Where to Find Them"];

// [方法1]:定义一个空数组，将用来存放 名称 标签
const nameArr = [];
// 注意：React 中，需要把 key 添加给 被 forEach map for 循环直接控制的元素
arrStr.forEach(item => {
    const temp = <h5 key={item}>{item}</h5>;
    nameArr.push(temp);
});

// 数组的 map 方法，map 中必须写 return
/*const result = arrStr.map(item => {
    return item +"~~";
})
console.log(result);
*/


ReactDOM.render(
<div>
    {a}
    <hr/>
    {str}
    <hr/>
    {boo ? '条件为真':'条件为假'}
    <hr/>
    <div title={title}>这是一个div</div>
    <hr/>
    {h1}
    <hr/>
    {/* {arr} */}
    <hr/>
    {nameArr}
    <hr/>
    {arrStr.map(item => <h3 key={item}>{item}</h3> )}
</div>,document.getElementById("app")
);