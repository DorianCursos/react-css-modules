import styles from './button.module.css';

const Button = ({ color, children }) => {
	const buttonStyles = `${styles.button} ${styles[color]}`;
	return <button className={buttonStyles}>{children}</button>;
};

// class='button button-red'
// class='button button-blue'

export default Button;
