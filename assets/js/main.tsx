import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../css/index.css";

const rootElement: HTMLElement | null = document.getElementById("root");
if (!rootElement) throw new Error("can't found '#root' element");
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
