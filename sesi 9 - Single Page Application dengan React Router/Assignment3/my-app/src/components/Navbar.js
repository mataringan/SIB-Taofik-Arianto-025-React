import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav
          class="navbar navbar-expand-lg fixed-top"
          style={{ zIndex: "999", backgroundColor: "#3B74CE" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand">
              <Link
                to="/home"
                class="text-decoration-none text-white"
                style={{
                  fontFamily: "Kaushan Script",
                  fontWeight: "bold",
                  fontSize: "23px",
                }}
              >
                Ngaos
              </Link>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <Link to="/home" class="text-decoration-none text-white">
                      Home
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/about" class="text-decoration-none text-white">
                      About
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <Link to="/product" class="text-decoration-none text-white">
                      Product
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <Link to="/contact" class="text-decoration-none text-white">
                      Contact
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <Link
                      to="/newsroom"
                      class="text-decoration-none text-white"
                    >
                      Newsroom
                    </Link>
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success"
                  type="submit"
                  style={{ backgroundColor: "#FFB725", color: "white" }}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
