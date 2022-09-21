import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <h3 style={{ marginBottom: "20px", fontWeight: "600" }}>
            Produk Kami
          </h3>
          <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            vero? Quasi necessitatibus porro fugit suscipit vitae voluptatem
            asperiores voluptatibus.
          </h5>
        </div>

        <div className="container-fluid d-flex justify-content-around aboutHeader">
          <div class="card" style={{ width: "380px" }}>
            <img
              src={require("../assets/image/paddy.jpg")}
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">BENIH PADI</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quia sit repellat totam non tempora maiores laudantium
                suscipit distinctio nobis?
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "380px" }}>
            <img
              src={require("../assets/image/veget.jpg")}
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">SAYURAN</h5>
              <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                excepturi nam earum delectus enim labore voluptate nesciunt est
                porro reprehenderit!
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "380px" }}>
            <img
              src={require("../assets/image/rice.jpg")}
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">BERAS</h5>
              <p class="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                excepturi nam earum delectus enim labore voluptate nesciunt est
                porro reprehenderit!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
