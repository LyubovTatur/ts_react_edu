import React from 'react';
// @ts-ignore
import styles from '../styles/footer.module.scss'
import Star from "./star";
// @ts-ignore
import angryEatingkuromi from '../public/images/angry_eating_kuromi.gif';

const Footer = () => {
    return (
        <div className={styles.footer}>
            {(Array.from({length:18})).map((_,i)=>{
                return(
                    <Star key={i}/>
                )
            })}
            <img src={angryEatingkuromi} width={100}  alt=""/>
            {(Array.from({length:18})).map((_,i)=>{
                return(
                    <Star key={i}/>
                )
            })}
        </div>
    );
};

export default Footer;