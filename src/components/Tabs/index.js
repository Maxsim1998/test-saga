import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import './index.scss';

export const Tabs = ({ options }) => (
  <div className="Tabs">
    {options.map(option => (
      <Link
        className="Tabs__Item"
        key={option.path}
        to={option.path}
      >
        {option.label}
      </Link>
    ))}
  </div>
);

Tabs.propTypes = {
  options: T.arrayOf(
    T.shape({
      path: T.string.isRequired,
      label: T.string.isRequired,
    }),
  ),
};
