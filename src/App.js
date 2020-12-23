import React, {useState} from 'react';
import  TodoList  from './TodoList';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
    <TodoList todoList={todos}/>
    <input type="text"/>
    <button>Add Todo</button>
    <button>Clear Complted Todo</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;