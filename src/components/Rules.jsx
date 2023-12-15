import React from "react";
import styled from "styled-components";

const Rules = ()=>{
    return(
        <RulesBox>
            <div className="rules_text">
            <h2>How to play dice game</h2>
            <p>
                1) Select any number <br />
                2) Click on dice image <br />
                3) After click on  dice  if selected number is equal to dice number you will get same point  as dice +25<br />
                4) if you get wrong guess then  5 point will be dedcuted <br />
                
            </p>
            </div>
            
            
        </RulesBox>
    )
}


export default Rules;

const RulesBox = styled.div`
justify-content: center;
display: flex;
.rules_text{
    display: inline-flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FBF1F1;
margin: 30px auto;
}
h2{
    color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

p{
    
    color: #000;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`;