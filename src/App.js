import './App.css';
import Question from './Question.js';
import Leaderboard from './Leaderboard.js';
import Questions from './QandA.json';


function App() {
  //alert(Questions.NoQs)
  return (
    
    
    <div className="App">
      <h1>Anti-war Knowledge Contest</h1>
        <label>
            Username: 
            <input type="text" name="name" />
        </label>

        <video autoplay muted loop id="myVideo">
          <source src="ucla_ukraine_solidarity.mp4" type="video/mp4"/>
        </video>

      <header className="Quiz">
        Questions.
        <Question questNo={1} />
        <Question questNo={2}/>
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
