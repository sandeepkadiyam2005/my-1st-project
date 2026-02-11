import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

const PortalLayout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PortalLayout;
