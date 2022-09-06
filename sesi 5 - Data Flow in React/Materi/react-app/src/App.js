import "./App.css";
import Counter from "./Component/counter";
import Hero from "./Component/props";
import Users from "./Component/state";

function App() {
  return (
    <div className="App">
      <Users />
      <Counter />
      <Hero />
    </div>
  );
}

export default App;
