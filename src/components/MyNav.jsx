
import { Container, Navbar, Nav }  from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {

  const location = useLocation()
  console.log(location)

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
              <Link className={location.pathname === "/" ? "nav-link active" : "nav-link" } to="/">Home</Link> 
              <Link className={location.pathname === "/tvShow"? "nav-link active" : "nav-link"} to="/tvShow"> Tv Shows</Link> 
              <Link className="nav-link" to="/movies">Movies</Link> 
              <Link className="nav-link" to="/recently">Recently Added</Link> 
              <Link className="nav-link" to="/myList">My List</Link>
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

export default MyNav;
