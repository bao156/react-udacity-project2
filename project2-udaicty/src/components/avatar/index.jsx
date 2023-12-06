import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ImageAvatars = ({ name, url }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={url} />
      <Typography variant="overline">{name}</Typography>
    </Stack>
  );
};

export default ImageAvatars;
