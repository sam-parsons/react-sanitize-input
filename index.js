import React from 'react';
import SanitizeInput from 'sanitize-input';

export default class Sanitize extends React.PureComponent {
  constructor(props) {
    super(props);
    // check if Sanitizer is in window
  }

  render() {
    this.props.child;
    return !this.props.children.length
      ? this.props.children
      : this.props.children.map((child) => {
          // child.props.onChange = SanitizeInput(child.props.onChange);
          const newHandler = SanitizeInput(child.props.onChange);
          console.log('newhandler', newHandler);
          const newProps = Object.assign(
            { ...child.props },
            {
              onChange: newHandler,
            }
          );
          const newChild = React.createElement(child.type, newProps);

          return newChild;
        });
  }
}
