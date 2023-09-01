export const authReducer = async (state = { data: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.newdata }));

      return { ...state, ...action?.newdata };

    default:
      return state;
  }
};
