import { Link } from "react-router-dom";
import "../styles/App.css";
import Navbar from "../layout/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">Page Not Found</p>
        <Link to="/" className="notfound-link">
          Back to Home
        </Link>
      </div>
    </>
  );
}
