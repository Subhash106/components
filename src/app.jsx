import React from "react";

import Button from "./components/button/index.jsx";
import Card from "./components/card/index.jsx";
import TextInput from "./components/input/index.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>Components</h1>
      <p>This is a button component</p>
      <Button title="Click me" />
      <p>This is a `basic` card component</p>
      <Card title="Go to office" type="basic" />
      <p>This is a `success` card component</p>
      <Card title="Go to office" type="success" />
      <p>This is a `TextInput` component</p>
      <TextInput value="Text input" />
    </div>
  );
}
