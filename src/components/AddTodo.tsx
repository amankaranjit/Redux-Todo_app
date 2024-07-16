import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";
const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Enter title:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
export default AddTodo;
