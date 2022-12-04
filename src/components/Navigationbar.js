import {Navbar, Container, Nav, NavbarBrand, NavDropdown, Form, Button, NavItem} from "react-bootstrap"
import { NavLink } from "react-router-dom"
const Navigationbar = () => {
    return (
    
 <div className="Navbar">
     <Navbar>
        <Container>
          <Navbar.Brand><div  className="navFont">Tentang JKT48</div></Navbar.Brand>
          <Nav>
            
                <Nav.Link href="/"><div className="navFont">Home</div></Nav.Link> 
        
            
            <Nav.Link href="/Songs"><div className="navFont">Songs</div></Nav.Link>
            
            
            <Nav.Link href="/Member"><div className="navFont">Member</div></Nav.Link>
            
          
              
             
          
          </Nav>
             
          
        </Container>
      </Navbar>
  </div>   
  
    
  


     
    )
}

export default Navigationbar
