import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginComponent from "./pages/login";
import MainPage, { HOME_VALUE } from "./pages/main";
import AddPollComponent from "./components/adding-poll";
import LeaderBoard from "./components/leader-board-table";
import QuestionDetails from "./components/question-detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginComponent />} />
        <Route exact path="/login" element={<LoginComponent />} />
        <Route path={HOME_VALUE} element={<MainPage />}>
          <Route path="add" element={<AddPollComponent />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
        </Route>
        <Route path="questions/:question_id" element={<QuestionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
