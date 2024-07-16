import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const Todo = () => {
  const todo = useSelector((state: any) => state.todo.todo);
  console.log(typeof todo);
  return (
    <div className="todo-wrapper">
      <h2>Add Todo</h2>
      <AddTodo />
      <h2>Todo List</h2>
      {todo.length === 0 ? (
        <span style={{ textAlign: "center" }}>No Todo</span>
      ) : (
        todo.map((item: { id: number; text: string; completed: boolean }) => (
          <TodoList
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
          />
        ))
      )}
    </div>
  );
};

export default Todo;
