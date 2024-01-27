import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      I m a component using normal function
    </h1>
  );
};

const title = <h1>I m a title</h1>;

const Headingcomponent = () => (
  <div id="container">
    {/* we can write javascript using curly braces {}  */}
    <Title />
    <h1>{title}</h1>
    <h1 className="heading">I m function component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />);
