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
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className=" border border-solid bg-gray-100 flex">
        <div>
          <img className=" h-52" src={avatar_url} alt="" />
        </div>
        <div className=" m-9 text-3xl">
          <h1 className=" m-1">Name:{name}</h1>
          <h2 className=" m-1">Loacation: {location}</h2>
          <h3 className=" m-1">Contact: sajanmoon5@gmail.com</h3>
          <h3 className=" m-1">Bio: {bio}</h3>
        </div>
      </div>
    );
  }
}
export default UserClass;
