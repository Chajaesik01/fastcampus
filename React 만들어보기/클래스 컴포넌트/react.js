
const hooks = [];
let currentComponentIndex = 0;


export class Component {
    constructor(props){
        this.props = props;
    }
}

function makeProps(props, children) {
    return {
            ...props,
            children: children.length === 1 ? children[0] : children,
    }
}

function useState(initValue) {
    if (!hooks[currentComponentIndex]){
        hooks[currentComponentIndex] = initValue;
    }

    const modifier = nextValue => {
        hooks[currentComponentIndex] = nextValue;
    }
    return [ hooks[currentComponentIndex], modifier]
}

export function createElement(type, props,...children) {
    props = props || {};

    if(typeof tag === 'function'){
        if(tag.prototype instanceof Component){
            const instance = new tag(makeProps(props, children));
            return instance.render()
        }
            hooks[currentComponent++] = null;

         if (children.length > 0){
            return tag(makeProps(props, children));
        }
        
        else {
            return tag(props);
        }
    }
    return { tag, props, children}
}
export function render(vdom, container) {
    container.appendChild(createDom(vdom));
}

export const render = (function() {

    let prevDom = null;
    return function (vdom, container) {
        if (prevDom === null){
            prevDom = vdom;
        }

        //diff 
        // 기존의 것과 비교하는 로직을 작성
        // 차이점은 객체 레벨에서의 비교
        container.appendChild(createDom(vdom));
    }
})();