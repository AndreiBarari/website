import React, { useState, useEffect, useRef } from "react";
import { IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Zoom from "@mui/material/Zoom";

const CopyEmail = (props) => {
  const [state, setState] = useState(false);
  const timeoutIdRef = useRef(null);

  const toggleTooltip = () => {
    setState(!state);
  };

  const closeTooltip = () => {
    setState(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(props.email);
    toggleTooltip();

    // Clear previous timeout
    clearTimeout(timeoutIdRef.current);

    // Close the tooltip
    timeoutIdRef.current = setTimeout(() => {
      closeTooltip();
    }, 1500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, []);

  return (
    <Tooltip
      placement="right"
      title="Email copied"
      PopperProps={{
        disablePortal: true,
      }}
      onClose={toggleTooltip}
      TransitionComponent={Zoom}
      open={state}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      arrow
    >
      <IconButton
        className="emailLink"
        aria-label="copy to clipboard"
        size="small"
      >
        <ContentCopyIcon onClick={handleCopyToClipboard} />
      </IconButton>
    </Tooltip>
  );
};

export default CopyEmail;
