import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/index";
import { Navbar } from "./components/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
