// @ts-ignore
import React from 'react';
import {ITrack} from "../types/track";
import Image from "next/image";
import TrackItem from "./TrackItem.module";

interface TrackListProps{
    tracks:ITrack[]
}

const TrackList:React.FC<TrackListProps> = ({tracks}) => {
    return (
        <ul>
            {tracks.map(track=>(
                <TrackItem track={track}/>
            ))}
        </ul>
    );
};

export default TrackList;