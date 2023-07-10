import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { StrictMode } from "react";

const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);


root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)
