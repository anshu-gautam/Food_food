import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>Contact</h1>
        <h3>This is namaste react</h3>

        <UserClass />
      </div>
    );
  }
}

export default Contact;
