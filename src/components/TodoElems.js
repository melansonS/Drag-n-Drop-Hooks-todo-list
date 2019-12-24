import React, { useState, useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const TodoElem = ({ todo }) => {
  const { removeTodo, drag, drop } = useContext(ListContext);

  let dragStart = e => {
    drag(e.target.id);
    let task = document.getElementById(e.target.id);
    task.style.opacity = "0.4";
  };
  let dragEnd = e => {
    let task = document.getElementById(e.target.id);
    task.style.opacity = "1";
  };

  let onDrop = e => {
    drop(e.target.id);
    let task = document.getElementById(e.target.id);
    task.style.padding = "15px";
  };
  let dragOver = e => {
    e.preventDefault();
  };
  let dragEnter = e => {
    let task = document.getElementById(e.target.id);
    task.style.padding = "19px";
  };
  let dragLeave = e => {
    let task = document.getElementById(e.target.id);
    task.style.padding = "15px";
  };
  return (
    <li
      className="todo-element"
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      onDrop={onDrop}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      id={todo.id}
    >
      {todo.title}
      <span
        onClick={() => {
          removeTodo(todo.id);
        }}
        className="close"
      >
        x
      </span>
    </li>
  );
};
export default TodoElem;
