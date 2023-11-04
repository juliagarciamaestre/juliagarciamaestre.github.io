import { TodoItem } from "./todoItem"

    
export function TodoList({todos, toggleTodo, deleteTodos}){
    return<ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => {
      return(
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo}
        deleteTodos={deleteTodos}/>
    
      )
    })}
    
  </ul>
}