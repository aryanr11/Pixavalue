import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Button, Typography } from "@mui/material";

const ImageDownload = (props) => {
  const item = props.Data;
  const handleButtonClick = (Data) => {
    const anchor = document.createElement("a");
    anchor.href = Data.img;
    anchor.download = "Img_Download";
    anchor.click();
  };
  return (
    <Box
      width={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <ImageList variant="masonry" cols={2} gap={10}>
        <Box>
          <ImageListItem>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        </Box>
        <Box sx={{ height: "100%" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              width: "55%",
              fontSize: "16px",
              color: "black",
              fontWeight: "bolder",
            }}
          >
            Name : ABC
            <br />
            Type : ABC
            <br />
            Upload By : ABC
            <br />
          </Typography>
          <Box
            sx={{}}
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={2}
          >
            <Button className="set-b1">VIEW PROFILE</Button>
            <Button className="set-b2" onClick={() => handleButtonClick(item)}>
              DOWNLOAD
            </Button>
          </Box>
        </Box>
      </ImageList>
    </Box>
  );
};

export default ImageDownload;
