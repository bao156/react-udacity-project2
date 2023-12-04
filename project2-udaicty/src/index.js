import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// file: store.ts
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import reducer from "./store/reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(applyMiddleware(...middlewares)))
// );

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
