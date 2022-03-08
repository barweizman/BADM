import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Components/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
