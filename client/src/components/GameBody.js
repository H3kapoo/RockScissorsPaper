import React, { useState, useRef } from 'react'
import './GameBody.css'

//Logic should be carried here//

const GameBody = () => {

    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    return (
        <div id='game-div'>
            <div id="choice-picker-div">
                <GameCard Type={0} Image={"./rock.png"} />
                <GameCard Type={1} Image={"./paper.png"} />
                <GameCard Type={2} Image={"./scissors.png"} />
            </div>
            <Score Score={[userScore, compScore]} />
        </div>
    )
}
const Score = (props) => {

    let compRef = useRef()
    let userRef = useRef()

    return (
        <div id="score-div">
            <h3 ref={compRef} id="h3-pop">Computer Score : {props.Score[0]}</h3>
            <h3> {"<|>"} </h3>
            <h3 ref={userRef} id="h3-pop">Your Score : {props.Score[1]}</h3>
        </div>)
}
const GameCard = (props) => {
    const handleCardClick = () => console.log(props.Type)
    return (
        <img
            id="game-card-image"
            src={props.Image}
            onClick={() => handleCardClick()}
        ></img >)
}
export default GameBody
