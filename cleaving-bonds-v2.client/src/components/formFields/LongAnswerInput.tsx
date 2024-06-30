import { useLongAnswerInput } from 'react-google-forms-hooks'

export default function LongAnswerInput({ id }: { id: string }) {
  const { register } = useLongAnswerInput(id)

  return (
    <div className="form-group">
      <textarea className="form-control" {...register()} />
    </div>
  )
}
