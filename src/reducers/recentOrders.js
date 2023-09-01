export const recentOrdersReducer = async (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case "FETCH_RECENT_ORDERS": {
    return {...state, ...action};
    }
    case "UPDATE_RECENT_ORDERS":
      return {...state, ...action};
    default:
      return state;
  }
};
