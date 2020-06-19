import React, { useState, useEffect } from 'react'
import { generateChoice } from '../utils/utils.js'
import './GameBody.css'

//Logic should be carried here//

const GameBody = () => {

    //0 rock 1 paper 2 scissors
    let possibleChoices = [0, 1, 2]

    const [userScore, setUserScore] = useState(0);
    const [compScore, setCompScore] = useState(0);
    const [tries, setTries] = useState(0);
    const [flag, setFlag] = useState("|");

    const [clickToggle, setClickToggle] = useState(false);


    const handleResult = (userChoice) => {
        let compChoice = generateChoice(possibleChoices)

        switch (userChoice) {
            case 0:
                if (compChoice === 0) setFlag("TIE")
                if (compChoice === 1) setFlag("YOU LOSE")
                if (compChoice === 2) setFlag("YOU WIN")
                break
            case 1:
                if (compChoice === 0) setFlag("YOU WIN")
                if (compChoice === 1) setFlag("TIE")
                if (compChoice === 2) setFlag("YOU LOSE")
                break
            case 2:
                if (compChoice === 0) setFlag("YOU LOSE")
                if (compChoice === 1) setFlag("YOU WIN")
                if (compChoice === 2) setFlag("TIE")
                break
        }
        setClickToggle(!clickToggle);
        setTries(tries + 1);

    }

    //Rerender status on clickToggle change hook
    useEffect(() => {
        if (flag === "YOU WIN") setUserScore(userScore + 1)
        if (flag === "YOU LOSE") setCompScore(compScore + 1)

    }, [clickToggle])


    return (
        <div id='game-div'>
            <div id="choice-picker-div">
                <GameCard Result={handleResult} Type={0} Image={"./rock.png"} />
                <GameCard Result={handleResult} Type={1} Image={"./paper.png"} />
                <GameCard Result={handleResult} Type={2} Image={"./scissors.png"} />
            </div>
            <ScoreHistory History={{ history }} />
        </div>
    )
}
const ScoreHistory = (props) => {

    const { userScore, compScore, flag } = props.History

    const histor = new Array(tries).fill(0).map(el => {
        return (
            <div id="score-div">
                <h3 >Computer Score : {compScore}</h3>
                <h3> {"<" + flag + ">"} </h3>
                <h3>Your Score : {userScore}</h3>
            </div>
        )
    })

    return histor

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
