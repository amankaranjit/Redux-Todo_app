import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../features/todoSlice";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
const TodoList = ({ id, text, completed }: Todo) => {
  const dispatch = useDispatch();

  return (
    <ul>
      <li key={id}>
        Title:
        <strong> {text}</strong>
        <br />
        <span>
          Status:
          {completed ? (
            <strong>Completed</strong>
          ) : (
            <strong>Not Completed</strong>
          )}
        </span>
        <button onClick={() => dispatch(removeTodo(id))}>Remove</button>
        {!completed && (
          <span onClick={() => dispatch(toggleComplete(id))} className="mark-complete">
            Mark as Completed
          </span>
        )}
      </li>
    </ul>
  );
};
export default TodoList;
