import React, { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
