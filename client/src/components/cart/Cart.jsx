import styles from "./cart.module.css"

const Cart = ({
  product,
  cart,
  deteleItem
}) => {
  const cartIsEmpty = cart.length === 0;
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  return (
    <section className={styles["shopping-cart-container"]}>
      <div>
        <h2>Your Cart ({cart.length})</h2>
      </div>
      {/* carrito vacio*/}
      {cartIsEmpty && (
        <div className={styles["emtycart"]}>
          <img src="/assets/illustration-empty-cart.svg" alt="Empty cart" />
          <p>Your added items will appear here</p>
        </div>
      )}

      {/* carrito con prodroductos*/}
      {!cartIsEmpty && (
        <div>
          {cart.map(item =>(
            <div className={styles["product-in-cart"]} key={item.id}> 
             <div className={styles["product-infoCart"]}> 
             <span className={styles["productname"]}>{item.title}</span>
             <div>
             <span className={styles["quantityin"]}> x{item.quantity}</span>
            <span className={styles["price-by-unit"]}> @{item.price} </span>
            <span className={styles["total-product-price"]}>${totalAmount} </span>
             </div>
             </div>
             <button className={styles["icon-remove-item"]}>
          <img
            src="/assets/icon-remove-item.svg"
            alt="delete product from cart"
            onClick={() => deteleItem(item)}
          />
        </button>
             </div>
          ))}
          
          <div className={styles["checkout"]}>
          <span className={styles["total-text"]}>Order Total:</span>
          <span className={styles["total-price"]}>${totalAmount}</span>
        </div>
          </div>

      )}
        {/*precio total*/}

    </section>
  );
};
export default Cart;
