import Answer from './Answer.js';

function Question(props) {
    return(
        <div>
            <h2>Question {props.questNo}</h2>
            <h3>Question Here</h3>
            <header className="Answers">
            <Answer answer="Answer 1" correct={false} />
            <Answer answer="Answer 2" correct={false} />
            <Answer answer="Answer 3" correct={true} />
            <Answer answer="Answer 4" correct={false} />
            </header>
        </div>
    );
  }

  export default Question;