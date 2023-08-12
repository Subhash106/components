# Introduction

This package has UI components like Card, Button and TextInput that can be used in react applications.

## Usage

```
import {Card, Button, TextInput} from '@subashchandra/components'

export default function App() {
  return (
    <div className="container">
      <h1>Components</h1>
      <p>This is a button component</p>
      <Button>Click me</Button>
      <p>This is a `basic` card component</p>
      <Card type="basic">Go to office</Card>
      <p>This is a `success` card component</p>
      <Card type="success">Go to office</Card>
      <p>This is a `TextInput` component</p>
      <TextInput value="Text input" />
    </div>
  );
}
```

You can learn more on [github](https://github.com/Subhash106/components)
