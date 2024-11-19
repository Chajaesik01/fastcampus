enum ActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

interface AddTodoAction {
    type: ActionType.ADD_TODO;
    text: string;
}

interface DeleteTodoAction {
    type: ActionType.DELETE_TODO;
    index: number; // 삭제할 항목의 인덱스
}

// Action 타입을 유니온 타입으로 합칩니다.
type Action = AddTodoAction | DeleteTodoAction;

const todos = (state: string[] = [], action: Action): string[] => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [...state, action.text];
        case ActionType.DELETE_TODO:
            return state.filter((_, index) => index !== action.index); // 인덱스에 해당하는 항목을 제거
        default:
            return state;
    }
};

export default todos;
