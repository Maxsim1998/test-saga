import React from 'react';
import Item from './Item';
import T from 'prop-types'
import './index.scss';

export const UsersList = ({ users }) => (
  <div className="Users-List">
    {users.map(item =>
      <Item key={item._id} item={item} />
    )}
  </div>
);

UsersList.propTypes = {
  users: T.arrayOf(T.object).isRequired,
};
