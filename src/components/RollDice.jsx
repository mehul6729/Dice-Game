import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({diceNumber,roleDice })=>{
    
    return(
        <DiceContainer>
            <div className="dice">
                <img src={`images/dice_${diceNumber}.png`} alt="dwd" 
                onClick={roleDice}
                />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice;

const DiceContainer = styled.div`
display: flex;
align-items:center;
flex-direction: column;
margin-top: 48px;
.dice{
    cursor: pointer;
}
p{
    font-size: 24px;
}
`;
