// @ts-ignore
import React from 'react';
import MainLayout from "../../components/MainLayout";
import StepWrapper from "../../components/stepWrapper";
import axios from "axios";
import {siteSrc} from "../../public/site-src";
import {useRouter} from "next/router";

const Create = () => {
    const router = useRouter()
    const uploadTrack = (track) => {
        const formData = new FormData()
        formData.append('title',track.title)
        formData.append('artist',track.artist)
        formData.append('lyrics',track.lyrics)
        formData.append('audio',track.audio)
        formData.append('picture',track.picture)
        axios.post(siteSrc+'tracks', formData)
            .then(resp=>router.push('/tracks'))
            .catch(e=>console.log(e))
    };
    return (
        <MainLayout>
            <StepWrapper trackSaveRequest={uploadTrack}/>
        </MainLayout>
    );
};

export default Create;