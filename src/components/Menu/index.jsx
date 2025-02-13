import { Link } from "react-router-dom";
import { Menucontainer } from "./style";
import { Scale } from 'lucide-react';
import { Logo } from "./style";

export function Menu() {
  return (
    <Menucontainer>
      
      <Logo>
          <Scale size={24} />
          <span>4Direitos</span>
        </Logo>
      
      <ul>
        <li>
          <Link className="link-style" to="/">Pagina Inicial</Link>
        </li>
        <li>
          <Link className="link-style" to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link className="link-style" to="/contato">Contato</Link>
        </li>
      </ul>
    </Menucontainer>
  );
}
