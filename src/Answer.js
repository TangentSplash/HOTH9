function Answer(props){
    return(
<<<<<<< HEAD
        <div>   
            <button type="submit" onClick={() => Selected(props.correct, props.answered)}>Answer</button>
=======
        <div>
            <button onClick={<Selected correct={props.correct} />}>{props.answer}</button>
>>>>>>> parent of 595a03f (v0.02)
        </div>
    );
}

<<<<<<< HEAD
function Selected(correct, answered)
{
    if (correct)
    {
        //alert("Correct")
        answered("Correct")
    }
    else
    {
        //alert("Incorrect")
        answered("Incorrect")
    }
    //props.answered(props.correct)
    
}
=======
  function Selected(props)
  {
      if (props.correct)
      {
        //.setState({text})="Correct"
        setAnsweredState
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
>>>>>>> parent of 595a03f (v0.02)

export default Answer