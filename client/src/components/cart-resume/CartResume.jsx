import styles from './cart-resume.module.css';

const CartResume = ({ cart, totalAmount, confirmOrder }) => {
	return (
		<>
			<div>
				{cart.map(item => (
					<div className={styles['product-in-cart']} key={item._id}>
						<img src={item.imgThumbnail} />
						<div className={styles['product-infoCart']}>
							<span className={styles['productname']}>{item.title}</span>
							<div>
								<span className={styles['quantityin']}>x{item.quantity}</span>
								<span className={styles['price-by-unit']}>@{item.price}</span>
								<span className={styles['total-product-price']}>
									${item.quantity * item.price}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div>
				<span>Total del pedido:</span>
				<span>${totalAmount}</span>
			</div>
			<button onClick={confirmOrder}>Confirm</button>
		</>
	);
};
export default CartResume;
