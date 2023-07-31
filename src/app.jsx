import React from "react";

import Button from "./components/button/index.jsx";
import Card from "./components/card/index.jsx";
import TextInput from "./components/input/index.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>Components</h1>
      <h2>This is a button component</h2>
      <Button title="Click me" />
      <h2>This is a `basic` card component</h2>
      <Card title="Go to office" type="basic" />
      <h2>This is a `success` card component</h2>
      <Card title="Go to office" type="success" />
      <h2>This is a `TextInput` component</h2>
      <TextInput value="Text input" />
    </div>
  );
}
