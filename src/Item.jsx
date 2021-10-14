import React from 'react'
import './Item.css'
const Item = ({todo,changeTodoStatus}) => {
    const toggleItem=(e)=>{
       
        const id=e.target.dataset.id;
        changeTodoStatus(id);
    }
    const itemClassName=todo.username==='done' ? 'done' : '';
   
    return (
        <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>{todo.name}</li>
    )
}
export default Item