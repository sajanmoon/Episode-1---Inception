import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(props);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sajanmoon");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div>
        <h1>Name:{name}</h1>
        <h2>Loacation: {location}</h2>
        <h3>Contact @xyz.com</h3>
      </div>
    );
  }
}
export default UserClass;
