// import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { CatalogCharacters } from "./pages/CatalogCharacters";
import DetailsCharacter from "./pages/DetailsCharacter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Outlet></Outlet>

        <Routes>
          <Route path="/" Component={CatalogCharacters}></Route>
          <Route path=":id" Component={DetailsCharacter} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
