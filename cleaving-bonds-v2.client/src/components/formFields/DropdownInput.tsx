import { useDropdownInput } from 'react-google-forms-hooks'

export default function DropdownInput({ id }: { id: string }) {
  const { register, options } = useDropdownInput(id)

  return (
    <div className="form-group">
      <select className="form-select" {...register()}>
        <option value="">Select option</option>
        {options.map((o) => (
          <option key={o.label} value={o.label}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
