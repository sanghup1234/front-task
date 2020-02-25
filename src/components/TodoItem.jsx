import React, { memo, useState } from "react";
import styled from "styled-components";

const ListWrap = styled.li`
  cursor: pointer;
  border-bottom: 1px solid #efefef;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  font-weight: 300;

  .todo-title {
    width: 75%;
    font-size: 1.5rem;

    &.done {
      text-decoration: line-through;
      color: #ddd;
    }
  }

  .btn-wrap {
    width: 25%;

    .btn {
      cursor: pointer;
      padding: 0.5rem 0.75rem;
      border-radius: 3px;
      margin: 0 2px;
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      &-delete {
        color: #e74c3c;
      }

      &-update {
        color: #3498db;
      }
    }
  }
`;

const TodoItem = ({ idx, title, checked, onDelete, onToggle, onUpdate }) => {
  const [isChange, setIsChange] = useState(false);

  const handleToggle = () => {
    onToggle(idx);
  };

  const handleDelete = () => {
    onDelete(idx);
  };

  const handleChangeToggle = () => {
    setIsChange(!isChange);
  }

  return (
    <ListWrap>
      <ListBox>
        <p className={`todo-title ${checked ? "done" : ""}`} onClick={handleToggle}>{title}</p>
        <div className="btn-wrap">
          <span className="btn btn-update" onClick={handleChangeToggle}>수정</span>
          <span className="btn btn-delete" onClick={handleDelete}>삭제</span>
        </div>
      </ListBox>
    </ListWrap>
  );
};

export default memo(TodoItem);
