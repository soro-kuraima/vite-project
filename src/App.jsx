import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState('');

  function addToDo() {
    let newArray = todos.concat({
      todoTask: input,
      todoStatus: false,
    });
    setToDos(newArray);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDo}>add</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo + index}>
              <span>{todo.todoTask}</span>
              <button
                onClick={() => {
                  const newArray = todos.filter((todo, idx) => {
                    return idx !== index;
                  });
                  setToDos(newArray);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  console.log('function called');
                  const newArray = todos.map((todo, idx) => {
                    if (idx === index) {
                      return {
                        ...todo,
                        todoStatus: !todo.todoStatus,
                      };
                    }
                    return todo;
                  });
                  setToDos(newArray);
                }}
              >
                <span key={todo.todoTask + todo.todoStatus}>
                  {todo.todoStatus ? 'complete' : 'incomplete'}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

//onClick={functionName} ---> OK
//onClick={functionName()} ---> NOT OK
