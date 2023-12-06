import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import AddPollComponent from "../components/adding-poll";
import ImageAvatars from "../components/avatar";
import LeaderBoard from "../components/leader-board-table";
import QuestionsBoard from "../components/questions-board";
import { fetchAllUser } from "../store/actions/users";
import { fetchAllQuestions } from "../store/actions/questions";

export const HOME_VALUE = "/dashboard";
export const ADD_PATH = HOME_VALUE + "/add";
export const LEADER_BOARD_PATH = HOME_VALUE + "/leaderboard";
export const QUESTION_PATH = HOME_VALUE + "/questions";
function MainPage() {
  const [value, setValue] = React.useState("/dashboard");
  const [newQuestions, setNewQuestions] = React.useState([]);
  const [doneQuestions, setDoneQuestions] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedInUser);
  const listOfUsers = useSelector((state) => state.users);
  const listOfQuestions = useSelector((state) => state.questions);
  const listOfDoneQuestionIds =
    listOfUsers[loggedUser.id]?.answers &&
    Object.keys(listOfUsers[loggedUser.id].answers);

  const backToHome = () => {
    setValue(HOME_VALUE);
  };

  React.useEffect(() => {
    let isMounted = false;
    function fetchData() {
      if (!loggedUser) {
        navigate("/login");
      } else if (!isMounted) {
        dispatch(fetchAllUser());
        dispatch(fetchAllQuestions());
      }
    }
    fetchData();
    return () => {
      isMounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  React.useEffect(() => {
    let isMounted = false;
    function getQuestions() {
      if (!isMounted && listOfQuestions) {
        setNewQuestions(
          listOfQuestions.filter((question) => {
            return !listOfDoneQuestionIds.includes(question.id);
          })
        );
        setDoneQuestions(
          listOfQuestions.filter((question) => {
            return listOfDoneQuestionIds.includes(question.id);
          })
        );
      }
    }
    getQuestions();
    return () => {
      isMounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfQuestions, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleShowingDetail = (id) => {
    navigate("/questions/" + id);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Home"
              value={HOME_VALUE}
              component={Link}
              to={HOME_VALUE}
              style={{ fontWeight: 700 }}
            />
            <Tab
              label="LeaderBoard"
              value={LEADER_BOARD_PATH}
              to={LEADER_BOARD_PATH}
              style={{ fontWeight: 700 }}
              component={Link}
            />
            <Tab
              label="New"
              to={ADD_PATH}
              value={ADD_PATH}
              style={{ fontWeight: 700 }}
              component={Link}
            />
            <Tab
              style={{ marginLeft: "auto", fontWeight: 700 }}
              label={
                <ImageAvatars
                  name={loggedUser?.name}
                  url={loggedUser.avatarURL}
                />
              }
              value="5"
            />
            <Tab
              style={{ fontWeight: 700 }}
              label="Logout"
              value="6"
              onClick={() => {
                navigate("/login");
              }}
            />
            <Tab style={{ fontWeight: 700 }} value="6" />
          </TabList>
        </Box>
        <TabPanel value={HOME_VALUE} style={{ padding: "60px" }}>
          <>
            {newQuestions && (
              <QuestionsBoard
                titleOfBoard="New Questions"
                listOfQuestions={newQuestions}
                handleShowingDetail={handleShowingDetail}
              />
            )}
            {doneQuestions && (
              <QuestionsBoard
                titleOfBoard="Done"
                listOfQuestions={doneQuestions}
                handleShowingDetail={handleShowingDetail}
              />
            )}
          </>
        </TabPanel>
        <TabPanel value={LEADER_BOARD_PATH}>
          <div>
            <LeaderBoard />
          </div>
        </TabPanel>
        <TabPanel value={ADD_PATH}>
          <AddPollComponent backToHome={backToHome} />
        </TabPanel>
        <TabPanel value="5" />
        <TabPanel value="6" />
      </TabContext>
    </Box>
  );
}

export default MainPage;
