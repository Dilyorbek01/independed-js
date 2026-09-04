import { useContext } from "react";
import { QuizContext } from "./context/QuizContext";

function App() {
const {questions, isPending, error, curQuesIn, score, handleAnswerClick} = useContext(QuizContext)
const currentQuestion = questions[curQuesIn]
  if (isPending) return <div>Savollar yuklanmoqda...</div>;
return(
  <div className="p-5 max-w-md mx-auto bg-white rounded-xl shadow-md">
  
    {curQuesIn === questions.length ? (
      <div>
        <h2 className="text-2xl font-bold text-green-600">Test yakunlandi</h2>
        <p className="text-xl mt-3">Siz 10 tadan <span className="font-bold text-blue-600">{score}</span> ta savolga to'g'ri javob berdingiz</p>
      </div>
    ) : (
      <div>
        {currentQuestion && (
          <div>
            <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
            <div className="flex flex-col gap-2">
              {currentQuestion.options.map((option, index)=> (
                <button 
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="bg-blue-500 text-white p-2 rounded-hover:bg-blue-600"
                >
                  {option}
                </button>
              ))}

            </div>
          </div>
        )}
      </div>
    )}
  </div>
)
}
export default App