export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, product];
    case "REMOVE_PRODUCT":
      return state.filter((item) => {
        item !== itemToRemove;
      });
    default:
      return state;
  }
};
