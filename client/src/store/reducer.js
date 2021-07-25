

const initialstate={
    user: {
        id: "",
        name:"",

    }
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return {
                ...state,
                user:{
                    ...state.user,
                    id: action.id
                }
               
            }
        case 'USER_NAME':
            return {
                ...state,
                user:{
                    ...state.user,
                    name:action.name
                }
            }

        default:
            return state;
    }
}

export default reducer;