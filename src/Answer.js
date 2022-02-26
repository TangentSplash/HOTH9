function Answer(props) {
    return(
        <div>
            <button onClick={<Selected correct={props.correct}/>}>{props.answer}</button>
        </div>
    );
  }

  function Selected(props)
  {
      if (props.correct)
      {
        //.setState({text})="Correct"
        document.getElementById("Answer").innerHTML="Correct";
        document.getElementById("Answer").forceUpdate();
        console.log("Correct");
        return(
          <h1>Correct</h1>
            )
      }
      else
      {
      console.log("Incorrect");
      return(
          <div>Incorrect</div>
        )
      }
      
  }

  export default Answer;