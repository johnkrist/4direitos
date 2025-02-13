import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  margin-left: 4%;
  font-family: "Josefin Slab", serif;
  font-optical-sizing: auto;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #0066cc;
  }
`;

export const Sectionsobre = styled.section`
  display: flex;

  p {
    font-family: "Josefin Slab", serif;
    font-optical-sizing: auto;
    position: relative;
    font-size: 26px;
    margin: 20vh auto;
    color: white;
    margin: 7%;
  }
`;
export const ImgContainer = styled.div`
  position: absolute;
  width: 75vh;
  height: 75vh;
  margin-left: 20vh;
  background-image: url("../src/assets/caricatureimg.webp");
  opacity: 0.3;
  border: 10px solid rgba(0, 0, 0, 0.6);
`;
