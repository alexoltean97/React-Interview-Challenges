import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../../store/toDoSlice";

const AddPanel: React.FC = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddToDo = (e: FormEvent) => {
    e.preventDefault();
    if (title && value) {
      dispatch(
        addToDo({
          title: title,
          value: value,
        })
      );
      setTitle("");
      setValue("");
    }
  };

  return (
    <div className="add-panel">
      <form onSubmit={handleAddToDo}>
        <input
          type="text"
          placeholder="To Do Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="To Do Description"
          value={value}
          onChange={handleValueChange}
        />
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
};

export default AddPanel;
