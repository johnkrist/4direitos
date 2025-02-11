import { Container, Sections } from "./style";
import { Menu } from "../../components/Menu";

export function Home() {
  return (
    <>
      <Menu />
      <Container>
        <Sections>
          <div className="big-div">
            <p>Civil</p>
          </div>
          <div>
            <p>Processo Civil</p>
          </div>
          <div className="big-div">
            <p>Penal</p>
          </div>
        </Sections>
        <Sections>
          <div>
            <p>Processo Penal</p>
          </div>
          <div id="mid-div" className="big-div">
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
        </Sections>
      </Container>
    </>
  );
}
