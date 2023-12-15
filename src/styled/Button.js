import styled from "styled-components";

const Button = styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
color: white;
border-radius: 5px;
background-color: #000;
border: none;
font-size: 16px;
transition: all .7s;


&:hover{
    background-color: #dcdcdcff;
    transition: all .7s;
    color: black;
    
}
`;



export default Button