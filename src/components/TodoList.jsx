import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemove, onChange, onToggle }) => {
  return (
    <ul>
      {todos.map(({ title, checked }, idx) => (
        <TodoItem
          key={idx}
          title={title}
          checked={checked}
          onRemove={onRemove}
          onChange={onChange}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
