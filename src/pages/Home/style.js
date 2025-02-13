import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10%;
  display: flex;
  width: 100vm;
  height: 100vm;
`;
export const Sections = styled.section`
  display: flex;

  flex-direction: column;

  section {
    display: flex;
  }
  div {
    border: 10px solid rgba(4, 7, 24, 0.6);
    width: 48vh;
    height: 28vh;
    padding: 2vh;
    margin: 5vh 10vh 10vh 5vh;
    transition: 0.5s;

    p {
      transition: 0.5s;
    }
    cursor: pointer;
    &:hover {
      p {
        font-size: 40px;
      }
    }
  }
  .litle-div {
    background-image: url("../src/assets/justica2.jpg");
    background-size: 135%;
  }
  .big-div {
    background-image: url("../src/assets/livrosimg.png");
    border: 10px solid rgba(4, 7, 24, 0.56);
  }

  #mid-div {
    background-size: 100%;
    background-image: url("../src/assets/justica.jpg");
  }
  p {
    margin-top: 10vh;
    text-align: center;
    font-size: 30px;
    text-shadow: 0.1em 0.1em 0.2em black;
  }
  text {
    margin-top: 6%;
    height: 40vh;
    width: 80vh;
    font-size: 18px;
    font-family:'Courier New', Courier, monospace;
    
    .about-more{
      color:  #0066cc;
      transition: 0.4s;
      &:hover{
        color:  rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
