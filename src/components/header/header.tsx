import React from 'react';

import Star from '../star/star';
import Kuromi from '../kuromi/kuromi';
import './header.scss'
const Header = () => {

    return (
        <header>
            <Kuromi/>
            <div className="stars">
                {(Array.from({length: 5})).map((_, i)=>(
                    <Star key={i}/>
                    )
                )}
            </div>
        </header>
    );
};

export default Header;