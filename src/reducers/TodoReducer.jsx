import { SEARCH } from "../action/actionNames";

const TodoReducer = (state, action)=>{
    switch(action.type){
        case SEARCH:
            return{
                ...state,
                tasks:[...state.tasks, action.payload],
                query:""
            }
            default:
                return state;

        }

    }

export default TodoReducer