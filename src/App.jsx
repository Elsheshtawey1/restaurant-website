import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";
// Lazy load main pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
import Layout from "./Layout";

// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
function App() {
  return (
    <Suspense
      fallback={
        <div className="loader-centered">
          <ClipLoader color="#EA6D27" size={60} aria-label="Loading..." />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="/about" element={<About />} />
        <Route path="" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
