import styles from "./productCard.module.css";

const ProductCard = ({
  product,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  cart,
}) => {
  const productInCart = cart.find(item => item.id === product.id);
  const productSelected = productInCart 
  ? `${styles["product-picture-selected"]} ${styles["product-picture"]}`
  : styles["product-picture"];

  return (
    <article className={styles["product-card"]} id={product.id}>
      {/* Imagen del producto */}
      <div className={productSelected}>
        <picture>
          <source media="(min-width: 1040px)" srcSet={product.imgDesktop} />
          <source media="(min-width: 768px)" srcSet={product.imgTablet} />
          <source media="(min-width: 360px)" srcSet={product.imgMobile} />
          <img src={product.imgMobile} alt={product.alt} />
        </picture>
      </div>

      {/* Botones */}
      <div className={styles["product-buttons"]}>
        {!productInCart && (
          <button
            className={`${styles.button}  ${styles["button-primary"]}`}
            name="addToCart"
            onClick={addToCart}
          >
            <img src="/assets/icon-add-to-cart.svg" alt="Add to cart" />
            Add to Cart
          </button>
        )}
        {productInCart && (
          <div
            className={`${styles.button} ${styles["button-secondary"]}`}
            name="controlquantity"
          >
            <button
              name="decreaseQuantity"
              onClick={decreaseQuantity}
              className={styles["cartbutton-icon"]}
            >
              <img src="/assets/icon-decrement-quantity.svg" alt="Decrease" />
            </button>
            <span>{productInCart.quantity}</span>
            <button
              name="increaseQuantity"
              onClick={increaseQuantity}
              className={styles["cartbutton-icon"]}
            >
              <img src="/assets/icon-increment-quantity.svg" alt="Increase" />
            </button>
          </div>
          //  if(productInCart.quantity === 0) !productInCart &&
        )}
      </div>

      {/* Texto del producto */}
      <div className={styles["product-content"]}>
        <span className={styles["product-name"]}>{product.name}</span>
        <span className={styles["product-title"]}>{product.title}</span>
        <span className={styles["product-price"]}>${product.price}</span>
      </div>
    </article>
  );
};
//{cartItem.quantity}

export default ProductCard;
