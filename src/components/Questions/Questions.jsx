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
      )
}