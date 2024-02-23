import React from "react";
import { BrowserRouter } from "react-router-dom";
import DashBord from "./layouts/DashBord";
import Index from "./router_path/Index";

const App = () => {
  return (
    <BrowserRouter>
      <DashBord>
        <Index />
      </DashBord>
    </BrowserRouter>
  );
};

export default App;
