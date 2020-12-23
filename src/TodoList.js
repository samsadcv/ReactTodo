import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList,toggleTodo}) {
    return (
        todoList.map(todo =>{
            //key allows react to only rerender or change the 
            //Component that catually change instead of array
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        })
    )
}
