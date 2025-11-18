import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import ListPage from "./components/ListPage";
import {
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";

// look into LocalStorage at some point
// // handle light and dark mode

function App() {
  
 

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </BrowserRouter>
      </SignedIn>
    </>
   
  );
}

export default App;
