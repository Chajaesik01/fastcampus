import React, { useState } from 'react';

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
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodoValue("");
    };

    return (
        <div className="App">
            <h1>Clicked: {value.counter} times</h1>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
            <form onSubmit = {addTodo}>
            <input 
                type="text" 
                value={todoValue} 
                onChange = {handleChange} 
                placeholder="Add a todo"
            />
            <input type="submit"/>
            
            </form>
        </div>
    );
}

export default App;
