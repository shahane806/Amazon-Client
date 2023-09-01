const user = (data) =>{
    return {
        type:"GET_USER_INFO",
        User : data,
    }
}
export default user