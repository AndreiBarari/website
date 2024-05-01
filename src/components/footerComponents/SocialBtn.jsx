import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";

const SocialBtn = (props) => {
  const ToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  return (
    <ToolTip key={props.id} title={props.name} placement="bottom">
      <IconButton
        href={props.path}
        target="_blank"
        sx={{
          color: "#e0e0e0",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#F7EEDD20",
            color: "#fff",
          },
        }}
        size="large"
      >
        {props.icon}
      </IconButton>
    </ToolTip>
  );
};

export default SocialBtn;
