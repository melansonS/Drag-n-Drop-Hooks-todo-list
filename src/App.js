import React from "react";
import ListHeader from "./components/ListHeader";
import ListContextProvider from "./contexts/ListContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <ListContextProvider>
        <ListHeader />
        <TodoList />
        <TodoForm />
      </ListContextProvider>
    </div>
  );
}

export default App;
