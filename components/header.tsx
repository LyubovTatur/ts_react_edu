import React from 'react';

import Star from './star';
import Kuromi from './kuromi';
// @ts-ignore
import styles from '../styles/header.module.scss';
import Player from "./Player";
import Navbar from "./navbar.module";

const Header = () => {

    return (
        <header className={styles.header}>

            <Kuromi/>
            <Player/>
            <Navbar/>
             
            {/*<div className={styles.stars}>*/}
            {/*    {(Array.from({length: 5})).map((_, i)=>(*/}
            {/*        <Star key={i}/>*/}
            {/*        )*/}
            {/*    )}*/}
            {/*</div>*/}
        </header>
    );
};

export default Header;