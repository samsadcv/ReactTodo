import React from 'react'

export default function Todo({todo,toggleTodo}) {

    function handleTodoChange(){
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked = {todo.complete} onChange={handleTodoChange}></input>
                {todo.name}
            </label>
        </div>
    )
}
