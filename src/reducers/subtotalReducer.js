const subtotalReducer = (
  state = { data: { sub: 0, totalPrice: 0 } },
  action
) => {

  switch (action.type) {
    case "SUBTOTAL":
      return action;
    default:
      return state;
  }
};

export default subtotalReducer;
