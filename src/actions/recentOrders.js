import * as API from "../apis";

export const fetchRecentOrders = (data) => async (dispatch) => {
  //fetch all Recent Orders
  //data is userid
  try {
    console.log(data)
    const  RecentOrders  = await API.FetchRecentOrders(data);
    console.log(RecentOrders?.data?.RecentOrders)
    dispatch({ type: "FETCH_RECENT_ORDERS", RecentOrders: RecentOrders });
  } catch (error) {
    console.log(error);
  }
};
export const updateRecentOrders = (data) => async (dispatch) => {
  try {
    const { RecentOrders } = await API.UpdateRecentOrders(data);
    dispatch({ type: "UPDATE_RECENT_ORDERS", RecentOrders: RecentOrders });
  } catch (error) {
    console.log(error);
  }
};
