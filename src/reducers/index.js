import { ADD_ITEM, REMOVE_ITEM } from "../actions"; // Get the Actions to use in Reducer

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload] // copies old array, creates new and improved array - maintains immutability
        },
        additionalPrice: (state.additionalPrice += action.payload.price)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(item => {
              if (item.id !== action.payload.id) {
                return item;
              }
              // return state; // removing this throws a warning, adding this breaks the functionality
            })
          ]
        },
        additionalPrice: (state.additionalPrice -= action.payload.price)
      };
    default:
      return state;
  }
};
