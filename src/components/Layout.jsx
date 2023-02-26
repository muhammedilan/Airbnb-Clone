import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden min-h-screen">
      <Header />
      <main className="grow padding-container">{children}</main>
    </div>
  );
};

export default Layout;
