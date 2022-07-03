import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2% 0 5% 0;
  margin: 20px auto 10px auto;
  max-width: 100%;
  text-align: center;
  border: solid 2px white;
  border-radius: 15px;
  box-sizing: border-box;
  
  img {
    max-width: 300px;
    max-height: 350px;
    border-radius: 10px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  button {
    background-color: gray;
    color: white;
    height: 40px;
    border-radius: 10px;
    border: none;
  }
  h4 {
    max-width: 100%;
    width: 350px;
    
    margin: 0 20px;
  }
`;
