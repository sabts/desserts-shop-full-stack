import { PRODUCTS } from '../../constants/products';
import { FILTERS } from '../../constants/filters';
import ProductCard from '../product-card/ProductCard';
import styles from './shoppingcartsite.module.css';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Header from '../header/Header';
import { showProductInWeb } from '../../lib/utils/api';

const ShoppingCartSite = () => {
	const [filter, setFilter] = useState(FILTERS.default);
	const [cart, setCart] = useState([]);

	const filteredProducts = getFilteredProducts(PRODUCTS, filter);

	return (
		<>
			<Header />
			<section>
				<div className={styles['filter-box']}>
					<button
						className={`${styles.filter} ${
							filter === FILTERS.default ? styles['filter-active'] : ''
						}`}
						onClick={() => setFilter(FILTERS.default)}
					>
						Default
					</button>

					<button
						className={`${styles.filter} ${
							filter === FILTERS.name ? styles['filter-active'] : ''
						}`}
						onClick={() => setFilter(FILTERS.name)}
					>
						Name
					</button>

					<button
						className={`${styles.filter} ${
							filter === FILTERS.price ? styles['filter-active'] : ''
						}`}
						onClick={() => setFilter(FILTERS.price)}
					>
						Price
					</button>
				</div>
			</section>
			<main className={styles['main-container']}>
				<section>
					<article className={styles['gallery']}>
						{filteredProducts.map(product => (
							<ProductCard
								key={product.id}
								product={product}
								cart={cart}
								addToCart={() => addProduct(product, cart, setCart)}
								decreaseQuantity={() =>
									subtractamountOfProduct(product, cart, setCart)
								}
								increaseQuantity={() =>
									addamountOfProduct(product, cart, setCart)
								}
							/>
						))}
					</article>
				</section>
				<Cart
					product={PRODUCTS}
					cart={cart}
					deteleItem={product => removeProductInCart(product, cart, setCart)}
				/>
			</main>
		</>
	);
};

const loadProductItems = async () => {
	const data = await showProductInWeb();
	setMessages(data);
};

const getFilteredProducts = (products, filter) => {
	if (filter === FILTERS.name) {
		return [...products].sort((a, b) => a.name.localeCompare(b.name));
	}
	if (filter === FILTERS.price) {
		return [...products].sort((a, b) => a.price - b.price);
	}
	return products; // Default
};

const confirmProductInCart = (product, cart) => {
	return cart.find(item => item.id === product.id);
};

const addProduct = (product, cart, setCart) => {
	const existingProduct = confirmProductInCart(product, cart);

	if (!existingProduct) {
		setCart([...cart, { ...product, quantity: 1 }]);
		console.log('Carrito después de agregar el producto:', cart);
	}
};

const addamountOfProduct = (product, cart, setCart) => {
	const existingProduct = confirmProductInCart(product, cart);

	if (existingProduct) {
		setCart(
			cart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	}
	console.log('Carrito +:', cart);
};

const subtractamountOfProduct = (product, cart, setCart) => {
	const existingProduct = confirmProductInCart(product, cart);

	if (existingProduct) {
		setCart(
			cart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
			)
		);
		if (existingProduct.quantity <= 1) {
			setCart(cart.filter(item => item.id !== product.id));
		}
	}
	console.log('Carrito -:', cart);
};

const removeProductInCart = (product, cart, setCart) => {
	cart = cart.filter(item => item.id !== product.id);
	setCart(cart);
};
export default ShoppingCartSite;
