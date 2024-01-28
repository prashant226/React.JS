import React from "react";
import ReactDOM from "react-dom/client";
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

const heading = <h1 className="head"> Namaste React using JSX </h1>;

//REACT Functional Component
const HeadingComponent = () => {
  <div id="container">
    <h1 className="heading"> Functional Component </h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
