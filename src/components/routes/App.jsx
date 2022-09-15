import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import AboutMe from "../containers/AboutMe";
import Proyects from "../containers/Proyects";
import Experience from "../containers/Experience";
import Technologies from "../containers/Technologies";
import NotFound from "../containers/NotFound";
import Layout from "../Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;