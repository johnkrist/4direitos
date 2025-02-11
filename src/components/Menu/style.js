import styled from "styled-components";

export const Menucontainer = styled.nav`
  background-color: black;
  height: 5vh;
  
  ul {
 
    display: flex;
    justify-content: space-evenly;
    color: white;
    list-style-type: none;
    text-decoration: none;
    
  }
  li {
    margin-top: 1vh;
    font-size: 20;
    color: white;
    
  }

  .link-style {
    color: inherit;
    text-decoration: none;
  }
`;
