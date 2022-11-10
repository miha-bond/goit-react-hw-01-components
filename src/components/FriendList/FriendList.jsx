import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
};

export default FriendList;
