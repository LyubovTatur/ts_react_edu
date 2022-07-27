import React, {useEffect, useState} from 'react';
import starPic from "../../images/star.png";
import './star.scss'

const Star = () => {
    const starAnimationDuration = 750;
    const [isAnimated, setIsAnimated] = useState('')
    function toggleIsAnimated(){
        setIsAnimated(prev=>!prev?'animated':'')
    }
    function startStarAnimation(){
        toggleIsAnimated()
        setTimeout(()=>toggleIsAnimated(),starAnimationDuration)
    }


    return (
        <img src={starPic} alt="star" onMouseEnter={()=> {
            startStarAnimation()
        }} className={isAnimated} id='star'/>
    );
};

export default Star;