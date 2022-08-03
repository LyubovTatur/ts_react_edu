// @ts-ignore
import React, {useEffect} from 'react';
// @ts-ignore

import styles from '../styles/player.module.scss';
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Button from "./button";

let audio: HTMLAudioElement;

const Player = () => {
    // const track = {
    //     _id: '1',
    //     title: 'track 1',
    //     artist: 'art 1',
    //     lyrics: 'lyr 1',
    //     listens: 2,
    //     audio: 'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3',
    //     comments: [
    //         {_id: '1', user: 'sssaaaaa', text: 'mlem melm emlmelemleml emleml'},
    //         {_id: '2', user: 'dgr', text: 'lsd;akj slkjdhAK SJDH askjhd a'},
    //         {_id: '3', user: 'eda', text: 'lorem1fdjs'},
    //     ],
    //     picture: 'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'
    // };
    const {paused, active, volume, duration, currentTime} = useTypedSelector(state => state.player)
    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()

        }

    }, [active])
    const {pauseTrack, playTrack, setTrackVolume, setTrackDuration, setTrackCurrentTime} = useActions()
    const setAudio = () => {
        if (active) {
            audio.src = active.audio
            audio.onloadedmetadata = () => {
                setTrackDuration(Math.ceil(audio.duration))
                play()
            }
            audio.ontimeupdate = () => {
                setTrackCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }
    const play = () => {
        if (paused) {
            playTrack();
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrackVolume(Number(e.target.value))
        audio.volume = Number(e.target.value) / 100
    }
    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTrackCurrentTime(Number(e.target.value))
        audio.currentTime = Number(e.target.value)
    }


    return (
        <div className={styles.player}>
            <h3>
                {String(active)}
            </h3>
            <h1>{active?.title}</h1>
            <h2>{active?.artist}</h2>
            <Button onClick={play}>
                <img width={15} height={15}
                     src={paused ?
                         "https://icon-library.com/images/white-play-icon-png/white-play-icon-png-27.jpg"
                         : 'https://smallimg.pngkey.com/png/small/5-51822_music-pause-button-pair-of-lines-comments-music.png'}/>
            </Button>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;