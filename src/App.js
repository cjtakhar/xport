import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/xport" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
