import { useContext, useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { getOrderData, getUserData } from "../../util/util.js";
import { UserContext } from "../../context/GlobalUserProvider.jsx";

function Navigation() {
  // const [isUser, setIsUser] = useState(null);
  const [hasOrder, setHasOrder] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(
    function () {
      // if (!isUser) {
      //   const user = getUserData();
      if (user) {
        // setIsUser(user);

        const order = getOrderData(user.id);
        if (order) setHasOrder(true);
      }
      // }
    },
    [user]
  );

  return (
    <div className={styles.navigation}>
      <p className={styles.logo}>
        <NavLink to={"/"} id="start" className={styles.logoFirstLine}>
          e<span>&#10006;</span>treme - BMX
        </NavLink>
        <span className={styles.logoSecondary}>Bicycle Management</span>
      </p>
      <nav className={styles.nav}>
        <ul className={styles.navList} role="list">
          <li className={styles.navListItem}>
            {window.location.pathname === "/" &&
            user.role !== "worker" &&
            user.role !== "manager" ? (
              <NavLink to={"/app"} className={styles.navLink}>
                Create
              </NavLink>
            ) : (
              <NavLink to={"/"} className={styles.navLink}>
                Home
              </NavLink>
            )}
          </li>
          {window.location.pathname !== "/" &&
            user &&
            user.role !== "worker" &&
            user.role !== "manager" && (
              <NavLink to={"/app"} className={styles.navLink}>
                Create
              </NavLink>
            )}
          <li className={styles.navListItem}>
            <NavLink to={"/about"} className={styles.navLink}>
              About
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink to={"/contacts"} className={styles.navLink}>
              Contacts
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            {user ? (
              <NavLink to={"/profile"} className={styles.navLink}>
                {user.firstName} {user.lastName}
              </NavLink>
            ) : (
              <NavLink to={"/auth"} className={styles.navLink}>
                Sign in
              </NavLink>
            )}
          </li>
          {hasOrder && (
            <li className={styles.navListItem}>
              <Link to={"/profile/cart"} className={styles.cartIcon}>
                <ion-icon name="cart-sharp"></ion-icon>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
