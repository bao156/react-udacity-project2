import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useSelector } from "react-redux";
import AddPollComponent from "../components/adding-poll";
import ImageAvatars from "../components/avater";
import LeaderBoard from "../components/leader-board-table";
import BasicTable from "../components/table";
import { useNavigate } from "react-router-dom";
function MainPage() {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.loggedInUser);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="1" style={{ fontWeight: 700 }} />
            <Tab label="LeaderBoard" value="2" style={{ fontWeight: 700 }} />
            <Tab label="New" value="3" style={{ fontWeight: 700 }} />
            <Tab
              style={{ marginLeft: "auto", fontWeight: 700 }}
              label={<ImageAvatars name={loggedUser.name} />}
              value="4"
            />
            <Tab
              style={{ fontWeight: 700 }}
              label="Logout"
              value="4"
              onClick={() => {
                navigate("/");
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ padding: "60px" }}>
          <BasicTable></BasicTable>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <LeaderBoard></LeaderBoard>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <AddPollComponent></AddPollComponent>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default MainPage;
