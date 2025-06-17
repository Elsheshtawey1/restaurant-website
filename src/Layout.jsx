import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

// Layout component wraps all pages with Navbar and Footer
const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* Renders the matched child route */}
    <Footer />
  </>
);

export default Layout;
