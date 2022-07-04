import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  height: 40px;
  margin-top: 10px;
  
  button{
    background-color:black;
    color:white;
    border: none;
    border-radius:10px; 
    min-width:40px;
    width:20%;
    max-width:100px;
  }
  button:hover{
    background-color: gray;
    color: red;

  }
`;
