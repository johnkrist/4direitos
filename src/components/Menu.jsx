import { Link } from "react-router-dom";
import { Menucontainer } from "./style";

export function Menu() {
  return (
    <Menucontainer>
      <ul>
        <li>
          <Link className="link-style" to="/">Home</Link>
        </li>
        <li>
          <Link className="link-style" to="/sobre">Sobre</Link>
        </li>
      </ul>
    </Menucontainer>
  );
}
