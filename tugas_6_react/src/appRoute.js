import React from "react";
import App from"./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak"
import {BrowserRouter,Routes,Route} from "react-router-dom";

const AppRouterr =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/menu-makanan" element={<MenuMakanan/>}/>
        <Route path="/menu-minuman" element={<MenuMinuman/>}/>
        <Route path="/menu-kontak" element={<Kontak/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouterr;
