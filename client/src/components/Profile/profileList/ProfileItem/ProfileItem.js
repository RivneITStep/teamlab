import React, { Fragment } from "./node_modules/react";
import { BrowserRouter as Router, Route, Switch } from "./node_modules/react-router-dom";

class ProfileItem extends React.Component {
  
  render() {
    console.log("Profileitem", this.props)
    return (
      <div>Profileitem</div>
    );
  }
}
export default ProfileItem