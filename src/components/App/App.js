import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
