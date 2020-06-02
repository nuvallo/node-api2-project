import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar className="navbar" color="light" light expand="md">
        <NavbarBrand>Node API 2</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
