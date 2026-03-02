import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.navlink} to={"/"}>
        Home Page
      </NavLink>
      <NavLink className={styles.navlink} to={"/users"}>
        Users Page
      </NavLink>
    </nav>
  );
}
export default NavBar;
