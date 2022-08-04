// @ts-ignore
import React from 'react';
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import styles from '../../styles/id_track_page.module.scss'
import Button from "../../components/button";

const TrackPage = () => {
    const router = useRouter()
    const track = {
        _id: '1',
        title: 'track 1',
        artist: 'art 1',
        lyrics: 'da;sdlk ;sldkas ksldka sdlka;sdlk as;ldka;sld a;lsd ka;lskdsla; k a a;lkss;lkadaksd;la sk ;lsakdals;dk a;ls ka;lskd a;lsdk;als d;alsdk ;alsdk ;asld;aslkdka ;sldk a;sl',
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
                <div className={styles.track_info_block}>
                    <div>
                        <div className={styles.track_info}>
                            <div>{track.title} - <i>{track.artist}</i></div>

                        </div>
                        <div className={styles.lyrics}>{track.lyrics}</div>
                    </div>
                    <img className={styles.track_image_info}
                         src={track.picture} width={300}
                         height={300} alt=""/>
                </div>
                <div className={styles.track_info_block} style={{justifyContent: 'center'}}>
                    <h1 className={styles.track_info} style={{textAlign: 'center', fontSize: 40}}>Comments</h1>
                </div>
                <div className={styles.comment_section}>
                    {track.comments.map(commItem => (
                        <div className={styles.comment} key={commItem._id}><i>{commItem.user}</i>: {commItem.text}</div>
                    ))}
                </div>
            </div>
            <div>
                <Button onClick={() => router.push('/tracks')}>
                    <div className={styles.back_btn}>back</div>
                </Button>
            </div>

        </MainLayout>
    )
};

export default TrackPage;