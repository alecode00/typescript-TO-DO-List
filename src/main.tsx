import React from "react";
import ReactDOM from "react-dom/client";
import { ToDoApp } from "./components/ToDoApp";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);
