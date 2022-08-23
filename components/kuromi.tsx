import React, {useState} from 'react';
import Image from 'next/image';
// @ts-ignore
import kuromiHeartPic from "../public/images/kuromi_heart.png";
// @ts-ignore
import kuromiHelloPic from "../public/images/kuromi_hello.png";
// @ts-ignore
import styles from '../styles/kuromi.module.scss'

const Kuromi = () => {
    const [kuromiSrc, setKuromiSrc] = useState(kuromiHeartPic)

    function toggleKuromi() {
// @ts-ignore
        setKuromiSrc(prev => prev === kuromiHelloPic ? kuromiHeartPic : kuromiHelloPic)
    }

    return (
        <>
            <img className={styles.kuromi_left}  width={200} height={200} src={kuromiSrc.src} alt="no pic"
                 onMouseEnter={() => toggleKuromi()} onMouseLeave={() => toggleKuromi()} id='kuromi'/>

            <img className={styles.kuromi_right}  width={200} height={200} src={kuromiSrc.src} alt="no pic"
                 onMouseEnter={() => toggleKuromi()} onMouseLeave={() => toggleKuromi()} id='kuromi'/>
        </>

    );
};

export default Kuromi;