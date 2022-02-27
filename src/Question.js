import Answer from './Answer.js';
import React, { useState } from 'react';

function Question(props) {
    const [ watched, setWatched ] = useState("");

    return(
        <div>
            <h2>Question {props.questNo}</h2>
            <h3>Question Here</h3>
            <header className="answers">
                <Answer answer="Answer 1" correct={false} answered={setWatched}/>
                <Answer answer="Answer 2" correct={false} answered={setWatched}/>
                <Answer answer="Answer 3" correct={true} answered={setWatched}/>
                <Answer answer="Answer 4" correct={false} answered={setWatched}/>
            </header>
            <p id="Answer"> {watched}</p>
        </div>
    );
  }

  export default Question;