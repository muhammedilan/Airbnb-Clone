import React, { lazy } from "react";
import Header from "./Header";
import MobileHeader from "./Header/MobileHeader";
import useWindowSize from "../hooks/useWindowSize";
const Banner = lazy(() => import("./Banner"));

const Layout = ({ children }) => {
  const { width } = useWindowSize();

  return (
    <div className="mx-auto max-w-[2520px] min-h-[200vh] flex flex-col">
      {width < 744 ? (
        <MobileHeader />
      ) : (
        <>
          <Banner />
          <Header />
        </>
      )}
      <main className="grow">{children}</main>
    </div>
  );
};

export default Layout;
