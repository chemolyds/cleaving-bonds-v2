import Form from '@/components/Form'
import Pdf from '@/components/Pdf'
import { Tier } from '@/types/Tier'
import { Topic } from '@/types/Topic'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function Question() {
  const { topic, tier } = useParams()

  return (
    <div>
      <h1>
        {tier} {topic}
      </h1>
      <Row>
        <Col className="mb-3">
          <Pdf src={`/pdf/Bronze/Analytical.pdf`} />
        </Col>
        <Col xs={16} lg xl xxl>
          <Form questionId={id} form={f} />
        </Col>
      </Row>
    </div>
  )
}
