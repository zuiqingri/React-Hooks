import React from 'react'
import './Header.css';
export const Header = ({todos}) => {
    return (
        <div>
            <h1>HELLO TODO APPLICATION!</h1>
            <div className="countInfo">To do thing : {todos.length}</div>
        </div>
    )
}

export default Header