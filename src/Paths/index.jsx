import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";

export function Paths() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/sobre" Component={Sobre} />
    </Routes>
  );
}
