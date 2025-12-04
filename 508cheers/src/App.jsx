import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Directors from "./pages/Directors";
import GetInvolved from "./pages/GetInvolved";
import Impact from "./pages/Impact";
import Partners from "./pages/Partners";
import Programs from "./pages/Programs";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/directors" element={<Directors />} />

        <Route path="/get-involved" element={<GetInvolved />} />

        <Route path="/impact" element={<Impact />} />

        <Route path="/partners" element={<Partners />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
