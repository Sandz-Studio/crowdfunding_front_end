import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar.jsx";
import './styles/global.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default App;