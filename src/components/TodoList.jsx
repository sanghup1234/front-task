import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onUpdate, onToggle }) => {
  return (
    <ul>
      {todos.map(({ title, checked }, idx) => (
        <TodoItem
          key={idx}
          idx={idx}
          title={title}
          checked={checked}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
