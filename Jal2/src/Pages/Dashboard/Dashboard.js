import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Toolbar,
  CssBaseline,
  AppBar,
  Typography,
  IconButton,
} from "@mui/material";
import { useHeader } from "../../Context/HeaderContext";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import {
  sidebarMenuUser,
  sidebarMenuAdmin,
  sidebarValueAdmin,
  sidebarValueUser,
} from "../../formData";
import { SessionContext } from "../../Context/SessionContext";

const drawerWidth = 240;

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "0px" }}>{children}</Box>}
    </div>
  );
};

const Dashboard = () => {
  const { addTitle } = useHeader();
  const [value, setValue] = useState(0);
  const [sideBarList, setSideBarList] = useState({
    labelList: [],
    valueList: [],
  });
  const { title } = useHeader();
  const { logout } = useContext(SessionContext);

  const handleChange = (index) => {
    setValue(index);
  };

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role === "user") {
      setSideBarList({
        labelList: sidebarMenuUser,
        valueList: sidebarValueUser,
      });
      addTitle("User Dashboard");
    } else {
      setSideBarList({
        labelList: sidebarMenuAdmin,
        valueList: sidebarValueAdmin,
      });
    }
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(to right, #1e3c72, #2a5298)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
          <div>
          <IconButton href="/">
            <HomeIcon style={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <LogoutIcon style={{ color: "white" }} />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {sideBarList.labelList?.map((item) => (
              <ListItem
                button
                onClick={() => handleChange(item.index)}
                key={item.index}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#dcdcdc", p: 3, minHeight: "100vh" }}
      >
        <Toolbar />
        {/* <Typography variant="h5" style={{ padding: "0px 0px 8px 0px", fontWeight: "900" }}>
          Welcome Back!
        </Typography> */}
        {sideBarList.valueList.map((item) => (
          <CustomTabPanel value={value} index={item.id} key={item.id}>
            {item.component}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
