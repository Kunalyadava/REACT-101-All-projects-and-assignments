import { useState } from "react";
import DiceB from "./DiceB";
import DiceA from "./DiceA";
const Game=()=>{
    
    const [dice1,setDice1]=useState(0);
    const [dice2,setDice2]=useState(0);
    const [show,setShow]=useState(false);
    const [score1,setScore1]=useState(0);
    const [score2,setScore2]=useState(0);
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    const rollDice1=()=>{
        let random=Math.floor(Math.random()*6)+1;
        setDice1(random);
        setScore1(score1+random);
        setShow(!show);
        setCount1(count1+1);

    }
    const rollDice2=()=>{
        let random=Math.floor(Math.random()*6)+1;
        setDice2(random);
        setScore2(score2+random);
        setShow(!show);
        setCount2(count2+1);
    }
    return (
        <div>
            <h1 data-testid="turn-heading">{count1===5&&count2===5?"Game Over!!":show?"Player 2, It is your turn!!":"Player 1, It is your turn!!"}</h1>
            <DiceA dice={dice1} rollDice={rollDice1} show={show} count1={count1} count2={count2}/>
            <DiceB dice={dice2} rollDice={rollDice2} show={show} count2={count2} count1={count1}/>
            <h3 data-testid="player1-score">Player 1 Scores: {score1}</h3>
            <h3 data-testid="player2-score">Player 2 Scores: {score2}</h3>
            <h1 data-testid="result-tag">{count1===5&&count2===5&&score1>score2?"Player 1 Wins!!":count1===5&&count2===5&&score1<score2?"Player 2 Wins!!":count1===5&&count2===5&&score1===score2?"It is a Tie!!":""}</h1>
        </div>
    )
}

export default Game;
