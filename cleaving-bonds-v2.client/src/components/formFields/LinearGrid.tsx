import { useLinearInput } from 'react-google-forms-hooks'

export default function LinearGrid({ id }: { id: string }) {
  const { options, legend, error } = useLinearInput(id)

  return (
    <div className="form-group">
      <div className="d-flex flex-row justify-content-center">
        <div>{legend.labelFirst}</div>
        {options.map((o) => (
          <input
            key={o.id}
            className="form-check-input"
            type="radio"
            {...o.registerOption()}
          />
        ))}
        <div>{legend.labelLast}</div>
      </div>
      <span className="invalid-feedback">
        {error && 'This field is required!'}
      </span>
    </div>
  )
}
