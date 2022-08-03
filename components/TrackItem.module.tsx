// @ts-ignore
import React from 'react';
import {ITrack} from "../types/track";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";

const TrackItem = ({track}) => {
    const router = useRouter()
    const {setTrack, playTrack, pauseTrack} = useActions()

    const play = (e:React.ChangeEvent<HTMLInputElement>) =>{
        e.stopPropagation()
        setTrack(track)
    }
    return (
        <li key={track._id} onClick={() => router.push('/tracks/' + track._id)}>
            <button onClick={play}>play</button>
            <img width={50} height={50} src={track.picture}/>
            <audio src={track.audio}>mlem</audio>
            <p>{track.title}</p>
            <p>{track.artist}</p>
        </li>
    );
};

export default TrackItem;