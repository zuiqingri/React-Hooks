
export const todoReducer = (todos,{type,payload}) => {
    switch (type) {
      case "ADD_TODO":
        return [...todos,{'name':payload,'id':todos.length+1,'username':'todo'}];
      case "SET_INIT_DATA":
        return payload;
  
      case "CHANGE_TODO_STATUS":
        return todos.map(todo=>{
          if(todo.id=== +payload){
            if(todo.username==="done") todo.username="todo";
            else todo.username="done";
            }
            return todo;
        });
  
      default:
        break;
    }
  }

