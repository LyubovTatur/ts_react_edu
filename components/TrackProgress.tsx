// @ts-ignore
import React from 'react';
import styles from '../styles/trackProgress.module.scss'

interface TrackProgressProps {
    left: number;
    right: number;
    width:number|null;
    // @ts-ignore
    onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange, width}) => {
    return (
        <div className={styles.track_progress}>
            <input style={{width:width+'%'}} className={styles.input} id="range" type="range" onChange={onChange} min={0} max={right}
                   value={left}/>
            <div style={{fontSize:13}}>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;