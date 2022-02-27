function Answer(props){
    return(
        <div>   
            <button type="submit" onClick={() => Selected(props.correct, props.answered)}>Answer</button>
        </div>
    );
}

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

export default Answer