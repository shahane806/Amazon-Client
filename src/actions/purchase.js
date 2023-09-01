import * as API from "../apis";
const purchase = (data) => async (dispatch)=>{
    try{
        const cl = await API.PurchaseItems(data);
        const clientSecret = cl?.data?.clientSecret;
        dispatch({type:"PURCHASE_ITEMS",payload: {data,clientSecret}});
    }
    catch(error){
        console.log(error)
    }
}

export default purchase;