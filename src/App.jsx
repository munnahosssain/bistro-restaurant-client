import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  const location = useLocation();
  const hideNavbarFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <>
      {hideNavbarFooter || <Header />}
      <Outlet />
      {hideNavbarFooter || <Footer />}
    </>
  );
}

export default App;
