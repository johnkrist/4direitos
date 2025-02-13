import { Container, Sections } from "./style";
import { Menu } from "../../components/Menu";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Menu />
      <Container>
        <Sections>
          <section>
            <div className="big-div">
              <p>Civil</p>
            </div>
            <text>psam saepe gfgasfgagiuouiiçjkçjkljklut debitis impefghjfghjfghjdit est voluptate ptem perspiciatis. Non hjghjghjghjfghjfgjhgfhsunt esse qui animi explicabmmo...<Link className="about-more">Saiba mais</Link></text>
          </section>
          <section>
            <text>psam saepe gfgasfgagiuouiiçjkçjkljklut debitis impefghjfghjfghjdit est voluptate ptem perspiciatis. Non hjghjghjghjfghjfgjhgfhsunt esse qui animi explicabmmo...<Link className="about-more">Saiba mais</Link></text>
            <div className="litle-div">
              <p>Processo Civil</p>
            </div>
          </section>
          <section>
            <div className="big-div">
              <p>Penal</p>
            </div>
            <text>psam saepe gfgasfgagiuouiiçjkçjkljklut debitis impefghjfghjfghjdit est voluptate ptem perspiciatis. Non hjghjghjghjfghjfgjhgfhsunt esse qui animi explicabmmo...<Link className="about-more" >Saiba mais</Link> </text>
          </section>
          <section>
            <text>psam saepe gfgasfgagiuouiiçjkçjkljklut debitis impefghjfghjfghjdit est voluptate ptem perspiciatis. Non hjghjghjghjfghjfgjhgfhsunt esse qui animi explicabmmob...<Link className="about-more">Saiba mais</Link></text>
            <div className="litle-div">
              <p>Processo Penal</p>
            </div>
          </section>
        </Sections>
      </Container>
    </>
  );
}
