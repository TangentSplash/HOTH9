import Answer from './Answer.js';
import React, { useState } from 'react';

function Question(props) {
    const [ watched, setWatched ] = useState("");

    const setAnsweredState = () => {
        setAnswered(!answered)
    }
    return(
        <div>
            <h2>Question {props.questNo}</h2>
            <h3>Question Here</h3>
            <header className="answers">

            <Answer answer="Answer 1" correct={false} />
            <Answer answer="Answer 2" correct={false} />
            <Answer answer="Answer 3" correct={true} />
            <Answer answer="Answer 4" correct={false} />
            </header>
            <p>{text}</p>

        </div>
    );
  }

  export default Question;