import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../redux/users';
import { UsersList } from '../../components';
import { useActionsRoutines } from '../../hooks';
import { getMoreUsersPromiseCreator } from '../../redux/users';
import { Button } from '../../components';

export const Main = () => {
  const getMoreUsers = useActionsRoutines(getMoreUsersPromiseCreator);
  const users = useSelector(usersSelector);
  const loadMore = () => {
    getMoreUsers(getMoreUsers);
  };

  return (
    <div>
      <UsersList users={users} />
      <Button label="load more" onClick={loadMore}/>
    </div>
  );
};
