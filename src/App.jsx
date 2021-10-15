import React from 'react'
import TodoStore from './TodoStore.js'
import List from './List.jsx'
import Header from './Header.jsx';
import Form from './Form.jsx';
import './App.css';

export const App = () => {
    return (
        <TodoStore>
        <div className="TodoStore">
          <Header />
          <Form />
          <List />
        </div>
        </TodoStore>
       
    )
}

export default App