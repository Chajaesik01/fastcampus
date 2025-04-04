
function createDom(node){
    if(typeof node === 'string')
        return document.createTextNode(node);


    const element = document.createElement(node.tag);

    node.children
        .map(createDom)
        .forEach(element.appendChild.bind(element))
    return element;
}


const vdom = {
    tag: 'p',
    props: {},
    children: [
        {
        tag: 'h1',
        props: {},
        children: ["React 만들기"],    
        }
    ],
}

document
    .querySelector('#root')
    .appendChild(createDom(vdom));

