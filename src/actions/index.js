export const ADD_ITEM = "ADD_ITEM"; // Action type
export const REMOVE_ITEM = "REMOVE_ITEM"; // Can help prevent bugs caused by spelling errors (...?)

// Action Creator:
export const addItem = item => {
  return {
    // Action Created:
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

// I named these differently from the functions used in App.js (etc.)
// to make them more generic. "Feature" and "buy" seemed too specific.
