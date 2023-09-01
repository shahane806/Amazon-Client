import * as API from "../apis";

export const signup = (data, navigate) => async (dispatch) => {
  try {
    const newData = await API.SignUp(data);
    const newdata = newData?.data;
    dispatch({ type: "AUTH", newdata });

    navigate("/Auth");
  } catch (error) {
    console.log(error);
  }
};
export const login = (data, navigate) => async (dispatch) => {
  try {
    const newData = await API.Login(data);

    const newdata = newData?.data;
    dispatch({ type: "AUTH", newdata });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const forgetpassword = (data, navigate) => async (dispatch) => {};
