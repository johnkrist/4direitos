import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import Contact from "../pages/Contact/Contact";

export function Paths() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/sobre" Component={Sobre} />
      <Route path="/contato" Component={Contact} />
    </Routes>
  );
}
