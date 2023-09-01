import * as API from "../apis";

export const profile = (data) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "SET_PROFILE", profile: data?.profile });
    await API.SetProfile(data?.profile);
  } catch (error) {
    console.log(error);
  }
};
export const getUpdatedProfile = (data) => async (dispatch) => {
  try {
    console.log(data);
    const updatedProfile = await API.GetUpdatedProfile(data);
    dispatch({ type: "UPDATED_PROFILE", profile: updatedProfile });
  } catch (error) {
    console.log(error);
  }
};
