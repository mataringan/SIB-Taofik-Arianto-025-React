import React, { useState, useEffect } from "react";
import Join from "./button/Join";
import ChangeProfile from "./button/ChangeProfile";
import PropTypes from "prop-types";

// class DataProfile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       organizers: "Taofik Arianto",
//       members: 2001,
//       lokasi: "Jawa Barat",
//     };
//   }

//   ubahProfile = () =>
//     this.setState({
//       organizers: "Mataringan",
//       members: 2018,
//       lokasi: "Jakarta",
//     });

//   render() {
//     return (
//       <Fragment>
//         <p>
//           Location <span className="location">{this.state.lokasi}</span>
//         </p>
//         <p>
//           Members <span className="members">{this.state.members}</span>
//         </p>
//         <p>
//           Organizers <span className="organizers">{this.state.organizers}</span>
//         </p>
//         {/* memanggil element button join  */}
//         <Join />
//         {/* Props & setState */}
//         <ChangeProfile changeProfile={this.ubahProfile} />
//       </Fragment>
//     );
//   }
// }

function DataProfile() {
  const [organizers, setOrganizers] = useState("Taofik Arianto");
  const [members, setMembers] = useState(2001);
  const [lokasi, setLokasi] = useState("Jawa Barat");

  const [update, setUpdate] = useState(" ");
  useEffect(() => {
    document.title = `Hacktiv8 Meetup ${update}`;
  });

  function handleChange() {
    setOrganizers("Mataringan");
    setMembers(2018);
    setLokasi("Jakarta");
    // setUpdate(alert(`data akan di update ${update}`));
  }

  return (
    <>
      <p>
        Location <span className="location">{lokasi}</span>
      </p>
      <p>
        Members <span className="members">{members}</span>
      </p>
      <p>
        Organizers <span className="organizers">{organizers}</span>
      </p>
      {/* memanggil element button join  */}
      <Join />
      {/* Props & setState */}
      <ChangeProfile changeProfile={handleChange} />
    </>
  );
}

DataProfile.propTypes = {
  organizers: PropTypes.string,
};

export default DataProfile;
