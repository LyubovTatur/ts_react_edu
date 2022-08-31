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
import {siteSrc} from "../public/site-src";

interface StepWrapperProps {
    trackSaveRequest: any
}

const StepWrapper: React.FC<StepWrapperProps> = ({trackSaveRequest}) => {
    const [isInputsFull, setIsInputsFull] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const title = useInput('')
    const artist = useInput('')
    const lyrics = useInput('')
    const router = useRouter()
    const noPicFound = 'https://www.buhuslugi.by/wp-content/themes/consultix/images/no-image-found-360x250.png'
    useEffect(() => {
        console.log(picture)
    }, picture)
    const uploadTrack = () => {
        trackSaveRequest({
            title: title.value,
            artist: artist.value,
            lyrics: lyrics.value,
            audio,
            picture,
        })
        // const formData = new FormData()
        // formData.append('title',title.value)
        // formData.append('artist',artist.value)
        // formData.append('lyrics',lyrics.value)
        // formData.append('audio',audio)
        // formData.append('picture',picture)
        // axios.post(siteSrc+'tracks', formData)
        //     .then(resp=>router.push('/tracks'))
        //     .catch(e=>console.log(e))
    };

    const steps = [(
        <div style={{textAlign:'center'}}>
            <h2>Enter track info</h2>
            <Input style={{marginInline:"auto", marginBlock:10}}  {...title} type="text" placeholder='title'/>
            <Input style={{marginInline:"auto", marginBlock:10}}  {...artist} type="text" placeholder='artist'/>
            <Input style={{marginInline:"auto", marginBlock:10}}  {...lyrics} type="text" placeholder='lyrics'/>
        </div>), (
        <div style={{textAlign:'center'}}>
            <h2> Picture Uploading </h2>
            <FileUploader
                setFile={setPicture}
                accept={'image/*'}
            >
                <div><Button> Upload pic</Button></div>
                {picture ? <div style={{marginBlock:10}} ><TrackImageBig picture={URL.createObjectURL(picture)}/></div> : ''}
            </FileUploader>
        </div>), (
        <div style={{textAlign:'center'}} >
            <h2> Audio Uploading </h2>
            <FileUploader
                setFile={setAudio}
                accept={'audio/*'}
            >
                <div><Button> Upload audio</Button></div>
                {audio ? <div style={{marginBlock:5}}>
                    {audio.name}
                </div> : ''}

            </FileUploader>
        </div>
    ), (
        <>
            <div >
                <TrackInfoBlock  track={{
                    _id: String(Date.now()),
                    title: title.value,
                    artist: artist.value,
                    lyrics: lyrics.value,
                    audio: '',
                    picture:picture?(URL.createObjectURL(picture)):noPicFound,
                    comments: [],
                    listens: 0,
                }}/>
                <div style={{textAlign: 'right', margin: 30}}>
                    <Button  onClick={() => uploadTrack()}>Upload</Button>
                </div>
            </div>

        </>
    )]
    return (
        <div >
            {steps[activeStep]}
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Button>
                    <button disabled={activeStep === 0}
                            onClick={() => setActiveStep(prevState => prevState - 1)}>prev
                    </button>
                </Button>
                <Button>
                    <button disabled={activeStep === steps.length - 1}
                            onClick={() => setActiveStep(prevState => prevState + 1)}>next
                    </button>
                </Button>
            </div>
        </div>
    );
};

export default StepWrapper;