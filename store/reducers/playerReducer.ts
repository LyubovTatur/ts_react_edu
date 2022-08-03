import {PlayerAction, PlayerActionTypes, PlayerState} from "../../types/player";
import {ITrack} from "../../types/track";

const initialState: PlayerState = {
    active: null,
    volume: 100,
    duration: 0,
    currentTime: 0,
    paused: true,

}

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
    switch (action.type) {

        case PlayerActionTypes.PLAY:
            return {...state, paused: false}

        case PlayerActionTypes.PAUSE:
            return {...state, paused: true}

        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, currentTime:0, duration:0}

        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}

        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}

        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}


        default:
            return state;
    }
}