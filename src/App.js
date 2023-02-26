import React, { lazy } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
