// @ts-ignore
import React from 'react';
// @ts-ignore

import styles from '../styles/player.module.scss';
import TrackProgress from "./TrackProgress";

const Player = () => {
    const track = {
        _id: '1',
        title: 'track 1',
        artist: 'art 1',
        lyrics: 'lyr 1',
        listens: 2,
        audio: 'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3',
        comments: [
            {_id: '1', user: 'sssaaaaa', text: 'mlem melm emlmelemleml emleml'},
            {_id: '2', user: 'dgr', text: 'lsd;akj slkjdhAK SJDH askjhd a'},
            {_id: '3', user: 'eda', text: 'lorem1fdjs'},
        ],
        picture: 'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'
    };
    const active = false;
    return (
        <div className={styles.player}>
            <h3>
                {String(active)}
            </h3>
            <h1>{track.title}</h1>
            <h2>{track.artist}</h2>
            <TrackProgress left={0} right={100} onChange={()=>{}}/>
            <TrackProgress left={0} right={100} onChange={()=>{}}/>
        </div>
    );
};

export default Player;