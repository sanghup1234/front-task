import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const TodoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem;
`;

const TodoTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  color: #d81d45;
  margin-bottom: 1rem;
`;

const TodoBox = styled.div`
  width: 500px;
  max-width: 90%;
  background-color: #fff;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

const TodoTemplate = ({ todos, onCreate, onUpdate, onDelete, onToggle }) => {
  return (
    <TodoWrap>
      <TodoTitle>Todos</TodoTitle>
      <TodoBox>
        <TodoInput onSubmit={onCreate} />
        <TodoList 
          todos={todos} 
          onToggle={onToggle} 
          onDelete={onDelete} 
          onUpdate={onUpdate}  
        />
      </TodoBox>
    </TodoWrap>
  );
};

export default TodoTemplate;
