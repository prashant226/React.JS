const heading = React.createElement(
    "h1", {
        id: "title",
    },
    "Namaste Everyone"
);

const heading2 = React.createElement(
    "h2", {
        id: "title",
    },
    "Heading 2"
);

const container = React.createElement(
    "div", {
        id: "container",
    }, [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing react element inside a root
root.render(container);