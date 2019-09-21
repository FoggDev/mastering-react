import React from 'react';
import { element } from 'prop-types';

const Content = ({ children }) => (
  <div className="Content">
    {children}
  </div>
);

Content.propTypes = {
  children: element
};

export default Content;
