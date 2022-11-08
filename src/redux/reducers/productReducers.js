import { productTypes } from "../types/userTypes";

export const productReducers = (state = [], action) => {
    switch (action.type) {
      case productTypes.GET_PRODUCT:
        return [
            ...action.payload
        ]
  
      case productTypes.CREATE_PRODUCT:
        return [
            ...state, 
            action.payload
        ]
      default:
        return state;
    }
  };
  