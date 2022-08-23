// @ts-ignore
import React, {useEffect, useState} from 'react';
import {ITrack} from "../types/track";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
// @ts-ignore
import styles from '../styles/trackItem.module.scss';
import Button from "./button";
import PlayPauseButton from "./playPauseButton";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface TrackItemProps {
    track: ITrack
}
let audio: HTMLAudioElement;

const TrackItem: React.FC<TrackItemProps> = ({track}) => {
    const router = useRouter()
    const {active, paused} = useTypedSelector(state => state.player)
    const {setTrack, playTrack, pauseTrack} = useActions()
    const play = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        if (active?._id !== track?._id) {
            setTrack(track)
        } else {
            if (paused) {
                playTrack();
            } else {
                pauseTrack()
            }
        }
    }

    return (
        <div key={track._id} onClick={() => router.push('/tracks/' + track._id)}>
            <div className={styles.track_item}>
                <PlayPauseButton paused={(active?._id === track?._id) ? paused : true} play={play}/>
                <img className={styles.track_image} width={45} height={45}
                     src={'http://localhost:5000/' + track.picture}/>
                <audio src={'http://localhost:5000/' + track.audio}>mlem</audio>
                <div className={styles.track_title}>
                    <b>{track.title} </b>
                    <i>{track.artist}</i>
                </div>
                <div style={{
                    flex: "1 1 auto",
                    textAlign: 'right',
                    paddingRight: 10,
                    alignItems: 'center',
                    display: "flex",
                    justifyContent: 'flex-end'
                }}>
                    <i style={{marginRight: 5}}> {track.comments.length}</i>
                    <img width={25} height={25} src={'https://cdn-icons-png.flaticon.com/512/25/25663.png'}/>
                    <i style={{marginRight: 5, marginLeft: 20}}> {track.listens}</i>
                    <img width={25} height={25} src={'https://static.thenounproject.com/png/21603-200.png'}/>
                </div>
            </div>
        </div>
    );
};

export default TrackItem;