import React from "react";
import ReactDOM from "react-dom/client";

// HEADER
// -logo
// -Nav Items
// BODY
// - search bar
// -resturant cart
// FOOTER
// -copyright
// -links
// -address
// --contact

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRraNvIMGOoQQSeDe5SJa5KKed91eMGqa-xvg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">SearchBar</div>
      <div className="resContainer">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="restroCard">
      <img
        className="meghnaCard"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd2411fe310300d27c83caa330815415"
        alt=""
      />
      <h2>Camp Burger</h2>
      <h4>Burger,american</h4>
      <h4>4.4 stars</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
