import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>This is namaste react</h3>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">loggedInUser:{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass />
      </div>
    );
  }
}

export default About;
