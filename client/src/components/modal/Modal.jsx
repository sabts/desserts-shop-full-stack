import styles from './modal.module.css';

const Modal = ({ children }) => {
	if (!children) return;

	return <div styles={styles['modalPosition']}>{children}</div>;
};

export default Modal;
