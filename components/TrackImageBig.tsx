import React from 'react';
import styles from '../styles/track_image_big.module.scss'
const TrackImageBig = ({picture}) => {
    return (
        <img className={styles.track_image_info}
             src={picture} width={300}
             height={300} alt=""/>
    );
};

export default TrackImageBig;