import React, { useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
  const wrapper = useRef();

  useEffect(() => {
    function handleClick(e) {
      !wrapper.current.contains(e.target) && onClickAway && onClickAway();
    }
    document.addEventListener("click", handleClick);
  }, []);

  return (
    <div ref={wrapper} className="relative">
      {children}
    </div>
  );
};

export default ClickAwayListener;
