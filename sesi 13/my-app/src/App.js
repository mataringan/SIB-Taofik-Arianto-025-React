import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />}>
          <Route path="about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
