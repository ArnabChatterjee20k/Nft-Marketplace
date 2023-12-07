import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="sepolia" clientId="5cf7b4e4139b0611d90bb58d65015ed7">
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
