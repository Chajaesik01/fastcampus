enum ActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_POSTS = 'DELETE_POSTS',
    FETCH_POSTS = 'FETCH_POSTS' // FETCH_POSTS 추가
}

interface AddTodoAction {
    type: ActionType.ADD_TODO;
    payload: string; // 추가할 할일의 내용을 포함
}

interface FetchPostsAction {
    type: ActionType.FETCH_POSTS;
    payload: Post[]; // 가져온 포스트 데이터를 포함
}

interface DeletePostsAction {
    type: ActionType.DELETE_POSTS;
    payload: number; // 삭제할 포스트의 ID
}

interface Post {
    userId: number;
    id: number;
    title: string;
}

// Action 타입을 유니온 타입으로 합칩니다.
type Action = AddTodoAction | FetchPostsAction | DeletePostsAction;

const posts = (state: Post[] = [], action: Action): Post[] => {
    switch (action.type) {
        case ActionType.FETCH_POSTS:
            return [...state, ...action.payload]; // payload로 포스트 추가
        case ActionType.DELETE_POSTS:
            return state.filter(post => post.id !== action.payload); // ID로 포스트 삭제
        default:
            return state;
    }
};

export default posts;
