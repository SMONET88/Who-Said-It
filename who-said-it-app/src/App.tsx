import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/main" element={<MainPage />} />
      </Routes>

     </BrowserRouter>
    </>
  );
}

export default App;
