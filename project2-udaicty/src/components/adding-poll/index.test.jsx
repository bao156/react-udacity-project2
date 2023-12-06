import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loggedInUser from "../../store/reducers/loggedInUser";
import users from "../../store/reducers/users";
import questions from "../../store/reducers/questions";
import { BrowserRouter } from "react-router-dom";
import AddPollComponent from ".";

const store = configureStore({
  reducer: {
    loggedInUser: loggedInUser,
    users: users,
    questions: questions,
  },
  preloadedState: {
    loggedInUser: {
      payload: {
        id: "sarahedo",
        password: "password123",
        name: "Sarah Edo",
        avatarURL:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        answers: {
          "8xf0y6ziyjabvozdd253nd": "optionOne",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
          am8ehyc8byjqgar0jgpub9: "optionTwo",
          loxhs1bqm25b708cmbf3g: "optionTwo",
        },
        questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      },
    },
    users: {
      users: {
        sarahedo: {
          id: "sarahedo",
          password: "password123",
          name: "Sarah Edo",
          avatarURL:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          answers: {
            "8xf0y6ziyjabvozdd253nd": "optionOne",
            "6ni6ok3ym7mf1p33lnez": "optionOne",
            am8ehyc8byjqgar0jgpub9: "optionTwo",
            loxhs1bqm25b708cmbf3g: "optionTwo",
          },
          questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
        },
      },
    },
    questions: {
      questions: [
        {
          id: "8xf0y6ziyjabvozdd253nd",
          author: "sarahedo",
          timestamp: 1467166872634,
          optionOne: {
            votes: ["sarahedo"],
            text: "Build our new application with Javascript",
          },
          optionTwo: {
            votes: [],
            text: "Build our new application with Typescript",
          },
        },
        {
          id: "am8ehyc8byjqgar0jgpub9",
          author: "sarahedo",
          timestamp: 1488579767190,
          optionOne: {
            votes: [],
            text: "conduct a release retrospective 1 week after a release",
          },
          optionTwo: {
            votes: ["sarahedo"],
            text: "conduct release retrospectives quarterly",
          },
        },
      ],
    },
  },
});

describe("Adding poll component", () => {
  it("matches the snapshot when rendering", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPollComponent />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
  it("will display a success message if all fields are submitted", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddPollComponent />
        </BrowserRouter>
      </Provider>
    );

    var option1Input = component.getByTestId("option1-input");
    fireEvent.change(option1Input, { target: { value: "option 1" } });
    var option2Input = component.getByTestId("option2-input");
    fireEvent.change(option2Input, { target: { value: "option 2" } });
    var submitButton = component.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(component.getByTestId("option1-input")).toBeInTheDocument();
  });
});
