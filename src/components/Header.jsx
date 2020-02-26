import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, .1);
  padding: 1rem 0;

  .container {
    width: 1024px;
    max-width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .logo a {
    font-weight: bold;
    font-size: 1.4rem;
  }

  .navigation {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;

      a {
        display: inline-block;
        padding: 0 1rem;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            프로그라피 프론트 정상협
          </Link>
        </h1>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/todo">투두리스트</Link>
            </li>
            <li>
              <Link to="/movie">영화</Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrap>
  )
}

export default Header
