import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import DownloadBox from "../components/Downloadbox";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Image = (props) => {
  const itemData = props.Data;

  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={20}>
        {itemData.map((item) => (
          <Box
            sx={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <ImageListItem key={item.img} className="show-option">
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <Box
                className="overlay"
                sx={{ display: "flex" }}
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
                spacing={2}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    width: "75%",
                    fontSize: "16px",
                    fontWeight: "bolder",
                    margin: "10px 0px 10px 15px",
                    padding: "6px 8px",
                  }}
                >
                  <Link to="/profile" className="txt">
                    @demo123
                  </Link>
                </Typography>
                <DownloadBox Data={item.img} />
              </Box>
            </ImageListItem>
          </Box>
        ))}
      </ImageList>
    </Box>
  );
};

export default Image;
