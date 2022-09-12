// import React, { Component } from "react";

// export default class Halu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: true,
//       data: [],
//     };
//   }

//   componentDidUpdate(preProps) {
//     if (prevProps.selectedState !== this.props.selectedState) {
//       fetch("https://pathToApi.com")
//         .then((resp) => resp.json())
//         .then((respJson) => {
//           // do what ever you want with your 'response'
//           this.setState({
//             isLoading: false,
//             data: respJson,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }

//   render() {
//     return <div>Halu</div>;
//   }
// }
