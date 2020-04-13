import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
      padding: 1%;
    }
  }
`;

export default Navbar;
