// const heading = React.createElement("h1", {}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const color = "red";
// const heading2 = React.createElement(
//   "h2",
//   { style: { color: color }, id: "Kushaal" },
//   "Hello World From React 2"
// );
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(heading2);

const color2 = "blue";
const heading3 = React.createElement("h3", { id: "parent" }, [
  React.createElement("h3", { id: "child" }, [
    React.createElement("h3", {}, "Child 1 3"),
    React.createElement("h3", {}, "Child 2 3"),
  ]),
  React.createElement("h3", { id: "child" }, [
    React.createElement("h3", {}, "Child 1 3"),
    React.createElement("h3", {}, "Child 2 3"),
  ]),
]);

console.log(heading3); //This is an object

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(heading3); //Render will convert object to the HTML element
