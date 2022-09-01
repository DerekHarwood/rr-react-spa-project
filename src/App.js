import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
        <>
        <h1 className='newsName'>Wiskey Coding Newspaper</h1>
         <Navbar className='Navbar' bg="light" variant="light">
          <Container>
           <Nav className="me-auto">
             <Nav.Link className='NavbarLink' href="#home">Front Page</Nav.Link>
             <Nav.Link className='NavbarLink' href="#Sports">Sports</Nav.Link>
             <Nav.Link className='NavbarLink' href="#Entertanment">Entertanment</Nav.Link>
             <Nav.Link className='NavbarLink' href="#Comics">Comics</Nav.Link>
           </Nav>
          </Container>
         </Navbar>
          <img src='/OutdoorSunrise.jpg' alt='Outdoor pasture'></img>


        </>
  );
}

export default App;
