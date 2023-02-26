import React from "react";
import ClickAwayListener from "./ClickAwayListener";

const Menu = ({ open, children, onClickAway }) => {
  return (
    <>
      <ClickAwayListener onClickAway={onClickAway}>
        {open && children}
      </ClickAwayListener>
    </>
  );
};

export default Menu;
