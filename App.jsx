import React, { useState } from "react";
function App() {
  const questions = [
    { q: "Capital of India?", a: "Delhi" },
    { q: "React uses which language?", a: "JavaScript" },
    { q: "2 + 2 = ?", a: "4" }
  ];
 const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
const check = (answer) => {
    if (answer === questions[index].a) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  if (index >= questions.length) {
    return <h2>Your Score: {score}/{questions.length}</h2>;
  }
return (
    <div style={{ textAlign: "center" }}>
      <h2>Quiz Application</h2>
      <h3>{questions[index].q}</h3>
      <button onClick={() => check(prompt("Enter Answer"))}>
        Answer
      </button>
    </div>
  );
}
export default App;

