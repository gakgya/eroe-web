import "./App.css";
import Topbar from "./eroe/Topbar";
import { Route, Switch } from "react-router";
import Sidemenu from "./eroe/Sidemenu";
import Mainpage from "./eroe/Mainpage";
function App() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Topbar />
      <div style={{ display: "flex", height: "90%" }}>
        <Sidemenu />
        <div></div>
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
