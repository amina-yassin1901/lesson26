import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { users } from "../users";
function UserProfile() {
  const { userId } = useParams();
  const user = users.find((u) => u.id === Number(userId));
  if (!user) {
    return <h2>Пользователь не найден</h2>;
  }
  return (
    <div className={styles.profile}>
      <h1>Профиль пользователя</h1>
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
      <p>О себе: {user.bio}</p>
    </div>
  );
}
export default UserProfile;
