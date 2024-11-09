import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const Global = createGlobalStyle`
:root {
  --app-width: 1200px;
	--app-padding: 40px;

  --background-gray: #f5f5f5;

  --header-height: 96px;
  --footer-height: 197px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Global />
      <App />
    </BrowserRouter>
  </StrictMode>
);
