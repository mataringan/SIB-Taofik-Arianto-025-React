// import React, { Component } from "react";

// export default class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hasError: false,
//     };
//   }

//   componentDidCatch(error, info) {
//     // Example "componentStack";
//     // In ComponentThatThrows (created by App)
//     // in ErrorBoundry (created by App)
//     // in div (created by App)
//     // in App
//     logComponentStackToMyService(info.componentStack);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can reader any custom fallback UI
//       return <h1>Something went wrong</h1>;
//     }

//     return this.props.children;
//   }
// }
