import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ className, onClick, children }) => (
  <>
    <button type="submit" className={className} onClick={onClick}>
      {children}
    </button>
  </>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
