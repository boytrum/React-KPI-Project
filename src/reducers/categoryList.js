import {
    LIST_ALL_CATEGORY
} from '../constants/actionTypes';
var initialState = []
export default (state = [], action) => {
    switch (action.type) {
        case LIST_ALL_CATEGORY:
        console.log("reducer -> action",action)
            return { //return cho store
                ...state,
                CategoryList: action.CategoryList,
            }

        default:
            return state;
    }
}