import React from 'react';
import Button from "./button";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface PlayPauseButtonProps {
    paused:boolean,
    play:any
}

const PlayPauseButton:React.FC<PlayPauseButtonProps> = ({paused, play}) => {
    // const {paused, active, volume, duration, currentTime} = useTypedSelector(state => state.player)

    return (
        <Button onClick={play}>
            <img width={15} height={15}
                 src={paused ?
                     "https://icon-library.com/images/white-play-icon-png/white-play-icon-png-27.jpg"
                     : 'https://smallimg.pngkey.com/png/small/5-51822_music-pause-button-pair-of-lines-comments-music.png'}/>
        </Button>
    );
};

export default PlayPauseButton;