const profileReducer = async (state = { profile: null }, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_PROFILE":
      return { ...state, ...action };
    case "UPDATED_PROFILE":
      return { ...state, ...action };

    default:
      return state;
  }
};
export default profileReducer;
