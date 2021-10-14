//import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import List from './List.jsx'
import useFetch from './useFetch';
import Header from './Header.jsx';

function App() {
  const [todos,setTodos]=useState([]);
  const [newTodo,setNewTodo]=useState();

  const loading=useFetch(setTodos,'https://jsonplaceholder.typicode.com/users');
  const changeInputData = (e) => {
        setNewTodo(e.target.value);
        
      }
  const addTodo = (e) => {
        e.preventDefault();
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
      <div className="App">
        <Header todos={todos} />

        <form action="">
          <input type="text" name="" onChange={changeInputData}/>
          <button onClick={addTodo}>ToDo</button>
        </form>
        <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus}/>
      </div>
    );
}

export default App;
