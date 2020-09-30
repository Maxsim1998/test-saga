import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom";
import Time from './Time';
import { selectedUsersCountSelector } from '../../redux/users';
import { Button } from '../';
import './index.scss';

export const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const count = useSelector(selectedUsersCountSelector);
  const showButtonBack = location.pathname.includes('/user');
  const onBackClick = () => history.push('/');
  return (
    <div className="Header">
      {showButtonBack && (
        <Button onClick={onBackClick} label="Back"/>
      )}
      <Time />
      <div>
        count: {count}
      </div>
    </div>
  );
};
