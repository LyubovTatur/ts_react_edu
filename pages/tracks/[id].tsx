// @ts-ignore
import React from 'react';
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";

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
            <img src={track.picture} width={300} height={300} alt=""/>
            <h1>{track.title}</h1>
            <ul>
                {track.comments.map(commItem => (
                    <li key={commItem._id}>{commItem.user} {commItem.text}</li>
                ))}
            </ul>
            <button onClick={() => router.push('/tracks')}>Back</button>
        </MainLayout>
    )
};

export default TrackPage;