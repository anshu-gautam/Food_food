import React from "react";
class USerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: " ",
        avatar_url: " ",
      },
    };
  }
  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/anshu-gautam");
      const jsonData = await data.json();
      

      this.setState({
        userInfo: jsonData,
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }

  }
  render() {

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h4>From Class</h4>
        <img src={avatar_url} />
        <h2>Name:{name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
export default USerClass;
