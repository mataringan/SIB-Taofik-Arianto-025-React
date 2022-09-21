import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-around aboutHeader mt-3">
        <div class="card" style={{ width: "25rem" }}>
          <img src={require("../assets/image/padi.jpg")} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title fw-bold">Sejarah Kami</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quia sit repellat totam non tempora maiores laudantium suscipit
              distinctio nobis?
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "25rem" }}>
          <img
            src={require("../assets/image/landscape.jpg")}
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">Wilayah Kerja</h5>
            <p class="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              excepturi nam earum delectus enim labore voluptate nesciunt est
              porro reprehenderit!
            </p>
          </div>
        </div>
        <div
          class="about"
          style={{
            width: "300px",
            color: "#3B74CE",
            fontSize: "22px",
            fontWeight: "bold",
            marginTop: "150px",
          }}
        >
          <p>
            Lebih dari 7 tahun berdiri, kami bangga menjadi "Benihnya Indonesia"
          </p>
        </div>
      </div>
    );
  }
}
