import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { Link } from "react-router-dom";

import styles from "./Layout.module.css";

import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Nima with Love</p>
      </footer>
    </>
  );
};

export default Layout;
