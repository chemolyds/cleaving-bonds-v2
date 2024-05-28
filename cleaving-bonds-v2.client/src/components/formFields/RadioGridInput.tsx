import { useRadioGridInput } from 'react-google-forms-hooks'

export default function RadioGridInput({ id }: { id: string }) {
  const { columns, renderGrid } = useRadioGridInput(id)

  return (
    <table>
      <tr>
        {columns.map((c) => (
          <th key={c.label}>{c.label}</th>
        ))}
      </tr>
      {renderGrid((r) => (
        <tr key={r.label}>
          <td className="form-check-label">{r.label}</td>
          {r.renderColumns((c) => (
            <td key={c.label}>
              <input
                type="radio"
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
