import { useRadioInput } from 'react-google-forms-hooks'

export default function RadioInput({ id }: { id: string }) {
  const { options, customOption, error } = useRadioInput(id)

  return (
    <>
      {options.map((o) => (
        <div key={o.id}>
          <input
            type="radio"
            className="form-check-input"
            id={o.id}
            {...o.registerOption()}
          />
          <label htmlFor={o.id} className="form-check-label ms-1">
            {o.label}
          </label>
        </div>
      ))}
      {customOption && (
        <>
          <input
            type="radio"
            className="form-check-input"
            id={customOption.id}
            {...customOption.registerOption()}
          />
          <label className="form-check-label ms-1" htmlFor={customOption.id}>
            Custom Option
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Custom response here..."
            {...customOption.registerCustomInput()}
          />
        </>
      )}
      <span className="invalid-feedback px-2">
        {error && 'This field is required'}
      </span>
    </>
  )
}
