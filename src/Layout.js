import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from './Route/routers';

export const Layout = ({children}) => {
  // let kondisi = true;
  return (
    <div>
     <BrowserRouter>
       <Routers />
     </BrowserRouter>
    </div>
  );
}
