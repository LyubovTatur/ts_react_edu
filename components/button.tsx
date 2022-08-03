import React from 'react';
// @ts-ignore
import styles from '../styles/button_2.module.scss'
// @ts-ignore
const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick} className={styles.button} role="button">
            {children}
        </button>
    );
};

export default Button;

