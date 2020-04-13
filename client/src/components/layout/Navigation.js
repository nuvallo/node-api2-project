import React from "react";
import { Link } from "react-browser-router";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Node API</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
