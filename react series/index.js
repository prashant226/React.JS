import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./OIP.jpg";
/**
 * PARCEL FEATURES:
 * BUILDING
 * MINIFY
 * CLEANING AND CODE
 * DEV AND PRODUCTION FRIENDLY
 * SUPER-FAST TIME SHORT
 * caching while devlopment
 * compatable with older version of the browser
 * HTTPS on dev
 * port number
 * consistent hashing algorithm
 * zero config
 */

//React element => it is an Object
//Below is core react way to create an react element
// const heading = React.createElement("h1", { id: "heading" }, "Namste series");

//JSX React(JSX Code is transpiled before going to the JS Engine)

// const elem = <span>React Element</span>;

// const title = () => {
//   <h1 className="head">Namaste React using JSX</h1>;
// };

// const data = api.getData();

// const number = 1000;
// //REACT Functional Component
// const HeadingComponent = () => {
//   <div id="container">
//     {
//       // you can write any JS inside it.
//       data
//     }
//     <h1 className="heading"> Functional Component </h1>
//   </div>;
// };

/**
 * how our APP would look like::
 * Header
 * -Logo
 * -Nav iteams
 * Body
 * -search bar
 * -Restaurant Container
 * -restaurants cards(
 * -name of restaurant , star rating , cuisines , etc..
 * )
 * Footer
 * -links
 * -address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {
          /* <img className="logo" src="logoImage" /> */
          <img className="logo" src={require("./OIP.jpg")} alt="Logo" />
        }
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = () => {
  backgroundColur: "af0f0f8";
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        src="https://th.bing.com/th/id/OIP.VKWiZKdds9rHzCBWgP9OIwHaIw?w=152&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="res-logo"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani , North Indian ,Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes ETA</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
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

// root.render(heading);
root.render(<AppLayout />);
