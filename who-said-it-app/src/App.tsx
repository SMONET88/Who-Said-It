import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import ListPage from "./components/ListPage";

// look into LocalStorage at some point

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/main" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
      </Routes>

     </BrowserRouter>
    </>
  );
}

export default App;
