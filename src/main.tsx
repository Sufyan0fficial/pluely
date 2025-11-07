import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import Overlay from "./components/Overlay";
import { AppProvider, ThemeProvider } from "./contexts";
import "./global.css";

// Check if we're in Tauri environment
const isTauri = typeof window !== 'undefined' && window.__TAURI__;

async function initializeApp() {
  let windowLabel = "main";
  
  if (isTauri) {
    try {
      const { getCurrentWindow } = await import("@tauri-apps/api/window");
      const currentWindow = getCurrentWindow();
      windowLabel = currentWindow.label;
    } catch (error) {
      console.warn("Failed to get window label:", error);
    }
  }

  // Render different components based on window label
  if (windowLabel === "capture-overlay") {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <Overlay />
      </React.StrictMode>
    );
  } else {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <ThemeProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
}

initializeApp();
