import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todo: Todo[];
}

const initialState: TodoState = {
  todo: [
    {
      id: 1,
      text: "Hello World",
      completed: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      state.todo = state.todo.filter((todo) => todo.id !== todoId);
    },
    toggleComplete: (state, action) => {
      const todoId = action.payload;
      const todo = state.todo.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
