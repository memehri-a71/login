
import { Providers } from "./configs/providers";
import { Router } from "./components/router/route";
import "./App.css";

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
