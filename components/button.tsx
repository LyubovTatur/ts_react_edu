import React from 'react';
// @ts-ignore
import styles from '../styles/button.module.scss'

const Button = () => {
    return (
        <button className={styles.Pushable} role="button">
            <span className={styles.Shadow}></span>
            <span className={styles.Edge}></span>
            <span className={styles.Front}>
                Button 82
            </span>
        </button>
    );
};

export default Button;