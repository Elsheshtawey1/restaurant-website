import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App
