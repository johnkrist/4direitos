import styled from "styled-components";

export const Menucontainer = styled.nav`
  background: linear-gradient(#003366, #1c1c1c);
  display: flex;
  justify-content: space-between;
  height: 8vh;

  ul {
    display: flex;
    justify-content: space-between;
    width: 35vh;
    list-style-type: none;
    text-decoration: none;
    margin-right: 5vh;
  }
  li {
    font-size: 20;
    color: bisque;
    transition: 0.4s;
    font-weight:   lighter;

    &:hover {
     /// color: #0066cc;
     color: #1c1c1c;
      text-decoration: underline;
    }
  }

  .link-style {
    color: inherit;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  margin-left: 5vh;
  span {
    font-size: 3vh;
    font-family: "Rancho", serif;
    font-weight: 400;
    font-style: normal;
  }
`;
