import styles from "./header.module.css"

const Header = () => {
   return <section className={styles["header-container"]}>
    <img src="/assets/illustration-empty-cart.svg" alt="shop logo" className={styles["logo"]}/>
   <h1 className={styles["h1"]}>Desserts Shop</h1>
    </section>
}

export default Header