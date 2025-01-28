export function reducer(state = {count: 0}, action ) {
    if (action.type === 'increase')
    {
        // if(action.payload)
        return { ...state, count: state.count+1}
    } 
    else if (action.type === 'decrease')
    {
        return { ...state, count: state.count-1};
    }
    else {
        return { ...state};
    }
}