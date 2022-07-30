import React from 'react';
import './footer.scss'
import Star from "../star/star";
import angryEatingkuromi from '../../images/angry_eating_kuromi.gif'

const Footer = () => {
    return (
        <div className='footer'>
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