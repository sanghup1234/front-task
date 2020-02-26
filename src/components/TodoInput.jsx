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

const TodoInput = ({ idx, onSubmit, value = "" }) => {
  const [title, setTitle] = useState(value);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13 && title.trim()) {
      onSubmit({ title, idx });
      setTitle("");
    }
  };

  return (
    <Input
      placeholder="무엇을 해야하나요?"
      value={title}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
