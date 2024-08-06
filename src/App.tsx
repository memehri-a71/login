import "./App.css";
import { Providers } from "./configs/providers";
import { Address } from "./views/address";
import { Name } from "./views/name";
import { Phone } from "./views/phone";

function App() {
  return (
    <Providers>
      <div className="">
        {/* <Phone/> */}
        {/* <Name/> */}
        <Address />
      </div>
    </Providers>
  );
}

export default App;
