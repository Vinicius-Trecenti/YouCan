import { useState } from "react"
import { QuizContext } from "./QuizContext"
import { Question, Quiz } from "../../types/Quiz"



export const QuizProvider = ({ children }: { children: JSX.Element }) => {
    const initialQuizState: Quiz = {
        subject: '',
        name: '',
        description: '',
        level: '',
        questions: [
            {
                statement: '',
                alternatives: [{ description: '', points: '' }],
            },
        ],
    };

    const [quiz, setQuiz] = useState<Quiz>(initialQuizState)

    const updateQuizProperty = (propertyName: string, value: string) => {
        try {
            setQuiz((prevQuiz) => ({
                ...prevQuiz,
                [propertyName]: value
            }))
        }
        catch (error) {
            console.error(error)
        }
    }

    const updateQuizPropertyQuestions = (value: Question) => {
        console.log(value)
        try {
            setQuiz((prevQuiz) => ({
                ...prevQuiz,
                questions: [...prevQuiz.questions, value],
            }))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <QuizContext.Provider value={{ quiz, updateQuizProperty, updateQuizPropertyQuestions }}>
            {children}
        </QuizContext.Provider>
    )
}