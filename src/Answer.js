function Answer(props){
    return(
        <div>   
            <button type="submit" onClick={() => {props.setCorrectAnswer(props.correct)}}>{props.answer}</button>
        </div>
    );
}

export default Answer