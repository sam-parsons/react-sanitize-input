# react-sanitize-input

React higher-order component that wraps around input elements, scrubbing user inputs with the [Sanitizer Web API](https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer).

## Motivation

The Sanitizer Web API is a tool which allows developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM. `react-sanitize-input` provides a declarative interface for `window.Sanitizer`'s API.

## Compatability

The Sanitizer Web API is currently in development, try to use Chrome Canary with `chrome://flags/#enable-experimental-web-platform-features` enabled, or Firefox Nightly with `dom.security.sanitizer.enabled` set to true.

## Install

```
npm install react-sanitize-input
```

## API

The `Sanitize` component is a higher-order component, where you declaratively provide the children. `Sanitize` will wrap a function around each input element's onChange handler, creating a `sanitizedValue` property on `event.target`. This component only creates one instance of `window.Sanitizer` that is used by all wrapped handlers.

## Usage

```js
import Sanitize from 'react-sanitize-input';

class App extends React.Component {
  constructor() {
    this.state = { inputText: 'none' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ inputText: e.target.sanitizedValue });
  }

  render() {
    return (
      <div className="App">
        <Sanitize>
          <input id="1" type="text" onChange={this.onChange} />
          [...multipleInputElements]
        </Sanitize>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}
```

## Coming soon

The options object argument to `window.Sanitizer` constructor is not yet standardized, therefore is unusable in this component now. When the spec becomes codified, providing an options object as a prop to the `Sanitize` component will be standard behavior.

## License

MIT
