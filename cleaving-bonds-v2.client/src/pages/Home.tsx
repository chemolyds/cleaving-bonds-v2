import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReferenceType, references } from '../assets/references'

interface Forecast {
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

export default function Home() {
  const [forecasts, setForecasts] = useState<Forecast[]>()

  useEffect(() => {
    populateWeatherData()
  }, [])

  const contents =
    forecasts === undefined ? (
      <p>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{' '}
          <a href="https://aka.ms/jspsintegrationreact">
            https://aka.ms/jspsintegrationreact
          </a>{' '}
          for more details.
        </em>
      </p>
    ) : (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )

  return (
    <>
      <h1>Welcome to WCC!</h1>
      <p>Your reference materials:</p>
      {references.map((ref: ReferenceType) => (
        <Button href={ref.href}>{ref.title}</Button>
      ))}

      <h1 id="tableLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      <Button variant="outline-danger">tests bootstrap</Button>
      {contents}
    </>
  )

  async function populateWeatherData() {
    const response = await fetch('weatherforecast')
    const data = await response.json()
    setForecasts(data)
  }
}