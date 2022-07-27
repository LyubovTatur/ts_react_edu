import React from 'react';
import starPic from "../../images/star.png";
import './star.scss'

const Star = () => {
    return (
        <img src={starPic} alt="star" className='animated' id='star'/>
    );
};

export default Star;