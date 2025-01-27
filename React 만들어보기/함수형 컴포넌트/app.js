// JSX 문법이고, 실제 JSX가 return 되는 것이 아닌 createElement 함수 호출
function Title(props) {
    return <h1>{props.children}</h1>
}


const vdom = <p>
    <Title/>;
</p>