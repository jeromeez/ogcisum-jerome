import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import EditSample from "./pages/EditSample";
import CreateSample from "./pages/CreateSample";
import { toneObject, toneTransport, tonePart } from "./data/instruments.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/createsample" element={<CreateSample />} />
        <Route
          path="/editsample/:id"
          element={
            <EditSample
              toneObject={toneObject}
              toneTransport={toneTransport}
              tonePart={tonePart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
