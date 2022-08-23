// @ts-ignore
import React, {useEffect, useState} from 'react';
import FileUploader from "./FileUploader";
import {useInput} from "../hooks/useInput";
import TrackShowPage from "./TrackShowPage";
import TrackInfoBlock from "./TrackInfoBlock";
import Button from "./button";
import axios from "axios";
import {useRouter} from "next/router";
import Input from "./Input";
import TrackImageBig from "./TrackImageBig";


const StepWrapper = () => {
    const [isInputsFull, setIsInputsFull] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const title = useInput('')
    const artist = useInput('')
    const lyrics = useInput('')
    const router = useRouter()
    useEffect(() => {
        console.log(picture)
    }, picture)
    const uploadTrack = () => {
        const formData = new FormData()
        formData.append('title',title.value)
        formData.append('artist',artist.value)
        formData.append('lyrics',lyrics.value)
        formData.append('audio',audio)
        formData.append('picture',picture)
        axios.post('http://localhost:5000/tracks', formData)
            .then(resp=>router.push('/tracks'))
            .catch(e=>console.log(e))
    };
    const steps = [(
        <h2>
            Enter track info
            <Input {...title} type="text" placeholder='title'/>
            <Input {...artist} type="text" placeholder='artist'/>
            <Input {...lyrics} type="text" placeholder='lyrics' />
        </h2>), (
        <h2>
            Picture Uploading
            <FileUploader
                setFile={setPicture}
                accept={'image/*'}
            >
                <div><Button> Upload pic</Button></div>
                {picture?  <div><TrackImageBig picture={URL.createObjectURL(picture)}/></div>:''}
            </FileUploader>
        </h2>), (
        <h2>
            Audio Uploading
            <FileUploader
                setFile={setAudio}
                accept={'audio/*'}
            >
                <div><Button> Upload audio</Button></div>
                {picture?  <div>
                    <audio src=""></audio></div>:''}

            </FileUploader>
        </h2>
    ), (
        <div>
            <TrackInfoBlock track={{
                _id: String(Date.now()),
                title: title.value,
                artist: artist.value,
                lyrics: lyrics.value,
                audio: '',
                picture: (picture && URL.createObjectURL(picture)),
                comments: [],
                listens: 0,
            }}/>
            <div style={{textAlign: 'right', margin: 30}} onClick={() => uploadTrack()}>
                <Button>Upload</Button>
            </div>
        </div>
    )]
    return (
        <div style={{margin:'auto', textAlign:'center'}}>
            {steps[activeStep]}
            <button disabled={activeStep === 0} onClick={() => setActiveStep(prevState => prevState - 1)}>prev</button>
            <button disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(prevState => prevState + 1)}>next
            </button>
        </div>
    );
};

export default StepWrapper;