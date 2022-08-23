import {Dispatch} from "react";
import {TrackAction, TrackActionTypes} from "../../types/track";
import axios from "axios";
import {siteSrc} from "../../public/site-src";

export const fetchTracks = () =>{
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get(siteSrc+'tracks')
            dispatch({type:TrackActionTypes.FETCH_TRACKS, payload:response.data})
        }
        catch (e){
            dispatch({type:TrackActionTypes.FETCH_TRACKS_ERROR, payload:('Error while tracks uploading: '+e)})
        }
    }
}