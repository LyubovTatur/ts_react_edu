// @ts-ignore
import React from 'react';
import {ITrack} from "../types/track";
import Image from "next/image";
import TrackItem from "./TrackItem.module";
import {useActions} from "../hooks/useActions";

interface TrackListProps{
    tracks:ITrack[]
}

const TrackList:React.FC<TrackListProps> = ({tracks}) => {
    // const  = useActions()
    return (
        <ul style={{display:'flex', flexDirection:'column', padding:0}} >
            {tracks.map(track=>(
                <TrackItem track={track} deleteFromList={()=>{}}/>
            ))}
        </ul>
    );
};

export default TrackList;