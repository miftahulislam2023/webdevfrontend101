import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import TeaSet from "./Pure Components/TeaSet";
import "./index.css";
import Button from "./Chapter-2: Interactivity/2.1/button";

createRoot(document.getElementById("root")).render(<Button />);
