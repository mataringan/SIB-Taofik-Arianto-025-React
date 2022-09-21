import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Newsroom from "./pages/Newsroom";
import Sejarah from "./pages/Sejarah";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div class="container-fluid" style={{ marginTop: "80px", zIndex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path=":sejarah" element={<Sejarah />} />
            </Route>
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsroom" element={<Newsroom />} />
          </Routes>
        </div>
      </div>
    );
  }
}
