import React, { useCallback } from "react";
import TodoTemplate from "../components/TodoTemplate";

import { useSelector, useDispatch } from "react-redux";
import * as todoActions from "../store/reducers/todo";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector(state => state.todo);

  // Create
  const handleCreate = useCallback(({ title }) => {
    dispatch(todoActions.createTodo({ title }));
  }, [dispatch]);

  // Update
  const handleUpdate = useCallback((title, idx) => {
    dispatch(todoActions.updateTodo({ title, idx }))
  }, [dispatch]);

  // Delete
  const handleDelete = useCallback(idx => {
    dispatch(todoActions.deleteTodo({ idx }));
  }, [dispatch]);

  // Toggle
  const handleToggle = useCallback(idx => {
    dispatch(todoActions.toggleTodo({ idx }));
  }, [dispatch]);

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
