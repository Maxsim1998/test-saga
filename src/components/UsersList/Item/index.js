import React from 'react';
import { useHistory } from "react-router-dom";
import T from 'prop-types';

import { Selected } from '../../../svg';
import { Button } from '../../';
import './index.scss';
import { selectUserPromiseCreator } from '../../../redux/users';
import { useActionsRoutines } from '../../../hooks';

const UserItem = ({ item }) => {
  const history = useHistory();

  const {
    _id,
    picture: { large },
    isSelected,
    name: {
      first,
      last,
    }
  } = item;

  const selectUser = useActionsRoutines(selectUserPromiseCreator);

  const onSelectUserClick = (e) => {
    e.stopPropagation();
    selectUser(_id);
  };

  const onUserClick = () => history.push(`/user/${_id}`);

  return (
    <div className="Item" onClick={onUserClick}>
      {isSelected && (
        <Selected className="Item__Selected-Indicator" />
      )}
      <img className="Item__Avatar" src={large} alt="..." />
      <div className="Item__Info">
        <div className="Top">
          {first} {last}
        </div>
        <div className="Bottom">
          <div className="Bottom__Text">{_id}</div>
          <Button
            className="Bottom__Button"
            label="Select"
            fullWidth
            onClick={onSelectUserClick}
            disabled={isSelected}
          />
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  item: T.object.isRequired,
};

export default UserItem;
