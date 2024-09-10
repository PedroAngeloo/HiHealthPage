import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Home from "./pages/Home.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <Home/>
      
     
    </div>
  </StrictMode>
);
