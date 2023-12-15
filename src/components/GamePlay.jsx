import styled from "styled-components";
import React from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Rules from "./Rules";
import WinnerPage from "./WinnerPage";



function GamePlay() {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [diceNumber, setDiceNumber] = useState(1);
    const [winner, setWinner] = useState(false);
    const [score, setScore] = useState(0);
    
    
    
    const[err, setErr] = useState("");
    const [showRules, setShowRules] = useState(false);
    
   

    function roleDice() {
        if(!selectedNumber) {
            setErr("You have not selected any number")
            return 
        };

        const number = Math.floor(Math.random() * 6 + 1)
        setDiceNumber(prev=> number);
        
        if(selectedNumber === number){
            setScore(prev => prev + number + 25);
        }else{
            setScore(prev => prev - 5);
        }

        setSelectedNumber(undefined);
    }
    
   function restScore(){
    setScore(0)
   }


  function toggleRules(){
    if(showRules === false){
        setShowRules(true)
    }else{
        setShowRules(false)
    }
  }

  useEffect(() => {

    if(score > 10){
      setWinner((prev) => !prev);
    }
    
  }, [score]);

  
   
    return (

        <>
        {winner ? <WinnerPage/>  : <Main >
            <div className="top_section">
            <Score score={score}/>
            <NumberSelector
            setErr={setErr} 
            err={err} 
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice diceNumber={diceNumber} roleDice={roleDice}/>
           <div className="btns">
                <Button onClick={restScore}>Rest Score</Button>
                <Button onClick={toggleRules}> Show Rules</Button>
           </div>
            {showRules ? <Rules/> : ""}
            
        </Main>}
       
        </>
        
    )
    
}


export default GamePlay;


const Main =  styled.main`

    .top_section{
        padding-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }

.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
`;
