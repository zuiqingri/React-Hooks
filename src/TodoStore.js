//import logo from './logo.svg';
import React,{useEffect,useReducer} from 'react';
import './App.css';
import useFetch from './useFetch.js'
import {todoReducer} from './reducers.js'
export const TodoContext=React.createContext();



const TodoStore=(props)=> {
  //const [todos,setTodos]=useState([]);
  const [todos,dispatch]=useReducer(todoReducer,[]);

  const setInitData=(initData)=>{
    dispatch({type:'SET_INIT_DATA',payload:initData})
  }
  const loading=useFetch(setInitData,'https://jsonplaceholder.typicode.com/users');

  // const addTodo = (newTodo) => {

  //   //setTodos([...todos, {userId: 1, id: 1, title: newTodo, completed: false}]);
  //    setTodos([...todos,{'name':newTodo,'id':todos.length+1}]);
  // }

  // const changeTodoStatus=(id)=>{
  //  // debugger;
  //   const updateTodos=todos.map(todo=>{
  //     if(todo.id=== +id){
  //       if(todo.username==="done") todo.username="todo";
  //       else todo.username="done";
  //     }
  //     return todo;
  //   })
  //  // setTodos(updateTodos);
  // }
  useEffect(()=>{
    console.log("Rendered new contents",todos);
  },[todos])

      return (
      <TodoContext.Provider value={{todos,loading,dispatch}}>
        {props.children}
      </TodoContext.Provider>
    );
}

export default TodoStore;
