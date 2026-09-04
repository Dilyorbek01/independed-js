import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuizContext = createContext()
export function QuizProvider({children}) {
    const [questions, setQuestions] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [curQuesIn, setCurQuesIn] = useState(0)
    const [score, setScore] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3000/questions")
        .then((res) => {
            setQuestions(res.data)
            setIsPending(false)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })
    }, [])

    const handleAnswerClick =(selectedOption) => {
        const currentQuestion = questions[curQuesIn]
        if(selectedOption === currentQuestion.answer) {
            setScore(score+1)
        }
        setCurQuesIn(curQuesIn+1)
    }

    return(
            <QuizContext.Provider 
            value={{questions, isPending, error,curQuesIn, score, handleAnswerClick}}
            >
                {children}
            </QuizContext.Provider>
    )
}