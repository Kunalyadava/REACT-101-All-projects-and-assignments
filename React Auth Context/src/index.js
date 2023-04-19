import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import AuthContext from "./Context/AuthContextProvider";
import App from "./App";
import AuthContextProvider from "./Context/AuthContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
