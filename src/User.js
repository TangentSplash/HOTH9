function User(props) {
    return(
        <tr>
            <th>{props.Rank}</th>
            <th>{props.Name}</th>
            <th>{props.Score}</th>
        </tr>
    );
  }

  export default User;