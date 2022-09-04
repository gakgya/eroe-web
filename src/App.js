import "./App.css";
import Topbar from "./eroe/Topbar";
import { Route, Switch } from "react-router-dom";
import Sidemenu from "./eroe/Sidemenu";
import Mainpage from "./eroe/Mainpage";
function App() {
  return (
    <div>
      <Topbar />
      <div style={{ display: "inline-flex" }}>
        <Sidemenu />
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
