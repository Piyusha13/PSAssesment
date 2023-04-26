import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{background:'white',opacity:'0.5'}} variant="dark" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home" className='fs-1 fw-light' ><span style={{color:'#cbd0d2'}} >Price</span><span style={{color:'#50adb5'}}>Up</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            
          <Nav.Link href="#features"  className='text-black fw-semibold fs-5 '>Features</Nav.Link>
          
          <Nav.Link href="#pricing"  className='text-black fw-semibold fs-5 '>Pricing</Nav.Link>
          
          <Nav.Link href="#blog"  className='text-black fw-semibold fs-5 '>Blog</Nav.Link>
            <Nav.Link href="#getstarted" style={{color:'#50adb5'}}  className='fw-bold fs-5 '>Get Started</Nav.Link>
            <Nav.Link eventKey={2} href="#login"  className='text-black fw-semibold fs-5 '>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;