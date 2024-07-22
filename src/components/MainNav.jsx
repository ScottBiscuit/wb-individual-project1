// import { Container, Nav, Navbar } from "react-bootstrap";

// export default function MainNav({ brand, rightLinks}) {
//     return (
//         <Navbar expand='lg' className='bg-success navbar-dark'>
//             <Container fluid>
//                 <Navbar.Brand href="/">{brand}</Navbar.Brand>
//                 <Navbar.Toggle />
//                 <Navbar.Collapse>
//                     <Nav className="me-auto">
//                         {rightLinks.map(({ url, text }, index) => (
//                             <Nav.Link key={index} href={url}>
//                                 {text}
//                             </Nav.Link>
//                         ))}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNav({ brand }) {
  return (
    <Navbar expand="lg" className="bg-success navbar-dark" sticky='top'>
      <Container fluid>
        <Navbar.Brand href='/'>{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/party">Party Info</Nav.Link>
            <Nav.Link href="/session_notes">Session Notes</Nav.Link>
            <NavDropdown title="Extras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/npcGenerator">NPC Generator</NavDropdown.Item> 
              <NavDropdown.Item href="#action/tavernShopGenerator">
                Tavern/Shop Generator
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/lootTable">Loot Tables</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/diceRoller">
                Dice Roller
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
