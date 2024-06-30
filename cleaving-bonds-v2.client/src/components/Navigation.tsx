import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from './fetcher'

const paths = [
  { to: '/', name: 'Home' },
  { to: '/leaderboard', name: 'Leaderboard' },
  { to: '/admin/dashboard', name: 'Admin Dashboard' },
  { to: '/sets', name: 'Sets' },
]

export default function Navigation() {
  const { data: isLoggedIn } = useSWR('/api/Identity/isLoggedIn', fetcher)
  const { data: isCatalyzed } = useSWR('/api/competitor/isCatalyzed', fetcher)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Cleaving Bonds</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {paths.map((path) => (
              <Nav.Link to={path.to} as={Link} key={path.to}>
                {path.name}
              </Nav.Link>
            ))}
            {isLoggedIn ? (
              <Nav.Link to="/logout" as={Link} key="/logout">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link to="/login" as={Link} key="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              {isCatalyzed ? 'Catalyzed!' : 'Not Catalyzed...'}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
