import styles from "./CheckoutPage.module.css";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import BasketCart from "../components/BasketCart";
import BasketSideBar from "../components/BasketSideBar";

const CheckoutPage = () => {
  const state = useSelector((store) => store.cart);

  const navigate = useNavigate();

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty Cart</p>
        <button onClick={() => navigate("/products")}>Back To Shop</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCart key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
