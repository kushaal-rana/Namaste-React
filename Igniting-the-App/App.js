import React from "react";
import ReactDOM from "react-dom";

//React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);

const Title = () => <h1 id="heading">Hello World From React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const HeadingComponent = () => {
  <div className="container">
    <Title />
    {Title()}
    <Title></Title>
  </div>;
};

const Component = () => <h1 className="heading"> Hello World From React</h1>;
