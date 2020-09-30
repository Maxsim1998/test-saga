import React from 'react';
import T from 'prop-types';
import './index.scss';

export const Button = ({
  label,
  className = '',
  onClick,
  fullWidth = false,
  disabled = false,
}) => (
  <button
    className={`Button ${fullWidth && 'Button_Full-Width'} ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: T.string.isRequired,
  className: T.string,
  onClick: T.func.isRequired,
  fullWidth: T.bool,
};
