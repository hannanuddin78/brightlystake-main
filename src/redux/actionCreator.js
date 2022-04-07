import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';




export const moonbeamLoading = () => ({
    type:actionTypes.MOOMBEAM_LOADING
})

export const loadCollator = collators => ({
    type:actionTypes.LOAD_COLLATOR,
    payload:collators,
})

export const fetchMoonBeam =() => {
    return dispatch => {  
        axios.get('https://moonbeam.brightlystake.com/api/moonbeam/getCollatorDetails')
            .then(response => response.data)
            .then(collators => dispatch(loadCollator(collators.data)))
    }
}


export const moonreverLoading = () => ({
    type:actionTypes.MOONREVER_LOADING
})

export const moonreverCollator = moonrivers => ({
    type:actionTypes.LOAD_MOONREVER,
    payload:moonrivers
})


export const fetchMoonRever =() => {
    return dispatch => {
        axios.get('https://moonbeam.brightlystake.com/api/moonriver/getCollatorDetails')
            .then(response => response.data)
            // .then(collators => console.log(collators))
            .then(collators => dispatch(loadCollator(collators.data)))
    }
}

export const delegatorloading = () => ({
    type:actionTypes.MOOMBEAM_LOADING
})

export const loadDelegator = collators => ({
    type:actionTypes.LOAD_SEARCH,
    payload:collators,
})
export const loadSearchMoonRiver = collators => ({
    type:actionTypes.LOAD_SEARCH_MOONRIVER,
    payload:collators,
})


export const fetchDelegator =(delegatorAddress) => {
    return dispatch => {
console.log(delegatorAddress);
        axios.get('https://moonbeam.brightlystake.com/api/moonbeam/getDelegatorRank/'+delegatorAddress)

            .then(response => response.data)
            .then(collators => dispatch(loadDelegator(collators.data)))
    
        axios.get('https://moonbeam.brightlystake.com/api/moonriver/getDelegatorRank/'+delegatorAddress)

            .then(response => response.data)
            .then(collators => dispatch(loadSearchMoonRiver(collators.data)));
    }
}





