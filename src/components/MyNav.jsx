import { Component } from "react";
import { Container, Navbar, Nav }  from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      
        <Navbar
          className="navbar navbar-expand-md navbar-dark"
          style={{ backgroundColor: "#21f1f" }}
        >
            <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="../img/logo.png"
              style={{ width: "100px", height: "55px" }}
              alt="Log"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tv Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex">
              <i className="bi bi-search me-3 mx-3"></i>
              <div id="kids">KIDS</div>
              <i className="bi bi-bell-fill mx-3"></i>
              <i className="bi bi-person-fill"></i>
            </Navbar.Text>
          </Navbar.Collapse> 
          </Container>
        </Navbar>
     
    );
  }
}

export default MyNav;
