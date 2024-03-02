import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar.jsx";
import FooterBar from "./components/Footer/FooterBar.jsx";
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