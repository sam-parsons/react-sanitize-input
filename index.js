import React from 'react';
import SanitizeInput from 'sanitize-input';

export default class Sanitize extends React.PureComponent {
  constructor(props) {
    super(props);
    // check if Sanitizer API exists in window
    if (!('Sanitizer' in window)) {
      return new ReferenceError('Sanitizer API does not exist in this browser');
    }
    this.Sanitizer = new window.Sanitizer();
  }

  render() {
    return !this.props.children.length
      ? this.props.children
      : this.props.children.map((child) => {
          const newHandler = function (e) {
            e.target.sanitizedValue = this.Sanitizer.sanitizeToString(
              e.target.value
            );
            child.props.onChange(e);
          }.bind(this);
          const newProps = Object.assign(
            { ...child.props },
            { onChange: newHandler }
          );
          const newChild = React.createElement(child.type, newProps);
          return newChild;
        });
  }
}
