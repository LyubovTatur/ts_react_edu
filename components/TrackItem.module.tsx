// @ts-ignore
import React from 'react';
import {ITrack} from "../types/track";
import {useRouter} from "next/router";

const TrackItem = ({track}) => {
    const router = useRouter()
    return (
        <li key={track._id} onClick={() => router.push('/tracks/' + track._id)}>
            <img width={50} height={50} src={track.picture}/>
            <audio src={track.audio}>mlem</audio>
            <p>{track.title}</p>
            <p>{track.artist}</p>
        </li>
    );
};

export default TrackItem;