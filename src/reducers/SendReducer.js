import * as actions from "../actions/SendAction"

const initState = {
    answerText:""
}

export default function SendReducer(state = initState, action){
    const {type, data} = action;
    switch(type){
        case actions.RECEIVE_ANSWER:{
            return {
                ...state,
                answerText:data
            };
        }
        default:
            return state;
    }
}