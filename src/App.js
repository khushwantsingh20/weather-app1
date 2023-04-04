import "./App.css";

import { BrowserRouter } from "react-router-dom";
import RoutesComp from "./routes/RoutesComp";
function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesComp />
      </BrowserRouter>
    </>
  );
}

export default App;
