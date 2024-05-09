import { ShortenText } from "../helper/helper";

import { MdDeleteOutline } from "react-icons/md";

import styles from "./BasketCart.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const BasketCart = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <p>{ShortenText(data.title)}</p>
      <div className={styles.actions}>
        {data.quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}> - </button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => dispatch(increase(data))}> + </button>
      </div>
    </div>
  );
};

export default BasketCart;
