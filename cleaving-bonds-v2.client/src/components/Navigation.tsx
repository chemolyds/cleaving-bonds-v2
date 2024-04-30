import { Container, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Cleaving Bonds</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
