import React, { useState } from 'react'
import { generateChoice } from '../utils/utils.js'
import './GameBody.css'

//Logic should be carried here//

const GameBody = () => {

    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    //test
    let choices = [1, 4, 5, 2, 6, 3]
    //console.log(generateChoice(choices))

    const handleResult = (p) => console.log(generateChoice(choices))
    return (
        <div id='game-div'>
            <div id="choice-picker-div">
                <GameCard Result={handleResult} Type={0} Image={"./rock.png"} />
                <GameCard Result={handleResult} Type={1} Image={"./paper.png"} />
                <GameCard Result={handleResult} Type={2} Image={"./scissors.png"} />
            </div>
            <Score Score={[userScore, compScore]} />
        </div>
    )
}
const Score = (props) => {

    return (
        <div id="score-div">
            <h3 id="h3-pop">Computer Score : {props.Score[0]}</h3>
            <h3> {"<|>"} </h3>
            <h3 id="h3-pop">Your Score : {props.Score[1]}</h3>
        </div>)
}
const GameCard = (props) => {
    return (
        <img
            id="game-card-image"
            src={props.Image}
            onClick={() => props.Result(props.Type)}
        ></img >)
}
export default GameBody
