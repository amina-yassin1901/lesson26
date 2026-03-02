import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const users = [
  { id: 1, name: "Anna", age: 25, bio: "Frontend developer" },
  { id: 2, name: "Max", age: 30, bio: "Backend developer" },
  { id: 3, name: "Lisa", age: 22, bio: "UI/UX Designer" },
];
function Users() {
  return (
    <div>
      <h1>Список пользователей</h1>
      <ul className={styles.userlist}>
        {users.map((user) => {
          return (
            <li key={user.id} className={styles.usercard}>
              <Link className={styles.userlink} to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Users;
export { users };
