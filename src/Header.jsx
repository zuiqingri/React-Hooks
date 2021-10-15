import React,{useContext} from 'react'
import './Header.css';
import { TodoContext } from './TodoStore.js';

const Header = () => {
    const {todos}=useContext(TodoContext);
    return (

        <>
            <h1>HELLO TODO APPLICATION!</h1>
            <div className="countInfo">To do thing : {todos.filter(v=>v.username!=="done").length}</div>
        </>
      
   )   
}

export default Header