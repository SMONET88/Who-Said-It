import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple} from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={shadesOfPurple} >
      <StrictMode>
        <App />
      </StrictMode>
    </ClerkProvider>
  </ThemeProvider>
);
