import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center; 
  ul{
    display:flex;
    flex-direction: column;
    columns: 2;
    justify-content: center;
    align-items: center;
  }
  
  img {
    max-width: 300px;
    height: 300px;
    margin: 0 auto;
  }
 
`;
