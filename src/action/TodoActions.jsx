import { SEARCH } from "./actionNames"


export const search=(data)=>{
    return{
        type:SEARCH,
        payload: data
    }
}