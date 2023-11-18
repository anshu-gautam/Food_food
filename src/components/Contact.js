import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
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
