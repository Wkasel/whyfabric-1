import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./homePageElements/Header";

import WorkArea from "./homePageElements/WorkArea";

import "./style.css";

const HomePage = () => {
  return (
    <BrowserRouter>
      <div className="home_page">
        <div className="work_area">
          <Header />
          <WorkArea />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
