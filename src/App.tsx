// import { useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import { Undo2 } from "lucide-react";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="pl-2">
          <p className="text-2xl">Oi amigos, bem vindo ao Vaultis {":)"}</p>
          <Link className="text-blue-800" to={"/"}>
            Voltar rota <Undo2 size={"25px"} />
          </Link>
          <Link className="text-red-800" to={"rota1"}>
            Rota1
          </Link>
        </div>

        <Outlet />

        <Routes>
          <Route path="rota1" element={<h1>Você mudou a rota, parabéns</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
