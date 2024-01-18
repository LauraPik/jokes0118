

const TodoReducer = (state, action)=>{
    switch(action.type){
        case "Set search":
            return{
                ...state,
                tasks:[...state.tasks, action.payload]
            }
            default:
                return state;

        }

    }

export default TodoReducer