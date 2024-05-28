import { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { mutate } from 'swr'

export default function Login() {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleSubmit = async () => {
    if (!username || !password) {
      alert('You need to enter a username or password')
      return
    }

    const response = await fetch('/api/login?useCookies=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `${username}@cods.wcc`,
        password: password,
      }),
    })

    // browser automatically saves cookies that get sent over by the webserver
    // https://javascript.info/cookie
    if (response.status !== 200) {
      alert('Username or password is incorrect')
      return
    }
    mutate('isLoggedIn')
    alert('Logged in!')
  }

  return (
    <div className="container-cap-width">
      <h1 className="mb-3">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="floatingUsername">
          <FloatingLabel label="Username">
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="floatingPassword">
          <FloatingLabel label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <div className="d-grid">
          <Button
            variant="primary"
            //type="submit"
            size="lg"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  )
}
