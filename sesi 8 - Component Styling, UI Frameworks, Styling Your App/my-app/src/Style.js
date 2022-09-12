import "./App.css";
import styles from "./App.module.css";
import divStyle2 from "./AppStyle";
import styled from "styled-components";

const divStyle = {
  backgroundColor: "#eee",
  padding: "30px",
  fontFamily: "Arial",
  fontSize: "50px",
};

const Div = styled.div`
  background-color: #eee;
  padding: 50px;
  font-family: "Arial";
`;

function Style() {
  return (
    <div className="App">
      {/* Inline CSS */}
      {/* <div
        style={{
          backgroundColor: "#eee",
          padding: "30px",
          fontFamily: "Arial",
        }}
      > */}

      {/* Panggil Object variable css  */}
      {/* <div style={divStyle}> */}

      {/* Panggil external css */}
      {/* <div className="App"> */}

      {/* Panggil external css module */}
      {/* <div className={styles.App}> */}

      {/* Panggil external object variable css */}
      {/* <div style={divStyle2}>
        <h1>Hello World 2021</h1>
      </div> */}

      {/* Styled Component  */}
      <Div>
        <h1>Hello World 2022</h1>
      </Div>
    </div>
  );
}

export default Style;
