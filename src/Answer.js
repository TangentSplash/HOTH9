function Answer(props) {
    return(
        <div>
            <button onClick={<Selected correct={props.correct} />}>{props.answer}</button>
        </div>
    );
  }

  function Selected(props)
  {
      if (props.correct)
      {
        console.log("Correct");
        return(
          <h1>Correct</h1>
            )
      }
      else
      return(
          <div>Incorrect</div>
        )
      
  }

  export default Answer;