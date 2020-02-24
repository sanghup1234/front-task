import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

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

const TodoInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #efefef;
  outline: none;
  padding: 15px;
  font-size: 2rem;
  font-weight: 300;

  &::placeholder {
    color: #ddd;
  }
`;

const TodoTemplate = ({ todos, onUpdate, onDelete, onToggle }) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <TodoWrap>
      <TodoTitle>Todos</TodoTitle>
      <TodoBox>
        <TodoInput
          placeholder="무엇을 해야하나요?"
          value={input}
          onChange={handleChange}
        />
        <TodoList todos={todos} />
      </TodoBox>
    </TodoWrap>
  );
};

export default TodoTemplate;
