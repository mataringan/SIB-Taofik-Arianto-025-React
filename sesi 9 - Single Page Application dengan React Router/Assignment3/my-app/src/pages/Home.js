import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <img
          src={require("../assets/image/father.jpg")}
          class="img-fluid"
          style={{
            height: "650px",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></img> */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            class="carousel-inner "
            style={{
              height: "650px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div class="carousel-item active">
              <img
                src={require("../assets/image/rice2.jpg")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/image/vege.jpg")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/image/children.jpg")}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
