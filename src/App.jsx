import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import questionsData from "./data.json"
import './App.css'

function App() {
  const [questions, setQuestions] = useState(
     questionsData.map(q => ({ ...q, active: false }))
  );
  
const handleActive = (id) => {
  const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        // toggle only the clicked question
        return { ...question, active: !question.active };
      }
      return question;
    });
    setQuestions(updatedQuestions);
}
  console.log(questions)
  return (
    <>
    <div className="container">
      <h3>FAQ</h3>
      <div className="questions">
        {
        questions.map((question) => (
          <div className="question" onClick={() => handleActive(question.id)} key={question.id}>
            <p>{question.question}</p>
            {question.active ? <p>{question.answer}</p> : null}
          </div>
        )
         
        )
      }
      </div>
      
    </div>
      
    </>
  )
}

export default App
