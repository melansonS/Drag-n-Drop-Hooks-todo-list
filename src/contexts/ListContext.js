import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const ListContext = createContext();

const ListContextProvider = props => {
  const [todos, setTodos] = useState([
    { title: "First Task", index: 1, id: 0 },
    { title: "second Task", index: 2, id: 1 }
  ]);
  const [currentLocation, setCurrentLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const addTodo = title => {
    setTodos([...todos, { title, index: todos.length + 1, id: uuid() }]);
  };
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const drag = todoId => {
    setCurrentLocation(todoId);
  };
  const drop = todoId => {
    setDropLocation(todoId);
  };

  return (
    <ListContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        drag,
        drop,
        currentLocation,
        dropLocation
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
