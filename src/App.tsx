import "./App.css";
import { Providers } from "./configs/providers";
import { Login } from "./views/login";

function App() {
  return (
    <Providers>
      <div className="">
        <Login />
      </div>
    </Providers>
  );
}

export default App;
