import Answer from './Answer.js';
import React, { useState } from 'react';

function Question(props) {
    const [ correctAnswer, setCorrectAnswer ] = useState(null);

    // const setAnsweredState = () => {
    //     setAnswered(!answered)
    // }

    return(
        <div>
            <h2>Question {props.questNo +1}</h2>
            <h3>{props.questionText}</h3>
            <header className="answers">
            {
                // loops through answer array
                props.answers.map((answer, index) => {
                    // answer - current element we are looping on
                    // index - index of the element we are looping on
                    return (
                    <Answer
                        answer={answer.ans}
                        correct={answer.correct}
                        setCorrectAnswer={setCorrectAnswer}
                    />);
                })
            }

            {/* <Answer answer="Answer 1" correct={false} setCorrectAnswer={setCorrectAnswer}/>
            <Answer answer="Answer 2" correct={false} setCorrectAnswer={setCorrectAnswer}/>
            <Answer answer="Answer 3" correct={true} setCorrectAnswer={setCorrectAnswer}/>
            <Answer answer="Answer 4" correct={false} setCorrectAnswer={setCorrectAnswer}/> */}
            </header>
            <p> {/* 
                    1 == '1' // true 
                    1 === '1' // false
                */}
                {correctAnswer === null ? null : correctAnswer === true ? "Correct" : "Incorrect"}
            </p>

        </div>
    );
  }

  export default Question;