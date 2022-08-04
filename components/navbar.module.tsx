// @ts-ignore
import React from 'react';
import {useRouter} from "next/router";
import styles from '../styles/navbar.module.scss'
import Button from "./button";

const Navbar = () => {
    const menuItems = [
        {text: 'track list', href: '/tracks'},
        {text: 'upload track', href: '/tracks/create'},
        {text: 'album list', href: '/albums'},
    ]
    const router = useRouter()
    return (
        <div className={styles.navbar}>
            {menuItems.map(({text, href}, index) => (
                <Button key={href} onClick={() => router.push(href)}>
                    <div className={styles.menu_item}>{text}</div>
                </Button>
            ))}
        </div>
    );
};

export default Navbar;