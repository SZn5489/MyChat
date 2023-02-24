import { axios_instance } from "../utils/axios_instance";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export function sendToChatGPT(userPrompt){
    return async (dispatch) => {
        let url = "/api"
        try{
            const res = await axios_instance.post(
                url,
                {
                    prompt:userPrompt,
                    max_tokens:2048,
                    model:"text-davinci-003"
                },
                {
                    headers:{
                        authorization:"Bearer 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"
                    }
                } 
            );
            if(res.status === 200){
                dispatch({type: RECEIVE_ANSWER, data: res.data.choices[0].text})
            }else{
                dispatch({type: RECEIVE_ANSWER, data: "some error occured!"})
            }
            
        }catch{
            dispatch({type: RECEIVE_ANSWER, data: "some error occured!"})
        }
    }
    
}
