// @ts-ignore
import React, {useState} from 'react';
import MainLayout from "../../components/MainLayout";
import {useRouter} from "next/router";
import Button from "../../components/button";
import TrackShowPage from "../../components/TrackShowPage";
import axios from "axios";
import {GetServerSideProps} from "next";

const TrackPage = ({serverTrack}) => {
    const [track,setTrack] = useState(serverTrack)
    return (
        <MainLayout>
            <TrackShowPage track={track}/>

        </MainLayout>
    )
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({params})=>{
    const response = await axios.get('http://localhost:5000/tracks/' +params.id)
    return {
        props:{
            serverTrack:response.data
        }
    }
}