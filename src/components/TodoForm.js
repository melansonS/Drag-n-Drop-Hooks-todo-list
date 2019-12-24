import React, { useState, useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const TodoForm = () => {
  const { addTodo } = useContext(ListContext);
  const [newTodo, setNewTodo] = useState("");
  const submitNewTodo = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form onSubmit={submitNewTodo} className="todo-form">
      <input
        type="text"
        placeholder="New Task"
        required
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <input type="submit" value="Add task" />
    </form>
  );
};

export default TodoForm;
