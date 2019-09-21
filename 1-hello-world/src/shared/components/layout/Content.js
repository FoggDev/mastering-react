import React, { Component } from 'react';
import { element } from 'prop-types';

class Content extends Component {
  static propTypes = {
    children: element
  };

  render() {
    const { children } = this.props;

    return (
      <div className="Content">
        {children}
      </div>
    );
  }
}

export default Content;
