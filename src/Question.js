import Answer from './Answer.js';
import React, { useState } from 'react';

<<<<<<< HEAD
function Question(props) {
    const [ watched, setWatched ] = useState("");
=======
var text=""
function Question(props) {
    const [ answered, setAnswered ] = useState(0);
>>>>>>> parent of 595a03f (v0.02)

    const setAnsweredState = () => {
        setAnswered(!answered)
    }
    return(
        <div>
            <h2>Question {props.questNo}</h2>
            <h3>Question Here</h3>
            <header className="answers">
<<<<<<< HEAD
                <Answer answer="Answer 1" correct={false} answered={setWatched}/>
                <Answer answer="Answer 2" correct={false} answered={setWatched}/>
                <Answer answer="Answer 3" correct={true} answered={setWatched}/>
                <Answer answer="Answer 4" correct={false} answered={setWatched}/>
            </header>
            <p id="Answer"> {watched}</p>
=======
            <Answer answer="Answer 1" correct={false} />
            <Answer answer="Answer 2" correct={false} />
            <Answer answer="Answer 3" correct={true} />
            <Answer answer="Answer 4" correct={false} />
            </header>
            <p>{text}</p>
>>>>>>> parent of 595a03f (v0.02)
        </div>
    );
  }

  export default Question;