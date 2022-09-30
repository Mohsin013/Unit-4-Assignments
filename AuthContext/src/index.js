import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./context/AuthContextProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthContextProvider>
);
