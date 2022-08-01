import React, {useEffect, useState} from 'react';
// @ts-ignore
import styles from '../styles/star.module.scss'
import Image from 'next/image';
// @ts-ignore
import starPic from "../public/images/star.png";

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
        <Image  src={starPic} alt="star" width={50} height={50} onMouseEnter={()=> {
            if (!isAnimated) startStarAnimation()
        }} className={isAnimated?styles.animated:''} id='star'/>
    );
};

export default Star;