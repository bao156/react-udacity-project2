import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginComponent from "./pages/login";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginComponent />} />
        <Route exact path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
