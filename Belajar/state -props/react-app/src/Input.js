import React, { Fragment } from "react";
const Input = (props) => (
  <Fragment>
    {" "}
    <input
      type="button"
      onClick={props._ubahNama}
      value="Klik untuk mengubah Nama & Umur"
    />
    <br />
    <label>Nama Baru</label>
    <input
      type="text"
      onBlur={(event) => props._ubahNamaInput(event.target.value)}
    />
    <br />
    <label>Umur Baru</label>
    <input
      type="number"
      onBlur={(event) => props._ubahUmurInput(event.target.value)}
    />
  </Fragment>
);

export default Input;
