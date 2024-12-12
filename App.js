import React from "react";
import ReactDom from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
