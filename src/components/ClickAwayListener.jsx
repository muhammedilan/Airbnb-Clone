import React, { useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
  const wrapper = useRef();

  useEffect(() => {
    document.addEventListener(
      "click",
      (e) => !wrapper.current.contains(e.target) && onClickAway && onClickAway()
    );
  }, []);

  return (
    <div ref={wrapper} className="relative">
      {children}
    </div>
  );
};

export default ClickAwayListener;
