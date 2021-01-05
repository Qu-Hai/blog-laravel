import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
const StyledIconButton = ({
  children,
  onClick,
  title,
  btnClassName,
  titleClassName,
  badgeContent,
}) => {
  return (
    <Tooltip title={title} className={titleClassName} placement="bottom">
      <IconButton onClick={onClick} className={btnClassName}>
        <Badge badgeContent={badgeContent} color="secondary">
          {children}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export default StyledIconButton;
