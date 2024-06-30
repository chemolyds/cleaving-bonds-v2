import { useShortAnswerInput } from 'react-google-forms-hooks'
import useSWR from 'swr'

export default function ShortAnswerInput({
  id,
  label,
}: {
  id: string
  label: string
}) {
  const { register } = useShortAnswerInput(id)
  const { data: teamName } = useSWR('/api/Competitor/teamName')

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control pipe"
        {...register()}
        defaultValue={label.toLowerCase() === 'team name' ? teamName : ''}
        readOnly={label.toLowerCase() === 'team name'}
      />
    </div>
  )
}
