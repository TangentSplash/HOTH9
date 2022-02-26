function User(props) {
    return(
        <div class="grid-container">
            <div class="grid-item">{props.Rank}</div>
            <div class="grid-item">{props.Name}</div>
            <div class="grid-item">{props.Score}</div>
        </div>
    );
  }

  export default User;