import './App.css';
import Question from './Question.js';

var text="Hello";

function App() {
  return (
    <div className="App">
      <h1>Anti-War</h1>
      <header className="App-header">
        <Question questNo='1' />
        <Question questNo='2'/>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
