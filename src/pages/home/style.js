import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center; 
  img {
    max-width: 50vw;
    height: 70vh;
    margin: 0 auto;
    border-radius:10px;
  }
  div{
    width:30%;
    gap:10px;
  }
`;
