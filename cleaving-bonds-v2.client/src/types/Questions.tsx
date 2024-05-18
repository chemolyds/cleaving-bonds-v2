import { Tier } from './Tier'
import { Topic } from './Topic'

export type Question = {
  id: number
  topic: Topic
  tier: Tier
}

export type QuestionStatus = Question & {
  isSubmitted: boolean
}

export type QuestionStatusByTier = {
  tier: Tier
  questions: QuestionStatus[]
}
