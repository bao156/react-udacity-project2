import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("Save question", () => {
  it("return successful result", async () => {
    let result = await _saveQuestion({
      optionOneText: "optionOne", // replace with the actual user ID
      optionTwoText: "optionTwo", // replace with the actual question ID
      author: "tylermcginnis", // replace with the actual answer
    });
    expect(result).not.toBeNull();
  });

  it("return failed result when author id null", async () => {
    try {
      await _saveQuestion({
        optionOneText: "optionOne",
        optionTwoText: "optionTwo",
        author: null,
      });
    } catch (e) {
      expect(e).toMatch(
        "Please provide optionOneText, optionTwoText, and author"
      );
    }
  });

  it("return failed result when options are null", async () => {
    try {
      await _saveQuestion({
        author: "tylermcginnis",
      });
    } catch (e) {
      expect(e).toMatch(
        "Please provide optionOneText, optionTwoText, and author"
      );
    }
  });
});

describe("Save question and answer", () => {
  it("return successful result", async () => {
    let result = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionTwo",
    });
    expect(result).not.toBeNull();
  });

  it("return failed result when author id null", async () => {
    try {
      await _saveQuestionAnswer({
        authedUser: null,
        qid: "8xf0y6ziyjabvozdd253nd",
        answer: "optionTwo",
      });
    } catch (e) {
      expect(e).toMatch("Please provide authedUser, qid, and answer");
    }
  });

  it("return failed result when author all parameters are null", async () => {
    try {
      await _saveQuestionAnswer({});
    } catch (e) {
      expect(e).toMatch("Please provide authedUser, qid, and answer");
    }
  });
});
