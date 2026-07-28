// import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { CatalogCharacters } from "./pages/CatalogCharacters";
function App() {
  return (
    <>
      <BrowserRouter>
        <Outlet></Outlet>

        <Routes>
          <Route path="/" Component={CatalogCharacters}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
