export const purchaseItemsReducer = async (state = { data: null }, action) => {
  switch (action.type) {
    
    case "PURCHASE_ITEMS":
      localStorage.setItem(
        "PurchaseItems",
        JSON.stringify({...state, ...action })
      );

      return {...state, ...action };
   
    default:
      return state;
  }
};
