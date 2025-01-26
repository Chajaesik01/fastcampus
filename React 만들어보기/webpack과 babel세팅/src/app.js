/* @jsx React.createElement*/
import { createDom, createElement, render } from "./react";

const vdom = 
<p>
    <h1> React 만들기</h1>
    <ul>
        <li style = "color:red">첫번째 아이템</li>
        <li style = "color:green">두번째 아이템</li>
        <li style = "color:blue">세번째 아이템</li>
    </ul>
</p>
render(vdom, document.querySelector('#root'))

console.log(vdom);

// dom 객체 같이,최상위 root 노드를 갖는 즉 트리형태를 갖는다.