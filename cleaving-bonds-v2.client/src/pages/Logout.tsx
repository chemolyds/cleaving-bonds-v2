import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { mutate } from 'swr'

export default function Logout() {
  const navigate = useNavigate()

  const logoutUser = async () => {
    const response = await fetch('/api/Identity/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })

    alert('bye...')
    mutate('/api/Identity/isLoggedIn')
    navigate('/')
  }

  return (
    <div className="container-cap-width">
      <h1 className="mb-3">Logout</h1>
      <p>Do you want to logout?</p>
      <div className="row">
        <div className="col d-grid">
          <Button variant="danger" onClick={logoutUser}>
            Yes
          </Button>
        </div>
        <div className="col d-grid">
          <Button variant="primary" onClick={() => navigate('/')}>
            No
          </Button>
        </div>
      </div>
    </div>
  )
}
