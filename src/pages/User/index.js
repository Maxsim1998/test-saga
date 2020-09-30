import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserPromiseCreator, userSelector } from '../../redux/users';
import { useActionsRoutines } from '../../hooks';
import './index.scss';

export const User = () => {
  const user = useSelector(userSelector);
  const { id } = useParams();
  const getUser = useActionsRoutines(getUserPromiseCreator);

  const {
    picture,
    email,
    gender,
    phone,
    date,
  } = user;

  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <div className="User">
      <img className="User__Avatar" src={picture?.large} alt="..." />
      <div>
        email: {email}
      </div>
      <div>
        gender: {gender}
      </div>
      <div>
        phone: {phone}
      </div>
      <div>
        date: {date}
      </div>
    </div>
  );
};
