import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import questionsData from "./data.json"
import Questions from './components/Questions/Questions'
import './App.css'
import GlobalStyles from './GlobalStyle'
import styled from 'styled-components'

function App() {
  const [questions, setQuestions] = useState(
     questionsData.map(q => ({ ...q, active: false }))
  );
  
  console.log(questions)
  return (
    <>
    <GlobalStyles/>
    <Container>
      <h3>FAQ</h3>
      <Questions questions={questions} setQuestions={setQuestions}/>
      
    </Container>
      
    </>
  )
}

export default App;

const Container = styled.div `
  background-color: white;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  border-radius: 23px;

`
