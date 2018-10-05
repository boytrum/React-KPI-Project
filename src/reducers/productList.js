import {
    LIST_ALL_PRODUCT
  } from '../constants/actionTypes';

  export default (state =[], action)=>{
      switch (action.type) {
          case LIST_ALL_PRODUCT:
          return {
            ...state,
          }
            
          default:
              return state;
      }
  }