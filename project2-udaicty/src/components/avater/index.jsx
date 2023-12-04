import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const ImageAvatars = ({ name }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" {...stringAvatar(name)} />
      <Typography variant="overline">{name}</Typography>
    </Stack>
  );
};
ImageAvatars.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default ImageAvatars;
