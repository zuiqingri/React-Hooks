//import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import List from './List.jsx'
import useFetch from './useFetch';
import Header from './Header.jsx';
import Form from './Form.jsx';

export const TodoContext=React.createContext();

const TodoStore=()=> {
  const [todos,setTodos]=useState([]);
  

  const loading=useFetch(setTodos,'https://jsonplaceholder.typicode.com/users');

  const addTodo = (newTodo) => {

    //setTodos([...todos, {userId: 1, id: 1, title: newTodo, completed: false}]);
        setTodos([...todos,{'name':newTodo,'id':todos.length+1}]);
  }

  const changeTodoStatus=(id)=>{
   // debugger;
    const updateTodos=todos.map(todo=>{
      if(todo.id=== +id){
        if(todo.username==="done") todo.username="todo";
        else todo.username="done";

      }

      return todo;
    })
    console.log(updateTodos);
    setTodos(updateTodos);

  }
  useEffect(()=>{
    //console.log("Rendered new contents",todos);
  },[todos])

      return (
      <TodoContext.Provider value={
        {todos,addTodo,loading,changeTodoStatus}}>
        <div className="TodoStore">
          <Header />
          <Form />
          <List />
        </div>
      </TodoContext.Provider>
    );
}

export default TodoStore;
