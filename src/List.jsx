import React,{useContext} from 'react'
import Item from './Item.jsx'
import { TodoContext } from './TodoStore.js'

const List = () => {
    const {todos,loading}=useContext(TodoContext);

    let todoList=<div>loading...</div>
    //const todoList=todos.map((todo)=><li key={todo.id}>{todo.title}</li>)
    if(!loading) todoList=todos.map((todo)=>
    <Item key={todo.id} todo={todo}/>)
    
    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List