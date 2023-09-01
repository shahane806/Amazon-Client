
const userReducer = async (state={},action) => {
  switch(action.type){
    case 'GET_USER_INFO' :
        return {...state,...action}
    default : return state 
  }
}

export default userReducer
