import React from 'react';
import ReactDOM from 'react-dom';


// HTML是最优秀的标记语言；
// 注意： 在 JS 文件中，默认不能写这种类似于 HTML 的标记；否则，会打包失败；
// 可以使用 babel 来转换这些 JS 中的标签
// 这种在 JS 中，混合写入类似 HTML 的语法，叫做 JSX 语法，就是符合 XML 规范的 JS
// 注意： JSX 语法的本质，还是在运行的时候，被转换成了 React.createElement 的形式来执行的
const mydiv = <div id="mydiv" title="this is a div">这是一个div</div>;

ReactDOM.render(mydiv,document.getElementById("app"));