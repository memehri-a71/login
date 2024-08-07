import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Providers } from "./configs/providers";
import { Login } from "./views/login";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
