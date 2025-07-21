import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
