import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../../store/toDoSlice";

const List: React.FC = () => {
  const toDoList = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="toDoList">
      {toDoList.map((item: any) => (
        <div key={item.id} className="toDoItem">
          <h2>{item.title}</h2>
          <p>{item.value}</p>
          <p>{item.completed ? "Completed" : "Not Completed"}</p>
          <button
            onClick={() => handleToggleComplete(item.id)}
            disabled={item.completed}
            className="complete"
            type="button"
          >
            Complete Task
          </button>
          <button onClick={() => handleDeleteTodo(item.id)} type="button">
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
