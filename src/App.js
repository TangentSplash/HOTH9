import './App.css';
import Question from './Question.js';
import Leaderboard from './Leaderboard.js';

function App() {
  return (
    <div className="App">
      <h1>Anti-War</h1>
        <label>
            Username: 
            <input type="text" name="name" />
        </label>
      <header className="Quiz">
        <Question questNo='1' />
        <Question questNo='2'/>
      </header>
      <header className="Leaderboard">
        <Leaderboard/>
      </header>
    </div>
  );
}

export default App;
