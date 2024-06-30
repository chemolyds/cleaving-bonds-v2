import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import useSWR from 'swr'
import CheckboxGridInput from '../components/formFields/CheckboxGridInput'
import CheckboxInput from '../components/formFields/CheckboxInput'
import DropdownInput from '../components/formFields/DropdownInput'
import LinearGrid from '../components/formFields/LinearGrid'
import LongAnswerInput from '../components/formFields/LongAnswerInput'
import RadioGridInput from '../components/formFields/RadioGridInput'
import RadioInput from '../components/formFields/RadioInput'
import ShortAnswerInput from '../components/formFields/ShortAnswerInput'
import { fetcher } from './fetcher'

export default function Form({
  form,
  questionId,
}: {
  form: any
  questionId: number
}) {
  const methods = useGoogleForm({ form: form })
  const { data: isCatalyzed } = useSWR('/api/Competitor/isCatalyzed', fetcher)
  const { data: teamId } = useSWR('/api/Competitor/teamId', fetcher)

  const onSubmit = async (data) => {
    console.log('>>> Here is the data: ', data)
    await methods.submitToGoogleForms(data)

    const body = {
      TeamId: teamId,
      QuestionId: questionId,
      IsCatalyzed: isCatalyzed,
      IsGraded: false,
    }

    fetch('/api/competitor/submit', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (!response.ok) {
        alert(response.statusText)
        return
      }
      alert('Form submitted with success!')
      window.location.href = '/sets'
    })
  }

  console.log('>>> Here are the errors!!!', methods.formState.errors.toString())

  const Questions = () => {
    return (
      <div>
        {form.fields.map((field) => {
          const { id, label } = field

          let questionInput = null
          switch (field.type) {
            case 'CHECKBOX':
              questionInput = <CheckboxInput id={id} />
              break
            case 'RADIO':
              questionInput = <RadioInput id={id} />
              break
            case 'SHORT_ANSWER':
              questionInput = <ShortAnswerInput id={id} label={label} />
              break
            case 'LONG_ANSWER':
              questionInput = <LongAnswerInput id={id} />
              break
            case 'RADIO_GRID':
              questionInput = <RadioGridInput id={id} />
              break
            case 'CHECKBOX_GRID':
              questionInput = <CheckboxGridInput id={id} />
              break
            case 'DROPDOWN':
              questionInput = <DropdownInput id={id} />
              break
            case 'LINEAR':
              questionInput = <LinearGrid id={id} />
              break
          }

          if (!questionInput) {
            return null
          }

          return (
            <div className="mb-2">
              <h3 className="mb-1">{field.label}</h3>
              {questionInput}
              <p className="text-sm color-red mt-0">{field.description}</p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <GoogleFormProvider {...methods}>
      <form className="w-auto px-2" onSubmit={methods.handleSubmit(onSubmit)}>
        {form.title && (
          <div>
            <h1>{form.title}</h1>
            {form.description && (
              <p className="text-muted">{form.description}</p>
            )}
          </div>
        )}
        <Questions />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </GoogleFormProvider>
  )
}
