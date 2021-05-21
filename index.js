import React from 'react';
import SanitizeInput from 'sanitize-input';

export default class Sanitize extends React.PureComponent {
  constructor(props) {
    super(props);
    // check if Sanitizer API exists in window
    this.failedMount = false;
    if (!('Sanitizer' in window)) {
      console.warn('Sanitizer API does not exist in this browser');
      this.failedMount = true;
    }
    this.Sanitizer = new window.Sanitizer();
  }

  render() {
    return this.failedMount
      ? !this.props.children.length
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
          })
      : this.props.children;
  }
}
