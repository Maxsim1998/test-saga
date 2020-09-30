import React from 'react';
import { useSelector } from 'react-redux';
import { selectedUsersSelector } from '../../redux/users';
import { UsersList } from '../../components';

export const Selected = () => {
  const users = useSelector(selectedUsersSelector);
  return <UsersList users={users} />
};
