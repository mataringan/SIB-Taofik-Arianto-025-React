import React from "react";
import Header from "./Component/Header";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
