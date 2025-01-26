export function createDom(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);

    Object.entries(node.props)
        .forEach(([name, value]) => element.setAttribute(name, value));

    const children = Array.isArray(node.children) ? node.children : [node.children];

    children
        .map(createDom)
        .forEach(element.appendChild.bind(element));
        
    return element;
}

export function render(vdom, container) {
    container.appendChild(createDom(vdom));
}

export function createElement(tag, props, ...children) {
    props = props || {};
    return { tag, props, children };
}
