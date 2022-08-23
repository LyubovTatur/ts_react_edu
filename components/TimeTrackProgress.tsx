// @ts-ignore
import React from 'react';
// @ts-ignore
import styles from '../styles/trackProgress.module.scss'

interface TrackProgressProps {
    left: number;
    right: number;
    width:number|null;
    // @ts-ignore
    onChange: (e) => void;
}
const TimeTrackProgress:React.FC<TrackProgressProps> = ({left, right, onChange, width}) => {
    return (
        <div className={styles.track_progress}>
            <input style={{width:width+'%'}} className={styles.input} id="range" type="range" onChange={onChange} min={0} max={right}
                   value={left}/>
            <div style={{fontSize:13}}>{Math.floor(left/60)}.{left%60<10?'0'+left%60:left%60} / {Math.floor(right/60)}.{right%60<10?'0'+right%60:right%60}</div>
        </div>
    );
};

export default TimeTrackProgress;