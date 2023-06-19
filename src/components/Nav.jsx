import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyled = styled.nav`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  /* background-color: rgba(255,0,0,0.7); */
  display: flex;
  justify-content: center;
`;

const Nav = ({ onSearch }) => {
  return (
    <NavStyled >
      <Link to='/home'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link>
      
      <SearchBar onSearch={onSearch} />
    </NavStyled>
  );
};

export default Nav;
