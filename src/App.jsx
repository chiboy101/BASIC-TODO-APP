import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([{ text: input, completed: false }, ...todos]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    //input area
    <div className="app-container">
      <div className="header">
        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="todo">To-Do</span> App
        </h1>
      </div>
    
      <div className="add-todo">
        <textarea 
          className="new-todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Make a list of things to be done."
          rows={4} 
          cols={50} 
          style={{ resize: "none" }}
        />
        <button className="add-todo-button" onClick={addTodo}>
          Add
        </button>
      </div >
      <div >
        <ul className="todo-list" /* Displayed text */>
          {todos.map((todo, index) => (
            <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
              <div className="actions">
                <button onClick={() => toggleComplete(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
