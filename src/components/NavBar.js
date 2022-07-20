import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          <img
            alt="logo"
            src="././logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Xperiment
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Celulares</NavDropdown.Item>
              <NavDropdown.Item href="#">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#">Tablets</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
