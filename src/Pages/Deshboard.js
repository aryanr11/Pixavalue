import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import MasksIcon from "@mui/icons-material/Masks";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PasswordIcon from "@mui/icons-material/Password";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar } from "@mui/material";
import First from "./deshboardpage/First";
import Second from "./deshboardpage/Second";

let base_url = [
  {
    name: "Dashboard",
    icone: CollectionsBookmarkIcon,
  },
  {
    name: "Profile",
    icone: ContactPageIcon,
  },
  { name: "Image", icone: FastfoodIcon },
  {
    name: "Upload",
    icone: ReceiptIcon,
  },
  {
    name: "",
    icone: LocalHospitalIcon,
  },
  { name: "", icone: HotelIcon },
  {
    name: "",
    icone: MasksIcon,
  },
];

function Deshboard(props) {
  const drawerWidth = 250;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const changeData = (index) => {
    setSelectedIndex(index);
    setMobileOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedIndex]);

  const drawer = (
    <div>
      <List>
        {base_url.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              sx={{
                minHeight: "48px",
                backgroundColor:
                  selectedIndex === index ? "#0000000A" : "transparent",
                borderRight:
                  selectedIndex === index ? "3px solid #002884" : "none",
                transition: "all 0.1s ease",
              }}
              onClick={() => changeData(index)}
            >
              <ListItemIcon
                sx={{ color: selectedIndex === index ? "#1565C0" : "black" }}
              >
                <text.icone />
              </ListItemIcon>
              <ListItemText
                sx={{ color: selectedIndex === index ? "#1565C0" : "black" }}
                primary={text.name}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    windows !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Toolbar
          sx={{
            position: "fixed",
            background: "white",
            width: "100%",
            display: { sm: "none" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
            zIndex: 1,
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                marginTop: "56px",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                marginTop: "-34px",
                maxHeight: `calc(100vh - 78.5px)`,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Typography paragraph sx={{ marginTop: { sm: "0px", xs: "56px" } }}>
            <Box sx={{ display: selectedIndex === 0 ? "block" : "none" }}>
              <First />
            </Box>
            <Box sx={{ display: selectedIndex === 1 ? "block" : "none" }}>
              <Second />
            </Box>
            <Box sx={{ display: selectedIndex === 2 ? "block" : "none" }}>
              Demo3
            </Box>
            <Box sx={{ display: selectedIndex === 3 ? "block" : "none" }}>
              Demo4
            </Box>
            <Box sx={{ display: selectedIndex === 4 ? "block" : "none" }}>
              Demo5
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Deshboard;
