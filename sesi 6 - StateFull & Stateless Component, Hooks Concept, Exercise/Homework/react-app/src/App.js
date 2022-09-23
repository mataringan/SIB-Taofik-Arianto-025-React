import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default App;
