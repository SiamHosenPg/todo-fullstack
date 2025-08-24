import React from "react";
import Header from "../ui/header/Header";
import Content from "../ui/todocontent/Content";

const Home = () => {
  return (
    <div className="Pagearea h-screen py-20">
      <div className="bg-Background h-full rounded-3xl">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Home;
