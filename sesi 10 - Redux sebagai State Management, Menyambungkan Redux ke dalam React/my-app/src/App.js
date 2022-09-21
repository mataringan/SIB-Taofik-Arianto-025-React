import "./App.css";
import CounterClass from "./features/counter/CounterClassComponent.js";
import CounterFnComponent from "./features/CounterFnComponent.js";

function App() {
  return (
    <main className="App">
      <CounterFnComponent />
      <CounterClass />
    </main>
  );
}

export default App;
