import { Box } from "@mui/material";
import { ListItem } from "@mui/material";

import Container from "@mui/material/Container";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import LoginBox from "../components/Loginbox";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <Box>
      <Container
        maxWidth={"lg"}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 1,
          padding: "25px 0px",
        }}
      >
        <Box sx={{ display: "flex", padding: "0px" }}>
          <ListItem
            variant="h6"
            sx={{ color: "#D9D9D9", fontSize: "26px", padding: "0px" }}
          >
            PIXAVALUT
          </ListItem>
          <Box sx={{ display: "flex", alignItem: "center" }}>
            <ListItem>
              <Search>
                <SearchIconWrapper sx={{ color: "white" }}>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    color: "white",
                    fontWeight: "100",
                    position: "relative",
                  }}
                />
              </Search>
            </ListItem>
            <ListItem variant="h6" sx={{ color: "#FFFFFF" }}>
              <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                Home
              </Link>
            </ListItem>
            <ListItem variant="h6" sx={{ color: "#FFFFFF" }}>
              <Link
                to="/explore"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                Explore
              </Link>
            </ListItem>
            <ListItem>
              {/* <SignupBox /> */}
              <LoginBox />
            </ListItem>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
