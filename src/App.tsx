import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { RegisterComplete } from "./components/RegisterComplete";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register-conclusion" element={<RegisterComplete />}/>
      </Routes>
  );
}

export default App;
