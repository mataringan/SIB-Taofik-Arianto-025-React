import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <Carousel />
    </div>
  );
}

export default Home;
