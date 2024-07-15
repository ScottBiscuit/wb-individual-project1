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

import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


export default function MainNav({ brand }) {
  return (
    <Navbar expand="lg" className="bg-success navbar-dark">
      <Container fluid>
        <Navbar.Brand href='/'>{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Extras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NPC Generator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tavern/Shop Generator
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Loot Tables</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Dice Roller
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
