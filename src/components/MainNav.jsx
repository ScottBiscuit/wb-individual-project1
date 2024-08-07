import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogInOutButton from './login/LogInOutButton';

export default function MainNav({ brand }) {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res= await axios.post('/api/logout');
    if (res.data.success){
      navigate('/')
    }
  }
  return (
    <Navbar expand="lg" className="bg-success navbar-dark" sticky='top'>
      <Container fluid>
        <Navbar.Brand href='/'>{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='Oops'>Oops...</Nav.Link>
            <Nav.Link href="party">Party Info</Nav.Link>
            <Nav.Link href="sessionNotes">Session Notes</Nav.Link>
            <NavDropdown title="Extras" id="basic-nav-dropdown">
              <NavDropdown.Item disabled>Coming Soon...</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/npcGenerator" disabled>NPC Generator</NavDropdown.Item> 
              <NavDropdown.Item href="#action/tavernShopGenerator" disabled>
                Tavern/Shop Generator
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/lootTable" disabled>Loot Tables</NavDropdown.Item>
              <NavDropdown.Item href="#action/diceRoller" disabled>
                Dice Roller
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/adminStuff" disabled>
                Admin Stuff
              </NavDropdown.Item>
            </NavDropdown>
            <LogInOutButton onLogout={handleLogout} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
