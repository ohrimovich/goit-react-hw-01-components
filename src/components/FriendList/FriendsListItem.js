import PropTypes from "prop-types";
import s from "./FriendList.module.scss";

function FriendsListItem({ friends }) {
  return friends.map((friend) => (
    <li className={s.item} key={friend.id}>
      <span
        className={s.status}
        style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
      ></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  ));
}

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsListItem;
