import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
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

const TodoInput = ({ onSubmit, idx }) => {
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13 && title.trim()) {
      onSubmit(idx ? { title, idx } : { title });
      setTitle('');
    }
  }

  return (
    <Input
      placeholder="무엇을 해야하나요?"
      value={title}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default TodoInput
