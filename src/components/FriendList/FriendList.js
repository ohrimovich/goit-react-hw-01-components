import FriendsListItem from "./FriendsListItem";
import s from "./FriendList.module.scss";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      <FriendsListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
