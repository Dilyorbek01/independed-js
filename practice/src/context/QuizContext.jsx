import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuizContext = createContext()
export function QuizProvider({children}) {
    const [questions, setQuestions] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

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


    return(
            <QuizContext.Provider 
            value={{questions, isPending, error}}
            >
                {children}
            </QuizContext.Provider>
    )
}