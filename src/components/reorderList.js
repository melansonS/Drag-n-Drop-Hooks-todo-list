const reOrderList = (cloc, nloc, todos) => {
  if (cloc === nloc) {
    return todos;
  }
  let currentIndex = "";
  let newIndex = "";
  todos.forEach((todo, index) => {
    if (todo.id + "" === cloc) {
      currentIndex = index;
    }
    if (todo.id + "" === nloc) {
      newIndex = index;
    }
  });
  //remove current index
  let movedTodo = todos.splice(currentIndex, 1);
  //splice it back in it's new position
  todos.splice(newIndex, 0, movedTodo[0]);
};

export default reOrderList;
