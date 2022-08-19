// @ts-ignore
import React from 'react';
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import Button from "../../components/button";
import TrackShowPage from "../../components/TrackShowPage";
import axios from "axios";

const TrackPage = () => {
    return (
        <MainLayout>
            <TrackShowPage track={track}/>

        </MainLayout>
    )
};

export default TrackPage;