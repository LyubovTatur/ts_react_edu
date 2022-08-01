// @ts-ignore
import React from 'react';
import {useRouter} from "next/router";

const Navbar = () => {
    const menuItems = [
        {text: 'Main', href: '/'},
        {text: 'Track list', href: '/tracks'},
        {text: 'Album list', href: '/albums'},
    ]
    const router = useRouter()
    return (
        <ul className='navbar'>
            {menuItems.map(({text, href}, index) => (
                <li key={href} onClick={() => router.push(href)}>{text}</li>
            ))}
        </ul>
    );
};

export default Navbar;