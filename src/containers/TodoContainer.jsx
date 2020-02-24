import React from "react";
import { useSelector } from "react-redux";
import TodoTemplate from "../components/TodoTemplate";

const TodoContainer = () => {
  const handleUpdate = () => {};
  const handleDelete = () => {};
  const handleCreate = () => {};
  const handleToggle = () => {};

  const { todos } = useSelector(state => state.todo);

  return (
    <TodoTemplate
      todos={todos}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      onCreate={handleCreate}
      onToggle={handleToggle}
    />
  );
};

export default TodoContainer;
