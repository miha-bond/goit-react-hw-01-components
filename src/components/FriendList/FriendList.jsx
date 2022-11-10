import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
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
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
