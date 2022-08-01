// @ts-ignore
import React from 'react';
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList.module";

const Index = () => {
    const router = useRouter()
    const tracks : ITrack[] = [
        {_id:'1',title:'track 1', artist:'art 1', lyrics:'lyr 1', listens:2, audio:'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3', comments:[], picture:'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'},
        {_id:'2',title:'track 2', artist:'art 2', lyrics:'lyr 2', listens:2, audio:'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3', comments:[], picture:'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'},
        {_id:'3',title:'track 3', artist:'art 3', lyrics:'lyr 3', listens:2, audio:'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3', comments:[], picture:'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'},
        {_id:'4',title:'track 4', artist:'art 4', lyrics:'lyr 4', listens:2, audio:'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3', comments:[], picture:'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'},
        {_id:'5',title:'track 5', artist:'art 5', lyrics:'lyr 5', listens:2, audio:'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3', comments:[], picture:'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'},
        {_id:'6',title:'track 6', artist:'art 6', lyrics:'lyr 6', listens:2, audio:'http://localhost:5000/audio/fb726993-7358-498a-91f7-eebf0dd2b11f.mp3', comments:[], picture:'http://localhost:5000/image/ea290e0b-f955-4bb0-a507-5ec129ff03f5.jpg'},
    ]
    return (
        <MainLayout>
            <h1>Track List</h1>
            <TrackList tracks={tracks}/>
            <button onClick={()=>router.push('/tracks/create')}>Upload track</button>
        </MainLayout>
    );
};

export default Index;