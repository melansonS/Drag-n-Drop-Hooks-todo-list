import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ListHeader = () => {
  const { todos } = useContext(ListContext);
  return (
    <div className="list-header">
      <h1>Hooks Todo List</h1>
      <p>You currently have {todos.length} tasks on your todo list</p>
    </div>
  );
};

export default ListHeader;
