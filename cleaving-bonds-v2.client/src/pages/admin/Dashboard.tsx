import { CheckLg } from 'react-bootstrap-icons'

export function AdminDashboard() {
  return (
    <div>
      <h1>Scores</h1>
      <button className="btn btn-danger w-100 mb-2">Toggle Catalyze</button>
      <table className="table">
        <thead>
          <tr>
            <th>Team Name</th>
            {[...Array(12).keys()].map((i) => (
              <th>Q{i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5).keys()].map((t) => (
            <tr key={t}>
              <td>Team {t}</td>
              {[...Array(12).keys()].map((i) => (
                <td key={`${i}`}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Grade!"
                    />
                    <button type="submit" className="btn btn-primary">
                      <CheckLg />
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
