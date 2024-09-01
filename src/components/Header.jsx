import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to="/action">
                Action
              </NavLink>
              <NavLink className="dropdown-item" to="/another-action">
                Another action
              </NavLink>
              <NavLink className="dropdown-item" to="/something">
                Something
              </NavLink>
              <NavLink className="dropdown-item" to="/separeted-link">
                Separated link
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
