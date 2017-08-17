import React from 'react';
import PropTypes from 'react-proptypes';

export default function(Tag, baseClass) {
    const fn = ({children, className}) => <Tag className={`${baseClass} ${className}`}>{children}</Tag>;
    fn.displayName = `Tag(${Tag})>`;
    fn.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
      };
    return fn;
}