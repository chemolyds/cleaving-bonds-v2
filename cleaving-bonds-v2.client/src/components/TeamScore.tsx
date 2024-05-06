import { Card, ProgressBar } from 'react-bootstrap'

export default function TeamScore({
  name,
  bronzeScore = 0,
  silverScore = 0,
  goldScore = 0,
  totalScore = 0,
  placement,
}: {
  name: string
  bronzeScore?: number
  silverScore?: number
  goldScore?: number
  totalScore?: number
  placement: number
}) {
  const cardStyle = (
    <Card className="">
      {placement <= 3 && (
        <Card.Header className={`card-${rankName(placement)}`}>
          {rankName(placement)}
        </Card.Header>
      )}
      <Card.Body>
        <div className="d-flex justify-content-between">
          <h4>{name}</h4>
          <h4>{totalScore.toFixed(1)}</h4>
        </div>
        <ProgressBar>
          <ProgressBar now={bronzeScore} className="progress-bronze" />
          <ProgressBar now={silverScore} className="progress-silver" />
          <ProgressBar now={goldScore} className="progress-gold" />
        </ProgressBar>
      </Card.Body>
    </Card>
  )

  const divStyle = (
    <div>
      <div className="d-flex justify-content-between">
        <h4>{name}</h4>
        <h4>{totalScore.toFixed(1)}</h4>
      </div>
      <ProgressBar>
              <ProgressBar now={bronzeScore} className="progress-bronze" max={112} />
              <ProgressBar now={silverScore} className="progress-silver" max={112} />
              <ProgressBar now={goldScore} className="progress-gold" max={112} />
      </ProgressBar>
    </div>
  )

  return (placement <= 3) ? cardStyle : divStyle
}

const rankName = (rank: number) => {
  switch (rank) {
    case 1:
      return '1st'
    case 2:
      return '2nd'
    case 3:
      return '3rd'
    default:
      return `${rank}th`
  }
}
