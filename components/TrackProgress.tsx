// @ts-ignore
import React from 'react';

interface TrackProgressProps{
    left:number;
    right: number;
    onChange:(e)=>void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({left,right,onChange}) => {
    return (
        <div >
            <input type="range" onChange={onChange} min={0} max={right} value={left}/>
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;