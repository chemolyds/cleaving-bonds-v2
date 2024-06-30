import { useCheckboxInput } from 'react-google-forms-hooks'

export default function CheckboxInput({ id }: { id: string }) {
  const { options, customOption } = useCheckboxInput(id)

  return (
    <>
      {options.map((o) => (
        <>
          <input
            type="checkbox"
            className="form-check-input"
            id={o.id}
            {...o.registerOption()}
          />
          <label htmlFor={o.id} className="form-check-label ms-1">
            {o.label}
          </label>
        </>
      ))}
      {customOption && (
        <>
          <input
            type="checkbox"
            className="form-check-input"
            id={customOption.id}
            {...customOption.registerOption()}
          />
          <label htmlFor={customOption.id} className="form-check-label ms-1">
            Custom Option
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your response here..."
            {...customOption.registerCustomInput()}
          />
        </>
      )}
    </>
  )
}
