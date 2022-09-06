import React from "react";
import "./App.css";
import Data from "./Data";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Taofik",
      umur: "20",
    };
  }

  _ubahNama = () =>
    this.setState({
      nama: "Fikar",
      umur: "19",
    });

  _ubahNama2 = (namaBaru) => this.setState({ nama: namaBaru });

  _ubahUmur2 = (umurBaru) => this.setState({ umur: umurBaru });

  render() {
    return (
      <div className="App">
        <Data Nama={this.state.nama} Umur={this.state.umur} />
        <Input
          _ubahNama={this._ubahNama}
          _ubahNamaInput={this._ubahNama2}
          // var awal dikirim ke props input.js
          _ubahUmurInput={this._ubahUmur2}
        ></Input>
      </div>
    );
  }
}

export default App;
