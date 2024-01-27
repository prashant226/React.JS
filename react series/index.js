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

// const heading = React.createElement(
//     "h1", {
//         id: "title",
//     },
//     "Namaste Everyone"
// );

// const heading2 = React.createElement(
//     "h2", {
//         id: "title",
//     },
//     "Heading 2"
// );

// const container = React.createElement(
//     "div", {
//         id: "container",
//     }, [heading, heading2]
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// //passing react element inside a root
// root.render(container);

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "i'm an h2 tag"),

    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag"),

    ]),

]);


//JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);