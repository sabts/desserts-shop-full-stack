import styles from './modal.module.css';

const Modal = ({ children }) => {
	if (!children) return;

	return <div style={styles['modalPosition']}>{children}</div>;
};

export default Modal;
