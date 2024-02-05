import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About US</h1>
        <h2>Contact Details</h2>
        {/* <User name={"sameer (functional)"} /> */}
        <UserClass name={"First (class)"} location={"nagpur(class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About US</h1>
//       <h2>Contact Details</h2>
//       <User name={"sameer (functional)"} />
//       <UserClass name={"sameer (class)"} location={"nagpur(class)"} />
//     </div>
//   );
// };

export default About;
