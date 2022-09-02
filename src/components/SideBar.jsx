import {Component} from 'react'
import {Container,Navbar,NavDropdown,Nav} from 'react-bootstrap'
 
class SideBar extends Component{
    render(){
        return(
            <Container fluid>
        <Navbar expand="md" variant="light">
          <Navbar.Brand href="#">TV Shows</Navbar.Brand>
          <Nav>
            <NavDropdown className="bg-dark" id="nav-dropdown-dark-example" title="Genres" menuVariant="dark">
              <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="d-flex">
            <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
            
        )
    }
}

export default SideBar;