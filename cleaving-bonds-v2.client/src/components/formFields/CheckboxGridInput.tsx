import { useCheckboxGridInput } from 'react-google-forms-hooks'

export default function CheckboxGridInput({ id }: { id: string }) {
  const { columns, renderGrid } = useCheckboxGridInput(id)

  return (
    <table>
      <tr>
        {columns.map((c) => (
          <th key={c.label}>{c.label}</th>
        ))}
      </tr>
      {renderGrid((r) => (
        <tr key={r.label}>
          <td>{r.label}</td>
          {r.renderColumns((c) => (
            <td key={c.label}>
              <input
                type="checkbox"
                className="form-check-input"
                {...c.registerColumn()}
              />
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
}
