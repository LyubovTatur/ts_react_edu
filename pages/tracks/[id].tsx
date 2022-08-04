// @ts-ignore
import React from 'react';
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import styles from '../../styles/id_track_page.module.scss'

const TrackPage = () => {
    const router = useRouter()
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
    return (
        <MainLayout>
            <div style={{padding: 30, display: "flex", flexDirection: 'column'}}>
                <div  className={styles.track_info_block}>
                    <h1 className={styles.track_info} >{track.title}</h1>
                    <img className={styles.track_image_info}
                         src={track.picture} width={300}
                         height={300} alt=""/>
                </div>
                <ul>
                    {track.comments.map(commItem => (
                        <li key={commItem._id}>{commItem.user} {commItem.text}</li>
                    ))}
                </ul>
                <button onClick={() => router.push('/tracks')}>Back</button>
            </div>
        </MainLayout>
    )
};

export default TrackPage;