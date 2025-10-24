import styled from "styled-components";

export default function Questions({questions, setQuestions}) {
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
    return (
    <QuestionsDiv>
        {
        questions.map((question) => (
          <div className="question" onClick={() => handleActive(question.id)} key={question.id}>
            <p>{question.question}</p>
            {question.active ? <p>{question.answer}</p> : null
            
        }
          </div>
        )
         
        )
      }
      </QuestionsDiv>
      )
}

const QuestionsDiv = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
`