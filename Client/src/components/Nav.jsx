import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyled = styled.nav`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavDivBtns = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
  align-items: center;
`;

const NavLogoutBtn = styled.button`
  background-color: #ec29a2;
  border-radius: 15px;
  border: solid 2px #2dd60c;
  padding: 1rem;
  height: fit-content;
  font-weight: bolder;
  color: #2dd60c;
  font-size: larger;
  &:hover {
    color: #ec29a2;
    background: #2dd60c;
    border: #ec29a2 2px solid;
    transform: scale(1.15);
    font-style: italic;
  }
`;

const NavBtns = styled.button`
  background-color: #2dd60c;
  border-radius: 0.5rem;
  padding: 0.75rem 1.9rem;
  font-weight: bolder;
`;

const Nav = ({ onSearch, logOut, closeAll }) => {
  return (
    <NavStyled>
      <NavLogoutBtn onClick={logOut}>Log Out</NavLogoutBtn>
      <NavDivBtns>
        <Link to="/home">
          <NavBtns>Home</NavBtns>
        </Link>
        <Link to="/about">
          <NavBtns>About</NavBtns>
        </Link>
        <Link to="/favorites">
          <NavBtns>Favorites</NavBtns>
        </Link>
      </NavDivBtns>
      <SearchBar onSearch={onSearch} closeAll={closeAll} />
    </NavStyled>
  );
};

export default Nav;
