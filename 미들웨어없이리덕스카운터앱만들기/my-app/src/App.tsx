import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducers';

type Props = {
    value: {
        counter: number;
        todos: string[];
    };
    onIncrement: () => void;
    onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value);
    }

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type:"ADD_TODO", text: todoValue})
        setTodoValue("");
    };

    const counter = useSelector((state: RootState) => state.counter);
    const todos: string[] = useSelector((state: RootState) => state.todos);

    return (
        <div className="App">
            <h1>Clicked: {value.counter} times</h1>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <form onSubmit={addTodo}>
                <input 
                    type="text" 
                    value={todoValue} 
                    onChange={handleChange} 
                    placeholder="Add a todo"
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
