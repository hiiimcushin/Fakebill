import { Outlet } from "react-router-dom";
import "./index.css";
import Menu from "./components/Menu";
function App() {
  return (
    <div className="flex justify-start items-start bg-[#283046] font-thin">
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
