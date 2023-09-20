import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Loans from "./pages/Loans";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loans" element={<Loans />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
