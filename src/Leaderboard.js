import User from './User.js';
function Leaderboard(props) {
    return(
        <div>
            <h2>Leaderboard</h2>
            <User Rank={1} Name="Worldsh" Score={3500}/>
            <User Rank={2} Name="Maplac" Score={2140}/>
            <User Rank={3} Name="EionTok" Score={2018}/>
            <User Rank={4} Name="Pleioni" Score={1008}/>
            <User Rank={5} Name="Luxiomn" Score={970}/>
            <User Rank={6} Name="Jeantra" Score={633}/>
        </div>
    );
  }

  export default Leaderboard;