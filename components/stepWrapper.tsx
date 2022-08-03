// @ts-ignore
import React, {useEffect, useState} from 'react';
import FileUploader from "./FileUploader";


const StepWrapper = () => {
    const [isInputsFull, setIsInputsFull] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const steps = [(
        <h2>
            track info
            <input type="text" placeholder='title'/>
            <input type="text" placeholder='artist'/>
            <input type="text" placeholder='lyrics'/>
        </h2>), (
        <h2>
            Picture Uploading
            <FileUploader
                setFile={setPicture}
                accept={'image/*'}
            >
                <button>Upload pic</button>
            </FileUploader>
        </h2>), (
        <h2>
            Audio Uploading
            <FileUploader
                setFile={setAudio}
                accept={'audio/*'}
            >
                <button>Upload audio</button>
            </FileUploader>
        </h2>
    )]
    return (
        <div>
            {steps[activeStep]}
            <button disabled={activeStep === 0} onClick={() => setActiveStep(prevState => prevState - 1)}>prev</button>
            <button disabled={activeStep === steps.length - 1}
                    onClick={() => setActiveStep(prevState => prevState + 1)}>next
            </button>
        </div>
    );
};

export default StepWrapper;