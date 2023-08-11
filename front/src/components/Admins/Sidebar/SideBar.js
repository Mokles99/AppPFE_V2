import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
//import ListSubheader from "@material-ui/core/ListSubheader";

// import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
//import SendIcon from "@material-ui/icons/Send";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
//import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
//import { red } from "@material-ui/core/colors";
// import PersonIcon from "@material-ui/icons/Person";
// import GroupIcon from "@material-ui/icons/Group";
// import WorkIcon from "@material-ui/icons/Work";
// import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
// import EventIcon from "@material-ui/icons/Event";
// import CakeIcon from "@material-ui/icons/Cake";
// import SettingsIcon from "@material-ui/icons/Settings";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     //width: "100%",
//     maxWidth: 260,
//     maxHeight: "100vh",
//     // backgroundColor: "#4096e9",
//     // fontSize: "34px",
//     //boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
//     //backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
//   item: {
//     // backgroundColor: "red",
//   },
// }));
const SideBar = () => {
  // const classes = useStyles();
  const [Staff, setOpenStaff] = React.useState(false);
  const [Offres, setOpenOffres] = React.useState(false);
  const [Conge, setOpenConge] = React.useState(false);

  const handleStaffClick = () => {
    setOpenStaff(!Staff);
  };
  const handleOffresClick = () => {
    setOpenOffres(!Offres);
  };
  const handleCongeClick = () => {
    setOpenConge(!Conge);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  
  // box-shadow: 0 0px 14px rgb(0 0 0 / 14%), 0 0px 1px rgb(0 0 0 / 2%);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "90vh",
        width: "17%",
        marginTop:'50px',
        // boxShadow: "0 0px 1px rgb(0 0 0 / 2%)",
        // backgroundColor: "red",
        boxShadow: "3px 3px 3px rgba(5,5,5,0.7)",
        // fontSize: "34px",
      }}
    >
      <List>
      <ListItem>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem><ListItem>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem><ListItem>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem><ListItem>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem><ListItem>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem><ListItem>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem><ListItem><ListItemIcon>
          <AccessibilityIcon/>
        </ListItemIcon>
          <ListItemText primary='gfhgfhfgh' />
        </ListItem>
      </List>
      {/* <List component="nav" 
      // className={classes.root}
      >
        <ListItem
          button
          // className={classes.item}
          
          
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Tableau de bord" />
        </ListItem> */}

        {/* <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => {
            handleStaffClick();
            handleListItemClick(event, 1);
          }}
          // onClick={handleStaffClick}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Staff" />
          {Staff ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={Staff} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 2}
              onClick={(event) => {
                setSelection("Users");
                handleListItemClick(event, 2);
              }}
              // onClick={() => setSelection("Users")}
            >
              <PersonIcon>
                <StarBorder />
              </PersonIcon>
              <ListItemText primary="Employees" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={Staff} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 3}
              onClick={(event) => {
                setSelection("Users");
                handleListItemClick(event, 3);
              }}
              // onClick={() => setSelection("Users")}
            >
              <PersonIcon>
                <StarBorder />
              </PersonIcon>
              <ListItemText primary="Stagaires" />
            </ListItem>
          </List>
        </Collapse> */}
        {/* <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => {
            setSelection("Users");
            handleListItemClick(event, 2);
          }}
          // onClick={() => setSelection("Projects")}
        >
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Employées" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => {
            setSelection("Projects");
            handleListItemClick(event, 4);
          }}
          // onClick={() => setSelection("Projects")}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Projets" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => {
            setSelection("Tasks");
            handleListItemClick(event, 5);
          }}
          // onClick={() => setSelection("Tasks")}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Tâches" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => {
            setSelection("Clients");
            handleListItemClick(event, 6);
          }}
          // onClick={() => setSelection("Clients")}
        >
          <ListItemIcon>
            <DirectionsWalkIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => {
            setSelection("Events");
            handleListItemClick(event, 7);
          }}
          // onClick={() => setSelection("Events")}
        >
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Évènements" />
        </ListItem> */}

        {/* <ListItem
          button
          selected={selectedIndex === 8}
          onClick={(event) => {
            handleOffresClick();
            handleListItemClick(event, 8);
          }}
          // onClick={handleOffresClick}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Offres" />
          {Offres ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={Offres} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 9}
              onClick={(event) => {
                setSelection("Offres");
                handleListItemClick(event, 9);
              }}
              // onClick={() => setSelection("Offres")}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Aumbauche" />
            </ListItem>
          </List>
        </Collapse>
        <Collapse in={Offres} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 10}
              onClick={(event) => {
                setSelection("Offres");
                handleListItemClick(event, 10);
              }}
              // onClick={() => setSelection("Offres")}
            >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Stage" />
            </ListItem>
          </List>
        </Collapse> */}

        {/* <ListItem
          button
          selected={selectedIndex === 10}
          onClick={(event) => {
            setSelection("Offres");
            handleListItemClick(event, 10);
          }}
          // onClick={() => setSelection("Projects")}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Offres" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 11}
          onClick={(event) => {
            setSelection("Conges");
            handleListItemClick(event, 11);
          }}
          // onClick={() => setSelection("Conges")}
        >
          <ListItemIcon>
            <CakeIcon />
          </ListItemIcon>
          <ListItemText primary="Congés" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 12}
          onClick={(event) => {
            setSelection("Speakers");
            handleListItemClick(event, 12);
          }}
          // onClick={() => setSelection("Speakers")}
        >
          <ListItemIcon>
            <CakeIcon />
          </ListItemIcon>
          <ListItemText primary="Porte-paroles" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 13}
          onClick={(event) => {
            setSelection("Sponsors");
            handleListItemClick(event, 13);
          }}
          // onClick={() => setSelection("Sponsors")}
        >
          <ListItemIcon>
            <CakeIcon />
          </ListItemIcon>
          <ListItemText primary="Sponsors" />
        </ListItem>
       */}
      {/* </List> */}
      {/* <List>
        <ListItem
          button
          style={{
            // position: "absolute",
            // bottom: 0,
            // width: "100%",
            marginBottom: "1rem",
            maxWidth: 260,
            // backgroundColor: "blue",
          }}
          selected={selectedIndex === 14}
          onClick={(event) => {
            setSelection("Settings");
            handleListItemClick(event, 14);
          }}
          // onClick={() => setSelection("Settings")}
          className="absolute bottom-0 w-full my-8"
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Paramètres" />
        </ListItem>
      </List> */}
    </div>
  );
};

export default SideBar;