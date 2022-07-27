import React, {useState} from 'react';
import kuromiHeartPic from "../../images/kuromi_heart.png";
import kuromiHelloPic from "../../images/kuromi_hello.png";
import './kuromi.scss'

const Kuromi = () => {
    const [kuromiSrc, setKuromiSrc] = useState(kuromiHeartPic)
    function toggleKuromi(){
        setKuromiSrc(prev=>prev===kuromiHelloPic?kuromiHeartPic:kuromiHelloPic)
    }
    return (

        <img src={kuromiSrc} alt="no pic" onMouseEnter={()=>toggleKuromi()} onMouseLeave={()=>toggleKuromi()}  id='kuromi'/>


    );
};

export default Kuromi;