import React, { useContext, useEffect } from "react";
import { ListContext } from "../contexts/ListContext";
import TodoElem from "./TodoElems";
import reorderList from "./reorderList";

const TodoList = () => {
  const { todos, dropLocation, currentLocation, drop } = useContext(
    ListContext
  );
  useEffect(() => {
    if (dropLocation !== "") {
      reorderList(currentLocation, dropLocation, todos);
      drop("");
    }
  }, [dropLocation]);
  return (
    <ol className="todo-list">
      {todos.map(todoDetails => (
        <TodoElem key={todoDetails.id} todo={todoDetails}></TodoElem>
      ))}
    </ol>
  );
};

export default TodoList;
