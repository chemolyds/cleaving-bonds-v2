import { fetcher } from '@/components/fetcher'
import { QuestionStatusByTier } from '@/types/Questions'
import { Button } from 'react-bootstrap'
import useSWR from 'swr'

export function QuestionSetsList() {
  const { data: questionSets, isLoading } = useSWR('/api/Question', fetcher)

  const Sets = () => (
    <div className="row">
      {questionSets.map((tier: QuestionStatusByTier) => (
        <div className="col d-grid gap-2" key={tier.tier}>
          <h2 className="mb-0">{tier.tier}</h2>
          {tier.questions.map((question) => (
            <Button
              size="lg"
              //className={`btn-${question.tier}`}
              href={`/set/${question.tier}/${question.topic}`}
              disabled={question.isSubmitted}
              aria-diabled={question.isSubmitted}
              key={question.topic}
            >
              {question.topic}
            </Button>
          ))}
        </div>
      ))}
    </div>
  )

  return (
    <div>
      <h1 className="mb-3">Sets</h1>
      {isLoading ? <p>Loading...</p> : <Sets />}
    </div>
  )
}
