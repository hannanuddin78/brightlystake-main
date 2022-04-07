import * as actionType from './actionTypes';

export const reducer = (state ={ isLoading: false, collators:[],loadSearchMoonRiver:[],delegatorAddress:[],moonrevers:[], errMess: null }, action) => {
    switch(action.type){

        case actionType.MOOMBEAM_LOADING:
            return{
                ...state,
                isLoading: true,
                errMess:null,
            }

            case actionType.LOAD_COLLATOR:
                let collators = [];
            for (let key in action.payload) {
                collators.push({
                    ...action.payload[key],
                    id: key,

                })
            }
            return {
                ...state,
                collators: collators,
                delegatorAddress: [],
                loadSearchMoonRiver: [],
            }
                case actionType.MOOMBEAM_FAIL:
                return{
                    ...state,
                    isLoading:false,
                    errMess:action.payload,
                    collators:[],
                    delegatorAddress:[],
                    loadSearchMoonRiver:[],
                }
            
            // moonrever
            case actionType.LOAD_MOONREVER:
                let moonrevers = [];
            for (let key in action.payload) {
                moonrevers.push({
                    ...action.payload[key],
                    id: key,

                })
            }
            return {
                ...state,
                moonrevers: moonrevers,
                collators:[],
                delegatorAddress:[],
                loadSearchMoonRiver:[],
            }



            // deletgation 
            case actionType.LOAD_SEARCH:
                let delegatorAddress = [];
            for (let key in action.payload) {
                delegatorAddress.push({
                    ...action.payload[key],
                    id: key,

                })
            }
            return {
                ...state,
                delegatorAddress: delegatorAddress,
            }
            case actionType.LOAD_SEARCH_MOONRIVER:
                let loadSearchMoonRiver = [];
            for (let key in action.payload) {
                loadSearchMoonRiver.push({
                    ...action.payload[key],
                    id: key,

                })
            }
            return {
                ...state,
                loadSearchMoonRiver: loadSearchMoonRiver,
            }
    
           default:
               return state;

        }

}