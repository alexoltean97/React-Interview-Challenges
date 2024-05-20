import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDoList from "../types/toDoList";


type TodosState = ToDoList[];

const initialState: TodosState = [
  {
    id: 1,
    title: "Clean my house",
    value: "I need to clean my house",
    completed: false,
  },
  {
    id: 2,
    title: "Prepare for interview",
    value: "I need to prepare for code interview",
    completed: true,
  },
  {
    id: 3,
    title: "Buy Gift for mom",
    value: "Buy gift for mom",
    completed: true,
  },
];

const getLastId = (state: TodosState): number => {
  const lastObject = state[state.length - 1];
  const lastObjectId = lastObject ? lastObject.id : 0;
  return lastObjectId;
}

const addNewId = (state: TodosState): number => {
  const lastObjectId = getLastId(state);
  const newId = lastObjectId + 1;
  return newId;
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<{ title: string, value: string }>) => {
      const newId = addNewId(state);
      const newTodo: ToDoList = {
        id: newId,
        title: action.payload.title,
        value: action.payload.value,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addToDo, toggleComplete, deleteTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
