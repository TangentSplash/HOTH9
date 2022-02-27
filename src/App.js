import './App.css';
import Question from './Question.js';
import Leaderboard from './Leaderboard.js';
import questions from './QandA.js';


function App() {
  return (
    
    <div className="App">
      <h1>Anti-War Knowledge Contest</h1>
        <label>
        <video autoPlay muted loop id="myVideo">
        <source src="./ucla_ukraine_solidarity.mp4" type="video/mp4"/>
        </video>
          {/*<Player
            playsInline
            src="ucla_ukraine_solidarity.mp4"/>*/}
            Username: 
            <input type="text" name="name" />
        </label>
        
      <header className="Quiz">
        Questions
        {
          // loop over question array
          questions.map((question, index) => {
              // question - current element we loop on
              // index - current element index that we are looping on
              return (
                <Question 
                  questNo={index}
                  questionText={question['Question']}
                  answers={question['Answers']}
                />
              )
          })
        }
        
        {/* <Question 
          questNo={0}
          questionText={questions[0]['Question']}
          answers={questions[0]['Answers']}
        /> */}
        {/* <Question questNo={2}/> */}
      </header>
      
      <header className="Leaderboard">
        <Leaderboard/>
      </header>
      <a href="https://quizlet.com/159758556/quiz-questions-intro-to-peace-studies-flash-cards/" rel="noreferrer">
      Questions by madison_piotrowski
      </a>
    </div>
    
  );
}

export default App;
