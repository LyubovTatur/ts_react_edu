import React from 'react';
import styles from '../styles/input.module.scss'

const Input = (children) => {
    return (
        <input className={styles.input} {...children}/>
    );
};

export default Input;