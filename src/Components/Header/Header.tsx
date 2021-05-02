import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={clsx(styles.root)}>
      <div>LOGO</div>
      <nav className={clsx(styles.navbar)}>
        <ul className={clsx(styles.list)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
