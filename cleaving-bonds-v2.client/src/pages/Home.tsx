import { ReferenceType, references } from '@/assets/references'
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <h1>Welcome to WCC!</h1>
      <p>Your reference materials:</p>
      {references.map((ref: ReferenceType) => (
        <Button href={ref.href}>{ref.title}</Button>
      ))}
    </>
  )
}
