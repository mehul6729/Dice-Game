import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({setErr,err, selectedNumber,setSelectedNumber}) =>{
    
    const arrayNumber =[1,2,3,4,5,6];

   const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setErr("");
   }
    

    return(
        <NumberSelectorContainer>
            <p className="err">{err}</p>
           <div className="flex">
           {arrayNumber.map((value,i) => (
                    <Box 
                    isSelected={value === selectedNumber}
                    key={i}
                    onClick={()=>numberSelectorHandler(value)}
                    >
                    {i+1}
                    </Box>
                   
                ))}
           </div>
           <p>SELECT NUMBER</p>
        </NumberSelectorContainer>
    )
}
export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
}

.err{
    color: red;
}

p{
    font-size: 24px;
    font-weight: 700px;
}
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`;
