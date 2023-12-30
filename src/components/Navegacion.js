import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navegacion() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="/formulario">Registro</Nav.Link>
            <Nav.Link href="/usuarios">Usuarios</Nav.Link>
            <Nav.Link href="/buscar">Buscar Nombre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      
  );
}

export default Navegacion;