import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="question-div">
            <p>question 1</p>
            <p>answer 1</p>
        </div>

        <div className="question-div">
            <p>question 2</p>
            <p>answer 2</p>
        </div>

        <div className="question-div">
            <p>question 3</p>
            <p>answer 3</p>
        </div>

        <div className="question-div">
            <p>question 4</p>
            <p>answer 4</p>
        </div>

        <div className="question-div">
            <p>question 5</p>
            <p>answer 5</p>
        </div>
      </div>
    </>
  )
}

export default App
