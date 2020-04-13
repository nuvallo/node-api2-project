import React, { Fragment } from "react";
import { Link } from "react-browser-router";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar className="navbar" color="light" light expand="md">
        <NavbarBrand>Node API 2</NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
