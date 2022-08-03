// @ts-ignore
import React from 'react';
import styles from '../styles/trackProgress.module.scss'

interface TrackProgressProps {
    left: number;
    right: number;
    // @ts-ignore
    onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({left, right, onChange}) => {
    return (
        <>
            <input className={styles.input} id="range" type="range" onChange={onChange} min={0} max={right}
                   value={left}/>
            <div>{left} / {right}</div>
        </>
    );
};

export default TrackProgress;