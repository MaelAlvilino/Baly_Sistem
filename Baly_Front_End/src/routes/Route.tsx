import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Agendar from "../agendaFuncionario/agenda";
import CadastroFuncionario from "../cadastroFuncionario/cadastro.funcionario";
import Cadastro from "../cadastroUsuario/cadastro";
import Homepage from "../homepage/homepage";
import Login from "../login/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/cadastroUsuario" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cadastrarFuncionario" element={<CadastroFuncionario />} />
        <Route path="/agenda" element={<Agendar />} />
      </Routes>
    </BrowserRouter>
  );
}
