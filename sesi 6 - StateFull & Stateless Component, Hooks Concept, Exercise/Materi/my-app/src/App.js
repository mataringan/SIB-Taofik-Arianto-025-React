// import logo from './logo.svg';
import "./App.css";
import Example from "./useEffect";
import Counter from "./useState";

function Header() {
  return (
    <div className="header">
      <h1>My First React App</h1>
    </div>
  );
}
function Content() {
  return (
    <div className="content">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        ex, veniam voluptatem aliquam esse repellat ipsa at ut aspernatur?
        Reiciendis!
      </p>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <p>&copy; My self - 2022</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
      <hr />
      <Counter />
      <hr />
      <Example />
    </div>
  );
}

export default App;
