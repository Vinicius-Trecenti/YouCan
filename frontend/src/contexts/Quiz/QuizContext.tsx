import { createContext } from "react"
import { Question, Quiz } from "../../types/Quiz"

export type QuizContextType = {
    quiz: Quiz,
    updateQuizProperty: (ppropertyName: string, value: string) => void,
    updateQuizPropertyQuestions: (value: Question) => void
}

export const QuizContext = createContext<QuizContextType>(null!)