import { Routes, Route } from "react-router-dom";
import { Login, Signup } from "./pages/index";
import { Navbar } from "./components/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
