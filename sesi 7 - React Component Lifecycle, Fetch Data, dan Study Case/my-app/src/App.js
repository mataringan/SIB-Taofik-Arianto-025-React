import { useEffect, useState } from "react";
import "./App.css";
// import Clock from "./Materi/Component Lifecycle/DidMount";

// import Example from "./Materi/Component Lifecycle/LifeCycleFunction";
// import Halu from "./Materi/Fetch Data/ClassCompFetch";

// Class Component

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: new Date(),
//     };
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Realtime CLOCK</h1>
//         <hr />
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

function App() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  return (
    <div className="App">
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
