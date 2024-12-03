import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar({ hotMemes, regularMemes }) {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to="/">{regularMemes.length} Regular Memes</NavLink>
        </li>
        <li>
          <NavLink to="/hot">{hotMemes.length} Hot Memes 🔥</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add new mem</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
