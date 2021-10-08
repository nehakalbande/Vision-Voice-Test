import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { AppProvider } from "./reducer/context";
const App = () => (
  <AppProvider>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </AppProvider>
);

export default App;
