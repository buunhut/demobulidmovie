import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/usertemplate/HomePage";
import DangNhap from "./Components/usertemplate/DangNhap";
import QuanLy from "./Components/admintemplate/QuanLy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quanly" element={<QuanLy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
