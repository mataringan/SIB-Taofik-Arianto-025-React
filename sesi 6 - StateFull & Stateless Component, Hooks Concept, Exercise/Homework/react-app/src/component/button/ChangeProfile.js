import React, { Fragment } from "react";

const ChangeProfile = (props) => (
  <input
    type="button"
    onClick={props.changeProfile}
    value="Update"
    className="changeProfile"
  />
);

export default ChangeProfile;
