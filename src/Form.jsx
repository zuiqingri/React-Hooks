import React,{useContext} from 'react'
import { TodoContext } from './TodoStore.js';

const Form=()=>{
    const {addTodo,changeInputData}=useContext(TodoContext);
    return(
        <>
        <form action="">
          <input type="text" name="" onChange={changeInputData}/>
          <button onClick={addTodo}>ToDo</button>
        </form>
        </>
    )
}

export default Form