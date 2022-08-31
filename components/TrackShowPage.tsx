import React, {useState} from 'react';
import Button from "./button";
import styles from '../styles/id_track_page.module.scss'
import {ITrack} from "../types/track";
import {useRouter} from "next/router";
import TrackInfoBlock from "./TrackInfoBlock";
import axios from "axios";

import {siteSrc} from "../public/site-src";
interface TrackShowPageProps {
    track: ITrack
}

const TrackShowPage: React.FC<TrackShowPageProps> = ({track}) => {
    const router = useRouter()

    return (
        <div>
            <TrackInfoBlock track={{...track, picture : siteSrc + track.picture}}/>
            <div>
                <Button onClick={() => router.push('/tracks')}>
                    <div className={styles.back_btn}>back</div>
                </Button>
            </div>
        </div>
    );
};

export default TrackShowPage;