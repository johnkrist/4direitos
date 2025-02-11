import styled from "styled-components";

export const Container = styled.div`
  margin-left: 25vh;

  width: 100vm;
  height: 100vm;
`;
export const Sections = styled.section`
  margin: 0 auto;
  display: flex;
  gap: 3vh;

  div {
    background-image: url("../src/assets/livrosimg.png");
    border: 2px solid black;
    width: 48vh;
    height: 28vh;
    padding: 2vh;
    margin-top: 3vh;
  }
  .big-div {
    border: 2px solid black;
    width: 48vh;
    height: 48vh;
    padding: 2vh;
  }

  #mid-div {
  }
  p {
    margin-top: 10vh;
    text-align: center;
    font-size: 30px;
    text-shadow: 0.1em 0.1em 0.2em black
  }
`;
